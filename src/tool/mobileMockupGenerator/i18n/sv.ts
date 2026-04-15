import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileMockupGeneratorUI } from '../ui';

const slug = 'mobil-mockup-generator';
const title = 'Mobil Mockup Generator för App Store. iPhone och Google Pixel';
const description = 'Skapa professionella presentationer för App Store och Google Play. iPhone och Pixel mockups med anpassade bakgrunder, panoramalayouter och export i höga upplösningar.';

const faqData = [
  { question: 'Är dessa skärmbilder giltiga för App Store och Google Play?', answer: 'Ja, de genererade bilderna uppfyller proportions- och kvalitetskraven för appbutikerna. Välj bara rätt enhet (iPhone för iOS, Pixel för Android) innan du exporterar.' },
  { question: 'Kan jag använda mina egna anpassade bakgrunder?', answer: 'Helt enkelt. Förutom våra premium-gradienter kan du ladda upp vilken bild som helst från din dator för att fungera som bakgrundsmiljö för dina mockups.' },
  { question: 'Är det gratis för kommersiell användning?', answer: 'Ja, du kan använda de genererade mockups för kommersiella projekt, portföljer eller presentationer utan kostnad och utan vattenstämplar.' },
  { question: 'Sparas mina skärmbilder på någon server?', answer: 'Nej. Generatorn fungerar 100% lokalt i din webbläsare. Dina privata bilder lämnar aldrig din dator.' },
];

const howToData = [
  { name: 'Ladda upp skärmbilder', text: 'Dra eller välj skärmbilderna från din mobilapp som du vill presentera.' },
  { name: 'Välj enhet', text: 'Välj smartphonemodell (iPhone 15 Pro Max eller Google Pixel 8) enligt målbutik.' },
  { name: 'Anpassa miljö', text: 'Justera bakgrund, enhetvinkel, lägg till marknadsföringstext och välj kompositionslayout.' },
  { name: 'Ladda ned i HD', text: 'Exportera alla resultat i WebP-format med höga upplösningar, klara för app store-uppladdning.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'sv',
};

const ui: MobileMockupGeneratorUI = {
  labelUpload: 'Ladda upp Skärmbilder',
  dropHint: 'Dra dina bilder här',
  dropFormats: 'PNG, JPG eller WEBP',
  btnMassReplace: 'Massbyte (Batch)',
  massReplaceHint: 'Ersätter aktuella bilder samtidigt som du behåller dina förinställningar och text. Perfekt för snabba iterationer.',
  labelSettings: 'Globala Inställningar',
  labelDevice: 'Enhet',
  labelFont: 'Typografi',
  labelBackground: 'Bakgrund',
  titleSwapColors: 'Byt färger',
  labelAngle: 'Vinkel',
  labelSafeArea: 'Säker Zon (Övre/Nedre)',
  labelSafeAreaColor: 'Zonfärg',
  emptyTitle: 'Inga bilder ännu',
  emptySubtitle: 'Ladda upp dina skärmbilder för att börja designa',
  btnClearAll: 'Rensa Canvas',
  btnExport: 'Exportera Allt (.zip)',
  cardTitleDuplicate: 'Duplicera Scen',
  cardTitleReplace: 'Ersätt Aktuell Skärmbilds',
  cardSectionLayouts: 'Huvudlayouter',
  cardSectionBranding: 'Varumärke och Text',
  cardTitleResetText: 'Återställ Text',
  cardLabelColor: 'Färg',
  cardTextPlaceholder: 'Skriv din text här...',
  cardSectionDevice: 'Enhetslayout',
  cardTitleResetDevice: 'Återställ Position',
  cardSectionScene: 'Rekvisita och Bakgrund',
  cardBtnSpecialBg: 'Speciell Bakgrund',
  cardBtnDeleteScene: 'Ta bort Scen',
  cardRangeLabelSize: 'Storlek',
  cardRangeLabelX: 'X-axel',
  cardRangeLabelY: 'Y-axel',
  cardRangeLabelRotation: 'Rotation',
  cardRangeLabelScale: 'Skala',
  presetClassic: 'Klassisk',
  presetMobileBottom: 'Mobil Nere',
  presetMobileTop: 'Mobil Uppe',
  presetFocus: 'Fokus',
  presetDynamic: 'Dynamisk',
  presetSplitLeft: 'Delning Vänster',
  presetSplitRight: 'Delning Höger',
  presetImageLeft: 'Bild Vänster',
  presetImageRight: 'Bild Höger',
  confirmClear: 'Är du säker på att du vill ta bort alla mockups?',
  processingExport: 'Bearbetar...',
  exportDone: 'Klart!',
};

export const content: ToolLocaleContent<MobileMockupGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Vanliga Frågor',
  faq: faqData,
  bibliographyTitle: 'Referenser',
  bibliography: [
    { name: 'Apple App Store Skärmbildskrav', url: 'https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications' },
    { name: 'Google Play Skärmbildskrav', url: 'https://support.google.com/googleplay/android-developer/answer/9866151' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Höj dina skärmbilder till nästa nivå', level: 2 },
    { type: 'paragraph', html: 'Begränsa dig inte till enkla skärmbilder. Vårt mockup-verktyg låter utvecklare och designers skapa högpåverkande visuella tillgångar utan att behöva Photoshop eller Figma.' },
    { type: 'title', text: 'Kraft med Master Layouts', level: 3 },
    { type: 'grid', columns: 2 },
    { type: 'card', title: 'App Store och Google Play', html: '<p>Optimera din konverteringsgrad. iPhone 15 Pro Max och Pixel 8 mockups är världsstandarden för app store-listningar.</p>' },
    { type: 'card', title: 'Pitch Decks och Marknadsföring', html: '<p>Presentera dina idéer med auktoritet. Perfekt för investerarpresentationer, sociala mediakampanjer och professionella UI/UX-designportföljer.</p>' },
    { type: 'title', text: 'Professionella arbetsflöde', level: 3 },
    { type: 'tip', html: 'Använd förinställningarna "Delning Vänster" och "Delning Höger" för att skapa kontinuerliga mockups som glider från en bild till en annan i Instagram-karuseller eller App Store-skärmbilder.' },
  ],
};
