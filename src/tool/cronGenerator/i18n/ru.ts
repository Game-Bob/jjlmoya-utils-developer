import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CronGeneratorUI } from '../ui';

const slug = 'cron-ru';
const title = 'Онлайн генератор Cron выражений. Переводчик и визуализатор';
const description =
  'Бесплатный визуальный инструмент для генерации выражений Linux Cron. Переводит * * * * * на понятный человеку язык и показывает следующие 5 запусков в реальном времени.';

const faqData = [
  {
    question: 'Что такое Cron-выражение?',
    answer:
      'Это текстовая строка, которая представляет собой график выполнения автоматических задач в Unix-подобных системах (Linux, macOS). Она состоит из 5 полей, определяющих минуты, часы, день месяца, месяц и день недели.',
  },
  {
    question: 'Совместимо ли это со всеми системами?',
    answer:
      'Да, сгенерированные выражения следуют стандарту POSIX, совместимы с Linux Crontab, macOS cron и облачными сервисами, такими как AWS CloudWatch или GitHub Actions.',
  },
  {
    question: 'Что означает звездочка (*) в Cron?',
    answer:
      'Звездочка — это подстановочный знак, означающий «все». Например, * в поле минут означает, что задача будет запускаться каждую минуту определенного диапазона.',
  },
  {
    question: 'Как я могу проверить предстоящие запуски?',
    answer:
      'Инструмент включает в себя визуализатор реального времени, показывающий ровно 5 следующих дат и времени, когда ваша задача будет запущена в соответствии с текущим выражением.',
  },
];

const howToData = [
  {
    name: 'Выберите интервал',
    text: 'Выберите, как часто должна запускаться задача, используя быстрые пресеты (каждую минуту, каждый час, ежедневно и т. д.).',
  },
  {
    name: 'Настройте дополнительные детали',
    text: 'Перейдите на вкладку «Дополнительно», чтобы вручную определить точные минуты, часы или конкретные дни недели.',
  },
  {
    name: 'Проверьте перевод и даты',
    text: 'Прочитайте описание на человеческом языке и проверьте следующие 5 запусков, чтобы подтвердить правильность расписания.',
  },
  {
    name: 'Скопируйте выражение',
    text: 'Скопируйте полученную строку и вставьте ее прямо в файл crontab или в конфигурацию сервера.',
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

const ui: CronGeneratorUI = {
  labelMinute: 'Минута',
  labelHour: 'Час',
  labelDom: 'День (месяц)',
  labelMonth: 'Месяц',
  labelDow: 'День (неделя)',
  tabQuick: 'Быстро',
  tabAdvanced: 'Дополнительно',
  fieldMinute: 'Минута (0-59)',
  fieldHour: 'Час (0-23)',
  fieldDom: 'День месяца (1-31)',
  fieldMonth: 'Месяц (1-12)',
  fieldDow: 'День недели (0-6)',
  hintMinute: 'Напр.: *, */5, 0,30',
  hintDow: '0 = Воскресенье, 6 = Суббота',
  labelNextRuns: 'Следующие запуски',
  btnCopy: 'Копировать выражение',
  btnCopied: 'Скопировано!',
  msgNoRuns: 'В разумном диапазоне не найдено предстоящих запусков.',
  msgError: 'Ошибка при расчете дат.',
  presetEveryMinute: 'Каждую минуту',
  presetEveryHour: 'Каждый час',
  presetDaily: 'Ежедневно',
  presetWeekly: 'Еженедельно',
  presetMonthly: 'Ежемесячно',
  presetYearly: 'Ежегодно',
  descEveryMinute: 'Запускается каждую минуту',
  descEveryHour: 'Запускается в начале каждого часа',
  descEveryDay: 'Запускается каждый день в полночь',
  descPrefix: 'Запускается',
  descEveryMin: 'каждую минуту',
  descEveryHourOnDot: 'каждый час ровно',
  descAtMinute: 'в {m} минут каждого часа',
  descAtTime: 'в {h}:{m}',
  descOnDay: ' в {d}-й день месяца',
  descInMonth: ' в {mon}-м месяце',
  descIfDow: ' если это {d}-й день (0 = Вс, 6 = Сб)',
  descDays: 'Воскресенье,Понедельник,Вторник,Среда,Четверг,Пятница,Суббота',
  descInvalid: 'Недопустимое выражение',
  timeNow: 'сейчас',
  timeMin: 'мин',
  timeHour: 'ч',
  timeDays: 'дн.',
  locale: 'ru-RU',
};

export const content: ToolLocaleContent<CronGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  bibliographyTitle: 'Ссылки и документация',
  bibliography: [
    {
      name: 'Руководство GNU Crontab: выражения Cron в Linux',
      url: 'https://www.gnu.org/software/mcron/manual/html_node/Crontab-file.html',
    },
    {
      name: 'Cron в Википедии: история и синтаксис',
      url: 'https://ru.wikipedia.org/wiki/Cron',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Важность Cron в современной автоматизации',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Несмотря на то, что мы живем в эпоху <em>serverless</em>-серверов и облачных рабочих процессов, система <strong>Crontab</strong> остается основой глобальной технологической инфраструктуры. От небольших блогов до массивных банковских систем — планирование задач поддерживает работу цифрового мира.',
    },
    {
      type: 'title',
      text: 'Анатомия Cron-выражения',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Поле 1 — Минута (0-59):</strong> когда задача запускается внутри часа.',
        '<strong>Поле 2 — Час (0-23):</strong> требуется 24-часовой формат.',
        '<strong>Поле 3 — День месяца (1-31):</strong> конкретный календарный день.',
        '<strong>Поле 4 — Месяц (1-12):</strong> с января по декабрь.',
        '<strong>Поле 5 — День недели (0-6):</strong> 0 обычно означает воскресенье.',
      ],
    },
    {
      type: 'title',
      text: 'Специальные операторы и типичные ошибки',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Используйте косую черту <code>/</code> для определения шагов: <code>*/5</code> в минутах означает запуск каждые 5 минут. Запятая <code>,</code> создает списки (<code>1,3,5</code>), а дефис <code>-</code> определяет диапазоны (<code>1-5</code>).',
    },
    {
      type: 'paragraph',
      html: '90% серверов работают по времени <strong>UTC</strong>. Если вы планируете задачу на 02:00 ночи, ориентируясь на местное время, она может запуститься в неожиданное время. Кроме того, у Cron нет доступа к вашему обычному <code>$PATH</code> — всегда используйте абсолютные пути, такие как <code>/usr/local/bin/node</code>.',
    },
  ],
};

