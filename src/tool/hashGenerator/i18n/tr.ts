import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashGeneratorUI } from '../ui';

const slug = 'hash-olusturucu';
const title = 'Çevrimiçi Güvenlik Hash Oluşturucu';
const description = 'MD5, SHA-1, SHA-256 ve SHA-512 karmalarını anında hesaplayın. Geliştiriciler için ücretsiz, özel ve ultra hızlı güvenlik aracı. %100 İstemci Tarafı (Client-Side).';

const faqData = [
  {
    question: 'Hash nedir ve ne için kullanılır?',
    answer: 'Hash (karma), bir metin veya dosyanın benzersiz bir dijital parmak izidir. Verilerin tahrif edilmediğini doğrulamak ve parolaları güvenli bir şekilde saklamak için kullanılır.',
  },
  {
    question: 'Bu çevrimiçi oluşturucuyu kullanmak güvenli mi?',
    answer: 'Evet, tamamen güvenlidir. Diğer sitelerin aksine, karma işlemini doğrudan tarayıcınızda gerçekleştiriyoruz. Verileriniz asla herhangi bir sunucuya gönderilmez.',
  },
  {
    question: 'Hangi hash algoritmasını seçmeliyim?',
    answer: 'Modern güvenlik ve anahtar depolama için SHA-256 veya SHA-512\'yi öneriyoruz. MD5 ve SHA-1 yalnızca eski sistemlerle uyumluluk için kullanılmalıdır.',
  },
  {
    question: "'Tuz' (Salt) eklemek ne anlama gelir?",
    answer: 'Salt, metninizi benzersiz kılmak ve sözlük saldırıları yoluyla kırılmasını çok daha zor hale getirmek için metninizle karıştırılan ekstra bir dizedir.',
  },
];

const howToData = [
  { name: 'Metni Girin', text: 'Karma oluşturmak istediğiniz metni giriş kutusuna yazın veya yapıştırın.' },
  { name: 'Güvenliği Yapılandırın', text: 'İsteğe bağlı bir Salt ekleyin veya daha fazla sağlamlık için işlem turu sayısını artırın.' },
  { name: 'Sonuçları Alın', text: 'Siz yazarken çeşitli karmalar (MD5, SHA vb.) gerçek zamanlı olarak hesaplanır.' },
  { name: 'Hash\'i Kopyalayın', text: 'Panonunuza kaydetmek için her algoritmanın yanındaki kopyalama simgesine tıklayın.' },
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
  inLanguage: 'tr',
};

const ui: HashGeneratorUI = {
  labelInput: 'Giriş metni',
  placeholderInput: 'Karmalarını hesaplamak için buraya metin yazın veya yapıştırın...',
  labelSalt: 'Salt (İsteğe Bağlı)',
  placeholderSalt: 'Güvenlik tohumu...',
  labelRounds: 'Turlar (Stretch)',
  copyMd5: 'MD5 Kopyala',
  copySha1: 'SHA-1 Kopyala',
  copySha256: 'SHA-256 Kopyala',
  copySha512: 'SHA-512 Kopyala',
};

export const content: ToolLocaleContent<HashGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Hashing Üzerine Teknik Kaynaklar',
  bibliography: [
    { name: 'MDN Web Docs: SubtleCrypto.digest() API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'IETF: The MD5 Message-Digest Algorithm (RFC 1321)', url: 'https://datatracker.ietf.org/doc/html/rfc1321' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Kriptografik Hash Nedir?', level: 2 },
    {
      type: 'paragraph',
      html: 'Bir <strong>kriptografik hash</strong>, herhangi bir miktarda veriyi sabit uzunlukta bir dizeye dönüştüren matematiksel bir fonksiyondur. Aynı giriş her zaman aynı çıkışı üretir, ancak girişteki herhangi bir minimal değişiklik tamamen farklı bir karma oluşturur.',
    },
    { type: 'title', text: 'Mevcut algoritmalar', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>MD5 (128 bit):</strong> Hızlı ve yaygın olarak desteklenir. Parolalar için güvensiz kabul edilir ancak kritik olmayan ortamlarda dosya bütünlüğü kontrolleri için kullanışlıdır.',
        '<strong>SHA-1 (160 bit):</strong> 2017\'den beri kritik güvenlik kullanımları için kullanımdan kaldırılmıştır. Hala eski sistemlerde mevcuttur.',
        '<strong>SHA-256 (256 bit):</strong> Çoğu uygulama için mevcut standarttır. Bitcoin, TLS ve kod imzalama işlemlerinde kullanılır.',
        '<strong>SHA-512 (512 bit):</strong> SHA-2\'nin daha uzun varyantıdır, maksimum çakışma direnci gerektiğinde idealdir.',
      ],
    },
    { type: 'title', text: 'Salt ve Key Stretching', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>Salt</strong> (tuz), hash işleminden önce metne eklenen rastgele bir dizedir ve aynı iki girişin farklı karmalar üretmesini sağlar. <strong>Key Stretching</strong> (turlar), kaba kuvvet (brute-force) saldırılarına karşı zorlaştırmak için karma işlevini birden çok kez uygular.',
    },
    { type: 'title', text: 'Tam gizlilik: %100 İstemci Tarafı', level: 3 },
    {
      type: 'paragraph',
      html: 'Bu araç, SHA için tarayıcının <strong>Web Crypto API</strong>\'sini ve MD5 için saf bir TypeScript uygulamasını kullanır. Tüm işlemler yerel olarak gerçekleşir: verileriniz asla cihazınızdan ayrılmaz.',
    },
  ],
};
