import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlCleanerUI } from '../ui';

const slug = 'nettoyeur-suivi-url';
const title = 'Nettoyeur de Suivi d\'URL: Supprimer UTM, FBCLID et GCLID';
const description = 'Supprimez automatiquement les paramètres de suivi et de publicité de vos URLs. Partagez des liens propres et protégez votre vie privée numérique instantanément.';

const faqData = [
  {
    question: 'Quels types de paramètres de suivi cet outil supprime-t-il?',
    answer: 'Notre outil détecte et supprime automatiquement les paramètres de suivi les plus courants, notamment UTM (utm_source, utm_medium, etc.), les identifiants de clics publicitaires (fbclid, gclid, msclkid) et les identifiants de campagne de marketing par email (mc_cid, _hsenc).',
  },
  {
    question: 'Cela affecte-t-il la fonctionnalité du site Web?',
    answer: 'Généralement non. Ces paramètres sont utilisés presque exclusivement pour l\'analyse et le marketing. Lorsque vous les supprimez, la page se charge normalement, mais le propriétaire du site ne pourra pas suivre la source exacte de votre clic.',
  },
  {
    question: 'Est-il sûr de traiter mes liens ici?',
    answer: 'Absolument. Comme tous nos outils, le processus est 100% côté client. Vos liens ne sont jamais envoyés à nos serveurs; tout se passe en privé dans votre propre navigateur.',
  },
  {
    question: 'Pourquoi mes liens Facebook sont-ils si longs?',
    answer: 'Facebook ajoute un paramètre appelé "fbclid" à tous les liens qui quittent sa plate-forme. Cela leur permet de suivre votre activité sur d\'autres sites Web même si vous avez bloqué la publicité tierce.',
  },
];

const howToData = [
  { name: 'Collez votre URL', text: 'Entrez l\'URL complète contenant des paramètres de suivi' },
  { name: 'Cliquez sur Nettoyer', text: 'L\'outil analysera automatiquement l\'URL' },
  { name: 'Examinez les résultats', text: 'Vous verrez l\'URL propre et une liste des paramètres supprimés' },
  { name: 'Copiez et partagez', text: 'Utilisez l\'URL propre dans vos e-mails, réseaux sociaux ou messages' },
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

const ui: UrlCleanerUI = {
  labelInput: 'Collez l\'URL avec les paramètres de suivi',
  btnClean: 'Nettoyer',
  labelCleaned: 'URL Propre',
  labelRemoved: 'Traceurs Supprimés',
  countLabel: 'Paramètres supprimés',
  reductionLabel: 'Réduction de longueur',
  noneDetected: 'Aucun paramètre de suivi courant détecté.',
  errorInvalid: 'Veuillez entrer une URL valide.',
  btnCopy: 'Copier',
  btnCopied: 'Copié',
};

export const content: ToolLocaleContent<UrlCleanerUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Questions Fréquemment Posées',
  faq: faqData,
  bibliographyTitle: 'Ressources sur la Confidentialité et le Suivi Web',
  bibliography: [
    { name: 'Electronic Frontier Foundation (EFF): Guide sur le Suivi en Ligne', url: 'https://www.eff.org/issues/online-behavioral-tracking' },
    { name: 'Google Analytics: Documentation des Paramètres UTM', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: 'Confidentialité sur le Web: L\'impact des Click IDs', url: 'https://www.w3.org/community/web-advertising/wiki/Click_Identifiers' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Nettoyeur de Suivi d\'URL: Supprimer UTM, FBCLID et GCLID', level: 2 },
    {
      type: 'paragraph',
      html: 'Supprimez les traceurs invisibles de vos liens pour les partager de manière propre, privée et professionnelle. Découvrez ce que signifient ces étranges codes dans vos URLs.',
    },
    { type: 'title', text: 'Qu\'est-ce qu\'un nettoyeur de suivi d\'URL et pourquoi l\'avez-vous besoin?', level: 3 },
    {
      type: 'paragraph',
      html: 'Avez-vous déjà copié un lien pour l\'envoyer à un ami et réalisé qu\'il était trois fois plus long qu\'il ne devrait l\'être? Ce "bruit" supplémentaire provient des paramètres de suivi. Un <strong>nettoyeur de suivi</strong> est un outil conçu pour "dénuder" l\'URL de toutes les informations publicitaires et de suivi que les grandes plates-formes injectent dans chaque clic que vous effectuez.',
    },
    { type: 'title', text: 'Paramètres de suivi les plus courants', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>UTM (Google Analytics):</strong> utm_source, utm_medium, utm_campaign pour suivre les campagnes',
        '<strong>FBCLID:</strong> Identifiant de clic Facebook pour contourner les restrictions de cookies',
        '<strong>GCLID / DCLID:</strong> Google Click ID pour lier les visites aux campagnes Google Ads',
        '<strong>MSCLKID:</strong> Identifiant de clic Microsoft Advertising et Bing',
        '<strong>HubSpot & Mailchimp:</strong> Paramètres d\'automatisation marketing comme _hsenc, mc_cid',
        '<strong>LinkedIn & Autres:</strong> li_fat_id et autres traceurs de réseaux sociaux',
      ],
    },
  ],
};
