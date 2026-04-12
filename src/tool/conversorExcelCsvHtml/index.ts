import type { DeveloperToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import ConversorExcelCsvHtmlComponent from './component.astro';
import ConversorExcelCsvHtmlSEO from './seo.astro';
import ConversorExcelCsvHtmlBibliography from './bibliography.astro';
import type { ConversorExcelCsvHtmlUI } from './ui';

export type ConversorExcelCsvHtmlLocaleContent = ToolLocaleContent<ConversorExcelCsvHtmlUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const conversorExcelCsvHtml: DeveloperToolEntry<ConversorExcelCsvHtmlUI> = {
  id: 'conversor-excel-csv-html',
  icons: {
    bg: 'mdi:table',
    fg: 'mdi:file-delimited',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { ConversorExcelCsvHtmlComponent, ConversorExcelCsvHtmlSEO, ConversorExcelCsvHtmlBibliography };

export const CONVERSOR_EXCEL_CSV_HTML_TOOL: ToolDefinition = {
  entry: conversorExcelCsvHtml,
  Component: ConversorExcelCsvHtmlComponent,
  SEOComponent: ConversorExcelCsvHtmlSEO,
  BibliographyComponent: ConversorExcelCsvHtmlBibliography,
};
