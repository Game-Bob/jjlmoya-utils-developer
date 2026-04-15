import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssToInlineConverterUI } from '../ui';

const slug = 'konverter-css-inline-html';
const title = 'Konverter CSS ke Inline HTML untuk Email';
const description =
  'Ubah stylesheet dan kelas CSS Anda menjadi style inline yang langsung tertanam dalam HTML. Cocok untuk newsletter, email transaksional, dan tata letak web yang kompatibel lintas platform.';

const faqData = [
  {
    question: 'Mengapa email membutuhkan CSS inline, bukan stylesheet eksternal?',
    answer:
      'Klien email seperti Outlook, Gmail, atau Apple Mail memfilter atau mengabaikan tag <link> dan <style> demi alasan keamanan. Satu-satunya cara yang terjamin agar sebuah gaya diterapkan dengan benar dalam email adalah dengan menyematkannya langsung pada atribut style setiap elemen HTML.',
  },
  {
    question: 'Apa yang terjadi jika elemen sudah memiliki atribut style sendiri?',
    answer:
      'Alat ini menghormati style inline yang sudah ada dan menambahkan properti baru setelahnya, mensimulasikan perilaku kaskade CSS: properti yang dideklarasikan belakangan akan menimpa yang sebelumnya jika terjadi konflik.',
  },
  {
    question: 'Apakah berfungsi dengan selektor kompleks seperti :hover atau media queries?',
    answer:
      'Alat ini memproses selektor kelas, id, atribut, dan pseudo-class struktural yang dapat diselesaikan oleh DOMParser. Selektor yang bergantung pada status seperti :hover dan media queries tidak dapat diinline (karena bergantung pada lingkungan runtime) dan akan diabaikan.',
  },
  {
    question: 'Apakah kode HTML dan CSS saya dikirim ke server?',
    answer:
      'Tidak. Semua pemrosesan berlangsung 100% di browser Anda menggunakan DOMParser API bawaan. Tidak ada satu byte pun kode Anda yang meninggalkan perangkat Anda, menjamin privasi penuh untuk template yang berisi konten sensitif.',
  },
];

const howToData = [
  {
    name: 'Tempelkan HTML asli Anda',
    text: 'Tulis atau tempelkan HTML yang ingin Anda proses di kolom "HTML Asli". Bisa berupa fragmen atau dokumen lengkap.',
  },
  {
    name: 'Tambahkan aturan CSS Anda',
    text: 'Tempelkan kelas dan id yang ingin Anda suntikkan di kolom "Aturan CSS". Alat ini menerapkannya dengan memperhatikan spesifisitas selektor.',
  },
  {
    name: 'Konversi dan salin',
    text: 'Klik "Suntikkan CSS ke HTML". Hasilnya dengan semua style inline akan muncul di bawah, siap untuk disalin dan ditempel ke pengelola email atau CMS Anda.',
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

const ui: CssToInlineConverterUI = {
  labelHtml: 'HTML Asli',
  labelCss: 'Aturan CSS',
  labelOutput: 'Hasil HTML Inline',
  placeholderHtml: '<div class="kelas-saya">Halo Dunia</div>',
  placeholderCss: '.kelas-saya { color: red; padding: 10px; }',
  placeholderOutput: 'HTML Anda dengan style tertanam akan muncul di sini...',
  btnConvert: 'Suntikkan CSS ke HTML',
  btnCopy: 'Salin Kode',
  btnCopied: 'Tersalin!',
  msgError: 'Terjadi kesalahan pemrosesan. Pastikan HTML dan CSS Anda valid.',
};

export const content: ToolLocaleContent<CssToInlineConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi dan Dokumentasi',
  bibliography: [
    {
      name: 'Can I email: Matriks Dukungan HTML dan CSS untuk Email',
      url: 'https://www.caniemail.com/',
    },
    {
      name: 'MDN Web Docs: Atribut global style',
      url: 'https://developer.mozilla.org/en/docs/Web/HTML/Global_attributes/style',
    },
    {
      name: 'DOMParser API: Parsing aman di dalam browser',
      url: 'https://developer.mozilla.org/en/docs/Web/API/DOMParser',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Apa Itu CSS Inliner dan Mengapa Anda Membutuhkannya?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dalam pengembangan aplikasi web modern, kita terbiasa memisahkan tanggung jawab: HTML membangun struktur, sementara file CSS eksternal menangani seluruh tampilan visual. Namun, tidak semua lingkungan mempercayai stylesheet eksternal atau tag <code>&lt;style&gt;</code> global.',
    },
    {
      type: 'paragraph',
      html: 'Kasus penggunaan yang paling umum dan ketat di mana CSS eksternal gagal adalah <strong>Pengembangan Template Email</strong>. Dalam lingkungan ini, satu-satunya cara yang andal agar font, warna, atau margin tampil dengan benar adalah menyematkannya langsung dalam tag: <code>&lt;span style="color: red;"&gt;</code>.',
    },
    {
      type: 'title',
      text: 'Masalah CSS di Klien Email',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Klien email seperti Microsoft Outlook, Apple Mail, atau Gmail dikenal memiliki mesin rendering CSS yang sangat ketat. Sebagian besar memfilter atau membuang tag <code>&lt;link&gt;</code> atau <code>&lt;style&gt;</code> karena khawatir dengan injeksi kode yang bisa merusak antarmuka pembacaan.',
    },
    {
      type: 'tip',
      html: 'Untuk newsletter atau email transaksional (struk, konfirmasi akun), penggunaan tabel dan <em>CSS inline</em> adalah standar emas di industri email marketing.',
    },
    {
      type: 'title',
      text: 'Cara Kerja Alat Ini di Browser Anda',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Parsing Aman:</strong> Menggunakan <code>DOMParser API</code> untuk mengubah HTML masukan secara sementara menjadi DOM virtual yang aman di dalam browser Anda.',
        '<strong>Simulasi Kaskade:</strong> Menganalisis aturan CSS Anda, menerapkan bobot spesifisitas pada selektor, dan memodifikasi atribut <code>style</code> dari elemen HTML yang dipilih dengan menyuntikkan kodenya.',
        '<strong>100% Offline:</strong> Tidak ada satu byte pun kode Anda yang meninggalkan perangkat Anda. Privasi penuh untuk template dengan konten sensitif.',
      ],
    },
  ],
};
