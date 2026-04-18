import { urlCleaner } from './entry';
export * from './entry';
export const URL_CLEANER_TOOL: ToolDefinition = {
  entry: urlCleaner,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
