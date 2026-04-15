import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgToCssUI } from '../ui';

const slug = 'konverter-svg-ke-css';
const title = 'Konverter SVG ke CSS dan Data URI Online Gratis';
const description =
  'Ubah ikon dan vektor SVG Anda menjadi kode CSS (Background atau Mask) atau Data URI terkompresi. Optimalkan performa situs web Anda dengan menghilangkan permintaan HTTP eksternal.';

const faqData = [
  {
    question: 'Mana yang lebih baik, menggunakan Data URI atau file .svg eksternal?',
    answer:
      'Tergantung pada kasus penggunaan. Data URI menghilangkan permintaan HTTP (ideal untuk ikon kecil), tetapi menambah ukuran file CSS. Untuk ilustrasi besar atau kaya detail, file eksternal lebih disukai.',
  },
  {
    question: 'Bagaimana cara mengubah warna SVG yang tertanam di CSS?',
    answer:
      "Cara terbaik adalah melalui 'mask-image'. Dengan mendefinisikan SVG sebagai masker, Anda dapat menggunakan 'background-color' untuk mengubah warnanya secara dinamis, bahkan dalam status :hover.",
  },
  {
    question: 'Browser mana yang mendukung CSS Masks?',
    answer:
      'Semua browser modern (Chrome, Firefox, Safari, Edge) memiliki dukungan penuh. Untuk browser lama, awalan -webkit- umum digunakan.',
  },
  {
    question: 'Apakah menggunakan Data URI mempengaruhi SEO?',
    answer:
      'Ya, secara positif. Dengan mengurangi jumlah permintaan yang diperlukan untuk merender halaman, ini meningkatkan waktu pemuatan (LCP) dan skor Core Web Vitals.',
  },
  {
    question: 'Dapatkah saya menggunakannya di framework seperti React atau Tailwind?',
    answer:
      'Tentu saja! Anda dapat menyalin kode yang dihasilkan dan menggunakannya dalam file .css Anda atau bahkan sebagai nilai arbitrer di Tailwind CSS.',
  },
];

const howToData = [
  {
    name: 'Tempel SVG',
    text: 'Salin kode sumber file SVG Anda dan tempelkan ke area teks di sebelah kiri.',
  },
  {
    name: 'Pilih jenis output',
    text: 'Pilih antara Gambar Latar Belakang (untuk latar belakang statis), CSS Mask (untuk ikon dengan warna dinamis), atau Hanya Data URI (untuk penggunaan langsung).',
  },
  {
    name: 'Salin hasilnya',
    text: 'Klik "Salin" untuk mengambil kode CSS yang dihasilkan ke papan klip Anda.',
  },
  {
    name: 'Terapkan di proyek Anda',
    text: 'Tempelkan kode ke dalam stylesheet atau komponen CSS Anda. Untuk Mask, tambahkan juga background-color untuk menentukan warna ikon.',
  },
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
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
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

const ui: SvgToCssUI = {
  labelPasteTitle: 'Tempel SVG',
  labelInputArea: 'Kode Sumber SVG',
  labelPreviewOriginal: 'Pratinjau Asli',
  labelResultTitle: 'Hasil CSS',
  labelPreviewApplied: 'Hasil Terapan',
  tabBackground: 'Gambar Latar Belakang',
  tabMask: 'CSS Mask / Webkit',
  tabUri: 'Hanya Data URI',
  btnCopy: 'Salin',
  btnCopied: 'Tersalin!',
  placeholder: '<svg xmlns="http://www.w3.org/2000/svg" ...',
};

export const content: ToolLocaleContent<SvgToCssUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi dan Dokumentasi',
  bibliography: [
    {
      name: 'CSS-Tricks: Menggunakan SVG sebagai Latar Belakang',
      url: 'https://css-tricks.com/using-svg/',
    },
    {
      name: 'MDN Web Docs: mask-image',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image',
    },
    {
      name: 'MDN Web Docs: background-image',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-image',
    },
    {
      name: 'W3C: CSS Masking Module Level 1',
      url: 'https://www.w3.org/TR/css-masking-1/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Mengapa Mengonversi SVG ke CSS Data URI?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dalam pengembangan web modern, mengoptimalkan performa dan pemuatan sumber daya sangatlah penting. Menanamkan ikon secara langsung di CSS melalui <strong>Data URI</strong> menghilangkan permintaan HTTP yang tidak perlu, mengurangi latensi, dan meningkatkan Time to Interactive (TTI).',
    },
    {
      type: 'paragraph',
      html: 'Alat ini mengubah kode vektor <code>&lt;svg&gt;</code> menjadi string teks terenkripsi yang dapat diinterpretasikan oleh browser sebagai gambar latar belakang atau masker kliping, dengan tetap mempertahankan skalabilitas tak terbatas dan ketajaman karakteristik vektor.',
    },
    {
      type: 'title',
      text: 'Manfaat Teknis Utama',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Nol Permintaan HTTP:</strong> Dengan menanamkan grafis di file <code>.css</code> Anda, browser tidak perlu mengunduh file eksternal tambahan.',
        '<strong>Kustomisasi melalui CSS Mask:</strong> Menggunakan teknik <code>mask-image</code>, Anda dapat mengubah warna ikon vektor yang kompleks hanya dengan menggunakan <code>background-color</code>.',
        '<strong>Perenderan Instan:</strong> Anda menghindari kedipan konten (FOUC) karena sumber daya visual kritis tersedia segera setelah stylesheet diunduh.',
      ],
    },
    {
      type: 'title',
      text: 'CSS Masks vs Latar Belakang',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Banyak pengembang hanya menggunakan <code>background-image</code> untuk menanamkan vektor, tetapi ini memiliki batasan: Anda tidak dapat mengubah warna SVG secara dinamis dari CSS.',
    },
    {
      type: 'paragraph',
      html: 'Utilitas kami mendukung pembuatan kode untuk <strong>CSS Masks</strong>. Dengan menerapkan <code>mask-image</code> dengan Data URI yang dihasilkan, ikon bertindak sebagai stensil, memungkinkan <code>background-color</code> elemen untuk menentukan warna ikon akhir. Ini adalah cara paling profesional dan fleksibel untuk mengelola ikon di Astro, Next.js, atau framework modern lainnya.',
    },
  ],
};
