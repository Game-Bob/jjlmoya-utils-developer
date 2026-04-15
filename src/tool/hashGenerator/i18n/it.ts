import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashGeneratorUI } from '../ui';

const slug = 'generatore-hash';
const title = 'Generatore di Hash di Sicurezza Online';
const description = 'Calcola hash MD5, SHA-1, SHA-256 e SHA-512 all\'istante. Strumento di sicurezza gratuito, privato e ultra-veloce per sviluppatori. 100% Client-Side.';

const faqData = [
  {
    question: 'Cos\'è un hash e a cosa serve?',
    answer: 'Un hash è l\'impronta digitale unica di un testo o di un file. Viene utilizzato per verificare che i dati non siano stati manomessi e per memorizzare le password in modo sicuro.',
  },
  {
    question: 'È sicuro usare questo generatore online?',
    answer: 'Sì, è completamente sicuro. A differenza di altri siti, elaboriamo l\'hash direttamente nel tuo browser. I tuoi dati non vengono mai inviati a nessun server.',
  },
  {
    question: 'Quale algoritmo hash dovrei scegliere?',
    answer: 'Per la sicurezza moderna e la memorizzazione delle chiavi, consigliamo SHA-256 o SHA-512. MD5 e SHA-1 dovrebbero essere usati solo per compatibilità con i sistemi legacy.',
  },
  {
    question: "Cosa significa aggiungere un 'Salt'?",
    answer: 'Un Salt è una stringa extra mescolata al tuo testo per rendere l\'hash unico e molto più difficile da craccare tramite attacchi a dizionario.',
  },
];

const howToData = [
  { name: 'Inserisci il testo', text: 'Digita o incolla il testo di cui vuoi calcolare l\'hash nella casella di input.' },
  { name: 'Configura la sicurezza', text: 'Aggiungi un Salt opzionale o aumenta i cicli di elaborazione per una maggiore robustezza.' },
  { name: 'Ottieni i risultati', text: 'I diversi hash (MD5, SHA ecc.) vengono calcolati in tempo reale mentre digiti.' },
  { name: 'Copia l\'hash', text: 'Fai clic sull\'icona di copia accanto a ogni algoritmo per salvarlo negli appunti.' },
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
  inLanguage: 'it',
};

const ui: HashGeneratorUI = {
  labelInput: 'Testo di input',
  placeholderInput: 'Digita o incolla qui il testo per calcolarne gli hash...',
  labelSalt: 'Salt (Opzionale)',
  placeholderSalt: 'Seed di sicurezza...',
  labelRounds: 'Cicli (Stretch)',
  copyMd5: 'Copia MD5',
  copySha1: 'Copia SHA-1',
  copySha256: 'Copia SHA-256',
  copySha512: 'Copia SHA-512',
};

export const content: ToolLocaleContent<HashGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Risorse Tecniche sull\'Hashing',
  bibliography: [
    { name: 'MDN Web Docs: SubtleCrypto.digest() API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'IETF: The MD5 Message-Digest Algorithm (RFC 1321)', url: 'https://datatracker.ietf.org/doc/html/rfc1321' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Cos\'è un hash crittografico?', level: 2 },
    {
      type: 'paragraph',
      html: 'Un <strong>hash crittografico</strong> è una funzione matematica che trasforma qualsiasi quantità di dati in una stringa di lunghezza fissa. Lo stesso input produce sempre lo stesso output, ma qualsiasi modifica minima nell\'input genera un hash completamente diverso.',
    },
    { type: 'title', text: 'Algoritmi disponibili', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>MD5 (128 bit):</strong> Veloce e ampiamente supportato. Considerato non sicuro per le password ma utile per i controlli di integrità dei file in ambienti non critici.',
        '<strong>SHA-1 (160 bit):</strong> Deprecato per usi di sicurezza critici dal 2017. Ancora presente nei sistemi legacy.',
        '<strong>SHA-256 (256 bit):</strong> Lo standard attuale per la maggior parte delle applicazioni. Usato in Bitcoin, TLS e firma del codice.',
        '<strong>SHA-512 (512 bit):</strong> Variante più lunga di SHA-2, ideale quando è richiesta la massima resistenza alle collisioni.',
      ],
    },
    { type: 'title', text: 'Salt e Key Stretching', level: 3 },
    {
      type: 'paragraph',
      html: 'Il <strong>Salt</strong> è una stringa casuale aggiunta al testo prima dell\'hashing, garantendo che due input identici producano hash diversi. Il <strong>Key Stretching</strong> (cicli) applica la funzione hash più volte per indurirla contro gli attacchi di forza bruta.',
    },
    { type: 'title', text: 'Privacy totale: 100% Client-Side', level: 3 },
    {
      type: 'paragraph',
      html: 'Questo strumento utilizza la <strong>Web Crypto API</strong> del browser per SHA e un\'implementazione TypeScript pura per MD5. Tutta l\'elaborazione avviene localmente: i tuoi dati non lasciano mai il dispositivo.',
    },
  ],
};
