import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileMockupGeneratorUI } from '../ui';

const slug = 'mobiele-mockup-generator';
const title = 'Mobiele Mockup generator voor de App Store. iPhone en Google Pixel';
const description = 'Maak professionele presentaties voor de App Store en Google Play. iPhone- en Pixel-mockups met aangepaste achtergronden, panoramische layouts en bulkexport in hoge resolutie.';

const faqData = [
  { question: 'Zijn deze screenshots geldig voor de App Store en Google Play?', answer: 'Ja, de gegenereerde afbeeldingen voldoen aan de proporties en kwaliteitseisen van de app-winkels. Kies gewoon het juiste apparaat (iPhone voor iOS, Pixel voor Android) voor het exporteren.' },
  { question: 'Kan ik mijn eigen achtergronden gebruiken?', answer: 'Zeker. Naast onze premium gradiëntenbibliotheek kunt u elke afbeelding van uw computer uploaden als achtergrond voor uw mockups.' },
  { question: 'Is het gratis voor commercieel gebruik?', answer: 'Ja, u kunt de gegenereerde mockups gebruiken voor commerciële projecten, portfolio\'s of presentaties zonder kosten en zonder watermerken.' },
  { question: 'Worden mijn screenshots opgeslagen op een server?', answer: 'Nee. De generator werkt 100% lokaal in uw browser. Uw privéafbeeldingen verlaten uw computer nooit.' },
];

const howToData = [
  { name: 'Screenshots uploaden', text: 'Sleep of selecteer de screenshots van uw mobiele app die u wilt presenteren.' },
  { name: 'Apparaat kiezen', text: 'Selecteer het smartphonemodel (iPhone 15 Pro Max of Google Pixel 8) op basis van de doelwinkel.' },
  { name: 'Omgeving aanpassen', text: 'Pas de achtergrond en de apparaathoek aan, voeg marketingteksten toe en kies de compositie-indeling.' },
  { name: 'Downloaden in HD', text: 'Exporteer alle resultaten in WebP-formaat met hoge resolutie, klaar om te uploaden naar de app-winkel.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'DesignApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'nl',
};

const ui: MobileMockupGeneratorUI = {
  labelUpload: 'Screenshots uploaden',
  dropHint: 'Sleep uw afbeeldingen hiernaartoe',
  dropFormats: 'PNG, JPG of WEBP',
  btnMassReplace: 'Bulkvervangen (Batch)',
  massReplaceHint: 'Vervangt de huidige afbeeldingen terwijl uw presets en teksten bewaard blijven. Ideaal voor snelle iteraties.',
  labelSettings: 'Algemene instellingen',
  labelDevice: 'Apparaat',
  labelFont: 'Typografie',
  labelBackground: 'Achtergrond',
  titleSwapColors: 'Kleuren wisselen',
  labelAngle: 'Hoek',
  labelSafeArea: 'Veilige zone (boven/onder)',
  labelSafeAreaColor: 'Gebiedskleur',
  emptyTitle: 'Nog geen afbeeldingen',
  emptySubtitle: 'Upload uw screenshots om te beginnen met ontwerpen',
  btnClearAll: 'Canvas leegmaken',
  btnExport: 'Alles exporteren (.zip)',
  cardTitleDuplicate: 'Scène dupliceren',
  cardTitleReplace: 'Huidige screenshot vervangen',
  cardSectionLayouts: 'Master-indelingen',
  cardSectionBranding: 'Branding & Teksten',
  cardTitleResetText: 'Tekst herstellen',
  cardLabelColor: 'Kleur',
  cardTextPlaceholder: 'Schrijf uw tekst hier...',
  cardSectionDevice: 'Apparaat-indeling',
  cardTitleResetDevice: 'Positie herstellen',
  cardSectionScene: 'Rekwisieten & Achtergrond',
  cardBtnSpecialBg: 'Speciale achtergrond',
  cardBtnDeleteScene: 'Scène verwijderen',
  cardRangeLabelSize: 'Grootte',
  cardRangeLabelX: 'X-as',
  cardRangeLabelY: 'Y-as',
  cardRangeLabelRotation: 'Rotatie',
  cardRangeLabelScale: 'Schaal',
  presetClassic: 'Klassiek',
  presetMobileBottom: 'Mobiel onderaan',
  presetMobileTop: 'Mobiel bovenaan',
  presetFocus: 'Focus',
  presetDynamic: 'Dynamisch',
  presetSplitLeft: 'Gesplitst links',
  presetSplitRight: 'Gesplitst rechts',
  presetImageLeft: 'Afbeelding links',
  presetImageRight: 'Afbeelding rechts',
  confirmClear: 'Weet u zeker dat u alle mockups wilt verwijderen?',
  processingExport: 'Verwerken...',
  exportDone: 'Klaar!',
};

export const content: ToolLocaleContent<MobileMockupGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Veelgestelde vragen',
  faq: faqData,
  bibliographyTitle: 'Referenties',
  bibliography: [
    { name: 'Apple App Store Screenshot Requirements', url: 'https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications' },
    { name: 'Google Play Screenshot Requirements', url: 'https://support.google.com/googleplay/android-developer/answer/9866151' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Til uw screenshots naar een hoger niveau', level: 2 },
    { type: 'paragraph', html: 'Beperk uzelf niet tot gewone screenshots. Onze mockup-tool stelt ontwikkelaars en designers in staat visuele assets met grote impact te maken zonder Photoshop of Figma.' },
    { type: 'title', text: 'Kracht via Master-indelingen', level: 3 },
    { type: 'grid', columns: 2 },
    { type: 'card', title: 'App Store & Google Play', html: '<p>Optimaliseer uw conversieratio. iPhone 15 Pro Max- en Pixel 8-mockups zijn de wereldstandaard voor app-winkelvermelding.</p>' },
    { type: 'card', title: 'Pitch Decks & Marketing', html: '<p>Presenteer uw ideeën met overtuiging. Perfect voor investeerderspresentaties, social-mediacampagnes en professionele UI/UX-designportfolio\'s.</p>' },
    { type: 'title', text: 'Professionele workflow', level: 3 },
    { type: 'tip', html: 'Gebruik de presets "Gesplitst links" en "Gesplitst rechts" om aaneengesloten mockups te maken die van de ene afbeelding naar de andere overgaan in Instagram-carrousels of App Store-screenshots.' },
  ],
};
