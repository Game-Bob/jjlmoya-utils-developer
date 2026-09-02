import { bibliography } from '../bibliography';
import { createLocalizedContent } from '../localized';
import { ui } from '../ui';

export const content = createLocalizedContent({
  slug: 'acik-veri-csv-json-eksik-degerler-yinelenen-satirlar-denetleyici',
  title: 'Açık veri CSV eksik değer denetleyicisi',
  description: 'CSV ve JSON tablolarını tarayıcıda yerel olarak inceleyerek eksik değerleri, yinelenen satırları, karışık türleri, ayrıştırma hatalarını ve sayısal aykırı değerleri bulun.',
  ui: { ...ui, fileLabel: 'CSV veya JSON tablosu yükle', pasteLabel: 'Ya da tablo yapıştır', exampleButton: 'Örneği incele', profileButton: 'Bu veriyi denetle', clearButton: 'Profili temizle', noFile: 'Dosya seçilmedi', dropHint: 'Dosyayı bırakın veya cihazdan seçin', localBoundary: 'Dosyanız bu tarayıcıda kalır. Yükleme yapılmaz.', intakeTitle: 'Tabloyu inceleme tezgahına getirin', emptyTitle: 'İnceleme tezgahı hazır', factsTitle: 'Verilerinizden ölçülen gerçekler', signalTitle: 'Sinyal haritası', signalIntro: 'İnsan kararı gerektiren sinyallerle başlayın.', warningsTitle: 'Bağlam gerektiren sinyaller', reviewTitle: 'Düzenlenebilir inceleme notu' },
  seo: [
    { type: 'title', text: 'Açık veriyi yeniden kullanmadan önce yapısal sorunları bulun', level: 2 },
    { type: 'paragraph', html: 'Bir tablo düzenli görünebilir ancak boş alanları, yinelenen kayıtları, karışık değer türlerini, bozuk satırları veya uç sayıları gizleyebilir. Bu araç CSV ve JSON dosyalarını tarayıcıda okur ve sinyalleri kaynak satırlara izlenebilen sayımlara dönüştürür.' },
    { type: 'title', text: 'Kamuya açık tabloyu kaynak bağlamıyla inceleyin', level: 2 },
    { type: 'paragraph', html: 'Eksik, null ve boş değerler ayrı sayılır. Yinelenen satırlar satır numaralarıyla bildirilir; sayısal aykırı değerler Tukey 1,5 IQR sınırlarıyla işaretlenir. Sinyal bir inceleme sorusudur, kalite kararı değildir.' },
    { type: 'list', items: ['CSV başlığını veya JSON yapısını kaynak belgeleriyle karşılaştırın.', 'Kayıtları silmeden önce yinelenen satırları inceleyin.', 'Karışık türleri ve aykırı değerleri birimler ve alan bağlamıyla değerlendirin.', 'Kaynağı, dönemi, tanımları ve kullanım amacını profilin yanında saklayın.'] },
  ],
  faqTitle: 'Tablo denetimi hakkında sorular',
  faq: [
    { question: 'Hangi dosyalar denetlenebilir?', answer: 'Başlık satırı içeren bir CSV veya nesne dizisi içeren bir JSON. JSON nesnesi diziyi data, rows ya da records altında da taşıyabilir.' },
    { question: 'Eksik, null, boş ve sıfır nasıl ayrılır?', answer: 'Eksik JSON özelliği, JSON null, boş metin ve sayısal sıfır ayrı kaydedilir.' },
    { question: 'Aykırı değerler nasıl hesaplanır?', answer: 'Araç, çeyrekler arası aralığın 1,5 katına dayalı Tukey sınırlarını kullanır ve etkilenen satırları gösterir.' },
    { question: 'Bu, verinin yüksek kaliteli olduğunu kanıtlar mı?', answer: 'Hayır. Yapısal sinyalleri ölçer; anlamsal doğruluğu, doğruluğu, kökeni, yasallığı veya uygunluğu kanıtlamaz.' },
  ],
  bibliography,
  howTo: [
    { name: 'Tabloyu hazırlayın', text: 'Kararlı bir CSV başlığı veya JSON dizisi kullanın ve kaynak bağlamını hazır tutun.' },
    { name: 'Veriyi yükleyin', text: 'Yerel dosya seçin, metin yapıştırın veya örneği açın.' },
    { name: 'Sinyalleri okuyun', text: 'Eksik, boş, yinelenen, karışık tür ve aykırı değer sayılarını inceleyin.' },
    { name: 'Kaynak satırlarını izleyin', text: 'Satır numaraları ve sütun bulgularıyla özgün dosyaya dönün.' },
    { name: 'İncelemeyi düzenleyin', text: 'Amacı ve kararları ekleyin, notu kaynakla birlikte saklayın.' },
  ],
});
