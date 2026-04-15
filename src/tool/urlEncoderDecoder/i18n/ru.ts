import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlEncoderDecoderUI } from '../ui';

const slug = 'url-encoder-decoder-ru';
const title = 'Онлайн URL энкодер и декодер';
const description =
  'Преобразуйте специальные символы любой ссылки в безопасный формат (Percent-Encoding) или мгновенно возвращайте их в исходное читаемое состояние локально.';

const faqData = [
  {
    question: 'Какие символы кодируются в URL?',
    answer:
      'Кодируются все символы, не разрешенные стандартом ASCII для URL: пробелы, буквы с диакритическими знаками, символы, такие как &, =, +, #, ?, / и другие. Например, пробел заменяется на %20, а ñ — на %C3%B1.',
  },
  {
    question: 'В чем разница между encodeURI и encodeURIComponent?',
    answer:
      'encodeURI кодирует полный URL-адрес и оставляет нетронутыми зарезервированные символы, такие как / и ?. encodeURIComponent кодирует все специальные символы, включая зарезервированные, что делает его идеальным для кодирования отдельных значений параметров запроса.',
  },
  {
    question: 'Почему в моем URL-адресе %20 вместо пробелов?',
    answer:
      'Протокол HTTP не допускает использования пробелов в URL-адресах. %20 — это представление пробела в кодировке Percent-Encoding согласно стандарту ASCII. Некоторые системы используют знак + в качестве альтернативы, но %20 является наиболее универсальным и безопасным.',
  },
  {
    question: 'Безопасно ли использовать этот инструмент с личными URL-адресами?',
    answer:
      'Да, совершенно безопасно. Вся обработка происходит в вашем браузере с использованием встроенного JavaScript (encodeURIComponent/decodeURIComponent). Ни один из ваших URL-адресов или параметров не отправляется на внешний сервер.',
  },
];

const howToData = [
  {
    name: 'Вставьте исходный текст',
    text: 'Введите или вставьте ваш URL-адрес или текстовую строку в верхнее поле «Исходный текст (читаемый)».',
  },
  {
    name: 'Закодируйте или декодируйте',
    text: 'Нажмите «Закодировать URL», чтобы преобразовать текст в безопасный формат Percent-Encoding, или «Декодировать», чтобы вернуть закодированный URL-адрес в читаемый вид.',
  },
  {
    name: 'Скопируйте результат',
    text: 'Используйте кнопку «Копировать» в соответствующем поле, чтобы перенести результат в буфер обмена.',
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
  inLanguage: 'ru',
};

const ui: UrlEncoderDecoderUI = {
  labelRaw: 'Исходный текст (читаемый)',
  labelEncoded: 'Форматированный URL (закодированный)',
  btnClear: 'Очистить',
  btnCopy: 'Копировать',
  btnCopied: 'Скопировано!',
  btnEncode: 'Закодировать URL',
  btnDecode: 'Декодировать',
  placeholderRaw: 'https://example.com/search?q=красные туфли&size=38',
  placeholderEncoded: 'https%3A%2F%2Fexample.com%2Fsearch%3Fq%3D%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%B5%20%D1%82%D1%83%D1%84%D0%BB%D0%B8%26size%3D38',
};

export const content: ToolLocaleContent<UrlEncoderDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliographyTitle: 'Ссылки и документация',
  bibliography: [
    {
      name: 'MDN Web Docs: encodeURIComponent()',
      url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent',
    },
    {
      name: 'IETF RFC 3986: URI Generic Syntax',
      url: 'https://datatracker.ietf.org/doc/html/rfc3986',
    },
    {
      name: 'W3C: URL Living Standard',
      url: 'https://url.spec.whatwg.org/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Что такое URL-кодирование?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'При просмотре веб-страниц или отправке запросов на серверы часто думают об URL (Uniform Resource Locator) просто как о «веб-адресе». Однако интернет-протокол диктует, что URL-адреса могут передаваться только с использованием очень ограниченного набора <strong>стандартных символов ASCII</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Что произойдет, если URL-адрес содержит пробел, буквы с диакритическими знаками или специальные параметры, такие как знаки плюс (<code>+</code>) или равно (<code>=</code>)? Чтобы предотвратить сбои систем при попытке чтения недопустимых символов, они должны быть переведены в их безопасную совместимую форму с использованием <strong>Percent-Encoding</strong>.',
    },
    {
      type: 'title',
      text: 'Как работает Percent-Encoding',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Когда вы используете этот инструмент, алгоритм берет любой «небезопасный» символ (например, пробел или букву с диакритическим знаком, такую как ñ) и заменяет его знаком процента <code>%</code>, за которым следуют две шестнадцатеричные цифры, соответствующие его значению в стандарте UTF-8.',
    },
    {
      type: 'list',
      items: [
        '<strong>Базовый пример:</strong> обычный пробел будет заменен его безопасным эквивалентом: <code>%20</code>.',
        '<strong>Расширенная поддержка:</strong> буква <code>ё</code> заменяется на <code>%D1%91</code>, а <code>й</code> — на <code>%D0%B9</code>.',
      ],
    },
    {
      type: 'title',
      text: 'Важность в API и GET-запросах',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'При разработке интеграций типичной ошибкой является передача необработанной строки в параметры URL. Если вы вставите <code>рубашка&синий</code> в необработанном виде в свой бэкэнд (<code>/search?q=рубашка&синий</code>), сервер интерпретирует <code>синий</code> как новый параметр, нарушая всю логику.',
    },
    {
      type: 'paragraph',
      html: 'Этот инструмент гарантирует чистые автоматические вычисления со 100% выполнением в вашем локальном браузере. Ни одна из ваших строк URL не передается на сторонние серверы, что обеспечивает конфиденциальность ваших токенов и аналитических параметров.',
    },
  ],
};

