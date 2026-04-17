import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GeneradorSecurityTxtUI } from '../ui';

const slug = 'pembuat-security-txt';
const title = 'Generator Security.txt RFC 9116';
const description = 'Buat file security.txt profesional Anda untuk memudahkan pelaporan kerentanan dan memenuhi standar keamanan web internasional.';

const faqData = [
  {
    question: 'Apa itu file security.txt?',
    answer: 'Ini adalah standar (RFC 9116) yang memungkinkan situs web menentukan cara peneliti keamanan dapat menghubungi mereka untuk melaporkan kerentanan secara bertanggung jawab.',
  },
  {
    question: 'Di mana file security.txt harus ditempatkan?',
    answer: 'Lokasi standar yang direkomendasikan adalah di folder /.well-known/ domain Anda, menghasilkan URL https://example.com/.well-known/security.txt.',
  },
  {
    question: 'Mengapa tanggal kedaluwarsa wajib diisi?',
    answer: 'Untuk memastikan informasi kontak tidak menjadi usang. Jika file tidak memiliki tanggal kedaluwarsa yang valid, peneliti mungkin tidak percaya bahwa saluran komunikasi masih aktif.',
  },
  {
    question: 'Kolom apa saja yang wajib ada dalam security.txt?',
    answer: 'Menurut RFC 9116, kolom yang wajib adalah "Contact" (berisi alamat email atau URL) dan "Expires" (berisi tanggal mendatang dalam format ISO 8601).',
  },
];

const howToData = [
  { name: 'Isi kolom yang tersedia', text: 'Masukkan alamat email atau URL kontak Anda dan pilih tanggal kedaluwarsa.' },
  { name: 'Tambahkan kolom opsional', text: 'Sertakan informasi tambahan seperti kunci PGP, kebijakan keamanan, atau lowongan pekerjaan.' },
  { name: 'Unduh atau salin file', text: 'Klik "Unduh .txt" atau salin kontennya dan simpan sebagai security.txt.' },
  { name: 'Unggah ke server', text: 'Tempatkan file di folder /.well-known/ domain Anda.' },
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

const ui: GeneradorSecurityTxtUI = {
  titleBasicFields: 'Kolom Wajib',
  labelContact: 'Kontak (Email atau URL)',
  placeholderContact: 'mailto:security@example.com atau https://example.com/kontak',
  contactTip: 'Alamat tujuan pengiriman laporan kerentanan.',
  labelExpires: 'Tanggal Kedaluwarsa',
  expiresTip: 'Tidak boleh lebih dari satu tahun ke depan.',
  titleOptionalFields: 'Kolom Opsional',
  labelEncryption: 'Kunci Publik',
  placeholderEncryption: 'https://example.com/pgp-key.txt',
  encryptionTip: 'Tautan ke kunci PGP Anda untuk laporan terenkripsi.',
  labelPolicy: 'Kebijakan Keamanan',
  placeholderPolicy: 'https://example.com/keamanan/kebijakan/',
  policyTip: 'Halaman yang menjelaskan cara menangani kerentanan.',
  labelAcknowledgments: 'Penghargaan',
  placeholderAcknowledgments: 'https://example.com/keamanan/hall-of-fame/',
  acknowledgmentsTip: 'Halaman apresiasi untuk peneliti keamanan.',
  labelHiring: 'Lowongan Kerja',
  placeholderHiring: 'https://example.com/jobs',
  hiringTip: 'Tautan ke lowongan kerja bidang keamanan.',
  resultTitle: 'Pratinjau (security.txt)',
  btnCopy: 'Salin Kode',
  btnDownload: 'Unduh .txt',
  copiedMessage: 'Disalin',
  generatingMessage: 'Membuat file security.txt...',
  comment: 'Dibuat',
};

export const content: ToolLocaleContent<GeneradorSecurityTxtUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Sumber Teknis tentang Security.txt',
  bibliography: [
    { name: 'RFC 9116: A File Format to Aid in Security Vulnerability Disclosure', url: 'https://datatracker.ietf.org/doc/html/rfc9116' },
    { name: 'Security.txt Official Website', url: 'https://securitytxt.org/' },
    { name: 'OWASP: Vulnerability Disclosure Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Apa itu file Security.txt dan mengapa Anda perlu membuatnya?', level: 2 },
    {
      type: 'paragraph',
      html: 'Dalam lanskap keamanan siber saat ini, transparansi dan komunikasi sangatlah penting. Jika Anda seorang administrator sistem, pengembang web, atau pemilik bisnis digital, Anda mungkin sudah familiar dengan file teks yang membantu mesin memahami situs Anda, seperti <code>robots.txt</code> atau <code>ads.txt</code>. Namun, ada standar yang kurang dikenal namun vital bagi integritas platform Anda: <strong>Security.txt</strong>, yang didefinisikan oleh <strong>RFC 9116</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Tujuan dari <strong>membuat file security.txt</strong> adalah memberi peneliti keamanan cara yang terstandarisasi untuk menghubungi pengelola situs web ketika mereka menemukan kerentanan. Tanpa file ini, seorang peretas etis yang menemukan celah pada sistem Anda mungkin tidak tahu harus melapor ke siapa, yang sering kali berujung pada informasi yang hilang, dipublikasikan tanpa pemberitahuan, atau dimanfaatkan oleh pihak jahat.',
    },
    { type: 'title', text: 'Cara membuat dan memasang file Security.txt sesuai RFC 9116', level: 2 },
    {
      type: 'paragraph',
      html: 'Standar ini mewajibkan file ditempatkan di lokasi khusus pada server Anda: folder <code>/.well-known/</code>. Dengan demikian, jalur akhirnya biasanya adalah <code>https://domainanda.com/.well-known/security.txt</code>. Meskipun diperbolehkan menempatkannya di root (<code>/security.txt</code>), opsi pertama lebih disukai oleh alat pemindai otomatis.',
    },
    { type: 'title', text: 'Kolom wajib yang tidak boleh terlewat', level: 3 },
    {
      type: 'paragraph',
      html: 'Saat <strong>membuat kode security.txt</strong>, pastikan file Anda mencakup setidaknya dua elemen kritis:',
    },
    {
      type: 'list',
      items: [
        '<strong>Contact:</strong> Alamat email atau URL formulir tempat laporan dikirimkan. Harus dimulai dengan <code>mailto:</code> atau <code>https://</code>.',
        '<strong>Expires:</strong> Tanggal dalam format ISO 8601 yang menunjukkan kapan informasi file tidak lagi valid. Disarankan tidak melebihi satu tahun ke depan.',
      ],
    },
    { type: 'code', text: 'Contact: mailto:security@perusahaananda.com\nExpires: 2025-12-31T23:59:59.000Z' },
    { type: 'title', text: 'Kolom opsional untuk keamanan tingkat lanjut', level: 3 },
    {
      type: 'paragraph',
      html: 'Bagi situs yang menginginkan <strong>perlindungan lebih kuat</strong>, standar ini menawarkan kolom tambahan:',
    },
    {
      type: 'list',
      items: [
        '<strong>Encryption:</strong> Tautan ke kunci publik PGP Anda agar peneliti dapat mengirimkan informasi secara terenkripsi.',
        '<strong>Policy:</strong> Tautan ke halaman kebijakan keamanan Anda yang menjelaskan proses pengungkapan bertanggung jawab.',
        '<strong>Acknowledgments:</strong> Tautan ke "Hall of Fame" atau halaman apresiasi untuk para peneliti.',
        '<strong>Hiring:</strong> Tautan ke lowongan kerja terkait keamanan siber.',
      ],
    },
    { type: 'title', text: 'Manfaat menggunakan generator Security.txt gratis kami', level: 2 },
    {
      type: 'paragraph',
      html: 'Banyak orang bertanya-tanya <strong>bagaimana mendapatkan kontak keamanan situs web</strong> dengan cepat. Dengan menggunakan alat kami, Anda memastikan kepatuhan ketat terhadap format RFC 9116 tanpa harus membaca dokumen teknis yang rumit.',
    },
    {
      type: 'paragraph',
      html: 'Menggunakan generator menghindari kesalahan sintaks yang umum terjadi. Misalnya, lupa menambahkan awalan <code>mailto:</code> atau format zona waktu yang salah pada tanggal kedaluwarsa dapat menyebabkan alat otomatis para peneliti mengabaikan file Anda.',
    },
    { type: 'title', text: 'Dampak pada SEO dan reputasi web', level: 3 },
    {
      type: 'paragraph',
      html: 'Meskipun file <code>security.txt</code> bukan faktor peringkat langsung di Google seperti kecepatan halaman atau HTTPS, dampaknya bersifat tidak langsung namun nyata. Situs web yang mengelola kerentanan dengan baik terhindar dari serangan yang merusak (defacement, injeksi spam) yang bisa menghancurkan SEO dalam hitungan jam. Selain itu, banyak platform penilaian keamanan perusahaan (seperti SecurityScorecard atau BitSight) memberikan poin tambahan kepada domain yang menerapkan standar ini.',
    },
    { type: 'title', text: 'Kesimpulan: Langkah sederhana untuk web yang lebih aman', level: 2 },
    {
      type: 'paragraph',
      html: 'Singkatnya, <strong>mengunduh security.txt</strong> dan mengunggahnya ke server Anda adalah salah satu tugas pemeliharaan keamanan paling cepat dan efektif yang bisa Anda lakukan hari ini. Anda memudahkan kerja para "pihak baik", mencegah rasa ingin tahu yang berbahaya, dan menunjukkan kepada dunia bahwa Anda serius dalam menjaga privasi dan data pengguna.',
    },
    {
      type: 'paragraph',
      html: 'Jangan tunggu sampai ada pelanggaran keamanan untuk menyesal belum menyediakan saluran komunikasi. Gunakan <strong>generator security.txt online</strong> kami sekarang dan jaga ekosistem digital Anda tetap terkendali.',
    },
  ],
};

