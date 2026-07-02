import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VisualCssGridFlexboxGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'generateur-visuel-css-grid-flexbox';
const title = 'Générateur Visuel de Layout CSS Grid & Flexbox';
const description = 'Concevez des layouts responsives en déplaçant des blocs visuels, en redimensionnant le conteneur, en ajustant l\'alignement et en utilisant des presets  -  puis copiez du CSS natif propre instantanément.';

const howTo = [
  { name: 'Choisissez un preset ou Flexbox / Grid', text: 'Commencez avec un preset de layout (navbar, cards, hero, sidebar, gallery) ou basculez entre Flexbox et Grid manuellement.' },
  { name: 'Redimensionnez le layout', text: 'Redimensionnez le conteneur depuis le coin inférieur pour tester comment le design réagit à l\'espace disponible.' },
  { name: 'Ajustez les contrôles d\'alignement', text: 'Utilisez les sliders et selects pour la direction, le wrap, l\'écart, les colonnes, justify-content, align-items, align-content, la largeur, la hauteur et la taille des éléments.' },
  { name: 'Copiez du CSS prêt pour la production', text: 'Copiez le CSS généré quand le résultat visuel correspond à la structure souhaitée. Sans dépendance de framework.' },
];

const faq = [
  { question: 'Quand utiliser Flexbox plutôt que CSS Grid ?', answer: 'Utilisez Flexbox pour les layouts unidimensionnels  -  barres de navigation, groupes de boutons, cartes enveloppées, contenu centré. Grid quand lignes et colonnes comptent ensemble  -  dashboards, galeries, formulaires, sections structurées.' },
  { question: 'Ce générateur peut-il créer des layouts responsives ?', answer: 'Oui. Le CSS généré utilise le flex wrapping natif ou les colonnes répétées de grid. Redimensionnez le canvas visuel pour tester l\'espacement et l\'alignement à différentes tailles.' },
  { question: 'Pourquoi justify-content et align-items semblent-ils différents en grid et flex ?', answer: 'Flexbox distribue les éléments le long d\'un axe principal et d\'un axe transversal. Grid place d\'abord les éléments dans des tracks, puis aligne le contenu dans ces tracks. Basculer entre les deux modes rend cette différence immédiatement visible.' },
  { question: 'Le CSS généré est-il lié à un framework ?', answer: 'Non. Le résultat est du CSS natif pur. Utilisez-le en HTML simple, Astro, React, Vue, Svelte, Web Components ou tout projet acceptant du CSS standard.' },
  { question: 'À quoi servent les presets de layout ?', answer: 'Les presets accélèrent les layouts courants pour voir des configurations réalistes sans partir de zéro. Chaque preset configure le mode, la direction, le wrap, l\'alignement et la taille du conteneur pour un motif réel.' },
];

const ui: VisualCssGridFlexboxGeneratorUI = {
  modeLabel: 'Mode de layout',
  flexMode: 'Flexbox',
  gridMode: 'Grid',
  canvasLabel: 'Canvas de layout interactif',
  addItem: 'Ajouter élément',
  removeItem: 'Retirer élément',
  resetLayout: 'Réinitialiser',
  gapLabel: 'Écart',
  columnsLabel: 'Colonnes grid',
  widthLabel: 'Largeur conteneur',
  heightLabel: 'Hauteur conteneur',
  justifyLabel: 'Justifier',
  alignLabel: 'Aligner',
  itemSizeLabel: 'Taille élément',
  codeTitle: 'CSS Généré',
  copyCode: 'Copier CSS',
  copied: 'Copié !',
  dragHint: 'Redimensionnez le canvas depuis le coin  -  le CSS se met à jour en direct !',
  outputLabel: 'Sortie CSS générée',
  justifyStart: 'Début',
  justifyCenter: 'Centre',
  justifyEnd: 'Fin',
  justifyBetween: 'Space between',
  justifyAround: 'Space around',
  justifyEvenly: 'Space evenly',
  alignStart: 'Début',
  alignCenter: 'Centre',
  alignEnd: 'Fin',
  alignStretch: 'Étirer',
  alignBaseline: 'Ligne de base',
  itemPrefix: 'Bloc',
  directionLabel: 'Direction',
  directionRow: 'Ligne →',
  directionRowReverse: '← Ligne inv',
  directionColumn: 'Colonne ↓',
  directionColumnReverse: '↑ Col inv',
  wrapLabel: 'Retour',
  wrapNoWrap: 'Sans retour',
  wrapWrap: 'Avec retour',
  wrapWrapReverse: 'Retour inv',
  alignContentLabel: 'Aligner contenu',
  alignContentStart: 'Début',
  alignContentCenter: 'Centre',
  alignContentEnd: 'Fin',
  alignContentBetween: 'Space between',
  alignContentAround: 'Space around',
  alignContentEvenly: 'Space evenly',
  alignContentStretch: 'Étirer',
  presetsLabel: 'Presets',
  presetNavbar: 'Navbar',
  presetCards: 'Cartes',
  presetHero: 'Hero',
  presetSidebar: 'Sidebar',
  presetGallery: 'Galerie',
  shakeLimit: 'Au moins 2 éléments requis !',
  spanHint: 'Double-cliquez sur un élément pour changer sa portée de colonne (1-3) en mode Grid',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<VisualCssGridFlexboxGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'FAQ du générateur de layout CSS',
  faq,
  bibliographyTitle: 'Références CSS Grid et Flexbox',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Créez des layouts CSS en observant le comportement, pas en mémorisant', level: 2 },
    { type: 'paragraph', html: 'CSS Grid et Flexbox sont puissants car ils décrivent des relations de layout au lieu de coordonnées fixes. Le difficile est de prédire comment <strong>gap</strong>, <strong>justify-content</strong>, <strong>align-items</strong>, direction, retour, tracks et espace disponible interagissent. Ce générateur transforme ces propriétés abstraites en un terrain de jeu vivant avec presets et CSS en temps réel.' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: 'Presets de démarrage rapide', icon: 'mdi:view-grid-plus' }, { value: 'Direct', label: 'CSS mis à jour à chaque changement', icon: 'mdi:code-braces' }, { value: '0', label: 'Dépendances framework dans le CSS', icon: 'mdi:language-css3' }] },
    { type: 'title', text: 'Flexbox vs Grid: choisissez le modèle avant de peaufiner l\'alignement', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: 'Flexbox', description: 'Idéal pour les flux unidimensionnels où les éléments s\'alignent en ligne ou colonne et peuvent se retourner.', icon: 'mdi:format-align-justify', highlight: true, points: ['Navigation', 'Groupes de boutons', 'Cartes enveloppées', 'Contenu centré'] }, { title: 'CSS Grid', description: 'Idéal pour les structures bidimensionnelles où lignes et colonnes définissent la composition.', icon: 'mdi:grid', points: ['Dashboards', 'Galeries', 'Formulaires', 'Sections éditoriales'] }] },
    { type: 'title', text: 'Ce que chaque contrôle vous apprend', level: 3 },
    { type: 'table', headers: ['Contrôle', 'Propriété CSS', 'À observer'], rows: [['Direction', '<code>flex-direction</code>', 'Comment l\'axe principal s\'écoule  -  passer de ligne à colonne change toute la logique.'], ['Retour', '<code>flex-wrap</code>', 'Si les éléments restent sur une ligne ou passent à la ligne suivante.'], ['Écart', '<code>gap</code>', 'L\'espace entre éléments sans marges qui cassent aux bords.'], ['Justifier', '<code>justify-content</code>', 'Comment l\'espace libre est distribué le long de l\'axe principal.'], ['Aligner', '<code>align-items</code>', 'Comment les éléments se positionnent sur l\'axe transversal.'], ['Aligner contenu', '<code>align-content</code>', 'Comment les lignes enveloppées ou rangées de grid distribuent l\'espace supplémentaire.'], ['Colonnes', '<code>grid-template-columns</code>', 'Combien de tracks égales le grid crée avant que les éléments passent à une autre ligne.'], ['Taille conteneur', '<code>width</code> et <code>min-height</code>', 'Comment le même CSS réagit quand l\'espace disponible change.']] },
    { type: 'tip', title: 'Redimensionnez d\'abord, optimisez ensuite', html: 'Commencez par redimensionner le canvas à une taille réaliste. Puis ajustez l\'écart et l\'alignement. Ainsi le CSS généré fonctionne dans des conditions réelles.' },
    { type: 'title', text: 'CSS propre que vous pouvez adapter', level: 3 },
    { type: 'code', ariaLabel: 'Exemple de CSS généré', code: '.layout-playground {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 24px;\n  justify-content: center;\n  align-items: center;\n}' },
    { type: 'diagnostic', variant: 'info', title: 'Pourquoi le redimensionnement visuel est important', html: 'Beaucoup de bugs de layout n\'apparaissent que lorsque le conteneur est plus étroit, plus haut ou rempli différemment. Redimensionner pendant que le CSS se met à jour en direct aide à repérer les retours gênants et les choix d\'alignement fragiles.' },
    { type: 'summary', title: 'Workflow recommandé', items: ['Choisissez un preset ou Flexbox pour les flux unidimensionnels et Grid pour la structure bidimensionnelle.', 'Redimensionnez le canvas avant de copier le CSS pour que le layout survive aux contraintes réelles.', 'Utilisez gap pour l\'espacement entre éléments au lieu d\'ajouter des marges à chaque enfant.', 'Copiez le CSS généré comme point de départ, puis ajoutez des sélecteurs spécifiques et des media queries.'] },
  ],
};
