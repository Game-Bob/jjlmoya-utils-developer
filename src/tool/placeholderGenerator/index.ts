export * from './entry';
export const PLACEHOLDER_GENERATOR_TOOL: ToolDefinition = {
  entry: placeholderGenerator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
