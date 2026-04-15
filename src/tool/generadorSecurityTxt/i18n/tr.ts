import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GeneradorSecurityTxtUI } from '../ui';

const slug = 'security-txt-generator-rfc-9116-tr';
const title = 'Security.txt Oluşturucu RFC 9116';
const description = 'Güvenlik açığı raporlamayı kolaylaştırmak ve uluslararası web güvenliği standartlarına uyum sağlamak için profesyonel security.txt dosyası oluşturun.';

const faqData = [
  {
    question: 'security.txt dosyası nedir?',
    answer: 'Bu bir standart (RFC 9116) olup, web sitelerinin güvenlik araştırmacılarının güvenlik açıklarını sorumlu bir şekilde bildirmek için onlarla nasıl iletişim kurması gerektiğini tanımlamasına izin verir.',
  },
  {
    question: 'security.txt dosyası nereye yerleştirilmeli?',
    answer: 'Önerilen standart konum, etki alanınızın /.well-known/ klasörüdür ve bu da https://example.com/.well-known/security.txt URL\'sini oluşturur.',
  },
  {
    question: 'Sona erme tarihi neden zorunludur?',
    answer: 'İletişim bilgilerinin eski kalmaması için. Dosyada geçerli bir son kullanma tarihi yoksa, araştırmacılar iletişim kanallarının aktif kalıp kalmadığına güvenmiyor olabilirler.',
  },
  {
    question: 'security.txt\'te hangi alanlar gereklidir?',
    answer: 'RFC 9116\'ya göre gerekli alanlar "Contact" (e-posta adresi veya URL ile) ve "Expires" (ISO 8601 formatında gelecek bir tarih) dir.',
  },
];

const howToData = [
  { name: 'Alanları doldurun', text: 'E-posta adresinizi veya iletişim URL\'sini tamamlayın ve sona erme tarihini seçin.' },
  { name: 'İsteğe bağlı alanlar ekleyin', text: 'PGP anahtarınız, güvenlik politikası veya iş ilanı panosu gibi ek bilgiler ekleyin.' },
  { name: 'Dosyayı indirin veya kopyalayın', text: '"Download .txt" seçeneğine tıklayın veya içeriği kopyalayarak security.txt olarak kaydfedin.' },
  { name: 'Sunucuya yükleyin', text: 'Dosyayı etki alanınızın /.well-known/ klasörüne yerleştirin.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
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

const ui: GeneradorSecurityTxtUI = {
  titleBasicFields: 'Gerekli Alanlar',
  labelContact: 'İletişim (E-posta veya URL)',
  placeholderContact: 'mailto:security@example.com veya https://example.com/contact',
  contactTip: 'Güvenlik açığı raporlarının gönderileceği adres.',
  labelExpires: 'Sona Erme Tarihi',
  expiresTip: 'Gelecekte bir yıldan fazla olmamas gerekir.',
  titleOptionalFields: 'İsteğe Bağlı Alanlar',
  labelEncryption: 'Ortak Anahtar',
  placeholderEncryption: 'https://example.com/pgp-key.txt',
  encryptionTip: 'Şifreli raporlar için PGP anahtarınıza bağlantı.',
  labelPolicy: 'Güvenlik Politikası',
  placeholderPolicy: 'https://example.com/security/policy/',
  policyTip: 'Güvenlik açıklarını nasıl işlediğinizi açıklayan sayfa.',
  labelAcknowledgments: 'Teşekkürler',
  placeholderAcknowledgments: 'https://example.com/security/hall-of-fame/',
  acknowledgmentsTip: 'Güvenlik araştırmacılarına teşekkür eden sayfa.',
  labelHiring: 'İş İlanları',
  placeholderHiring: 'https://example.com/jobs',
  hiringTip: 'Güvenlik iş açılışlarına bağlantı.',
  resultTitle: 'Önizleme(security.txt)',
  btnCopy: 'Kodu Kopyala',
  btnDownload: '.txt İndir',
  copiedMessage: 'Kopyalandı',
  generatingMessage: 'security.txt dosyası oluşturuluyor...',
  comment: 'Oluşturuldu',
};

export const content: ToolLocaleContent<GeneradorSecurityTxtUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Sık Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Security.txt Hakkında Teknik Kaynaklar',
  bibliography: [
    { name: 'RFC 9116: A File Format to Aid in Security Vulnerability Disclosure', url: 'https://datatracker.ietf.org/doc/html/rfc9116' },
    { name: 'Security.txt Official Website', url: 'https://securitytxt.org/' },
    { name: 'OWASP: Vulnerability Disclosure Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Security.txt dosyası nedir ve neden bir tane oluşturmalısınız?', level: 2 },
    {
      type: 'paragraph',
      html: 'Günümüzün siber güvenlik ortamında saydamlık ve iletişim esastır. Sistem yöneticisi, web geliştirici veya dijital işletme sahibiyseniz, muhtemelen <code>robots.txt</code> veya <code>ads.txt</code> gibi makinelerin web sitenizi anlamasına yardımcı olan metin dosyaları hakkında zaten bilgilisiniz. Ancak platformunuzun bütünlüğü için daha az bilinen ancak kritik bir standart vardır: <strong>Security.txt</strong>, <strong>RFC 9116</strong> tarafından tanımlanmıştır.',
    },
    {
      type: 'paragraph',
      html: '<strong>Bir security.txt dosyası oluşturmanın</strong> amacı, güvenlik araştırmacılarına bir güvenlik açığı keşfettikleri zaman web sitenizin yöneticilerine başvurmak için standart bir yol sağlamaktır. Bu dosya olmadan, sisteminizde bir kusur bulan etik bir hacker, kime bildireceğini bilmiyor olabilir; bu genellikle bilgilerin kaybolması, bildirim olmadan yayınlanması veya kötü niyetli aktörlerce sömürülmesine neden olur.',
    },
    { type: 'title', text: 'RFC 9116\'ya uygun Security.txt dosyasını oluşturma ve yükleme', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>Güvenlik araştırmacısı iletişim standardı</strong>, bu dosyanın sunucunuzda belirli bir konumda yer alması gerektiğini belirler: <code>/.well-known/</code> klasörü. Bu nedenle son yol genellikle <code>https://yourdomain.com/.well-known/security.txt</code> şeklindedir. Bunu köke yerleştirmeye izin verilse de (<code>/security.txt</code>), ilk seçenek otomatik tarama araçlarında tercih edilir.',
    },
    { type: 'title', text: 'Kaçırmanız gereken zorunlu alanlar', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>security.txt kodunuzu elde ettiğinizde</strong> en az iki kritik öğe içerdiğinden emin olmalısınız:',
    },
    {
      type: 'list',
      items: [
        '<strong>Contact:</strong> Raporların gönderileceği e-posta adresi veya form URL\'si. <code>mailto:</code> veya <code>https://</code> ile başlamalıdır.',
        '<strong>Expires:</strong> Dosyadaki bilgilerin artık geçerli olmadığı zamanı gösteren ISO 8601 formatında tarih. Tarihi gelecekte bir yıldan daha ileri ayarlamamaması önerilir.',
      ],
    },
    { type: 'code', text: 'Contact: mailto:security@yourcompany.com\nExpires: 2025-12-31T23:59:59.000Z' },
    { type: 'title', text: 'Gelişmiş güvenlik için isteğe bağlı alanlar', level: 3 },
    {
      type: 'paragraph',
      html: 'Daha sağlam <strong>web sitesi koruması</strong> arayan siteler için standart ek alanlar sunar:',
    },
    {
      type: 'list',
      items: [
        '<strong>Encryption:</strong> Araştırmacıların size şifreli ve güvenli bilgi gönderebilmeleri için herkese açık PGP anahtarınıza bağlantı.',
        '<strong>Policy:</strong> Sorumlu ifşa sürecini açıkladığınız güvenlik politikası sayfanıza bağlantı.',
        '<strong>Acknowledgments:</strong> Araştırmacılar için "Şeref Listesi" veya takdir duvarına bağlantı.',
        '<strong>Hiring:</strong> Siber güvenlik iş açılışlarınıza bağlantı.',
      ],
    },
    { type: 'title', text: 'Ücretsiz Security.txt oluşturucumuz kullanmanın faydaları', level: 2 },
    {
      type: 'paragraph',
      html: 'Pek çok insan <strong>bir web sitesinin güvenlik iletişimini hızlı bir şekilde nasıl alacağını</strong> merak ediyor. Aracımızı kullanarak karmaşık teknik belgeleri okumaya gerek kalmadan RFC 9116 formatına kesin bir şekilde uyum sağlarsınız.',
    },
    {
      type: 'paragraph',
      html: 'Bir oluşturucu kullanmak yaygın söz dizimine uyarak hataları önler. Örneğin, <code>mailto:</code> ön ekini unutmak veya son kullanma tarihinde saat dilimini yanlış biçimlendirmek, araştırmacıların otomatik araçlarının dosyanızı göz ardı etmesine neden olabilir.',
    },
    { type: 'title', text: 'SEO ve web itibarı üzerindeki etki', level: 3 },
    {
      type: 'paragraph',
      html: '<code>security.txt</code> dosyası Google\'de sayfa hızı veya HTTPS gibi doğrudan bir sıralama faktörü olmasa da dolaylı bir etkisi vardır. Güvenlik açıklarını iyi yöneten bir web sitesi, SEO\'yu saatler içinde mahveden gürültülü hacklerden (sahte, spam enjeksiyonu) kaçınır. Ek olarak, birçok kurumsal güvenlik derecelendirme platformu (SecurityScorecard veya BitSight gibi) bu standardı uygulayan etki alanlarına ekstra puan verir.',
    },
    { type: 'title', text: 'Sonuç: Daha güvenli bir web için basit bir adım', level: 2 },
    {
      type: 'paragraph',
      html: 'Özet olarak, <strong>security.txt indirmek</strong> ve sunucunuza yüklemek, bugün yapabileceğiniz en hızlı ve en etkili güvenlik bakım görevlerinden biridir. "İyi çocuklara" kolaylaştırırsınız, meraklıları caydırırsınız ve dünyaya kullanıcı gizliliği ve verilerine ciddiye aldığınızı gösterirsiniz.',
    },
    {
      type: 'paragraph',
      html: 'Bir güvenlik ihlali yaşayana kadar bunu sağlamadığınız için pişman olmayı beklemeyin. Şu anda <strong>ücretsiz çevrimiçi security.txt oluşturucumuzu</strong> kullanın ve dijital ekosisteminizdeki kontrolü elinizde tutun.',
    },
  ],
};

