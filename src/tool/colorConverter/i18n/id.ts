import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ColorConverterUI } from '../ui';

const slug = 'konverter-warna-rgb-hex-hsl';
const title = 'Konverter Warna Online RGB HEX dan HSL';
const description = 'Konversikan warna antara RGB, HEX, dan HSL secara instan. Hasilkan harmoni warna komplementer dan analisis kontras WCAG. 100% sisi klien dan pribadi.';

const faqData = [
  {
    question: 'Bagaimana cara kerja konverter warna RGB ke HEX dan HSL?',
    answer: 'Alat ini mengambil nilai Merah, Hijau, dan Biru (RGB) dan menggunakan algoritma matematika untuk mengonversinya ke padanan heksadesimal (HEX) atau nilai Hue, Saturation, Lightness (HSL). Ini juga bekerja secara terbalik.',
  },
  {
    question: 'Mengapa saya harus menggunakan HSL daripada HEX dalam desain saya?',
    answer: 'Format HSL jauh lebih intuitif. Ini memungkinkan Anda menyesuaikan saturasi atau kecerahan tanpa mengubah corak warna (hue), sehingga jauh lebih mudah untuk membuat palet yang harmonis atau status tombol (hover, dinonaktifkan).',
  },
  {
    question: 'Apa itu nilai kontras relatif?',
    answer: 'Ini adalah metrik yang menunjukkan keterbacaan teks terhadap latar belakang berdasarkan luminansinya. Kontras tinggi memastikan orang dengan gangguan penglihatan dapat membaca konten, mengikuti pedoman aksesibilitas WCAG.',
  },
  {
    question: 'Apakah aman menggunakan konverter warna online ini?',
    answer: 'Tentu saja. Karena 100% berbasis sisi klien, data warna Anda tidak pernah meninggalkan komputer Anda. Semua pemrosesan terjadi langsung di browser Anda, menjamin privasi dan performa instan.',
  },
];

const howToData = [
  { name: 'Pilih Warna', text: 'Gunakan penggeser Merah, Hijau, dan Biru atau ketik kode HEX secara langsung ke kolom teks.' },
  { name: 'Sesuaikan Saluran RGB', text: 'Gerakkan penggeser untuk mengubah intensitas setiap saluran dan lihat pembaruan waktu nyata.' },
  { name: 'Salin Format', text: 'Klik tombol Salin di samping format HEX, RGB, atau HSL yang Anda butuhkan.' },
  { name: 'Jelajahi Harmoni', text: 'Klik pada warna harmoni (komplementer, analog, triadik) untuk menyalinnya ke papan klip.' },
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

const ui: ColorConverterUI = {
  labelPreview: 'Pratinjau (klik untuk menyalin HEX)',
  labelHarmonies: 'Harmoni Warna',
  labelR: 'Merah',
  labelG: 'Hijau',
  labelB: 'Biru',
  labelComp: 'Komp.',
  labelAna1: 'Analog 1',
  labelAna2: 'Analog 2',
  labelTri1: 'Triadik 1',
  labelTri2: 'Triadik 2',
  btnCopy: 'Salin',
  btnCopied: 'Tersalin',
  contrastLabel: 'Kontras',
  clickToCopy: 'Klik untuk menyalin',
};

export const content: ToolLocaleContent<ColorConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Sumber Daya Desain Warna dan Web',
  bibliography: [
    { name: 'W3C: Dokumentasi Warna CSS', url: 'https://www.w3.org/TR/css-color-4/' },
    { name: 'MDN: Panduan Model Warna HSL', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl' },
    { name: 'WebAIM: Panduan Kontras dan Aksesibilitas', url: 'https://webaim.org/resources/contrastchecker/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Konverter Warna RGB ke HEX dan HSL untuk Pengembang', level: 2 },
    {
      type: 'paragraph',
      html: 'Dalam dunia <strong>pengembangan frontend</strong> dan <strong>desain UI/UX</strong>, manajemen warna adalah tugas yang konstan. <strong>Konverter warna online</strong> kami memungkinkan Anda mengubah nilai antara <strong>HEX, RGB, dan HSL</strong> secara instan dan dengan presisi matematis.',
    },
    { type: 'title', text: 'Format Warna: HEX, RGB, dan HSL', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>HEX (Heksadesimal):</strong> Standar de facto untuk CSS. Ringkas dan mudah dibagikan dalam kode.',
        '<strong>RGB (Merah, Hijau, Biru):</strong> Berdasarkan sistem cahaya aditif. Ideal untuk memanipulasi saluran secara langsung atau menerapkan transparansi dengan RGBA.',
        '<strong>HSL (Hue, Saturation, Lightness):</strong> Format yang paling intuitif. Sesuaikan hue, saturasi, dan kecerahan untuk membuat palet yang harmonis.',
      ],
    },
    { type: 'title', text: 'Kontras dan Aksesibilitas WCAG', level: 3 },
    {
      type: 'paragraph',
      html: 'Kalkulator ini mencakup pengukuran <strong>kontras relatif</strong> berdasarkan luminansi. Ini membantu Anda memenuhi pedoman <strong>WCAG</strong>, memastikan teks Anda terbaca di latar belakang yang dipilih.',
    },
    { type: 'title', text: 'Harmoni Warna Otomatis', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Komplementer:</strong> Warna yang berlawanan pada roda warna, ideal untuk kontras maksimum.',
        '<strong>Analog:</strong> Warna-warna berdekatan yang menciptakan transisi halus dan harmonis.',
        '<strong>Triadik:</strong> Tiga warna berjarak sama untuk komposisi yang semarak dan seimbang.',
      ],
    },
  ],
};
