import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromoteThisWebsiteUI } from '../ui';
import { bibliography } from '../bibliography';

const localized = {
    slug: 'bu-web-sitesini-tanit',
    title: 'Bu web sitesini tanıt',
    description: 'İspanyolca jjlmoya.es ve uluslararası GameBob.dev için dahili propaganda masası. Bob akışın utanç verici olduğuna karar vermeden kendi sayfalarının ekran görüntülerini sosyal görsellere dönüştür.',
    faqTitle: 'Kediyi kızdırmadan siteyi tanıt',
    bibliographyTitle: 'Operasyondaki sayfalar',
    faq: [
      { question: 'Bu araç aslında kimin için?', answer: 'İspanyolca jjlmoya.es ve uluslararası GameBob.dev sayfalarını tanıtmak için. Diğer herkes pencereden bakabilir.' },
      { question: 'Ekran görüntüsünü doğrudan yapıştırabilir miyim?', answer: "Evet. Görüntüyü kopyalayıp Ctrl+V'ye bas. Doğru formatta gelen kanıtı kedi kurulu bile kabul eder." },
      { question: "Üretim URL'si yapıştırınca ne olur?", answer: 'Araç meta başlığını okur, doğru markayı seçer ve Open Graph görselini yükler. Slug artık terfi alamaz.' },
      { question: 'Neden iki marka var?', answer: 'jjlmoya.es İspanyolca, GameBob.dev uluslararası sayfadır. Kediler bu ayrımı tamamen görmezden gelir.' },
      { question: 'Görsellerim yükleniyor mu?', answer: 'Hayır. Görseller tarayıcıda kalır ve kompozisyon yerel olarak oluşturulur. Yalnızca bilerek indirdiğin PNG dışarı çıkar.' },
    ],
    howTo: [
      { name: 'Ekran görüntüsü yapıştır', text: 'jjlmoya.es veya GameBob.dev ekran görüntüsünü Ctrl+V ile yapıştır. Kurul kendi imparatorluğundan kanıt istiyor.' },
      { name: 'Markayı seç', text: 'İspanyolca için jjlmoya.es, uluslararası sayfa için GameBob.dev seç. Kedi binanın zaten sahibi.' },
      { name: 'Görseli düzenle', text: 'Ekran görüntüsünü, başlığı, logoyu, arka planı ve maskotu bilinçli görünecek şekilde sürükle.' },
      { name: 'PNG dışa aktar', text: "Bob övgüyü üstlenmeden önce istediğin boyutta PNG'yi indir." },
    ],
    seoTitle: 'jjlmoya ve GameBob için resmi propaganda masası',
    seoIntro: 'Bu, branding kelimesini yeni keşfetmiş biri için genel bir sosyal görsel düzenleyici değil. Kediler denetlerken jjlmoya.es ve GameBob.dev sayfalarımızı tanıtmak için var.',
    seoBody: "Gerçek bir ekran görüntüsü yapıştır veya üretim URL'si yükle. Araç slugdan tahmin etmek yerine sayfa başlığını okur ve kompozisyon sırasında resmi Open Graph görselini görünür tutar. Yerleşimi, markayı, arka planı, logoyu ve maskotu paylaşım formatına göre düzenleyip hazır PNG dosyasını araçtan ayrılmadan indirebilirsin.",
    seoTip: 'jjlmoya.es veya GameBob.dev üretim URLsiyle başla. Başlık, marka veya görsel yüklenmezse kurul önce ağı, sonra insanı, en son kedileri suçlar.',
};
const ui: PromoteThisWebsiteUI = {
    urlLabel: "Web sitesi URL'si", urlPlaceholder: 'https://www.example.com/araclar/ornek/', applyUrl: 'Uygula',
    formatLabel: 'Biçim', panoramic: 'Panoramik · 1536 × 1024', instagram: 'Instagram · 1080 × 1350', square: 'Kare · 1080 × 1080', story: 'Hikâye · 1080 × 1920',
    titleLabel: 'Başlık', titlePlaceholder: 'Görsel için kısa bir başlık', titleSizeLabel: 'Başlık yazı boyutu', titleBoxSizeLabel: 'Başlık kutusu boyutu', titleStyleLabel: 'Başlık tasarımı',
    brandLabel: 'Marka', brandStyleLabel: 'Marka tasarımı', advancedLabel: 'Gelişmiş kompozisyon', assetsLabel: 'Varlıklar', backgroundLabel: 'Arka plan', toolLabel: 'Araç ekran görüntüsü', logoLabel: 'Logo', mascotLabel: 'Maskot',
    layersLabel: 'Katmanlar', backgroundLayer: 'Arka plan', toolLayer: 'Araç', logoLayer: 'Logo', mascotLayer: 'Maskot', titleLayer: 'Başlık', reset: 'Sıfırla', download: 'PNG indir', activeLayer: 'Etkin katman',
    canvasHint: 'Katmanları doğrudan tuval üzerinde sürükle. Ctrl+V ile ekran görüntüsü yapıştır.', pasted: 'Ekran görüntüsü araç katmanı olarak yapıştırıldı.', urlApplied: 'URL uygulandı. Başlığı ayarla ve tanıtmak istediğin ekran görüntüsünü ekle.', urlLoading: 'Sayfa başlığı ve resmi görsel okunuyor...', urlFailed: "Sayfa okunamadı. URL'yi kontrol et veya varlıkları elle ekle.", fileLoaded: 'Varlık yüklendi.',
    titlePaper: 'Editoryal kâğıt', titleRibbon: 'Katlanmış şerit', titleInk: 'Mürekkep lekesi', titlePoster: 'Gece afişi', titleTicket: 'Yırtık bilet', titleMarker: 'Malzeme alt çizgisi', titleSplit: 'Bölünmüş blok', titleCapsule: 'Minimal kapsül', titleCorner: 'Editoryal köşe', titleVertical: 'Dikey vurgu',
    brandPlain: 'Sade marka', brandPlaque: 'Seramik plaka', brandTicket: 'Giriş bileti', brandStamp: 'Lastik damga', brandNeon: 'Neon tabela', brandRibbon: 'Sinyal şeridi', brandCorner: 'Editoryal köşe', brandPixel: 'Piksel blok', brandHalo: 'Yumuşak hale', brandEditorial: 'Editoryal çizgi', defaultTool: 'Araç ekran görüntüsünü yapıştır',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: localized.faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};
const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: localized.title,
  description: localized.description,
  step: localized.howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};
const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: localized.title,
  description: localized.description,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<PromoteThisWebsiteUI> = {
  slug: localized.slug,
  title: localized.title,
  description: localized.description,
  ui,
  faqTitle: localized.faqTitle,
  faq: localized.faq,
  bibliographyTitle: localized.bibliographyTitle,
  bibliography,
  howTo: localized.howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: localized.seoTitle, level: 2 },
    { type: 'paragraph', html: localized.seoIntro },
    { type: 'stats', columns: 3, items: [{ value: '2', label: ui.brandLabel, icon: 'mdi:domain' }, { value: '4', label: ui.formatLabel, icon: 'mdi:crop' }, { value: '0', label: ui.activeLayer, icon: 'mdi:cat' }] },
    { type: 'title', text: localized.title, level: 3 },
    { type: 'paragraph', html: localized.seoBody },
    { type: 'title', text: localized.faqTitle, level: 3 },
    { type: 'paragraph', html: localized.seoBody },
    { type: 'table', headers: [ui.toolLayer, ui.titleLayer, ui.brandLabel], rows: [[ui.toolLabel, ui.titleLabel, ui.logoLabel]] },
    { type: 'tip', title: localized.faqTitle, html: localized.seoTip },
  ],
};
