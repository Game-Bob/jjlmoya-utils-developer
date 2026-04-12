import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicalTypographyUI } from '../ui';

const slug = 'typographie-musicale';
const title = 'Échelle de Typographie Musicale. Calculateur d\'Échelle Modulaire';
const description =
  'Outil en ligne gratuit pour créer des hiérarchies visuelles harmonieuses avec des échelles modulaires basées sur des proportions musicales. Génère des variables CSS prêtes à l\'emploi.';

const faqData = [
  {
    question: "Qu'est-ce qu'une échelle modulaire typographique ?",
    answer:
      "C'est une méthode pour déterminer les tailles de police basées sur un ratio mathématique constant. Comme en musique, où les notes ont des relations harmoniques, l'échelle modulaire crée une hiérarchie visuelle équilibrée et prévisible.",
  },
  {
    question: 'Pourquoi utiliser des intervalles musicaux pour le design ?',
    answer:
      "Les intervalles musicaux sont des proportions que le cerveau humain perçoit comme harmonieuses. Les appliquer aux tailles de texte crée une structure visuelle qui semble correcte et professionnelle, plutôt que de choisir des tailles au hasard.",
  },
  {
    question: "Qu'est-ce que le Nombre d'Or en typographie ?",
    answer:
      "C'est la proportion 1,618, connue sous le nom de Section Dorée. Elle crée des échelles très dramatiques et élégantes où chaque étape de la hiérarchie croît de façon exponentielle. Parfaite pour les portfolios ou sites artistiques.",
  },
  {
    question: 'Comment implémenter l\'échelle dans mon fichier CSS ?',
    answer:
      "L'outil génère des variables CSS (tokens) au format :root { --step-N: Xrem; }. Copiez-les dans votre fichier CSS principal et utilisez-les avec var(--step-N) pour maintenir la cohérence typographique sur tout votre site.",
  },
];

const howToData = [
  {
    name: 'Définir la taille de base',
    text: "Entrez la taille de police pour votre corps de texte (généralement 16px) qui servira de note fondamentale de votre échelle.",
  },
  {
    name: "Choisir l'intervalle",
    text: "Sélectionnez une proportion musicale pour déterminer l'espace entre les différents niveaux de titres.",
  },
  {
    name: 'Prévisualiser la hiérarchie',
    text: "Observez comment les niveaux typographiques se comportent en temps réel pour vérifier que l'harmonie visuelle convient à votre projet.",
  },
  {
    name: 'Exporter le code',
    text: "Cliquez sur Copier variables CSS pour obtenir le bloc prêt à coller directement dans votre flux de travail.",
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
  applicationCategory: 'DesignApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'fr',
};

const ui: MusicalTypographyUI = {
  labelConfig: 'Configuration',
  labelBaseSize: 'Taille de base (px)',
  hintBaseSize: 'La taille de votre texte de paragraphe (généralement 16px).',
  labelRatio: 'Échelle musicale (Ratio)',
  hintRatio: "Détermine combien la taille augmente à chaque étape.",
  labelCalculated: 'Valeurs calculées',
  labelPreview: 'Aperçu',
  btnCopyCss: 'Copier variables CSS',
  feedbackCopied: 'Variables copiées dans le presse-papiers !',
  previewText: 'Typographie Musicale',
  previewSubtext: 'Une échelle harmonique parfaite pour votre design.',
  ratioSecundaMenor: 'Seconde Mineure',
  ratioSegundaMayor: 'Seconde Majeure',
  ratioTerceraMenor: 'Tierce Mineure',
  ratioTerceraMayor: 'Tierce Majeure',
  ratioCuartaPerfecta: 'Quarte Juste',
  ratioCuartaAumentada: 'Quarte Augmentée',
  ratioQuintaPerfecta: 'Quinte Juste',
  ratioProporcionAurea: 'Section Dorée',
  ratioSextaMayor: 'Sixte Majeure',
  ratioSeptimaMenor: 'Septième Mineure',
  ratioSeptimaMayor: 'Septième Majeure',
  ratioOctava: 'Octave',
};

export const content: ToolLocaleContent<MusicalTypographyUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Questions fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références',
  bibliography: [
    {
      name: 'Bringhurst, R. The Elements of Typographic Style',
      url: 'https://en.wikipedia.org/wiki/The_Elements_of_Typographic_Style',
    },
    {
      name: 'Brown, T. More Meaningful Typography. A List Apart',
      url: 'https://alistapart.com/article/more-meaningful-typography/',
    },
    {
      name: 'Physics of Music. Musical Intervals and Scales',
      url: 'https://es.scribd.com/document/199729396/Physics-of-Music-Notes',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: "L'harmonie invisible du design web",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "L'<strong>Échelle de Typographie Musicale</strong> applique les mathématiques des intervalles musicaux au design typographique. Tout comme une composition musicale est régie par des proportions précises, un design visuel solide bénéficie d'une structure mathématique qui relie toutes les tailles entre elles.",
    },
    {
      type: 'title',
      text: "Comment fonctionne l'échelle modulaire",
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'La formule',
      html: '<p>La progression est simple : <code>Taille = Base × Ratio<sup>n</sup></code>. L\'étape 0 est votre texte de base. L\'étape 1 est un petit sous-titre. L\'étape 4 ou 5 pourrait être votre H1 principal. La même constante multiplicative garantit que toutes les relations sont cohérentes.</p>',
    },
    {
      type: 'card',
      title: 'Pourquoi "Musical"',
      html: "<p>Les Pythagoriciens ont découvert que diviser une corde en proportions simples (1:2, 2:3, 3:4) produisait des sons consonants. Ces intervalles, octave, quinte juste et quarte juste, sont exactement les ratios typographiques. Vous composez de la musique visuelle.</p>",
    },
    {
      type: 'title',
      text: 'Choisir le bon ratio',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Pour les interfaces denses (tableaux de bord, tableaux), utilisez de petits ratios comme <code>1,125</code> ou <code>1,2</code>. Pour les sites éditoriaux ou portfolios, utilisez des ratios plus expressifs comme <code>1,5</code> ou <code>1,618</code>.',
    },
    {
      type: 'paragraph',
      html: "Ne limitez pas l'échelle au seul <code>font-size</code>. Les mêmes variables CSS fonctionnent pour <code>margin</code>, <code>padding</code> et <code>gap</code>. Quand les espaces blancs suivent la même progression mathématique que le texte, le design atteint un niveau de cohésion que tout le monde ressent mais que peu peuvent expliquer.",
    },
  ],
};
