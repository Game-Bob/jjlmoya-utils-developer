import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgToCssUI } from '../ui';

const slug = 'svg-naar-css-converter';
const title = 'Gratis Online SVG naar CSS en Data URI Converter';
const description =
  'Transformeer uw SVG-iconen en vectoren naar CSS-code (Background of Mask) of gecomprimeerde Data URI. Optimaliseer uw websiteprestaties door externe HTTP-verzoeken te elimineren.';

const faqData = [
  {
    question: 'Is het beter om een Data URI of een extern .svg-bestand te gebruiken?',
    answer:
      'Dit hangt af van de use-case. Data URI\'s elimineren HTTP-verzoeken (ideaal voor kleine iconen), maar vergroten het CSS-bestand. Voor grote of gedetailleerde illustraties is een extern bestand de voorkeur.',
  },
  {
    question: 'Hoe verander ik de kleur van een in CSS ingebedde SVG?',
    answer:
      "De beste manier is via 'mask-image'. Door de SVG als masker te definiëren, kunt u 'background-color' gebruiken om de kleur dynamisch te wijzigen, zelfs in :hover-states.",
  },
  {
    question: 'Welke browsers ondersteunen CSS Masks?',
    answer:
      'Alle moderne browsers (Chrome, Firefox, Safari, Edge) hebben volledige ondersteuning. Voor oudere browsers worden meestal -webkit-prefixen gebruikt.',
  },
  {
    question: 'Heeft het gebruik van Data URI\'s invloed op SEO?',
    answer:
      'Ja, positief. Door het aantal verzoeken te verminderen dat nodig is om de pagina te renderen, verbetert het de laadtijd (LCP) en Core Web Vitals-scores.',
  },
  {
    question: 'Kan ik het gebruiken in frameworks zoals React of Tailwind?',
    answer:
      'Absoluut! U kunt de gegenereerde code kopiëren en gebruiken in uw .css-bestanden of zelfs als willekeurige waarden in Tailwind CSS.',
  },
];

const howToData = [
  {
    name: 'Plak de SVG',
    text: 'Kopieer de broncode van uw SVG-bestand en plak deze in het tekstvak aan de linkerkant.',
  },
  {
    name: 'Kies het uitvoertype',
    text: 'Kies tussen Achtergrondafbeelding (voor statische achtergronden), CSS-masker (voor iconen met dynamische kleur) of Alleen Data URI (voor direct gebruik).',
  },
  {
    name: 'Kopieer het resultaat',
    text: 'Klik op "Kopiëren" om de gegenereerde CSS-code naar uw klembord te kopiëren.',
  },
  {
    name: 'Toepassen in uw project',
    text: 'Plak de code in uw stylesheet of CSS-component. Voeg voor maskers ook background-color toe om de kleur van het icoon te definiëren.',
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
  inLanguage: 'nl',
};

const ui: SvgToCssUI = {
  labelPasteTitle: 'Plak SVG',
  labelInputArea: 'SVG Broncode',
  labelPreviewOriginal: 'Originele Preview',
  labelResultTitle: 'CSS Resultaat',
  labelPreviewApplied: 'Toegepast Resultaat',
  tabBackground: 'Achtergrondafbeelding',
  tabMask: 'CSS Masker / Webkit',
  tabUri: 'Alleen Data URI',
  btnCopy: 'Kopiëren',
  btnCopied: 'Gekopieerd!',
  placeholder: '<svg xmlns="http://www.w3.org/2000/svg" ...',
};

export const content: ToolLocaleContent<SvgToCssUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Referenties en Documentatie',
  bibliography: [
    {
      name: 'CSS-Tricks: Using SVG as Background',
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
      text: 'Waarom SVG converteren naar CSS Data URI?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In moderne webontwikkeling is het optimaliseren van prestaties en het laden van bronnen essentieel. Het direct inbedden van iconen in CSS via <strong>Data URI\'s</strong> elimineert onnodige HTTP-verzoeken, vermindert latentie en verbetert de Time to Interactive (TTI).',
    },
    {
      type: 'paragraph',
      html: 'Deze tool transformeert <code>&lt;svg&gt;</code> vectorcode naar een gecodeerde tekststring die de browser kan interpreteren als een achtergrondafbeelding of een masker, terwijl de oneindige schaalbaarheid en de scherpte van vectoren behouden blijven.',
    },
    {
      type: 'title',
      text: 'Belangrijkste technische voordelen',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Nul HTTP-verzoeken:</strong> Door de grafische bestanden in uw <code>.css</code>-bestanden in te bedden, hoeft de browser geen aanvullende externe bestanden te downloaden.',
        '<strong>Aanpassing via CSS Mask:</strong> Met de <code>mask-image</code>-techniek kunt u de kleur van een complex vectoricoon wijzigen door simpelweg <code>background-color</code> te gebruiken.',
        '<strong>Onmiddellijke rendering:</strong> U vermijdt contentflikkering (FOUC) omdat kritieke visuele bronnen beschikbaar zijn zodra het stylesheet is gedownload.',
      ],
    },
    {
      type: 'title',
      text: 'CSS Masks vs Achtergronden',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Veel ontwikkelaars gebruiken gewoon <code>background-image</code> om vectoren in te bedden, maar dit heeft een beperking: u kunt de kleur van de SVG niet dynamisch wijzigen via CSS.',
    },
    {
      type: 'paragraph',
      html: 'Onze tool ondersteunt codegeneratie voor <strong>CSS Masks</strong>. Door een <code>mask-image</code> toe te passen met de gegenereerde Data URI, fungeert het icoon als een sjabloon, waardoor de <code>background-color</code> van het element de uiteindelijke kleur van het icoon definieert. Het is de meest professionele en flexibele manier om iconen te beheren in Astro, Next.js of elk modern framework.',
    },
  ],
};
