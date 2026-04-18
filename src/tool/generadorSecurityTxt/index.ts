import { generadorSecurityTxt } from './entry';
export * from './entry';
export const GENERADOR_SECURITY_TXT_TOOL: ToolDefinition = {
  entry: generadorSecurityTxt,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
