export type TabularRow = Record<string, unknown>;
export type CellKind = 'missing' | 'null' | 'blank' | 'number' | 'string' | 'boolean' | 'date';

export interface NumericSummary {
  count: number;
  min: number;
  max: number;
  mean: number;
  median: number;
  q1: number;
  q3: number;
  iqr: number;
  outlierRows: number[];
}

export interface ColumnProfile {
  name: string;
  missing: number;
  nulls: number;
  blanks: number;
  zeros: number;
  unique: number;
  kinds: Record<CellKind, number>;
  inferredType: CellKind | 'mixed' | 'empty';
  numeric: NumericSummary | null;
  parseFailures: number;
}

export interface DuplicateGroup {
  rows: number[];
  count: number;
}

export interface ParseWarning {
  code: string;
  message: string;
  rows: number[];
}

export interface ParsedTable {
  rows: TabularRow[];
  columns: string[];
  warnings: ParseWarning[];
  format: 'csv' | 'json';
}

export interface DataProfile {
  rows: number;
  columns: number;
  columnProfiles: ColumnProfile[];
  duplicateGroups: DuplicateGroup[];
  duplicateRows: number;
  outlierCells: number;
  warnings: ParseWarning[];
  format: 'csv' | 'json';
  sourceName: string;
  sourceText: string;
  sourceRows: TabularRow[];
}
