import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeycodeUI } from '../ui';

const slug = 'keycode-nl';
const title = 'Toetsenbord Keycode Visualizer Online. KeyCode Inspector';
const description =
  'Gratis online tool om event.key, event.code, event.which en de locatie van elke toets in realtime te bekijken. Genereert direct bruikbare JavaScript-codefragmenten.';

const faqData = [
  {
    question: 'Wat is het verschil tussen event.key en event.code?',
    answer:
      'event.code staat voor de fysieke toets op het toetsenbord, ongeacht de geconfigureerde taal. event.key staat voor het gegenereerde teken, dat kan veranderen als u Shift indrukt of een andere taal gebruikt. Gebruik code voor spelbesturingen; gebruik key voor tekstinvoer en semantische sneltoetsen.',
  },
  {
    question: 'Wat is event.which en waarom is het verouderd?',
    answer:
      'event.which is een verouderde eigenschap die een numerieke ASCII-code voor de toets teruggeeft. Het is in moderne standaarden als verouderd (deprecated) aangemerkt, omdat event.key en event.code het vervangen met nauwkeurigere en beter leesbare informatie. Het wordt in deze tool weergegeven voor educatieve doeleinden.',
  },
  {
    question: 'Wat betekent de location-eigenschap?',
    answer:
      'De location-eigenschap geeft aan waar de toets fysiek op het toetsenbord staat: Standard (normale positie), Left (linker modifier), Right (rechter modifier) of Numpad (numeriek toetsenbord). Het is handig om bijvoorbeeld de linker en rechter CTRL-toets van elkaar te onderscheiden.',
  },
  {
    question: 'Werkt het met internationale toetsenborden en niet-QWERTY-indelingen?',
    answer:
      'Ja. De tool toont precies wat de browser rapporteert voor uw toetsenbordconfiguratie. event.code geeft altijd de QWERTY-naam van de fysieke positie terug, terwijl event.key het werkelijke teken weergeeft op basis van uw taal.',
  },
];

const howToData = [
  {
    name: 'Druk op een willekeurige toets',
    text: 'Met de focus op de pagina drukt u op een willekeurige toets op het toetsenbord om direct alle gebeurtenisinformatie te zien.',
  },
  {
    name: 'Kopieer afzonderlijke waarden',
    text: 'Klik op de kopieerknop naast elke eigenschap (event.key, event.code, enz.) om die specifieke waarde naar het klembord te kopiëren.',
  },
  {
    name: 'Gebruik de codefragmenten',
    text: 'In de sectie "Snelle Fragmenten" vindt u JavaScript-codeblokken die u direct in uw project kunt plakken.',
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
  inLanguage: 'nl',
};

const ui: KeycodeUI = {
  promptTitle: 'Druk op een toets',
  promptSubtitle: 'Een willekeurige toets op uw toetsenbord om de code te zien',
  snippetsTitle: 'Snelle Fragmenten',
  btnCopy: 'Kopiëren',
  locationStandard: 'Standard',
  locationLeft: 'Links',
  locationRight: 'Rechts',
  locationNumpad: 'Numpad',
};

export const content: ToolLocaleContent<KeycodeUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Referenties en Standaarden',
  bibliography: [
    {
      name: 'MDN Web Docs – KeyboardEvent',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent',
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
      text: 'Toetsenbordgebeurtenissen in JavaScript begrijpen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wanneer een gebruiker een toets indrukt, vuurt de browser drie gebeurtenissen af: <code>keydown</code>, <code>keypress</code> en <code>keyup</code>. Elk geeft eigenschappen bloot met informatie over de ingedrukte toets, maar niet alle zijn gelijkwaardig of aanbevolen.',
    },
    {
      type: 'title',
      text: 'Eigenschappen van toetsgebeurtenissen',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'event.code — De fysieke toets',
      html: '<p>Geeft de identifier terug van de <strong>fysieke positie</strong> van de toets op het toetsenbord, met behulp van QWERTY-nomenclatuur. De "A"-toets op een AZERTY-toetsenbord geeft bijvoorbeeld <code>KeyQ</code> terug. Ideaal voor spelbesturingen waarbij de positie telt, niet het teken.</p>',
    },
    {
      type: 'card',
      title: 'event.key — Het gegenereerde teken',
      html: '<p>Geeft de <strong>tekenwaarde</strong> terug die gegenereerd wordt op basis van taal en actieve modifiers. Shift+A indrukken geeft <code>"A"</code> terug; zonder Shift geeft het <code>"a"</code>. Voor speciale toetsen geeft het namen terug zoals <code>"Enter"</code>, <code>"Escape"</code>, <code>"ArrowUp"</code>.</p>',
    },
    {
      type: 'title',
      text: 'Wanneer welke eigenschap gebruiken',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Gebruik <code>event.code</code> voor spelbesturingen (WASD ongeacht de taal) en <code>event.key</code> om specifieke tekens of semantische sneltoetsen zoals <code>Ctrl+C</code> te detecteren.',
    },
    {
      type: 'paragraph',
      html: 'De eigenschappen <code>event.which</code> en <code>event.keyCode</code> zijn officieel <strong>verouderd</strong> volgens de W3C-standaard. Hoewel moderne browsers ze blijven ondersteunen voor compatibiliteit, mogen ze niet worden gebruikt in nieuwe code.',
    },
  ],
};

