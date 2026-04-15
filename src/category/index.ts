import type { DeveloperCategoryEntry } from '../types';
import { jsonFormatter } from '../tool/jsonFormatter/index';
import { svgToCss } from '../tool/svgToCss/index';
import { aspectRatio } from '../tool/aspectRatio/index';
import { placeholderGenerator } from '../tool/placeholderGenerator/index';
import { urlEncoderDecoder } from '../tool/urlEncoderDecoder/index';
import { duplicateCssRemover } from '../tool/duplicateCssRemover/index';
import { cssToInlineConverter } from '../tool/cssToInlineConverter/index';
import { cssSpecificityCalculator } from '../tool/cssSpecificityCalculator/index';
import { cronGenerator } from '../tool/cronGenerator/index';
import { keycode } from '../tool/keycode/index';
import { llmCostCalculator } from '../tool/llmCostCalculator/index';
import { musicalTypography } from '../tool/musicalTypography/index';
import { mobileMockupGenerator } from '../tool/mobileMockupGenerator/index';
import { hashGenerator } from '../tool/hashGenerator/index';
import { promptLibrary } from '../tool/promptLibrary/index';
import { colorConverter } from '../tool/colorConverter/index';
import { readabilityCalculator } from '../tool/readabilityCalculator/index';
import { svgSanitizer } from '../tool/svgSanitizer/index';
import { utmGenerator } from '../tool/utmGenerator/index';
import { urlCleaner } from '../tool/urlCleaner/index';

export const developerCategory: DeveloperCategoryEntry = {
  icon: 'mdi:code-tags',
  tools: [jsonFormatter, svgToCss, aspectRatio, placeholderGenerator, urlEncoderDecoder, duplicateCssRemover, cssToInlineConverter, cssSpecificityCalculator, cronGenerator, keycode, llmCostCalculator, musicalTypography, mobileMockupGenerator, hashGenerator, promptLibrary, colorConverter, readabilityCalculator, svgSanitizer, utmGenerator, urlCleaner],
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
