import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgSanitizerUI } from '../ui';

const slug = 'svg-bereiniger';
const title = 'SVG Bereiniger Online';
const description = 'Optimiere und bereinige SVGs aus Figma, Adobe Illustrator oder Inkscape. Entferne Metadaten, überflüssige Attribute und leere Gruppen für ein produktionsfertiges SVG.';

const faqData = [
  {
    question: 'Kann ich den vollständigen HTML-Code einer Seite mit eingebettetem SVG einfügen?',
    answer: 'Ja. Der Bereiniger erkennt das SVG-Element innerhalb des HTML und extrahiert nur diesen Block zur Verarbeitung. Es funktioniert auch, wenn du den SVG-Fragment direkt einfügst.',
  },
  {
    question: 'Funktioniert das auch mit SVGs aus Illustrator?',
    answer: 'Ja. Illustrator exportiert SVGs mit XML-Deklarationen, Metadaten und proprietären Namespaces, die der Bereiniger entfernt. Das Ergebnis ist ein SVG, das mit allen modernen Browsern kompatibel ist.',
  },
  {
    question: 'Was ist der Unterschied zwischen Bereinigen und Minifizieren?',
    answer: 'Beim Bereinigen werden überflüssige Attribute und Tags entfernt, das eingerückte Format bleibt jedoch erhalten, damit du den Code lesen und bearbeiten kannst. Beim Minifizieren wird zusätzlich alles in eine einzige Zeile komprimiert, um die Dateigröße maximal zu reduzieren.',
  },
  {
    question: 'Kann das Entfernen von IDs das SVG beschädigen?',
    answer: 'Nur wenn ein Element im SVG ein anderes per ID referenziert, zum Beispiel über fill="url(#gradient)". Deaktiviere in diesem Fall die Option IDs entfernen. Sie ist standardmäßig deaktiviert, um genau dieses Problem zu vermeiden.',
  },
  {
    question: 'Wird mein SVG-Code an einen Server gesendet?',
    answer: 'Nein. Die gesamte Verarbeitung erfolgt in deinem Browser mithilfe der nativen DOMParser- und XMLSerializer-APIs. Der Code verlässt dein Gerät zu keiner Zeit.',
  },
];

const howToData = [
  { name: 'SVG einfügen', text: 'Füge den SVG-Code aus Figma, Illustrator oder Inkscape in das Textfeld ein.' },
  { name: 'Optionen konfigurieren', text: 'Aktiviere oder deaktiviere die Optionen: IDs entfernen, width/height entfernen und minifizieren – je nach Bedarf.' },
  { name: 'Bereinigen', text: 'Klicke auf SVG bereinigen, um den Code zu verarbeiten und das optimierte Ergebnis zu erhalten.' },
  { name: 'Kopieren oder herunterladen', text: 'Nutze die Schaltflächen Kopieren oder Herunterladen, um das bereinigte SVG für die Produktion zu sichern.' },
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

const ui: SvgSanitizerUI = {
  labelInput: 'Füge hier dein unbereinigtes SVG ein',
  labelOutput: 'Bereinigtes SVG',
  optRemoveIds: 'IDs entfernen',
  optRemoveWH: 'width/height entfernen',
  optMinify: 'Minifizieren',
  btnSanitize: 'SVG bereinigen',
  btnCopy: 'Kopieren',
  btnCopied: 'Kopiert',
  btnDownload: 'Herunterladen',
  statOriginal: 'Original',
  statCleaned: 'Bereinigt',
  statReduction: 'Reduzierung',
  statElems: 'Elem. entfernt',
  statAttrs: 'Attrs. entfernt',
  errorPaste: 'Füge ein SVG ein, bevor du bereinigst.',
  errorProcess: 'Fehler bei der SVG-Verarbeitung.',
};

export const content: ToolLocaleContent<SvgSanitizerUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Referenzen',
  bibliography: [
    { name: 'SVG Specification - W3C', url: 'https://www.w3.org/TR/SVG2/' },
    { name: 'Figma SVG Export - Offizielle Dokumentation', url: 'https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma' },
    { name: 'SVGO - SVG Optimizer (Open-Source-Referenz)', url: 'https://github.com/svg/svgo' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'SVG Bereiniger: Code aus Figma und Illustrator aufräumen', level: 2 },
    {
      type: 'paragraph',
      html: 'Füge ein beliebiges SVG aus <strong>Figma</strong>, Adobe Illustrator oder dem Browser-Inspektor ein und erhalte eine saubere, optimierte Vektordatei, die sofort produktionsbereit ist.',
    },
    { type: 'title', text: 'Warum sind exportierte SVGs so unordentlich?', level: 3 },
    {
      type: 'paragraph',
      html: 'Wenn du ein SVG aus Figma exportierst, erhältst du eine Datei voller Attribute, die nur innerhalb der App einen Sinn ergeben: <code>data-name</code>, <code>xml:space</code>, Verweise auf interne Ebenen und Design-Metadaten. Das Ergebnis ist ein SVG, das 40–70 % größer als nötig sein kann.',
    },
    { type: 'title', text: 'Was der Bereiniger entfernt', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Editor-Metadaten:</strong> die Tags <code>metadata</code>, <code>title</code> und <code>desc</code>, die Figma und Illustrator automatisch hinzufügen.',
        '<strong>Inkscape-Namespaces:</strong> alle Elemente mit dem Präfix <code>inkscape:</code> und <code>sodipodi:</code>.',
        '<strong>Überflüssige Attribute:</strong> <code>xml:space</code>, <code>version</code>, unnötige <code>xmlns:*</code> und Figma-<code>data-*</code>-Attribute.',
        '<strong>Leere Gruppen:</strong> <code>&lt;g&gt;</code>-Elemente ohne Inhalt, die als Artefakte gelöschter Ebenen übrig bleiben.',
        '<strong>XML-Deklarationen:</strong> die <code>&lt;?xml version="1.0"?&gt;</code>-Deklaration und den DOCTYPE, die beim Einbetten von SVG in HTML nicht benötigt werden.',
      ],
    },
  ],
};
