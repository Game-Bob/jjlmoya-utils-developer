import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgToCssUI } from '../ui';

const slug = 'svg-till-css-konverterare';
const title = 'Gratis Online SVG till CSS och Data URI konverterare';
const description =
  'Omvandla dina SVG-ikoner och vektorer till CSS-kod (Background eller Mask) eller komprimerade Data URI-strängar. Optimera din webbplats prestanda genom att eliminera externa HTTP-anrop.';

const faqData = [
  {
    question: 'Är det bättre att använda en Data URI eller en extern .svg-fil?',
    answer:
      'Det beror på användningsfallet. Data URI:er eliminerar HTTP-anrop (idealiskt för små ikoner), men ökar CSS-filens storlek. För stora eller detaljrika illustrationer är en extern fil att föredra.',
  },
  {
    question: 'Hur ändrar jag färgen på en SVG som är inbäddad i CSS?',
    answer:
      "Det bästa sättet är via 'mask-image'. Genom att definiera SVG:n som en mask kan du använda 'background-color' för att ändra dess färg dynamiskt, även i :hover-lägen.",
  },
  {
    question: 'Vilka webbläsare stöder CSS Masks?',
    answer:
      'Alla moderna webbläsare (Chrome, Firefox, Safari, Edge) har fullt stöd. För äldre webbläsare används vanligen -webkit-prefix.',
  },
  {
    question: 'Påverkar användningen av Data URI:er SEO?',
    answer:
      'Ja, positivt. Genom att minska antalet anrop som behövs för att rendera sidan förbättras laddningstiden (LCP) och Core Web Vitals-poängen.',
  },
  {
    question: 'Kan jag använda den i ramverk som React eller Tailwind?',
    answer:
      'Absolut! Du kan kopiera den genererade koden och använda den i dina .css-filer eller till och med som godtyckliga värden i Tailwind CSS.',
  },
];

const howToData = [
  {
    name: 'Klistra in SVG',
    text: 'Kopiera källkoden för din SVG-fil och klistra in den i textområdet till vänster.',
  },
  {
    name: 'Välj utdatatyp',
    text: 'Välj mellan Bakgrundsbild (för statiska bakgrunder), CSS-mask (för ikoner med dynamisk färg) eller Endast Data URI (för direkt användning).',
  },
  {
    name: 'Kopiera resultatet',
    text: 'Klicka på "Kopiera" för att ta den genererade CSS-koden till ditt urklipp.',
  },
  {
    name: 'Applicera i ditt projekt',
    text: 'Klistra in koden i din stylesheet eller CSS-komponent. För masker, lägg även till background-color för att definiera ikonens färg.',
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

const ui: SvgToCssUI = {
  labelPasteTitle: 'Klistra in SVG',
  labelInputArea: 'SVG-källkod',
  labelPreviewOriginal: 'Originalförhandsgranskning',
  labelResultTitle: 'CSS-resultat',
  labelPreviewApplied: 'Applicerat resultat',
  tabBackground: 'Bakgrundsbild',
  tabMask: 'CSS-mask / Webkit',
  tabUri: 'Endast Data URI',
  btnCopy: 'Kopiera',
  btnCopied: 'Kopierad!',
  placeholder: '<svg xmlns="http://www.w3.org/2000/svg" ...',
};

export const content: ToolLocaleContent<SvgToCssUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Referenser och dokumentation',
  bibliography: [
    {
      name: 'CSS-Tricks: Använda SVG som bakgrund',
      url: 'https://css-tricks.com/using-svg/',
    },
    {
      name: 'MDN Web Docs: mask-image',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image',
    },
    {
      name: 'MDN Web Docs: background-image',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-image',
    },
    {
      name: 'W3C: CSS Masking Module Level 1',
      url: 'https://www.w3.org/TR/css-masking-1/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Varför konvertera SVG till CSS Data URI?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'I modern webbutveckling är optimering av prestanda och resursladdning avgörande. Att bädda in ikoner direkt i CSS via <strong>Data URI:er</strong> eliminerar onödiga HTTP-anrop, vilket minskar latens och förbättrar Time to Interactive (TTI).',
    },
    {
      type: 'paragraph',
      html: 'Detta verktyg omvandlar <code>&lt;svg&gt;</code>-vektorkod till en kodad textsträng som webbläsaren kan tolka som en bakgrundsbild eller en urklippsmask, samtidigt som den oändliga skalbarheten och skärpan hos vektorer bibehålls.',
    },
    {
      type: 'title',
      text: 'Viktiga tekniska fördelar',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Noll HTTP-anrop:</strong> Genom att bädda in grafiken i dina <code>.css</code>-filer behöver webbläsaren inte ladda ner ytterligare externa filer.',
        '<strong>Anpassning via CSS-mask:</strong> Med <code>mask-image</code>-tekniken kan du ändra färgen på en komplex vektorikon genom att bara använda <code>background-color</code>.',
        '<strong>Omedelbar rendering:</strong> Du undviker innehållsflimmer (FOUC) eftersom kritiska visuella resurser är tillgängliga så snart stilmallen har laddats ner.',
      ],
    },
    {
      type: 'title',
      text: 'CSS Masker vs Bakgrunder',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Många utvecklare använder helt enkelt <code>background-image</code> för att bädda in vektorer, men detta har en begränsning: du kan inte ändra SVG-färgen dynamiskt från CSS.',
    },
    {
      type: 'paragraph',
      html: 'Vårt verktyg stöder kodgenerering för <strong>CSS Masker</strong>. Genom att applicera en <code>mask-image</code> med den genererade Data URI:n fungerar ikonen som en schablon, vilket gör att elementets <code>background-color</code> definierar ikonens slutliga färg. Det är det mest professionella och flexibla sättet att hantera ikoner i Astro, Next.js eller andra moderna ramverk.',
    },
  ],
};
