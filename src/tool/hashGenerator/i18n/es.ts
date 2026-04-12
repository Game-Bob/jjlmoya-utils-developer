import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashGeneratorUI } from '../ui';

const slug = 'generador-hashes-seguridad';
const title = 'Generador de Hashes de Seguridad Online';
const description = 'Calcula hashes MD5, SHA-1, SHA-256 y SHA-512 al instante. Herramienta de seguridad gratuita, privada y ultra rápida para desarrolladores. 100% Client-Side.';

const faqData = [
  {
    question: '\u00bfQu\u00e9 es un hash y para qu\u00e9 sirve?',
    answer: 'Un hash es una huella digital \u00fanica de un texto o archivo. Sirve para verificar que los datos no han sido alterados y para almacenar contrase\u00f1as de forma segura.',
  },
  {
    question: '\u00bfEs seguro usar este generador online?',
    answer: 'S\u00ed, es totalmente seguro. A diferencia de otras webs, procesamos el hash directamente en tu navegador. Tus datos nunca se env\u00edan a ning\u00fan servidor.',
  },
  {
    question: '\u00bfQu\u00e9 algoritmo de hash deber\u00eda elegir?',
    answer: 'Para seguridad moderna y almacenamiento de claves, te recomendamos SHA-256 o SHA-512. MD5 y SHA-1 solo deben usarse por compatibilidad con sistemas antiguos.',
  },
  {
    question: '\u00bfQu\u00e9 significa a\u00f1adir un Salt?',
    answer: 'Un Salt es una cadena extra que se mezcla con tu texto para hacer que el hash sea \u00fanico y mucho m\u00e1s dif\u00edcil de descifrar mediante ataques de diccionario.',
  },
];

const howToData = [
  { name: 'Introducir Texto', text: 'Escribe o pega el texto que quieres cifrar en el cuadro de entrada.' },
  { name: 'Configurar Seguridad', text: 'A\u00f1ade un Salt opcional o aumenta las rondas de procesamiento para mayor robustez.' },
  { name: 'Obtener Resultados', text: 'Los diferentes hashes (MD5, SHA etc.) se calculan en tiempo real mientras escribes.' },
  { name: 'Copiar el Hash', text: 'Haz clic en el icono de copiar situado junto a cada algoritmo para guardarlo en tu portapapeles.' },
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
  inLanguage: 'es',
};

const ui: HashGeneratorUI = {
  labelInput: 'Texto de entrada',
  placeholderInput: 'Escribe o pega aqu\u00ed el texto para calcular sus hashes...',
  labelSalt: 'Salt (Opcional)',
  placeholderSalt: 'Semilla de seguridad...',
  labelRounds: 'Rondas (Stretch)',
  copyMd5: 'Copiar MD5',
  copySha1: 'Copiar SHA-1',
  copySha256: 'Copiar SHA-256',
  copySha512: 'Copiar SHA-512',
};

export const content: ToolLocaleContent<HashGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Recursos T\u00e9cnicos sobre Hashing',
  bibliography: [
    { name: 'MDN Web Docs: SubtleCrypto.digest() API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'IETF: The MD5 Message-Digest Algorithm (RFC 1321)', url: 'https://datatracker.ietf.org/doc/html/rfc1321' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '\u00bfQu\u00e9 es un Hash Criptogr\u00e1fico?', level: 2 },
    {
      type: 'paragraph',
      html: 'Un <strong>hash criptogr\u00e1fico</strong> es una funci\u00f3n matem\u00e1tica que transforma cualquier cantidad de datos en una cadena de longitud fija. La misma entrada siempre produce el mismo resultado, pero cualquier m\u00ednimo cambio en la entrada genera un hash completamente diferente.',
    },
    { type: 'title', text: 'Algoritmos disponibles', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>MD5 (128 bits):</strong> R\u00e1pido y ampliamente soportado. Considerado inseguro para contrase\u00f1as pero \u00fatil para verificar integridad de archivos en entornos no cr\u00edticos.',
        '<strong>SHA-1 (160 bits):</strong> Deprecado para usos cr\u00edticos de seguridad desde 2017. A\u00fan presente en sistemas heredados.',
        '<strong>SHA-256 (256 bits):</strong> El est\u00e1ndar actual para la mayor\u00eda de aplicaciones. Usado en Bitcoin, TLS y firmado de c\u00f3digo.',
        '<strong>SHA-512 (512 bits):</strong> Variante de mayor longitud de SHA-2, ideal cuando se requiere m\u00e1xima resistencia a colisiones.',
      ],
    },
    { type: 'title', text: 'Salt y Key Stretching', level: 3 },
    {
      type: 'paragraph',
      html: 'El <strong>Salt</strong> es una cadena aleatoria que se a\u00f1ade al texto antes de calcular el hash, garantizando que dos entradas id\u00e9nticas produzcan hashes distintos. El <strong>Key Stretching</strong> (rondas) aplica la funci\u00f3n hash m\u00faltiples veces para dificultar los ataques de fuerza bruta.',
    },
    { type: 'title', text: 'Privacidad total: 100% Client-Side', level: 3 },
    {
      type: 'paragraph',
      html: 'Esta herramienta utiliza la <strong>Web Crypto API</strong> del navegador para SHA y una implementaci\u00f3n pura de TypeScript para MD5. Todo el procesamiento ocurre localmente: tus datos nunca abandonan tu dispositivo.',
    },
  ],
};
