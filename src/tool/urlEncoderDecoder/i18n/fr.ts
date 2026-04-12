import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlEncoderDecoderUI } from '../ui';

const slug = 'encodeur-decodeur-url';
const title = "Encodeur et Décodeur d'URL en Ligne";
const description =
  "Convertissez les caractères spéciaux de n'importe quel lien en format sécurisé (Percent-Encoding) ou restituez-les à leur état original lisible instantanément et localement.";

const faqData = [
  {
    question: 'Quels caractères sont encodés dans une URL ?',
    answer:
      "Tous les caractères non autorisés dans le standard ASCII pour les URLs sont encodés : espaces, lettres accentuées, symboles tels que &, =, +, #, ?, / et d'autres. Par exemple, un espace devient %20 et ñ devient %C3%B1.",
  },
  {
    question: 'Quelle est la différence entre encodeURI et encodeURIComponent ?',
    answer:
      "encodeURI encode une URL complète et laisse intacts les caractères réservés comme / et ?. encodeURIComponent encode tous les caractères spéciaux y compris les réservés, ce qui le rend idéal pour encoder des valeurs individuelles de paramètres de requête.",
  },
  {
    question: "Pourquoi mon URL a-t-elle %20 à la place des espaces ?",
    answer:
      "Le protocole HTTP n'autorise pas les espaces dans les URLs. %20 est la représentation en Percent-Encoding d'un espace selon le standard ASCII. Certains systèmes utilisent le signe + comme alternative, mais %20 est le plus universel et sûr.",
  },
  {
    question: "Est-il sûr d'utiliser cet outil avec des URLs privées ?",
    answer:
      "Oui, complètement sûr. Tout le traitement se fait dans votre navigateur en utilisant JavaScript natif (encodeURIComponent/decodeURIComponent). Aucune de vos URLs ou paramètres n'est envoyé à un serveur externe.",
  },
];

const howToData = [
  {
    name: 'Coller le texte brut',
    text: 'Tapez ou collez votre URL ou chaîne de texte dans le champ supérieur "Texte Brut (Lisible)".',
  },
  {
    name: 'Encoder ou décoder',
    text: 'Cliquez sur "Encoder URL" pour convertir le texte en format Percent-Encoding sécurisé, ou sur "Décoder" pour revenir à la forme lisible d\'une URL encodée.',
  },
  {
    name: 'Copier le résultat',
    text: 'Utilisez le bouton "Copier" du champ correspondant pour transférer le résultat dans votre presse-papiers.',
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

const ui: UrlEncoderDecoderUI = {
  labelRaw: 'Texte Brut (Lisible)',
  labelEncoded: 'URL Formatée (Encodée)',
  btnClear: 'Effacer',
  btnCopy: 'Copier',
  btnCopied: 'Copié !',
  btnEncode: "Encoder l'URL",
  btnDecode: 'Décoder',
  placeholderRaw: 'https://exemple.com/recherche?q=chaussures à talons rouges&taille=38',
  placeholderEncoded: 'https%3A%2F%2Fexemple.com%2Frecherche%3Fq%3Dchaussures%20%C3%A0%20talons%20rouges%26taille%3D38',
};

export const content: ToolLocaleContent<UrlEncoderDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références et Documentation',
  bibliography: [
    {
      name: 'MDN Web Docs: encodeURIComponent()',
      url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent',
    },
    {
      name: 'IETF RFC 3986: Syntaxe URI',
      url: 'https://datatracker.ietf.org/doc/html/rfc3986',
    },
    {
      name: 'W3C: URL Living Standard',
      url: 'https://url.spec.whatwg.org/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: "Qu'est-ce que l'Encodage d'URL ?",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Lorsqu'on navigue sur internet ou qu'on envoie des requêtes à des serveurs, il est courant de penser à une URL (Uniform Resource Locator) comme simplement une \"adresse web\". Cependant, le protocole internet stipule que les URLs ne peuvent être transmises qu'en utilisant un ensemble très restreint de caractères <strong>ASCII standard</strong>.",
    },
    {
      type: 'paragraph',
      html: "Que se passe-t-il si l'URL contient un espace, des lettres accentuées ou des paramètres spéciaux comme les symboles plus (<code>+</code>) ou égal (<code>=</code>) ? Pour éviter que les systèmes s'effondrent en tentant de lire des caractères illégaux, ceux-ci doivent être traduits dans leur forme sécurisée compatible en utilisant le <strong>Percent-Encoding</strong>.",
    },
    {
      type: 'title',
      text: 'Comment fonctionne le Percent-Encoding',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Lorsque vous utilisez cet outil, l'algorithme prend tout caractère \"non sécurisé\" (comme un espace ou une lettre accentuée comme le ñ) et le remplace par un signe pourcentage <code>%</code> suivi de deux chiffres hexadécimaux correspondant à sa valeur dans le standard UTF-8.",
    },
    {
      type: 'list',
      items: [
        '<strong>Exemple Basique :</strong> Un simple espace sera remplacé par son équivalent sécurisé : <code>%20</code>.',
        '<strong>Support Étendu :</strong> La lettre <code>á</code> devient <code>%C3%A1</code>, et <code>ñ</code> devient <code>%C3%B1</code>.',
      ],
    },
    {
      type: 'title',
      text: "L'Importance dans les APIs et Requêtes GET",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Lors du développement d'intégrations, une erreur typique consiste à passer une chaîne brute aux paramètres d'une URL. Si vous insérez <code>chemise&bleu</code> de façon pure dans votre backend (<code>/chercher?q=chemise&bleu</code>), le serveur interprétera que <code>bleu</code> est un nouveau paramètre, brisant toute la logique du code.",
    },
    {
      type: 'paragraph',
      html: "Cet outil garantit des calculs propres et automatiques avec une exécution à 100% dans votre navigateur local. Aucune de vos chaînes URL n'est transmise à des serveurs tiers, assurant la confidentialité de vos tokens et paramètres analytiques.",
    },
  ],
};
