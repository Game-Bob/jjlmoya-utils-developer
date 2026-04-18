import { hashGenerator } from './entry';
export * from './entry';
export const HASH_GENERATOR_TOOL: ToolDefinition = {
  entry: hashGenerator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
