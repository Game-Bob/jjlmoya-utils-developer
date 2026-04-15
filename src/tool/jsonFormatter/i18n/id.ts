import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonFormatterUI } from '../ui';

const slug = 'json-formatter-id';
const title = 'Format dan Validasi JSON Online Gratis';
const description =
  'Alat online gratis untuk memformat, memvalidasi, dan memperbaiki kode JSON. Mempercantik dan memformat JSON. Mendeteksi kesalahan sintaksis dan meningkatkan keterbacaan kode.';

const faqData = [
  {
    question: 'Apakah data saya aman saat menggunakan pemformat ini?',
    answer:
      'Tentu saja. Semua pemrosesan terjadi 100% di browser Anda (Sisi Klien). Data JSON Anda tidak pernah dikirim ke server mana pun, memastikan privasi lengkap untuk struktur data Anda.',
  },
  {
    question: "Apa yang menyebabkan kesalahan 'Invalid JSON'?",
    answer:
      'Biasanya disebabkan oleh koma berlebih di akhir objek, kurangnya tanda kutip ganda di sekitar kunci, atau karakter yang tidak terlihat. Alat kami menyoroti baris kesalahan yang tepat sehingga Anda dapat memperbaikinya.',
  },
  {
    question: 'Dapatkah alat ini memperbaiki JSON yang rusak?',
    answer:
      'Alat kami secara otomatis mencoba memperbaiki kesalahan umum seperti koma berlebih yang tidak perlu atau karakter escape yang salah, sehingga JSON menjadi valid sesuai dengan standar RFC 8259.',
  },
  {
    question: 'Apakah alat ini mendukung file JSON yang sangat besar?',
    answer:
      'Ya, mesin pemrosesan dioptimalkan untuk menangani struktur data yang kompleks dan file berukuran besar tanpa memblokir antarmuka browser.',
  },
];

const howToData = [
  {
    name: 'Tempel kode Anda',
    text: 'Tempelkan JSON Anda yang belum diformat atau telah diminifikasi ke dalam area teks utama.',
  },
  {
    name: 'Validasi dan Format',
    text: 'Sistem akan secara otomatis menganalisis kode, menyoroti kesalahan sintaksis, dan menerapkan indentasi untuk meningkatkan keterbacaan.',
  },
  {
    name: 'Pilih gaya',
    text: 'Pilih antara format diperluas (beautify) atau dikompresi (minify) tergantung pada apakah Anda membutuhkan keterbacaan atau penghematan ruang.',
  },
  {
    name: 'Salin hasilnya',
    text: 'Klik tombol salin untuk mengambil JSON yang telah divalidasi dengan sempurna ke papan klip Anda.',
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

const ui: JsonFormatterUI = {
  labelInput: 'Input (JSON)',
  labelOutput: 'Output',
  btnMinify: 'Minifikasi',
  btnBeautify: 'Perkanti',
  btnFix: 'Coba Perbaiki',
  btnCopy: 'Salin',
  statusWaiting: 'Menunggu input...',
  statusValid: 'JSON Valid',
  statusInvalid: 'JSON Tidak Valid',
  toastCopied: 'Tersalin!',
  toastFixed: 'JSON diperbaiki (Pratinjau)',
  toastFixFailed: 'Tidak dapat memperbaiki secara otomatis',
  placeholder: 'Tempel JSON Anda di sini...',
};

export const content: ToolLocaleContent<JsonFormatterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi dan Standar',
  bibliography: [
    {
      name: 'RFC 8259 – The JavaScript Object Notation (JSON) Data Interchange Format (IETF)',
      url: 'https://datatracker.ietf.org/doc/html/rfc8259',
    },
    {
      name: 'ECMA-404 – The JSON Data Interchange Syntax (Ecma International)',
      url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-404/',
    },
    {
      name: 'JSON.org – Mengenal JSON',
      url: 'https://www.json.org/json-en.html',
    },
    {
      name: 'MDN Web Docs – JSON',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Validasi dan Pemformatan JSON',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'JSON (JavaScript Object Notation) adalah standar de facto untuk pertukaran data di web. Namun, sintaksnya yang ketat membuatnya rentan terhadap kesalahan manusia saat diedit secara manual.',
    },
    {
      type: 'paragraph',
      html: 'Alat ini memungkinkan Anda untuk memvalidasi struktur, memformat kode untuk meningkatkan keterbacaannya, dan secara otomatis memperbaiki kesalahan sintaksis yang umum.',
    },
    { type: 'grid', columns: 2 },
    {
      type: 'card',
      title: 'Kesalahan Umum yang Diperbaiki',
      html: '<ul><li><strong>Tanda Kutip Tunggal:</strong> Standar JSON memerlukan tanda kutip ganda. Alat ini mengubah <code>\'key\': \'value\'</code> menjadi <code>"key\": \"value\"</code>.</li><li><strong>Kunci Tanpa Tanda Kutip:</strong> Mendeteksi kunci objek gaya JavaScript dan menambahkan tanda kutip yang diperlukan.</li><li><strong>Koma di Akhir:</strong> Menghapus koma di akhir objek atau array (trailing commas) yang merusak parser ketat.</li></ul>',
    },
    {
      type: 'card',
      title: 'Fitur',
      html: '<ul><li><strong>Penyorotan Sintaksis:</strong> Mewarnai kunci, string, angka, dan boolean untuk memfasilitasi pembacaan cepat.</li><li><strong>Validasi Real-Time:</strong> Secara instan menunjukkan apakah JSON valid atau menunjukkan kesalahan penguraian spesifik.</li><li><strong>Privasi Total:</strong> Pemrosesan terjadi 100% di browser Anda. Tidak ada data yang dikirim ke server eksternal.</li></ul>',
    },
  ],
};

