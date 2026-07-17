import type { DeveloperCategoryEntry } from '../types';
import { jsonFormatter } from '../tool/jsonFormatter/entry';
import { svgToCss } from '../tool/svgToCss/entry';
import { aspectRatio } from '../tool/aspectRatio/entry';
import { placeholderGenerator } from '../tool/placeholderGenerator/entry';
import { urlEncoderDecoder } from '../tool/urlEncoderDecoder/entry';
import { duplicateCssRemover } from '../tool/duplicateCssRemover/entry';
import { cssToInlineConverter } from '../tool/cssToInlineConverter/entry';
import { cssSpecificityCalculator } from '../tool/cssSpecificityCalculator/entry';
import { cronGenerator } from '../tool/cronGenerator/entry';
import { keycode } from '../tool/keycode/entry';
import { llmCostCalculator } from '../tool/llmCostCalculator/entry';
import { musicalTypography } from '../tool/musicalTypography/entry';
import { mobileMockupGenerator } from '../tool/mobileMockupGenerator/entry';
import { hashGenerator } from '../tool/hashGenerator/entry';
import { promptLibrary } from '../tool/promptLibrary/entry';
import { colorConverter } from '../tool/colorConverter/entry';
import { readabilityCalculator } from '../tool/readabilityCalculator/entry';
import { svgSanitizer } from '../tool/svgSanitizer/entry';
import { utmGenerator } from '../tool/utmGenerator/entry';
import { urlCleaner } from '../tool/urlCleaner/entry';
import { serpPixelSimulator } from '../tool/serpPixelSimulator/entry';
import { jwtDecoder } from '../tool/jwtDecoder/entry';
import { visualCssGridFlexboxGenerator } from '../tool/visualCssGridFlexboxGenerator/entry';

export const developerCategory: DeveloperCategoryEntry = {
  icon: 'mdi:code-tags',
  tools: [jsonFormatter, svgToCss, aspectRatio, placeholderGenerator, urlEncoderDecoder, duplicateCssRemover, cssToInlineConverter, cssSpecificityCalculator, cronGenerator, keycode, llmCostCalculator, musicalTypography, mobileMockupGenerator, hashGenerator, promptLibrary, colorConverter, readabilityCalculator, svgSanitizer, utmGenerator, urlCleaner, serpPixelSimulator, jwtDecoder, visualCssGridFlexboxGenerator],
  i18n: {
    de: () => import('./i18n/de').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};
