import type { ToolDefinition } from '../../types';
import { cssSpecificityCalculator } from './entry';
export * from './entry';
export const CSS_SPECIFICITY_CALCULATOR_TOOL: ToolDefinition = {
  entry: cssSpecificityCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
