import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InspectorCertificadosSslUI } from '../ui';

const slug = 'inspecteur-certificats-ssl-tls';
const title = 'Inspecteur de Certificats SSL/TLS en Ligne Afficher les fichiers PEM et CRT';
const description = 'Analysez les fichiers de certificats SSL (.pem, .crt, .der) localement. Vérifiez les dates d\'expiration, les émetteurs, les sujets et les empreintes SHA-256 sans que vos données ne quittent votre navigateur.';

const faqData = [
  {
    question: 'Est-il sûr d\'analyser mon certificat SSL sur ce site web?',
    answer: 'Absolument. Cet utilitaire fonctionne 100% côté client. Lorsque vous faites glisser votre fichier .pem ou .crt, le navigateur lit les données localement et ne les envoie jamais à aucun serveur. Confidentialité totale.',
  },
  {
    question: 'Quels formats de certificats sont pris en charge?',
    answer: 'L\'outil supporte les formats les plus courants: PEM (codé en Base64 avec les en-têtes "BEGIN CERTIFICATE") et DER (format binaire), qui ont généralement les extensions .pem, .crt, .cer ou .der.',
  },
  {
    question: 'Puis-je voir la date d\'expiration d\'un fichier .crt?',
    answer: 'Oui, lorsque vous chargez le fichier, vous verrez immédiatement la section "État de validité" qui affiche la date d\'expiration exacte et si le certificat est toujours valide aujourd\'hui.',
  },
  {
    question: 'À quoi sert l\'émetteur du certificat?',
    answer: 'L\'émetteur (Issuer) indique quelle Autorité de Certification (CA) a validé l\'identité du site. Il est essentiel de savoir si le certificat sera reconnu par les navigateurs commerciaux.',
  },
  {
    question: 'Comment les empreintes SHA-256 sont-elles calculées?',
    answer: 'Elles sont calculées en appliquant un algorithme de hachage directement au contenu binaire du certificat. Ils servent à vérifier que le fichier n\'a pas été altéré et correspond à ce que le serveur attend.',
  },
];

const howToData = [
  { name: 'Trouvez votre fichier', text: 'Localisez le fichier avec l\'extension .pem, .crt, .cer ou .der sur votre ordinateur.' },
  { name: 'Glisser-déposer', text: 'Faites simplement glisser le fichier sur la zone pointillée ci-dessus.' },
  { name: 'Afficher les résultats', text: 'Instantanément, vous verrez qui a émis le certificat, pour qui il est, quand il expire et ses empreintes digitales.' },
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

const ui: InspectorCertificadosSslUI = {
  labelAnalyzeCertificate: 'Analyser le Certificat',
  dragDropText: 'Glissez votre fichier .pem, .crt ou .cer ici',
  dragDropSubtext: '(Traitement 100% local dans votre navigateur)',
  cardStatusTitle: 'État de Validité',
  cardSubjectTitle: 'Sujet (Propriétaire)',
  cardIssuerTitle: 'Émetteur (CA)',
  cardFingerprintsTitle: 'Empreintes',
  cardTechnicalTitle: 'Détails Techniques',
  labelValidityStatus: 'État:',
  labelExpiryDate: 'Expire le',
  labelIssueDate: 'Émis le',
  labelSha256: 'Empreinte SHA-256',
  labelSha1: 'Empreinte SHA-1',
  labelSignatureAlgorithm: 'Algorithme de Signature',
  labelVersion: 'Version X.509',
  labelSerialNumber: 'Numéro de Série',
  labelCommonName: 'Common Name',
  labelOrganization: 'Organization',
  labelOrgUnit: 'Org. Unit',
  labelLocality: 'Locality',
  labelState: 'State/Province',
  labelCountry: 'Country',
  labelEmail: 'Email',
  statusValid: 'Valide',
  statusExpired: 'Expiré',
  errorMessageInvalid: 'Fichier invalide.',
  supportedFormats: '.pem, .crt, .cer, .der',
};

export const content: ToolLocaleContent<InspectorCertificadosSslUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Questions Fréquemment Posées',
  faq: faqData,
  bibliographyTitle: 'Ressources Techniques sur les Certificats SSL/TLS',
  bibliography: [
    { name: 'RFC 5280: Internet X.509 Public Key Infrastructure Certificate and CRL Profile', url: 'https://datatracker.ietf.org/doc/html/rfc5280' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'Mozilla: Vue d\'ensemble du chiffrement SSL/TLS', url: 'https://developer.mozilla.org/fr/docs/Glossary/TLS' },
    { name: 'OpenSSL: Documentation du Format de Certificat X.509', url: 'https://www.openssl.org/docs/man1.1.1/man1/x509.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Qu\'est-ce qu\'un Inspecteur de Certificats SSL/TLS et pourquoi l\'avez-vous besoin?', level: 2 },
    {
      type: 'paragraph',
      html: 'Dans le monde du développement web et de la cybersécurité, les <strong>certificats SSL (Secure Sockets Layer) et TLS (Transport Layer Security)</strong> sont la pierre angulaire de la confiance. Un certificat numérique n\'est rien de plus qu\'un fichier qui relie une clé cryptographique aux données d\'une organisation ou d\'un domaine. Cependant, ces fichiers se présentent souvent sous la forme de formats binaires (.der) ou codés en Base64 (.pem, .crt) qui ne sont pas lisibles à première vue.',
    },
    {
      type: 'paragraph',
      html: 'Notre <strong>Inspecteur de Certificats SSL/TLS</strong> vous permet "d\'ouvrir" ces fichiers de manière visuelle et sécurisée. Contrairement aux outils qui interrogent un domaine public (comme le célèbre test SSL Labs), cet utilitaire fonctionne directement avec le fichier que vous avez sur votre appareil. C\'est essentiel lorsque vous configurez des serveurs Nginx, Apache ou chargez des certificats dans un Load Balancer AWS ou Google Cloud, et que vous devez vérifier que le fichier entre vos mains est correct avant de le télécharger.',
    },
    { type: 'title', text: 'Comment inspecter un fichier .pem ou .crt étape par étape', level: 2 },
    {
      type: 'paragraph',
      html: 'L\'analyse d\'un certificat avec notre outil est extrêmement simple et ne nécessite pas de connaissances en console (OpenSSL). Suivez ces étapes:',
    },
    {
      type: 'list',
      items: [
        '<strong>Trouvez votre fichier:</strong> Localisez le fichier avec l\'extension .pem, .crt, .cer ou .der sur votre ordinateur.',
        '<strong>Glisser-déposer:</strong> Faites simplement glisser le fichier sur la zone pointillée ci-dessus.',
        '<strong>Afficher les résultats:</strong> Instantanément, vous verrez qui a émis le certificat, pour qui il est, quand il expire et ses empreintes digitales.',
      ],
    },
    {
      type: 'tip',
      title: 'Confidentialité Complète',
      html: 'La partie la plus importante de ce processus est la <strong>confidentialité</strong>. Le fichier n\'est jamais téléchargé sur nos serveurs. Tout le parsing de la structure ASN.1 du certificat se fait dans la RAM de votre propre navigateur. Sécurité complète pour vos clés publiques.',
    },
    { type: 'title', text: 'Champs clés que vous verrez lors de l\'analyse de votre certificat', level: 2 },
    {
      type: 'paragraph',
      html: 'Lors de l\'analyse de votre certificat, nous décomposons les informations techniques les plus pertinentes afin que vous puissiez les vérifier en un coup d\'œil:',
    },
    {
      type: 'list',
      items: [
        '<strong>Sujet:</strong> Affiche les données du propriétaire, y compris le Common Name (CN), l\'organisation et l\'emplacement.',
        '<strong>Émetteur:</strong> Identifie l\'Autorité de Certification (CA) qui a signé le certificat (par exemple, Let\'s Encrypt, DigiCert).',
        '<strong>Période de validité:</strong> Affiche la date d\'émission exacte et la date d\'expiration critique.',
        '<strong>Empreintes:</strong> Les empreintes SHA-256 et SHA-1 servent à vérifier l\'intégrité du fichier.',
      ],
    },
    { type: 'title', text: 'Formats pris en charge: PEM, CRT, CER et DER', level: 2 },
    {
      type: 'paragraph',
      html: 'Il existe plusieurs formats de fichiers certificats et c\'est parfois déroutant. Notre outil est compatible avec les plus courants:',
    },
    {
      type: 'list',
      items: [
        '<strong>PEM (.pem, .crt, .cer):</strong> Le format le plus courant sous Linux et les serveurs web. Commence par la ligne <code>-----BEGIN CERTIFICATE-----</code>.',
        '<strong>DER (.der, .cer):</strong> Le format binaire. Largement utilisé dans les environnements Windows (Java, Active Directory) et est généralement plus difficile à lire sans outils spécialisés.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Même si votre fichier a une extension inhabituelle, si la structure interne est un certificat X.509 standard, notre moteur alimenté par <strong>node-forge</strong> sera capable de l\'interpréter sans problème.',
    },
    { type: 'title', text: 'Pourquoi utiliser cet outil au lieu de OpenSSL?', level: 2 },
    {
      type: 'paragraph',
      html: 'OpenSSL est le couteau suisse de la cryptographie, mais ses commandes sont difficiles à retenir. Pour afficher un certificat à partir de la console, vous devriez écrire:',
    },
    { type: 'code', text: 'openssl x509 -in certificado.crt -text -noout' },
    {
      type: 'paragraph',
      html: 'Notre outil offre des avantages clairs pour le flux de travail quotidien:',
    },
    {
      type: 'list',
      items: [
        '<strong>Vitesse:</strong> Pas besoin d\'ouvrir le terminal ou de mémoriser des drapeaux complexes.',
        '<strong>Visuel:</strong> Nous formatons les noms de champs (Locality, Organization) pour les rendre lisibles et non des codes courts comme "L" ou "O".',
        '<strong>Alertes de validité:</strong> Nous calculons automatiquement si le certificat est valide aujourd\'hui, vous évitant de vérifier manuellement la date actuelle par rapport à la date du certificat.',
        '<strong>Multiplateforme:</strong> Fonctionne sur tout système d\'exploitation avec un navigateur moderne, pas de dépendances à installer.',
      ],
    },
    { type: 'title', text: 'Sécurité et Confidentialité: Votre certificat ne quitte jamais votre RAM', level: 2 },
    {
      type: 'paragraph',
      html: 'En tant que développeur, je sais combien il est critique de gérer ce type d\'informations. Bien qu\'un certificat soit techniquement des <strong>informations publiques</strong> (envoyées à tout navigateur qui visite votre site web), c\'est une bonne pratique de ne pas télécharger des fichiers sur des serveurs externes inutilement.',
    },
    {
      type: 'paragraph',
      html: 'Cet utilitaire utilise JavaScript qui s\'exécute strictement sur le client. Lorsque vous glissez le fichier, nous en lisons le contenu et le traitons localement. Vous pouvez vérifier cela en déconnectant votre internet: l\'outil continuera à fonctionner exactement de la même manière.',
    },
    { type: 'title', text: 'Cas d\'utilisation courants pour l\'Inspecteur SSL', level: 2 },
    {
      type: 'paragraph',
      html: 'Quand le signet de cette page serait-il utile?',
    },
    {
      type: 'list',
      items: [
        '<strong>Débogage du serveur:</strong> Lorsque vous installez un certificat et que le site web continue à donner des erreurs, pour vérifier que vous n\'avez pas accidentellement chargé l\'ancien certificat.',
        '<strong>Vérification de la chaîne:</strong> Pour voir si un fichier contient le certificat final ou un certificat intermédiaire.',
        '<strong>Audit des actifs:</strong> Pour vérifier quelle Autorité de Certification a été utilisée dans un ancien projet.',
        '<strong>Intégrité des copies:</strong> Lors du déplacement de certificats entre serveurs, pour vous assurer que le fichier n\'est pas corrompu en comparant son empreinte SHA-256.',
      ],
    },
  ],
};
