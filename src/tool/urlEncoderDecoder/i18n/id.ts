import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlEncoderDecoderUI } from '../ui';

const slug = 'pengode-pendekode-url';
const title = 'Pengode dan Pendekode URL Online';
const description =
  'Konversikan karakter khusus dari tautan apa pun ke dalam format aman (Percent-Encoding) atau kembalikan ke keadaan aslinya yang dapat dibaca secara instan dan lokal.';

const faqData = [
  {
    question: 'Karakter mana saja yang dikodekan dalam URL?',
    answer:
      'Semua karakter yang tidak diperbolehkan dalam standar ASCII untuk URL dikodekan: spasi, huruf beraksen, simbol seperti &, =, +, #, ?, / dan lainnya. Sebagai contoh, spasi menjadi %20 dan ñ menjadi %C3%B1.',
  },
  {
    question: 'Apa perbedaan antara encodeURI dan encodeURIComponent?',
    answer:
      'encodeURI mengodekan URL lengkap dan membiarkan karakter khusus seperti / dan ? tetap utuh. encodeURIComponent mengodekan semua karakter khusus termasuk karakter yang dicadangkan, menjadikannya ideal untuk mengodekan nilai parameter kueri individual.',
  },
  {
    question: 'Mengapa URL saya memiliki %20 alih-alih spasi?',
    answer:
      'Protokol HTTP tidak mengizinkan spasi dalam URL. %20 adalah representasi Percent-Encoding dari spasi menurut standar ASCII. Beberapa sistem menggunakan tanda + sebagai alternatif, tetapi %20 adalah yang paling universal dan aman.',
  },
  {
    question: 'Apakah aman menggunakan alat ini dengan URL pribadi?',
    answer:
      'Ya, sepenuhnya aman. Semua pemrosesan terjadi di browser Anda menggunakan JavaScript asli (encodeURIComponent/decodeURIComponent). Tidak ada URL atau parameter Anda yang dikirim ke server eksternal mana pun.',
  },
];

const howToData = [
  {
    name: 'Tempel teks mentah',
    text: 'Ketik atau tempelkan URL atau string teks Anda ke bidang atas "Teks Mentah (Dapat Dibaca)".',
  },
  {
    name: 'Kodekan atau dekodekan',
    text: 'Klik "Kodekan URL" untuk mengonversi teks ke format Percent-Encoding yang aman, atau "Dekodekan" untuk mengembalikan URL yang dikodekan ke bentuk yang dapat dibaca.',
  },
  {
    name: 'Salin hasilnya',
    text: 'Gunakan tombol "Salin" pada bidang yang sesuai untuk mengambil hasilnya ke papan klip Anda.',
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

const ui: UrlEncoderDecoderUI = {
  labelRaw: 'Teks Mentah (Dapat Dibaca)',
  labelEncoded: 'URL Berformat (Dikodekan)',
  btnClear: 'Bersihkan',
  btnCopy: 'Salin',
  btnCopied: 'Tersalin!',
  btnEncode: 'Kodekan URL',
  btnDecode: 'Dekodekan',
  placeholderRaw: 'https://example.com/search?q=sepatu merah&size=38',
  placeholderEncoded: 'https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dsepatu%20merah%26size%3D38',
};

export const content: ToolLocaleContent<UrlEncoderDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi dan Dokumentasi',
  bibliography: [
    {
      name: 'MDN Web Docs: encodeURIComponent()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent',
    },
    {
      name: 'IETF RFC 3986: URI Generic Syntax',
      url: 'https://datatracker.ietf.org/doc/html/rfc3986',
    },
    {
      name: 'W3C: URL Living Standard',
      url: 'https://url.spec.whatwg.org/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Apa itu Pengodean URL?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Saat menjelajahi internet atau mengirim permintaan ke server, umum bagi kita untuk menganggap URL (Uniform Resource Locator) hanya sebagai "alamat web". Namun, protokol internet menentukan bahwa URL hanya dapat dikirimkan menggunakan set karakter <strong>ASCII standar</strong> yang sangat terbatas.',
    },
    {
      type: 'paragraph',
      html: 'Apa yang terjadi jika URL mengandung spasi, huruf beraksen, atau parameter khusus seperti tanda tambah (<code>+</code>) atau sama dengan (<code>=</code>)? Untuk mencegah sistem mengalami kegagalan saat mencoba membaca karakter ilegal, karakter tersebut harus diterjemahkan ke dalam bentuk aman yang kompatibel menggunakan <strong>Percent-Encoding</strong>.',
    },
    {
      type: 'title',
      text: 'Cara Kerja Percent-Encoding',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Saat Anda menggunakan alat ini, algoritma akan mengambil karakter apa pun yang "tidak aman" (seperti spasi atau huruf beraksen seperti ñ) dan menggantinya dengan tanda persen <code>%</code> diikuti oleh dua digit heksadesimal yang sesuai dengan nilainya dalam standar UTF-8.',
    },
    {
      type: 'list',
      items: [
        '<strong>Contoh Dasar:</strong> Spasi sederhana akan digantikan oleh padanan amannya: <code>%20</code>.',
        '<strong>Dukungan Lanjutan:</strong> Huruf <code>á</code> menjadi <code>%C3%A1</code>, dan <code>ñ</code> menjadi <code>%C3%B1</code>.',
      ],
    },
    {
      type: 'title',
      text: 'Pentingnya dalam API dan Permintaan GET',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Saat mengembangkan integrasi, kesalahan umum yang sering terjadi adalah memasukkan string mentah ke dalam parameter URL. Jika Anda memasukkan <code>kaos&biru</code> secara mentah ke dalam backend Anda (<code>/search?q=kaos&biru</code>), server akan menafsirkan <code>biru</code> sebagai parameter baru, sehingga merusak semua logika.',
    },
    {
      type: 'paragraph',
      html: 'Alat ini menjamin perhitungan otomatis yang bersih dengan eksekusi 100% di browser lokal Anda. Tidak ada string URL Anda yang dikirimkan ke server pihak ketiga, sehingga menjamin privasi token dan parameter analitik Anda.',
    },
  ],
};

