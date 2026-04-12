import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CalculadoraTiempoDatosUI } from '../ui';

const slug = 'calculatrice-temps-donnees-impact-vitesse-web';
const title = 'Calculatrice de Temps de Données Impact de la Vitesse Web';
const description = 'Découvrez combien de temps de vie vos utilisateurs perdent en attendant que votre site se charge sur les connexions 3G, 4G et 5G. Calculez l\'impact réel du poids de votre site.';

const faqData = [
  {
    question: 'Pourquoi est-il important de connaître le temps de chargement de mon site?',
    answer: 'Parce qu\'il impacte directement l\'expérience utilisateur, le SEO et les conversions. Google a documenté que chaque seconde de retard réduit les conversions de 7%. De plus, 53% des visiteurs mobiles abandonnent une page qui prend plus de 3 secondes à charger.',
  },
  {
    question: 'Que signifient ces petits pourcentages de perte de temps de vie?',
    answer: 'Ils représentent le pourcentage du temps de vie total d\'une personne (environ 80 ans ou 2,5 milliards de secondes) passé à attendre que votre page se charge. Bien que faibles individuellement, multipliés par des millions d\'utilisateurs, ils représentent d\'énormes quantités de temps humain gaspillé.',
  },
  {
    question: 'Quelle est la vitesse de connexion moyenne dans le monde?',
    answer: '4G est standard dans les pays développés. Cependant, des millions d\'utilisateurs dans les pays en développement dépendent encore du 3G. C\'est pourquoi il est crucial d\'optimiser votre site pour toutes les vitesses de connexion.',
  },
  {
    question: 'Quel poids devrait avoir mon site web?',
    answer: 'Google recommande que la page d\'accueil se charge en moins de 3 secondes sur une connexion 4G typique. Pour cela, un site devrait peser entre 1-2 MB. Cependant, la moyenne mondiale est proche de 2-3 MB.',
  },
  {
    question: 'Comment puis-je réduire le poids de mon site?',
    answer: 'Principales stratégies: optimiser les images (50-80% du poids), minifier CSS et JavaScript, utiliser lazy loading, implémenter le cache du navigateur et utiliser un CDN. L\'optimisation des images est généralement le facteur le plus impactant.',
  },
  {
    question: 'La vitesse de chargement affecte-t-elle le classement Google?',
    answer: 'Oui, absolument. Google considère Core Web Vitals comme des facteurs de classement importants. Un site plus lent sera mal classé qu\'un site plus rapide, même avec un contenu similaire.',
  },
];

const howToData = [
  { name: 'Entrez le poids de votre site', text: 'Utilisez les outils de développement du navigateur ou WebPageTest pour connaître le poids de votre page. Entrez cette valeur en MB.' },
  { name: 'Observez les temps de chargement', text: 'La calculatrice montre combien de secondes votre site prend pour charger sur 3G, 4G et 5G. Les temps réels sont généralement plus élevés.' },
  { name: 'Comprenez l\'impact sur la vie', text: 'Le pourcentage de "vie" montre combien de la vie de quelqu\'un est passée à attendre. Utilisez cela comme motivation pour optimiser.' },
  { name: 'Optimisez et recalculez', text: 'Après optimisation, mesurez à nouveau et recalculez. Voyez comment les petites améliorations ont un grand impact.' },
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

const ui: CalculadoraTiempoDatosUI = {
  headerTitle: 'Temps Perdu en Réseaux',
  labelWebSize: 'Poids du site web (MB)',
  unit: 'MB',
  presetsLabel: 'EXEMPLES RÉALISTES',
  labelSpeed: 'Vitesse de connexion',
  speedLabel3g: '3G',
  speedValue3g: '0,4 Mbps',
  speedLabel4g: '4G/LTE',
  speedValue4g: '10 Mbps',
  speedLabel5g: '5G',
  speedValue5g: '100+ Mbps',
  labelTimes: 'Combien de fois par jour?',
  resultTitle: 'Résultats',
  resultSingleLoad: 'Chargement unique',
  resultDailyTotal: 'Total quotidien',
  resultTimePerYear: 'par an à attendre',
  resultLifeYears: 'dans votre vie',
  resultMessage: 'Vous avez perdu approximativement 1 an de vie',
  copyMessage: 'Copié',
  preset3g: '3G',
  preset4g: '4G',
  preset5g: '5G',
};

export const content: ToolLocaleContent<CalculadoraTiempoDatosUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Questions Fréquemment Posées',
  faq: faqData,
  bibliographyTitle: 'Ressources Techniques sur l\'Optimisation Web',
  bibliography: [
    { name: 'Google PageSpeed Insights', url: 'https://pagespeed.web.dev/' },
    { name: 'WebPageTest - Analyser la vitesse du site', url: 'https://www.webpagetest.org/' },
    { name: 'Web.dev - Core Web Vitals', url: 'https://web.dev/vitals/' },
    { name: 'MDN - Performance Web', url: 'https://developer.mozilla.org/fr/docs/Web/Performance' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Pourquoi la Vitesse de Chargement du Site est Critique', level: 2 },
    {
      type: 'paragraph',
      html: 'À l\'ère numérique actuelle, la vitesse de chargement d\'un site web n\'est pas un luxe mais une nécessité. Chaque milliseconde compte pour fidéliser les utilisateurs, améliorer le classement dans les moteurs de recherche et maximiser les conversions. Les utilisateurs modernes s\'attendent à ce qu\'une page se charge en moins de 3 secondes.',
    },
    { type: 'title', text: 'Impact sur l\'Expérience Utilisateur', level: 3 },
    {
      type: 'paragraph',
      html: '53% des visiteurs mobiles abandonnent une page qui prend plus de 3 secondes à charger. Les taux de conversion chutent de 7% pour chaque seconde de latence supplémentaire.',
    },
    { type: 'title', text: 'Comprendre les Vitesses de Connexion', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>3G:</strong> 0,4 Mbps - Courant dans les zones rurales et les pays en développement',
        '<strong>4G/LTE:</strong> 10 Mbps - Standard dans les pays développés',
        '<strong>5G:</strong> 100+ Mbps - En expansion progressive, encore limité',
      ],
    },
    { type: 'title', text: 'Stratégies pour Réduire le Poids du Site', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Optimisation des images:</strong> Représente 50-80% du poids. Réduire de 40-60% avec TinyPNG.',
        '<strong>Minification:</strong> Supprimer le code inutile de CSS et JavaScript. Économiser 30-50%.',
        '<strong>Lazy Loading:</strong> Charger les images uniquement quand l\'utilisateur se déplace.',
        '<strong>Cache du navigateur:</strong> Mettre en cache les fichiers statiques.',
        '<strong>CDN:</strong> Servir le contenu depuis des serveurs géographiquement proches.',
      ],
    },
    { type: 'title', text: 'Conclusion: Chaque Seconde Compte', level: 2 },
    {
      type: 'paragraph',
      html: 'Votre site web est souvent la première impression que les utilisateurs ont de votre marque. Un site lent frustre les utilisateurs et perd des affaires. Un site rapide et réactif crée une expérience positive et améliore tous vos indicateurs.',
    },
  ],
};
