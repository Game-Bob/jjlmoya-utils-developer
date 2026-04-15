import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReadabilityCalculatorUI } from '../ui';

const slug = 'kalkulator-keterbacaan-visual-wcag-apca';
const title = 'Kalkulator Keterbacaan Visual WCAG dan APCA';
const description = 'Periksa kontras nyata desain Anda dengan APCA (WCAG 3.0). Analisis bagaimana ketebalan dan ukuran font memengaruhi keterbacaan sesungguhnya. Dari rasio sederhana hingga keterbacaan perseptual.';

const faqData = [
  {
    question: 'Apa itu APCA dan mengapa berbeda dari WCAG 2.1?',
    answer: 'APCA adalah Advanced Perceptual Contrast Algorithm yang dikembangkan untuk WCAG 3.0. Berbeda dengan rasio sederhana lama, APCA menggunakan model matematis yang meniru cara otak manusia mempersepsikan kontras, dengan mempertimbangkan polaritas (latar terang vs. gelap) serta ukuran dan ketebalan font.',
  },
  {
    question: 'Apa arti nilai Lc?',
    answer: 'Lc (Lightness Contrast) adalah nilai kontras yang dihasilkan oleh APCA. Nilai 100 mewakili kontras maksimum ideal, sementara nilai di bawah 60 mulai kritis untuk teks bacaan panjang. Ini adalah skala magnitudo persepsi absolut.',
  },
  {
    question: 'Bagaimana ketebalan font memengaruhi keterbacaan?',
    answer: 'Font tipis (Thin/Light) membutuhkan kontras yang jauh lebih tinggi agar dapat dibaca. APCA memberikan penalti pada font berbobot rendah, menunjukkan bahwa desain yang lolos WCAG dengan font bobot 100 bisa saja tidak terbaca dalam praktiknya.',
  },
  {
    question: 'Apakah kalkulator ini menjaga privasi?',
    answer: 'Ya, semua perhitungan dilakukan secara lokal di browser Anda. Warna dan pengaturan yang Anda analisis tidak pernah dikirim ke server mana pun, sehingga privasi proyek desain Anda sepenuhnya terjaga.',
  },
];

const howToData = [
  { name: 'Pilih Warna', text: 'Gunakan pemilih warna untuk mengatur warna teks dan warna latar belakang desain Anda.' },
  { name: 'Sesuaikan Tipografi', text: 'Geser slider ukuran dan ketebalan font untuk mensimulasikan tipografi Anda yang sebenarnya.' },
  { name: 'Baca Hasilnya', text: 'Periksa rasio WCAG 2.1 dan nilai APCA Lc untuk mengetahui apakah desain Anda aksesibel.' },
  { name: 'Tinjau Rekomendasi', text: 'Cek rekomendasi khusus APCA untuk teks bacaan, teks kecil, dan elemen UI.' },
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

const ui: ReadabilityCalculatorUI = {
  labelColors: 'Warna Dasar',
  labelText: 'Teks',
  labelBg: 'Latar Belakang',
  labelTypo: 'Tipografi',
  labelFontSize: 'Ukuran Font',
  labelFontWeight: 'Ketebalan Font',
  labelCompare: 'Perbandingan Kontras',
  labelPreview: 'Pratinjau Perseptual',
  labelApcaRecs: 'Rekomendasi APCA',
  labelBody: 'Teks Bacaan (Body)',
  labelSmall: 'Teks Kecil / Keterangan',
  labelUi: 'UI / Tombol',
  statusYes: 'Ya',
  statusNo: 'Tidak',
  wcagAAA: 'Lulus AAA',
  wcagAA: 'Lulus AA',
  wcagLarge: 'Hanya Teks Besar',
  wcagFail: 'Gagal',
  apcaExcellent: 'Sangat Baik',
  apcaGood: 'Baik',
  apcaMinimal: 'Minimal',
  apcaPoor: 'Buruk',
  previewText: 'Keterbacaan visual bukan sekadar matematika. Ini adalah cara cahaya dan bayangan berinteraksi dengan mata Anda.',
  wcagRatioLabel: 'Rasio WCAG 2.1',
  apcaLcLabel: 'APCA Lc (WCAG 3)',
};

export const content: ToolLocaleContent<ReadabilityCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Sumber tentang Kontras dan APCA',
  bibliography: [
    { name: 'W3C: Draf WCAG 3.0 (Silver)', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/' },
    { name: 'Myndex: Panduan Referensi APCA', url: 'https://apcaw3.myndex.com/' },
    { name: 'MDN: Aksesibilitas dan Kontras Warna', url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Kalkulator Keterbacaan Visual (WCAG vs APCA)', level: 2 },
    {
      type: 'paragraph',
      html: 'Pahami bagaimana warna dan tipografi Anda memengaruhi keterbacaan nyata dengan standar aksesibilitas perseptual terbaru. WCAG 2.1 menggunakan rumus matematis sederhana dari tahun 2008. <strong>APCA</strong> adalah model baru yang diusulkan untuk <strong>WCAG 3.0</strong> yang meniru persepsi manusia.',
    },
    { type: 'title', text: 'Poin Utama APCA', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Polaritas:</strong> Memahami bahwa Dark Mode dipersepsikan berbeda dari Light Mode.',
        '<strong>Ketebalan Font:</strong> Menetapkan tingkat kontras (Lc) spesifik berdasarkan bobot tipografi.',
        '<strong>Linearitas:</strong> Memperbaiki ketidakakuratan matematis dalam model luminansi relatif tahun 2008.',
      ],
    },
    { type: 'title', text: 'Level APCA yang Direkomendasikan', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Lc 90+:</strong> Ideal untuk teks sangat kecil atau berbobot rendah.',
        '<strong>Lc 75:</strong> Standar untuk teks bacaan utama (body).',
        '<strong>Lc 60:</strong> Minimum untuk konten berukuran sedang yang terbaca.',
        '<strong>Lc 45:</strong> Minimum untuk elemen besar atau dekoratif.',
      ],
    },
  ],
};
