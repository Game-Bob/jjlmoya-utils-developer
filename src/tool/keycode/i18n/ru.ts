import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeycodeUI } from '../ui';

const slug = 'inspekttor-koda-klavishi';
const title = 'Онлайн Визуализатор Кода Клавиши. Инспектор Кода Ключа';
const description =
  'Бесплатный онлайн инструмент для просмотра event.key, event.code, event.which и расположения любой клавиши клавиатуры в реальном времени. Генерирует готовые к использованию сниппеты кода JavaScript.';

const faqData = [
  {
    question: 'В чём разница между event.key и event.code?',
    answer:
      'event.code представляет физическую позицию клавиши на клавиатуре, независимо от настроенного языка. event.key представляет сгенерированный символ, который может измениться, если вы нажмёте Shift или используете другой язык. Используйте code для управления игрой; используйте key для ввода текста и семантических сочетаний клавиш.',
  },
  {
    question: 'Что такое event.which и почему это устаревшее?',
    answer:
      'event.which — это устаревшее свойство, которое возвращает числовой код ASCII для клавиши. Оно помечено как устаревшее в современных стандартах, потому что event.key и event.code заменяют его более точной и читаемой информацией. Оно показано в этом инструменте в образовательных целях.',
  },
  {
    question: 'Что означает свойство location?',
    answer:
      'Свойство location указывает, где физически находится клавиша на клавиатуре: Стандартная (обычная позиция), Левая (левая клавиша-модификатор), Правая (правая клавиша-модификатор) или Цифровая клавиатура (цифровая панель). Это полезно для различия между левой и правой клавишами CTRL, например.',
  },
  {
    question: 'Работает ли это с международными клавиатурами и раскладками не-QWERTY?',
    answer:
      'Да. Инструмент показывает ровно то, что сообщает браузер для вашей конфигурации клавиатуры. event.code всегда возвращает имя QWERTY физической позиции, а event.key показывает фактический символ согласно вашему языку.',
  },
];

const howToData = [
  {
    name: 'Нажмите любую клавишу',
    text: 'Установив фокус на страницу, нажмите любую клавишу на клавиатуре, чтобы мгновенно увидеть всю информацию о событии.',
  },
  {
    name: 'Копируйте отдельные значения',
    text: 'Нажмите кнопку копирования рядом с каждым свойством (event.key, event.code и т. д.), чтобы скопировать это конкретное значение в буфер обмена.',
  },
  {
    name: 'Используйте сниппеты кода',
    text: 'В разделе "Quick Snippets" вы найдёте блоки кода JavaScript, готовые для вставки прямо в ваш проект.',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ru',
};

const ui: KeycodeUI = {
  promptTitle: 'Нажмите клавишу',
  promptSubtitle: 'Любую клавишу на клавиатуре, чтобы увидеть её код',
  snippetsTitle: 'Быстрые Сниппеты',
  btnCopy: 'Копировать',
  locationStandard: 'Стандартная',
  locationLeft: 'Левая',
  locationRight: 'Правая',
  locationNumpad: 'Цифровая клавиатура',
};

export const content: ToolLocaleContent<KeycodeUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Часто Задаваемые Вопросы',
  faq: faqData,
  bibliographyTitle: 'Ссылки и Стандарты',
  bibliography: [
    {
      name: 'MDN Web Docs – KeyboardEvent',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent',
    },
    {
      name: 'Спецификация UI Events (W3C) – KeyboardEvent',
      url: 'https://www.w3.org/TR/uievents/#events-keyboardevents',
    },
    {
      name: 'MDN – Значения KeyboardEvent.code',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Понимание событий клавиатуры в JavaScript',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Когда пользователь нажимает клавишу, браузер срабатывает три события: <code>keydown</code>, <code>keypress</code> и <code>keyup</code>. Каждое раскрывает свойства с информацией о нажатой клавише, но не все эквивалентны или рекомендуются.',
    },
    {
      type: 'title',
      text: 'Свойства событий клавиатуры',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'event.code — Физическая клавиша',
      html: '<p>Возвращает идентификатор <strong>физической позиции</strong> клавиши на клавиатуре, используя номенклатуру QWERTY. Например, клавиша "A" на клавиатуре AZERTY возвращает <code>KeyQ</code>. Идеально для управления игрой, где важна позиция, а не символ.</p>',
    },
    {
      type: 'card',
      title: 'event.key — Сгенерированный символ',
      html: '<p>Возвращает <strong>значение символа</strong>, сгенерированное в соответствии с языком и активными модификаторами. Нажатие Shift+A возвращает <code>"A"</code>; без Shift возвращает <code>"a"</code>. Для специальных клавиш возвращает названия, такие как <code>"Enter"</code>, <code>"Escape"</code>, <code>"ArrowUp"</code>.</p>',
    },
    {
      type: 'title',
      text: 'Когда использовать каждое свойство',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Используйте <code>event.code</code> для управления игрой (WASD независимо от языка) и <code>event.key</code> для обнаружения определённых символов или семантических сочетаний клавиш, таких как <code>Ctrl+C</code>.',
    },
    {
      type: 'paragraph',
      html: 'Свойства <code>event.which</code> и <code>event.keyCode</code> официально <strong>устаревшие</strong> согласно стандарту W3C. Хотя современные браузеры продолжают их поддерживать для совместимости, их не следует использовать в новом коде.',
    },
  ],
};
