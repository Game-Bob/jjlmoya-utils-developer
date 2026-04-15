import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import UrlCleanerComponent from './component.astro';
import UrlCleanerSEO from './seo.astro';
import UrlCleanerBibliography from './bibliography.astro';
import type { UrlCleanerUI } from './ui';

export type UrlCleanerLocaleContent = ToolLocaleContent<UrlCleanerUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';
import { content as de } from './i18n/de';
import { content as id } from './i18n/id';
import { content as it } from './i18n/it';
import { content as ja } from './i18n/ja';
import { content as ko } from './i18n/ko';
import { content as nl } from './i18n/nl';
import { content as pl } from './i18n/pl';
import { content as pt } from './i18n/pt';
import { content as ru } from './i18n/ru';
import { content as sv } from './i18n/sv';
import { content as tr } from './i18n/tr';
import { content as zh } from './i18n/zh';

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
    de: async () => de,
    id: async () => id,
    it: async () => it,
    ja: async () => ja,
    ko: async () => ko,
    nl: async () => nl,
    pl: async () => pl,
    pt: async () => pt,
    ru: async () => ru,
    sv: async () => sv,
    tr: async () => tr,
    zh: async () => zh,
  },
};

export { UrlCleanerComponent, UrlCleanerSEO, UrlCleanerBibliography };

export const URL_CLEANER_TOOL: ToolDefinition = {
  entry: urlCleaner,
  Component: UrlCleanerComponent,
  SEOComponent: UrlCleanerSEO,
  BibliographyComponent: UrlCleanerBibliography,
};
