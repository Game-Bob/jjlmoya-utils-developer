import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JwtDecoderUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'jwt-cozucu-ayristirici-ve-claims-denetleyicisi';
const title = 'JWT Cozucu, Ayrıstırıcı ve Claims Denetleyicisi';
const description = 'Bir JSON Web Token yapıstırın, header ve payload kısmını anında cozun, kayıtlı claimsleri inceleyin, suresi dolmus tokenleri tespit edin ve kimlik dogrulama akıslarında hata ayıklamak icin temiz JSON kopyalayın.';

const howTo = [
  {
    name: 'JWTyi yapıstırın',
    text: 'Authorization header, cookie, log kaydı veya kimlik saglayıcıdan bir token kopyalayın ve giris alanına yapıstırın.',
  },
  {
    name: 'Cozulmus header ve payloadı okuyun',
    text: 'Arac tokeni header, payload ve imza olarak ayırır, ardından hızlı inceleme icin JSON segmentlerini ayrı panellerde gosterir.',
  },
  {
    name: 'Onemli claimsleri kontrol edin',
    text: 'Unix zaman damgalarını manuel olarak donusturmeden algoritma, yayıncı, hedef kitle, konu, yayınlanma zamanı, gecerlilik baslangıcı ve sona erme suresini gozden gecirin.',
  },
  {
    name: 'Ihtiyacınız olan veriyi kopyalayın',
    text: 'Ekibinizle temizlenmis bir hata ayıklama anlık goruntusu paylasmanız gerektiginde bir cozulmus bolumu veya tum cozulmus cıktıyı kopyalayın.',
  },
];

const faq = [
  {
    question: 'JWTnin cozulmesi tokenin gecerli oldugunu kanıtlar mı?',
    answer: 'Hayır. Cozme islemi yalnızca base64url ile kodlanmıs header ve payloadı ortaya cıkarır. Bir token ancak imza, yayıncı, hedef kitle, sona erme suresi ve ilgili claimsler uygulama veya kimlik saglayıcı tarafından dogrulandıktan sonra guvenilirdir.',
  },
  {
    question: 'Bu JWT cozucuyu access tokenler ve ID tokenler icin kullanabilir miyim?',
    answer: 'Evet. Cozucu, standart uc parcalı JWT formatını kullandıkları surece OAuth access tokenleri, OpenID Connect ID tokenleri, oturum tokenleri ve servisler arası tokenleri incelemek icin kullanıslıdır.',
  },
  {
    question: 'Imza paneli tokeni neden dogrulamıyor?',
    answer: 'JWT dogrulaması dogru gizli anahtar, acık anahtar veya JWKS yapılandırması gerektirir. Bu arac kasıtlı olarak cozme ve incelemeye odaklanır, boylece gelistiriciler gorunur bir imza dizisinin gecerlilik kanıtıymıs gibi gostermeden token icerigini gorebilir.',
  },
  {
    question: 'Bir JWTde hata ayıklarken ilk olarak neyi kontrol etmeliyim?',
    answer: 'exp, nbf, iss, aud ve alg ile baslayın. Gercek uretim sorunlarının cogu suresi dolmus tokenlerden, saat kaymasından, yanlıs hedef kitle degerlerinden, beklenmedik yayıncı URLlerinden veya guvensiz algoritma varsayımlarından kaynaklanır.',
  },
];

const ui: JwtDecoderUI = {
  tokenLabel: 'JWT tokeni',
  tokenPlaceholder: 'Buraya bir JWT yapıstırın: header.payload.imza',
  sampleButton: 'Ornek yukle',
  clearButton: 'Temizle',
  statusWaiting: 'JSON header, payload ve claims icerigini cozmek icin bir token yapıstırın.',
  statusValid: 'JWT basarıyla cozuldu.',
  statusInvalid: 'Bu gecerli uc parcalı bir JWT gibi gorunmuyor.',
  statusExpired: 'JWT cozuldu, ancak exp claim suresi dolmus.',
  statusUnsigned: 'JWT cozuldu, ancak imzasız veya none algoritması kullanıyor.',
  headerTitle: 'Header',
  payloadTitle: 'Payload',
  signatureTitle: 'Imza',
  claimsTitle: 'Kayıtlı claimsler',
  copyHeader: 'Cozulmus headeri kopyala',
  copyPayload: 'Cozulmus payloadı kopyala',
  copySignature: 'Imzayı kopyala',
  copyAll: 'Tumunu kopyala',
  copiedLabel: 'Kopyalandı',
  invalidTokenTitle: 'Gecersiz JWT',
  invalidTokenBody: 'Tokenin nokta ile ayrılmıs uc base64url segmenti oldugunu kontrol edin.',
  invalidSegmentError: 'Tokenin nokta ile ayrılmıs uc base64url segmenti oldugunu kontrol edin.',
  invalidDecodeError: 'Header veya payload gecerli JSON olarak cozulemedi.',
  emptyJson: '{}',
  signaturePresent: 'Imza segmenti mevcut; dogru anahtarla kimlik dogrulama katmanınızda dogrulayın.',
  signatureMissing: 'Imza segmenti yok',
  algorithmLabel: 'Algoritma',
  typeLabel: 'Tur',
  issuerLabel: 'Yayıncı',
  subjectLabel: 'Konu',
  audienceLabel: 'Hedef kitle',
  issuedAtLabel: 'Yayınlanma',
  notBeforeLabel: 'Gecerlilik baslangıcı',
  expiresAtLabel: 'Sona erme',
  claimMissing: 'Mevcut degil',
  privacyNote: 'Cozme islemi tarayıcı oturumunuzda calısır. Guvenlik politikanız izin vermedikce uretim sırlarını hicbir araca yapıstırmayın.',
  sampleToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnYW1lYm9iLXVzZXItNDIiLCJuYW1lIjoiR2FtZUJvYiBEZXZlbG9wZXIiLCJpc3MiOiJodHRwczovL3d3dy5nYW1lYm9iLmRldiIsImF1ZCI6ImRldmVsb3Blci10b29scyIsImlhdCI6MTcxNzIwMDAwMCwibmJmIjoxNzE3MjAwMDAwLCJleHAiOjE4OTM0NTYwMDAsInJvbGUiOiJhZG1pbiJ9.demo-signature',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<JwtDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'JWT cozucu SSS',
  faq,
  bibliographyTitle: 'JWT spesifikasyonları ve guvenlik referansları',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'JWTleri guvenlik baglamını kaybetmeden cozun',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bir JSON Web Token kucuk gorunur, ancak cogu zaman bir kimlik dogrulama hatasını acıklayan tam ayrıntıyı tasır: imza algoritması, yayıncı, hedef kitle, konu, yayınlanma zamanı, gecerlilik baslangıc zamanı, sona erme suresi ve uygulamaya ozel yetkilendirme claimsleri. Bu <strong>JWT cozucu, ayrıstırıcı ve claims denetleyicisi</strong>, uc token segmentini okunabilir JSONa donusturerek kimlik dogrulama akıslarında daha hızlı hata ayıklamanıza olanak tanır.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Cozulmus olması guvenilir oldugu anlamına gelmez',
      html: 'Herkes bir JWTyi base64url olarak cozebilir. Guven, yalnızca uygulamanız imzayı dogru gizli anahtar, acık anahtar veya JWKS ile dogruladıktan ve ardından yayıncı, hedef kitle, sona erme suresi ve alana ozgu claimsleri onayladıktan sonra baslar. Bu aracı verileri incelemek icin kullanın, bir tokeni gercek olarak kabul etmek icin degil.',
    },
    {
      type: 'title',
      text: 'Her JWT segmentinin size soyledikleri',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Segment', 'Tipik icerik', 'Hata ayıklama degeri'],
      rows: [
        ['Header', 'Algoritma, token turu ve istege baglı anahtar kimligi', 'Tokenin HS256, RS256, ES256 veya baska bir dogrulama stratejisi bekleyip beklemedigini gosterir.'],
        ['Payload', 'Kayıtlı claimsler ve uygulama claimsleri', 'Kimlik, kiracı, kapsamlar, roller, sona erme suresi ve hedef kitle uyusmazlıklarını ortaya cıkarır.'],
        ['Imza', 'Base64url olarak kodlanmıs kriptografik imza baytları', 'Bir imza segmentinin var oldugunu onaylar, ancak baska bir yerde dogru anahtarla dogrulanmalıdır.'],
      ],
    },
    {
      type: 'title',
      text: 'Genellikle bozuk kimlik dogrulamayı acıklayan claimsler',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>exp:</strong> tokenin suresi dolduysa, yenileme mantıgı veya saat ayarları yanlıs olabilir.',
        '<strong>nbf:</strong> token henuz aktif degilse, sunucu ve kimlik saglayıcı saatleri senkronize olmayabilir.',
        '<strong>iss:</strong> yayıncı URLsi yapılandırmadan farklıysa, token yanlıs kiracıdan veya ortamdan gelebilir.',
        '<strong>aud:</strong> hedef kitle API tanımlayıcısıyla eslesmiyorsa, token baska bir kaynak icin olusturulmustur.',
        '<strong>alg:</strong> algoritma beklenmedikse, dogrulayıcınız tokeni reddedebilir veya tehlikeli bir yapılandırma hatasını acıga cıkarabilir.',
      ],
    },
    {
      type: 'title',
      text: 'Gelistirme sırasında JWT ayrıstırıcı kullanım senaryoları',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'On yuz hata ayıklama',
          description: 'Kapsamları, rolleri ve profil claimslerini dogrulamak icin oturum acıldıktan sonra alınan ID tokenleri ve access tokenleri inceleyin.',
          icon: 'mdi:monitor-dashboard',
          points: ['Profil claimslerini kontrol edin', 'Kapsamları ve rolleri dogrulayın', 'Oturum acma ortamlarını karsılastırın'],
        },
        {
          title: 'Arka uc API QA',
          description: 'Beklenen yayıncı ve hedef kitle degerlerini, Authorization headerda gercekte gonderilen token ile karsılastırın.',
          icon: 'mdi:api',
          highlight: true,
          points: ['Hedef kitle yapısını dogrulayın', 'Yayıncı uyusmazlıklarını tespit edin', 'Bearer tokenleri inceleyin'],
        },
        {
          title: 'Kimlik saglayıcı kurulumu',
          description: 'Auth0, Azure AD, Cognito, Keycloak veya ozel bir saglayıcıdan gelen claimslerin uygulamanızın bekledigi sekilde yapılandırılıp yapılandırılmadıgını kontrol edin.',
          icon: 'mdi:account-key',
          points: ['Kiracı verilerini gozden gecirin', 'Ozel claimsleri kontrol edin', 'Saglayıcı eslestirmelerini karsılastırın'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Bu denetleyicinin belirgin hale getirdigi yaygın JWT hataları',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Hızlı kontroller ve guven kararları',
      items: [
        {
          pro: 'Hatalı tokenleri hemen gorun.',
          con: 'Beklenen hedef kitlenizi veya yayıncınızı bilemez.',
        },
        {
          pro: 'Unix zaman damgası claimslerini okunabilir tarihlere donusturun.',
          con: 'Gercek anahtar materyali olmadan bir imzayı dogrulayamaz.',
        },
        {
          pro: 'Eksik yayıncı, hedef kitle, konu veya tur degerlerini tespit edin.',
          con: 'Kapsamların ve rollerin uygulamanız icin guvenli oldugunu kanıtlayamaz.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'En iyi uygulama is akısı',
      items: [
        'Istemcinin veya API'nin gercekte ne aldıgını anlamak icin tokeni cozun.',
        'Uygulama mantıgına dalmadan once exp, nbf, iss, aud, sub ve algyi kontrol edin.',
        'Imzaları ve guven kararlarını yalnızca kimlik dogrulama katmanınızda dogrulayın.',
        'Hassas uretim JWTlerini biletlerde, loglarda veya ekran goruntulerinde paylasmaktan kacının.',
      ],
    },
  ],
};
