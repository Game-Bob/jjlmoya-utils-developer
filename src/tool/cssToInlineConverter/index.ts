import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import CssToInlineConverterComponent from './component.astro';
import CssToInlineConverterSEO from './seo.astro';
import CssToInlineConverterBibliography from './bibliography.astro';

import type { CssToInlineConverterUI } from './ui';

export type CssToInlineConverterLocaleContent = ToolLocaleContent<CssToInlineConverterUI>;

export const cssToInlineConverter: DeveloperToolEntry<CssToInlineConverterUI> = {
  id: 'css-to-inline-converter',
  icons: {
    bg: 'mdi:email-outline',
    fg: 'mdi:language-css3',
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

export { CssToInlineConverterComponent, CssToInlineConverterSEO, CssToInlineConverterBibliography };

export const CSS_TO_INLINE_CONVERTER_TOOL: ToolDefinition = {
  entry: cssToInlineConverter,
  Component: CssToInlineConverterComponent,
  SEOComponent: CssToInlineConverterSEO,
  BibliographyComponent: CssToInlineConverterBibliography,
};
