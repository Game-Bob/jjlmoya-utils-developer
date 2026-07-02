import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JwtDecoderUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'dekoder-jwt-parser-inspector-claims';
const title = 'Декодер JWT, Парсер и Инспектор Claims';
const description = 'Вставьте JSON Web Token, мгновенно декодируйте его заголовок и полезную нагрузку, проверяйте зарегистрированные claims, находите просроченные токены и копируйте чистый JSON для отладки процессов аутентификации.';

const howTo = [
  {
    name: 'Вставьте JWT',
    text: 'Скопируйте токен из заголовка Authorization, cookie, записи журнала или провайдера идентификации и вставьте его в поле ввода.',
  },
  {
    name: 'Прочитайте декодированные заголовок и payload',
    text: 'Инструмент разделяет токен на заголовок, payload и подпись, затем отображает JSON сегменты на отдельных панелях для быстрой проверки.',
  },
  {
    name: 'Проверьте важные claims',
    text: 'Проверьте алгоритм, издателя, аудиторию, субъект, время выпуска, время начала действия и срок истечения без ручного преобразования Unix timestamp.',
  },
  {
    name: 'Скопируйте нужные данные',
    text: 'Скопируйте один декодированный раздел или весь декодированный вывод, когда нужно поделиться очищенным снимком отладки с командой.',
  },
];

const faq = [
  {
    question: 'Доказывает ли декодирование JWT, что токен действителен?',
    answer: 'Нет. Декодирование лишь раскрывает заголовок и payload в кодировке base64url. Токен заслуживает доверия только после того, как подпись, издатель, аудитория, срок действия и связанные claims проверены приложением или провайдером идентификации.',
  },
  {
    question: 'Можно ли использовать этот декодер JWT для access токенов и ID токенов?',
    answer: 'Да. Декодер полезен для проверки OAuth access токенов, ID токенов OpenID Connect, сессионных токенов и токенов сервис-сервис, если они используют стандартный трёхчастный формат JWT.',
  },
  {
    question: 'Почему панель подписи не проверяет токен?',
    answer: 'Для проверки JWT требуется правильный секрет, открытый ключ или конфигурация JWKS. Этот инструмент намеренно сосредоточен на декодировании и проверке, чтобы разработчики могли видеть содержимое токена, не выдавая видимую строку подписи за доказательство подлинности.',
  },
  {
    question: 'Что проверять в первую очередь при отладке JWT?',
    answer: 'Начните с exp, nbf, iss, aud и alg. Большинство реальных производственных проблем связано с истёкшими токенами, рассинхронизацией часов, неверными значениями audience, неожиданными URL издателя или небезопасными предположениями об алгоритме.',
  },
];

const ui: JwtDecoderUI = {
  tokenLabel: 'JWT токен',
  tokenPlaceholder: 'Вставьте JWT сюда: заголовок.payload.подпись',
  sampleButton: 'Загрузить пример',
  clearButton: 'Очистить',
  statusWaiting: 'Вставьте токен для декодирования его JSON заголовка, payload и claims.',
  statusValid: 'JWT успешно декодирован.',
  statusInvalid: 'Это не похоже на действительный трёхчастный JWT.',
  statusExpired: 'JWT декодирован, но claim exp уже истёк.',
  statusUnsigned: 'JWT декодирован, но он не подписан или использует алгоритм none.',
  headerTitle: 'Заголовок',
  payloadTitle: 'Payload',
  signatureTitle: 'Подпись',
  claimsTitle: 'Зарегистрированные claims',
  copyHeader: 'Копировать декодированный заголовок',
  copyPayload: 'Копировать декодированный payload',
  copySignature: 'Копировать подпись',
  copyAll: 'Копировать всё',
  copiedLabel: 'Скопировано',
  invalidTokenTitle: 'Недействительный JWT',
  invalidTokenBody: 'Проверьте, что токен содержит три сегмента base64url, разделённых точками.',
  invalidSegmentError: 'Проверьте, что токен содержит три сегмента base64url, разделённых точками.',
  invalidDecodeError: 'Заголовок или payload не удалось декодировать как действительный JSON.',
  emptyJson: '{}',
  signaturePresent: 'Сегмент подписи присутствует; проверьте его в вашем слое аутентификации с правильным ключом.',
  signatureMissing: 'Сегмент подписи отсутствует',
  algorithmLabel: 'Алгоритм',
  typeLabel: 'Тип',
  issuerLabel: 'Издатель',
  subjectLabel: 'Субъект',
  audienceLabel: 'Аудитория',
  issuedAtLabel: 'Выпущен',
  notBeforeLabel: 'Действует с',
  expiresAtLabel: 'Истекает',
  claimMissing: 'Отсутствует',
  privacyNote: 'Декодирование выполняется в вашем браузере. Не вставляйте производственные секреты в инструмент, если это не разрешено вашей политикой безопасности.',
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
  inLanguage: 'ru',
};

export const content: ToolLocaleContent<JwtDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Часто задаваемые вопросы о декодере JWT',
  faq,
  bibliographyTitle: 'Спецификации JWT и ссылки по безопасности',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Декодируйте JWT, не теряя контекст безопасности',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'JSON Web Token выглядит компактно, но часто содержит именно ту информацию, которая объясняет сбой аутентификации: алгоритм подписи, издатель, аудитория, субъект, время выпуска, время начала действия, срок истечения и специфичные для приложения claims авторизации. Этот <strong>декодер JWT, парсер и инспектор claims</strong> превращает три сегмента токена в читаемый JSON, чтобы вы могли быстрее отлаживать процессы аутентификации.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Декодировано не значит проверено',
      html: 'Любой может декодировать JWT из base64url. Доверие начинается только после того, как ваше приложение проверит подпись с правильным секретом, открытым ключом или JWKS, а затем проверит издателя, аудиторию, срок действия и специфичные для домена claims. Используйте этот инструмент для проверки данных, а не для принятия токена как подлинного.',
    },
    {
      type: 'title',
      text: 'Что говорит каждый сегмент JWT',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Сегмент', 'Типичное содержимое', 'Ценность для отладки'],
      rows: [
        ['Заголовок', 'Алгоритм, тип токена и опциональный ID ключа', 'Показывает, ожидает ли токен HS256, RS256, ES256 или другую стратегию проверки.'],
        ['Payload', 'Зарегистрированные claims и прикладные claims', 'Раскрывает идентификатор, арендатора, разрешения, роли, срок действия и несоответствия аудитории.'],
        ['Подпись', 'Криптографические байты подписи в кодировке base64url', 'Подтверждает, что сегмент подписи существует, но должен быть проверен с правильным ключом отдельно.'],
      ],
    },
    {
      type: 'title',
      text: 'Claims, которые обычно объясняют сбои аутентификации',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>exp:</strong> если токен истёк, логика обновления или настройки часов могут быть неверными.',
        '<strong>nbf:</strong> если токен ещё не активен, часы сервера и провайдера идентификации могут быть рассинхронизированы.',
        '<strong>iss:</strong> если URL издателя отличается от конфигурации, токен может быть из неверного арендатора или окружения.',
        '<strong>aud:</strong> если аудитория не совпадает с идентификатором API, токен был выпущен для другого ресурса.',
        '<strong>alg:</strong> если алгоритм неожиданный, ваш верификатор может отклонить токен или выявить опасную ошибку конфигурации.',
      ],
    },
    {
      type: 'title',
      text: 'Сценарии использования парсера JWT при разработке',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Отладка фронтенда',
          description: 'Проверяйте ID токены и access токены, полученные после входа, чтобы подтвердить разрешения, роли и claims профиля.',
          icon: 'mdi:monitor-dashboard',
          points: ['Проверка claims профиля', 'Подтверждение разрешений и ролей', 'Сравнение окружений входа'],
        },
        {
          title: 'QA бэкенд API',
          description: 'Сравнивайте ожидаемые значения издателя и аудитории с токеном, фактически отправленным в заголовке Authorization.',
          icon: 'mdi:api',
          highlight: true,
          points: ['Проверка формы аудитории', 'Выявление несоответствий издателя', 'Проверка bearer токенов'],
        },
        {
          title: 'Настройка провайдера идентификации',
          description: 'Проверяйте, соответствуют ли claims от Auth0, Azure AD, Cognito, Keycloak или пользовательского провайдера ожидаемой структуре вашего приложения.',
          icon: 'mdi:account-key',
          points: ['Проверка данных арендатора', 'Проверка пользовательских claims', 'Сравнение сопоставлений провайдера'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Частые ошибки JWT, которые делает очевидными этот инспектор',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Быстрые проверки против решений о доверии',
      items: [
        {
          pro: 'Сразу видите некорректные токены.',
          con: 'Он не знает вашу ожидаемую аудиторию или издателя.',
        },
        {
          pro: 'Преобразует claims с Unix timestamp в читаемые даты.',
          con: 'Он не может проверить подпись без реального ключевого материала.',
        },
        {
          pro: 'Выявляет отсутствующие значения издателя, аудитории, субъекта или типа.',
          con: 'Он не может доказать, что разрешения и роли безопасны для вашего приложения.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Рекомендуемый рабочий процесс',
      items: [
        'Декодируйте токен, чтобы понять, что клиент или API фактически получили.',
        'Проверьте exp, nbf, iss, aud, sub и alg прежде чем углубляться в логику приложения.',
        'Проверяйте подписи и решения о доверии только в вашем слое аутентификации.',
        'Избегайте передачи чувствительных производственных JWT в тикетах, логах или скриншотах.',
      ],
    },
  ],
};
