import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import PromptLibraryComponent from './component.astro';
import PromptLibrarySEO from './seo.astro';
import PromptLibraryBibliography from './bibliography.astro';
import type { PromptLibraryUI } from './ui';

export type PromptLibraryLocaleContent = ToolLocaleContent<PromptLibraryUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const promptLibrary: DeveloperToolEntry<PromptLibraryUI> = {
  id: 'prompt-library',
  icons: {
    bg: 'mdi:robot',
    fg: 'mdi:text-box-multiple',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { PromptLibraryComponent, PromptLibrarySEO, PromptLibraryBibliography };

export const PROMPT_LIBRARY_TOOL: ToolDefinition = {
  entry: promptLibrary,
  Component: PromptLibraryComponent,
  SEOComponent: PromptLibrarySEO,
  BibliographyComponent: PromptLibraryBibliography,
};
