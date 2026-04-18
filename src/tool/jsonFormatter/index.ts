import { jsonFormatter } from './entry';
export * from './entry';
export const JSON_FORMATTER_TOOL: ToolDefinition = {
  entry: jsonFormatter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
