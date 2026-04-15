import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlCleanerUI } from '../ui';
const slug = 'url-tracking-cleaner';
const title = 'URL 追踪清理器：移除 UTM、FBCLID 和 GCLID';
const description = '自动从 URL 中移除追踪和广告参数。分享干净的链接并立即保护您的数字隐私。';
const faqData = [
  { question: '此工具移除哪些类型的跟踪参数？', answer: '我们的工具自动检测并移除最常见的跟踪参数，包括 UTM（utm_source、utm_medium 等）、广告点击标识符（fbclid、gclid、msclkid）和电子邮件营销活动标识符（mc_cid、_hsenc）。' },
  { question: '这会影响网站功能吗？', answer: '通常不会。这些参数几乎完全用于分析和营销。移除它们时，页面会正常加载，但网站所有者将无法追踪您点击的确切来源。' },
  { question: '在此处处理我的链接安全吗？', answer: '绝对安全。与我们所有工具一样，该过程 100% 在客户端进行。您的链接永远不会发送到我们的服务器；一切都在您自己的浏览器中私密进行。' },
  { question: '为什么我的 Facebook 链接这么长？', answer: 'Facebook 会向离开其平台的所有链接添加名为 "fbclid" 的参数。这使他们即使在您阻止第三方广告的情况下也能追踪您在其他网站上的活动。' },
];
const howToData = [
  { name: '粘贴您的 URL', text: '输入包含跟踪参数的完整 URL' },
  { name: '点击清理', text: '该工具将自动分析 URL' },
  { name: '查看结果', text: '您将看到干净的 URL 和已移除参数的列表' },
  { name: '复制并分享', text: '在电子邮件、社交媒体或消息中使用干净的 URL' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowToThing> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'zh' };
const ui: UrlCleanerUI = { labelInput: '粘贴包含追踪参数的 URL', btnClean: '清理', labelCleaned: '干净的 URL', labelRemoved: '已移除的追踪器', countLabel: '已移除参数', reductionLabel: '长度减少', noneDetected: '未检测到常见跟踪参数。', errorInvalid: '请输入有效的 URL。', btnCopy: '复制', btnCopied: '已复制' };
export const content: ToolLocaleContent<UrlCleanerUI> = {
  slug, title, description, ui,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '隐私和网络跟踪资源',
  bibliography: [
    { name: '电子前沿基金会 (EFF)：在线追踪指南', url: 'https://www.eff.org/issues/online-behavioral-tracking' },
    { name: 'Google Analytics：UTM 参数文档', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: '网络隐私：点击 ID 的影响', url: 'https://www.w3.org/community/web-advertising/wiki/Click_Identifiers' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'URL 追踪清理器：移除 UTM、FBCLID 和 GCLID', level: 2 },
    { type: 'paragraph', html: '从链接中移除不可见的追踪器，以干净、私密和专业的方式共享。了解 URL 中这些奇怪代码的含义。' },
    { type: 'title', text: '什么是 URL 追踪清理器，为什么需要它？', level: 3 },
    { type: 'paragraph', html: '您是否曾经复制过一个链接来发送给朋友，结果发现它的长度是应有长度的三倍？那个额外的"噪音"是追踪参数。<strong>追踪清理器</strong>是一个工具，用于从 URL 中"剥离"大型平台注入您进行的每次点击中的所有广告和追踪信息。' },
    { type: 'title', text: '最常见的追踪参数', level: 3 },
    { type: 'list', items: [ '<strong>UTM (Google Analytics)：</strong>utm_source、utm_medium、utm_campaign 用于追踪活动', '<strong>FBCLID：</strong>Facebook 点击识别符，用于绕过 Cookie 限制', '<strong>GCLID / DCLID：</strong>Google 点击 ID，用于将访问与 Google Ads 活动关联', '<strong>MSCLKID：</strong>Microsoft 广告和 Bing 点击识别符', '<strong>HubSpot & Mailchimp：</strong>营销自动化参数，如 _hsenc、mc_cid', '<strong>LinkedIn 和其他：</strong>li_fat_id 和其他社交媒体追踪器' ] },
  ],
};

