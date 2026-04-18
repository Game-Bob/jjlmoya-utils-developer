export * from './entry';
export const PROMPT_LIBRARY_TOOL: ToolDefinition = {
  entry: promptLibrary,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
