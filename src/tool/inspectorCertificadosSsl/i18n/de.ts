import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InspectorCertificadosSslUI } from '../ui';

const slug = 'ssl-tls-zertifikat-inspektor';
const title = 'SSL/TLS Zertifikat Inspektor Online PEM und CRT Dateien prüfen';
const description = 'SSL-Zertifikatsdateien (.pem, .crt, .der) lokal analysieren. Ablaufdaten, Aussteller, Inhaberdaten und SHA-256-Fingerabdrücke prüfen, ohne dass Ihre Daten den Browser verlassen.';

const faqData = [
  {
    question: 'Ist es sicher, mein SSL-Zertifikat auf dieser Website zu analysieren?',
    answer: 'Absolut. Dieses Tool läuft vollständig im Browser. Wenn Sie Ihre .pem- oder .crt-Datei hineinziehen, werden die Daten lokal verarbeitet und nie an einen Server übertragen. Vollständige Privatsphäre.',
  },
  {
    question: 'Welche Zertifikatsformate werden unterstützt?',
    answer: 'Das Tool unterstützt die gängigsten Formate: PEM (Base64-kodiert mit "BEGIN CERTIFICATE"-Kopfzeilen) und DER (Binärformat), die üblicherweise die Erweiterungen .pem, .crt, .cer oder .der haben.',
  },
  {
    question: 'Kann ich das Ablaufdatum einer .crt-Datei einsehen?',
    answer: 'Ja, nach dem Laden der Datei sehen Sie sofort den Abschnitt "Gültigkeitsstatus", der das genaue Ablaufdatum und den aktuellen Gültigkeitsstatus des Zertifikats anzeigt.',
  },
  {
    question: 'Wozu dient der Zertifikatsaussteller?',
    answer: 'Der Aussteller (Issuer) gibt an, welche Zertifizierungsstelle (CA) die Identität der Website bestätigt hat. Er zeigt, ob das Zertifikat von gängigen Browsern anerkannt wird.',
  },
  {
    question: 'Wie werden SHA-256-Fingerabdrücke berechnet?',
    answer: 'Sie werden berechnet, indem ein Hash-Algorithmus direkt auf den binären Inhalt des Zertifikats angewendet wird. Sie dienen dazu, zu überprüfen, dass die Datei nicht manipuliert wurde und mit dem übereinstimmt, was der Server erwartet.',
  },
];

const howToData = [
  { name: 'Datei suchen', text: 'Suchen Sie auf Ihrem Computer die Datei mit der Erweiterung .pem, .crt, .cer oder .der.' },
  { name: 'Drag & Drop', text: 'Ziehen Sie die Datei einfach in den gepunkteten Bereich oben.' },
  { name: 'Ergebnisse ansehen', text: 'Sofort sehen Sie, wer das Zertifikat ausgestellt hat, für wen es gilt, wann es abläuft und seine Fingerabdrücke.' },
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

const ui: InspectorCertificadosSslUI = {
  labelAnalyzeCertificate: 'Zertifikat analysieren',
  dragDropText: 'Ziehen Sie Ihre .pem, .crt oder .cer Datei hierher',
  dragDropSubtext: '(100% lokale Verarbeitung in Ihrem Browser)',
  cardStatusTitle: 'Gültigkeitsstatus',
  cardSubjectTitle: 'Inhaber (Subject)',
  cardIssuerTitle: 'Aussteller (CA)',
  cardFingerprintsTitle: 'Fingerabdrücke',
  cardTechnicalTitle: 'Technische Details',
  labelValidityStatus: 'Status:',
  labelExpiryDate: 'Läuft ab am',
  labelIssueDate: 'Ausgestellt am',
  labelSha256: 'SHA-256 Fingerabdruck',
  labelSha1: 'SHA-1 Fingerabdruck',
  labelSignatureAlgorithm: 'Signaturalgorithmus',
  labelVersion: 'X.509 Version',
  labelSerialNumber: 'Seriennummer',
  labelCommonName: 'Common Name',
  labelOrganization: 'Organization',
  labelOrgUnit: 'Org. Unit',
  labelLocality: 'Locality',
  labelState: 'State/Province',
  labelCountry: 'Country',
  labelEmail: 'Email',
  statusValid: 'Gültig',
  statusExpired: 'Abgelaufen',
  errorMessageInvalid: 'Ungültige Datei.',
  supportedFormats: '.pem, .crt, .cer, .der',
};

export const content: ToolLocaleContent<InspectorCertificadosSslUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Technische Ressourcen zu SSL/TLS-Zertifikaten',
  bibliography: [
    { name: 'RFC 5280: Internet X.509 Public Key Infrastructure Certificate and CRL Profile', url: 'https://datatracker.ietf.org/doc/html/rfc5280' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'Mozilla: SSL/TLS Verschlüsselung – Übersicht', url: 'https://developer.mozilla.org/de/docs/Glossary/TLS' },
    { name: 'OpenSSL: X.509 Zertifikatsformat Dokumentation', url: 'https://www.openssl.org/docs/man1.1.1/man1/x509.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Was ist ein SSL/TLS-Zertifikat-Inspektor und warum brauchen Sie ihn?', level: 2 },
    {
      type: 'paragraph',
      html: 'In der Welt der Webentwicklung und Cybersicherheit sind <strong>SSL- (Secure Sockets Layer) und TLS-Zertifikate (Transport Layer Security)</strong> das Fundament des digitalen Vertrauens. Ein digitales Zertifikat ist im Grunde eine Datei, die einen kryptografischen Schlüssel mit den Daten einer Organisation oder Domain verknüpft. Diese Dateien liegen jedoch oft in Binärformaten (.der) oder Base64-kodiert (.pem, .crt) vor und sind auf den ersten Blick nicht lesbar.',
    },
    {
      type: 'paragraph',
      html: 'Unser <strong>SSL/TLS-Zertifikat-Inspektor</strong> ermöglicht es Ihnen, diese Dateien visuell und sicher zu öffnen. Anders als Tools, die eine öffentliche Domain abfragen (wie der bekannte SSL-Labs-Test), arbeitet dieses Werkzeug direkt mit der Datei auf Ihrem Gerät. Das ist besonders wichtig, wenn Sie Nginx- oder Apache-Server konfigurieren oder Zertifikate in einen AWS- oder Google-Cloud-Loadbalancer laden und vor dem Hochladen prüfen möchten, ob die Datei korrekt ist.',
    },
    { type: 'title', text: 'So prüfen Sie eine .pem- oder .crt-Datei Schritt für Schritt', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein Zertifikat mit unserem Tool zu analysieren ist denkbar einfach und erfordert keinerlei Kenntnisse der Kommandozeile (OpenSSL). Folgen Sie diesen Schritten:',
    },
    {
      type: 'list',
      items: [
        '<strong>Datei suchen:</strong> Suchen Sie auf Ihrem Computer die Datei mit der Erweiterung .pem, .crt, .cer oder .der.',
        '<strong>Drag & Drop:</strong> Ziehen Sie die Datei einfach in den gepunkteten Bereich oben.',
        '<strong>Ergebnisse ansehen:</strong> Sofort sehen Sie, wer das Zertifikat ausgestellt hat, für wen es gilt, wann es abläuft und seine Fingerabdrücke.',
      ],
    },
    {
      type: 'tip',
      title: 'Vollständige Privatsphäre',
      html: 'Das Wichtigste an diesem Prozess ist der <strong>Datenschutz</strong>. Die Datei wird niemals auf unsere Server hochgeladen. Die gesamte Verarbeitung der ASN.1-Struktur des Zertifikats findet im RAM Ihres eigenen Browsers statt. Maximale Sicherheit für Ihre öffentlichen Schlüssel.',
    },
    { type: 'title', text: 'Die wichtigsten Felder bei der Zertifikatsanalyse', level: 2 },
    {
      type: 'paragraph',
      html: 'Bei der Analyse Ihres Zertifikats schlüsseln wir die relevantesten technischen Informationen auf, damit Sie alles auf einen Blick überprüfen können:',
    },
    {
      type: 'list',
      items: [
        '<strong>Inhaber (Subject):</strong> Zeigt die Daten des Zertifikatsinhabers, einschließlich Common Name (CN), Organisation und Standort.',
        '<strong>Aussteller (Issuer):</strong> Gibt die Zertifizierungsstelle (CA) an, die das Zertifikat signiert hat (z. B. Let\'s Encrypt, DigiCert).',
        '<strong>Gültigkeitszeitraum:</strong> Zeigt das genaue Ausstellungsdatum und das kritische Ablaufdatum.',
        '<strong>Fingerabdrücke:</strong> SHA-256- und SHA-1-Fingerabdrücke dienen zur Überprüfung der Dateiintegrität.',
      ],
    },
    { type: 'title', text: 'Unterstützte Formate: PEM, CRT, CER und DER', level: 2 },
    {
      type: 'paragraph',
      html: 'Es gibt verschiedene Zertifikatsdateiformate, die manchmal verwirrend sein können. Unser Tool unterstützt die gängigsten:',
    },
    {
      type: 'list',
      items: [
        '<strong>PEM (.pem, .crt, .cer):</strong> Das häufigste Format unter Linux und auf Webservern. Beginnt mit der Zeile <code>-----BEGIN CERTIFICATE-----</code>.',
        '<strong>DER (.der, .cer):</strong> Das Binärformat. Weit verbreitet in Windows-Umgebungen (Java, Active Directory) und ohne Spezialtools meist schwer lesbar.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Selbst wenn Ihre Datei eine ungewöhnliche Erweiterung hat – sofern die interne Struktur ein standardkonformes X.509-Zertifikat ist, kann unser auf <strong>node-forge</strong> basierender Parser es problemlos verarbeiten.',
    },
    { type: 'title', text: 'Warum dieses Tool statt OpenSSL nutzen?', level: 2 },
    {
      type: 'paragraph',
      html: 'OpenSSL ist das Schweizer Taschenmesser der Kryptografie – aber seine Befehle sind schwer zu merken. Um ein Zertifikat über die Kommandozeile anzuzeigen, müssten Sie Folgendes eingeben:',
    },
    { type: 'code', text: 'openssl x509 -in certificado.crt -text -noout' },
    {
      type: 'paragraph',
      html: 'Unser Tool bietet klare Vorteile im täglichen Arbeitsablauf:',
    },
    {
      type: 'list',
      items: [
        '<strong>Schnelligkeit:</strong> Kein Terminal öffnen, keine komplexen Flags merken.',
        '<strong>Übersichtlichkeit:</strong> Feldnamen (Locality, Organization) werden lesbar formatiert, nicht als kryptische Kürzel wie "L" oder "O".',
        '<strong>Gültigkeitswarnungen:</strong> Automatische Berechnung, ob das Zertifikat heute noch gültig ist – kein manueller Datumsabgleich nötig.',
        '<strong>Plattformunabhängig:</strong> Funktioniert auf jedem Betriebssystem mit einem modernen Browser, ohne Installation zusätzlicher Software.',
      ],
    },
    { type: 'title', text: 'Sicherheit und Datenschutz: Ihr Zertifikat verlässt nie Ihren Browser', level: 2 },
    {
      type: 'paragraph',
      html: 'Als Entwickler weiß ich, wie sensibel der Umgang mit solchen Informationen ist. Obwohl ein Zertifikat technisch gesehen <strong>öffentliche Information</strong> ist (es wird an jeden Browser übertragen, der Ihre Website besucht), ist es dennoch gute Praxis, Dateien nicht unnötig auf externe Server hochzuladen.',
    },
    {
      type: 'paragraph',
      html: 'Dieses Tool verwendet JavaScript, das ausschließlich im Browser läuft. Wenn Sie die Datei hineinziehen, wird ihr Inhalt lokal gelesen und verarbeitet. Sie können das selbst testen, indem Sie die Internetverbindung trennen: Das Tool funktioniert weiterhin genauso.',
    },
    { type: 'title', text: 'Typische Anwendungsfälle für den SSL-Inspektor', level: 2 },
    {
      type: 'paragraph',
      html: 'Wann lohnt es sich, diese Seite zu bookmarken?',
    },
    {
      type: 'list',
      items: [
        '<strong>Server-Debugging:</strong> Wenn Sie ein Zertifikat installiert haben, die Website aber weiterhin Fehler wirft – um sicherzustellen, dass nicht versehentlich das alte Zertifikat geladen wurde.',
        '<strong>Kettenprüfung:</strong> Um festzustellen, ob eine Datei das Endzertifikat oder ein Zwischenzertifikat enthält.',
        '<strong>Asset-Audit:</strong> Um nachzuvollziehen, welche Zertifizierungsstelle in einem älteren Projekt verwendet wurde.',
        '<strong>Integritätsprüfung:</strong> Beim Verschieben von Zertifikaten zwischen Servern – durch Vergleich des SHA-256-Fingerabdrucks lässt sich sicherstellen, dass die Datei nicht beschädigt ist.',
      ],
    },
  ],
};
