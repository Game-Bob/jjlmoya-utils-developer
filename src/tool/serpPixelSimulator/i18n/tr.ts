import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SerpPixelSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'serp-pixel-simulatoru';
const title = 'SERP Simülatörü ve SEO Piksel Sayacı';
const description = 'Google tarzı arama snippet\'lerini gerçek zamanlı olarak önizleyin, başlık ve meta açıklamasının piksel cinsinden genişliğini ölçün ve metninizin tam olarak nerede kesileceğini görün.';

const howTo = [
  {
    name: 'Title etiketini girin',
    text: 'Test etmek istediğiniz sayfa başlığını yazın veya yapıştırın. SERP önizlemesi ve piksel ölçer her tuş vuruşunda güncellenir.',
  },
  {
    name: 'Görünen URL\'yi ekleyin',
    text: 'Snippet\'in bir arayıcının tarayacağı sonuca benzemesi için gerçekçi bir alan adı ve yol kullanın.',
  },
  {
    name: 'Meta açıklamasını yazın',
    text: 'Açıklama metnini ekleyin ve piksel çubuğunu izleyin. Önerilen görsel genişliği aştığında, önizleme üç nokta ile keser.',
  },
  {
    name: 'Masaüstü ve mobil arasında geçiş yapın',
    text: 'Meta verilerini yayınlamadan önce başlık görüntülemesini masaüstü veya mobil kart genişliğiyle karşılaştırın.',
  },
];

const faq = [
  {
    question: 'SEO başlıkları için neden karakter yerine piksel sayılmalı?',
    answer: 'Google arama sonucu kartları görsel genişlikle sınırlıdır. Çok sayıda dar harf içeren bir başlık, geniş harfler, büyük harfler veya kalın görünen glifler içeren bir başlıktan daha fazla karakter alabilir. Piksel ölçümü, görünen sonucun daha gerçekçi bir önizlemesini sunar.',
  },
  {
    question: 'Bu, Google\'ın snippet\'imi tam olarak nasıl keseceğini garanti eder mi?',
    answer: 'Hayır. Google başlık bağlantılarını ve snippet\'leri yeniden yazabilir ve görüntüleme sorguya, cihaza, dile ve deneylere göre değişebilir. Araç, kesilme olasılığı daha düşük meta verileri yazmak için pratik bir görsel kılavuz olarak tasarlanmıştır.',
  },
  {
    question: 'Simülatör hangi piksel sınırlarını kullanıyor?',
    answer: 'Masaüstü için varsayılan başlık sınırı 580 px, mobil için 600 px ve meta açıklama sınırı 920 px\'dir. Bunlar yazım hedefleridir, resmi Google sınırları değildir.',
  },
  {
    question: 'Önizleme neden üç nokta ekliyor?',
    answer: 'Ölçülen metin mevcut piksel genişliğini aştığında, simülatör dizeyi sığan son karakterde keser ve üç nokta ekler; bu, SEO ekiplerinin anlam kaybını tespit etmek için ihtiyaç duyduğu pratik davranışla örtüşür.',
  },
];

const ui: SerpPixelSimulatorUI = {
  titleLabel: 'Title etiketi',
  titlePlaceholder: 'GameBob | Bağımsız Geliştirme Stüdyosu',
  urlLabel: 'Görünen URL',
  urlPlaceholder: 'https://www.gamebob.dev/tr/',
  descriptionLabel: 'Meta açıklaması',
  descriptionPlaceholder: 'Dijital iş akışınızı ve eğlencenizi geliştirmek için tasarlanmış araç ve oyun koleksiyonumuzu keşfedin.',
  deviceLabel: 'Önizleme modu',
  desktopLabel: 'Masaüstü',
  mobileLabel: 'Mobil',
  titlePixelsLabel: 'Başlık genişliği',
  descriptionPixelsLabel: 'Açıklama genişliği',
  charactersLabel: 'karakter',
  previewLabel: 'Canlı Google tarzı önizleme',
  tooLongLabel: 'Çok geniş',
  goodLabel: 'Uygun',
  emptyTitle: 'Başlığınız burada görünecek',
  emptyDescription: 'Meta açıklamanızın önizlemesi siz yazdıkça burada görünecek.',
  defaultTitle: 'GameBob | Bağımsız Geliştirme Stüdyosu',
  defaultUrl: 'https://www.gamebob.dev/tr/',
  defaultDescription: 'Dijital iş akışınızı ve eğlencenizi geliştirmek için tasarlanmış araç ve oyun koleksiyonumuzu keşfedin.',
  fallbackUrl: 'ornek.com.tr',
  fallbackFaviconText: 'G',
  pixelUnit: 'px',
  ellipsis: '...',
  fetchButtonLabel: 'Getir',
  fetchLoadingLabel: 'Getiriliyor...',
  fetchSuccessLabel: 'Meta verileri URL\'den yüklendi.',
  fetchCorsError: 'Tarayıcı bu sayfayı okuyamadı. CORS, bir yönlendirme, karışık içerik veya bir ağ kuralı tarafından engellenmiş olabilir. Meta verileri yine de manuel olarak yapıştırabilir veya düzenleyebilirsiniz.',
  fetchInvalidUrlError: 'Meta verileri getirmeden önce geçerli bir URL girin.',
  fetchNoMetadataError: 'Sayfa getirildi, ancak başlık veya meta açıklaması bulunamadı.',
  fetchGenericError: 'Bu URL\'den meta verileri getirilemedi. Adresi kontrol edin veya alanları manuel olarak doldurun.',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<SerpPixelSimulatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'SERP simülatörü hakkında sık sorulan sorular',
  faq,
  bibliographyTitle: 'Arama sonuçları dokümantasyonu',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Google sonucunuzun nasıl görüneceğini tahmin etmeyi bırakın',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bir title etiketi bir elektronik tabloda mükemmel görünebilir ve yine de arama sonucunda başarısız olabilir. Google, karakter sayısına göre alan ayırmaz; metni görsel bir kart içinde işler. Bu, <strong>GameBob | Bağımsız Geliştirme Stüdyosu</strong> ile aynı sayıda karaktere sahip başka bir başlığın, harflere, büyük/küçük harfe, noktalamaya ve boşluklara bağlı olarak çok farklı genişlikler kaplayabileceği anlamına gelir.',
    },
    {
      type: 'tip',
      title: 'Gerçekten işe yarayan kural',
      html: 'Snippet\'i, önemli vaat üç noktadan sağ çıkacak şekilde yazın. Sayfa türünü, arama niyetini ve tıklamak için en güçlü nedeni piksel sınırından önce yerleştirin. Marka adları faydalıdır, ancak ana faydayı görüş alanından çıkarmamalıdır.',
    },
    {
      type: 'title',
      text: 'Piksel sayacı neyi ölçüyor',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Öğe', 'Önemli olan', 'Sonucu nasıl kullanmalısınız'],
      rows: [
        ['Title etiketi', 'Ham karakter sayısı değil, piksel cinsinden işlenmiş genişlik', 'Birincil anahtar kelimeyi ve tıklama vaadini kesilmeden önce görünür tutun.'],
        ['Görünen URL', 'Görsel güven ve konu netliği', 'Sonucun nereye yönlendirdiğini pekiştiren okunabilir bir yol kullanın.'],
        ['Meta açıklaması', 'Sorguya bağlı davranışa sahip daha geniş bir snippet alanı', 'Google kısaltabileceği veya yeniden yazabileceği için faydayı öne koyun.'],
        ['Cihaz modu', 'Masaüstü ve mobil kartlar farklı hissedilebilir', 'Önemli sayfalar için meta verileri yayınlamadan önce her ikisini de kontrol edin.'],
      ],
    },
    {
      type: 'title',
      text: 'Karakter sınırları neden zayıf bir SEO alışkanlığıdır',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '"Başlıkları 60 karakterin altında tutun" gibi geleneksel tavsiyeler kullanışlıdır, ancak gerçek sorunu gizler. W ve M gibi geniş harfler, büyük harfli kelimeler, ayırıcılar, sayılar ve uzun marka adları farklı alanlar kaplar. Piksel ölçümü, ödünleşimi hemen görünür kılar: bir ifadenin yerini hak edip etmediğini veya daha güçlü bir mesajdan alan çalıp çalmadığını görebilirsiniz.',
    },
    {
      type: 'title',
      text: 'Daha iyi snippet\'ler için pratik bir iş akışı',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Niyetle başlayın:</strong> kullanıcının ne elde ettiğini tanımlayın, sadece sayfanın adını değil.',
        '<strong>Tam başlığı test edin:</strong> simülatöre yapıştırın ve yayınlamadan önce çubuğu izleyin.',
        '<strong>Zayıf kelimeleri çıkarın:</strong> çubuk kırmızıya dönerse, değerli terimleri kesmeden önce dolgu kelimelerini kaldırın.',
        '<strong>Üç noktayı kontrol edin:</strong> kesilmiş önizleme anlamını kaybederse, kesmeyi kabul etmek yerine başlığı yeniden yazın.',
        '<strong>Açıklama için tekrarlayın:</strong> ilk cümlenin değer önerisini tek başına taşıdığından emin olun.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Çubuk kırmızıya döndüğünde',
      html: 'Kırmızı çubuk bir ceza uyarısı değildir. Mevcut metnin seçilen görsel hedeften daha geniş olduğu anlamına gelir, bu yüzden simülatör onu noktalarla keser. Bunu bir editoryal sinyal olarak değerlendirin: gizli kelimelerin vazgeçilebilir olup olmadığına veya snippet\'in daha keskin bir yapıya ihtiyacı olup olmadığına karar verin.',
    },
    {
      type: 'title',
      text: 'Sınırlar, yeniden yazmalar ve gerçekçi beklentiler',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hiçbir simülatör Google\'ın göstereceği tam snippet\'i garanti edemez. Google başlık bağlantılarını yeniden yazabilir, sorgu terimlerini kalınlaştırabilir, meta açıklaması yerine sayfa metnini seçebilir veya farklı aramalar için farklı snippet\'ler gösterebilir. Bu araç en iyi şekilde hızlı bir yazım ve QA adımı olarak kullanılır: sayfa üretime geçmeden önce bariz görsel taşmaları yakalar.',
    },
    {
      type: 'summary',
      title: 'Bu SERP simülatörünün en iyi kullanımı',
      items: [
        'Meta verileri yayınlamadan önce görsel taşmaları yakalamak için piksel çubuğunu kullanın.',
        'Ana arama niyetini ve tıklama vaadini herhangi bir üç noktadan önce görünür tutun.',
        'CORS\'a izin veren URL\'lerden meta verileri getirin, ardından sonucu gerektiğinde manuel olarak düzenleyin.',
        'Önizlemeyi bir yazım kılavuzu olarak değerlendirin, çünkü Google sorgu başına snippet\'leri yeniden yazabilir.',
      ],
    },
  ],
};
