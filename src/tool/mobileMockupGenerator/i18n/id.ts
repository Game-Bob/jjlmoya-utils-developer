import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileMockupGeneratorUI } from '../ui';

const slug = 'generator-mockup-mobile';
const title = 'Generator Mockup Mobile untuk App Store. iPhone dan Google Pixel';
const description = 'Buat presentasi profesional untuk App Store dan Google Play. Mockup iPhone dan Pixel dengan latar belakang khusus, tata letak panoramik, dan ekspor massal resolusi tinggi.';

const faqData = [
  { question: 'Apakah screenshot ini valid untuk App Store dan Google Play?', answer: 'Ya, gambar yang dihasilkan memenuhi persyaratan proporsi dan kualitas toko aplikasi. Cukup pilih perangkat yang tepat (iPhone untuk iOS, Pixel untuk Android) sebelum mengekspor.' },
  { question: 'Bisakah saya menggunakan latar belakang kustom sendiri?', answer: 'Tentu saja. Selain perpustakaan gradien premium kami, Anda dapat mengunggah gambar apa pun dari komputer Anda sebagai latar belakang mockup.' },
  { question: 'Apakah gratis untuk penggunaan komersial?', answer: 'Ya, Anda dapat menggunakan mockup yang dihasilkan untuk proyek komersial, portofolio, atau presentasi tanpa biaya dan tanpa watermark.' },
  { question: 'Apakah screenshot saya disimpan di server?', answer: 'Tidak. Generator bekerja 100% secara lokal di browser Anda. Gambar pribadi Anda tidak pernah meninggalkan komputer Anda.' },
];

const howToData = [
  { name: 'Unggah screenshot', text: 'Seret atau pilih screenshot aplikasi mobile yang ingin Anda tampilkan.' },
  { name: 'Pilih perangkat', text: 'Pilih model smartphone (iPhone 15 Pro Max atau Google Pixel 8) sesuai toko tujuan.' },
  { name: 'Sesuaikan lingkungan', text: 'Atur latar belakang, sudut perangkat, tambahkan teks pemasaran, dan pilih tata letak komposisi.' },
  { name: 'Unduh dalam HD', text: 'Ekspor semua hasil dalam format WebP resolusi tinggi siap diunggah ke toko aplikasi.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'DesignApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'id',
};

const ui: MobileMockupGeneratorUI = {
  labelUpload: 'Unggah Screenshot',
  dropHint: 'Seret gambar Anda ke sini',
  dropFormats: 'PNG, JPG atau WEBP',
  btnMassReplace: 'Ganti Massal (Batch)',
  massReplaceHint: 'Mengganti gambar saat ini sambil mempertahankan preset dan teks Anda. Ideal untuk iterasi cepat.',
  labelSettings: 'Pengaturan Global',
  labelDevice: 'Perangkat',
  labelFont: 'Tipografi',
  labelBackground: 'Latar Belakang',
  titleSwapColors: 'Tukar warna',
  labelAngle: 'Sudut',
  labelSafeArea: 'Safe Area (Atas/Bawah)',
  labelSafeAreaColor: 'Warna area',
  emptyTitle: 'Belum ada gambar',
  emptySubtitle: 'Unggah screenshot Anda untuk mulai mendesain',
  btnClearAll: 'Bersihkan Kanvas',
  btnExport: 'Ekspor Semua (.zip)',
  cardTitleDuplicate: 'Duplikasi Adegan',
  cardTitleReplace: 'Ganti Screenshot Saat Ini',
  cardSectionLayouts: 'Tata Letak Master',
  cardSectionBranding: 'Branding & Teks',
  cardTitleResetText: 'Reset Teks',
  cardLabelColor: 'Warna',
  cardTextPlaceholder: 'Tulis teks Anda di sini...',
  cardSectionDevice: 'Tata Letak Perangkat',
  cardTitleResetDevice: 'Reset Posisi',
  cardSectionScene: 'Properti & Latar Belakang',
  cardBtnSpecialBg: 'Latar Belakang Khusus',
  cardBtnDeleteScene: 'Hapus Adegan',
  cardRangeLabelSize: 'Ukuran',
  cardRangeLabelX: 'Sumbu X',
  cardRangeLabelY: 'Sumbu Y',
  cardRangeLabelRotation: 'Rotasi',
  cardRangeLabelScale: 'Skala',
  presetClassic: 'Klasik',
  presetMobileBottom: 'Mobile Bawah',
  presetMobileTop: 'Mobile Atas',
  presetFocus: 'Fokus',
  presetDynamic: 'Dinamis',
  presetSplitLeft: 'Bagi Kiri',
  presetSplitRight: 'Bagi Kanan',
  presetImageLeft: 'Gambar Kiri',
  presetImageRight: 'Gambar Kanan',
  confirmClear: 'Apakah Anda yakin ingin menghapus semua mockup?',
  processingExport: 'Memproses...',
  exportDone: 'Selesai!',
};

export const content: ToolLocaleContent<MobileMockupGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi',
  bibliography: [
    { name: 'Apple App Store Screenshot Requirements', url: 'https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications' },
    { name: 'Google Play Screenshot Requirements', url: 'https://support.google.com/googleplay/android-developer/answer/9866151' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Tingkatkan screenshot Anda ke level berikutnya', level: 2 },
    { type: 'paragraph', html: 'Jangan batasi diri Anda hanya pada screenshot biasa. Alat mockup kami memungkinkan developer dan desainer membuat aset visual berdampak tinggi tanpa memerlukan Photoshop atau Figma.' },
    { type: 'title', text: 'Kekuatan dengan Tata Letak Master', level: 3 },
    { type: 'grid', columns: 2 },
    { type: 'card', title: 'App Store & Google Play', html: '<p>Optimalkan tingkat konversi Anda. Mockup iPhone 15 Pro Max dan Pixel 8 adalah standar dunia untuk daftar toko aplikasi.</p>' },
    { type: 'card', title: 'Pitch Deck & Pemasaran', html: '<p>Presentasikan ide Anda dengan percaya diri. Sempurna untuk presentasi investor, kampanye media sosial, dan portofolio desain UI/UX profesional.</p>' },
    { type: 'title', text: 'Alur kerja profesional', level: 3 },
    { type: 'tip', html: 'Gunakan preset "Bagi Kiri" dan "Bagi Kanan" untuk membuat mockup berkesinambungan yang meluncur dari satu gambar ke gambar lain dalam carousel Instagram atau screenshot App Store.' },
  ],
};
