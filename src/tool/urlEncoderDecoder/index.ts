import { urlEncoderDecoder } from './entry';
export * from './entry';
export const URL_ENCODER_DECODER_TOOL: ToolDefinition = {
  entry: urlEncoderDecoder,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
