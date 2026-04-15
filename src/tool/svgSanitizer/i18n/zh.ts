import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgSanitizerUI } from '../ui';

const slug = 'svg-sanitizer';
const title = '在线SVG清理工具';
const description = '优化和清理从Figma、Adobe Illustrator或Inkscape导出的SVG。删除元数据、不必要的属性和空组，获得生产就绪的SVG。';

const faqData = [
  {
    question: '我可以粘贴包含嵌入SVG的完整HTML页面吗?',
    answer: '可以。清理工具会检测HTML内的SVG元素并仅提取该块进行处理。如果直接粘贴SVG片段也可以工作。',
  },
  {
    question: '它适用于Illustrator SVG吗?',
    answer: '可以。Illustrator导出的SVG包含XML声明、元数据和清理工具会删除的专有命名空间。结果是与所有现代浏览器兼容的SVG。',
  },
  {
    question: '清理和最小化有什么区别?',
    answer: '清理删除不必要的属性和标签，但保持缩进格式以便您可以读取和编辑代码。最小化还会将所有内容折叠成一行，以最大化减少文件大小。',
  },
  {
    question: '删除ID会损坏SVG吗?',
    answer: '仅当SVG中的元素通过ID引用另一个元素时，例如通过fill="url(#gradient)"。在这种情况下，禁用"删除ID"选项。之所以默认禁用，正是为了避免这个问题。',
  },
  {
    question: 'SVG代码会发送到任何服务器吗?',
    answer: '不会。所有处理都在您的浏览器中使用本地DOMParser和XMLSerializer API进行。代码永远不会离开您的设备。',
  },
];

const howToData = [
  { name: '粘贴SVG', text: '将从Figma、Illustrator或Inkscape导出的SVG代码粘贴到文本区域。' },
  { name: '配置选项', text: '根据需要启用或禁用选项：删除ID、移除宽度/高度和最小化。' },
  { name: '清理', text: '点击"清理SVG"来处理代码并获得优化的结果。' },
  { name: '复制或下载', text: '使用复制或下载按钮获得生产就绪的清理SVG。' },
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

const ui: SvgSanitizerUI = {
  labelInput: '在这里粘贴您的脏SVG',
  labelOutput: '清理的SVG',
  optRemoveIds: '删除ID',
  optRemoveWH: '移除宽度/高度',
  optMinify: '最小化',
  btnSanitize: '清理SVG',
  btnCopy: '复制',
  btnCopied: '已复制',
  btnDownload: '下载',
  statOriginal: '原始',
  statCleaned: '已清理',
  statReduction: '缩减',
  statElems: '已删除元素',
  statAttrs: '已删除属性',
  errorPaste: '清理前粘贴SVG。',
  errorProcess: 'SVG处理出错。',
};

export const content: ToolLocaleContent<SvgSanitizerUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料',
  bibliography: [
    { name: 'SVG Specification — W3C', url: 'https://www.w3.org/TR/SVG2/' },
    { name: 'Figma SVG Export — Official Documentation', url: 'https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma' },
    { name: 'SVGO — SVG Optimizer (open source reference)', url: 'https://github.com/svg/svgo' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '来自Figma和Illustrator的干净代码SVG清理工具', level: 2 },
    {
      type: 'paragraph',
      html: '粘贴从<strong>Figma</strong>、Adobe Illustrator或浏览器检查器导出的任何SVG，获得清洁、优化的矢量文件，准备投入生产。',
    },
    { type: 'title', text: '为什么导出的SVG这么脏?', level: 3 },
    {
      type: 'paragraph',
      html: '当您从Figma导出SVG时，您会获得一个充满仅在应用内有意义的属性的文件：<code>data-name</code>、<code>xml:space</code>、对内部图层的引用和设计元数据。结果是比必要的大40-70%的SVG。',
    },
    { type: 'title', text: '清理工具删除的内容', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>编辑器元数据：</strong> Figma和Illustrator自动添加的<code>metadata</code>、<code>title</code>和<code>desc</code>标签。',
        '<strong>Inkscape命名空间：</strong> 所有带有<code>inkscape:</code>和<code>sodipodi:</code>前缀的元素。',
        '<strong>不必要的属性：</strong> <code>xml:space</code>、<code>version</code>、多余的<code>xmlns:*</code>和Figma <code>data-*</code>属性。',
        '<strong>空组：</strong> 从删除的图层中遗留的无内容<code>&lt;g&gt;</code>元素。',
        '<strong>XML声明：</strong> 在HTML中嵌入SVG时不必要的<code>&lt;?xml version="1.0"?&gt;</code>声明和DOCTYPE。',
      ],
    },
  ],
};

