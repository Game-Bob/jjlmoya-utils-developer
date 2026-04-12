import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConversorExcelCsvHtmlUI } from '../ui';

const slug = 'convertisseur-excel-csv-tableau-html';
const title = 'Convertisseur Excel et CSV en Tableau HTML Générateur de Code';
const description = 'Convertissez vos données Excel ou CSV en tableaux HTML propres et sémantiques instantanément. Outil gratuit pour développeurs et créateurs de contenu.';

const faqData = [
  {
    question: 'Comment convertir un fichier Excel (.xlsx) en HTML?',
    answer: 'D\'abord, ouvrez votre fichier dans Excel et enregistrez-le en CSV (délimité par des virgules). Ensuite, téléchargez ce fichier CSV sur notre outil ou collez son contenu pour obtenir le code de tableau HTML.',
  },
  {
    question: 'Le code généré inclut-il des styles CSS?',
    answer: 'Le générateur produit du HTML propre avec des classes optionnelles pour les bordures et les rayures zébrées. Les styles visuels finaux dépendent de votre propre CSS, assurant une intégration parfaite.',
  },
  {
    question: 'Puis-je télécharger des fichiers CSV très volumineux?',
    answer: 'Oui, notre outil traite les données localement dans votre navigateur. Cela signifie qu\'il est très rapide et sécurisé, car vos données ne voyagent jamais sur Internet.',
  },
  {
    question: 'Est-ce compatible avec Google Sheets?',
    answer: 'Absolument. Dans Google Sheets, allez à Fichier > Télécharger > Valeurs séparées par des virgules (.csv) et utilisez ce fichier avec notre outil.',
  },
];

const howToData = [
  {
    name: 'Préparez vos données',
    text: 'Ayez votre fichier Excel ou CSV prêt. Assurez-vous que les données sont propres.',
  },
  {
    name: 'Chargez les données',
    text: 'Collez le texte CSV dans la zone de saisie ou faites glisser le fichier directement dans le convertisseur.',
  },
  {
    name: 'Configurez le tableau',
    text: 'Choisissez si vous souhaitez utiliser la première ligne comme en-tête et si vous souhaitez des styles de base.',
  },
  {
    name: 'Copiez le code',
    text: 'Basculez vers l\'onglet "Code HTML" et copiez le résultat à coller sur votre site web.',
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

const ui: ConversorExcelCsvHtmlUI = {
  csvInputLabel: 'Collez votre CSV ici',
  csvInputPlaceholder: 'Nom,Âge,Ville\nJean,25,Madrid\nAna,30,Barcelone',
  uploadLabel: 'Ou téléchargez votre fichier (CSV)',
  dragDropLabel: 'Glissez-déposez votre fichier ici',
  headerCheckboxLabel: 'Utiliser la première ligne comme en-tête',
  bordersCheckboxLabel: 'Ajouter des bordures',
  stripeCheckboxLabel: 'Rayures zébrées',
  previewTabLabel: 'Aperçu',
  codeTabLabel: 'Code HTML',
  emptyStateLabel: 'Entrez des données pour voir le tableau',
  copyButtonLabel: 'Copier le code',
  copiedLabel: 'Copié!',
};

export const content: ToolLocaleContent<ConversorExcelCsvHtmlUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Questions Fréquemment Posées',
  faq: faqData,
  bibliographyTitle: 'Ressources sur les Tableaux HTML et les Formats de Données',
  bibliography: [
    { name: 'W3C: Tableaux HTML', url: 'https://www.w3.org/WAI/tutorials/tables/' },
    { name: 'MDN: Élément de tableau HTML', url: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/table' },
    { name: 'RFC 4180: Format CSV', url: 'https://tools.ietf.org/html/rfc4180' },
    { name: 'Google Sheets: Télécharger vos données', url: 'https://support.google.com/docs/answer/183965' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Convertir facilement Excel et CSV en Tableaux HTML', level: 2 },
    {
      type: 'paragraph',
      html: 'Dans le développement web moderne, la présentation de données tabulaires est l\'une des façons les plus efficaces de transmettre des informations structurées. Cependant, convertir manuellement les données d\'une feuille de calcul comme <strong>Excel</strong> ou un fichier <strong>CSV</strong> en balises HTML <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> et <code>&lt;td&gt;</code> est une tâche fastidieuse et sujette à erreurs.',
    },
    { type: 'title', text: 'Pourquoi utiliser les tableaux HTML sémantiques?', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Accessibilité:</strong> Les lecteurs d\'écran peuvent interpréter la structure et aider les utilisateurs malvoyants.',
        '<strong>SEO:</strong> Les moteurs de recherche indexent le contenu des cellules, améliorant le classement de vos données.',
        '<strong>Réactivité:</strong> Avec un peu de CSS, les tableaux HTML peuvent s\'adapter aux appareils mobiles.',
        '<strong>Maintenabilité:</strong> Il est beaucoup plus facile de modifier les données en HTML que de régénérer une image complète.',
      ],
    },
    { type: 'title', text: 'Comment fonctionne le convertisseur Excel en HTML', level: 3 },
    {
      type: 'paragraph',
      html: 'Notre utilitaire utilise un analyseur de texte natif qui traite les fichiers séparés par des virgules (CSV). La plupart des programmes de feuilles de calcul, y compris Microsoft Excel, Google Sheets et LibreOffice Calc, vous permettent d\'exporter vos données au format CSV.',
    },
  ],
};
