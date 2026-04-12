import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashGeneratorUI } from '../ui';

const slug = 'hash-generator';
const title = 'Online Security Hash Generator';
const description = 'Calculate MD5, SHA-1, SHA-256 and SHA-512 hashes instantly. Free, private and ultra-fast security tool for developers. 100% Client-Side.';

const faqData = [
  {
    question: 'What is a hash and what is it used for?',
    answer: 'A hash is a unique digital fingerprint of a text or file. It is used to verify that data has not been tampered with and to store passwords securely.',
  },
  {
    question: 'Is it safe to use this online generator?',
    answer: 'Yes, it is completely safe. Unlike other sites, we process the hash directly in your browser. Your data is never sent to any server.',
  },
  {
    question: 'Which hash algorithm should I choose?',
    answer: 'For modern security and key storage, we recommend SHA-256 or SHA-512. MD5 and SHA-1 should only be used for compatibility with legacy systems.',
  },
  {
    question: "What does adding a 'Salt' mean?",
    answer: 'A Salt is an extra string mixed with your text to make the hash unique and much harder to crack through dictionary attacks.',
  },
];

const howToData = [
  { name: 'Enter Text', text: 'Type or paste the text you want to hash into the input box.' },
  { name: 'Configure Security', text: 'Add an optional Salt or increase processing rounds for greater robustness.' },
  { name: 'Get Results', text: 'The different hashes (MD5, SHA etc.) are calculated in real time as you type.' },
  { name: 'Copy the Hash', text: 'Click the copy icon next to each algorithm to save it to your clipboard.' },
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
  inLanguage: 'en',
};

const ui: HashGeneratorUI = {
  labelInput: 'Input text',
  placeholderInput: 'Type or paste text here to calculate its hashes...',
  labelSalt: 'Salt (Optional)',
  placeholderSalt: 'Security seed...',
  labelRounds: 'Rounds (Stretch)',
  copyMd5: 'Copy MD5',
  copySha1: 'Copy SHA-1',
  copySha256: 'Copy SHA-256',
  copySha512: 'Copy SHA-512',
};

export const content: ToolLocaleContent<HashGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Technical Resources on Hashing',
  bibliography: [
    { name: 'MDN Web Docs: SubtleCrypto.digest() API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'IETF: The MD5 Message-Digest Algorithm (RFC 1321)', url: 'https://datatracker.ietf.org/doc/html/rfc1321' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'What is a Cryptographic Hash?', level: 2 },
    {
      type: 'paragraph',
      html: 'A <strong>cryptographic hash</strong> is a mathematical function that transforms any amount of data into a fixed-length string. The same input always produces the same output, but any minimal change in the input generates a completely different hash.',
    },
    { type: 'title', text: 'Available algorithms', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>MD5 (128 bits):</strong> Fast and widely supported. Considered insecure for passwords but useful for file integrity checks in non-critical environments.',
        '<strong>SHA-1 (160 bits):</strong> Deprecated for critical security uses since 2017. Still present in legacy systems.',
        '<strong>SHA-256 (256 bits):</strong> The current standard for most applications. Used in Bitcoin, TLS and code signing.',
        '<strong>SHA-512 (512 bits):</strong> Longer variant of SHA-2, ideal when maximum collision resistance is required.',
      ],
    },
    { type: 'title', text: 'Salt and Key Stretching', level: 3 },
    {
      type: 'paragraph',
      html: 'The <strong>Salt</strong> is a random string added to the text before hashing, ensuring that two identical inputs produce different hashes. <strong>Key Stretching</strong> (rounds) applies the hash function multiple times to harden against brute-force attacks.',
    },
    { type: 'title', text: 'Total privacy: 100% Client-Side', level: 3 },
    {
      type: 'paragraph',
      html: 'This tool uses the browser\'s <strong>Web Crypto API</strong> for SHA and a pure TypeScript implementation for MD5. All processing happens locally: your data never leaves your device.',
    },
  ],
};
