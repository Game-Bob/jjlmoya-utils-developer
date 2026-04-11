import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgToCssUI } from '../ui';

const slug = 'convertisseur-svg-css';
const title = 'Convertisseur SVG vers CSS et Data URI. Optimisation Web';
const description =
  "Transformez vos icônes et vecteurs SVG en code CSS (Background ou Mask) ou Data URI compressé. Optimisez les performances de votre site en éliminant les requêtes HTTP externes.";

const faqData = [
  {
    question: "Vaut-il mieux utiliser un Data URI ou un fichier .svg externe ?",
    answer:
      "Cela dépend de l'usage. Les Data URIs éliminent les requêtes HTTP (idéal pour les petites icônes), mais augmentent la taille du CSS. Pour les illustrations grandes ou riches en détails, un fichier externe est préférable.",
  },
  {
    question: "Comment changer la couleur d'un SVG intégré en CSS ?",
    answer:
      "La meilleure façon est via 'mask-image'. En définissant le SVG comme un masque, vous pouvez utiliser 'background-color' pour changer sa couleur dynamiquement, même dans les états :hover.",
  },
  {
    question: 'Quels navigateurs supportent les masques CSS ?',
    answer:
      'Tous les navigateurs modernes (Chrome, Firefox, Safari, Edge) ont un support complet. Pour les navigateurs plus anciens, les préfixes -webkit- sont couramment utilisés.',
  },
  {
    question: "L'utilisation de Data URIs affecte-t-elle le SEO ?",
    answer:
      "Oui, positivement. En réduisant le nombre de requêtes nécessaires au rendu de la page, cela améliore le temps de chargement (LCP) et les scores Core Web Vitals.",
  },
  {
    question: "Puis-je l'utiliser dans des frameworks comme React ou Tailwind ?",
    answer:
      "Absolument ! Vous pouvez copier le code généré et l'utiliser dans vos fichiers .css ou même comme valeurs arbitraires dans Tailwind CSS.",
  },
];

const howToData = [
  {
    name: 'Coller le SVG',
    text: 'Copiez le code source de votre fichier SVG et collez-le dans la zone de texte à gauche.',
  },
  {
    name: "Choisir le type de sortie",
    text: "Sélectionnez entre Background Image (pour les fonds statiques), CSS Mask (pour les icônes avec couleur dynamique) ou Data URI uniquement (pour utilisation directe).",
  },
  {
    name: 'Copier le résultat',
    text: 'Cliquez sur "Copier" pour transférer le code CSS généré dans votre presse-papiers.',
  },
  {
    name: 'Appliquer dans votre projet',
    text: 'Collez le code dans votre feuille de styles ou composant CSS. Pour les masques, ajoutez également background-color pour définir la couleur de l\'icône.',
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

const ui: SvgToCssUI = {
  labelPasteTitle: 'Coller le SVG',
  labelInputArea: 'Code Source SVG',
  labelPreviewOriginal: 'Aperçu Original',
  labelResultTitle: 'Résultat CSS',
  labelPreviewApplied: 'Résultat Appliqué',
  tabBackground: 'Background Image',
  tabMask: 'CSS Mask / Webkit',
  tabUri: 'Data URI uniquement',
  btnCopy: 'Copier',
  btnCopied: 'Copié !',
  placeholder: '<svg xmlns="http://www.w3.org/2000/svg" ...',
};

export const content: ToolLocaleContent<SvgToCssUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références et Documentation',
  bibliography: [
    {
      name: 'CSS-Tricks: Using SVG as Background',
      url: 'https://css-tricks.com/using-svg/',
    },
    {
      name: 'MDN Web Docs: mask-image',
      url: 'https://developer.mozilla.org/fr/docs/Web/CSS/mask-image',
    },
    {
      name: 'MDN Web Docs: background-image',
      url: 'https://developer.mozilla.org/fr/docs/Web/CSS/background-image',
    },
    {
      name: 'W3C: CSS Masking Module Level 1',
      url: 'https://www.w3.org/TR/css-masking-1/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Pourquoi convertir un SVG en CSS Data URI ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Dans le développement web moderne, optimiser les performances et le chargement des ressources est fondamental. Intégrer des icônes directement dans le CSS via des <strong>Data URIs</strong> élimine les requêtes HTTP inutiles, réduisant la latence et améliorant le Time to Interactive (TTI).",
    },
    {
      type: 'paragraph',
      html: "Cet outil transforme le code vectoriel <code>&lt;svg&gt;</code> en une chaîne de texte encodée que le navigateur peut interpréter comme une image de fond ou un masque de découpe, en conservant la scalabilité infinie et la netteté caractéristique des vecteurs.",
    },
    {
      type: 'title',
      text: 'Principaux Avantages Techniques',
      level: 3,
    },
    {
      type: 'list',
      items: [
        "<strong>Zéro Requête HTTP :</strong> En intégrant le graphique dans vos fichiers <code>.css</code>, le navigateur n'a pas besoin de télécharger de fichiers externes supplémentaires.",
        "<strong>Personnalisation via CSS Mask :</strong> Grâce à la technique <code>mask-image</code>, vous pouvez changer la couleur d'une icône vectorielle complexe simplement en utilisant <code>background-color</code>.",
        "<strong>Rendu Immédiat :</strong> Vous évitez le scintillement de contenu (FOUC) car les ressources visuelles critiques sont disponibles dès que la feuille de styles est téléchargée.",
      ],
    },
    {
      type: 'title',
      text: 'Masques CSS vs Backgrounds',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Beaucoup de développeurs utilisent simplement <code>background-image</code> pour intégrer des vecteurs, mais cela a une limitation : vous ne pouvez pas changer la couleur du SVG dynamiquement depuis le CSS.",
    },
    {
      type: 'paragraph',
      html: "Notre utilitaire supporte la génération de code pour les <strong>Masques CSS</strong>. En appliquant un <code>mask-image</code> avec le Data URI généré, l'icône agit comme un pochoir, permettant au <code>background-color</code> de l'élément de définir la couleur finale de l'icône. C'est la façon la plus professionnelle et flexible de gérer les icônes dans Astro, Next.js ou n'importe quel framework moderne.",
    },
  ],
};
