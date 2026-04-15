import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PlaceholderGeneratorUI } from '../ui';

const slug = 'yer-tutucu-resim-ureteci';
const title = 'Yer Tutucu Resim Üreteci. Hızlı Web Mockup\'ları Çevrimiçi';
const description =
  'Web tasarımlarınız için özel yer tutucu resimler oluşturun. Çözünürlüğü, arka planı, metni ayarlayın ve PNG, WebP veya JPEG olarak anında dışa aktarın.';

const faqData = [
  {
    question: 'Yer tutucu resim nedir?',
    answer:
      'Yer tutucu veya doldurma resmi, web tasarımı ve düzende sonraki bir görüntünün yerine konacağı alanı ayırmak için kullanılan geçici bir grafik öğesidir. Son içerik hazır olmadan önce sayfanın yapısını görselleştirmeye yardımcı olur.',
  },
  {
    question: 'Üreticide herhangi bir çözünürlük kullanabilir miyim?',
    answer:
      'Evet, genişlik ve yükseklik için herhangi bir sayısal değer girebilirsiniz. Üreteci, sıkı ızgaralar veya belirli reklam afişleri için tam istenen boyutlarla bir kanvas oluşturur.',
  },
  {
    question: 'Resimler hangi formatta indirilir?',
    answer:
      'Varsayılan olarak, resimler optimal sıkıştırma için WebP olarak oluşturulur, ancak maksimum kayıpsız kaliteyi korumak için PNG biçiminde veya geleneksel uyumluluk için JPEG olarak indirebilirsiniz.',
  },
  {
    question: 'Bu herhangi bir sunucuda işlenir mi?',
    answer:
      'Hayır, tüm görüntü oluşturması kendi tarayıcınızın sanal belleğinde (Canvas) anında oluşturulur. Anında olur ve verilerin ağ üzerinden gönderilmesini gerektirmez.',
  },
];

const howToData = [
  {
    name: 'Boyutları Ayarlayın',
    text: 'Genişlik ve yükseklik değerlerini doğrudan girin veya ön ayarlardan birine (FHD, HD, Instagram, vb.) tıklayarak otomatik olarak doldurun.',
  },
  {
    name: 'Renkleri ve Metni Yapılandırın',
    text: 'Yerleşik seçicileri kullanarak veya bir onaltılık kod yazarak arka plan ve metin rengini seçin. İsteğe bağlı olarak varsayılan boyut etiketini değiştirmek için özel metin ekleyin.',
  },
  {
    name: 'Tipografi ve Format Seçin',
    text: 'Yazı tipi ailesini ve boyutunu seçin. İhtiyaçlarınız doğrultusunda çıkış biçimini (WebP, PNG veya JPEG) seçin.',
  },
  {
    name: 'Resmi İndirin',
    text: 'Oluşturulan yer tutucu görüntüsünü doğrudan cihazınıza kaydetmek için İndir düğmesini tıklayın.',
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

const ui: PlaceholderGeneratorUI = {
  labelDimensions: 'Hızlı Boyutlar',
  labelWidth: 'Genişlik (px)',
  labelHeight: 'Yükseklik (px)',
  labelBgColor: 'Arka Plan',
  labelTextColor: 'Metin',
  labelCustomText: 'Özel Metin (İsteğe Bağlı)',
  placeholderCustomText: 'Örn.: Hero Banner',
  labelFontFamily: 'Tipografi',
  labelFontSize: 'Temel Boyut',
  fontSizeAuto: 'Otomatik',
  labelFormat: 'Çıkış Biçimi',
  btnDownload: 'Resmi İndir',
};

export const content: ToolLocaleContent<PlaceholderGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Sık Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Referanslar ve Belgeler',
  bibliography: [
    {
      name: 'MDN Web Docs: HTMLCanvasElement.toDataURL()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL',
    },
    {
      name: 'MDN Web Docs: CanvasRenderingContext2D',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D',
    },
    {
      name: 'W3C: HTML Canvas 2D Context',
      url: 'https://www.w3.org/TR/2dcontext/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Hızlı Mockup\'lar İçin Nihai Araç',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bir web sitesinin konseptualizasyon veya yapısal düzeni (wireframing) aşamalarının başlarında, genellikle nihai fotoğrafik içeriğe sahip değiliz. Boş boyutlar ürünün genel görselleştirilmesini çarpıtabilir ve kritik aralık veya oran hatalarını gizleyebilir. Yer tutucu resim üreteci bunu anında çözer ve tam boyutlandırılmış renkli alanları enjekte etmenize izin verir.',
    },
    {
      type: 'tip',
      title: 'Sürtünmesiz Tasarım',
      html: 'CSS Izgarası oluştururken tam olarak 1200x800 pikseli bir boşluk entegre etmek zorunludur. Doldurma blokları indirerek, geçici kodunuza ek CSS veya üçüncü taraf komut dosyaları enjekte etmekten kaçınırsınız.',
    },
    {
      type: 'title',
      text: 'Harici Hizmetlerden Kaçınmanın Önemi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Frontend ekosistemindeki tekrarlayan bir uygulama, <code>via.placeholder.com</code> gibi hizmetleri doğrudan HTML <code>src</code> özniteliklerine bağlantılandırmaktan oluşur. URL parametreleri aracılığıyla teorik olarak çevik olsa da, dikkatli bir geliştirici her türlü maliyeti ödemek isteyecek derin yan etkilere sahiptir.',
    },
    {
      type: 'paragraph',
      html: 'Bir geliştirme sayfasının her resim etiketine uzak bir etki alanı eklemek DNS isteklerini artırır, Vite, Gulp veya Webpack\'in hot-reloading sistemlerini cezalandırır ve sonunda buluta gelen dallarda kazaları açığa çıkarır. Bu yardımcı programı kullanarak ve resmi tercih ettiğiniz biçimde (WebP, PNG veya JPEG) oluşturarak, prototipinizi tamamen localhost modunda merkezileştirirsiniz.',
    },
    {
      type: 'title',
      text: 'Üretici Algoritmasının Temel Özellikleri',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Piksel Mükemmel Çözünürlük:</strong> Yerleşik HTML5 Canvas, dışa aktarılan kanvasın kullanıcı tarafından belirtilen koordinatlara aritmetik olarak karşılık geldiğini sağlar.',
        '<strong>Tipografik Otomatik Ölçeklendirme:</strong> Otomatik modda, yazı tipi boyutu çevre alanını ve karakter sayısını hesaplayarak metni istenmeyen <em>taşmaları</em> olmadan zarif bir şekilde uyacak şekilde boyutlandırır.',
        '<strong>Onaltılık Füzyon:</strong> Yerleşik HTML ekosistem seçicileri ile yazılan girdiler arasında çift yönlü durum kontrolü, Figma veya Penpot UI/UX paletin tarafından dikte edilen kesin kontrastları garanti eder.',
      ],
    },
    {
      type: 'title',
      text: 'Teknik Wireframing\'in Gizli Sanatı',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Özellikle talepkâr istemcilerle veya demir iradeli Ürün Yöneticileriyle karşı karşıya gelmek söz konusu olduğunda, temeli başarılı olmayan tek bir monolitik proje veya mikro frontend yoktur. Tamamlanmış <em>varlıkların</em> yükü sürüklenmeden çevik grafik yinelemelerini kolaylaştırmak, hızlı geliştiriciyi sıkışan kişiden ayırır. Bu üreteci, endüstri düzeyinde bir sonuç sunmak için şüpheli ara işleme olmadan yerel makinenizde modern JavaScript <code>toDataURL()</code> API\'sini doğrudan kullanır.',
    },
  ],
};
