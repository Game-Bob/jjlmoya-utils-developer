import { musicalTypography } from './entry';
export * from './entry';
export const MUSICAL_TYPOGRAPHY_TOOL: ToolDefinition = {
  entry: musicalTypography,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
