import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReadabilityCalculatorUI } from '../ui';
const slug = 'visual-readability-calculator-wcag-apca';
const title = '视觉可读性计算器 WCAG 和 APCA';
const description = '使用 APCA (WCAG 3.0) 检查设计的真实对比度。分析字体粗细和大小如何影响实际可读性。';
const faqData = [
  { question: 'APCA 是什么，为什么与 WCAG 2.1 不同？', answer: 'APCA 是为 WCAG 3.0 开发的高级感知对比算法。与旧的简单公式不同，APCA 使用数学模型来模拟人类大脑如何感知对比度。' },
  { question: 'Lc 值代表什么？', answer: 'Lc（亮度对比）是 APCA 生成的对比度值。值 100 代表理想的最大对比度，而低于 60 的值对于连续阅读文本开始变得至关重要。' },
  { question: '字体粗细如何影响可读性？', answer: '细/轻字体需要更高的对比度才能可读。APCA 惩罚低粗细字体，表明通过 WCAG 的使用 weight-100 字体的设计在实践中可能无法阅读。' },
  { question: '这个计算器是私密的吗？', answer: '是的，所有计算都在浏览器中本地执行。您分析的颜色和设置永远不会发送到任何服务器，确保您的设计项目的完全隐私。' },
];
const howToData = [
  { name: '选择颜色', text: '使用颜色选择器设置设计的文本颜色和背景颜色。' },
  { name: '调整排版', text: '移动字体大小和粗细滑块以模拟实际排版。' },
  { name: '阅读结果', text: '检查 WCAG 2.1 比率和 APCA Lc 值，了解您的设计是否可访问。' },
  { name: '查看建议', text: '检查正文、小文本和 UI 元素的 APCA 特定建议。' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowToThing> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'zh' };
const ui: ReadabilityCalculatorUI = { labelColors: '基础色', labelText: '文本', labelBg: '背景', labelTypo: '排版', labelFontSize: '字体大小', labelFontWeight: '粗细', labelCompare: '对比度比较', labelPreview: '感知预览', labelApcaRecs: 'APCA 建议', labelBody: '阅读文本（正文）', labelSmall: '小文本/标题', labelUi: 'UI / 按钮', statusYes: '是', statusNo: '否', wcagAAA: '通过 AAA', wcagAA: '通过 AA', wcagLarge: '仅大文本', wcagFail: '失败', apcaExcellent: '优秀', apcaGood: '良好', apcaMinimal: '最小', apcaPoor: '差', previewText: '视觉可读性不仅仅是数学。它是光线和阴影如何与您的眼睛相互作用。', wcagRatioLabel: 'WCAG 2.1 比率', apcaLcLabel: 'APCA Lc (WCAG 3)' };
export const content: ToolLocaleContent<ReadabilityCalculatorUI> = {
  slug, title, description, ui,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '对比度和 APCA 资源',
  bibliography: [
    { name: 'W3C: WCAG 3.0 草案 (Silver)', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/' },
    { name: 'Myndex: APCA 参考指南', url: 'https://apcaw3.myndex.com/' },
    { name: 'MDN: 可访问性和颜色对比', url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '视觉可读性计算器 (WCAG vs APCA)', level: 2 },
    { type: 'paragraph', html: '了解您的颜色和排版如何使用新的感知可访问性标准影响实际阅读。WCAG 2.1 使用简单的 2008 年数学公式。<strong>APCA</strong> 是为 <strong>WCAG 3.0</strong> 提议的模拟人类感知的新模型。' },
    { type: 'title', text: 'APCA 的关键要点', level: 3 },
    { type: 'list', items: [ '<strong>极性：</strong>理解深色模式的感知方式与浅色模式不同。', '<strong>字体粗细：</strong>根据排版粗细分配特定对比等级 (Lc)。', '<strong>线性：</strong>修复 2008 年相对亮度模型中的数学不准确性。' ] },
    { type: 'title', text: '建议的 APCA 级别', level: 3 },
    { type: 'list', items: [ '<strong>Lc 90+：</strong>非常小或低粗细文本的理想选择。', '<strong>Lc 75：</strong>主要正文阅读文本的标准。', '<strong>Lc 60：</strong>可读中等大小内容的最小值。', '<strong>Lc 45：</strong>大型或装饰元素的最小值。' ] },
  ],
};

