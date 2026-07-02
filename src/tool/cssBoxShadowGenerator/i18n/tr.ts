import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssBoxShadowGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'css-golge-olusturucu';
const title = 'CSS Box Shadow Generator';
const description = 'Katmanlı CSS gölgelerini canlı önizleme, kaydırıcılar, renk seçiciler ve hazır ayarlarla görsel olarak tasarlayın. Temiz native CSS\'i anında kopyalayın.';

const howTo = [
  { name: 'Hazır ayar seçin veya sıfırdan başlayın', text: 'Card, Float, Inset, Glow veya Layered hazır ayarlarından seçim yapın veya varsayılan gölgeyi kaydırıcılarla ayarlayın.' },
  { name: 'Katman ekleyin ve istifleyin', text: 'Katman eklemek için + tuşuna basın (5\'e kadar). Her katmanı seçerek offset, blur, spread, renk ve opaklığı düzenleyin.' },
  { name: 'Inset ve arka planı değiştirin', text: 'İç gölgeler için inset\'i işaretleyin. Önizleme arka plan rengini değiştirin.' },
  { name: 'CSS\'i kopyalayın', text: 'Önizleme tasarımınızla eşleştiğinde, oluşturulan CSS\'i kopyalayın ve stil sayfanıza yapıştırın.' },
];

const faq = [
  { question: 'Bir öğede birden fazla gölge kullanabilir miyim?', answer: 'Evet. CSS virgülle ayrılmış box-shadow değerlerine izin verir. Bu araç, bağımsız kontrollere sahip 5\'e kadar katman istiflemenizi sağlar.' },
  { question: 'Negatif spread değeri ne yapar?', answer: 'Negatif spread, bulanıklaştırmadan önce gölgeyi içe doğru küçültür. İnce yüzen efektler için kullanışlıdır.' },
  { question: 'Inset seçeneği ne işe yarar?', answer: 'Inset gölgeler öğe kenarının içinde işlenir ve çökük bir görünüm oluşturur. Form alanları ve basılı kartlar için idealdir.' },
  { question: 'Oluşturulan CSS\'in framework bağımlılığı var mı?', answer: 'Hayır. Sonuç saf native CSS\'tir. Standart CSS kullanan her projede kullanın.' },
];

const ui: CssBoxShadowGeneratorUI = {
  offsetXLabel: 'Ofset X',
  offsetYLabel: 'Ofset Y',
  blurLabel: 'Bulanıklık',
  spreadLabel: 'Yayılma',
  opacityLabel: 'Opaklık',
  insetLabel: 'İç',
  addLayer: 'Katman ekle',
  removeLayer: 'Katman kaldır',
  resetAll: 'Sıfırla',
  codeTitle: 'Oluşturulan CSS',
  copyCode: 'CSS kopyala',
  copied: 'Kopyalandı!',
  previewLabel: 'Önizleme',
  presetCard: 'Card',
  presetFloat: 'Float',
  presetInset: 'Inset',
  presetGlow: 'Glow',
  presetLayered: 'Katmanlı',
  presetsLabel: 'Hazır Ayar',
  layerPrefix: 'Katman',
  bgColorLabel: 'Arka Plan',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<CssBoxShadowGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'CSS Box-Shadow Oluşturucu SSS',
  faq,
  bibliographyTitle: 'CSS Box-Shadow Referansları',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'CSS gölgelerini değerleri tahmin etmek yerine görsel olarak tasarlayın', level: 2 },
    { type: 'paragraph', html: '<strong>box-shadow</strong>\'u elle ayarlamak sıkıcıdır. Bu görsel oluşturucu, birden fazla gölgeyi istiflemenizi, canlı görmenizi ve üretime hazır CSS kopyalamanızı sağlar.' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: 'Öğe başına gölge katmanı', icon: 'mdi:layers' }, { value: 'Canlı', label: 'Her değişiklikte önizleme', icon: 'mdi:eye' }, { value: '5', label: 'Hızlı hazır ayarlar', icon: 'mdi:star' }] },
    { type: 'title', text: 'Gerçekçi derinlik için birden fazla gölge istifleyin', level: 3 },
    { type: 'paragraph', html: 'Gerçek gölgeler nadiren tekdüze bulanıklıktır. Öğeye yakın sıkı bir gölgeyi daha yumuşak, daha geniş bir gölgeyle istiflemek doğal derinlik oluşturur. Katman eklemek için <strong>+</strong> kullanın.' },
    { type: 'table', headers: ['Kontrol', 'CSS Değeri', 'Etki'], rows: [['Ofset X', '1. uzunluk', 'Yatay kaydırma.'], ['Ofset Y', '2. uzunluk', 'Dikey kaydırma.'], ['Bulanıklık', '3. uzunluk', 'Bulanıklık yarıçapı.'], ['Yayılma', '4. uzunluk', 'Gölgeyi büyütür veya küçültür.'], ['Renk & Opaklık', 'rgba()', 'Bağımsız opaklıklı gölge rengi.'], ['İç', 'inset', 'Öğe kenarının içinde gölge.']] },
    { type: 'summary', title: 'Önerilen İş Akışı', items: ['Bir hazır ayarla başlayın.', 'Gerçekçi derinlik için katman ekleyin.', 'Yüzen kart efekti için negatif spread kullanın.', 'Oluşturulan CSS\'i kopyalayıp yapıştırın.'] },
  ],
};
