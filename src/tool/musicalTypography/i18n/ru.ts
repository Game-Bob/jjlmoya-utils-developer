import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicalTypographyUI } from '../ui';

const slug = 'muzykalnaya-tipograficheskaya-shkala';
const title = 'Музыкальная Типографическая Шкала. Калькулятор Модульной Шкалы';
const description = 'Бесплатный онлайн-инструмент для создания гармоничных визуальных иерархий с использованием модульных шкал на основе музыкальных пропорций. Генерирует готовые CSS-переменные для вашего веб-дизайна.';

const faqData = [
  { question: 'Что такое типографическая модульная шкала?', answer: 'Это метод определения размеров шрифтов на основе постоянного математического соотношения. Подобно музыке, где ноты имеют гармонические отношения, модульная шкала создаёт сбалансированную и предсказуемую визуальную иерархию.' },
  { question: 'Почему использовать музыкальные интервалы для дизайна?', answer: 'Музыкальные интервалы — это пропорции, которые человеческий мозг воспринимает как гармоничные. Применение их к размерам текста создаёт визуальную структуру, которая ощущается правильной и профессиональной, а не случайно выбранной.' },
  { question: 'Что такое Золотое Сечение в типографии?', answer: 'Это пропорция 1.618, известная как Золотое Сечение. Она создаёт очень драматичные и элегантные шкалы, где каждый шаг иерархии растёт экспоненциально. Идеально для портфолио или сайтов, ориентированных на искусство.' },
  { question: 'Как я могу применить шкалу в своём файле CSS?', answer: 'Инструмент генерирует CSS-переменные (токены) в формате :root { --step-N: Xrem; }. Скопируйте их в свой основной CSS-файл и используйте с var(--step-N), чтобы сохранить типографическую согласованность на всём сайте.' },
];

const howToData = [
  { name: 'Установите базовый размер', text: 'Введите размер шрифта для текста вашего основного текста (обычно 16px), который будет служить основной нотой вашей шкалы.' },
  { name: 'Выберите интервал', text: 'Выберите музыкальную пропорцию, чтобы определить, сколько пространства находится между разными уровнями заголовков.' },
  { name: 'Предпросмотр иерархии', text: 'Смотрите в реальном времени, как ведут себя типографические уровни, чтобы проверить, соответствует ли визуальная гармония вашему проекту.' },
  { name: 'Экспортируйте код', text: 'Нажмите Копировать CSS-переменные, чтобы получить блок, готовый для прямой вставки в ваш рабочий процесс.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowToThing> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DesignApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'ru' };

const ui: MusicalTypographyUI = {
  labelConfig: 'Конфигурация', labelBaseSize: 'Базовый Размер (px)', hintBaseSize: 'Размер вашего текста в параграфе (обычно 16px).', labelRatio: 'Музыкальная Шкала (Соотношение)', hintRatio: 'Определяет, насколько размер растёт на каждом шаге.', labelCalculated: 'Вычисленные Значения', labelPreview: 'Предпросмотр', btnCopyCss: 'Копировать CSS-Переменные', feedbackCopied: 'Переменные скопированы в буфер обмена!', previewText: 'Музыкальная Типография', previewSubtext: 'Идеальная гармоничная шкала для вашего дизайна.', ratioSecundaMenor: 'Малая Секунда', ratioSegundaMayor: 'Большая Секунда', ratioTerceraMenor: 'Малая Терция', ratioTerceraMayor: 'Большая Терция', ratioCuartaPerfecta: 'Чистая Кварта', ratioCuartaAumentada: 'Увеличенная Кварта', ratioQuintaPerfecta: 'Чистая Квинта', ratioProporcionAurea: 'Золотое Сечение', ratioSextaMayor: 'Большая Секста', ratioSeptimaMenor: 'Малая Септима', ratioSeptimaMayor: 'Большая Септима', ratioOctava: 'Октава',
};

export const content: ToolLocaleContent<MusicalTypographyUI> = {
  slug, title, description, ui, faqTitle: 'Часто Задаваемые Вопросы', faq: faqData, bibliographyTitle: 'Ссылки', bibliography: [
    { name: 'Bringhurst, R. The Elements of Typographic Style', url: 'https://en.wikipedia.org/wiki/The_Elements_of_Typographic_Style' },
    { name: 'Brown, T. More Meaningful Typography. A List Apart', url: 'https://alistapart.com/article/more-meaningful-typography/' },
    { name: 'Physics of Music. Musical Intervals and Scales', url: 'https://es.scribd.com/document/199729396/Physics-of-Music-Notes' },
  ], howTo: howToData, schemas: [faqSchema, howToSchema, appSchema], seo: [
    { type: 'title', text: 'Невидимая гармония веб-дизайна', level: 2 },
    { type: 'paragraph', html: '<strong>Музыкальная Типографическая Шкала</strong> применяет математику музыкальных интервалов к типографическому дизайну. Подобно тому, как музыкальная композиция управляется точными пропорциями, хороший дизайн выигрывает от математической структуры, которая связывает все размеры вместе.' },
    { type: 'title', text: 'Как работает модульная шкала', level: 3 },
    { type: 'grid', columns: 2 },
    { type: 'card', title: 'Формула', html: '<p>Прогрессия простая: <code>Size = Base × Ratio<sup>n</sup></code>. Шаг 0 — это ваш базовый текст. Шаг 1 — маленький подзаголовок. Шаг 4 или 5 может быть вашим главным H1. Одна и та же постоянная умножения (соотношение) гарантирует, что все отношения согласованы.</p>' },
    { type: 'card', title: 'Почему "Музыкальная"', html: '<p>Пифагорейцы открыли, что деление струны на простые пропорции (1:2, 2:3, 3:4) производит созвучные звуки. Эти интервалы, октава, чистая квинта и чистая кварта, — это ровно типографические соотношения. Вы сочиняете визуальную музыку.</p>' },
    { type: 'title', text: 'Выбор правильного соотношения', level: 3 },
    { type: 'tip', html: 'Для плотных интерфейсов (приборные панели, таблицы) используйте малые соотношения, такие как <code>1.125</code> или <code>1.2</code>. Для редакционных или портфельных сайтов используйте более выразительные соотношения, такие как <code>1.5</code> или <code>1.618</code>.' },
    { type: 'paragraph', html: 'Не ограничивайте шкалу только <code>font-size</code>. Те же CSS-переменные работают для <code>margin</code>, <code>padding</code> и <code>gap</code>. Когда белое пространство следует той же математической прогрессии, что и текст, дизайн достигает уровня связности, который все ощущают, но мало кто может объяснить.' },
  ],
};
