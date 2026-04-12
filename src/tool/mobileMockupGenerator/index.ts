import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import MobileMockupGeneratorComponent from './component.astro';
import MobileMockupGeneratorSEO from './seo.astro';
import MobileMockupGeneratorBibliography from './bibliography.astro';
import type { MobileMockupGeneratorUI } from './ui';

export type MobileMockupGeneratorLocaleContent = ToolLocaleContent<MobileMockupGeneratorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const mobileMockupGenerator: DeveloperToolEntry<MobileMockupGeneratorUI> = {
  id: 'mobile-mockup-generator',
  icons: {
    bg: 'mdi:cellphone',
    fg: 'mdi:image-frame',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { MobileMockupGeneratorComponent, MobileMockupGeneratorSEO, MobileMockupGeneratorBibliography };

export const MOBILE_MOCKUP_GENERATOR_TOOL: ToolDefinition = {
  entry: mobileMockupGenerator,
  Component: MobileMockupGeneratorComponent,
  SEOComponent: MobileMockupGeneratorSEO,
  BibliographyComponent: MobileMockupGeneratorBibliography,
};
