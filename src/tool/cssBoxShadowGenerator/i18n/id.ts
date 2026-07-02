import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssBoxShadowGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'generator-bayangan-css';
const title = 'CSS Box Shadow Generator';
const description = 'Desain bayangan CSS berlapis secara visual dengan pratinjau langsung, slider, pemilih warna, dan preset. Salin CSS native bersih secara instan.';

const howTo = [
  { name: 'Pilih preset atau mulai dari awal', text: 'Pilih dari preset Card, Float, Inset, Glow, atau Layered, atau sesuaikan bayangan default dengan slider.' },
  { name: 'Tambahkan dan tumpuk lapisan', text: 'Klik + untuk menambah lapisan (hingga 5). Pilih setiap lapisan untuk mengedit offset, blur, spread, warna, dan opasitas.' },
  { name: 'Aktifkan inset dan ubah latar', text: 'Centang inset untuk bayangan dalam. Ubah warna latar pratinjau.' },
  { name: 'Salin CSS', text: 'Saat pratinjau sesuai dengan desain Anda, salin CSS yang dihasilkan dan tempel ke stylesheet Anda.' },
];

const faq = [
  { question: 'Bisakah saya menggunakan beberapa bayangan pada satu elemen?', answer: 'Ya. CSS mengizinkan nilai box-shadow yang dipisahkan koma. Alat ini memungkinkan Anda menumpuk hingga 5 lapisan dengan kontrol independen.' },
  { question: 'Apa yang dilakukan nilai spread negatif?', answer: 'Spread negatif mengecilkan bayangan ke dalam sebelum diburamkan. Berguna untuk efek mengambang yang halus.' },
  { question: 'Untuk apa opsi inset?', answer: 'Bayangan inset dirender di dalam batas elemen, menciptakan tampilan cekung. Ideal untuk input formulir dan kartu yang ditekan.' },
  { question: 'Apakah CSS yang dihasilkan memiliki ketergantungan framework?', answer: 'Tidak. Hasilnya adalah CSS native murni. Gunakan di proyek apa pun dengan CSS standar.' },
];

const ui: CssBoxShadowGeneratorUI = {
  offsetXLabel: 'Offset X',
  offsetYLabel: 'Offset Y',
  blurLabel: 'Blur',
  spreadLabel: 'Sebaran',
  opacityLabel: 'Opasitas',
  insetLabel: 'Dalam',
  addLayer: 'Tambah lapisan',
  removeLayer: 'Hapus lapisan',
  resetAll: 'Reset',
  codeTitle: 'CSS Dihasilkan',
  copyCode: 'Salin CSS',
  copied: 'Tersalin!',
  previewLabel: 'Pratinjau',
  presetCard: 'Card',
  presetFloat: 'Float',
  presetInset: 'Inset',
  presetGlow: 'Glow',
  presetLayered: 'Lapisan',
  presetsLabel: 'Preset',
  layerPrefix: 'Lapisan',
  bgColorLabel: 'Latar',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<CssBoxShadowGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'FAQ Generator Bayangan CSS',
  faq,
  bibliographyTitle: 'Referensi Box Shadow CSS',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Desain bayangan CSS secara visual daripada menebak nilai', level: 2 },
    { type: 'paragraph', html: 'Menyesuaikan <strong>box-shadow</strong> secara manual itu membosankan. Generator visual ini memungkinkan Anda menumpuk beberapa bayangan, melihatnya langsung, dan menyalin CSS siap produksi.' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: 'Lapisan bayangan per elemen', icon: 'mdi:layers' }, { value: 'Live', label: 'Pratinjau setiap perubahan', icon: 'mdi:eye' }, { value: '5', label: 'Preset cepat', icon: 'mdi:star' }] },
    { type: 'title', text: 'Tumpuk beberapa bayangan untuk kedalaman realistis', level: 3 },
    { type: 'paragraph', html: 'Bayangan nyata jarang berupa blur seragam. Menumpuk bayangan ketat dekat elemen dengan yang lebih lembut dan lebar menciptakan kedalaman alami. Gunakan <strong>+</strong> untuk menambah lapisan.' },
    { type: 'table', headers: ['Kontrol', 'Nilai CSS', 'Efek'], rows: [['Offset X', 'Panjang ke-1', 'Pergeseran horizontal.'], ['Offset Y', 'Panjang ke-2', 'Pergeseran vertikal.'], ['Blur', 'Panjang ke-3', 'Radius blur.'], ['Sebaran', 'Panjang ke-4', 'Memperbesar atau mengecilkan bayangan.'], ['Warna & Opasitas', 'rgba()', 'Warna bayangan dengan opasitas independen.'], ['Dalam', 'inset', 'Bayangan di dalam batas elemen.']] },
    { type: 'summary', title: 'Alur kerja yang direkomendasikan', items: ['Mulai dengan preset.', 'Tambahkan lapisan untuk kedalaman realistis.', 'Gunakan spread negatif untuk efek kartu mengambang.', 'Salin CSS yang dihasilkan dan tempel.'] },
  ],
};
