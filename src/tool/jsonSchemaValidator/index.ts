import type { ToolDefinition } from '../../types';
import { jsonSchemaValidator } from './entry';

export * from './entry';

export const JSON_SCHEMA_VALIDATOR_TOOL: ToolDefinition = {
  entry: jsonSchemaValidator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
