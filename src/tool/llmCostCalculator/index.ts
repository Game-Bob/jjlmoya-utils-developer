import { llmCostCalculator } from './entry';
export * from './entry';
export const LLM_COST_CALCULATOR_TOOL: ToolDefinition = {
  entry: llmCostCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
