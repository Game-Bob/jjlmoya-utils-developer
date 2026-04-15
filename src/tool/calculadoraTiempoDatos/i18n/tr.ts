import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CalculadoraTiempoDatosUI } from '../ui';

const slug = 'veri-zamani-hesaplayici-web-hizi-etkisi';
const title = 'Veri Zamanı Hesaplayıcı: Web Hızının Etkisi';
const description = 'Kullanıcılarınızın 3G, 4G ve 5G bağlantılarında web sitenizin yüklenmesini beklerken ne kadar yaşam süresi kaybettiğini keşfedin. Sitenizin ağırlığının gerçek etkisini hesaplayın.';

const faqData = [
  {
    question: 'Web sitemin yükleme süresini bilmek neden önemlidir?',
    answer: 'Çünkü kullanıcı deneyimini, SEO\'yu ve dönüşümleri doğrudan etkiler. Google, her bir saniyelik gecikmenin dönüşümleri %7 oranında azalttığını belgelemiştir. Ayrıca, mobil ziyaretçilerin %53\'ü 3 saniyeden uzun süren bir sayfayı terk etmektedir.',
  },
  {
    question: 'Yaşam süresi kaybındaki bu küçük yüzdeler ne anlama geliyor?',
    answer: 'Bir kişinin toplam yaşam süresinin (yaklaşık 80 yıl veya 2,5 milyar saniye) sayfanızın yüklenmesini bekleyerek geçirdiği yüzdeyi temsil ederler. Her ne kadar bireysel olarak küçük görünseler de, milyonlarca kullanıcıyla çarpıldığında, çok büyük miktarlarda boşa harcanan insan zamanını temsil ederler.',
  },
  {
    question: 'Dünya genelinde ortalama bağlantı hızı nedir?',
    answer: 'Gelişmiş ülkelerde 4G standarttır. Ancak, gelişmekte olan ülkelerdeki milyonlarca kullanıcı hala 3G\'ye güvenmektedir. Bu nedenle sitenizi tüm bağlantı hızları için optimize etmek çok önemlidir.',
  },
  {
    question: 'Web sitemin ağırlığı ne kadar olmalı?',
    answer: 'Google, ana sayfanın tipik bir 4G bağlantısında 3 saniyeden kısa sürede yüklenmesini önerir. Bunun için bir sitenin ideal olarak 1-2 MB arasında ağırlığa sahip olması gerekir. Bununla birlikte, küresel ortalama 2-3 MB civarındadır.',
  },
  {
    question: 'Sitemin ağırlığını nasıl azaltabilirim?',
    answer: 'Başlıca stratejiler: görselleri optimize etmek (ağırlığın %50-80\'i), CSS ve JavaScript\'i küçültmek, lazy loading kullanmak, tarayıcı önbelleğini uygulamak ve bir CDN kullanmaktır. Görsel optimizasyonu genellikle en etkili faktördür.',
  },
  {
    question: 'Yükleme hızı Google sıralamasını etkiler mi?',
    answer: 'Evet, kesinlikle. Google, Core Web Vitals\'ı önemli sıralama faktörleri olarak görür. Daha yavaş bir site, benzer içeriğe sahip olsa bile daha hızlı bir siteden daha düşük sıralarda yer alacaktır.',
  },
];

const howToData = [
  { name: 'Sitenizin Ağırlığını Girin', text: 'Sayfa ağırlığınızı bulmak için tarayıcı geliştirici araçlarını veya WebPageTest\'i kullanın. Bu değeri MB cinsinden girin.' },
  { name: 'Yükleme Sürelerini Gözlemleyin', text: 'Hesaplayıcı, sitenizin 3G, 4G ve 5G\'de yüklenmesinin kaç saniye sürdüğünü gösterir. Gerçek zamanlar genellikle daha yüksektir.' },
  { name: 'Yaşam Süresi Etkisini Anlayın', text: '"Yaşam süresi" yüzdesi, birinin hayatının ne kadarının bekleyerek geçtiğini gösterir. Bunu optimize etmek için bir motivasyon olarak kullanın.' },
  { name: 'Optimize Edin ve Yeniden Hesaplayın', text: 'Optimize ettikten sonra tekrar ölçün ve yeniden hesaplayın. Küçük iyileştirmelerin nasıl büyük etkiler yarattığını görün.' },
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

const ui: CalculadoraTiempoDatosUI = {
  headerTitle: 'Ağlarda Kaybedilen Zaman',
  labelWebSize: 'Web sitesi ağırlığı (MB)',
  unit: 'MB',
  presetsLabel: 'GERÇEKÇİ ÖRNEKLER',
  labelSpeed: 'Bağlantı hızı',
  speedLabel3g: '3G',
  speedValue3g: '0,4 Mbps',
  speedLabel4g: '4G/LTE',
  speedValue4g: '10 Mbps',
  speedLabel5g: '5G',
  speedValue5g: '100+ Mbps',
  labelTimes: 'Günde kaç kez?',
  resultTitle: 'Sonuçlar',
  resultSingleLoad: 'Tek yükleme',
  resultDailyTotal: 'Günlük toplam',
  resultTimePerYear: 'yıllık bekleme süresi',
  resultLifeYears: 'yaşam süreniz boyunca',
  resultMessage: 'Yaklaşık 1 yıllık yaşam süresi kaybettiniz',
  copyMessage: 'Kopyalandı',
  preset3g: '3G',
  preset4g: '4G',
  preset5g: '5G',
};

export const content: ToolLocaleContent<CalculadoraTiempoDatosUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Web Optimizasyonu Üzerine Teknik Kaynaklar',
  bibliography: [
    { name: 'Google PageSpeed Insights', url: 'https://pagespeed.web.dev/' },
    { name: 'WebPageTest - Web Sitesi Hızını Analiz Edin', url: 'https://www.webpagetest.org/' },
    { name: 'Web.dev - Core Web Vitals', url: 'https://web.dev/vitals/' },
    { name: 'MDN - Web Performansı', url: 'https://developer.mozilla.org/en-US/docs/Web/Performance' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Web Sitesi Yükleme Hızı Neden Kritik?', level: 2 },
    {
      type: 'paragraph',
      html: 'Günümüzün dijital çağında web sitesi yükleme hızı bir lüks değil, bir ihtiyaçtır. Kullanıcıları elde tutma, arama sıralamalarını iyileştirme ve dönüşümleri maksimize etme söz konusu olduğunda her milisaniye önemlidir. Modern kullanıcılar sayfaların 3 saniyeden kısa sürede yüklenmesini beklerler.',
    },
    { type: 'title', text: 'Kullanıcı Deneyimi Üzerindeki Etkisi', level: 3 },
    {
      type: 'paragraph',
      html: 'Mobil ziyaretçilerin %53\'ü, sayfanın yüklenmesi 3 saniyeden uzun sürerse sayfayı terk eder. Dönüşüm oranları, her bir saniyelik ek gecikme için %7 oranında düşmektedir.',
    },
    { type: 'title', text: 'Bağlantı Hızlarını Anlamak', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>3G:</strong> 0,4 Mbps - Kırsal alanlarda ve gelişmekte olan ülkelerde yaygındır',
        '<strong>4G/LTE:</strong> 10 Mbps - Gelişmiş ülkelerde standarttır',
        '<strong>5G:</strong> 100+ Mbps - Kademeli olarak genişliyor, hala sınırlı',
      ],
    },
    { type: 'title', text: 'Site Ağırlığını Azaltma Stratejileri', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Görsel Optimizasyonu:</strong> Ağırlığın %50-80\'ini oluşturur. TinyPNG gibi araçlarla %40-60 oranında azaltılabilir.',
        '<strong>Küçültme (Minification):</strong> CSS ve JavaScript\'ten gereksiz kodları kaldırın. %30-50 tasarruf sağlayın.',
        '<strong>Lazy Loading:</strong> Görselleri yalnızca kullanıcılar onlara kaydırdığında yükleyin.',
        '<strong>Tarayıcı Önbelleği:</strong> Statik dosyaları kullanıcı tarayıcılarında önbelleğe alın.',
        '<strong>CDN:</strong> İçeriği coğrafi olarak yakın sunuculardan sunun.',
      ],
    },
    { type: 'title', text: 'Sonuç: Her Saniye Önemlidir', level: 2 },
    {
      type: 'paragraph',
      html: 'Web siteniz genellikle kullanıcıların markanız hakkında edindiği ilk izlenimdir. Yavaş bir site kullanıcıları hayal kırıklığına uğratır ve iş kaybına yol açar. Hızlı ve duyarlı bir site olumlu bir deneyim yaratır ve tüm metriklerinizi iyileştirir.',
    },
  ],
};
