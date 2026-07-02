import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SerpPixelSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'simulator-serp-penghitung-piksel';
const title = 'Simulator SERP dan Penghitung Piksel SEO';
const description = 'Pratinjau cuplikan pencarian gaya Google secara real-time, ukur lebar judul dan meta deskripsi dalam piksel, dan lihat dengan tepat di mana teks Anda akan dipotong.';

const howTo = [
  {
    name: 'Masukkan tag judul',
    text: 'Ketik atau tempel judul halaman yang ingin Anda uji. Pratinjau SERP dan pengukur piksel diperbarui pada setiap ketikan.',
  },
  {
    name: 'Tambahkan URL yang terlihat',
    text: 'Gunakan domain dan jalur yang realistis agar cuplikan menyerupai hasil yang akan dipindai oleh pencari.',
  },
  {
    name: 'Tulis deskripsi meta',
    text: 'Tambahkan teks deskripsi dan perhatikan bilah piksel. Saat melebihi lebar visual yang disarankan, pratinjau memotongnya dengan elipsis.',
  },
  {
    name: 'Beralih antara desktop dan seluler',
    text: 'Bandingkan rendering judul dengan lebar kartu desktop atau seluler sebelum menerbitkan metadata.',
  },
];

const faq = [
  {
    question: 'Mengapa menghitung piksel alih-alih karakter untuk judul SEO?',
    answer: 'Kartu hasil Google dibatasi oleh lebar visual. Judul dengan banyak huruf sempit dapat memuat lebih banyak karakter daripada judul dengan huruf lebar, huruf besar, atau glif yang terlihat tebal. Pengukuran piksel memberikan pratinjau yang lebih akurat dari hasil yang terlihat.',
  },
  {
    question: 'Apakah ini menjamin persis bagaimana Google akan memotong cuplikan saya?',
    answer: 'Tidak. Google dapat menulis ulang tautan judul dan cuplikan, dan rendering dapat bervariasi menurut kueri, perangkat, bahasa, dan eksperimen. Alat ini dirancang sebagai panduan visual praktis untuk menulis metadata yang lebih kecil kemungkinannya untuk dipotong.',
  },
  {
    question: 'Batas piksel apa yang digunakan simulator?',
    answer: 'Batas default judul desktop adalah 580 px, judul seluler 600 px, dan batas deskripsi meta adalah 920 px. Ini adalah target penulisan, bukan batas resmi Google.',
  },
  {
    question: 'Mengapa pratinjau menambahkan elipsis?',
    answer: 'Saat teks yang diukur melebihi lebar piksel yang tersedia, simulator memotong string pada karakter terakhir yang muat dan menambahkan tiga titik, mencocokkan perilaku praktis yang dibutuhkan tim SEO untuk mendeteksi hilangnya makna.',
  },
];

const ui: SerpPixelSimulatorUI = {
  titleLabel: 'Tag judul',
  titlePlaceholder: 'GameBob | Studio Pengembangan Independen',
  urlLabel: 'URL yang terlihat',
  urlPlaceholder: 'https://www.gamebob.dev/id/',
  descriptionLabel: 'Deskripsi meta',
  descriptionPlaceholder: 'Temukan koleksi alat dan permainan kami yang dirancang untuk meningkatkan alur kerja digital dan hiburan Anda.',
  deviceLabel: 'Mode pratinjau',
  desktopLabel: 'Desktop',
  mobileLabel: 'Seluler',
  titlePixelsLabel: 'Lebar judul',
  descriptionPixelsLabel: 'Lebar deskripsi',
  charactersLabel: 'karakter',
  previewLabel: 'Pratinjau langsung gaya Google',
  tooLongLabel: 'Terlalu lebar',
  goodLabel: 'Pas',
  emptyTitle: 'Judul Anda akan muncul di sini',
  emptyDescription: 'Pratinjau deskripsi meta Anda akan muncul di sini saat Anda mengetik.',
  defaultTitle: 'GameBob | Studio Pengembangan Independen',
  defaultUrl: 'https://www.gamebob.dev/id/',
  defaultDescription: 'Temukan koleksi alat dan permainan kami yang dirancang untuk meningkatkan alur kerja digital dan hiburan Anda.',
  fallbackUrl: 'contoh.co.id',
  fallbackFaviconText: 'G',
  pixelUnit: 'px',
  ellipsis: '...',
  fetchButtonLabel: 'Ambil',
  fetchLoadingLabel: 'Mengambil...',
  fetchSuccessLabel: 'Metadata dimuat dari URL.',
  fetchCorsError: 'Browser tidak dapat membaca halaman ini. Mungkin diblokir oleh CORS, pengalihan, konten campuran, atau aturan jaringan. Anda masih dapat menempelkan atau mengedit metadata secara manual.',
  fetchInvalidUrlError: 'Masukkan URL yang valid sebelum mengambil metadata.',
  fetchNoMetadataError: 'Halaman diambil, tetapi tidak ada judul atau deskripsi meta yang ditemukan.',
  fetchGenericError: 'Metadata tidak dapat diambil dari URL ini. Periksa alamat atau isi kolom secara manual.',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<SerpPixelSimulatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Pertanyaan umum tentang simulator SERP',
  faq,
  bibliographyTitle: 'Dokumentasi hasil pencarian',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Berhenti menebak bagaimana hasil Google Anda akan terlihat',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tag judul bisa terlihat sempurna di spreadsheet dan tetap gagal di hasil pencarian. Google tidak mencadangkan ruang berdasarkan jumlah karakter; Google merender teks di dalam kartu visual. Itu berarti <strong>GameBob | Studio Pengembangan Independen</strong> dan judul lain dengan jumlah karakter yang sama dapat menempati lebar yang sangat berbeda tergantung pada huruf, kapitalisasi, tanda baca, dan spasi.',
    },
    {
      type: 'tip',
      title: 'Aturan yang benar benar membantu',
      html: 'Tulis cuplikan sehingga janji penting bertahan dari elipsis. Tempatkan jenis halaman, maksud pencarian, dan alasan terkuat untuk mengklik sebelum batas piksel. Nama merek berguna, tetapi tidak boleh mendorong manfaat utama keluar dari pandangan.',
    },
    {
      type: 'title',
      text: 'Apa yang diukur oleh penghitung piksel',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Elemen', 'Yang penting', 'Cara menggunakan hasilnya'],
      rows: [
        ['Tag judul', 'Lebar yang dirender dalam piksel, bukan jumlah karakter mentah', 'Jaga kata kunci utama dan janji klik tetap terlihat sebelum pemotongan.'],
        ['URL yang terlihat', 'Kepercayaan visual dan kejelasan topik', 'Gunakan jalur yang dapat dibaca yang memperkuat ke mana hasil mengarah.'],
        ['Deskripsi meta', 'Area cuplikan yang lebih luas dengan perilaku tergantung kueri', 'Tempatkan manfaat di depan karena Google dapat mempersingkat atau menulis ulangnya.'],
        ['Mode perangkat', 'Kartu desktop dan seluler bisa terasa berbeda', 'Periksa keduanya sebelum menerbitkan metadata untuk halaman penting.'],
      ],
    },
    {
      type: 'title',
      text: 'Mengapa batas karakter adalah kebiasaan SEO yang lemah',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Saran tradisional seperti "jaga judul di bawah 60 karakter" memang nyaman, tetapi menyembunyikan masalah sebenarnya. Huruf lebar seperti W dan M, kata huruf besar, pemisah, angka, dan nama merek panjang semuanya mengonsumsi ruang yang berbeda. Pengukuran piksel membuat pertukaran langsung terlihat: Anda dapat melihat apakah sebuah frasa pantas mendapat tempatnya atau mencuri ruang dari pesan yang lebih kuat.',
    },
    {
      type: 'title',
      text: 'Alur kerja praktis untuk cuplikan yang lebih baik',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Mulai dengan maksud:</strong> jelaskan apa yang didapat pengguna, bukan hanya apa nama halamannya.',
        '<strong>Uji judul lengkap:</strong> tempelkan ke simulator dan perhatikan bilahnya sebelum menerbitkan.',
        '<strong>Hapus kata-kata lemah:</strong> jika bilah berubah merah, hapus kata pengisi sebelum memotong istilah berharga.',
        '<strong>Periksa elipsis:</strong> jika pratinjau yang dipotong kehilangan makna, tulis ulang judul alih-alih menerima pemotongan.',
        '<strong>Ulangi untuk deskripsi:</strong> pastikan kalimat pertama membawa proposisi nilai dengan sendirinya.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Saat bilah berubah merah',
      html: 'Bilah merah bukan peringatan penalti. Itu berarti teks saat ini lebih lebar dari target visual yang dipilih, jadi simulator memotongnya dengan titik. Perlakukan itu sebagai sinyal editorial: putuskan apakah kata-kata tersembunyi dapat dibuang, atau apakah cuplikan membutuhkan struktur yang lebih tajam.',
    },
    {
      type: 'title',
      text: 'Batasan, penulisan ulang, dan harapan realistis',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tidak ada simulator yang dapat menjamin cuplikan persis yang akan ditampilkan Google. Google dapat menulis ulang tautan judul, menebalkan istilah kueri, memilih teks halaman alih-alih deskripsi meta, atau menampilkan cuplikan berbeda untuk pencarian yang berbeda. Alat ini paling baik digunakan sebagai langkah penulisan dan QA cepat: alat ini mendeteksi kelebihan visual yang jelas sebelum halaman mencapai produksi.',
    },
    {
      type: 'summary',
      title: 'Penggunaan terbaik simulator SERP ini',
      items: [
        'Gunakan bilah piksel untuk mendeteksi kelebihan visual sebelum menerbitkan metadata.',
        'Jaga maksud pencarian utama dan janji klik tetap terlihat sebelum elipsis apa pun.',
        'Ambil metadata dari URL yang mengizinkan CORS, lalu edit hasilnya secara manual jika diperlukan.',
        'Anggap pratinjau sebagai panduan penulisan, karena Google masih dapat menulis ulang cuplikan per kueri.',
      ],
    },
  ],
};
