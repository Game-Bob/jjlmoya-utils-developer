import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JwtDecoderUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'jwt-dekoder-tolk-och-anspraksinspektor';
const title = 'JWT Avkodare, Tolk och Anspraksinspektor';
const description = 'Klistra in en JSON Web Token, avkoda dess header och payload direkt, inspektera registrerade claims, upptack utgångna tokens och kopiera ren JSON for att felsoka autentiseringsfloden.';

const howTo = [
  {
    name: 'Klistra in JWTn',
    text: 'Kopiera en token från en Authorization header, cookie, loggpost eller identitetsleverantor och klistra in den i inmatningsfaltet.',
  },
  {
    name: 'Las den avkodade headern och payloaden',
    text: 'Verktyget delar upp token i header, payload och signatur och visar sedan JSON segmenten i separata paneler for snabb inspektion.',
  },
  {
    name: 'Kontrollera viktiga claims',
    text: 'Granska algoritm, utfordare, publik, amne, utfardandetid, giltigt från tid och utgångstid utan att manuellt konvertera Unix tidsstamplar.',
  },
  {
    name: 'Kopiera den data du behover',
    text: 'Kopiera ett avkodat avsnitt eller hela den avkodade utmatningen nar du behover dela en sanerad felsokningsogonblicksbild med ditt team.',
  },
];

const faq = [
  {
    question: 'Bevisar avkodning av en JWT att tokenen ar giltig?',
    answer: 'Nej. Avkodning visar bara den base64url kodade headern och payloaden. En token ar trovordig forst nar signaturen, utfordaren, publiken, utgångstiden och relaterade claims har validerats av applikationen eller identitetsleverantoren.',
  },
  {
    question: 'Kan jag anvanda denna JWT avkodare for access tokens och ID tokens?',
    answer: 'Ja. Avkodaren ar anvandbar for att inspektera OAuth access tokens, OpenID Connect ID tokens, sessionstokens och tjanst till tjanst tokens, sa lange de anvander det standardiserade tredelade JWT formatet.',
  },
  {
    question: 'Varfor verifierar inte signaturpanelen tokenet?',
    answer: 'JWT verifiering kraver ratt hemlighet, publik nyckel eller JWKS konfiguration. Detta verktyg fokuserar avsiktligt på avkodning och inspektion så att utvecklare kan se tokeninnehållet utan att låtsas att en synlig signaturstrang ar bevis på giltighet.',
  },
  {
    question: 'Vad bor jag kontrollera forst nar jag felsoker en JWT?',
    answer: 'Borja med exp, nbf, iss, aud och alg. De flesta verkliga produktionsproblem kommer från utgångna tokens, klockskevning, felaktiga publikvarden, ovantade utfordar URLer eller osakra algoritmantaganden.',
  },
];

const ui: JwtDecoderUI = {
  tokenLabel: 'JWT token',
  tokenPlaceholder: 'Klistra in en JWT har: header.payload.signatur',
  sampleButton: 'Ladda exempel',
  clearButton: 'Rensa',
  statusWaiting: 'Klistra in en token for att avkoda dess JSON header, payload och claims.',
  statusValid: 'JWT avkodad.',
  statusInvalid: 'Detta ser inte ut som en giltig tredelad JWT.',
  statusExpired: 'JWT avkodad, men exp claim har redan gått ut.',
  statusUnsigned: 'JWT avkodad, men den ar osignerad eller anvander algoritmen none.',
  headerTitle: 'Header',
  payloadTitle: 'Payload',
  signatureTitle: 'Signatur',
  claimsTitle: 'Registrerade claims',
  copyHeader: 'Kopiera avkodad header',
  copyPayload: 'Kopiera avkodad payload',
  copySignature: 'Kopiera signatur',
  copyAll: 'Kopiera allt',
  copiedLabel: 'Kopierad',
  invalidTokenTitle: 'Ogiltig JWT',
  invalidTokenBody: 'Kontrollera att token har tre punktseparerade base64url segment.',
  invalidSegmentError: 'Kontrollera att token har tre punktseparerade base64url segment.',
  invalidDecodeError: 'Header eller payload kunde inte avkodas som giltig JSON.',
  emptyJson: '{}',
  signaturePresent: 'Signatursegment finns; verifiera det i ditt autentiseringslager med ratt nyckel.',
  signatureMissing: 'Inget signatursegment',
  algorithmLabel: 'Algoritm',
  typeLabel: 'Typ',
  issuerLabel: 'Utfordare',
  subjectLabel: 'Amne',
  audienceLabel: 'Publik',
  issuedAtLabel: 'Utfordad',
  notBeforeLabel: 'Giltig från',
  expiresAtLabel: 'Galler till',
  claimMissing: 'Saknas',
  privacyNote: 'Avkodning sker i din webblasarsession. Klistra inte in produktionshemligheter i något verktyg om inte din sakerhetspolicy tillåter det.',
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<JwtDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Vanliga frågor om JWT avkodaren',
  faq,
  bibliographyTitle: 'JWT specifikationer och sakerhetsreferenser',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Avkoda JWT utan att forlora sakerhetskontexten',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En JSON Web Token ser kompakt ut, men innehåller ofta just den detalj som forklarar ett autentiseringsfel: signaturalgoritmen, utfordare, publik, amne, utfardandetid, giltigt från tid, utgångstid och applikationsspecifika auktoriseringsclaims. Denna <strong>JWT avkodare, tolk och anspraksinspektor</strong> omvandlar de tre tokensegmenten till lasbar JSON så att du kan felsoka autentiseringsfloden snabbare.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Avkodad betyder inte trovordig',
      html: 'Vem som helst kan base64url avkoda en JWT. Fortroende borjar forst nar din applikation har verifierat signaturen med ratt hemlighet, publik nyckel eller JWKS och sedan validerat utfordare, publik, utgångstid och eventuella domanspecifika claims. Anvand detta verktyg for att inspektera data, inte for att acceptera en token som autentisk.',
    },
    {
      type: 'title',
      text: 'Vad varje JWT segment berattar',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Segment', 'Typiskt innehåll', 'Felsokningsvarde'],
      rows: [
        ['Header', 'Algoritm, tokentyp och valfritt nyckel ID', 'Visar om tokenen forvantar HS256, RS256, ES256 eller en annan verifieringsstrategi.'],
        ['Payload', 'Registrerade claims och applikationsclaims', 'Avslojar identitet, klientorganisation, scopar, roller, utgångstid och publikavvikelser.'],
        ['Signatur', 'Kryptografiska signaturbytes kodade som base64url', 'Bekraftar att ett signatursegment finns, men måste verifieras med ratt nyckel på annat håll.'],
      ],
    },
    {
      type: 'title',
      text: 'Claims som oftast forklarar trasig autentisering',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>exp:</strong> om tokenen har gått ut kan uppdateringslogiken eller klockinstallningarna vara felaktiga.',
        '<strong>nbf:</strong> om tokenen annu inte ar aktiv kan server och identitetsleverantors klockor vara osynkroniserade.',
        '<strong>iss:</strong> om utfordar URLen skiljer sig från konfigurationen kan tokenen komma från fel klientorganisation eller miljo.',
        '<strong>aud:</strong> om publiken inte matchar API identifikatorn skapades tokenen for en annan resurs.',
        '<strong>alg:</strong> om algoritmen ar ovantad kan din verifierare avvisa tokenen eller blottlagga ett farligt konfigurationsmisstag.',
      ],
    },
    {
      type: 'title',
      text: 'Anvandningsfall for en JWT tolk under utveckling',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Frontend felsokning',
          description: 'Inspektera ID tokens och access tokens som tas emot efter inloggning for att bekrafta scopar, roller och profilclaims.',
          icon: 'mdi:monitor-dashboard',
          points: ['Kontrollera profilclaims', 'Bekrafta scopar och roller', 'Jamfor inloggningsmiljoer'],
        },
        {
          title: 'Backend API QA',
          description: 'Jamfor forvantade utfordar och publikvarden med den token som faktiskt skickas i en Authorization header.',
          icon: 'mdi:api',
          highlight: true,
          points: ['Validera publikens utformning', 'Upptack utfordaravvikelser', 'Inspektera bearer tokens'],
        },
        {
          title: 'Identitetsleverantor installation',
          description: 'Kontrollera om claims från Auth0, Azure AD, Cognito, Keycloak eller en anpassad leverantor ar utformade som din app forvantar sig.',
          icon: 'mdi:account-key',
          points: ['Granska klientorganisationsdata', 'Kontrollera anpassade claims', 'Jamfor leverantorsmappningar'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Vanliga JWT misstag som denna inspektor gor uppenbara',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Snabba kontroller mot fortroendebeslut',
      items: [
        {
          pro: 'Se felaktiga tokens omedelbart.',
          con: 'Den kan inte kanna till din forvantade publik eller utfordare.',
        },
        {
          pro: 'Konvertera Unix tidsstampel claims till lasbara datum.',
          con: 'Den kan inte verifiera en signatur utan det verkliga nyckelmaterialet.',
        },
        {
          pro: 'Upptack saknade utfordar, publik, amnes eller typvarden.',
          con: 'Den kan inte bevisa att scopar och roller ar sakra for din applikation.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Rekommenderat arbetsflode',
      items: [
        'Avkoda tokenen for att forstå vad klienten eller APIet faktiskt tog emot.',
        'Kontrollera exp, nbf, iss, aud, sub och alg innan du går vidare med applikationslogiken.',
        'Verifiera signaturer och fortroendebeslut endast i ditt autentiseringslager.',
        'Undvik att dela kansliga produktions JWTer i arenden, loggar eller skarmdumpar.',
      ],
    },
  ],
};
