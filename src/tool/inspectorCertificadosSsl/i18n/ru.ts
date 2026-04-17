import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InspectorCertificadosSslUI } from '../ui';

const slug = 'inspektor-sertifikatov-ssl';
const title = 'Онлайн Инспектор Сертификатов SSL/TLS Просмотр PEM и CRT файлов';
const description = 'Анализируйте файлы SSL-сертификатов (.pem, .crt, .der) локально. Проверяйте сроки действия, издателей, субъекты и отпечатки SHA-256, не передавая данные на сервер.';

const faqData = [
  {
    question: 'Безопасно ли анализировать мой SSL-сертификат на этом сайте?',
    answer: 'Абсолютно безопасно. Эта утилита работает на 100% со стороны клиента. Когда вы перетаскиваете файл .pem или .crt, браузер читает данные локально и никогда не отправляет их на какой-либо сервер. Полная приватность.',
  },
  {
    question: 'Какие форматы сертификатов поддерживаются?',
    answer: 'Инструмент поддерживает наиболее распространённые форматы: PEM (кодированный Base64 с заголовками "BEGIN CERTIFICATE") и DER (бинарный формат), которые обычно имеют расширения .pem, .crt, .cer или .der.',
  },
  {
    question: 'Могу ли я увидеть дату истечения файла .crt?',
    answer: 'Да, при загрузке файла вы сразу же увидите раздел "Статус валидности", который показывает точную дату истечения и валидность сертификата на сегодня.',
  },
  {
    question: 'Что делает издатель сертификата?',
    answer: 'Издатель (Issuer) указывает, какой Центр Сертификации (CA) подтвердил подлинность сайта. Важно знать, будет ли сертификат распознан коммерческими браузерами.',
  },
  {
    question: 'Как вычисляются отпечатки SHA-256?',
    answer: 'Они вычисляются путём применения алгоритма хеширования непосредственно к бинарному содержимому сертификата. Они служат для проверки того, что файл не был изменён и соответствует ожидаемому сервером.',
  },
];

const howToData = [
  { name: 'Найдите файл', text: 'Найдите на компьютере файл с расширением .pem, .crt, .cer или .der.' },
  { name: 'Перетащите', text: 'Просто перетащите файл в пунктирную область выше.' },
  { name: 'Посмотрите результаты', text: 'Сразу же вы увидите, кто выдал сертификат, для кого, когда истекает и его отпечатки.' },
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

const ui: InspectorCertificadosSslUI = {
  labelAnalyzeCertificate: 'Анализировать сертификат',
  dragDropText: 'Перетащите сюда файл .pem, .crt или .cer',
  dragDropSubtext: '(100% локальная обработка в браузере)',
  cardStatusTitle: 'Статус валидности',
  cardSubjectTitle: 'Субъект (Владелец)',
  cardIssuerTitle: 'Издатель (CA)',
  cardFingerprintsTitle: 'Отпечатки',
  cardTechnicalTitle: 'Технические детали',
  labelValidityStatus: 'Статус:',
  labelExpiryDate: 'Истекает',
  labelIssueDate: 'Выпущено',
  labelSha256: 'Отпечаток SHA-256',
  labelSha1: 'Отпечаток SHA-1',
  labelSignatureAlgorithm: 'Алгоритм подписи',
  labelVersion: 'Версия X.509',
  labelSerialNumber: 'Серийный номер',
  labelCommonName: 'Общее имя',
  labelOrganization: 'Организация',
  labelOrgUnit: 'Подразделение',
  labelLocality: 'Населённый пункт',
  labelState: 'Область/Регион',
  labelCountry: 'Страна',
  labelEmail: 'Email',
  statusValid: 'Действителен',
  statusExpired: 'Истёк',
  errorMessageInvalid: 'Недействительный файл.',
  supportedFormats: '.pem, .crt, .cer, .der',
};

export const content: ToolLocaleContent<InspectorCertificadosSslUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliographyTitle: 'Технические ресурсы о сертификатах SSL/TLS',
  bibliography: [
    { name: 'RFC 5280: Internet X.509 Public Key Infrastructure Certificate and CRL Profile', url: 'https://datatracker.ietf.org/doc/html/rfc5280' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'Mozilla: SSL/TLS Encryption Overview', url: 'https://developer.mozilla.org/en-US/docs/Glossary/TLS' },
    { name: 'OpenSSL: X.509 Certificate Format Documentation', url: 'https://www.openssl.org/docs/man1.1.1/man1/x509.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Что такое инспектор сертификатов SSL/TLS и зачем он нужен?', level: 2 },
    {
      type: 'paragraph',
      html: 'В мире веб-разработки и кибербезопасности <strong>сертификаты SSL (Secure Sockets Layer) и TLS (Transport Layer Security)</strong> — это основание доверия. Цифровой сертификат — это просто файл, связывающий криптографический ключ с данными организации или домена. Однако эти файлы часто поставляются в бинарном формате (.der) или кодировке Base64 (.pem, .crt), которые не читаются с первого взгляда.',
    },
    {
      type: 'paragraph',
      html: 'Наш <strong>инспектор сертификатов SSL/TLS</strong> позволяет "открывать" эти файлы визуально и безопасно. В отличие от инструментов, которые запрашивают публичный домен (как знаменитый тест SSL Labs), эта утилита работает непосредственно с файлом на вашем устройстве. Это критически важно, когда вы настраиваете серверы Nginx, Apache или загружаете сертификаты в AWS или Google Cloud Load Balancer, и вам нужно проверить, что файл в ваших руках правильный, прежде чем загружать его.',
    },
    { type: 'title', text: 'Как пошагово проверить файл .pem или .crt', level: 2 },
    {
      type: 'paragraph',
      html: 'Анализировать сертификат с помощью нашего инструмента очень просто и не требует знания консоли (OpenSSL). Выполните следующие шаги:',
    },
    {
      type: 'list',
      items: [
        '<strong>Найдите файл:</strong> Найдите на компьютере файл с расширением .pem, .crt, .cer или .der.',
        '<strong>Перетащите:</strong> Просто перетащите файл в пунктирную область выше.',
        '<strong>Посмотрите результаты:</strong> Сразу же вы увидите, кто выдал сертификат, для кого, когда истекает и его отпечатки.',
      ],
    },
    {
      type: 'tip',
      title: 'Полная приватность',
      html: 'Самая важная часть этого процесса — <strong>приватность</strong>. Файл никогда не загружается на наши серверы. Все разбор ASN.1 структуры сертификата происходит в RAM вашего браузера. Полная безопасность для ваших открытых ключей.',
    },
    { type: 'title', text: 'Ключевые поля, которые вы увидите при анализе сертификата', level: 2 },
    {
      type: 'paragraph',
      html: 'При анализе вашего сертификата мы разбираем наиболее релевантную техническую информацию, чтобы вы могли проверить её с первого взгляда:',
    },
    {
      type: 'list',
      items: [
        '<strong>Субъект:</strong> Показывает данные владельца, включая общее имя (CN), организацию и место расположения.',
        '<strong>Издатель:</strong> Идентифицирует Центр Сертификации (CA), который подписал сертификат (например, Let\'s Encrypt, DigiCert).',
        '<strong>Период действия:</strong> Показывает точную дату выпуска и критическую дату истечения.',
        '<strong>Отпечатки:</strong> Отпечатки SHA-256 и SHA-1 служат для проверки целостности файла.',
      ],
    },
    { type: 'title', text: 'Поддерживаемые форматы: PEM, CRT, CER и DER', level: 2 },
    {
      type: 'paragraph',
      html: 'Существует несколько форматов файлов сертификатов, и иногда это может быть запутанным. Наш инструмент совместим с наиболее распространёнными:',
    },
    {
      type: 'list',
      items: [
        '<strong>PEM (.pem, .crt, .cer):</strong> Наиболее распространённый формат на Linux и веб-серверах. Начинается со строки <code>-----BEGIN CERTIFICATE-----</code>.',
        '<strong>DER (.der, .cer):</strong> Бинарный формат. Широко используется в среде Windows (Java, Active Directory) и обычно сложнее читается без специализированных инструментов.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Даже если ваш файл имеет необычное расширение, если внутренняя структура — это стандартный сертификат X.509, наш движок на базе <strong>node-forge</strong> сможет его интерпретировать без проблем.',
    },
    { type: 'title', text: 'Почему использовать этот инструмент вместо OpenSSL?', level: 2 },
    {
      type: 'paragraph',
      html: 'OpenSSL — это швейцарский армейский нож криптографии, но его команды трудно запомнить. Чтобы просмотреть сертификат из консоли, вам нужно написать:',
    },
    { type: 'code', text: 'openssl x509 -in certificado.crt -text -noout' },
    {
      type: 'paragraph',
      html: 'Наш инструмент предлагает явные преимущества для повседневного рабочего процесса:',
    },
    {
      type: 'list',
      items: [
        '<strong>Скорость:</strong> Не нужно открывать терминал или запоминать сложные флаги.',
        '<strong>Визуально:</strong> Мы форматируем названия полей (Locality, Organization) так, чтобы они были читаемы, а не короткие коды вроде "L" или "O".',
        '<strong>Оповещения валидности:</strong> Мы автоматически вычисляем, действителен ли сертификат сегодня, избавляя вас от необходимости вручную проверять текущую дату против даты сертификата.',
        '<strong>Кроссплатформенность:</strong> Работает на любой операционной системе с современным браузером, без зависимостей для установки.',
      ],
    },
    { type: 'title', text: 'Безопасность и приватность: ваш сертификат никогда не покидает RAM', level: 2 },
    {
      type: 'paragraph',
      html: 'Как разработчик, я знаю, насколько критично правильное обращение с этой информацией. Хотя сертификат технически является <strong>публичной информацией</strong> (отправляется в любой браузер, посещающий ваш сайт), тем не менее, это хорошая практика — не загружать файлы на внешние серверы без необходимости.',
    },
    {
      type: 'paragraph',
      html: 'Эта утилита использует JavaScript, который работает исключительно на стороне клиента. Когда вы перетаскиваете файл, мы читаем его содержимое и обрабатываем локально. Вы можете это проверить, отключив интернет: инструмент будет работать точно так же.',
    },
    { type: 'title', text: 'Общие случаи использования инспектора SSL', level: 2 },
    {
      type: 'paragraph',
      html: 'Когда добавление этой страницы в закладки было бы полезным?',
    },
    {
      type: 'list',
      items: [
        '<strong>Отладка сервера:</strong> Когда вы устанавливаете сертификат, а сайт продолжает давать ошибки, чтобы проверить, что вы случайно не загрузили старый сертификат.',
        '<strong>Проверка цепочки:</strong> Чтобы посмотреть, содержит ли файл конечный сертификат или промежуточный.',
        '<strong>Аудит активов:</strong> Чтобы проверить, какой Центр Сертификации использовался в старом проекте.',
        '<strong>Целостность копии:</strong> При перемещении сертификатов между серверами, чтобы убедиться, что файл не повреждён, сравнивая его отпечаток SHA-256.',
      ],
    },
  ],
};

