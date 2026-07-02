import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VisualCssGridFlexboxGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'vizualniy-generator-css-grid-flexbox';
const title = 'Визуальный Генератор CSS Grid и Flexbox Макетов';
const description = 'Проектируйте адаптивные макеты, перемещая визуальные блоки, изменяя размер контейнера, настраивая выравнивание и используя пресеты  -  затем копируйте чистый нативный CSS мгновенно.';

const howTo = [
  { name: 'Выберите пресет или Flexbox / Grid', text: 'Начните с пресета макета (navbar, cards, hero, sidebar, gallery) или переключайтесь между Flexbox и Grid вручную.' },
  { name: 'Измените размер макета', text: 'Изменяйте размер контейнера за нижний угол, чтобы проверить, как дизайн реагирует на доступное пространство.' },
  { name: 'Настройте выравнивание', text: 'Используйте ползунки и выпадающие списки для направления, переноса, отступа, колонок, justify-content, align-items, align-content, ширины, высоты и размера элементов.' },
  { name: 'Копируйте готовый CSS', text: 'Копируйте сгенерированный CSS, когда визуальный результат соответствует желаемой структуре. Без зависимостей от фреймворков.' },
];

const faq = [
  { question: 'Когда использовать Flexbox вместо CSS Grid?', answer: 'Используйте Flexbox для одномерных макетов  -  панели навигации, группы кнопок, оборачиваемые карточки, центрированный контент. Grid, когда строки и колонки важны вместе  -  дашборды, галереи, формы, структурированные разделы страниц.' },
  { question: 'Может ли этот генератор создавать адаптивные макеты?', answer: 'Да. Сгенерированный CSS использует нативное flex-оборачивание или повторяющиеся grid-колонки. Изменяйте размер визуального холста, чтобы проверить отступы и выравнивание при разных размерах.' },
  { question: 'Почему justify-content и align-items работают по-разному в grid и flex?', answer: 'Flexbox распределяет элементы вдоль главной и поперечной оси. Grid сначала помещает элементы в треки, затем выравнивает содержимое внутри них. Переключение между режимами делает эту разницу сразу заметной.' },
  { question: 'Привязан ли сгенерированный CSS к какому-либо фреймворку?', answer: 'Нет. Результат  -  чистый нативный CSS. Используйте его в обычном HTML, Astro, React, Vue, Svelte, Web Components или любом проекте, принимающем стандартный CSS.' },
  { question: 'Для чего нужны пресеты макетов?', answer: 'Пресеты ускоряют типовые макеты, чтобы видеть реалистичные конфигурации без начала с нуля. Каждый пресет задаёт режим, направление, перенос, выравнивание и размер контейнера для реального паттерна.' },
];

const ui: VisualCssGridFlexboxGeneratorUI = {
  modeLabel: 'Режим макета',
  flexMode: 'Flexbox',
  gridMode: 'Grid',
  canvasLabel: 'Интерактивный холст макета',
  addItem: 'Добавить',
  removeItem: 'Удалить',
  resetLayout: 'Сбросить',
  gapLabel: 'Отступ',
  columnsLabel: 'Колонки grid',
  widthLabel: 'Ширина контейнера',
  heightLabel: 'Высота контейнера',
  justifyLabel: 'Выравн.',
  alignLabel: 'Выравн.',
  itemSizeLabel: 'Размер элемента',
  codeTitle: 'Сгенерированный CSS',
  copyCode: 'Копировать CSS',
  copied: 'Скопировано!',
  dragHint: 'Изменяйте размер холста за угол  -  CSS обновляется в реальном времени!',
  outputLabel: 'Вывод сгенерированного CSS',
  justifyStart: 'Начало',
  justifyCenter: 'Центр',
  justifyEnd: 'Конец',
  justifyBetween: 'Space between',
  justifyAround: 'Space around',
  justifyEvenly: 'Space evenly',
  alignStart: 'Начало',
  alignCenter: 'Центр',
  alignEnd: 'Конец',
  alignStretch: 'Растянуть',
  alignBaseline: 'Базовая линия',
  itemPrefix: 'Блок',
  directionLabel: 'Направление',
  directionRow: 'Строка →',
  directionRowReverse: '← Строка обр',
  directionColumn: 'Колонка ↓',
  directionColumnReverse: '↑ Кол обр',
  wrapLabel: 'Перенос',
  wrapNoWrap: 'Без переноса',
  wrapWrap: 'Перенос',
  wrapWrapReverse: 'Перенос обр',
  alignContentLabel: 'Выравн. содерж.',
  alignContentStart: 'Начало',
  alignContentCenter: 'Центр',
  alignContentEnd: 'Конец',
  alignContentBetween: 'Space between',
  alignContentAround: 'Space around',
  alignContentEvenly: 'Space evenly',
  alignContentStretch: 'Растянуть',
  presetsLabel: 'Пресеты',
  presetNavbar: 'Навбар',
  presetCards: 'Карточки',
  presetHero: 'Hero',
  presetSidebar: 'Сайдбар',
  presetGallery: 'Галерея',
  shakeLimit: 'Нужно минимум 2 элемента!',
  spanHint: 'Двойной клик по элементу меняет ширину колонки (1-3) в режиме Grid',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<VisualCssGridFlexboxGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'FAQ генератора CSS макетов',
  faq,
  bibliographyTitle: 'Ссылки по CSS Grid и Flexbox',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Создавайте CSS-макеты, наблюдая за поведением, а не запоминая свойства', level: 2 },
    { type: 'paragraph', html: 'CSS Grid и Flexbox мощны, потому что описывают отношения макета вместо фиксированных координат. Сложность в том, чтобы предсказать, как <strong>gap</strong>, <strong>justify-content</strong>, <strong>align-items</strong>, направление, перенос, треки и доступное пространство взаимодействуют. Этот генератор превращает абстрактные свойства в живую площадку с пресетами и CSS в реальном времени.' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: 'Быстрых пресетов макетов', icon: 'mdi:view-grid-plus' }, { value: 'Онлайн', label: 'CSS обновляется при каждом изменении', icon: 'mdi:code-braces' }, { value: '0', label: 'Зависимостей от фреймворков в CSS', icon: 'mdi:language-css3' }] },
    { type: 'title', text: 'Flexbox vs Grid: выберите модель до настройки выравнивания', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: 'Flexbox', description: 'Лучше всего для одномерных потоков, где элементы выстраиваются в строку или колонку и естественно переносятся.', icon: 'mdi:format-align-justify', highlight: true, points: ['Навигация', 'Группы кнопок', 'Карточки', 'Центрированный контент'] }, { title: 'CSS Grid', description: 'Лучше всего для двумерных структур, где строки и колонки определяют форму композиции.', icon: 'mdi:grid', points: ['Дашборды', 'Галереи', 'Формы', 'Редакционные разделы'] }] },
    { type: 'title', text: 'Чему учит каждый элемент управления', level: 3 },
    { type: 'table', headers: ['Элемент', 'Свойство CSS', 'На что смотреть'], rows: [['Направление', '<code>flex-direction</code>', 'Как течёт главная ось  -  смена строки на колонку меняет всю логику макета.'], ['Перенос', '<code>flex-wrap</code>', 'Остаются ли элементы на одной линии или переносятся на новые строки.'], ['Отступ', '<code>gap</code>', 'Пространство между элементами без полей, ломающихся на краях.'], ['Выравн.', '<code>justify-content</code>', 'Как свободное пространство распределяется вдоль главной оси.'], ['Выравн.', '<code>align-items</code>', 'Как элементы располагаются на поперечной оси.'], ['Выравн. содерж.', '<code>align-content</code>', 'Как перенесённые flex-линии или grid-строки распределяют дополнительное пространство.'], ['Колонки', '<code>grid-template-columns</code>', 'Сколько равных треков создаёт grid до переноса элементов на следующую строку.'], ['Размер контейнера', '<code>width</code> и <code>min-height</code>', 'Как тот же CSS реагирует при изменении доступного пространства.']] },
    { type: 'tip', title: 'Сначала масштабируйте, потом оптимизируйте', html: 'Начните с масштабирования холста до реалистичного размера. Затем настройте отступ и выравнивание. Так сгенерированный CSS работает в реальных условиях.' },
    { type: 'title', text: 'Чистый CSS, который можно адаптировать', level: 3 },
    { type: 'code', ariaLabel: 'Пример сгенерированного CSS', code: '.layout-playground {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 24px;\n  justify-content: center;\n  align-items: center;\n}' },
    { type: 'diagnostic', variant: 'info', title: 'Почему важно визуальное масштабирование', html: 'Многие ошибки макета проявляются только когда контейнер уже, выше или заполнен другим количеством элементов. Масштабирование при живом обновлении CSS помогает обнаружить неудобные переносы и хрупкие решения по выравниванию.' },
    { type: 'summary', title: 'Рекомендуемый рабочий процесс', items: ['Выберите пресет или Flexbox для одномерных потоков и Grid для двумерной структуры.', 'Масштабируйте холст перед копированием CSS, чтобы макет выдерживал реалистичные ограничения.', 'Используйте gap для отступов между элементами вместо добавления полей каждому дочернему элементу.', 'Копируйте сгенерированный CSS как отправную точку, затем добавьте специфичные для проекта селекторы и медиа-запросы.'] },
  ],
};
