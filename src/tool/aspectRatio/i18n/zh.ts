import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AspectRatioUI } from '../ui';

const slug = 'aspect-ratio-calculator';
const title = '像素宽高比计算器。在线比例换算';
const description =
  '计算新的图像、视频和网页设计分辨率，同时保持精确的比例，避免图形失真。支持 16:9、4:3、21:9 和自定义格式。';

const faqData = [
  {
    question: '什么是宽高比（Aspect Ratio）？',
    answer:
      '宽高比描述了图像或屏幕宽度与高度之间的几何关系。它通常用冒号分隔的两个数字表示（如 16:9），显示高度随宽度按比例变化的方式。',
  },
  {
    question: '为什么保持正确比例很重要？',
    answer:
      '忽视宽高比会导致图像被压缩或拉伸、视频中出现意外的黑边（letterboxing），以及网页组件在不同屏幕尺寸下布局错乱。保持正确的比例是专业展示的关键。',
  },
  {
    question: '如何根据给定比例通过宽度计算高度？',
    answer:
      '计算公式为：高度 = 宽度 × (比例高度 / 比例宽度)。例如，宽度为 1280px 且比例为 16:9 时，高度为：1280 × (9/16) = 720px。',
  },
  {
    question: 'YouTube 视频的标准宽高比是多少？',
    answer:
      '16:9 是 YouTube 和大多数现代视频平台的标准比例。它对应于 1280×720 (HD)、1920×1080 (Full HD) 或 3840×2160 (4K UHD) 等分辨率。',
  },
  {
    question: '垂直社交媒体视频使用什么宽高比？',
    answer:
      '9:16，这恰好是宽屏格式的反转。它是 TikTok、Instagram Reels 和 YouTube Shorts 的原生比例，源于用户垂直握持手机观看内容。',
  },
];

const howToData = [
  {
    name: '输入原始比例',
    text: '输入您想要保持的比例的宽度和高度值（例如宽屏输入 16 和 9），或者选择一个预设。',
  },
  {
    name: '调整缩放',
    text: '在“实际缩放”部分更改宽度或高度值。工具将自动计算对应的数值以保持比例。',
  },
  {
    name: '查看预览',
    text: '预览面板以等比例展示结果形状，并附带简化的比例和计算出的分辨率。',
  },
  {
    name: '应用到项目中',
    text: '复制计算出的数值，用于您的 CSS (aspect-ratio: 16 / 9)、视频导出或设计工具的设置中。',
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

const ui: AspectRatioUI = {
  labelConfig: '配置',
  labelRatio: '原始比例',
  labelWidth: '宽度',
  labelHeight: '高度',
  labelScale: '实际缩放',
  labelPixelWidth: '像素（宽）',
  labelPixelHeight: '像素（高）',
  labelPreview: '等比预览',
  labelStatus: '完美比例',
  labelOffline: '100% 离线工具',
};

export const content: ToolLocaleContent<AspectRatioUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料与文档',
  bibliography: [
    {
      name: 'MDN Web Docs: aspect-ratio (CSS)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio',
    },
    {
      name: 'Wikipedia: Aspect ratio',
      url: 'https://zh.wikipedia.org/wiki/宽高比',
    },
    {
      name: 'W3C: CSS Box Sizing Level 4',
      url: 'https://www.w3.org/TR/css-sizing-4/#aspect-ratio',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '什么是宽高比？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在图形设计、摄影和前端开发中，<strong>宽高比</strong>（Aspect Ratio）描述了图像、屏幕或容器宽度与高度之间的几何关系。它通常用冒号分隔的两个数字表示（如 <code>16:9</code>），显示高度如何随宽度成比例增加。',
    },
    {
      type: 'paragraph',
      html: '宽高比处理不当是导致照片被压缩、视频出现意外裁剪（黑边）或网页组件在从手机到超宽显示器等不同设备上显示错乱的常见原因。',
    },
    {
      type: 'title',
      text: '行业常用比例',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '根据您的专业领域，您会经常接触到一些全球标准比例：',
    },
    {
      type: 'list',
      items: [
        '<strong>16:9（宽屏）：</strong> 现代显示器、电视、YouTube 录制或标准高清分辨率（如 1920×1080 或 4K）的绝对主流格式。',
        '<strong>9:16（垂直）：</strong> 源自移动端的原生内容消费（TikTok、Instagram Reels、YouTube Shorts）。与宽屏视频比例完全相同，但设备处于物理旋转状态。',
        '<strong>4:3（经典 / 复古）：</strong> 见于旧电视和显示器，或者某些模拟及专用数字相机。其接近正方形的外观将注意力直接吸引到构图的中心轴上。',
      ],
    },
    {
      type: 'title',
      text: '网页开发与 CSS aspect-ratio 属性',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '以前在 CSS 中，为了避免页面加载时严重的内容偏移（CLS），开发者不得不使用 <strong>Padding Hack</strong>（例如设置 <code>padding-top: 56.25%</code>）等复杂的数学方法来为 YouTube iframe 或封面图预留动态空间。',
    },
    {
      type: 'paragraph',
      html: '如今，所有现代布局都直接应用 <code>aspect-ratio: 16 / 9;</code> 等属性，从而实现语义化代码，并允许浏览器根据 Grid 或 Flexbox 定义的原始宽度自动推导出缺失的维度。',
    },
    {
      type: 'paragraph',
      html: '此本地像素计算器将设计决策权交给即时缩放计算，从而保护您的渲染效果免受灾难性配置错误的影响。',
    },
  ],
};

