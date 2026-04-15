import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileMockupGeneratorUI } from '../ui';

const slug = 'mobil-mockup-uretec';
const title = 'Mobil Mockup Üreticisi App Store İçin. iPhone ve Google Pixel';
const description = 'App Store ve Google Play için profesyonel sunumlar oluşturun. iPhone ve Pixel mockup\'ları özel arka planlarla, panoramik düzenlerle ve yüksek çözünürlüklü toplu dışa aktarma.';

const faqData = [
  { question: 'Bu ekran görüntüleri App Store ve Google Play için geçerli mi?', answer: 'Evet, oluşturulan görüntüler uygulama mağazalarının oran ve kalite gereksinimlerini karşılıyor. Dışa aktarmadan önce doğru cihazı seçmeniz yeterli (iOS için iPhone, Android için Pixel).' },
  { question: 'Kendi özel arka planlarımı kullanabilir miyim?', answer: 'Kesinlikle. Premium gradyan kütüphanemizin yanı sıra, bilgisayarınızdan herhangi bir resmi yükleyerek mockup\'larınızın arka plan ortamı olarak kullanabilirsiniz.' },
  { question: 'Ticari kullanım için ücretsiz mi?', answer: 'Evet, oluşturulan mockup\'ları ticari projeler, portföyler veya sunumlar için hiçbir maliyet ve filigransız kullanabilirsiniz.' },
  { question: 'Ekran görüntülerim herhangi bir sunucuya kaydediliyor mu?', answer: 'Hayır. Üretici %100 tarayıcınızda yerel olarak çalışır. Özel resimleriniz hiçbir zaman bilgisayarınızdan çıkmaz.' },
];

const howToData = [
  { name: 'Ekran görüntülerini yükleyin', text: 'Sunmak istediğiniz mobil uygulamanızın ekran görüntülerini sürükleyin veya seçin.' },
  { name: 'Cihaz seçin', text: 'Hedef mağazaya uygun olarak akıllı telefon modelini seçin (iOS için iPhone 15 Pro Max veya Android için Google Pixel 8).' },
  { name: 'Ortamı özelleştirin', text: 'Arka planı ayarlayın, cihaz açısını belirleyin, pazarlama metni ekleyin ve kompozisyon düzenini seçin.' },
  { name: 'HD\'de indirin', text: 'Tüm sonuçları uygulama mağazasında yüklemeye hazır yüksek çözünürlüklü WebP biçiminde dışa aktarın.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'DesignApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'tr',
};

const ui: MobileMockupGeneratorUI = {
  labelUpload: 'Ekran Görüntülerini Yükleyin',
  dropHint: 'Resimlerinizi buraya sürükleyin',
  dropFormats: 'PNG, JPG veya WEBP',
  btnMassReplace: 'Toplu Değiştir',
  massReplaceHint: 'Mevcut resimleri değiştirir ve ön ayarlarınızla metni korur. Hızlı yinelemeler için idealdir.',
  labelSettings: 'Global Ayarlar',
  labelDevice: 'Cihaz',
  labelFont: 'Tipografi',
  labelBackground: 'Arka Plan',
  titleSwapColors: 'Renkleri değiştir',
  labelAngle: 'Açı',
  labelSafeArea: 'Güvenli Alan (Üst/Alt)',
  labelSafeAreaColor: 'Alan rengi',
  emptyTitle: 'Henüz resim yok',
  emptySubtitle: 'Tasarlamaya başlamak için ekran görüntülerinizi yükleyin',
  btnClearAll: 'Canvas\'ı Temizle',
  btnExport: 'Tümünü Dışa Aktar (.zip)',
  cardTitleDuplicate: 'Sahneyi Çoğalt',
  cardTitleReplace: 'Geçerli Ekran Görüntüsünü Değiştir',
  cardSectionLayouts: 'Ana Düzenler',
  cardSectionBranding: 'Marka ve Metin',
  cardTitleResetText: 'Metni Sıfırla',
  cardLabelColor: 'Renk',
  cardTextPlaceholder: 'Metninizi buraya yazın...',
  cardSectionDevice: 'Cihaz Düzeni',
  cardTitleResetDevice: 'Konumu Sıfırla',
  cardSectionScene: 'Rekvisitalar ve Arka Plan',
  cardBtnSpecialBg: 'Özel Arka Plan',
  cardBtnDeleteScene: 'Sahneyi Sil',
  cardRangeLabelSize: 'Boyut',
  cardRangeLabelX: 'X Ekseni',
  cardRangeLabelY: 'Y Ekseni',
  cardRangeLabelRotation: 'Rotasyon',
  cardRangeLabelScale: 'Ölçek',
  presetClassic: 'Klasik',
  presetMobileBottom: 'Mobil Alt',
  presetMobileTop: 'Mobil Üst',
  presetFocus: 'Odak',
  presetDynamic: 'Dinamik',
  presetSplitLeft: 'Sol Bölme',
  presetSplitRight: 'Sağ Bölme',
  presetImageLeft: 'Sol Resim',
  presetImageRight: 'Sağ Resim',
  confirmClear: 'Tüm mockup\'ları silmek istediğinizden emin misiniz?',
  processingExport: 'İşleniyor...',
  exportDone: 'Bitti!',
};

export const content: ToolLocaleContent<MobileMockupGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Sık Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Referanslar',
  bibliography: [
    { name: 'Apple App Store Ekran Görüntüsü Gereksinimleri', url: 'https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications' },
    { name: 'Google Play Ekran Görüntüsü Gereksinimleri', url: 'https://support.google.com/googleplay/android-developer/answer/9866151' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Ekran görüntülerinizi sonraki seviyeye taşıyın', level: 2 },
    { type: 'paragraph', html: 'Kendinizi basit ekran görüntüleriyle sınırlamayın. Mockup aracımız, geliştericilerin ve tasarımcıların Photoshop veya Figma\'ya ihtiyaç duymadan yüksek etkili görsel varlıklar oluşturmasını sağlar.' },
    { type: 'title', text: 'Ana Düzenler ile Güç', level: 3 },
    { type: 'grid', columns: 2 },
    { type: 'card', title: 'App Store ve Google Play', html: '<p>Dönüşüm hızınızı optimize edin. iPhone 15 Pro Max ve Pixel 8 mockup\'ları uygulama mağazası listeleri için dünya standardıdır.</p>' },
    { type: 'card', title: 'Pitch Deck\'ler ve Pazarlama', html: '<p>Fikirlerinizi yetkiyle sunun. Yatırımcı sunumları, sosyal medya kampanyaları ve profesyonel UI/UX tasarım portföyleri için mükemmeldir.</p>' },
    { type: 'title', text: 'Profesyonel iş akışı', level: 3 },
    { type: 'tip', html: 'Instagram karuselleriyle Instagram\'da veya App Store\'da ekran görüntülerinde bir görüntüden diğerine kayan sürekli mockup\'lar oluşturmak için "Sol Bölme" ve "Sağ Bölme" ön ayarlarını kullanın.' },
  ],
};
