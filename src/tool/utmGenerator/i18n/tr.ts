import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UtmGeneratorUI } from '../ui';

const slug = 'utm-olusturucu';
const title = 'Google Analytics için UTM Parametre Oluşturucu';
const description = 'Dijital pazarlama kampanyalarınız için hassas izleme bağlantıları oluşturun. Google Analytics ve diğer analiz araçları için optimize edilmiştir.';

const faqData = [
  {
    question: 'UTM parametrelerini kullanmak SEO için kötü müdür?',
    answer: 'Hayır, kanonik (canonical) etiketler kullandığınız sürece sorun olmaz. Arama motorları UTM parametrelerinin analiz amaçlı olduğunu anlar ve yinelenen içerik oluşturmaz.',
  },
  {
    question: 'Dahili bağlantılar için UTM parametreleri kullanmalı mıyım?',
    answer: 'Hayır, asla. Dahili bağlantılardaki UTM etiketleri, Google Analytics gibi araçlarda kullanıcı oturumunu sonlandırarak trafik verilerinizi bozar.',
  },
  {
    question: 'Google Analytics, UTM\'deki büyük ve küçük harfleri ayırt eder mi?',
    answer: 'Evet. "google", "Google" ve "GOOGLE" farklı kaynaklar olarak değerlendirilecektir. Her zaman tutarlılığı koruyun, tercihen sadece küçük harf kullanın.',
  },
];

const howToData = [
  { name: 'URL\'yi girin', text: 'https:// dahil olmak üzere web sitenizin tam URL\'sini girin' },
  { name: 'Kaynağı tanımlayın', text: 'Trafiğin nereden geldiğini belirtin (google, facebook, newsletter vb.)' },
  { name: 'Mecrayı seçin', text: 'Kanal türünü seçin (cpc, e-posta, sosyal, organik vb.)' },
  { name: 'Kampanyanızı adlandırın', text: 'Pazarlama çabalarınızı gruplandırmak için tanımlanabilir bir ad atayın' },
  { name: 'Kopyalayın ve kullanın', text: 'Oluşturulan URL\'yi kopyalayın ve gönderilerinizde, reklamlarınızda veya e-posta imzalarınızda kullanın' },
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

const ui: UtmGeneratorUI = {
  labelUrl: 'Web sitesi URL\'si (ör. https://example.com) *',
  labelSource: 'Kampanya kaynağı (ör. google, newsletter) *',
  labelMedium: 'Kampanya mecrası (ör. cpc, e-posta)',
  labelCampaign: 'Kampanya adı (ör. yaz_teklifi)',
  labelTerm: 'Kampanya terimi (ör. ayakkabi_satin_al)',
  labelContent: 'Kampanya içeriği (ör. banner_ust)',
  labelGenerated: 'Oluşturulan URL:',
  btnCopy: 'Bağlantıyı Kopyala',
  btnCopied: 'Kopyalandı!',
  errorInvalid: 'Geçerli bir URL girin',
  errorInvalidUrl: 'Geçersiz URL',
};

export const content: ToolLocaleContent<UtmGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Referanslar',
  bibliography: [
    { name: 'Özel URL\'lerle kampanya verilerini toplama - Google Analytics Yardımı (2024)', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: 'Kampanya URL Etiketleme için En İyi Uygulamalar - VWO Blog (2023)', url: 'https://vwo.com/blog/utm-tagging-best-practices/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'UTM Oluşturucu: Google Analytics için İzleme Parametreleri', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>UTM</strong> parametreleri (Urchin Tracking Module), web trafiğini izlemek için bir URL\'nin sonuna eklenen metin etiketleridir. Oluşturucumuz, dijital pazarlama kampanyalarınız için izlenebilir bağlantılar oluşturmayı basitleştirir.',
    },
    { type: 'title', text: 'İzlenebilir Bir URL\'nin 5 Temel Taşı', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Kampanya Kaynağı:</strong> Arama motorunu, sosyal ağı veya trafik kaynağını tanımlar. Örnek: google, newsletter, facebook.',
        '<strong>Kampanya Mecrası:</strong> Pazarlama kanalını ifade eder. Örnek: cpc, e-posta, sosyal, banner, organik.',
        '<strong>Kampanya Adı:</strong> Kampanyanızın özel adı. Örnek: yaz_teklifi_2025, uygulama_lansmani_v2.',
        '<strong>Kampanya Terimi:</strong> Ücretli aramalar için, teklif verdiğiniz anahtar kelimeler. Örnek: spor_ayakkabi_satin_al.',
        '<strong>Kampanya İçeriği:</strong> A/B testleri için. Bir kampanya içindeki benzer öğeleri birbirinden ayırır. Örnek: header_v1, sidebar_v2.',
      ],
    },
    { type: 'title', text: 'UTM Etiketleme için En İyi Uygulamalar', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Harf duyarlılığı tutarlılığı:</strong> Araçlar "Google", "GOOGLE" ve "google"ı farklılaştırır. Yinelenen verileri önlemek için her zaman küçük harf kullanın.',
        '<strong>Boşluklardan kaçının:</strong> Boşluklar %20 olur. Bunun yerine tire (-) veya alt çizgi (_) kullanın.',
        '<strong>Dahili bağlantılarda kullanmayın:</strong> UTM izleme yalnızca harici trafik içindir. Dahili bağlantılarda kullanımı oturumu sonlandırır ve temel metrikleri bozar.',
        '<strong>Etiketlerinizi belgeleyin:</strong> Tutarsızlıkları önlemek için kullandığınız tüm kombinasyonların kaydını tutun.',
      ],
    },
  ],
};
