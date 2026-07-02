import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssBoxShadowGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'css-box-shadow-generator';
const title = 'CSS Box Shadow Generator';
const description = '通过实时预览、滑块、颜色选择器和预设，可视化设计分层CSS阴影。即时复制干净的纯CSS。';

const howTo = [
  { name: '选择预设或从头开始', text: '从Card、Float、Inset、Glow或Layered预设中选择，或用滑块调整默认阴影。' },
  { name: '添加并堆叠图层', text: '点击+添加图层（最多5个）。选择每个图层编辑其偏移、模糊、扩散、颜色和不透明度。' },
  { name: '切换内阴影和背景', text: '勾选inset启用内阴影。更改预览背景颜色。' },
  { name: '复制CSS', text: '当预览与设计匹配时，复制生成的CSS并粘贴到样式表中。' },
];

const faq = [
  { question: '可以在一个元素上使用多个阴影吗？', answer: '可以。CSS支持逗号分隔的box-shadow值。此工具可让您堆叠最多5个图层，每个图层有独立控件。' },
  { question: '负的spread值有什么作用？', answer: '负spread在模糊之前将阴影向内收缩。适用于微妙的悬浮效果。' },
  { question: 'inset选项有什么用途？', answer: 'inset阴影渲染在元素边框内部，创建凹陷外观。非常适合表单输入和按下的卡片。' },
  { question: '生成的CSS有框架依赖吗？', answer: '没有。结果是纯原生CSS。可在任何使用标准CSS的项目中使用。' },
];

const ui: CssBoxShadowGeneratorUI = {
  offsetXLabel: 'X偏移',
  offsetYLabel: 'Y偏移',
  blurLabel: '模糊',
  spreadLabel: '扩散',
  opacityLabel: '不透明度',
  insetLabel: '内阴影',
  addLayer: '添加图层',
  removeLayer: '删除图层',
  resetAll: '重置',
  codeTitle: '生成的CSS',
  copyCode: '复制CSS',
  copied: '已复制！',
  previewLabel: '预览',
  presetCard: 'Card',
  presetFloat: 'Float',
  presetInset: 'Inset',
  presetGlow: 'Glow',
  presetLayered: '图层',
  presetsLabel: '预设',
  layerPrefix: '图层',
  bgColorLabel: '背景',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<CssBoxShadowGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'CSS盒阴影生成器常见问题',
  faq,
  bibliographyTitle: 'CSS Box-Shadow 参考资料',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: '可视化设计CSS阴影，无需猜测数值', level: 2 },
    { type: 'paragraph', html: '手动调整<strong>box-shadow</strong>很繁琐。这个可视化生成器让您可以堆叠多个阴影，实时查看并复制生产就绪的CSS。' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: '每个元素的阴影图层', icon: 'mdi:layers' }, { value: '实时', label: '每次更改时预览更新', icon: 'mdi:eye' }, { value: '5', label: '快速预设', icon: 'mdi:star' }] },
    { type: 'title', text: '堆叠多个阴影实现逼真深度', level: 3 },
    { type: 'paragraph', html: '真实阴影很少是均匀模糊的。将紧贴元素的紧密阴影与更柔和、更宽的阴影堆叠在一起，创造自然深度。使用<strong>+</strong>添加图层。' },
    { type: 'table', headers: ['控件', 'CSS值', '效果'], rows: [['X偏移', '第一个长度', '水平位移。'], ['Y偏移', '第二个长度', '垂直位移。'], ['模糊', '第三个长度', '模糊半径。'], ['扩散', '第四个长度', '扩大或缩小阴影。'], ['颜色和不透明度', 'rgba()', '带独立不透明度的阴影颜色。'], ['内阴影', 'inset', '在元素边框内渲染阴影。']] },
    { type: 'summary', title: '推荐工作流程', items: ['从预设开始。', '添加图层实现逼真深度。', '使用负spread实现悬浮卡片效果。', '复制生成的CSS并粘贴。'] },
  ],
};
