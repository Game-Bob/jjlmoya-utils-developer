import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import CssToInlineConverterComponent from './component.astro';
import CssToInlineConverterSEO from './seo.astro';
import CssToInlineConverterBibliography from './bibliography.astro';

import type { CssToInlineConverterUI } from './ui';

export type CssToInlineConverterLocaleContent = ToolLocaleContent<CssToInlineConverterUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const cssToInlineConverter: DeveloperToolEntry<CssToInlineConverterUI> = {
  id: 'css-to-inline-converter',
  icons: {
    bg: 'mdi:email-outline',
    fg: 'mdi:language-css3',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { CssToInlineConverterComponent, CssToInlineConverterSEO, CssToInlineConverterBibliography };

export const CSS_TO_INLINE_CONVERTER_TOOL: ToolDefinition = {
  entry: cssToInlineConverter,
  Component: CssToInlineConverterComponent,
  SEOComponent: CssToInlineConverterSEO,
  BibliographyComponent: CssToInlineConverterBibliography,
};
