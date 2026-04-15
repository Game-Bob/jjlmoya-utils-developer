import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashGeneratorUI } from '../ui';

const slug = 'hash-generator-id';
const title = 'Generator Hash Keamanan Online';
const description = 'Hitung hash MD5, SHA-1, SHA-256, dan SHA-512 secara instan. Alat keamanan gratis, pribadi, dan sangat cepat untuk pengembang. 100% Sisi Klien.';

const faqData = [
  {
    question: 'Apa itu hash dan apa gunanya?',
    answer: 'Hash adalah sidik jari digital unik dari sebuah teks atau file. Hash digunakan untuk memverifikasi bahwa data belum diubah dan untuk menyimpan kata sandi dengan aman.',
  },
  {
    question: 'Apakah aman menggunakan generator online ini?',
    answer: 'Ya, ini sepenuhnya aman. Berbeda dengan situs lain, kami memproses hash langsung di browser Anda. Data Anda tidak pernah dikirim ke server mana pun.',
  },
  {
    question: 'Algoritma hash mana yang harus saya pilih?',
    answer: 'Untuk keamanan modern dan penyimpanan kunci, kami merekomendasikan SHA-256 atau SHA-512. MD5 dan SHA-1 hanya boleh digunakan untuk kompatibilitas dengan sistem lama.',
  },
  {
    question: "Apa arti dari menambahkan 'Salt'?",
    answer: 'Salt adalah string tambahan yang dicampur dengan teks Anda untuk membuat hash menjadi unik dan jauh lebih sulit untuk dipecahkan melalui serangan kamus.',
  },
];

const howToData = [
  { name: 'Masukkan Teks', text: 'Ketik atau tempel teks yang ingin Anda hash ke dalam kotak input.' },
  { name: 'Konfigurasi Keamanan', text: 'Tambahkan Salt opsional atau tingkatkan putaran pemrosesan untuk ketahanan yang lebih besar.' },
  { name: 'Dapatkan Hasil', text: 'Berbagai hash (MD5, SHA, dll.) dihitung secara real-time saat Anda mengetik.' },
  { name: 'Salin Hash', text: 'Klik ikon salin di sebelah setiap algoritma untuk menyimpannya ke papan klip Anda.' },
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
  inLanguage: 'id',
};

const ui: HashGeneratorUI = {
  labelInput: 'Teks input',
  placeholderInput: 'Ketik atau tempel teks di sini untuk menghitung hash-nya...',
  labelSalt: 'Salt (Opsional)',
  placeholderSalt: 'Benih keamanan...',
  labelRounds: 'Putaran (Stretch)',
  copyMd5: 'Salin MD5',
  copySha1: 'Salin SHA-1',
  copySha256: 'Salin SHA-256',
  copySha512: 'Salin SHA-512',
};

export const content: ToolLocaleContent<HashGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Sumber Daya Teknis tentang Hashing',
  bibliography: [
    { name: 'MDN Web Docs: SubtleCrypto.digest() API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'IETF: The MD5 Message-Digest Algorithm (RFC 1321)', url: 'https://datatracker.ietf.org/doc/html/rfc1321' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Apa itu Hash Kriptografi?', level: 2 },
    {
      type: 'paragraph',
      html: 'Sebuah <strong>hash kriptografi</strong> adalah fungsi matematika yang mengubah sejumlah data menjadi string dengan panjang tetap. Input yang sama selalu menghasilkan output yang sama, tetapi sedikit saja perubahan pada input akan menghasilkan hash yang sama sekali berbeda.',
    },
    { type: 'title', text: 'Algoritma yang tersedia', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>MD5 (128 bit):</strong> Cepat dan didukung luas. Dianggap tidak aman untuk kata sandi tetapi berguna untuk pemeriksaan integritas file di lingkungan non-kritis.',
        '<strong>SHA-1 (160 bit):</strong> Tidak lagi digunakan untuk kegunaan keamanan kritis sejak 2017. Masih ada di sistem lama.',
        '<strong>SHA-256 (256 bit):</strong> Standar saat ini untuk sebagian besar aplikasi. Digunakan dalam Bitcoin, TLS, dan penandatanganan kode.',
        '<strong>SHA-512 (512 bit):</strong> Varian SHA-2 yang lebih panjang, ideal ketika diperlukan resistensi tabrakan maksimum.',
      ],
    },
    { type: 'title', text: 'Salt dan Key Stretching', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>Salt</strong> adalah string acak yang ditambahkan ke teks sebelum proses hashing, memastikan bahwa dua input yang identik menghasilkan hash yang berbeda. <strong>Key Stretching</strong> (putaran) menerapkan fungsi hash berkali-kali untuk memperkuat ketahanan terhadap serangan brute-force.',
    },
    { type: 'title', text: 'Privasi total: 100% Sisi Klien', level: 3 },
    {
      type: 'paragraph',
      html: 'Alat ini menggunakan <strong>Web Crypto API</strong> browser untuk SHA dan implementasi TypeScript murni untuk MD5. Semua pemrosesan terjadi secara lokal: data Anda tidak pernah meninggalkan perangkat Anda.',
    },
  ],
};

