import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UtmGeneratorUI } from '../ui';

const slug = 'utm-generator-id';
const title = 'Generator Parameter UTM untuk Google Analytics';
const description = 'Buat tautan pelacakan yang presisi untuk kampanye pemasaran digital Anda. Dioptimalkan untuk Google Analytics dan alat analisis lainnya.';

const faqData = [
  {
    question: 'Apakah menggunakan parameter UTM buruk untuk SEO?',
    answer: 'Tidak, asalkan Anda menggunakan tag kanonikal. Mesin pencari memahami bahwa parameter UTM adalah untuk analitik dan tidak membuat konten duplikat.',
  },
  {
    question: 'Haruskah saya menggunakan parameter UTM untuk tautan internal?',
    answer: 'Tidak, jangan pernah. Tag UTM pada tautan internal memutus sesi pengguna dalam alat seperti Google Analytics, sehingga mendistorsi data lalu lintas Anda.',
  },
  {
    question: 'Apakah Google Analytics membedakan antara huruf besar dan huruf kecil dalam UTM?',
    answer: 'Ya. "google", "Google" dan "GOOGLE" akan diperlakukan sebagai sumber yang berbeda. Selalu jaga konsistensi, sebaiknya gunakan huruf kecil saja.',
  },
];

const howToData = [
  { name: 'Masukkan URL', text: 'Masukkan URL lengkap situs web Anda, termasuk https://' },
  { name: 'Tentukan sumber', text: 'Tentukan dari mana lalu lintas berasal (google, facebook, newsletter, dll.)' },
  { name: 'Pilih media', text: 'Pilih jenis saluran (cpc, email, sosial, organik, dll.)' },
  { name: 'Beri nama kampanye Anda', text: 'Tetapkan nama yang dapat diidentifikasi untuk mengelompokkan upaya pemasaran Anda' },
  { name: 'Salin dan gunakan', text: 'Salin URL yang dihasilkan dan gunakan dalam postingan, iklan, atau tanda tangan email Anda' },
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

const ui: UtmGeneratorUI = {
  labelUrl: 'URL Situs Web (misal: https://example.com) *',
  labelSource: 'Sumber kampanye (misal: google, newsletter) *',
  labelMedium: 'Media kampanye (misal: cpc, email)',
  labelCampaign: 'Nama kampanye (misal: penawaran_musim_panas)',
  labelTerm: 'Istilah kampanye (misal: beli_sepatu)',
  labelContent: 'Konten kampanye (misal: banner_atas)',
  labelGenerated: 'URL yang Dihasilkan:',
  btnCopy: 'Salin Tautan',
  btnCopied: 'Tersalin!',
  errorInvalid: 'Masukkan URL yang valid',
  errorInvalidUrl: 'URL tidak valid',
};

export const content: ToolLocaleContent<UtmGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi',
  bibliography: [
    { name: 'Mengumpulkan data kampanye dengan URL kustom - Bantuan Google Analytics (2024)', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: 'Praktik Terbaik untuk Penandaan URL Kampanye - Blog VWO (2023)', url: 'https://vwo.com/blog/utm-tagging-best-practices/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Generator UTM: Parameter Pelacakan untuk Google Analytics', level: 2 },
    {
      type: 'paragraph',
      html: 'Parameter <strong>UTM</strong> (Urchin Tracking Module) adalah label teks yang ditambahkan ke akhir URL untuk melacak lalu lintas web. Generator kami menyederhanakan pembuatan tautan yang dapat dilacak untuk kampanye pemasaran digital Anda.',
    },
    { type: 'title', text: '5 Pilar Tautan yang Dapat Dilacak', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Sumber Kampanye:</strong> Mengidentifikasi mesin pencari, jejaring sosial, atau asal lalu lintas. Contoh: google, newsletter, facebook.',
        '<strong>Media Kampanye:</strong> Mengacu pada saluran pemasaran. Contoh: cpc, email, sosial, banner, organik.',
        '<strong>Nama Kampanye:</strong> Nama spesifik kampanye Anda. Contoh: penawaran_musim_panas_2025, peluncuran_aplikasi_v2.',
        '<strong>Istilah Kampanye:</strong> Untuk pencarian berbayar, kata kunci yang Anda bidik. Contoh: beli_sepatu_olahraga.',
        '<strong>Konten Kampanye:</strong> Untuk pengujian A/B. Membedakan elemen serupa dalam sebuah kampanye. Contoh: header_v1, sidebar_v2.',
      ],
    },
    { type: 'title', text: 'Praktik Terbaik untuk Penandaan UTM', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Konsistensi huruf:</strong> Alat membedakan antara "Google", "GOOGLE" dan "google". Selalu gunakan huruf kecil untuk menghindari duplikat.',
        '<strong>Hindari spasi:</strong> Spasi menjadi %20. Gunakan tanda hubung (-) atau garis bawah (_) sebagai gantinya.',
        '<strong>Jangan gunakan pada tautan internal:</strong> Pelacakan UTM khusus untuk lalu lintas eksternal. Pada tautan internal, ini memutus sesi dan merusak metrik utama.',
        '<strong>Dokumentasikan tag Anda:</strong> Tetap catat semua kombinasi yang Anda gunakan untuk mencegah ketidakkonsistenan.',
      ],
    },
  ],
};

