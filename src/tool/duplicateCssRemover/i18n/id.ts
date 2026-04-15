import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DuplicateCssRemoverUI } from '../ui';

const slug = 'penghapus-css-duplikat';
const title = 'Hapus CSS Duplikat Online. Satukan dan Bersihkan Stylesheet Anda';
const description =
  'Alat gratis untuk membersihkan dan membuang kode CSS duplikat. Menyatukan selektor yang redundan, menghormati aturan cascade, dan langsung memperkecil ukuran file di browser.';

const faqData = [
  {
    question: 'Apa yang terjadi saat selektor CSS terduplikasi?',
    answer:
      'Ketika selektor yang sama muncul berkali-kali, browser menerapkan semua aturan tetapi deklarasi terakhir dari setiap properti akan menimpa yang sebelumnya. Ini menghasilkan file yang lebih berat dari seharusnya tanpa memberikan manfaat nyata pada tampilan.',
  },
  {
    question: 'Apakah ada properti yang hilang saat duplikat dihapus?',
    answer:
      'Tidak. Algoritma ini sepenuhnya menghormati cascade CSS: untuk properti yang bentrok di bawah selektor yang sama, selalu menyimpan yang terakhir dideklarasikan. Properti unik dari setiap blok digabungkan di bawah satu selektor yang disatukan.',
  },
  {
    question: 'Apakah bisa digunakan dengan CSS yang sudah diminifikasi atau mengandung komentar?',
    answer:
      'Ya. Alat ini secara otomatis menghapus komentar CSS sebelum memproses dan bekerja dengan baik pada kode satu baris. Untuk CSS dengan nesting lanjutan atau at-rules yang kompleks, disarankan untuk memisahkan blok-blok terlebih dahulu.',
  },
  {
    question: 'Apakah CSS saya dikirim ke server?',
    answer:
      'Tidak. Semua pemrosesan terjadi langsung di browser Anda melalui JavaScript lokal. Tidak ada bagian dari CSS Anda yang dikirimkan ke server eksternal mana pun, sehingga privasi kode Anda sepenuhnya terjaga.',
  },
];

const howToData = [
  {
    name: 'Tempel CSS Anda',
    text: 'Salin isi file CSS Anda yang mengandung selektor berulang, lalu tempelkan ke kolom kiri berlabel "Dirty / Duplicate CSS".',
  },
  {
    name: 'Jalankan pembersihan',
    text: 'Klik tombol "Bersihkan dan Satukan CSS". Alat akan memindai semua selektor, menggabungkan properti, dan menghapus blok yang redundan.',
  },
  {
    name: 'Tinjau hasil dan salin',
    text: 'Periksa penghematan byte yang dicapai, lalu salin CSS yang sudah dioptimalkan dengan tombol "Salin Kode" untuk langsung digunakan di proyek Anda.',
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

const ui: DuplicateCssRemoverUI = {
  labelInput: 'CSS Kotor / Duplikat',
  labelOutput: 'CSS Bersih',
  placeholderInput: '.btn { padding: 10px; color: red; }\n.btn { margin: 5px; color: blue; }',
  placeholderOutput: 'CSS yang dioptimalkan dan disatukan akan muncul di sini...',
  btnClean: 'Bersihkan dan Satukan CSS',
  btnCopy: 'Salin Kode',
  btnCopied: 'Disalin!',
  statBytesOriginal: 'Byte Asli',
  statBytesClean: 'Byte Bersih',
  statSaving: 'Penghematan',
};

export const content: ToolLocaleContent<DuplicateCssRemoverUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi dan Dokumentasi',
  bibliography: [
    {
      name: 'Web Vitals: Dampak CSS pada Render-Blocking dan FCP',
      url: 'https://web.dev/articles/render-blocking-resources',
    },
    {
      name: 'Spesifikasi W3C: Cascade dan Pewarisan CSS',
      url: 'https://www.w3.org/TR/css-cascade-4/',
    },
    {
      name: 'Clean CSS: Library dan Metodologi untuk Minifikasi CSS',
      url: 'https://github.com/clean-css/clean-css',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Mengapa Kode CSS Bisa Terduplikasi?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Saat mengelola proyek web jangka panjang atau bekerja dengan kode warisan (<em>legacy code</em>), sangat umum terjadi beberapa pengembang menulis aturan CSS yang saling tumpang tindih. Karena khawatir merusak desain yang sudah ada, seorang developer lebih memilih menambahkan aturan baru di bagian akhir dokumen daripada mengedit atau merefaktor kode aslinya.',
    },
    {
      type: 'paragraph',
      html: 'Hasilnya adalah file yang tidak efisien dengan puluhan selektor yang dideklarasikan berulang kali, membuat kode sulit dibaca dan memperbesar ukuran unduhan halaman web Anda secara signifikan.',
    },
    {
      type: 'title',
      text: 'Dampak Tersembunyi pada Performa Web (Web Vitals)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'File stylesheet menghalangi proses rendering browser secara alami (sebagai sumber daya <strong>Render-Blocking</strong>). Selama browser belum selesai mengunduh dan membangun CSSOM secara lengkap, layar akan tetap kosong.',
    },
    {
      type: 'tip',
      html: 'Membuang gaya yang redundan bukan sekadar soal kerapian kode — ini adalah peningkatan nyata dan terukur pada metrik penting seperti <strong>First Contentful Paint (FCP)</strong>.',
    },
    {
      type: 'title',
      text: 'Cara Kami Menyatukan Aturan yang Duplikat',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Alat ini bekerja seperti perakit cerdas. Alih-alih sekadar mengompres spasi putih seperti minifier biasa, alat ini memindai teks secara rekursif untuk menemukan pola selektor yang identik.',
    },
    {
      type: 'list',
      items: [
        'Bayangkan Anda memiliki aturan <code>.box { color: red; }</code> dan seratus baris kemudian ada <code>.box { padding: 10px; color: blue; }</code>. Alat ini akan menyatukan kedua blok di bawah selektor <code>.box</code> yang sama, menggabungkan padding-nya.',
        '<strong>Pelestarian Cascade CSS:</strong> Untuk konflik langsung, algoritma secara ketat mempertahankan properti yang terakhir dideklarasikan. Ini memastikan tata letak asli Anda tidak rusak saat dokumen dibersihkan.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Hentikan pengiriman kilobyte teks mati ke ponsel pengguna Anda. Satukan kode Anda dalam hitungan milidetik, sepenuhnya offline langsung dari browser.',
    },
  ],
};
