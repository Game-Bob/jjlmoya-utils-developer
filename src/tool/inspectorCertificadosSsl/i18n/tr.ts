import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InspectorCertificadosSslUI } from '../ui';

const slug = 'ssl-tls-certificate-inspector-tr';
const title = 'Çevrimiçi SSL/TLS Sertifika İnceleme PEM ve CRT Dosyalarını Görüntüle';
const description = 'SSL sertifika dosyalarını (.pem, .crt, .der) yerel olarak analiz edin. Sona erme tarihlerini, yayımcıları, konuları ve SHA-256 parmak izlerini kontrol edin ve verileriniz tarayıcınızdan çıkmaz.';

const faqData = [
  {
    question: 'SSL sertifikamı bu web sitesinde analiz etmek güvenli midir?',
    answer: 'Evet, kesinlikle güvenlidir. Bu yardımcı program 100% istemci tarafında çalışır. .pem veya .crt dosyanızı sürüklediğinizde tarayıcı verileri yerel olarak okur ve hiçbir sunucuya göndermez. Tamamen özel.',
  },
  {
    question: 'Hangi sertifika biçimleri desteklenir?',
    answer: 'Araç en yaygın biçimleri destekler: PEM ("BEGIN CERTIFICATE" başlıklarıyla Base64 kodlu) ve DER (ikili biçim), genellikle .pem, .crt, .cer veya .der uzantılarına sahiptir.',
  },
  {
    question: '.crt dosyasının sona erme tarihini görebilir miyim?',
    answer: 'Evet, dosyayı yüklediğinizde hemen "Geçerlilik Durumu" bölümünü göreceksiniz ve bu, tam sona erme tarihini ve sertifikanın bugün geçerli olup olmadığını gösterir.',
  },
  {
    question: 'Sertifika yayımcısı ne yapar?',
    answer: 'Yayımcı (Issuer), sitenin kimliğini doğrulayan Sertifika Otoritesini (CA) gösterir. Sertifikanın ticari tarayıcılar tarafından tanınıp tanınmayacağını bilmek önemlidir.',
  },
  {
    question: 'SHA-256 parmak izleri nasıl hesaplanır?',
    answer: 'Sertifikanın ikili içeriğine doğrudan hash algoritması uygulanarak hesaplanırlar. Dosyanın değiştirilmediğini ve sunucunun beklediği ile eşleştiğini doğrulamaya yarar.',
  },
];

const howToData = [
  { name: 'Dosyanızı bulun', text: 'Bilgisayarınızda .pem, .crt, .cer veya .der uzantılı dosyayı bulun.' },
  { name: 'Sürükle ve bırak', text: 'Dosyayı yukarıdaki noktalı alana sürükleyin.' },
  { name: 'Sonuçları görüntüle', text: 'Hemen, sertifikayı kimin yayımladığını, kimin için, ne zaman sona ereceğini ve parmak izlerini göreceksiniz.' },
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

const ui: InspectorCertificadosSslUI = {
  labelAnalyzeCertificate: 'Sertifikayı Analiz Et',
  dragDropText: '.pem, .crt veya .cer dosyanızı buraya sürükleyin',
  dragDropSubtext: '(tarayıcınızda 100% yerel işlem)',
  cardStatusTitle: 'Geçerlilik Durumu',
  cardSubjectTitle: 'Konu (Sahibi)',
  cardIssuerTitle: 'Yayımcı (CA)',
  cardFingerprintsTitle: 'Parmak İzleri',
  cardTechnicalTitle: 'Teknik Detaylar',
  labelValidityStatus: 'Durum:',
  labelExpiryDate: 'Sona Eriş Tarihi',
  labelIssueDate: 'Veriliş Tarihi',
  labelSha256: 'SHA-256 Parmak İzi',
  labelSha1: 'SHA-1 Parmak İzi',
  labelSignatureAlgorithm: 'İmza Algoritması',
  labelVersion: 'X.509 Sürümü',
  labelSerialNumber: 'Seri Numarası',
  labelCommonName: 'Ortak Ad',
  labelOrganization: 'Kuruluş',
  labelOrgUnit: 'Kuruluş Birimi',
  labelLocality: 'Yerellik',
  labelState: 'Devlet/İl',
  labelCountry: 'Ülke',
  labelEmail: 'E-posta',
  statusValid: 'Geçerli',
  statusExpired: 'Süresi Doldu',
  errorMessageInvalid: 'Geçersiz dosya.',
  supportedFormats: '.pem, .crt, .cer, .der',
};

export const content: ToolLocaleContent<InspectorCertificadosSslUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Sık Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'SSL/TLS Sertifikaları Hakkında Teknik Kaynaklar',
  bibliography: [
    { name: 'RFC 5280: Internet X.509 Public Key Infrastructure Certificate and CRL Profile', url: 'https://datatracker.ietf.org/doc/html/rfc5280' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'Mozilla: SSL/TLS Encryption Overview', url: 'https://developer.mozilla.org/en-US/docs/Glossary/TLS' },
    { name: 'OpenSSL: X.509 Certificate Format Documentation', url: 'https://www.openssl.org/docs/man1.1.1/man1/x509.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'SSL/TLS Sertifika İnceleme Nedir ve Neden Gerekli?', level: 2 },
    {
      type: 'paragraph',
      html: 'Web geliştirme ve siber güvenlik dünyasında <strong>SSL (Secure Sockets Layer) ve TLS (Transport Layer Security) sertifikaları</strong> güvenin temelini oluşturur. Dijital sertifika, kriptografik anahtarı kuruluş veya alan adı verilerine bağlayan bir dosydan ibarettir. Ancak bu dosyalar genellikle ikili biçim (.der) veya Base64 kodlu (.pem, .crt) ve ilk bakışta okunaklı değildir.',
    },
    {
      type: 'paragraph',
      html: 'Bizim <strong>SSL/TLS Sertifika İncelemeci</strong> bu dosyaları görsel ve güvenli bir şekilde "açmanızı" sağlar. Herkese açık bir etki alanını sorgulayan araçların (ünlü SSL Labs testi gibi) aksine, bu yardımcı program doğrudan cihazınızdaki dosya ile çalışır. Bu, Nginx, Apache sunucuları yapılandırırken veya AWS veya Google Cloud Load Balancer\'da sertifika yüklerken kritik öneme sahiptir ve dosyayı yüklemeden önce doğru olduğunu doğrulamanız gerekir.',
    },
    { type: 'title', text: '.pem veya .crt dosyasını adım adım inceleme', level: 2 },
    {
      type: 'paragraph',
      html: 'Sertifikayı aracımızla analiz etmek oldukça basit ve konsol (OpenSSL) bilgisi gerektirmez. Şu adımları izleyin:',
    },
    {
      type: 'list',
      items: [
        '<strong>Dosyanızı bulun:</strong> Bilgisayarınızda .pem, .crt, .cer veya .der uzantılı dosyayı bulun.',
        '<strong>Sürükle ve bırak:</strong> Dosyayı yukarıdaki noktalı alana sürükleyin.',
        '<strong>Sonuçları görüntüle:</strong> Hemen, sertifikayı kimin yayımladığını, kimin için, ne zaman sona ereceğini ve parmak izlerini göreceksiniz.',
      ],
    },
    {
      type: 'tip',
      title: 'Tam Gizlilik',
      html: 'Bu işlemin en önemli kısmı <strong>gizliliktir</strong>. Dosya asla sunucularımıza yüklenmez. Sertifikanın ASN.1 yapısının tüm ayrıştırması tarayıcınızın RAM\'inde gerçekleşir. Açık anahtarlarınız için tam güvenlik.',
    },
    { type: 'title', text: 'Sertifikanızı analiz ederken göreceğiniz temel alanlar', level: 2 },
    {
      type: 'paragraph',
      html: 'Sertifikanızı analiz ederken, en uygun olan teknik bilgileri çözerek bir bakışta doğrulayabilmeniz için:',
    },
    {
      type: 'list',
      items: [
        '<strong>Konu:</strong> Ortak Ad (CN), kuruluş ve konum dahil olmak üzere sahip verilerini gösterir.',
        '<strong>Yayımcı:</strong> Sertifikayı imzalayan Sertifika Otoritesini (CA) tanımlar (örneğin Let\'s Encrypt, DigiCert).',
        '<strong>Geçerlilik Dönemi:</strong> Tam veriliş tarihi ve kritik sona erme tarihini gösterir.',
        '<strong>Parmak İzleri:</strong> SHA-256 ve SHA-1 parmak izleri dosyanın bütünlüğünü doğrulamaya yarar.',
      ],
    },
    { type: 'title', text: 'Desteklenen Biçimler: PEM, CRT, CER ve DER', level: 2 },
    {
      type: 'paragraph',
      html: 'Çeşitli sertifika dosyası biçimleri vardır ve bazen kafa karıştırıcı olabilir. Aracımız en yaygın olanlarla uyumludur:',
    },
    {
      type: 'list',
      items: [
        '<strong>PEM (.pem, .crt, .cer):</strong> Linux ve web sunucularında en yaygın biçim. <code>-----BEGIN CERTIFICATE-----</code> satırı ile başlar.',
        '<strong>DER (.der, .cer):</strong> İkili biçim. Windows ortamlarında (Java, Active Directory) yaygın olarak kullanılır ve genellikle özel araçlar olmadan okunması daha zordur.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Dosyanız sıradışı bir uzantı olsa bile, iç yapı standart X.509 sertifikası ise <strong>node-forge</strong> tarafından desteklenen motorumuz bunu sorunsuz bir şekilde yorumlayabilir.',
    },
    { type: 'title', text: 'OpenSSL yerine bu aracı neden kullanmalısınız?', level: 2 },
    {
      type: 'paragraph',
      html: 'OpenSSL kripto grafinin İsviçre çakısıdır ancak komutları hatırlaması zordur. Konsol\'dan sertifika görüntülemek için yazmanız gerekir:',
    },
    { type: 'code', text: 'openssl x509 -in certificado.crt -text -noout' },
    {
      type: 'paragraph',
      html: 'Aracımız günlük iş akışı için net avantajlar sunmaktadır:',
    },
    {
      type: 'list',
      items: [
        '<strong>Hız:</strong> Terminali açmaya veya karmaşık bayrakları hatırlamaya gerek yok.',
        '<strong>Görsel:</strong> Alan adlarını (Locality, Organization) okunabilir hale getiririz ve "L" veya "O" gibi kısa kodlar değildir.',
        '<strong>Geçerlilik Uyarıları:</strong> Sertifikanın bugün geçerli olup olmadığını otomatik olarak hesaplarız, bu da güncel tarihi sertifika tarihine karşı manuel olarak kontrol etmekten sizi kurtarır.',
        '<strong>Platformlar Arası:</strong> Modern tarayıcıya sahip herhangi bir işletim sisteminde çalışır, kurulacak bağımlılık yoktur.',
      ],
    },
    { type: 'title', text: 'Güvenlik ve Gizlilik: Sertifikanız RAM\'i asla terk etmez', level: 2 },
    {
      type: 'paragraph',
      html: 'Bir geliştirici olarak bu tür bilgileri işlemenin ne kadar kritik olduğunu biliyorum. Sertifika teknik olarak <strong>kamuya açık bilgiler</strong>se de (web sitenizi ziyaret eden herhangi bir tarayıcıya gönderilir), yine de dosyaları gereksiz yere harici sunuculara yüklememeniz iyi bir uygulamadır.',
    },
    {
      type: 'paragraph',
      html: 'Bu yardımcı program kesinlikle istemci tarafında çalışan JavaScript kullanır. Dosyayı sürüklediğinizde içeriğini okuyup yerel olarak işleriz. İnterneti keserek bunu doğrulayabilirsiniz: araç tam olarak aynı şekilde çalışmaya devam edecektir.',
    },
    { type: 'title', text: 'SSL İncelemcisinin Yaygın Kullanım Durumları', level: 2 },
    {
      type: 'paragraph',
      html: 'Bu sayfayı yer işaretine eklemek ne zaman yararlı olurdu?',
    },
    {
      type: 'list',
      items: [
        '<strong>Sunucu Hata Ayıklaması:</strong> Bir sertifika yüklediğinizde ve web sitesi hata vermeye devam ettiğinde, yanlışlıkla eski sertifikayı yüklemediğinizi doğrulamak için.',
        '<strong>Zincir Doğrulaması:</strong> Dosyanın son sertifika mı yoksa ara sertifika mı içerdiğini görmek için.',
        '<strong>Varlık Denetimi:</strong> Eski bir projede hangi Sertifika Otoritesinin kullanıldığını kontrol etmek için.',
        '<strong>Kopya Bütünlüğü:</strong> Sertifikaları sunucular arasında taşırken, SHA-256 parmak izini karşılaştırarak dosyanın bozulmadığından emin olmak için.',
      ],
    },
  ],
};

