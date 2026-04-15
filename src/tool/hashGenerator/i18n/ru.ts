import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashGeneratorUI } from '../ui';

const slug = 'hash-generator-ru';
const title = 'Онлайн генератор хешей безопасности';
const description = 'Мгновенно вычисляйте хеши MD5, SHA-1, SHA-256 и SHA-512. Бесплатный, конфиденциальный и сверхбыстрый инструмент безопасности для разработчиков. 100% на стороне клиента.';

const faqData = [
  {
    question: 'Что такое хеш и для чего он используется?',
    answer: 'Хеш — это уникальный цифровой отпечаток текста или файла. Он используется для проверки того, что данные не были подделаны, а также для безопасного хранения паролей.',
  },
  {
    question: 'Безопасно ли использовать этот онлайн-генератор?',
    answer: 'Да, это совершенно безопасно. В отличие от других сайтов, мы обрабатываем хеш непосредственно в вашем браузере. Ваши данные никогда не отправляются на сервер.',
  },
  {
    question: 'Какой алгоритм хеширования выбрать?',
    answer: 'Для современной безопасности и хранения ключей мы рекомендуем SHA-256 или SHA-512. MD5 и SHA-1 следует использовать только для совместимости с устаревшими системами.',
  },
  {
    question: 'Что означает добавление «Salt» (соли)?',
    answer: 'Salt — это дополнительная строка, смешиваемая с вашим текстом, чтобы сделать хеш уникальным и его было гораздо сложнее взломать с помощью атак по словарю.',
  },
];

const howToData = [
  { name: 'Введите текст', text: 'Введите или вставьте текст, который вы хотите хешировать, в поле ввода.' },
  { name: 'Настройте безопасность', text: 'Добавьте необязательную соль или увеличьте количество раундов обработки для большей надежности.' },
  { name: 'Получите результаты', text: 'Различные хеши (MD5, SHA и т. д.) вычисляются в режиме реального времени по мере ввода.' },
  { name: 'Скопируйте хеш', text: 'Нажмите на значок копирования рядом с каждым алгоритмом, чтобы сохранить его в буфер обмена.' },
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

const ui: HashGeneratorUI = {
  labelInput: 'Входной текст',
  placeholderInput: 'Введите или вставьте текст здесь, чтобы вычислить его хеши...',
  labelSalt: 'Соль (необязательно)',
  placeholderSalt: 'Семя безопасности...',
  labelRounds: 'Раунды (Stretch)',
  copyMd5: 'Копировать MD5',
  copySha1: 'Копировать SHA-1',
  copySha256: 'Копировать SHA-256',
  copySha512: 'Копировать SHA-512',
};

export const content: ToolLocaleContent<HashGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliographyTitle: 'Технические ресурсы по хешированию',
  bibliography: [
    { name: 'MDN Web Docs: SubtleCrypto.digest() API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'IETF: The MD5 Message-Digest Algorithm (RFC 1321)', url: 'https://datatracker.ietf.org/doc/html/rfc1321' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Что такое криптографический хеш?', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>Криптографический хеш</strong> — это математическая функция, которая преобразует любой объем данных в строку фиксированной длины. Одни и те же входные данные всегда дают один и тот же результат, но любое минимальное изменение во входных данных генерирует совершенно другой хеш.',
    },
    { type: 'title', text: 'Доступные алгоритмы', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>MD5 (128 бит):</strong> быстрый и широко поддерживаемый. Считается небезопасным для паролей, но полезен для проверки целостности файлов в некритичных средах.',
        '<strong>SHA-1 (160 бит):</strong> не рекомендуется для критически важных целей безопасности с 2017 года. Все еще присутствует в устаревших системах.',
        '<strong>SHA-256 (256 бит):</strong> текущий стандарт для большинства приложений. Используется в Bitcoin, TLS и подписи кода.',
        '<strong>SHA-512 (512 бит):</strong> более длинный вариант SHA-2, идеально подходит, когда требуется максимальная стойкость к коллизиям.',
      ],
    },
    { type: 'title', text: 'Соль и Key Stretching', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>Соль</strong> — это случайная строка, добавляемая к тексту перед хешированием, гарантирующая, что два идентичных входа создадут разные хеши. <strong>Key Stretching</strong> (раунды) применяет функцию хеширования несколько раз, чтобы повысить устойчивость к атакам перебором.',
    },
    { type: 'title', text: 'Полная конфиденциальность: 100% на стороне клиента', level: 3 },
    {
      type: 'paragraph',
      html: 'Этот инструмент использует браузерный <strong>Web Crypto API</strong> для SHA и чистую реализацию на TypeScript для MD5. Вся обработка происходит локально: ваши данные никогда не покидают ваше устройство.',
    },
  ],
};

