import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgToCssUI } from '../ui';

const slug = 'svg-to-css-converter';
const title = '免费在线 SVG 转 CSS 和 Data URI 转换器';
const description =
  '将您的 SVG 图标和矢量图转换为 CSS 代码（背景或遮罩）或压缩的 Data URI。通过消除外部 HTTP 请求来优化您的网站性能。';

const faqData = [
  {
    question: '使用 Data URI 还是外部 .svg 文件更好？',
    answer:
      '这取决于使用场景。Data URI 消除了 HTTP 请求（非常适合小图标），但会增加 CSS 文件的大小。对于大型或细节丰富的插图，优先选择外部文件。',
  },
  {
    question: '如何更改嵌入 CSS 的 SVG 的颜色？',
    answer:
      '最好的方法是通过“mask-image”。通过将 SVG 定义为遮罩（mask），您可以使用“background-color”动态更改其颜色，甚至在 :hover 状态下也可以。',
  },
  {
    question: '哪些浏览器支持 CSS 遮罩（Masks）？',
    answer:
      '所有现代浏览器（Chrome、Firefox、Safari、Edge）都提供完全支持。对于较旧的浏览器，通常使用 -webkit- 前缀。',
  },
  {
    question: '使用 Data URI 会影响 SEO 吗？',
    answer:
      '是的，有积极影响。通过减少渲染页面所需的请求数量，它可以缩短加载时间 (LCP) 并提高 Core Web Vitals 分数。',
  },
  {
    question: '我可以在 React 或 Tailwind 等框架中使用它吗？',
    answer:
      '当然可以！您可以复制生成的代码并将其用于 .css 文件中，甚至可以作为 Tailwind CSS 中的任意值使用。',
  },
];

const howToData = [
  {
    name: '粘贴 SVG',
    text: '复制 SVG 文件的源代码并将其粘贴到左侧的文本区域中。',
  },
  {
    name: '选择输出类型',
    text: '在背景图像（用于静态背景）、CSS 遮罩（用于具有动态颜色的图标）或仅 Data URI（用于直接使用）之间进行选择。',
  },
  {
    name: '复制结果',
    text: '点击“复制”将生成的 CSS 代码获取到剪贴板中。',
  },
  {
    name: '在项目中使用',
    text: '将代码粘贴到您的样式表或 CSS 组件中。对于遮罩，还需添加 background-color 来定义图标颜色。',
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

const ui: SvgToCssUI = {
  labelPasteTitle: '粘贴 SVG',
  labelInputArea: 'SVG 源代码',
  labelPreviewOriginal: '原始预览',
  labelResultTitle: 'CSS 结果',
  labelPreviewApplied: '应用后的结果',
  tabBackground: '背景图像',
  tabMask: 'CSS 遮罩 / Webkit',
  tabUri: '仅 Data URI',
  btnCopy: '复制',
  btnCopied: '已复制！',
  placeholder: '<svg xmlns="http://www.w3.org/2000/svg" ...',
};

export const content: ToolLocaleContent<SvgToCssUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料与文档',
  bibliography: [
    {
      name: 'CSS-Tricks: 将 SVG 用作背景',
      url: 'https://css-tricks.com/using-svg/',
    },
    {
      name: 'MDN Web Docs: mask-image',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image',
    },
    {
      name: 'MDN Web Docs: background-image',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-image',
    },
    {
      name: 'W3C: CSS Masking Module Level 1',
      url: 'https://www.w3.org/TR/css-masking-1/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '为什么要将 SVG 转换为 CSS Data URI？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在现代 Web 开发中，优化性能和资源加载至关重要。通过 <strong>Data URI</strong> 将图标直接嵌入 CSS 中可以消除不必要的 HTTP 请求，减少延迟并提高可交互时间 (TTI)。',
    },
    {
      type: 'paragraph',
      html: '此工具将 <code>&lt;svg&gt;</code> 矢量代码转换为浏览器可以解释为背景图像或剪切遮罩的编码文本字符串，同时保持矢量图特有的无限扩展性和清晰度。',
    },
    {
      type: 'title',
      text: '主要技术优势',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>零 HTTP 请求：</strong> 通过将图形嵌入到 <code>.css</code> 文件中，浏览器无需下载额外的外部文件。',
        '<strong>通过 CSS 遮罩进行自定义：</strong> 使用 <code>mask-image</code> 技术，您只需使用 <code>background-color</code> 即可更改复杂矢量图标的颜色。',
        '<strong>即时渲染：</strong> 由于关键视觉资源在样式表下载后即可立即使用，您可以避免内容闪烁 (FOUC)。',
      ],
    },
    {
      type: 'title',
      text: 'CSS 遮罩 vs 背景',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '许多开发人员仅仅使用 <code>background-image</code> 来嵌入矢量图，但这有一个限制：您无法从 CSS 动态更改 SVG 颜色。',
    },
    {
      type: 'paragraph',
      html: '我们的工具支持为 <strong>CSS 遮罩</strong>生成代码。通过在生成的 Data URI 中应用 <code>mask-image</code>，图标将充当模板，允许元素的 <code>background-color</code> 定义最终的图标颜色。这是在 Astro、Next.js 或任何现代框架中管理图标的最专业且最灵活的方式。',
    },
  ],
};

