import type { ToolDefinition } from '../../types';
import { promoteThisWebsite } from './entry';

export * from './entry';

export const PROMOTE_THIS_WEBSITE_TOOL: ToolDefinition = {
  entry: promoteThisWebsite,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
