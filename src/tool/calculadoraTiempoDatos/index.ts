import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import CalculadoraTiempoDatosComponent from './component.astro';
import CalculadoraTiempoDatosSEO from './seo.astro';
import CalculadoraTiempoDatosBibliography from './bibliography.astro';
import type { CalculadoraTiempoDatosUI } from './ui';

export type CalculadoraTiempoDatosLocaleContent = ToolLocaleContent<CalculadoraTiempoDatosUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const calculadoraTiempoDatos: DeveloperToolEntry<CalculadoraTiempoDatosUI> = {
  id: 'calculadora-tiempo-datos',
  icons: {
    bg: 'mdi:wifi',
    fg: 'mdi:clock-outline',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { CalculadoraTiempoDatosComponent, CalculadoraTiempoDatosSEO, CalculadoraTiempoDatosBibliography };

export const CALCULADORA_TIEMPO_DATOS_TOOL: ToolDefinition = {
  entry: calculadoraTiempoDatos,
  Component: CalculadoraTiempoDatosComponent,
  SEOComponent: CalculadoraTiempoDatosSEO,
  BibliographyComponent: CalculadoraTiempoDatosBibliography,
};
