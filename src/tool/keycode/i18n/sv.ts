import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeycodeUI } from '../ui';

const slug = 'tangentbords-tangentkodsvisualiserare-online';
const title = 'Online Tangentbordstangentkodvisualiserare. Inspektor för Tangentkod';
const description =
  'Kostlöst onlineverktyg för att se event.key, event.code, event.which och position för vilken tangentbordstangent som helst i realtid. Genererar JavaScript-kodsnippets klara att använda.';

const faqData = [
  {
    question: 'Vad är skillnaden mellan event.key och event.code?',
    answer:
      'event.code representerar tangentens fysiska position på tangentbordet, oavsett konfigurerat språk. event.key representerar den genererade tecknet, som kan ändras om du trycker på Shift eller använder ett annat språk. Använd code för spelkontroller; använd key för textinmatning och semantiska genvägar.',
  },
  {
    question: 'Vad är event.which och varför är det föråldrat?',
    answer:
      'event.which är en äldre egenskap som returnerar en numerisk ASCII-kod för tangenten. Den är markerad som föråldrad i moderna standarder eftersom event.key och event.code ersätter den med mer exakt och läsbar information. Det visas i det här verktyget för utbildningsändamål.',
  },
  {
    question: 'Vad betyder location-egenskapen?',
    answer:
      'location-egenskapen anger var tangenten är fysiskt placerad på tangentbordet: Standard (normal position), Vänster (vänstre modifiertangent), Höger (höger modifiertangent) eller Numerisk (numerisk knappsats). Det är användbart för att skilja mellan vänster och höger CTRL-tangenter, till exempel.',
  },
  {
    question: 'Fungerar det med internationella tangentbord och inte-QWERTY-layouter?',
    answer:
      'Ja. Verktyget visar exakt vad webbläsaren rapporterar för din tangentbordskonfiguration. event.code kommer alltid att returnera QWERTY-namnet för den fysiska positionen, medan event.key visar det faktiska tecknet enligt ditt språk.',
  },
];

const howToData = [
  {
    name: 'Tryck valfri tangent',
    text: 'Med fokus på sidan, tryck valfri tangent på tangentbordet för att omedelbar se all händelseinformation.',
  },
  {
    name: 'Kopiera individuella värden',
    text: 'Klicka kopieringsknappen bredvid varje egenskap (event.key, event.code, etc.) för att kopiera det specifika värdet till urklipp.',
  },
  {
    name: 'Använd kodsnippets',
    text: 'I avsnittet "Quick Snippets" hittar du JavaScript-kodblock klara att klistra in direkt i ditt projekt.',
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
  inLanguage: 'sv',
};

const ui: KeycodeUI = {
  promptTitle: 'Tryck en tangent',
  promptSubtitle: 'Vilken tangent som helst på tangentbordet för att se dess kod',
  snippetsTitle: 'Snabba Snippets',
  btnCopy: 'Kopiera',
  locationStandard: 'Standard',
  locationLeft: 'Vänster',
  locationRight: 'Höger',
  locationNumpad: 'Numerisk',
};

export const content: ToolLocaleContent<KeycodeUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Vanliga Frågor',
  faq: faqData,
  bibliographyTitle: 'Referenser och Standarder',
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
      text: 'Förstå tangentbordshändelser i JavaScript',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'När en användare trycker på en tangent utlöser webbläsaren tre händelser: <code>keydown</code>, <code>keypress</code> och <code>keyup</code>. Varje exponerar egenskaper med information om den trycka tangenten, men inte alla är ekvivalenta eller rekommenderade.',
    },
    {
      type: 'title',
      text: 'Tangentbordshändelsegenskaper',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'event.code — Den fysiska tangenten',
      html: '<p>Returnerar identifieraren för tangentens <strong>fysiska position</strong> på tangentbordet, med QWERTY-nomenklatur. Till exempel returnerar tangenten "A" på ett AZERTY-tangentbord <code>KeyQ</code>. Idealisk för spelkontroller där position spelar roll, inte tecknet.</p>',
    },
    {
      type: 'card',
      title: 'event.key — Det genererade tecknet',
      html: '<p>Returnerar det <strong>genererade teckenvärde</strong> enligt språk och aktiva modifierare. Att trycka Shift+A returnerar <code>"A"</code>; utan Shift returnerar <code>"a"</code>. För specialtangenter returneras namn som <code>"Enter"</code>, <code>"Escape"</code>, <code>"ArrowUp"</code>.</p>',
    },
    {
      type: 'title',
      text: 'När man ska använda varje egenskap',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Använd <code>event.code</code> för spelkontroller (WASD oavsett språk) och <code>event.key</code> för att detektera specifika tecken eller semantiska tangentbordsgenvägar som <code>Ctrl+C</code>.',
    },
    {
      type: 'paragraph',
      html: 'Egenskaperna <code>event.which</code> och <code>event.keyCode</code> är officiellt <strong>föråldrade</strong> enligt W3C-standarden. Även om moderna webbläsare fortsätter att stödja dem för kompatibilitet, bör de inte användas i ny kod.',
    },
  ],
};
