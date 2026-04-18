export * from './entry';
export const READABILITY_CALCULATOR_TOOL: ToolDefinition = {
  entry: readabilityCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
