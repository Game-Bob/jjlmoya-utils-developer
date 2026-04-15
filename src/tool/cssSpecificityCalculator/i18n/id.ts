import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssSpecificityCalculatorUI } from '../ui';

const slug = 'kalkulator-spesifisitas-css';
const title = 'Kalkulator Spesifisitas CSS Online. Visualisator Bobot Selektor';
const description =
  'Hitung spesifisitas dan bobot tepat dari selektor CSS apa pun. Alat visual untuk memahami aturan CSS mana yang menang dalam kaskade dan menghindari penggunaan !important.';

const faqData = [
  {
    question: 'Apa itu spesifisitas CSS?',
    answer:
      'Spesifisitas adalah algoritma yang digunakan browser untuk memutuskan aturan CSS mana yang diterapkan pada suatu elemen ketika beberapa aturan bersaing. Ini direpresentasikan sebagai skor tiga kolom (A, B, C) yang masing-masing menunjukkan ID, kelas/atribut/kelas semu, dan elemen/elemen semu.',
  },
  {
    question: 'Dapatkah sebuah kelas mengalahkan ID dalam spesifisitas?',
    answer:
      'Tidak secara langsung. Sebuah ID (1,0,0) selalu mengalahkan sejumlah kelas (0,N,0) karena spesifisitas tidak memiliki peralihan antar kolom. Seratus kelas (0,100,0) tidak akan pernah mengalahkan satu ID pun (1,0,0).',
  },
  {
    question: 'Apa yang terjadi jika dua selektor memiliki spesifisitas yang sama?',
    answer:
      'Ketika dua selektor memiliki bobot yang persis sama, yang dinyatakan terakhir di file CSS yang menang. Ini dikenal sebagai urutan kaskade alami. Kalkulator ini secara visual memperingatkan Anda ketika terjadi seri.',
  },
  {
    question: 'Mengapa menggunakan !important dianggap sebagai praktik buruk?',
    answer:
      'Arahan !important merusak kaskade CSS alami dengan memaksa deklarasi atas aturan lainnya. Ini menciptakan konflik yang sulit di-debug dalam proyek besar. Metodologi seperti BEM menyarankan agar spesifisitas tetap datar agar tidak memerlukan !important.',
  },
];

const howToData = [
  {
    name: 'Masukkan selektor pertama',
    text: 'Ketik Selektor A di kolom teks kiri, misalnya: #header .nav-item > a. Penghitung ID, Kelas, dan Elemen akan diperbarui secara instan.',
  },
  {
    name: 'Masukkan selektor kedua',
    text: 'Ketik Selektor B di kolom teks kanan, misalnya: ul li.active a:hover. Perhatikan bagaimana bobot berubah secara real-time.',
  },
  {
    name: 'Baca hasilnya',
    text: 'Kalkulator akan menyoroti blok selektor yang menang dengan spanduk hijau. Jika keduanya seri, pesan seri akan muncul menjelaskan urutan kaskade sebagai penentu kemenangan.',
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

const ui: CssSpecificityCalculatorUI = {
  labelA: 'Selektor A',
  labelB: 'Selektor B',
  placeholderA: 'misal: #header .nav-item > a',
  placeholderB: 'misal: ul li.active a:hover',
  cardIds: 'ID',
  cardClasses: 'Kelas / Semu',
  cardElements: 'Elemen',
  bannerWinner: 'Selektor ini menang!',
  msgTie: 'Kedua selektor memiliki bobot yang sama. Jika mereka bersaing untuk elemen yang sama, yang ditulis <strong>terakhir</strong> di CSS yang menang.',
};

export const content: ToolLocaleContent<CssSpecificityCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi dan Dokumentasi',
  bibliography: [
    {
      name: 'MDN Web Docs: CSS Specificity',
      url: 'https://developer.mozilla.org/en/docs/Web/CSS/Specificity',
    },
    {
      name: 'W3C: Selectors Level 3 - Specificity',
      url: 'https://www.w3.org/TR/selectors-3/#specificity',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Apa Itu Spesifisitas CSS?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Spesifisitas CSS adalah algoritma yang digunakan browser untuk memutuskan nilai properti mana yang diterapkan pada elemen tertentu. Ini pada dasarnya adalah skor matematis yang memberi tahu browser "seberapa spesifik" suatu aturan.',
    },
    {
      type: 'paragraph',
      html: 'Jika dua aturan memiliki tingkat spesifisitas yang berbeda, aturan dengan bobot lebih tinggi akan menang, terlepas dari urutan penulisannya. Jika keduanya memiliki bobot yang sama, aturan terakhir yang dinyatakan dalam kode sumber yang menang.',
    },
    {
      type: 'title',
      text: 'Cara Menghitung Spesifisitas CSS',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Spesifisitas dihitung berdasarkan tiga kategori yang membentuk bobot tiga kolom, sering dinyatakan sebagai <strong>(A, B, C)</strong>:',
    },
    {
      type: 'list',
      items: [
        '<strong>Kolom A (ID):</strong> Menghitung jumlah pengidentifikasi unik. Contoh: <code>#header</code> dihitung sebagai 1 di kolom A.',
        '<strong>Kolom B (Kelas, Atribut, dan Kelas Semu):</strong> Menghitung semua kelas (<code>.button</code>), atribut (<code>[type="text"]</code>), dan kelas semu (<code>:hover</code>).',
        '<strong>Kolom C (Elemen dan Elemen Semu):</strong> Menghitung semua elemen HTML (<code>div</code>, <code>h1</code>) dan elemen semu (<code>::before</code>).',
      ],
    },
    {
      type: 'title',
      text: 'Aturan Emas: Tidak Ada Peralihan Numerik',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Aturan dengan spesifisitas (0,50,0) <strong>tidak akan pernah</strong> lebih spesifik daripada aturan (1,0,0). <strong>Satu ID mengalahkan kelas yang tak terhingga jumlahnya.</strong> Kolom tidak pernah melimpah satu sama lain.',
    },
    {
      type: 'title',
      text: 'Masalah dengan !important dan Arsitektur BEM',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Arahan <code>!important</code> adalah pengecualian untuk aturan spesifisitas. Saat digunakan, deklarasi tersebut secara otomatis menimpa yang lain. Ini dianggap sebagai praktik buruk karena merusak kaskade alami.',
    },
    {
      type: 'paragraph',
      html: 'Untuk menghindari perang spesifisitas dalam proyek besar, metodologi seperti <strong>BEM</strong> menyarankan penggunaan selektor kelas kedalaman tunggal saja, secara artifisial menjaga spesifisitas tetap datar di (0,1,0).',
    },
  ],
};
