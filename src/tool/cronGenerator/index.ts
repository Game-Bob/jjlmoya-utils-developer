import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import CronGeneratorComponent from './component.astro';
import CronGeneratorSEO from './seo.astro';
import CronGeneratorBibliography from './bibliography.astro';

import type { CronGeneratorUI } from './ui';

export type CronGeneratorLocaleContent = ToolLocaleContent<CronGeneratorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const cronGenerator: DeveloperToolEntry<CronGeneratorUI> = {
  id: 'cron-generator',
  icons: {
    bg: 'mdi:clock-outline',
    fg: 'mdi:code-braces',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { CronGeneratorComponent, CronGeneratorSEO, CronGeneratorBibliography };

export const CRON_GENERATOR_TOOL: ToolDefinition = {
  entry: cronGenerator,
  Component: CronGeneratorComponent,
  SEOComponent: CronGeneratorSEO,
  BibliographyComponent: CronGeneratorBibliography,
};
