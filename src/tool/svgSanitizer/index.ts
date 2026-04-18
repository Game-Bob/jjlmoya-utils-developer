import { svgSanitizer } from './entry';
export * from './entry';
export const SVG_SANITIZER_TOOL: ToolDefinition = {
  entry: svgSanitizer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
