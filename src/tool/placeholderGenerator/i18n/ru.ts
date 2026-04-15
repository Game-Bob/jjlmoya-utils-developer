import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PlaceholderGeneratorUI } from '../ui';

const slug = 'generator-izobrazhenii-zapolnitelja';
const title = 'Генератор плейсхолдеров. Быстрые Веб Макеты Онлайн';
const description =
  'Создавайте пользовательские плейсхолдер-изображения для веб-дизайна. Настраивайте разрешение, фон, текст и экспортируйте в PNG, WebP или JPEG мгновенно.';

const faqData = [
  {
    question: 'Что такое плейсхолдер-изображение?',
    answer:
      'Плейсхолдер или заполняющее изображение — это временный графический элемент, используемый в веб-дизайне и макете для зарезервирования пространства, где будет размещено окончательное изображение. Они помогают визуализировать структуру страницы до появления финального контента.',
  },
  {
    question: 'Могу ли я использовать любое разрешение в генераторе?',
    answer:
      'Да, вы можете ввести любое числовое значение для ширины и высоты. Генератор создаст холст с точными запрошенными размерами, идеально подходящий для строгих сеток или конкретных рекламных баннеров.',
  },
  {
    question: 'В каком формате загружаются изображения?',
    answer:
      'По умолчанию изображения генерируются в WebP для оптимального сжатия, но вы можете загрузить их в формате PNG для максимального качества без потерь или JPEG для традиционной совместимости.',
  },
  {
    question: 'Обрабатывается ли это на каком-либо сервере?',
    answer:
      'Нет, вся визуализация изображения генерируется мгновенно в виртуальной памяти (Canvas) вашего собственного браузера. Это мгновенно и не требует отправки данных по сети.',
  },
];

const howToData = [
  {
    name: 'Установите размеры',
    text: 'Введите значения ширины и высоты напрямую или нажмите на один из предустановок (FHD, HD, Instagram и т.д.) для автоматического заполнения.',
  },
  {
    name: 'Настройте цвета и текст',
    text: 'Выберите цвета фона и текста, используя встроенные средства выбора или введя шестнадцатеричный код. Опционально добавьте пользовательский текст для замены метки размера по умолчанию.',
  },
  {
    name: 'Выберите типографику и формат',
    text: 'Выберите семейство шрифтов и размер. Выберите формат вывода (WebP, PNG или JPEG) в соответствии с вашими потребностями.',
  },
  {
    name: 'Загрузите изображение',
    text: 'Нажмите кнопку Загрузить, чтобы сохранить созданный плейсхолдер прямо на ваше устройство.',
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

const ui: PlaceholderGeneratorUI = {
  labelDimensions: 'Быстрые Размеры',
  labelWidth: 'Ширина (px)',
  labelHeight: 'Высота (px)',
  labelBgColor: 'Фон',
  labelTextColor: 'Текст',
  labelCustomText: 'Пользовательский Текст (Опционально)',
  placeholderCustomText: 'Пример: Hero Banner',
  labelFontFamily: 'Типографика',
  labelFontSize: 'Базовый Размер',
  fontSizeAuto: 'Автоматический',
  labelFormat: 'Формат Вывода',
  btnDownload: 'Загрузить Изображение',
};

export const content: ToolLocaleContent<PlaceholderGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Часто Задаваемые Вопросы',
  faq: faqData,
  bibliographyTitle: 'Ссылки и Документация',
  bibliography: [
    {
      name: 'MDN Web Docs: HTMLCanvasElement.toDataURL()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL',
    },
    {
      name: 'MDN Web Docs: CanvasRenderingContext2D',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D',
    },
    {
      name: 'W3C: HTML Canvas 2D Context',
      url: 'https://www.w3.org/TR/2dcontext/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Окончательный Инструмент для Быстрых Макетов',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'На ранних этапах концептуализации или структурного макета веб-сайта (wireframing) у нас редко есть финальный фотографический контент. Пустые размеры могут исказить глобальную визуализацию продукта и скрыть критические ошибки в пространстве или пропорциях. Генератор плейсхолдер-изображений мгновенно решает эту проблему, позволяя вам вводить цветные области с точными размерами.',
    },
    {
      type: 'tip',
      title: 'Дизайн без Трения',
      html: 'Интегрировать пространство ровно 1200x800 пиксели необходимо при создании CSS Grid. Загружая блоки заполнения, вы избегаете внедрения дополнительного CSS или скриптов третьих сторон в ваш временный код.',
    },
    {
      type: 'title',
      text: 'Важность Избежания Внешних Сервисов',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Повторяющаяся практика в экосистеме frontend состоит в связывании сервисов, таких как <code>via.placeholder.com</code> или подобных, непосредственно в атрибутах <code>src</code> HTML. Хотя теоретически гибко через параметры URL, это имеет глубокие побочные эффекты, которых тщательный разработчик избегал бы любой ценой.',
    },
    {
      type: 'paragraph',
      html: 'Внедрение удаленного домена в каждый тег изображения на странице разработки увеличивает DNS-запросы, штрафует hot-reloading системы Vite, Gulp или Webpack и случайно раскрывает следы в ветках, которые в конечном итоге оказываются в облаке. Используя эту утилиту и генерируя изображение в вашем предпочтительном формате (WebP, PNG или JPEG), вы полностью централизуете ваш прототип в режиме localhost.',
    },
    {
      type: 'title',
      text: 'Ключевые Возможности Алгоритма Генератора',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Идеальное Разрешение Пикселя:</strong> Встроенный HTML5 Canvas гарантирует, что экспортированный холст арифметически соответствует координатам, указанным пользователем.',
        '<strong>Типографическое Автомасштабирование:</strong> В автоматическом режиме размер шрифта вычисляет область периметра и количество символов для изящного размещения текста без нежелательных <em>переполнений</em>.',
        '<strong>Шестнадцатеричное Слияние:</strong> Двусторонний контроль состояния между встроенными селекторами экосистемы HTML и типизированными входами, гарантирующий точные контрасты, продиктованные вашей палитрой Figma или Penpot UI/UX.',
      ],
    },
    {
      type: 'title',
      text: 'Скрытое Искусство Технического Wireframing',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Нет ни одного монолитного проекта или микро-фронтенда, который не проходил бы основные этапы, особенно при работе с требовательными клиентами или Product Manager\'ами с железной волей. Облегчение гибких графических итераций без перетаскивания затрат на финализированные <em>assets</em> отличает быстрого разработчика от застрявшего. Этот генератор напрямую использует современный JavaScript API <code>toDataURL()</code> на вашей локальной машине для доставки результата промышленного уровня без сомнительной промежуточной обработки.',
    },
  ],
};
