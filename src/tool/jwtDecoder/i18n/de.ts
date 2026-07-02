import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JwtDecoderUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'jwt-decoder-parser-und-claims-inspektor';
const title = 'JWT Decoder, Parser und Claims Inspektor';
const description = 'Fügen Sie ein JSON Web Token ein, dekodieren Sie dessen Header und Payload sofort, inspizieren Sie registrierte Claims, erkennen Sie abgelaufene Tokens und kopieren Sie sauberes JSON zum Debuggen von Authentifizierungsabläufen.';

const howTo = [
  {
    name: 'Fügen Sie das JWT ein',
    text: 'Kopieren Sie ein Token aus einem Authorization-Header, Cookie, Log-Eintrag oder Identitätsanbieter und fügen Sie es in das Eingabefeld ein.',
  },
  {
    name: 'Lesen Sie den dekodierten Header und Payload',
    text: 'Das Tool teilt das Token in Header, Payload und Signatur auf und stellt die JSON-Segmente in separaten Panels zur schnellen Inspektion dar.',
  },
  {
    name: 'Überprüfen Sie wichtige Claims',
    text: 'Prüfen Sie Algorithmus, Aussteller, Audience, Subjekt, Ausstellungszeit, Gültigkeitsbeginn und Ablaufzeit, ohne Unix-Timestamps manuell umzurechnen.',
  },
  {
    name: 'Kopieren Sie die benötigten Daten',
    text: 'Kopieren Sie einen dekodierten Abschnitt oder die gesamte dekodierte Ausgabe, wenn Sie eine bereinigte Debugging-Momentaufnahme mit Ihrem Team teilen müssen.',
  },
];

const faq = [
  {
    question: 'Beweist die Dekodierung eines JWT, dass das Token gültig ist?',
    answer: 'Nein. Die Dekodierung zeigt nur den base64url-kodierten Header und Payload. Ein Token ist erst vertrauenswürdig, nachdem die Signatur, der Aussteller, die Audience, der Ablauf und zugehörige Claims von der Anwendung oder dem Identitätsanbieter validiert wurden.',
  },
  {
    question: 'Kann ich diesen JWT-Decoder für Access-Tokens und ID-Tokens verwenden?',
    answer: 'Ja. Der Decoder eignet sich zur Inspektion von OAuth-Access-Tokens, OpenID-Connect-ID-Tokens, Session-Tokens und Service-zu-Service-Tokens, sofern sie das standardmäßige dreiteilige JWT-Format verwenden.',
  },
  {
    question: 'Warum verifiziert das Signatur-Panel das Token nicht?',
    answer: 'Die JWT-Verifizierung erfordert das korrekte Secret, den öffentlichen Schlüssel oder die JWKS-Konfiguration. Dieses Tool konzentriert sich bewusst auf Dekodierung und Inspektion, damit Entwickler den Token-Inhalt einsehen können, ohne vorzutäuschen, dass eine sichtbare Signatur-Zeichenkette ein Gültigkeitsnachweis ist.',
  },
  {
    question: 'Was sollte ich zuerst prüfen, wenn ich ein JWT debugge?',
    answer: 'Beginnen Sie mit exp, nbf, iss, aud und alg. Die meisten echten Produktionsprobleme stammen von abgelaufenen Tokens, Uhrenabweichungen, falschen Audience-Werten, unerwarteten Aussteller-URLs oder unsicheren Algorithmus-Annahmen.',
  },
];

const ui: JwtDecoderUI = {
  tokenLabel: 'JWT-Token',
  tokenPlaceholder: 'JWT hier einfügen: Header.Payload.Signatur',
  sampleButton: 'Beispiel laden',
  clearButton: 'Löschen',
  statusWaiting: 'Fügen Sie ein Token ein, um dessen JSON-Header, Payload und Claims zu dekodieren.',
  statusValid: 'JWT erfolgreich dekodiert.',
  statusInvalid: 'Dies sieht nicht nach einem gültigen dreiteiligen JWT aus.',
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
  invalidTokenTitle: 'Ungültiges JWT',
  invalidTokenBody: 'Prüfen Sie, ob das Token drei durch Punkte getrennte base64url-Segmente hat.',
  invalidSegmentError: 'Prüfen Sie, ob das Token drei durch Punkte getrennte base64url-Segmente hat.',
  invalidDecodeError: 'Der Header oder Payload konnte nicht als gültiges JSON dekodiert werden.',
  emptyJson: '{}',
  signaturePresent: 'Signatursegment ist vorhanden; verifizieren Sie es in Ihrer Authentifizierungsschicht mit dem richtigen Schlüssel.',
  signatureMissing: 'Kein Signatursegment',
  algorithmLabel: 'Algorithmus',
  typeLabel: 'Typ',
  issuerLabel: 'Aussteller',
  subjectLabel: 'Subjekt',
  audienceLabel: 'Audience',
  issuedAtLabel: 'Ausgestellt am',
  notBeforeLabel: 'Gültig ab',
  expiresAtLabel: 'Läuft ab am',
  claimMissing: 'Nicht vorhanden',
  privacyNote: 'Die Dekodierung läuft in Ihrer Browser-Sitzung. Fügen Sie keine Produktionsgeheimnisse in ein Tool ein, es sei denn, Ihre Sicherheitsrichtlinie erlaubt dies.',
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
  faqTitle: 'Häufig gestellte Fragen zum JWT-Decoder',
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
      html: 'Ein JSON Web Token wirkt kompakt, enthält aber oft genau das Detail, das einen Authentifizierungsfehler erklärt: den Signaturalgorithmus, den Aussteller, die Audience, das Subjekt, die Ausstellungszeit, die Gültigkeitsbeginnzeit, den Ablauf und anwendungsspezifische Autorisierungs-Claims. Dieser <strong>JWT-Decoder, Parser und Claims-Inspektor</strong> wandelt die drei Token-Segmente in lesbares JSON um, damit Sie Authentifizierungsabläufe schneller debuggen können.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Dekodiert bedeutet nicht vertrauenswürdig',
      html: 'Jeder kann ein JWT base64url-dekodieren. Vertrauen beginnt erst, nachdem Ihre Anwendung die Signatur mit dem korrekten Secret, öffentlichen Schlüssel oder JWKS verifiziert und dann Aussteller, Audience, Ablauf und alle domainspezifischen Claims validiert hat. Verwenden Sie dieses Tool zur Dateninspektion, nicht um ein Token als authentisch zu akzeptieren.',
    },
    {
      type: 'title',
      text: 'Was Ihnen jedes JWT-Segment verrät',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Segment', 'Typischer Inhalt', 'Debugging-Wert'],
      rows: [
        ['Header', 'Algorithmus, Tokentyp und optionale Schlüssel-ID', 'Zeigt, ob das Token HS256, RS256, ES256 oder eine andere Verifikationsstrategie erwartet.'],
        ['Payload', 'Registrierte Claims und Anwendungs-Claims', 'Enthüllt Identität, Tenant, Scopes, Rollen, Ablauf und Audience-Abweichungen.'],
        ['Signatur', 'Kryptografische Signatur-Bytes als base64url kodiert', 'Bestätigt, dass ein Signatursegment existiert, muss aber mit dem richtigen Schlüssel anderweitig verifiziert werden.'],
      ],
    },
    {
      type: 'title',
      text: 'Claims, die meistens fehlerhafte Authentifizierung erklären',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>exp:</strong> Wenn das Token abgelaufen ist, könnte die Aktualisierungslogik oder die Uhreneinstellung falsch sein.',
        '<strong>nbf:</strong> Wenn das Token noch nicht aktiv ist, könnten die Uhren von Server und Identitätsanbieter nicht synchron sein.',
        '<strong>iss:</strong> Wenn die Aussteller-URL von der Konfiguration abweicht, stammt das Token möglicherweise vom falschen Tenant oder aus der falschen Umgebung.',
        '<strong>aud:</strong> Wenn die Audience nicht mit der API-Kennung übereinstimmt, wurde das Token für eine andere Ressource ausgestellt.',
        '<strong>alg:</strong> Wenn der Algorithmus unerwartet ist, könnte Ihr Verifizierer das Token ablehnen oder einen gefährlichen Konfigurationsfehler aufdecken.',
      ],
    },
    {
      type: 'title',
      text: 'Anwendungsfälle für einen JWT-Parser während der Entwicklung',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Frontend Debugging',
          description: 'Inspizieren Sie ID-Tokens und Access-Tokens, die nach dem Login empfangen wurden, um Scopes, Rollen und Profil-Claims zu bestätigen.',
          icon: 'mdi:monitor-dashboard',
          points: ['Profil-Claims prüfen', 'Scopes und Rollen bestätigen', 'Login-Umgebungen vergleichen'],
        },
        {
          title: 'Backend API QA',
          description: 'Vergleichen Sie erwartete Aussteller- und Audience-Werte mit dem tatsächlich in einem Authorization-Header gesendeten Token.',
          icon: 'mdi:api',
          highlight: true,
          points: ['Audience-Form validieren', 'Aussteller-Abweichungen erkennen', 'Bearer-Tokens inspizieren'],
        },
        {
          title: 'Identitätsanbieter Einrichtung',
          description: 'Prüfen Sie, ob Claims von Auth0, Azure AD, Cognito, Keycloak oder einem benutzerdefinierten Anbieter so geformt sind, wie Ihre App es erwartet.',
          icon: 'mdi:account-key',
          points: ['Tenant-Daten überprüfen', 'Benutzerdefinierte Claims prüfen', 'Anbieter-Zuordnungen vergleichen'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Häufige JWT-Fehler, die dieser Inspektor sichtbar macht',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Schnelle Prüfungen gegen Vertrauensentscheidungen',
      items: [
        {
          pro: 'Sehen Sie fehlerhafte Tokens sofort.',
          con: 'Er kann Ihre erwartete Audience oder Ihren Aussteller nicht kennen.',
        },
        {
          pro: 'Konvertieren Sie Unix-Timestamp-Claims in lesbare Datumsangaben.',
          con: 'Er kann eine Signatur nicht ohne das echte Schlüsselmaterial verifizieren.',
        },
        {
          pro: 'Erkennen Sie fehlende Aussteller-, Audience-, Subjekt- oder Typ-Werte.',
          con: 'Er kann nicht beweisen, dass Scopes und Rollen für Ihre Anwendung sicher sind.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Empfohlener Workflow',
      items: [
        'Dekodieren Sie das Token, um zu verstehen, was der Client oder die API tatsächlich erhalten hat.',
        'Prüfen Sie exp, nbf, iss, aud, sub und alg, bevor Sie der Anwendungslogik nachgehen.',
        'Verifizieren Sie Signaturen und Vertrauensentscheidungen nur in Ihrer Authentifizierungsschicht.',
        'Vermeiden Sie die Weitergabe sensibler Produktions-JWTs in Tickets, Logs oder Screenshots.',
      ],
    },
  ],
};
