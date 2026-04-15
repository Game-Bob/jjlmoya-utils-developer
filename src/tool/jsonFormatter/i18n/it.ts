import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonFormatterUI } from '../ui';

const slug = 'formattatore-json';
const title = 'Formattatore e Validatore JSON Online Gratuito';
const description =
  'Strumento online gratuito per formattare, validare e riparare il codice JSON. Abbellisci e formatta JSON. Rileva errori di sintassi e migliora la leggibilità del codice.';

const faqData = [
  {
    question: 'I miei dati sono sicuri usando questo formattatore?',
    answer:
      'Assolutamente sì. Tutta l\'elaborazione avviene al 100% nel tuo browser (Client-Side). I tuoi dati JSON non vengono mai inviati a nessun server, garantendo la completa privacy per le tue strutture dati.',
  },
  {
    question: "Cosa causa un errore 'Invalid JSON'?",
    answer:
      'Di solito è causato da virgole finali alla fine di un oggetto, mancanza di doppie virgolette intorno alle chiavi o caratteri invisibili. Il nostro strumento evidenzia l\'esatta riga dell\'errore in modo da poterlo correggere.',
  },
  {
    question: 'Può riparare JSON danneggiati?',
    answer:
      'Il nostro strumento tenta automaticamente di correggere errori comuni come virgole finali non necessarie o escape di caratteri malformati, in modo che il JSON diventi valido secondo lo standard RFC 8259.',
  },
  {
    question: 'Supporta file JSON molto grandi?',
    answer:
      'Sì, il motore di elaborazione è ottimizzato per gestire strutture dati complesse e file di grandi dimensioni senza bloccare l\'interfaccia del browser.',
  },
];

const howToData = [
  {
    name: 'Incolla il tuo codice',
    text: 'Incolla il tuo JSON non formattato o minificato nell\'area di testo principale.',
  },
  {
    name: 'Valida e Formatta',
    text: 'Il sistema analizzerà automaticamente il codice, evidenziando gli errori di sintassi e applicando l\'indentazione per migliorare la leggibilità.',
  },
  {
    name: 'Scegli uno stile',
    text: 'Scegli tra un formato espanso (beautify) o compresso (minify) a seconda che tu abbia bisogno di leggibilità o di risparmiare spazio.',
  },
  {
    name: 'Copia il risultato',
    text: 'Fai clic sul pulsante copia per portare il JSON perfettamente validato nei tuoi appunti.',
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

const ui: JsonFormatterUI = {
  labelInput: 'Input (JSON)',
  labelOutput: 'Output',
  btnMinify: 'Minifica',
  btnBeautify: 'Abbellisci',
  btnFix: 'Prova a riparare',
  btnCopy: 'Copia',
  statusWaiting: 'In attesa di input...',
  statusValid: 'JSON Valido',
  statusInvalid: 'JSON Non Valido',
  toastCopied: 'Copiato!',
  toastFixed: 'JSON riparato (Anteprima)',
  toastFixFailed: 'Impossibile riparare automaticamente',
  placeholder: 'Incolla qui il tuo JSON...',
};

export const content: ToolLocaleContent<JsonFormatterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti e Standard',
  bibliography: [
    {
      name: 'RFC 8259 – The JavaScript Object Notation (JSON) Data Interchange Format (IETF)',
      url: 'https://datatracker.ietf.org/doc/html/rfc8259',
    },
    {
      name: 'ECMA-404 – The JSON Data Interchange Syntax (Ecma International)',
      url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-404/',
    },
    {
      name: 'JSON.org – Introduzione a JSON',
      url: 'https://www.json.org/json-it.html',
    },
    {
      name: 'MDN Web Docs – JSON',
      url: 'https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/JSON',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Validazione e Formattazione JSON',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'JSON (JavaScript Object Notation) è lo standard de facto per lo scambio di dati sul web. Tuttavia, la sua sintassi rigorosa lo rende propenso a errori umani quando viene modificato manualmente.',
    },
    {
      type: 'paragraph',
      html: 'Questo strumento ti consente di validare la struttura, formattare il codice per migliorarne la leggibilità e riparare automaticamente i comuni errori di sintassi.',
    },
    { type: 'grid', columns: 2 },
    {
      type: 'card',
      title: 'Errori Comuni che Ripara',
      html: '<ul><li><strong>Virgolette Singole:</strong> Lo standard JSON richiede le doppie virgolette. Lo strumento converte <code>\'chiave\': \'valore\'</code> in <code>"chiave": "valore"</code>.</li><li><strong>Chiavi senza virgolette:</strong> Rileva le chiavi degli oggetti in stile JavaScript e aggiunge le virgolette necessarie.</li><li><strong>Virgole Finali:</strong> Rimuove le virgole alla fine di oggetti o array (trailing commas) che interrompono il parser rigoroso.</li></ul>',
    },
    {
      type: 'card',
      title: 'Caratteristiche',
      html: '<ul><li><strong>Evidenziazione della Sintassi:</strong> Colora chiavi, stringhe, numeri e booleani per facilitare una lettura rapida.</li><li><strong>Validazione in Tempo Reale:</strong> Indica istantaneamente se il JSON è valido o mostra l\'errore di parsing specifico.</li><li><strong>Privacy Totale:</strong> L\'elaborazione avviene al 100% nel tuo browser. Nessun dato viene inviato a server esterni.</li></ul>',
    },
  ],
};
