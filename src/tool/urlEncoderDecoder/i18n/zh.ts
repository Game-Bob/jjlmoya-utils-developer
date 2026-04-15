import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlEncoderDecoderUI } from '../ui';

const slug = 'url-encoder-decoder';
const title = '在线 URL 编码器和解码器';
const description =
  '将任何链接中的特殊字符转换为安全格式（百分比编码），或立即在本地将其恢复为原始的可读状态。';

const faqData = [
  {
    question: 'URL 中哪些字符会被编码？',
    answer:
      '所有 URL 的 ASCII 标准中不允许的字符都会被编码：空格、带重音符号的字母、符号（如 &、=、+、#、?、/ 等）等。例如，空格变为 %20，ñ 变为 %C3%B1。',
  },
  {
    question: 'encodeURI 和 encodeURIComponent 之间有什么区别？',
    answer:
      'encodeURI 对整个 URL 进行编码，并保留保留字符（如 / 和 ?）不变。encodeURIComponent 编码包括保留字符在内的所有特殊字符，因此非常适合编码单个查询参数值。',
  },
  {
    question: '为什么我的 URL 中有 %20 而不是空格？',
    answer:
      'HTTP 协议不允许 URL 中出现空格。根据 ASCII 标准，%20 是空格的百分比编码表示形式。有些系统使用 + 号作为替代方案，但 %20 是最通用且安全的。',
  },
  {
    question: '在私有 URL 上使用此工具安全吗？',
    answer:
      '是的，非常安全。所有处理都在您的浏览器中使用原生 JavaScript（encodeURIComponent/decodeURIComponent）完成。您的任何 URL 或参数都不会发送到任何外部服务器。',
  },
];

const howToData = [
  {
    name: '粘贴原始文本',
    text: '在上方“原始文本（可读）”字段中输入或粘贴您的 URL 或文本字符串。',
  },
  {
    name: '编码或解码',
    text: '点击“URL 编码”将文本转换为安全的百分比编码格式，或点击“解码”将已编码的 URL 恢复为可读形式。',
  },
  {
    name: '复制结果',
    text: '使用对应字段的“复制”按钮将结果保存到剪贴板。',
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

const ui: UrlEncoderDecoderUI = {
  labelRaw: '原始文本 (可读)',
  labelEncoded: '格式化 URL (已编码)',
  btnClear: '清除',
  btnCopy: '复制',
  btnCopied: '已复制！',
  btnEncode: 'URL 编码',
  btnDecode: '解码',
  placeholderRaw: 'https://example.com/search?q=红色高跟鞋&size=38',
  placeholderEncoded: 'https%3A%2F%2Fexample.com%2Fsearch%3Fq%3D%E7%BA%A2%E8%89%B2%E9%AB%98%E8%B7%9F%E9%9E%8B%26size%3D38',
};

export const content: ToolLocaleContent<UrlEncoderDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料与文档',
  bibliography: [
    {
      name: 'MDN Web Docs: encodeURIComponent()',
      url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent',
    },
    {
      name: 'IETF RFC 3986: URI Generic Syntax',
      url: 'https://datatracker.ietf.org/doc/html/rfc3986',
    },
    {
      name: 'W3C: URL Living Standard',
      url: 'https://url.spec.whatwg.org/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '什么是 URL 编码？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在浏览互联网或向服务器发送请求时，人们通常将 URL（统一资源定位符）简单地视为“网址”。然而，互联网协议规定 URL 只能使用非常有限的 <strong>标准 ASCII</strong> 字符集进行传输。',
    },
    {
      type: 'paragraph',
      html: '如果 URL 包含空格、带重音符号的字母或特殊参数（如加号 <code>+</code> 或等号 <code>=</code>）会发生什么？为了防止系统在尝试读取非法字符时崩溃，必须使用<strong>百分比编码</strong>将其转换为安全的兼容形式。',
    },
    {
      type: 'title',
      text: '百分比编码的工作原理',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '当您使用此工具时，算法会将任何“不安全”的字符（如空格或 ñ 等带重音符号的字母）替换为百分号 <code>%</code>，后跟与其在 UTF-8 标准中的值相对应的两个十六进制数字。',
    },
    {
      type: 'list',
      items: [
        '<strong>基本示例：</strong> 一个简单的空格将被其安全对应项 <code>%20</code> 替换。',
        '<strong>扩展支持：</strong> 字母 <code>啊</code> 变为 <code>%E5%95%8A</code>。',
      ],
    },
    {
      type: 'title',
      text: '在 API 和 GET 请求中的重要性',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '在开发集成时，一个典型的错误是将原始字符串传递给 URL 参数。如果您将 <code>shirt&blue</code> 直接插入到后端（<code>/search?q=shirt&blue</code>），服务器会将 <code>blue</code> 解释为一个新参数，从而破坏所有逻辑。',
    },
    {
      type: 'paragraph',
      html: '此工具通过在本地浏览器中 100% 执行，保证了计算的纯净和自动。您的任何 URL 字符串都不会传输到第三方服务器，从而确保了令牌和分析参数的隐私。',
    },
  ],
};

