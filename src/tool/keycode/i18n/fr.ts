import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeycodeUI } from '../ui';

const slug = 'visualiseur-codes-clavier';
const title = 'Visualiseur de codes clavier en ligne. KeyCode Inspector';
const description =
  'Outil en ligne gratuit pour voir en temps réel le event.key, event.code, event.which et la location de n\'importe quelle touche de clavier. Génère des extraits de code JavaScript prêts à l\'emploi.';

const faqData = [
  {
    question: 'Quelle est la différence entre event.key et event.code ?',
    answer:
      'event.code représente la touche physique du clavier, indépendamment de la langue configurée. event.key représente le caractère généré, qui peut changer si vous appuyez sur Shift ou utilisez une autre langue. Utilisez code pour les contrôles de jeu ; utilisez key pour la saisie de texte et les raccourcis sémantiques.',
  },
  {
    question: 'Qu\'est-ce que event.which et pourquoi est-il déprécié ?',
    answer:
      'event.which est une propriété héritée qui renvoie un code ASCII numérique de la touche. Elle est marquée comme dépréciée dans les standards modernes car event.key et event.code la remplacent avec des informations plus précises et lisibles. Elle est affichée dans cet outil à des fins éducatives.',
  },
  {
    question: 'Que signifie la propriété location ?',
    answer:
      'La propriété location indique où la touche est physiquement située sur le clavier : Standard (position normale), Left (modificateur gauche), Right (modificateur droit) ou Numpad (pavé numérique). Elle est utile pour distinguer la touche CTRL gauche de la droite, par exemple.',
  },
  {
    question: 'Fonctionne-t-il avec les claviers internationaux et les dispositions non-QWERTY ?',
    answer:
      'Oui. L\'outil affiche exactement ce que le navigateur signale pour votre configuration de clavier. event.code renverra toujours le nom QWERTY de la position physique, tandis que event.key affichera le caractère réel selon votre langue.',
  },
];

const howToData = [
  {
    name: 'Appuyer sur n\'importe quelle touche',
    text: 'Avec le focus sur la page, appuyez sur n\'importe quelle touche du clavier pour voir instantanément toutes les informations de l\'événement.',
  },
  {
    name: 'Copier les valeurs individuelles',
    text: 'Cliquez sur le bouton de copie à côté de chaque propriété (event.key, event.code, etc.) pour copier cette valeur spécifique dans le presse-papiers.',
  },
  {
    name: 'Utiliser les extraits de code',
    text: 'Dans la section "Extraits rapides", vous trouverez des blocs de code JavaScript prêts à coller directement dans votre projet.',
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

const ui: KeycodeUI = {
  promptTitle: 'Appuyez sur une touche',
  promptSubtitle: 'N\'importe quelle touche de votre clavier pour voir son code',
  snippetsTitle: 'Extraits rapides',
  btnCopy: 'Copier',
  locationStandard: 'Standard',
  locationLeft: 'Left',
  locationRight: 'Right',
  locationNumpad: 'Numpad',
};

export const content: ToolLocaleContent<KeycodeUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Questions fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références et standards',
  bibliography: [
    {
      name: 'MDN Web Docs – KeyboardEvent',
      url: 'https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent',
    },
    {
      name: 'Spécification UI Events (W3C) – KeyboardEvent',
      url: 'https://www.w3.org/TR/uievents/#events-keyboardevents',
    },
    {
      name: 'MDN – Valeurs de KeyboardEvent.code',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Comprendre les événements clavier en JavaScript',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lorsqu\'un utilisateur appuie sur une touche, le navigateur déclenche trois événements : <code>keydown</code>, <code>keypress</code> et <code>keyup</code>. Chacun expose des propriétés avec des informations sur la touche pressée, mais elles ne sont pas toutes équivalentes ni recommandées.',
    },
    {
      type: 'title',
      text: 'Propriétés clés de l\'événement',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'event.code — La touche physique',
      html: '<p>Retourne l\'identifiant de la <strong>position physique</strong> de la touche sur le clavier, en utilisant la nomenclature QWERTY. Par exemple, la touche "A" sur un clavier AZERTY retourne <code>KeyQ</code>. Idéal pour les contrôles de jeu où la position importe, pas le caractère.</p>',
    },
    {
      type: 'card',
      title: 'event.key — Le caractère généré',
      html: '<p>Retourne la <strong>valeur du caractère</strong> généré selon la langue et les modificateurs actifs. Appuyer sur Shift+A retourne <code>"A"</code> ; sans Shift retourne <code>"a"</code>. Pour les touches spéciales, retourne des noms comme <code>"Enter"</code>, <code>"Escape"</code>, <code>"ArrowUp"</code>.</p>',
    },
    {
      type: 'title',
      text: 'Quand utiliser chaque propriété',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Utilisez <code>event.code</code> pour les contrôles de jeu (WASD indépendamment de la langue) et <code>event.key</code> pour détecter des caractères spécifiques ou des raccourcis sémantiques comme <code>Ctrl+C</code>.',
    },
    {
      type: 'paragraph',
      html: 'Les propriétés <code>event.which</code> et <code>event.keyCode</code> sont officiellement <strong>dépréciées</strong> selon le standard W3C. Bien que les navigateurs modernes continuent de les supporter par compatibilité, elles ne doivent pas être utilisées dans du nouveau code.',
    },
  ],
};

