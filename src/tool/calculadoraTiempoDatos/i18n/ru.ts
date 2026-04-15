import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CalculadoraTiempoDatosUI } from '../ui';

const slug = 'data-time-calculator-web-speed-impact-ru';
const title = 'Калькулятор времени данных: Влияние скорости интернета';
const description = 'Узнайте, сколько времени жизни теряют ваши пользователи, ожидая загрузки вашего сайта на 3G, 4G и 5G соединениях. Рассчитайте реальное влияние веса вашего сайта.';

const faqData = [
  {
    question: 'Почему важно знать время загрузки моего сайта?',
    answer: 'Потому что оно напрямую влияет на пользовательский опыт, SEO и конверсию. Google задокументировал, что каждая секунда задержки снижает конверсию на 7%. Кроме того, 53% мобильных посетителей покидают страницу, загрузка которой занимает более 3 секунд.',
  },
  {
    question: 'Что означают эти небольшие проценты потери времени жизни?',
    answer: 'Они представляют собой процент от общей продолжительности жизни человека (примерно 80 лет или 2,5 миллиарда секунд), затрачиваемый на ожидание загрузки вашей страницы. Хотя по отдельности они невелики, в масштабах миллионов пользователей они превращаются в огромные объемы потраченного впустую человеческого времени.',
  },
  {
    question: 'Какова средняя скорость соединения в мире?',
    answer: '4G является стандартом в развитых странах. Однако миллионы пользователей в развивающихся странах по-прежнему полагаются на 3G. Вот почему крайне важно оптимизировать ваш сайт для всех скоростей соединения.',
  },
  {
    question: 'Каким должен быть вес моего сайта?',
    answer: 'Google рекомендует, чтобы главная страница загружалась менее чем за 3 секунды при обычном 4G-соединении. Для этого сайт в идеале должен весить от 1 до 2 МБ. Однако средний мировой показатель близок к 2-3 МБ.',
  },
  {
    question: 'Как я могу уменьшить вес моего сайта?',
    answer: 'Основные стратегии: оптимизация изображений (50-80% веса), минификация CSS и JavaScript, использование ленивой загрузки (lazy loading), внедрение кэширования в браузере и использование CDN. Оптимизация изображений обычно является наиболее эффективным фактором.',
  },
  {
    question: 'Влияет ли скорость загрузки на рейтинг в Google?',
    answer: 'Да, безусловно. Google рассматривает Core Web Vitals как важные факторы ранжирования. Медленный сайт будет ранжироваться хуже, чем быстрый, даже при схожем контенте.',
  },
];

const howToData = [
  { name: 'Введите вес вашего сайта', text: 'Используйте инструменты разработчика браузера или WebPageTest, чтобы узнать вес вашей страницы. Введите это значение в МБ.' },
  { name: 'Наблюдайте за временем загрузки', text: 'Калькулятор показывает, сколько секунд требуется вашему сайту для загрузки на 3G, 4G и 5G. Реальное время обычно выше.' },
  { name: 'Поймите влияние на продолжительность жизни', text: 'Процент «времени жизни» показывает, сколько времени чьей-то жизни тратится на ожидание. Используйте это как мотивацию для оптимизации.' },
  { name: 'Оптимизируйте и пересчитайте', text: 'После оптимизации измерьте показатели снова и сделайте перерасчет. Посмотрите, как небольшие улучшения приносят значительный результат.' },
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

const ui: CalculadoraTiempoDatosUI = {
  headerTitle: 'Время, потерянное в сетях',
  labelWebSize: 'Вес сайта (МБ)',
  unit: 'МБ',
  presetsLabel: 'РЕАЛИСТИЧНЫЕ ПРИМЕРЫ',
  labelSpeed: 'Скорость соединения',
  speedLabel3g: '3G',
  speedValue3g: '0,4 Мбит/с',
  speedLabel4g: '4G/LTE',
  speedValue4g: '10 Мбит/с',
  speedLabel5g: '5G',
  speedValue5g: '100+ Мбит/с',
  labelTimes: 'Сколько раз в день?',
  resultTitle: 'Результаты',
  resultSingleLoad: 'Одна загрузка',
  resultDailyTotal: 'Итого за день',
  resultTimePerYear: 'ожидания в год',
  resultLifeYears: 'за всю жизнь',
  resultMessage: 'Вы потеряли примерно 1 год жизни',
  copyMessage: 'Скопировано',
  preset3g: '3G',
  preset4g: '4G',
  preset5g: '5G',
};

export const content: ToolLocaleContent<CalculadoraTiempoDatosUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliographyTitle: 'Технические ресурсы по оптимизации веб-сайтов',
  bibliography: [
    { name: 'Google PageSpeed Insights', url: 'https://pagespeed.web.dev/' },
    { name: 'WebPageTest - анализ скорости сайта', url: 'https://www.webpagetest.org/' },
    { name: 'Web.dev - Core Web Vitals', url: 'https://web.dev/vitals/' },
    { name: 'MDN - веб-производительность', url: 'https://developer.mozilla.org/ru/docs/Web/Performance' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Почему скорость загрузки сайта критически важна', level: 2 },
    {
      type: 'paragraph',
      html: 'В сегодняшнюю цифровую эпоху скорость загрузки сайта — это не роскошь, а необходимость. Каждая миллисекунда имеет значение для удержания пользователей, улучшения рейтинга в поиске и максимизации конверсии. Современные пользователи ожидают, что страницы загрузятся менее чем за 3 секунды.',
    },
    { type: 'title', text: 'Влияние на пользовательский опыт', level: 3 },
    {
      type: 'paragraph',
      html: '53% мобильных посетителей покидают страницу, если ее загрузка занимает более 3 секунд. Коэффициент конверсии падает на 7% при каждой дополнительной секунде задержки.',
    },
    { type: 'title', text: 'Понимание скорости соединения', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>3G:</strong> 0,4 Мбит/с — часто встречается в сельской местности и развивающихся странах',
        '<strong>4G/LTE:</strong> 10 Мбит/с — стандарт в развитых странах',
        '<strong>5G:</strong> 100+ Мбит/с — постепенно расширяется, но все еще ограничен',
      ],
    },
    { type: 'title', text: 'Стратегии по уменьшению веса сайта', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Оптимизация изображений:</strong> составляет 50-80% веса. Уменьшите его на 40-60% с помощью таких инструментов, как TinyPNG.',
        '<strong>Минификация:</strong> удалите ненужный код из CSS и JavaScript. Экономия 30-50%.',
        '<strong>Ленивая загрузка:</strong> загружайте изображения только тогда, когда пользователи докручивают до них.',
        '<strong>Кэш браузера:</strong> кэшируйте статические файлы в браузерах пользователей.',
        '<strong>CDN:</strong> отдавайте контент с географически близких серверов.',
      ],
    },
    { type: 'title', text: 'Заключение: важна каждая секунда', level: 2 },
    {
      type: 'paragraph',
      html: 'Ваш веб-сайт часто является первым впечатлением пользователей о вашем бренде. Медленный сайт разочаровывает пользователей и ведет к потере прибыли. Быстрый и отзывчивый сайт создает положительный опыт и улучшает все ваши показатели.',
    },
  ],
};

