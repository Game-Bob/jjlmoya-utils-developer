import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReadabilityCalculatorUI } from '../ui';

const slug = 'calculateur-lisibilite-visuelle-wcag-apca';
const title = 'Calculateur de Lisibilit\u00e9 Visuelle WCAG et APCA';
const description = 'V\u00e9rifiez le contraste r\u00e9el de vos designs avec APCA (WCAG 3.0). Analysez l\'influence de la graisse et de la taille de la police sur la lisibilit\u00e9 perceptuelle.';

const faqData = [
  {
    question: 'Qu\'est-ce qu\'APCA et pourquoi est-il diff\u00e9rent de WCAG 2.1?',
    answer: 'APCA est l\'Algorithme de Contraste Perceptuel Avanc\u00e9 d\u00e9velopp\u00e9 pour WCAG 3.0. Contrairement \u00e0 l\'ancien ratio simple, APCA utilise des mod\u00e8les math\u00e9matiques imitant la perception humaine du contraste, en tenant compte de la polarit\u00e9 et de la taille/graisse des polices.',
  },
  {
    question: 'Que signifie la valeur Lc?',
    answer: 'Lc (Lightness Contrast) est la valeur de contraste g\u00e9n\u00e9r\u00e9e par APCA. Une valeur de 100 repr\u00e9sente un contraste maximum id\u00e9al, tandis que des valeurs inf\u00e9rieures \u00e0 60 deviennent critiques pour les textes de lecture continue.',
  },
  {
    question: 'Comment la graisse de la police influence-t-elle la lisibilit\u00e9?',
    answer: 'Les polices fines (Thin/Light) n\u00e9cessitent un contraste bien plus \u00e9lev\u00e9 pour \u00eatre lisibles. APCA p\u00e9nalise les polices de faible poids, indiquant qu\'un design validant WCAG avec une police de graisse 100 peut \u00eatre illisible en pratique.',
  },
  {
    question: 'Ce calculateur est-il priv\u00e9?',
    answer: 'Oui, tous les calculs sont effectu\u00e9s localement dans votre navigateur. Les couleurs et configurations analys\u00e9es ne sont jamais envoy\u00e9es \u00e0 un serveur, garantissant une confidentialit\u00e9 totale.',
  },
];

const howToData = [
  { name: 'Choisir les Couleurs', text: 'Utilisez les s\u00e9lecteurs de couleur pour d\u00e9finir la couleur du texte et la couleur de fond de votre design.' },
  { name: 'Ajuster la Typographie', text: 'D\u00e9placez les curseurs de taille et de graisse pour simuler votre typographie r\u00e9elle.' },
  { name: 'Lire les R\u00e9sultats', text: 'Consultez le ratio WCAG 2.1 et la valeur Lc APCA pour savoir si votre design est accessible.' },
  { name: 'Voir les Recommandations', text: 'V\u00e9rifiez les recommandations APCA sp\u00e9cifiques pour le texte de lecture, le texte petit et les \u00e9l\u00e9ments UI.' },
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
  step: howToData.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
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

const ui: ReadabilityCalculatorUI = {
  labelColors: 'Couleurs de Base',
  labelText: 'Texte',
  labelBg: 'Fond',
  labelTypo: 'Typographie',
  labelFontSize: 'Taille de Police',
  labelFontWeight: 'Graisse (Weight)',
  labelCompare: 'Comparaison de Contraste',
  labelPreview: 'Aper\u00e7u Perceptuel',
  labelApcaRecs: 'Recommandations APCA',
  labelBody: 'Texte de Lecture (Body)',
  labelSmall: 'Texte Petit / Caption',
  labelUi: 'UI / Boutons',
  statusYes: 'Oui',
  statusNo: 'Non',
  wcagAAA: 'Passe AAA',
  wcagAA: 'Passe AA',
  wcagLarge: 'Grands Textes Seulement',
  wcagFail: '\u00c9choue',
  apcaExcellent: 'Excellent',
  apcaGood: 'Bon',
  apcaMinimal: 'Minimal',
  apcaPoor: 'Faible',
  previewText: 'La lisibilit\u00e9 visuelle n\'est pas seulement des math\u00e9matiques. C\'est comment lumi\u00e8re et ombre interagissent avec vos yeux.',
  wcagRatioLabel: 'Ratio WCAG 2.1',
  apcaLcLabel: 'APCA Lc (WCAG 3)',
};

export const content: ToolLocaleContent<ReadabilityCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Questions Fr\u00e9quentes',
  faq: faqData,
  bibliographyTitle: 'Ressources sur le Contraste et APCA',
  bibliography: [
    { name: 'W3C: Brouillon WCAG 3.0 (Silver)', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/' },
    { name: 'Myndex: Guide de R\u00e9f\u00e9rence APCA', url: 'https://apcaw3.myndex.com/' },
    { name: 'MDN: Accessibilit\u00e9 et Contraste des Couleurs', url: 'https://developer.mozilla.org/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Calculateur de Lisibilit\u00e9 Visuelle (WCAG vs APCA)', level: 2 },
    {
      type: 'paragraph',
      html: 'Comprenez comment vos couleurs et typographie affectent la lecture r\u00e9elle avec le nouveau standard d\'accessibilit\u00e9 perceptuelle. WCAG 2.1 utilise une formule math\u00e9matique simple de 2008. <strong>APCA</strong> est le nouveau mod\u00e8le propos\u00e9 pour <strong>WCAG 3.0</strong> qui imite la perception humaine.',
    },
    { type: 'title', text: 'Points Cl\u00e9s d\'APCA', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Polarit\u00e9:</strong> Comprend que le mode sombre (Dark Mode) est per\u00e7u diff\u00e9remment du mode clair.',
        '<strong>Graisse de Police:</strong> Attribue des niveaux de contraste (Lc) sp\u00e9cifiques selon le poids typographique.',
        '<strong>Lin\u00e9arit\u00e9:</strong> Corrige les impr\u00e9cisions math\u00e9matiques du mod\u00e8le de luminance relative de 2008.',
      ],
    },
    { type: 'title', text: 'Niveaux APCA Recommand\u00e9s', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Lc 90+:</strong> Id\u00e9al pour les textes tr\u00e8s petits ou de faible graisse.',
        '<strong>Lc 75:</strong> Le standard pour le texte de lecture principal (Body).',
        '<strong>Lc 60:</strong> Minimum pour un contenu lisible de taille moyenne.',
        '<strong>Lc 45:</strong> Minimum pour les \u00e9l\u00e9ments larges ou d\u00e9coratifs.',
      ],
    },
  ],
};
