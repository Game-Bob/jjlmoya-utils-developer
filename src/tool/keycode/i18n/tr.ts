import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeycodeUI } from '../ui';

const slug = 'cevirdo-kimligi-inceleyici';
const title = 'Çevrimiçi Klavye Tuş Kodu Görselleştiricisi. Tuş Kodu İnceleyicisi';
const description =
  'Herhangi bir klavye tuşunun event.key, event.code, event.which ve konumunu gerçek zamanlı olarak görmek için ücretsiz çevrimiçi araç. Kullanıma hazır JavaScript kod parçacıkları oluşturur.';

const faqData = [
  {
    question: 'event.key ile event.code arasındaki fark nedir?',
    answer:
      'event.code, yapılandırılmış dilden bağımsız olarak klavyedeki tuşun fiziksel konumunu temsil eder. event.key, Shift tuşuna basarsanız veya farklı bir dil kullanırsanız değişebilecek oluşturulan karakteri temsil eder. Oyun kontrolleri için code kullanın; metin girişi ve anlamsal kısayollar için key kullanın.',
  },
  {
    question: 'event.which nedir ve neden kullanımdan kaldırıldı?',
    answer:
      'event.which, tuş için sayısal bir ASCII kodu döndüren eski bir özelliğidir. Daha doğru ve okunabilir bilgiler sağlamak için event.key ve event.code tarafından değiştirildiğinden, modern standartlarda kullanımdan kaldırılmış olarak işaretlenmiştir. Eğitim amaçlı olarak bu araçta gösterilmektedir.',
  },
  {
    question: 'location özelliği ne anlama gelir?',
    answer:
      'location özelliği, tuşun klavyede fiziksel olarak nerede olduğunu gösterir: Standart (normal konum), Sol (sol değiştirici tuş), Sağ (sağ değiştirici tuş) veya Saypad (sayısal tuş takımı). Sol ve sağ CTRL tuşlarını ayırt etmek için kullanışlıdır, örneğin.',
  },
  {
    question: 'Uluslararası klavyeler ve QWERTY olmayan düzenlerle çalışır mı?',
    answer:
      'Evet. Araç, tarayıcının klavye yapılandırmanız için rapor ettiği şeyi tam olarak gösterir. event.code her zaman fiziksel konumun QWERTY adını döndürürken, event.key dilinize göre gerçek karakteri gösterecektir.',
  },
];

const howToData = [
  {
    name: 'Herhangi bir tuşa basın',
    text: 'Sayfaya odaklanarak, tüm olay bilgilerini anında görmek için klavyenin herhangi bir tuşuna basın.',
  },
  {
    name: 'Bireysel değerleri kopyalayın',
    text: 'Her özelliğin (event.key, event.code vb.) yanındaki kopyala düğmesine tıklayarak bu belirli değeri panoya kopyalayın.',
  },
  {
    name: 'Kod parçacıklarını kullanın',
    text: '"Hızlı Parçacıklar" bölümünde doğrudan projenize yapıştırmaya hazır JavaScript kod blokları bulacaksınız.',
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

const ui: KeycodeUI = {
  promptTitle: 'Bir tuşa basın',
  promptSubtitle: 'Kodunu görmek için klavyenin herhangi bir tuşuna basın',
  snippetsTitle: 'Hızlı Parçacıklar',
  btnCopy: 'Kopyala',
  locationStandard: 'Standart',
  locationLeft: 'Sol',
  locationRight: 'Sağ',
  locationNumpad: 'Saypad',
};

export const content: ToolLocaleContent<KeycodeUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Sık Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Referanslar ve Standartlar',
  bibliography: [
    {
      name: 'MDN Web Docs – KeyboardEvent',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent',
    },
    {
      name: 'UI Events Specification (W3C) – KeyboardEvent',
      url: 'https://www.w3.org/TR/uievents/#events-keyboardevents',
    },
    {
      name: 'MDN – KeyboardEvent.code values',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'JavaScript\'te Klavye Olaylarını Anlama',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bir kullanıcı bir tuşa bastığında, tarayıcı üç olayı tetikler: <code>keydown</code>, <code>keypress</code> ve <code>keyup</code>. Her biri basılan tuş hakkında bilgi içeren özellikler ortaya çıkarır, ancak hepsi eşdeğer veya önerilir değildir.',
    },
    {
      type: 'title',
      text: 'Tuş Olayı Özellikleri',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'event.code — Fiziksel Tuş',
      html: '<p>Tuşun klavyedeki <strong>fiziksel konumunun</strong> tanımlayıcısını QWERTY nomenklaturunu kullanarak döndürür. Örneğin, AZERTY klavyesindeki "A" tuşu <code>KeyQ</code> döndürür. Konum önemli olan, karakter değil, oyun kontrolleri için idealdir.</p>',
    },
    {
      type: 'card',
      title: 'event.key — Oluşturulan Karakter',
      html: '<p>Dil ve etkin değiştiricilere göre oluşturulan <strong>karakter değerini</strong> döndürür. Shift+A tuşuna basmak <code>"A"</code> döndürür; Shift olmadan <code>"a"</code> döndürür. Özel tuşlar için <code>"Enter"</code>, <code>"Escape"</code>, <code>"ArrowUp"</code> gibi adları döndürür.</p>',
    },
    {
      type: 'title',
      text: 'Her bir özelliği ne zaman kullanacağınız',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Oyun kontrolleri için <code>event.code</code> (dilden bağımsız olarak WASD) ve belirli karakterleri veya <code>Ctrl+C</code> gibi anlamsal klavye kısayollarını algılamak için <code>event.key</code> kullanın.',
    },
    {
      type: 'paragraph',
      html: '<code>event.which</code> ve <code>event.keyCode</code> özellikleri W3C standardına göre resmi olarak <strong>kullanımdan kaldırılmıştır</strong>. Modern tarayıcılar uyumluluğu korunması için desteklemeye devam etse de, yeni kodda kullanılmamalıdırlar.',
    },
  ],
};
