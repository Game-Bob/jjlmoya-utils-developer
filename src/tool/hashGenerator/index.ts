import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import HashGeneratorComponent from './component.astro';
import HashGeneratorSEO from './seo.astro';
import HashGeneratorBibliography from './bibliography.astro';
import type { HashGeneratorUI } from './ui';

export type HashGeneratorLocaleContent = ToolLocaleContent<HashGeneratorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const hashGenerator: DeveloperToolEntry<HashGeneratorUI> = {
  id: 'hash-generator',
  icons: {
    bg: 'mdi:shield-lock',
    fg: 'mdi:pound',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { HashGeneratorComponent, HashGeneratorSEO, HashGeneratorBibliography };

export const HASH_GENERATOR_TOOL: ToolDefinition = {
  entry: hashGenerator,
  Component: HashGeneratorComponent,
  SEOComponent: HashGeneratorSEO,
  BibliographyComponent: HashGeneratorBibliography,
};
