import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SerpPixelSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'simulateur-serp-compteur-pixels';
const title = 'Simulateur SERP et Compteur de Pixels SEO';
const description = 'Prévisualisez des extraits de recherche façon Google en temps réel, mesurez la largeur en pixels du titre et de la meta description, et voyez exactement où votre texte sera tronqué.';

const howTo = [
  {
    name: 'Saisissez la balise title',
    text: 'Tapez ou collez le titre de page que vous souhaitez tester. L\'aperçu SERP et le compteur de pixels se mettent à jour à chaque frappe.',
  },
  {
    name: 'Ajoutez l\'URL visible',
    text: 'Utilisez un domaine et un chemin réalistes pour que l\'extrait ressemble au résultat qu\'un internaute analyserait.',
  },
  {
    name: 'Rédigez la meta description',
    text: 'Ajoutez le texte de la description et surveillez la barre de pixels. Lorsqu\'elle dépasse la largeur visuelle recommandée, l\'aperçu la tronque avec des points de suspension.',
  },
  {
    name: 'Alternez entre bureau et mobile',
    text: 'Comparez le rendu du titre avec la largeur de carte bureau ou mobile avant de publier les métadonnées.',
  },
];

const faq = [
  {
    question: 'Pourquoi compter les pixels plutôt que les caractères pour les titres SEO ?',
    answer: 'Les fiches de résultats Google sont limitées par la largeur visuelle. Un titre composé de nombreuses lettres étroites peut contenir plus de caractères qu\'un titre avec des lettres larges, des majuscules ou des glyphes épais. La mesure en pixels donne un aperçu plus fidèle du résultat visible.',
  },
  {
    question: 'Cela garantit-il exactement la façon dont Google tronquera mon extrait ?',
    answer: 'Non. Google peut réécrire les liens de titre et les extraits, et le rendu peut varier selon la requête, l\'appareil, la langue et les expérimentations. L\'outil est conçu comme un garde-fou visuel pratique pour rédiger des métadonnées moins susceptibles d\'être coupées.',
  },
  {
    question: 'Quelles limites de pixels le simulateur utilise-t-il ?',
    answer: 'La limite par défaut du titre sur bureau est de 580 px, celle du titre sur mobile est de 600 px, et celle de la meta description est de 920 px. Ce sont des objectifs de rédaction, pas des limites officielles de Google.',
  },
  {
    question: 'Pourquoi l\'aperçu ajoute-t-il des points de suspension ?',
    answer: 'Lorsque le texte mesuré dépasse la largeur en pixels disponible, le simulateur tronque la chaîne au dernier caractère qui tient et ajoute trois points, reproduisant le comportement pratique dont les équipes SEO ont besoin pour repérer une perte de sens.',
  },
];

const ui: SerpPixelSimulatorUI = {
  titleLabel: 'Balise title',
  titlePlaceholder: 'GameBob | Studio de Développement Indépendant',
  urlLabel: 'URL visible',
  urlPlaceholder: 'https://www.gamebob.dev/fr/',
  descriptionLabel: 'Meta description',
  descriptionPlaceholder: 'Découvrez notre collection d\'outils et de jeux conçus pour enrichir votre flux de travail numérique et vos loisirs.',
  deviceLabel: 'Mode d\'aperçu',
  desktopLabel: 'Bureau',
  mobileLabel: 'Mobile',
  titlePixelsLabel: 'Largeur du titre',
  descriptionPixelsLabel: 'Largeur de la description',
  charactersLabel: 'caractères',
  previewLabel: 'Aperçu en direct style Google',
  tooLongLabel: 'Trop large',
  goodLabel: 'Correct',
  emptyTitle: 'Votre titre apparaîtra ici',
  emptyDescription: 'L\'aperçu de votre meta description apparaîtra ici au fur et à mesure que vous tapez.',
  defaultTitle: 'GameBob | Studio de Développement Indépendant',
  defaultUrl: 'https://www.gamebob.dev/fr/',
  defaultDescription: 'Découvrez notre collection d\'outils et de jeux conçus pour enrichir votre flux de travail numérique et vos loisirs.',
  fallbackUrl: 'exemple.com',
  fallbackFaviconText: 'G',
  pixelUnit: 'px',
  ellipsis: '...',
  fetchButtonLabel: 'Récupérer',
  fetchLoadingLabel: 'Récupération...',
  fetchSuccessLabel: 'Métadonnées chargées depuis l\'URL.',
  fetchCorsError: 'Le navigateur n\'a pas pu lire cette page. Elle peut être bloquée par CORS, une redirection, du contenu mixte ou une règle réseau. Vous pouvez toujours coller ou modifier les métadonnées manuellement.',
  fetchInvalidUrlError: 'Saisissez une URL valide avant de récupérer les métadonnées.',
  fetchNoMetadataError: 'La page a été récupérée, mais aucun titre ni meta description n\'a été trouvé.',
  fetchGenericError: 'Les métadonnées n\'ont pas pu être récupérées depuis cette URL. Vérifiez l\'adresse ou remplissez les champs manuellement.',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<SerpPixelSimulatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'FAQ du simulateur SERP',
  faq,
  bibliographyTitle: 'Documentation sur les résultats de recherche',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Arrêtez de deviner à quoi ressemblera votre résultat Google',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Une balise title peut sembler parfaite dans un tableur et pourtant échouer dans le résultat de recherche. Google ne réserve pas d\'espace par nombre de caractères ; il rend le texte à l\'intérieur d\'une carte visuelle. Cela signifie que <strong>GameBob | Studio de Développement Indépendant</strong> et un autre titre avec le même nombre de caractères peuvent occuper des largeurs très différentes selon les lettres, les majuscules, la ponctuation et l\'espacement.',
    },
    {
      type: 'tip',
      title: 'La règle qui aide vraiment',
      html: 'Rédigez l\'extrait pour que la promesse importante survive aux points de suspension. Placez le type de page, l\'intention de recherche et la raison la plus forte de cliquer avant la limite de pixels. Les noms de marque sont utiles, mais ils ne doivent pas repousser le bénéfice principal hors de vue.',
    },
    {
      type: 'title',
      text: 'Ce que mesure le compteur de pixels',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Élément', 'Ce qui compte', 'Comment utiliser le résultat'],
      rows: [
        ['Balise title', 'Largeur rendue en pixels, pas le nombre brut de caractères', 'Gardez le mot-clé principal et la promesse de clic visibles avant la troncature.'],
        ['URL visible', 'Confiance visuelle et clarté du sujet', 'Utilisez un chemin lisible qui renforce la destination du résultat.'],
        ['Meta description', 'Une zone d\'extrait plus large avec un comportement dépendant de la requête', 'Placez le bénéfice en premier car Google peut la raccourcir ou la réécrire.'],
        ['Mode appareil', 'Les cartes bureau et mobile peuvent sembler différentes', 'Vérifiez les deux avant de publier les métadonnées des pages importantes.'],
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi les limites de caractères sont une mauvaise habitude SEO',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le conseil traditionnel "gardez les titres sous 60 caractères" est pratique, mais il masque le vrai problème. Les lettres larges comme le W et le M, les mots en majuscules, les séparateurs, les chiffres et les longs noms de marque consomment tous un espace différent. La mesure en pixels rend le compromis visible immédiatement: vous pouvez voir si une phrase mérite sa place ou vole de l\'espace à un message plus fort.',
    },
    {
      type: 'title',
      text: 'Un flux de travail pratique pour de meilleurs extraits',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Commencez par l\'intention :</strong> décrivez ce que l\'utilisateur obtient, pas seulement comment la page s\'appelle.',
        '<strong>Testez le titre complet :</strong> collez-le dans le simulateur et surveillez la barre avant de publier.',
        '<strong>Supprimez les mots faibles :</strong> si la barre devient rouge, retirez le remplissage avant de couper des termes précieux.',
        '<strong>Vérifiez les points de suspension :</strong> si l\'aperçu tronqué perd son sens, réécrivez le titre au lieu d\'accepter la coupure.',
        '<strong>Répétez pour la description :</strong> assurez-vous que la première phrase porte la proposition de valeur à elle seule.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Quand la barre devient rouge',
      html: 'Une barre rouge n\'est pas un avertissement de pénalité. Cela signifie que le texte actuel est plus large que la cible visuelle sélectionnée, donc le simulateur le tronque avec des points. Considérez cela comme un signal éditorial: décidez si les mots cachés sont jetables ou si l\'extrait a besoin d\'une structure plus affûtée.',
    },
    {
      type: 'title',
      text: 'Limites, réécritures et attentes réalistes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Aucun simulateur ne peut garantir l\'extrait exact que Google affichera. Google peut réécrire les liens de titre, mettre en gras les termes de la requête, choisir le texte de la page au lieu de la meta description, ou afficher des extraits différents pour différentes recherches. Cet outil est plus efficace comme étape rapide de rédaction et de contrôle qualité: il détecte les débordements visuels évidents avant que la page n\'arrive en production.',
    },
    {
      type: 'summary',
      title: 'Meilleure utilisation de ce simulateur SERP',
      items: [
        'Utilisez la barre de pixels pour détecter les débordements visuels avant de publier les métadonnées.',
        'Gardez l\'intention de recherche principale et la promesse de clic visibles avant toute ellipse.',
        'Récupérez les métadonnées des URL qui autorisent le CORS, puis modifiez le résultat manuellement si nécessaire.',
        'Considérez l\'aperçu comme un guide de rédaction, car Google peut encore réécrire les extraits selon la requête.',
      ],
    },
  ],
};
