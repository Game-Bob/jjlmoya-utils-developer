import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AspectRatioUI } from '../ui';

const slug = 'aspect-ratio-rekenmachine';
const title = 'Aspect Ratio Calculator in Pixels. Online Verhoudingen';
const description =
  'Bereken nieuwe resoluties voor afbeeldingen, video en webdesign met behoud van de exacte verhoudingen om vervorming van afbeeldingen te voorkomen. Ondersteunt 16:9, 4:3, 21:9 en aangepaste formaten.';

const faqData = [
  {
    question: 'Wat is de Aspect Ratio?',
    answer:
      'De Aspect Ratio beschrijft de geometrische relatie tussen de breedte en hoogte van een afbeelding of scherm. Het wordt weergegeven door twee getallen gescheiden door een dubbele punt (bijv. 16:9), wat aangeeft hoe de hoogte proportioneel verandert ten opzichte van de breedte.',
  },
  {
    question: 'Waarom is het belangrijk om de juiste verhoudingen te behouden?',
    answer:
      'Het negeren van de Aspect Ratio veroorzaakt ingedrukte of uitgerekte beelden, onverwachte zwarte balken (letterboxing) in video\'s en webcomponenten die hun lay-out verliezen op verschillende schermgroottes. Het behouden van de juiste verhoudingen is essentieel voor een professionele weergave.',
  },
  {
    question: 'Hoe bereken ik de hoogte uit de breedte met een gegeven verhouding?',
    answer:
      'De formule is: Hoogte = Breedte × (Verhouding Hoogte / Verhouding Breedte). Bijvoorbeeld, voor een breedte van 1280px met een verhouding van 16:9, is de hoogte: 1280 × (9/16) = 720px.',
  },
  {
    question: 'Wat is de standaard Aspect Ratio voor YouTube-video\'s?',
    answer:
      '16:9 is de standaardverhouding voor YouTube en de meeste moderne videoplatforms. Het komt overeen met resoluties zoals 1280×720 (HD), 1920×1080 (Full HD) of 3840×2160 (4K UHD).',
  },
  {
    question: 'Welke Aspect Ratio gebruiken verticale social media video\'s?',
    answer:
      '9:16, wat precies het omgekeerde is van het breedbeeldformaat. Het is de standaardverhouding voor TikTok, Instagram Reels en YouTube Shorts, ontstaan door het verticaal gebruik van smartphones.',
  },
];

const howToData = [
  {
    name: 'Voer de originele verhouding in',
    text: 'Voer de breedte- en hoogtewaarden in van de verhouding die u wilt behouden (bijv. 16 en 9 voor breedbeeld) of selecteer een van de presets.',
  },
  {
    name: 'Pas de schaal aan',
    text: 'Wijzig de waarde voor breedte of hoogte in de sectie "Echte Schaal". De tool berekent automatisch de tegenovergestelde waarde om de verhouding te behouden.',
  },
  {
    name: 'Controleer de preview',
    text: 'Het preview-paneel toont de resulterende vorm op proportionele schaal, met de vereenvoudigde verhouding en de berekende resolutie.',
  },
  {
    name: 'Toepassen in uw project',
    text: 'Kopieer de berekende waarden om te gebruiken in uw CSS (aspect-ratio: 16 / 9), bij video-export of in de instellingen van uw ontwerptool.',
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

const ui: AspectRatioUI = {
  labelConfig: 'Configuratie',
  labelRatio: 'Originele verhouding',
  labelWidth: 'Breedte',
  labelHeight: 'Hoogte',
  labelScale: 'Echte schaal',
  labelPixelWidth: 'Pixels (Breedte)',
  labelPixelHeight: 'Pixels (Hoogte)',
  labelPreview: 'Proportionele preview',
  labelStatus: 'Perfecte verhouding',
  labelOffline: '100% Offline Tool',
};

export const content: ToolLocaleContent<AspectRatioUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Referenties en Documentatie',
  bibliography: [
    {
      name: 'MDN Web Docs: aspect-ratio (CSS)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio',
    },
    {
      name: 'Wikipedia: Aspect ratio',
      url: 'https://nl.wikipedia.org/wiki/Beeldverhouding',
    },
    {
      name: 'W3C: CSS Box Sizing Level 4',
      url: 'https://www.w3.org/TR/css-sizing-4/#aspect-ratio',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Wat is de Aspect Ratio?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In grafisch ontwerp, fotografie en frontend-ontwikkeling beschrijft de <strong>Aspect Ratio</strong> de geometrische relatie tussen de breedte en de hoogte van een afbeelding, scherm of container. Het wordt meestal weergegeven met twee getallen gescheiden door een dubbele punt (bijv. <code>16:9</code>), wat aangeeft hoe de hoogte proportioneel toeneemt in reactie op de breedte.',
    },
    {
      type: 'paragraph',
      html: 'Het verkeerd omgaan met aspect ratio\'s is een veelvoorkomende oorzaak van ingedrukte foto\'s, video\'s met onverwachte cropping (letterboxing) of webcomponenten waarvan de lay-out wordt verbroken bij weergave op verschillende schermen, van mobiel tot ultra-wide monitors.',
    },
    {
      type: 'title',
      text: 'Veelvoorkomende verhoudingen in de branche',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Afhankelijk van uw discipline zult u constant te maken krijgen met een beperkt aantal wereldwijde standaardproporties:',
    },
    {
      type: 'list',
      items: [
        '<strong>16:9 (Widescreen):</strong> Het absoluut dominante formaat voor moderne monitoren, tv\'s, YouTube-opnames of standaard high-definition resoluties (zoals 1920×1080 of 4K).',
        '<strong>9:16 (Verticaal):</strong> Ontstaan door het gebruik van content op mobiele telefoons (TikTok, Instagram Reels, YouTube Shorts). Precies dezelfde verhouding als breedbeeldvideo\'s, maar dan met de fysieke rotatie van het apparaat toegepast.',
        '<strong>4:3 (Klassiek / Vintage):</strong> Aanwezig in oude televisies en monitoren of in analoge en gespecialiseerde digitale cameramodellen. Het licht vierkante uiterlijk trekt de aandacht direct naar de centrale compositie-as.',
      ],
    },
    {
      type: 'title',
      text: 'Webontwikkeling en de CSS aspect-ratio eigenschap',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Voorheen werden in CSS complexe wiskundige systemen gebruikt met een <strong>Padding Hack</strong> (zoals het injecteren van een <code>padding-top: 56.25%</code>) om dynamische ruimtes te reserveren in YouTube-iframes of omslagafbeeldingen, om vreselijke Cumulative Layout Shift (CLS) bij het laden van de pagina te voorkomen.',
    },
    {
      type: 'paragraph',
      html: 'Tegenwoordig passen alle moderne lay-outs rechtstreeks eigenschappen toe zoals <code>aspect-ratio: 16 / 9;</code>, wat zorgt voor semantische code en de browser in staat stelt automatisch de ontbrekende dimensie af te leiden uit de oorspronkelijke breedte gedefinieerd via Grid of Flexbox.',
    },
    {
      type: 'paragraph',
      html: 'Deze lokale pixelcalculator brengt de kracht van ontwerp over naar een directe schaalberekening die uw renders beschermt tegen catastrofale misconfiguraties.',
    },
  ],
};

