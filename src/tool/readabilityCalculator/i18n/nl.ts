import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReadabilityCalculatorUI } from '../ui';

const slug = 'visuele-leesbaarheidsrekenmachine-wcag-apca';
const title = 'Visuele Leesbaarheidsrekenmachine WCAG en APCA';
const description = 'Controleer het werkelijke contrast van uw ontwerpen met APCA (WCAG 3.0). Analyseer hoe lettergewicht en -grootte de echte leesbaarheid beïnvloeden. Van eenvoudige verhoudingen tot perceptuele leesbaarheid.';

const faqData = [
  {
    question: 'Wat is APCA en waarom verschilt het van WCAG 2.1?',
    answer: 'APCA is het Advanced Perceptual Contrast Algorithm, ontwikkeld voor WCAG 3.0. Anders dan de oude eenvoudige verhouding gebruikt APCA wiskundige modellen die nabootsen hoe het menselijk brein contrast waarneemt, rekening houdend met polariteit (lichte vs. donkere achtergrond) en lettergrootte en -gewicht.',
  },
  {
    question: 'Wat betekent de Lc-waarde?',
    answer: 'Lc (Lightness Contrast) is de contrastwaarde die APCA genereert. Een waarde van 100 staat voor het ideale maximale contrast, terwijl waarden onder de 60 kritisch worden voor doorlopende leesteksten. Het is een absolute schaal voor perceptuele grootte.',
  },
  {
    question: 'Hoe beïnvloedt het lettergewicht de leesbaarheid?',
    answer: 'Dunne lettertypen (Thin/Light) vereisen een veel hoger contrast om leesbaar te zijn. APCA penaliseert lettertypen met een laag gewicht en laat zien dat een ontwerp dat WCAG haalt met een gewicht-100-lettertype in de praktijk onleesbaar kan zijn.',
  },
  {
    question: 'Is deze rekenmachine privacyvriendelijk?',
    answer: 'Ja, alle berekeningen worden lokaal in uw browser uitgevoerd. De kleuren en instellingen die u analyseert worden nooit naar een server verzonden, wat volledige privacy voor uw ontwerpprojecten garandeert.',
  },
];

const howToData = [
  { name: 'Kleuren kiezen', text: 'Gebruik de kleurkiezers om de tekstkleur en achtergrondkleur van uw ontwerp in te stellen.' },
  { name: 'Typografie aanpassen', text: 'Versleep de schuifregelaars voor lettergrootte en -gewicht om uw werkelijke typografie te simuleren.' },
  { name: 'Resultaten lezen', text: 'Controleer de WCAG 2.1-verhouding en de APCA Lc-waarde om te weten of uw ontwerp toegankelijk is.' },
  { name: 'Aanbevelingen bekijken', text: 'Bekijk de APCA-specifieke aanbevelingen voor leestekst, kleine tekst en UI-elementen.' },
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

const ui: ReadabilityCalculatorUI = {
  labelColors: 'Basiskleuren',
  labelText: 'Tekst',
  labelBg: 'Achtergrond',
  labelTypo: 'Typografie',
  labelFontSize: 'Lettergrootte',
  labelFontWeight: 'Lettergewicht',
  labelCompare: 'Contrastvergelijking',
  labelPreview: 'Perceptueel voorbeeld',
  labelApcaRecs: 'APCA-aanbevelingen',
  labelBody: 'Leestekst (Body)',
  labelSmall: 'Kleine tekst / Bijschrift',
  labelUi: 'UI / Knoppen',
  statusYes: 'Ja',
  statusNo: 'Nee',
  wcagAAA: 'Slaagt voor AAA',
  wcagAA: 'Slaagt voor AA',
  wcagLarge: 'Alleen grote tekst',
  wcagFail: 'Slaagt niet',
  apcaExcellent: 'Uitstekend',
  apcaGood: 'Goed',
  apcaMinimal: 'Minimaal',
  apcaPoor: 'Onvoldoende',
  previewText: 'Visuele leesbaarheid is niet alleen wiskunde. Het is de manier waarop licht en schaduw met uw ogen samenwerken.',
  wcagRatioLabel: 'WCAG 2.1-verhouding',
  apcaLcLabel: 'APCA Lc (WCAG 3)',
};

export const content: ToolLocaleContent<ReadabilityCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Veelgestelde vragen',
  faq: faqData,
  bibliographyTitle: 'Bronnen over contrast en APCA',
  bibliography: [
    { name: 'W3C: WCAG 3.0-concept (Silver)', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/' },
    { name: 'Myndex: APCA-referentiegids', url: 'https://apcaw3.myndex.com/' },
    { name: 'MDN: Toegankelijkheid en kleurcontrast', url: 'https://developer.mozilla.org/nl/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Visuele leesbaarheidsrekenmachine (WCAG vs APCA)', level: 2 },
    {
      type: 'paragraph',
      html: 'Begrijp hoe uw kleuren en typografie de werkelijke leesbaarheid beïnvloeden met de nieuwe perceptuele toegankelijkheidsstandaard. WCAG 2.1 gebruikt een eenvoudige wiskundige formule uit 2008. <strong>APCA</strong> is het nieuwe model voor <strong>WCAG 3.0</strong> dat menselijke waarneming nabootst.',
    },
    { type: 'title', text: 'Kernpunten van APCA', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Polariteit:</strong> Begrijpt dat donkere modus anders wordt waargenomen dan lichte modus.',
        '<strong>Lettergewicht:</strong> Kent specifieke contrastniveaus (Lc) toe op basis van het typografisch gewicht.',
        '<strong>Lineariteit:</strong> Corrigeert wiskundige onnauwkeurigheden in het relatieve luminantiemodel uit 2008.',
      ],
    },
    { type: 'title', text: 'Aanbevolen APCA-niveaus', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Lc 90+:</strong> Ideaal voor zeer kleine of lichte tekst.',
        '<strong>Lc 75:</strong> De standaard voor gewone leestekst.',
        '<strong>Lc 60:</strong> Minimum voor leesbare content van gemiddelde grootte.',
        '<strong>Lc 45:</strong> Minimum voor grote of decoratieve elementen.',
      ],
    },
  ],
};
