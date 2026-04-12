import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import SvgSanitizerComponent from './component.astro';
import SvgSanitizerSEO from './seo.astro';
import SvgSanitizerBibliography from './bibliography.astro';
import type { SvgSanitizerUI } from './ui';

export type SvgSanitizerLocaleContent = ToolLocaleContent<SvgSanitizerUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const svgSanitizer: DeveloperToolEntry<SvgSanitizerUI> = {
  id: 'svg-sanitizer',
  icons: {
    bg: 'mdi:xml',
    fg: 'mdi:broom',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { SvgSanitizerComponent, SvgSanitizerSEO, SvgSanitizerBibliography };

export const SVG_SANITIZER_TOOL: ToolDefinition = {
  entry: svgSanitizer,
  Component: SvgSanitizerComponent,
  SEOComponent: SvgSanitizerSEO,
  BibliographyComponent: SvgSanitizerBibliography,
};
