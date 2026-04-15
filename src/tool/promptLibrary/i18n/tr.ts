import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromptLibraryUI } from '../ui';
const slug = 'ozel-prompt-kutuphane';
const title = 'Özel AI Prompt Kütüphanesi';
const description = 'ChatGPT, Midjourney ve Claude promptlarınızı özel olarak düzenleyin, etiketleyin ve kaydedin. Kendi prompt bankanız localStorage\'da.';
const faqData = [
  { question: 'Promptlarım nerede kaydediliyor?', answer: 'Promptlarınız yalnızca tarayıcınızın yerel depolamasında kaydedilir. Harici sunucular kullanmıyoruz, bu nedenle verileriniz %100 özeldir.' },
  { question: 'Tarayıcı çerezlerini veya geçmişimi temizlersem ne olur?', answer: 'Site verilerini veya yerel depolamayı temizlerseniz, kaydedilen promptlarınızı kaybedeceğiniz. Tarayıcınızı sık temizlerseniz yedekleme yapmanızı öneririz.' },
  { question: 'Bunu Midjourney, ChatGPT veya DALL-E için kullanabilir miyim?', answer: 'Evet, her türlü AI talimatıyla uyumludur. Komutlarınızı organize etmek ve tercih ettiğiniz AI aracına kolayca kopyalamak için belirli etiketler oluşturabilirsiniz.' },
];
const howToData = [
  { name: 'Prompt oluşturun', text: 'Yeni Prompt düğmesine tıklayın ve başlığı ile talimatı girin.' },
  { name: 'Etiketler ekleyin', text: 'Promptlarınızı sınıflandırmak için boşluk veya virgülle ayrılmış etiketler yazın.' },
  { name: 'Değişkenleri kullanın', text: 'Kartında doldurulabilir alanlar oluşturmak için metinde [BÖY ŞEKİLDE] parantezleri kullanın.' },
  { name: 'Kopyala ve paylaş', text: 'Bir tıkla panoya kopyala veya paylaş düğmesiyle doğrudan bağlantı paylaş.' },
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
const ui: PromptLibraryUI = {
  placeholderSearch: 'Anahtar kelime veya etiket ara...',
  btnNew: 'Yeni Prompt',
  emptyTitle: 'Kütüphaneniz boş',
  emptyDesc: 'İlk promptunuzu oluşturun ve özel AI deponuzu oluşturmaya başlayın.',
  btnAddFirst: 'İlkini Ekle',
  modalTitleCreate: 'Yeni Prompt Oluştur',
  modalTitleEdit: 'Promptu Düzenle',
  labelTitle: 'Tanımlama başlığı',
  placeholderTitle: 'Örn.: SEO Pazarlama Uzmanı',
  labelContent: 'Talimat (Prompt)',
  placeholderContent: 'AI için ayrıntılı talimatlar yazın...',
  hintContent: 'İpucu: değişkenleri daha sonra doldurmak için [BÖY ŞEKİLDE] parantezleri kullanın.',
  labelTags: 'Etiketler',
  placeholderTags: 'Örn.: pazarlama, seo (eklemek için boşluk veya virgül)',
  btnCancel: 'İptal',
  btnSave: 'Yerel Kaydet',
  ariaLabelStar: 'Promptu yıldızla',
  ariaLabelEdit: 'Promptu düzenle',
  ariaLabelShare: 'Promptu paylaş',
  ariaLabelCopy: 'Promptu kopyala',
  ariaLabelDelete: 'Promptu sil',
  varsTitle: 'Gerekli değişkenler',
  noResults: 'Bu arama için prompt bulunamadı.',
  confirmTitle: 'Prompt silinsin mi?',
  confirmDesc: 'Bu eylem geri alınamaz.',
  btnCancelDelete: 'İptal',
  btnConfirmDelete: 'Kalıcı olarak sil',
};
export const content: ToolLocaleContent<PromptLibraryUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Sık Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Prompt Mühendisliği Referansları',
  bibliography: [
    { name: 'Prompt Mühendisliği Kılavuzu (DAIR.AI)', url: 'https://www.promptingguide.ai/' },
    { name: 'Prompt Mühendisliği Nedir (Google Cloud)', url: 'https://cloud.google.com/discover/what-is-prompt-engineering' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Neden Bir Prompt Kütüphanesine İhtiyacınız Var?', level: 2 },
    { type: 'paragraph', html: 'ChatGPT, Claude veya Midjourney gibi AI araçlarıyla düzenli olarak çalışıyorsanız, muhtemelen kendinizi aynı talimatları tekrarlarken bulmuşsunuzdur. Bir <strong>prompt kütüphanesi</strong>, favori komutlarınızı yeniden yazmada zaman kaybetmeyi durdurmak için son çözümdür.' },
    { type: 'title', text: 'Promptlarınızı Organize Etmenin Yararları', level: 3 },
    { type: 'list', items: [ '<strong>Anında arama:</strong> Aylar önce kullandığınız o spesifik talimatı basit bir metin aramasıyla bulun.', '<strong>Etiket sınıflandırması:</strong> Hızlı filtreleme için promptlarınızı "pazarlama", "programlama" veya "copywriting" olarak etiketleyin.', '<strong>Tek tıkla kopyalama:</strong> Tüm metni tek bir tıkla panoya kopyalayın.', '<strong>Tam gizlilik:</strong> Tüm verileriniz localStorage aracılığıyla tarayıcınızda yerel olarak depolanır.' ] },
    { type: 'title', text: 'Promptlarınızdaki Değişkenler', level: 3 },
    { type: 'paragraph', html: 'Dinamik olarak doldurulabilir alanlar oluşturmak için promptlarınızda <strong>[DEĞİŞKEN]</strong> gösterimini kullanın. Bir kartı açtığınızda, her tanımlanan değişken için giriş görünür. Prompt doldurulmuş değerlerle kopyalanır, AI\'nize yapıştırmaya hazırdır.' },
    { type: 'title', text: 'Promptları Paylaş', level: 3 },
    { type: 'paragraph', html: 'Her prompt bir URL aracılığıyla paylaşılabilir. Paylaş düğmesi, açıldığında oluşturma formunu prompt içeriğiyle önceden doldurulmuş olarak gösteren bir bağlantı oluşturur.' },
  ],
};
