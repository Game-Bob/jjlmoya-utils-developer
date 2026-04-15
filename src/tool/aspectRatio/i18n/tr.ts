import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AspectRatioUI } from '../ui';

const slug = 'en-boy-orani-hesaplayici';
const title = 'Piksel Cinsinden En Boy Oranı Hesaplayıcı. Çevrimiçi Oranlar';
const description =
  'Grafiklerin bozulmasını önlemek için tam oranı koruyarak yeni görüntü, video ve web tasarım çözünürlüklerini hesaplayın. 16:9, 4:3, 21:9 ve özel formatları destekler.';

const faqData = [
  {
    question: 'En Boy Oranı (Aspect Ratio) Nedir?',
    answer:
      'En Boy Oranı, bir görüntünün veya ekranın genişliği ile yüksekliği arasındaki geometrik ilişkiyi tanımlar. İki sayının iki nokta üst üste ile ayrılmasıyla temsil edilir (örneğin 16:9) ve genişliğe bağlı olarak yüksekliğin orantılı olarak nasıl değiştiğini gösterir.',
  },
  {
    question: 'Doğru oranları korumak neden önemlidir?',
    answer:
      'En Boy Oranı\'nın göz ardı edilmesi, basık veya gerilmiş görüntülere, videolarda beklenmedik siyah bantlara (letterboxing) ve farklı ekran boyutlarında düzeni bozulan web bileşenlerine neden olur. Doğru oranları korumak, profesyonel bir görünüm için anahtardır.',
  },
  {
    question: 'Belirli bir oranla genişlikten yükseklik nasıl hesaplanır?',
    answer:
      'Formül şöyledir: Yükseklik = Genişlik × (Oran Yüksekliği / Oran Genişliği). Örneğin, 16:9 oranına sahip 1280 piksel genişlik için yükseklik şöyle olacaktır: 1280 × (9/16) = 720 piksel.',
  },
  {
    question: 'YouTube videoları için standart En Boy Oranı nedir?',
    answer:
      '16:9, YouTube ve çoğu modern video platformu için standart orandır. 1280×720 (HD), 1920×1080 (Full HD) veya 3840×2160 (4K UHD) gibi çözünürlüklere karşılık gelir.',
  },
  {
    question: 'Dikey sosyal medya videoları hangi En Boy Oranını kullanır?',
    answer:
      '9:16, geniş ekran formatının tam tersidir. TikTok, Instagram Reels ve YouTube Shorts\'un yerel oranıdır ve içeriğin dikey tutulan bir cep telefonunda tüketilmesinden kaynaklanır.',
  },
];

const howToData = [
  {
    name: 'Orijinal oranı girin',
    text: 'Korumak istediğiniz oranın genişlik ve yükseklik değerlerini girin (örneğin geniş ekran için 16 ve 9) veya hazır ayarlardan birini seçin.',
  },
  {
    name: 'Ölçeği ayarlayın',
    text: '"Gerçek Ölçek" bölümünde genişlik veya yükseklik değerini değiştirin. Araç, oranı korumak için karşı değeri otomatik olarak hesaplayacaktır.',
  },
  {
    name: 'Önizlemeyi kontrol edin',
    text: 'Önizleme paneli, basitleştirilmiş oran ve hesaplanan çözünürlükle birlikte ortaya çıkan şekli orantılı ölçekte gösterir.',
  },
  {
    name: 'Projenizde uygulayın',
    text: 'CSS\'inizde (aspect-ratio: 16 / 9), video dışa aktarımında veya tasarım aracınızın ayarlarında kullanmak üzere hesaplanan değerleri kopyalayın.',
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

const ui: AspectRatioUI = {
  labelConfig: 'Yapılandırma',
  labelRatio: 'Orijinal Oran',
  labelWidth: 'Genişlik',
  labelHeight: 'Yükseklik',
  labelScale: 'Gerçek Ölçek',
  labelPixelWidth: 'Piksel (Genişlik)',
  labelPixelHeight: 'Piksel (Yükseklik)',
  labelPreview: 'Orantılı Önizleme',
  labelStatus: 'Mükemmel Oran',
  labelOffline: '%100 Çevrimdışı Araç',
};

export const content: ToolLocaleContent<AspectRatioUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Referanslar ve Belgeler',
  bibliography: [
    {
      name: 'MDN Web Docs: aspect-ratio (CSS)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio',
    },
    {
      name: 'Wikipedia: Aspect ratio',
      url: 'https://tr.wikipedia.org/wiki/Görüntü_oranı',
    },
    {
      name: 'W3C: CSS Box Sizing Level 4',
      url: 'https://www.w3.org/TR/css-sizing-4/#aspect-ratio',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'En Boy Oranı Nedir?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Grafik tasarım, fotoğrafçılık ve frontend geliştirmede <strong>En Boy Oranı</strong> (Aspect Ratio), bir görüntünün, ekranın veya kapsayıcının genişliği ile yüksekliği arasındaki geometrik ilişkiyi tanımlar. Tipik olarak iki noktalı bir sayı dizisiyle temsil edilir (örneğin <code>16:9</code>) ve genişliğe yanıt olarak yüksekliğin orantılı olarak nasıl arttığını gösterir.',
    },
    {
      type: 'paragraph',
      html: 'En boy oranlarının yanlış yönetilmesi; basık fotoğrafların, beklenmedik kırpılmalı videoların (letterboxing) veya mobilden ultra geniş monitörlere kadar farklı cihazlarda düzeni bozulan web bileşenlerinin yaygın bir nedenidir.',
    },
    {
      type: 'title',
      text: 'Sektördeki Yaygın Oranlar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Disiplininize bağlı olarak, sınırlı sayıda küresel standart oranla sürekli olarak karşılaşacaksınız:',
    },
    {
      type: 'list',
      items: [
        '<strong>16:9 (Geniş Ekran):</strong> Modern monitörler, TV\'ler, YouTube kayıtları veya standart yüksek çözünürlüklü (1920×1080 veya 4K gibi) çözünürlükler için mutlak hakim formattır.',
        '<strong>9:16 (Dikey):</strong> Yerel mobil içerik tüketiminden (TikTok, Instagram Reels, YouTube Shorts) kaynaklanmıştır. Geniş ekran videolarla tam olarak aynı orandır, ancak cihazın fiziksel olarak döndürülmesiyle oluşur.',
        '<strong>4:3 (Klasik / Nostaljik):</strong> Eski televizyonlarda ve monitörlerde veya analog ve özel dijital kamera modellerinde bulunur. Hafif kare görünümü dikkati doğrudan merkezi kompozisyon eksenine çeker.',
      ],
    },
    {
      type: 'title',
      text: 'Web Geliştirme ve CSS aspect-ratio Özelliği',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Eskiden CSS\'de, sayfa yüklenirken korkunç Kümülatif Düzen Kaymasını (CLS) önlemek amacıyla YouTube iframe\'leri veya kapak görselleri için dinamik alanlar ayırmak için <strong>Padding Hack</strong> (örneğin <code>padding-top: %56,25</code> eklemek gibi) kullanan karmaşık matematiksel sistemler kullanılıyordu.',
    },
    {
      type: 'paragraph',
      html: 'Günümüzde tüm modern düzenler <code>aspect-ratio: 16 / 9;</code> gibi özellikleri doğrudan uygulayarak semantik kod sağlar ve tarayıcının Grid veya Flexbox aracılığıyla tanımlanan orijinal genişlikten eksik boyutu otomatik olarak türetmesine olanak tanır.',
    },
    {
      type: 'paragraph',
      html: 'Bu yerel piksel hesaplayıcı, tasarım gücünü anında ölçeklendirme hesaplamasına aktararak çıktılarınızı feci yanlış yapılandırmalardan koruyacaktır.',
    },
  ],
};
