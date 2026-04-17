import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UtmGeneratorUI } from '../ui';

const slug = 'generatore-parametri-utm';
const title = 'Generatore di Parametri UTM per Google Analytics';
const description = 'Crea link di tracciamento precisi per le tue campagne di marketing digitale. Ottimizzato per Google Analytics e altri strumenti di analisi.';

const faqData = [
  {
    question: 'L\'uso dei parametri UTM è dannoso per la SEO?',
    answer: 'No, a condizione che utilizzi i tag canonical. I motori di ricerca comprendono che i parametri UTM servono per le analisi e non creano contenuti duplicati.',
  },
  {
    question: 'Dovrei usare i parametri UTM per i link interni?',
    answer: 'No, mai. I tag UTM sui link interni interrompono la sessione utente in strumenti come Google Analytics, distorcendo i dati sul traffico.',
  },
  {
    question: 'Google Analytics distingue tra maiuscole e minuscole negli UTM?',
    answer: 'Sì. "google", "Google" e "GOOGLE" verranno trattati come sorgenti diverse. Mantieni sempre la coerenza, preferibilmente usando solo lettere minuscole.',
  },
];

const howToData = [
  { name: 'Inserisci l\'URL', text: 'Inserisci l\'URL completo del tuo sito web, includendo https://' },
  { name: 'Definisci la sorgente', text: 'Specifica da dove proviene il traffico (google, facebook, newsletter, ecc.)' },
  { name: 'Seleziona il mezzo', text: 'Scegli il tipo di canale (cpc, email, social, organic, ecc.)' },
  { name: 'Dai un nome alla campagna', text: 'Assegna un nome identificativo per raggruppare i tuoi sforzi di marketing' },
  { name: 'Copia e usa', text: 'Copia l\'URL generato e usalo nei tuoi post, annunci o firme email' },
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

const ui: UtmGeneratorUI = {
  labelUrl: 'URL del sito web (es. https://example.com) *',
  labelSource: 'Sorgente campagna (es. google, newsletter) *',
  labelMedium: 'Mezzo campagna (es. cpc, email)',
  labelCampaign: 'Nome campagna (es. offerta_estate)',
  labelTerm: 'Termine campagna (es. acquisto_scarpe)',
  labelContent: 'Contenuto campagna (es. banner_superiore)',
  labelGenerated: 'URL Generata:',
  btnCopy: 'Copia Link',
  btnCopied: 'Copiato!',
  errorInvalid: 'Inserisci un URL valido',
  errorInvalidUrl: 'URL non valido',
};

export const content: ToolLocaleContent<UtmGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti',
  bibliography: [
    { name: 'Raccogliere i dati delle campagne con URL personalizzati - Guida di Google Analytics (2024)', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: 'Best Practices for Campaign URL Tagging - VWO Blog (2023)', url: 'https://vwo.com/blog/utm-tagging-best-practices/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Generatore UTM: Parametri di Tracciamento per Google Analytics', level: 2 },
    {
      type: 'paragraph',
      html: 'I parametri <strong>UTM</strong> (Urchin Tracking Module) sono etichette di testo aggiunte alla fine di un URL per tracciare il traffico web. Il nostro generatore semplifica la creazione di link tracciabili per le tue campagne di marketing digitale.',
    },
    { type: 'title', text: 'I 5 Pilastri di un URL Tracciabile', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Sorgente Campagna:</strong> Identifica il motore di ricerca, il social network o l\'origine del traffico. Esempio: google, newsletter, facebook.',
        '<strong>Mezzo Campagna:</strong> Si riferisce al canale di marketing. Esempio: cpc, email, social, banner, organic.',
        '<strong>Nome Campagna:</strong> Il nome specifico della tua campagna. Esempio: offerta_estate_2025, lancio_app_v2.',
        '<strong>Termine Campagna:</strong> Per la ricerca a pagamento, le parole chiave per cui fai un\'offerta. Esempio: acquisto_scarpe_sportive.',
        '<strong>Contenuto Campagna:</strong> Per i test A/B. Differenzia elementi simili all\'interno di una campagna. Esempio: header_v1, sidebar_v2.',
      ],
    },
    { type: 'title', text: 'Best Practice per il Tagging UTM', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Coerenza tra maiuscole e minuscole:</strong> Gli strumenti differenziano tra "Google", "GOOGLE" e "google". Usa sempre il minuscolo per evitare duplicati.',
        '<strong>Evita gli spazi:</strong> Gli spazi diventano %20. Usa trattini (-) o underscore (_) al loro posto.',
        '<strong>Non usare sui link interni:</strong> Il tracciamento UTM è esclusivamente per il traffico esterno. Sui link interni, interrompe la sessione e rovina le metriche chiave.',
        '<strong>Documenta i tuoi tag:</strong> Tieni traccia di tutte le combinazioni che utilizzi per evitare incongruenze.',
      ],
    },
  ],
};

