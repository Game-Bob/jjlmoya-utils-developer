export * from './entry';
export const MOBILE_MOCKUP_GENERATOR_TOOL: ToolDefinition = {
  entry: mobileMockupGenerator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
