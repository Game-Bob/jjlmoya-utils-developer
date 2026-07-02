import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssBoxShadowGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'generateur-ombres-css';
const title = 'CSS Box Shadow Generator';
const description = 'Concevez des ombres CSS en couches visuellement avec aperçu en direct, curseurs, sélecteurs de couleur et presets. Copiez du CSS natif propre instantanément.';

const howTo = [
  { name: 'Choisissez un preset ou partez de zéro', text: 'Sélectionnez parmi les presets Card, Float, Inset, Glow ou Layered, ou ajustez l\'ombre par défaut avec les curseurs.' },
  { name: 'Ajoutez et superposez des couches', text: 'Cliquez + pour ajouter des couches (jusqu\'à 5). Sélectionnez chaque couche pour modifier son offset, blur, spread, couleur et opacité.' },
  { name: 'Activez inset et changez l\'arrière-plan', text: 'Cochez inset pour les ombres intérieures. Modifiez la couleur de fond de l\'aperçu.' },
  { name: 'Copiez le CSS', text: 'Quand l\'aperçu correspond à votre design, copiez le CSS généré et collez-le dans votre feuille de style.' },
];

const faq = [
  { question: 'Puis-je utiliser plusieurs ombres sur un élément ?', answer: 'Oui. CSS permet des valeurs box-shadow séparées par des virgules. Cet outil vous permet d\'empiler jusqu\'à 5 couches avec des contrôles indépendants.' },
  { question: 'Que fait une valeur de spread négative ?', answer: 'Un spread négatif rétrécit l\'ombre vers l\'intérieur avant le flou. Utile pour des effets flottants subtils.' },
  { question: 'À quoi sert l\'option inset ?', answer: 'Les ombres inset sont rendues à l\'intérieur de la bordure, créant un effet enfoncé. Idéal pour les champs de formulaire et les cartes pressées.' },
  { question: 'Le CSS généré a-t-il des dépendances de framework ?', answer: 'Non. Le résultat est du CSS natif pur. Utilisez-le dans tout projet avec du CSS standard.' },
];

const ui: CssBoxShadowGeneratorUI = {
  offsetXLabel: 'Offset X',
  offsetYLabel: 'Offset Y',
  blurLabel: 'Flou',
  spreadLabel: 'Expansion',
  opacityLabel: 'Opacité',
  insetLabel: 'Intérieur',
  addLayer: 'Ajouter couche',
  removeLayer: 'Retirer couche',
  resetAll: 'Réinitialiser',
  codeTitle: 'CSS Généré',
  copyCode: 'Copier CSS',
  copied: 'Copié !',
  previewLabel: 'Aperçu',
  presetCard: 'Card',
  presetFloat: 'Float',
  presetInset: 'Inset',
  presetGlow: 'Glow',
  presetLayered: 'Couches',
  presetsLabel: 'Presets',
  layerPrefix: 'Couche',
  bgColorLabel: 'Fond',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<CssBoxShadowGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'FAQ du Générateur d\'Ombres CSS',
  faq,
  bibliographyTitle: 'Références Box Shadow CSS',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Concevez des ombres CSS visuellement au lieu de deviner les valeurs', level: 2 },
    { type: 'paragraph', html: 'Ajuster <strong>box-shadow</strong> à la main est fastidieux. Ce générateur visuel vous permet d\'empiler plusieurs ombres, de les prévisualiser en direct et de copier du CSS prêt pour la production.' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: 'Couches d\'ombre par élément', icon: 'mdi:layers' }, { value: 'Direct', label: 'Aperçu à chaque modification', icon: 'mdi:eye' }, { value: '5', label: 'Presets rapides', icon: 'mdi:star' }] },
    { type: 'title', text: 'Superposez plusieurs ombres pour une profondeur réaliste', level: 3 },
    { type: 'paragraph', html: 'Les ombres réelles sont rarement un flou uniforme. Superposer une ombre serrée près de l\'élément avec une ombre plus douce et large crée une profondeur naturelle. Utilisez <strong>+</strong> pour ajouter des couches.' },
    { type: 'table', headers: ['Contrôle', 'Valeur CSS', 'Effet'], rows: [['Offset X', '1re longueur', 'Déplacement horizontal.'], ['Offset Y', '2e longueur', 'Déplacement vertical.'], ['Flou', '3e longueur', 'Rayon de flou.'], ['Expansion', '4e longueur', 'Agrandit ou réduit l\'ombre.'], ['Couleur & Opacité', 'rgba()', 'Couleur avec opacité indépendante.'], ['Intérieur', 'inset', 'Ombre à l\'intérieur de l\'élément.']] },
    { type: 'summary', title: 'Workflow recommandé', items: ['Commencez par un preset.', 'Ajoutez des couches pour une profondeur réaliste.', 'Utilisez un spread négatif pour un effet de carte flottante.', 'Copiez le CSS généré et collez-le.'] },
  ],
};
