import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromptLibraryUI } from '../ui';

const slug = 'perpustakaan-prompt';
const title = 'Perpustakaan Prompt AI Pribadi';
const description = 'Atur, beri label, dan simpan prompt ChatGPT, Midjourney, dan Claude secara pribadi. Bank prompt milikmu sendiri di localStorage.';

const faqData = [
  {
    question: 'Di mana prompt saya disimpan?',
    answer: 'Prompt kamu disimpan secara eksklusif di penyimpanan lokal browser (localStorage). Kami tidak menggunakan server eksternal, sehingga datamu 100% privat.',
  },
  {
    question: 'Apa yang terjadi jika saya menghapus cookie atau riwayat browser?',
    answer: 'Jika kamu menghapus data situs atau penyimpanan lokal browser, prompt yang tersimpan akan hilang. Kami menyarankan untuk membuat cadangan jika kamu sering membersihkan browser.',
  },
  {
    question: 'Bisakah saya menggunakan alat ini untuk Midjourney, ChatGPT, atau DALL-E?',
    answer: 'Ya, alat ini kompatibel dengan semua jenis instruksi AI. Kamu bisa membuat tag khusus untuk mengorganisir perintah dan menyalinnya ke alat AI favoritmu dengan mudah.',
  },
];

const howToData = [
  { name: 'Buat prompt', text: 'Klik tombol Prompt Baru dan masukkan judul serta instruksinya.' },
  { name: 'Tambahkan tag', text: 'Ketik tag yang dipisahkan spasi atau koma untuk mengklasifikasikan prompt kamu.' },
  { name: 'Gunakan variabel', text: 'Gunakan tanda kurung siku [SEPERTI INI] dalam teks untuk membuat kolom yang bisa diisi pada kartu.' },
  { name: 'Salin dan bagikan', text: 'Salin ke clipboard dengan satu klik atau bagikan tautan langsung menggunakan tombol berbagi.' },
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
  step: howToData.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
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

const ui: PromptLibraryUI = {
  placeholderSearch: 'Cari berdasarkan kata kunci atau tag...',
  btnNew: 'Prompt Baru',
  emptyTitle: 'Perpustakaanmu masih kosong',
  emptyDesc: 'Buat prompt pertamamu dan mulai bangun repositori AI pribadimu.',
  btnAddFirst: 'Tambahkan yang pertama',
  modalTitleCreate: 'Buat Prompt Baru',
  modalTitleEdit: 'Edit Prompt',
  labelTitle: 'Judul identifikasi',
  placeholderTitle: 'Contoh: Pakar Marketing SEO',
  labelContent: 'Instruksi (Prompt)',
  placeholderContent: 'Tulis instruksi terperinci untuk AI di sini...',
  hintContent: 'Tips: gunakan tanda kurung siku [SEPERTI INI] untuk mengisi variabel nanti.',
  labelTags: 'Tag',
  placeholderTags: 'Contoh: marketing, seo (spasi atau koma untuk menambahkan)',
  btnCancel: 'Batal',
  btnSave: 'Simpan Secara Lokal',
  ariaLabelStar: 'Bintangi prompt',
  ariaLabelEdit: 'Edit prompt',
  ariaLabelShare: 'Bagikan prompt',
  ariaLabelCopy: 'Salin prompt',
  ariaLabelDelete: 'Hapus prompt',
  varsTitle: 'Variabel yang diperlukan',
  noResults: 'Tidak ada prompt yang ditemukan untuk pencarian ini.',
  confirmTitle: 'Hapus prompt?',
  confirmDesc: 'Tindakan ini tidak dapat dibatalkan.',
  btnCancelDelete: 'Batal',
  btnConfirmDelete: 'Hapus permanen',
};

export const content: ToolLocaleContent<PromptLibraryUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi Prompt Engineering',
  bibliography: [
    { name: 'Prompt Engineering Guide (DAIR.AI)', url: 'https://www.promptingguide.ai/' },
    { name: 'Apa itu prompt engineering (Google Cloud)', url: 'https://cloud.google.com/discover/what-is-prompt-engineering' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Mengapa kamu butuh Perpustakaan Prompt?', level: 2 },
    {
      type: 'paragraph',
      html: 'Jika kamu rutin bekerja dengan alat AI seperti ChatGPT, Claude, atau Midjourney, pasti pernah merasa kehabisan waktu karena menulis ulang instruksi yang sama berulang kali. <strong>Perpustakaan prompt</strong> adalah solusi definitif agar kamu tidak lagi membuang waktu menulis ulang perintah favoritmu.',
    },
    { type: 'title', text: 'Manfaat mengorganisir prompt kamu', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Pencarian instan:</strong> Temukan instruksi spesifik yang kamu gunakan berbulan-bulan lalu hanya dengan pencarian teks sederhana.',
        '<strong>Klasifikasi dengan tag:</strong> Beri label prompt dengan "marketing", "pemrograman", atau "copywriting" untuk memfilter dengan cepat.',
        '<strong>Salin satu klik:</strong> Salin teks lengkap ke clipboard hanya dengan satu klik.',
        '<strong>Privasi penuh:</strong> Semua datamu disimpan secara lokal di browser melalui localStorage.',
      ],
    },
    { type: 'title', text: 'Variabel dalam prompt kamu', level: 3 },
    {
      type: 'paragraph',
      html: 'Gunakan notasi <strong>[VARIABEL]</strong> dalam prompt untuk membuat kolom yang bisa diisi secara dinamis. Ketika kamu membuka kartu, kolom input akan muncul untuk setiap variabel yang didefinisikan. Prompt disalin dengan nilai yang sudah terisi, siap ditempel ke AI-mu.',
    },
    { type: 'title', text: 'Berbagi prompt', level: 3 },
    {
      type: 'paragraph',
      html: 'Setiap prompt dapat dibagikan melalui URL. Tombol berbagi menghasilkan tautan yang, ketika dibuka, menampilkan formulir pembuatan yang sudah terisi dengan konten prompt tersebut.',
    },
  ],
};
