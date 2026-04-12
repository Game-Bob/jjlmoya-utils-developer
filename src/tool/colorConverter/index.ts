import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import ColorConverterComponent from './component.astro';
import ColorConverterSEO from './seo.astro';
import ColorConverterBibliography from './bibliography.astro';
import type { ColorConverterUI } from './ui';

export type ColorConverterLocaleContent = ToolLocaleContent<ColorConverterUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const colorConverter: DeveloperToolEntry<ColorConverterUI> = {
  id: 'color-converter',
  icons: {
    bg: 'mdi:palette',
    fg: 'mdi:eyedropper',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { ColorConverterComponent, ColorConverterSEO, ColorConverterBibliography };

export const COLOR_CONVERTER_TOOL: ToolDefinition = {
  entry: colorConverter,
  Component: ColorConverterComponent,
  SEOComponent: ColorConverterSEO,
  BibliographyComponent: ColorConverterBibliography,
};
