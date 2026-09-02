import type { CellKind, ColumnProfile, NumericSummary, TabularRow } from './types';

const EMPTY_KINDS: Record<CellKind, number> = {
  missing: 0,
  null: 0,
  blank: 0,
  number: 0,
  string: 0,
  boolean: 0,
  date: 0,
};

const NUMBER_PATTERN = /^[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?$/;

const classifyString = (value: string): CellKind => {
  const trimmed = value.trim();
  if (!trimmed) return 'blank';
  if (/^\d{4}-\d{2}-\d{2}(?:[T ]\d{2}:\d{2}(?::\d{2})?)?$/.test(trimmed) && !Number.isNaN(Date.parse(trimmed))) return 'date';
  return NUMBER_PATTERN.test(trimmed) ? 'number' : 'string';
};

export const classifyValue = (value: unknown): CellKind => {
  if (value === undefined) return 'missing';
  if (value === null) return 'null';
  if (typeof value === 'number' && Number.isFinite(value)) return 'number';
  if (typeof value === 'boolean') return 'boolean';
  return typeof value === 'string' ? classifyString(value) : 'string';
};

export const numericValue = (value: unknown): number | null => {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value !== 'string' || !value.trim() || !NUMBER_PATTERN.test(value.trim())) return null;
  const parsed = Number(value.trim());
  return Number.isFinite(parsed) ? parsed : null;
};

const quantile = (values: number[], fraction: number): number => {
  const sorted = [...values].sort((a, b) => a - b);
  if (sorted.length === 0) return 0;
  const position = (sorted.length - 1) * fraction;
  const lower = Math.floor(position);
  const upper = Math.ceil(position);
  if (lower === upper) return sorted[lower] ?? 0;
  const weight = position - lower;
  return (sorted[lower] ?? 0) * (1 - weight) + (sorted[upper] ?? 0) * weight;
};

const outlierRows = (values: Array<{ row: number; value: number }>, q1: number, q3: number, iqr: number): number[] => {
  if (iqr === 0) return [];
  const low = q1 - 1.5 * iqr;
  const high = q3 + 1.5 * iqr;
  return values.filter(({ value }) => value < low || value > high).map(({ row }) => row);
};

const summarizeNumbers = (values: Array<{ row: number; value: number }>): NumericSummary | null => {
  if (values.length === 0) return null;
  const numbers = values.map(({ value }) => value);
  const q1 = quantile(numbers, 0.25);
  const q3 = quantile(numbers, 0.75);
  const iqr = q3 - q1;
  return { count: numbers.length, min: Math.min(...numbers), max: Math.max(...numbers), mean: numbers.reduce((sum, value) => sum + value, 0) / numbers.length, median: quantile(numbers, 0.5), q1, q3, iqr, outlierRows: outlierRows(values, q1, q3, iqr) };
};

const stableValue = (value: unknown): string => {
  if (value === undefined) return '<missing>';
  if (value === null) return '<null>';
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
};

export const rowSignature = (row: TabularRow, columns: string[]): string => JSON.stringify(columns.map((column) => stableValue(row[column])));

const inferType = (kinds: Record<CellKind, number>): ColumnProfile['inferredType'] => {
  const present = (Object.entries(kinds) as Array<[CellKind, number]>).filter(([kind, count]) => !['missing', 'null', 'blank'].includes(kind) && count > 0).map(([kind]) => kind);
  if (present.length === 0) return 'empty';
  return present.length === 1 ? present[0] ?? 'empty' : 'mixed';
};

const collectColumn = (name: string, rows: TabularRow[]): { kinds: Record<CellKind, number>; unique: Set<string>; numbers: Array<{ row: number; value: number }> } => {
  const kinds = { ...EMPTY_KINDS };
  const unique = new Set<string>();
  const numbers: Array<{ row: number; value: number }> = [];
  rows.forEach((row, index) => {
    const value = row[name];
    kinds[classifyValue(value)] += 1;
    unique.add(stableValue(value));
    const number = numericValue(value);
    if (number !== null) numbers.push({ row: index + 1, value: number });
  });
  return { kinds, unique, numbers };
};

const parseFailures = (name: string, rows: TabularRow[], inferredType: ColumnProfile['inferredType']): number => {
  if (inferredType !== 'number') return 0;
  return rows.filter((row) => {
    const value = row[name];
    return value !== undefined && value !== null && value !== '' && numericValue(value) === null;
  }).length;
};

export const profileColumn = (name: string, rows: TabularRow[]): ColumnProfile => {
  const collected = collectColumn(name, rows);
  const inferredType = inferType(collected.kinds);
  return {
    name,
    missing: collected.kinds.missing,
    nulls: collected.kinds.null,
    blanks: collected.kinds.blank,
    zeros: collected.numbers.filter(({ value }) => value === 0).length,
    unique: collected.unique.size,
    kinds: collected.kinds,
    inferredType,
    numeric: summarizeNumbers(collected.numbers),
    parseFailures: parseFailures(name, rows, inferredType),
  };
};
