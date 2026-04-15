import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgToCssUI } from '../ui';

const slug = 'konverter-svg-v-css';
const title = 'Бесплатный онлайн конвертер SVG в CSS и Data URI';
const description =
  'Преобразуйте ваши SVG-иконки и векторы в CSS-код (Background или Mask) или сжатые Data URI. Оптимизируйте производительность вашего сайта, исключив внешние HTTP-запросы.';

const faqData = [
  {
    question: 'Что лучше использовать: Data URI или внешний файл .svg?',
    answer:
      'Это зависит от случая. Data URI исключают HTTP-запросы (идеально для небольших иконок), но увеличивают размер CSS-файла. Для больших или детальных иллюстраций предпочтительнее внешний файл.',
  },
  {
    question: 'Как изменить цвет SVG, встроенного в CSS?',
    answer:
      "Лучший способ — через 'mask-image'. Определив SVG как маску, вы можете использовать 'background-color' для динамического изменения его цвета, даже в состояниях :hover.",
  },
  {
    question: ' какие браузеры поддерживают CSS Masks?',
    answer:
      'Все современные браузеры (Chrome, Firefox, Safari, Edge) имеют полную поддержку. Для старых браузеров часто используются префиксы -webkit-.',
  },
  {
    question: 'Влияет ли использование Data URI на SEO?',
    answer:
      'Да, положительно. Уменьшая количество запросов, необходимых для рендеринга страницы, это улучшает время загрузки (LCP) и показатели Core Web Vitals.',
  },
  {
    question: 'Могу ли я использовать его в таких фреймворках, как React или Tailwind?',
    answer:
      'Конечно! Вы можете скопировать сгенерированный код и использовать его в своих .css-файлах или даже как произвольные значения в Tailwind CSS.',
  },
];

const howToData = [
  {
    name: 'Вставьте SVG',
    text: 'Скопируйте исходный код вашего SVG-файла и вставьте его в текстовое поле слева.',
  },
  {
    name: 'Выберите тип вывода',
    text: 'Выберите между фоновым изображением (Background Image для статических фонов), маской CSS (CSS Mask для иконок с динамическим цветом) или только Data URI (для прямого использования).',
  },
  {
    name: 'Скопируйте результат',
    text: 'Нажмите «Копировать», чтобы перенести сгенерированный CSS-код в буфер обмена.',
  },
  {
    name: 'Примените в своем проекте',
    text: 'Вставьте код в свою таблицу стилей или CSS-компонент. Для масок также добавьте background-color, чтобы определить цвет иконки.',
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

const ui: SvgToCssUI = {
  labelPasteTitle: 'Вставьте SVG',
  labelInputArea: 'Исходный код SVG',
  labelPreviewOriginal: 'Оригинальный просмотр',
  labelResultTitle: 'Результат CSS',
  labelPreviewApplied: 'Примененный результат',
  tabBackground: 'Фоновое изображение',
  tabMask: 'CSS-маска / Webkit',
  tabUri: 'Только Data URI',
  btnCopy: 'Копировать',
  btnCopied: 'Скопировано!',
  placeholder: '<svg xmlns="http://www.w3.org/2000/svg" ...',
};

export const content: ToolLocaleContent<SvgToCssUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliographyTitle: 'Ссылки и документация',
  bibliography: [
    {
      name: 'CSS-Tricks: Использование SVG в качестве фона',
      url: 'https://css-tricks.com/using-svg/',
    },
    {
      name: 'MDN Web Docs: mask-image',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image',
    },
    {
      name: 'MDN Web Docs: background-image',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-image',
    },
    {
      name: 'W3C: CSS Masking Module Level 1',
      url: 'https://www.w3.org/TR/css-masking-1/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Зачем конвертировать SVG в CSS Data URI?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'В современной веб-разработке оптимизация производительности и загрузки ресурсов имеет важное значение. Встраивание иконок непосредственно в CSS через <strong>Data URI</strong> исключает ненужные HTTP-запросы, сокращая задержки и улучшая время до интерактивности (TTI).',
    },
    {
      type: 'paragraph',
      html: 'Этот инструмент преобразует векторный код <code>&lt;svg&gt;</code> в закодированную текстовую строку, которую браузер может интерпретировать как фоновое изображение или маску обрезки, сохраняя бесконечную масштабируемость и четкость векторов.',
    },
    {
      type: 'title',
      text: 'Основные технические преимущества',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Ноль HTTP-запросов:</strong> Встраивая графику в ваши <code>.css</code>-файлы, браузеру не нужно загружать дополнительные внешние файлы.',
        '<strong>Настройка через CSS-маску:</strong> Используя технологию <code>mask-image</code>, вы можете изменить цвет сложной векторной иконки, просто используя <code>background-color</code>.',
        '<strong>Мгновенный рендеринг:</strong> Вы избегаете мерцания контента (FOUC), так как критические визуальные ресурсы доступны сразу после загрузки таблицы стилей.',
      ],
    },
    {
      type: 'title',
      text: 'CSS-маски против фонов',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Многие разработчики просто используют <code>background-image</code> для встраивания векторов, но это имеет ограничение: вы не можете динамически изменять цвет SVG из CSS.',
    },
    {
      type: 'paragraph',
      html: 'Наша утилита поддерживает генерацию кода для <strong>CSS-масок</strong>. Применяя <code>mask-image</code> со сгенерированным Data URI, иконка действует как трафарет, позволяя <code>background-color</code> элемента определять конечный цвет иконки. Это самый профессиональный и гибкий способ управления иконками в Astro, Next.js или любом современном фреймворке.',
    },
  ],
};
