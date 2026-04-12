import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromptLibraryUI } from '../ui';

const slug = 'bibliotheque-prompts';
const title = 'Biblioth\u00e8que de Prompts IA';
const description = 'Organisez, \u00e9tiquetez et sauvegardez vos prompts ChatGPT, Midjourney et Claude en priv\u00e9. Votre propre banque de prompts dans localStorage.';

const faqData = [
  {
    question: 'O\u00f9 sont sauvegard\u00e9s mes prompts?',
    answer: 'Vos prompts sont sauvegard\u00e9s exclusivement dans le stockage local de votre navigateur (localStorage). Nous n\'utilisons pas de serveurs externes, ce qui signifie que vos donn\u00e9es sont 100% priv\u00e9es.',
  },
  {
    question: 'Que se passe-t-il si j\'efface les cookies ou l\'historique du navigateur?',
    answer: 'Si vous effacez les donn\u00e9es du site ou le stockage local de votre navigateur, vous perdrez vos prompts sauvegard\u00e9s. Nous vous recommandons de faire des sauvegardes si vous nettoyez fr\u00e9quemment votre navigateur.',
  },
  {
    question: 'Puis-je utiliser cet outil pour Midjourney, ChatGPT ou DALL-E?',
    answer: 'Oui, il est compatible avec tout type d\'instruction IA. Vous pouvez cr\u00e9er des \u00e9tiquettes sp\u00e9cifiques pour organiser vos commandes et les copier facilement dans votre outil IA pr\u00e9f\u00e9r\u00e9.',
  },
];

const howToData = [
  { name: 'Cr\u00e9er un prompt', text: 'Cliquez sur le bouton Nouveau Prompt et entrez le titre et l\'instruction.' },
  { name: 'Ajouter des \u00e9tiquettes', text: 'Tapez des \u00e9tiquettes s\u00e9par\u00e9es par un espace ou une virgule pour classer vos prompts.' },
  { name: 'Utiliser des variables', text: 'Utilisez des crochets [COMME \u00c7A] dans le texte pour cr\u00e9er des champs \u00e0 remplir sur la carte.' },
  { name: 'Copier et partager', text: 'Copiez dans le presse-papiers en un clic ou partagez un lien direct avec le bouton partager.' },
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

const ui: PromptLibraryUI = {
  placeholderSearch: 'Rechercher par mot cl\u00e9 ou \u00e9tiquette...',
  btnNew: 'Nouveau Prompt',
  emptyTitle: 'Votre biblioth\u00e8que est vide',
  emptyDesc: 'Cr\u00e9ez votre premier prompt et commencez \u00e0 construire votre r\u00e9f\u00e9rentiel IA priv\u00e9.',
  btnAddFirst: 'Ajouter le premier',
  modalTitleCreate: 'Cr\u00e9er un Nouveau Prompt',
  modalTitleEdit: 'Modifier le Prompt',
  labelTitle: 'Titre identificateur',
  placeholderTitle: 'Ex: Expert en Marketing SEO',
  labelContent: 'Instruction (Prompt)',
  placeholderContent: 'R\u00e9digez ici les instructions d\u00e9taill\u00e9es pour l\'IA...',
  hintContent: 'Conseil: utilisez des crochets [COMME CEUX-CI] pour remplir des variables plus tard.',
  labelTags: '\u00c9tiquettes',
  placeholderTags: 'Ex: marketing, seo (espace ou virgule pour ajouter)',
  btnCancel: 'Annuler',
  btnSave: 'Sauvegarder en Local',
  ariaLabelStar: 'Mettre en favori',
  ariaLabelEdit: 'Modifier le prompt',
  ariaLabelShare: 'Partager le prompt',
  ariaLabelCopy: 'Copier le prompt',
  ariaLabelDelete: 'Supprimer le prompt',
  varsTitle: 'Variables requises',
  noResults: 'Aucun prompt trouv\u00e9 pour cette recherche.',
  confirmTitle: 'Supprimer le prompt?',
  confirmDesc: 'Cette action ne peut pas \u00eatre annul\u00e9e.',
  btnCancelDelete: 'Annuler',
  btnConfirmDelete: 'Supprimer d\u00e9finitivement',
};

export const content: ToolLocaleContent<PromptLibraryUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Questions Fr\u00e9quentes',
  faq: faqData,
  bibliographyTitle: 'R\u00e9f\u00e9rences sur le Prompt Engineering',
  bibliography: [
    { name: 'Prompt Engineering Guide (DAIR.AI)', url: 'https://www.promptingguide.ai/' },
    { name: 'Qu\'est-ce que le prompt engineering (Google Cloud)', url: 'https://cloud.google.com/discover/what-is-prompt-engineering' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Pourquoi avez-vous besoin d\'une Biblioth\u00e8que de Prompts?', level: 2 },
    {
      type: 'paragraph',
      html: 'Si vous travaillez r\u00e9guli\u00e8rement avec des outils d\'IA comme ChatGPT, Claude ou Midjourney, vous vous \u00eates probablement retrouv\u00e9 \u00e0 r\u00e9p\u00e9ter les m\u00eames instructions. Une <strong>biblioth\u00e8que de prompts</strong> est la solution d\u00e9finitive pour arr\u00eater de perdre du temps \u00e0 r\u00e9\u00e9crire vos commandes favorites.',
    },
    { type: 'title', text: 'Avantages d\'organiser vos prompts', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Recherche instantan\u00e9e:</strong> Trouvez cette instruction sp\u00e9cifique que vous avez utilis\u00e9e il y a des mois avec une simple recherche textuelle.',
        '<strong>Classification par \u00e9tiquettes:</strong> \u00c9tiquetez vos prompts comme "marketing", "programmation" ou "copywriting" pour filtrer rapidement.',
        '<strong>Copie en un clic:</strong> Copiez le texte complet dans le presse-papiers en un seul clic.',
        '<strong>Confidentialit\u00e9 totale:</strong> Toutes vos donn\u00e9es sont stock\u00e9es localement dans votre navigateur via localStorage.',
      ],
    },
    { type: 'title', text: 'Variables dans vos prompts', level: 3 },
    {
      type: 'paragraph',
      html: 'Utilisez la notation <strong>[VARIABLE]</strong> dans vos prompts pour cr\u00e9er des champs \u00e0 remplir dynamiquement. Quand vous ouvrez une carte, des champs apparaissent pour chaque variable d\u00e9finie.',
    },
  ],
};
