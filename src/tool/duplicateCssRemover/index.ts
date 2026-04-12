import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import DuplicateCssRemoverComponent from './component.astro';
import DuplicateCssRemoverSEO from './seo.astro';
import DuplicateCssRemoverBibliography from './bibliography.astro';

import type { DuplicateCssRemoverUI } from './ui';

export type DuplicateCssRemoverLocaleContent = ToolLocaleContent<DuplicateCssRemoverUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const duplicateCssRemover: DeveloperToolEntry<DuplicateCssRemoverUI> = {
  id: 'duplicate-css-remover',
  icons: {
    bg: 'mdi:broom',
    fg: 'mdi:language-css3',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { DuplicateCssRemoverComponent, DuplicateCssRemoverSEO, DuplicateCssRemoverBibliography };

export const DUPLICATE_CSS_REMOVER_TOOL: ToolDefinition = {
  entry: duplicateCssRemover,
  Component: DuplicateCssRemoverComponent,
  SEOComponent: DuplicateCssRemoverSEO,
  BibliographyComponent: DuplicateCssRemoverBibliography,
};
