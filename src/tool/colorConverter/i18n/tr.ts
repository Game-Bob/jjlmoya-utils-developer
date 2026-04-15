import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ColorConverterUI } from '../ui';

const slug = 'renk-donusturucu-rgb-hex-hsl';
const title = 'Online Renk Dönüştürücü RGB HEX ve HSL';
const description = 'RGB, HEX ve HSL arasında anında renk dönüşümü yapın. Tamamlayıcı renk uyumları oluşturun ve WCAG kontrastını analiz edin. %100 istemci tarafı ve özel.';

const faqData = [
  {
    question: 'RGB - HEX ve HSL renk dönüştürücü nasıl çalışır?',
    answer: 'Araç, Kırmızı, Yeşil ve Mavi (RGB) değerlerini alır ve bunları onaltılık (HEX) karşılıklarına veya Ton, Doygunluk, Parlaklık (HSL) değerlerine dönüştürmek için matematiksel algoritmalar kullanır. Tersine de çalışır.',
  },
  {
    question: 'Tasarımlarımda neden HEX yerine HSL kullanmalıyım?',
    answer: 'HSL formatı çok daha sezgiseldir. Tonu değiştirmeden doygunluğu veya parlaklığı ayarlamanıza olanak tanır, bu da armonik paletler veya düğme durumları (üzerine gelme, devre dışı) oluşturmayı çok daha kolaylaştırır.',
  },
  {
    question: 'Göreceli kontrast değeri nedir?',
    answer: 'Parlaklığına dayalı olarak bir arka plan üzerindeki metnin okunabilirliğini gösteren bir metriktir. Yüksek kontrast, görme engelli kişilerin WCAG erişilebilirlik yönergelerini izleyerek içeriği okuyabilmesini sağlar.',
  },
  {
    question: 'Bu online renk dönüştürücüyü kullanmak güvenli mi?',
    answer: 'Kesinlikle. %100 istemci tarafı olduğundan, renk verileriniz asla bilgisayarınızdan çıkmaz. Tüm işlemler doğrudan tarayıcınızda gerçekleşir, bu da gizliliği ve anında performansı garanti eder.',
  },
];

const howToData = [
  { name: 'Bir Renk Seçin', text: 'Kırmızı, Yeşil ve Mavi kaydırıcılarını kullanın veya metin alanına doğrudan bir HEX kodu yazın.' },
  { name: 'RGB Kanallarını Ayarlayın', text: 'Her kanalın yoğunluğunu değiştirmek ve gerçek zamanlı güncellemeyi görmek için kaydırıcıları hareket ettirin.' },
  { name: 'Formatı Kopyalayın', text: 'İhtiyacınız olan HEX, RGB veya HSL formatının yanındaki Kopyala düğmesine tıklayın.' },
  { name: 'Uyumları Keşfedin', text: 'Armoni renklerini (tamamlayıcı, benzer, üçlü) panoya kopyalamak için üzerlerine tıklayın.' },
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

const ui: ColorConverterUI = {
  labelPreview: 'Önizleme (HEX kopyalamak için tıklayın)',
  labelHarmonies: 'Renk Uyumları',
  labelR: 'Kırmızı',
  labelG: 'Yeşil',
  labelB: 'Mavi',
  labelComp: 'Tamam.',
  labelAna1: 'Benzer 1',
  labelAna2: 'Benzer 2',
  labelTri1: 'Üçlü 1',
  labelTri2: 'Üçlü 2',
  btnCopy: 'Kopyala',
  btnCopied: 'Kopyalandı',
  contrastLabel: 'Kontrast',
  clickToCopy: 'Kopyalamak için tıklayın',
};

export const content: ToolLocaleContent<ColorConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Renk ve Web Tasarım Kaynakları',
  bibliography: [
    { name: 'W3C: CSS Renk Dokümantasyonu', url: 'https://www.w3.org/TR/css-color-4/' },
    { name: 'MDN: HSL Renk Modeli Kılavuzu', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl' },
    { name: 'WebAIM: Kontrast ve Erişilebilirlik Kılavuzu', url: 'https://webaim.org/resources/contrastchecker/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Geliştiriciler için RGB - HEX ve HSL Renk Dönüştürücü', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>Frontend geliştirme</strong> ve <strong>UI/UX tasarımı</strong> dünyasında, renk yönetimi sürekli bir görevdir. <strong>Online renk dönüştürücümüz</strong>, değerleri <strong>HEX, RGB ve HSL</strong> arasında anında ve matematiksel bir hassasiyetle dönüştürmenize olanak tanır.',
    },
    { type: 'title', text: 'Renk Formatları: HEX, RGB ve HSL', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>HEX (Onaltılık):</strong> CSS için fiili standarttır. Kompakt ve kod içinde paylaşılması kolaydır.',
        '<strong>RGB (Kırmızı, Yeşil, Mavi):</strong> Eklemeli ışık sistemine dayanır. Kanalları doğrudan manipüle etmek veya RGBA ile şeffaflık uygulamak için idealdir.',
        '<strong>HSL (Ton, Doygunluk, Parlaklık):</strong> En sezgisel format. Harmonik paletler oluşturmak için tonu, doygunluğu ve parlaklığı ayarlayın.',
      ],
    },
    { type: 'title', text: 'Kontrast ve WCAG Erişilebilirliği', level: 3 },
    {
      type: 'paragraph',
      html: 'Hesaplayıcı, parlaklığa dayalı bir <strong>göreceli kontrast</strong> ölçümü içerir. Bu, <strong>WCAG</strong> yönergelerini karşılamanıza yardımcı olarak metninizin seçilen arka planlara karşı okunabilir olmasını sağlar.',
    },
    { type: 'title', text: 'Otomatik Renk Uyumları', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Tamamlayıcı:</strong> Renk çarkındaki zıt renk, maksimum kontrast için idealdir.',
        '<strong>Benzer:</strong> Yumuşak, armonik geçişler oluşturan bitişik renkler.',
        '<strong>Üçlü:</strong> Canlı, dengeli kompozisyonlar için eşit uzaklıktaki üç renk.',
      ],
    },
  ],
};
