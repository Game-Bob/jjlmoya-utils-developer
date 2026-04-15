import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssToInlineConverterUI } from '../ui';

const slug = 'css-v-vstrochnye-stilii-html';
const title = 'Конвертер CSS в Встроченные HTML Стили. Встроитель для Email';
const description =
  'Трансформируйте ваши стили и CSS классы в автоматически встроченные стили в HTML. Идеально для рассылок, транзакционных писем и безопасного веб-макета.';

const faqData = [
  {
    question: 'Почему письма нуждаются во встроченном CSS вместо внешних таблиц стилей?',
    answer:
      'Почтовые клиенты, такие как Outlook, Gmail или Apple Mail, фильтруют или игнорируют теги <link> и <style> по соображениям безопасности. Единственный гарантированный способ, чтобы стиль был применён правильно в письме - это встроить его непосредственно в атрибут style каждого HTML элемента.',
  },
  {
    question: 'Что происходит, если элемент уже имеет собственный атрибут style?',
    answer:
      'Инструмент уважает существующие встроченные стили и добавляет новые свойства, имитируя поведение каскада CSS: свойства, объявленные позже, переопределяют более ранние в случае конфликта.',
  },
  {
    question: 'Работает ли это со сложными селекторами, такими как :hover или media queries?',
    answer:
      'Инструмент обрабатывает селекторы классов, идентификаторов, атрибутов и структурные псевдоклассы, которые может разрешить DOMParser. Селекторы, зависящие от состояния, такие как :hover и media queries, не могут быть встроены (они зависят от среды выполнения) и игнорируются.',
  },
  {
    question: 'Отправляется ли мой HTML и CSS на какой-либо сервер?',
    answer:
      'Нет. Вся обработка происходит 100% в вашем браузере с использованием встроенного API DOMParser. Ни один байт вашего кода не покидает ваше устройство, гарантируя полную приватность для шаблонов с чувствительным содержимым.',
  },
];

const howToData = [
  {
    name: 'Вставьте исходный HTML',
    text: 'Напишите или вставьте HTML, который вы хотите обработать, в поле "Исходный HTML". Это может быть фрагмент или полный документ.',
  },
  {
    name: 'Добавьте ваши CSS правила',
    text: 'Вставьте классы и идентификаторы, которые вы хотите внедрить, в поле "CSS Правила". Инструмент применяет их, соблюдая специфичность селектора.',
  },
  {
    name: 'Конвертируйте и копируйте',
    text: 'Нажмите "Внедрить CSS в HTML". Результат со всеми встроченными стилями будет отображен ниже, готов к копированию и вставке в ваш менеджер e-mail или CMS.',
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

const ui: CssToInlineConverterUI = {
  labelHtml: 'Исходный HTML',
  labelCss: 'CSS Правила',
  labelOutput: 'Результат HTML со Встроченными Стилями',
  placeholderHtml: '<div class="my-class">Hello World</div>',
  placeholderCss: '.my-class { color: red; padding: 10px; }',
  placeholderOutput: 'Ваш HTML с встроченными стилями появится здесь...',
  btnConvert: 'Внедрить CSS в HTML',
  btnCopy: 'Копировать Код',
  btnCopied: 'Скопировано!',
  msgError: 'Ошибка обработки. Проверьте, что ваш HTML и CSS корректны.',
};

export const content: ToolLocaleContent<CssToInlineConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Часто Задаваемые Вопросы',
  faq: faqData,
  bibliographyTitle: 'Ссылки и Документация',
  bibliography: [
    {
      name: 'Can I email: Матрица Поддержки HTML и CSS для Email',
      url: 'https://www.caniemail.com/',
    },
    {
      name: 'MDN Web Docs: Глобальный атрибут style',
      url: 'https://developer.mozilla.org/en/docs/Web/HTML/Global_attributes/style',
    },
    {
      name: 'API DOMParser: Безопасный парсинг в браузере',
      url: 'https://developer.mozilla.org/en/docs/Web/API/DOMParser',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Что такое CSS встроитель и почему вам он нужен?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'При разработке современных веб-приложений мы привыкли разделять ответственность: HTML строит структуру, а внешний CSS файл предоставляет весь визуальный стайлинг. Однако не все окружения доверяют внешним стилям или глобальным тегам <code>&lt;style&gt;</code>.',
    },
    {
      type: 'paragraph',
      html: 'Наиболее популярный и строгий случай использования, когда внешний CSS не работает, это <strong>Разработка Email Шаблонов</strong>. В этих окружениях единственный надёжный способ, чтобы шрифт, цвет или отступ отрендерился правильно - это быть вложенным непосредственно в тег: <code>&lt;span style="color: red;"&gt;</code>.',
    },
    {
      type: 'title',
      text: 'Проблема CSS в Email Клиентах',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Почтовые клиенты, такие как Microsoft Outlook, Apple Mail или Gmail, имеют печальную историю с ограничительными CSS движками отрисовки. Большинство фильтруют или отбрасывают теги <code>&lt;link&gt;</code> или <code>&lt;style&gt;</code> из страха перед инъекциями кода, которые могут сломать интерфейс чтения.',
    },
    {
      type: 'tip',
      html: 'Для рассылок или транзакционных писем (чеки, подтверждения аккаунта) использование таблиц и <em>встроченного CSS</em> - это золотой стандарт в индустрии email маркетинга.',
    },
    {
      type: 'title',
      text: 'Как Этот Инструмент Работает в Вашем Браузере',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Безопасный Парсинг:</strong> Использует <code>API DOMParser</code> для временного преобразования входного HTML в безопасный виртуальный DOM внутри вашего браузера.',
        '<strong>Имитация Каскада:</strong> Анализирует ваши CSS правила, применяет веса специфичности к селекторам и мутирует атрибуты <code>style</code> выбранных HTML элементов путём внедрения кода.',
        '<strong>100% Offline:</strong> Ни один байт вашего кода не покидает ваше устройство. Полная приватность для шаблонов с чувствительным содержимым.',
      ],
    },
  ],
};
