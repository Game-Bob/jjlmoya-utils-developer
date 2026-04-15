import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LlmCostCalculatorUI } from '../ui';

const slug = 'kalkulyator-stoimosti-llm';
const title = 'Калькулятор Стоимости LLM. Оценитель Цен AI Моделей';
const description =
  'Бесплатный онлайн инструмент для оценки стоимости вызовов API LLM. Сравните GPT-4o, Claude, Gemini, Llama и другие с реальными ценами токенов за миллион.';

const faqData = [
  {
    question: 'Как рассчитывается стоимость API LLM?',
    answer:
      'API LLM взимают отдельную плату за входные токены (ваш промпт) и выходные токены (ответ). Общая стоимость за запрос: (входные токены × цена входа + выходные токены × цена выхода) / 1,000,000. Умножьте на количество запросов, чтобы получить общую ежемесячную стоимость.',
  },
  {
    question: 'Что такое токены и как они соотносятся со словами?',
    answer:
      'Токен - это основная единица текста, которую обрабатывает языковая модель. В среднем 1 токен равен примерно 0,75 слова на английском, поэтому 1000 токенов ≈ 750 слов. Цены указаны за миллион токенов ($/1M), что является стандартной единицей ценообразования у всех провайдеров.',
  },
  {
    question: 'Почему выходные токены дороже входных?',
    answer:
      'Генерирование текста (выход) требует, чтобы модель последовательно вычисляла каждый токен, что вычислительно более интенсивно, чем чтение входа. Большинство провайдеров взимают в 3–5 раз больше за выходные токены, чем за входные.',
  },
  {
    question: 'Как я могу снизить свои расходы на API LLM?',
    answer:
      'Используйте самую маленькую модель, которая соответствует вашим требованиям к качеству. Кэшируйте повторяющиеся промпты, когда возможно. Минимизируйте длину системного промпта и избегайте ненужного контекста. Для простых задач классификации или извлечения меньшие модели, такие как GPT-4o mini или Gemini Flash, предлагают значительную экономию.',
  },
];

const howToData = [
  {
    name: 'Выберите модель',
    text: 'Выберите модель AI, которую вы планируете использовать, из сгруппированного выпадающего меню. Модели организованы по провайдерам.',
  },
  {
    name: 'Введите количество токенов',
    text: 'Введите ожидаемое количество входных токенов (ваш промпт) и выходных токенов (ответ). Оценки слов отображаются под каждым полем.',
  },
  {
    name: 'Установите количество запросов',
    text: 'Используйте ползунок или числовой ввод, чтобы указать, сколько вызовов API вы ожидаете. Общая стоимость обновляется в реальном времени.',
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

const ui: LlmCostCalculatorUI = {
  labelModel: 'Модель LLM',
  labelInputTokens: 'Входные Токены',
  labelOutputTokens: 'Выходные Токены',
  labelRequests: 'Количество Запросов',
  unitWords: 'слова',
  labelCostPerRequest: 'Стоимость за Запрос',
  labelTotal: 'Предполагаемая Общая Стоимость',
  labelInput: 'Вход',
  labelOutput: 'Выход',
};

export const content: ToolLocaleContent<LlmCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Часто Задаваемые Вопросы',
  faq: faqData,
  bibliographyTitle: 'Справочные Материалы и Источники Цен',
  bibliography: [
    {
      name: 'Цены на OpenAI API',
      url: 'https://openai.com/pricing',
    },
    {
      name: 'Цены на Anthropic API',
      url: 'https://www.anthropic.com/pricing',
    },
    {
      name: 'Цены Google AI Studio',
      url: 'https://ai.google.dev/pricing',
    },
    {
      name: 'Токенизатор OpenAI',
      url: 'https://platform.openai.com/tokenizer',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Понимание ценообразования API LLM',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'API больших языковых моделей взимают плату на основе использования токенов, а не времени или количества запросов. Каждый вызов API имеет две стоимости: <strong>входная стоимость</strong> (обработка вашего промпта) и <strong>выходная стоимость</strong> (генерирование ответа). Понимание этого разделения критически важно для точной оценки вашего ежемесячного счета.',
    },
    {
      type: 'title',
      text: 'Входные токены vs выходные токены',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'Входные токены',
      html: '<p>Входные токены представляют все, что отправляется <strong>в</strong> модель: ваш системный промпт, историю беседы и сообщение пользователя. Они дешевле, потому что модель обрабатывает их параллельно. Типичный системный промпт из 200 слов стоит примерно 267 входных токенов.</p>',
    },
    {
      type: 'card',
      title: 'Выходные токены',
      html: '<p>Выходные токены генерируются один за другим последовательно, делая их вычислительно более дорогостоящими. Большинство провайдеров взимают <strong>3–5× больше</strong> за выходные токены. Ответ из 300 слов генерирует примерно 400 выходных токенов. Сохранение ответов краткими - одна из наиболее эффективных стратегий экономии затрат.</p>',
    },
    {
      type: 'title',
      text: 'Выбор подходящей модели для вашего бюджета',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Начните с способной модели среднего уровня, такой как <code>GPT-4o mini</code> или <code>Gemini 1.5 Flash</code>, и обновляйте, только если качество недостаточно. Разница в стоимости между маленькой и большой моделью может быть 10–100×.',
    },
    {
      type: 'paragraph',
      html: 'Не все задачи требуют одинакового качества модели. Задачи классификации, извлечения и суммирования часто работают хорошо с меньшими, более дешёвыми моделями. Оставляйте большие граничные модели, такие как <code>claude-3-opus</code> или <code>o1</code>, для сложных задач рассуждения, где качество напрямую влияет на результаты.',
    },
  ],
};
