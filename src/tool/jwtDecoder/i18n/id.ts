import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JwtDecoderUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'decoder-jwt-parser-dan-inspektur-klaim';
const title = 'Decoder JWT, Parser dan Inspektur Klaim';
const description = 'Tempelkan JSON Web Token, dekode header dan payload secara instan, periksa klaim terdaftar, temukan token yang sudah kedaluwarsa, dan salin JSON bersih untuk men-debug alur autentikasi.';

const howTo = [
  {
    name: 'Tempelkan JWT',
    text: 'Salin token dari header Authorization, cookie, entri log, atau penyedia identitas dan tempelkan ke kolom input.',
  },
  {
    name: 'Baca header dan payload yang telah didekode',
    text: 'Alat ini memisahkan token menjadi header, payload, dan tanda tangan, lalu menampilkan segmen JSON di panel terpisah untuk pemeriksaan cepat.',
  },
  {
    name: 'Periksa klaim penting',
    text: 'Tinjau algoritma, penerbit, audiens, subjek, waktu penerbitan, waktu tidak sebelum, dan waktu kedaluwarsa tanpa mengonversi timestamp Unix secara manual.',
  },
  {
    name: 'Salin data yang Anda butuhkan',
    text: 'Salin satu bagian yang didekode atau keluaran yang didekode lengkap saat Anda perlu membagikan cuplikan debugging yang sudah dibersihkan dengan tim Anda.',
  },
];

const faq = [
  {
    question: 'Apakah mendekode JWT membuktikan bahwa token tersebut valid?',
    answer: 'Tidak. Dekode hanya mengungkap header dan payload yang dikode base64url. Token hanya dapat dipercaya setelah tanda tangan, penerbit, audiens, kedaluwarsa, dan klaim terkait divalidasi oleh aplikasi atau penyedia identitas.',
  },
  {
    question: 'Bisakah saya menggunakan decoder JWT ini untuk access token dan ID token?',
    answer: 'Ya. Decoder ini berguna untuk memeriksa access token OAuth, ID token OpenID Connect, token sesi, dan token layanan ke layanan, selama menggunakan format JWT tiga bagian standar.',
  },
  {
    question: 'Mengapa panel tanda tangan tidak memverifikasi token?',
    answer: 'Verifikasi JWT memerlukan secret, kunci publik, atau konfigurasi JWKS yang benar. Alat ini sengaja berfokus pada dekode dan inspeksi sehingga pengembang dapat melihat isi token tanpa berpura pura bahwa string tanda tangan yang terlihat adalah bukti validitas.',
  },
  {
    question: 'Apa yang harus saya periksa terlebih dahulu saat men-debug JWT?',
    answer: 'Mulai dengan exp, nbf, iss, aud, dan alg. Sebagian besar masalah produksi nyata berasal dari token yang sudah kedaluwarsa, selisih jam, nilai audiens yang salah, URL penerbit yang tidak terduga, atau asumsi algoritma yang tidak aman.',
  },
];

const ui: JwtDecoderUI = {
  tokenLabel: 'Token JWT',
  tokenPlaceholder: 'Tempelkan JWT di sini: header.payload.tanda tangan',
  sampleButton: 'Muat contoh',
  clearButton: 'Bersihkan',
  statusWaiting: 'Tempelkan token untuk mendekode header JSON, payload, dan klaim.',
  statusValid: 'JWT berhasil didekode.',
  statusInvalid: 'Ini tidak terlihat seperti JWT tiga bagian yang valid.',
  statusExpired: 'JWT didekode, tetapi klaim exp sudah kedaluwarsa.',
  statusUnsigned: 'JWT didekode, tetapi tidak ditandatangani atau menggunakan algoritma none.',
  headerTitle: 'Header',
  payloadTitle: 'Payload',
  signatureTitle: 'Tanda tangan',
  claimsTitle: 'Klaim terdaftar',
  copyHeader: 'Salin header yang didekode',
  copyPayload: 'Salin payload yang didekode',
  copySignature: 'Salin tanda tangan',
  copyAll: 'Salin semua',
  copiedLabel: 'Tersalin',
  invalidTokenTitle: 'JWT tidak valid',
  invalidTokenBody: 'Periksa apakah token memiliki tiga segmen base64url yang dipisahkan oleh titik.',
  invalidSegmentError: 'Periksa apakah token memiliki tiga segmen base64url yang dipisahkan oleh titik.',
  invalidDecodeError: 'Header atau payload tidak dapat didekode sebagai JSON yang valid.',
  emptyJson: '{}',
  signaturePresent: 'Segmen tanda tangan ada; verifikasi di lapisan autentikasi Anda dengan kunci yang benar.',
  signatureMissing: 'Tidak ada segmen tanda tangan',
  algorithmLabel: 'Algoritma',
  typeLabel: 'Tipe',
  issuerLabel: 'Penerbit',
  subjectLabel: 'Subjek',
  audienceLabel: 'Audiens',
  issuedAtLabel: 'Diterbitkan pada',
  notBeforeLabel: 'Tidak sebelum',
  expiresAtLabel: 'Kedaluwarsa pada',
  claimMissing: 'Tidak ada',
  privacyNote: 'Dekode berjalan di sesi browser Anda. Jangan tempelkan secret produksi ke alat apa pun kecuali kebijakan keamanan Anda mengizinkannya.',
  sampleToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnYW1lYm9iLXVzZXItNDIiLCJuYW1lIjoiR2FtZUJvYiBEZXZlbG9wZXIiLCJpc3MiOiJodHRwczovL3d3dy5nYW1lYm9iLmRldiIsImF1ZCI6ImRldmVsb3Blci10b29scyIsImlhdCI6MTcxNzIwMDAwMCwibmJmIjoxNzE3MjAwMDAwLCJleHAiOjE4OTM0NTYwMDAsInJvbGUiOiJhZG1pbiJ9.demo-signature',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<JwtDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'FAQ decoder JWT',
  faq,
  bibliographyTitle: 'Spesifikasi JWT dan referensi keamanan',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Dekode JWT tanpa kehilangan konteks keamanan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'JSON Web Token terlihat ringkas, tetapi sering kali membawa detail tepat yang menjelaskan kegagalan autentikasi: algoritma penandatanganan, penerbit, audiens, subjek, waktu penerbitan, waktu tidak sebelum, kedaluwarsa, dan klaim otorisasi khusus aplikasi. <strong>Decoder JWT, parser dan inspektur klaim</strong> ini mengubah tiga segmen token menjadi JSON yang dapat dibaca sehingga Anda dapat men-debug alur autentikasi lebih cepat.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Didekode bukan berarti terpercaya',
      html: 'Siapa pun dapat mendekode JWT dengan base64url. Kepercayaan dimulai hanya setelah aplikasi Anda memverifikasi tanda tangan dengan secret, kunci publik, atau JWKS yang benar, lalu memvalidasi penerbit, audiens, kedaluwarsa, dan klaim khusus domain apa pun. Gunakan alat ini untuk memeriksa data, bukan untuk menerima token sebagai autentik.',
    },
    {
      type: 'title',
      text: 'Apa yang diungkapkan setiap segmen JWT',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Segmen', 'Konten umum', 'Nilai debugging'],
      rows: [
        ['Header', 'Algoritma, tipe token, dan ID kunci opsional', 'Menunjukkan apakah token mengharapkan HS256, RS256, ES256, atau strategi verifikasi lainnya.'],
        ['Payload', 'Klaim terdaftar dan klaim aplikasi', 'Mengungkap identitas, tenant, scope, peran, kedaluwarsa, dan ketidakcocokan audiens.'],
        ['Tanda tangan', 'Byte tanda tangan kriptografis yang dikode sebagai base64url', 'Mengonfirmasi bahwa segmen tanda tangan ada, tetapi harus diverifikasi dengan kunci yang benar di tempat lain.'],
      ],
    },
    {
      type: 'title',
      text: 'Klaim yang biasanya menjelaskan kegagalan autentikasi',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>exp:</strong> jika token sudah kedaluwarsa, logika refresh atau pengaturan jam mungkin salah.',
        '<strong>nbf:</strong> jika token belum aktif, jam server dan penyedia identitas mungkin tidak sinkron.',
        '<strong>iss:</strong> jika URL penerbit berbeda dari konfigurasi, token mungkin berasal dari tenant atau environment yang salah.',
        '<strong>aud:</strong> jika audiens tidak cocok dengan pengenal API, token diterbitkan untuk sumber daya lain.',
        '<strong>alg:</strong> jika algoritma tidak terduga, verifikator Anda mungkin menolak token atau mengekspos kesalahan konfigurasi yang berbahaya.',
      ],
    },
    {
      type: 'title',
      text: 'Kasus penggunaan parser JWT selama pengembangan',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Debugging frontend',
          description: 'Periksa ID token dan access token yang diterima setelah login untuk mengonfirmasi scope, peran, dan klaim profil.',
          icon: 'mdi:monitor-dashboard',
          points: ['Periksa klaim profil', 'Konfirmasi scope dan peran', 'Bandingkan environment login'],
        },
        {
          title: 'QA API backend',
          description: 'Bandingkan nilai penerbit dan audiens yang diharapkan dengan token yang sebenarnya dikirim di header Authorization.',
          icon: 'mdi:api',
          highlight: true,
          points: ['Validasi bentuk audiens', 'Temukan ketidakcocokan penerbit', 'Periksa bearer token'],
        },
        {
          title: 'Pengaturan penyedia identitas',
          description: 'Periksa apakah klaim dari Auth0, Azure AD, Cognito, Keycloak, atau penyedia kustom dibentuk seperti yang diharapkan aplikasi Anda.',
          icon: 'mdi:account-key',
          points: ['Tinjau data tenant', 'Periksa klaim kustom', 'Bandingkan pemetaan penyedia'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Kesalahan JWT umum yang dibuat jelas oleh inspektur ini',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Pemeriksaan cepat versus keputusan kepercayaan',
      items: [
        {
          pro: 'Lihat token yang salah format secara langsung.',
          con: 'Tidak dapat mengetahui audiens atau penerbit yang Anda harapkan.',
        },
        {
          pro: 'Konversi klaim timestamp Unix menjadi tanggal yang dapat dibaca.',
          con: 'Tidak dapat memverifikasi tanda tangan tanpa materi kunci asli.',
        },
        {
          pro: 'Temukan nilai penerbit, audiens, subjek, atau tipe yang hilang.',
          con: 'Tidak dapat membuktikan bahwa scope dan peran aman untuk aplikasi Anda.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Alur kerja praktik terbaik',
      items: [
        'Dekode token untuk memahami apa yang sebenarnya diterima oleh klien atau API.',
        'Periksa exp, nbf, iss, aud, sub, dan alg sebelum mengejar logika aplikasi.',
        'Verifikasi tanda tangan dan keputusan kepercayaan hanya di lapisan autentikasi Anda.',
        'Hindari membagikan JWT produksi yang sensitif di tiket, log, atau tangkapan layar.',
      ],
    },
  ],
};
