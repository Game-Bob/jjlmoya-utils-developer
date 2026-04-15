import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LlmCostCalculatorUI } from '../ui';

const slug = 'llm-maliyet-hesaplayicisi';
const title = 'LLM Maliyet Hesaplayıcısı. AI Model Fiyatlandırma Tahmincisi';
const description =
  'LLM API çağrılarının maliyetini tahmin etmek için ücretsiz çevrimiçi araç. GPT-4o, Claude, Gemini, Llama ve daha fazlasını milyonda tokencik gerçek fiyatlarla karşılaştırın.';

const faqData = [
  {
    question: 'LLM API maliyeti nasıl hesaplanır?',
    answer:
      'LLM API\'leri giriş token\'ları (sizin prompt\'unuz) ve çıkış token\'ları (yanıt) için ayrı ücret alırlar. İstek başına toplam maliyet: (giriş token\'ları × giriş fiyatı + çıkış token\'ları × çıkış fiyatı) / 1.000.000. Aylık toplam maliyeti elde etmek için istek sayısıyla çarpın.',
  },
  {
    question: 'Token\'lar nedir ve sözcüklerle nasıl ilişkili olur?',
    answer:
      'Token, bir dil modelinin işlediği temel metin birimidir. Ortalama olarak, 1 token İngilizce\'de yaklaşık 0,75 sözcüğe eşittir, bu nedenle 1.000 token ≈ 750 sözcük. Fiyatlar milyon token başına belirtilir ($/1M), bu da tüm sağlayıcılarda standart fiyatlandırma birimidir.',
  },
  {
    question: 'Çıkış token\'ları neden giriş token\'larından daha pahalıdır?',
    answer:
      'Metin oluşturma (çıkış), modelin her token\'u sırayla hesaplamasını gerektirir ve bu, girişi okumaktan hesaplamalar açısından daha yoğundur. Çoğu sağlayıcı çıkış token\'ları için giriş token\'larından 3–5 kat daha fazla ücret alır.',
  },
  {
    question: 'LLM API maliyetlerimi nasıl azaltabilirim?',
    answer:
      'Kalite gereksinimlerinizi karşılayan en küçük modeli kullanın. Mümkün olduğunda tekrarlanan prompt\'ları önbelleğe alın. Sistem prompt\'unu minimize edin ve gereksiz bağlamdan kaçının. Basit sınıflandırma veya çıkarma görevleri için GPT-4o mini veya Gemini Flash gibi daha küçük modeller önemli tasarruf sağlar.',
  },
];

const howToData = [
  {
    name: 'Bir model seçin',
    text: 'Kullanmayı planladığınız AI modelini gruplandırılmış açılır menüden seçin. Modeller sağlayıcı tarafından düzenlenmiştir.',
  },
  {
    name: 'Token sayılarını girin',
    text: 'Beklenen giriş token\'ları (sizin prompt\'unuz) ve çıkış token\'ları (yanıt) sayısını girin. Sözcük tahminleri her alanın altında görünür.',
  },
  {
    name: 'İstek sayısını ayarlayın',
    text: 'Kaç tane API çağrısı beklediğinizi girmek için kaydırıcı veya sayı giriş kullanın. Toplam maliyet gerçek zamanlı olarak güncellenir.',
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
  inLanguage: 'tr',
};

const ui: LlmCostCalculatorUI = {
  labelModel: 'LLM Modeli',
  labelInputTokens: 'Giriş Token\'ları',
  labelOutputTokens: 'Çıkış Token\'ları',
  labelRequests: 'İstek Sayısı',
  unitWords: 'sözcükler',
  labelCostPerRequest: 'İstek Başına Maliyet',
  labelTotal: 'Tahmini Toplam Maliyet',
  labelInput: 'Giriş',
  labelOutput: 'Çıkış',
};

export const content: ToolLocaleContent<LlmCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Sık Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Referanslar ve Fiyatlandırma Kaynakları',
  bibliography: [
    {
      name: 'OpenAI API Fiyatlandırması',
      url: 'https://openai.com/pricing',
    },
    {
      name: 'Anthropic API Fiyatlandırması',
      url: 'https://www.anthropic.com/pricing',
    },
    {
      name: 'Google AI Studio Fiyatlandırması',
      url: 'https://ai.google.dev/pricing',
    },
    {
      name: 'OpenAI Tokenizer',
      url: 'https://platform.openai.com/tokenizer',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'LLM API Fiyatlandırmasını Anlama',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Büyük Dil Modeli API\'leri zaman veya istek olmaktan ziyade token kullanımına göre ücret alırlar. Her API çağrısı iki maliyete sahiptir: <strong>giriş maliyeti</strong> (prompt\'unuzu işleme) ve <strong>çıkış maliyeti</strong> (yanıt oluşturma). Bu ayrımı anlamak, aylık faturanızı doğru şekilde tahmin etmenin anahtarıdır.',
    },
    {
      type: 'title',
      text: 'Giriş token\'ları vs çıkış token\'ları',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'Giriş token\'ları',
      html: '<p>Giriş token\'ları modele <strong>gönderilen</strong> her şeyi temsil eder: sistem prompt\'unuz, sohbet geçmişi ve kullanıcı mesajı. Model bunları paralel olarak işlediği için daha ucuzdurlar. 200 sözcüklük tipik bir sistem prompt\'u yaklaşık 267 giriş token\'ı maliyete sahiptir.</p>',
    },
    {
      type: 'card',
      title: 'Çıkış token\'ları',
      html: '<p>Çıkış token\'ları sırayla, teker teker oluşturulur ve bu onları hesaplamalar açısından daha pahalı hale getirir. Çoğu sağlayıcı çıkış token\'ları için <strong>3–5 kat daha fazla</strong> ücret alır. 300 sözcüklük bir yanıt yaklaşık 400 çıkış token\'ı üretir. Yanıtları kısa tutmak en etkili maliyet tasarrufu stratejilerinden biridir.</p>',
    },
    {
      type: 'title',
      text: 'Bütçeniz İçin Doğru Modeli Seçme',
      level: 3,
    },
    {
      type: 'tip',
      html: '<code>GPT-4o mini</code> veya <code>Gemini 1.5 Flash</code> gibi yetenekli bir orta katman modeliyle başlayın ve yalnızca kalite yetersizse yükseltin. Küçük ve büyük bir model arasındaki maliyet farkı 10–100× olabilir.',
    },
    {
      type: 'paragraph',
      html: 'Tüm görevler aynı model kalitesini gerektirmez. Sınıflandırma, çıkarma ve özet görevleri genellikle daha küçük, daha ucuz modellerde iyi performans gösterir. <code>claude-3-opus</code> veya <code>o1</code> gibi büyük sınır modelleri, kalite sonuçları doğrudan etkilediği karmaşık akıl yürütme görevleri için rezerv tutun.',
    },
  ],
};
