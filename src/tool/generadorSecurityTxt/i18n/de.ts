import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GeneradorSecurityTxtUI } from '../ui';

const slug = 'security-txt-generator-rfc-9116-de';
const title = 'Security.txt Generator RFC 9116';
const description = 'Erstellen Sie Ihre professionelle security.txt-Datei, um die Meldung von Sicherheitslücken zu erleichtern und internationale Webstandards zu erfüllen.';

const faqData = [
  {
    question: 'Was ist die security.txt-Datei?',
    answer: 'Es handelt sich um einen Standard (RFC 9116), der es Webseiten ermöglicht, festzulegen, wie Sicherheitsforscher sie kontaktieren sollen, um Schwachstellen verantwortungsvoll zu melden.',
  },
  {
    question: 'Wo sollte die security.txt-Datei abgelegt werden?',
    answer: 'Der empfohlene Standardspeicherort ist der Ordner /.well-known/ Ihrer Domain, was zur URL https://example.com/.well-known/security.txt führt.',
  },
  {
    question: 'Warum ist das Ablaufdatum Pflicht?',
    answer: 'Um sicherzustellen, dass Kontaktinformationen nicht veralten. Fehlt ein gültiges Ablaufdatum, vertrauen Forscher möglicherweise nicht darauf, dass die Kommunikationskanäle noch aktiv sind.',
  },
  {
    question: 'Welche Felder sind in einer security.txt erforderlich?',
    answer: 'Laut RFC 9116 sind die Pflichtfelder „Contact" (mit einer E-Mail-Adresse oder URL) und „Expires" (mit einem zukünftigen Datum im ISO-8601-Format).',
  },
];

const howToData = [
  { name: 'Felder ausfüllen', text: 'Tragen Sie Ihre E-Mail-Adresse oder Kontakt-URL ein und wählen Sie ein Ablaufdatum.' },
  { name: 'Optionale Felder hinzufügen', text: 'Ergänzen Sie weitere Angaben wie Ihren PGP-Schlüssel, Ihre Sicherheitsrichtlinie oder Stellenangebote.' },
  { name: 'Datei herunterladen oder kopieren', text: 'Klicken Sie auf „.txt herunterladen" oder kopieren Sie den Inhalt und speichern Sie ihn als security.txt.' },
  { name: 'Auf den Server hochladen', text: 'Legen Sie die Datei im Ordner /.well-known/ Ihrer Domain ab.' },
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
  inLanguage: 'de',
};

const ui: GeneradorSecurityTxtUI = {
  titleBasicFields: 'Pflichtfelder',
  labelContact: 'Kontakt (E-Mail oder URL)',
  placeholderContact: 'mailto:security@example.com oder https://example.com/kontakt',
  contactTip: 'Adresse, an die Sicherheitsmeldungen gesendet werden sollen.',
  labelExpires: 'Ablaufdatum',
  expiresTip: 'Sollte höchstens ein Jahr in der Zukunft liegen.',
  titleOptionalFields: 'Optionale Felder',
  labelEncryption: 'Öffentlicher Schlüssel',
  placeholderEncryption: 'https://example.com/pgp-key.txt',
  encryptionTip: 'Link zu Ihrem PGP-Schlüssel für verschlüsselte Meldungen.',
  labelPolicy: 'Sicherheitsrichtlinie',
  placeholderPolicy: 'https://example.com/sicherheit/richtlinie/',
  policyTip: 'Seite, die den Umgang mit Schwachstellen beschreibt.',
  labelAcknowledgments: 'Danksagungen',
  placeholderAcknowledgments: 'https://example.com/sicherheit/hall-of-fame/',
  acknowledgmentsTip: 'Seite zur Würdigung von Sicherheitsforschern.',
  labelHiring: 'Stellenangebote',
  placeholderHiring: 'https://example.com/jobs',
  hiringTip: 'Link zu Sicherheitsstellen im Unternehmen.',
  resultTitle: 'Vorschau (security.txt)',
  btnCopy: 'Code kopieren',
  btnDownload: '.txt herunterladen',
  copiedMessage: 'Kopiert',
  generatingMessage: 'security.txt-Datei wird erstellt...',
  comment: 'Erstellt',
};

export const content: ToolLocaleContent<GeneradorSecurityTxtUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Technische Ressourcen zu Security.txt',
  bibliography: [
    { name: 'RFC 9116: A File Format to Aid in Security Vulnerability Disclosure', url: 'https://datatracker.ietf.org/doc/html/rfc9116' },
    { name: 'Security.txt Official Website', url: 'https://securitytxt.org/' },
    { name: 'OWASP: Vulnerability Disclosure Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Was ist eine Security.txt-Datei und warum sollten Sie eine erstellen?', level: 2 },
    {
      type: 'paragraph',
      html: 'Im heutigen Cybersicherheitsumfeld sind Transparenz und Kommunikation entscheidend. Als Systemadministrator, Webentwickler oder Betreiber eines digitalen Unternehmens kennen Sie sicher Textdateien, die Maschinen helfen, Ihre Website zu verstehen, wie <code>robots.txt</code> oder <code>ads.txt</code>. Es gibt jedoch einen weniger bekannten, aber grundlegenden Standard für die Integrität Ihrer Plattform: <strong>Security.txt</strong>, definiert durch <strong>RFC 9116</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Der Zweck von <strong>security.txt</strong> besteht darin, Sicherheitsforschern eine standardisierte Möglichkeit zu bieten, die Verantwortlichen einer Website zu kontaktieren, wenn sie eine Schwachstelle entdecken. Ohne diese Datei weiß ein ethischer Hacker, der einen Fehler in Ihrem System findet, möglicherweise nicht, an wen er sich wenden soll — mit der Folge, dass die Information verloren geht, ohne Vorwarnung veröffentlicht oder von Angreifern ausgenutzt wird.',
    },
    { type: 'title', text: 'Security.txt nach RFC 9116 erstellen und einbinden', level: 2 },
    {
      type: 'paragraph',
      html: 'Der <strong>Standard für den Kontakt zu Sicherheitsforschern</strong> schreibt vor, dass diese Datei an einem bestimmten Ort auf Ihrem Server liegen muss: im Ordner <code>/.well-known/</code>. Der finale Pfad lautet in der Regel <code>https://ihredomain.de/.well-known/security.txt</code>. Die Ablage im Root-Verzeichnis (<code>/security.txt</code>) ist zwar ebenfalls zulässig, wird von automatischen Scan-Tools jedoch weniger bevorzugt.',
    },
    { type: 'title', text: 'Pflichtfelder, die nicht fehlen dürfen', level: 3 },
    {
      type: 'paragraph',
      html: 'Ihre <strong>security.txt</strong> muss mindestens zwei kritische Elemente enthalten:',
    },
    {
      type: 'list',
      items: [
        '<strong>Contact:</strong> E-Mail-Adresse oder URL eines Formulars für eingehende Meldungen. Muss mit <code>mailto:</code> oder <code>https://</code> beginnen.',
        '<strong>Expires:</strong> Ein Datum im ISO-8601-Format, das angibt, wann die Dateiinformationen ungültig werden. Es wird empfohlen, nicht mehr als ein Jahr in der Zukunft anzugeben.',
      ],
    },
    { type: 'code', text: 'Contact: mailto:security@ihrunternehmen.de\nExpires: 2025-12-31T23:59:59.000Z' },
    { type: 'title', text: 'Optionale Felder für erweiterten Schutz', level: 3 },
    {
      type: 'paragraph',
      html: 'Für Websites, die einen umfassenderen <strong>Webseitenschutz</strong> anstreben, bietet der Standard weitere Felder:',
    },
    {
      type: 'list',
      items: [
        '<strong>Encryption:</strong> Ein Link zu Ihrem öffentlichen PGP-Schlüssel, damit Forscher Ihnen verschlüsselte Informationen zusenden können.',
        '<strong>Policy:</strong> Ein Link zu Ihrer Sicherheitsrichtlinien-Seite, auf der Sie den Prozess der verantwortungsvollen Offenlegung erläutern.',
        '<strong>Acknowledgments:</strong> Ein Link zu Ihrer „Hall of Fame" oder Danksagungsseite für Sicherheitsforscher.',
        '<strong>Hiring:</strong> Ein Link zu Ihren offenen Stellen im Bereich Cybersicherheit.',
      ],
    },
    { type: 'title', text: 'Vorteile unseres kostenlosen Security.txt-Generators', level: 2 },
    {
      type: 'paragraph',
      html: 'Viele fragen sich, wie sie schnell und unkompliziert einen <strong>Sicherheitskontakt</strong> für ihre Website einrichten können. Mit unserem Tool stellen Sie sicher, dass Ihre Datei exakt dem RFC-9116-Format entspricht, ohne aufwendige technische Dokumente lesen zu müssen.',
    },
    {
      type: 'paragraph',
      html: 'Ein Generator bewahrt Sie vor typischen Syntaxfehlern. Das Vergessen des Präfixes <code>mailto:</code> oder eine falsch formatierte Zeitzone im Ablaufdatum kann dazu führen, dass automatisierte Tools von Forschern Ihre Datei einfach ignorieren.',
    },
    { type: 'title', text: 'Auswirkungen auf SEO und Web-Reputation', level: 3 },
      {
      type: 'paragraph',
      html: 'Die Datei <code>security.txt</code> ist zwar kein direkter Rankingfaktor bei Google wie Ladegeschwindigkeit oder HTTPS, wirkt sich aber indirekt aus. Eine Website, die Schwachstellen gut verwaltet, vermeidet laute Hacks (Defacement, Spam-Injektionen), die das SEO innerhalb von Stunden ruinieren können. Darüber hinaus vergeben viele Plattformen für unternehmensweites Sicherheitsrating (wie SecurityScorecard oder BitSight) Bonuspunkte an Domains, die diesen Standard implementieren.',
    },
    { type: 'title', text: 'Fazit: Ein einfacher Schritt für mehr Sicherheit im Web', level: 2 },
    {
      type: 'paragraph',
      html: 'Kurz gesagt: <strong>security.txt herunterladen</strong> und auf Ihren Server hochladen gehört zu den schnellsten und wirkungsvollsten Sicherheitsmaßnahmen, die Sie noch heute umsetzen können. Sie erleichtern den „Guten" die Arbeit, schrecken Neugierige ab und signalisieren der Welt, dass Sie Datenschutz und Nutzerdaten ernst nehmen.',
    },
    {
      type: 'paragraph',
      html: 'Warten Sie nicht auf einen Sicherheitsvorfall, um es zu bereuen, keinen Kommunikationskanal bereitgestellt zu haben. Nutzen Sie unseren <strong>Security.txt-Generator</strong> jetzt und halten Sie Ihr digitales Ökosystem unter Kontrolle.',
    },
  ],
};

