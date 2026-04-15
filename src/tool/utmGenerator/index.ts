import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import UtmGeneratorComponent from './component.astro';
import UtmGeneratorSEO from './seo.astro';
import UtmGeneratorBibliography from './bibliography.astro';
import type { UtmGeneratorUI } from './ui';

export type UtmGeneratorLocaleContent = ToolLocaleContent<UtmGeneratorUI>;

export const utmGenerator: DeveloperToolEntry<UtmGeneratorUI> = {
  id: 'utm-generator',
  icons: {
    bg: 'mdi:link-variant',
    fg: 'mdi:tag-multiple',
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

export { UtmGeneratorComponent, UtmGeneratorSEO, UtmGeneratorBibliography };

export const UTM_GENERATOR_TOOL: ToolDefinition = {
  entry: utmGenerator,
  Component: UtmGeneratorComponent,
  SEOComponent: UtmGeneratorSEO,
  BibliographyComponent: UtmGeneratorBibliography,
};
