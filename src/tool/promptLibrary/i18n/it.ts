import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromptLibraryUI } from '../ui';

const slug = 'libreria-prompt-ia';
const title = 'Libreria Prompt IA Privata';
const description = 'Organizza, etichetta e salva i tuoi prompt di ChatGPT, Midjourney e Claude in modo privato. La tua raccolta personale di prompt nel localStorage.';

const faqData = [
  {
    question: 'Dove vengono salvati i miei prompt?',
    answer: 'I tuoi prompt vengono salvati esclusivamente nel localStorage del tuo browser. Non utilizziamo server esterni, il che significa che i tuoi dati sono 100% privati.',
  },
  {
    question: 'Cosa succede se cancello i cookie o la cronologia del browser?',
    answer: 'Se cancelli i dati del sito o il localStorage del browser, perderai i prompt salvati. Ti consigliamo di fare dei backup se pulisci frequentemente il browser.',
  },
  {
    question: 'Posso usare questo strumento per Midjourney, ChatGPT o DALL-E?',
    answer: 'Sì, è compatibile con qualsiasi tipo di istruzione AI. Puoi creare tag specifici per organizzare i tuoi comandi e copiarli facilmente nel tuo strumento AI preferito.',
  },
];

const howToData = [
  { name: 'Crea un prompt', text: 'Clicca sul pulsante Nuovo Prompt e inserisci il titolo e l\'istruzione.' },
  { name: 'Aggiungi tag', text: 'Digita i tag separati da spazio o virgola per classificare i tuoi prompt.' },
  { name: 'Usa le variabili', text: 'Usa le parentesi quadre [COME QUESTE] nel testo per creare campi compilabili sulla scheda.' },
  { name: 'Copia e condividi', text: 'Copia negli appunti con un solo clic o condividi un link diretto con il pulsante di condivisione.' },
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

const ui: PromptLibraryUI = {
  placeholderSearch: 'Cerca per parola chiave o tag...',
  btnNew: 'Nuovo Prompt',
  emptyTitle: 'La tua libreria è vuota',
  emptyDesc: 'Crea il tuo primo prompt e inizia a costruire il tuo archivio AI personale.',
  btnAddFirst: 'Aggiungi il primo',
  modalTitleCreate: 'Crea Nuovo Prompt',
  modalTitleEdit: 'Modifica Prompt',
  labelTitle: 'Titolo identificativo',
  placeholderTitle: 'Es: Esperto di Marketing SEO',
  labelContent: 'Istruzione (Prompt)',
  placeholderContent: 'Scrivi qui le istruzioni dettagliate per l\'AI...',
  hintContent: 'Suggerimento: usa le parentesi quadre [COME QUESTE] per compilare le variabili in seguito.',
  labelTags: 'Tag',
  placeholderTags: 'Es: marketing, seo (spazio o virgola per aggiungere)',
  btnCancel: 'Annulla',
  btnSave: 'Salva in Locale',
  ariaLabelStar: 'Metti in evidenza il prompt',
  ariaLabelEdit: 'Modifica prompt',
  ariaLabelShare: 'Condividi prompt',
  ariaLabelCopy: 'Copia prompt',
  ariaLabelDelete: 'Elimina prompt',
  varsTitle: 'Variabili richieste',
  noResults: 'Nessun prompt trovato per questa ricerca.',
  confirmTitle: 'Eliminare il prompt?',
  confirmDesc: 'Questa azione non può essere annullata.',
  btnCancelDelete: 'Annulla',
  btnConfirmDelete: 'Elimina definitivamente',
};

export const content: ToolLocaleContent<PromptLibraryUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti sul Prompt Engineering',
  bibliography: [
    { name: 'Prompt Engineering Guide (DAIR.AI)', url: 'https://www.promptingguide.ai/' },
    { name: 'Che cos\'è il prompt engineering (Google Cloud)', url: 'https://cloud.google.com/discover/what-is-prompt-engineering' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Perché hai bisogno di una Libreria Prompt?', level: 2 },
    {
      type: 'paragraph',
      html: 'Se lavori regolarmente con strumenti AI come ChatGPT, Claude o Midjourney, di sicuro ti sarà capitato di riscrivere le stesse istruzioni più volte. Una <strong>libreria di prompt</strong> è la soluzione definitiva per smettere di perdere tempo a riformulare i tuoi comandi preferiti.',
    },
    { type: 'title', text: 'Vantaggi dell\'organizzazione dei prompt', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Ricerca istantanea:</strong> Trova quella specifica istruzione usata mesi fa con una semplice ricerca testuale.',
        '<strong>Classificazione per tag:</strong> Etichetta i tuoi prompt come "marketing", "programmazione" o "copywriting" per filtrare rapidamente.',
        '<strong>Copia in un clic:</strong> Copia il testo completo negli appunti con un solo clic.',
        '<strong>Privacy totale:</strong> Tutti i tuoi dati vengono salvati localmente nel browser tramite localStorage.',
      ],
    },
    { type: 'title', text: 'Variabili nei tuoi prompt', level: 3 },
    {
      type: 'paragraph',
      html: 'Usa la notazione <strong>[VARIABILE]</strong> nei tuoi prompt per creare campi compilabili dinamicamente. Quando apri una scheda, appariranno degli input per ogni variabile definita. Il prompt viene copiato con i valori compilati, pronto da incollare nella tua AI.',
    },
    { type: 'title', text: 'Condividere i prompt', level: 3 },
    {
      type: 'paragraph',
      html: 'Ogni prompt può essere condiviso tramite un URL. Il pulsante di condivisione genera un link che, quando aperto, mostra il modulo di creazione precompilato con il contenuto del prompt.',
    },
  ],
};
