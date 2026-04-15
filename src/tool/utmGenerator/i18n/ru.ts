import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UtmGeneratorUI } from '../ui';

const slug = 'utm-generator-ru';
const title = 'Генератор параметров UTM для Google Analytics';
const description = 'Создавайте точные ссылки для отслеживания ваших цифровых маркетинговых кампаний. Оптимизировано для Google Analytics и других инструментов аналитики.';

const faqData = [
  {
    question: 'Вредно ли использование параметров UTM для SEO?',
    answer: 'Нет, если вы используете канонические теги. Поисковые системы понимают, что параметры UTM предназначены для аналитики и не создают дублированного контента.',
  },
  {
    question: 'Должен ли я использовать параметры UTM для внутренних ссылок?',
    answer: 'Нет, никогда. Теги UTM на внутренних ссылках прерывают сеанс пользователя в таких инструментах, как Google Analytics, искажая данные о трафике.',
  },
  {
    question: 'Различает ли Google Analytics регистр в UTM?',
    answer: 'Да. «google», «Google» и «GOOGLE» будут рассматриваться как разные источники. Всегда соблюдайте единообразие, предпочтительно используя только строчные буквы.',
  },
];

const howToData = [
  { name: 'Введите URL', text: 'Введите полный URL вашего веб-сайта, включая https://' },
  { name: 'Определите источник', text: 'Укажите, откуда поступает трафик (google, facebook, newsletter и т. д.)' },
  { name: 'Выберите канал', text: 'Выберите тип канала (cpc, email, social, organic и т. д.)' },
  { name: 'Назовите свою кампанию', text: 'Назначьте узнаваемое имя для группировки ваших маркетинговых усилий' },
  { name: 'Скопируйте и используйте', text: 'Скопируйте сгенерированный URL-адрес и используйте его в своих сообщениях, объявлениях или подписях электронных писем' },
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

const ui: UtmGeneratorUI = {
  labelUrl: 'URL веб-сайта (например, https://example.com) *',
  labelSource: 'Источник кампании (например, google, newsletter) *',
  labelMedium: 'Канал кампании (например, cpc, email)',
  labelCampaign: 'Название кампании (например, summer_offer)',
  labelTerm: 'Ключевое слово кампании (например, buy_shoes)',
  labelContent: 'Контент кампании (например, banner_top)',
  labelGenerated: 'Сгенерированный URL:',
  btnCopy: 'Копировать ссылку',
  btnCopied: 'Скопировано!',
  errorInvalid: 'Введите корректный URL',
  errorInvalidUrl: 'Некорректный URL',
};

export const content: ToolLocaleContent<UtmGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliographyTitle: 'Ссылки',
  bibliography: [
    { name: 'Сбор данных кампании с помощью пользовательских URL — Справка Google Analytics (2024)', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: 'Лучшие практики для разметки URL кампаний — Блог VWO (2023)', url: 'https://vwo.com/blog/utm-tagging-best-practices/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Генератор UTM: параметры отслеживания для Google Analytics', level: 2 },
    {
      type: 'paragraph',
      html: 'Параметры <strong>UTM</strong> (Urchin Tracking Module) — это текстовые метки, добавляемые в конец URL-адреса для отслеживания веб-трафика. Наш генератор упрощает создание ссылок с отслеживанием для ваших цифровых маркетинговых кампаний.',
    },
    { type: 'title', text: '5 столпов отслеживаемой ссылки', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Источник кампании:</strong> определяет поисковую систему, социальную сеть или источник трафика. Пример: google, newsletter, facebook.',
        '<strong>Канал кампании:</strong> относится к маркетинговому каналу. Пример: cpc, email, social, banner, organic.',
        '<strong>Название кампании:</strong> конкретное название вашей кампании. Пример: summer_offer_2025, app_launch_v2.',
        '<strong>Ключевое слово кампании:</strong> для платного поиска — ключевые слова, по которым вы делаете ставки. Пример: buy_sports_shoes.',
        '<strong>Контент кампании:</strong> для A/B-тестирования. Позволяет различать похожие элементы в рамках одной кампании. Пример: header_v1, sidebar_v2.',
      ],
    },
    { type: 'title', text: 'Лучшие практики разметки UTM', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Единообразие регистра:</strong> инструменты различают «Google», «GOOGLE» и «google». Всегда используйте строчные буквы, чтобы избежать дубликатов.',
        '<strong>Избегайте пробелов:</strong> пробелы превращаются в %20. Вместо них используйте дефисы (-) или подчеркивания (_).',
        '<strong>Не используйте на внутренних ссылках:</strong> отслеживание UTM предназначено исключительно для внешнего трафика. На внутренних ссылках оно прерывает сеанс и портит ключевые показатели.',
        '<strong>Документируйте свои теги:</strong> ведите учет всех используемых вами комбинаций, чтобы предотвратить несоответствия.',
      ],
    },
  ],
};

