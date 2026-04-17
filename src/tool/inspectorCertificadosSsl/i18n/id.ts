import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InspectorCertificadosSslUI } from '../ui';

const slug = 'inspektur-sertifikat-ssl';
const title = 'Inspektur Sertifikat SSL/TLS Online Lihat File PEM dan CRT';
const description = 'Analisis file sertifikat SSL (.pem, .crt, .der) secara lokal. Periksa tanggal kedaluwarsa, penerbit, subjek, dan sidik jari SHA-256 tanpa data Anda meninggalkan browser.';

const faqData = [
  {
    question: 'Apakah aman untuk menganalisis sertifikat SSL saya di situs web ini?',
    answer: 'Sangat aman. Utilitas ini berjalan 100% sisi klien. Ketika Anda menyeret file .pem atau .crt, browser membaca data secara lokal dan tidak pernah mengirimkannya ke server mana pun. Privasi lengkap.',
  },
  {
    question: 'Format sertifikat apa yang didukung?',
    answer: 'Alat ini mendukung format paling umum: PEM (dikodekan Base64 dengan header "BEGIN CERTIFICATE") dan DER (format biner), yang biasanya memiliki ekstensi .pem, .crt, .cer atau .der.',
  },
  {
    question: 'Bisakah saya melihat tanggal kedaluwarsa file .crt?',
    answer: 'Ya, ketika Anda memuat file, Anda akan langsung melihat bagian "Status Validitas" yang menunjukkan tanggal kedaluwarsa yang tepat dan apakah sertifikat masih berlaku hari ini.',
  },
  {
    question: 'Apa yang dilakukan penerbit sertifikat?',
    answer: 'Penerbit (Issuer) menunjukkan Otoritas Sertifikat (CA) mana yang memvalidasi identitas situs. Penting untuk mengetahui apakah sertifikat akan dikenali oleh browser komersial.',
  },
  {
    question: 'Bagaimana sidik jari SHA-256 dihitung?',
    answer: 'Sidik jari dihitung dengan menerapkan algoritma hash langsung ke konten biner sertifikat. Mereka berfungsi untuk memverifikasi bahwa file belum diubah dan cocok dengan yang diharapkan server.',
  },
];

const howToData = [
  { name: 'Temukan file Anda', text: 'Temukan file dengan ekstensi .pem, .crt, .cer atau .der di komputer Anda.' },
  { name: 'Seret dan lepas', text: 'Cukup seret file ke area bertitik di atas.' },
  { name: 'Lihat hasil', text: 'Segera Anda akan melihat siapa yang mengeluarkan sertifikat, untuk siapa, kapan kedaluwarsa, dan sidik jarinya.' },
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

const ui: InspectorCertificadosSslUI = {
  labelAnalyzeCertificate: 'Analisis Sertifikat',
  dragDropText: 'Seret file .pem, .crt atau .cer Anda di sini',
  dragDropSubtext: '(Pemrosesan 100% lokal di browser Anda)',
  cardStatusTitle: 'Status Validitas',
  cardSubjectTitle: 'Subjek (Pemilik)',
  cardIssuerTitle: 'Penerbit (CA)',
  cardFingerprintsTitle: 'Sidik Jari',
  cardTechnicalTitle: 'Detail Teknis',
  labelValidityStatus: 'Status:',
  labelExpiryDate: 'Kedaluwarsa pada',
  labelIssueDate: 'Diterbitkan pada',
  labelSha256: 'Sidik Jari SHA-256',
  labelSha1: 'Sidik Jari SHA-1',
  labelSignatureAlgorithm: 'Algoritma Tanda Tangan',
  labelVersion: 'Versi X.509',
  labelSerialNumber: 'Nomor Seri',
  labelCommonName: 'Nama Umum',
  labelOrganization: 'Organisasi',
  labelOrgUnit: 'Unit Org',
  labelLocality: 'Lokalitas',
  labelState: 'Negara/Provinsi',
  labelCountry: 'Negara',
  labelEmail: 'Email',
  statusValid: 'Valid',
  statusExpired: 'Kedaluwarsa',
  errorMessageInvalid: 'File tidak valid.',
  supportedFormats: '.pem, .crt, .cer, .der',
};

export const content: ToolLocaleContent<InspectorCertificadosSslUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Sumber Daya Teknis tentang Sertifikat SSL/TLS',
  bibliography: [
    { name: 'RFC 5280: Internet X.509 Public Key Infrastructure Certificate and CRL Profile', url: 'https://datatracker.ietf.org/doc/html/rfc5280' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'Mozilla: SSL/TLS Encryption Overview', url: 'https://developer.mozilla.org/en-US/docs/Glossary/TLS' },
    { name: 'OpenSSL: X.509 Certificate Format Documentation', url: 'https://www.openssl.org/docs/man1.1.1/man1/x509.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Apa itu Inspektur Sertifikat SSL/TLS dan mengapa Anda membutuhkannya?', level: 2 },
    {
      type: 'paragraph',
      html: 'Dalam dunia pengembangan web dan keamanan siber, <strong>sertifikat SSL (Secure Sockets Layer) dan TLS (Transport Layer Security)</strong> adalah fondasi kepercayaan. Sertifikat digital tidak lebih dari sekadar file yang menghubungkan kunci kriptografi dengan data organisasi atau domain. Namun, file ini sering datang dalam format biner (.der) atau Base64 terenkode (.pem, .crt) yang tidak terbaca pada pandangan pertama.',
    },
    {
      type: 'paragraph',
      html: '<strong>Inspektur Sertifikat SSL/TLS</strong> kami memungkinkan Anda untuk "membuka" file ini secara visual dan aman. Tidak seperti alat yang menanyakan domain publik (seperti tes SSL Labs yang terkenal), utilitas ini bekerja langsung dengan file yang Anda miliki di perangkat Anda. Ini sangat penting ketika Anda mengonfigurasi server Nginx, Apache atau memuat sertifikat ke AWS atau Google Cloud Load Balancer, dan Anda perlu memverifikasi bahwa file di tangan Anda benar sebelum mengunggahnya.',
    },
    { type: 'title', text: 'Cara memeriksa file .pem atau .crt langkah demi langkah', level: 2 },
    {
      type: 'paragraph',
      html: 'Menganalisis sertifikat dengan alat kami sangat sederhana dan tidak memerlukan pengetahuan konsol (OpenSSL). Ikuti langkah-langkah berikut:',
    },
    {
      type: 'list',
      items: [
        '<strong>Temukan file Anda:</strong> Temukan file dengan ekstensi .pem, .crt, .cer atau .der di komputer Anda.',
        '<strong>Seret dan lepas:</strong> Cukup seret file ke area bertitik di atas.',
        '<strong>Lihat hasil:</strong> Segera Anda akan melihat siapa yang mengeluarkan sertifikat, untuk siapa, kapan kedaluwarsa, dan sidik jarinya.',
      ],
    },
    {
      type: 'tip',
      title: 'Privasi Lengkap',
      html: 'Bagian paling penting dari proses ini adalah <strong>privasi</strong>. File tidak pernah diunggah ke server kami. Semua penguraian struktur ASN.1 sertifikat terjadi dalam RAM browser Anda sendiri. Keamanan lengkap untuk kunci publik Anda.',
    },
    { type: 'title', text: 'Bidang kunci yang akan Anda lihat saat menganalisis sertifikat Anda', level: 2 },
    {
      type: 'paragraph',
      html: 'Saat menganalisis sertifikat Anda, kami memecah informasi teknis yang paling relevan sehingga Anda dapat memverifikasinya sekilas:',
    },
    {
      type: 'list',
      items: [
        '<strong>Subjek:</strong> Menampilkan data pemilik, termasuk Nama Umum (CN), organisasi, dan lokasi.',
        '<strong>Penerbit:</strong> Mengidentifikasi Otoritas Sertifikat (CA) yang menandatangani sertifikat (misalnya, Let\'s Encrypt, DigiCert).',
        '<strong>Periode Validitas:</strong> Menunjukkan tanggal penerbitan yang tepat dan tanggal kedaluwarsa yang kritis.',
        '<strong>Sidik Jari:</strong> Sidik jari SHA-256 dan SHA-1 berfungsi untuk memverifikasi integritas file.',
      ],
    },
    { type: 'title', text: 'Format yang didukung: PEM, CRT, CER dan DER', level: 2 },
    {
      type: 'paragraph',
      html: 'Ada beberapa format file sertifikat dan terkadang membingungkan. Alat kami kompatibel dengan yang paling umum:',
    },
    {
      type: 'list',
      items: [
        '<strong>PEM (.pem, .crt, .cer):</strong> Format paling umum di Linux dan server web. Dimulai dengan baris <code>-----BEGIN CERTIFICATE-----</code>.',
        '<strong>DER (.der, .cer):</strong> Format biner. Banyak digunakan di lingkungan Windows (Java, Active Directory) dan biasanya lebih sulit dibaca tanpa alat khusus.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Bahkan jika file Anda memiliki ekstensi yang tidak biasa, jika struktur internalnya adalah sertifikat X.509 standar, mesin kami yang didukung <strong>node-forge</strong> akan dapat menginterpretasinya tanpa masalah.',
    },
    { type: 'title', text: 'Mengapa menggunakan alat ini daripada OpenSSL?', level: 2 },
    {
      type: 'paragraph',
      html: 'OpenSSL adalah pisau tentara Swiss kriptografi, tetapi perintahnya sulit diingat. Untuk melihat sertifikat dari konsol Anda harus menulis:',
    },
    { type: 'code', text: 'openssl x509 -in certificado.crt -text -noout' },
    {
      type: 'paragraph',
      html: 'Alat kami menawarkan keuntungan yang jelas untuk alur kerja sehari-hari:',
    },
    {
      type: 'list',
      items: [
        '<strong>Kecepatan:</strong> Tidak perlu membuka terminal atau mengingat bendera kompleks.',
        '<strong>Visual:</strong> Kami memformat nama bidang (Locality, Organization) agar dapat dibaca dan bukan kode singkat seperti "L" atau "O".',
        '<strong>Peringatan validitas:</strong> Kami secara otomatis menghitung apakah sertifikat valid hari ini, menghemat Anda dari pemeriksaan manual tanggal saat ini terhadap tanggal sertifikat.',
        '<strong>Lintas platform:</strong> Bekerja di sistem operasi apa pun dengan browser modern, tanpa dependensi untuk diinstal.',
      ],
    },
    { type: 'title', text: 'Keamanan dan Privasi: Sertifikat Anda tidak pernah meninggalkan RAM Anda', level: 2 },
    {
      type: 'paragraph',
      html: 'Sebagai pengembang, saya tahu betapa kritis menangani jenis informasi ini. Meskipun sertifikat secara teknis merupakan <strong>informasi publik</strong> (dikirim ke browser mana pun yang mengunjungi situs web Anda), masih merupakan praktik yang baik untuk tidak mengunggah file ke server eksternal tanpa perlu.',
    },
    {
      type: 'paragraph',
      html: 'Utilitas ini menggunakan JavaScript yang berjalan ketat di sisi klien. Ketika Anda menyeret file, kami membaca kontennya dan memprosesnya secara lokal. Anda dapat memverifikasi ini dengan memutuskan internet: alat akan terus berfungsi persis sama.',
    },
    { type: 'title', text: 'Kasus penggunaan umum untuk Inspektur SSL', level: 2 },
    {
      type: 'paragraph',
      html: 'Kapan menambahkan halaman ini ke bookmark akan bermanfaat?',
    },
    {
      type: 'list',
      items: [
        '<strong>Debugging server:</strong> Ketika Anda menginstal sertifikat dan situs web terus memberikan kesalahan, untuk memverifikasi bahwa Anda tidak secara tidak sengaja memuat sertifikat lama.',
        '<strong>Verifikasi rantai:</strong> Untuk melihat apakah file berisi sertifikat akhir atau sertifikat perantara.',
        '<strong>Audit aset:</strong> Untuk memeriksa Otoritas Sertifikat mana yang digunakan dalam proyek lama.',
        '<strong>Integritas salinan:</strong> Saat memindahkan sertifikat antar server, untuk memastikan file tidak rusak dengan membandingkan sidik jari SHA-256 nya.',
      ],
    },
  ],
};

