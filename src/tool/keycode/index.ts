import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import KeycodeComponent from './component.astro';
import KeycodeSEO from './seo.astro';
import KeycodeBibliography from './bibliography.astro';

import type { KeycodeUI } from './ui';

export type KeycodeLocaleContent = ToolLocaleContent<KeycodeUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const keycode: DeveloperToolEntry<KeycodeUI> = {
  id: 'keycode',
  icons: {
    bg: 'mdi:keyboard-outline',
    fg: 'mdi:code-braces',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { KeycodeComponent, KeycodeSEO, KeycodeBibliography };

export const KEYCODE_TOOL: ToolDefinition = {
  entry: keycode,
  Component: KeycodeComponent,
  SEOComponent: KeycodeSEO,
  BibliographyComponent: KeycodeBibliography,
};
