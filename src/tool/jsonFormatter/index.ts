import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import JsonFormatterComponent from './component.astro';
import JsonFormatterSEO from './seo.astro';
import JsonFormatterBibliography from './bibliography.astro';

import type { JsonFormatterUI } from './ui';

export type JsonFormatterLocaleContent = ToolLocaleContent<JsonFormatterUI>;

export const jsonFormatter: DeveloperToolEntry<JsonFormatterUI> = {
  id: 'json-formatter',
  icons: {
    bg: 'mdi:code-json',
    fg: 'mdi:code-braces',
  },
  i18n: {
    de: async () => (await import('./i18n/de')).content,
    en: async () => (await import('./i18n/en')).content,
    es: async () => (await import('./i18n/es')).content,
    fr: async () => (await import('./i18n/fr')).content,
    id: async () => (await import('./i18n/id')).content,
    it: async () => (await import('./i18n/it')).content,
    ja: async () => (await import('./i18n/ja')).content,
    ko: async () => (await import('./i18n/ko')).content,
    nl: async () => (await import('./i18n/nl')).content,
    pl: async () => (await import('./i18n/pl')).content,
    pt: async () => (await import('./i18n/pt')).content,
    ru: async () => (await import('./i18n/ru')).content,
    sv: async () => (await import('./i18n/sv')).content,
    tr: async () => (await import('./i18n/tr')).content,
    zh: async () => (await import('./i18n/zh')).content,
  },
};

export { JsonFormatterComponent, JsonFormatterSEO, JsonFormatterBibliography };

export const JSON_FORMATTER_TOOL: ToolDefinition = {
  entry: jsonFormatter,
  Component: JsonFormatterComponent,
  SEOComponent: JsonFormatterSEO,
  BibliographyComponent: JsonFormatterBibliography,
};
