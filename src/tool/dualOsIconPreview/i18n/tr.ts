import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { ToolLocaleContent, SEOSection } from '../../../types';
import type { DualOsIconPreviewUI } from '../ui';

interface LocalizedCopy { locale: string; slug: string; title: string; description: string; faqTitle: string; bibliographyTitle: string; ui: DualOsIconPreviewUI; faq: { question: string; answer: string }[]; howTo: { name: string; text: string }[]; seo: SEOSection[]; }
function createDualOsIconPreviewContent(copy: LocalizedCopy): ToolLocaleContent<DualOsIconPreviewUI> {
  const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: copy.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
  const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: copy.title, description: copy.description, step: copy.howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
  const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: copy.title, description: copy.description, applicationCategory: 'DesignApplication', operatingSystem: 'iOS, Android', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: copy.locale };
  return { slug: copy.slug, title: copy.title, description: copy.description, ui: copy.ui, faqTitle: copy.faqTitle, faq: copy.faq, bibliographyTitle: copy.bibliographyTitle, bibliography, howTo: copy.howTo, schemas: [appSchema, faqSchema, howToSchema], seo: copy.seo };
}
const title = 'iOS ve Android uygulama simgesi denetimi';
const description = 'Bir logo yükleyin ve iPhone ile Pixel üzerindeki görünümünü denetleyin. iOS modlarını, Android uyarlanabilir maskelerini, güvenli boşlukları ve temalı simgeleri tarayıcıda inceleyin.';
const ui: DualOsIconPreviewUI = {
  labelUpload: 'Logo yükle', uploadAction: 'Görsel seç', uploadHint: 'Aynı işaret iki telefonu da doldurur', dropHint: 'PNG, JPG, WEBP veya SVG', labelAppName: 'Uygulama adı', appNamePlaceholder: 'Simgenin altında görünür', labelBrandColor: 'Sistemin vurgu rengi', labelIosAppearance: 'iOS görünümü', iosAppearanceHint: 'İşareti her ana ekran modunda kontrol edin', iosDefault: 'Varsayılan', iosDark: 'Koyu', iosClear: 'Açık', iosTinted: 'Tonlu', labelAndroidShape: 'Android uyarlanabilir maskesi', androidShapeHint: 'Başlatıcı dış şekli değiştirebilir', androidCircle: 'Daire', androidSquircle: 'Squircle', androidRounded: 'Yuvarlak', androidTeardrop: 'Damla', labelAndroidTheme: 'Temalı simge önizlemesi', androidThemeHint: 'Silüeti koruyarak her simgeyi tek sistem tonuyla yeniden renklendirir', iosDeviceLabel: 'iPhone', androidDeviceLabel: 'Pixel', iosHomeLabel: 'Ana ekran', androidHomeLabel: 'Başlatıcı', safeZoneLabel: 'iOS maskesi', adaptiveLayerLabel: 'Uyarlanabilir simge', monochromeLabel: 'Tema katmanı', nameFallback: 'Uygulamanız', emptyLogo: 'Logonuz', fileError: 'Devam etmek için bir görsel dosyası seçin.', statusReady: 'Hazır', statusNeedsReview: 'Logo ekle', stageKicker: 'İki cihaz bağlamı, tek denetim', stageNote: 'Her işlemi bağlam içinde inceleyin', auditTitle: 'Logo denetimi', auditHint: 'Yüklenen görselden yerel olarak ölçülür', auditWaiting: 'Logo yükleyin', auditNotChecked: 'Kontrol edilmedi', auditFile: 'Tuval', auditAspect: 'En boy oranı', auditResolution: 'Çözünürlük', auditIosMask: 'iOS maske boşluğu', auditAndroidZone: 'Android güvenli alanı', auditMargin: 'Minimum kenar boşluğu', auditTransparency: 'Alfa kenarı', auditTransparent: 'Saydam', auditFullBleed: 'Tam kaplama', statusPass: 'GEÇTİ', statusReview: 'İNCELE',
};
const faq = [
  { question: 'Bu uygulama simgesi denetimi neyi kontrol eder?', answer: 'Görsel boyutlarını, en boy oranını, çözünürlüğü, saydam kenar boşluğunu, iOS maske payını ve Android uyarlanabilir güvenli alanını kontrol eder. Uygulama adını başlatıcı boyutunda da inceleyebilirsiniz.' },
  { question: 'iPhone ve Android cihazlarını aynı anda görebilir miyim?', answer: 'Evet. Aynı logo ve uygulama adı iPhone ana ekranında ve Pixel başlatıcısında eş zamanlı gösterilir, böylece iki cihazın bağlamı korunur.' },
  { question: 'Android temalı simge modu ne yapar?', answer: 'Yüklenen simge, yakındaki uygulamalar ve dock dahil sahnedeki tüm Android simgelerine tek bir sistem tonu ve tek renkli işlem uygular. Özgün renkler olmadan silüetin okunup okunmadığını görmenizi sağlar.' },
  { question: 'Logo tarayıcımdan çıkar mı?', answer: 'Hayır. Görsel tarayıcıda yerel olarak okunur ve ölçülür. Bu araç görseli sunucuya yüklemez.' },
  { question: 'Sonuç uygulama mağazasına gönderim için hazır mı?', answer: 'Hayır. Bu yerel bir tasarım ve varlık denetimidir. Son dışa aktarma, başlatıcı davranışı ve mağaza onayı için Apple ve Android araçlarını, gerçek cihazı veya emülatörü kullanın.' },
];
const howTo = [
  { name: 'Logoyu yükleyin', text: 'PNG, JPG, WEBP veya SVG logo seçin. Aynı yerel görsel iki cihaz bağlamında görünür.' },
  { name: 'Uygulama adını girin', text: 'Başlatıcı etiketini yazın ve yakındaki gerçek uygulama etiketlerinin yanında okunabilir olduğunu kontrol edin.' },
  { name: 'iOS görünümlerini inceleyin', text: 'Varsayılan, Koyu, Açık ve Tonlu seçenekleri arasında geçerek zayıf kontrastı veya kaybolan ayrıntıları bulun.' },
  { name: 'Android maskelerini inceleyin', text: 'Daire, squircle, yuvarlak ve damla şekillerini deneyin. Ardından temalı simge modunu açıp tüm başlatıcıdaki tek renkli görünümü inceleyin.' },
  { name: 'Denetim sonucuna göre hareket edin', text: 'Son platform varlıklarını hazırlamadan önce boşluk ekleyin, ince ayrıntıları sadeleştirin veya kontrastı artırın.' },
];

export const content = createDualOsIconPreviewContent({ locale: 'tr', slug: 'ios-android-uygulama-simgesi-denetimi', title, description, faqTitle: 'Sık sorulan sorular', bibliographyTitle: 'Kaynaklar', ui, faq, howTo, seo: [
  { type: 'title', text: 'Yayınlamadan önce uygulama simgenizi denetleyin', level: 2 },
  { type: 'paragraph', html: 'Tek bir logo yükleyin ve iPhone ana ekranı ile Pixel başlatıcısı bağlamında eş zamanlı inceleyin. Bu uygulama simgesi denetimi tuvali, en boy oranını, çözünürlüğü, saydam kenar boşluğunu, iOS maske payını ve Android uyarlanabilir güvenli alanını ölçer. Gerçek uygulama adını da girin; çünkü işaret simge kontrolünü geçse bile başlatıcı etiketi okunamaz hale geldiğinde sorun yaşayabilir.' },
  { type: 'title', text: 'Bu uygulama simgesi denetiminin kontrol ettikleri', level: 3 },
  { type: 'list', items: ['Tuval ve en boy oranı: platform araçları kendi işlemlerini eklemeden önce kaynağın kare olduğunu doğrulayın.', 'Çözünürlük: Büyük başlatıcı bağlamlarında bulanıklaşacak küçük kaynak dosyalarını önceden bulun.', 'Kenar boşluğu: Önemli şekillerin veya harflerin iOS maskesine ya da Android güvenli alanına fazla yakın olup olmadığını görün.', 'Başlatıcı etiketi: Uygulama adını komşu simgelerle aynı ölçekte kontrol edin ve kötü satır bölünmelerini yakalayın.', 'Android temalı işlem: Renklerin zayıf bir silüeti gizlememesi için hedefe, komşu simgelere ve docka tek renkli sistem tonu uygulayın.'] },
  { type: 'title', text: 'İki cihaz bağlamını aynı anda görün', level: 3 },
  { type: 'paragraph', html: 'İki telefon görünümünü tek bir denetim yüzeyi olarak kullanın. iOS Varsayılan, Koyu, Açık ve Tonlu görünümlerini değiştirin, sonra Android daire, squircle, yuvarlak ve damla maskelerini deneyin. Amaç aynı varlığın farklı başlatıcı yüzeylerinde nasıl davrandığı hakkında bilgi toplamaktır; platformları yarıştırmak değildir.' },
  { type: 'title', text: 'Denetimin garanti edemeyecekleri', level: 3 },
  { type: 'paragraph', html: 'Bu, tarayıcı tabanlı bir tasarım ve varlık incelemesidir; Xcode, Android Studio, gerçek cihaz veya emülatör yerine geçmez. Başlatıcılar, işletim sistemi sürümleri ve üreticiler maskeleri, aralıkları, kontrastı ve temalı simge kurallarını farklı uygulayabilir. Riskleri erken bulmak için denetimi kullanın, ardından son platform varlıklarını desteklediğiniz ortamlarda doğrulayın.' },
  { type: 'tip', title: 'Pratik denetim rutini', html: 'Logoyu her işlemde kullanılabilecek en küçük boyutta inceleyin. Yalnızca tek bir arka plan, maske veya özgün renklerle çalışıyorsa yayınlamadan önce grafiği sadeleştirin ya da boşluk ekleyin.' },
] });
