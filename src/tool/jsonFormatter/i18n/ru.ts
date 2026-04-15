import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonFormatterUI } from '../ui';

const slug = 'json-formatter-ru';
const title = 'Бесплатный онлайн форматировщик и валидатор JSON';
const description =
  'Бесплатный онлайн-инструмент для форматирования, валидации и исправления кода JSON. Сделайте JSON красивым и структурированным. Обнаружение синтаксических ошибок и улучшение читаемости кода.';

const faqData = [
  {
    question: 'Безопасны ли мои данные при использовании этого форматировщика?',
    answer:
      'Безусловно. Вся обработка происходит на 100% в вашем браузере (на стороне клиента). Ваши данные JSON никогда не отправляются на сервер, что обеспечивает полную конфиденциальность ваших структур данных.',
  },
  {
    question: 'Что вызывает ошибку «Invalid JSON»?',
    answer:
      'Обычно она вызвана лишними запятыми в конце объекта, отсутствием двойных кавычек вокруг ключей или невидимыми символами. Наш инструмент подсвечивает точную строку с ошибкой, чтобы вы могли ее исправить.',
  },
  {
    question: 'Может ли он восстановить поврежденный JSON?',
    answer:
      'Наш инструмент автоматически пытается исправить распространенные ошибки, такие как ненужные запятые в конце или неправильно сформированные escape-последовательности, чтобы JSON стал валидным в соответствии со стандартом RFC 8259.',
  },
  {
    question: 'Поддерживаются ли очень большие файлы JSON?',
    answer:
      'Да, механизм обработки оптимизирован для работы со сложными структурами данных и большими файлами без блокировки интерфейса браузера.',
  },
];

const howToData = [
  {
    name: 'Вставьте ваш код',
    text: 'Вставьте неформатированный или минифицированный JSON в текстовую область.',
  },
  {
    name: 'Валидация и форматирование',
    text: 'Система автоматически проанализирует код, подсветит синтаксические ошибки и применит отступы для улучшения читаемости.',
  },
  {
    name: 'Выберите стиль',
    text: 'Выберите расширенный (beautify) или сжатый (minify) формат в зависимости от того, что вам нужно: читаемость или экономия места.',
  },
  {
    name: 'Скопируйте результат',
    text: 'Нажмите кнопку копирования, чтобы перенести идеально валидный JSON в буфер обмена.',
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

const ui: JsonFormatterUI = {
  labelInput: 'Ввод (JSON)',
  labelOutput: 'Результат',
  btnMinify: 'Сжать',
  btnBeautify: 'Форматировать',
  btnFix: 'Попробовать исправить',
  btnCopy: 'Копировать',
  statusWaiting: 'Ожидание ввода...',
  statusValid: 'Валидный JSON',
  statusInvalid: 'Невалидный JSON',
  toastCopied: 'Скопировано!',
  toastFixed: 'JSON исправлен (предпросмотр)',
  toastFixFailed: 'Не удалось исправить автоматически',
  placeholder: 'Вставьте ваш JSON здесь...',
};

export const content: ToolLocaleContent<JsonFormatterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliographyTitle: 'Ссылки и стандарты',
  bibliography: [
    {
      name: 'RFC 8259 – The JavaScript Object Notation (JSON) Data Interchange Format (IETF)',
      url: 'https://datatracker.ietf.org/doc/html/rfc8259',
    },
    {
      name: 'ECMA-404 – The JSON Data Interchange Syntax (Ecma International)',
      url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-404/',
    },
    {
      name: 'JSON.org – Введение в JSON',
      url: 'https://www.json.org/json-en.html',
    },
    {
      name: 'MDN Web Docs – JSON',
      url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Валидация и форматирование JSON',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'JSON (JavaScript Object Notation) является стандартом де-факто для обмена данными в Интернете. Однако его строгий синтаксис делает его подверженным человеческим ошибкам при ручном редактировании.',
    },
    {
      type: 'paragraph',
      html: 'Этот инструмент позволяет вам проверить структуру, отформатировать код для улучшения его читаемости и автоматически исправить распространенные синтаксические ошибки.',
    },
    { type: 'grid', columns: 2 },
    {
      type: 'card',
      title: 'Распространенные ошибки, которые он исправляет',
      html: '<ul><li><strong>Одинарные кавычки:</strong> Стандарт JSON требует двойных кавычек. Инструмент преобразует <code>\'key\': \'value\'</code> в <code>"key": "value"</code>.</li><li><strong>Ключи без кавычек:</strong> Обнаруживает ключи объектов в стиле JavaScript и добавляет необходимые кавычки.</li><li><strong>Лишние запятые:</strong> Удаляет запятые в конце объектов или массивов, которые нарушают работу строгого парсера.</li></ul>',
    },
    {
      type: 'card',
      title: 'Особенности',
      html: '<ul><li><strong>Подсветка синтаксиса:</strong> Раскрашивает ключи, строки, числа и логические значения для облегчения быстрого чтения.</li><li><strong>Валидация в реальном времени:</strong> Мгновенно указывает, является ли JSON валидным, или показывает конкретную ошибку парсинга.</li><li><strong>Полная конфиденциальность:</strong> Обработка происходит на 100% в вашем браузере. Данные не отправляются на внешние серверы.</li></ul>',
    },
  ],
};

