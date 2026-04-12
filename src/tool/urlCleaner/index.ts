import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import UrlCleanerComponent from './component.astro';
import UrlCleanerSEO from './seo.astro';
import UrlCleanerBibliography from './bibliography.astro';
import type { UrlCleanerUI } from './ui';

export type UrlCleanerLocaleContent = ToolLocaleContent<UrlCleanerUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const urlCleaner: DeveloperToolEntry<UrlCleanerUI> = {
  id: 'url-cleaner',
  icons: {
    bg: 'mdi:link-variant-off',
    fg: 'mdi:broom',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { UrlCleanerComponent, UrlCleanerSEO, UrlCleanerBibliography };

export const URL_CLEANER_TOOL: ToolDefinition = {
  entry: urlCleaner,
  Component: UrlCleanerComponent,
  SEOComponent: UrlCleanerSEO,
  BibliographyComponent: UrlCleanerBibliography,
};
