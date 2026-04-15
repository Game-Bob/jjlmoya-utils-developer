import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CalculadoraTiempoDatosUI } from '../ui';

const slug = 'data-time-calculator-web-speed-impact';
const title = '数据时间计算器：网页速度的影响';
const description = '了解您的用户在 3G、4G 和 5G 连接下等待网站加载时损失了多少寿命。计算网站权重的真实影响。';

const faqData = [
  {
    question: '为什么了解网站加载时间很重要？',
    answer: '因为它直接影响用户体验、SEO 和转化率。Google 的记录显示，每一秒的延迟都会使转化率降低 7%。此外，53% 的移动端访问者会放弃加载时间超过 3 秒的页面。',
  },
  {
    question: '寿命损失的那些微小百分比代表什么？',
    answer: '它们代表了一个人总寿命（约 80 年或 25 亿秒）中用于等待页面加载的时间百分比。虽然单个数值看起来很小，但乘以数百万用户，就代表了巨大的、被浪费的人力时间。',
  },
  {
    question: '全球平均连接速度是多少？',
    answer: '4G 是发达国家的标准。然而，发展中国家的数百万用户仍然依赖 3G。这就是为什么针对所有连接速度优化网站至关重要的原因。',
  },
  {
    question: '网站的权重应该是多少？',
    answer: 'Google 建议首页在典型的 4G 连接下，加载时间应少于 3 秒。为此，网站的权重理想情况下应在 1-2 MB 之间。然而，全球平均水平接近 2-3 MB。',
  },
  {
    question: '如何减轻网站权重？',
    answer: '主要策略：优化图像（占权重的 50-80%）、压缩 CSS 和 JavaScript、使用延迟加载（lazy loading）、实施浏览器缓存以及使用 CDN。图像优化通常是影响最大的因素。',
  },
  {
    question: '加载速度会影响 Google 排名吗？',
    answer: '是的，绝对会。Google 将 Core Web Vitals 视为重要的排名因素。加载缓慢的网站排名会低于加载较快的网站，即使内容相似也是如此。',
  },
];

const howToData = [
  { name: '输入您的网站权重', text: '使用浏览器开发者工具或 WebPageTest 获取页面权重。以 MB 为单位输入该值。' },
  { name: '观察加载时间', text: '计算器显示网站在 3G、4G 和 5G 下加载所需的秒数。现实中的时间通常更高。' },
  { name: '了解对寿命的影响', text: '“寿命”百分比显示了一个人有多少生命花在了等待上。以此作为优化的动力。' },
  { name: '优化并重新计算', text: '优化后，再次测量并重新计算。观察微小的改进如何产生重大影响。' },
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
  inLanguage: 'zh',
};

const ui: CalculadoraTiempoDatosUI = {
  headerTitle: '网络中流逝的时间',
  labelWebSize: '网站权重 (MB)',
  unit: 'MB',
  presetsLabel: '现实案例',
  labelSpeed: '连接速度',
  speedLabel3g: '3G',
  speedValue3g: '0.4 Mbps',
  speedLabel4g: '4G/LTE',
  speedValue4g: '10 Mbps',
  speedLabel5g: '5G',
  speedValue5g: '100+ Mbps',
  labelTimes: '每天访问多少次？',
  resultTitle: '结果',
  resultSingleLoad: '单次加载',
  resultDailyTotal: '每日总计',
  resultTimePerYear: '每年的等待时间',
  resultLifeYears: '一生的等待时间',
  resultMessage: '您已损失了大约 1 年的寿命',
  copyMessage: '已复制',
  preset3g: '3G',
  preset4g: '4G',
  preset5g: '5G',
};

export const content: ToolLocaleContent<CalculadoraTiempoDatosUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '关于网页优化的技术资源',
  bibliography: [
    { name: 'Google PageSpeed Insights', url: 'https://pagespeed.web.dev/' },
    { name: 'WebPageTest - 分析网站速度', url: 'https://www.webpagetest.org/' },
    { name: 'Web.dev - Core Web Vitals', url: 'https://web.dev/vitals/' },
    { name: 'MDN - 网页性能', url: 'https://developer.mozilla.org/zh-CN/docs/Web/Performance' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '为什么网站加载速度至关重要', level: 2 },
    {
      type: 'paragraph',
      html: '在当今数字时代，网站加载速度不是一种奢侈品，而是一种必需。在留住用户、提高搜索排名和实现转化最大化方面，每一毫秒都至关重要。现代用户期望页面加载时间少于 3 秒。',
    },
    { type: 'title', text: '对用户体验的影响', level: 3 },
    {
      type: 'paragraph',
      html: '如果加载时间超过 3 秒，53% 的移动访客会离开页面。每增加一秒的延迟，转化率就会下降 7%。',
    },
    { type: 'title', text: '了解连接速度', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>3G:</strong> 0.4 Mbps - 常见于农村和发展中国家',
        '<strong>4G/LTE:</strong> 10 Mbps - 发达国家的标准',
        '<strong>5G:</strong> 100+ Mbps - 正在逐步扩展，但仍受限',
      ],
    },
    { type: 'title', text: '减轻网站权重的策略', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>图像优化：</strong>占权重的 50-80%。使用 TinyPNG 等工具可减少 40-60%。',
        '<strong>压缩：</strong>删除 CSS 和 JavaScript 中不必要的代码。可节省 30-50%。',
        '<strong>延迟加载：</strong>仅当用户滚动到图像时才加载它们。',
        '<strong>浏览器缓存：</strong>在用户浏览器上缓存静态文件。',
        '<strong>CDN：</strong>从地理位置较近的服务器提供内容。',
      ],
    },
    { type: 'title', text: '结论：每一秒都很重要', level: 2 },
    {
      type: 'paragraph',
      html: '您的网站通常是用户对您品牌的第一印象。缓慢的网站会让用户感到沮丧并导致业务流失。快速且响应迅速的网站可以创造积极的体验并改善您的所有指标。',
    },
  ],
};

