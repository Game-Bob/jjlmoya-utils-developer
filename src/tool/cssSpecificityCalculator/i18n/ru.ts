import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssSpecificityCalculatorUI } from '../ui';

const slug = 'kalkulator-specifichnosti-css';
const title = 'Калькулятор Специфичности CSS Онлайн. Визуализатор Веса Селектора';
const description =
  'Вычислите специфичность и точный вес любого CSS селектора. Визуальный инструмент для понимания того, какое правило CSS выигрывает каскад, и избегайте использования !important.';

const faqData = [
  {
    question: 'Что такое специфичность CSS?',
    answer:
      'Специфичность — это алгоритм, который браузеры используют для определения того, какое правило CSS применяется к элементу, когда несколько правил конкурируют. Она представлена трёхколонным счётом (A, B, C), указывающим идентификаторы, классы/атрибуты/псевдо-классы и элементы/псевдо-элементы соответственно.',
  },
  {
    question: 'Может ли класс когда-либо победить ID в специфичности?',
    answer:
      'Нет, прямо не может. ID (1,0,0) всегда побеждает любое количество классов (0,N,0), потому что специфичность не имеет переноса между колонками. Сто классов (0,100,0) никогда не победят один ID (1,0,0).',
  },
  {
    question: 'Что происходит, когда два селектора имеют одинаковую специфичность?',
    answer:
      'Когда два селектора имеют одинаковый вес, побеждает тот, который объявлен последним в CSS файле. Это называется естественным порядком каскада. Этот калькулятор визуально предупреждает вас, когда происходит ничья.',
  },
  {
    question: 'Почему использование !important считается плохой практикой?',
    answer:
      'Директива !important нарушает естественный CSS каскад, форсируя объявление над любым другим правилом. Это создаёт конфликты, которые трудно отследить в больших проектах. Методология BEM рекомендует сохранять специфичность плоской, чтобы никогда не требовалось !important.',
  },
];

const howToData = [
  {
    name: 'Введите первый селектор',
    text: 'Введите селектор A в левое текстовое поле, например: #header .nav-item > a. Счётчики ID, классов и элементов обновятся мгновенно.',
  },
  {
    name: 'Введите второй селектор',
    text: 'Введите селектор B в правое текстовое поле, например: ul li.active a:hover. Смотрите, как меняются веса в реальном времени.',
  },
  {
    name: 'Прочитайте результат',
    text: 'Калькулятор выделит блок выигрывающего селектора зелёным баннером. Если оба связаны, появится сообщение о связи, объясняющее порядок каскада как тайбрейкер.',
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

const ui: CssSpecificityCalculatorUI = {
  labelA: 'Селектор A',
  labelB: 'Селектор B',
  placeholderA: 'напр. #header .nav-item > a',
  placeholderB: 'напр. ul li.active a:hover',
  cardIds: 'ID',
  cardClasses: 'Классы / Псевдо-классы',
  cardElements: 'Элементы',
  bannerWinner: 'Этот селектор выигрывает!',
  msgTie: 'Оба селектора имеют одинаковый вес. Если они конкурируют за один элемент, побеждает селектор, написанный <strong>последним</strong> в CSS.',
};

export const content: ToolLocaleContent<CssSpecificityCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Часто Задаваемые Вопросы',
  faq: faqData,
  bibliographyTitle: 'Ссылки и Документация',
  bibliography: [
    {
      name: 'MDN Web Docs: CSS Specificity',
      url: 'https://developer.mozilla.org/en/docs/Web/CSS/Specificity',
    },
    {
      name: 'W3C: Selectors Level 3 - Specificity',
      url: 'https://www.w3.org/TR/selectors-3/#specificity',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Что такое специфичность CSS?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Специфичность CSS — это алгоритм, по которому браузеры определяют, какие значения свойств применять к конкретному элементу. По сути это математический счёт, который говорит браузеру «насколько специфичным» является правило.',
    },
    {
      type: 'paragraph',
      html: 'Если два правила имеют разные уровни специфичности, правило с большим весом побеждает, независимо от порядка их написания. Если оба имеют одинаковый вес, побеждает последнее объявленное в исходном коде.',
    },
    {
      type: 'title',
      text: 'Как вычислить специфичность CSS',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Специфичность вычисляется на основе трёх категорий, образующих трёхколонный вес, часто выражаемый как <strong>(A, B, C)</strong>:',
    },
    {
      type: 'list',
      items: [
        '<strong>Колонка A (ID):</strong> Подсчитывает количество уникальных идентификаторов. Пример: <code>#header</code> считается как 1 в колонке A.',
        '<strong>Колонка B (Классы, атрибуты и псевдо-классы):</strong> Подсчитывает все классы (<code>.button</code>), атрибуты (<code>[type="text"]</code>) и псевдо-классы (<code>:hover</code>).',
        '<strong>Колонка C (Элементы и псевдо-элементы):</strong> Подсчитывает все HTML элементы (<code>div</code>, <code>h1</code>) и псевдо-элементы (<code>::before</code>).',
      ],
    },
    {
      type: 'title',
      text: 'Золотое правило: Нет переноса между колонками',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Правило со специфичностью (0,50,0) <strong>никогда</strong> не будет более специфичным, чем правило (1,0,0). <strong>Один ID побеждает бесчисленное количество классов.</strong> Колонки никогда не переполняются друг в друга.',
    },
    {
      type: 'title',
      text: 'Проблема с !important и архитектурой BEM',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Директива <code>!important</code> является исключением из правил специфичности. При использовании это объявление автоматически переопределяет любое другое. Это считается плохой практикой, потому что разрушает естественный каскад.',
    },
    {
      type: 'paragraph',
      html: 'Чтобы избежать войн специфичности в крупных проектах, методология <strong>BEM</strong> рекомендует использовать только селекторы классов с одинаковой глубиной, искусственно сохраняя специфичность плоской на уровне (0,1,0).',
    },
  ],
};
