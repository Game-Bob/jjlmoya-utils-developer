import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GeneradorSecurityTxtUI } from '../ui';

const slug = 'security-txt-generator-rfc-9116';
const title = 'Security.txt生成器 RFC 9116';
const description = '创建专业的security.txt文件，方便漏洞报告并遵守国际网络安全标准。';

const faqData = [
  {
    question: '什么是security.txt文件?',
    answer: '这是一个标准(RFC 9116)，允许网站定义安全研究人员应该如何联系他们来负责任地报告漏洞。',
  },
  {
    question: 'security.txt文件应该放在哪里?',
    answer: '建议的标准位置是您域的/.well-known/文件夹中，得到的URL为https://example.com/.well-known/security.txt。',
  },
  {
    question: '为什么过期日期是强制性的?',
    answer: '为了确保联系信息不会过期。如果文件没有有效的过期日期，研究人员可能不相信通信渠道保持活跃。',
  },
  {
    question: 'security.txt中需要哪些字段?',
    answer: '根据RFC 9116，必需字段是"Contact"(带电子邮件地址或URL)和"Expires"(带ISO 8601格式的未来日期)。',
  },
];

const howToData = [
  { name: '填写字段', text: '完成您的电子邮件地址或联系URL并选择过期日期。' },
  { name: '添加可选字段', text: '包括其他信息，如您的PGP密钥、安全政策或招聘信息栏。' },
  { name: '下载或复制文件', text: '点击"下载.txt"或复制内容并另存为security.txt。' },
  { name: '上传到服务器', text: '将文件放在您域的/.well-known/文件夹中。' },
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

const ui: GeneradorSecurityTxtUI = {
  titleBasicFields: '必填字段',
  labelContact: '联系人(电子邮件或URL)',
  placeholderContact: 'mailto:security@example.com或https://example.com/contact',
  contactTip: '应该发送漏洞报告的地址。',
  labelExpires: '过期日期',
  expiresTip: '不应超过未来一年。',
  titleOptionalFields: '可选字段',
  labelEncryption: '公钥',
  placeholderEncryption: 'https://example.com/pgp-key.txt',
  encryptionTip: '指向您的PGP密钥以获取加密报告的链接。',
  labelPolicy: '安全政策',
  placeholderPolicy: 'https://example.com/security/policy/',
  policyTip: '详细说明您如何处理漏洞的页面。',
  labelAcknowledgments: '鸣谢',
  placeholderAcknowledgments: 'https://example.com/security/hall-of-fame/',
  acknowledgmentsTip: '感谢安全研究人员的页面。',
  labelHiring: '招聘公告栏',
  placeholderHiring: 'https://example.com/jobs',
  hiringTip: '网络安全职位空缺的链接。',
  resultTitle: '预览(security.txt)',
  btnCopy: '复制代码',
  btnDownload: '下载.txt',
  copiedMessage: '已复制',
  generatingMessage: '生成security.txt文件中...',
  comment: '已生成',
};

export const content: ToolLocaleContent<GeneradorSecurityTxtUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '有关Security.txt的技术资源',
  bibliography: [
    { name: 'RFC 9116: A File Format to Aid in Security Vulnerability Disclosure', url: 'https://datatracker.ietf.org/doc/html/rfc9116' },
    { name: 'Security.txt Official Website', url: 'https://securitytxt.org/' },
    { name: 'OWASP: Vulnerability Disclosure Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '什么是Security.txt文件，为什么您需要生成一个?', level: 2 },
    {
      type: 'paragraph',
      html: '在当今网络安全环境中，透明度和沟通至关重要。如果您是系统管理员、Web开发人员或数字业务所有者，您可能已经熟悉帮助机器理解您网站的文本文件，例如<code>robots.txt</code>或<code>ads.txt</code>。但是，存在一个鲜为人知但对平台完整性至关重要的标准：<strong>Security.txt</strong>，由<strong>RFC 9116</strong>定义。',
    },
    {
      type: 'paragraph',
      html: '<strong>生成security.txt文件的</strong>目的是为安全研究人员提供一种标准化的方式来联系您的网站管理员，当他们发现漏洞时。没有此文件，发现您系统中缺陷的道德黑客可能不知道应该向谁报告，这通常导致信息丢失、未经通知而发布或被恶意行为者利用。',
    },
    { type: 'title', text: '如何按照RFC 9116创建和安装Security.txt文件', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>安全研究人员联系标准</strong>规定此文件必须位于服务器上的特定位置：<code>/.well-known/</code>文件夹。因此，最终路径通常是<code>https://yourdomain.com/.well-known/security.txt</code>。尽管允许将其放在根目录中(<code>/security.txt</code>)，但第一个选项是自动扫描工具的首选。',
    },
    { type: 'title', text: '您不能错过的必填字段', level: 3 },
    {
      type: 'paragraph',
      html: '当<strong>获取security.txt代码时</strong>，您必须确保其中包含至少两个关键元素:',
    },
    {
      type: 'list',
      items: [
        '<strong>Contact:</strong> 应发送报告的电子邮件地址或表单URL。必须以<code>mailto:</code>或<code>https://</code>开头。',
        '<strong>Expires:</strong> ISO 8601格式的日期，指示文件中的信息何时不再有效。建议不要将日期设置为超过未来一年。',
      ],
    },
    { type: 'code', text: 'Contact: mailto:security@yourcompany.com\nExpires: 2025-12-31T23:59:59.000Z' },
    { type: 'title', text: '高级安全的可选字段', level: 3 },
    {
      type: 'paragraph',
      html: '对于寻求更强大<strong>网站保护</strong>的网站，该标准提供了其他字段:',
    },
    {
      type: 'list',
      items: [
        '<strong>Encryption:</strong> 指向您的PGP公钥的链接，以便研究人员可以向您发送加密和安全信息。',
        '<strong>Policy:</strong> 指向您的安全政策页面的链接，您可以在其中解释负责任的披露流程。',
        '<strong>Acknowledgments:</strong> 指向您的"名人堂"或感谢墙的链接，用于研究人员。',
        '<strong>Hiring:</strong> 指向您网络安全工作机会的链接。',
      ],
    },
    { type: 'title', text: '使用我们的免费Security.txt生成器的优势', level: 2 },
    {
      type: 'paragraph',
      html: '许多人想知道<strong>如何快速获得网站的安全联系方式</strong>。通过使用我们的工具，您可以严格遵守RFC 9116格式，而无需阅读复杂的技术文档。',
    },
    {
      type: 'paragraph',
      html: '使用生成器可以避免常见的语法错误。例如，忘记<code>mailto:</code>前缀或不正确地格式化过期日期中的时区可能导致研究人员的自动化工具忽略您的文件。',
    },
    { type: 'title', text: '对SEO和网络声誉的影响', level: 3 },
    {
      type: 'paragraph',
      html: '尽管<code>security.txt</code>文件不是Google中的直接排名因素(如页面速度或HTTPS)，但它确实有间接影响。管理漏洞的网站可以避免在几小时内破坏SEO的噪声hack(欺骗、垃圾邮件注入)。此外，许多企业安全评分平台(如SecurityScorecard或BitSight)向实施此标准的域名颁发额外积分。',
    },
    { type: 'title', text: '结论：为更安全的网络迈出的简单一步', level: 2 },
    {
      type: 'paragraph',
      html: '总之，<strong>下载security.txt</strong>并将其上传到服务器是您今天可以执行的最快速、最有效的安全维护任务之一。您为"好人"提供便利，阻止好奇者，并向世界展示您认真对待用户隐私和数据。',
    },
    {
      type: 'paragraph',
      html: '不要等到安全漏洞再为没有提供此内容而后悔。现在使用我们的<strong>在线security.txt生成器</strong>并保持对数字生态系统的控制。',
    },
  ],
};

