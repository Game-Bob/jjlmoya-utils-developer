import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeycodeUI } from '../ui';

const slug = 'keycode-it';
const title = 'Visualizzatore di Codici Tasto Online. KeyCode Inspector';
const description =
  'Strumento online gratuito per vedere in tempo reale event.key, event.code, event.which e la posizione di qualsiasi tasto della tastiera. Genera snippet di codice JavaScript pronti all\'uso.';

const faqData = [
  {
    question: 'Qual è la differenza tra event.key e event.code?',
    answer:
      'event.code rappresenta il tasto fisico sulla tastiera, indipendentemente dalla lingua configurata. event.key rappresenta il carattere generato, che può cambiare se si preme Shift o si usa una lingua diversa. Per i controlli di gioco usa code; per l\'input di testo e le scorciatoie semantiche, usa key.',
  },
  {
    question: 'Cos\'è event.which e perché è considerato obsoleto?',
    answer:
      'event.which è una proprietà legacy che restituisce un codice ASCII numerico per il tasto premuto. È contrassegnata come obsoleta (deprecated) negli standard moderni perché event.key e event.code la sostituiscono con informazioni più precise e leggibili. Viene mostrata in questo strumento a scopo didattico.',
  },
  {
    question: 'Cosa significa la proprietà location?',
    answer:
      'La proprietà location indica dove si trova fisicamente il tasto sulla tastiera: Standard (posizione normale), Left (tasto modificatore sinistro), Right (tasto modificatore destro) o Numpad (tastierino numerico). È utile per distinguere, ad esempio, il tasto CTRL sinistro da quello destro.',
  },
  {
    question: 'Funziona con tastiere internazionali e layout non QWERTY?',
    answer:
      'Sì. Lo strumento mostra esattamente ciò che il browser riporta per la tua configurazione di tastiera. event.code restituirà sempre il nome QWERTY della posizione fisica, mentre event.key mostrerà il carattere effettivo in base alla tua lingua.',
  },
];

const howToData = [
  {
    name: 'Premi un tasto',
    text: 'Con il focus sulla pagina, premi qualsiasi tasto della tastiera per vedere istantaneamente tutte le informazioni sull\'evento.',
  },
  {
    name: 'Copia i valori singoli',
    text: 'Fai clic sul pulsante copia accanto a ogni proprietà (event.key, event.code, ecc.) per copiare quel valore specifico negli appunti.',
  },
  {
    name: 'Usa gli snippet di codice',
    text: 'Nella sezione "Snippet Rapidi" troverai blocchi di codice JavaScript pronti da incollare direttamente nel tuo progetto.',
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

const ui: KeycodeUI = {
  promptTitle: 'Premi un tasto',
  promptSubtitle: 'Qualsiasi tasto della tastiera per vederne il codice',
  snippetsTitle: 'Snippet Rapidi',
  btnCopy: 'Copia',
  locationStandard: 'Standard',
  locationLeft: 'Sinistra',
  locationRight: 'Destra',
  locationNumpad: 'Numpad',
};

export const content: ToolLocaleContent<KeycodeUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti e Standard',
  bibliography: [
    {
      name: 'MDN Web Docs – KeyboardEvent',
      url: 'https://developer.mozilla.org/it/docs/Web/API/KeyboardEvent',
    },
    {
      name: 'UI Events Specification (W3C) – KeyboardEvent',
      url: 'https://www.w3.org/TR/uievents/#events-keyboardevents',
    },
    {
      name: 'MDN – KeyboardEvent.code values',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Capire gli eventi tastiera in JavaScript',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Quando un utente preme un tasto, il browser attiva tre eventi: <code>keydown</code>, <code>keypress</code> e <code>keyup</code>. Ognuno espone proprietà con informazioni sul tasto premuto, ma non tutte sono equivalenti o consigliate.',
    },
    {
      type: 'title',
      text: 'Proprietà degli eventi tasto',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'event.code — Il tasto fisico',
      html: '<p>Restituisce l\'identificatore della <strong>posizione fisica</strong> del tasto sulla tastiera, usando la nomenclatura QWERTY. Ad esempio, il tasto "A" su una tastiera AZERTY restituisce <code>KeyQ</code>. Ideale per i controlli di gioco dove conta la posizione, non il carattere.</p>',
    },
    {
      type: 'card',
      title: 'event.key — Il carattere generato',
      html: '<p>Restituisce il <strong>valore del carattere</strong> generato in base alla lingua e ai modificatori attivi. Premendo Shift+A si ottiene <code>"A"</code>; senza Shift si ottiene <code>"a"</code>. Per i tasti speciali restituisce nomi come <code>"Enter"</code>, <code>"Escape"</code>, <code>"ArrowUp"</code>.</p>',
    },
    {
      type: 'title',
      text: 'Quando usare ciascuna proprietà',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Usa <code>event.code</code> per i controlli di gioco (WASD indipendentemente dalla lingua) e <code>event.key</code> per rilevare caratteri specifici o scorciatoie semantiche come <code>Ctrl+C</code>.',
    },
    {
      type: 'paragraph',
      html: 'Le proprietà <code>event.which</code> e <code>event.keyCode</code> sono ufficialmente <strong>obsolete</strong> secondo lo standard W3C. Sebbene i browser moderni continuino a supportarle per compatibilità, non dovrebbero essere usate nel nuovo codice.',
    },
  ],
};

