import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VisualCssGridFlexboxGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'gorsel-css-grid-flexbox-olusturucu';
const title = 'Görsel CSS Grid & Flexbox Düzen Oluşturucu';
const description = 'Görsel blokları taşıyarak, kapsayıcıyı yeniden boyutlandırarak, hizalamayı ayarlayarak ve hazır ayarları kullanarak duyarlı düzenler tasarlayın  -  ardından temiz native CSS\'i anında kopyalayın.';

const howTo = [
  { name: 'Hazır ayar veya Flexbox / Grid seçin', text: 'Bir düzen hazır ayarıyla (navbar, cards, hero, sidebar, gallery) başlayın veya Flexbox ile Grid arasında manuel olarak geçiş yapın.' },
  { name: 'Düzeni yeniden boyutlandırın', text: 'Tasarımın mevcut alana nasıl tepki verdiğini test etmek için kapsayıcıyı alt köşeden yeniden boyutlandırın.' },
  { name: 'Hizalama kontrollerini ayarlayın', text: 'Yön, kaydırma, boşluk, sütunlar, justify-content, align-items, align-content, genişlik, yükseklik ve öğe boyutu için kaydırıcıları ve seçimleri kullanın.' },
  { name: 'Üretime hazır CSS kopyalayın', text: 'Görsel sonuç istediğiniz yapıyla eşleştiğinde oluşturulan CSS\'i kopyalayın. Framework bağımlılığı yok.' },
];

const faq = [
  { question: 'Flexbox yerine ne zaman CSS Grid kullanmalıyım?', answer: 'Tek boyutlu düzenler için Flexbox kullanın  -  gezinme çubukları, düğme grupları, kaydırılan kartlar, ortalanmış içerik. Satır ve sütunların birlikte önemli olduğu durumlarda Grid  -  panolar, galeriler, formlar, yapılandırılmış sayfa bölümleri.' },
  { question: 'Bu oluşturucu duyarlı düzenler oluşturabilir mi?', answer: 'Evet. Oluşturulan CSS, yerel flex kaydırma veya tekrarlanan grid sütunları kullanır. Farklı boyutlarda boşluk ve hizalamayı test etmek için görsel tuvali yeniden boyutlandırın.' },
  { question: 'Justify-content ve align-items neden grid ve flex\'te farklı hissediliyor?', answer: 'Flexbox, öğeleri bir ana eksen ve çapraz eksen boyunca dağıtır. Grid, öğeleri önce izlere yerleştirir, sonra içeriği bunların içinde hizalar. İki mod arasında geçiş yapmak bu farkı hemen görünür kılar.' },
  { question: 'Oluşturulan CSS bir framework\'e bağlı mı?', answer: 'Hayır. Sonuç saf native CSS\'tir. Düz HTML, Astro, React, Vue, Svelte, Web Components veya standart CSS kabul eden herhangi bir projede kullanın.' },
  { question: 'Düzen hazır ayarları ne işe yarar?', answer: 'Hazır ayarlar, sıfırdan başlamadan gerçekçi yapılandırmaları görmek için yaygın düzenleri hızlandırır. Her hazır ayar, gerçek bir desen için mod, yön, kaydırma, hizalama ve kapsayıcı boyutunu ayarlar.' },
];

const ui: VisualCssGridFlexboxGeneratorUI = {
  modeLabel: 'Düzen modu',
  flexMode: 'Flexbox',
  gridMode: 'Grid',
  canvasLabel: 'Etkileşimli düzen tuvali',
  addItem: 'Öğe ekle',
  removeItem: 'Öğe kaldır',
  resetLayout: 'Düzeni sıfırla',
  gapLabel: 'Boşluk',
  columnsLabel: 'Grid sütunları',
  widthLabel: 'Kapsayıcı genişliği',
  heightLabel: 'Kapsayıcı yüksekliği',
  justifyLabel: 'Hizala',
  alignLabel: 'Hizala',
  itemSizeLabel: 'Öğe boyutu',
  codeTitle: 'Oluşturulan CSS',
  copyCode: 'CSS kopyala',
  copied: 'Kopyalandı!',
  dragHint: 'Tuvali köşeden yeniden boyutlandırın  -  CSS canlı güncellenir!',
  outputLabel: 'Oluşturulan CSS çıktısı',
  justifyStart: 'Başlangıç',
  justifyCenter: 'Orta',
  justifyEnd: 'Son',
  justifyBetween: 'Space between',
  justifyAround: 'Space around',
  justifyEvenly: 'Space evenly',
  alignStart: 'Başlangıç',
  alignCenter: 'Orta',
  alignEnd: 'Son',
  alignStretch: 'Uzat',
  alignBaseline: 'Taban çizgisi',
  itemPrefix: 'Blok',
  directionLabel: 'Yön',
  directionRow: 'Satır →',
  directionRowReverse: '← Satır ters',
  directionColumn: 'Sütun ↓',
  directionColumnReverse: '↑ Sütun ters',
  wrapLabel: 'Kaydırma',
  wrapNoWrap: 'Kaydırma yok',
  wrapWrap: 'Kaydır',
  wrapWrapReverse: 'Ters kaydır',
  alignContentLabel: 'İçeriği hizala',
  alignContentStart: 'Başlangıç',
  alignContentCenter: 'Orta',
  alignContentEnd: 'Son',
  alignContentBetween: 'Space between',
  alignContentAround: 'Space around',
  alignContentEvenly: 'Space evenly',
  alignContentStretch: 'Uzat',
  presetsLabel: 'Hazır Ayarlar',
  presetNavbar: 'Navbar',
  presetCards: 'Kartlar',
  presetHero: 'Hero',
  presetSidebar: 'Kenar çubuğu',
  presetGallery: 'Galeri',
  shakeLimit: 'En az 2 öğe gerekli!',
  spanHint: 'Grid modunda sütun aralığını (1-3) değiştirmek için öğeye çift tıklayın',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<VisualCssGridFlexboxGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'CSS düzen oluşturucu SSS',
  faq,
  bibliographyTitle: 'CSS Grid ve Flexbox referansları',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'CSS düzenlerini özellikleri ezberleyerek değil, davranışı görerek oluşturun', level: 2 },
    { type: 'paragraph', html: 'CSS Grid ve Flexbox güçlüdür çünkü sabit koordinatlar yerine düzen ilişkilerini tanımlar. Zor olan, <strong>gap</strong>, <strong>justify-content</strong>, <strong>align-items</strong>, yön, kaydırma, izler ve mevcut alanın nasıl etkileştiğini tahmin etmektir. Bu oluşturucu, soyut özellikleri hazır ayarlar ve gerçek zamanlı CSS ile canlı bir oyun alanına dönüştürür.' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: 'Hızlı başlangıç hazır ayarı', icon: 'mdi:view-grid-plus' }, { value: 'Canlı', label: 'Her değişiklikte CSS güncellenir', icon: 'mdi:code-braces' }, { value: '0', label: 'CSS\'te framework bağımlılığı', icon: 'mdi:language-css3' }] },
    { type: 'title', text: 'Flexbox vs Grid: hizalamayı düzeltmeden önce modeli seçin', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: 'Flexbox', description: 'Öğelerin bir satır veya sütunda sıralandığı ve doğal olarak kaydığı tek boyutlu akışlar için en iyisi.', icon: 'mdi:format-align-justify', highlight: true, points: ['Gezinme çubukları', 'Düğme grupları', 'Kaydırılan kartlar', 'Ortalanmış içerik'] }, { title: 'CSS Grid', description: 'Satır ve sütunların kompozisyonun şeklini tanımladığı iki boyutlu yapılar için en iyisi.', icon: 'mdi:grid', points: ['Panolar', 'Galeriler', 'Formlar', 'Editoryal bölümler'] }] },
    { type: 'title', text: 'Her kontrol size ne öğretir', level: 3 },
    { type: 'table', headers: ['Kontrol', 'CSS özelliği', 'Nelere dikkat etmeli'], rows: [['Yön', '<code>flex-direction</code>', 'Ana eksen nasıl akar  -  satırdan sütuna geçmek tüm düzen mantığını değiştirir.'], ['Kaydırma', '<code>flex-wrap</code>', 'Öğelerin tek satırda kalıp kalmadığı veya alan bitince yeni satırlara akıp akmadığı.'], ['Boşluk', '<code>gap</code>', 'Kenarlarda kırılmayan öğeler arası boşluk.'], ['Hizala', '<code>justify-content</code>', 'Boş alanın ana eksen boyunca nasıl dağıtıldığı.'], ['Hizala', '<code>align-items</code>', 'Öğelerin çapraz eksende nasıl konumlandığı.'], ['İçeriği hizala', '<code>align-content</code>', 'Kaydırılmış flex satırlarının veya grid satırlarının ek çapraz eksen alanını nasıl dağıttığı.'], ['Sütunlar', '<code>grid-template-columns</code>', 'Grid\'in öğeler başka bir satıra geçmeden önce kaç eşit iz oluşturduğu.'], ['Kapsayıcı boyutu', '<code>width</code> ve <code>min-height</code>', 'Aynı CSS\'in mevcut alan değiştiğinde nasıl tepki verdiği.']] },
    { type: 'tip', title: 'Önce ölçeklendir, sonra optimize et', html: 'Önce tuvali gerçekçi bir boyuta ölçeklendirin. Ardından boşluk ve hizalamayı ayarlayın. Böylece oluşturulan CSS gerçek koşullarda çalışır.' },
    { type: 'title', text: 'Uyarlayabileceğiniz temiz CSS', level: 3 },
    { type: 'code', ariaLabel: 'Örnek oluşturulan CSS', code: '.layout-playground {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 24px;\n  justify-content: center;\n  align-items: center;\n}' },
    { type: 'diagnostic', variant: 'info', title: 'Görsel ölçeklendirme neden önemlidir', html: 'Birçok düzen hatası yalnızca kapsayıcı daha dar, daha yüksek veya farklı sayıda öğeyle doldurulduğunda ortaya çıkar. CSS canlı güncellenirken ölçeklendirmek, rahatsız edici kaydırmaları ve kırılgan hizalama seçimlerini tespit etmeye yardımcı olur.' },
    { type: 'summary', title: 'Önerilen iş akışı', items: ['Tek boyutlu akışlar için bir hazır ayar veya Flexbox, iki boyutlu yapı için Grid seçin.', 'Düzenin gerçekçi kısıtlamalara dayanması için CSS\'i kopyalamadan önce tuvali ölçeklendirin.', 'Her çocuğa kenar boşluğu eklemek yerine öğeler arası boşluk için gap kullanın.', 'Oluşturulan CSS\'i başlangıç noktası olarak kopyalayın, ardından projeye özel seçiciler ve medya sorguları ekleyin.'] },
  ],
};
