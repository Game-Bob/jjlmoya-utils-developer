import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ColorConverterUI } from '../ui';

const slug = 'kleuren-converter-rgb-hex-hsl';
const title = 'Online Kleuren Converter RGB HEX en HSL';
const description = 'Converteer kleuren direct tussen RGB, HEX en HSL. Genereer complementaire kleurharmonieën en analyseer WCAG-contrast. 100% client-side en privé.';

const faqData = [
  {
    question: 'Hoe werkt de RGB naar HEX en HSL kleurenconverter?',
    answer: 'De tool neemt Rood, Groen en Blauw (RGB) waarden en gebruikt wiskundige algoritmen om deze om te zetten naar hun hexadecimale (HEX) equivalent of Hue, Saturation, Lightness (HSL) waarden. Het werkt ook omgekeerd.',
  },
  {
    question: 'Waarom zou ik HSL gebruiken in plaats van HEX in mijn ontwerpen?',
    answer: 'Het HSL-formaat is veel intuïtiever. Het stelt je in staat om verzadiging of lichtheid aan te passen zonder de tint te veranderen, waardoor het veel gemakkelijker is om harmonische paletten of knopstatussen (hover, uitgeschakeld) te maken.',
  },
  {
    question: 'Wat is de relatieve contrastwaarde?',
    answer: 'Het is een maatstaf die de leesbaarheid van tekst tegen een achtergrond aangeeft op basis van de luminantie. Hoog contrast zorgt ervoor dat mensen met een visuele beperking de inhoud kunnen lezen, volgens de WCAG-toegankelijkheidsrichtlijnen.',
  },
  {
    question: 'Is het veilig om deze online kleurenconverter te gebruiken?',
    answer: 'Absoluut. Omdat het 100% client-side is, verlaten je kleurgegevens nooit je computer. Alle verwerking vindt rechtstreeks plaats in je browser, wat privacy en directe prestaties garandeert.',
  },
];

const howToData = [
  { name: 'Selecteer een Kleur', text: 'Gebruik de Rood, Groen en Blauw schuifregelaars of typ een HEX-code rechtstreeks in het tekstveld.' },
  { name: 'Pas RGB-kanalen aan', text: 'Verschuif de regelaars om de intensiteit van elk kanaal te veranderen en zie de real-time update.' },
  { name: 'Kopieer het Formaat', text: 'Klik op de kopieerknop naast het HEX-, RGB- of HSL-formaat dat je nodig hebt.' },
  { name: 'Verken Harmonieën', text: 'Klik op de harmoniekleuren (complementair, analoog, triadisch) om ze naar het klembord te kopiëren.' },
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
  inLanguage: 'nl',
};

const ui: ColorConverterUI = {
  labelPreview: 'Voorbeeld (klik om HEX te kopiëren)',
  labelHarmonies: 'Kleurharmonieën',
  labelR: 'Rood',
  labelG: 'Groen',
  labelB: 'Blauw',
  labelComp: 'Comp.',
  labelAna1: 'Analoog 1',
  labelAna2: 'Analoog 2',
  labelTri1: 'Triadisch 1',
  labelTri2: 'Triadisch 2',
  btnCopy: 'Kopiëren',
  btnCopied: 'Gekopieerd',
  contrastLabel: 'Contrast',
  clickToCopy: 'Klik om te kopiëren',
};

export const content: ToolLocaleContent<ColorConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Kleur- en Webdesignbronnen',
  bibliography: [
    { name: 'W3C: CSS Kleur Documentatie', url: 'https://www.w3.org/TR/css-color-4/' },
    { name: 'MDN: Gids voor HSL Kleurmodel', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl' },
    { name: 'WebAIM: Gids voor Contrast en Toegankelijkheid', url: 'https://webaim.org/resources/contrastchecker/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'RGB naar HEX en HSL Kleurenconverter voor Ontwikkelaars', level: 2 },
    {
      type: 'paragraph',
      html: 'In de wereld van <strong>frontend development</strong> en <strong>UI/UX design</strong> is kleurbeheer een constante taak. Onze <strong>online kleurenconverter</strong> laat je waarden tussen <strong>HEX, RGB en HSL</strong> direct en met wiskundige precisie transformeren.',
    },
    { type: 'title', text: 'Kleurformaten: HEX, RGB en HSL', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>HEX (Hexadecimaal):</strong> De de facto standaard voor CSS. Compact en gemakkelijk te delen in code.',
        '<strong>RGB (Rood, Groen, Blauw):</strong> Gebaseerd op het additieve lichtsysteem. Ideaal voor het direct manipuleren van kanalen of het toepassen van transparantie met RGBA.',
        '<strong>HSL (Hue, Saturation, Lightness):</strong> Het meest intuïtieve formaat. Pas tint, verzadiging en lichtheid aan om harmonische paletten te maken.',
      ],
    },
    { type: 'title', text: 'Contrast en WCAG Toegankelijkheid', level: 3 },
    {
      type: 'paragraph',
      html: 'De calculator bevat een <strong>relatieve contrastmeting</strong> op basis van luminantie. Dit helpt je om te voldoen aan de <strong>WCAG</strong>-richtlijnen, zodat je tekst leesbaar is tegen de geselecteerde achtergronden.',
    },
    { type: 'title', text: 'Automatische Kleurharmonieën', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Complementair:</strong> De tegenoverliggende kleur op het kleurenwiel, ideaal voor maximaal contrast.',
        '<strong>Analoog:</strong> Naastgelegen kleuren die vloeiende, harmonische overgangen creëren.',
        '<strong>Triadisch:</strong> Drie kleuren op gelijke afstand voor levendige, uitgebalanceerde composities.',
      ],
    },
  ],
};
