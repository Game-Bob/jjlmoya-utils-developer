import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DuplicateCssRemoverUI } from '../ui';

const slug = 'suppression-css-duplique';
const title = 'Suppression de CSS Dupliqué en Ligne. Unifier et Nettoyer les Styles';
const description =
  'Outil gratuit pour nettoyer et purger le code CSS dupliqué. Unifie les sélecteurs redondants, respecte la cascade et réduit la taille de vos fichiers instantanément.';

const faqData = [
  {
    question: 'Que se passe-t-il lorsque des sélecteurs CSS sont dupliqués ?',
    answer:
      'Lorsque le même sélecteur apparaît plusieurs fois, le navigateur applique toutes les règles mais la dernière déclaration de chaque propriété écrase les précédentes. Cela génère des fichiers plus lourds que nécessaire sans aucun bénéfice réel sur le rendu visuel.',
  },
  {
    question: 'Des propriétés seront-elles perdues lors de la suppression des doublons ?',
    answer:
      'Non. L\'algorithme respecte strictement la cascade CSS : pour les propriétés en conflit sous le même sélecteur, il préserve toujours la dernière déclarée. Les propriétés uniques de chaque bloc sont combinées sous un sélecteur unifié.',
  },
  {
    question: 'Fonctionne-t-il avec du CSS minifié ou des commentaires ?',
    answer:
      'L\'outil supprime automatiquement les commentaires CSS avant le traitement et fonctionne correctement avec du code sur une seule ligne. Pour du CSS avec des imbrications avancées ou des at-rules complexes, il est recommandé de séparer d\'abord les blocs.',
  },
  {
    question: 'Mon CSS est-il envoyé à un serveur ?',
    answer:
      'Non. Tout le traitement se fait directement dans votre navigateur via JavaScript local. Aucune partie de votre CSS n\'est transmise à un serveur externe, garantissant la confidentialité totale de votre code.',
  },
];

const howToData = [
  {
    name: 'Collez votre CSS brut',
    text: 'Copiez le contenu de votre fichier CSS avec des sélecteurs répétés et collez-le dans le champ gauche "CSS Brut / Dupliqué".',
  },
  {
    name: 'Lancez le nettoyage',
    text: 'Cliquez sur le bouton "Nettoyer et Unifier le CSS". L\'outil analysera tous les sélecteurs, fusionnera les propriétés et supprimera les blocs redondants.',
  },
  {
    name: 'Vérifiez les statistiques et copiez',
    text: 'Consultez les économies en octets obtenues et copiez le CSS optimisé avec le bouton "Copier le Code" pour l\'utiliser directement dans votre projet.',
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

const ui: DuplicateCssRemoverUI = {
  labelInput: 'CSS Brut / Dupliqué',
  labelOutput: 'CSS Propre',
  placeholderInput: '.btn { padding: 10px; color: red; }\n.btn { margin: 5px; color: blue; }',
  placeholderOutput: 'Le CSS optimisé et unifié apparaîtra ici...',
  btnClean: 'Nettoyer et Unifier le CSS',
  btnCopy: 'Copier le Code',
  btnCopied: 'Copié !',
  statBytesOriginal: 'Octets Originaux',
  statBytesClean: 'Octets Propres',
  statSaving: 'Économie',
};

export const content: ToolLocaleContent<DuplicateCssRemoverUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références et Documentation',
  bibliography: [
    {
      name: 'Web Vitals: Impact du CSS sur le Render-Blocking et FCP',
      url: 'https://web.dev/articles/render-blocking-resources',
    },
    {
      name: 'Spécification W3C: Cascade CSS et Héritage',
      url: 'https://www.w3.org/TR/css-cascade-4/',
    },
    {
      name: 'Clean CSS: Bibliothèque et méthodologies pour la minification CSS',
      url: 'https://github.com/clean-css/clean-css',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Pourquoi le code CSS se duplique-t-il ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lors de la maintenance de projets web à long terme ou lors du travail avec du code hérité (<em>legacy code</em>), il est extrêmement courant que plusieurs développeurs écrivent des règles CSS qui se chevauchent. Souvent, par peur de casser un design existant, un développeur préfère ajouter une nouvelle règle redondante à la fin du document plutôt que de modifier ou refactoriser l\'originale.',
    },
    {
      type: 'paragraph',
      html: 'Le résultat est un fichier inefficace avec des dizaines de sélecteurs déclarés de manière répétée, nuisant à la lisibilité et augmentant considérablement le poids de téléchargement de votre page web.',
    },
    {
      type: 'title',
      text: 'L\'impact caché sur les performances web (Web Vitals)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les fichiers de style bloquent le rendu naturel du navigateur (ressource <strong>Render-Blocking</strong>). Tant que votre navigateur n\'a pas téléchargé et construit le CSSOM complet, votre écran reste blanc.',
    },
    {
      type: 'tip',
      html: 'Purger les styles redondants n\'est pas une simple question d\'ordre dans le code ; c\'est une amélioration mesurable et immédiate des métriques vitales comme le <strong>First Contentful Paint (FCP)</strong>.',
    },
    {
      type: 'title',
      text: 'Comment nous unifions les règles dupliquées',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cet utilitaire agit comme un assembleur intelligent. Au lieu de se limiter à compresser les espaces (comme le ferait un minificateur traditionnel), il analyse récursivement le texte à la recherche de motifs de sélecteurs identiques.',
    },
    {
      type: 'list',
      items: [
        'Imaginez avoir la règle <code>.box { color: red; }</code> et cent lignes plus bas un <code>.box { padding: 10px; color: blue; }</code>. L\'outil unifiera les deux blocs sous le même sélecteur <code>.box</code> en combinant le padding.',
        '<strong>Préservation de la Cascade CSS :</strong> En cas de conflits directs, l\'algorithme préserve strictement la dernière propriété déclarée. Cela garantit que votre mise en page originale ne se casse pas lors de la purge du document.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Fini d\'envoyer des kilooctets de texte mort aux téléphones mobiles de vos utilisateurs. Unifiez votre code en millisecondes entièrement hors ligne depuis votre navigateur.',
    },
  ],
};
