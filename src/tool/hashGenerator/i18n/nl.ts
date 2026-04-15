import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashGeneratorUI } from '../ui';

const slug = 'hash-generator-nl';
const title = 'Online Beveiligings Hash Generator';
const description = 'Bereken direct MD5, SHA-1, SHA-256 en SHA-512 hashes. Gratis, privé en ultrasnelle beveiligingstool voor ontwikkelaars. 100% Client-Side.';

const faqData = [
  {
    question: 'Wat is een hash en waarvoor wordt het gebruikt?',
    answer: 'Een hash is een unieke digitale vingerafdruk van een tekst of bestand. Het wordt gebruikt om te verifiëren dat gegevens niet zijn gemanipuleerd en om wachtwoorden veilig op te slaan.',
  },
  {
    question: 'Is het veilig om deze online generator te gebruiken?',
    answer: 'Ja, het is volledig veilig. In tegenstelling tot andere sites, verwerken wij de hash direct in uw browser. Uw gegevens worden nooit naar een server verzonden.',
  },
  {
    question: 'Welk hash-algoritme moet ik kiezen?',
    answer: 'Voor moderne beveiliging en sleutelopslag raden we SHA-256 of SHA-512 aan. MD5 en SHA-1 mogen alleen worden gebruikt voor compatibiliteit met oudere systemen.',
  },
  {
    question: "Wat betekent het toevoegen van een 'Salt'?",
    answer: 'Een Salt is een extra tekenreeks die aan uw tekst wordt toegevoegd om de hash uniek te maken en het kraken via dictionary attacks veel moeilijker te maken.',
  },
];

const howToData = [
  { name: 'Voer tekst in', text: 'Typ of plak de tekst waarvan u de hash wilt berekenen in het invoervak.' },
  { name: 'Configureer beveiliging', text: 'Voeg een optionele Salt toe of verhoog het aantal verwerkingsrondes voor meer robuustheid.' },
  { name: 'Krijg resultaten', text: 'De verschillende hashes (MD5, SHA enz.) worden real-time berekend terwijl u typt.' },
  { name: 'Kopieer de Hash', text: 'Klik op het kopieericoon naast elk algoritme om het naar uw klembord te kopiëren.' },
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
  inLanguage: 'nl',
};

const ui: HashGeneratorUI = {
  labelInput: 'Invoertekst',
  placeholderInput: 'Typ of plak hier tekst om de hashes te berekenen...',
  labelSalt: 'Salt (Optioneel)',
  placeholderSalt: 'Beveiligings-seed...',
  labelRounds: 'Rondes (Stretch)',
  copyMd5: 'Kopieer MD5',
  copySha1: 'Kopieer SHA-1',
  copySha256: 'Kopieer SHA-256',
  copySha512: 'Kopieer SHA-512',
};

export const content: ToolLocaleContent<HashGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Technische Bronnen over Hashing',
  bibliography: [
    { name: 'MDN Web Docs: SubtleCrypto.digest() API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'IETF: The MD5 Message-Digest Algorithm (RFC 1321)', url: 'https://datatracker.ietf.org/doc/html/rfc1321' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Wat is een cryptografische hash?', level: 2 },
    {
      type: 'paragraph',
      html: 'Een <strong>cryptografische hash</strong> is een wiskundige functie die elke hoeveelheid gegevens transformeert in een tekenreeks van vaste lengte. Dezelfde invoer produceert altijd dezelfde uitvoer, maar elke minimale wijziging in de invoer genereert een volledig andere hash.',
    },
    { type: 'title', text: 'Beschikbare algoritmen', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>MD5 (128 bits):</strong> Snel en breed ondersteund. Wordt als onveilig beschouwd voor wachtwoorden, maar is nuttig voor bestandsintegriteitscontroles in niet-kritieke omgevingen.',
        '<strong>SHA-1 (160 bits):</strong> Verouderd voor kritieke beveiligingstaken sinds 2017. Nog steeds aanwezig in oudere systemen.',
        '<strong>SHA-256 (256 bits):</strong> De huidige standaard voor de meeste toepassingen. Gebruikt in Bitcoin, TLS en code-ondertekening.',
        '<strong>SHA-512 (512 bits):</strong> Langere variant van SHA-2, ideaal wanneer maximale collision resistance vereist is.',
      ],
    },
    { type: 'title', text: 'Salt en Key Stretching', level: 3 },
    {
      type: 'paragraph',
      html: 'De <strong>Salt</strong> is een willekeurige tekenreeks die aan de tekst wordt toegevoegd vóór het hashen, wat ervoor zorgt dat twee identieke invoerwaarden verschillende hashes produceren. <strong>Key Stretching</strong> (rondes) past de hash-functie meerdere keren toe om deze te verharden tegen brute-force aanvallen.',
    },
    { type: 'title', text: 'Totale privacy: 100% Client-Side', level: 3 },
    {
      type: 'paragraph',
      html: 'Deze tool gebruikt de <strong>Web Crypto API</strong> van de browser voor SHA en een pure TypeScript-implementatie voor MD5. Alle verwerking gebeurt lokaal: uw gegevens verlaten nooit uw apparaat.',
    },
  ],
};

