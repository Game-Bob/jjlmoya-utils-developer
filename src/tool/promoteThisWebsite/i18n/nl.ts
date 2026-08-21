import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromoteThisWebsiteUI } from '../ui';
import { bibliography } from '../bibliography';

const localized = {
    slug: 'promoot-deze-website',
    title: 'Promoot deze website',
    description: "De interne propagandabalie voor jjlmoya.es in het Spaans en GameBob.dev internationaal. Maak van screenshots van je eigen pagina's sociale afbeeldingen voordat Bob de feed gênant vindt.",
    faqTitle: 'Promoot deze website zonder de kat kwaad te maken',
    bibliographyTitle: "Pagina's uit de operatie",
    faq: [
      { question: 'Voor wie is deze tool eigenlijk?', answer: "Voor het promoten van pagina's op jjlmoya.es in het Spaans en GameBob.dev internationaal. De rest mag door het raam kijken." },
      { question: 'Kan ik rechtstreeks een screenshot plakken?', answer: 'Ja. Kopieer een screenshot en druk op Ctrl+V. Het wordt de tool-laag, want zelfs het kattenbestuur accepteert bewijs in het juiste formaat.' },
      { question: 'Wat gebeurt er met een productie-URL?', answer: 'De tool leest de metatitel, kiest het juiste merk en laadt de Open Graph-afbeelding. De slug krijgt eindelijk geen promotie.' },
      { question: 'Waarom zijn er twee merken?', answer: 'jjlmoya.es is de Spaanse pagina en GameBob.dev de internationale pagina. De katten doen alsof ze het verschil niet zien.' },
      { question: 'Worden mijn afbeeldingen geüpload?', answer: 'Nee. Ze blijven in de browser en de compositie wordt lokaal gerenderd. Alleen je bewust gedownloade PNG verlaat de pagina.' },
    ],
    howTo: [
      { name: 'Plak een screenshot', text: 'Plak met Ctrl+V een screenshot van jjlmoya.es of GameBob.dev. Het bestuur vraagt bewijs uit zijn eigen rijk.' },
      { name: 'Kies het merk', text: 'Kies jjlmoya.es voor Spaans of GameBob.dev voor de internationale pagina. De kat bezit het pand al.' },
      { name: 'Rangschik de afbeelding', text: 'Sleep screenshot, titel, logo, achtergrond en mascotte tot de compositie opzettelijk lijkt.' },
      { name: 'Exporteer de PNG', text: 'Download de PNG in de gewenste afmetingen voordat Bob met de eer gaat lopen.' },
    ],
    seoTitle: 'De officiële propagandabalie van jjlmoya en GameBob',
    seoIntro: "Dit is geen generieke social-media-componist voor iemand die net het woord branding heeft ontdekt. Hij bestaat om onze pagina's op jjlmoya.es en GameBob.dev te promoten terwijl de katten toezicht houden.",
    seoBody: 'Plak een echte screenshot of laad een productie-URL. De tool leest de paginatitel in plaats van te gokken op basis van de slug en houdt de officiële Open Graph-afbeelding zichtbaar.',
    seoTip: 'Begin met een productie-URL van jjlmoya.es of GameBob.dev. Als titel, merk of afbeelding niet laden, geeft het bestuur eerst het netwerk, dan de mens en ten slotte de katten de schuld.',
};
const ui: PromoteThisWebsiteUI = {
    urlLabel: 'Website-URL', urlPlaceholder: 'https://www.example.com/tools/voorbeeld/', applyUrl: 'Toepassen',
    formatLabel: 'Formaat', panoramic: 'Panorama · 1536 × 1024', instagram: 'Instagram · 1080 × 1350', square: 'Vierkant · 1080 × 1080', story: 'Story · 1080 × 1920',
    titleLabel: 'Titel', titlePlaceholder: 'Een korte titel voor de afbeelding', titleSizeLabel: 'Lettergrootte van titel', titleBoxSizeLabel: 'Grootte van titelvak', titleStyleLabel: 'Titelstijl',
    brandLabel: 'Merk', brandStyleLabel: 'Merkstijl', advancedLabel: 'Geavanceerde compositie', assetsLabel: 'Middelen', backgroundLabel: 'Achtergrond', toolLabel: 'Screenshot van tool', logoLabel: 'Logo', mascotLabel: 'Mascotte',
    layersLabel: 'Lagen', backgroundLayer: 'Achtergrond', toolLayer: 'Tool', logoLayer: 'Logo', mascotLayer: 'Mascotte', titleLayer: 'Titel', reset: 'Resetten', download: 'PNG downloaden', activeLayer: 'Actieve laag',
    canvasHint: 'Sleep lagen rechtstreeks op het canvas. Plak een screenshot met Ctrl+V.', pasted: 'Screenshot als tool-laag geplakt.', urlApplied: 'URL toegepast. Pas de titel aan en voeg de screenshot toe die je wilt promoten.', urlLoading: 'Paginatitel en officiële afbeelding worden gelezen...', urlFailed: 'Deze pagina kon niet worden gelezen. Controleer de URL of voeg de middelen handmatig toe.', fileLoaded: 'Middel geladen.',
    titlePaper: 'Redactioneel papier', titleRibbon: 'Gevouwen lint', titleInk: 'Inktspat', titlePoster: 'Nachtposter', titleTicket: 'Afscheurbaar kaartje', titleMarker: 'Materiële onderstreping', titleSplit: 'Gesplitst blok', titleCapsule: 'Minimale capsule', titleCorner: 'Redactionele hoek', titleVertical: 'Verticaal accent',
    brandPlain: 'Eenvoudig merk', brandPlaque: 'Keramieken plaquette', brandTicket: 'Toegangskaartje', brandStamp: 'Rubberen stempel', brandNeon: 'Neonreclame', brandRibbon: 'Signaallint', brandCorner: 'Redactionele hoek', brandPixel: 'Pixelblok', brandHalo: 'Zachte halo', brandEditorial: 'Redactionele lijn', defaultTool: 'Plak je tool-screenshot',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: localized.faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};
const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: localized.title,
  description: localized.description,
  step: localized.howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};
const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: localized.title,
  description: localized.description,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<PromoteThisWebsiteUI> = {
  slug: localized.slug,
  title: localized.title,
  description: localized.description,
  ui,
  faqTitle: localized.faqTitle,
  faq: localized.faq,
  bibliographyTitle: localized.bibliographyTitle,
  bibliography,
  howTo: localized.howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: localized.seoTitle, level: 2 },
    { type: 'paragraph', html: localized.seoIntro },
    { type: 'stats', columns: 3, items: [{ value: '2', label: ui.brandLabel, icon: 'mdi:domain' }, { value: '4', label: ui.formatLabel, icon: 'mdi:crop' }, { value: '0', label: ui.activeLayer, icon: 'mdi:cat' }] },
    { type: 'title', text: localized.title, level: 3 },
    { type: 'paragraph', html: localized.seoBody },
    { type: 'title', text: localized.faqTitle, level: 3 },
    { type: 'paragraph', html: localized.seoBody },
    { type: 'table', headers: [ui.toolLayer, ui.titleLayer, ui.brandLabel], rows: [[ui.toolLabel, ui.titleLabel, ui.logoLabel]] },
    { type: 'tip', title: localized.faqTitle, html: localized.seoTip },
  ],
};
