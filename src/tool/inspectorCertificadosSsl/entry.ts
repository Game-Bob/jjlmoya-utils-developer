import type { DeveloperToolEntry, ToolLocaleContent } from '../../types';
import type { InspectorCertificadosSslUI } from './ui';

export type InspectorCertificadosSslLocaleContent = ToolLocaleContent<InspectorCertificadosSslUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';
import { content as de } from './i18n/de';
import { content as it } from './i18n/it';
import { content as ja } from './i18n/ja';
import { content as ko } from './i18n/ko';
import { content as nl } from './i18n/nl';
import { content as pl } from './i18n/pl';
import { content as pt } from './i18n/pt';
import { content as ru } from './i18n/ru';
import { content as sv } from './i18n/sv';
import { content as tr } from './i18n/tr';
import { content as zh } from './i18n/zh';
import { content as id } from './i18n/id';

export const inspectorCertificadosSsl: DeveloperToolEntry<InspectorCertificadosSslUI> = {
  id: 'inspector-certificados-ssl',
  icons: {
    bg: 'mdi:security',
    fg: 'mdi:certificate',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
    de: async () => de,
    it: async () => it,
    ja: async () => ja,
    ko: async () => ko,
    nl: async () => nl,
    pl: async () => pl,
    pt: async () => pt,
    ru: async () => ru,
    sv: async () => sv,
    tr: async () => tr,
    zh: async () => zh,
    id: async () => id,
  },
};
