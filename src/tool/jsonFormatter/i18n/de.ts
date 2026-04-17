import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonFormatterUI } from '../ui';

const slug = 'json-formatierer';
const title = 'Kostenloser Online JSON Formatter und Validator';
const description =
  'Kostenloses Online-Tool zum Formatieren, Validieren und Reparieren von JSON-Code. JSON verschönern und formatieren. Erkennt Syntaxfehler und verbessert die Lesbarkeit des Codes.';

const faqData = [
  {
    question: 'Sind meine Daten bei der Verwendung dieses Formatierers sicher?',
    answer:
      'Absolut. Die gesamte Verarbeitung findet zu 100 % in Ihrem Browser statt (Client-Side). Ihre JSON-Daten werden niemals an einen Server gesendet, was die vollständige Privatsphäre Ihrer Datenstrukturen gewährleistet.',
  },
  {
    question: 'Was verursacht einen "Invalid JSON"-Fehler?',
    answer:
      'Dies wird meist durch abschließende Kommas am Ende eines Objekts, fehlende doppelte Anführungszeichen um Schlüssel oder unsichtbare Zeichen verursacht. Unser Tool markiert die exakte Zeile des Fehlers, damit Sie ihn beheben können.',
  },
  {
    question: 'Kann es fehlerhaftes JSON reparieren?',
    answer:
      'Unser Tool versucht automatisch, häufige Fehler wie unnötige abschließende Kommas oder falsch formatierte Zeichen-Escapes zu korrigieren, damit das JSON dem RFC 8259-Standard entspricht.',
  },
  {
    question: 'Werden sehr große JSON-Dateien unterstützt?',
    answer:
      'Ja, die Verarbeitungs-Engine ist darauf optimiert, komplexe Datenstrukturen und große Dateien zu verarbeiten, ohne die Benutzeroberfläche des Browsers zu blockieren.',
  },
];

const howToData = [
  {
    name: 'Code einfügen',
    text: 'Fügen Sie Ihr unformatiertes oder minimiertes JSON in das Haupttextfeld ein.',
  },
  {
    name: 'Validieren und Formatieren',
    text: 'Das System analysiert den Code automatisch, hebt Syntaxfehler hervor und wendet Einrückungen an, um die Lesbarkeit zu verbessern.',
  },
  {
    name: 'Stil wählen',
    text: 'Wählen Sie zwischen einem erweiterten (Beautify) oder komprimierten (Minify) Format, je nachdem, ob Sie Lesbarkeit oder Platzersparnis benötigen.',
  },
  {
    name: 'Ergebnis kopieren',
    text: 'Klicken Sie auf den Kopieren-Button, um das perfekt validierte JSON in Ihre Zwischenablage zu übernehmen.',
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
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
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

const ui: JsonFormatterUI = {
  labelInput: 'Eingabe (JSON)',
  labelOutput: 'Ausgabe',
  btnMinify: 'Minimieren',
  btnBeautify: 'Formatieren',
  btnFix: 'Reparatur versuchen',
  btnCopy: 'Kopieren',
  statusWaiting: 'Warten auf Eingabe...',
  statusValid: 'Gültiges JSON',
  statusInvalid: 'Ungültiges JSON',
  toastCopied: 'Kopiert!',
  toastFixed: 'JSON repariert (Vorschau)',
  toastFixFailed: 'Automatische Reparatur fehlgeschlagen',
  placeholder: 'Fügen Sie hier Ihr JSON ein...',
};

export const content: ToolLocaleContent<JsonFormatterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Referenzen und Standards',
  bibliography: [
    {
      name: 'RFC 8259 – The JavaScript Object Notation (JSON) Data Interchange Format (IETF)',
      url: 'https://datatracker.ietf.org/doc/html/rfc8259',
    },
    {
      name: 'ECMA-404 – The JSON Data Interchange Syntax (Ecma International)',
      url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-404/',
    },
    {
      name: 'JSON.org – Introducing JSON',
      url: 'https://www.json.org/json-en.html',
    },
    {
      name: 'MDN Web Docs – JSON',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'JSON Validierung und Formatierung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'JSON (JavaScript Object Notation) ist der De-facto-Standard für den Datenaustausch im Web. Seine strikte Syntax macht es jedoch anfällig für menschliche Fehler bei der manuellen Bearbeitung.',
    },
    {
      type: 'paragraph',
      html: 'Dieses Tool ermöglicht es Ihnen, die Struktur zu validieren, den Code zur Verbesserung der Lesbarkeit zu formatieren und häufige Syntaxfehler automatisch zu reparieren.',
    },
    { type: 'grid', columns: 2 },
    {
      type: 'card',
      title: 'Häufig reparierte Fehler',
      html: '<ul><li><strong>Einfache Anführungszeichen:</strong> Der JSON-Standard erfordert doppelte Anführungszeichen. Das Tool konvertiert <code>\'Key\': \'Value\'</code> in <code>"Key": "Value"</code>.</li><li><strong>Unquotierte Schlüssel:</strong> Erkennt Objektschlüssel im JavaScript-Stil und fügt die erforderlichen Anführungszeichen hinzu.</li><li><strong>Abschließende Kommas:</strong> Entfernt Kommas am Ende von Objekten oder Arrays, die den strikten Parser stören.</li></ul>',
    },
    {
      type: 'card',
      title: 'Funktionen',
      html: '<ul><li><strong>Syntax-Highlighting:</strong> Färbt Schlüssel, Strings, Zahlen und Booleans ein, um das schnelle Lesen zu erleichtern.</li><li><strong>Echtzeit-Validierung:</strong> Zeigt sofort an, ob das JSON gültig ist, oder markiert den spezifischen Parsing-Fehler.</li><li><strong>Totale Privatsphäre:</strong> Die Verarbeitung erfolgt zu 100 % in Ihrem Browser. Es werden keine Daten an externe Server gesendet.</li></ul>',
    },
  ],
};

