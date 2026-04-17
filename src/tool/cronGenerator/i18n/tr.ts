import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CronGeneratorUI } from '../ui';

const slug = 'cron-ifadesi-olusturucu';
const title = 'Online Cron İfadesi Oluşturucu. Çevirmen ve Görselleştirici';
const description =
  'Linux Cron ifadeleri oluşturmak için ücretsiz görsel araç. * * * * * ifadesini insan diline çevirir ve sonraki 5 çalışmayı gerçek zamanlı olarak gösterir.';

const faqData = [
  {
    question: 'Cron ifadesi nedir?',
    answer:
      'Unix benzeri sistemlerde (Linux, macOS) otomatik görevler için bir yürütme programını temsil eden bir metin dizesidir. Dakika, saat, ayın günü, ay ve haftanın gününü tanımlayan 5 alandan oluşur.',
  },
  {
    question: 'Tüm sistemlerle uyumlu mu?',
    answer:
      'Evet, oluşturulan ifadeler POSIX standardını takip eder; Linux Crontab, macOS cron\'ları ve AWS CloudWatch veya GitHub Actions gibi bulut hizmetleriyle uyumludur.',
  },
  {
    question: 'Cron\'da yıldız işareti (*) ne anlama gelir?',
    answer:
      'Yıldız işareti "tümü" anlamına gelen bir joker karakterdir. Örneğin, dakika alanındaki bir *, görevin tanımlanan aralığın her dakikasında çalışacağı anlamına gelir.',
  },
  {
    question: 'Gelecekteki çalışmaları nasıl kontrol edebilirim?',
    answer:
      'Araç, görevinizin mevcut ifadeye göre çalışacağı sonraki tam 5 tarih ve saati gösteren gerçek zamanlı bir görüntüleyici içerir.',
  },
];

const howToData = [
  {
    name: 'Aralığı seçin',
    text: 'Hızlı ön ayarları (her dakika, her saat, günlük vb.) kullanarak görevin ne sıklıkta çalışmasını istediğinizi seçin.',
  },
  {
    name: 'Gelişmiş ayrıntıları yapılandırın',
    text: 'Tam dakikaları, saatleri veya haftanın belirli günlerini manuel olarak tanımlamak için "Gelişmiş" sekmesine geçin.',
  },
  {
    name: 'Çeviriyi ve tarihleri doğrulayın',
    text: 'İnsan dili açıklamasını okuyun ve programın doğru olduğunu onaylamak için sonraki 5 çalışmayı kontrol edin.',
  },
  {
    name: 'İfadeyi kopyalayın',
    text: 'Sonuç dizesini kopyalayın ve doğrudan crontab dosyanıza veya sunucu yapılandırmanıza yapıştırın.',
  },
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
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
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

const ui: CronGeneratorUI = {
  labelMinute: 'Dakika',
  labelHour: 'Saat',
  labelDom: 'Gün (Ay)',
  labelMonth: 'Ay',
  labelDow: 'Gün (Hafta)',
  tabQuick: 'Hızlı',
  tabAdvanced: 'Gelişmiş',
  fieldMinute: 'Dakika (0-59)',
  fieldHour: 'Saat (0-23)',
  fieldDom: 'Ayın Günü (1-31)',
  fieldMonth: 'Ay (1-12)',
  fieldDow: 'Haftanın Günü (0-6)',
  hintMinute: 'Örn: *, */5, 0,30',
  hintDow: '0 = Pazar, 6 = Cumartesi',
  labelNextRuns: 'Sonraki Çalışmalar',
  btnCopy: 'İfadeyi Kopyala',
  btnCopied: 'Kopyalandı!',
  msgNoRuns: 'Makul bir aralıkta yaklaşan çalışma bulunamadı.',
  msgError: 'Tarihler hesaplanırken hata oluştu.',
  presetEveryMinute: 'Her dakika',
  presetEveryHour: 'Her saat',
  presetDaily: 'Günlük',
  presetWeekly: 'Haftalık',
  presetMonthly: 'Aylık',
  presetYearly: 'Yıllık',
  descEveryMinute: 'Her dakika çalışır',
  descEveryHour: 'Her saatin başında çalışır',
  descEveryDay: 'Her gün gece yarısı çalışır',
  descPrefix: 'Çalışma zamanı:',
  descEveryMin: 'her dakika',
  descEveryHourOnDot: 'her saat başında',
  descAtMinute: 'her saatin {m}. dakikasında',
  descAtTime: 'saat {h}:{m}\'de',
  descOnDay: ' ayın {d}. gününde',
  descInMonth: ' {mon}. ayda',
  descIfDow: ' eğer gün {d} ise (0=Paz, 6=Cmt)',
  descDays: 'Pazar,Pazartesi,Salı,Çarşamba,Perşembe,Cuma,Cumartesi',
  descInvalid: 'Geçersiz ifade',
  timeNow: 'şimdi',
  timeMin: 'dk',
  timeHour: 'sa',
  timeDays: 'gün',
  locale: 'tr-TR',
};

export const content: ToolLocaleContent<CronGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Referanslar ve Dokümantasyon',
  bibliography: [
    {
      name: 'GNU Crontab Kılavuzu: Linux\'ta Cron İfadeleri',
      url: 'https://www.gnu.org/software/mcron/manual/html_node/Crontab-file.html',
    },
    {
      name: 'Wikipedia\'da Cron: Tarihçe ve Sözdizimi',
      url: 'https://tr.wikipedia.org/wiki/Cron',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Modern Otomasyonda Cron\'un Önemi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<em>Sunucusuz</em> sunucular ve bulut iş akışları çağında yaşamamıza rağmen, <strong>Crontab</strong> sistemi küresel teknoloji altyapısının temel taşı olmaya devam ediyor. Küçük bloglardan devasa bankacılık altyapılarına kadar görev zamanlaması, dijital dünyanın çalışmasını sağlayan şeydir.',
    },
    {
      type: 'title',
      text: 'Bir Cron İfadesinin Anatomisi',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Alan 1 - Dakika (0-59):</strong> Görevin saat içinde ne zaman başlayacağı.',
        '<strong>Alan 2 - Saat (0-23):</strong> 24 saatlik format gereklidir.',
        '<strong>Alan 3 - Ayın Günü (1-31):</strong> Belirli takvim günü.',
        '<strong>Alan 4 - Ay (1-12):</strong> Ocak\'tan Aralık\'a kadar.',
        '<strong>Alan 5 - Haftanın Günü (0-6):</strong> 0 tipik olarak Pazar\'dır.',
      ],
    },
    {
      type: 'title',
      text: 'Özel operatörler ve yaygın hatalar',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Adımları tanımlamak için eğik çizgi <code>/</code> kullanın: Dakikalarda <code>*/5</code> her 5 dakikada bir çalışır. Virgül <code>,</code> listeler oluşturur (<code>1,3,5</code>) ve tire <code>-</code> aralıkları tanımlar (<code>1-5</code>).',
    },
    {
      type: 'paragraph',
      html: 'Sunucuların %90\'ı <strong>UTC</strong> ile çalışır. Yerel saat diliminizi düşünerek saat 02:00\'de bir görev planlarsanız, beklenmedik bir zamanda çalışabilir. Ayrıca Cron, normal <code>$PATH</code> yolunuza erişemez; her zaman <code>/usr/local/bin/node</code> gibi mutlak yollar kullanın.',
    },
  ],
};

