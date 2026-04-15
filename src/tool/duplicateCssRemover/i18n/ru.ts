import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DuplicateCssRemoverUI } from '../ui';

const slug = 'udalenie-dublikatov-css';
const title = 'Удаление дублирующегося CSS онлайн. Объединяйте и очищайте стили';
const description =
  'Бесплатный инструмент для очистки и удаления дублирующегося CSS-кода. Объединяет избыточные селекторы, соблюдает каскад и мгновенно уменьшает размер файла прямо в браузере.';

const faqData = [
  {
    question: 'Что происходит при дублировании CSS-селекторов?',
    answer:
      'Когда один и тот же селектор встречается несколько раз, браузер применяет все правила, но последнее объявление каждого свойства перекрывает предыдущие. В итоге получаются файлы тяжелее, чем нужно, без какого-либо реального выигрыша в визуальном результате.',
  },
  {
    question: 'Потеряются ли свойства при удалении дубликатов?',
    answer:
      'Нет. Алгоритм строго соблюдает каскад CSS: при конфликте свойств в рамках одного селектора всегда сохраняется последнее объявленное. Уникальные свойства из каждого блока объединяются под одним общим селектором.',
  },
  {
    question: 'Работает ли инструмент с минифицированным CSS или CSS с комментариями?',
    answer:
      'Инструмент автоматически удаляет комментарии CSS перед обработкой и корректно работает с однострочным кодом. Для CSS с продвинутой вложенностью или сложными at-rules рекомендуется сначала разделить блоки.',
  },
  {
    question: 'Отправляется ли мой CSS на сервер?',
    answer:
      'Нет. Вся обработка происходит прямо в браузере с помощью локального JavaScript. Никакая часть вашего CSS не передаётся на внешние серверы — полная конфиденциальность кода гарантирована.',
  },
];

const howToData = [
  {
    name: 'Вставьте свой CSS',
    text: 'Скопируйте содержимое вашего CSS-файла с повторяющимися селекторами и вставьте его в левое поле "Dirty / Duplicate CSS".',
  },
  {
    name: 'Запустите очистку',
    text: 'Нажмите кнопку "Очистить и объединить CSS". Инструмент просканирует все селекторы, объединит свойства и удалит избыточные блоки.',
  },
  {
    name: 'Проверьте результат и скопируйте',
    text: 'Посмотрите, сколько байт удалось сэкономить, и скопируйте оптимизированный CSS кнопкой "Скопировать код" для использования в проекте.',
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

const ui: DuplicateCssRemoverUI = {
  labelInput: 'Грязный / Дублирующийся CSS',
  labelOutput: 'Очищенный CSS',
  placeholderInput: '.btn { padding: 10px; color: red; }\n.btn { margin: 5px; color: blue; }',
  placeholderOutput: 'Здесь появится оптимизированный и объединённый CSS...',
  btnClean: 'Очистить и объединить CSS',
  btnCopy: 'Скопировать код',
  btnCopied: 'Скопировано!',
  statBytesOriginal: 'Исходный размер',
  statBytesClean: 'Очищенный размер',
  statSaving: 'Экономия',
};

export const content: ToolLocaleContent<DuplicateCssRemoverUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliographyTitle: 'Ссылки и документация',
  bibliography: [
    {
      name: 'Web Vitals: влияние CSS на Render-Blocking и FCP',
      url: 'https://web.dev/articles/render-blocking-resources',
    },
    {
      name: 'Спецификация W3C: каскад и наследование CSS',
      url: 'https://www.w3.org/TR/css-cascade-4/',
    },
    {
      name: 'Clean CSS: библиотека и методы минификации CSS',
      url: 'https://github.com/clean-css/clean-css',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Почему CSS-код дублируется?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'При долгосрочном обслуживании веб-проектов или работе с унаследованным кодом очень часто несколько разработчиков пишут перекрывающиеся CSS-правила. Боясь сломать существующий дизайн, разработчик предпочитает добавить новое избыточное правило в конец документа, вместо того чтобы редактировать или рефакторить исходное.',
    },
    {
      type: 'paragraph',
      html: 'В итоге получается неэффективный файл с десятками многократно объявленных селекторов, который засоряет читаемость кода и существенно увеличивает вес загружаемой страницы.',
    },
    {
      type: 'title',
      text: 'Скрытое влияние на производительность сайта (Web Vitals)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Файлы стилей блокируют естественный рендеринг браузера (ресурс <strong>Render-Blocking</strong>). Пока браузер не загрузит и не построит полный CSSOM, экран остаётся пустым.',
    },
    {
      type: 'tip',
      html: 'Удаление лишних стилей — это не просто вопрос чистоты кода. Это измеримое и немедленное улучшение ключевых показателей, таких как <strong>First Contentful Paint (FCP)</strong>.',
    },
    {
      type: 'title',
      text: 'Как мы объединяем дублирующиеся правила',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Этот инструмент работает как интеллектуальный сборщик. Вместо того чтобы просто сжимать пробелы, как обычный минификатор, он рекурсивно сканирует текст в поисках идентичных паттернов селекторов.',
    },
    {
      type: 'list',
      items: [
        'Представьте, что у вас есть правило <code>.box { color: red; }</code>, а сотню строк спустя — <code>.box { padding: 10px; color: blue; }</code>. Инструмент объединит оба блока под одним селектором <code>.box</code>, включив padding.',
        '<strong>Сохранение каскада CSS:</strong> При прямых конфликтах алгоритм строго сохраняет последнее объявленное свойство. Это гарантирует, что ваша вёрстка не сломается после очистки документа.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Перестаньте отправлять килобайты мёртвого текста на телефоны ваших пользователей. Объединяйте код за миллисекунды, полностью офлайн, прямо в браузере.',
    },
  ],
};
