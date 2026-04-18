export * from './entry';
export const COLOR_CONVERTER_TOOL: ToolDefinition = {
  entry: colorConverter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
