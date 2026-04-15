import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssSpecificityCalculatorUI } from '../ui';

const slug = 'calcolatore-specificita-css';
const title = 'Calcolatore di Specificità CSS Online. Visualizzatore di Peso del Selettore';
const description =
  'Calcola la specificità e il peso esatto di qualsiasi selettore CSS. Strumento visivo per capire quale regola CSS prevale nella cascata ed evitare di ricorrere a !important.';

const faqData = [
  {
    question: 'Cos\'è la specificità CSS?',
    answer:
      'La specificità è l\'algoritmo che i browser usano per decidere quale regola CSS applicare a un elemento quando più regole sono in competizione. Viene rappresentata come un punteggio a tre colonne (A, B, C) che indica rispettivamente ID, classi/attributi/pseudo-classi ed elementi/pseudo-elementi.',
  },
  {
    question: 'Una classe può mai battere un ID in specificità?',
    answer:
      'No, non direttamente. Un ID (1,0,0) batte sempre qualsiasi numero di classi (0,N,0) perché la specificità non ha riporto numerico tra le colonne. Cento classi (0,100,0) non supereranno mai un singolo ID (1,0,0).',
  },
  {
    question: 'Cosa succede quando due selettori hanno la stessa specificità?',
    answer:
      'Quando due selettori hanno esattamente lo stesso peso, vince quello dichiarato per ultimo nel file CSS. Questo è noto come ordine naturale della cascata. Questo calcolatore ti avvisa visivamente quando si verifica un pareggio.',
  },
  {
    question: 'Perché usare !important è considerato una cattiva pratica?',
    answer:
      'La direttiva !important interrompe la cascata CSS naturale forzando una dichiarazione su qualsiasi altra regola. Questo crea conflitti difficili da risolvere nei progetti grandi. Metodologie come BEM promuovono una specificità piatta per evitare di dover ricorrere a !important.',
  },
];

const howToData = [
  {
    name: 'Inserisci il primo selettore',
    text: 'Digita il Selettore A nel campo di testo a sinistra, ad esempio: #header .nav-item > a. I contatori di ID, Classi ed Elementi si aggiorneranno immediatamente.',
  },
  {
    name: 'Inserisci il secondo selettore',
    text: 'Digita il Selettore B nel campo di testo a destra, ad esempio: ul li.active a:hover. Osserva come cambiano i pesi in tempo reale.',
  },
  {
    name: 'Leggi il risultato',
    text: 'Il calcolatore evidenzierà con un banner verde il blocco del selettore vincente. Se entrambi pareggiano, apparirà un messaggio che spiega come l\'ordine della cascata funge da spareggio.',
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
  inLanguage: 'it',
};

const ui: CssSpecificityCalculatorUI = {
  labelA: 'Selettore A',
  labelB: 'Selettore B',
  placeholderA: 'es. #header .nav-item > a',
  placeholderB: 'es. ul li.active a:hover',
  cardIds: 'ID',
  cardClasses: 'Classi / Pseudo',
  cardElements: 'Elementi',
  bannerWinner: 'Questo selettore vince!',
  msgTie: 'Entrambi i selettori hanno lo stesso peso. Se competono per lo stesso elemento, vince quello scritto <strong>per ultimo</strong> nel CSS.',
};

export const content: ToolLocaleContent<CssSpecificityCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti e Documentazione',
  bibliography: [
    {
      name: 'MDN Web Docs: Specificità CSS',
      url: 'https://developer.mozilla.org/it/docs/Web/CSS/Specificity',
    },
    {
      name: 'W3C: Selectors Level 3 - Specificità',
      url: 'https://www.w3.org/TR/selectors-3/#specificity',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Cos\'è la Specificità CSS?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La specificità CSS è l\'algoritmo con cui i browser decidono quali valori di proprietà applicare a un determinato elemento. È essenzialmente un punteggio matematico che indica al browser "quanto specifica" sia una regola.',
    },
    {
      type: 'paragraph',
      html: 'Se due regole hanno livelli di specificità diversi, vince quella con peso maggiore, indipendentemente dall\'ordine in cui sono state scritte. Se entrambe hanno lo stesso peso, vince l\'ultima dichiarata nel codice sorgente.',
    },
    {
      type: 'title',
      text: 'Come si calcola la specificità CSS',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La specificità si calcola in base a tre categorie che formano un peso a tre colonne, spesso espresso come <strong>(A, B, C)</strong>:',
    },
    {
      type: 'list',
      items: [
        '<strong>Colonna A (ID):</strong> Conta il numero di identificatori univoci. Esempio: <code>#header</code> vale 1 nella colonna A.',
        '<strong>Colonna B (Classi, Attributi e Pseudo-classi):</strong> Conta tutte le classi (<code>.button</code>), gli attributi (<code>[type="text"]</code>) e le pseudo-classi (<code>:hover</code>).',
        '<strong>Colonna C (Elementi e Pseudo-elementi):</strong> Conta tutti gli elementi HTML (<code>div</code>, <code>h1</code>) e i pseudo-elementi (<code>::before</code>).',
      ],
    },
    {
      type: 'title',
      text: 'La regola d\'oro: nessun riporto numerico',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Una regola con specificità (0,50,0) <strong>non sarà mai</strong> più specifica di una regola (1,0,0). <strong>Un singolo ID batte infinite classi.</strong> Le colonne non traboccano mai l\'una nell\'altra.',
    },
    {
      type: 'title',
      text: 'Il problema di !important e l\'architettura BEM',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La direttiva <code>!important</code> è un\'eccezione alle regole di specificità. Quando viene usata, quella dichiarazione sovrascrive automaticamente qualsiasi altra. È considerata una cattiva pratica perché distrugge la cascata naturale.',
    },
    {
      type: 'paragraph',
      html: 'Per evitare guerre di specificità nei progetti grandi, metodologie come <strong>BEM</strong> promuovono l\'uso esclusivo di selettori di classe a un solo livello di profondità, mantenendo artificialmente la specificità piatta a (0,1,0).',
    },
  ],
};
