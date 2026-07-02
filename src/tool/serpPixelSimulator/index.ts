import type { ToolDefinition } from '../../types';
import type { ToolDefinition } from '../../types';
import { serpPixelSimulator } from './entry';

export * from './entry';

export const SERP_PIXEL_SIMULATOR_TOOL: ToolDefinition = {
  entry: serpPixelSimulator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
