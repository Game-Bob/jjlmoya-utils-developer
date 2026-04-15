import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlCleanerUI } from '../ui';

const slug = 'pulizia-tracking-url';
const title = 'Pulizia Tracking URL: Rimuovi UTM, FBCLID e GCLID';
const description = 'Rimuovi automaticamente i parametri di tracciamento e pubblicità dai tuoi URL. Condividi link puliti e proteggi la tua privacy digitale in pochi secondi.';

const faqData = [
  {
    question: 'Che tipi di parametri di tracciamento rimuove questo strumento?',
    answer: 'Lo strumento rileva e rimuove automaticamente i parametri di tracciamento più diffusi: UTM (utm_source, utm_medium, ecc.), identificatori di clic pubblicitari (fbclid, gclid, msclkid) e identificatori di campagne email marketing (mc_cid, _hsenc).',
  },
  {
    question: 'Questo influisce sul funzionamento del sito web?',
    answer: 'In genere no. Questi parametri vengono usati quasi esclusivamente per analisi e marketing. Rimuovendoli, la pagina si carica normalmente, ma il proprietario del sito non potrà sapere da dove proveniva il tuo clic.',
  },
  {
    question: 'È sicuro elaborare i miei link qui?',
    answer: 'Assolutamente sì. Come tutti i nostri strumenti, il processo avviene al 100% lato client. I tuoi link non vengono mai inviati ai nostri server; tutto accade in modo privato nel tuo browser.',
  },
  {
    question: 'Perché i miei link di Facebook sono così lunghi?',
    answer: 'Facebook aggiunge un parametro chiamato "fbclid" a tutti i link che escono dalla sua piattaforma. Questo gli consente di tracciare la tua attività su altri siti web, anche se hai bloccato la pubblicità di terze parti.',
  },
];

const howToData = [
  { name: 'Incolla il tuo URL', text: 'Inserisci l\'URL completo che contiene i parametri di tracciamento' },
  { name: 'Clicca su Pulisci', text: 'Lo strumento analizzerà l\'URL in automatico' },
  { name: 'Controlla i risultati', text: 'Vedrai l\'URL pulito e l\'elenco dei parametri rimossi' },
  { name: 'Copia e condividi', text: 'Usa l\'URL pulito nelle email, sui social o nei messaggi' },
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

const ui: UrlCleanerUI = {
  labelInput: 'Incolla l\'URL con i parametri di tracciamento',
  btnClean: 'Pulisci',
  labelCleaned: 'URL Pulito',
  labelRemoved: 'Tracker Rimossi',
  countLabel: 'Parametri rimossi',
  reductionLabel: 'Riduzione della lunghezza',
  noneDetected: 'Nessun parametro di tracciamento comune rilevato.',
  errorInvalid: 'Inserisci un URL valido.',
  btnCopy: 'Copia',
  btnCopied: 'Copiato',
};

export const content: ToolLocaleContent<UrlCleanerUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande frequenti',
  faq: faqData,
  bibliographyTitle: 'Risorse su privacy e tracciamento web',
  bibliography: [
    { name: 'Electronic Frontier Foundation (EFF): Guida al tracciamento online', url: 'https://www.eff.org/issues/online-behavioral-tracking' },
    { name: 'Google Analytics: Documentazione sui parametri UTM', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: 'Privacy sul web: l\'impatto dei Click ID', url: 'https://www.w3.org/community/web-advertising/wiki/Click_Identifiers' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Pulizia Tracking URL: Rimuovi UTM, FBCLID e GCLID', level: 2 },
    {
      type: 'paragraph',
      html: 'Elimina i tracker invisibili dai tuoi link per condividerli in modo pulito, privato e professionale. Scopri cosa significano quei codici strani che compaiono nei tuoi URL.',
    },
    { type: 'title', text: 'Cos\'è uno strumento di pulizia tracking URL e perché ne hai bisogno?', level: 3 },
    {
      type: 'paragraph',
      html: 'Ti è mai capitato di copiare un link da mandare a un amico e accorgerti che è tre volte più lungo del necessario? Quel "rumore" in più sono i parametri di tracciamento. Uno <strong>strumento di pulizia tracking</strong> è pensato per "spogliare" l\'URL di tutte le informazioni pubblicitarie e di tracciamento che le grandi piattaforme iniettano in ogni tuo clic.',
    },
    { type: 'title', text: 'I parametri di tracciamento più comuni', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>UTM (Google Analytics):</strong> utm_source, utm_medium, utm_campaign per tracciare le campagne',
        '<strong>FBCLID:</strong> identificatore di clic di Facebook per aggirare le restrizioni sui cookie',
        '<strong>GCLID / DCLID:</strong> Google Click ID per collegare le visite alle campagne Google Ads',
        '<strong>MSCLKID:</strong> identificatore di clic di Microsoft Advertising e Bing',
        '<strong>HubSpot & Mailchimp:</strong> parametri di marketing automation come _hsenc, mc_cid',
        '<strong>LinkedIn & altri:</strong> li_fat_id e altri tracker dei social media',
      ],
    },
  ],
};
