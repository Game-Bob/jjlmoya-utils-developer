import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonFormatterUI } from '../ui';

const slug = 'json-formatter';
const title = '免费在线 JSON 格式化与校验工具';
const description =
  '免费在线工具，用于格式化、校验和修复 JSON 代码。美化并排版 JSON。自动检测语法错误并提高代码可读性。';

const faqData = [
  {
    question: '使用此格式化工具时，我的数据安全吗？',
    answer:
      '绝对安全。所有处理均 100% 在您的浏览器中完成（客户端处理）。您的 JSON 数据永远不会被发送到任何服务器，确保您的数据结构完全私密。',
  },
  {
    question: '导致“Invalid JSON”错误的原因是什么？',
    answer:
      '通常是由于对象末尾多余的逗号、键（key）缺少双引号或存在不可见字符引起的。我们的工具会高亮显示错误的具体行号，方便您进行修复。',
  },
  {
    question: '它能修复错误的 JSON 吗？',
    answer:
      '我们的工具会自动尝试修正常见错误，例如不必要的末尾逗号或格式错误的转义字符，使 JSON 符合 RFC 8259 标准并变为有效格式。',
  },
  {
    question: '它支持非常大的 JSON 文件吗？',
    answer:
      '支持。其处理引擎经过优化，能够处理复杂的数据结构和大型文件，而不会导致浏览器界面卡顿。',
  },
];

const howToData = [
  {
    name: '粘贴代码',
    text: '将未格式化或已压缩的 JSON 粘贴到主文本区域内。',
  },
  {
    name: '校验与格式化',
    text: '系统将自动分析代码，高亮显示语法错误，并应用缩进以提高可读性。',
  },
  {
    name: '选择样式',
    text: '根据您需要可读性还是节省空间，在展开（美化）或压缩（最小化）格式之间进行选择。',
  },
  {
    name: '复制结果',
    text: '点击复制按钮，将完美校验后的 JSON 获取到剪贴板中。',
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

const ui: JsonFormatterUI = {
  labelInput: '输入 (JSON)',
  labelOutput: '输出',
  btnMinify: '压缩',
  btnBeautify: '美化',
  btnFix: '尝试修复',
  btnCopy: '复制',
  statusWaiting: '等待输入...',
  statusValid: '有效的 JSON',
  statusInvalid: '无效的 JSON',
  toastCopied: '已复制！',
  toastFixed: 'JSON 已修复（预览）',
  toastFixFailed: '无法自动修复',
  placeholder: '在此粘贴您的 JSON...',
};

export const content: ToolLocaleContent<JsonFormatterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料与标准',
  bibliography: [
    {
      name: 'RFC 8259 – The JavaScript Object Notation (JSON) Data Interchange Format (IETF)',
      url: 'https://datatracker.ietf.org/doc/html/rfc8259',
    },
    {
      name: 'ECMA-404 – The JSON Data Interchange Syntax (Ecma International)',
      url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-404/',
    },
    {
      name: 'JSON.org – JSON 介绍',
      url: 'https://www.json.org/json-en.html',
    },
    {
      name: 'MDN Web Docs – JSON',
      url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'JSON 校验与格式化',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'JSON (JavaScript Object Notation) 是 Web 数据交换的事实标准。然而，其严谨的语法使得在手动编辑时容易出现人为错误。',
    },
    {
      type: 'paragraph',
      html: '此工具允许您验证结构、对代码进行格式化以提高可读性，并自动修复常见的语法错误。',
    },
    { type: 'grid', columns: 2 },
    {
      type: 'card',
      title: '它能修复的常见错误',
      html: '<ul><li><strong>单引号：</strong> JSON 标准要求使用双引号。该工具会将 <code>\'key\': \'value\'</code> 转换为 <code>"key": "value"</code>。</li><li><strong>未加引号的键：</strong> 检测 JavaScript 风格的对象键并添加必要的引号。</li><li><strong>末尾逗号：</strong> 移除对象或数组末尾会破坏严格解析器的逗号（trailing commas）。</li></ul>',
    },
    {
      type: 'card',
      title: '功能特性',
      html: '<ul><li><strong>语法高亮：</strong> 对键、字符串、数字和布尔值进行着色，以便快速阅读。</li><li><strong>实时校验：</strong> 立即指示 JSON 是否有效，或显示特定的解析错误。</li><li><strong>完全隐私：</strong> 所有处理均在您的浏览器中完成。数据不会被发送到外部服务器。</li></ul>',
    },
  ],
};

