import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import UtmGeneratorComponent from './component.astro';
import UtmGeneratorSEO from './seo.astro';
import UtmGeneratorBibliography from './bibliography.astro';
import type { UtmGeneratorUI } from './ui';

export type UtmGeneratorLocaleContent = ToolLocaleContent<UtmGeneratorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const utmGenerator: DeveloperToolEntry<UtmGeneratorUI> = {
  id: 'utm-generator',
  icons: {
    bg: 'mdi:link-variant',
    fg: 'mdi:tag-multiple',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { UtmGeneratorComponent, UtmGeneratorSEO, UtmGeneratorBibliography };

export const UTM_GENERATOR_TOOL: ToolDefinition = {
  entry: utmGenerator,
  Component: UtmGeneratorComponent,
  SEOComponent: UtmGeneratorSEO,
  BibliographyComponent: UtmGeneratorBibliography,
};
