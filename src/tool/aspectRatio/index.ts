export * from './entry';
export const ASPECT_RATIO_TOOL: ToolDefinition = {
  entry: aspectRatio,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
