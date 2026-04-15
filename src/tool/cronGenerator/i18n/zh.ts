import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CronGeneratorUI } from '../ui';

const slug = 'cron';
const title = '在线 Cron 表达式生成器：翻译与可视化';
const description =
  '免费的 Linux Cron 表达式生成工具。将 * * * * * 翻译成人类语言，并实时显示接下来的 5 次执行时间。';

const faqData = [
  {
    question: '什么是 Cron 表达式？',
    answer:
      '它是一个文本字符串，代表类 Unix 系统（Linux、macOS）上自动任务的执行计划。它由 5 个字段组成，分别定义分钟、小时、日期、月份和星期。',
  },
  {
    question: '它是否兼容所有系统？',
    answer:
      '是的，生成的表达式遵循 POSIX 标准，兼容 Linux Crontab、macOS cron 以及 AWS CloudWatch 或 GitHub Actions 等云服务。',
  },
  {
    question: 'Cron 中的星号 (*) 是什么意思？',
    answer:
      '星号是一个通配符，表示“所有”。例如，分钟字段中的 * 表示任务将在定义范围内的每分钟运行。',
  },
  {
    question: '如何检查即将进行的执行？',
    answer:
      '该工具包含一个实时查看器，可根据当前表达式准确显示任务下次运行的 5 个日期和时间。',
  },
];

const howToData = [
  {
    name: '选择时间间隔',
    text: '使用快速预设（每分钟、每小时、每日等）选择您希望任务运行的频率。',
  },
  {
    name: '配置高级细节',
    text: '切换到“高级”选项卡，手动定义具体的分钟、小时或特定的星期。',
  },
  {
    name: '验证翻译和日期',
    text: '阅读人类语言描述并检查接下来的 5 次执行，以确认计划是否正确。',
  },
  {
    name: '复制表达式',
    text: '复制生成的字符串并将其直接粘贴到您的 crontab 文件或服务器配置中。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  inLanguage: 'zh',
};

const ui: CronGeneratorUI = {
  labelMinute: '分钟',
  labelHour: '小时',
  labelDom: '日期 (月)',
  labelMonth: '月份',
  labelDow: '星期 (周)',
  tabQuick: '快速',
  tabAdvanced: '高级',
  fieldMinute: '分钟 (0-59)',
  fieldHour: '小时 (0-23)',
  fieldDom: '一个月中的第几天 (1-31)',
  fieldMonth: '月份 (1-12)',
  fieldDow: '一星期中的第几天 (0-6)',
  hintMinute: '例如：*, */5, 0,30',
  hintDow: '0 = 星期日, 6 = 星期六',
  labelNextRuns: '下次执行计划',
  btnCopy: '复制表达式',
  btnCopied: '已复制！',
  msgNoRuns: '在合理范围内未发现即将进行的执行。',
  msgError: '计算日期时出错。',
  presetEveryMinute: '每分钟',
  presetEveryHour: '每小时',
  presetDaily: '每日',
  presetWeekly: '每周',
  presetMonthly: '每月',
  presetYearly: '每年',
  descEveryMinute: '每分钟运行一次',
  descEveryHour: '每小时开始时运行',
  descEveryDay: '每天午夜运行',
  descPrefix: '运行时间：',
  descEveryMin: '每分钟',
  descEveryHourOnDot: '每整点',
  descAtMinute: '每小时的第 {m} 分钟',
  descAtTime: '{h}:{m}',
  descOnDay: ' 每月的第 {d} 天',
  descInMonth: ' 第 {mon} 个月',
  descIfDow: ' 如果是星期 {d} (0=周日, 6=周六)',
  descDays: '星期日,星期一,星期二,星期三,星期四,星期五,星期六',
  descInvalid: '无效的表达式',
  timeNow: '现在',
  timeMin: '分',
  timeHour: '小时',
  timeDays: '天',
  locale: 'zh-CN',
};

export const content: ToolLocaleContent<CronGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料与文档',
  bibliography: [
    {
      name: 'GNU Crontab 手册：Linux 上的 Cron 表达式',
      url: 'https://www.gnu.org/software/mcron/manual/html_node/Crontab-file.html',
    },
    {
      name: '维基百科 Cron：历史与语法',
      url: 'https://zh.wikipedia.org/wiki/Cron',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Cron 在现代自动化中的重要性',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '虽然我们生活在<em>无服务器</em>架构和云工作流的时代，但 <strong>Crontab</strong> 系统仍然是全球技术基础设施的支柱。从小型博客到庞大的银行基础设施，任务调度是保持数字世界运行的重要机制。',
    },
    {
      type: 'title',
      text: 'Cron 表达式的剖析',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>字段 1 - 分钟 (0-59):</strong> 任务在一小时内的什么时候开始。',
        '<strong>字段 2 - 小时 (0-23):</strong> 需要使用 24 小时制格式。',
        '<strong>字段 3 - 一个月中的第几天 (1-31):</strong> 特定的日历日期。',
        '<strong>字段 4 - 月份 (1-12):</strong> 从一月到十二月。',
        '<strong>字段 5 - 一星期中的第几天 (0-6):</strong> 0 通常表示星期日。',
      ],
    },
    {
      type: 'title',
      text: '特殊操作符与常见错误',
      level: 3,
    },
    {
      type: 'tip',
      html: '使用斜杠 <code>/</code> 来定义步进：在分钟字段中 <code>*/5</code> 表示每 5 分钟运行一次。逗号 <code>,</code> 用于创建列表 (<code>1,3,5</code>)，连字符 <code>-</code> 用于定义范围 (<code>1-5</code>)。',
    },
    {
      type: 'paragraph',
      html: '90% 的服务器运行在 <strong>UTC</strong> 时间。如果您按照当地时区计划在凌晨 02:00 运行任务，它可能会在意外的时间执行。此外，Cron 无法直接访问您的 <code>$PATH</code> 变量 —— 请始终使用绝对路径，例如 <code>/usr/local/bin/node</code>。',
    },
  ],
};

