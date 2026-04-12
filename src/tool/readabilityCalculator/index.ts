import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import ReadabilityCalculatorComponent from './component.astro';
import ReadabilityCalculatorSEO from './seo.astro';
import ReadabilityCalculatorBibliography from './bibliography.astro';
import type { ReadabilityCalculatorUI } from './ui';

export type ReadabilityCalculatorLocaleContent = ToolLocaleContent<ReadabilityCalculatorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const readabilityCalculator: DeveloperToolEntry<ReadabilityCalculatorUI> = {
  id: 'readability-calculator',
  icons: {
    bg: 'mdi:eye-check',
    fg: 'mdi:contrast-circle',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { ReadabilityCalculatorComponent, ReadabilityCalculatorSEO, ReadabilityCalculatorBibliography };

export const READABILITY_CALCULATOR_TOOL: ToolDefinition = {
  entry: readabilityCalculator,
  Component: ReadabilityCalculatorComponent,
  SEOComponent: ReadabilityCalculatorSEO,
  BibliographyComponent: ReadabilityCalculatorBibliography,
};
