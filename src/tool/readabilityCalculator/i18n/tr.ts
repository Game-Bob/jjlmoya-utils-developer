import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReadabilityCalculatorUI } from '../ui';
const slug = 'gorsel-okunabilirlik-hesaplayicisi';
const title = 'Görsel Okunabilirlik Hesaplayıcısı WCAG ve APCA';
const description = 'APCA (WCAG 3.0) ile tasarımlarınızın gerçek kontrastını kontrol edin. Yazı tipi ağırlığı ve boyutunun gerçek okunabilirliği nasıl etkilediğini analiz edin.';
const faqData = [
  { question: 'APCA nedir ve WCAG 2.1\'den neden farklıdır?', answer: 'APCA, WCAG 3.0 için geliştirilen Gelişmiş Algısal Kontrast Algoritmasıdır. Eski basit formülün aksine, APCA insan beyninin kontrastı nasıl algıladığını taklit eden matematiksel modeller kullanır.' },
  { question: 'Lc değeri ne anlama geliyor?', answer: 'Lc (Lightness Contrast), APCA tarafından oluşturulan kontrast değeridir. 100 değeri ideal maksimum kontrastı temsil ederken, 60 altındaki değerler sürekli metin okuma için kritik olmaya başlar.' },
  { question: 'Yazı tipi ağırlığı okunabilirliği nasıl etkiler?', answer: 'İnce/Hafif yazı tipleri okunabilir olması için çok daha yüksek kontrast gerektirir. APCA düşük ağırlıklu yazı tiplerini cezalandırır, WCAG\'ı geçen bir tasarımın weight-100 yazı tipi ile pratikte okunamaz olabileceğini gösterir.' },
  { question: 'Bu hesaplayıcı özel mi?', answer: 'Evet, tüm hesaplamalar tarayıcınızda yerel olarak yapılır. Analiz ettiğiniz renkler ve ayarlar hiçbir zaman sunucuya gönderilmez, tasarım projeleriniz için tam gizlilik garantisini sağlar.' },
];
const howToData = [
  { name: 'Renkleri Seçin', text: 'Tasarımınızın metin rengini ve arka plan rengini ayarlamak için renk seçicileri kullanın.' },
  { name: 'Tipografiyi Ayarlayın', text: 'Gerçek tipografiyi simüle etmek için yazı tipi boyutu ve ağırlık kaydırıcılarını taşıyın.' },
  { name: 'Sonuçları Okuyun', text: 'WCAG 2.1 oranını ve APCA Lc değerini kontrol ederek tasarımınızın erişilebilir olup olmadığını bilin.' },
  { name: 'Tavsiyeleri Gözden Geçirin', text: 'Gövde metni, küçük metin ve UI öğeleri için APCA\'ya özgü tavsiyeleri kontrol edin.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowToThing> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'tr' };
const ui: ReadabilityCalculatorUI = { labelColors: 'Temel Renkler', labelText: 'Metin', labelBg: 'Arka Plan', labelTypo: 'Tipografi', labelFontSize: 'Yazı Tipi Boyutu', labelFontWeight: 'Ağırlık', labelCompare: 'Kontrast Karşılaştırması', labelPreview: 'Algısal Ön İzleme', labelApcaRecs: 'APCA Önerileri', labelBody: 'Okuma Metni (Gövde)', labelSmall: 'Küçük Metin / Resim Yazısı', labelUi: 'UI / Düğmeler', statusYes: 'Evet', statusNo: 'Hayır', wcagAAA: 'AAA\'yı Geçer', wcagAA: 'AA\'yı Geçer', wcagLarge: 'Yalnızca Büyük Metin', wcagFail: 'Başarısız', apcaExcellent: 'Mükemmel', apcaGood: 'İyi', apcaMinimal: 'Minimum', apcaPoor: 'Zayıf', previewText: 'Görsel okunabilirlik sadece matematik değildir. Işık ve gölgenin gözlerinizle nasıl etkileşim kurduğudur.', wcagRatioLabel: 'WCAG 2.1 Oranı', apcaLcLabel: 'APCA Lc (WCAG 3)' };
export const content: ToolLocaleContent<ReadabilityCalculatorUI> = {
  slug, title, description, ui,
  faqTitle: 'Sık Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kontrast ve APCA Kaynakları',
  bibliography: [
    { name: 'W3C: WCAG 3.0 Tasarısı (Silver)', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/' },
    { name: 'Myndex: APCA Referans Kılavuzu', url: 'https://apcaw3.myndex.com/' },
    { name: 'MDN: Erişilebilirlik ve Renk Kontrastı', url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Görsel Okunabilirlik Hesaplayıcısı (WCAG vs APCA)', level: 2 },
    { type: 'paragraph', html: 'Renkleriniz ve tipografinizin yeni algısal erişilebilirlik standardı ile gerçek okuma üzerindeki etkisini anlayın. WCAG 2.1 basit bir 2008 matematik formülü kullanır. <strong>APCA</strong>, <strong>WCAG 3.0</strong> için önerilen insan algısını taklit eden yeni modeldir.' },
    { type: 'title', text: 'APCA\'nın Ana Noktaları', level: 3 },
    { type: 'list', items: [ '<strong>Polarite:</strong> Koyu Modu, Açık Moddan farklı şekilde algılandığını anlıyor.', '<strong>Yazı Tipi Ağırlığı:</strong> Tipografi ağırlığına dayalı belirli kontrast seviyeleri (Lc) atar.', '<strong>Doğrusallık:</strong> 2008 göreli parlaklık modelindeki matematik yanlışlıklarını düzeltir.' ] },
    { type: 'title', text: 'Önerilen APCA Seviyeleri', level: 3 },
    { type: 'list', items: [ '<strong>Lc 90+:</strong> Çok küçük veya düşük ağırlıkta metin için ideal.', '<strong>Lc 75:</strong> Ana okuma metni standardı.', '<strong>Lc 60:</strong> Okunabilir orta boyutlu içerik için minimum.', '<strong>Lc 45:</strong> Büyük veya dekoratif öğeler için minimum.' ] },
  ],
};
