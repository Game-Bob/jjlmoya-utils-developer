import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonFormatterUI } from '../ui';

const slug = 'json-formatter-validator';
const title = 'Gratis Online JSON Formatter en Validator';
const description =
  'Gratis online tool om JSON-code te formatteren, valideren en repareren. Verfraai en formatteer JSON. Detecteert syntaxfouten en verbetert de leesbaarheid van de code.';

const faqData = [
  {
    question: 'Zijn mijn gegevens veilig bij het gebruik van deze formatter?',
    answer:
      'Absoluut. Alle verwerking vindt 100% plaats in uw browser (Client-Side). Uw JSON-gegevens worden nooit naar een server verzonden, wat volledige privacy voor uw datastructuren garandeert.',
  },
  {
    question: "Wat veroorzaakt een 'Invalid JSON'-fout?",
    answer:
      'Dit wordt meestal veroorzaakt door extra komma\'s aan het einde van een object, ontbrekende dubbele aanhalingstekens rond keys, of onzichtbare tekens. Onze tool markeert de exacte regel van de fout, zodat u deze kunt herstellen.',
  },
  {
    question: 'Kan het beschadigde JSON repareren?',
    answer:
      'Onze tool probeert automatisch veelvoorkomende fouten te corrigeren, zoals onnodige komma\'s aan het einde of onjuist geformatteerde escapes, zodat de JSON geldig wordt volgens de RFC 8259-standaard.',
  },
  {
    question: 'Ondersteunt het zeer grote JSON-bestanden?',
    answer:
      'Ja, de verwerkingsengine is geoptimaliseerd om complexe datastructuren en grote bestanden te verwerken zonder de interface van de browser te blokkeren.',
  },
];

const howToData = [
  {
    name: 'Plak uw code',
    text: 'Plak uw niet-geformatteerde of geminimaliseerde JSON in het tekstvak.',
  },
  {
    name: 'Valideren en formatteren',
    text: 'Het systeem analyseert automatisch de code, markeert syntaxfouten en past inspringing toe om de leesbaarheid te verbeteren.',
  },
  {
    name: 'Kies een stijl',
    text: 'Kies tussen een uitgebreid (beautify) of gecomprimeerd (minify) formaat, afhankelijk van of u leesbaarheid of ruimtebesparing nodig heeft.',
  },
  {
    name: 'Kopieer het resultaat',
    text: 'Klik op de kopieerknop om de perfect gevalideerde JSON naar uw klembord te kopiëren.',
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
  inLanguage: 'nl',
};

const ui: JsonFormatterUI = {
  labelInput: 'Invoer (JSON)',
  labelOutput: 'Uitvoer',
  btnMinify: 'Minimaliseren',
  btnBeautify: 'Verfraaien',
  btnFix: 'Probeer te repareren',
  btnCopy: 'Kopiëren',
  statusWaiting: 'Wachten op invoer...',
  statusValid: 'Geldige JSON',
  statusInvalid: 'Ongeldige JSON',
  toastCopied: 'Gekopieerd!',
  toastFixed: 'JSON gerepareerd (Preview)',
  toastFixFailed: 'Kon niet automatisch repareren',
  placeholder: 'Plak hier uw JSON...',
};

export const content: ToolLocaleContent<JsonFormatterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Referenties en Standaarden',
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
      name: 'JSON.org – Introductie tot JSON',
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
      text: 'JSON Validatie en Formattering',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'JSON (JavaScript Object Notation) is de de facto standaard voor gegevensuitwisseling op het web. De strikte syntax maakt het echter gevoelig voor menselijke fouten bij handmatige bewerking.',
    },
    {
      type: 'paragraph',
      html: 'Met deze tool kunt u de structuur valideren, de code formatteren om de leesbaarheid te verbeteren en automatisch veelvoorkomende syntaxfouten repareren.',
    },
    { type: 'grid', columns: 2 },
    {
      type: 'card',
      title: 'Veelvoorkomende Fouten die het Repareert',
      html: '<ul><li><strong>Enkele Aanhalingstekens:</strong> De JSON-standaard vereist dubbele aanhalingstekens. De tool converteert <code>\'key\': \'value\'</code> naar <code>"key": "value"</code>.</li><li><strong>Keys zonder Aanhalingstekens:</strong> Detecteert JavaScript-stijl object keys en voegt de nodige aanhalingstekens toe.</li><li><strong>Afsluitende Komma\'s:</strong> Verwijdert komma\'s aan het einde van objecten of arrays (trailing commas) die de strikte parser laten crashen.</li></ul>',
    },
    {
      type: 'card',
      title: 'Kenmerken',
      html: '<ul><li><strong>Syntax Highlighting:</strong> Kleurt keys, strings, getallen en booleans om snel lezen te vergemakkelijken.</li><li><strong>Real-Time Validatie:</strong> Geeft direct aan of de JSON geldig is of toont de specifieke parsingfout.</li><li><strong>Totale Privacy:</strong> Verwerking vindt 100% plaats in uw browser. Er worden geen gegevens naar externe servers verzonden.</li></ul>',
    },
  ],
};

