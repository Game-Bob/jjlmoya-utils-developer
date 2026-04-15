import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConversorExcelCsvHtmlUI } from '../ui';

const slug = 'konverter-tablic-excel-csv-html';
const title = 'Генератор кода для конвертации Excel и CSV в HTML таблицы';
const description = 'Мгновенно преобразуйте данные Excel или CSV в чистые, семантические HTML-таблицы. Бесплатный инструмент для разработчиков и создателей контента.';

const faqData = [
  {
    question: 'Как преобразовать файл Excel (.xlsx) в HTML?',
    answer: 'Сначала откройте файл в Excel и сохраните его как CSV (с разделителями-запятыми). Затем загрузите этот CSV-файл в наш инструмент или вставьте его содержимое, чтобы получить код HTML-таблицы.',
  },
  {
    question: 'Включает ли сгенерированный код стили CSS?',
    answer: 'Генератор создает чистый HTML с дополнительными классами для границ и «зебры» (чередующихся строк). Окончательные визуальные стили зависят от CSS вашего собственного сайта, что обеспечивает идеальную интеграцию.',
  },
  {
    question: 'Могу ли я загружать очень большие CSV-файлы?',
    answer: 'Да, наш инструмент обрабатывает данные локально в вашем браузере. Это означает, что он работает очень быстро и безопасно, так как ваши данные никогда не передаются через Интернет.',
  },
  {
    question: 'Совместим ли он с Google Таблицами?',
    answer: 'Безусловно. В Google Таблицах перейдите в меню Файл > Скачать > Значения, разделенные запятыми (.csv), и используйте этот файл в нашем инструменте.',
  },
];

const howToData = [
  {
    name: 'Подготовьте данные',
    text: 'Подготовьте ваш файл Excel или CSV. Убедитесь, что данные корректны.',
  },
  {
    name: 'Загрузите данные',
    text: 'Вставьте текст CSV в поле ввода или перетащите файл прямо в конвертер.',
  },
  {
    name: 'Настройте таблицу',
    text: 'Выберите, хотите ли вы использовать первую строку в качестве заголовка и нужны ли вам базовые стили.',
  },
  {
    name: 'Скопируйте код',
    text: 'Перейдите на вкладку «Код HTML» и скопируйте результат для вставки на ваш сайт.',
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

const ui: ConversorExcelCsvHtmlUI = {
  csvInputLabel: 'Вставьте ваш CSV здесь',
  csvInputPlaceholder: 'Имя,Возраст,Город\nИван,25,Москва\nАнна,30,Санкт-Петербург',
  uploadLabel: 'Или загрузите ваш файл (CSV)',
  dragDropLabel: 'Перетащите файл сюда',
  headerCheckboxLabel: 'Использовать первую строку как заголовок',
  bordersCheckboxLabel: 'Добавить границы',
  stripeCheckboxLabel: 'Чередующиеся строки (зебра)',
  previewTabLabel: 'Предпросмотр',
  codeTabLabel: 'Код HTML',
  emptyStateLabel: 'Введите данные, чтобы увидеть таблицу',
  copyButtonLabel: 'Копировать код',
  copiedLabel: 'Скопировано!',
};

export const content: ToolLocaleContent<ConversorExcelCsvHtmlUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliographyTitle: 'Ресурсы по HTML-таблицам и форматам данных',
  bibliography: [
    { name: 'W3C: HTML-таблицы', url: 'https://www.w3.org/WAI/tutorials/tables/' },
    { name: 'MDN: Элемент таблицы HTML', url: 'https://developer.mozilla.org/ru/docs/Web/HTML/Element/table' },
    { name: 'RFC 4180: Формат CSV', url: 'https://tools.ietf.org/html/rfc4180' },
    { name: 'Google Таблицы: скачивание данных', url: 'https://support.google.com/docs/answer/183965' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Легко конвертируйте Excel и CSV в HTML-таблицы', level: 2 },
    {
      type: 'paragraph',
      html: 'В современной веб-разработке представление табличных данных является одним из наиболее эффективных способов передачи структурированной информации. Однако ручное преобразование данных из электронных таблиц, таких как <strong>Excel</strong>, или файлов <strong>CSV</strong> в HTML-теги <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> и <code>&lt;td&gt;</code> утомительно и чревато ошибками.',
    },
    { type: 'title', text: 'Зачем использовать семантические HTML-таблицы?', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Доступность:</strong> программы чтения с экрана могут интерпретировать структуру и помогать пользователям с нарушениями зрения.',
        '<strong>SEO:</strong> поисковые системы индексируют содержимое ячеек, улучшая рейтинг ваших данных.',
        '<strong>Адаптивность:</strong> с помощью небольшого количества CSS HTML-таблицы могут адаптироваться к мобильным устройствам.',
        '<strong>Удобство поддержки:</strong> редактировать данные в HTML гораздо проще, чем повторно создавать изображение целиком.',
      ],
    },
    { type: 'title', text: 'Как работает конвертер Excel в HTML', level: 3 },
    {
      type: 'paragraph',
      html: 'Наша утилита использует нативный текстовый парсер, который обрабатывает файлы с разделителями-запятыми (CSV). Большинство программ для работы с электронными таблицами, включая Microsoft Excel, Google Таблицы и LibreOffice Calc, позволяют экспортировать данные в формате CSV.',
    },
  ],
};
