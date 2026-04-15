import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AspectRatioUI } from '../ui';

const slug = 'kalkulator-rasio-aspek';
const title = 'Kalkulator Rasio Aspek dalam Piksel. Proporsi Online';
const description =
  'Hitung resolusi gambar, video, dan desain web baru sambil tetap mempertahankan proporsi yang tepat untuk menghindari distorsi grafis. Mendukung format 16:9, 4:3, 21:9, dan khusus.';

const faqData = [
  {
    question: 'Apa itu Rasio Aspek?',
    answer:
      'Rasio Aspek menjelaskan hubungan geometris antara lebar dan tinggi gambar atau layar. Ini direpresentasikan dengan dua angka yang dipisahkan oleh titik dua (misalnya 16:9), yang menunjukkan bagaimana tinggi berubah secara proporsional terhadap lebar.',
  },
  {
    question: 'Mengapa penting untuk menjaga proporsi yang benar?',
    answer:
      'Mengabaikan Rasio Aspek menyebabkan gambar tampak gepeng atau tertarik, munculnya kotak hitam (letterboxing) yang tidak diinginkan pada video, dan komponen web yang tata letaknya rusak pada ukuran layar yang berbeda. Menjaga proporsi yang benar adalah kunci tampilan profesional.',
  },
  {
    question: 'Bagaimana cara menghitung tinggi dari lebar dengan rasio tertentu?',
    answer:
      'Rumusnya adalah: Tinggi = Lebar × (Tinggi Rasio / Lebar Rasio). Contohnya, untuk lebar 1280px dengan rasio 16:9, tingginya adalah: 1280 × (9/16) = 720px.',
  },
  {
    question: 'Berapa Rasio Aspek standar untuk video YouTube?',
    answer:
      '16:9 adalah rasio standar untuk YouTube dan sebagian besar platform video modern. Ini sesuai dengan resolusi seperti 1280×720 (HD), 1920×1080 (Full HD), atau 3840×2160 (4K UHD).',
  },
  {
    question: 'Rasio Aspek apa yang digunakan video media sosial vertikal?',
    answer:
      '9:16, yang merupakan kebalikan dari format widescreen. Ini adalah rasio asli TikTok, Instagram Reels, dan YouTube Shorts, yang berasal dari penggunaan ponsel secara vertikal.',
  },
];

const howToData = [
  {
    name: 'Masukkan rasio asli',
    text: 'Masukkan nilai lebar dan tinggi dari rasio yang ingin Anda pertahankan (misalnya 16 dan 9 untuk widescreen) atau pilih salah satu preset.',
  },
  {
    name: 'Sesuaikan skala',
    text: 'Ubah nilai lebar atau tinggi di bagian "Skala Nyata". Alat ini akan secara otomatis menghitung nilai pasangannya untuk menjaga proporsi.',
  },
  {
    name: 'Periksa pratinjau',
    text: 'Panel pratinjau menunjukkan bentuk yang dihasilkan dalam skala proporsional, dengan rasio yang disederhanakan dan resolusi yang dihitung.',
  },
  {
    name: 'Terapkan di proyek Anda',
    text: 'Salin nilai yang dihitung untuk digunakan dalam CSS Anda (aspect-ratio: 16 / 9), dalam ekspor video, atau dalam pengaturan alat desain Anda.',
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

const ui: AspectRatioUI = {
  labelConfig: 'Konfigurasi',
  labelRatio: 'Rasio Asli',
  labelWidth: 'Lebar',
  labelHeight: 'Tinggi',
  labelScale: 'Skala Nyata',
  labelPixelWidth: 'Piksel (Lebar)',
  labelPixelHeight: 'Piksel (Tinggi)',
  labelPreview: 'Pratinjau Proporsional',
  labelStatus: 'Rasio Sempurna',
  labelOffline: 'Alat 100% Offline',
};

export const content: ToolLocaleContent<AspectRatioUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi dan Dokumentasi',
  bibliography: [
    {
      name: 'MDN Web Docs: aspect-ratio (CSS)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio',
    },
    {
      name: 'Wikipedia: Aspect ratio',
      url: 'https://en.wikipedia.org/wiki/Aspect_ratio',
    },
    {
      name: 'W3C: CSS Box Sizing Level 4',
      url: 'https://www.w3.org/TR/css-sizing-4/#aspect-ratio',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Apa itu Rasio Aspek?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dalam desain grafis, fotografi, dan pengembangan frontend, <strong>Rasio Aspek</strong> menjelaskan hubungan geometris antara lebar dan tinggi gambar, layar, atau kontainer. Biasanya direpresentasikan dengan dua angka yang dipisahkan oleh titik dua (misalnya <code>16:9</code>), yang menunjukkan bagaimana tinggi bertambah secara proporsional sebagai respons terhadap lebarnya.',
    },
    {
      type: 'paragraph',
      html: 'Kesalahan penanganan rasio aspek adalah penyebab umum foto yang tampak gepeng, video dengan pemotongan yang tidak terduga (letterboxing), atau komponen web yang tata letaknya rusak saat dilihat dari ponsel hingga monitor ultra-lebar.',
    },
    {
      type: 'title',
      text: 'Rasio Umum di Industri',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tergantung pada disiplin ilmu Anda, Anda akan terus berurusan dengan sejumlah kecil proporsi standar global:',
    },
    {
      type: 'list',
      items: [
        '<strong>16:9 (Widescreen):</strong> Format dominan mutlak untuk monitor modern, TV, rekaman YouTube, atau resolusi definisi tinggi standar (seperti 1920×1080 atau 4K).',
        '<strong>9:16 (Vertikal):</strong> Berasal dari konsumsi konten seluler asli (TikTok, Instagram Reels, YouTube Shorts). Rasio yang sama persis dengan video widescreen, tetapi dengan rotasi fisik perangkat yang diterapkan.',
        '<strong>4:3 (Klasik / Vintage):</strong> Ada pada televisi dan monitor lama atau pada model kamera digital analog dan khusus. Penampilannya yang agak persegi menarik perhatian langsung ke sumbu komposisi tengah.',
      ],
    },
    {
      type: 'title',
      text: 'Pengembangan Web dan properti CSS aspect-ratio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dahulu dalam CSS, sistem matematika yang rumit menggunakan <strong>Padding Hack</strong> (seperti menyisipkan <code>padding-top: 56.25%</code>) digunakan untuk memesan ruang dinamis pada iframe YouTube atau gambar sampul, untuk menghindari Cumulative Layout Shift (CLS) yang buruk saat pemuatan halaman.',
    },
    {
      type: 'paragraph',
      html: 'Saat ini, semua tata letak modern secara langsung menerapkan properti seperti <code>aspect-ratio: 16 / 9;</code>, menghasilkan kode semantik dan memungkinkan browser secara otomatis menurunkan dimensi yang hilang dari lebar asli yang ditentukan melalui Grid atau Flexbox.',
    },
    {
      type: 'paragraph',
      html: 'Kalkulator piksel lokal ini mentransfer kekuatan desain ke perhitungan penskalaan instan yang akan melindungi render Anda dari miskonfigurasi fatal.',
    },
  ],
};
