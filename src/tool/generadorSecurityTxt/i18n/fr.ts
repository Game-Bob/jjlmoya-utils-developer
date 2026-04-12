import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GeneradorSecurityTxtUI } from '../ui';

const slug = 'generateur-security-txt-rfc-9116';
const title = 'Générateur de Security.txt RFC 9116';
const description = 'Créez votre fichier security.txt professionnel pour faciliter la déclaration des vulnérabilités et respecter les normes de sécurité web internationales.';

const faqData = [
  {
    question: 'Qu\'est-ce que le fichier security.txt?',
    answer: 'C\'est une norme (RFC 9116) qui permet aux sites web de définir comment les chercheurs en sécurité doivent les contacter pour signaler les vulnérabilités de manière responsable.',
  },
  {
    question: 'Où doit être placé le fichier security.txt?',
    answer: 'L\'emplacement standard recommandé est dans le dossier /.well-known/ de votre domaine, ce qui donne l\'URL https://exemple.com/.well-known/security.txt.',
  },
  {
    question: 'Pourquoi la date d\'expiration est-elle obligatoire?',
    answer: 'Pour s\'assurer que les informations de contact ne deviennent pas obsolètes. Si le fichier ne dispose pas d\'une date d\'expiration valide, les chercheurs pourraient ne pas faire confiance aux canaux de communication.',
  },
  {
    question: 'Quels champs sont obligatoires dans un security.txt?',
    answer: 'Selon le RFC 9116, les champs obligatoires sont "Contact" (avec une adresse e-mail ou une URL) et "Expires" (avec une date future au format ISO 8601).',
  },
];

const howToData = [
  { name: 'Remplissez les champs', text: 'Entrez votre adresse e-mail ou votre URL de contact et sélectionnez une date d\'expiration.' },
  { name: 'Ajoutez des champs optionnels', text: 'Incluez des informations supplémentaires telles que votre clé PGP, votre politique de sécurité ou votre forum d\'emploi.' },
  { name: 'Téléchargez ou copiez le fichier', text: 'Cliquez sur "Télécharger .txt" ou copiez le contenu et enregistrez-le sous security.txt.' },
  { name: 'Téléchargez sur le serveur', text: 'Placez le fichier dans le dossier /.well-known/ de votre domaine.' },
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

const ui: GeneradorSecurityTxtUI = {
  titleBasicFields: 'Champs Obligatoires',
  labelContact: 'Contact (E-mail ou URL)',
  placeholderContact: 'mailto:securite@exemple.com ou https://exemple.com/contact',
  contactTip: 'Adresse où envoyer les rapports de vulnérabilité.',
  labelExpires: 'Date d\'Expiration',
  expiresTip: 'Ne doit pas dépasser un an à l\'avenir.',
  titleOptionalFields: 'Champs Optionnels',
  labelEncryption: 'Clé Publique',
  placeholderEncryption: 'https://exemple.com/pgp-key.txt',
  encryptionTip: 'Lien vers votre clé PGP pour les rapports chiffrés.',
  labelPolicy: 'Politique de Sécurité',
  placeholderPolicy: 'https://exemple.com/securite/politique/',
  policyTip: 'Page détaillant comment gérer les vulnérabilités.',
  labelAcknowledgments: 'Remerciements',
  placeholderAcknowledgments: 'https://exemple.com/securite/hall-of-fame/',
  acknowledgmentsTip: 'Page remerciant les chercheurs en sécurité.',
  labelHiring: 'Offres d\'Emploi',
  placeholderHiring: 'https://exemple.com/emplois',
  hiringTip: 'Lien vers vos offres d\'emploi en cybersécurité.',
  resultTitle: 'Aperçu (security.txt)',
  btnCopy: 'Copier le Code',
  btnDownload: 'Télécharger .txt',
  copiedMessage: 'Copié',
  generatingMessage: 'Génération du fichier security.txt...',
  comment: 'Généré',
};

export const content: ToolLocaleContent<GeneradorSecurityTxtUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Questions Fréquemment Posées',
  faq: faqData,
  bibliographyTitle: 'Ressources Techniques sur Security.txt',
  bibliography: [
    { name: 'RFC 9116: A File Format to Aid in Security Vulnerability Disclosure', url: 'https://datatracker.ietf.org/doc/html/rfc9116' },
    { name: 'Site Officiel de Security.txt', url: 'https://securitytxt.org/' },
    { name: 'OWASP: Feuille de Triche sur la Divulgation de Vulnérabilité', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Qu\'est-ce qu\'un fichier Security.txt et pourquoi devez-vous en générer un?', level: 2 },
    {
      type: 'paragraph',
      html: 'Dans le paysage actuel de la cybersécurité, la transparence et la communication sont essentielles. Si vous êtes administrateur système, développeur web ou propriétaire d\'une entreprise numérique, vous êtes probablement déjà familiarisé avec les fichiers texte qui aident les machines à comprendre votre site web, comme <code>robots.txt</code> ou <code>ads.txt</code>. Cependant, il existe une norme moins connue mais vitale pour l\'intégrité de votre plateforme: le <strong>Security.txt</strong>, défini par <strong>RFC 9116</strong>.',
    },
    {
      type: 'paragraph',
      html: 'L\'objectif de <strong>générer un fichier security.txt</strong> est de fournir aux chercheurs en sécurité une méthode normalisée pour contacter les responsables de votre site web lorsqu\'ils découvrent une vulnérabilité. Sans ce fichier, un "pirate éthique" qui découvre un défaut dans votre système pourrait ne pas savoir à qui le signaler, ce qui entraîne souvent la perte de l\'information, sa publication sans préavis, ou son exploitation par des acteurs malveillants.',
    },
    { type: 'title', text: 'Comment créer et installer le fichier Security.txt en suivant RFC 9116', level: 2 },
    {
      type: 'paragraph',
      html: 'La <strong>norme de contact des chercheurs en sécurité</strong> stipule que ce fichier doit résider dans un endroit spécifique de votre serveur: le dossier <code>/.well-known/</code>. Par conséquent, le chemin final est généralement <code>https://votredomaine.com/.well-known/security.txt</code>. Bien qu\'il soit également autorisé de le placer à la racine (<code>/security.txt</code>), la première option est préférée par les outils de numérisation automatique.',
    },
    { type: 'title', text: 'Les champs obligatoires que vous ne pouvez pas manquer', level: 3 },
    {
      type: 'paragraph',
      html: 'Lorsque <strong>vous obtenez votre code security.txt</strong>, vous devez vous assurer qu\'il comprend au moins deux éléments critiques:',
    },
    {
      type: 'list',
      items: [
        '<strong>Contact:</strong> L\'adresse e-mail ou l\'URL du formulaire où les rapports doivent être envoyés. Doit commencer par <code>mailto:</code> ou <code>https://</code>.',
        '<strong>Expires:</strong> Une date au format ISO 8601 qui indique quand les informations du fichier ne sont plus valides. Il est recommandé de ne pas fixer une date supérieure à un an.',
      ],
    },
    { type: 'code', text: 'Contact: mailto:securite@votreentreprise.fr\nExpires: 2025-12-31T23:59:59.000Z' },
    { type: 'title', text: 'Champs optionnels pour une sécurité avancée', level: 3 },
    {
      type: 'paragraph',
      html: 'Pour les sites recherchant une <strong>protection de site web</strong> plus robuste, la norme offre des champs supplémentaires:',
    },
    {
      type: 'list',
      items: [
        '<strong>Encryption:</strong> Un lien vers votre clé publique PGP pour que les chercheurs puissent vous envoyer des informations chiffrées et sécurisées.',
        '<strong>Policy:</strong> Un lien vers votre page de politique de sécurité où vous expliquez le processus de divulgation responsable.',
        '<strong>Acknowledgments:</strong> Un lien vers votre "Hall of Fame" ou mur d\'appréciation pour les chercheurs.',
        '<strong>Hiring:</strong> Un lien vers vos offres d\'emploi en cybersécurité.',
      ],
    },
    { type: 'title', text: 'Avantages d\'utiliser notre générateur Security.txt gratuit', level: 2 },
    {
      type: 'paragraph',
      html: 'Beaucoup de gens se demandent <strong>comment obtenir le contact de sécurité</strong> d\'un site web rapidement. En utilisant notre outil, vous vous assurez de respecter strictement le format RFC 9116 sans avoir à lire des documents techniques complexes.',
    },
    {
      type: 'paragraph',
      html: 'L\'utilisation d\'un générateur vous épargne des erreurs de syntaxe courantes. Par exemple, oublier le préfixe <code>mailto:</code> ou mal formater le fuseau horaire dans la date d\'expiration peut amener les outils automatisés des chercheurs à ignorer votre fichier.',
    },
    { type: 'title', text: 'Impact sur le positionnement et la réputation web', level: 3 },
    {
      type: 'paragraph',
      html: 'Bien que le fichier <code>security.txt</code> ne soit pas un facteur de classement direct dans Google comme la vitesse de la page ou HTTPS, il a un impact indirect. Un site web qui gère bien ses vulnérabilités évite les piratages bruyants (défacement, injection de spam) qui ruinent le SEO en quelques heures. De plus, de nombreuses plateformes de notation de sécurité d\'entreprise (telles que SecurityScorecard ou BitSight) accordent des points supplémentaires aux domaines qui implémentent cette norme.',
    },
    { type: 'title', text: 'Conclusion: Un pas simple pour un web plus sûr', level: 2 },
    {
      type: 'paragraph',
      html: 'En résumé, <strong>télécharger security.txt</strong> et le télécharger sur votre serveur est l\'une des tâches de maintenance de sécurité les plus rapides et les plus efficaces que vous puissiez accomplir aujourd\'hui. Vous facilitez le travail des "bons gars", dissuadez les curieux et montrez au monde que vous prenez au sérieux la confidentialité et les données de vos utilisateurs.',
    },
    {
      type: 'paragraph',
      html: 'N\'attendez pas une violation de sécurité pour regretter de ne pas avoir fourni un canal de communication. Utilisez dès maintenant notre <strong>générateur de security.txt en ligne</strong> et maintenez votre écosystème numérique sous contrôle.',
    },
  ],
};
