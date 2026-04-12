import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileMockupGeneratorUI } from '../ui';

const slug = 'generateur-mockups-mobile';
const title = 'Générateur de Mockups Mobile pour App Store. iPhone et Google Pixel';
const description = 'Créez des présentations professionnelles pour l\'App Store et Google Play. Mockups iPhone et Pixel avec arrière-plans personnalisés, mises en page panoramiques et export haute résolution en masse.';

const faqData = [
  { question: 'Ces captures sont-elles valides pour l\'App Store et Google Play ?', answer: 'Oui, les images générées respectent les proportions et qualités requises par les boutiques d\'applications. Choisissez simplement le bon appareil (iPhone pour iOS, Pixel pour Android) avant d\'exporter.' },
  { question: 'Puis-je utiliser mes propres arrière-plans personnalisés ?', answer: 'Bien sûr. En plus de notre bibliothèque de dégradés premium, vous pouvez télécharger n\'importe quelle image de votre ordinateur pour servir d\'environnement de fond à vos mockups.' },
  { question: 'Est-ce gratuit pour un usage commercial ?', answer: 'Oui, vous pouvez utiliser les mockups générés pour vos projets commerciaux, portfolios ou présentations sans aucun coût ni filigrane.' },
  { question: 'Mes captures d\'écran sont-elles sauvegardées sur un serveur ?', answer: 'Non. Le générateur fonctionne 100% localement dans votre navigateur. Vos images privées ne quittent jamais votre ordinateur.' },
];

const howToData = [
  { name: 'Télécharger les captures', text: 'Glissez ou sélectionnez les captures d\'écran de votre application mobile que vous souhaitez présenter.' },
  { name: 'Choisir l\'appareil', text: 'Sélectionnez le modèle de smartphone (iPhone 15 Pro Max ou Google Pixel 8) selon la boutique cible.' },
  { name: 'Personnaliser l\'environnement', text: 'Ajustez l\'arrière-plan, l\'angle de l\'appareil, ajoutez du texte marketing et choisissez la mise en page de la composition.' },
  { name: 'Télécharger en HD', text: 'Exportez tous les résultats au format WebP haute résolution prêts à être uploadés sur la boutique d\'applications.' },
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
  inLanguage: 'fr',
};

const ui: MobileMockupGeneratorUI = {
  labelUpload: 'Télécharger des captures',
  dropHint: 'Glissez vos images ici',
  dropFormats: 'PNG, JPG ou WEBP',
  btnMassReplace: 'Remplacement en masse',
  massReplaceHint: 'Remplace les images actuelles en conservant vos presets et textes. Idéal pour les itérations rapides.',
  labelSettings: 'Paramètres globaux',
  labelDevice: 'Appareil',
  labelFont: 'Typographie',
  labelBackground: 'Fond',
  titleSwapColors: 'Inverser les couleurs',
  labelAngle: 'Angle',
  labelSafeArea: 'Zone de sécurité (haut/bas)',
  labelSafeAreaColor: 'Couleur de zone',
  emptyTitle: 'Aucune image pour l\'instant',
  emptySubtitle: 'Téléchargez vos captures pour commencer à concevoir',
  btnClearAll: 'Effacer le canevas',
  btnExport: 'Tout exporter (.zip)',
  cardTitleDuplicate: 'Dupliquer la scène',
  cardTitleReplace: 'Remplacer la capture actuelle',
  cardSectionLayouts: 'Mises en page maîtres',
  cardSectionBranding: 'Marque & Textes',
  cardTitleResetText: 'Réinitialiser le texte',
  cardLabelColor: 'Couleur',
  cardTextPlaceholder: 'Écrivez votre texte ici...',
  cardSectionDevice: 'Mise en page appareil',
  cardTitleResetDevice: 'Réinitialiser la position',
  cardSectionScene: 'Accessoires & Fond',
  cardBtnSpecialBg: 'Fond spécial',
  cardBtnDeleteScene: 'Supprimer la scène',
  cardRangeLabelSize: 'Taille',
  cardRangeLabelX: 'Axe X',
  cardRangeLabelY: 'Axe Y',
  cardRangeLabelRotation: 'Rotation',
  cardRangeLabelScale: 'Échelle',
  presetClassic: 'Classique',
  presetMobileBottom: 'Mobile bas',
  presetMobileTop: 'Mobile haut',
  presetFocus: 'Focus',
  presetDynamic: 'Dynamique',
  presetSplitLeft: 'Divisé gauche',
  presetSplitRight: 'Divisé droite',
  presetImageLeft: 'Image gauche',
  presetImageRight: 'Image droite',
  confirmClear: 'Êtes-vous sûr de vouloir supprimer tous les mockups ?',
  processingExport: 'Traitement en cours...',
  exportDone: 'Terminé !',
};

export const content: ToolLocaleContent<MobileMockupGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Questions fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références',
  bibliography: [
    { name: 'Apple App Store Screenshot Requirements', url: 'https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications' },
    { name: 'Google Play Screenshot Requirements', url: 'https://support.google.com/googleplay/android-developer/answer/9866151' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Élevez vos captures au niveau supérieur', level: 2 },
    { type: 'paragraph', html: 'Ne vous limitez pas à des captures d\'écran plates. Notre outil de mockups permet aux développeurs et designers de créer des visuels à fort impact sans avoir besoin de Photoshop ou Figma.' },
    { type: 'title', text: 'Puissance avec les mises en page maîtres', level: 3 },
    { type: 'grid', columns: 2 },
    { type: 'card', title: 'App Store et Google Play', html: '<p>Optimisez votre taux de conversion. Les mockups iPhone 15 Pro Max et Pixel 8 sont le standard mondial pour les fiches des boutiques d\'applications.</p>' },
    { type: 'card', title: 'Pitch Decks et Marketing', html: '<p>Présentez vos idées avec autorité. Parfait pour les présentations aux investisseurs, les campagnes sur les réseaux sociaux et les portfolios professionnels de design UI/UX.</p>' },
    { type: 'title', text: 'Flux de travail professionnel', level: 3 },
    { type: 'tip', html: 'Utilisez les presets "Divisé gauche" et "Divisé droite" pour créer des mockups continus qui glissent d\'une image à l\'autre dans les carrousels Instagram ou les captures App Store.' },
  ],
};
