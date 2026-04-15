import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileMockupGeneratorUI } from '../ui';

const slug = 'mobile-mockup-generator';
const title = '移动演示图生成器。iPhone 和 Google Pixel';
const description = '为 App Store 和 Google Play 创建专业演示。带有自定义背景、全景布局和批量高分辨率导出的 iPhone 和 Pixel 演示图。';

const faqData = [
  { question: '这些截图对 App Store 和 Google Play 有效吗？', answer: '是的，生成的图像符合应用商店的宽高比和质量要求。只需在导出前选择正确的设备（iOS 用 iPhone，Android 用 Pixel）即可。' },
  { question: '我可以使用自己的自定义背景吗？', answer: '当然可以。除了我们的高级渐变库外，您还可以从计算机上传任何图像作为演示图的背景环境。' },
  { question: '商用是否免费？', answer: '是的，您可以将生成的演示图用于商业项目、作品集或演示，无需费用且无水印。' },
  { question: '我的截图是否保存在任何服务器上？', answer: '否。生成器 100% 在您的浏览器中本地运行。您的私人图像永远不会离开您的计算机。' },
];

const howToData = [
  { name: '上传截图', text: '拖动或选择您想要呈现的移动应用程序的屏幕截图。' },
  { name: '选择设备', text: '根据目标商店选择智能手机型号（iOS 用 iPhone 15 Pro Max 或 Android 用 Google Pixel 8）。' },
  { name: '自定义环境', text: '调整背景、设备角度，添加营销文本并选择组合布局。' },
  { name: '以高清方式下载', text: '以高分辨率 WebP 格式导出所有结果，准备上传到应用商店。' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'DesignApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'zh',
};

const ui: MobileMockupGeneratorUI = {
  labelUpload: '上传截图',
  dropHint: '将图像拖到此处',
  dropFormats: 'PNG、JPG 或 WEBP',
  btnMassReplace: '批量替换',
  massReplaceHint: '替换当前图像同时保留您的预设和文本。非常适合快速迭代。',
  labelSettings: '全局设置',
  labelDevice: '设备',
  labelFont: '字体',
  labelBackground: '背景',
  titleSwapColors: '交换颜色',
  labelAngle: '角度',
  labelSafeArea: '安全区（上/下）',
  labelSafeAreaColor: '区域颜色',
  emptyTitle: '还没有图像',
  emptySubtitle: '上传您的截图开始设计',
  btnClearAll: '清除画布',
  btnExport: '导出全部 (.zip)',
  cardTitleDuplicate: '复制场景',
  cardTitleReplace: '替换当前屏幕截图',
  cardSectionLayouts: '主布局',
  cardSectionBranding: '品牌和文本',
  cardTitleResetText: '重置文本',
  cardLabelColor: '颜色',
  cardTextPlaceholder: '在此输入文本...',
  cardSectionDevice: '设备布局',
  cardTitleResetDevice: '重置位置',
  cardSectionScene: '道具和背景',
  cardBtnSpecialBg: '特殊背景',
  cardBtnDeleteScene: '删除场景',
  cardRangeLabelSize: '大小',
  cardRangeLabelX: 'X 轴',
  cardRangeLabelY: 'Y 轴',
  cardRangeLabelRotation: '旋转',
  cardRangeLabelScale: '缩放',
  presetClassic: '经典',
  presetMobileBottom: '移动底部',
  presetMobileTop: '移动顶部',
  presetFocus: '焦点',
  presetDynamic: '动态',
  presetSplitLeft: '左分割',
  presetSplitRight: '右分割',
  presetImageLeft: '左图像',
  presetImageRight: '右图像',
  confirmClear: '确定要删除所有演示图吗？',
  processingExport: '处理中...',
  exportDone: '完成！',
};

export const content: ToolLocaleContent<MobileMockupGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料',
  bibliography: [
    { name: 'Apple App Store 截图要求', url: 'https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications' },
    { name: 'Google Play 截图要求', url: 'https://support.google.com/googleplay/android-developer/answer/9866151' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '将您的屏幕截图提升到新的水平', level: 2 },
    { type: 'paragraph', html: '不要仅限于简单的屏幕截图。我们的演示工具使开发人员和设计师能够创建高影响力的视觉资产，而无需 Photoshop 或 Figma。' },
    { type: 'title', text: '主布局的威力', level: 3 },
    { type: 'grid', columns: 2 },
    { type: 'card', title: 'App Store 和 Google Play', html: '<p>优化您的转化率。iPhone 15 Pro Max 和 Pixel 8 演示图是应用商店列表的世界标准。</p>' },
    { type: 'card', title: 'Pitch Deck 和营销', html: '<p>以权威方式呈现您的想法。非常适合投资者演讲、社交媒体活动和专业 UI/UX 设计作品集。</p>' },
    { type: 'title', text: '专业工作流程', level: 3 },
    { type: 'tip', html: '使用"左分割"和"右分割"预设来创建连续的演示图，在 Instagram 轮播或 App Store 屏幕截图中从一个图像滑到另一个。' },
  ],
};

