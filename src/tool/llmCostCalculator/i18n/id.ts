import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LlmCostCalculatorUI } from '../ui';

const slug = 'kalkulator-biaya-llm';
const title = 'Kalkulator Biaya LLM. Estimator Harga Model AI';
const description =
  'Alat online gratis untuk memperkirakan biaya pemanggilan API model bahasa besar. Bandingkan GPT-4o, Claude, Gemini, Llama, dan lainnya dengan harga token nyata per satu juta token.';

const faqData = [
  {
    question: 'Bagaimana biaya API LLM dihitung?',
    answer:
      'API LLM mengenakan biaya terpisah untuk token input (prompt) dan token output (respons). Total biaya per permintaan adalah: (token input × harga input + token output × harga output) / 1.000.000. Kalikan dengan jumlah permintaan untuk mendapatkan total biaya bulanan.',
  },
  {
    question: 'Apa itu token dan bagaimana hubungannya dengan kata?',
    answer:
      'Token adalah satuan dasar teks yang diproses oleh model bahasa. Rata-rata, 1 token setara dengan sekitar 0,75 kata dalam bahasa Inggris, sehingga 1.000 token ≈ 750 kata. Harga dicantumkan per juta token ($/1M), yang merupakan satuan penetapan harga standar di semua penyedia.',
  },
  {
    question: 'Mengapa token output lebih mahal daripada token input?',
    answer:
      'Menghasilkan teks (output) mengharuskan model menghitung setiap token secara berurutan, yang secara komputasi lebih intensif daripada membaca input. Sebagian besar penyedia mengenakan biaya 3–5 kali lebih mahal untuk token output dibandingkan token input.',
  },
  {
    question: 'Bagaimana cara mengurangi biaya API LLM saya?',
    answer:
      'Gunakan model terkecil yang memenuhi persyaratan kualitas Anda. Terapkan cache untuk prompt yang berulang jika memungkinkan. Minimalkan panjang system prompt dan hindari konteks yang tidak perlu. Untuk tugas klasifikasi atau ekstraksi sederhana, model yang lebih kecil seperti GPT-4o mini atau Gemini Flash menawarkan penghematan yang signifikan.',
  },
];

const howToData = [
  {
    name: 'Pilih model',
    text: 'Pilih model AI yang ingin Anda gunakan dari dropdown yang dikelompokkan. Model diorganisir berdasarkan penyedia.',
  },
  {
    name: 'Masukkan jumlah token',
    text: 'Masukkan perkiraan jumlah token input (prompt Anda) dan token output (respons). Estimasi dalam kata muncul di bawah setiap kolom.',
  },
  {
    name: 'Tentukan jumlah permintaan',
    text: 'Gunakan slider atau kolom angka untuk memasukkan berapa banyak panggilan API yang Anda perkirakan. Total biaya diperbarui secara real time.',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'id',
};

const ui: LlmCostCalculatorUI = {
  labelModel: 'Model LLM',
  labelInputTokens: 'Token Input',
  labelOutputTokens: 'Token Output',
  labelRequests: 'Jumlah Permintaan',
  unitWords: 'kata',
  labelCostPerRequest: 'Biaya per Permintaan',
  labelTotal: 'Estimasi Total Biaya',
  labelInput: 'Input',
  labelOutput: 'Output',
};

export const content: ToolLocaleContent<LlmCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Referensi dan Sumber Harga',
  bibliography: [
    {
      name: 'Harga API OpenAI',
      url: 'https://openai.com/pricing',
    },
    {
      name: 'Harga API Anthropic',
      url: 'https://www.anthropic.com/pricing',
    },
    {
      name: 'Harga Google AI Studio',
      url: 'https://ai.google.dev/pricing',
    },
    {
      name: 'Tokenizer OpenAI',
      url: 'https://platform.openai.com/tokenizer',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Memahami penetapan harga API LLM',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'API model bahasa besar mengenakan biaya berdasarkan penggunaan token, bukan waktu atau jumlah permintaan. Setiap panggilan API memiliki dua komponen biaya: <strong>biaya input</strong> (memproses prompt Anda) dan <strong>biaya output</strong> (menghasilkan respons). Memahami perbedaan ini adalah kunci untuk memperkirakan tagihan bulanan Anda secara akurat.',
    },
    {
      type: 'title',
      text: 'Token input vs token output',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'Token input',
      html: '<p>Token input mewakili semua yang dikirimkan <strong>ke</strong> model: system prompt, riwayat percakapan, dan pesan pengguna. Lebih murah karena model memprosesnya secara paralel. System prompt tipikal sepanjang 200 kata menghasilkan sekitar 267 token input.</p>',
    },
    {
      type: 'card',
      title: 'Token output',
      html: '<p>Token output dihasilkan satu per satu secara berurutan, sehingga lebih intensif secara komputasi. Sebagian besar penyedia mengenakan biaya <strong>3–5× lebih mahal</strong> untuk token output. Respons 300 kata menghasilkan sekitar 400 token output. Menjaga respons tetap ringkas adalah salah satu strategi penghematan biaya yang paling efektif.</p>',
    },
    {
      type: 'title',
      text: 'Memilih model yang tepat sesuai anggaran',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Mulailah dengan model kelas menengah yang mumpuni seperti <code>GPT-4o mini</code> atau <code>Gemini 1.5 Flash</code> dan naik ke model yang lebih besar hanya jika kualitasnya belum memadai. Perbedaan biaya antara model kecil dan besar bisa mencapai 10–100×.',
    },
    {
      type: 'paragraph',
      html: 'Tidak semua tugas membutuhkan kualitas model yang sama. Tugas klasifikasi, ekstraksi, dan ringkasan sering kali berjalan baik dengan model yang lebih kecil dan lebih murah. Simpan model frontier besar seperti <code>claude-3-opus</code> atau <code>o1</code> untuk tugas penalaran kompleks yang kualitasnya berdampak langsung pada hasil.',
    },
  ],
};

