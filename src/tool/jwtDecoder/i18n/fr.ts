import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JwtDecoderUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'decodeur-jwt-parser-et-inspecteur-de-claims';
const title = 'Decodeur JWT, Parser et Inspecteur de Claims';
const description = 'Collez un JSON Web Token, decodez son en-tete et son payload instantanement, inspectez les claims enregistres, reperez les tokens expires et copiez du JSON propre pour debugger les flux d\'authentification.';

const howTo = [
  {
    name: 'Collez le JWT',
    text: 'Copiez un token depuis un en-tete Authorization, un cookie, une entree de log ou un fournisseur d\'identite et collez-le dans le champ de saisie.',
  },
  {
    name: 'Lisez l\'en-tete et le payload decodes',
    text: 'L\'outil divise le token en en-tete, payload et signature, puis affiche les segments JSON dans des panneaux separes pour une inspection rapide.',
  },
  {
    name: 'Verifiez les claims importants',
    text: 'Examinez l\'algorithme, l\'emetteur, l\'audience, le sujet, la date d\'emission, la date de debut de validite et la date d\'expiration sans convertir manuellement les timestamps Unix.',
  },
  {
    name: 'Copiez les donnees dont vous avez besoin',
    text: 'Copiez une section decodee ou la sortie decodee complete lorsque vous devez partager un instantane de debogage assaini avec votre equipe.',
  },
];

const faq = [
  {
    question: 'Decoder un JWT prouve-t-il que le token est valide ?',
    answer: 'Non. Le decodage revele uniquement l\'en-tete et le payload encodes en base64url. Un token n\'est digne de confiance qu\'apres que la signature, l\'emetteur, l\'audience, l\'expiration et les claims associes ont ete valides par l\'application ou le fournisseur d\'identite.',
  },
  {
    question: 'Puis-je utiliser ce decodeur JWT pour les access tokens et les ID tokens ?',
    answer: 'Oui. Le decodeur est utile pour inspecter les access tokens OAuth, les ID tokens OpenID Connect, les tokens de session et les tokens service a service, tant qu\'ils utilisent le format JWT standard en trois parties.',
  },
  {
    question: 'Pourquoi le panneau de signature ne verifie-t-il pas le token ?',
    answer: 'La verification JWT necessite le secret correct, la cle publique ou la configuration JWKS. Cet outil se concentre intentionnellement sur le decodage et l\'inspection afin que les developpeurs puissent voir le contenu du token sans pretendre qu\'une chaine de signature visible constitue une preuve de validite.',
  },
  {
    question: 'Que dois-je verifier en premier lors du debogage d\'un JWT ?',
    answer: 'Commencez par exp, nbf, iss, aud et alg. La plupart des problemes reels en production proviennent de tokens expires, de decalage d\'horloge, de valeurs d\'audience incorrectes, d\'URL d\'emetteur inattendues ou d\'hypotheses d\'algorithme non securisees.',
  },
];

const ui: JwtDecoderUI = {
  tokenLabel: 'Token JWT',
  tokenPlaceholder: 'Collez un JWT ici: en-tete.payload.signature',
  sampleButton: 'Charger l\'exemple',
  clearButton: 'Effacer',
  statusWaiting: 'Collez un token pour decoder son en-tete JSON, son payload et ses claims.',
  statusValid: 'JWT decode avec succes.',
  statusInvalid: 'Cela ne ressemble pas a un JWT valide en trois parties.',
  statusExpired: 'JWT decode, mais le claim exp est deja expire.',
  statusUnsigned: 'JWT decode, mais il n\'est pas signe ou utilise l\'algorithme none.',
  headerTitle: 'En-tete',
  payloadTitle: 'Payload',
  signatureTitle: 'Signature',
  claimsTitle: 'Claims enregistres',
  copyHeader: 'Copier l\'en-tete decode',
  copyPayload: 'Copier le payload decode',
  copySignature: 'Copier la signature',
  copyAll: 'Tout copier',
  copiedLabel: 'Copie',
  invalidTokenTitle: 'JWT invalide',
  invalidTokenBody: 'Verifiez que le token comporte trois segments base64url separes par des points.',
  invalidSegmentError: 'Verifiez que le token comporte trois segments base64url separes par des points.',
  invalidDecodeError: 'L\'en-tete ou le payload n\'a pas pu etre decode en JSON valide.',
  emptyJson: '{}',
  signaturePresent: 'Le segment de signature est present ; verifiez-le dans votre couche d\'authentification avec la cle appropriee.',
  signatureMissing: 'Aucun segment de signature',
  algorithmLabel: 'Algorithme',
  typeLabel: 'Type',
  issuerLabel: 'Emetteur',
  subjectLabel: 'Sujet',
  audienceLabel: 'Audience',
  issuedAtLabel: 'Emis le',
  notBeforeLabel: 'Valide a partir du',
  expiresAtLabel: 'Expire le',
  claimMissing: 'Non present',
  privacyNote: 'Le decodage s\'execute dans votre navigateur. Ne collez pas de secrets de production dans un outil, sauf si votre politique de securite l\'autorise.',
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
  faqTitle: 'FAQ du decodeur JWT',
  faq,
  bibliographyTitle: 'Specifications JWT et references de securite',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Decodez les JWT sans perdre le contexte de securite',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un JSON Web Token semble compact, mais il contient souvent le detail exact qui explique un echec d\'authentification: l\'algorithme de signature, l\'emetteur, l\'audience, le sujet, la date d\'emission, la date de debut de validite, l\'expiration et les claims d\'autorisation specifiques a l\'application. Ce <strong>decodeur JWT, parser et inspecteur de claims</strong> transforme les trois segments du token en JSON lisible pour que vous puissiez debugger les flux d\'authentification plus rapidement.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Decode ne signifie pas digne de confiance',
      html: 'N\'importe qui peut decoder un JWT en base64url. La confiance ne commence qu\'apres que votre application a verifie la signature avec le secret, la cle publique ou le JWKS appropries, puis valide l\'emetteur, l\'audience, l\'expiration et tout claim specifique au domaine. Utilisez cet outil pour inspecter les donnees, pas pour accepter un token comme authentique.',
    },
    {
      type: 'title',
      text: 'Ce que chaque segment JWT vous dit',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Segment', 'Contenu typique', 'Valeur de debogage'],
      rows: [
        ['En-tete', 'Algorithme, type de token et ID de cle optionnel', 'Indique si le token attend HS256, RS256, ES256 ou une autre strategie de verification.'],
        ['Payload', 'Claims enregistres et claims d\'application', 'Revele l\'identite, le tenant, les scopes, les roles, l\'expiration et les decalages d\'audience.'],
        ['Signature', 'Octets de signature cryptographique encodes en base64url', 'Confirme qu\'un segment de signature existe, mais doit etre verifie avec la bonne cle ailleurs.'],
      ],
    },
    {
      type: 'title',
      text: 'Claims qui expliquent generalement les echecs d\'authentification',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>exp:</strong> si le token a expire, la logique de renouvellement ou les parametres d\'horloge peuvent etre incorrects.',
        '<strong>nbf:</strong> si le token n\'est pas encore actif, les horloges du serveur et du fournisseur d\'identite peuvent etre desynchronisees.',
        '<strong>iss:</strong> si l\'URL de l\'emetteur differe de la configuration, le token peut provenir d\'un mauvais tenant ou environnement.',
        '<strong>aud:</strong> si l\'audience ne correspond pas a l\'identifiant de l\'API, le token a ete emis pour une autre ressource.',
        '<strong>alg:</strong> si l\'algorithme est inattendu, votre verificateur peut rejeter le token ou exposer une erreur de configuration dangereuse.',
      ],
    },
    {
      type: 'title',
      text: 'Cas d\'utilisation d\'un parser JWT pendant le developpement',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Debogage frontend',
          description: 'Inspectez les ID tokens et access tokens recus apres la connexion pour confirmer les scopes, les roles et les claims de profil.',
          icon: 'mdi:monitor-dashboard',
          points: ['Verifiez les claims de profil', 'Confirmez les scopes et roles', 'Comparez les environnements de connexion'],
        },
        {
          title: 'QA d\'API backend',
          description: 'Comparez les valeurs attendues de l\'emetteur et de l\'audience avec le token reellement envoye dans un en-tete Authorization.',
          icon: 'mdi:api',
          highlight: true,
          points: ['Validez la forme de l\'audience', 'Reperez les decalages d\'emetteur', 'Inspectez les bearer tokens'],
        },
        {
          title: 'Configuration du fournisseur d\'identite',
          description: 'Verifiez si les claims d\'Auth0, Azure AD, Cognito, Keycloak ou d\'un fournisseur personnalise sont structures comme votre application l\'attend.',
          icon: 'mdi:account-key',
          points: ['Examinez les donnees du tenant', 'Verifiez les claims personnalises', 'Comparez les mappings du fournisseur'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Erreurs JWT courantes que cet inspecteur rend evidentes',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Verifications rapides contre decisions de confiance',
      items: [
        {
          pro: 'Voyez les tokens mal formes immediatement.',
          con: 'Il ne peut pas connaitre votre audience ou emetteur attendu.',
        },
        {
          pro: 'Convertissez les claims de timestamp Unix en dates lisibles.',
          con: 'Il ne peut pas verifier une signature sans le materiel de cle reel.',
        },
        {
          pro: 'Reperez les valeurs manquantes d\'emetteur, d\'audience, de sujet ou de type.',
          con: 'Il ne peut pas prouver que les scopes et les roles sont surs pour votre application.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Flux de travail recommande',
      items: [
        'Decodez le token pour comprendre ce que le client ou l\'API a reellement recu.',
        'Verifiez exp, nbf, iss, aud, sub et alg avant de poursuivre la logique applicative.',
        'Verifiez les signatures et les decisions de confiance uniquement dans votre couche d\'authentification.',
        'Evitez de partager des JWT de production sensibles dans les tickets, les logs ou les captures d\'ecran.',
      ],
    },
  ],
};
