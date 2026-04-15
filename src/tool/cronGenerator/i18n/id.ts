import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CronGeneratorUI } from '../ui';

const slug = 'cron-id';
const title = 'Generator Ekspresi Cron Online. Penerjemah dan Visualisator';
const description =
  'Alat visual gratis untuk menghasilkan ekspresi Linux Cron. Menerjemahkan * * * * * ke dalam bahasa manusia dan menampilkan 5 eksekusi berikutnya secara real time.';

const faqData = [
  {
    question: 'Apa itu ekspresi Cron?',
    answer:
      'Ini adalah string teks yang mewakili jadwal eksekusi untuk tugas otomatis pada sistem mirip Unix (Linux, macOS). Ini terdiri dari 5 kolom yang menentukan menit, jam, hari dalam sebulan, bulan, dan hari dalam seminggu.',
  },
  {
    question: 'Apakah ini kompatibel dengan semua sistem?',
    answer:
      'Ya, ekspresi yang dihasilkan mengikuti standar POSIX, kompatibel dengan Linux Crontab, macOS cron, dan layanan cloud seperti AWS CloudWatch atau GitHub Actions.',
  },
  {
    question: 'Apa arti tanda bintang (*) dalam Cron?',
    answer:
      'Tanda bintang adalah wildcard yang berarti "semua". Misalnya, tanda * di kolom menit berarti tugas akan berjalan setiap menit dari rentang yang ditentukan.',
  },
  {
    question: 'Bagaimana cara memeriksa eksekusi mendatang?',
    answer:
      'Alat ini menyertakan penampil real-time yang menunjukkan dengan tepat 5 tanggal dan waktu berikutnya saat tugas Anda akan berjalan sesuai dengan ekspresi saat ini.',
  },
];

const howToData = [
  {
    name: 'Pilih interval',
    text: 'Pilih seberapa sering Anda ingin tugas berjalan menggunakan preset cepat (setiap menit, setiap jam, harian, dll.).',
  },
  {
    name: 'Konfigurasi detail lanjutan',
    text: 'Beralih ke tab "Lanjutan" untuk menentukan menit, jam, atau hari tertentu dalam seminggu secara manual.',
  },
  {
    name: 'Verifikasi terjemahan dan tanggal',
    text: 'Baca deskripsi bahasa manusia dan periksa 5 eksekusi berikutnya untuk mengonfirmasi jadwal yang benar.',
  },
  {
    name: 'Salin ekspresi',
    text: 'Salin string yang dihasilkan dan tempelkan langsung ke file crontab atau konfigurasi server Anda.',
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
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'id',
};

const ui: CronGeneratorUI = {
  labelMinute: 'Menit',
  labelHour: 'Jam',
  labelDom: 'Hari (Bulan)',
  labelMonth: 'Bulan',
  labelDow: 'Hari (Minggu)',
  tabQuick: 'Cepat',
  tabAdvanced: 'Lanjutan',
  fieldMinute: 'Menit (0-59)',
  fieldHour: 'Jam (0-23)',
  fieldDom: 'Hari dalam Sebulan (1-31)',
  fieldMonth: 'Bulan (1-12)',
  fieldDow: 'Hari dalam Seminggu (0-6)',
  hintMinute: 'Misal: *, */5, 0,30',
  hintDow: '0 = Minggu, 6 = Sabtu',
  labelNextRuns: 'Eksekusi Berikutnya',
  btnCopy: 'Salin Ekspresi',
  btnCopied: 'Tersalin!',
  msgNoRuns: 'Tidak ditemukan eksekusi mendatang dalam rentang yang wajar.',
  msgError: 'Kesalahan saat menghitung tanggal.',
  presetEveryMinute: 'Setiap menit',
  presetEveryHour: 'Setiap jam',
  presetDaily: 'Harian',
  presetWeekly: 'Mingguan',
  presetMonthly: 'Bulanan',
  presetYearly: 'Tahunan',
  descEveryMinute: 'Berjalan setiap menit',
  descEveryHour: 'Berjalan di awal setiap jam',
  descEveryDay: 'Berjalan setiap hari pada tengah malam',
  descPrefix: 'Berjalan',
  descEveryMin: 'setiap menit',
  descEveryHourOnDot: 'setiap jam tepat',
  descAtMinute: 'pada menit {m} setiap jam',
  descAtTime: 'pada pukul {h}:{m}',
  descOnDay: ' pada hari ke-{d} setiap bulan',
  descInMonth: ' pada bulan ke-{mon}',
  descIfDow: ' jika hari ke-{d} (0=Minggu, 6=Sabtu)',
  descDays: 'Minggu,Senin,Selasa,Rabu,Kamis,Jumat,Sabtu',
  descInvalid: 'Ekspresi tidak valid',
  timeNow: 'sekarang',
  timeMin: 'menit',
  timeHour: 'jam',
  timeDays: 'hari',
  locale: 'id-ID',
};

export const content: ToolLocaleContent<CronGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi dan Dokumentasi',
  bibliography: [
    {
      name: 'Manual GNU Crontab: Ekspresi Cron di Linux',
      url: 'https://www.gnu.org/software/mcron/manual/html_node/Crontab-file.html',
    },
    {
      name: 'Cron di Wikipedia: Sejarah dan Sintaks',
      url: 'https://id.wikipedia.org/wiki/Cron',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Pentingnya Cron dalam Otomatisasi Modern',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Meskipun kita hidup di era server <em>serverless</em> dan alur kerja cloud, sistem <strong>Crontab</strong> tetap menjadi tulang punggung infrastruktur teknologi global. Dari blog kecil hingga infrastruktur perbankan besar, penjadwalan tugas adalah hal yang membuat dunia digital tetap berjalan.',
    },
    {
      type: 'title',
      text: 'Anatomi Ekspresi Cron',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Kolom 1 - Menit (0-59):</strong> Kapan tugas dimulai dalam satu jam.',
        '<strong>Kolom 2 - Jam (0-23):</strong> Diperlukan format 24 jam.',
        '<strong>Kolom 3 - Hari dalam Sebulan (1-31):</strong> Hari kalender tertentu.',
        '<strong>Kolom 4 - Bulan (1-12):</strong> Dari Januari hingga Desember.',
        '<strong>Kolom 5 - Hari dalam Seminggu (0-6):</strong> 0 biasanya adalah hari Minggu.',
      ],
    },
    {
      type: 'title',
      text: 'Operator khusus dan kesalahan umum',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Gunakan garis miring <code>/</code> untuk menentukan langkah: <code>*/5</code> pada menit berarti berjalan setiap 5 menit. Koma <code>,</code> membuat daftar (<code>1,3,5</code>) dan tanda hubung <code>-</code> menentukan rentang (<code>1-5</code>).',
    },
    {
      type: 'paragraph',
      html: '90% server berjalan pada <strong>UTC</strong>. Jika Anda menjadwalkan tugas pada pukul 02:00 pagi berdasarkan zona waktu lokal Anda, tugas tersebut mungkin berjalan pada waktu yang tidak terduga. Selain itu, Cron tidak memiliki akses ke <code>$PATH</code> Anda yang biasa — selalu gunakan jalur absolut seperti <code>/usr/local/bin/node</code>.',
    },
  ],
};

