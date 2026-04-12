import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CronGeneratorUI } from '../ui';

const slug = 'cron';
const title = 'Online Cron Expression Generator. Translator and Visualizer';
const description =
  'Free visual tool to generate Linux Cron expressions. Translates * * * * * into human language and shows the next 5 executions in real time.';

const faqData = [
  {
    question: 'What is a Cron expression?',
    answer:
      'It is a text string that represents an execution schedule for automatic tasks on Unix-like systems (Linux, macOS). It consists of 5 fields that define minutes, hours, day of month, month, and day of week.',
  },
  {
    question: 'Is it compatible with all systems?',
    answer:
      'Yes, the generated expressions follow the POSIX standard, compatible with Linux Crontab, macOS crons, and cloud services like AWS CloudWatch or GitHub Actions.',
  },
  {
    question: 'What does the asterisk (*) mean in Cron?',
    answer:
      'The asterisk is a wildcard meaning "all". For example, a * in the minutes field means the task will run every minute of the defined range.',
  },
  {
    question: 'How can I check the upcoming executions?',
    answer:
      'The tool includes a real-time viewer showing exactly the next 5 dates and times when your task will run according to the current expression.',
  },
];

const howToData = [
  {
    name: 'Select the interval',
    text: 'Choose how often you want the task to run using the quick presets (every minute, every hour, daily, etc.).',
  },
  {
    name: 'Configure advanced details',
    text: 'Switch to the "Advanced" tab to manually define the exact minutes, hours, or specific days of the week.',
  },
  {
    name: 'Verify the translation and dates',
    text: 'Read the human-language description and check the next 5 executions to confirm the schedule is correct.',
  },
  {
    name: 'Copy the expression',
    text: 'Copy the resulting string and paste it directly into your crontab file or server configuration.',
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
  inLanguage: 'en',
};

const ui: CronGeneratorUI = {
  labelMinute: 'Minute',
  labelHour: 'Hour',
  labelDom: 'Day (Month)',
  labelMonth: 'Month',
  labelDow: 'Day (Week)',
  tabQuick: 'Quick',
  tabAdvanced: 'Advanced',
  fieldMinute: 'Minute (0-59)',
  fieldHour: 'Hour (0-23)',
  fieldDom: 'Day of Month (1-31)',
  fieldMonth: 'Month (1-12)',
  fieldDow: 'Day of Week (0-6)',
  hintMinute: 'E.g.: *, */5, 0,30',
  hintDow: '0 = Sunday, 6 = Saturday',
  labelNextRuns: 'Next Executions',
  btnCopy: 'Copy Expression',
  btnCopied: 'Copied!',
  msgNoRuns: 'No upcoming executions found within a reasonable range.',
  msgError: 'Error calculating dates.',
  presetEveryMinute: 'Every minute',
  presetEveryHour: 'Every hour',
  presetDaily: 'Daily',
  presetWeekly: 'Weekly',
  presetMonthly: 'Monthly',
  presetYearly: 'Yearly',
  descEveryMinute: 'Runs every minute',
  descEveryHour: 'Runs at the start of every hour',
  descEveryDay: 'Runs every day at midnight',
  descPrefix: 'Runs',
  descEveryMin: 'every minute',
  descEveryHourOnDot: 'every hour on the dot',
  descAtMinute: 'at minute {m} of every hour',
  descAtTime: 'at {h}:{m}',
  descOnDay: ' on day {d} of the month',
  descInMonth: ' in month {mon}',
  descIfDow: ' if it is day {d} (0=Sun, 6=Sat)',
  descDays: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday',
  descInvalid: 'Invalid expression',
  timeNow: 'now',
  timeMin: 'min',
  timeHour: 'h',
  timeDays: 'days',
  locale: 'en-US',
};

export const content: ToolLocaleContent<CronGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'References and Documentation',
  bibliography: [
    {
      name: 'GNU Crontab Manual: Cron Expressions on Linux',
      url: 'https://www.gnu.org/software/mcron/manual/html_node/Crontab-file.html',
    },
    {
      name: 'Cron on Wikipedia: History and Syntax',
      url: 'https://en.wikipedia.org/wiki/Cron',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'The Importance of Cron in Modern Automation',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Despite living in the age of <em>serverless</em> servers and cloud workflows, the <strong>Crontab</strong> system remains the backbone of global technology infrastructure. From small blogs to massive banking infrastructures, task scheduling is what keeps the digital world running.',
    },
    {
      type: 'title',
      text: 'Anatomy of a Cron Expression',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Field 1 - Minute (0-59):</strong> When the task starts within the hour.',
        '<strong>Field 2 - Hour (0-23):</strong> 24-hour format required.',
        '<strong>Field 3 - Day of Month (1-31):</strong> Specific calendar day.',
        '<strong>Field 4 - Month (1-12):</strong> From January to December.',
        '<strong>Field 5 - Day of Week (0-6):</strong> 0 is typically Sunday.',
      ],
    },
    {
      type: 'title',
      text: 'Special operators and common mistakes',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Use the slash <code>/</code> to define steps: <code>*/5</code> in minutes runs every 5 minutes. The comma <code>,</code> creates lists (<code>1,3,5</code>) and the hyphen <code>-</code> defines ranges (<code>1-5</code>).',
    },
    {
      type: 'paragraph',
      html: '90% of servers run on <strong>UTC</strong>. If you schedule a task at 02:00 AM thinking in your local timezone, it may run at an unexpected time. Also, Cron does not have access to your usual <code>$PATH</code> — always use absolute paths like <code>/usr/local/bin/node</code>.',
    },
  ],
};
