import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConversorExcelCsvHtmlUI } from '../ui';

const slug = 'convertitore-excel-csv-html';
const title = 'Generatore di codice convertitore da Excel e CSV a tabella HTML';
const description = 'Converti istantaneamente i tuoi dati Excel o CSV in tabelle HTML pulite e semantiche. Strumento gratuito per sviluppatori e creatori di contenuti.';

const faqData = [
  {
    question: 'Come posso convertire un file Excel (.xlsx) in HTML?',
    answer: 'Per prima cosa, apri il tuo file in Excel e salvalo come CSV (separato da virgole). Quindi, carica quel file CSV nel nostro strumento o incolla il suo contenuto per ottenere il codice della tabella HTML.',
  },
  {
    question: 'Il codice generato include stili CSS?',
    answer: 'Il generatore produce HTML pulito con classi opzionali per bordi e strisce alternate. Gli stili visivi finali dipendono dal CSS del tuo sito web, garantendo una perfetta integrazione.',
  },
  {
    question: 'Posso caricare file CSV molto grandi?',
    answer: 'Sì, il nostro strumento elabora i dati localmente nel tuo browser. Ciò significa che è molto veloce e sicuro, poiché i tuoi dati non viaggiano mai su Internet.',
  },
  {
    question: 'È compatibile con Google Sheets?',
    answer: 'Assolutamente sì. In Google Sheets, vai su File > Scarica > Valori separati da virgola (.csv) e usa quel file con il nostro strumento.',
  },
];

const howToData = [
  {
    name: 'Prepara i tuoi dati',
    text: 'Tieni pronto il tuo file Excel o CSV. Assicurati che i dati siano puliti.',
  },
  {
    name: 'Carica i dati',
    text: 'Incolla il testo CSV nell\'area di input o trascina il file direttamente nel convertitore.',
  },
  {
    name: 'Configura la tabella',
    text: 'Scegli se usare la prima riga come intestazione e se desideri degli stili di base.',
  },
  {
    name: 'Copia il codice',
    text: 'Passa alla scheda "Codice HTML" e copia il risultato da incollare nel tuo sito web.',
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
  inLanguage: 'it',
};

const ui: ConversorExcelCsvHtmlUI = {
  csvInputLabel: 'Incolla qui il tuo CSV',
  csvInputPlaceholder: 'Nome,Età,Città\nMario,25,Roma\nAnna,30,Milano',
  uploadLabel: 'Oppure carica il tuo file (CSV)',
  dragDropLabel: 'Trascina qui il tuo file',
  headerCheckboxLabel: 'Usa la prima riga come intestazione',
  bordersCheckboxLabel: 'Aggiungi bordi',
  stripeCheckboxLabel: 'Strisce alternate',
  previewTabLabel: 'Anteprima',
  codeTabLabel: 'Codice HTML',
  emptyStateLabel: 'Inserisci i dati per vedere la tabella',
  copyButtonLabel: 'Copia Codice',
  copiedLabel: 'Copiato!',
};

export const content: ToolLocaleContent<ConversorExcelCsvHtmlUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Risorse su tabelle HTML e formati dati',
  bibliography: [
    { name: 'W3C: Tabelle HTML', url: 'https://www.w3.org/WAI/tutorials/tables/' },
    { name: 'MDN: Elemento tabella HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table' },
    { name: 'RFC 4180: Formato CSV', url: 'https://tools.ietf.org/html/rfc4180' },
    { name: 'Google Sheets: Scarica i tuoi dati', url: 'https://support.google.com/docs/answer/183965' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Converti facilmente Excel e CSV in tabelle HTML', level: 2 },
    {
      type: 'paragraph',
      html: 'Nello sviluppo web moderno, la presentazione di dati tabulari è uno dei modi più efficaci per trasmettere informazioni strutturate. Tuttavia, convertire manualmente i dati da un foglio di calcolo come <strong>Excel</strong> o un file <strong>CSV</strong> in tag HTML <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> e <code>&lt;td&gt;</code> è noioso e soggetto a errori.',
    },
    { type: 'title', text: 'Perché usare tabelle HTML semantiche?', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Accessibilità:</strong> gli screen reader possono interpretare la struttura e aiutare gli utenti con disabilità visive.',
        '<strong>SEO:</strong> i motori di ricerca indicizzano il contenuto delle celle, migliorando il posizionamento dei tuoi dati.',
        '<strong>Responsività:</strong> con un po\' di CSS, le tabelle HTML possono adattarsi ai dispositivi mobili.',
        '<strong>Mantenibilità:</strong> è molto più facile modificare i dati in HTML che rigenerare un\'intera immagine.',
      ],
    },
    { type: 'title', text: 'Come funziona il convertitore da Excel a HTML', level: 3 },
    {
      type: 'paragraph',
      html: 'La nostra utility utilizza un parser di testo nativo che elabora i file separati da virgole (CSV). La maggior parte dei programmi di fogli di calcolo, tra cui Microsoft Excel, Google Sheets e LibreOffice Calc, consente di esportare i dati in formato CSV.',
    },
  ],
};
