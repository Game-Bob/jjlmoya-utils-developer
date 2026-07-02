import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssBoxShadowGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'generator-tenei-css';
const title = 'CSS Box Shadow Generator';
const description = 'Проектируйте многослойные тени CSS визуально с живым предпросмотром, ползунками, выбором цвета и пресетами. Копируйте чистый нативный CSS мгновенно.';

const howTo = [
  { name: 'Выберите пресет или начните с нуля', text: 'Выберите из пресетов Card, Float, Inset, Glow или Layered либо настройте тень по умолчанию ползунками.' },
  { name: 'Добавляйте и наслаивайте слои', text: 'Нажмите +, чтобы добавить слои (до 5). Выберите слой для редактирования offset, blur, spread, цвета и прозрачности.' },
  { name: 'Включите inset и измените фон', text: 'Отметьте inset для внутренних теней. Измените цвет фона предпросмотра.' },
  { name: 'Копируйте CSS', text: 'Когда предпросмотр совпадает с вашим дизайном, скопируйте сгенерированный CSS и вставьте в таблицу стилей.' },
];

const faq = [
  { question: 'Можно ли использовать несколько теней на одном элементе?', answer: 'Да. CSS позволяет значения box-shadow через запятую. Этот инструмент позволяет накладывать до 5 слоёв с независимыми настройками.' },
  { question: 'Что делает отрицательное значение spread?', answer: 'Отрицательный spread сжимает тень внутрь перед размытием. Полезно для тонких эффектов парения.' },
  { question: 'Для чего нужна опция inset?', answer: 'Тени inset отображаются внутри границы элемента, создавая вдавленный вид. Идеально для полей форм и нажатых карточек.' },
  { question: 'Есть ли у сгенерированного CSS зависимости от фреймворков?', answer: 'Нет. Результат  -  чистый нативный CSS. Используйте в любом проекте со стандартным CSS.' },
];

const ui: CssBoxShadowGeneratorUI = {
  offsetXLabel: 'Смещ. X',
  offsetYLabel: 'Смещ. Y',
  blurLabel: 'Размытие',
  spreadLabel: 'Размах',
  opacityLabel: 'Прозрач.',
  insetLabel: 'Внутр.',
  addLayer: 'Добавить слой',
  removeLayer: 'Удалить слой',
  resetAll: 'Сбросить',
  codeTitle: 'Сгенерированный CSS',
  copyCode: 'Копировать CSS',
  copied: 'Скопировано!',
  previewLabel: 'Предпросмотр',
  presetCard: 'Card',
  presetFloat: 'Float',
  presetInset: 'Inset',
  presetGlow: 'Glow',
  presetLayered: 'Слои',
  presetsLabel: 'Пресеты',
  layerPrefix: 'Слой',
  bgColorLabel: 'Фон',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<CssBoxShadowGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'FAQ Генератора Теней CSS',
  faq,
  bibliographyTitle: 'Ссылки по Box Shadow CSS',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Проектируйте тени CSS визуально, а не угадывайте значения', level: 2 },
    { type: 'paragraph', html: 'Ручная настройка <strong>box-shadow</strong> утомительна. Этот визуальный генератор позволяет накладывать несколько теней, смотреть их вживую и копировать готовый CSS.' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: 'Слоёв тени на элемент', icon: 'mdi:layers' }, { value: 'Live', label: 'Предпросмотр при каждом изменении', icon: 'mdi:eye' }, { value: '5', label: 'Быстрых пресетов', icon: 'mdi:star' }] },
    { type: 'title', text: 'Накладывайте несколько теней для реалистичной глубины', level: 3 },
    { type: 'paragraph', html: 'Реальные тени редко бывают равномерным размытием. Наложение плотной тени близко к элементу с более мягкой и широкой создаёт естественную глубину. Используйте <strong>+</strong> для добавления слоёв.' },
    { type: 'table', headers: ['Элемент', 'Значение CSS', 'Эффект'], rows: [['Смещ. X', '1-я длина', 'Горизонтальное смещение.'], ['Смещ. Y', '2-я длина', 'Вертикальное смещение.'], ['Размытие', '3-я длина', 'Радиус размытия.'], ['Размах', '4-я длина', 'Увеличивает или уменьшает тень.'], ['Цвет и прозрач.', 'rgba()', 'Цвет тени с независимой прозрачностью.'], ['Внутр.', 'inset', 'Тень внутри границы элемента.']] },
    { type: 'summary', title: 'Рекомендуемый рабочий процесс', items: ['Начните с пресета.', 'Добавьте слои для реалистичной глубины.', 'Используйте отрицательный spread для эффекта парящей карточки.', 'Скопируйте сгенерированный CSS и вставьте.'] },
  ],
};
