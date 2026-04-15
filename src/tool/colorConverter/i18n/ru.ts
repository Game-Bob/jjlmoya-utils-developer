import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ColorConverterUI } from '../ui';

const slug = 'cvhetovoj-konverter-rgb-hex-hsl';
const title = 'Онлайн конвертер цветов RGB, HEX и HSL';
const description = 'Мгновенно конвертируйте цвета между RGB, HEX и HSL. Генерируйте комплементарные цветовые гармонии и анализируйте контрастность по WCAG. 100% на стороне клиента и приватно.';

const faqData = [
  {
    question: 'Как работает конвертер цветов RGB в HEX и HSL?',
    answer: 'Инструмент принимает значения красного, зеленого и синего (RGB) и использует математические алгоритмы для их преобразования в шестнадцатеричный эквивалент (HEX) или значения тона, насыщенности и светлоты (HSL). Он также работает в обратном порядке.',
  },
  {
    question: 'Почему в своих проектах мне стоит использовать HSL вместо HEX?',
    answer: 'Формат HSL гораздо более интуитивно понятен. Он позволяет настраивать насыщенность или светлоту без изменения самого цветового тона, что значительно упрощает создание гармоничных палитр или состояний кнопок (при наведении, отключено).',
  },
  {
    question: 'Что такое значение относительной контрастности?',
    answer: 'Это показатель, который указывает на читаемость текста на фоне на основе его яркости. Высокая контрастность гарантирует, что люди с нарушениями зрения смогут прочитать контент в соответствии с рекомендациями по доступности WCAG.',
  },
  {
    question: 'Безопасно ли использовать этот онлайн-конвертер цветов?',
    answer: 'Безусловно. Поскольку он на 100% работает на стороне клиента, ваши данные о цвете никогда не покидают ваш компьютер. Вся обработка происходит прямо в вашем браузере, что гарантирует конфиденциальность и мгновенную работу.',
  },
];

const howToData = [
  { name: 'Выберите цвет', text: 'Используйте ползунки красного, зеленого и синего или введите HEX-код прямо в текстовое поле.' },
  { name: 'Настройте каналы RGB', text: 'Передвигайте ползунки, чтобы изменить интенсивность каждого канала и увидеть обновление в режиме реального времени.' },
  { name: 'Скопируйте формат', text: 'Нажмите кнопку «Копировать» рядом с нужным форматом HEX, RGB или HSL.' },
  { name: 'Исследуйте гармонии', text: 'Нажмите на гармоничные цвета (комплементарные, аналогичные, триадические), чтобы скопировать их в буфер обмена.' },
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

const ui: ColorConverterUI = {
  labelPreview: 'Предпросмотр (нажмите, чтобы скопировать HEX)',
  labelHarmonies: 'Цветовые гармонии',
  labelR: 'Красный',
  labelG: 'Зеленый',
  labelB: 'Синий',
  labelComp: 'Компл.',
  labelAna1: 'Аналог. 1',
  labelAna2: 'Аналог. 2',
  labelTri1: 'Триада 1',
  labelTri2: 'Триада 2',
  btnCopy: 'Копировать',
  btnCopied: 'Скопировано',
  contrastLabel: 'Контрастность',
  clickToCopy: 'Нажмите, чтобы скопировать',
};

export const content: ToolLocaleContent<ColorConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliographyTitle: 'Ресурсы по цвету и веб-дизайну',
  bibliography: [
    { name: 'W3C: Документация по цветам в CSS', url: 'https://www.w3.org/TR/css-color-4/' },
    { name: 'MDN: Руководство по цветовой модели HSL', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl' },
    { name: 'WebAIM: Руководство по контрастности и доступности', url: 'https://webaim.org/resources/contrastchecker/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Конвертер цветов RGB в HEX и HSL для разработчиков', level: 2 },
    {
      type: 'paragraph',
      html: 'В мире <strong>frontend-разработки</strong> и <strong>UI/UX дизайна</strong> управление цветом — это постоянная задача. Наш <strong>онлайн-конвертер цветов</strong> позволяет мгновенно и с математической точностью преобразовывать значения между <strong>HEX, RGB и HSL</strong>.',
    },
    { type: 'title', text: 'Форматы цветов: HEX, RGB и HSL', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>HEX (шестнадцатеричный):</strong> стандарт де-факто для CSS. Компактный и удобный для обмена в коде.',
        '<strong>RGB (Красный, Зеленый, Синий):</strong> на основе аддитивной системы света. Идеально подходит для прямого манипулирования каналами или применения прозрачности с помощью RGBA.',
        '<strong>HSL (Цветовой тон, Насыщенность, Светлота):</strong> самый интуитивно понятный формат. Настраивайте тон, насыщенность и светлоту для создания гармоничных палитр.',
      ],
    },
    { type: 'title', text: 'Контрастность и доступность по WCAG', level: 3 },
    {
      type: 'paragraph',
      html: 'Калькулятор включает измерение <strong>относительной контрастности</strong> на основе яркости. Это помогает вам соблюдать рекомендации <strong>WCAG</strong>, гарантируя читаемость вашего текста на выбранном фоне.',
    },
    { type: 'title', text: 'Автоматические цветовые гармонии', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Комплементарные:</strong> противоположный цвет на цветовом круге, идеально подходит для максимального контраста.',
        '<strong>Аналогичные:</strong> соседние цвета, которые создают плавные, гармоничные переходы.',
        '<strong>Триадические:</strong> три равноудаленных цвета для ярких, сбалансированных композиций.',
      ],
    },
  ],
};
