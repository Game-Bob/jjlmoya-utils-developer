import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlCleanerUI } from '../ui';

const slug = 'pembersih-tracking-url';
const title = 'Pembersih Tracking URL: Hapus UTM, FBCLID dan GCLID';
const description = 'Hapus otomatis parameter pelacakan dan iklan dari URL Anda. Bagikan tautan yang bersih dan lindungi privasi digital Anda seketika.';

const faqData = [
  {
    question: 'Jenis parameter pelacakan apa saja yang dihapus oleh alat ini?',
    answer: 'Alat kami secara otomatis mendeteksi dan menghapus parameter pelacakan yang paling umum, termasuk UTM (utm_source, utm_medium, dll.), pengidentifikasi klik iklan (fbclid, gclid, msclkid), serta pengidentifikasi kampanye email marketing (mc_cid, _hsenc).',
  },
  {
    question: 'Apakah ini mempengaruhi fungsionalitas website?',
    answer: 'Umumnya tidak. Parameter-parameter ini hampir sepenuhnya digunakan untuk analitik dan pemasaran. Saat Anda menghapusnya, halaman akan tetap terbuka seperti biasa — hanya saja pemilik website tidak bisa melacak dari mana asal klik Anda.',
  },
  {
    question: 'Apakah aman memproses tautan saya di sini?',
    answer: 'Tentu saja. Seperti semua alat kami, prosesnya 100% berjalan di sisi klien. Tautan Anda tidak pernah dikirim ke server kami; semuanya terjadi secara privat di browser Anda sendiri.',
  },
  {
    question: 'Mengapa tautan Facebook saya begitu panjang?',
    answer: 'Facebook menambahkan parameter bernama "fbclid" ke semua tautan yang keluar dari platformnya. Ini memungkinkan mereka melacak aktivitas Anda di website lain meskipun Anda sudah memblokir iklan pihak ketiga.',
  },
];

const howToData = [
  { name: 'Tempel URL Anda', text: 'Masukkan URL lengkap yang mengandung parameter pelacakan' },
  { name: 'Klik Bersihkan', text: 'Alat akan menganalisis URL secara otomatis' },
  { name: 'Tinjau hasilnya', text: 'Anda akan melihat URL yang sudah bersih dan daftar parameter yang dihapus' },
  { name: 'Salin dan bagikan', text: 'Gunakan URL bersih di email, media sosial, atau pesan Anda' },
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

const ui: UrlCleanerUI = {
  labelInput: 'Tempel URL yang mengandung parameter pelacakan',
  btnClean: 'Bersihkan',
  labelCleaned: 'URL Bersih',
  labelRemoved: 'Pelacak yang Dihapus',
  countLabel: 'Parameter yang dihapus',
  reductionLabel: 'Pengurangan panjang',
  noneDetected: 'Tidak ada parameter pelacakan umum yang terdeteksi.',
  errorInvalid: 'Mohon masukkan URL yang valid.',
  btnCopy: 'Salin',
  btnCopied: 'Disalin',
};

export const content: ToolLocaleContent<UrlCleanerUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Sumber tentang Privasi dan Pelacakan Web',
  bibliography: [
    { name: 'Electronic Frontier Foundation (EFF): Panduan Pelacakan Online', url: 'https://www.eff.org/issues/online-behavioral-tracking' },
    { name: 'Google Analytics: Dokumentasi Parameter UTM', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: 'Privasi Web: Dampak Click ID', url: 'https://www.w3.org/community/web-advertising/wiki/Click_Identifiers' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Pembersih Tracking URL: Hapus UTM, FBCLID dan GCLID', level: 2 },
    {
      type: 'paragraph',
      html: 'Hapus pelacak tak kasat mata dari tautan Anda agar bisa dibagikan secara bersih, aman, dan profesional. Cari tahu apa arti kode-kode aneh yang muncul di URL Anda.',
    },
    { type: 'title', text: 'Apa itu Pembersih Tracking URL dan mengapa Anda membutuhkannya?', level: 3 },
    {
      type: 'paragraph',
      html: 'Pernahkah Anda menyalin sebuah tautan untuk dikirim ke teman, lalu menyadari panjangnya tiga kali lipat dari yang seharusnya? "Sampah" ekstra itu adalah parameter pelacakan. <strong>Pembersih tracking</strong> adalah alat yang dirancang untuk "mengupas" URL dari semua informasi iklan dan pelacakan yang disematkan oleh platform besar ke setiap klik yang Anda buat.',
    },
    { type: 'title', text: 'Parameter pelacakan yang paling umum', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>UTM (Google Analytics):</strong> utm_source, utm_medium, utm_campaign untuk melacak kampanye',
        '<strong>FBCLID:</strong> Pengidentifikasi klik Facebook untuk melewati pembatasan cookie',
        '<strong>GCLID / DCLID:</strong> Google Click ID untuk menghubungkan kunjungan dengan kampanye Google Ads',
        '<strong>MSCLKID:</strong> Pengidentifikasi klik Microsoft Advertising dan Bing',
        '<strong>HubSpot & Mailchimp:</strong> Parameter otomasi pemasaran seperti _hsenc, mc_cid',
        '<strong>LinkedIn & Lainnya:</strong> li_fat_id dan pelacak media sosial lainnya',
      ],
    },
  ],
};
