import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ColorConverterUI } from '../ui';

const slug = 'fargkonverterare-rgb-hex-hsl';
const title = 'Online Färgkonverterare RGB HEX och HSL';
const description = 'Konvertera färger mellan RGB, HEX och HSL direkt. Skapa komplementära färgkombinationer och analysera WCAG-kontrast. 100 % körs lokalt i webbläsaren.';

const faqData = [
  {
    question: 'Hur fungerar färgkonverteraren för RGB till HEX och HSL?',
    answer: 'Verktyget tar värden för rött, grönt och blått (RGB) och använder matematiska algoritmer för att omvandla dem till deras hexadekimala (HEX) motsvarighet eller värden för nyans, mättnad och ljusstyrka (HSL). Det fungerar även åt andra hållet.',
  },
  {
    question: 'Varför ska jag använda HSL istället för HEX i mina designer?',
    answer: 'HSL-formatet är mycket mer intuitivt. Det gör att du kan justera mättnad eller ljusstyrka utan att ändra själva färgtonen, vilket gör det mycket enklare att skapa harmoniska paletter eller knapplägen (hover, inaktiverad).',
  },
  {
    question: 'Vad är det relativa kontrastvärdet?',
    answer: 'Det är ett mått som anger läsbarheten för text mot en bakgrund baserat på dess luminans. Hög kontrast säkerställer att personer med synnedsättning kan läsa innehållet, i enlighet med WCAG:s riktlinjer för tillgänglighet.',
  },
  {
    question: 'Är det säkert att använda denna online färgkonverterare?',
    answer: 'Absolut. Eftersom den körs till 100 % på klientsidan lämnar dina färgdata aldrig din dator. All process sker direkt i din webbläsare, vilket garanterar integritet och omedelbar prestanda.',
  },
];

const howToData = [
  { name: 'Välj en färg', text: 'Använd skjutreglagen för rött, grönt och blått eller skriv in en HEX-kod direkt i textfältet.' },
  { name: 'Justera RGB-kanaler', text: 'Flytta skjutreglagen för att ändra intensiteten för varje kanal och se uppdateringen i realtid.' },
  { name: 'Kopiera formatet', text: 'Klicka på knappen "Kopiera" bredvid det HEX-, RGB- eller HSL-format du behöver.' },
  { name: 'Utforska harmonier', text: 'Klicka på harmonifärgerna (komplementär, analog, triadisk) för att kopiera dem till urklipp.' },
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
  step: howToData.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
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

const ui: ColorConverterUI = {
  labelPreview: 'Förhandsgranskning (klicka för att kopiera HEX)',
  labelHarmonies: 'Färgharmonier',
  labelR: 'Röd',
  labelG: 'Grön',
  labelB: 'Blå',
  labelComp: 'Komp.',
  labelAna1: 'Analog 1',
  labelAna2: 'Analog 2',
  labelTri1: 'Triad 1',
  labelTri2: 'Triad 2',
  btnCopy: 'Kopiera',
  btnCopied: 'Kopierad',
  contrastLabel: 'Kontrast',
  clickToCopy: 'Klicka för att kopiera',
};

export const content: ToolLocaleContent<ColorConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Resurser för färg och webbdesign',
  bibliography: [
    { name: 'W3C: CSS färg-dokumentation', url: 'https://www.w3.org/TR/css-color-4/' },
    { name: 'MDN: Guide till HSL-färgmodellen', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl' },
    { name: 'WebAIM: Guide till kontrast och tillgänglighet', url: 'https://webaim.org/resources/contrastchecker/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'RGB till HEX och HSL färgkonverterare för utvecklare', level: 2 },
    {
      type: 'paragraph',
      html: 'I världen av <strong>frontend-utveckling</strong> och <strong>UI/UX-design</strong> är färgoptimering en ständig uppgift. Vår <strong>online färgkonverterare</strong> låter dig transformera värden mellan <strong>HEX, RGB och HSL</strong> direkt och med matematisk precision.',
    },
    { type: 'title', text: 'Färgformat: HEX, RGB och HSL', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>HEX (Hexadecimal):</strong> De facto-standarden för CSS. Kompakt och lätt att dela i kod.',
        '<strong>RGB (Röd, Grön, Blå):</strong> Baserat på det additiva ljussystemet. Idealiskt för att manipulera kanaler direkt eller använda transparens med RGBA.',
        '<strong>HSL (Nyans, Mättnad, Ljusstyrka):</strong> Det mest intuitiva formatet. Justera nyans, mättnad och ljusstyrka för att skapa harmoniska paletter.',
      ],
    },
    { type: 'title', text: 'Kontrast och WCAG-tillgänglighet', level: 3 },
    {
      type: 'paragraph',
      html: 'Kalkylatorn inkluderar en mätning av <strong>relativ kontrast</strong> baserad på luminans. Detta hjälper dig att uppfylla <strong>WCAG</strong>-riktlinjerna och säkerställa att din text är läsbar mot valda bakgrunder.',
    },
    { type: 'title', text: 'Automatiska färgharmonier', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Komplementär:</strong> Motsatt färg i färgcirkeln, perfekt för maximal kontrast.',
        '<strong>Analog:</strong> Intilliggande färger som skapar mjuka, harmoniska övergångar.',
        '<strong>Triadisk:</strong> Tre färger med lika avstånd för livfulla och balanserade kompositioner.',
      ],
    },
  ],
};
