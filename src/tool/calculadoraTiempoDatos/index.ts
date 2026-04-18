import { calculadoraTiempoDatos } from './entry';
export * from './entry';
export const CALCULADORA_TIEMPO_DATOS_TOOL: ToolDefinition = {
  entry: calculadoraTiempoDatos,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
