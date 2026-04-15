import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashGeneratorUI } from '../ui';

const slug = 'hash-generator';
const title = '在线安全哈希生成器';
const description = '立即计算 MD5、SHA-1、SHA-256 和 SHA-512 哈希值。为开发者提供的免费、私密且极其快速的安全工具。100% 客户端处理。';

const faqData = [
  {
    question: '什么是哈希，它有什么用途？',
    answer: '哈希是文本或文件的独特数字指纹。它用于验证数据未被篡改，并用于安全地存储密码。',
  },
  {
    question: '使用这个在线生成器安全吗？',
    answer: '是的，非常安全。与其他网站不同，我们直接在您的浏览器中处理哈希。您的数据永远不会被发送到任何服务器。',
  },
  {
    question: '我应该选择哪种哈希算法？',
    answer: '对于现代安全和密钥存储，我们推荐使用 SHA-256 或 SHA-512。MD5 和 SHA-1 仅应在为了兼容旧系统时使用。',
  },
  {
    question: '添加“盐”（Salt）是什么意思？',
    answer: '盐是混入文本中的一段额外字符串，目的是使哈希值变得独一无二，从而使通过字典攻击进行的破解变得更加困难。',
  },
];

const howToData = [
  { name: '输入文本', text: '在此输入框中输入或粘贴您想要计算哈希值的文本。' },
  { name: '配置安全选项', text: '您可以选择添加“盐”或增加处理轮数（拉伸），以增强安全性。' },
  { name: '获取结果', text: '当您输入时，各种哈希（MD5、SHA 等）会实时计算出来。' },
  { name: '复制哈希值', text: '点击每种算法旁边的复制图标，将其保存到剪贴板。' },
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

const ui: HashGeneratorUI = {
  labelInput: '输入文本',
  placeholderInput: '在此输入或粘贴文本以计算其哈希值...',
  labelSalt: '加盐 (可选)',
  placeholderSalt: '安全种子...',
  labelRounds: '处理轮数 (Stretch)',
  copyMd5: '复制 MD5',
  copySha1: '复制 SHA-1',
  copySha256: '复制 SHA-256',
  copySha512: '复制 SHA-512',
};

export const content: ToolLocaleContent<HashGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '哈希相关技术资源',
  bibliography: [
    { name: 'MDN Web Docs: SubtleCrypto.digest() API', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/SubtleCrypto/digest' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'IETF: The MD5 Message-Digest Algorithm (RFC 1321)', url: 'https://datatracker.ietf.org/doc/html/rfc1321' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '什么是加密哈希？', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>加密哈希</strong>是一种数学函数，它将任意量的数据转换为固定长度的字符串。相同的输入总是产生相同的输出，但输入中的任何细微变化都会产生完全不同的哈希值。',
    },
    { type: 'title', text: '可用算法', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>MD5 (128位):</strong> 快速且支持广泛。对于密码安全来说被认为是不安全的，但在非关键环境中用于文件完整性检查很有用。',
        '<strong>SHA-1 (160位):</strong> 自 2017 年起已不建议用于关键安全用途。仍存在于旧系统中。',
        '<strong>SHA-256 (256位):</strong> 大多数应用程序的当前标准。用于比特币、TLS 和代码签名。',
        '<strong>SHA-512 (512位):</strong> SHA-2 的较长变体，在需要最大抗碰撞性时是理想选择。',
      ],
    },
    { type: 'title', text: '盐和密钥拉伸', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>盐（Salt）</strong>是在哈希处理前添加到文本中的随机字符串，确保两个相同的输入产生不同的哈希值。<strong>密钥拉伸</strong>（轮数）会多次应用哈希函数，以增强对暴力破解攻击的抵抗力。',
    },
    { type: 'title', text: '完全隐私：100% 客户端处理', level: 3 },
    {
      type: 'paragraph',
      html: '此工具使用浏览器的 <strong>Web Crypto API</strong> 进行 SHA 计算，并使用纯 TypeScript 实现 MD5。所有处理均在本地完成：您的数据永远不会离开您的设备。',
    },
  ],
};

