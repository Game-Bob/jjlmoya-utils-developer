import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssSpecificityCalculatorUI } from '../ui';

const slug = 'calculateur-specificite-css';
const title = 'Calculateur de Spécificité CSS en Ligne. Visualiseur de Poids';
const description =
  'Calculez la spécificité et le poids exact de n\'importe quel sélecteur CSS. Outil visuel pour comprendre quelle règle CSS gagne la cascade et éviter l\'utilisation de !important.';

const faqData = [
  {
    question: 'Qu\'est-ce que la spécificité CSS ?',
    answer:
      'La spécificité est l\'algorithme que les navigateurs utilisent pour décider quelle règle CSS s\'applique à un élément quand plusieurs règles sont en compétition. Elle est représentée par un score à trois colonnes (A, B, C) indiquant les IDs, les classes/attributs/pseudo-classes et les éléments/pseudo-éléments.',
  },
  {
    question: 'Une classe peut-elle jamais battre un ID en spécificité ?',
    answer:
      'Pas directement. Un ID (1,0,0) bat toujours n\'importe quel nombre de classes (0,N,0) car la spécificité n\'a pas de retenue entre les colonnes. Cent classes (0,100,0) ne battront jamais un seul ID (1,0,0).',
  },
  {
    question: 'Que se passe-t-il quand deux sélecteurs ont la même spécificité ?',
    answer:
      'Quand deux sélecteurs ont exactement le même poids, celui déclaré en dernier dans le fichier CSS gagne. C\'est ce qu\'on appelle l\'ordre naturel de la cascade. Cette calculatrice vous avertit visuellement quand une égalité se produit.',
  },
  {
    question: 'Pourquoi l\'utilisation de !important est-elle considérée comme mauvaise pratique ?',
    answer:
      'La directive !important brise la cascade CSS naturelle en forçant une déclaration sur toute autre règle. Cela crée des conflits difficiles à déboguer dans les grands projets. Des méthodologies comme BEM préconisent de garder une spécificité plate pour éviter d\'avoir besoin de !important.',
  },
];

const howToData = [
  {
    name: 'Saisissez le premier sélecteur',
    text: 'Tapez le Sélecteur A dans le champ texte de gauche, par exemple : #header .nav-item > a. Les compteurs d\'IDs, Classes et Éléments se mettront à jour instantanément.',
  },
  {
    name: 'Saisissez le deuxième sélecteur',
    text: 'Tapez le Sélecteur B dans le champ texte de droite, par exemple : ul li.active a:hover. Observez comment les poids changent en temps réel.',
  },
  {
    name: 'Lisez le résultat',
    text: 'La calculatrice mettra en évidence le bloc du sélecteur gagnant avec une bannière verte. En cas d\'égalité, un message apparaîtra expliquant l\'ordre de cascade comme critère de départage.',
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
  inLanguage: 'fr',
};

const ui: CssSpecificityCalculatorUI = {
  labelA: 'Sélecteur A',
  labelB: 'Sélecteur B',
  placeholderA: 'ex. #header .nav-item > a',
  placeholderB: 'ex. ul li.active a:hover',
  cardIds: 'IDs',
  cardClasses: 'Classes / Pseudos',
  cardElements: 'Éléments',
  bannerWinner: 'Ce sélecteur gagne !',
  msgTie: 'Les deux sélecteurs ont le même poids. S\'ils sont en compétition pour le même élément, celui écrit en <strong>dernier</strong> dans le CSS gagne.',
};

export const content: ToolLocaleContent<CssSpecificityCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références et Documentation',
  bibliography: [
    {
      name: 'MDN Web Docs: Spécificité CSS',
      url: 'https://developer.mozilla.org/fr/docs/Web/CSS/Specificity',
    },
    {
      name: 'W3C: Selectors Level 3 - Spécificité',
      url: 'https://www.w3.org/TR/selectors-3/#specificity',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Qu\'est-ce que la Spécificité CSS ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La spécificité CSS est l\'algorithme par lequel les navigateurs décident quelles valeurs de propriétés appliquer à un élément particulier. C\'est essentiellement un score mathématique qui indique au navigateur "à quel point" une règle est spécifique.',
    },
    {
      type: 'paragraph',
      html: 'Si deux règles ont des niveaux de spécificité différents, celle avec le poids le plus élevé gagnera, quel que soit l\'ordre dans lequel elles ont été écrites. Si les deux ont le même poids, la dernière déclarée dans le code source gagne.',
    },
    {
      type: 'title',
      text: 'Comment calculer la Spécificité CSS',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La spécificité est calculée sur trois catégories formant un poids à trois colonnes, exprimé comme <strong>(A, B, C)</strong> :',
    },
    {
      type: 'list',
      items: [
        '<strong>Colonne A (IDs) :</strong> Compte le nombre d\'identifiants uniques. Exemple : <code>#header</code> compte comme 1 dans la colonne A.',
        '<strong>Colonne B (Classes, Attributs et Pseudo-classes) :</strong> Compte toutes les classes (<code>.button</code>), attributs (<code>[type="text"]</code>) et pseudo-classes (<code>:hover</code>).',
        '<strong>Colonne C (Éléments et Pseudo-éléments) :</strong> Compte tous les éléments HTML (<code>div</code>, <code>h1</code>) et pseudo-éléments (<code>::before</code>).',
      ],
    },
    {
      type: 'title',
      text: 'La règle d\'or: pas de report numérique',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Une règle avec la spécificité (0,50,0) ne sera <strong>jamais</strong> plus spécifique qu\'une règle (1,0,0). <strong>Un seul ID bat infiniment de classes.</strong> Les colonnes ne se déversent jamais les unes dans les autres.',
    },
    {
      type: 'title',
      text: 'Le problème de !important et l\'architecture BEM',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La directive <code>!important</code> est une exception aux règles de spécificité. Quand elle est utilisée, cette déclaration écrase automatiquement toute autre. Elle est considérée comme une mauvaise pratique car elle détruit la cascade naturelle.',
    },
    {
      type: 'paragraph',
      html: 'Pour éviter les guerres de spécificité dans les grands projets, des méthodologies comme <strong>BEM</strong> préconisent d\'utiliser uniquement des sélecteurs de classe à un seul niveau de profondeur, maintenant artificiellement la spécificité plate à (0,1,0).',
    },
  ],
};
