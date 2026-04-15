import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlEncoderDecoderUI } from '../ui';

const slug = 'url-kodlayici-ve-cozucu';
const title = 'Çevrimiçi URL Kodlayıcı ve Çözücü';
const description =
  'Herhangi bir bağlantıdaki özel karakterleri güvenli formata (Percent-Encoding) dönüştürün veya anında ve yerel olarak orijinal okunabilir durumuna geri döndürün.';

const faqData = [
  {
    question: 'Bir URL\'de hangi karakterler kodlanır?',
    answer:
      'URL\'ler için ASCII standardında izin verilmeyen tüm karakterler kodlanır: boşluklar, aksanlı harfler, &, =, +, #, ?, / gibi semboller ve diğerleri. Örneğin, bir boşluk %20 olur ve ñ %C3%B1 olur.',
  },
  {
    question: 'encodeURI ve encodeURIComponent arasındaki fark nedir?',
    answer:
      'encodeURI tam bir URL\'yi kodlar ve / ve ? gibi ayrılmış karakterleri olduğu gibi bırakır. encodeURIComponent, ayrılmış karakterler dahil tüm özel karakterleri kodlar; bu da onu bireysel sorgu parametresi değerlerini kodlamak için ideal kılar.',
  },
  {
    question: 'URL\'mde neden boşluk yerine %20 var?',
    answer:
      'HTTP protokolü URL\'lerde boşluklara izin vermez. %20, ASCII standardına göre bir boşluğun Yüzde-Kodlama (Percent-Encoding) temsilidir. Bazı sistemler alternatif olarak + işaretini kullanır, ancak %20 en evrensel ve güvenli olanıdır.',
  },
  {
    question: 'Bu aracı özel URL\'lerle kullanmak güvenli mi?',
    answer:
      'Evet, tamamen güvenli. Tüm işlemler yerel JavaScript (encodeURIComponent/decodeURIComponent) kullanılarak tarayıcınızda gerçekleşir. URL\'lerinizin veya parametrelerinizin hiçbiri herhangi bir harici sunucuya gönderilmez.',
  },
];

const howToData = [
  {
    name: 'Ham metni yapıştırın',
    text: 'URL veya metin dizinizi üstteki "Ham Metin (Okunabilir)" alanına yazın veya yapıştırın.',
  },
  {
    name: 'Kodlayın veya çözün',
    text: 'Metni güvenli Yüzde-Kodlama formatına dönüştürmek için "URL\'yi Kodla"ya tıklayın veya kodlanmış bir URL\'yi okunabilir formuna geri döndürmek için "Çöz"e tıklayın.',
  },
  {
    name: 'Sonucu kopyalayın',
    text: 'Sonucu panonuza almak için ilgili alanın "Kopyala" düğmesini kullanın.',
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

const ui: UrlEncoderDecoderUI = {
  labelRaw: 'Ham Metin (Okunabilir)',
  labelEncoded: 'Formatlanmış URL (Kodlanmış)',
  btnClear: 'Temizle',
  btnCopy: 'Kopyala',
  btnCopied: 'Kopyalandı!',
  btnEncode: 'URL\'yi Kodla',
  btnDecode: 'Çöz',
  placeholderRaw: 'https://example.com/search?q=kırmızı ayakkabı&size=38',
  placeholderEncoded: 'https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dk%C4%B1rm%C4%B1z%C4%B1%20ayakkab%C4%B1%26size%3D38',
};

export const content: ToolLocaleContent<UrlEncoderDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Referanslar ve Dokümantasyon',
  bibliography: [
    {
      name: 'MDN Web Docs: encodeURIComponent()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent',
    },
    {
      name: 'IETF RFC 3986: URI Generic Syntax',
      url: 'https://datatracker.ietf.org/doc/html/rfc3986',
    },
    {
      name: 'W3C: URL Living Standard',
      url: 'https://url.spec.whatwg.org/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'URL Kodlama Nedir?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'İnternette gezinirken veya sunuculara istek gönderirken, bir URL\'yi (Uniform Resource Locator) basitçe bir "web adresi" olarak düşünmek yaygındır. Ancak internet protokolü, URL\'lerin yalnızca çok kısıtlı bir <strong>standart ASCII</strong> karakter seti kullanılarak iletilebileceğini belirtir.',
    },
    {
      type: 'paragraph',
      html: 'URL; boşluk, aksanlı harfler veya artı (<code>+</code>) veya eşittir (<code>=</code>) işaretleri gibi özel parametreler içeriyorsa ne olur? Sistemlerin geçersiz karakterleri okumaya çalışırken çökmesini önlemek için, bunların <strong>Yüzde-Kodlama</strong> (Percent-Encoding) kullanılarak güvenli uyumlu formlarına çevrilmesi gerekir.',
    },
    {
      type: 'title',
      text: 'Yüzde-Kodlama Nasıl Çalışır?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bu aracı kullandığınızda, algoritma herhangi bir "güvensiz" karakteri (boşluk veya ñ gibi aksanlı bir harf gibi) alır ve onu bir yüzde işareti <code>%</code> ile ardından UTF-8 standardındaki değerine karşılık gelen iki onaltılık basamakla değiştirir.',
    },
    {
      type: 'list',
      items: [
        '<strong>Temel Örnek:</strong> Basit bir boşluk, güvenli eşdeğeriyle değiştirilecektir: <code>%20</code>.',
        '<strong>Genişletilmiş Destek:</strong> <code>ğ</code> harfi <code>%C4%9F</code> olur ve <code>ş</code>, <code>%C5%9F</code> olur.',
      ],
    },
    {
      type: 'title',
      text: 'API\'lerde ve GET İsteklerinde Önemi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Entegrasyonlar geliştirirken tipik bir hata, URL parametrelerine ham bir dize geçirmektir. Arka ucunuza <code>tişört&mavi</code> ham dizesini eklerseniz (<code>/search?q=tişört&mavi</code>), sunucu <code>mavi</code>\'yi yeni bir parametre olarak yorumlayacak ve tüm mantığı bozacaktır.',
    },
    {
      type: 'paragraph',
      html: 'Bu araç, yerel tarayıcınızda %100 yürütme ile temiz, otomatik hesaplamaları garanti eder. URL dizelerinizin hiçbiri üçüncü taraf sunuculara iletilmez, böylece belirteçlerinizin (token) ve analitik parametrelerinizin gizliliği sağlanır.',
    },
  ],
};
