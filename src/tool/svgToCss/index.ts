export * from './entry';
export const SVG_TO_CSS_TOOL: ToolDefinition = {
  entry: svgToCss,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
