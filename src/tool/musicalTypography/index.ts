import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import MusicalTypographyComponent from './component.astro';
import MusicalTypographySEO from './seo.astro';
import MusicalTypographyBibliography from './bibliography.astro';
import type { MusicalTypographyUI } from './ui';

export type MusicalTypographyLocaleContent = ToolLocaleContent<MusicalTypographyUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const musicalTypography: DeveloperToolEntry<MusicalTypographyUI> = {
  id: 'musical-typography',
  icons: {
    bg: 'mdi:music-note',
    fg: 'mdi:format-size',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { MusicalTypographyComponent, MusicalTypographySEO, MusicalTypographyBibliography };

export const MUSICAL_TYPOGRAPHY_TOOL: ToolDefinition = {
  entry: musicalTypography,
  Component: MusicalTypographyComponent,
  SEOComponent: MusicalTypographySEO,
  BibliographyComponent: MusicalTypographyBibliography,
};
