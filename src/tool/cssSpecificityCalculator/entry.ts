import type { DeveloperToolEntry, ToolLocaleContent } from '../../types';

import type { CssSpecificityCalculatorUI } from './ui';

export type CssSpecificityCalculatorLocaleContent = ToolLocaleContent<CssSpecificityCalculatorUI>;

export const cssSpecificityCalculator: DeveloperToolEntry<CssSpecificityCalculatorUI> = {
  id: 'css-specificity-calculator',
  icons: {
    bg: 'mdi:scale-balance',
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
