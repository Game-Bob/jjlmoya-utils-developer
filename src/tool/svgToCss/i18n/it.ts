import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgToCssUI } from '../ui';

const slug = 'convertitore-svg-in-css';
const title = 'Convertitore Online gratuito da SVG a CSS e Data URI';
const description =
  'Trasforma i tuoi grafici vettoriali e icone SVG in codice CSS (Background o Mask) o in Data URI compressi. Ottimizza le prestazioni del tuo sito web eliminando le richieste HTTP esterne.';

const faqData = [
  {
    question: 'È meglio usare un Data URI o un file .svg esterno?',
    answer:
      'Dipende dal caso d\'uso. I Data URI eliminano le richieste HTTP (ideale per piccole icone), ma aumentano le dimensioni del file CSS. Per illustrazioni grandi o ricche di dettagli, è preferibile un file esterno.',
  },
  {
    question: 'Come posso cambiare il colore di un SVG incorporato nel CSS?',
    answer:
      'Il modo migliore è tramite "mask-image". Definendo l\'SVG come maschera, puoi usare "background-color" per cambiarne il colore dinamicamente, anche negli stati :hover.',
  },
  {
    question: 'Quali browser supportano le CSS Masks?',
    answer:
      'Tutti i browser moderni (Chrome, Firefox, Safari, Edge) hanno il pieno supporto. Per i browser più vecchi, vengono comunemente usati i prefissi -webkit-.',
  },
  {
    question: 'L\'uso dei Data URI influisce sulla SEO?',
    answer:
      'Sì, positivamente. Riducendo il numero di richieste necessarie per il rendering della pagina, migliora il tempo di caricamento (LCP) e i punteggi dei Core Web Vitals.',
  },
  {
    question: 'Posso usarlo in framework come React o Tailwind?',
    answer:
      'Assolutamente! Puoi copiare il codice generato e usarlo nei tuoi file .css o anche come valori arbitrari in Tailwind CSS.',
  },
];

const howToData = [
  {
    name: 'Incolla l\'SVG',
    text: 'Copia il codice sorgente del tuo file SVG e incollalo nell\'area di testo a sinistra.',
  },
  {
    name: 'Scegli il tipo di output',
    text: 'Seleziona tra Immagine di Sfondo (per sfondi statici), Maschera CSS (per icone con colore dinamico) o Solo Data URI (per uso diretto).',
  },
  {
    name: 'Copia il risultato',
    text: 'Fai clic su "Copia" per portare il codice CSS generato nei tuoi appunti.',
  },
  {
    name: 'Applica nel tuo progetto',
    text: 'Incolla il codice nel tuo foglio di stile o componente CSS. Per le maschere, aggiungi anche background-color per definire il colore dell\'icona.',
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

const ui: SvgToCssUI = {
  labelPasteTitle: 'Incolla SVG',
  labelInputArea: 'Codice Sorgente SVG',
  labelPreviewOriginal: 'Anteprima Originale',
  labelResultTitle: 'Risultato CSS',
  labelPreviewApplied: 'Risultato Applicato',
  tabBackground: 'Immagine di Sfondo',
  tabMask: 'CSS Mask / Webkit',
  tabUri: 'Solo Data URI',
  btnCopy: 'Copia',
  btnCopied: 'Copiato!',
  placeholder: '<svg xmlns="http://www.w3.org/2000/svg" ...',
};

export const content: ToolLocaleContent<SvgToCssUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti e Documentazione',
  bibliography: [
    {
      name: 'CSS-Tricks: Usare SVG come Sfondo',
      url: 'https://css-tricks.com/using-svg/',
    },
    {
      name: 'MDN Web Docs: mask-image',
      url: 'https://developer.mozilla.org/it/docs/Web/CSS/mask-image',
    },
    {
      name: 'MDN Web Docs: background-image',
      url: 'https://developer.mozilla.org/it/docs/Web/CSS/background-image',
    },
    {
      name: 'W3C: CSS Masking Module Level 1',
      url: 'https://www.w3.org/TR/css-masking-1/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Perché Convertire SVG in CSS Data URI?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nello sviluppo web moderno, ottimizzare le prestazioni e il caricamento delle risorse è essenziale. Incorporare le icone direttamente nel CSS tramite <strong>Data URI</strong> elimina le richieste HTTP non necessarie, riducendo la latenza e migliorando il Time to Interactive (TTI).',
    },
    {
      type: 'paragraph',
      html: 'Questo strumento trasforma il codice vettoriale <code>&lt;svg&gt;</code> in una stringa di testo codificata che il browser può interpretare come immagine di sfondo o maschera di ritaglio, mantenendo la scalabilità infinita e la nitidezza tipica dei vettori.',
    },
    {
      type: 'title',
      text: 'Principali Vantaggi Tecnici',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Zero Richieste HTTP:</strong> Incorporando la grafica nei tuoi file <code>.css</code>, il browser non ha bisogno di scaricare ulteriori file esterni.',
        '<strong>Personalizzazione tramite CSS Mask:</strong> Usando la tecnica <code>mask-image</code>, puoi cambiare il colore di un\'icona vettoriale complessa semplicemente usando <code>background-color</code>.',
        '<strong>Rendering Immediato:</strong> Eviti lo sfarfallio dei contenuti (FOUC) poiché le risorse visive critiche sono disponibili non appena il foglio di stile viene scaricato.',
      ],
    },
    {
      type: 'title',
      text: 'CSS Mask vs Sfondi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Molti sviluppatori usano semplicemente <code>background-image</code> per incorporare vettori, ma questo ha un limite: non è possibile cambiare il colore dell\'SVG dinamicamente dal CSS.',
    },
    {
      type: 'paragraph',
      html: 'La nostra utility supporta la generazione di codice per <strong>CSS Mask</strong>. Applicando una <code>mask-image</code> con il Data URI generato, l\'icona funge da stencil, permettendo al <code>background-color</code> dell\'elemento di definire il colore finale dell\'icona. È il modo più professionale e flessibile per gestire le icone in Astro, Next.js o qualsiasi framework moderno.',
    },
  ],
};
