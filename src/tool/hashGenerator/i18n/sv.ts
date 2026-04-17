import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashGeneratorUI } from '../ui';

const slug = 'hashgenerator-sakekerhet';
const title = 'Online Säkerhetshashgenerator';
const description = 'Beräkna MD5, SHA-1, SHA-256 och SHA-512 hashar direkt. Gratis, privat och supersnabbt säkerhetsverktyg för utvecklare. 100 % Client-Side.';

const faqData = [
  {
    question: 'Vad är en hash och vad används den till?',
    answer: 'En hash är ett unikt digitalt fingeravtryck av en text eller fil. Den används för att verifiera att data inte har manipulerats och för att lagra lösenord säkert.',
  },
  {
    question: 'Är det säkert att använda denna online-generator?',
    answer: 'Ja, det är helt säkert. Till skillnad från andra webbplatser bearbetar vi hashen direkt i din webbläsare. Dina data skickas aldrig till någon server.',
  },
  {
    question: 'Vilken hashalgoritm ska jag välja?',
    answer: 'För modern säkerhet och nyckellagring rekommenderar vi SHA-256 eller SHA-512. MD5 och SHA-1 bör endast användas för kompatibilitet med äldre system.',
  },
  {
    question: "Vad innebär det att lägga till ett 'Salt'?",
    answer: 'Ett Salt är en extra textsträng som blandas med din text för att göra hashen unik och mycket svårare att knäcka genom ordboksattacker.',
  },
];

const howToData = [
  { name: 'Ange text', text: 'Skriv eller klistra in texten du vill hasha i inmatningsrutan.' },
  { name: 'Konfigurera säkerhet', text: 'Lägg till ett valfritt Salt eller öka bearbetningsrundorna för större robusthet.' },
  { name: 'Få resultat', text: 'De olika hasharna (MD5, SHA etc.) beräknas i realtid medan du skriver.' },
  { name: 'Kopiera hash', text: 'Klicka på kopieringsikonen bredvid varje algoritm för att spara den till ditt urklipp.' },
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
  inLanguage: 'sv',
};

const ui: HashGeneratorUI = {
  labelInput: 'Inmatningstext',
  placeholderInput: 'Skriv eller klistra in text här för att beräkna dess hashar...',
  labelSalt: 'Salt (valfritt)',
  placeholderSalt: 'Säkerhets-seed...',
  labelRounds: 'Rundor (Stretch)',
  copyMd5: 'Kopiera MD5',
  copySha1: 'Kopiera SHA-1',
  copySha256: 'Kopiera SHA-256',
  copySha512: 'Kopiera SHA-512',
};

export const content: ToolLocaleContent<HashGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Tekniska resurser om hashing',
  bibliography: [
    { name: 'MDN Web Docs: SubtleCrypto.digest() API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'IETF: The MD5 Message-Digest Algorithm (RFC 1321)', url: 'https://datatracker.ietf.org/doc/html/rfc1321' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Vad är en kryptografisk hash?', level: 2 },
    {
      type: 'paragraph',
      html: 'En <strong>kryptografisk hash</strong> är en matematisk funktion som omvandlar vilken mängd data som helst till en sträng med fast längd. Samma inmatning ger alltid samma utmatning, men varje minimal ändring i inmatningen genererar en helt annan hash.',
    },
    { type: 'title', text: 'Tillgängliga algoritmer', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>MD5 (128 bitar):</strong> Snabb och allmänt stödd. Betraktas som osäker för lösenord men användbar för filintegritetskontroller i icke-kritiska miljöer.',
        '<strong>SHA-1 (160 bitar):</strong> Föråldrad för kritiska säkerhetsändamål sedan 2017. Finns fortfarande kvar i äldre system.',
        '<strong>SHA-256 (256 bitar):</strong> Den nuvarande standarden för de flesta applikationer. Används i Bitcoin, TLS och kodsignering.',
        '<strong>SHA-512 (512 bitar):</strong> Längre variant av SHA-2, idealisk när maximal kollisionsresistens krävs.',
      ],
    },
    { type: 'title', text: 'Salt och Key Stretching', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>Salt</strong> är en slumpmässig sträng som läggs till texten före hashning, vilket säkerställer att två identiska inmatningar ger olika hashar. <strong>Key Stretching</strong> (rundor) tillämpar hashfunktionen flera gånger för att försvåra brute force-attacker.',
    },
    { type: 'title', text: 'Total integritet: 100 % Client-Side', level: 3 },
    {
      type: 'paragraph',
      html: 'Detta verktyg använder webbläsarens <strong>Web Crypto API</strong> för SHA och en ren TypeScript-implementering för MD5. All bearbetning sker lokalt: dina data lämnar aldrig din enhet.',
    },
  ],
};

