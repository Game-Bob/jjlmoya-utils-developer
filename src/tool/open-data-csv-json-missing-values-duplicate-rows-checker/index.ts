import type { ToolDefinition } from '../../types';
import { openDataCsvJsonMissingValuesDuplicateRowsChecker } from './entry';

export * from './entry';
export * from './logic';

export const OPEN_DATA_CSV_JSON_MISSING_VALUES_DUPLICATE_ROWS_CHECKER_TOOL: ToolDefinition = {
  entry: openDataCsvJsonMissingValuesDuplicateRowsChecker,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
