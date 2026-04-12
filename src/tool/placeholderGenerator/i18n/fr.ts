import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PlaceholderGeneratorUI } from '../ui';

const slug = 'generateur-images-placeholder';
const title = "Générateur d'Images Placeholder. Maquettes Web Rapides en Ligne";
const description =
  "Créez des images de remplissage personnalisées pour vos designs web. Ajustez la résolution, le fond, le texte et exportez en PNG, WebP ou JPEG en quelques millisecondes.";

const faqData = [
  {
    question: "Qu'est-ce qu'une image placeholder ?",
    answer:
      "Une image placeholder ou de remplissage est un graphique temporaire utilisé en design web et en maquettage pour réserver l'espace où ira une image définitive. Elles aident à visualiser la structure d'une page avant d'avoir le contenu final.",
  },
  {
    question: "Puis-je utiliser n'importe quelle résolution dans le générateur ?",
    answer:
      "Oui, vous pouvez saisir n'importe quelle valeur numérique pour la largeur et la hauteur. Le générateur créera un canevas avec les dimensions exactes demandées, parfait pour des grilles strictes ou des bannières publicitaires spécifiques.",
  },
  {
    question: 'Dans quel format les images sont-elles téléchargées ?',
    answer:
      "Par défaut, les images sont générées en WebP pour une compression optimale, mais vous pouvez choisir de les télécharger en format PNG pour conserver la qualité maximale sans perte, ou JPEG pour la compatibilité traditionnelle.",
  },
  {
    question: 'Est-ce traité sur un serveur ?',
    answer:
      "Non, tout le rendu de l'image est généré instantanément dans la mémoire virtuelle (Canvas) de votre propre navigateur. C'est instantané et ne nécessite pas l'envoi de données sur le réseau.",
  },
];

const howToData = [
  {
    name: 'Définir les dimensions',
    text: "Saisissez les valeurs de largeur et de hauteur directement ou cliquez sur l'un des presets (FHD, HD, Instagram, etc.) pour les remplir automatiquement.",
  },
  {
    name: 'Configurer les couleurs et le texte',
    text: 'Choisissez la couleur de fond et de texte en utilisant les sélecteurs natifs ou en tapant un code hexadécimal. Optionnellement, ajoutez du texte personnalisé pour remplacer le label de dimensions par défaut.',
  },
  {
    name: 'Sélectionner la typographie et le format',
    text: 'Choisissez la famille typographique et la taille de police. Sélectionnez le format de sortie (WebP, PNG ou JPEG) selon vos besoins.',
  },
  {
    name: "Télécharger l'image",
    text: "Cliquez sur le bouton Télécharger pour sauvegarder le placeholder généré directement sur votre appareil.",
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

const ui: PlaceholderGeneratorUI = {
  labelDimensions: 'Dimensions Rapides',
  labelWidth: 'Largeur (px)',
  labelHeight: 'Hauteur (px)',
  labelBgColor: 'Fond',
  labelTextColor: 'Texte',
  labelCustomText: 'Texte Personnalisé (Optionnel)',
  placeholderCustomText: 'Ex: Bannière Hero',
  labelFontFamily: 'Typographie',
  labelFontSize: 'Taille de Base',
  fontSizeAuto: 'Automatique',
  labelFormat: 'Format de Sortie',
  btnDownload: "Télécharger l'Image",
};

export const content: ToolLocaleContent<PlaceholderGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références et Documentation',
  bibliography: [
    {
      name: 'MDN Web Docs: HTMLCanvasElement.toDataURL()',
      url: 'https://developer.mozilla.org/fr/docs/Web/API/HTMLCanvasElement/toDataURL',
    },
    {
      name: 'MDN Web Docs: CanvasRenderingContext2D',
      url: 'https://developer.mozilla.org/fr/docs/Web/API/CanvasRenderingContext2D',
    },
    {
      name: 'W3C: HTML Canvas 2D Context',
      url: 'https://www.w3.org/TR/2dcontext/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: "L'Outil Définitif pour des Maquettes Rapides",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Lors des premières phases de conceptualisation ou de maquettage structurel d'un site web (wireframing), nous disposons rarement du contenu photographique final. Les dimensions vides peuvent fausser la visualisation globale du produit et masquer des erreurs critiques d'espacement ou de proportions. Un générateur d'images placeholder résout instantanément ce problème, permettant d'injecter des zones colorées rigoureusement dimensionnées.",
    },
    {
      type: 'tip',
      title: 'Design sans Friction',
      html: "Intégrer un espace de 1200x800 pixels exactement est impératif lors de la construction de CSS Grids. En téléchargeant les blocs de remplissage, vous évitez d'injecter du CSS supplémentaire ou des scripts tiers dans votre code temporaire.",
    },
    {
      type: 'title',
      text: "L'Importance d'Éviter les Services Externes",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Une pratique récurrente dans l'écosystème frontend consiste à lier des services comme <code>via.placeholder.com</code> ou similaires directement dans les attributs <code>src</code> du HTML. Bien que théoriquement agile via des paramètres URL, cela présente de profonds effets secondaires qu'un développeur méticuleux éviterait à tout prix.",
    },
    {
      type: 'paragraph',
      html: "Insérer un domaine distant dans chaque balise d'image d'une page en développement augmente les requêtes DNS, pénalise les systèmes de hot-reloading de Vite, Gulp ou Webpack et expose accidentellement des traces dans des branches qui finissent dans le cloud. En utilisant cet outil et en générant l'image dans votre format préféré (WebP, PNG ou JPEG), vous centralisez votre prototype entièrement en mode localhost.",
    },
    {
      type: 'title',
      text: "Caractéristiques Fondamentales de l'Algorithme du Générateur",
      level: 3,
    },
    {
      type: 'list',
      items: [
        "<strong>Résolution Pixel Perfect :</strong> HTML5 Canvas natif garantit que le canevas exporté correspond arithmétiquement aux coordonnées stipulées par l'utilisateur.",
        "<strong>Autoscaling Typographique :</strong> En mode Automatique, la taille de la police calcule l'aire périmétrique et le nombre de caractères pour adapter élégamment le texte sans provoquer d'<em>overflows</em> indésirables.",
        '<strong>Fusion Hexadécimale :</strong> Contrôle d\'état bidirectionnel entre les sélecteurs natifs HTML et les inputs typés, garantissant des contrastes précis dictés par la palette UI/UX de votre Figma ou Penpot original.',
      ],
    },
    {
      type: 'title',
      text: "L'Art Caché du Wireframing Technique",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Il n'existe aucun projet monolithique ni micro frontend qui ne passe pas par des étapes de fondation, surtout face à des clients exigeants ou des Product Managers avec une vision de fer. Faciliter des itérations graphiques agiles sans traîner la surcharge d'<em>assets</em> finalisés sépare le développeur rapide du développeur bloqué. Ce générateur exploite directement l'API moderne JS <code>toDataURL()</code> sur votre machine locale pour offrir un résultat à la hauteur du marché industriel sans traitement intermédiaire douteux.",
    },
  ],
};
