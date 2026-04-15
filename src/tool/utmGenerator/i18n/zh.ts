import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UtmGeneratorUI } from '../ui';

const slug = 'utm-generator';
const title = 'Google Analytics UTM 参数生成器平衡';
const description = '为您的数字营销活动创建精确的追踪链接。针对 Google Analytics 和其他分析工具进行了优化。';

const faqData = [
  {
    question: '使用 UTM 参数对 SEO 有影响吗？',
    answer: '没有，只要您使用规范标签（canonical tags）即可。搜索引擎了解 UTM 参数用于分析，不会将其视为重复内容。',
  },
  {
    question: '我应该在内部链接中使用 UTM 参数吗？',
    answer: '不，绝对不要。在内部链接上使用 UTM 标签会破坏 Google Analytics 等工具中的用户会话，从而导致您的流量数据失真。',
  },
  {
    question: 'Google Analytics 在 UTM 中区分大小写吗？',
    answer: '是的。"google"、"Google" 和 "GOOGLE" 会被视为不同的来源。请始终保持一致，建议仅使用小写字母。',
  },
];

const howToData = [
  { name: '输入 URL', text: '输入您网站的完整 URL，包括 https://' },
  { name: '定义来源', text: '指定流量来源（google, facebook, newsletter 等）' },
  { name: '选择媒介', text: '选择渠道类型（cpc, email, social, organic 等）' },
  { name: '命名您的活动', text: '分配一个可识别的名称以对您的营销工作进行归类' },
  { name: '复制并使用', text: '复制生成的 URL 并将其用于您的帖子、广告或电子邮件签名中' },
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

const ui: UtmGeneratorUI = {
  labelUrl: '网站 URL (例如 https://example.com) *',
  labelSource: '广告系列来源 (例如 google, newsletter) *',
  labelMedium: '广告系列媒介 (例如 cpc, email)',
  labelCampaign: '广告系列名称 (例如 summer_offer)',
  labelTerm: '广告系列字词 (例如 buy_shoes)',
  labelContent: '广告系列内容 (例如 banner_top)',
  labelGenerated: '生成的 URL：',
  btnCopy: '复制链接',
  btnCopied: '已复制！',
  errorInvalid: '请输入有效的 URL',
  errorInvalidUrl: '无效的 URL',
};

export const content: ToolLocaleContent<UtmGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料',
  bibliography: [
    { name: '使用自定义 URL 收集广告系列数据 - Google Analytics 帮助 (2024)', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: '广告系列 URL 标记最佳实践 - VWO 博客 (2023)', url: 'https://vwo.com/blog/utm-tagging-best-practices/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'UTM 生成器：Google Analytics 的追踪参数', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>UTM</strong> 参数（Urchin Tracking Module）是在 URL 末尾添加的文本标签，用于追踪网络流量。我们的生成器简化了为您数字营销活动创建可追踪链接的过程。',
    },
    { type: 'title', text: '可追踪 URL 的 5 个要素', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>广告系列来源：</strong>识别搜索引擎、社交网络或流量来源。例如：google, newsletter, facebook。',
        '<strong>广告系列媒介：</strong>指营销渠道。例如：cpc, email, social, banner, organic。',
        '<strong>广告系列名称：</strong>您活动的具体名称。例如：summer_offer_2025, app_launch_v2。',
        '<strong>广告系列字词：</strong>对于付费搜索，指您出价的关键词。例如：buy_sports_shoes。',
        '<strong>广告系列内容：</strong>用于 A/B 测试。区分活动中的相似元素。例如：header_v1, sidebar_v2。',
      ],
    },
    { type: 'title', text: 'UTM 标记最佳实践', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>大小写一致性：</strong>工具会区分 "Google"、"GOOGLE" 和 "google"。始终使用小写字母以避免重复。',
        '<strong>避免空格：</strong>空格会变成 %20。请改用连字符 (-) 或下划线 (_)。',
        '<strong>不要在内部链接上使用：</strong>UTM 追踪仅用于外部流量。在内部链接上使用会破坏会话并损坏关键指标。',
        '<strong>记录您的标签：</strong>记录您使用的所有组合，以防止不一致。',
      ],
    },
  ],
};

