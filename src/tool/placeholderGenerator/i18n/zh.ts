import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PlaceholderGeneratorUI } from '../ui';

const slug = 'placeholder-image-generator';
const title = '占位图生成器。快速网页效果图在线生成';
const description =
  '为网页设计创建自定义占位图。调整分辨率、背景、文字，立即导出为 PNG、WebP 或 JPEG。';

const faqData = [
  {
    question: '什么是占位图？',
    answer:
      '占位图或填充图是在网页设计和布局中使用的临时图形元素，用于预留最终图像的空间。在最终内容可用之前，它们有助于可视化页面的结构。',
  },
  {
    question: '我能在生成器中使用任何分辨率吗？',
    answer:
      '可以。您可以为宽度和高度输入任何数值。生成器将创建具有精确请求尺寸的画布，非常适合严格的网格或特定的广告横幅。',
  },
  {
    question: '图像以什么格式下载？',
    answer:
      '默认情况下，图像以 WebP 格式生成以实现最优压缩，但您可以选择以 PNG 格式下载以保持最大无损质量，或以 JPEG 格式下载以实现传统兼容性。',
  },
  {
    question: '这是在某个服务器上处理的吗？',
    answer:
      '不是。所有图像呈现都在您自己的浏览器虚拟内存 (Canvas) 中即时生成。这是即时的，不需要通过网络发送数据。',
  },
];

const howToData = [
  {
    name: '设置尺寸',
    text: '直接输入宽度和高度值，或单击预设之一（FHD、HD、Instagram 等）以自动填充。',
  },
  {
    name: '配置颜色和文字',
    text: '使用原生选择器选择背景和文本颜色，或输入十六进制代码。可选地添加自定义文字以替换默认尺寸标签。',
  },
  {
    name: '选择字体和格式',
    text: '选择字体系列和大小。根据需要选择输出格式（WebP、PNG 或 JPEG）。',
  },
  {
    name: '下载图像',
    text: '点击"下载"按钮将生成的占位图直接保存到您的设备。',
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
  inLanguage: 'zh',
};

const ui: PlaceholderGeneratorUI = {
  labelDimensions: '快速尺寸',
  labelWidth: '宽度 (px)',
  labelHeight: '高度 (px)',
  labelBgColor: '背景',
  labelTextColor: '文字',
  labelCustomText: '自定义文字 (可选)',
  placeholderCustomText: '例如：Hero Banner',
  labelFontFamily: '字体',
  labelFontSize: '基础尺寸',
  fontSizeAuto: '自动',
  labelFormat: '输出格式',
  btnDownload: '下载图像',
};

export const content: ToolLocaleContent<PlaceholderGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料和文档',
  bibliography: [
    {
      name: 'MDN Web Docs: HTMLCanvasElement.toDataURL()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL',
    },
    {
      name: 'MDN Web Docs: CanvasRenderingContext2D',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D',
    },
    {
      name: 'W3C: HTML Canvas 2D Context',
      url: 'https://www.w3.org/TR/2dcontext/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '快速效果图的终极工具',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在网站概念化或结构布局（线框图）的早期阶段，我们很少有最终的摄影内容。空的尺寸可能会扭曲产品的整体可视化效果，并隐藏重要的间距或比例错误。占位图生成器立即解决了这个问题，让您能够注入精确尺寸的彩色区域。',
    },
    {
      type: 'tip',
      title: '无摩擦设计',
      html: '在构建 CSS Grid 时，集成 1200x800 像素的空间是必须的。通过下载填充块，您可以避免在临时代码中注入额外的 CSS 或第三方脚本。',
    },
    {
      type: 'title',
      text: '避免外部服务的重要性',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Frontend 生态系统中一个反复出现的做法是将 <code>via.placeholder.com</code> 等服务直接链接到 HTML <code>src</code> 属性中。虽然从理论上讲通过 URL 参数很灵活，但它带来了深层次的副作用，任何细心的开发者都应该竭力避免。',
    },
    {
      type: 'paragraph',
      html: '在开发页面的每个图像标签中插入远程域会增加 DNS 请求、惩罚 Vite、Gulp 或 Webpack 的热重载系统，并意外暴露最终进入云的分支中的痕迹。通过使用此工具并以您首选的格式（WebP、PNG 或 JPEG）生成图像，您可以在 localhost 模式下完全集中您的原型。',
    },
    {
      type: 'title',
      text: '生成器算法的主要功能',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>像素完美分辨率：</strong> 原生 HTML5 Canvas 确保导出的画布在算术上与用户指定的坐标相对应。',
        '<strong>排版自动缩放：</strong> 在自动模式下，字体大小计算周长面积和字符数，以优雅地适配文本而不会导致不需要的 <em>溢出</em>。',
        '<strong>十六进制融合：</strong> 原生 HTML 生态系统选择器与类型化输入之间的双向状态控制，确保由您的 Figma 或 Penpot UI/UX 调色板指定的精确对比度。',
      ],
    },
    {
      type: 'title',
      text: '技术线框设计的隐秘艺术',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '没有单一的单体项目或微前端不经过基础阶段，尤其是在面对要求苛刻的客户或铁血 Product Manager 时。在不拖累最终 <em>资产</em> 开销的情况下促进敏捷图形迭代，将快速开发者与卡住的开发者区分开来。该生成器直接利用您本地机器上的现代 JavaScript <code>toDataURL()</code> API，在没有可疑的中间处理的情况下提供工业级结果。',
    },
  ],
};

