import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CalculadoraTiempoDatosUI } from '../ui';

const slug = 'kalkulator-waktu-data-dampak-kecepatan-web';
const title = 'Kalkulator Waktu Data: Dampak Kecepatan Web';
const description = 'Temukan berapa banyak waktu hidup yang hilang dari pengguna Anda saat menunggu situs web Anda dimuat pada koneksi 3G, 4G, dan 5G. Hitung dampak nyata dari berat situs Anda.';

const faqData = [
  {
    question: 'Mengapa mengetahui waktu pemuatan situs web saya penting?',
    answer: 'Karena ini berdampak langsung pada pengalaman pengguna, SEO, dan konversi. Google telah mendokumentasikan bahwa setiap detik penundaan mengurangi konversi sebesar 7%. Selain itu, 53% pengunjung seluler meninggalkan halaman yang membutuhkan waktu lebih dari 3 detik untuk memuat.',
  },
  {
    question: 'Apa arti persentase kecil dari kehilangan waktu hidup tersebut?',
    answer: 'Ini mewakili persentase dari total masa hidup seseorang (kurang lebih 80 tahun atau 2,5 miliar detik) yang dihabiskan untuk menunggu halaman Anda dimuat. Meskipun secara individual kecil, jika dikalikan dengan jutaan pengguna, ini mewakili jumlah waktu manusia yang terbuang sia-sia dalam jumlah besar.',
  },
  {
    question: 'Berapakah kecepatan koneksi rata-rata di seluruh dunia?',
    answer: '4G adalah standar di negara-negara maju. Namun, jutaan pengguna di negara-negara berkembang masih mengandalkan 3G. Inilah sebabnya mengapa sangat penting untuk mengoptimalkan situs Anda untuk semua kecepatan koneksi.',
  },
  {
    question: 'Berapakah berat situs web saya seharusnya?',
    answer: 'Google merekomendasikan agar beranda dimuat dalam waktu kurang dari 3 detik pada koneksi 4G pada umumnya. Untuk ini, sebuah situs idealnya memiliki berat antara 1-2 MB. Namun, rata-rata global mendekati 2-3 MB.',
  },
  {
    question: 'Bagaimana cara mengurangi berat situs saya?',
    answer: 'Strategi utama: mengoptimalkan gambar (50-80% dari berat), memperkecil CSS dan JavaScript, menggunakan lazy loading, mengimplementasikan cache browser, dan menggunakan CDN. Pengoptimalan gambar biasanya merupakan faktor yang paling berdampak.',
  },
  {
    question: 'Apakah kecepatan pemuatan memengaruhi peringkat Google?',
    answer: 'Ya, tentu saja. Google menganggap Core Web Vitals sebagai faktor peringkat yang penting. Situs yang lebih lambat akan memiliki peringkat yang lebih buruk daripada situs yang lebih cepat, bahkan dengan konten yang serupa.',
  },
];

const howToData = [
  { name: 'Masukkan Berat Situs Anda', text: 'Gunakan alat pengembang browser atau WebPageTest untuk mendeteksi berat halaman Anda. Masukkan nilai tersebut dalam MB.' },
  { name: 'Amati Waktu Pemuatan', text: 'Kalkulator menunjukkan berapa detik waktu yang dibutuhkan situs Anda untuk memuat di 3G, 4G, dan 5G. Waktu di dunia nyata biasanya lebih tinggi.' },
  { name: 'Pahami Dampak Masa Hidup', text: 'Persentase "masa hidup" menunjukkan berapa banyak waktu hidup seseorang yang dihabiskan untuk menunggu. Gunakan ini sebagai motivasi untuk mengoptimalkan.' },
  { name: 'Optimalkan dan Hitung Ulang', text: 'Setelah mengoptimalkan, ukur lagi dan hitung ulang. Lihat bagaimana peningkatan kecil memberikan dampak besar.' },
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

const ui: CalculadoraTiempoDatosUI = {
  headerTitle: 'Waktu yang Hilang di Jaringan',
  labelWebSize: 'Berat situs web (MB)',
  unit: 'MB',
  presetsLabel: 'CONTOH REALISTIS',
  labelSpeed: 'Kecepatan koneksi',
  speedLabel3g: '3G',
  speedValue3g: '0,4 Mbps',
  speedLabel4g: '4G/LTE',
  speedValue4g: '10 Mbps',
  speedLabel5g: '5G',
  speedValue5g: '100+ Mbps',
  labelTimes: 'Berapa kali per hari?',
  resultTitle: 'Hasil',
  resultSingleLoad: 'Pemuatan tunggal',
  resultDailyTotal: 'Total harian',
  resultTimePerYear: 'per tahun menunggu',
  resultLifeYears: 'dalam masa hidup Anda',
  resultMessage: 'Anda telah kehilangan sekitar 1 tahun masa hidup',
  copyMessage: 'Tersalin',
  preset3g: '3G',
  preset4g: '4G',
  preset5g: '5G',
};

export const content: ToolLocaleContent<CalculadoraTiempoDatosUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Sumber Daya Teknis tentang Pengoptimalan Web',
  bibliography: [
    { name: 'Google PageSpeed Insights', url: 'https://pagespeed.web.dev/' },
    { name: 'WebPageTest - Analisis Kecepatan Situs Web', url: 'https://www.webpagetest.org/' },
    { name: 'Web.dev - Core Web Vitals', url: 'https://web.dev/vitals/' },
    { name: 'MDN - Performa Web', url: 'https://developer.mozilla.org/en-US/docs/Web/Performance' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Mengapa Kecepatan Pemuatan Situs Web itu Kritis', level: 2 },
    {
      type: 'paragraph',
      html: 'Di era digital saat ini, kecepatan pemuatan situs web bukanlah kemewahan melainkan keharusan. Setiap milidetik sangat berarti dalam mempertahankan pengguna, meningkatkan peringkat pencarian, dan memaksimalkan konversi. Pengguna modern mengharapkan halaman dimuat dalam waktu kurang dari 3 detik.',
    },
    { type: 'title', text: 'Dampak pada Pengalaman Pengguna', level: 3 },
    {
      type: 'paragraph',
      html: '53% pengunjung seluler meninggalkan halaman jika memuat lebih dari 3 detik. Tingkat konversi turun 7% untuk setiap detik laten tambahan.',
    },
    { type: 'title', text: 'Memahami Kecepatan Koneksi', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>3G:</strong> 0,4 Mbps - Umum di daerah pedesaan dan negara berkembang',
        '<strong>4G/LTE:</strong> 10 Mbps - Standar di negara maju',
        '<strong>5G:</strong> 100+ Mbps - Berkembang secara bertahap, masih terbatas',
      ],
    },
    { type: 'title', text: 'Strategi untuk Mengurangi Berat Situs', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Pengoptimalan Gambar:</strong> Mewakili 50-80% berat. Kurangi 40-60% dengan alat seperti TinyPNG.',
        '<strong>Minifikasi:</strong> Hapus kode yang tidak perlu dari CSS dan JavaScript. Hemat 30-50%.',
        '<strong>Lazy Loading:</strong> Muat gambar hanya saat pengguna menggulir ke arahnya.',
        '<strong>Cache Browser:</strong> Cache file statis pada browser pengguna.',
        '<strong>CDN:</strong> Sajikan konten dari server yang secara geografis dekat.',
      ],
    },
    { type: 'title', text: 'Kesimpulan: Setiap Detik Berarti', level: 2 },
    {
      type: 'paragraph',
      html: 'Situs web Anda sering kali merupakan kesan pertama yang dimiliki pengguna tentang merek Anda. Situs yang lambat membuat pengguna frustrasi dan kehilangan bisnis. Situs yang cepat dan responsif menciptakan pengalaman positif dan meningkatkan semua metrik Anda.',
    },
  ],
};
