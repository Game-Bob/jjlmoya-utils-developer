import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import GeneradorSecurityTxtComponent from './component.astro';
import GeneradorSecurityTxtSEO from './seo.astro';
import GeneradorSecurityTxtBibliography from './bibliography.astro';
import type { GeneradorSecurityTxtUI } from './ui';

export type GeneradorSecurityTxtLocaleContent = ToolLocaleContent<GeneradorSecurityTxtUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const generadorSecurityTxt: DeveloperToolEntry<GeneradorSecurityTxtUI> = {
  id: 'generador-security-txt',
  icons: {
    bg: 'mdi:shield-alert',
    fg: 'mdi:file-document',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { GeneradorSecurityTxtComponent, GeneradorSecurityTxtSEO, GeneradorSecurityTxtBibliography };

export const GENERADOR_SECURITY_TXT_TOOL: ToolDefinition = {
  entry: generadorSecurityTxt,
  Component: GeneradorSecurityTxtComponent,
  SEOComponent: GeneradorSecurityTxtSEO,
  BibliographyComponent: GeneradorSecurityTxtBibliography,
};
