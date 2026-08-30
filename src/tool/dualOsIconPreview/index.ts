import type { ToolDefinition } from '../../types';
import { dualOsIconPreview } from './entry';

export * from './entry';

export const DUAL_OS_ICON_PREVIEW_TOOL: ToolDefinition = {
  entry: dualOsIconPreview,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
