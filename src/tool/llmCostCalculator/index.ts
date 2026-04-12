import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import LlmCostCalculatorComponent from './component.astro';
import LlmCostCalculatorSEO from './seo.astro';
import LlmCostCalculatorBibliography from './bibliography.astro';

import type { LlmCostCalculatorUI } from './ui';

export type LlmCostCalculatorLocaleContent = ToolLocaleContent<LlmCostCalculatorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const llmCostCalculator: DeveloperToolEntry<LlmCostCalculatorUI> = {
  id: 'llm-cost-calculator',
  icons: {
    bg: 'mdi:currency-usd',
    fg: 'mdi:robot-outline',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { LlmCostCalculatorComponent, LlmCostCalculatorSEO, LlmCostCalculatorBibliography };

export const LLM_COST_CALCULATOR_TOOL: ToolDefinition = {
  entry: llmCostCalculator,
  Component: LlmCostCalculatorComponent,
  SEOComponent: LlmCostCalculatorSEO,
  BibliographyComponent: LlmCostCalculatorBibliography,
};
