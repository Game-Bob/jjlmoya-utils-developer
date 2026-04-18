import { cssToInlineConverter } from './entry';
export * from './entry';
export const CSS_TO_INLINE_CONVERTER_TOOL: ToolDefinition = {
  entry: cssToInlineConverter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
