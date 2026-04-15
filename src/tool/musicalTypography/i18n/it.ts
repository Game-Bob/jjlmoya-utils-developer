import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicalTypographyUI } from '../ui';

const slug = 'tipografia-musicale';
const title = 'Scala Tipografica Musicale. Calcolatore di Scala Modulare';
const description =
  'Strumento online gratuito per creare gerarchie visive armoniose con scale modulari basate su proporzioni musicali. Genera variabili CSS pronte per il tuo design web.';

const faqData = [
  {
    question: "Cos'è una scala modulare tipografica?",
    answer:
      "È un metodo per determinare le dimensioni dei caratteri basato su un rapporto matematico costante. Come in musica, dove le note hanno relazioni armoniche, la scala modulare crea una gerarchia visiva equilibrata e prevedibile.",
  },
  {
    question: 'Perché usare gli intervalli musicali nel design?',
    answer:
      "Gli intervalli musicali sono proporzioni che il cervello umano percepisce come armoniose. Applicarle alle dimensioni del testo crea una struttura visiva che risulta corretta e professionale, invece di scegliere le dimensioni a caso.",
  },
  {
    question: "Cos'è la Sezione Aurea in tipografia?",
    answer:
      "È la proporzione 1,618, nota come Sezione Aurea. Crea scale molto drammatiche ed eleganti in cui ogni gradino della gerarchia cresce in modo esponenziale. Perfetta per portfolio o siti a vocazione artistica.",
  },
  {
    question: 'Come implemento la scala nel mio file CSS?',
    answer:
      "Lo strumento genera variabili CSS (token) nel formato :root { --step-N: Xrem; }. Copiale nel tuo file CSS principale e usale con var(--step-N) per mantenere la coerenza tipografica su tutto il sito.",
  },
];

const howToData = [
  {
    name: 'Imposta la dimensione base',
    text: 'Inserisci la dimensione del carattere per il corpo del testo (di solito 16px), che sarà la nota fondamentale della tua scala.',
  },
  {
    name: "Scegli l'intervallo",
    text: 'Seleziona una proporzione musicale per determinare quanto spazio c\'è tra i diversi livelli di intestazione.',
  },
  {
    name: 'Anteprima della gerarchia',
    text: 'Osserva in tempo reale come si comportano i livelli tipografici e verifica che l\'armonia visiva si adatti al tuo progetto.',
  },
  {
    name: 'Esporta il codice',
    text: 'Clicca su Copia variabili CSS per ottenere il blocco pronto da incollare direttamente nel tuo flusso di lavoro.',
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
  applicationCategory: 'DesignApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'it',
};

const ui: MusicalTypographyUI = {
  labelConfig: 'Configurazione',
  labelBaseSize: 'Dimensione base (px)',
  hintBaseSize: 'La dimensione del tuo testo di paragrafo (di solito 16px).',
  labelRatio: 'Scala musicale (Rapporto)',
  hintRatio: 'Determina quanto cresce la dimensione ad ogni gradino.',
  labelCalculated: 'Valori calcolati',
  labelPreview: 'Anteprima',
  btnCopyCss: 'Copia variabili CSS',
  feedbackCopied: 'Variabili copiate negli appunti!',
  previewText: 'Tipografia Musicale',
  previewSubtext: 'Una scala armonica perfetta per il tuo design.',
  ratioSecundaMenor: 'Seconda minore',
  ratioSegundaMayor: 'Seconda maggiore',
  ratioTerceraMenor: 'Terza minore',
  ratioTerceraMayor: 'Terza maggiore',
  ratioCuartaPerfecta: 'Quarta giusta',
  ratioCuartaAumentada: 'Quarta aumentata',
  ratioQuintaPerfecta: 'Quinta giusta',
  ratioProporcionAurea: 'Sezione Aurea',
  ratioSextaMayor: 'Sesta maggiore',
  ratioSeptimaMenor: 'Settima minore',
  ratioSeptimaMayor: 'Settima maggiore',
  ratioOctava: 'Ottava',
};

export const content: ToolLocaleContent<MusicalTypographyUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti',
  bibliography: [
    {
      name: 'Bringhurst, R. The Elements of Typographic Style',
      url: 'https://en.wikipedia.org/wiki/The_Elements_of_Typographic_Style',
    },
    {
      name: 'Brown, T. More Meaningful Typography. A List Apart',
      url: 'https://alistapart.com/article/more-meaningful-typography/',
    },
    {
      name: 'Physics of Music. Musical Intervals and Scales',
      url: 'https://es.scribd.com/document/199729396/Physics-of-Music-Notes',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: "L'armonia invisibile del web design",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "La <strong>Scala Tipografica Musicale</strong> applica la matematica degli intervalli musicali al design tipografico. Proprio come una composizione musicale è governata da proporzioni precise, un design visivo solido beneficia di una struttura matematica che mette in relazione tutte le dimensioni tra loro.",
    },
    {
      type: 'title',
      text: 'Come funziona la scala modulare',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'La formula',
      html: '<p>La progressione è semplice: <code>Dimensione = Base × Rapporto<sup>n</sup></code>. Il gradino 0 è il tuo testo base. Il gradino 1 è un piccolo sottotitolo. Il gradino 4 o 5 potrebbe essere il tuo H1 principale. La stessa costante moltiplicativa garantisce che tutte le relazioni siano coerenti.</p>',
    },
    {
      type: 'card',
      title: 'Perché "Musicale"',
      html: "<p>I pitagorici scoprirono che dividere una corda in proporzioni semplici (1:2, 2:3, 3:4) produceva suoni consonanti. Questi intervalli — ottava, quinta giusta e quarta giusta — sono esattamente i rapporti tipografici. Stai componendo musica visiva.</p>",
    },
    {
      type: 'title',
      text: 'Scegliere il rapporto giusto',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Per interfacce dense (dashboard, tabelle) usa rapporti piccoli come <code>1,125</code> o <code>1,2</code>. Per siti editoriali o portfolio, usa rapporti più espressivi come <code>1,5</code> o <code>1,618</code>.',
    },
    {
      type: 'paragraph',
      html: 'Non limitare la scala al solo <code>font-size</code>. Le stesse variabili CSS funzionano per <code>margin</code>, <code>padding</code> e <code>gap</code>. Quando lo spazio bianco segue la stessa progressione matematica del testo, il design raggiunge un livello di coesione che tutti avvertono ma in pochi sanno spiegare.',
    },
  ],
};
