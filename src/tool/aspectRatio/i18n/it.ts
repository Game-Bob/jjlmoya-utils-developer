import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AspectRatioUI } from '../ui';

const slug = 'calcolatore-proporzioni';
const title = 'Calcolatore Proporzioni (Aspect Ratio) in Pixel. Proporzioni Online';
const description =
  'Calcola nuove risoluzioni per immagini, video e web design mantenendo l\'esatta proporzione per evitare distorsioni grafiche. Supporta i formati 16:9, 4:3, 21:9 e personalizzati.';

const faqData = [
  {
    question: 'Cos\'è l\'Aspect Ratio (proporzione)?',
    answer:
      'L\'Aspect Ratio descrive la relazione geometrica tra la larghezza e l\'altezza di un\'immagine o di uno schermo. Viene rappresentato con due numeri separati da due punti (ad es. 16:9), indicando come l\'altezza cambia proporzionalmente rispetto alla larghezza.',
  },
  {
    question: 'Perché è importante mantenere le proporzioni corrette?',
    answer:
      'Ignorare l\'Aspect Ratio causa immagini schiacciate o allungate, barre nere indesiderate (letterboxing) nei video e componenti web che rompono il loro layout a diverse dimensioni di schermo. Mantenere le proporzioni corrette è fondamentale per una visualizzazione professionale.',
  },
  {
    question: 'Come calcolo l\'altezza dalla larghezza con un dato rapporto?',
    answer:
      'La formula è: Altezza = Larghezza × (Altezza Rapporto / Larghezza Rapporto). Ad esempio, per una larghezza di 1280px con un rapporto 16:9, l\'altezza sarebbe: 1280 × (9/16) = 720px.',
  },
  {
    question: 'Qual è l\'Aspect Ratio standard per i video di YouTube?',
    answer:
      'Il rapporto 16:9 è lo standard per YouTube e la maggior parte delle moderne piattaforme video. Corrisponde a risoluzioni come 1280×720 (HD), 1920×1080 (Full HD) o 3840×2160 (4K UHD).',
  },
  {
    question: 'Quale Aspect Ratio utilizzano i video verticali sui social media?',
    answer:
      '9:16, che è esattamente l\'inverso del formato widescreen. È il rapporto nativo di TikTok, Instagram Reels e YouTube Shorts, originato dal consumo di contenuti su uno smartphone tenuto verticalmente.',
  },
];

const howToData = [
  {
    name: 'Inserisci il rapporto originale',
    text: 'Inserisci i valori di larghezza e altezza del rapporto che vuoi mantenere (ad es. 16 e 9 per il widescreen) o seleziona uno dei preset.',
  },
  {
    name: 'Regola la scala',
    text: 'Cambia il valore della larghezza o dell\'altezza nella sezione "Scala reale". Lo strumento calcolerà automaticamente il valore opposto per mantenere la proporzione.',
  },
  {
    name: 'Controlla l\'anteprima',
    text: 'Il pannello di anteprima mostra la forma risultante in scala proporzionale, con il rapporto semplificato e la risoluzione calcolata.',
  },
  {
    name: 'Applica nel tuo progetto',
    text: 'Copia i valori calcolati per usarli nel tuo CSS (aspect-ratio: 16 / 9), nell\'esportazione dei video o nelle impostazioni del tuo strumento di progettazione.',
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

const ui: AspectRatioUI = {
  labelConfig: 'Configurazione',
  labelRatio: 'Rapporto originale',
  labelWidth: 'Larghezza',
  labelHeight: 'Altezza',
  labelScale: 'Scala reale',
  labelPixelWidth: 'Pixel (Larghezza)',
  labelPixelHeight: 'Pixel (Altezza)',
  labelPreview: 'Anteprima proporzionale',
  labelStatus: 'Proporzione perfetta',
  labelOffline: 'Strumento 100% offline',
};

export const content: ToolLocaleContent<AspectRatioUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti e documentazione',
  bibliography: [
    {
      name: 'MDN Web Docs: aspect-ratio (CSS)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio',
    },
    {
      name: 'Wikipedia: Aspect ratio',
      url: 'https://it.wikipedia.org/wiki/Rapporto_d\'aspetto',
    },
    {
      name: 'W3C: CSS Box Sizing Level 4',
      url: 'https://www.w3.org/TR/css-sizing-4/#aspect-ratio',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Cos\'è l\'Aspect Ratio?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nel graphic design, nella fotografia e nello sviluppo frontend, l\'<strong>Aspect Ratio</strong> descrive la relazione geometrica tra la larghezza e l\'altezza di un\'immagine, di uno schermo o di un contenitore. Viene tipicamente rappresentato con due numeri separati da due punti (ad es. <code>16:9</code>), indicando come l\'altezza aumenta proporzionalmente in risposta alla sua larghezza.',
    },
    {
      type: 'paragraph',
      html: 'Una gestione errata delle proporzioni è una causa comune di fotografie schiacciate, video con ritagli imprevisti (letterboxing) o componenti web che rompono i loro layout quando visualizzati progressivamente da mobile a monitor ultra-wide.',
    },
    {
      type: 'title',
      text: 'Rapporti comuni del settore',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A seconda della tua disciplina, avrai costantemente a che fare con un numero limitato di proporzioni standard globali:',
    },
    {
      type: 'list',
      items: [
        '<strong>16:9 (Widescreen):</strong> Il formato assolutamente dominante per monitor moderni, TV, registrazioni YouTube o risoluzioni standard ad alta definizione (come 1920×1080 o 4K).',
        '<strong>9:16 (Verticale):</strong> Originato dal consumo nativo di contenuti mobile (TikTok, Instagram Reels, YouTube Shorts). Esattamente lo stesso rapporto dei video widescreen, ma con la rotazione fisica del dispositivo applicata.',
        '<strong>4:3 (Classico / Vintage):</strong> Presente nelle vecchie televisioni e monitor o nei modelli di macchine fotografiche analogiche e digitali specializzate. Il suo aspetto leggermente quadrato attira l\'attenzione direttamente sull\'asse compositivo centrale.',
      ],
    },
    {
      type: 'title',
      text: 'Sviluppo Web e la proprietà CSS aspect-ratio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'In precedenza nei CSS, venivano utilizzati complessi sistemi matematici che utilizzavano un <strong>Padding Hack</strong> (come l\'inserimento di un <code>padding-top: 56.25%</code>) per riservare spazi dinamici negli iframe di YouTube o nelle immagini di copertina, per evitare il terribile Cumulative Layout Shift (CLS) al caricamento della pagina.',
    },
    {
      type: 'paragraph',
      html: 'Oggigiorno tutti i layout moderni applicano direttamente proprietà come <code>aspect-ratio: 16 / 9;</code>, ottenendo un codice semantico e permettendo al browser di ricavare automaticamente la dimensione mancante dalla larghezza originale definita via Grid o Flexbox.',
    },
    {
      type: 'paragraph',
      html: 'Questo calcolatore di pixel locale trasferisce il potere del design a un calcolo di ridimensionamento istantaneo che proteggerà i tuoi render da errori di configurazione catastrofici.',
    },
  ],
};
