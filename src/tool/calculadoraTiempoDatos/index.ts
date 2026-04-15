import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import CalculadoraTiempoDatosComponent from './component.astro';
import CalculadoraTiempoDatosSEO from './seo.astro';
import CalculadoraTiempoDatosBibliography from './bibliography.astro';
import type { CalculadoraTiempoDatosUI } from './ui';

export type CalculadoraTiempoDatosLocaleContent = ToolLocaleContent<CalculadoraTiempoDatosUI>;

export const calculadoraTiempoDatos: DeveloperToolEntry<CalculadoraTiempoDatosUI> = {
  id: 'calculadora-tiempo-datos',
  icons: {
    bg: 'mdi:wifi',
    fg: 'mdi:clock-outline',
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

export { CalculadoraTiempoDatosComponent, CalculadoraTiempoDatosSEO, CalculadoraTiempoDatosBibliography };

export const CALCULADORA_TIEMPO_DATOS_TOOL: ToolDefinition = {
  entry: calculadoraTiempoDatos,
  Component: CalculadoraTiempoDatosComponent,
  SEOComponent: CalculadoraTiempoDatosSEO,
  BibliographyComponent: CalculadoraTiempoDatosBibliography,
};
