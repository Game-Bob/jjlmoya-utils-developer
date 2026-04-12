import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import CssSpecificityCalculatorComponent from './component.astro';
import CssSpecificityCalculatorSEO from './seo.astro';
import CssSpecificityCalculatorBibliography from './bibliography.astro';

import type { CssSpecificityCalculatorUI } from './ui';

export type CssSpecificityCalculatorLocaleContent = ToolLocaleContent<CssSpecificityCalculatorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const cssSpecificityCalculator: DeveloperToolEntry<CssSpecificityCalculatorUI> = {
  id: 'css-specificity-calculator',
  icons: {
    bg: 'mdi:scale-balance',
    fg: 'mdi:language-css3',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { CssSpecificityCalculatorComponent, CssSpecificityCalculatorSEO, CssSpecificityCalculatorBibliography };

export const CSS_SPECIFICITY_CALCULATOR_TOOL: ToolDefinition = {
  entry: cssSpecificityCalculator,
  Component: CssSpecificityCalculatorComponent,
  SEOComponent: CssSpecificityCalculatorSEO,
  BibliographyComponent: CssSpecificityCalculatorBibliography,
};
