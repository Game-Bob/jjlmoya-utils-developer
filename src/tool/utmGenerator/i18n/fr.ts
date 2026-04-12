import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UtmGeneratorUI } from '../ui';

const slug = 'generateur-utm';
const title = 'Générateur de Paramètres UTM pour Google Analytics';
const description = 'Créez des liens de suivi précis pour vos campagnes de marketing numérique. Optimisé pour Google Analytics et autres outils d\'analyse.';

const faqData = [
  {
    question: 'L\'utilisation de paramètres UTM est-elle préjudiciable au référencement?',
    answer: 'Non, à condition d\'utiliser des balises canoniques. Les moteurs de recherche comprennent que les paramètres UTM sont destinés à l\'analyse et ne créent pas de contenu dupliqué.',
  },
  {
    question: 'Dois-je utiliser des paramètres UTM pour les liens internes?',
    answer: 'Non, jamais. Les balises UTM sur les liens internes rompent la session de l\'utilisateur dans des outils comme Google Analytics, faussant vos données de trafic.',
  },
  {
    question: 'Google Analytics distingue-t-il les majuscules et minuscules dans les UTM?',
    answer: 'Oui. "google", "Google" et "GOOGLE" seront traités comme des sources différentes. Maintenez toujours la cohérence, de préférence en utilisant uniquement des minuscules.',
  },
];

const howToData = [
  { name: 'Entrez l\'URL', text: 'Saisissez l\'URL complète de votre site Web, y compris https://' },
  { name: 'Définissez la source', text: 'Spécifiez d\'où provient le trafic (google, facebook, newsletter, etc.)' },
  { name: 'Sélectionnez le medium', text: 'Choisissez le type de canal (cpc, email, social, organic, etc.)' },
  { name: 'Nommez votre campagne', text: 'Attribuez un nom identifiable pour regrouper vos efforts marketing' },
  { name: 'Copiez et utilisez', text: 'Copiez l\'URL générée et utilisez-la dans vos publications, annonces ou signatures d\'e-mail' },
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

const ui: UtmGeneratorUI = {
  labelUrl: 'URL du site Web (p. ex. https://exemple.com) *',
  labelSource: 'Source de la campagne (p. ex. google, newsletter) *',
  labelMedium: 'Medium de la campagne (p. ex. cpc, email)',
  labelCampaign: 'Nom de la campagne (p. ex. offre_ete)',
  labelTerm: 'Terme de la campagne (p. ex. acheter_chaussures)',
  labelContent: 'Contenu de la campagne (p. ex. banniere_haut)',
  labelGenerated: 'URL Générée:',
  btnCopy: 'Copier le Lien',
  btnCopied: 'Copié!',
  errorInvalid: 'Entrez une URL valide',
  errorInvalidUrl: 'URL invalide',
};

export const content: ToolLocaleContent<UtmGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Questions Fréquemment Posées',
  faq: faqData,
  bibliographyTitle: 'Références',
  bibliography: [
    { name: 'Collect campaign data with custom URLs - Google Analytics Help (2024)', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: 'Best Practices for Campaign URL Tagging - VWO Blog (2023)', url: 'https://vwo.com/blog/utm-tagging-best-practices/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Générateur UTM: Paramètres de Suivi pour Google Analytics', level: 2 },
    {
      type: 'paragraph',
      html: 'Les paramètres <strong>UTM</strong> (Urchin Tracking Module) sont des libellés de texte ajoutés à la fin d\'une URL pour suivre le trafic Web. Notre générateur simplifie la création de liens traçables pour vos campagnes de marketing numérique.',
    },
    { type: 'title', text: 'Les 5 Piliers d\'une URL Traçable', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Campaign Source (Source):</strong> Identifie le moteur de recherche, le réseau social ou l\'origine du trafic. Exemple: google, newsletter, facebook.',
        '<strong>Campaign Medium (Medium):</strong> Fait référence au canal marketing. Exemple: cpc, email, social, banner, organic.',
        '<strong>Campaign Name (Nom):</strong> Le nom spécifique de votre campagne. Exemple: offre_ete_2025, lancement_app_v2.',
        '<strong>Campaign Term (Terme):</strong> Pour les recherches payantes, les mots-clés sur lesquels vous enchérissez. Exemple: acheter_chaussures_sport.',
        '<strong>Campaign Content (Contenu):</strong> Pour les tests A/B. Différencie les éléments similaires d\'une campagne. Exemple: header_v1, sidebar_v2.',
      ],
    },
    { type: 'title', text: 'Meilleures Pratiques pour l\'Étiquetage UTM', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Cohérence de casse:</strong> Les outils distinguent "Google", "GOOGLE" et "google". Utilisez toujours les minuscules pour éviter les doublons.',
        '<strong>Évitez les espaces:</strong> Les espaces deviennent %20. Utilisez des tirets (-) ou des traits de soulignement (_) à la place.',
        '<strong>Ne l\'utilisez pas sur les liens internes:</strong> Le suivi UTM est exclusivement pour le trafic externe. Sur les liens internes, il casse la session et détruit les métriques clés.',
        '<strong>Documentez vos étiquettes:</strong> Gardez un enregistrement de toutes les combinaisons que vous utilisez pour éviter les incohérences.',
      ],
    },
  ],
};
