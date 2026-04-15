import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PlaceholderGeneratorUI } from '../ui';

const slug = 'generatore-immagini-placeholder';
const title = 'Generatore di Immagini Placeholder. Mockup Web Rapidi Online';
const description =
  'Crea immagini segnaposto personalizzate per i tuoi design web. Regola risoluzione, sfondo, testo ed esporta in PNG, WebP o JPEG in pochi istanti.';

const faqData = [
  {
    question: "Cos'è un'immagine placeholder?",
    answer:
      "Un'immagine placeholder o segnaposto è una grafica temporanea usata nel web design e nella progettazione di layout per riservare lo spazio destinato a un'immagine definitiva. Aiutano a visualizzare la struttura di una pagina prima che il contenuto finale sia disponibile.",
  },
  {
    question: 'Posso usare qualsiasi risoluzione nel generatore?',
    answer:
      'Sì, puoi inserire qualsiasi valore numerico per larghezza e altezza. Il generatore creerà una tela con le dimensioni esatte richieste, perfetta per griglie precise o banner pubblicitari specifici.',
  },
  {
    question: 'In che formato vengono scaricate le immagini?',
    answer:
      "Per impostazione predefinita le immagini vengono generate in WebP per una compressione ottimale, ma puoi scegliere di scaricarle in PNG per la massima qualità senza perdita, o in JPEG per la compatibilità tradizionale.",
  },
  {
    question: 'Il processo avviene su un server?',
    answer:
      'No, il rendering completo avviene istantaneamente nella memoria virtuale (Canvas) del tuo browser. È immediato e non richiede alcun invio di dati attraverso la rete.',
  },
];

const howToData = [
  {
    name: 'Imposta le dimensioni',
    text: 'Inserisci i valori di larghezza e altezza direttamente oppure clicca su uno dei preset (FHD, HD, Instagram, ecc.) per compilarli in automatico.',
  },
  {
    name: 'Configura colori e testo',
    text: 'Scegli il colore di sfondo e del testo tramite i selettori nativi o digitando un codice esadecimale. Facoltativamente, aggiungi un testo personalizzato per sostituire la dicitura predefinita delle dimensioni.',
  },
  {
    name: 'Seleziona tipografia e formato',
    text: "Scegli la famiglia tipografica e la dimensione del carattere. Seleziona il formato di output (WebP, PNG o JPEG) in base alle tue esigenze.",
  },
  {
    name: "Scarica l'immagine",
    text: "Clicca sul pulsante Scarica per salvare il placeholder generato direttamente sul tuo dispositivo.",
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

const ui: PlaceholderGeneratorUI = {
  labelDimensions: 'Dimensioni Rapide',
  labelWidth: 'Larghezza (px)',
  labelHeight: 'Altezza (px)',
  labelBgColor: 'Sfondo',
  labelTextColor: 'Testo',
  labelCustomText: 'Testo Personalizzato (Opzionale)',
  placeholderCustomText: 'Es.: Banner Hero',
  labelFontFamily: 'Tipografia',
  labelFontSize: 'Dimensione Base',
  fontSizeAuto: 'Automatico',
  labelFormat: 'Formato di Output',
  btnDownload: "Scarica l'immagine",
};

export const content: ToolLocaleContent<PlaceholderGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti e Documentazione',
  bibliography: [
    {
      name: 'MDN Web Docs: HTMLCanvasElement.toDataURL()',
      url: 'https://developer.mozilla.org/it/docs/Web/API/HTMLCanvasElement/toDataURL',
    },
    {
      name: 'MDN Web Docs: CanvasRenderingContext2D',
      url: 'https://developer.mozilla.org/it/docs/Web/API/CanvasRenderingContext2D',
    },
    {
      name: 'W3C: HTML Canvas 2D Context',
      url: 'https://www.w3.org/TR/2dcontext/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Lo strumento definitivo per mockup rapidi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Nelle fasi iniziali di concettualizzazione o strutturazione di un sito web (wireframing), il materiale fotografico finale è raramente disponibile. Le aree vuote possono distorcere la percezione complessiva del prodotto e nascondere errori critici di spaziatura o proporzioni. Un generatore di immagini placeholder risolve il problema all'istante, consentendo di inserire aree colorate con dimensioni precise senza perdere tempo.",
    },
    {
      type: 'tip',
      title: 'Design senza attriti',
      html: "Quando si costruiscono CSS Grid, avere un'area di esattamente 1200x800 pixel è spesso imprescindibile. Scaricando i blocchi segnaposto si evita di iniettare CSS aggiuntivo o script di terze parti nel codice temporaneo.",
    },
    {
      type: 'title',
      text: 'Perché evitare i servizi esterni',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Nel mondo frontend è comune collegare servizi come <code>via.placeholder.com</code> direttamente negli attributi <code>src</code> dell'HTML. Sebbene sembri pratico tramite parametri URL, questo approccio presenta effetti collaterali rilevanti che uno sviluppatore attento preferirebbe evitare.",
    },
    {
      type: 'paragraph',
      html: "Inserire un dominio remoto in ogni tag immagine di una pagina in sviluppo incrementa le richieste DNS, penalizza i sistemi di hot-reloading di Vite, Gulp o Webpack e lascia tracce accidentali in branch che finiscono nel cloud. Usando questo strumento e generando l'immagine nel formato preferito (WebP, PNG o JPEG), il prototipo rimane completamente in modalità localhost.",
    },
    {
      type: 'title',
      text: "Caratteristiche tecniche del generatore",
      level: 3,
    },
    {
      type: 'list',
      items: [
        "<strong>Risoluzione Pixel Perfect:</strong> L'HTML5 Canvas nativo garantisce che la tela esportata corrisponda aritmeticamente alle coordinate specificate dall'utente.",
        "<strong>Autoscaling Tipografico:</strong> In modalità Automatica, la dimensione del font calcola l'area perimetrale e il numero di caratteri per adattare il testo con eleganza senza generare <em>overflow</em> indesiderati.",
        '<strong>Fusione Esadecimale:</strong> Il controllo bidirezionale dello stato tra i selettori nativi HTML e gli input testuali garantisce contrasti precisi in linea con la palette UI/UX del tuo progetto Figma o Penpot.',
      ],
    },
    {
      type: 'title',
      text: 'La dimensione nascosta del wireframing tecnico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Non esiste progetto monolitico né micro frontend che non attraversi fasi di impostazione, soprattutto di fronte a clienti esigenti o Product Manager con una visione precisa. Poter iterare graficamente in modo rapido, senza dover trascinare <em>asset</em> definitivi, distingue lo sviluppatore efficiente da quello bloccato. Questo generatore sfrutta direttamente la moderna API JS <code>toDataURL()</code> sulla tua macchina locale per offrire un risultato di livello professionale, senza elaborazioni intermedie di dubbia affidabilità.",
    },
  ],
};
