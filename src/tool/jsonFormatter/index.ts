import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import JsonFormatterComponent from './component.astro';
import JsonFormatterSEO from './seo.astro';
import JsonFormatterBibliography from './bibliography.astro';

import type { JsonFormatterUI } from './ui';

export type JsonFormatterLocaleContent = ToolLocaleContent<JsonFormatterUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const jsonFormatter: DeveloperToolEntry<JsonFormatterUI> = {
  id: 'json-formatter',
  icons: {
    bg: 'mdi:code-json',
    fg: 'mdi:code-braces',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { JsonFormatterComponent, JsonFormatterSEO, JsonFormatterBibliography };

export const JSON_FORMATTER_TOOL: ToolDefinition = {
  entry: jsonFormatter,
  Component: JsonFormatterComponent,
  SEOComponent: JsonFormatterSEO,
  BibliographyComponent: JsonFormatterBibliography,
};
