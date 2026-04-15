import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssToInlineConverterUI } from '../ui';

const slug = 'css-satir-ici-html-donusturucu';
const title = 'CSS Satır İçi HTML Dönüştürücü. Epostaları İçin Satır İçi Işlemci';
const description =
  'Stil sayfalarınızı ve CSS sınıflarınızı otomatik olarak satır içi stillerle HTML\'ye dönüştürün. E-bültenleri, işlemsel e-postaları ve güvenli web düzeni için ideal.';

const faqData = [
  {
    question: 'Epostalar dış stil sayfaları yerine neden satır içi CSS\'ye ihtiyaç duyar?',
    answer:
      'Outlook, Gmail veya Apple Mail gibi e-posta istemcileri güvenlik nedenleriyle <link> ve <style> etiketlerini filtreler veya görmezden gelir. Bir stilin bir e-postada doğru şekilde uygulanmasının tek garantili yolu, onu doğrudan her HTML öğesinin style özniteliğine gömmektir.',
  },
  {
    question: 'Bir öğenin zaten kendi style özniteliği varsa ne olur?',
    answer:
      'Araç mevcut satır içi stilleri saygıyla karşılar ve yeni özellikler ekler, CSS kaskad davranışını simüle eder: daha sonra bildirilen özellikler, çakışma durumunda öncekini geçersiz kılar.',
  },
  {
    question: ':hover veya media queries gibi karmaşık seçicilerle çalışır mı?',
    answer:
      'Araç, DOMParser\'ın çözebildiği sınıf, id, öznitelik ve yapısal sahte sınıf seçicilerini işler. :hover gibi durum bağımlı seçicileri ve media queries satır içine alınamaz (çalışma zamanı ortamına bağlıdır) ve göz ardı edilir.',
  },
  {
    question: 'HTML ve CSS kodum herhangi bir sunucuya gönderilir mi?',
    answer:
      'Hayır. Tüm işlemler, yerel DOMParser API\'si kullanılarak %100 tarayıcınızda gerçekleşir. Kodunuzun hiçbir baytı cihazınızdan ayrılmaz, hassas içerik içeren şablonlar için tam gizliliği garantiler.',
  },
];

const howToData = [
  {
    name: 'Orijinal HTML\'inizi yapıştırın',
    text: '"Orijinal HTML" alanına işlemek istediğiniz HTML\'i yazın veya yapıştırın. Bir parça veya tam bir belge olabilir.',
  },
  {
    name: 'CSS kurallarınızı ekleyin',
    text: '"CSS Kuralları" alanına enjekte etmek istediğiniz sınıfları ve id\'leri yapıştırın. Araç bunları seçici özgüllüğüne saygı göstererek uygular.',
  },
  {
    name: 'Dönüştürün ve kopyalayın',
    text: '"CSS\'yi HTML\'ye Enjekte Et" düğmesini tıklayın. Tüm satır içi stillerle sonuç aşağıda görünür, e-posta yöneticinize veya CMS\'nize kopyalayıp yapıştırmaya hazırdır.',
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

const ui: CssToInlineConverterUI = {
  labelHtml: 'Orijinal HTML',
  labelCss: 'CSS Kuralları',
  labelOutput: 'Satır İçi HTML Sonucu',
  placeholderHtml: '<div class="my-class">Hello World</div>',
  placeholderCss: '.my-class { color: red; padding: 10px; }',
  placeholderOutput: 'Gömülü stillerle HTML\'iniz burada görünecek...',
  btnConvert: 'CSS\'yi HTML\'ye Enjekte Et',
  btnCopy: 'Kodu Kopyala',
  btnCopied: 'Kopyalandı!',
  msgError: 'İşleme hatası. HTML ve CSS\'niz geçerli olup olmadığını kontrol edin.',
};

export const content: ToolLocaleContent<CssToInlineConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Sık Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Referanslar ve Belgeler',
  bibliography: [
    {
      name: 'Can I email: Epostalar İçin HTML ve CSS Destek Matrisi',
      url: 'https://www.caniemail.com/',
    },
    {
      name: 'MDN Web Docs: Genel style özniteliği',
      url: 'https://developer.mozilla.org/en/docs/Web/HTML/Global_attributes/style',
    },
    {
      name: 'DOMParser API: Tarayıcıda Güvenli Ayrıştırma',
      url: 'https://developer.mozilla.org/en/docs/Web/API/DOMParser',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'CSS Satır İçi Işlemci Nedir ve Neden Biri\'ye İhtiyacınız Vardır?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Modern web uygulamaları geliştirirken, kaygıları ayırmaya alışkınız: HTML yapıyı oluşturur ve harici bir CSS dosyası tüm görsel stilleri sağlar. Ancak, tüm ortamlar harici stil sayfalarına veya genel <code>&lt;style&gt;</code> etiketlerine güvenmez.',
    },
    {
      type: 'paragraph',
      html: 'Harici CSS başarısız olduğu en popüler ve katı kullanım durumu <strong>Eposta Şablonu Geliştirmedir</strong>. Bu ortamlarda, bir yazı tipinin, rengin veya kenarboşluğunun doğru şekilde işlenmesinin tek güvenilir yolu, onu doğrudan etiketin içine yerleştirmektir: <code>&lt;span style="color: red;"&gt;</code>.',
    },
    {
      type: 'title',
      text: 'Eposta İstemcilerinde CSS Sorunu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Microsoft Outlook, Apple Mail veya Gmail gibi e-posta istemcileri kısıtlayıcı CSS işleme motorlarıyla ödünü unutulmayan bir geçmişe sahiptir. Çoğu, okuma arayüzünü bozabilecek kod enjeksiyonları korkusundan <code>&lt;link&gt;</code> veya <code>&lt;style&gt;</code> etiketlerini filtreler veya atar.',
    },
    {
      type: 'tip',
      html: 'E-bültenleri veya işlemsel e-postalar (makbuzlar, hesap onaylamaları) için tablolar ve <em>satır içi CSS</em> kullanımı e-posta pazarlaması endüstrisinde altın standarttır.',
    },
    {
      type: 'title',
      text: 'Bu Araç Tarayıcınızda Nasıl Çalışır',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Güvenli Ayrıştırma:</strong> Giriş HTML\'sini tarayıcınızın içinde güvenli bir sanal DOM\'a dönüştürmek için <code>DOMParser API</code> kullanır.',
        '<strong>Kaskad Simülasyonu:</strong> CSS kurallarınızı analiz eder, seçicilere özgüllük ağırlıkları uygular ve kodu enjekte ederek seçilen HTML öğelerinin <code>style</code> özniteliklerini değiştirir.',
        '<strong>%100 Çevrimdışı:</strong> Kodunuzun hiçbir baytı cihazınızdan ayrılmaz. Hassas içerik içeren şablonlar için tam gizlilik.',
      ],
    },
  ],
};
