import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicalTypographyUI } from '../ui';

const slug = 'tipografi-musikal';
const title = 'Skala Tipografi Musikal. Kalkulator Skala Modular';
const description =
  'Alat online gratis untuk menciptakan hierarki visual yang harmonis menggunakan skala modular berbasis proporsi musikal. Menghasilkan variabel CSS siap pakai untuk desain web Anda.';

const faqData = [
  {
    question: 'Apa itu skala modular tipografi?',
    answer:
      'Ini adalah metode untuk menentukan ukuran font berdasarkan rasio matematis yang konstan. Seperti dalam musik, di mana nada-nada memiliki hubungan harmonis, skala modular menciptakan hierarki visual yang seimbang dan mudah diprediksi.',
  },
  {
    question: 'Mengapa menggunakan interval musikal untuk desain?',
    answer:
      'Interval musikal adalah proporsi yang otak manusia persepsikan sebagai harmonis. Menerapkannya pada ukuran teks menghasilkan struktur visual yang terasa tepat dan profesional, bukan sekadar memilih ukuran secara acak.',
  },
  {
    question: 'Apa itu Rasio Emas dalam tipografi?',
    answer:
      'Ini adalah proporsi 1,618, yang dikenal sebagai Penampang Emas. Proporsi ini menciptakan skala yang dramatis dan elegan, di mana setiap langkah hierarki tumbuh secara eksponensial. Ideal untuk portofolio atau situs berorientasi seni.',
  },
  {
    question: 'Bagaimana cara menerapkan skala ke file CSS saya?',
    answer:
      'Alat ini menghasilkan variabel CSS (token) dalam format :root { --step-N: Xrem; }. Salin ke file CSS utama Anda dan gunakan dengan var(--step-N) untuk menjaga konsistensi tipografi di seluruh situs.',
  },
];

const howToData = [
  {
    name: 'Tentukan ukuran dasar',
    text: 'Masukkan ukuran font untuk teks paragraf Anda (biasanya 16px) yang akan menjadi nada dasar skala Anda.',
  },
  {
    name: 'Pilih interval',
    text: 'Pilih proporsi musikal untuk menentukan seberapa jauh jarak antara level heading yang berbeda.',
  },
  {
    name: 'Pratinjau hierarki',
    text: 'Amati bagaimana level tipografi berperilaku secara real-time untuk memastikan harmoni visual sesuai dengan proyek Anda.',
  },
  {
    name: 'Ekspor kode',
    text: 'Klik Salin Variabel CSS untuk mendapatkan blok siap tempel langsung ke alur kerja Anda.',
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
  applicationCategory: 'DesignApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'id',
};

const ui: MusicalTypographyUI = {
  labelConfig: 'Konfigurasi',
  labelBaseSize: 'Ukuran Dasar (px)',
  hintBaseSize: 'Ukuran teks paragraf Anda (biasanya 16px).',
  labelRatio: 'Skala Musikal (Rasio)',
  hintRatio: 'Menentukan seberapa besar ukuran tumbuh di setiap langkah.',
  labelCalculated: 'Nilai Terkalkulasi',
  labelPreview: 'Pratinjau',
  btnCopyCss: 'Salin Variabel CSS',
  feedbackCopied: 'Variabel disalin ke clipboard!',
  previewText: 'Tipografi Musikal',
  previewSubtext: 'Skala harmonis sempurna untuk desain Anda.',
  ratioSecundaMenor: 'Second Minor',
  ratioSegundaMayor: 'Second Mayor',
  ratioTerceraMenor: 'Terts Minor',
  ratioTerceraMayor: 'Terts Mayor',
  ratioCuartaPerfecta: 'Kuart Sempurna',
  ratioCuartaAumentada: 'Kuart Augmentasi',
  ratioQuintaPerfecta: 'Kuint Sempurna',
  ratioProporcionAurea: 'Rasio Emas',
  ratioSextaMayor: 'Sekst Mayor',
  ratioSeptimaMenor: 'Septim Minor',
  ratioSeptimaMayor: 'Septim Mayor',
  ratioOctava: 'Oktaf',
};

export const content: ToolLocaleContent<MusicalTypographyUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi',
  bibliography: [
    {
      name: 'Bringhurst, R. The Elements of Typographic Style',
      url: 'https://en.wikipedia.org/wiki/The_Elements_of_Typographic_Style',
    },
    {
      name: 'Brown, T. More Meaningful Typography. A List Apart',
      url: 'https://alistapart.com/article/more-meaningful-typography/',
    },
    {
      name: 'Physics of Music. Musical Intervals and Scales',
      url: 'https://es.scribd.com/document/199729396/Physics-of-Music-Notes',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Harmoni tersembunyi dalam desain web',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Skala Tipografi Musikal</strong> menerapkan matematika interval musikal pada desain tipografi. Seperti sebuah komposisi musik yang diatur oleh proporsi yang presisi, desain visual yang kuat juga mendapat manfaat dari struktur matematis yang menghubungkan semua ukuran satu sama lain.',
    },
    {
      type: 'title',
      text: 'Cara kerja skala modular',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'Rumusnya',
      html: '<p>Progresinya sederhana: <code>Ukuran = Dasar × Rasio<sup>n</sup></code>. Langkah 0 adalah teks dasar Anda. Langkah 1 adalah subjudul kecil. Langkah 4 atau 5 bisa menjadi H1 utama Anda. Konstanta pengali yang sama memastikan semua hubungan tetap konsisten.</p>',
    },
    {
      type: 'card',
      title: 'Mengapa "Musikal"',
      html: '<p>Kaum Pythagoras menemukan bahwa membagi senar dalam proporsi sederhana (1:2, 2:3, 3:4) menghasilkan bunyi yang konsonan. Interval-interval ini — oktaf, kuint sempurna, dan kuart sempurna — adalah persis rasio tipografi yang digunakan. Anda sedang menggubah musik visual.</p>',
    },
    {
      type: 'title',
      text: 'Memilih rasio yang tepat',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Untuk antarmuka padat (dasbor, tabel), gunakan rasio kecil seperti <code>1,125</code> atau <code>1,2</code>. Untuk situs editorial atau portofolio, gunakan rasio yang lebih ekspresif seperti <code>1,5</code> atau <code>1,618</code>.',
    },
    {
      type: 'paragraph',
      html: 'Jangan batasi skala hanya untuk <code>font-size</code>. Variabel CSS yang sama bekerja untuk <code>margin</code>, <code>padding</code>, dan <code>gap</code>. Ketika whitespace mengikuti progresi matematis yang sama dengan teks, desain mencapai tingkat kohesi yang dirasakan semua orang namun jarang bisa dijelaskan.',
    },
  ],
};
