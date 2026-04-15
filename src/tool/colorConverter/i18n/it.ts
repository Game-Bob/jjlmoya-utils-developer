import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ColorConverterUI } from '../ui';

const slug = 'convertitore-colore-rgb-hex-hsl';
const title = 'Convertitore Colore Online RGB HEX e HSL';
const description = 'Converti i colori tra RGB, HEX e HSL istantaneamente. Genera armonie cromatiche complementari e analizza il contrasto WCAG. 100% lato client e privato.';

const faqData = [
  {
    question: 'Come funziona il convertitore di colori da RGB a HEX e HSL?',
    answer: 'Lo strumento prende i valori di Rosso, Verde e Blu (RGB) e utilizza algoritmi matematici per convertirli nel loro equivalente esadecimale (HEX) o nei valori di Tonalità, Saturazione, Luminosità (HSL). Funziona anche al contrario.',
  },
  {
    question: 'Perché dovrei usare HSL invece di HEX nei miei progetti?',
    answer: 'Il formato HSL è molto più intuitivo. Permette di regolare la saturazione o la luminosità senza cambiare la tonalità, rendendo molto più facile creare tavolozze armoniche o stati dei pulsanti (hover, disabilitato).',
  },
  {
    question: 'Cos\'è il valore di contrasto relativo?',
    answer: 'È una metrica che indica la leggibilità del testo rispetto a uno sfondo basata sulla sua luminanza. Un contrasto elevato assicura che le persone con disabilità visive possano leggere il contenuto, seguendo le linee guida sull\'accessibilità WCAG.',
  },
  {
    question: 'È sicuro usare questo convertitore di colori online?',
    answer: 'Assolutamente sì. Essendo al 100% lato client, i dati sui tuoi colori non lasciano mai il tuo computer. Tutta l\'elaborazione avviene direttamente nel tuo browser, garantendo privacy e prestazioni istantanee.',
  },
];

const howToData = [
  { name: 'Seleziona un colore', text: 'Usa i cursori Rosso, Verde e Blu o digita un codice HEX direttamente nel campo di testo.' },
  { name: 'Regola i canali RGB', text: 'Sposta i cursori per cambiare l\'intensità di ogni canale e vedere l\'aggiornamento in tempo reale.' },
  { name: 'Copia il formato', text: 'Fai clic sul pulsante Copia accanto al formato HEX, RGB o HSL di cui hai bisogno.' },
  { name: 'Esplora le armonie', text: 'Fai clic sui colori delle armonie (complementari, analoghi, triadici) per copiarli negli appunti.' },
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

const ui: ColorConverterUI = {
  labelPreview: 'Anteprima (clicca per copiare HEX)',
  labelHarmonies: 'Armonie Cromatiche',
  labelR: 'Rosso',
  labelG: 'Verde',
  labelB: 'Blu',
  labelComp: 'Comp.',
  labelAna1: 'Analogo 1',
  labelAna2: 'Analogo 2',
  labelTri1: 'Triade 1',
  labelTri2: 'Triade 2',
  btnCopy: 'Copia',
  btnCopied: 'Copiato',
  contrastLabel: 'Contrasto',
  clickToCopy: 'Clicca per copiare',
};

export const content: ToolLocaleContent<ColorConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Risorse di Design del Colore e Web',
  bibliography: [
    { name: 'W3C: Documentazione del colore CSS', url: 'https://www.w3.org/TR/css-color-4/' },
    { name: 'MDN: Guida al modello di colore HSL', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl' },
    { name: 'WebAIM: Guida al contrasto e all\'accessibilità', url: 'https://webaim.org/resources/contrastchecker/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Convertitore Colore da RGB a HEX e HSL per Sviluppatori', level: 2 },
    {
      type: 'paragraph',
      html: 'Nel mondo dello <strong>sviluppo frontend</strong> e del <strong>design UI/UX</strong>, la gestione del colore è un compito costante. Il nostro <strong>convertitore di colori online</strong> ti permette di trasformare i valori tra <strong>HEX, RGB e HSL</strong> istantaneamente e con precisione matematica.',
    },
    { type: 'title', text: 'Formati di Colore: HEX, RGB e HSL', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>HEX (Esadecimale):</strong> Lo standard di fatto per i CSS. Compatto e facile da condividere nel codice.',
        '<strong>RGB (Red, Green, Blue):</strong> Basato sul sistema di luce additiva. Ideale per manipolare i canali direttamente o applicare la trasparenza con RGBA.',
        '<strong>HSL (Hue, Saturation, Lightness):</strong> Il formato più intuitivo. Regola tonalità, saturazione e luminosità per creare tavolozze armoniche.',
      ],
    },
    { type: 'title', text: 'Contrasto e accessibilità WCAG', level: 3 },
    {
      type: 'paragraph',
      html: 'Il calcolatore include una misurazione del <strong>contrasto relativo</strong> basata sulla luminanza. Questo ti aiuta a rispettare le linee guida <strong>WCAG</strong>, assicurando che il tuo testo sia leggibile rispetto agli sfondi selezionati.',
    },
    { type: 'title', text: 'Armonie automatiche dei colori', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Complementare:</strong> Il colore opposto sulla ruota dei colori, ideale per il massimo contrasto.',
        '<strong>Analogo:</strong> Colori adiacenti che creano transizioni morbide e armoniche.',
        '<strong>Triadico:</strong> Tre colori equidistanti per composizioni vibranti e bilanciate.',
      ],
    },
  ],
};
