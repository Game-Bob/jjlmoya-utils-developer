import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GeneradorSecurityTxtUI } from '../ui';

const slug = 'generator-security-txt';
const title = 'Генератор Security.txt RFC 9116';
const description = 'Создайте профессиональный файл security.txt, чтобы облегчить отчётность об уязвимостях и соответствовать международным стандартам безопасности веб.';

const faqData = [
  {
    question: 'Что такое файл security.txt?',
    answer: 'Это стандарт (RFC 9116), который позволяет сайтам определить, как исследователи безопасности должны с ними связаться, чтобы ответственно сообщить об уязвимостях.',
  },
  {
    question: 'Где должен быть размещён файл security.txt?',
    answer: 'Рекомендуемое стандартное место — папка /.well-known/ вашего домена, что даёт URL https://example.com/.well-known/security.txt.',
  },
  {
    question: 'Почему дата истечения обязательна?',
    answer: 'Чтобы информация контакта не устарела. Если файл не содержит действительную дату истечения, исследователи могут не доверять, что каналы связи остаются активными.',
  },
  {
    question: 'Какие поля являются обязательными в security.txt?',
    answer: 'Согласно RFC 9116 обязательные поля: "Contact" (с адресом электронной почты или URL) и "Expires" (с будущей датой в формате ISO 8601).',
  },
];

const howToData = [
  { name: 'Заполните поля', text: 'Заполните адрес электронной почты или URL контакта и выберите дату истечения.' },
  { name: 'Добавьте дополнительные поля', text: 'Включите дополнительную информацию, такую как ключ PGP, политика безопасности или объявления о вакансиях.' },
  { name: 'Загрузите или скопируйте файл', text: 'Нажмите "Загрузить .txt" или скопируйте содержимое и сохраните как security.txt.' },
  { name: 'Загрузите на сервер', text: 'Поместите файл в папку /.well-known/ вашего домена.' },
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
  inLanguage: 'ru',
};

const ui: GeneradorSecurityTxtUI = {
  titleBasicFields: 'Обязательные поля',
  labelContact: 'Контакт (Email или URL)',
  placeholderContact: 'mailto:security@example.com или https://example.com/contact',
  contactTip: 'Адрес, на который должны отправляться отчёты об уязвимостях.',
  labelExpires: 'Дата истечения',
  expiresTip: 'Не должна быть более чем на год в будущем.',
  titleOptionalFields: 'Дополнительные поля',
  labelEncryption: 'Открытый ключ',
  placeholderEncryption: 'https://example.com/pgp-key.txt',
  encryptionTip: 'Ссылка на ваш PGP ключ для зашифрованных отчётов.',
  labelPolicy: 'Политика безопасности',
  placeholderPolicy: 'https://example.com/security/policy/',
  policyTip: 'Страница, описывающая способ обработки уязвимостей.',
  labelAcknowledgments: 'Благодарности',
  placeholderAcknowledgments: 'https://example.com/security/hall-of-fame/',
  acknowledgmentsTip: 'Страница благодарности исследователям безопасности.',
  labelHiring: 'Объявления о вакансиях',
  placeholderHiring: 'https://example.com/jobs',
  hiringTip: 'Ссылка на открытые вакансии по безопасности.',
  resultTitle: 'Предпросмотр(security.txt)',
  btnCopy: 'Скопировать код',
  btnDownload: 'Загрузить .txt',
  copiedMessage: 'Скопировано',
  generatingMessage: 'Генерирование файла security.txt...',
  comment: 'Сгенерировано',
};

export const content: ToolLocaleContent<GeneradorSecurityTxtUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliographyTitle: 'Технические ресурсы о Security.txt',
  bibliography: [
    { name: 'RFC 9116: A File Format to Aid in Security Vulnerability Disclosure', url: 'https://datatracker.ietf.org/doc/html/rfc9116' },
    { name: 'Security.txt Official Website', url: 'https://securitytxt.org/' },
    { name: 'OWASP: Vulnerability Disclosure Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Что такое файл Security.txt и зачем его генерировать?', level: 2 },
    {
      type: 'paragraph',
      html: 'В современном ландшафте кибербезопасности прозрачность и коммуникация критически важны. Если вы системный администратор, веб-разработчик или владелец цифрового бизнеса, вы, вероятно, уже знакомы с текстовыми файлами, которые помогают машинам понять ваш сайт, такими как <code>robots.txt</code> или <code>ads.txt</code>. Однако существует менее известный, но жизненно важный стандарт для целостности вашей платформы: <strong>Security.txt</strong>, определённый <strong>RFC 9116</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Целью <strong>генерирования файла security.txt</strong> является предоставление исследователям безопасности стандартизированного способа связи с администраторами вашего сайта при обнаружении уязвимости. Без этого файла этичный хакер, который обнаружит дефект в вашей системе, может не знать, кому это сообщить, что часто приводит к потере информации, её публикации без уведомления или эксплуатации злоумышленниками.',
    },
    { type: 'title', text: 'Как создать и установить файл Security.txt согласно RFC 9116', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>Стандарт контакта исследователя безопасности</strong> определяет, что этот файл должен находиться в определённом месте на вашем сервере: папке <code>/.well-known/</code>. Поэтому финальный путь обычно выглядит как <code>https://yourdomain.com/.well-known/security.txt</code>. Хотя допускается и размещение в корне (<code>/security.txt</code>), первый вариант предпочтителен инструментами автоматического сканирования.',
    },
    { type: 'title', text: 'Обязательные поля, которые вы не можете упустить', level: 3 },
    {
      type: 'paragraph',
      html: 'При <strong>получении кода security.txt</strong> убедитесь, что он включает по крайней мере два критических элемента:',
    },
    {
      type: 'list',
      items: [
        '<strong>Contact:</strong> Адрес электронной почты или URL формы, на которую должны отправляться отчёты. Должен начинаться с <code>mailto:</code> или <code>https://</code>.',
        '<strong>Expires:</strong> Дата в формате ISO 8601, указывающая, когда информация в файле больше не действительна. Рекомендуется не устанавливать дату дальше, чем на год вперёд.',
      ],
    },
    { type: 'code', text: 'Contact: mailto:security@yourcompany.com\nExpires: 2025-12-31T23:59:59.000Z' },
    { type: 'title', text: 'Дополнительные поля для продвинутой безопасности', level: 3 },
    {
      type: 'paragraph',
      html: 'Для сайтов, ищущих более надёжной <strong>защиты веб-сайта</strong>, стандарт предлагает дополнительные поля:',
    },
    {
      type: 'list',
      items: [
        '<strong>Encryption:</strong> Ссылка на ваш открытый PGP ключ, чтобы исследователи могли отправлять зашифрованную и безопасную информацию.',
        '<strong>Policy:</strong> Ссылка на страницу политики безопасности, где вы объясняете процесс ответственного раскрытия.',
        '<strong>Acknowledgments:</strong> Ссылка на вашу "Зал славы" или стену признания для исследователей.',
        '<strong>Hiring:</strong> Ссылка на ваши открытые вакансии в области кибербезопасности.',
      ],
    },
    { type: 'title', text: 'Преимущества использования нашего бесплатного генератора Security.txt', level: 2 },
    {
      type: 'paragraph',
      html: 'Многие люди задаются вопросом <strong>как быстро получить контакт безопасности сайта</strong>. Используя наш инструмент, вы обеспечиваете строгое соответствие формату RFC 9116 без необходимости читать сложные технические документы.',
    },
    {
      type: 'paragraph',
      html: 'Использование генератора экономит на типичных синтаксических ошибках. Например, забывание префикса <code>mailto:</code> или неправильное форматирование часового пояса в дате истечения может привести к тому, что автоматизированные инструменты исследователей будут игнорировать ваш файл.',
    },
    { type: 'title', text: 'Влияние на SEO и веб-репутацию', level: 3 },
    {
      type: 'paragraph',
      html: 'Хотя файл <code>security.txt</code> не является прямым фактором ранжирования в Google, как скорость страницы или HTTPS, он оказывает косвенное влияние. Сайт, который хорошо управляет уязвимостями, избегает шумного взлома (подделки, внедрения спама), который разрушает SEO за часы. Кроме того, многие корпоративные платформы оценки безопасности (такие как SecurityScorecard или BitSight) присваивают дополнительные баллы доменам, которые внедряют этот стандарт.',
    },
    { type: 'title', text: 'Вывод: Простой шаг к более безопасному Интернету', level: 2 },
    {
      type: 'paragraph',
      html: 'В заключение, <strong>загрузка security.txt</strong> и его загрузка на сервер — это одна из самых быстрых и эффективных задач по обслуживанию безопасности, которую вы можете выполнить сегодня. Вы облегчаете задачу "хорошим парням", отбиваете охоту у любопытствующих и показываете миру, что серьёзно относитесь к конфиденциальности пользователей и данным.',
    },
    {
      type: 'paragraph',
      html: 'Не ждите нарушения безопасности, чтобы пожалеть, что вы этого не предоставили. Используйте наш <strong>онлайн-генератор security.txt</strong> сейчас и держите под контролем свою цифровую экосистему.',
    },
  ],
};

