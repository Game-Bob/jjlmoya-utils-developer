import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import PlaceholderGeneratorComponent from './component.astro';
import PlaceholderGeneratorSEO from './seo.astro';
import PlaceholderGeneratorBibliography from './bibliography.astro';

import type { PlaceholderGeneratorUI } from './ui';

export type PlaceholderGeneratorLocaleContent = ToolLocaleContent<PlaceholderGeneratorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const placeholderGenerator: DeveloperToolEntry<PlaceholderGeneratorUI> = {
  id: 'placeholder-generator',
  icons: {
    bg: 'mdi:image-outline',
    fg: 'mdi:image-size-select-actual',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { PlaceholderGeneratorComponent, PlaceholderGeneratorSEO, PlaceholderGeneratorBibliography };

export const PLACEHOLDER_GENERATOR_TOOL: ToolDefinition = {
  entry: placeholderGenerator,
  Component: PlaceholderGeneratorComponent,
  SEOComponent: PlaceholderGeneratorSEO,
  BibliographyComponent: PlaceholderGeneratorBibliography,
};
