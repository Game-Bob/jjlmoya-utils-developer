export * from './entry';
export const CRON_GENERATOR_TOOL: ToolDefinition = {
  entry: cronGenerator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
