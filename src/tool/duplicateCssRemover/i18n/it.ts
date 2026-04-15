import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DuplicateCssRemoverUI } from '../ui';

const slug = 'rimozione-css-duplicato';
const title = 'Rimuovi CSS Duplicati Online. Unifica e Ottimizza i Tuoi Fogli di Stile';
const description =
  'Strumento gratuito per ripulire e purificare il codice CSS duplicato. Unifica i selettori ridondanti, rispetta la cascade e riduce immediatamente le dimensioni del file direttamente nel browser.';

const faqData = [
  {
    question: 'Cosa succede quando i selettori CSS sono duplicati?',
    answer:
      'Quando lo stesso selettore compare più volte, il browser applica tutte le regole, ma l\'ultima dichiarazione di ogni proprietà sovrascrive quelle precedenti. Il risultato sono file più pesanti del necessario, senza alcun beneficio reale per il risultato visivo.',
  },
  {
    question: 'Si perdono proprietà durante la rimozione dei duplicati?',
    answer:
      'No. L\'algoritmo rispetta scrupolosamente la cascade CSS: in caso di conflitti sullo stesso selettore, mantiene sempre l\'ultima proprietà dichiarata. Le proprietà univoche di ogni blocco vengono unite sotto un unico selettore unificato.',
  },
  {
    question: 'Funziona con CSS minificato o con commenti?',
    answer:
      'Lo strumento rimuove automaticamente i commenti CSS prima di elaborare il codice e funziona correttamente anche con codice su una singola riga. Per CSS con nesting avanzato o at-rules complesse, si consiglia di separare prima i blocchi.',
  },
  {
    question: 'Il mio CSS viene inviato a qualche server?',
    answer:
      'No. Tutta l\'elaborazione avviene direttamente nel browser tramite JavaScript locale. Nessuna parte del tuo CSS viene trasmessa a server esterni, garantendo la massima privacy del tuo codice.',
  },
];

const howToData = [
  {
    name: 'Incolla il tuo CSS',
    text: 'Copia il contenuto del tuo file CSS con selettori ripetuti e incollalo nel campo di sinistra "Dirty / Duplicate CSS".',
  },
  {
    name: 'Avvia la pulizia',
    text: 'Clicca su "Pulisci e Unifica CSS". Lo strumento analizzerà tutti i selettori, unirà le proprietà e rimuoverà i blocchi ridondanti.',
  },
  {
    name: 'Controlla i risultati e copia',
    text: 'Verifica il risparmio in byte ottenuto e copia il CSS ottimizzato con il pulsante "Copia Codice" per usarlo direttamente nel tuo progetto.',
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

const ui: DuplicateCssRemoverUI = {
  labelInput: 'CSS Sporco / Duplicato',
  labelOutput: 'CSS Pulito',
  placeholderInput: '.btn { padding: 10px; color: red; }\n.btn { margin: 5px; color: blue; }',
  placeholderOutput: 'Il CSS ottimizzato e unificato apparirà qui...',
  btnClean: 'Pulisci e Unifica CSS',
  btnCopy: 'Copia Codice',
  btnCopied: 'Copiato!',
  statBytesOriginal: 'Byte Originali',
  statBytesClean: 'Byte Puliti',
  statSaving: 'Risparmio',
};

export const content: ToolLocaleContent<DuplicateCssRemoverUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti e Documentazione',
  bibliography: [
    {
      name: 'Web Vitals: impatto del CSS su Render-Blocking e FCP',
      url: 'https://web.dev/articles/render-blocking-resources',
    },
    {
      name: 'Specifica W3C: Cascade e Ereditarietà CSS',
      url: 'https://www.w3.org/TR/css-cascade-4/',
    },
    {
      name: 'Clean CSS: libreria e metodologie per la minificazione CSS',
      url: 'https://github.com/clean-css/clean-css',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Perché il codice CSS si duplica?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nella manutenzione di progetti web a lungo termine o nel lavoro con codice ereditato (<em>legacy code</em>), è molto comune che più sviluppatori scrivano regole CSS sovrapposte. Spesso, per paura di rompere un design esistente, si preferisce aggiungere una nuova regola ridondante in fondo al documento piuttosto che modificare o rifattorizzare quella originale.',
    },
    {
      type: 'paragraph',
      html: 'Il risultato è un file inefficiente con decine di selettori dichiarati più volte, che penalizzano la leggibilità del codice e aumentano notevolmente il peso scaricato dalla pagina web.',
    },
    {
      type: 'title',
      text: 'L\'impatto nascosto sulle prestazioni web (Web Vitals)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'I file di stile bloccano il rendering naturale del browser (sono risorse <strong>Render-Blocking</strong>). Finché il browser non scarica e costruisce il CSSOM completo, lo schermo rimane bianco.',
    },
    {
      type: 'tip',
      html: 'Eliminare gli stili ridondanti non è solo una questione di pulizia: è un miglioramento misurabile e immediato di metriche fondamentali come il <strong>First Contentful Paint (FCP)</strong>.',
    },
    {
      type: 'title',
      text: 'Come unifichiamo le regole duplicate',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Questo strumento agisce come un assemblatore intelligente. Invece di limitarsi a comprimere gli spazi bianchi come farebbe un minifier tradizionale, scansiona ricorsivamente il testo alla ricerca di selettori identici.',
    },
    {
      type: 'list',
      items: [
        'Immagina di avere la regola <code>.box { color: red; }</code> e cento righe dopo un <code>.box { padding: 10px; color: blue; }</code>. Lo strumento unirà entrambi i blocchi sotto lo stesso selettore <code>.box</code>, combinando il padding.',
        '<strong>Conservazione della Cascade CSS:</strong> In caso di conflitti diretti, l\'algoritmo mantiene scrupolosamente l\'ultima proprietà dichiarata. Questo garantisce che il tuo layout originale non si rompa durante la pulizia.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Smetti di inviare kilobyte di testo inutile ai dispositivi mobili dei tuoi utenti. Unifica il tuo codice in millisecondi, completamente offline, direttamente dal browser.',
    },
  ],
};
