import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ColorConverterUI } from '../ui';

const slug = 'convertisseur-couleur-rgb-hex-hsl';
const title = 'Convertisseur de Couleur RGB HEX et HSL';
const description = 'Convertissez des couleurs entre RGB, HEX et HSL instantan\u00e9ment. G\u00e9n\u00e9rez des harmonies de couleurs et analysez le contraste WCAG. 100% client-side et priv\u00e9.';

const faqData = [
  {
    question: 'Comment fonctionne le convertisseur de couleurs RGB en HEX et HSL?',
    answer: 'L\'outil prend les valeurs Rouge, Vert et Bleu (RGB) et utilise des algorithmes math\u00e9matiques pour les convertir en leur \u00e9quivalent hexad\u00e9cimal (HEX) ou en valeurs de teinte, saturation et luminosit\u00e9 (HSL). Cela fonctionne aussi en sens inverse.',
  },
  {
    question: 'Pourquoi utiliser HSL plut\u00f4t que HEX dans mes designs?',
    answer: 'Le format HSL est beaucoup plus intuitif. Il permet de modifier la saturation ou la luminosit\u00e9 sans changer la teinte, facilitant la cr\u00e9ation de palettes harmonieuses et d\u2019\u00e9tats de boutons (hover, disabled).',
  },
  {
    question: 'Qu\'est-ce que la valeur de contraste relatif?',
    answer: 'C\'est une m\u00e9trique indiquant la lisibilit\u00e9 d\'un texte sur un fond bas\u00e9e sur sa luminance. Un contraste \u00e9lev\u00e9 assure que les personnes malvoyantes peuvent lire le contenu, conform\u00e9ment aux directives WCAG.',
  },
  {
    question: 'Est-il s\u00fbr d\'utiliser ce convertisseur de couleur en ligne?',
    answer: 'Absolument. \u00c9tant 100% client-side, vos donn\u00e9es de couleur ne quittent jamais votre ordinateur. Tout le traitement se fait directement dans votre navigateur, garantissant confidentialit\u00e9 et rapidit\u00e9 instantan\u00e9e.',
  },
];

const howToData = [
  { name: 'S\u00e9lectionner une Couleur', text: 'Utilisez les curseurs Rouge, Vert et Bleu ou saisissez directement un code HEX dans le champ de texte.' },
  { name: 'Ajuster les Canaux RGB', text: 'D\u00e9placez les curseurs pour modifier l\'intensit\u00e9 de chaque canal et voir la mise \u00e0 jour en temps r\u00e9el.' },
  { name: 'Copier le Format', text: 'Cliquez sur le bouton Copier \u00e0 c\u00f4t\u00e9 du format HEX, RGB ou HSL dont vous avez besoin.' },
  { name: 'Explorer les Harmonies', text: 'Cliquez sur les couleurs d\'harmonie (compl\u00e9mentaire, analogues, triade) pour les copier dans le presse-papiers.' },
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

const ui: ColorConverterUI = {
  labelPreview: 'Aper\u00e7u (clic pour copier HEX)',
  labelHarmonies: 'Harmonies de Couleur',
  labelR: 'Rouge',
  labelG: 'Vert',
  labelB: 'Bleu',
  labelComp: 'Comp.',
  labelAna1: 'Analogue 1',
  labelAna2: 'Analogue 2',
  labelTri1: 'Triade 1',
  labelTri2: 'Triade 2',
  btnCopy: 'Copier',
  btnCopied: 'Copi\u00e9',
  contrastLabel: 'Contraste',
  clickToCopy: 'Cliquer pour copier',
};

export const content: ToolLocaleContent<ColorConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Questions Fr\u00e9quentes',
  faq: faqData,
  bibliographyTitle: 'Ressources sur les Couleurs et le Design Web',
  bibliography: [
    { name: 'W3C: Documentation des Couleurs CSS', url: 'https://www.w3.org/TR/css-color-4/' },
    { name: 'MDN: Guide du Mod\u00e8le de Couleur HSL', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl' },
    { name: 'WebAIM: Guide de Contraste et Accessibilit\u00e9', url: 'https://webaim.org/resources/contrastchecker/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Convertisseur de Couleur RGB en HEX et HSL pour D\u00e9veloppeurs', level: 2 },
    {
      type: 'paragraph',
      html: 'Dans le monde du <strong>d\u00e9veloppement frontend</strong> et du <strong>design UI/UX</strong>, la gestion des couleurs est une t\u00e2che constante. Notre <strong>convertisseur de couleur en ligne</strong> vous permet de transformer des valeurs entre <strong>HEX, RGB et HSL</strong> instantan\u00e9ment.',
    },
    { type: 'title', text: 'Formats de Couleur: HEX, RGB et HSL', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>HEX (Hexad\u00e9cimal):</strong> Le standard de facto pour CSS. Compact et facile \u00e0 partager dans le code.',
        '<strong>RGB (Rouge, Vert, Bleu):</strong> Bas\u00e9 sur le syst\u00e8me additif de lumi\u00e8re. Id\u00e9al pour manipuler les canaux directement ou appliquer la transparence avec RGBA.',
        '<strong>HSL (Teinte, Saturation, Luminosit\u00e9):</strong> Le format le plus intuitif pour cr\u00e9er des palettes harmonieuses.',
      ],
    },
    { type: 'title', text: 'Contraste et Accessibilit\u00e9 WCAG', level: 3 },
    {
      type: 'paragraph',
      html: 'La calculatrice inclut une mesure de <strong>contraste relatif</strong> bas\u00e9e sur la luminance. Cela vous aide \u00e0 respecter les directives <strong>WCAG</strong>, assurant que vos textes sont lisibles sur les fonds s\u00e9lectionn\u00e9s.',
    },
    { type: 'title', text: 'Harmonies de Couleur Automatiques', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Compl\u00e9mentaire:</strong> La couleur oppos\u00e9e sur la roue chromatique, id\u00e9ale pour un contraste maximum.',
        '<strong>Analogues:</strong> Couleurs adjacentes qui cr\u00e9ent des transitions douces et harmonieuses.',
        '<strong>Triade:</strong> Trois couleurs \u00e9quidistantes pour des compositions vibrantes et \u00e9quilibr\u00e9es.',
      ],
    },
  ],
};
