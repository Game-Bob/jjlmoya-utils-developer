import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConversorExcelCsvHtmlUI } from '../ui';

const slug = 'excel-csv-html-table-converter';
const title = 'Excel 和 CSV 转 HTML 表格转换器代码生成器';
const description = '立即将您的 Excel 或 CSV 数据转换为干净、语义化的 HTML 表格。面向开发者和内容创作者的免费工具。';

const faqData = [
  {
    question: '如何将 Excel 文件 (.xlsx) 转换为 HTML？',
    answer: '首先，在 Excel 中打开文件并将其另存为 CSV（逗号分隔）。然后，将该 CSV 文件上传到我们的工具或粘贴其内容以获取 HTML 表格代码。',
  },
  {
    question: '生成的代码包含 CSS 样式吗？',
    answer: '生成器生成干净的 HTML，并带有用于边框和斑马纹的可选类。最终的视觉样式取决于您网站自身的 CSS，从而确保完美的集成。',
  },
  {
    question: '我可以上传非常大的 CSV 文件吗？',
    answer: '可以，我们的工具在您的浏览器中本地处理数据。这意味着它非常快速且安全，因为您的数据永远不会在互联网上传输。',
  },
  {
    question: '它与 Google 表格兼容吗？',
    answer: '绝对兼容。在 Google 表格中，转到“文件”>“下载”>“逗号分隔值 (.csv)”，然后将该文件用于我们的工具。',
  },
];

const howToData = [
  {
    name: '准备数据',
    text: '准备好您的 Excel 或 CSV 文件。确保数据干净。',
  },
  {
    name: '加载数据',
    text: '在输入区域粘贴 CSV 文本或将文件直接拖到转换器中。',
  },
  {
    name: '配置表格',
    text: '选择是否将第一行用作表头以及是否需要基本样式。',
  },
  {
    name: '复制代码',
    text: '切换到“HTML 代码”选项卡并复制结果以粘贴到您的网站上。',
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
  step: howToData.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  inLanguage: 'zh',
};

const ui: ConversorExcelCsvHtmlUI = {
  csvInputLabel: '在此处粘贴您的 CSV',
  csvInputPlaceholder: '姓名,年龄,城市\n张三,25,北京\n李四,30,上海',
  uploadLabel: '或上传您的文件 (CSV)',
  dragDropLabel: '将文件拖放到此处',
  headerCheckboxLabel: '将第一行用作表头',
  bordersCheckboxLabel: '添加边框',
  stripeCheckboxLabel: '斑马纹',
  previewTabLabel: '预览',
  codeTabLabel: 'HTML 代码',
  emptyStateLabel: '输入数据以查看表格',
  copyButtonLabel: '复制代码',
  copiedLabel: '已复制！',
};

export const content: ToolLocaleContent<ConversorExcelCsvHtmlUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '关于 HTML 表格和数据格式的资源',
  bibliography: [
    { name: 'W3C: HTML 表格', url: 'https://www.w3.org/WAI/tutorials/tables/' },
    { name: 'MDN: HTML table 元素', url: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/table' },
    { name: 'RFC 4180: CSV 格式', url: 'https://tools.ietf.org/html/rfc4180' },
    { name: 'Google 表格：下载您的数据', url: 'https://support.google.com/docs/answer/183965' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '轻松将 Excel 和 CSV 转换为 HTML 表格', level: 2 },
    {
      type: 'paragraph',
      html: '在现代网页开发中，展示表格数据是传达结构化信息最有效的方式之一。然而，手动将 <strong>Excel</strong> 电子表格或 <strong>CSV</strong> 文件中的数据转换为 HTML <code>&lt;table&gt;</code>、<code>&lt;tr&gt;</code> 和 <code>&lt;td&gt;</code> 标签既乏味又容易出错。',
    },
    { type: 'title', text: '为什么要使用语义化的 HTML 表格？', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>无障碍性：</strong>屏幕阅读器可以解释结构并帮助视觉障碍用户。',
        '<strong>SEO：</strong>搜索引擎会索引单元格内容，提高数据的排名。',
        '<strong>响应性：</strong>通过一些 CSS，HTML 表格可以适应移动设备。',
        '<strong>可维护性：</strong>在 HTML 中编辑数据比重新生成整个图像要容易得多。',
      ],
    },
    { type: 'title', text: 'Excel 转 HTML 转换器的工作原理', level: 3 },
    {
      type: 'paragraph',
      html: '我们的工具使用原生的文本解析器处理逗号分隔文件 (CSV)。大多数电子表格程序，包括 Microsoft Excel、Google 表格和 LibreOffice Calc，都允许您将数据导出为 CSV 格式。',
    },
  ],
};

