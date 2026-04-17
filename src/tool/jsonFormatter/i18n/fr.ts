import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonFormatterUI } from '../ui';

const slug = 'formateur-json-validateur';
const title = 'Formateur et Validateur JSON Gratuit en Ligne';
const description =
  'Outil en ligne gratuit pour formater, valider et réparer du code JSON. Embellissez et formatez du JSON. Détecte les erreurs de syntaxe et améliore la lisibilité du code.';

const faqData = [
  {
    question: 'Mes données sont-elles sécurisées avec ce formateur ?',
    answer:
      "Absolument. Tout le traitement s'effectue à 100% dans votre navigateur (côté client). Vos données JSON ne sont jamais envoyées à un serveur, garantissant une confidentialité totale.",
  },
  {
    question: "Qu'est-ce qui provoque une erreur 'Invalid JSON' ?",
    answer:
      "Elle est généralement causée par des virgules en fin d'objet, l'absence de guillemets doubles autour des clés, ou des caractères invisibles. Notre outil met en évidence la ligne exacte de l'erreur pour que vous puissiez la corriger.",
  },
  {
    question: 'Peut-il réparer du JSON endommagé ?',
    answer:
      "Notre outil tente de corriger automatiquement les erreurs courantes telles que les virgules finales inutiles ou les échappements de caractères mal formés, afin que le JSON soit valide selon la norme RFC 8259.",
  },
  {
    question: 'Prend-il en charge les fichiers JSON très volumineux ?',
    answer:
      "Oui, le moteur de traitement est optimisé pour gérer des structures de données complexes et des fichiers volumineux sans bloquer l'interface du navigateur.",
  },
];

const howToData = [
  {
    name: 'Coller le code',
    text: 'Collez votre JSON désordonné ou compressé dans la zone de texte principale.',
  },
  {
    name: 'Valider et Formater',
    text: "Le système analysera automatiquement le code, mettra en évidence les erreurs de syntaxe et appliquera l'indentation pour améliorer la lisibilité.",
  },
  {
    name: 'Choisir un style',
    text: "Choisissez entre un format développé (embellir) ou compressé (minifier) selon que vous avez besoin de lisibilité ou d'économie d'espace.",
  },
  {
    name: 'Copier le résultat',
    text: 'Cliquez sur le bouton Copier pour récupérer le JSON parfaitement validé dans votre presse-papiers.',
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

const ui: JsonFormatterUI = {
  labelInput: 'Entrée (JSON)',
  labelOutput: 'Résultat',
  btnMinify: 'Minifier',
  btnBeautify: 'Embellir',
  btnFix: 'Essayer de Réparer',
  btnCopy: 'Copier',
  statusWaiting: "En attente d'entrée...",
  statusValid: 'JSON Valide',
  statusInvalid: 'JSON Invalide',
  toastCopied: 'Copié !',
  toastFixed: 'JSON réparé (Aperçu)',
  toastFixFailed: 'Impossible de réparer automatiquement',
  placeholder: 'Collez votre JSON ici...',
};

export const content: ToolLocaleContent<JsonFormatterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références et Normes',
  bibliography: [
    {
      name: 'RFC 8259 – The JavaScript Object Notation (JSON) Data Interchange Format (IETF)',
      url: 'https://datatracker.ietf.org/doc/html/rfc8259',
    },
    {
      name: 'ECMA-404 – The JSON Data Interchange Syntax (Ecma International)',
      url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-404/',
    },
    {
      name: 'JSON.org – Introducing JSON',
      url: 'https://www.json.org/json-en.html',
    },
    {
      name: 'MDN Web Docs – JSON',
      url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Validation et Formatage de JSON',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "JSON (JavaScript Object Notation) est le standard de facto pour l'échange de données sur le web. Cependant, sa syntaxe stricte le rend sujet aux erreurs humaines lors d'une édition manuelle.",
    },
    {
      type: 'paragraph',
      html: "Cet outil vous permet de valider la structure, de formater le code pour améliorer sa lisibilité et de réparer automatiquement les erreurs de syntaxe courantes.",
    },
    { type: 'grid', columns: 2 },
    {
      type: 'card',
      title: 'Erreurs Courantes Réparées',
      html: "<ul><li><strong>Guillemets simples :</strong> La norme JSON exige des guillemets doubles. L'outil convertit <code>'clé': 'valeur'</code> en <code>\"clé\": \"valeur\"</code>.</li><li><strong>Clés sans guillemets :</strong> Détecte les clés d'objets de style JavaScript et ajoute les guillemets nécessaires.</li><li><strong>Virgules en trop :</strong> Supprime les virgules en fin d'objets ou de tableaux (trailing commas) qui cassent le parseur strict.</li></ul>",
    },
    {
      type: 'card',
      title: 'Fonctionnalités',
      html: '<ul><li><strong>Coloration Syntaxique :</strong> Colorise les clés, chaînes, nombres et booléens pour faciliter la lecture rapide.</li><li><strong>Validation en Temps Réel :</strong> Indique instantanément si le JSON est valide ou affiche l\'erreur d\'analyse spécifique.</li><li><strong>Confidentialité Totale :</strong> Le traitement s\'effectue à 100% dans votre navigateur. Aucune donnée n\'est envoyée à des serveurs externes.</li></ul>',
    },
  ],
};

