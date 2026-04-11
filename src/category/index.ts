import type { DeveloperCategoryEntry } from '../types';
import { jsonFormatter } from '../tool/jsonFormatter/index';
import { svgToCss } from '../tool/svgToCss/index';

export const developerCategory: DeveloperCategoryEntry = {
  icon: 'mdi:code-tags',
  tools: [jsonFormatter, svgToCss],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};
