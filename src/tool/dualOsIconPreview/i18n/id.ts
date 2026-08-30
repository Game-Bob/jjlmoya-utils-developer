import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { ToolLocaleContent, SEOSection } from '../../../types';
import type { DualOsIconPreviewUI } from '../ui';

interface LocalizedCopy {
  locale: string;
  slug: string;
  title: string;
  description: string;
  faqTitle: string;
  bibliographyTitle: string;
  ui: DualOsIconPreviewUI;
  faq: { question: string; answer: string }[];
  howTo: { name: string; text: string }[];
  seo: SEOSection[];
}

function createDualOsIconPreviewContent(copy: LocalizedCopy): ToolLocaleContent<DualOsIconPreviewUI> {
  const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: copy.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
  const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: copy.title, description: copy.description, step: copy.howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
  const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: copy.title, description: copy.description, applicationCategory: 'DesignApplication', operatingSystem: 'iOS, Android', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: copy.locale };
  return { slug: copy.slug, title: copy.title, description: copy.description, ui: copy.ui, faqTitle: copy.faqTitle, faq: copy.faq, bibliographyTitle: copy.bibliographyTitle, bibliography, howTo: copy.howTo, schemas: [appSchema, faqSchema, howToSchema], seo: copy.seo };
}

const title = 'Audit ikon aplikasi untuk iOS dan Android';
const description = 'Unggah logo untuk mengaudit tampilannya di iPhone dan Pixel. Periksa mode iOS, mask adaptif Android, jarak aman, dan ikon bertema langsung di browser.';
const ui: DualOsIconPreviewUI = {
  labelUpload: 'Unggah logo', uploadAction: 'Pilih gambar', uploadHint: 'Tanda yang sama mengisi kedua ponsel', dropHint: 'PNG, JPG, WEBP atau SVG', labelAppName: 'Nama aplikasi', appNamePlaceholder: 'Tampil di bawah ikon', labelBrandColor: 'Warna aksen sistem', labelIosAppearance: 'Tampilan iOS', iosAppearanceHint: 'Periksa tanda di setiap mode Layar Utama', iosDefault: 'Default', iosDark: 'Gelap', iosClear: 'Jernih', iosTinted: 'Berwarna', labelAndroidShape: 'Mask adaptif Android', androidShapeHint: 'Launcher dapat mengubah bentuk luar', androidCircle: 'Lingkaran', androidSquircle: 'Squircle', androidRounded: 'Membulat', androidTeardrop: 'Tetesan', labelAndroidTheme: 'Pratinjau ikon bertema', androidThemeHint: 'Mewarnai ulang setiap ikon dengan satu warna sistem sambil mempertahankan siluetnya', iosDeviceLabel: 'iPhone', androidDeviceLabel: 'Pixel', iosHomeLabel: 'Layar Utama', androidHomeLabel: 'Launcher', safeZoneLabel: 'Mask iOS', adaptiveLayerLabel: 'Ikon adaptif', monochromeLabel: 'Lapisan tema', nameFallback: 'Aplikasi Anda', emptyLogo: 'Logo Anda', fileError: 'Pilih berkas gambar untuk melanjutkan.', statusReady: 'Siap', statusNeedsReview: 'Tambahkan logo', stageKicker: 'Dua konteks perangkat, satu audit', stageNote: 'Periksa setiap perlakuan dalam konteksnya', auditTitle: 'Audit logo', auditHint: 'Diukur secara lokal dari gambar yang dimuat', auditWaiting: 'Unggah logo', auditNotChecked: 'Belum diperiksa', auditFile: 'Kanvas', auditAspect: 'Rasio aspek', auditResolution: 'Resolusi', auditIosMask: 'Jarak mask iOS', auditAndroidZone: 'Zona aman Android', auditMargin: 'Jarak tepi minimum', auditTransparency: 'Tepi alfa', auditTransparent: 'Transparan', auditFullBleed: 'Penuh', statusPass: 'LULUS', statusReview: 'TINJAU',
};
const faq = [
  { question: 'Apa yang diperiksa audit ikon aplikasi ini?', answer: 'Audit ini memeriksa dimensi gambar, rasio aspek, resolusi, jarak tepi transparan, ruang mask iOS, dan zona aman adaptif Android. Anda juga dapat melihat nama aplikasi pada ukuran launcher.' },
  { question: 'Bisakah saya melihat iPhone dan Android sekaligus?', answer: 'Bisa. Logo dan nama aplikasi yang sama ditampilkan secara bersamaan dalam konteks Layar Utama iPhone dan launcher Pixel agar konteks kedua perangkat tetap terlihat.' },
  { question: 'Apa fungsi mode ikon bertema Android?', answer: 'Mode ini menerapkan satu warna sistem dan perlakuan monokrom pada semua ikon Android di adegan, termasuk ikon yang diunggah, aplikasi di sebelahnya, dan dock. Dengan begitu Anda dapat melihat apakah siluetnya tetap terbaca tanpa warna asli.' },
  { question: 'Apakah logo meninggalkan browser saya?', answer: 'Tidak. Gambar dibaca dan diukur secara lokal di browser. Alat ini tidak mengunggahnya ke server.' },
  { question: 'Apakah hasilnya siap untuk dikirim ke app store?', answer: 'Belum. Ini adalah audit desain dan aset lokal. Gunakan alat platform Apple dan Android serta perangkat nyata atau emulator untuk ekspor akhir, perilaku launcher, dan persetujuan store.' },
];
const howTo = [
  { name: 'Unggah logo', text: 'Pilih logo PNG, JPG, WEBP, atau SVG. Gambar lokal yang sama muncul dalam kedua konteks perangkat.' },
  { name: 'Masukkan nama aplikasi', text: 'Ketik label launcher dan periksa apakah tetap terbaca di samping label aplikasi lain yang nyata.' },
  { name: 'Periksa tampilan iOS', text: 'Ganti antara Default, Gelap, Jernih, dan Berwarna untuk menemukan kontras lemah atau detail yang menghilang.' },
  { name: 'Periksa mask Android', text: 'Coba bentuk lingkaran, squircle, membulat, dan tetesan. Lalu aktifkan ikon bertema untuk meninjau versi monokrom di seluruh launcher.' },
  { name: 'Tindak lanjuti audit', text: 'Tambahkan ruang, sederhanakan detail kecil, atau tingkatkan kontras sebelum menyiapkan aset platform final.' },
];

export const content = createDualOsIconPreviewContent({ locale: 'id', slug: 'audit-ikon-aplikasi-ios-android', title, description, faqTitle: 'Pertanyaan umum', bibliographyTitle: 'Referensi', ui, faq, howTo, seo: [
  { type: 'title', text: 'Audit ikon aplikasi sebelum dirilis', level: 2 },
  { type: 'paragraph', html: 'Unggah satu logo dan periksa secara bersamaan dalam konteks Layar Utama iPhone dan launcher Pixel. Audit ikon aplikasi ini mengukur kanvas, rasio aspek, resolusi, jarak tepi transparan, ruang mask iOS, dan zona aman adaptif Android. Masukkan juga nama aplikasi yang sebenarnya, karena tanda dapat lolos pemeriksaan ikon tetapi tetap gagal ketika label launcher tidak lagi terbaca.' },
  { type: 'title', text: 'Yang diperiksa audit ikon aplikasi ini', level: 3 },
  { type: 'list', items: ['Kanvas dan rasio aspek: pastikan sumber berbentuk persegi sebelum alat platform menambahkan perlakuannya sendiri.', 'Resolusi: temukan berkas sumber kecil sebelum tampak buram atau tidak berguna pada launcher yang lebih besar.', 'Jarak tepi: lihat apakah bentuk atau huruf penting terlalu dekat dengan mask iOS atau zona aman Android.', 'Label launcher: periksa nama aplikasi pada skala yang sama dengan ikon di sebelahnya dan temukan pemenggalan yang mengganggu.', 'Perlakuan Android bertema: terapkan satu warna sistem monokrom pada target, ikon sekitar, dan dock agar warna tidak menyembunyikan siluet yang lemah.'] },
  { type: 'title', text: 'Lihat kedua konteks perangkat sekaligus', level: 3 },
  { type: 'paragraph', html: 'Gunakan dua tampilan ponsel sebagai satu permukaan audit. Ganti tampilan iOS Default, Gelap, Jernih, dan Berwarna, lalu coba mask Android lingkaran, squircle, membulat, dan tetesan. Tujuannya adalah memahami perilaku aset yang sama pada permukaan launcher, bukan membandingkan platform mana yang lebih baik.' },
  { type: 'title', text: 'Yang tidak dapat dijamin audit ini', level: 3 },
  { type: 'paragraph', html: 'Ini adalah peninjauan desain dan aset berbasis browser, bukan pengganti Xcode, Android Studio, perangkat nyata, atau emulator. Launcher, versi sistem operasi, dan produsen dapat menerapkan mask, jarak, kontras, dan aturan ikon bertema yang berbeda. Gunakan audit ini untuk menemukan risiko lebih awal, lalu validasi aset platform final pada lingkungan yang Anda dukung.' },
  { type: 'tip', title: 'Rutinitas audit praktis', html: 'Tinjau logo pada ukuran praktis terkecil dalam setiap perlakuan. Jika tanda hanya berfungsi dengan satu latar, satu mask, atau warna aslinya, sederhanakan gambar atau tambahkan ruang sebelum dirilis.' },
] });
