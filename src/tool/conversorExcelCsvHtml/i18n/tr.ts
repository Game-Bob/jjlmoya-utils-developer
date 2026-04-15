import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConversorExcelCsvHtmlUI } from '../ui';

const slug = 'excel-csv-html-tablo-donusturucu';
const title = 'Excel ve CSV\'den HTML Tablosuna Dönüştürücü Kod Oluşturucu';
const description = 'Excel veya CSV verilerinizi anında temiz, semantik HTML tablolarına dönüştürün. Geliştiriciler ve içerik oluşturucular için ücretsiz araç.';

const faqData = [
  {
    question: 'Bir Excel dosyasını (.xlsx) HTML\'ye nasıl dönüştürürüm?',
    answer: 'Öncelikle dosyanızı Excel\'de açın ve CSV (virgülle ayrılmış) olarak kaydedin. Ardından, HTML tablo kodunu almak için bu CSV dosyasını aracımıza yükleyin veya içeriğini yapıştırın.',
  },
  {
    question: 'Oluşturulan kod CSS stillerini içeriyor mu?',
    answer: 'Oluşturucu, kenarlıklar ve zebra çizgileri için isteğe bağlı sınıflarla temiz HTML üretir. Nihai görsel stiller web sitenizin kendi CSS\'sine bağlıdır ve mükemmel entegrasyon sağlar.',
  },
  {
    question: 'Çok büyük CSV dosyalarını yükleyebilir miyim?',
    answer: 'Evet, aracımız verileri yerel olarak tarayıcınızda işler. Bu, verileriniz internet üzerinden iletilmediği için çok hızlı ve güvenli olduğu anlamına gelir.',
  },
  {
    question: 'Google Sheets ile uyumlu mu?',
    answer: 'Kesinlikle. Google Sheets\'te Dosya > İndir > Virgülle ayrılmış değerler (.csv) yolunu izleyin ve bu dosyayı aracımızla kullanın.',
  },
];

const howToData = [
  {
    name: 'Verilerinizi hazırlayın',
    text: 'Excel veya CSV dosyanızı hazırlayın. Verilerin temiz olduğundan emin olun.',
  },
  {
    name: 'Verileri yükleyin',
    text: 'CSV metnini giriş alanına yapıştırın veya dosyayı doğrudan dönüştürücüye sürükleyin.',
  },
  {
    name: 'Tabloyu yapılandırın',
    text: 'İlk satırı başlık olarak kullanmak isteyip istemediğinizi ve temel stiller isteyip istemediğinizi seçin.',
  },
  {
    name: 'Kodu kopyalayın',
    text: '"HTML Kodu" sekmesine geçin ve web sitenize yapıştırmak için sonucu kopyalayın.',
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

const ui: ConversorExcelCsvHtmlUI = {
  csvInputLabel: 'CSV\'nizi buraya yapıştırın',
  csvInputPlaceholder: 'İsim,Yaş,Şehir\nAhmet,25,İstanbul\nAyşe,30,Ankara',
  uploadLabel: 'Veya dosyanızı yükleyin (CSV)',
  dragDropLabel: 'Dosyanızı buraya sürükleyip bırakın',
  headerCheckboxLabel: 'İlk satırı başlık olarak kullan',
  bordersCheckboxLabel: 'Kenarlık ekle',
  stripeCheckboxLabel: 'Zebra çizgileri',
  previewTabLabel: 'Önizleme',
  codeTabLabel: 'HTML Kodu',
  emptyStateLabel: 'Tabloyu görmek için veri girin',
  copyButtonLabel: 'Kodu Kopyala',
  copiedLabel: 'Kopyalandı!',
};

export const content: ToolLocaleContent<ConversorExcelCsvHtmlUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'HTML Tabloları ve Veri Formatları Hakkında Kaynaklar',
  bibliography: [
    { name: 'W3C: HTML Tabloları', url: 'https://www.w3.org/WAI/tutorials/tables/' },
    { name: 'MDN: HTML tablo öğesi', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table' },
    { name: 'RFC 4180: CSV Formatı', url: 'https://tools.ietf.org/html/rfc4180' },
    { name: 'Google Sheets: Verilerinizi indirin', url: 'https://support.google.com/docs/answer/183965' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Excel ve CSV\'yi Kolayca HTML Tablolarına Dönüştürün', level: 2 },
    {
      type: 'paragraph',
      html: 'Modern web geliştirmede, tablo verilerini sunmak yapılandırılmış bilgileri iletmenin en etkili yollarından biridir. Ancak, <strong>Excel</strong> gibi bir elektronik tablodan veya bir <strong>CSV</strong> dosyasından verileri manuel olarak HTML <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> ve <code>&lt;td&gt;</code> etiketlerine dönüştürmek yorucu ve hataya açıktır.',
    },
    { type: 'title', text: 'Neden semantik HTML tabloları kullanmalısınız?', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Erişilebilirlik:</strong> Ekran okuyucular yapıyı yorumlayabilir ve görsel engelli kullanıcılara yardımcı olabilir.',
        '<strong>SEO:</strong> Arama motorları hücre içeriğini dizine ekleyerek verilerinizin sıralamasını iyileştirir.',
        '<strong>Duyarlılık:</strong> Biraz CSS ile HTML tabloları mobil cihazlara uyum sağlayabilir.',
        '<strong>Bakım Kolaylığı:</strong> Verileri HTML\'de düzenlemek, tüm bir resmi yeniden oluşturmaktan çok daha kolaydır.',
      ],
    },
    { type: 'title', text: 'Excel\'den HTML\'ye Dönüştürücü Nasıl Çalışır?', level: 3 },
    {
      type: 'paragraph',
      html: 'Aracımız, virgülle ayrılmış dosyaları (CSV) işleyen yerel bir metin ayrıştırıcısı kullanır. Microsoft Excel, Google Sheets ve LibreOffice Calc dahil olmak üzere çoğu elektronik tablo programı, verilerinizi CSV formatında dışa aktarmanıza olanak tanır.',
    },
  ],
};
