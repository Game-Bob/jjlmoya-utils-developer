import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeycodeUI } from '../ui';

const slug = 'keycode-id';
const title = 'Visualizer Kode Tombol Keyboard Online. KeyCode Inspector';
const description =
  'Alat online gratis untuk melihat event.key, event.code, event.which, dan lokasi setiap tombol keyboard secara real time. Menghasilkan cuplikan kode JavaScript siap pakai.';

const faqData = [
  {
    question: 'Apa perbedaan antara event.key dan event.code?',
    answer:
      'event.code mewakili tombol fisik pada keyboard, terlepas dari bahasa yang dikonfigurasi. event.key mewakili karakter yang dihasilkan, yang dapat berubah jika Anda menekan Shift atau menggunakan bahasa lain. Gunakan code untuk kontrol game; gunakan key untuk input teks dan pintasan keyboard semantik.',
  },
  {
    question: 'Apa itu event.which dan mengapa dianggap usang?',
    answer:
      'event.which adalah properti lama yang mengembalikan kode ASCII numerik untuk tombol yang ditekan. Properti ini ditandai sebagai usang (deprecated) dalam standar modern karena event.key dan event.code menggantikannya dengan informasi yang lebih tepat dan mudah dibaca. Properti ini ditampilkan dalam alat ini untuk keperluan edukasi.',
  },
  {
    question: 'Apa arti properti location?',
    answer:
      'Properti location menunjukkan di mana tombol berada secara fisik pada keyboard: Standard (posisi normal), Left (tombol modifier kiri), Right (tombol modifier kanan), atau Numpad (papan angka). Properti ini berguna untuk membedakan tombol CTRL kiri dan kanan, misalnya.',
  },
  {
    question: 'Apakah berfungsi dengan keyboard internasional dan tata letak non-QWERTY?',
    answer:
      'Ya. Alat ini menampilkan tepat apa yang dilaporkan browser untuk konfigurasi keyboard Anda. event.code selalu mengembalikan nama QWERTY dari posisi fisik, sedangkan event.key menampilkan karakter aktual sesuai bahasa Anda.',
  },
];

const howToData = [
  {
    name: 'Tekan sembarang tombol',
    text: 'Saat halaman mendapat fokus, tekan sembarang tombol pada keyboard untuk langsung melihat semua informasi event.',
  },
  {
    name: 'Salin nilai individual',
    text: 'Klik tombol salin di sebelah setiap properti (event.key, event.code, dll.) untuk menyalin nilai tersebut ke clipboard.',
  },
  {
    name: 'Gunakan cuplikan kode',
    text: 'Di bagian "Cuplikan Cepat" Anda akan menemukan blok kode JavaScript yang siap ditempel langsung ke proyek Anda.',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'id',
};

const ui: KeycodeUI = {
  promptTitle: 'Tekan sebuah tombol',
  promptSubtitle: 'Tombol apa saja pada keyboard Anda untuk melihat kodenya',
  snippetsTitle: 'Cuplikan Cepat',
  btnCopy: 'Salin',
  locationStandard: 'Standard',
  locationLeft: 'Kiri',
  locationRight: 'Kanan',
  locationNumpad: 'Numpad',
};

export const content: ToolLocaleContent<KeycodeUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi dan Standar',
  bibliography: [
    {
      name: 'MDN Web Docs – KeyboardEvent',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent',
    },
    {
      name: 'UI Events Specification (W3C) – KeyboardEvent',
      url: 'https://www.w3.org/TR/uievents/#events-keyboardevents',
    },
    {
      name: 'MDN – KeyboardEvent.code values',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Memahami event keyboard di JavaScript',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Saat pengguna menekan tombol, browser memicu tiga event: <code>keydown</code>, <code>keypress</code>, dan <code>keyup</code>. Masing-masing mengekspos properti dengan informasi tentang tombol yang ditekan, tetapi tidak semuanya setara atau direkomendasikan.',
    },
    {
      type: 'title',
      text: 'Properti event tombol keyboard',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'event.code — Tombol fisik',
      html: '<p>Mengembalikan pengenal <strong>posisi fisik</strong> tombol pada keyboard, menggunakan nomenklatur QWERTY. Misalnya, tombol "A" pada keyboard AZERTY mengembalikan <code>KeyQ</code>. Ideal untuk kontrol game di mana posisi yang penting, bukan karakter.</p>',
    },
    {
      type: 'card',
      title: 'event.key — Karakter yang dihasilkan',
      html: '<p>Mengembalikan <strong>nilai karakter</strong> yang dihasilkan berdasarkan bahasa dan modifier aktif. Menekan Shift+A mengembalikan <code>"A"</code>; tanpa Shift mengembalikan <code>"a"</code>. Untuk tombol khusus, mengembalikan nama seperti <code>"Enter"</code>, <code>"Escape"</code>, <code>"ArrowUp"</code>.</p>',
    },
    {
      type: 'title',
      text: 'Kapan menggunakan setiap properti',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Gunakan <code>event.code</code> untuk kontrol game (WASD terlepas dari bahasa) dan <code>event.key</code> untuk mendeteksi karakter tertentu atau pintasan keyboard semantik seperti <code>Ctrl+C</code>.',
    },
    {
      type: 'paragraph',
      html: 'Properti <code>event.which</code> dan <code>event.keyCode</code> secara resmi telah <strong>usang</strong> menurut standar W3C. Meskipun browser modern masih mendukungnya untuk kompatibilitas, keduanya sebaiknya tidak digunakan pada kode baru.',
    },
  ],
};

