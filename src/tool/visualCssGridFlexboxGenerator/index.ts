import type { ToolDefinition } from '../../types';
import { visualCssGridFlexboxGenerator } from './entry';

export * from './entry';

export const VISUAL_CSS_GRID_FLEXBOX_GENERATOR_TOOL: ToolDefinition = {
  entry: visualCssGridFlexboxGenerator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
