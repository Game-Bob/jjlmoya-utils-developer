import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import AspectRatioComponent from './component.astro';
import AspectRatioSEO from './seo.astro';
import AspectRatioBibliography from './bibliography.astro';

import type { AspectRatioUI } from './ui';

export type AspectRatioLocaleContent = ToolLocaleContent<AspectRatioUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const aspectRatio: DeveloperToolEntry<AspectRatioUI> = {
  id: 'aspect-ratio',
  icons: {
    bg: 'mdi:aspect-ratio',
    fg: 'mdi:resize',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { AspectRatioComponent, AspectRatioSEO, AspectRatioBibliography };

export const ASPECT_RATIO_TOOL: ToolDefinition = {
  entry: aspectRatio,
  Component: AspectRatioComponent,
  SEOComponent: AspectRatioSEO,
  BibliographyComponent: AspectRatioBibliography,
};
