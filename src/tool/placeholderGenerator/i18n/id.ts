import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PlaceholderGeneratorUI } from '../ui';

const slug = 'generator-gambar-placeholder';
const title = 'Generator Gambar Placeholder. Buat Mockup Web dengan Cepat';
const description =
  'Buat gambar placeholder kustom untuk desain web Anda. Atur resolusi, warna latar, teks, lalu ekspor dalam format PNG, WebP, atau JPEG secara instan.';

const faqData = [
  {
    question: 'Apa itu gambar placeholder?',
    answer:
      'Gambar placeholder adalah grafis sementara yang digunakan dalam desain web dan tata letak halaman untuk mengisi ruang yang nantinya akan ditempati oleh gambar nyata. Gambar ini membantu memvisualisasikan struktur halaman sebelum konten final tersedia.',
  },
  {
    question: 'Apakah saya bisa menggunakan resolusi apa pun di generator ini?',
    answer:
      'Ya, Anda dapat memasukkan nilai numerik apa pun untuk lebar dan tinggi. Generator akan membuat kanvas dengan dimensi persis yang diminta, cocok untuk grid ketat atau banner iklan dengan ukuran tertentu.',
  },
  {
    question: 'Dalam format apa gambar diunduh?',
    answer:
      'Secara bawaan, gambar dihasilkan dalam format WebP untuk kompresi optimal. Namun Anda juga bisa memilih PNG untuk kualitas tanpa kompresi, atau JPEG untuk kompatibilitas yang lebih luas.',
  },
  {
    question: 'Apakah ini diproses di server?',
    answer:
      'Tidak, seluruh proses rendering gambar dilakukan secara instan di memori virtual (Canvas) browser Anda sendiri. Prosesnya langsung terjadi tanpa mengirim data apa pun melalui jaringan.',
  },
];

const howToData = [
  {
    name: 'Tentukan dimensi',
    text: 'Masukkan nilai lebar dan tinggi secara langsung, atau klik salah satu preset (FHD, HD, Instagram, dll.) untuk mengisinya secara otomatis.',
  },
  {
    name: 'Atur warna dan teks',
    text: 'Pilih warna latar belakang dan teks menggunakan pemilih warna bawaan atau dengan mengetik kode heksadesimal. Opsional, tambahkan teks khusus untuk menggantikan label dimensi default.',
  },
  {
    name: 'Pilih tipografi dan format',
    text: 'Tentukan jenis huruf dan ukuran font. Pilih format keluaran (WebP, PNG, atau JPEG) sesuai kebutuhan Anda.',
  },
  {
    name: 'Unduh gambar',
    text: 'Klik tombol Unduh untuk menyimpan gambar placeholder yang telah dibuat langsung ke perangkat Anda.',
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

const ui: PlaceholderGeneratorUI = {
  labelDimensions: 'Dimensi Cepat',
  labelWidth: 'Lebar (px)',
  labelHeight: 'Tinggi (px)',
  labelBgColor: 'Latar Belakang',
  labelTextColor: 'Teks',
  labelCustomText: 'Teks Kustom (Opsional)',
  placeholderCustomText: 'Mis: Banner Hero',
  labelFontFamily: 'Tipografi',
  labelFontSize: 'Ukuran Dasar',
  fontSizeAuto: 'Otomatis',
  labelFormat: 'Format Keluaran',
  btnDownload: 'Unduh Gambar',
};

export const content: ToolLocaleContent<PlaceholderGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi dan Dokumentasi',
  bibliography: [
    {
      name: 'MDN Web Docs: HTMLCanvasElement.toDataURL()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL',
    },
    {
      name: 'MDN Web Docs: CanvasRenderingContext2D',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D',
    },
    {
      name: 'W3C: HTML Canvas 2D Context',
      url: 'https://www.w3.org/TR/2dcontext/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Solusi Terbaik untuk Mockup Web yang Cepat',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pada tahap awal konseptualisasi atau perancangan struktur sebuah situs web (wireframing), kita jarang memiliki konten foto final. Ruang kosong tanpa gambar dapat mendistorsi gambaran keseluruhan produk dan menyembunyikan kesalahan kritis dalam jarak atau proporsi. Generator gambar placeholder menyelesaikan masalah ini seketika, memungkinkan Anda menyisipkan area berwarna dengan dimensi presisi secara langsung.',
    },
    {
      type: 'tip',
      title: 'Desain Tanpa Hambatan',
      html: 'Saat membangun CSS Grid, placeholder dengan ukuran tepat seperti 1200x800 piksel sangatlah penting. Dengan mengunduh blok pengisi, Anda menghindari penambahan CSS ekstra atau skrip pihak ketiga ke dalam kode sementara Anda.',
    },
    {
      type: 'title',
      text: 'Mengapa Menghindari Layanan Eksternal Itu Penting',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Praktik umum di ekosistem frontend adalah menautkan layanan seperti <code>via.placeholder.com</code> langsung ke atribut <code>src</code> dalam HTML. Meskipun terlihat praktis melalui parameter URL, pendekatan ini memiliki efek samping serius yang sebaiknya dihindari oleh developer yang teliti.',
    },
    {
      type: 'paragraph',
      html: 'Menyisipkan domain eksternal di setiap tag gambar pada halaman yang sedang dikembangkan akan meningkatkan permintaan DNS, memperlambat sistem hot-reloading seperti Vite, Gulp, atau Webpack, dan secara tidak sengaja meninggalkan jejak di branch yang akhirnya masuk ke cloud. Dengan menggunakan utilitas ini dan menghasilkan gambar dalam format pilihan Anda (WebP, PNG, atau JPEG), seluruh prototipe tetap berjalan sepenuhnya di mode localhost.',
    },
    {
      type: 'title',
      text: 'Fitur Utama Algoritma Generator',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Resolusi Pixel Perfect:</strong> HTML5 Canvas native memastikan kanvas yang diekspor secara aritmetis sesuai dengan koordinat yang ditentukan pengguna.',
        '<strong>Autoscaling Tipografi:</strong> Dalam mode Otomatis, ukuran font dihitung berdasarkan area perimeter dan jumlah karakter agar teks muat dengan elegan tanpa menimbulkan <em>overflow</em> yang tidak diinginkan.',
        '<strong>Sinkronisasi Heksadesimal:</strong> Kontrol status dua arah antara pemilih warna HTML native dan input teks memastikan kontras warna yang presisi sesuai palet UI/UX dari Figma atau Penpot Anda.',
      ],
    },
    {
      type: 'title',
      text: 'Seni Wireframing Teknis yang Sering Terlupakan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tidak ada proyek monolitik maupun micro frontend yang bisa melewati tahap pondasi begitu saja, terutama saat berhadapan dengan klien yang demanding atau Product Manager dengan visi yang kuat. Kemampuan melakukan iterasi grafis dengan cepat tanpa harus menunggu <em>aset</em> final adalah pembeda antara developer yang lincah dan yang terhambat. Generator ini memanfaatkan API JS modern <code>toDataURL()</code> langsung di mesin lokal Anda untuk menghasilkan output berkualitas industri tanpa pemrosesan perantara yang meragukan.',
    },
  ],
};
