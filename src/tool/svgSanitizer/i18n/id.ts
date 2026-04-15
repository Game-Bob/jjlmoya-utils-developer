import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgSanitizerUI } from '../ui';

const slug = 'pembersih-svg';
const title = 'Pembersih SVG Online';
const description = 'Optimalkan dan bersihkan SVG yang diekspor dari Figma, Adobe Illustrator, atau Inkscape. Hapus metadata, atribut yang tidak perlu, dan grup kosong untuk menghasilkan SVG siap produksi.';

const faqData = [
  {
    question: 'Bisakah saya menempel seluruh HTML halaman yang berisi SVG tertanam?',
    answer: 'Bisa. Pembersih akan mendeteksi elemen SVG di dalam HTML dan mengekstrak hanya blok tersebut untuk diproses. Cara ini juga berfungsi jika kamu langsung menempelkan fragmen SVG-nya.',
  },
  {
    question: 'Apakah ini berfungsi untuk SVG dari Illustrator?',
    answer: 'Ya. Illustrator mengekspor SVG dengan deklarasi XML, metadata, dan namespace miliknya sendiri yang akan dihapus oleh pembersih. Hasilnya adalah SVG yang kompatibel dengan semua browser modern.',
  },
  {
    question: 'Apa perbedaan antara membersihkan dan meminifikasi?',
    answer: 'Membersihkan menghapus atribut dan tag yang tidak diperlukan, tetapi tetap mempertahankan format indentasi agar kamu bisa membaca dan mengedit kode. Meminifikasi juga memampatkan semuanya menjadi satu baris untuk memperkecil ukuran file semaksimal mungkin.',
  },
  {
    question: 'Apakah menghapus ID bisa merusak SVG?',
    answer: 'Hanya jika ada elemen dalam SVG yang merujuk elemen lain melalui ID, misalnya lewat fill="url(#gradient)". Dalam kasus itu, nonaktifkan opsi Hapus ID. Opsi ini dinonaktifkan secara default justru untuk mencegah masalah tersebut.',
  },
  {
    question: 'Apakah kode SVG saya dikirim ke server?',
    answer: 'Tidak. Semua pemrosesan terjadi di browser kamu menggunakan API bawaan DOMParser dan XMLSerializer. Kode tidak pernah meninggalkan perangkatmu.',
  },
];

const howToData = [
  { name: 'Tempelkan SVG', text: 'Tempelkan kode SVG yang diekspor dari Figma, Illustrator, atau Inkscape ke area teks.' },
  { name: 'Atur opsi', text: 'Aktifkan atau nonaktifkan opsi: hapus ID, hilangkan width/height, dan minifikasi sesuai kebutuhanmu.' },
  { name: 'Bersihkan', text: 'Klik Bersihkan SVG untuk memproses kode dan mendapatkan hasil yang sudah dioptimalkan.' },
  { name: 'Salin atau unduh', text: 'Gunakan tombol Salin atau Unduh untuk mendapatkan SVG bersih yang siap digunakan di produksi.' },
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

const ui: SvgSanitizerUI = {
  labelInput: 'Tempelkan SVG kotor kamu di sini',
  labelOutput: 'SVG bersih',
  optRemoveIds: 'Hapus ID',
  optRemoveWH: 'Hilangkan width/height',
  optMinify: 'Minifikasi',
  btnSanitize: 'Bersihkan SVG',
  btnCopy: 'Salin',
  btnCopied: 'Tersalin',
  btnDownload: 'Unduh',
  statOriginal: 'Asli',
  statCleaned: 'Bersih',
  statReduction: 'Pengurangan',
  statElems: 'Elem. dihapus',
  statAttrs: 'Attrs. dihapus',
  errorPaste: 'Tempelkan SVG terlebih dahulu sebelum membersihkan.',
  errorProcess: 'Terjadi kesalahan saat memproses SVG.',
};

export const content: ToolLocaleContent<SvgSanitizerUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Pertanyaan Umum',
  faq: faqData,
  bibliographyTitle: 'Referensi',
  bibliography: [
    { name: 'SVG Specification - W3C', url: 'https://www.w3.org/TR/SVG2/' },
    { name: 'Figma SVG Export - Dokumentasi Resmi', url: 'https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma' },
    { name: 'SVGO - SVG Optimizer (referensi open source)', url: 'https://github.com/svg/svgo' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Pembersih SVG: Rapikan Kode dari Figma dan Illustrator', level: 2 },
    {
      type: 'paragraph',
      html: 'Tempelkan SVG dari <strong>Figma</strong>, Adobe Illustrator, atau inspector browser dan dapatkan file vektor yang bersih, teroptimasi, dan siap digunakan di produksi.',
    },
    { type: 'title', text: 'Mengapa SVG yang diekspor begitu berantakan?', level: 3 },
    {
      type: 'paragraph',
      html: 'Saat kamu mengekspor SVG dari Figma, kamu mendapatkan file yang penuh dengan atribut yang hanya bermakna di dalam aplikasinya: <code>data-name</code>, <code>xml:space</code>, referensi ke layer internal, dan metadata desain. Hasilnya adalah SVG yang bisa 40–70% lebih besar dari yang seharusnya.',
    },
    { type: 'title', text: 'Apa yang dihapus oleh Pembersih', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Metadata editor:</strong> tag <code>metadata</code>, <code>title</code>, dan <code>desc</code> yang ditambahkan Figma dan Illustrator secara otomatis.',
        '<strong>Namespace Inkscape:</strong> semua elemen dengan awalan <code>inkscape:</code> dan <code>sodipodi:</code>.',
        '<strong>Atribut tidak perlu:</strong> <code>xml:space</code>, <code>version</code>, <code>xmlns:*</code> yang berlebihan, dan atribut <code>data-*</code> dari Figma.',
        '<strong>Grup kosong:</strong> elemen <code>&lt;g&gt;</code> tanpa konten yang tersisa sebagai artefak dari layer yang sudah dihapus.',
        '<strong>Deklarasi XML:</strong> deklarasi <code>&lt;?xml version="1.0"?&gt;</code> dan DOCTYPE yang tidak diperlukan saat SVG ditanam dalam HTML.',
      ],
    },
  ],
};
