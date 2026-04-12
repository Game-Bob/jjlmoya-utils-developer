import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import InspectorCertificadosSslComponent from './component.astro';
import InspectorCertificadosSslSEO from './seo.astro';
import InspectorCertificadosSslBibliography from './bibliography.astro';
import type { InspectorCertificadosSslUI } from './ui';

export type InspectorCertificadosSslLocaleContent = ToolLocaleContent<InspectorCertificadosSslUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

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
  },
};

export { InspectorCertificadosSslComponent, InspectorCertificadosSslSEO, InspectorCertificadosSslBibliography };

export const INSPECTOR_CERTIFICADOS_SSL_TOOL: ToolDefinition = {
  entry: inspectorCertificadosSsl,
  Component: InspectorCertificadosSslComponent,
  SEOComponent: InspectorCertificadosSslSEO,
  BibliographyComponent: InspectorCertificadosSslBibliography,
};
