import { inspectorCertificadosSsl } from './entry';
export * from './entry';
export const INSPECTOR_CERTIFICADOS_SSL_TOOL: ToolDefinition = {
  entry: inspectorCertificadosSsl,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
