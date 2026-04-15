import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ColorConverterUI } from '../ui';

const slug = 'color-converter-rgb-hex-hsl';
const title = '在线颜色转换器 RGB HEX 和 HSL';
const description = '立即在 RGB、HEX 和 HSL 之间转换颜色。生成互补色和谐方案并分析 WCAG 对比度。100% 客户端运行，保护隐私。';

const faqData = [
  {
    question: 'RGB 到 HEX 和 HSL 颜色转换器是如何工作的？',
    answer: '该工具接收红、绿、蓝 (RGB) 值，并使用数学算法将其转换为等效的十六进制 (HEX) 或色相、饱和度、亮度 (HSL) 值。它也可以反向操作。',
  },
  {
    question: '为什么我在设计中应该使用 HSL 而不是 HEX？',
    answer: 'HSL 格式更加直观。它允许您在不改变色相的情况下调整饱和度或亮度，从而更容易创建和谐的配色方案或按钮状态（悬停、禁用）。',
  },
  {
    question: '什么是相对对比度值？',
    answer: '这是一种根据亮度指示文本在背景上的可读性的指标。高对比度可确保视力障碍人士能够根据 WCAG 无障碍指南阅读内容。',
  },
  {
    question: '使用这个在线颜色转换器安全吗？',
    answer: '绝对安全。由于它是 100% 客户端运行的，您的颜色数据永远不会离开您的计算机。所有处理都在您的浏览器中直接完成，保证了隐私和即时性能。',
  },
];

const howToData = [
  { name: '选择颜色', text: '使用红、绿、蓝滑块或直接在文本框中输入 HEX 代码。' },
  { name: '调整 RGB 通道', text: '移动滑块以更改每个通道的强度，并查看实时更新。' },
  { name: '复制格式', text: '点击您需要的 HEX、RGB 或 HSL 格式旁边的复制按钮。' },
  { name: '探索和谐色', text: '点击和谐色（互补色、近色、三元色）将它们复制到剪贴板。' },
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

const ui: ColorConverterUI = {
  labelPreview: '预览（点击复制 HEX）',
  labelHarmonies: '颜色和谐',
  labelR: '红',
  labelG: '绿',
  labelB: '蓝',
  labelComp: '互补',
  labelAna1: '近色 1',
  labelAna2: '近色 2',
  labelTri1: '三元色 1',
  labelTri2: '三元色 2',
  btnCopy: '复制',
  btnCopied: '已复制',
  contrastLabel: '对比度',
  clickToCopy: '点击复制',
};

export const content: ToolLocaleContent<ColorConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '颜色和网页设计资源',
  bibliography: [
    { name: 'W3C: CSS 颜色文档', url: 'https://www.w3.org/TR/css-color-4/' },
    { name: 'MDN: HSL 颜色模型指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value/hsl' },
    { name: 'WebAIM: 对比度和无障碍指南', url: 'https://webaim.org/resources/contrastchecker/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '面向开发者的 RGB 到 HEX 和 HSL 颜色转换器', level: 2 },
    {
      type: 'paragraph',
      html: '在 <strong>前端开发</strong> 和 <strong>UI/UX 设计</strong> 的世界中，颜色管理是一项持续的任务。我们的 <strong>在线颜色转换器</strong> 让您能够立即以数学精度在 <strong>HEX、RGB 和 HSL</strong> 之间转换数值。',
    },
    { type: 'title', text: '颜色格式：HEX、RGB 和 HSL', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>HEX（十六进制）：</strong>CSS 的事实标准。紧凑且易于在代码中共享。',
        '<strong>RGB（红、绿、蓝）：</strong>基于加色系统。非常适合直接操作通道或使用 RGBA 应用透明度。',
        '<strong>HSL（色相、饱和度、亮度）：</strong>最直观的格式。调整色相、饱和度和亮度以创建和谐的调色板。',
      ],
    },
    { type: 'title', text: '对比度和 WCAG 无障碍', level: 3 },
    {
      type: 'paragraph',
      html: '该计算器包含基于亮度的 <strong>相对对比度</strong> 测量。这有助于您满足 <strong>WCAG</strong> 指南，确保您的文本在所选背景上具有可读性。',
    },
    { type: 'title', text: '自动颜色和谐', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>互补色：</strong>色轮上的相对颜色，是获得最大对比度的理想选择。',
        '<strong>近色：</strong>相邻的颜色，可创建平滑、和谐的过渡。',
        '<strong>三元色：</strong>三种等距离的颜色，用于充满活力、平衡的构图。',
      ],
    },
  ],
};

