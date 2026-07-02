import type { ToolDefinition } from '../../types';
import { jwtDecoder } from './entry';

export * from './entry';

export const JWT_DECODER_TOOL: ToolDefinition = {
  entry: jwtDecoder,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
