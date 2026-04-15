import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssSpecificityCalculatorUI } from '../ui';

const slug = 'css-ozgulesme-hesaplayici';
const title = 'CSS Özgüleşme Hesaplayıcı Çevrimiçi. Seçici Ağırlık Görselleştiricisi';
const description =
  'Herhangi bir CSS seçicinin özgüleşmesini ve tam ağırlığını hesaplayın. Hangi CSS kuralının kaskada galip geldiğini anlamak için görsel araç ve !important kullanımından kaçının.';

const faqData = [
  {
    question: 'CSS özgüleşmesi nedir?',
    answer:
      'Özgüleşme, tarayıcıların birden fazla kural yarıştığında hangi CSS kuralının bir öğeye uygulanacağını belirlemek için kullandığı algoritmadır. Sırasıyla ID\'leri, sınıfları/öznitelikleri/sözde sınıfları ve öğeleri/sözde öğeleri gösteren üç sütunlu bir skor (A, B, C) ile temsil edilir.',
  },
  {
    question: 'Bir sınıf özgüleşmede hiçbir zaman bir ID\'yi yenebilir mi?',
    answer:
      'Doğrudan hayır. Bir ID (1,0,0) her zaman herhangi sayıda sınıfı (0,N,0) yener çünkü özgüleşmenin sütunlar arasında taşması yoktur. Yüz sınıf (0,100,0) hiçbir zaman tek bir ID (1,0,0) yenmeyecektir.',
  },
  {
    question: 'İki seçicinin aynı özgüleşmesi varsa ne olur?',
    answer:
      'İki seçici tam olarak aynı ağırlığa sahip olduğunda, CSS dosyasında son olarak bildirilen seçici kazanır. Buna doğal kaskad sırası denir. Bu hesaplayıcı, bir beraberlik oluştuğunda sizi görsel olarak uyarır.',
  },
  {
    question: 'Neden !important kullanmak kötü bir uygulama olarak kabul edilir?',
    answer:
      'İçin !important yönergesi, doğal CSS kaskadını kırar bir bildirim başka bir kuralın üzerinde zorlar. Bu, büyük projelerde takip etmesi zor olan çatışmalar oluşturur. BEM gibi metodolojiler, özgüleşmeyi düz tutmanın hiçbir zaman !important gerekmemesini savunur.',
  },
];

const howToData = [
  {
    name: 'İlk seçiciyi girin',
    text: 'Sol metin alanına Seçici A yazın, örneğin: #header .nav-item > a. ID, Sınıf ve Element sayaçları anında güncellenecektir.',
  },
  {
    name: 'İkinci seçiciyi girin',
    text: 'Sağ metin alanına Seçici B yazın, örneğin: ul li.active a:hover. Ağırlıkların gerçek zamanlı olarak nasıl değiştiğini izleyin.',
  },
  {
    name: 'Sonucu okuyun',
    text: 'Hesaplayıcı kazanan seçici bloğunu yeşil bir başlıkla vurgulayacaktır. Her ikisi de bağlıysa, kaskad sırası tiebreaker olarak açıklayan bir bağlama mesajı görüntülenecektir.',
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

const ui: CssSpecificityCalculatorUI = {
  labelA: 'Seçici A',
  labelB: 'Seçici B',
  placeholderA: 'ör. #header .nav-item > a',
  placeholderB: 'ör. ul li.active a:hover',
  cardIds: 'ID',
  cardClasses: 'Sınıflar / Sözde sınıflar',
  cardElements: 'Öğeler',
  bannerWinner: 'Bu seçici kazanır!',
  msgTie: 'Her iki seçici de aynı ağırlığa sahiptir. Aynı öğe için rekabet ederlerse, CSS\'de <strong>son</strong> yazılan kazanır.',
};

export const content: ToolLocaleContent<CssSpecificityCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Sık Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Referanslar ve Belgeler',
  bibliography: [
    {
      name: 'MDN Web Docs: CSS Specificity',
      url: 'https://developer.mozilla.org/en/docs/Web/CSS/Specificity',
    },
    {
      name: 'W3C: Selectors Level 3 - Specificity',
      url: 'https://www.w3.org/TR/selectors-3/#specificity',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'CSS Özgüleşmesi Nedir?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'CSS özgüleşmesi, tarayıcıların belirli bir öğeye hangi özellik değerlerinin uygulanacağına karar vermek için kullandığı algoritmadır. Esasen tarayıcıya bir kuralın ne kadar "spesifik" olduğunu söyleyen matematiksel bir puandır.',
    },
    {
      type: 'paragraph',
      html: 'İki kuralın farklı özgüleşme düzeyleri varsa, yazıldıkları sıra ne olursa olsun yüksek ağırlığa sahip olan kazanır. Her ikisi de aynı ağırlığa sahipse, kaynak kodda en son bildirilen kazanır.',
    },
    {
      type: 'title',
      text: 'CSS Özgüleşmesi Nasıl Hesaplanır',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Özgüleşme, genellikle <strong>(A, B, C)</strong> olarak ifade edilen üç sütunlu bir ağırlık oluşturan üç kategoriye dayalı olarak hesaplanır:',
    },
    {
      type: 'list',
      items: [
        '<strong>A Sütunu (ID):</strong> Benzersiz tanımlayıcıların sayısını sayar. Örnek: <code>#header</code> A sütununda 1 olarak sayılır.',
        '<strong>B Sütunu (Sınıflar, Öznitelikler ve Sözde sınıflar):</strong> Tüm sınıfları (<code>.button</code>), öznitelikleri (<code>[type="text"]</code>) ve sözde sınıfları (<code>:hover</code>) sayar.',
        '<strong>C Sütunu (Öğeler ve Sözde öğeler):</strong> Tüm HTML öğelerini (<code>div</code>, <code>h1</code>) ve sözde öğeleri (<code>::before</code>) sayar.',
      ],
    },
    {
      type: 'title',
      text: 'Altın Kural: Sütunlar Arasında Taşma Yok',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Özgüleşmesi (0,50,0) olan bir kural <strong>asla</strong> bir kural (1,0,0) kadar spesifik <strong>olmayacak.</strong> <strong>Tek bir ID sonsuz sayıda sınıfı yener.</strong> Sütunlar hiçbir zaman birbirinin içine taşmaz.',
    },
    {
      type: 'title',
      text: 'BEM Mimarisi ile !important Sorunu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<code>!important</code> yönergesi özgüleşme kurallarının bir istisnasıdır. Kullanıldığında, bu bildirim otomatik olarak başka bir kuralı geçersiz kılar. Doğal kaskadı bozduğu için kötü bir uygulama olarak kabul edilir.',
    },
    {
      type: 'paragraph',
      html: 'Büyük projelerde özgüleşme savaşlarından kaçınmak için <strong>BEM</strong> gibi metodolojiler, özgüleşmeyi yapay olarak (0,1,0) düzeyinde tutmak için yalnızca tek derinlik sınıf seçicileri kullanmayı savunur.',
    },
  ],
};
