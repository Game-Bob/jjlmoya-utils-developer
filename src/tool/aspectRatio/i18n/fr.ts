import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AspectRatioUI } from '../ui';

const slug = 'calculateur-ratio-format';
const title = 'Calculateur de Ratio de Format en Pixels. Proportions en Ligne';
const description =
  "Calculez de nouvelles résolutions d'image, de vidéo et de web design en conservant la proportion exacte pour ne pas déformer les graphiques. Prend en charge les formats 16:9, 4:3, 21:9 et personnalisés.";

const faqData = [
  {
    question: "Qu'est-ce que le Ratio de Format (Aspect Ratio) ?",
    answer:
      "Le Ratio de Format décrit la relation géométrique entre la largeur et la hauteur d'une image ou d'un écran. Il est représenté par deux chiffres séparés par deux points (ex. 16:9), indiquant comment la hauteur varie proportionnellement par rapport à la largeur.",
  },
  {
    question: "Pourquoi est-il important de maintenir les bonnes proportions ?",
    answer:
      "Ignorer le Ratio de Format provoque des images écrasées ou étirées, un letterboxing inattendu dans les vidéos et des composants web qui cassent leur mise en page à différentes tailles d'écran. Maintenir les bonnes proportions est essentiel pour un affichage professionnel.",
  },
  {
    question: "Comment calculer la hauteur à partir de la largeur avec un ratio donné ?",
    answer:
      "La formule est : Hauteur = Largeur × (Ratio Hauteur / Ratio Largeur). Par exemple, pour une largeur de 1280px avec un ratio 16:9, la hauteur serait : 1280 × (9/16) = 720px.",
  },
  {
    question: "Quel est le Ratio de Format standard pour les vidéos YouTube ?",
    answer:
      "16:9 est le ratio standard pour YouTube et la plupart des plateformes vidéo modernes. Il correspond à des résolutions telles que 1280×720 (HD), 1920×1080 (Full HD) ou 3840×2160 (4K UHD).",
  },
  {
    question: "Quel Ratio de Format utilisent les vidéos verticales des réseaux sociaux ?",
    answer:
      "9:16, qui est exactement l'inverse du format panoramique. C'est le ratio natif de TikTok, Instagram Reels et YouTube Shorts, né de la consommation de contenu sur téléphone en orientation verticale.",
  },
];

const howToData = [
  {
    name: "Saisir le ratio original",
    text: "Entrez les valeurs de largeur et de hauteur du ratio que vous souhaitez conserver (ex. 16 et 9 pour le format panoramique) ou sélectionnez l'un des préréglages.",
  },
  {
    name: "Ajuster l'échelle",
    text: 'Modifiez la valeur de la largeur ou de la hauteur dans la section "Échelle Réelle". L\'outil calculera automatiquement la valeur opposée pour maintenir la proportion.',
  },
  {
    name: "Vérifier l'aperçu",
    text: "Le panneau d'aperçu affiche la forme résultante à échelle proportionnelle, avec le ratio simplifié et la résolution calculée.",
  },
  {
    name: "Appliquer dans votre projet",
    text: "Copiez les valeurs calculées pour les utiliser dans votre CSS (aspect-ratio: 16 / 9), dans l'export vidéo ou dans les paramètres de votre outil de design.",
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

const ui: AspectRatioUI = {
  labelConfig: 'Configuration',
  labelRatio: 'Ratio Original',
  labelWidth: 'Largeur',
  labelHeight: 'Hauteur',
  labelScale: 'Échelle Réelle',
  labelPixelWidth: 'Pixels (Largeur)',
  labelPixelHeight: 'Pixels (Hauteur)',
  labelPreview: 'Aperçu Proportionnel',
  labelStatus: 'Proportion Parfaite',
  labelOffline: '100% Outil Hors Ligne',
};

export const content: ToolLocaleContent<AspectRatioUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références et Documentation',
  bibliography: [
    {
      name: 'MDN Web Docs: aspect-ratio (CSS)',
      url: 'https://developer.mozilla.org/fr/docs/Web/CSS/aspect-ratio',
    },
    {
      name: 'Wikipedia: Format d\'image',
      url: 'https://fr.wikipedia.org/wiki/Format_d%27image',
    },
    {
      name: 'W3C: CSS Box Sizing Level 4',
      url: 'https://www.w3.org/TR/css-sizing-4/#aspect-ratio',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: "Qu'est-ce que le Ratio de Format (Aspect Ratio) ?",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "En design graphique, photographie et développement frontend, l'<strong>Aspect Ratio</strong> ou ratio de format décrit la relation géométrique entre la largeur et la hauteur d'une image, d'un écran ou d'un conteneur. Il est représenté par deux chiffres séparés par deux points (ex. <code>16:9</code>), indiquant comment la hauteur augmente proportionnellement en fonction de la largeur.",
    },
    {
      type: 'paragraph',
      html: "Mal gérer les ratios de format est une cause habituelle de photographies écrasées, de vidéos avec des recadrages imprévus (letterboxing) ou de composants web qui cassent leur mise en page lors de l'affichage sur des écrans de différentes tailles.",
    },
    {
      type: 'title',
      text: 'Ratios Courants dans l\'Industrie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Selon votre discipline, vous devrez constamment gérer un nombre limité de proportions standard mondiales :',
    },
    {
      type: 'list',
      items: [
        '<strong>16:9 (Panoramique) :</strong> Le format dominant pour les moniteurs modernes, téléviseurs, enregistrements YouTube ou résolutions haute définition standard (comme 1920×1080 ou 4K).',
        '<strong>9:16 (Vertical) :</strong> Né de la consommation de contenu mobile natif (TikTok, Instagram Reels, YouTube Shorts). Exactement le même ratio que les vidéos panoramiques, mais avec la rotation physique du dispositif appliquée.',
        '<strong>4:3 (Classique / Vintage) :</strong> Présent dans les anciennes télévisions et moniteurs ou dans les appareils photo argentiques et numériques spécialisés. Son apparence légèrement carrée attire directement l\'attention sur l\'axe central compositionnel.',
      ],
    },
    {
      type: 'title',
      text: 'Développement Web et la propriété CSS aspect-ratio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Autrefois en CSS, on dépendait de systèmes mathématiques complexes utilisant un <strong>Padding Hack</strong> (comme injecter un <code>padding-top: 56.25%</code>) pour réserver des espaces dynamiques dans les iframes YouTube ou les images de couverture, afin d'éviter un terrible Cumulative Layout Shift (CLS).",
    },
    {
      type: 'paragraph',
      html: "Aujourd'hui, toutes les mises en page modernes appliquent directement des propriétés comme <code>aspect-ratio: 16 / 9;</code>, obtenant un code sémantique et permettant au navigateur de dériver automatiquement la mesure manquante à partir de la largeur originale définie via Grid ou Flexbox.",
    },
    {
      type: 'paragraph',
      html: "Ce calculateur local de pixels transfère la puissance de design à un calcul de mise à l'échelle instantané qui protégera vos rendus des mauvaises configurations.",
    },
  ],
};
