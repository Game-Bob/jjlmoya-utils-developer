import type { ParsedTable, ParseWarning, TabularRow } from './types';
import { rowSignature } from './metrics';

export const columnsForRows = (rows: TabularRow[]): string[] => {
  const columns: string[] = [];
  const seen = new Set<string>();
  rows.forEach((row) => Object.keys(row).forEach((key) => {
    if (seen.has(key)) return;
    seen.add(key);
    columns.push(key);
  }));
  return columns;
};

const addCsvField = (row: string[], current: string): void => { void row.push(current); };

interface CsvState {
  rows: string[][];
  row: string[];
  current: string;
  quoted: boolean;
}

const consumeQuoted = (state: CsvState, character: string, next: string | undefined): boolean => {
  if (character === '"' && next === '"') {
    state.current += '"';
    return true;
  }
  if (character === '"') state.quoted = false;
  else state.current += character;
  return false;
};

const consumeUnquoted = (state: CsvState, character: string, next: string | undefined): boolean => {
  if (character === '"') {
    state.quoted = true;
    return false;
  }
  if (character === ',') {
    addCsvField(state.row, state.current);
    state.current = '';
    return false;
  }
  if (character !== '\n' && character !== '\r') {
    state.current += character;
    return false;
  }
  addCsvField(state.row, state.current);
  state.rows.push(state.row);
  state.row = [];
  state.current = '';
  return character === '\r' && next === '\n';
};

const readCsvRows = (source: string): { rows: string[][]; quoted: boolean } => {
  const state: CsvState = { rows: [], row: [], current: '', quoted: false };
  for (let index = 0; index < source.length; index += 1) {
    const skipNext = state.quoted
      ? consumeQuoted(state, source[index] ?? '', source[index + 1])
      : consumeUnquoted(state, source[index] ?? '', source[index + 1]);
    if (skipNext) index += 1;
  }
  if (state.current || state.row.length > 0) {
    addCsvField(state.row, state.current);
    state.rows.push(state.row);
  }
  return { rows: state.rows, quoted: state.quoted };
};

const rowIsNotEmpty = (values: string[]): boolean => values.some((value) => value.trim() !== '');

const csvRecord = (headers: string[], values: string[], index: number, warnings: ParseWarning[]): TabularRow => {
  if (values.length !== headers.length) warnings.push({ code: 'column-count', message: `Row ${index + 2} has ${values.length} fields; the header has ${headers.length}.`, rows: [index + 2] });
  return headers.reduce<TabularRow>((record, header, columnIndex) => {
    record[header] = values[columnIndex];
    return record;
  }, {});
};

export const parseCsv = (source: string): ParsedTable => {
  const read = readCsvRows(source);
  const nonEmptyRows = read.rows.filter(rowIsNotEmpty);
  const headers = (nonEmptyRows.shift() ?? []).map((header, index) => header.trim() || `column_${index + 1}`);
  const warnings: ParseWarning[] = read.quoted ? [{ code: 'unclosed-quote', message: 'The CSV ended while a quoted field was still open.', rows: [] }] : [];
  const rows = nonEmptyRows.map((values, index) => csvRecord(headers, values, index, warnings));
  return { rows, columns: headers, warnings, format: 'csv' };
};

const jsonRows = (value: unknown): unknown[] => {
  if (Array.isArray(value)) return value;
  if (!value || typeof value !== 'object') return [];
  const record = value as Record<string, unknown>;
  return ['data', 'rows', 'records'].map((key) => record[key]).find(Array.isArray) as unknown[] ?? [];
};

export const parseJson = (source: string): ParsedTable => {
  let parsed: unknown;
  try {
    parsed = JSON.parse(source);
  } catch {
    return { rows: [], columns: [], warnings: [{ code: 'invalid-json', message: 'The JSON could not be parsed.', rows: [] }], format: 'json' };
  }
  const warnings: ParseWarning[] = [];
  const rows = jsonRows(parsed).map((value, index) => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
      warnings.push({ code: 'non-object-row', message: `JSON row ${index + 1} is not an object.`, rows: [index + 1] });
      return { value };
    }
    return value as TabularRow;
  });
  return { rows, columns: columnsForRows(rows), warnings, format: 'json' };
};

export const parseTabularText = (source: string, format: 'csv' | 'json'): ParsedTable => format === 'json' ? parseJson(source) : parseCsv(source);

export const duplicateGroupsForRows = (rows: TabularRow[], columns: string[]): { rows: number[]; count: number }[] => {
  const groups = new Map<string, number[]>();
  rows.forEach((row, index) => {
    const signature = rowSignature(row, columns);
    groups.set(signature, [...(groups.get(signature) ?? []), index + 1]);
  });
  return Array.from(groups.values()).filter((rowNumbers) => rowNumbers.length > 1).map((rowNumbers) => ({ rows: rowNumbers, count: rowNumbers.length }));
};
