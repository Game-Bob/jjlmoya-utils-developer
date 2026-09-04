import type { ToolDefinition } from '../../types';
import { keycode } from './entry';
export * from './entry';
export const KEYCODE_TOOL: ToolDefinition = {
  entry: keycode,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
