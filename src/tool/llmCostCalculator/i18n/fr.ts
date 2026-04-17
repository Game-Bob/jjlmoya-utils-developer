import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LlmCostCalculatorUI } from '../ui';

const slug = 'calculateur-couts-llm';
const title = 'Calculateur de Coûts LLM. Estimateur de Prix des APIs IA';
const description =
  'Outil en ligne gratuit pour estimer le coût des appels aux APIs de modèles de langage. Comparez GPT-4o, Claude, Gemini, Llama et plus avec les vrais prix par million de tokens.';

const faqData = [
  {
    question: "Comment le coût d'une API LLM est-il calculé ?",
    answer:
      "Les APIs LLM facturent séparément les tokens d'entrée (le prompt) et les tokens de sortie (la réponse). Le coût total par requête est : (tokens entrée × prix entrée + tokens sortie × prix sortie) / 1 000 000. Multipliez par le nombre de requêtes pour obtenir le coût mensuel total.",
  },
  {
    question: 'Que sont les tokens et comment se rapportent-ils aux mots ?',
    answer:
      "Un token est l'unité de base de texte qu'un modèle de langage traite. En moyenne, 1 token équivaut à environ 0,75 mot en anglais, soit 1 000 tokens ≈ 750 mots. Les prix sont indiqués par million de tokens ($/1M), qui est l'unité tarifaire standard chez tous les fournisseurs.",
  },
  {
    question: "Pourquoi les tokens de sortie sont-ils plus chers que les tokens d'entrée ?",
    answer:
      "Générer du texte (sortie) oblige le modèle à calculer chaque token séquentiellement, ce qui est plus coûteux en calcul que de lire l'entrée. La plupart des fournisseurs facturent 3 à 5 fois plus pour les tokens de sortie que pour les tokens d'entrée.",
  },
  {
    question: 'Comment réduire les coûts de mon API LLM ?',
    answer:
      "Utilisez le modèle le plus petit qui répond à vos exigences de qualité. Mettez en cache les prompts répétés si possible. Minimisez la longueur du prompt système et évitez le contexte inutile. Pour les tâches simples de classification ou d'extraction, des modèles plus petits comme GPT-4o mini ou Gemini Flash offrent des économies significatives.",
  },
];

const howToData = [
  {
    name: 'Sélectionner un modèle',
    text: "Choisissez le modèle IA que vous prévoyez d'utiliser dans la liste déroulante groupée. Les modèles sont organisés par fournisseur.",
  },
  {
    name: 'Saisir le nombre de tokens',
    text: "Entrez le nombre attendu de tokens d'entrée (votre prompt) et de sortie (la réponse). Une estimation en mots apparaît sous chaque champ.",
  },
  {
    name: 'Définir le nombre de requêtes',
    text: "Utilisez le curseur ou le champ numérique pour indiquer combien d'appels API vous prévoyez. Le coût total se met à jour en temps réel.",
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'fr',
};

const ui: LlmCostCalculatorUI = {
  labelModel: 'Modèle LLM',
  labelInputTokens: "Tokens d'entrée",
  labelOutputTokens: 'Tokens de sortie',
  labelRequests: 'Nombre de requêtes',
  unitWords: 'mots',
  labelCostPerRequest: 'Coût par requête',
  labelTotal: 'Coût total estimé',
  labelInput: 'Input',
  labelOutput: 'Output',
};

export const content: ToolLocaleContent<LlmCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Questions fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références et Sources de Prix',
  bibliography: [
    {
      name: "Tarification de l'API OpenAI",
      url: 'https://openai.com/pricing',
    },
    {
      name: "Tarification de l'API Anthropic",
      url: 'https://www.anthropic.com/pricing',
    },
    {
      name: 'Tarification Google AI Studio',
      url: 'https://ai.google.dev/pricing',
    },
    {
      name: 'Tokeniseur OpenAI',
      url: 'https://platform.openai.com/tokenizer',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Comprendre la tarification des APIs LLM',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Les APIs de modèles de langage facturent en fonction de l'utilisation des tokens, et non du temps ou des requêtes. Chaque appel a deux coûts : le <strong>coût d'entrée</strong> (traitement de votre prompt) et le <strong>coût de sortie</strong> (génération de la réponse). Comprendre cette distinction est essentiel pour estimer avec précision votre facture mensuelle.",
    },
    {
      type: 'title',
      text: "Tokens d'entrée et tokens de sortie",
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: "Tokens d'entrée",
      html: "<p>Les tokens d'entrée représentent tout ce qui est envoyé <strong>au</strong> modèle : votre prompt système, l'historique de la conversation et le message de l'utilisateur. Ils sont moins chers car le modèle les traite en parallèle. Un prompt système typique de 200 mots génère environ 267 tokens d'entrée.</p>",
    },
    {
      type: 'card',
      title: 'Tokens de sortie',
      html: '<p>Les tokens de sortie sont générés un par un séquentiellement, ce qui les rend plus coûteux en calcul. La plupart des fournisseurs facturent <strong>3 à 5 fois plus</strong> pour les tokens de sortie. Une réponse de 300 mots génère environ 400 tokens de sortie. Garder les réponses concises est une des stratégies d\'économie les plus efficaces.</p>',
    },
    {
      type: 'title',
      text: 'Choisir le bon modèle pour votre budget',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Commencez avec un modèle de milieu de gamme comme <code>GPT-4o mini</code> ou <code>Gemini 1.5 Flash</code> et ne montez en gamme que si la qualité est insuffisante. La différence de coût entre un petit et un grand modèle peut être de 10 à 100 fois.',
    },
    {
      type: 'paragraph',
      html: "Toutes les tâches ne nécessitent pas le même niveau de modèle. Les tâches de classification, d'extraction et de résumé fonctionnent souvent bien avec des modèles plus petits et moins chers. Réservez les grands modèles comme <code>claude-3-opus</code> ou <code>o1</code> pour les raisonnements complexes où la qualité impacte directement les résultats.",
    },
  ],
};

