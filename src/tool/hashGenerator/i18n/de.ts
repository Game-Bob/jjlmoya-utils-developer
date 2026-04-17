import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashGeneratorUI } from '../ui';

const slug = 'hash-berechner-online';
const title = 'Online Sicherheits Hash Generator';
const description = 'Berechnen Sie sofort MD5, SHA-1, SHA-256 und SHA-512-Hashes. Kostenloses, privates und ultraschnelles Sicherheitstool für Entwickler. 100 % Client-Side.';

const faqData = [
  {
    question: 'Was ist ein Hash und wofür wird er verwendet?',
    answer: 'Ein Hash ist ein eindeutiger digitaler Fingerabdruck eines Textes oder einer Datei. Er wird verwendet, um sicherzustellen, dass Daten nicht manipuliert wurden, und um Passwörter sicher zu speichern.',
  },
  {
    question: 'Ist es sicher, diesen Online-Generator zu verwenden?',
    answer: 'Ja, es ist absolut sicher. Im Gegensatz zu anderen Websites verarbeiten wir den Hash direkt in Ihrem Browser. Ihre Daten werden niemals an einen Server gesendet.',
  },
  {
    question: 'Welchen Hash-Algorithmus sollte ich wählen?',
    answer: 'Für moderne Sicherheit und Speicherung von Schlüsseln empfehlen wir SHA-256 oder SHA-512. MD5 und SHA-1 sollten nur aus Kompatibilitätsgründen mit Altsystemen verwendet werden.',
  },
  {
    question: 'Was bedeutet das Hinzufügen eines "Salt"?',
    answer: 'Ein Salt ist eine zusätzliche Zeichenfolge, die mit Ihrem Text gemischt wird, um den Hash eindeutig zu machen und das Knacken durch Wörterbuchangriffe erheblich zu erschweren.',
  },
];

const howToData = [
  { name: 'Text eingeben', text: 'Geben Sie den Text, den Sie hashen möchten, in das Eingabefeld ein oder fügen Sie ihn ein.' },
  { name: 'Sicherheit konfigurieren', text: 'Fügen Sie ein optionales Salt hinzu oder erhöhen Sie die Verarbeitungsrunden für mehr Robustheit.' },
  { name: 'Ergebnisse erhalten', text: 'Die verschiedenen Hashes (MD5, SHA etc.) werden während der Eingabe in Echtzeit berechnet.' },
  { name: 'Hash kopieren', text: 'Klicken Sie auf das Kopiersymbol neben jedem Algorithmus, um ihn in Ihre Zwischenablage zu speichern.' },
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

const ui: HashGeneratorUI = {
  labelInput: 'Eingabetext',
  placeholderInput: 'Geben Sie Text hier ein, um seine Hashes zu berechnen...',
  labelSalt: 'Salt (Optional)',
  placeholderSalt: 'Sicherheits-Seed...',
  labelRounds: 'Runden (Stretch)',
  copyMd5: 'MD5 kopieren',
  copySha1: 'SHA-1 kopieren',
  copySha256: 'SHA-256 kopieren',
  copySha512: 'SHA-512 kopieren',
};

export const content: ToolLocaleContent<HashGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Technische Ressourcen zu Hashing',
  bibliography: [
    { name: 'MDN Web Docs: SubtleCrypto.digest() API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'IETF: The MD5 Message-Digest Algorithm (RFC 1321)', url: 'https://datatracker.ietf.org/doc/html/rfc1321' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Was ist ein kryptografischer Hash?', level: 2 },
    {
      type: 'paragraph',
      html: 'Ein <strong>kryptografischer Hash</strong> ist eine mathematische Funktion, die eine beliebige Datenmenge in eine Zeichenfolge fester Länge umwandelt. Dieselbe Eingabe erzeugt immer dieselbe Ausgabe, aber jede minimale Änderung an der Eingabe erzeugt einen völlig anderen Hash.',
    },
    { type: 'title', text: 'Verfügbare Algorithmen', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>MD5 (128 Bit):</strong> Schnell und weit verbreitet. Gilt als unsicher für Passwörter, ist aber für Datenintegritätsprüfungen in unkritischen Umgebungen nützlich.',
        '<strong>SHA-1 (160 Bit):</strong> Seit 2017 für kritische Sicherheitsanwendungen veraltet. In Altsystemen immer noch vorhanden.',
        '<strong>SHA-256 (256 Bit):</strong> Der aktuelle Standard für die meisten Anwendungen. Wird in Bitcoin, TLS und Code-Signierung verwendet.',
        '<strong>SHA-512 (512 Bit):</strong> Längere Variante von SHA-2, ideal, wenn maximale Kollisionssicherheit erforderlich ist.',
      ],
    },
    { type: 'title', text: 'Salt und Key Stretching', level: 3 },
    {
      type: 'paragraph',
      html: 'Das <strong>Salt</strong> ist eine zufällige Zeichenfolge, die dem Text vor dem Hashing hinzugefügt wird, um sicherzustellen, dass zwei identische Eingaben unterschiedliche Hashes erzeugen. <strong>Key Stretching</strong> (Runden) wendet die Hash-Funktion mehrmals an, um gegen Brute-Force-Angriffe resistenter zu machen.',
    },
    { type: 'title', text: 'Absolute Privatsphäre: 100 % Client-Side', level: 3 },
    {
      type: 'paragraph',
      html: 'Dieses Tool verwendet die <strong>Web Crypto API</strong> des Browsers für SHA und eine reine TypeScript-Implementierung für MD5. Die gesamte Verarbeitung erfolgt lokal: Ihre Daten verlassen niemals Ihr Gerät.',
    },
  ],
};

