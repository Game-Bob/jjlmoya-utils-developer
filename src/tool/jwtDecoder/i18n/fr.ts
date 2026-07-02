import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JwtDecoderUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'decodeur-jwt-parser-et-inspecteur-de-claims';
const title = 'Décodeur JWT, Parser et Inspecteur de Claims';
const description = 'Collez un JSON Web Token, décodez son en-tête et son payload instantanément, inspectez les claims enregistrés, repérez les tokens expirés et copiez du JSON propre pour déboguer les flux d\'authentification.';

const howTo = [
  {
    name: 'Collez le JWT',
    text: 'Copiez un token depuis un en-tête Authorization, un cookie, une entrée de log ou un fournisseur d\'identité et collez-le dans le champ de saisie.',
  },
  {
    name: 'Lisez l\'en-tête et le payload décodés',
    text: 'L\'outil divise le token en en-tête, payload et signature, puis affiche les segments JSON dans des panneaux séparés pour une inspection rapide.',
  },
  {
    name: 'Vérifiez les claims importants',
    text: 'Examinez l\'algorithme, l\'émetteur, l\'audience, le sujet, la date d\'émission, la date de début de validité et la date d\'expiration sans convertir manuellement les timestamps Unix.',
  },
  {
    name: 'Copiez les données dont vous avez besoin',
    text: 'Copiez une section décodée ou la sortie décodée complète lorsque vous devez partager un instantané de débogage assaini avec votre équipe.',
  },
];

const faq = [
  {
    question: 'Décoder un JWT prouve-t-il que le token est valide ?',
    answer: 'Non. Le décodage révèle uniquement l\'en-tête et le payload encodés en base64url. Un token n\'est digne de confiance qu\'après que la signature, l\'émetteur, l\'audience, l\'expiration et les claims associés ont été validés par l\'application ou le fournisseur d\'identité.',
  },
  {
    question: 'Puis-je utiliser ce décodeur JWT pour les access tokens et les ID tokens ?',
    answer: 'Oui. Le décodeur est utile pour inspecter les access tokens OAuth, les ID tokens OpenID Connect, les tokens de session et les tokens service à service, tant qu\'ils utilisent le format JWT standard en trois parties.',
  },
  {
    question: 'Pourquoi le panneau de signature ne vérifie-t-il pas le token ?',
    answer: 'La vérification JWT nécessite le secret correct, la clé publique ou la configuration JWKS. Cet outil se concentre intentionnellement sur le décodage et l\'inspection afin que les développeurs puissent voir le contenu du token sans prétendre qu\'une chaîne de signature visible constitue une preuve de validité.',
  },
  {
    question: 'Que dois-je vérifier en premier lors du débogage d\'un JWT ?',
    answer: 'Commencez par exp, nbf, iss, aud et alg. La plupart des problèmes réels en production proviennent de tokens expirés, de décalage d\'horloge, de valeurs d\'audience incorrectes, d\'URL d\'émetteur inattendues ou d\'hypothèses d\'algorithme non sécurisées.',
  },
];

const ui: JwtDecoderUI = {
  tokenLabel: 'Token JWT',
  tokenPlaceholder: 'Collez un JWT ici: en-tête.payload.signature',
  sampleButton: 'Charger l\'exemple',
  clearButton: 'Effacer',
  statusWaiting: 'Collez un token pour décoder son en-tête JSON, son payload et ses claims.',
  statusValid: 'JWT décodé avec succès.',
  statusInvalid: 'Cela ne ressemble pas à un JWT valide en trois parties.',
  statusExpired: 'JWT décodé, mais le claim exp est déjà expiré.',
  statusUnsigned: 'JWT décodé, mais il n\'est pas signé ou utilise l\'algorithme none.',
  headerTitle: 'En-tête',
  payloadTitle: 'Payload',
  signatureTitle: 'Signature',
  claimsTitle: 'Claims enregistrés',
  copyHeader: 'Copier l\'en-tête décodé',
  copyPayload: 'Copier le payload décodé',
  copySignature: 'Copier la signature',
  copyAll: 'Tout copier',
  copiedLabel: 'Copié',
  invalidTokenTitle: 'JWT invalide',
  invalidTokenBody: 'Vérifiez que le token comporte trois segments base64url séparés par des points.',
  invalidSegmentError: 'Vérifiez que le token comporte trois segments base64url séparés par des points.',
  invalidDecodeError: 'L\'en-tête ou le payload n\'a pas pu être décodé en JSON valide.',
  emptyJson: '{}',
  signaturePresent: 'Le segment de signature est présent ; vérifiez-le dans votre couche d\'authentification avec la clé appropriée.',
  signatureMissing: 'Aucun segment de signature',
  algorithmLabel: 'Algorithme',
  typeLabel: 'Type',
  issuerLabel: 'Émetteur',
  subjectLabel: 'Sujet',
  audienceLabel: 'Audience',
  issuedAtLabel: 'Émis le',
  notBeforeLabel: 'Valide à partir du',
  expiresAtLabel: 'Expiré le',
  claimMissing: 'Non présent',
  privacyNote: 'Le décodage s\'exécute dans votre navigateur. Ne collez pas de secrets de production dans un outil, sauf si votre politique de sécurité l\'autorise.',
  sampleToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnYW1lYm9iLXVzZXItNDIiLCJuYW1lIjoiR2FtZUJvYiBEZXZlbG9wZXIiLCJpc3MiOiJodHRwczovL3d3dy5nYW1lYm9iLmRldiIsImF1ZCI6ImRldmVsb3Blci10b29scyIsImlhdCI6MTcxNzIwMDAwMCwibmJmIjoxNzE3MjAwMDAwLCJleHAiOjE4OTM0NTYwMDAsInJvbGUiOiJhZG1pbiJ9.demo-signature',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<JwtDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'FAQ du décodeur JWT',
  faq,
  bibliographyTitle: 'Spécifications JWT et références de sécurité',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Décodez les JWT sans perdre le contexte de sécurité',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un JSON Web Token semble compact, mais il contient souvent le détail exact qui explique un échec d\'authentification: l\'algorithme de signature, l\'émetteur, l\'audience, le sujet, la date d\'émission, la date de début de validité, l\'expiration et les claims d\'autorisation spécifiques à l\'application. Ce <strong>décodeur JWT, parser et inspecteur de claims</strong> transforme les trois segments du token en JSON lisible pour que vous puissiez déboguer les flux d\'authentification plus rapidement.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Décodé ne signifie pas digne de confiance',
      html: 'N\'importe qui peut décoder un JWT en base64url. La confiance ne commence qu\'après que votre application a vérifié la signature avec le secret, la clé publique ou le JWKS appropriés, puis validé l\'émetteur, l\'audience, l\'expiration et tout claim spécifique au domaine. Utilisez cet outil pour inspecter les données, pas pour accepter un token comme authentique.',
    },
    {
      type: 'title',
      text: 'Ce que chaque segment JWT vous dit',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Segment', 'Contenu typique', 'Valeur de débogage'],
      rows: [
        ['En-tête', 'Algorithme, type de token et ID de clé optionnel', 'Indique si le token attend HS256, RS256, ES256 ou une autre stratégie de vérification.'],
        ['Payload', 'Claims enregistrés et claims d\'application', 'Révèle l\'identité, le tenant, les scopes, les rôles, l\'expiration et les décalages d\'audience.'],
        ['Signature', 'Octets de signature cryptographique encodés en base64url', 'Confirme qu\'un segment de signature existe, mais doit être vérifié avec la bonne clé ailleurs.'],
      ],
    },
    {
      type: 'title',
      text: 'Claims qui expliquent généralement les échecs d\'authentification',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>exp:</strong> si le token a expiré, la logique de renouvellement ou les paramètres d\'horloge peuvent être incorrects.',
        '<strong>nbf:</strong> si le token n\'est pas encore actif, les horloges du serveur et du fournisseur d\'identité peuvent être désynchronisées.',
        '<strong>iss:</strong> si l\'URL de l\'émetteur diffère de la configuration, le token peut provenir d\'un mauvais tenant ou environnement.',
        '<strong>aud:</strong> si l\'audience ne correspond pas à l\'identifiant de l\'API, le token a été émis pour une autre ressource.',
        '<strong>alg:</strong> si l\'algorithme est inattendu, votre vérificateur peut rejeter le token ou exposer une erreur de configuration dangereuse.',
      ],
    },
    {
      type: 'title',
      text: 'Cas d\'utilisation d\'un parser JWT pendant le développement',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Débogage frontend',
          description: 'Inspectez les ID tokens et access tokens reçus après la connexion pour confirmer les scopes, les rôles et les claims de profil.',
          icon: 'mdi:monitor-dashboard',
          points: ['Vérifiez les claims de profil', 'Confirmez les scopes et rôles', 'Comparez les environnements de connexion'],
        },
        {
          title: 'QA d\'API backend',
          description: 'Comparez les valeurs attendues de l\'émetteur et de l\'audience avec le token réellement envoyé dans un en-tête Authorization.',
          icon: 'mdi:api',
          highlight: true,
          points: ['Validez la forme de l\'audience', 'Repérez les décalages d\'émetteur', 'Inspectez les bearer tokens'],
        },
        {
          title: 'Configuration du fournisseur d\'identité',
          description: 'Vérifiez si les claims d\'Auth0, Azure AD, Cognito, Keycloak ou d\'un fournisseur personnalisé sont structurés comme votre application l\'attend.',
          icon: 'mdi:account-key',
          points: ['Examinez les données du tenant', 'Vérifiez les claims personnalisés', 'Comparez les mappings du fournisseur'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Erreurs JWT courantes que cet inspecteur rend évidentes',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Vérifications rapides contre décisions de confiance',
      items: [
        {
          pro: 'Voyez les tokens mal formés immédiatement.',
          con: 'Il ne peut pas connaître votre audience ou émetteur attendu.',
        },
        {
          pro: 'Convertissez les claims de timestamp Unix en dates lisibles.',
          con: 'Il ne peut pas vérifier une signature sans le matériel de clé réel.',
        },
        {
          pro: 'Repérez les valeurs manquantes d\'émetteur, d\'audience, de sujet ou de type.',
          con: 'Il ne peut pas prouver que les scopes et les rôles sont sûrs pour votre application.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Flux de travail recommandé',
      items: [
        'Décodez le token pour comprendre ce que le client ou l\'API a réellement reçu.',
        'Vérifiez exp, nbf, iss, aud, sub et alg avant de poursuivre la logique applicative.',
        'Vérifiez les signatures et les décisions de confiance uniquement dans votre couche d\'authentification.',
        'Évitez de partager des JWT de production sensibles dans les tickets, les logs ou les captures d\'écran.',
      ],
    },
  ],
};
