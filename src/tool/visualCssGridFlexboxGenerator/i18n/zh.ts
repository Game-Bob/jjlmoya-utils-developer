import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VisualCssGridFlexboxGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'visual-css-grid-flexbox-generator';
const title = '可视化CSS Grid与Flexbox布局生成器';
const description = '通过移动可视化区块、调整容器大小、调整对齐方式并使用预设来设计响应式布局  -  然后即时复制干净的纯CSS。';

const howTo = [
  { name: '选择预设或Flexbox/Grid', text: '从布局预设（navbar、cards、hero、sidebar、gallery）开始，或手动在Flexbox和Grid之间切换。' },
  { name: '调整布局大小', text: '从右下角调整容器大小，测试设计如何响应可用空间。' },
  { name: '调整对齐控件', text: '使用滑块和下拉菜单调整方向、换行、间距、列数、justify-content、align-items、align-content、宽度、高度和项目大小。' },
  { name: '复制生产就绪的CSS', text: '当视觉效果符合目标结构时，复制生成的CSS。无框架依赖。' },
];

const faq = [
  { question: '何时使用Flexbox而不是CSS Grid？', answer: '一维布局使用Flexbox  -  导航栏、按钮组、换行卡片、居中内容。当行和列共同重要时使用Grid  -  仪表板、画廊、表单、结构化页面区域。' },
  { question: '这个生成器能创建响应式布局吗？', answer: '可以。生成的CSS使用原生的flex换行或重复grid列。调整可视化画布大小以测试不同尺寸下的间距和对齐。' },
  { question: '为什么justify-content和align-items在grid和flex中感觉不同？', answer: 'Flexbox沿主轴和交叉轴分布项目。Grid先将项目放入轨道，然后在其中对齐内容。切换两种模式使这种差异立即可见。' },
  { question: '生成的CSS是否绑定到某个框架？', answer: '不。结果是纯原生CSS。可在纯HTML、Astro、React、Vue、Svelte、Web Components或任何接受标准CSS的项目中使用。' },
  { question: '布局预设有什么用途？', answer: '预设加速了常见布局，让你无需从零开始就能看到真实的配置。每个预设都根据真实模式设置模式、方向、换行、对齐和容器大小。' },
];

const ui: VisualCssGridFlexboxGeneratorUI = {
  modeLabel: '布局模式',
  flexMode: 'Flexbox',
  gridMode: 'Grid',
  canvasLabel: '交互式布局画布',
  addItem: '添加项目',
  removeItem: '删除项目',
  resetLayout: '重置布局',
  gapLabel: '间距',
  columnsLabel: 'Grid列数',
  widthLabel: '容器宽度',
  heightLabel: '容器高度',
  justifyLabel: '水平对齐',
  alignLabel: '垂直对齐',
  itemSizeLabel: '项目大小',
  codeTitle: '生成的CSS',
  copyCode: '复制CSS',
  copied: '已复制！',
  dragHint: '从角落调整画布大小  -  CSS实时更新！',
  outputLabel: '生成的CSS输出',
  justifyStart: '起始',
  justifyCenter: '居中',
  justifyEnd: '末尾',
  justifyBetween: 'Space between',
  justifyAround: 'Space around',
  justifyEvenly: 'Space evenly',
  alignStart: '起始',
  alignCenter: '居中',
  alignEnd: '末尾',
  alignStretch: '拉伸',
  alignBaseline: '基线',
  itemPrefix: '区块',
  directionLabel: '方向',
  directionRow: '行 →',
  directionRowReverse: '← 行 反向',
  directionColumn: '列 ↓',
  directionColumnReverse: '↑ 列 反向',
  wrapLabel: '换行',
  wrapNoWrap: '不换行',
  wrapWrap: '换行',
  wrapWrapReverse: '反向换行',
  alignContentLabel: '内容对齐',
  alignContentStart: '起始',
  alignContentCenter: '居中',
  alignContentEnd: '末尾',
  alignContentBetween: 'Space between',
  alignContentAround: 'Space around',
  alignContentEvenly: 'Space evenly',
  alignContentStretch: '拉伸',
  presetsLabel: '预设',
  presetNavbar: '导航栏',
  presetCards: '卡片',
  presetHero: '主视觉',
  presetSidebar: '侧边栏',
  presetGallery: '画廊',
  shakeLimit: '至少需要2个项目！',
  spanHint: '在Grid模式下双击项目可更改列跨度(1-3)',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<VisualCssGridFlexboxGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'CSS布局生成器常见问题',
  faq,
  bibliographyTitle: 'CSS Grid和Flexbox参考',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: '通过观察行为而非记忆属性来构建CSS布局', level: 2 },
    { type: 'paragraph', html: 'CSS Grid和Flexbox之所以强大，是因为它们描述布局关系而非固定坐标。难点在于预测<strong>gap</strong>、<strong>justify-content</strong>、<strong>align-items</strong>、方向、换行、轨道和可用空间如何相互作用。这个生成器将抽象属性转变为带有预设和实时CSS的活生生的演练场。' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: '快速启动预设', icon: 'mdi:view-grid-plus' }, { value: '实时', label: '每次更改CSS都更新', icon: 'mdi:code-braces' }, { value: '0', label: 'CSS中的框架依赖', icon: 'mdi:language-css3' }] },
    { type: 'title', text: 'Flexbox vs Grid：在完善对齐之前选择模型', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: 'Flexbox', description: '最适合一维流，项目按行或列排列并自然换行。', icon: 'mdi:format-align-justify', highlight: true, points: ['导航栏', '按钮组', '换行卡片', '居中内容'] }, { title: 'CSS Grid', description: '最适合二维结构，行和列定义组合的形状。', icon: 'mdi:grid', points: ['仪表板', '画廊', '表单', '编辑区域'] }] },
    { type: 'title', text: '每个控件教给你的知识', level: 3 },
    { type: 'table', headers: ['控件', 'CSS属性', '关注点'], rows: [['方向', '<code>flex-direction</code>', '主轴如何流动  -  从行切换到列会改变整个布局逻辑。'], ['换行', '<code>flex-wrap</code>', '项目保持在单行还是空间不足时流向新行。'], ['间距', '<code>gap</code>', '项目之间的空间，无需在边缘断裂的边距。'], ['水平对齐', '<code>justify-content</code>', '空闲空间如何沿主轴分布。'], ['垂直对齐', '<code>align-items</code>', '项目如何在交叉轴上放置。'], ['内容对齐', '<code>align-content</code>', '换行的flex行或grid行如何分配额外的交叉轴空间。'], ['列数', '<code>grid-template-columns</code>', '在项目移到下一行之前，grid创建多少个相等的轨道。'], ['容器大小', '<code>width</code>和<code>min-height</code>', '相同的CSS在可用空间变化时如何响应。']] },
    { type: 'tip', title: '先缩放，再优化', html: '首先将画布缩放到真实大小。然后调整间距和对齐。这样生成的CSS在真实条件下也能工作。' },
    { type: 'title', text: '可适配的干净CSS', level: 3 },
    { type: 'code', ariaLabel: '生成的CSS示例', code: '.layout-playground {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 24px;\n  justify-content: center;\n  align-items: center;\n}' },
    { type: 'diagnostic', variant: 'info', title: '为什么可视化缩放很重要', html: '许多布局错误仅在容器更窄、更高或填充不同数量的项目时才会出现。在CSS实时更新时进行缩放有助于发现尴尬的换行和脆弱的对齐选择。' },
    { type: 'summary', title: '推荐工作流程', items: ['一维流选择预设或Flexbox，二维结构选择Grid。', '在复制CSS之前缩放画布，使布局经受住现实的约束。', '使用gap作为项目之间的间距，而不是为每个子元素添加边距。', '以生成的CSS为起点进行复制，然后添加项目特定的选择器和媒体查询。'] },
  ],
};
