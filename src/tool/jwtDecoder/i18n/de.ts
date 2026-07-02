import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JwtDecoderUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'jwt-decoder-parser-und-claims-inspektor';
const title = 'JWT Decoder, Parser und Claims Inspektor';
const description = 'Fugen Sie ein JSON Web Token ein, dekodieren Sie dessen Header und Payload sofort, inspizieren Sie registrierte Claims, erkennen Sie abgelaufene Tokens und kopieren Sie sauberes JSON zum Debuggen von Authentifizierungsablaufen.';

const howTo = [
  {
    name: 'Fugen Sie das JWT ein',
    text: 'Kopieren Sie ein Token aus einem Authorization-Header, Cookie, Log-Eintrag oder Identitatsanbieter und fugen Sie es in das Eingabefeld ein.',
  },
  {
    name: 'Lesen Sie den dekodierten Header und Payload',
    text: 'Das Tool teilt das Token in Header, Payload und Signatur auf und stellt die JSON-Segmente in separaten Panels zur schnellen Inspektion dar.',
  },
  {
    name: 'Uberprufen Sie wichtige Claims',
    text: 'Prufen Sie Algorithmus, Aussteller, Audience, Subjekt, Ausstellungszeit, Gultigkeitsbeginn und Ablaufzeit, ohne Unix-Timestamps manuell umzurechnen.',
  },
  {
    name: 'Kopieren Sie die benotigten Daten',
    text: 'Kopieren Sie einen dekodierten Abschnitt oder die gesamte dekodierte Ausgabe, wenn Sie eine bereinigte Debugging-Momentaufnahme mit Ihrem Team teilen mussen.',
  },
];

const faq = [
  {
    question: 'Beweist die Dekodierung eines JWT, dass das Token gultig ist?',
    answer: 'Nein. Die Dekodierung zeigt nur den base64url-kodierten Header und Payload. Ein Token ist erst vertrauenswurdig, nachdem die Signatur, der Aussteller, die Audience, der Ablauf und zugehorige Claims von der Anwendung oder dem Identitatsanbieter validiert wurden.',
  },
  {
    question: 'Kann ich diesen JWT-Decoder fur Access-Tokens und ID-Tokens verwenden?',
    answer: 'Ja. Der Decoder eignet sich zur Inspektion von OAuth-Access-Tokens, OpenID-Connect-ID-Tokens, Session-Tokens und Service-zu-Service-Tokens, sofern sie das standardmassige dreiteilige JWT-Format verwenden.',
  },
  {
    question: 'Warum verifiziert das Signatur-Panel das Token nicht?',
    answer: 'Die JWT-Verifizierung erfordert das korrekte Secret, den offentlichen Schlussel oder die JWKS-Konfiguration. Dieses Tool konzentriert sich bewusst auf Dekodierung und Inspektion, damit Entwickler den Token-Inhalt einsehen konnen, ohne vorzutauschen, dass eine sichtbare Signatur-Zeichenkette ein Gultigkeitsnachweis ist.',
  },
  {
    question: 'Was sollte ich zuerst prufen, wenn ich ein JWT debugge?',
    answer: 'Beginnen Sie mit exp, nbf, iss, aud und alg. Die meisten echten Produktionsprobleme stammen von abgelaufenen Tokens, Uhrenabweichungen, falschen Audience-Werten, unerwarteten Aussteller-URLs oder unsicheren Algorithmus-Annahmen.',
  },
];

const ui: JwtDecoderUI = {
  tokenLabel: 'JWT-Token',
  tokenPlaceholder: 'JWT hier einfugen: Header.Payload.Signatur',
  sampleButton: 'Beispiel laden',
  clearButton: 'Loschen',
  statusWaiting: 'Fugen Sie ein Token ein, um dessen JSON-Header, Payload und Claims zu dekodieren.',
  statusValid: 'JWT erfolgreich dekodiert.',
  statusInvalid: 'Dies sieht nicht nach einem gultigen dreiteiligen JWT aus.',
  statusExpired: 'JWT dekodiert, aber der exp-Claim ist bereits abgelaufen.',
  statusUnsigned: 'JWT dekodiert, aber es ist nicht signiert oder verwendet den Algorithmus none.',
  headerTitle: 'Header',
  payloadTitle: 'Payload',
  signatureTitle: 'Signatur',
  claimsTitle: 'Registrierte Claims',
  copyHeader: 'Dekodierten Header kopieren',
  copyPayload: 'Dekodierten Payload kopieren',
  copySignature: 'Signatur kopieren',
  copyAll: 'Alles kopieren',
  copiedLabel: 'Kopiert',
  invalidTokenTitle: 'Ungultiges JWT',
  invalidTokenBody: 'Prufen Sie, ob das Token drei durch Punkte getrennte base64url-Segmente hat.',
  invalidSegmentError: 'Prufen Sie, ob das Token drei durch Punkte getrennte base64url-Segmente hat.',
  invalidDecodeError: 'Der Header oder Payload konnte nicht als gultiges JSON dekodiert werden.',
  emptyJson: '{}',
  signaturePresent: 'Signatursegment ist vorhanden; verifizieren Sie es in Ihrer Authentifizierungsschicht mit dem richtigen Schlussel.',
  signatureMissing: 'Kein Signatursegment',
  algorithmLabel: 'Algorithmus',
  typeLabel: 'Typ',
  issuerLabel: 'Aussteller',
  subjectLabel: 'Subjekt',
  audienceLabel: 'Audience',
  issuedAtLabel: 'Ausgestellt am',
  notBeforeLabel: 'Gultig ab',
  expiresAtLabel: 'Lauft ab am',
  claimMissing: 'Nicht vorhanden',
  privacyNote: 'Die Dekodierung lauft in Ihrer Browser-Sitzung. Fugen Sie keine Produktionsgeheimnisse in ein Tool ein, es sei denn, Ihre Sicherheitsrichtlinie erlaubt dies.',
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<JwtDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Haufig gestellte Fragen zum JWT-Decoder',
  faq,
  bibliographyTitle: 'JWT-Spezifikationen und Sicherheitsreferenzen',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'JWTs dekodieren, ohne den Sicherheitskontext zu verlieren',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ein JSON Web Token wirkt kompakt, enthalt aber oft genau das Detail, das einen Authentifizierungsfehler erklart: den Signaturalgorithmus, den Aussteller, die Audience, das Subjekt, die Ausstellungszeit, die Gultigkeitsbeginnzeit, den Ablauf und anwendungsspezifische Autorisierungs-Claims. Dieser <strong>JWT-Decoder, Parser und Claims-Inspektor</strong> wandelt die drei Token-Segmente in lesbares JSON um, damit Sie Authentifizierungsablaufe schneller debuggen konnen.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Dekodiert bedeutet nicht vertrauenswurdig',
      html: 'Jeder kann ein JWT base64url-dekodieren. Vertrauen beginnt erst, nachdem Ihre Anwendung die Signatur mit dem korrekten Secret, offentlichen Schlussel oder JWKS verifiziert und dann Aussteller, Audience, Ablauf und alle domainspezifischen Claims validiert hat. Verwenden Sie dieses Tool zur Dateninspektion, nicht um ein Token als authentisch zu akzeptieren.',
    },
    {
      type: 'title',
      text: 'Was Ihnen jedes JWT-Segment verrat',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Segment', 'Typischer Inhalt', 'Debugging-Wert'],
      rows: [
        ['Header', 'Algorithmus, Tokentyp und optionale Schlussel-ID', 'Zeigt, ob das Token HS256, RS256, ES256 oder eine andere Verifikationsstrategie erwartet.'],
        ['Payload', 'Registrierte Claims und Anwendungs-Claims', 'Enthullt Identitat, Tenant, Scopes, Rollen, Ablauf und Audience-Abweichungen.'],
        ['Signatur', 'Kryptografische Signatur-Bytes als base64url kodiert', 'Bestatigt, dass ein Signatursegment existiert, muss aber mit dem richtigen Schlussel anderweitig verifiziert werden.'],
      ],
    },
    {
      type: 'title',
      text: 'Claims, die meistens fehlerhafte Authentifizierung erklaren',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>exp:</strong> Wenn das Token abgelaufen ist, konnte die Aktualisierungslogik oder die Uhreneinstellung falsch sein.',
        '<strong>nbf:</strong> Wenn das Token noch nicht aktiv ist, konnten die Uhren von Server und Identitatsanbieter nicht synchron sein.',
        '<strong>iss:</strong> Wenn die Aussteller-URL von der Konfiguration abweicht, stammt das Token moglicherweise vom falschen Tenant oder aus der falschen Umgebung.',
        '<strong>aud:</strong> Wenn die Audience nicht mit der API-Kennung ubereinstimmt, wurde das Token fur eine andere Ressource ausgestellt.',
        '<strong>alg:</strong> Wenn der Algorithmus unerwartet ist, konnte Ihr Verifizierer das Token ablehnen oder einen gefahrlichen Konfigurationsfehler aufdecken.',
      ],
    },
    {
      type: 'title',
      text: 'Anwendungsfalle fur einen JWT-Parser wahrend der Entwicklung',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Frontend Debugging',
          description: 'Inspizieren Sie ID-Tokens und Access-Tokens, die nach dem Login empfangen wurden, um Scopes, Rollen und Profil-Claims zu bestatigen.',
          icon: 'mdi:monitor-dashboard',
          points: ['Profil-Claims prufen', 'Scopes und Rollen bestatigen', 'Login-Umgebungen vergleichen'],
        },
        {
          title: 'Backend API QA',
          description: 'Vergleichen Sie erwartete Aussteller- und Audience-Werte mit dem tatsachlich in einem Authorization-Header gesendeten Token.',
          icon: 'mdi:api',
          highlight: true,
          points: ['Audience-Form validieren', 'Aussteller-Abweichungen erkennen', 'Bearer-Tokens inspizieren'],
        },
        {
          title: 'Identitatsanbieter Einrichtung',
          description: 'Prufen Sie, ob Claims von Auth0, Azure AD, Cognito, Keycloak oder einem benutzerdefinierten Anbieter so geformt sind, wie Ihre App es erwartet.',
          icon: 'mdi:account-key',
          points: ['Tenant-Daten uberprufen', 'Benutzerdefinierte Claims prufen', 'Anbieter-Zuordnungen vergleichen'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Haufige JWT-Fehler, die dieser Inspektor sichtbar macht',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Schnelle Prufungen gegen Vertrauensentscheidungen',
      items: [
        {
          pro: 'Sehen Sie fehlerhafte Tokens sofort.',
          con: 'Er kann Ihre erwartete Audience oder Ihren Aussteller nicht kennen.',
        },
        {
          pro: 'Konvertieren Sie Unix-Timestamp-Claims in lesbare Datumsangaben.',
          con: 'Er kann eine Signatur nicht ohne das echte Schlusselmaterial verifizieren.',
        },
        {
          pro: 'Erkennen Sie fehlende Aussteller-, Audience-, Subjekt- oder Typ-Werte.',
          con: 'Er kann nicht beweisen, dass Scopes und Rollen fur Ihre Anwendung sicher sind.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Empfohlener Workflow',
      items: [
        'Dekodieren Sie das Token, um zu verstehen, was der Client oder die API tatsachlich erhalten hat.',
        'Prufen Sie exp, nbf, iss, aud, sub und alg, bevor Sie der Anwendungslogik nachgehen.',
        'Verifizieren Sie Signaturen und Vertrauensentscheidungen nur in Ihrer Authentifizierungsschicht.',
        'Vermeiden Sie die Weitergabe sensibler Produktions-JWTs in Tickets, Logs oder Screenshots.',
      ],
    },
  ],
};
