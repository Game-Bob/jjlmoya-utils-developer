import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import SvgToCssComponent from './component.astro';
import SvgToCssSEO from './seo.astro';
import SvgToCssBibliography from './bibliography.astro';

import type { SvgToCssUI } from './ui';

export type SvgToCssLocaleContent = ToolLocaleContent<SvgToCssUI>;

export const svgToCss: DeveloperToolEntry<SvgToCssUI> = {
  id: 'svg-to-css',
  icons: {
    bg: 'mdi:svg',
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

export { SvgToCssComponent, SvgToCssSEO, SvgToCssBibliography };

export const SVG_TO_CSS_TOOL: ToolDefinition = {
  entry: svgToCss,
  Component: SvgToCssComponent,
  SEOComponent: SvgToCssSEO,
  BibliographyComponent: SvgToCssBibliography,
};
