export * from './entry';
export const CONVERSOR_EXCEL_CSV_HTML_TOOL: ToolDefinition = {
  entry: conversorExcelCsvHtml,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
