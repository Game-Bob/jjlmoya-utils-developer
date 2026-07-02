import type { ToolDefinition } from '../../types';
import { cssBoxShadowGenerator } from './entry';
export * from './entry';
export const CSS_BOX_SHADOW_GENERATOR_TOOL: ToolDefinition = {
  entry: cssBoxShadowGenerator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
