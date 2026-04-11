import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import SvgToCssComponent from './component.astro';
import SvgToCssSEO from './seo.astro';
import SvgToCssBibliography from './bibliography.astro';

import type { SvgToCssUI } from './ui';

export type SvgToCssLocaleContent = ToolLocaleContent<SvgToCssUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const svgToCss: DeveloperToolEntry<SvgToCssUI> = {
  id: 'svg-to-css',
  icons: {
    bg: 'mdi:svg',
    fg: 'mdi:code-braces',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { SvgToCssComponent, SvgToCssSEO, SvgToCssBibliography };

export const SVG_TO_CSS_TOOL: ToolDefinition = {
  entry: svgToCss,
  Component: SvgToCssComponent,
  SEOComponent: SvgToCssSEO,
  BibliographyComponent: SvgToCssBibliography,
};
