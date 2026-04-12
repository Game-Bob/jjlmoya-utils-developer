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

export const developerCategory: DeveloperCategoryEntry = {
  icon: 'mdi:code-tags',
  tools: [jsonFormatter, svgToCss, aspectRatio, placeholderGenerator, urlEncoderDecoder, duplicateCssRemover, cssToInlineConverter, cssSpecificityCalculator, cronGenerator, keycode, llmCostCalculator, musicalTypography, mobileMockupGenerator, hashGenerator, promptLibrary],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};
