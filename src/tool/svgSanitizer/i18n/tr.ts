import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgSanitizerUI } from '../ui';

const slug = 'svg-temizleyici';
const title = 'Online SVG Temizleyici';
const description = 'Figma, Adobe Illustrator veya Inkscape\'ten dışa aktarılan SVG dosyalarını optimize edin ve temizleyin. Meta verileri, gereksiz öznitelikleri ve boş grupları kaldırarak üretim ortamına hazır bir SVG elde edin.';

const faqData = [
  {
    question: 'Gömülü SVG içeren tam bir sayfa HTML\'sini yapıştırabilirim?',
    answer: 'Evet. Temizleyici HTML içindeki SVG öğesini tespit eder ve işlemek için yalnızca bu bloğu çıkarır. SVG parçasını doğrudan yapıştırsanız da çalışır.',
  },
  {
    question: 'Illustrator SVG\'leriyle çalışır mı?',
    answer: 'Evet. Illustrator, SVG\'leri XML deklarasyonları, meta verileri ve temizleyicinin kaldırdığı özel ad alanlarıyla dışa aktarır. Sonuç, tüm modern tarayıcılarla uyumlu bir SVG\'dir.',
  },
  {
    question: 'Temizleme ile minifikasyon arasındaki fark nedir?',
    answer: 'Temizleme gereksiz öznitelikleri ve etiketleri kaldırır ancak kodu okuyabilmeniz ve düzenleyebilmeniz için girintili biçimi korur. Minifikasyon ayrıca dosya boyutunu maksimuma indirmek için her şeyi tek satıra daraltır.',
  },
  {
    question: 'ID\'lerin kaldırılması SVG\'yi kırabilir mi?',
    answer: 'Yalnızca SVG içindeki bir öğe başka bir öğeyi ID ile referans gösterirse, örneğin fill="url(#gradient)" aracılığıyla. Bu durumda Kimlik Kaldır seçeneğini devre dışı bırakın. Tam da bu sorunu önlemek için varsayılan olarak devre dışıdır.',
  },
  {
    question: 'SVG kodum herhangi bir sunucuya gönderilir mi?',
    answer: 'Hayır. Tüm işlemler tarayıcınızda yerel DOMParser ve XMLSerializer API\'leri kullanılarak gerçekleşir. Kod asla cihazınızı terk etmez.',
  },
];

const howToData = [
  { name: 'SVG\'yi yapıştırın', text: 'Figma, Illustrator veya Inkscape\'ten dışa aktarılan SVG kodunu metin alanına yapıştırın.' },
  { name: 'Seçenekleri yapılandırın', text: 'Seçenekleri etkinleştirin veya devre dışı bırakın: ID\'leri kaldırın, genişlik/yüksekliği çıkarın ve ihtiyaçlarınıza göre minifiye edin.' },
  { name: 'Temizleyin', text: 'Kodu işlemek ve optimize edilmiş sonucu almak için SVG\'yi Temizle\'ye tıklayın.' },
  { name: 'Kopyala veya indir', text: 'Üretim ortamına hazır temiz SVG\'yi almak için Kopyala veya İndir düğmelerini kullanın.' },
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

const ui: SvgSanitizerUI = {
  labelInput: 'Kirli SVG\'nizi buraya yapıştırın',
  labelOutput: 'Temiz SVG',
  optRemoveIds: 'ID\'leri Kaldır',
  optRemoveWH: 'Genişlik/Yüksekliği Çıkar',
  optMinify: 'Minifiye Et',
  btnSanitize: 'SVG\'yi Temizle',
  btnCopy: 'Kopyala',
  btnCopied: 'Kopyalandı',
  btnDownload: 'İndir',
  statOriginal: 'Orijinal',
  statCleaned: 'Temiz',
  statReduction: 'İndirim',
  statElems: 'Öğe kaldırıldı',
  statAttrs: 'Öznitelik kaldırıldı',
  errorPaste: 'Temizlemeden önce bir SVG yapıştırın.',
  errorProcess: 'SVG işlenirken hata oluştu.',
};

export const content: ToolLocaleContent<SvgSanitizerUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Sık Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Referanslar',
  bibliography: [
    { name: 'SVG Specification — W3C', url: 'https://www.w3.org/TR/SVG2/' },
    { name: 'Figma SVG Export — Official Documentation', url: 'https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma' },
    { name: 'SVGO — SVG Optimizer (open source reference)', url: 'https://github.com/svg/svgo' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'SVG Temizleyici: Figma ve Illustrator\'dan Temiz Kod', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>Figma</strong>, Adobe Illustrator veya tarayıcı inceleme aracından dışa aktarılan herhangi bir SVG yapıştırın ve üretim ortamına hazır temiz, optimize edilmiş bir vektör dosyası elde edin.',
    },
    { type: 'title', text: 'Neden dışa aktarılan SVG dosyaları bu kadar kiridir?', level: 3 },
    {
      type: 'paragraph',
      html: 'Figma\'dan bir SVG dışa aktardığınızda, yalnızca uygulama içinde anlamlı özniteliklerle dolu bir dosya alırsınız: <code>data-name</code>, <code>xml:space</code>, iç katmanlara referanslar ve tasarım meta verileri. Sonuç gerekli olandan %40-70 daha ağır bir SVG\'dir.',
    },
    { type: 'title', text: 'Temizleyicinin kaldırdığı şeyler', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Editör meta verileri:</strong> Figma ve Illustrator\'un otomatik olarak eklediği <code>metadata</code>, <code>title</code> ve <code>desc</code> etiketleri.',
        '<strong>Inkscape ad alanları:</strong> <code>inkscape:</code> ve <code>sodipodi:</code> önekine sahip tüm öğeler.',
        '<strong>Gereksiz öznitelikler:</strong> <code>xml:space</code>, <code>version</code>, fazlalık <code>xmlns:*</code> ve Figma <code>data-*</code> öznitelikleri.',
        '<strong>Boş gruplar:</strong> silinen katmanlardan kalan içeriği olmayan <code>&lt;g&gt;</code> öğeleri.',
        '<strong>XML deklarasyonları:</strong> SVG\'yi HTML\'ye gömerken gereksiz olan <code>&lt;?xml version="1.0"?&gt;</code> deklarasyonu ve DOCTYPE.',
      ],
    },
  ],
};

