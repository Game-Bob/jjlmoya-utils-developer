import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlCleanerUI } from '../ui';
const slug = 'url-izleme-temizleyicisi';
const title = 'URL İzleme Temizleyicisi: UTM, FBCLID ve GCLID Kaldırın';
const description = 'URL\'lerinizden izleme ve reklam parametrelerini otomatik olarak kaldırın. Temiz bağlantıları paylaşın ve dijital gizliliğinizi anında koruyun.';
const faqData = [
  { question: 'Bu araç hangi tür izleme parametrelerini kaldırır?', answer: 'Aracımız, UTM (utm_source, utm_medium, vb.), reklam tıklatma tanımlayıcıları (fbclid, gclid, msclkid) ve e-posta pazarlama kampanyası tanımlayıcıları (mc_cid, _hsenc) dahil olmak üzere en yaygın izleme parametrelerini otomatik olarak algılar ve kaldırır.' },
  { question: 'Bu, web sitesi işlevselliğini etkiler mi?', answer: 'Genel olarak hayır. Bu parametreler neredeyse yalnızca analitik ve pazarlama için kullanılır. Bunları kaldırdığınızda sayfa normal şekilde yüklenir, ancak web sitesi sahibi tıklatmanızın tam kaynağını takip edemez.' },
  { question: 'Buradaki bağlantılarımı işlemek güvenli mi?', answer: 'Kesinlikle. Tüm araçlarımız gibi, işlem % 100 istemci tarafıdır. Bağlantılarınız hiçbir zaman sunucularımıza gönderilmez; her şey kendi tarayıcınızda özel olarak gerçekleşir.' },
  { question: 'Facebook bağlantılarım neden bu kadar uzun?', answer: 'Facebook, platformlarından ayrılan tüm bağlantılara "fbclid" adlı bir parametre ekler. Bu, üçüncü taraf reklamlarını engellemiş olsanız bile, diğer web sitelerindeki etkinliğinizi izlemelerine izin verir.' },
];
const howToData = [
  { name: 'URL\'nizi yapıştırın', text: 'İzleme parametreleri içeren tam URL\'yi girin' },
  { name: 'Temizle\'ye tıklayın', text: 'Araç URL\'yi otomatik olarak analiz edecektir' },
  { name: 'Sonuçları gözden geçirin', text: 'Temiz URL\'yi ve kaldırılan parametrelerin bir listesini göreceksiniz' },
  { name: 'Kopyala ve paylaş', text: 'E-postalarınızda, sosyal medyada veya mesajlarda temiz URL\'yi kullanın' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowToThing> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'tr' };
const ui: UrlCleanerUI = { labelInput: 'İzleme parametreleri içeren URL\'yi yapıştırın', btnClean: 'Temizle', labelCleaned: 'Temiz URL', labelRemoved: 'Kaldırılan İzleyiciler', countLabel: 'Kaldırılan parametreler', reductionLabel: 'Uzunluk azalması', noneDetected: 'Ortak izleme parametreleri algılanmadı.', errorInvalid: 'Lütfen geçerli bir URL girin.', btnCopy: 'Kopyala', btnCopied: 'Kopyalandı' };
export const content: ToolLocaleContent<UrlCleanerUI> = {
  slug, title, description, ui,
  faqTitle: 'Sık Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Gizlilik ve Web İzlemesi Kaynakları',
  bibliography: [
    { name: 'Electronic Frontier Foundation (EFF): Çevrimiçi İzleme Rehberi', url: 'https://www.eff.org/issues/online-behavioral-tracking' },
    { name: 'Google Analytics: UTM Parametre Belgeleri', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: 'Web Gizliliği: Tıklatma Kimliklerinin Etkisi', url: 'https://www.w3.org/community/web-advertising/wiki/Click_Identifiers' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'URL İzleme Temizleyicisi: UTM, FBCLID ve GCLID Kaldırın', level: 2 },
    { type: 'paragraph', html: 'Bağlantılarınızdan görünmez izleyicileri kaldırarak temiz, özel ve profesyonel bir şekilde paylaşın. URL\'lerinizde bu garip kodların ne anlama geldiğini öğrenin.' },
    { type: 'title', text: 'URL İzleme Temizleyicisi Nedir ve Neden Biri\'ye İhtiyacınız Var?', level: 3 },
    { type: 'paragraph', html: 'Hiç bir arkadaşınıza göndermek için bir bağlantı kopyaladınız ve bunun olması gerekenden üç kat uzun olduğunu fark ettiniz mi? Bu ekstra "gürültü", izleme parametreleridir. <strong>İzleme temizleyicisi</strong>, URL\'yi, büyük platformların yaptığınız her tıklatmaya enjekte ettiği tüm reklam ve izleme bilgilerinden "şeritlendirmek" için tasarlanmış bir araçtır.' },
    { type: 'title', text: 'En Yaygın İzleme Parametreleri', level: 3 },
    { type: 'list', items: [ '<strong>UTM (Google Analytics):</strong> utm_source, utm_medium, utm_campaign kampanyaları izlemek için', '<strong>FBCLID:</strong> Facebook tıklatma tanımlayıcısı çerez kısıtlamalarını atlamak için', '<strong>GCLID / DCLID:</strong> Ziyaretleri Google Ads kampanyalarıyla bağlamak için Google Tıklatma Kimliği', '<strong>MSCLKID:</strong> Microsoft Advertising ve Bing tıklatma tanımlayıcısı', '<strong>HubSpot & Mailchimp:</strong> _hsenc, mc_cid gibi pazarlama otomasyon parametreleri', '<strong>LinkedIn & Others:</strong> li_fat_id ve diğer sosyal medya izleyicileri' ] },
  ],
};
