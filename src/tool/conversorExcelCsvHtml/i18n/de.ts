import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConversorExcelCsvHtmlUI } from '../ui';

const slug = 'excel-csv-html-tabellen-konverter';
const title = 'Excel und CSV zu HTML Tabellen Konverter Code Generator';
const description = 'Konvertieren Sie Ihre Excel- oder CSV-Daten sofort in saubere, semantische HTML-Tabellen. Kostenloses Tool für Entwickler und Content-Ersteller.';

const faqData = [
  {
    question: 'Wie konvertiere ich eine Excel-Datei (.xlsx) in HTML?',
    answer: 'Öffnen Sie zuerst Ihre Datei in Excel und speichern Sie sie als CSV (kommagetrennt). Laden Sie diese CSV-Datei in unser Tool hoch oder fügen Sie den Inhalt ein, um den HTML-Tabellencode zu erhalten.',
  },
  {
    question: 'Enthält der generierte Code CSS-Styles?',
    answer: 'Der Generator erzeugt sauberes HTML mit optionalen Klassen für Rahmen und Zebrastreifen. Die endgültigen visuellen Styles hängen vom eigenen CSS Ihrer Website ab, was eine perfekte Integration ermöglicht.',
  },
  {
    question: 'Kann ich sehr große CSV-Dateien hochladen?',
    answer: 'Ja, unser Tool verarbeitet Daten lokal in Ihrem Browser. Das bedeutet, dass es sehr schnell und sicher ist, da Ihre Daten niemals über das Internet übertragen werden.',
  },
  {
    question: 'Ist es mit Google Sheets kompatibel?',
    answer: 'Absolut. Gehen Sie in Google Sheets auf Datei > Herunterladen > Kommagetrennte Werte (.csv) und verwenden Sie diese Datei mit unserem Tool.',
  },
];

const howToData = [
  {
    name: 'Bereiten Sie Ihre Daten vor',
    text: 'Halten Sie Ihre Excel- oder CSV-Datei bereit. Stellen Sie sicher, dass die Daten sauber sind.',
  },
  {
    name: 'Laden Sie die Daten',
    text: 'Fügen Sie den CSV-Text in den Eingabebereich ein oder ziehen Sie die Datei direkt in den Konverter.',
  },
  {
    name: 'Konfigurieren Sie die Tabelle',
    text: 'Wählen Sie, ob Sie die erste Zeile als Kopfzeile verwenden möchten und ob Sie Basis-Styles wünschen.',
  },
  {
    name: 'Kopieren Sie den Code',
    text: 'Wechseln Sie zum Tab "HTML-Code" und kopieren Sie das Ergebnis, um es in Ihre Website einzufügen.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'de',
};

const ui: ConversorExcelCsvHtmlUI = {
  csvInputLabel: 'Fügen Sie hier Ihr CSV ein',
  csvInputPlaceholder: 'Name,Alter,Stadt\nMax,25,Berlin\nAnna,30,München',
  uploadLabel: 'Oder laden Sie Ihre Datei hoch (CSV)',
  dragDropLabel: 'Ziehen Sie Ihre Datei hierher',
  headerCheckboxLabel: 'Erste Zeile als Kopfzeile verwenden',
  bordersCheckboxLabel: 'Rahmen hinzufügen',
  stripeCheckboxLabel: 'Zebrastreifen',
  previewTabLabel: 'Vorschau',
  codeTabLabel: 'HTML-Code',
  emptyStateLabel: 'Geben Sie Daten ein, um die Tabelle zu sehen',
  copyButtonLabel: 'Code kopieren',
  copiedLabel: 'Kopiert!',
};

export const content: ToolLocaleContent<ConversorExcelCsvHtmlUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Ressourcen zu HTML-Tabellen und Datenformaten',
  bibliography: [
    { name: 'W3C: HTML-Tabellen', url: 'https://www.w3.org/WAI/tutorials/tables/' },
    { name: 'MDN: HTML table Element', url: 'https://developer.mozilla.org/de/docs/Web/HTML/Element/table' },
    { name: 'RFC 4180: CSV-Format', url: 'https://tools.ietf.org/html/rfc4180' },
    { name: 'Google Sheets: Daten herunterladen', url: 'https://support.google.com/docs/answer/183965' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Excel und CSV einfach in HTML-Tabellen konvertieren', level: 2 },
    {
      type: 'paragraph',
      html: 'In der modernen Webentwicklung ist die Darstellung von Tabellendaten eine der effektivsten Möglichkeiten, strukturierte Informationen zu übertragen. Das manuelle Konvertieren von Daten aus einer Tabellenkalkulation wie <strong>Excel</strong> oder einer <strong>CSV</strong>-Datei in HTML <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> und <code>&lt;td&gt;</code> Tags ist jedoch mühsam und fehleranfällig.',
    },
    { type: 'title', text: 'Warum semantische HTML-Tabellen verwenden?', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Barrierefreiheit:</strong> Screenreader können die Struktur interpretieren und Benutzern mit Sehbehinderungen helfen.',
        '<strong>SEO:</strong> Suchmaschinen indexieren den Zelleninhalt, was das Ranking Ihrer Daten verbessert.',
        '<strong>Responsivität:</strong> Mit etwas CSS können HTML-Tabellen für mobile Geräte angepasst werden.',
        '<strong>Wartungsfreundlichkeit:</strong> Es ist viel einfacher, Daten in HTML zu bearbeiten, als ein ganzes Bild neu zu generieren.',
      ],
    },
    { type: 'title', text: 'Wie der Excel zu HTML Konverter funktioniert', level: 3 },
    {
      type: 'paragraph',
      html: 'Unser Dienstprogramm verwendet einen nativen Text-Parser, der kommagetrennte Dateien (CSV) verarbeitet. Die meisten Tabellenkalkulationsprogramme, einschließlich Microsoft Excel, Google Sheets und LibreOffice Calc, ermöglichen es Ihnen, Ihre Daten im CSV-Format zu exportieren.',
    },
  ],
};
