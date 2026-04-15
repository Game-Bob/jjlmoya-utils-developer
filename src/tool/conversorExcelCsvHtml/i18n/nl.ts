import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConversorExcelCsvHtmlUI } from '../ui';

const slug = 'excel-csv-html-tabel-omzetter';
const title = 'Excel en CSV naar HTML Tabel Converter Code Generator';
const description = 'Converteer uw Excel- of CSV-gegevens direct naar schone, semantische HTML-tabellen. Gratis tool voor ontwikkelaars en contentmakers.';

const faqData = [
  {
    question: 'Hoe converteer ik een Excel-bestand (.xlsx) naar HTML?',
    answer: 'Open eerst uw bestand in Excel en sla het op als CSV (door komma\'s gescheiden). Upload dat CSV-bestand naar onze tool of plak de inhoud ervan om de HTML-tabelcode te krijgen.',
  },
  {
    question: 'Bevat de gegenereerde code CSS-stijlen?',
    answer: 'De generator produceert schone HTML met optionele klassen voor randen und zebra-strepen. De uiteindelijke visuele stijlen hangen af van de eigen CSS van uw website, wat zorgt voor een perfecte integratie.',
  },
  {
    question: 'Kan ik zeer grote CSV-bestanden uploaden?',
    answer: 'Ja, onze tool verwerkt gegevens lokaal in uw browser. Dit betekent dat het erg snel en veilig is, omdat uw gegevens nooit over het internet reizen.',
  },
  {
    question: 'Is het compatibel met Google Sheets?',
    answer: 'Absoluut. Ga in Google Sheets naar Bestand > Downloaden > Komma-gescheiden waarden (.csv) en gebruik dat bestand met onze tool.',
  },
];

const howToData = [
  {
    name: 'Bereid uw gegevens voor',
    text: 'Houd uw Excel- of CSV-bestand gereed. Zorg ervoor dat de gegevens schoon zijn.',
  },
  {
    name: 'Laad de gegevens',
    text: 'Plak de CSV-tekst in het invoerveld of sleep het bestand rechtstreeks naar de converter.',
  },
  {
    name: 'Configureer de tabel',
    text: 'Kies of u de eerste rij als koptekst wilt gebruiken en of u basisstijlen wilt.',
  },
  {
    name: 'Kopieer de code',
    text: 'Ga naar het tabblad "HTML-code" en kopieer het resultaat om op uw website te plakken.',
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
  inLanguage: 'nl',
};

const ui: ConversorExcelCsvHtmlUI = {
  csvInputLabel: 'Plak hier uw CSV',
  csvInputPlaceholder: 'Naam,Leeftijd,Stad\nJan,25,Amsterdam\nAn,30,Rotterdam',
  uploadLabel: 'Of upload uw bestand (CSV)',
  dragDropLabel: 'Sleep uw bestand hierheen',
  headerCheckboxLabel: 'Gebruik eerste rij als koptekst',
  bordersCheckboxLabel: 'Randen toevoegen',
  stripeCheckboxLabel: 'Zebra-strepen',
  previewTabLabel: 'Voorbeeld',
  codeTabLabel: 'HTML-code',
  emptyStateLabel: 'Voer gegevens in om de tabel te zien',
  copyButtonLabel: 'Code kopiëren',
  copiedLabel: 'Gekopieerd!',
};

export const content: ToolLocaleContent<ConversorExcelCsvHtmlUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Bronnen over HTML-tabellen en gegevensformaten',
  bibliography: [
    { name: 'W3C: HTML-tabellen', url: 'https://www.w3.org/WAI/tutorials/tables/' },
    { name: 'MDN: HTML table-element', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table' },
    { name: 'RFC 4180: CSV-formaat', url: 'https://tools.ietf.org/html/rfc4180' },
    { name: 'Google Sheets: Download uw gegevens', url: 'https://support.google.com/docs/answer/183965' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Converteer Excel en CSV eenvoudig naar HTML-tabellen', level: 2 },
    {
      type: 'paragraph',
      html: 'In moderne webontwikkeling is het presenteren van tabelgegevens een van de meest effectieve manieren om gestructureerde informatie over te dragen. Het handmatig converteren van gegevens uit een spreadsheet zoals <strong>Excel</strong> of een <strong>CSV</strong>-bestand naar HTML <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, en <code>&lt;td&gt;</code> tags is echter tijdrovend en foutgevoelig.',
    },
    { type: 'title', text: 'waarom semantische HTML-tabellen gebruiken?', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Toegankelijkheid:</strong> Schermlezers kunnen de structuur interpreteren en gebruikers met visuele beperkingen helpen.',
        '<strong>SEO:</strong> Zoekmachines indexeren de celinhoud, wat de ranking van uw gegevens verbetert.',
        '<strong>Responsiviteit:</strong> Met wat CSS kunnen HTML-tabellen zich aanpassen aan mobiele apparaten.',
        '<strong>Onderhoudbaarheid:</strong> Het is veel gemakkelijker om gegevens in HTML te bewerken dan om een hele afbeelding opnieuw te genereren.',
      ],
    },
    { type: 'title', text: 'Hoe de Excel naar HTML Converter werkt', level: 3 },
    {
      type: 'paragraph',
      html: 'Onze tool maakt gebruik van een eigen tekstparser die door komma\'s gescheiden bestanden (CSV) verwerkt. De meeste spreadsheetprogramma\'s, waaronder Microsoft Excel, Google Sheets en LibreOffice Calc, bieden de mogelijkheid om uw gegevens in CSV-formaat te exporteren.',
    },
  ],
};
