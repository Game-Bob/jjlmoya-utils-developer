import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgToCssUI } from '../ui';

const slug = 'svg-css-donusturucu';
const title = 'Ücretsiz Çevrimiçi SVG CSS ve Data URI Dönüştürücü';
const description =
  'SVG ikonlarınızı ve vektörlerinizi CSS koduna (Background veya Mask) veya sıkıştırılmış Data URI\'ye dönüştürün. Harici HTTP isteklerini ortadan kaldırarak web sitenizin performansını optimize edin.';

const faqData = [
  {
    question: 'Data URI kullanmak mı yoksa harici bir .svg dosyası kullanmak mı daha iyidir?',
    answer:
      'Kullanım durumuna bağlıdır. Data URI\'lar HTTP isteklerini ortadan kaldırır (küçük ikonlar için idealdir), ancak CSS dosya boyutunu artırır. Büyük veya ayrıntı açısından zengin illüstrasyonlar için harici bir dosya tercih edilir.',
  },
  {
    question: 'CSS\'e gömülü bir SVG\'nin rengini nasıl değiştirebilirim?',
    answer:
      "En iyi yol 'mask-image' kullanmaktır. SVG'yi bir maske olarak tanımlayarak, :hover durumlarında bile rengini dinamik olarak değiştirmek için 'background-color' kullanabilirsiniz.",
  },
  {
    question: 'Hangi tarayıcılar CSS Maskelerini destekliyor?',
    answer:
      'Tüm modern tarayıcılar (Chrome, Firefox, Safari, Edge) tam desteğe sahiptir. Eski tarayıcılar için yaygın olarak -webkit- önekleri kullanılır.',
  },
  {
    question: 'Data URI kullanımı SEO\'yu etkiler mi?',
    answer:
      'Evet, olumlu yönde. Sayfayı oluşturmak için gereken istek sayısını azaltarak yükleme süresini (LCP) ve Core Web Vitals puanlarını iyileştirir.',
  },
  {
    question: 'React veya Tailwind gibi frameworklerde kullanabilir miyim?',
    answer:
      'Kesinlikle! Oluşturulan kodu kopyalayıp .css dosyalarınızda veya hatta Tailwind CSS\'de rastgele değerler olarak kullanabilirsiniz.',
  },
];

const howToData = [
  {
    name: 'SVG\'yi Yapıştırın',
    text: 'SVG dosyanızın kaynak kodunu kopyalayın ve soldaki metin alanına yapıştırın.',
  },
  {
    name: 'Çıktı türünü seçin',
    text: 'Arka Plan Resmi (statik arka planlar için), CSS Maskesi (dinamik renge sahip ikonlar için) veya Yalnızca Data URI (doğrudan kullanım için) arasında seçim yapın.',
  },
  {
    name: 'Sonucu kopyalayın',
    text: 'Oluşturulan CSS kodunu panonuza almak için "Kopyala"ya tıklayın.',
  },
  {
    name: 'Projenize uygulayın',
    text: 'Kodu stil sayfanıza veya CSS bileşeninize yapıştırın. Maskeler için, ikon rengini tanımlamak üzere background-color da ekleyin.',
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

const ui: SvgToCssUI = {
  labelPasteTitle: 'SVG\'yi Yapıştır',
  labelInputArea: 'SVG Kaynak Kodu',
  labelPreviewOriginal: 'Orijinal Önizleme',
  labelResultTitle: 'CSS Sonucu',
  labelPreviewApplied: 'Uygulanan Sonuç',
  tabBackground: 'Arka Plan Resmi',
  tabMask: 'CSS Maske / Webkit',
  tabUri: 'Yalnızca Data URI',
  btnCopy: 'Kopyala',
  btnCopied: 'Kopyalandı!',
  placeholder: '<svg xmlns="http://www.w3.org/2000/svg" ...',
};

export const content: ToolLocaleContent<SvgToCssUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Referanslar ve Dokümantasyon',
  bibliography: [
    {
      name: 'CSS-Tricks: Background Olarak SVG Kullanımı',
      url: 'https://css-tricks.com/using-svg/',
    },
    {
      name: 'MDN Web Docs: mask-image',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image',
    },
    {
      name: 'MDN Web Docs: background-image',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-image',
    },
    {
      name: 'W3C: CSS Masking Module Level 1',
      url: 'https://www.w3.org/TR/css-masking-1/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Neden SVG\'yi CSS Data URI\'ye Dönüştürmelisiniz?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Modern web geliştirmede, performansın ve kaynak yüklemesinin optimize edilmesi esastır. İkonları <strong>Data URI\'lar</strong> aracılığıyla doğrudan CSS\'e gömmek, gereksiz HTTP isteklerini ortadan kaldırır, gecikmeyi azaltır ve Etkileşim Süresini (TTI) iyileştirir.',
    },
    {
      type: 'paragraph',
      html: 'Bu araç, <code>&lt;svg&gt;</code> vektör kodunu, tarayıcının arka plan resmi veya kırpma maskesi olarak yorumlayabileceği kodlanmış bir metin dizisine dönüştürürken vektörlerin karakteristik özelliği olan sonsuz ölçeklenebilirliği ve keskinliği korur.',
    },
    {
      type: 'title',
      text: 'Temel Teknik Avantajlar',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Sıfır HTTP İsteği:</strong> Grafiği <code>.css</code> dosyalarınıza gömerek, tarayıcının ek harici dosyalar indirmesine gerek kalmaz.',
        '<strong>CSS Maskesi ile Özelleştirme:</strong> <code>mask-image</code> tekniğini kullanarak, karmaşık bir vektör ikonunun rengini sadece <code>background-color</code> kullanarak değiştirebilirsiniz.',
        '<strong>Anında Oluşturma:</strong> Kritik görsel kaynaklar stil sayfası indirilir indirilmez hazır olduğundan içerik titremesini (FOUC) önlersiniz.',
      ],
    },
    {
      type: 'title',
      text: 'CSS Maskeleri vs Arka Planlar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pek çok geliştirici vektörleri gömmek için sadece <code>background-image</code> kullanır, ancak bunun bir sınırı vardır: SVG rengini CSS\'ten dinamik olarak değiştiremezsiniz.',
    },
    {
      type: 'paragraph',
      html: 'Aracımız <strong>CSS Maskeleri</strong> için kod oluşturmayı destekler. Oluşturulan Data URI ile bir <code>mask-image</code> uygulayarak ikon bir şablon görevi görür ve öğenin <code>background-color</code> özelliğinin son ikon rengini tanımlamasına olanak tanır. Astro, Next.js veya herhangi bir modern framework\'te ikonları yönetmenin en profesyonel ve esnek yolu budur.',
    },
  ],
};
