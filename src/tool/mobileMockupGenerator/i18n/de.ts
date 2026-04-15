import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileMockupGeneratorUI } from '../ui';

const slug = 'mobiler-mockup-generator';
const title = 'Mobiler Mockup Generator für den App Store. iPhone und Google Pixel';
const description = 'Erstellen Sie professionelle Präsentationen für den App Store und Google Play. iPhone- und Pixel-Mockups mit individuellen Hintergründen, panoramischen Layouts und massenweisem HD-Export.';

const faqData = [
  { question: 'Sind diese Screenshots für den App Store und Google Play gültig?', answer: 'Ja, die generierten Bilder erfüllen die Proportions- und Qualitätsanforderungen der App-Stores. Wählen Sie einfach das passende Gerät (iPhone für iOS, Pixel für Android) vor dem Export.' },
  { question: 'Kann ich eigene benutzerdefinierte Hintergründe verwenden?', answer: 'Selbstverständlich. Neben unserer Premium-Gradienten-Bibliothek können Sie beliebige Bilder von Ihrem Computer hochladen, die als Hintergrundumgebung für Ihre Mockups dienen.' },
  { question: 'Ist es für kommerzielle Nutzung kostenlos?', answer: 'Ja, Sie können die generierten Mockups für kommerzielle Projekte, Portfolios oder Präsentationen ohne Kosten und ohne Wasserzeichen verwenden.' },
  { question: 'Werden meine Screenshots auf einem Server gespeichert?', answer: 'Nein. Der Generator arbeitet zu 100 % lokal in Ihrem Browser. Ihre privaten Bilder verlassen Ihren Computer nie.' },
];

const howToData = [
  { name: 'Screenshots hochladen', text: 'Ziehen Sie die Screenshots Ihrer mobilen App per Drag-and-Drop oder wählen Sie sie aus, um sie zu präsentieren.' },
  { name: 'Gerät auswählen', text: 'Wählen Sie das Smartphone-Modell (iPhone 15 Pro Max oder Google Pixel 8) je nach Ziel-Store.' },
  { name: 'Umgebung anpassen', text: 'Passen Sie Hintergrund, Gerätewinkel und Marketing-Texte an und wählen Sie das Kompositions-Layout.' },
  { name: 'In HD herunterladen', text: 'Exportieren Sie alle Ergebnisse im hochauflösenden WebP-Format, bereit zum Hochladen in den App-Store.' },
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
  inLanguage: 'de',
};

const ui: MobileMockupGeneratorUI = {
  labelUpload: 'Screenshots hochladen',
  dropHint: 'Bilder hierher ziehen',
  dropFormats: 'PNG, JPG oder WEBP',
  btnMassReplace: 'Massenersatz (Batch)',
  massReplaceHint: 'Ersetzt die aktuellen Bilder unter Beibehaltung Ihrer Voreinstellungen und Texte. Ideal für schnelle Iterationen.',
  labelSettings: 'Globale Einstellungen',
  labelDevice: 'Gerät',
  labelFont: 'Schriftart',
  labelBackground: 'Hintergrund',
  titleSwapColors: 'Farben tauschen',
  labelAngle: 'Winkel',
  labelSafeArea: 'Safe Area (Oben/Unten)',
  labelSafeAreaColor: 'Bereichsfarbe',
  emptyTitle: 'Noch keine Bilder',
  emptySubtitle: 'Laden Sie Ihre Screenshots hoch, um mit dem Gestalten zu beginnen',
  btnClearAll: 'Leinwand leeren',
  btnExport: 'Alles exportieren (.zip)',
  cardTitleDuplicate: 'Szene duplizieren',
  cardTitleReplace: 'Aktuellen Screenshot ersetzen',
  cardSectionLayouts: 'Master-Layouts',
  cardSectionBranding: 'Branding & Texte',
  cardTitleResetText: 'Text zurücksetzen',
  cardLabelColor: 'Farbe',
  cardTextPlaceholder: 'Text hier eingeben...',
  cardSectionDevice: 'Geräte-Layout',
  cardTitleResetDevice: 'Position zurücksetzen',
  cardSectionScene: 'Requisiten & Hintergrund',
  cardBtnSpecialBg: 'Spezieller Hintergrund',
  cardBtnDeleteScene: 'Szene löschen',
  cardRangeLabelSize: 'Größe',
  cardRangeLabelX: 'X-Achse',
  cardRangeLabelY: 'Y-Achse',
  cardRangeLabelRotation: 'Drehung',
  cardRangeLabelScale: 'Skalierung',
  presetClassic: 'Klassisch',
  presetMobileBottom: 'Handy unten',
  presetMobileTop: 'Handy oben',
  presetFocus: 'Fokus',
  presetDynamic: 'Dynamisch',
  presetSplitLeft: 'Geteilt links',
  presetSplitRight: 'Geteilt rechts',
  presetImageLeft: 'Bild links',
  presetImageRight: 'Bild rechts',
  confirmClear: 'Möchten Sie wirklich alle Mockups löschen?',
  processingExport: 'Wird verarbeitet...',
  exportDone: 'Fertig!',
};

export const content: ToolLocaleContent<MobileMockupGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Referenzen',
  bibliography: [
    { name: 'Apple App Store Screenshot Requirements', url: 'https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications' },
    { name: 'Google Play Screenshot Requirements', url: 'https://support.google.com/googleplay/android-developer/answer/9866151' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Heben Sie Ihre Screenshots auf das nächste Level', level: 2 },
    { type: 'paragraph', html: 'Beschränken Sie sich nicht auf flache Screenshots. Unser Mockup-Tool ermöglicht Entwicklern und Designern die Erstellung wirkungsvoller visueller Assets ohne Photoshop oder Figma.' },
    { type: 'title', text: 'Kraft durch Master-Layouts', level: 3 },
    { type: 'grid', columns: 2 },
    { type: 'card', title: 'App Store & Google Play', html: '<p>Steigern Sie Ihre Konversionsrate. iPhone 15 Pro Max und Pixel 8 Mockups sind der weltweite Standard für App-Store-Einträge.</p>' },
    { type: 'card', title: 'Pitch Decks & Marketing', html: '<p>Präsentieren Sie Ihre Ideen überzeugend. Perfekt für Investoren-Präsentationen, Social-Media-Kampagnen und professionelle UI/UX-Design-Portfolios.</p>' },
    { type: 'title', text: 'Professioneller Workflow', level: 3 },
    { type: 'tip', html: 'Nutzen Sie die Voreinstellungen "Geteilt links" und "Geteilt rechts", um nahtlose Mockups zu erstellen, die in Instagram-Karussells oder App-Store-Screenshots fließend von einem Bild zum nächsten übergehen.' },
  ],
};
