import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssToInlineConverterUI } from '../ui';

const slug = 'convertisseur-css-inline';
const title = 'Convertisseur CSS Externe en HTML Inline. Inliner pour Emails';
const description =
  'Transformez vos feuilles de style et classes CSS en styles intégrés automatiquement dans votre HTML. Idéal pour les newsletters, les emails transactionnels et la mise en page web sécurisée.';

const faqData = [
  {
    question: 'Pourquoi les emails ont-ils besoin de CSS inline plutôt que de feuilles de style externes ?',
    answer:
      'Les clients de messagerie comme Outlook, Gmail ou Apple Mail filtrent ou ignorent les balises <link> et <style> pour des raisons de sécurité. La seule façon garantie d\'appliquer un style correctement dans un email est de l\'incorporer directement dans l\'attribut style de chaque élément HTML.',
  },
  {
    question: 'Que se passe-t-il si un élément a déjà son propre attribut style ?',
    answer:
      'L\'outil respecte les styles inline existants et ajoute les nouvelles propriétés à la suite, simulant le comportement de la cascade CSS : les propriétés déclarées plus tard écrasent les précédentes en cas de conflit.',
  },
  {
    question: 'Fonctionne-t-il avec des sélecteurs complexes comme :hover ou les media queries ?',
    answer:
      'L\'outil traite les sélecteurs de classe, d\'id, d\'attributs et de pseudo-classes structurelles que DOMParser peut résoudre. Les sélecteurs dépendants d\'état comme :hover et les media queries ne peuvent pas être inlinés (ils dépendent de l\'environnement d\'exécution) et sont ignorés.',
  },
  {
    question: 'Mon code HTML et CSS est-il envoyé à un serveur ?',
    answer:
      'Non. Tout le traitement se fait à 100% dans votre navigateur via l\'API DOMParser native. Aucun octet de votre code ne quitte votre appareil, garantissant une confidentialité totale pour les modèles avec du contenu sensible.',
  },
];

const howToData = [
  {
    name: 'Collez votre HTML original',
    text: 'Écrivez ou collez le HTML que vous souhaitez traiter dans le champ "HTML Original". Il peut s\'agir d\'un fragment ou d\'un document complet.',
  },
  {
    name: 'Ajoutez vos règles CSS',
    text: 'Collez les classes et ids que vous souhaitez injecter dans le champ "Règles CSS". L\'outil les applique en respectant la spécificité des sélecteurs.',
  },
  {
    name: 'Convertissez et copiez',
    text: 'Cliquez sur "Injecter le CSS dans le HTML". Le résultat avec tous les styles inline apparaîtra ci-dessous, prêt à copier-coller dans votre gestionnaire d\'email ou CMS.',
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

const ui: CssToInlineConverterUI = {
  labelHtml: 'HTML Original',
  labelCss: 'Règles CSS',
  labelOutput: 'Résultat HTML En Ligne',
  placeholderHtml: '<div class="ma-classe">Bonjour Monde</div>',
  placeholderCss: '.ma-classe { color: red; padding: 10px; }',
  placeholderOutput: 'Votre HTML avec les styles intégrés apparaîtra ici...',
  btnConvert: 'Injecter le CSS dans le HTML',
  btnCopy: 'Copier le Code',
  btnCopied: 'Copié !',
  msgError: 'Erreur de traitement. Vérifiez que votre HTML et votre CSS sont valides.',
};

export const content: ToolLocaleContent<CssToInlineConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références et Documentation',
  bibliography: [
    {
      name: 'Can I email: Matrice de support HTML et CSS pour les Emails',
      url: 'https://www.caniemail.com/',
    },
    {
      name: 'MDN Web Docs: L\'attribut global style',
      url: 'https://developer.mozilla.org/fr/docs/Web/HTML/Global_attributes/style',
    },
    {
      name: 'DOMParser API: Analyse sécurisée dans le navigateur',
      url: 'https://developer.mozilla.org/fr/docs/Web/API/DOMParser',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Qu\'est-ce qu\'un CSS Inliner et pourquoi en avez-vous besoin ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lors du développement d\'applications web modernes, nous sommes habitués à séparer les responsabilités : le HTML construit la structure, et un fichier CSS externe apporte tout le style visuel. Cependant, tous les environnements ne font pas confiance aux feuilles de style externes ni aux balises globales <code>&lt;style&gt;</code>.',
    },
    {
      type: 'paragraph',
      html: 'Le cas d\'usage le plus populaire où le CSS externe échoue est le <strong>Développement de Modèles d\'Email</strong>. Dans ces environnements, la seule façon fiable qu\'une police, couleur ou marge se rende correctement est qu\'elle soit imbriquée directement dans la balise : <code>&lt;span style="color: red;"&gt;</code>.',
    },
    {
      type: 'title',
      text: 'Le problème du CSS dans les clients de messagerie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les clients de messagerie comme Microsoft Outlook, Apple Mail ou Gmail ont des historiques notoires avec leurs moteurs de rendu CSS restrictifs. La plupart filtrent ou suppriment les balises <code>&lt;link&gt;</code> ou <code>&lt;style&gt;</code> par crainte d\'injections de code.',
    },
    {
      type: 'tip',
      html: 'Pour les newsletters ou les emails transactionnels (reçus, confirmations de compte), utiliser des tableaux et le <em>CSS inline</em> est la norme d\'or dans l\'industrie du marketing par email.',
    },
    {
      type: 'title',
      text: 'Comment cet outil fonctionne dans votre navigateur',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Analyse Sécurisée :</strong> Utilise l\'<code>API DOMParser</code> pour transformer temporairement le HTML d\'entrée en un DOM virtuel sécurisé dans votre navigateur.',
        '<strong>Simulation de Cascade :</strong> Analyse vos règles CSS, applique les poids de spécificité aux sélecteurs et mute les attributs <code>style</code> des éléments HTML sélectionnés.',
        '<strong>100% Hors ligne :</strong> Aucun octet de votre code ne quitte votre appareil. Confidentialité totale pour les modèles avec du contenu sensible.',
      ],
    },
  ],
};
