import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DuplicateCssRemoverUI } from '../ui';

const slug = 'yinelenen-css-temizleyici';
const title = 'Yinelenen CSS Kaldırma Aracı. Stil Sayfalarınızı Birleştirin ve Temizleyin';
const description =
  'Yinelenen CSS kodunu temizlemek ve kaldırmak için ücretsiz araç. Gereksiz seçicileri birleştirir, cascade\'i korur ve tarayıcıda anında dosya boyutunu küçültür.';

const faqData = [
  {
    question: 'CSS seçicileri tekrarlandığında ne olur?',
    answer:
      'Aynı seçici birden fazla kez göründüğünde tarayıcı tüm kuralları uygular; ancak her özelliğin son tanımı öncekilerinin üzerine yazar. Bu durum, görsel sonuçta hiçbir iyileşme olmaksızın gereksiz yere şişirilmiş dosyalar ortaya çıkarır.',
  },
  {
    question: 'Yinelenenleri kaldırırken herhangi bir özellik kaybolur mu?',
    answer:
      'Hayır. Algoritma CSS cascade\'ini sıkı biçimde uygular: aynı seçici altında çakışan özellikler söz konusu olduğunda her zaman en son tanımlanan korunur. Her bloğa özgü özellikler tek bir birleşik seçici altında toplandır.',
  },
  {
    question: 'Küçültülmüş CSS veya yorumlu CSS ile çalışır mı?',
    answer:
      'Araç, işlem yapmadan önce CSS yorumlarını otomatik olarak kaldırır ve tek satırlık kodla sorunsuz çalışır. Gelişmiş iç içe geçme veya karmaşık at-rule içeren CSS için önce blokları ayırmanız önerilir.',
  },
  {
    question: 'CSS\'im bir sunucuya gönderiliyor mu?',
    answer:
      'Hayır. Tüm işlemler doğrudan tarayıcınızda yerel JavaScript aracılığıyla gerçekleşir. CSS\'inizin hiçbir parçası harici bir sunucuya iletilmez; kodunuzun gizliliği tamamen güvence altındadır.',
  },
];

const howToData = [
  {
    name: 'CSS\'inizi yapıştırın',
    text: 'Tekrarlayan seçiciler içeren CSS dosyanızın içeriğini kopyalayıp sol taraftaki "Kirli / Yinelenen CSS" alanına yapıştırın.',
  },
  {
    name: 'Temizlemeyi başlatın',
    text: '"CSS\'i Temizle ve Birleştir" düğmesine tıklayın. Araç tüm seçicileri tarar, özellikleri birleştirir ve gereksiz blokları kaldırır.',
  },
  {
    name: 'Sonuçları gözden geçirin ve kopyalayın',
    text: 'Elde edilen byte tasarrufunu kontrol edin, ardından "Kodu Kopyala" düğmesiyle optimize edilmiş CSS\'i projenizde hemen kullanmak üzere kopyalayın.',
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

const ui: DuplicateCssRemoverUI = {
  labelInput: 'Kirli / Yinelenen CSS',
  labelOutput: 'Temiz CSS',
  placeholderInput: '.btn { padding: 10px; color: red; }\n.btn { margin: 5px; color: blue; }',
  placeholderOutput: 'Optimize edilmiş ve birleştirilmiş CSS burada görünecek...',
  btnClean: 'CSS\'i Temizle ve Birleştir',
  btnCopy: 'Kodu Kopyala',
  btnCopied: 'Kopyalandı!',
  statBytesOriginal: 'Özgün Bayt',
  statBytesClean: 'Temiz Bayt',
  statSaving: 'Tasarruf',
};

export const content: ToolLocaleContent<DuplicateCssRemoverUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Sık Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynaklar ve Belgeler',
  bibliography: [
    {
      name: 'Web Vitals: CSS\'in Render-Blocking ve FCP\'ye Etkisi',
      url: 'https://web.dev/articles/render-blocking-resources',
    },
    {
      name: 'W3C Spesifikasyonu: CSS Cascade ve Kalıtım',
      url: 'https://www.w3.org/TR/css-cascade-4/',
    },
    {
      name: 'Clean CSS: CSS Küçültme Kütüphanesi ve Yöntemleri',
      url: 'https://github.com/clean-css/clean-css',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'CSS Kodu Neden Yinelenir?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uzun vadeli web projelerini sürdürürken ya da eski kodla (<em>legacy code</em>) çalışırken birden fazla geliştiricinin çakışan CSS kuralları yazması son derece yaygındır. Mevcut tasarımı bozmaktan çekinen bir geliştirici, özgün kodu düzenlemek ya da yeniden yapılandırmak yerine belgenin sonuna yeni ve gereksiz bir kural eklemeyi tercih eder.',
    },
    {
      type: 'paragraph',
      html: 'Sonuç; onlarca seçicinin defalarca tanımlandığı, okunabilirliği zedeleyen ve web sayfanızın indirme boyutunu önemli ölçüde artıran verimsiz bir dosyadır.',
    },
    {
      type: 'title',
      text: 'Web Performansı Üzerindeki Gizli Etki (Web Vitals)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Stil sayfası dosyaları tarayıcının doğal rendering sürecini engeller (<strong>Render-Blocking</strong> kaynak). Tarayıcı eksiksiz CSSOM\'u indirip oluşturana kadar ekran boş kalır.',
    },
    {
      type: 'tip',
      html: 'Gereksiz stilleri kaldırmak yalnızca kod düzeni meselesi değildir; <strong>First Contentful Paint (FCP)</strong> gibi kritik metriklerde anında ve ölçülebilir bir iyileşme sağlar.',
    },
    {
      type: 'title',
      text: 'Yinelenen Kuralları Nasıl Birleştiriyoruz',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bu araç akıllı bir birleştirici gibi davranır. Geleneksel bir küçültücünün yaptığı gibi yalnızca boşlukları sıkıştırmak yerine, metni yinelemeli olarak tarayarak özdeş seçici kalıplarını bulur.',
    },
    {
      type: 'list',
      items: [
        '<code>.box { color: red; }</code> kuralınız olduğunu ve yüz satır ileride bir <code>.box { padding: 10px; color: blue; }</code> bulunduğunu hayal edin. Araç her iki bloğu aynı <code>.box</code> seçicisi altında birleştirir ve padding değerini korur.',
        '<strong>CSS Cascade Koruması:</strong> Doğrudan çakışmalarda algoritma, en son tanımlanan özelliği sıkı biçimde korur. Bu sayede belge temizlenirken özgün düzeniniz bozulmaz.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Kullanıcılarınızın telefonlarına kilobytes dolusu ölü metin göndermeyi bırakın. Kodunuzu tarayıcıdan tamamen çevrimdışı olarak milisaniyeler içinde birleştirin.',
    },
  ],
};
