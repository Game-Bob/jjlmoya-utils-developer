import { duplicateGroupsForRows, columnsForRows, parseCsv, parseJson, parseTabularText } from './parsers';
import { classifyValue, numericValue, profileColumn } from './metrics';
import type { DataProfile, ParsedTable, ParseWarning } from './types';

export * from './types';
export { parseCsv, parseJson, parseTabularText };

interface WarningInputs {
  parsed: ParsedTable;
  columns: string[];
  columnProfiles: DataProfile['columnProfiles'];
  duplicateGroups: DataProfile['duplicateGroups'];
  outlierCells: number;
}

const rowMatchesWarning = (value: unknown, code: string): boolean => {
  const kind = classifyValue(value);
  if (code === 'incomplete-column') return ['missing', 'null', 'blank'].includes(kind);
  if (code === 'parse-failure') return kind !== 'missing' && kind !== 'null' && kind !== 'blank' && numericValue(value) === null;
  return kind !== 'missing' && kind !== 'null' && kind !== 'blank';
};

const warningRowsForColumn = (column: DataProfile['columnProfiles'][number], rows: DataProfile['sourceRows'], code: string): number[] => rows.flatMap((row, index) => {
  return rowMatchesWarning(row[column.name], code) ? [index + 1] : [];
});

const profileWarnings = ({ parsed, columns, columnProfiles, duplicateGroups, outlierCells }: WarningInputs): ParseWarning[] => {
  const warnings = [...parsed.warnings];
  if (parsed.rows.length === 0) warnings.push({ code: 'empty-data', message: 'No data rows were found after parsing.', rows: [] });
  if (columns.length === 0) warnings.push({ code: 'empty-schema', message: 'No columns were found.', rows: [] });
  columnProfiles.forEach((column) => {
    if (column.inferredType === 'mixed') warnings.push({ code: 'mixed-type', message: `Column ${column.name} contains mixed value types.`, rows: warningRowsForColumn(column, parsed.rows, 'mixed-type') });
    if (column.parseFailures > 0) warnings.push({ code: 'parse-failure', message: `Column ${column.name} has values that do not parse as numbers.`, rows: warningRowsForColumn(column, parsed.rows, 'parse-failure') });
    if (column.missing + column.nulls + column.blanks > 0) warnings.push({ code: 'incomplete-column', message: `Column ${column.name} contains missing, null, or blank values.`, rows: warningRowsForColumn(column, parsed.rows, 'incomplete-column') });
  });
  if (duplicateGroups.length > 0) warnings.push({ code: 'duplicate-rows', message: `${duplicateGroups.length} duplicate row group(s) were found.`, rows: duplicateGroups.flatMap((group) => group.rows) });
  if (outlierCells > 0) warnings.push({ code: 'outliers', message: `${outlierCells} numeric value(s) fall outside Tukey's 1.5 IQR fences.`, rows: columnProfiles.flatMap((column) => column.numeric?.outlierRows ?? []) });
  return warnings;
};

export const profileRows = (parsed: ParsedTable, sourceName: string, sourceText: string): DataProfile => {
  const columns = parsed.columns.length > 0 ? parsed.columns : columnsForRows(parsed.rows);
  const columnProfiles = columns.map((name) => profileColumn(name, parsed.rows));
  const duplicateGroups = duplicateGroupsForRows(parsed.rows, columns);
  const outlierCells = columnProfiles.reduce((sum, column) => sum + (column.numeric?.outlierRows.length ?? 0), 0);
  return {
    rows: parsed.rows.length,
    columns: columns.length,
    columnProfiles,
    duplicateGroups,
    duplicateRows: duplicateGroups.reduce((sum, group) => sum + group.count, 0),
    outlierCells,
    warnings: profileWarnings({ parsed, columns, columnProfiles, duplicateGroups, outlierCells }),
    format: parsed.format,
    sourceName,
    sourceText,
    sourceRows: parsed.rows,
  };
};

export const escapeMarkdown = (value: string): string => value.replace(/\\/g, '\\\\').replace(/([|*_`])/g, '\\$1').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const columnMarkdown = (profile: DataProfile): string[] => profile.columnProfiles.map((column) => `| ${escapeMarkdown(column.name)} | ${column.inferredType} | ${column.missing} | ${column.nulls} | ${column.blanks} | ${column.unique} | ${column.numeric?.outlierRows.length ?? 0} |`);

export const formatProfileMarkdown = (profile: DataProfile): string => [
  '# Open data quality review', '', '## User-provided facts',
  `- Source: ${escapeMarkdown(profile.sourceName)}`, `- Format: ${profile.format.toUpperCase()}`, `- Rows: ${profile.rows}`, `- Columns: ${profile.columns}`, '',
  '| Column | Type | Missing | Null | Blank | Unique | Outliers |', '| --- | --- | ---: | ---: | ---: | ---: | ---: |', ...columnMarkdown(profile), '',
  '## Guidance to review', '- Confirm whether missing, null, and blank values are expected for each field.', '- Investigate duplicate rows before deduplicating because repeated records may be valid events.', '- Treat mixed types and IQR outliers as review signals, not automatic errors.', '- Keep the source file, row numbers, and context beside this review before reusing the dataset.', '',
  'This profile is descriptive. It does not prove semantic correctness, provenance, openness, absence of bias, or fitness for a particular use.',
].join('\n');

export const exampleCsv = 'id,region,amount,recorded_on\nA-01,North,1200,2026-01-15\nA-02,North,1180,2026-01-16\nA-03,South,,2026-01-17\nA-03,South,,2026-01-17\nA-04,West,980,not-a-date\nA-05,West,45000,2026-01-20';
