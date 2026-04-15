import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssToInlineConverterUI } from '../ui';

const slug = 'css-to-inline-converter';
const title = 'CSS 转为内联 HTML。电子邮件内联处理器';
const description =
  '将样式表和 CSS 类自动转换为 HTML 中的内联样式。非常适合电子报、交易邮件和安全的网页布局。';

const faqData = [
  {
    question: '为什么电子邮件需要内联 CSS 而不是外部样式表？',
    answer:
      '电子邮件客户端（如 Outlook、Gmail 或 Apple Mail）出于安全原因会过滤或忽略 <link> 和 <style> 标签。确保样式在电子邮件中正确应用的唯一方法是直接将其嵌入每个 HTML 元素的 style 属性中。',
  },
  {
    question: '如果元素已经有自己的 style 属性会怎样？',
    answer:
      '该工具尊重现有的内联样式并附加新属性，模拟 CSS 级联行为：后声明的属性在冲突时覆盖前面的属性。',
  },
  {
    question: '它是否适用于 :hover 或媒体查询等复杂选择器？',
    answer:
      '该工具处理 DOMParser 可以解析的类、id、属性和结构伪类选择器。依赖状态的选择器（如 :hover）和媒体查询无法内联化（它们依赖于运行时环境）并被忽略。',
  },
  {
    question: '我的 HTML 和 CSS 是否会发送到任何服务器？',
    answer:
      '不会。所有处理都 100% 在您的浏览器中使用原生 DOMParser API 进行。您的代码不会离开您的设备，确保包含敏感内容的模板具有完全隐私。',
  },
];

const howToData = [
  {
    name: '粘贴原始 HTML',
    text: '在"原始 HTML"字段中写入或粘贴您想要处理的 HTML。可以是片段或完整文档。',
  },
  {
    name: '添加 CSS 规则',
    text: '将要注入的类和 id 粘贴到"CSS 规则"字段中。工具应用它们时会遵循选择器特异性。',
  },
  {
    name: '转换并复制',
    text: '点击"将 CSS 注入 HTML"。具有所有内联样式的结果将显示在下方，随时可以复制并粘贴到您的电子邮件管理器或 CMS 中。',
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

const ui: CssToInlineConverterUI = {
  labelHtml: '原始 HTML',
  labelCss: 'CSS 规则',
  labelOutput: '内联 HTML 结果',
  placeholderHtml: '<div class="my-class">Hello World</div>',
  placeholderCss: '.my-class { color: red; padding: 10px; }',
  placeholderOutput: '您的嵌入样式的 HTML 将显示在此处...',
  btnConvert: '将 CSS 注入 HTML',
  btnCopy: '复制代码',
  btnCopied: '已复制！',
  msgError: '处理错误。请检查您的 HTML 和 CSS 是否有效。',
};

export const content: ToolLocaleContent<CssToInlineConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料和文档',
  bibliography: [
    {
      name: 'Can I email：电子邮件的 HTML 和 CSS 支持矩阵',
      url: 'https://www.caniemail.com/',
    },
    {
      name: 'MDN Web Docs：全局 style 属性',
      url: 'https://developer.mozilla.org/en/docs/Web/HTML/Global_attributes/style',
    },
    {
      name: 'DOMParser API：浏览器中的安全解析',
      url: 'https://developer.mozilla.org/en/docs/Web/API/DOMParser',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'CSS 内联处理器是什么以及为什么需要它？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在开发现代网络应用程序时，我们习惯于分离关注点：HTML 构建结构，外部 CSS 文件提供所有视觉样式。但是，并非所有环境都信任外部样式表或全局 <code>&lt;style&gt;</code> 标签。',
    },
    {
      type: 'paragraph',
      html: '外部 CSS 最流行和最严格的失败用例是<strong>电子邮件模板开发</strong>。在这些环境中，确保字体、颜色或边距正确呈现的唯一可靠方法是直接嵌入标签中：<code>&lt;span style="color: red;"&gt;</code>。',
    },
    {
      type: 'title',
      text: '电子邮件客户端中的 CSS 问题',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '微软 Outlook、Apple Mail 或 Gmail 等电子邮件客户端以其限制性的 CSS 渲染引擎而闻名。大多数过滤或丢弃 <code>&lt;link&gt;</code> 或 <code>&lt;style&gt;</code> 标签，害怕可能破坏阅读界面的代码注入。',
    },
    {
      type: 'tip',
      html: '对于时事通讯或交易电子邮件（收据、账户确认），使用表格和<em>内联 CSS</em> 是电子邮件营销行业的黄金标准。',
    },
    {
      type: 'title',
      text: '此工具如何在您的浏览器中工作',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>安全解析：</strong>使用 <code>DOMParser API</code> 将输入 HTML 临时转换为浏览器内的安全虚拟 DOM。',
        '<strong>级联模拟：</strong>分析您的 CSS 规则，对选择器应用特异性权重，并通过注入代码来改变选定 HTML 元素的 <code>style</code> 属性。',
        '<strong>100% 离线：</strong>您的代码不会离开您的设备。对包含敏感内容的模板提供完全隐私。',
      ],
    },
  ],
};

