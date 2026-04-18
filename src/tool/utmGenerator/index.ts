import { utmGenerator } from './entry';
export * from './entry';
export const UTM_GENERATOR_TOOL: ToolDefinition = {
  entry: utmGenerator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
