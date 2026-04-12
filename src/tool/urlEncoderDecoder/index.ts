import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import UrlEncoderDecoderComponent from './component.astro';
import UrlEncoderDecoderSEO from './seo.astro';
import UrlEncoderDecoderBibliography from './bibliography.astro';

import type { UrlEncoderDecoderUI } from './ui';

export type UrlEncoderDecoderLocaleContent = ToolLocaleContent<UrlEncoderDecoderUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const urlEncoderDecoder: DeveloperToolEntry<UrlEncoderDecoderUI> = {
  id: 'url-encoder-decoder',
  icons: {
    bg: 'mdi:link-variant',
    fg: 'mdi:code-brackets',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { UrlEncoderDecoderComponent, UrlEncoderDecoderSEO, UrlEncoderDecoderBibliography };

export const URL_ENCODER_DECODER_TOOL: ToolDefinition = {
  entry: urlEncoderDecoder,
  Component: UrlEncoderDecoderComponent,
  SEOComponent: UrlEncoderDecoderSEO,
  BibliographyComponent: UrlEncoderDecoderBibliography,
};
