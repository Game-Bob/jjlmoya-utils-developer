import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConversorExcelCsvHtmlUI } from '../ui';

const slug = 'excel-csv-html-tabell-konverterare';
const title = 'Excel och CSV till HTML tabellkonverterare kodgenerator';
const description = 'Konvertera dina Excel- eller CSV-data till rena, semantiska HTML-tabeller direkt. Gratis verktyg för utvecklare och innehållsskapare.';

const faqData = [
  {
    question: 'Hur konverterar jag en Excel-fil (.xlsx) till HTML?',
    answer: 'Öppna först din fil i Excel och spara den som CSV (kommaseparerad). Ladda sedan upp den CSV-filen till vårt verktyg eller klistra in dess innehåll för att få HTML-tabellkoden.',
  },
  {
    question: 'Innehåller den genererade koden CSS-stilar?',
    answer: 'Generatorn producerar ren HTML med valfria klasser för kantlinjer och zebraränder. Slutliga visuella stilar beror på din webbplats egna CSS, vilket säkerställer perfekt integration.',
  },
  {
    question: 'Kan jag ladda upp mycket stora CSV-filer?',
    answer: 'Ja, vårt verktyg bearbetar data lokalt i din webbläsare. Det betyder att det är mycket snabbt och säkert, eftersom dina data aldrig skickas över internet.',
  },
  {
    question: 'Är det kompatibelt med Google Sheets?',
    answer: 'Absolut. Gå till Arkiv > Ladda ner > Kommaseparerade värden (.csv) i Google Sheets och använd den filen med vårt verktyg.',
  },
];

const howToData = [
  {
    name: 'Förbered dina data',
    text: 'Ha din Excel- eller CSV-fil redo. Se till att datan är ren.',
  },
  {
    name: 'Ladda datan',
    text: 'Klistra in CSV-texten i inmatningsområdet eller dra filen direkt till konverteraren.',
  },
  {
    name: 'Konfigurera tabellen',
    text: 'Välj om du vill använda den första raden som rubrik och om du vill ha grundläggande stilar.',
  },
  {
    name: 'Kopiera koden',
    text: 'Byt till fliken "HTML-kod" och kopiera resultatet för att klistra in på din webbplats.',
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
  inLanguage: 'sv',
};

const ui: ConversorExcelCsvHtmlUI = {
  csvInputLabel: 'Klistra in din CSV här',
  csvInputPlaceholder: 'Namn,Ålder,Stad\nErik,25,Stockholm\nAnna,30,Göteborg',
  uploadLabel: 'Eller ladda upp din fil (CSV)',
  dragDropLabel: 'Dra och släpp din fil här',
  headerCheckboxLabel: 'Använd första raden som rubrik',
  bordersCheckboxLabel: 'Lägg till kantlinjer',
  stripeCheckboxLabel: 'Zebraränder',
  previewTabLabel: 'Förhandsgranskning',
  codeTabLabel: 'HTML-kod',
  emptyStateLabel: 'Ange data för att se tabellen',
  copyButtonLabel: 'Kopiera kod',
  copiedLabel: 'Kopierad!',
};

export const content: ToolLocaleContent<ConversorExcelCsvHtmlUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Resurser om HTML-tabeller och dataformat',
  bibliography: [
    { name: 'W3C: HTML-tabeller', url: 'https://www.w3.org/WAI/tutorials/tables/' },
    { name: 'MDN: HTML table-element', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table' },
    { name: 'RFC 4180: CSV-format', url: 'https://tools.ietf.org/html/rfc4180' },
    { name: 'Google Sheets: Ladda ner dina data', url: 'https://support.google.com/docs/answer/183965' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Konvertera Excel och CSV till HTML-tabeller enkelt', level: 2 },
    {
      type: 'paragraph',
      html: 'I modern webbutveckling är presentation av tabelldata ett av de mest effektiva sätten att förmedla strukturerad information. Att manuellt konvertera data från ett kalkylblad som <strong>Excel</strong> eller en <strong>CSV</strong>-fil till HTML-taggar som <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> och <code>&lt;td&gt;</code> är dock tröttsamt och felbenäget.',
    },
    { type: 'title', text: 'Varför använda semantiska HTML-tabeller?', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Tillgänglighet:</strong> Skärmläsare kan tolka strukturen och hjälpa användare med synnedsättning.',
        '<strong>SEO:</strong> Sökmotorer indexerar cellinnehåll, vilket förbättrar dina datas rankning.',
        '<strong>Responsivitet:</strong> Med lite CSS kan HTML-tabeller anpassas till mobila enheter.',
        '<strong>Underhållsbarhet:</strong> Det är mycket lättare att redigera data i HTML än att generera om en hel bild.',
      ],
    },
    { type: 'title', text: 'Hur Excel till HTML-konverteraren fungerar', level: 3 },
    {
      type: 'paragraph',
      html: 'Vårt verktyg använder en inbyggd textparser som bearbetar kommaseparerade filer (CSV). De flesta kalkylprogram, inklusive Microsoft Excel, Google Sheets och LibreOffice Calc, låter dig exportera dina data i CSV-format.',
    },
  ],
};
