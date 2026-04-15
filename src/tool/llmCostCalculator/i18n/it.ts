import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LlmCostCalculatorUI } from '../ui';

const slug = 'llm-cost-calculator-it';
const title = 'Calcolatore Costi LLM. Stimatore Prezzi API per Modelli AI';
const description =
  'Strumento online gratuito per stimare il costo delle chiamate alle API dei modelli linguistici. Confronta GPT-4o, Claude, Gemini, Llama e altri con i prezzi reali per milione di token.';

const faqData = [
  {
    question: 'Come si calcola il costo di una API LLM?',
    answer:
      'Le API LLM addebitano separatamente i token di input (il prompt) e i token di output (la risposta). Il costo totale per richiesta è: (token input × prezzo input + token output × prezzo output) / 1.000.000. Moltiplica per il numero di richieste per ottenere il costo mensile totale.',
  },
  {
    question: 'Cosa sono i token e come si relazionano con le parole?',
    answer:
      'Un token è l\'unità di base del testo elaborata da un modello linguistico. In media, 1 token equivale a circa 0,75 parole in inglese, quindi 1.000 token ≈ 750 parole. I prezzi vengono indicati per milione di token ($/1M), che è l\'unità di tariffazione standard tra tutti i provider.',
  },
  {
    question: 'Perché i token di output costano più di quelli di input?',
    answer:
      'Generare testo (output) richiede che il modello calcoli ogni token in sequenza, il che è computazionalmente più intensivo della lettura dell\'input. La maggior parte dei provider addebita da 3 a 5 volte di più per i token di output rispetto a quelli di input.',
  },
  {
    question: 'Come posso ridurre i costi della mia API LLM?',
    answer:
      'Usa il modello più piccolo che soddisfa i tuoi requisiti di qualità. Metti in cache i prompt ripetuti quando possibile. Riduci al minimo la lunghezza del system prompt ed evita il contesto non necessario. Per compiti semplici di classificazione o estrazione, modelli più piccoli come GPT-4o mini o Gemini Flash offrono risparmi significativi.',
  },
];

const howToData = [
  {
    name: 'Seleziona un modello',
    text: 'Scegli il modello AI che intendi utilizzare dal menu a tendina raggruppato. I modelli sono organizzati per provider.',
  },
  {
    name: 'Inserisci il numero di token',
    text: 'Inserisci il numero atteso di token di input (il tuo prompt) e di token di output (la risposta). Sotto ogni campo compare una stima in parole.',
  },
  {
    name: 'Imposta il numero di richieste',
    text: 'Usa il cursore o il campo numerico per inserire quante chiamate API prevedi. Il costo totale si aggiorna in tempo reale.',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'it',
};

const ui: LlmCostCalculatorUI = {
  labelModel: 'Modello LLM',
  labelInputTokens: 'Token di input',
  labelOutputTokens: 'Token di output',
  labelRequests: 'Numero di richieste',
  unitWords: 'parole',
  labelCostPerRequest: 'Costo per richiesta',
  labelTotal: 'Costo totale stimato',
  labelInput: 'Input',
  labelOutput: 'Output',
};

export const content: ToolLocaleContent<LlmCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti e fonti dei prezzi',
  bibliography: [
    {
      name: 'Prezzi API OpenAI',
      url: 'https://openai.com/pricing',
    },
    {
      name: 'Prezzi API Anthropic',
      url: 'https://www.anthropic.com/pricing',
    },
    {
      name: 'Prezzi Google AI Studio',
      url: 'https://ai.google.dev/pricing',
    },
    {
      name: 'Tokenizer OpenAI',
      url: 'https://platform.openai.com/tokenizer',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Come funziona la tariffazione delle API LLM',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le API dei modelli linguistici addebitano in base all\'utilizzo dei token, non al tempo o al numero di richieste. Ogni chiamata ha due costi: il <strong>costo di input</strong> (elaborazione del tuo prompt) e il <strong>costo di output</strong> (generazione della risposta). Comprendere questa distinzione è fondamentale per stimare con precisione la tua spesa mensile.',
    },
    {
      type: 'title',
      text: 'Token di input e token di output a confronto',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'Token di input',
      html: '<p>I token di input rappresentano tutto ciò che viene inviato <strong>al</strong> modello: il system prompt, la cronologia della conversazione e il messaggio dell\'utente. Costano meno perché il modello li elabora in parallelo. Un system prompt tipico di 200 parole genera circa 267 token di input.</p>',
    },
    {
      type: 'card',
      title: 'Token di output',
      html: '<p>I token di output vengono generati uno per uno in sequenza, rendendoli più costosi dal punto di vista computazionale. La maggior parte dei provider addebita <strong>da 3 a 5 volte di più</strong> per i token di output. Una risposta di 300 parole genera circa 400 token di output. Mantenere le risposte concise è una delle strategie di risparmio più efficaci.</p>',
    },
    {
      type: 'title',
      text: 'Scegliere il modello giusto per il tuo budget',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Inizia con un modello di fascia media come <code>GPT-4o mini</code> o <code>Gemini 1.5 Flash</code> e passa a un modello superiore solo se la qualità non è sufficiente. La differenza di costo tra un modello piccolo e uno grande può essere da 10 a 100 volte.',
    },
    {
      type: 'paragraph',
      html: 'Non tutte le attività richiedono lo stesso livello di modello. Classificazione, estrazione e riassunti spesso funzionano bene anche con modelli più piccoli ed economici. Riserva i grandi modelli frontier come <code>claude-3-opus</code> o <code>o1</code> per i ragionamenti complessi dove la qualità influisce direttamente sui risultati.',
    },
  ],
};

