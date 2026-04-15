import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashGeneratorUI } from '../ui';

const slug = 'gerador-de-hash';
const title = 'Gerador Online de Hash de Segurança';
const description = 'Calcule hashes MD5, SHA-1, SHA-256 e SHA-512 instantaneamente. Ferramenta de segurança gratuita, privada e ultra-rápida para desenvolvedores. 100% Client-Side.';

const faqData = [
  {
    question: 'O que é um hash e para que é usado?',
    answer: 'Um hash é uma impressão digital única de um texto ou arquivo. É usado para verificar se os dados não foram adulterados e para armazenar senhas com segurança.',
  },
  {
    question: 'É seguro usar este gerador online?',
    answer: 'Sim, é completamente seguro. Ao contrário de outros sites, processamos o hash diretamente no seu navegador. Os seus dados nunca são enviados para nenhum servidor.',
  },
  {
    question: 'Qual algoritmo de hash devo escolher?',
    answer: 'Para segurança moderna e armazenamento de chaves, recomendamos SHA-256 ou SHA-512. MD5 e SHA-1 devem ser usados apenas para compatibilidade com sistemas legados.',
  },
  {
    question: "O que significa adicionar um 'Salt'?",
    answer: 'Um Salt é uma sequência extra misturada com o seu texto para tornar o hash único e muito mais difícil de quebrar através de ataques de dicionário.',
  },
];

const howToData = [
  { name: 'Insira o texto', text: 'Digite ou cole o texto que deseja transformar em hash na caixa de entrada.' },
  { name: 'Configure a segurança', text: 'Adicione um Salt opcional ou aumente as rodadas de processamento para maior robustez.' },
  { name: 'Obtenha resultados', text: 'Os diferentes hashes (MD5, SHA etc.) são calculados em tempo real enquanto digita.' },
  { name: 'Copie o Hash', text: 'Clique no ícone de cópia ao lado de cada algoritmo para salvá-lo na área de transferência.' },
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
  inLanguage: 'pt',
};

const ui: HashGeneratorUI = {
  labelInput: 'Texto de entrada',
  placeholderInput: 'Digite ou cole o texto aqui para calcular os seus hashes...',
  labelSalt: 'Salt (Opcional)',
  placeholderSalt: 'Semente de segurança...',
  labelRounds: 'Rodadas (Stretch)',
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
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Recursos Técnicos sobre Hashing',
  bibliography: [
    { name: 'MDN Web Docs: SubtleCrypto.digest() API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'IETF: The MD5 Message-Digest Algorithm (RFC 1321)', url: 'https://datatracker.ietf.org/doc/html/rfc1321' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'O que é um Hash Criptográfico?', level: 2 },
    {
      type: 'paragraph',
      html: 'Um <strong>hash criptográfico</strong> é uma função matemática que transforma qualquer quantidade de dados numa sequência de comprimento fixo. A mesma entrada produz sempre a mesma saída, mas qualquer mudança mínima na entrada gera um hash completamente diferente.',
    },
    { type: 'title', text: 'Algoritmos disponíveis', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>MD5 (128 bits):</strong> Rápido e amplamente suportado. Considerado inseguro para senhas, mas útil para verificações de integridade de arquivos em ambientes não críticos.',
        '<strong>SHA-1 (160 bits):</strong> Descontinuado para usos críticos de segurança desde 2017. Ainda presente em sistemas legados.',
        '<strong>SHA-256 (256 bits):</strong> O padrão atual para a maioria das aplicações. Usado no Bitcoin, TLS e assinatura de código.',
        '<strong>SHA-512 (512 bits):</strong> Variante mais longa do SHA-2, ideal quando é necessária resistência máxima a colisões.',
      ],
    },
    { type: 'title', text: 'Salt e Key Stretching', level: 3 },
    {
      type: 'paragraph',
      html: 'O <strong>Salt</strong> é uma sequência aleatória adicionada ao texto antes do hash, garantindo que duas entradas idênticas produzam hashes diferentes. O <strong>Key Stretching</strong> (rodadas) aplica a função de hash várias vezes para endurecer contra ataques de força bruta.',
    },
    { type: 'title', text: 'Privacidade total: 100% Client-Side', level: 3 },
    {
      type: 'paragraph',
      html: 'Esta ferramenta utiliza a <strong>Web Crypto API</strong> do navegador para SHA e uma implementação pura em TypeScript para MD5. Todo o processamento acontece localmente: os seus dados nunca saem do seu dispositivo.',
    },
  ],
};
