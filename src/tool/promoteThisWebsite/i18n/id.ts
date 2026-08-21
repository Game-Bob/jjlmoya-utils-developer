import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromoteThisWebsiteUI } from '../ui';
import { bibliography } from '../bibliography';

const localized = {
    slug: 'promosikan-situs-ini',
    title: 'Promosikan situs ini',
    description: 'Meja propaganda internal untuk jjlmoya.es dalam bahasa Spanyol dan GameBob.dev secara internasional. Ubah tangkapan layar halaman sendiri menjadi gambar sosial sebelum Bob menganggap feed ini memalukan.',
    faqTitle: 'Promosikan situs ini tanpa membuat kucing marah',
    bibliographyTitle: 'Halaman dalam operasi',
    faq: [
      { question: 'Sebenarnya alat ini untuk siapa?', answer: 'Untuk mempromosikan halaman jjlmoya.es dalam bahasa Spanyol dan GameBob.dev secara internasional. Yang lain boleh melihat dari jendela.' },
      { question: 'Bisakah saya menempelkan tangkapan layar?', answer: 'Bisa. Salin tangkapan layar lalu tekan Ctrl+V. Tangkapan itu menjadi lapisan alat karena dewan kucing menerima bukti dalam format yang benar.' },
      { question: 'Apa yang terjadi saat URL produksi ditempel?', answer: 'Alat membaca judul meta, memilih merek yang sesuai, lalu memuat gambar Open Graph. Slug akhirnya tidak mendapat promosi.' },
      { question: 'Mengapa ada dua merek?', answer: 'jjlmoya.es adalah halaman Spanyol dan GameBob.dev adalah halaman internasional. Kucing sama sekali tidak peduli.' },
      { question: 'Apakah gambar saya diunggah?', answer: 'Tidak. Gambar tetap di browser dan komposisi dirender secara lokal. Hanya PNG yang sengaja Anda unduh yang keluar.' },
    ],
    howTo: [
      { name: 'Tempel tangkapan layar', text: 'Tempel tangkapan dari jjlmoya.es atau GameBob.dev dengan Ctrl+V. Dewan meminta bukti dari kerajaannya sendiri.' },
      { name: 'Pilih merek', text: 'Pilih jjlmoya.es untuk bahasa Spanyol atau GameBob.dev untuk halaman internasional. Kucing sudah memiliki tempatnya.' },
      { name: 'Susun gambar', text: 'Seret tangkapan, judul, logo, latar belakang, dan maskot sampai komposisinya terlihat sengaja dibuat.' },
      { name: 'Ekspor PNG', text: 'Unduh PNG dengan ukuran pilihan sebelum Bob mengambil semua pujian.' },
    ],
    seoTitle: 'Meja propaganda resmi untuk jjlmoya dan GameBob',
    seoIntro: 'Ini bukan komposer media sosial generik untuk orang yang baru menemukan kata branding. Alat ini dibuat untuk mempromosikan halaman kami di jjlmoya.es dan GameBob.dev sementara kucing mengawasi.',
    seoBody: 'Tempel tangkapan layar nyata atau muat URL produksi. Alat membaca judul halaman, bukan menebak dari slug, lalu mempertahankan gambar Open Graph tetap terlihat saat lapisan lain ditata.',
    seoTip: 'Mulai dengan URL dari jjlmoya.es atau GameBob.dev. Jika judul, merek, atau gambar gagal dimuat, dewan akan menyalahkan jaringan, manusia, lalu kucing.',
};
const ui: PromoteThisWebsiteUI = {
    urlLabel: 'URL situs', urlPlaceholder: 'https://www.example.com/tools/contoh/', applyUrl: 'Terapkan',
    formatLabel: 'Format', panoramic: 'Panorama · 1536 × 1024', instagram: 'Instagram · 1080 × 1350', square: 'Persegi · 1080 × 1080', story: 'Story · 1080 × 1920',
    titleLabel: 'Judul', titlePlaceholder: 'Judul singkat untuk gambar', titleSizeLabel: 'Ukuran font judul', titleBoxSizeLabel: 'Ukuran kotak judul', titleStyleLabel: 'Gaya judul',
    brandLabel: 'Merek', brandStyleLabel: 'Gaya merek', advancedLabel: 'Komposisi lanjutan', assetsLabel: 'Aset', backgroundLabel: 'Latar belakang', toolLabel: 'Tangkapan layar alat', logoLabel: 'Logo', mascotLabel: 'Maskot',
    layersLabel: 'Lapisan', backgroundLayer: 'Latar belakang', toolLayer: 'Alat', logoLayer: 'Logo', mascotLayer: 'Maskot', titleLayer: 'Judul', reset: 'Atur ulang', download: 'Unduh PNG', activeLayer: 'Lapisan aktif',
    canvasHint: 'Seret lapisan langsung di kanvas. Tempel tangkapan layar dengan Ctrl+V.', pasted: 'Tangkapan layar ditempel sebagai lapisan alat.', urlApplied: 'URL diterapkan. Sesuaikan judul dan tambahkan tangkapan yang ingin dipromosikan.', urlLoading: 'Membaca judul halaman dan gambar resminya...', urlFailed: 'Halaman itu tidak dapat dibaca. Periksa URL atau tambahkan aset secara manual.', fileLoaded: 'Aset dimuat.',
    titlePaper: 'Kertas editorial', titleRibbon: 'Pita terlipat', titleInk: 'Percikan tinta', titlePoster: 'Poster malam', titleTicket: 'Tiket sobek', titleMarker: 'Garis bawah material', titleSplit: 'Blok terbelah', titleCapsule: 'Kapsul minimal', titleCorner: 'Sudut editorial', titleVertical: 'Aksen vertikal',
    brandPlain: 'Merek sederhana', brandPlaque: 'Plakat keramik', brandTicket: 'Tiket masuk', brandStamp: 'Stempel karet', brandNeon: 'Papan neon', brandRibbon: 'Pita sinyal', brandCorner: 'Sudut editorial', brandPixel: 'Blok piksel', brandHalo: 'Halo lembut', brandEditorial: 'Garis editorial', defaultTool: 'Tempel tangkapan alatmu',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: localized.faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};
const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: localized.title,
  description: localized.description,
  step: localized.howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};
const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: localized.title,
  description: localized.description,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<PromoteThisWebsiteUI> = {
  slug: localized.slug,
  title: localized.title,
  description: localized.description,
  ui,
  faqTitle: localized.faqTitle,
  faq: localized.faq,
  bibliographyTitle: localized.bibliographyTitle,
  bibliography,
  howTo: localized.howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: localized.seoTitle, level: 2 },
    { type: 'paragraph', html: localized.seoIntro },
    { type: 'stats', columns: 3, items: [{ value: '2', label: ui.brandLabel, icon: 'mdi:domain' }, { value: '4', label: ui.formatLabel, icon: 'mdi:crop' }, { value: '0', label: ui.activeLayer, icon: 'mdi:cat' }] },
    { type: 'title', text: localized.title, level: 3 },
    { type: 'paragraph', html: localized.seoBody },
    { type: 'title', text: localized.faqTitle, level: 3 },
    { type: 'paragraph', html: localized.seoBody },
    { type: 'table', headers: [ui.toolLayer, ui.titleLayer, ui.brandLabel], rows: [[ui.toolLabel, ui.titleLabel, ui.logoLabel]] },
    { type: 'tip', title: localized.faqTitle, html: localized.seoTip },
  ],
};
