import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JwtDecoderUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'jwt-decoder-parser-en-claims-inspecteur';
const title = 'JWT Decoder, Parser en Claims Inspecteur';
const description = 'Plak een JSON Web Token, decodeer de header en payload direct, inspecteer registered claims, herken verlopen tokens en kopieer schone JSON voor het debuggen van authenticatieprocessen.';

const howTo = [
  {
    name: 'Plak de JWT',
    text: 'Kopieer een token uit een Authorization-header, cookie, logboekvermelding of identiteitsprovider en plak het in het invoerveld.',
  },
  {
    name: 'Lees de gedecodeerde header en payload',
    text: 'De tool splitst het token in header, payload en handtekening en toont de JSON-segmenten in aparte panels voor snelle inspectie.',
  },
  {
    name: 'Controleer belangrijke claims',
    text: 'Bekijk algoritme, uitgever, publiek, onderwerp, uitgegeven-op tijd, geldig-vanaf tijd en vervaltijd zonder handmatig Unix-timestamps om te rekenen.',
  },
  {
    name: 'Kopieer de benodigde gegevens',
    text: 'Kopieer een gedecodeerd gedeelte of de volledige gedecodeerde uitvoer wanneer je een opgeschoonde debugmomentopname met je team wilt delen.',
  },
];

const faq = [
  {
    question: 'Bewijst het decoderen van een JWT dat het token geldig is?',
    answer: 'Nee. Decoderen onthult alleen de base64url-gecodeerde header en payload. Een token is pas betrouwbaar nadat de handtekening, uitgever, publiek, vervaldatum en gerelateerde claims zijn gevalideerd door de applicatie of identiteitsprovider.',
  },
  {
    question: 'Kan ik deze JWT-decoder gebruiken voor access tokens en ID tokens?',
    answer: 'Ja. De decoder is handig voor het inspecteren van OAuth access tokens, OpenID Connect ID tokens, sessietokens en service-to-service tokens, zolang ze het standaard driedelige JWT-formaat gebruiken.',
  },
  {
    question: 'Waarom verifieert het handtekeningpaneel het token niet?',
    answer: 'JWT-verificatie vereist de juiste geheime sleutel, publieke sleutel of JWKS-configuratie. Deze tool richt zich bewust op decoderen en inspecteren, zodat ontwikkelaars tokeninhoud kunnen zien zonder te doen alsof een zichtbare handtekeningstring bewijs van geldigheid is.',
  },
  {
    question: 'Wat moet ik eerst controleren bij het debuggen van een JWT?',
    answer: 'Begin met exp, nbf, iss, aud en alg. De meeste echte productieproblemen komen door verlopen tokens, klokafwijking, verkeerde publiek-waarden, onverwachte uitgever-URL\'s of onveilige algoritme-aannames.',
  },
];

const ui: JwtDecoderUI = {
  tokenLabel: 'JWT-token',
  tokenPlaceholder: 'Plak hier een JWT: header.payload.handtekening',
  sampleButton: 'Voorbeeld laden',
  clearButton: 'Wissen',
  statusWaiting: 'Plak een token om de JSON-header, payload en claims te decoderen.',
  statusValid: 'JWT succesvol gedecodeerd.',
  statusInvalid: 'Dit lijkt geen geldige driedelige JWT te zijn.',
  statusExpired: 'JWT gedecodeerd, maar de exp-claim is al verlopen.',
  statusUnsigned: 'JWT gedecodeerd, maar het is niet ondertekend of gebruikt algoritme none.',
  headerTitle: 'Header',
  payloadTitle: 'Payload',
  signatureTitle: 'Handtekening',
  claimsTitle: 'Geregistreerde claims',
  copyHeader: 'Gedecodeerde header kopieren',
  copyPayload: 'Gedecodeerde payload kopieren',
  copySignature: 'Handtekening kopieren',
  copyAll: 'Alles kopieren',
  copiedLabel: 'Gekopieerd',
  invalidTokenTitle: 'Ongeldige JWT',
  invalidTokenBody: 'Controleer of het token drie door punten gescheiden base64url-segmenten heeft.',
  invalidSegmentError: 'Controleer of het token drie door punten gescheiden base64url-segmenten heeft.',
  invalidDecodeError: 'De header of payload kon niet worden gedecodeerd als geldige JSON.',
  emptyJson: '{}',
  signaturePresent: 'Handtekeningsegment is aanwezig; verifieer het in uw auth-laag met de juiste sleutel.',
  signatureMissing: 'Geen handtekeningsegment',
  algorithmLabel: 'Algoritme',
  typeLabel: 'Type',
  issuerLabel: 'Uitgever',
  subjectLabel: 'Onderwerp',
  audienceLabel: 'Publiek',
  issuedAtLabel: 'Uitgegeven op',
  notBeforeLabel: 'Geldig vanaf',
  expiresAtLabel: 'Verloopt op',
  claimMissing: 'Niet aanwezig',
  privacyNote: 'Decoderen vindt plaats in uw browsersessie. Plak geen productiesleutels in een tool tenzij uw beveiligingsbeleid dit toestaat.',
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
};

export const content: ToolLocaleContent<JwtDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'JWT decoder FAQ',
  faq,
  bibliographyTitle: 'JWT specificaties en beveiligingsreferenties',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Decodeer JWTs zonder de beveiligingscontext te verliezen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een JSON Web Token ziet er compact uit, maar bevat vaak precies het detail dat een authenticatiefout verklaart: het ondertekeningsalgoritme, uitgever, publiek, onderwerp, uitgegeven-op tijd, geldig-vanaf tijd, vervaldatum en toepassingsspecifieke autorisatieclaims. Deze <strong>JWT-decoder, parser en claims-inspecteur</strong> zet de drie tokensegmenten om in leesbare JSON zodat u auth-stromen sneller kunt debuggen.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gedecodeerd betekent niet vertrouwd',
      html: 'Iedereen kan een JWT base64url-decoderen. Vertrouwen begint pas nadat uw applicatie de handtekening verifieert met de juiste geheime sleutel, publieke sleutel of JWKS, en vervolgens uitgever, publiek, vervaldatum en domeinspecifieke claims valideert. Gebruik deze tool om gegevens te inspecteren, niet om een token als authentiek te accepteren.',
    },
    {
      type: 'title',
      text: 'Wat elk JWT segment u vertelt',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Segment', 'Typische inhoud', 'Debugwaarde'],
      rows: [
        ['Header', 'Algoritme, tokentype en optionele sleutel-ID', 'Toont of het token HS256, RS256, ES256 of een andere verificatiestrategie verwacht.'],
        ['Payload', 'Geregistreerde claims en applicatieclaims', 'Onthult identiteit, tenant, scopes, rollen, vervaldatum en publiek-mismatches.'],
        ['Handtekening', 'Cryptografische handtekeningbytes gecodeerd als base64url', 'Bevestigt dat een handtekeningsegment bestaat, maar moet elders met de juiste sleutel worden geverifieerd.'],
      ],
    },
    {
      type: 'title',
      text: 'Claims die meestal falende authenticatie verklaren',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>exp:</strong> als het token is verlopen, kunnen de vernieuwingslogica of klokinstellingen onjuist zijn.',
        '<strong>nbf:</strong> als het token nog niet actief is, kunnen server- en identiteitsproviderklokken uit sync zijn.',
        '<strong>iss:</strong> als de uitgever-URL afwijkt van de configuratie, kan het token van de verkeerde tenant of omgeving komen.',
        '<strong>aud:</strong> als het publiek niet overeenkomt met de API-identificatie, is het token voor een andere bron aangemaakt.',
        '<strong>alg:</strong> als het algoritme onverwacht is, kan uw verificateur het token weigeren of een gevaarlijke configuratiefout blootleggen.',
      ],
    },
    {
      type: 'title',
      text: 'Toepassingen van een JWT parser tijdens ontwikkeling',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Frontend debugging',
          description: 'Inspecteer ID tokens en access tokens ontvangen na inloggen om scopes, rollen en profielclaims te bevestigen.',
          icon: 'mdi:monitor-dashboard',
          points: ['Controleer profielclaims', 'Bevestig scopes en rollen', 'Vergelijk inlogomgevingen'],
        },
        {
          title: 'Backend API QA',
          description: 'Vergelijk verwachte uitgevers- en publiek-waarden met het token dat daadwerkelijk in een Authorization-header is verzonden.',
          icon: 'mdi:api',
          highlight: true,
          points: ['Valideer publiek-vorm', 'Herken uitgever-mismatches', 'Inspecteer bearer tokens'],
        },
        {
          title: 'Identiteitsprovider configureren',
          description: 'Controleer of claims van Auth0, Azure AD, Cognito, Keycloak of een aangepaste provider zijn vormgegeven zoals uw app verwacht.',
          icon: 'mdi:account-key',
          points: ['Bekijk tenantgegevens', 'Controleer aangepaste claims', 'Vergelijk providerkoppelingen'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Veelvoorkomende JWT fouten die deze inspecteur zichtbaar maakt',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Snelle controles versus vertrouwensbeslissingen',
      items: [
        {
          pro: 'Zie misvormde tokens onmiddellijk.',
          con: 'Kan uw verwachte publiek of uitgever niet kennen.',
        },
        {
          pro: 'Converteer Unix-timestamp-claims naar leesbare datums.',
          con: 'Kan geen handtekening verifieren zonder het echte sleutelmateriaal.',
        },
        {
          pro: 'Herken ontbrekende uitgever-, publiek-, onderwerp- of typewaarden.',
          con: 'Kan niet bewijzen dat scopes en rollen veilig zijn voor uw applicatie.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Best practice werkwijze',
      items: [
        'Decodeer het token om te begrijpen wat de client of API daadwerkelijk heeft ontvangen.',
        'Controleer exp, nbf, iss, aud, sub en alg voordat u applicatielogica naloopt.',
        'Verifieer handtekeningen en vertrouwensbeslissingen alleen in uw auth-laag.',
        'Vermijd het delen van gevoelige productie-JWTs in tickets, logs of schermafbeeldingen.',
      ],
    },
  ],
};
