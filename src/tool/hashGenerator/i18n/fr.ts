import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashGeneratorUI } from '../ui';

const slug = 'generateur-hashes';
const title = 'G\u00e9n\u00e9rateur de Hashes de S\u00e9curit\u00e9 en Ligne';
const description = 'Calculez des hashes MD5, SHA-1, SHA-256 et SHA-512 instantan\u00e9ment. Outil de s\u00e9curit\u00e9 gratuit, priv\u00e9 et ultra-rapide pour les d\u00e9veloppeurs. 100% C\u00f4t\u00e9 Client.';

const faqData = [
  {
    question: "Qu'est-ce qu'un hash et \u00e0 quoi sert-il?",
    answer: "Un hash est une empreinte num\u00e9rique unique d'un texte ou d'un fichier. Il sert \u00e0 v\u00e9rifier que les donn\u00e9es n'ont pas \u00e9t\u00e9 alt\u00e9r\u00e9es et \u00e0 stocker les mots de passe de mani\u00e8re s\u00e9curis\u00e9e.",
  },
  {
    question: 'Est-il s\u00fbr d\'utiliser ce g\u00e9n\u00e9rateur en ligne?',
    answer: 'Oui, c\'est totalement s\u00fbr. Contrairement \u00e0 d\'autres sites, nous traitons le hash directement dans votre navigateur. Vos donn\u00e9es ne sont jamais envoy\u00e9es \u00e0 aucun serveur.',
  },
  {
    question: 'Quel algorithme de hash devrais-je choisir?',
    answer: 'Pour la s\u00e9curit\u00e9 moderne et le stockage de cl\u00e9s, nous recommandons SHA-256 ou SHA-512. MD5 et SHA-1 ne doivent \u00eatre utilis\u00e9s que pour la compatibilit\u00e9 avec les syst\u00e8mes h\u00e9rit\u00e9s.',
  },
  {
    question: "Que signifie ajouter un 'Salt'?",
    answer: "Un Salt est une cha\u00eene suppl\u00e9mentaire m\u00e9lang\u00e9e \u00e0 votre texte pour rendre le hash unique et beaucoup plus difficile \u00e0 d\u00e9chiffrer par des attaques par dictionnaire.",
  },
];

const howToData = [
  { name: 'Saisir le texte', text: 'Tapez ou collez le texte que vous souhaitez hacher dans le champ de saisie.' },
  { name: 'Configurer la s\u00e9curit\u00e9', text: 'Ajoutez un Salt optionnel ou augmentez les tours de traitement pour plus de robustesse.' },
  { name: 'Obtenir les r\u00e9sultats', text: 'Les diff\u00e9rents hashes (MD5, SHA etc.) sont calcul\u00e9s en temps r\u00e9el pendant que vous tapez.' },
  { name: 'Copier le hash', text: "Cliquez sur l'ic\u00f4ne de copie \u00e0 c\u00f4t\u00e9 de chaque algorithme pour le sauvegarder dans votre presse-papiers." },
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

const ui: HashGeneratorUI = {
  labelInput: 'Texte d\'entr\u00e9e',
  placeholderInput: 'Tapez ou collez le texte ici pour calculer ses hashes...',
  labelSalt: 'Salt (Optionnel)',
  placeholderSalt: 'Graine de s\u00e9curit\u00e9...',
  labelRounds: 'Tours (Stretch)',
  copyMd5: 'Copier MD5',
  copySha1: 'Copier SHA-1',
  copySha256: 'Copier SHA-256',
  copySha512: 'Copier SHA-512',
};

export const content: ToolLocaleContent<HashGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Questions Fr\u00e9quentes',
  faq: faqData,
  bibliographyTitle: 'Ressources Techniques sur le Hachage',
  bibliography: [
    { name: 'MDN Web Docs: SubtleCrypto.digest() API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'IETF: The MD5 Message-Digest Algorithm (RFC 1321)', url: 'https://datatracker.ietf.org/doc/html/rfc1321' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: "Qu'est-ce qu'un Hash Cryptographique?", level: 2 },
    {
      type: 'paragraph',
      html: 'Un <strong>hash cryptographique</strong> est une fonction math\u00e9matique qui transforme n\'importe quelle quantit\u00e9 de donn\u00e9es en une cha\u00eene de longueur fixe. La m\u00eame entr\u00e9e produit toujours le m\u00eame r\u00e9sultat, mais tout changement minimal dans l\'entr\u00e9e g\u00e9n\u00e8re un hash compl\u00e8tement diff\u00e9rent.',
    },
    { type: 'title', text: 'Algorithmes disponibles', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>MD5 (128 bits):</strong> Rapide et largement support\u00e9. Consid\u00e9r\u00e9 non s\u00e9curis\u00e9 pour les mots de passe mais utile pour v\u00e9rifier l\'int\u00e9grit\u00e9 des fichiers dans des environnements non critiques.',
        '<strong>SHA-1 (160 bits):</strong> D\u00e9pr\u00e9ci\u00e9 pour les usages critiques de s\u00e9curit\u00e9 depuis 2017. Encore pr\u00e9sent dans les syst\u00e8mes h\u00e9rit\u00e9s.',
        '<strong>SHA-256 (256 bits):</strong> La norme actuelle pour la plupart des applications. Utilis\u00e9 dans Bitcoin, TLS et la signature de code.',
        '<strong>SHA-512 (512 bits):</strong> Variante plus longue de SHA-2, id\u00e9ale lorsqu\'une r\u00e9sistance maximale aux collisions est requise.',
      ],
    },
    { type: 'title', text: 'Salt et Key Stretching', level: 3 },
    {
      type: 'paragraph',
      html: 'Le <strong>Salt</strong> est une cha\u00eene al\u00e9atoire ajout\u00e9e au texte avant de le hacher, garantissant que deux entr\u00e9es identiques produisent des hashes diff\u00e9rents. Le <strong>Key Stretching</strong> (tours) applique la fonction de hachage plusieurs fois pour rendre les attaques par force brute plus difficiles.',
    },
    { type: 'title', text: 'Confidentialit\u00e9 totale: 100% C\u00f4t\u00e9 Client', level: 3 },
    {
      type: 'paragraph',
      html: 'Cet outil utilise l\'<strong>API Web Crypto</strong> du navigateur pour SHA et une impl\u00e9mentation TypeScript pure pour MD5. Tout le traitement se fait localement: vos donn\u00e9es ne quittent jamais votre appareil.',
    },
  ],
};
