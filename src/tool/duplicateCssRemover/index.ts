import { duplicateCssRemover } from './entry';
export * from './entry';
export const DUPLICATE_CSS_REMOVER_TOOL: ToolDefinition = {
  entry: duplicateCssRemover,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
