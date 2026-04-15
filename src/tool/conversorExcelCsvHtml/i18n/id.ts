import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConversorExcelCsvHtmlUI } from '../ui';

const slug = 'konverter-tabel-excel-csv-html';
const title = 'Pembuat Kode Konverter Tabel Excel dan CSV ke HTML';
const description = 'Konversikan data Excel atau CSV Anda ke tabel HTML semantik yang bersih secara instan. Alat gratis untuk pengembang dan pembuat konten.';

const faqData = [
  {
    question: 'Bagaimana cara mengonversi file Excel (.xlsx) ke HTML?',
    answer: 'Pertama, buka file Anda di Excel dan simpan sebagai CSV (dibatasi koma). Kemudian, unggah file CSV tersebut ke alat kami atau tempel isinya untuk mendapatkan kode tabel HTML.',
  },
  {
    question: 'Apakah kode yang dihasilkan menyertakan gaya CSS?',
    answer: 'Generator menghasilkan HTML bersih dengan kelas opsional untuk bingkai dan garis-garis zebra. Gaya visual akhir bergantung pada CSS situs web Anda sendiri, memastikan integrasi yang sempurna.',
  },
  {
    question: 'Dapatkah saya mengunggah file CSV yang sangat besar?',
    answer: 'Ya, alat kami memproses data secara lokal di browser Anda. Ini berarti sangat cepat dan aman, karena data Anda tidak pernah dikirim melalui internet.',
  },
  {
    question: 'Apakah ini kompatibel dengan Google Sheets?',
    answer: 'Tentu saja. Di Google Sheets, buka File > Unduh > Nilai yang dipisahkan koma (.csv) dan gunakan file tersebut dengan alat kami.',
  },
];

const howToData = [
  {
    name: 'Siapkan data Anda',
    text: 'Siapkan file Excel atau CSV Anda. Pastikan datanya bersih.',
  },
  {
    name: 'Muat data',
    text: 'Tempel teks CSV di area input atau seret file langsung ke konverter.',
  },
  {
    name: 'Konfigurasi tabel',
    text: 'Pilih apakah Anda ingin menggunakan baris pertama sebagai header dan apakah Anda ingin gaya dasar.',
  },
  {
    name: 'Salin kode',
    text: 'Beralih ke tab "Kode HTML" dan salin hasilnya untuk ditempelkan di situs web Anda.',
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
  step: howToData.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
  inLanguage: 'id',
};

const ui: ConversorExcelCsvHtmlUI = {
  csvInputLabel: 'Tempel CSV Anda di sini',
  csvInputPlaceholder: 'Nama,Usia,Kota\nBudi,25,Jakarta\nAna,30,Bandung',
  uploadLabel: 'Atau unggah file Anda (CSV)',
  dragDropLabel: 'Seret dan lepas file Anda di sini',
  headerCheckboxLabel: 'Gunakan baris pertama sebagai header',
  bordersCheckboxLabel: 'Tambahkan bingkai',
  stripeCheckboxLabel: 'Garis-garis zebra',
  previewTabLabel: 'Pratinjau',
  codeTabLabel: 'Kode HTML',
  emptyStateLabel: 'Masukkan data untuk melihat tabel',
  copyButtonLabel: 'Salin Kode',
  copiedLabel: 'Tersalin!',
};

export const content: ToolLocaleContent<ConversorExcelCsvHtmlUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Sumber Daya tentang Tabel HTML dan Format Data',
  bibliography: [
    { name: 'W3C: Tabel HTML', url: 'https://www.w3.org/WAI/tutorials/tables/' },
    { name: 'MDN: Elemen tabel HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table' },
    { name: 'RFC 4180: Format CSV', url: 'https://tools.ietf.org/html/rfc4180' },
    { name: 'Google Sheets: Unduh data Anda', url: 'https://support.google.com/docs/answer/183965' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Konversikan Excel dan CSV ke Tabel HTML dengan Mudah', level: 2 },
    {
      type: 'paragraph',
      html: 'Dalam pengembangan web modern, menyajikan data tabular adalah salah satu cara paling efektif untuk menyampaikan informasi terstruktur. Namun, mengonversi data secara manual dari spreadsheet seperti <strong>Excel</strong> atau file <strong>CSV</strong> ke tag HTML <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, dan <code>&lt;td&gt;</code> sangatlah membosankan dan rawan kesalahan.',
    },
    { type: 'title', text: 'Mengapa menggunakan tabel HTML semantik?', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Aksesibilitas:</strong> Pembaca layar dapat menginterpretasikan struktur dan membantu pengguna dengan gangguan visual.',
        '<strong>SEO:</strong> Mesin pencari mengindeks konten sel, meningkatkan peringkat data Anda.',
        '<strong>Responsivitas:</strong> Dengan sedikit CSS, tabel HTML dapat beradaptasi dengan perangkat seluler.',
        '<strong>Kemudahan Pemeliharaan:</strong> Jauh lebih mudah untuk mengedit data dalam HTML daripada membuat ulang seluruh gambar.',
      ],
    },
    { type: 'title', text: 'Cara Kerja Konverter Excel ke HTML', level: 3 },
    {
      type: 'paragraph',
      html: 'Utilitas kami menggunakan pengurai teks asli yang memproses file dipisahkan koma (CSV). Sebagian besar program spreadsheet, termasuk Microsoft Excel, Google Sheets, dan LibreOffice Calc, memungkinkan Anda mengekspor data dalam format CSV.',
    },
  ],
};
