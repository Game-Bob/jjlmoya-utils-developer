import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonFormatterUI } from '../ui';

const slug = 'json-formatlayici-dogrulayici';
const title = 'Ücretsiz Çevrimiçi JSON Formatlayıcı ve Doğrulayıcı';
const description =
  'JSON kodunu formatlamak, doğrulamak ve onarmak için ücretsiz çevrimiçi araç. JSON\'u güzelleştirin ve düzenleyin. Sözdizimi hatalarını algılar ve kodun okunabilirliğini artırır.';

const faqData = [
  {
    question: 'Bu formatlayıcıyı kullanırken verilerim güvende mi?',
    answer:
      'Kesinlikle. Tüm işlemler %100 tarayıcınızda (İstemci Tarafı) gerçekleşir. JSON verileriniz asla herhangi bir sunucuya gönderilmez, bu da veri yapılarınız için tam gizlilik sağlar.',
  },
  {
    question: "'Geçersiz JSON' hatasına ne sebep olur?",
    answer:
      'Genellikle bir nesnenin sonundaki fazla virgüller (trailing commas), anahtarların etrafındaki eksik çift tırnaklar veya görünmeyen karakterlerden kaynaklanır. Aracımız hatanın tam satırını vurgular, böylece düzeltebilirsiniz.',
  },
  {
    question: 'Bozuk JSON\'u onarabilir mi?',
    answer:
      'Aracımız, gereksiz sondaki virgüller veya hatalı biçimlendirilmiş karakter kaçışları gibi yaygın hataları otomatik olarak düzeltmeye çalışır, böylece JSON RFC 8259 standardına göre geçerli hale gelir.',
  },
  {
    question: 'Çok büyük JSON dosyalarını destekliyor mu?',
    answer:
      'Evet, işleme motoru, tarayıcı arayüzünü kilitlemeden karmaşık veri yapılarını ve büyük dosyaları işlemek için optimize edilmiştir.',
  },
];

const howToData = [
  {
    name: 'Kodunuzu yapıştırın',
    text: 'Formatlanmamış veya küçültülmüş (minify) JSON\'unuzu ana metin alanına yapıştırın.',
  },
  {
    name: 'Doğrulayın ve Formatlayın',
    text: 'Sistem kodu otomatik olarak analiz eder, sözdizimi hatalarını vurgular ve okunabilirliği artırmak için girintileme uygular.',
  },
  {
    name: 'Bir stil seçin',
    text: 'Okunabilirlik veya alan tasarrufu ihtiyacınıza göre genişletilmiş (beautify) veya sıkıştırılmış (minify) format arasında seçim yapın.',
  },
  {
    name: 'Sonucu kopyalayın',
    text: 'Mükemmel şekilde doğrulanmış JSON\'u panonuza almak için kopyala düğmesine tıklayın.',
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
  inLanguage: 'tr',
};

const ui: JsonFormatterUI = {
  labelInput: 'Giriş (JSON)',
  labelOutput: 'Çıkış',
  btnMinify: 'Küçült (Minify)',
  btnBeautify: 'Güzelleştir (Beautify)',
  btnFix: 'Onarmayı Dene',
  btnCopy: 'Kopyala',
  statusWaiting: 'Giriş bekleniyor...',
  statusValid: 'Geçerli JSON',
  statusInvalid: 'Geçersiz JSON',
  toastCopied: 'Kopyalandı!',
  toastFixed: 'JSON onarıldı (Önizleme)',
  toastFixFailed: 'Otomatik olarak onarılamadı',
  placeholder: 'JSON\'unuzu buraya yapıştırın...',
};

export const content: ToolLocaleContent<JsonFormatterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Referanslar ve Standartlar',
  bibliography: [
    {
      name: 'RFC 8259 – The JavaScript Object Notation (JSON) Data Interchange Format (IETF)',
      url: 'https://datatracker.ietf.org/doc/html/rfc8259',
    },
    {
      name: 'ECMA-404 – The JSON Data Interchange Syntax (Ecma International)',
      url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-404/',
    },
    {
      name: 'JSON.org – JSON\'a Giriş',
      url: 'https://www.json.org/json-en.html',
    },
    {
      name: 'MDN Web Docs – JSON',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'JSON Doğrulama ve Formatlama',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'JSON (JavaScript Object Notation), web üzerinde veri alışverişi için fiili standarttır. Ancak katı sözdizimi, manuel olarak düzenlendiğinde onu insan hatalarına açık hale getirir.',
    },
    {
      type: 'paragraph',
      html: 'Bu araç, yapıyı doğrulamanıza, okunabilirliğini artırmak için kodu formatlamanıza ve yaygın sözdizimi hatalarını otomatik olarak onarmanıza olanak tanır.',
    },
    { type: 'grid', columns: 2 },
    {
      type: 'card',
      title: 'Onardığı Yaygın Hatalar',
      html: '<ul><li><strong>Tek Tırnak:</strong> JSON standardı çift tırnak gerektirir. Araç, <code>\'anahtar\': \'değer\'</code> yapısını <code>"anahtar": "değer"</code> haline getirir.</li><li><strong>Tırnaksız Anahtarlar:</strong> JavaScript tarzı nesne anahtarlarını algılar ve gerekli tırnakları ekler.</li><li><strong>Sondaki Virgüller:</strong> Nesnelerin veya dizilerin sonundaki, katı ayrıştırıcıyı (parser) bozan fazla virgülleri (trailing commas) kaldırır.</li></ul>',
    },
    {
      type: 'card',
      title: 'Özellikler',
      html: '<ul><li><strong>Sözdizimi Vurgulama:</strong> Hızlı okumayı kolaylaştırmak için anahtarları, dizeleri, sayıları ve boole değerlerini renklendirir.</li><li><strong>Gerçek Zamanlı Doğrulama:</strong> JSON\'un geçerli olup olmadığını anında belirtir veya özel ayrıştırma hatasını gösterir.</li><li><strong>Tam Gizlilik:</strong> İşlemler %100 tarayıcınızda gerçekleşir. Hiçbir veri harici sunuculara gönderilmez.</li></ul>',
    },
  ],
};

