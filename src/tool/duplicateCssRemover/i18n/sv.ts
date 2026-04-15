import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DuplicateCssRemoverUI } from '../ui';

const slug = 'ta-bort-dubblett-css';
const title = 'Ta bort duplicerad CSS online. Sammanfoga och rensa dina stilmallar';
const description =
  'Gratis verktyg för att rensa och ta bort duplicerad CSS-kod. Sammanfogar redundanta selektorer, respekterar cascade och minskar filstorleken direkt i webbläsaren.';

const faqData = [
  {
    question: 'Vad händer när CSS-selektorer är duplicerade?',
    answer:
      'När samma selektor förekommer flera gånger tillämpar webbläsaren alla regler, men den sista deklarationen av varje egenskap skriver över de tidigare. Det ger onödigt tunga filer utan någon verklig fördel för det visuella resultatet.',
  },
  {
    question: 'Försvinner några egenskaper när dubbletter tas bort?',
    answer:
      'Nej. Algoritmen följer CSS-cascaden strikt: vid konflikter under samma selektor bevaras alltid den senast deklarerade egenskapen. Unika egenskaper från varje block slås samman under en enda enhetlig selektor.',
  },
  {
    question: 'Fungerar det med minifierad CSS eller CSS med kommentarer?',
    answer:
      'Verktyget tar automatiskt bort CSS-kommentarer innan bearbetning och fungerar korrekt med kod på en enda rad. För CSS med avancerad nesting eller komplexa at-rules rekommenderas att du separerar blocken först.',
  },
  {
    question: 'Skickas min CSS till någon server?',
    answer:
      'Nej. All bearbetning sker direkt i din webbläsare via lokal JavaScript. Ingen del av din CSS skickas till någon extern server, vilket garanterar full sekretess för din kod.',
  },
];

const howToData = [
  {
    name: 'Klistra in din CSS',
    text: 'Kopiera innehållet i din CSS-fil med upprepade selektorer och klistra in det i det vänstra fältet "Dirty / Duplicate CSS".',
  },
  {
    name: 'Starta rensningen',
    text: 'Klicka på "Rensa och sammanfoga CSS". Verktyget söker igenom alla selektorer, slår samman egenskaper och tar bort redundanta block.',
  },
  {
    name: 'Granska resultatet och kopiera',
    text: 'Kontrollera hur många bytes som sparats och kopiera den optimerade CSS:en med knappen "Kopiera kod" för att använda den direkt i ditt projekt.',
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
  inLanguage: 'sv',
};

const ui: DuplicateCssRemoverUI = {
  labelInput: 'Smutsig / Duplicerad CSS',
  labelOutput: 'Ren CSS',
  placeholderInput: '.btn { padding: 10px; color: red; }\n.btn { margin: 5px; color: blue; }',
  placeholderOutput: 'Optimerad och sammanfogad CSS visas här...',
  btnClean: 'Rensa och sammanfoga CSS',
  btnCopy: 'Kopiera kod',
  btnCopied: 'Kopierad!',
  statBytesOriginal: 'Ursprungliga bytes',
  statBytesClean: 'Rena bytes',
  statSaving: 'Besparing',
};

export const content: ToolLocaleContent<DuplicateCssRemoverUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Källor och dokumentation',
  bibliography: [
    {
      name: 'Web Vitals: CSS påverkan på Render-Blocking och FCP',
      url: 'https://web.dev/articles/render-blocking-resources',
    },
    {
      name: 'W3C-specifikation: CSS Cascade och arv',
      url: 'https://www.w3.org/TR/css-cascade-4/',
    },
    {
      name: 'Clean CSS: bibliotek och metoder för CSS-minifiering',
      url: 'https://github.com/clean-css/clean-css',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Varför dupliceras CSS-kod?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Vid underhåll av långsiktiga webbprojekt eller arbete med äldre kod är det mycket vanligt att flera utvecklare skriver överlappande CSS-regler. Av rädsla för att förstöra en befintlig design lägger man hellre till en ny redundant regel i slutet av dokumentet än att redigera eller refaktorera originalet.',
    },
    {
      type: 'paragraph',
      html: 'Resultatet är en ineffektiv fil med dussintals upprepade selektorer som förstör läsbarheten och avsevärt ökar nedladdningsstorleken för din webbsida.',
    },
    {
      type: 'title',
      text: 'Den dolda påverkan på webbprestanda (Web Vitals)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Stilmallsfiler blockerar webbläsarens naturliga rendering (en <strong>Render-Blocking</strong>-resurs). Tills webbläsaren har laddat ner och byggt upp hela CSSOM förblir skärmen tom.',
    },
    {
      type: 'tip',
      html: 'Att rensa bort redundanta stilar handlar inte bara om kodordning — det är en mätbar och omedelbar förbättring av viktiga mätvärden som <strong>First Contentful Paint (FCP)</strong>.',
    },
    {
      type: 'title',
      text: 'Hur vi sammanfogar duplicerade regler',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Det här verktyget fungerar som en intelligent assembler. Istället för att enbart komprimera blanksteg (som en traditionell minifierare) skannar det rekursivt igenom texten efter identiska selektormönster.',
    },
    {
      type: 'list',
      items: [
        'Tänk dig att du har regeln <code>.box { color: red; }</code> och hundra rader senare en <code>.box { padding: 10px; color: blue; }</code>. Verktyget sammanfogar båda blocken under samma selektor <code>.box</code> och kombinerar padding-värdet.',
        '<strong>Bevarande av CSS-cascade:</strong> Vid direkta konflikter bevarar algoritmen strikt den senast deklarerade egenskapen. Det säkerställer att din ursprungliga layout inte går sönder när dokumentet rensas.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Sluta skicka kilobytes av död text till dina användares mobiltelefoner. Sammanfoga din kod på millisekunder, helt offline, direkt från webbläsaren.',
    },
  ],
};
