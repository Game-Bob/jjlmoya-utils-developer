import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlEncoderDecoderUI } from '../ui';

const slug = 'url-encoder-decoder-it';
const title = 'Codificatore e Decodificatore URL Online';
const description =
  'Converti i caratteri speciali da qualsiasi link in un formato sicuro (Percent-Encoding) o riportali istantaneamente e localmente allo stato originale leggibile.';

const faqData = [
  {
    question: 'Quali caratteri vengono codificati in un\'URL?',
    answer:
      'Vengono codificati tutti i caratteri non consentiti nello standard ASCII per le URL: spazi, lettere accentate, simboli come &, =, +, #, ?, / e altri. Ad esempio, uno spazio diventa %20 e una ñ diventa %C3%B1.',
  },
  {
    question: 'Qual è la differenza tra encodeURI ed encodeURIComponent?',
    answer:
      'encodeURI codifica un\'URL completa lasciando intatti i caratteri riservati come / e ?. encodeURIComponent codifica tutti i caratteri speciali, compresi quelli riservati, rendendolo ideale per la codifica dei singoli valori dei parametri di query.',
  },
  {
    question: 'Perché la mia URL contiene %20 invece degli spazi?',
    answer:
      'Il protocollo HTTP non consente spazi nelle URL. %20 è la rappresentazione in Percent-Encoding di uno spazio secondo lo standard ASCII. Alcuni sistemi usano il segno + come alternativa, ma %20 è il più universale e sicuro.',
  },
  {
    question: 'È sicuro usare questo strumento con URL private?',
    answer:
      'Sì, completamente sicuro. Tutta l\'elaborazione avviene nel tuo browser utilizzando JavaScript nativo (encodeURIComponent/decodeURIComponent). Nessuna delle tue URL o dei tuoi parametri viene inviata a server esterni.',
  },
];

const howToData = [
  {
    name: 'Incolla il testo grezzo',
    text: 'Digita o incolla la tua URL o stringa di testo nel campo superiore "Testo grezzo (leggibile)".',
  },
  {
    name: 'Codifica o decodifica',
    text: 'Fai clic su "Codifica URL" per convertire il testo nel formato sicuro Percent-Encoding, o su "Decodifica" per riportare un\'URL codificata alla sua forma leggibile.',
  },
  {
    name: 'Copia il risultato',
    text: 'Usa il pulsante "Copia" del campo corrispondente per portare il risultato negli appunti.',
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

const ui: UrlEncoderDecoderUI = {
  labelRaw: 'Testo grezzo (leggibile)',
  labelEncoded: 'URL formattata (codificato)',
  btnClear: 'Cancella',
  btnCopy: 'Copia',
  btnCopied: 'Copiato!',
  btnEncode: 'Codifica URL',
  btnDecode: 'Decodifica',
  placeholderRaw: 'https://example.com/search?q=scarpe rosse&size=38',
  placeholderEncoded: 'https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dscarpe%20rosse%26size%3D38',
};

export const content: ToolLocaleContent<UrlEncoderDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti e Documentazione',
  bibliography: [
    {
      name: 'MDN Web Docs: encodeURIComponent()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent',
    },
    {
      name: 'IETF RFC 3986: URI Generic Syntax',
      url: 'https://datatracker.ietf.org/doc/html/rfc3986',
    },
    {
      name: 'W3C: URL Living Standard',
      url: 'https://url.spec.whatwg.org/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Cos\'è la codifica URL?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Durante la navigazione in Internet o l\'invio di richieste ai server, è comune pensare a un\'URL (Uniform Resource Locator) semplicemente come a un "indirizzo web". Tuttavia, il protocollo Internet impone che le URL possano essere trasmesse solo utilizzando un set molto ristretto di caratteri <strong>ASCII standard</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Cosa succede se l\'URL contiene uno spazio, lettere accentate o parametri speciali come i segni più (<code>+</code>) o uguale (<code>=</code>)? Per evitare che i sistemi vadano in crash cercando di leggere caratteri illegali, questi devono essere tradotti nella loro forma sicura compatibile utilizzando il <strong>Percent-Encoding</strong>.',
    },
    {
      type: 'title',
      text: 'Come funziona il Percent-Encoding',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Quando usi questo strumento, l\'algoritmo prende qualsiasi carattere "non sicuro" (come uno spazio o una lettera accentata come ñ) e lo sostituisce con un segno di percentuale <code>%</code> seguito da due cifre esadecimali corrispondenti al suo valore nello standard UTF-8.',
    },
    {
      type: 'list',
      items: [
        '<strong>Esempio di base:</strong> Uno spazio semplice sarà sostituito dal suo equivalente sicuro: <code>%20</code>.',
        '<strong>Supporto esteso:</strong> La lettera <code>à</code> diventa <code>%C3%A0</code>, e <code>ñ</code> diventa <code>%C3%B1</code>.',
      ],
    },
    {
      type: 'title',
      text: 'Importanza nelle API e nelle richieste GET',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nello sviluppo di integrazioni, un errore tipico è passare una stringa grezza ai parametri URL. Se inserisci <code>camicia&blu</code> in modo grezzo nel tuo backend (<code>/search?q=camicia&blu</code>), il server interpreterà <code>blu</code> come un nuovo parametro, rompendo tutta la logica.',
    },
    {
      type: 'paragraph',
      html: 'Questo strumento garantisce calcoli puliti e automatici con un\'esecuzione al 100% nel tuo browser locale. Nessuna delle tue stringhe URL viene trasmessa a server di terze parti, garantendo la privacy dei tuoi token e dei parametri analitici.',
    },
  ],
};

