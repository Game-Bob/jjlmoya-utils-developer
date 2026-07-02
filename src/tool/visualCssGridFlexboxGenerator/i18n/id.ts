import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VisualCssGridFlexboxGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'generator-visual-css-grid-flexbox';
const title = 'Generator Visual Layout CSS Grid & Flexbox';
const description = 'Rancang layout responsif dengan memindahkan blok visual, mengubah ukuran kontainer, menyesuaikan perataan, dan menggunakan preset  -  lalu salin CSS native bersih secara instan.';

const howTo = [
  { name: 'Pilih preset atau Flexbox / Grid', text: 'Mulai dengan preset layout (navbar, cards, hero, sidebar, gallery) atau beralih antara Flexbox dan Grid secara manual.' },
  { name: 'Ubah ukuran layout', text: 'Ubah ukuran kontainer dari sudut bawah untuk menguji bagaimana desain bereaksi terhadap ruang yang tersedia.' },
  { name: 'Sesuaikan kontrol perataan', text: 'Gunakan slider dan dropdown untuk arah, wrap, jarak, kolom, justify-content, align-items, align-content, lebar, tinggi, dan ukuran item.' },
  { name: 'Salin CSS siap produksi', text: 'Salin CSS yang dihasilkan saat hasil visual sesuai dengan struktur yang diinginkan. Tanpa ketergantungan framework.' },
];

const faq = [
  { question: 'Kapan menggunakan Flexbox daripada CSS Grid?', answer: 'Gunakan Flexbox untuk layout satu dimensi  -  bilah navigasi, grup tombol, kartu yang membungkus, konten terpusat. Grid saat baris dan kolom sama-sama penting  -  dashboard, galeri, formulir, bagian halaman terstruktur.' },
  { question: 'Bisakah generator ini membuat layout responsif?', answer: 'Ya. CSS yang dihasilkan menggunakan flex wrapping native atau kolom berulang grid. Ubah ukuran kanvas visual untuk menguji jarak dan perataan pada berbagai ukuran.' },
  { question: 'Mengapa justify-content dan align-items terasa berbeda di grid dan flex?', answer: 'Flexbox mendistribusikan item di sepanjang sumbu utama dan sumbu silang. Grid menempatkan item di track terlebih dahulu, lalu meratakan konten di dalamnya. Beralih antara kedua mode membuat perbedaan itu langsung terlihat.' },
  { question: 'Apakah CSS yang dihasilkan terikat pada framework?', answer: 'Tidak. Hasilnya adalah CSS native murni. Gunakan di HTML biasa, Astro, React, Vue, Svelte, Web Components, atau proyek apa pun yang menerima CSS standar.' },
  { question: 'Untuk apa preset layout?', answer: 'Preset mempercepat layout umum sehingga Anda melihat konfigurasi realistis tanpa mulai dari nol. Setiap preset mengatur mode, arah, wrap, perataan, dan ukuran kontainer untuk pola dunia nyata.' },
];

const ui: VisualCssGridFlexboxGeneratorUI = {
  modeLabel: 'Mode layout',
  flexMode: 'Flexbox',
  gridMode: 'Grid',
  canvasLabel: 'Kanvas layout interaktif',
  addItem: 'Tambah item',
  removeItem: 'Hapus item',
  resetLayout: 'Reset layout',
  gapLabel: 'Jarak',
  columnsLabel: 'Kolom grid',
  widthLabel: 'Lebar kontainer',
  heightLabel: 'Tinggi kontainer',
  justifyLabel: 'Ratakan',
  alignLabel: 'Ratakan',
  itemSizeLabel: 'Ukuran item',
  codeTitle: 'CSS Dihasilkan',
  copyCode: 'Salin CSS',
  copied: 'Tersalin!',
  dragHint: 'Ubah ukuran kanvas dari sudut  -  CSS diperbarui langsung!',
  outputLabel: 'Output CSS yang dihasilkan',
  justifyStart: 'Awal',
  justifyCenter: 'Tengah',
  justifyEnd: 'Akhir',
  justifyBetween: 'Space between',
  justifyAround: 'Space around',
  justifyEvenly: 'Space evenly',
  alignStart: 'Awal',
  alignCenter: 'Tengah',
  alignEnd: 'Akhir',
  alignStretch: 'Rentang',
  alignBaseline: 'Garis dasar',
  itemPrefix: 'Blok',
  directionLabel: 'Arah',
  directionRow: 'Baris →',
  directionRowReverse: '← Baris blk',
  directionColumn: 'Kolom ↓',
  directionColumnReverse: '↑ Kol blk',
  wrapLabel: 'Bungkus',
  wrapNoWrap: 'Tanpa bungkus',
  wrapWrap: 'Bungkus',
  wrapWrapReverse: 'Bungkus blk',
  alignContentLabel: 'Ratakan konten',
  alignContentStart: 'Awal',
  alignContentCenter: 'Tengah',
  alignContentEnd: 'Akhir',
  alignContentBetween: 'Space between',
  alignContentAround: 'Space around',
  alignContentEvenly: 'Space evenly',
  alignContentStretch: 'Rentang',
  presetsLabel: 'Preset',
  presetNavbar: 'Navbar',
  presetCards: 'Kartu',
  presetHero: 'Hero',
  presetSidebar: 'Sidebar',
  presetGallery: 'Galeri',
  shakeLimit: 'Butuh minimal 2 item!',
  spanHint: 'Klik dua kali item untuk mengubah rentang kolom (1-3) dalam mode Grid',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<VisualCssGridFlexboxGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'FAQ generator layout CSS',
  faq,
  bibliographyTitle: 'Referensi CSS Grid dan Flexbox',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Bangun layout CSS dengan melihat perilaku, bukan menghafal properti', level: 2 },
    { type: 'paragraph', html: 'CSS Grid dan Flexbox kuat karena mendeskripsikan hubungan layout alih-alih koordinat tetap. Yang sulit adalah memprediksi bagaimana <strong>gap</strong>, <strong>justify-content</strong>, <strong>align-items</strong>, arah, pembungkusan, track, dan ruang yang tersedia berinteraksi. Generator ini mengubah properti abstrak menjadi taman bermain langsung dengan preset dan CSS real-time.' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: 'Preset layout cepat', icon: 'mdi:view-grid-plus' }, { value: 'Langsung', label: 'CSS diperbarui setiap perubahan', icon: 'mdi:code-braces' }, { value: '0', label: 'Ketergantungan framework di CSS', icon: 'mdi:language-css3' }] },
    { type: 'title', text: 'Flexbox vs Grid: pilih model sebelum menyempurnakan perataan', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: 'Flexbox', description: 'Terbaik untuk aliran satu dimensi di mana item berbaris dalam baris atau kolom dan membungkus secara alami.', icon: 'mdi:format-align-justify', highlight: true, points: ['Bilah navigasi', 'Grup tombol', 'Kartu membungkus', 'Konten terpusat'] }, { title: 'CSS Grid', description: 'Terbaik untuk struktur dua dimensi di mana baris dan kolom menentukan bentuk komposisi.', icon: 'mdi:grid', points: ['Dashboard', 'Galeri', 'Formulir', 'Bagian editorial'] }] },
    { type: 'title', text: 'Apa yang diajarkan setiap kontrol', level: 3 },
    { type: 'table', headers: ['Kontrol', 'Properti CSS', 'Yang perlu diperhatikan'], rows: [['Arah', '<code>flex-direction</code>', 'Bagaimana sumbu utama mengalir  -  beralih dari baris ke kolom mengubah seluruh logika layout.'], ['Bungkus', '<code>flex-wrap</code>', 'Apakah item tetap di satu baris atau mengalir ke baris baru saat ruang habis.'], ['Jarak', '<code>gap</code>', 'Ruang antara item tanpa margin yang rusak di tepi.'], ['Ratakan', '<code>justify-content</code>', 'Bagaimana ruang kosong didistribusikan di sepanjang sumbu utama.'], ['Ratakan', '<code>align-items</code>', 'Bagaimana item duduk di sumbu silang.'], ['Ratakan konten', '<code>align-content</code>', 'Bagaimana baris flex yang terbungkus atau baris grid mendistribusikan ruang sumbu silang tambahan.'], ['Kolom', '<code>grid-template-columns</code>', 'Berapa banyak track sama yang dibuat grid sebelum item pindah ke baris lain.'], ['Ukuran kontainer', '<code>width</code> dan <code>min-height</code>', 'Bagaimana CSS yang sama bereaksi saat ruang yang tersedia berubah.']] },
    { type: 'tip', title: 'Skalakan dulu, optimalkan kemudian', html: 'Mulailah dengan menskalakan kanvas ke ukuran realistis. Kemudian sesuaikan jarak dan perataan. Dengan begitu CSS yang dihasilkan berfungsi dalam kondisi nyata.' },
    { type: 'title', text: 'CSS bersih yang dapat Anda adaptasi', level: 3 },
    { type: 'code', ariaLabel: 'Contoh CSS yang dihasilkan', code: '.layout-playground {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 24px;\n  justify-content: center;\n  align-items: center;\n}' },
    { type: 'diagnostic', variant: 'info', title: 'Mengapa penskalaan visual penting', html: 'Banyak bug layout hanya muncul saat kontainer lebih sempit, lebih tinggi, atau diisi dengan jumlah item berbeda. Menskalakan saat CSS diperbarui langsung membantu menemukan pembungkusan yang canggung dan pilihan perataan yang rapuh.' },
    { type: 'summary', title: 'Alur kerja yang direkomendasikan', items: ['Pilih preset atau Flexbox untuk aliran satu dimensi dan Grid untuk struktur dua dimensi.', 'Skalakan kanvas sebelum menyalin CSS agar layout bertahan dalam batasan realistis.', 'Gunakan gap untuk jarak antar item alih-alih menambahkan margin ke setiap anak.', 'Salin CSS yang dihasilkan sebagai titik awal, lalu tambahkan selector spesifik proyek dan media queries.'] },
  ],
};
