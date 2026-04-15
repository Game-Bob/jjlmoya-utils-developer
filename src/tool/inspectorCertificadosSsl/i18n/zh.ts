import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InspectorCertificadosSslUI } from '../ui';

const slug = 'ssl-tls-certificate-inspector';
const title = '在线SSL/TLS证书检查器 查看PEM和CRT文件';
const description = '在线分析SSL证书文件(.pem、.crt、.der)。检查到期日期、颁发者、主体和SHA-256指纹，无需您的数据离开浏览器。';

const faqData = [
  {
    question: '在此网站上分析我的SSL证书是否安全?',
    answer: '绝对安全。此实用程序100%在客户端运行。当您拖动.pem或.crt文件时，浏览器在本地读取数据，永远不会将其发送到任何服务器。完全的隐私。',
  },
  {
    question: '支持哪些证书格式?',
    answer: '该工具支持最常见的格式：PEM(带有"BEGIN CERTIFICATE"标头的Base64编码)和DER(二进制格式)，通常具有.pem、.crt、.cer或.der扩展名。',
  },
  {
    question: '我能看到.crt文件的有效期吗?',
    answer: '是的，加载文件时，您将立即看到"有效性状态"部分，其中显示确切的到期日期以及证书在今天是否仍然有效。',
  },
  {
    question: '证书颁发者做什么?',
    answer: '颁发者(Issuer)表示哪个证书颁发机构(CA)验证了网站的身份。了解商业浏览器是否会识别证书很重要。',
  },
  {
    question: 'SHA-256指纹是如何计算的?',
    answer: '通过直接对证书的二进制内容应用哈希算法来计算。它们用于验证文件未被篡改并与服务器期望的相匹配。',
  },
];

const howToData = [
  { name: '查找您的文件', text: '在您的计算机上找到具有.pem、.crt、.cer或.der扩展名的文件。' },
  { name: '拖放', text: '只需将文件拖到上面的虚线区域。' },
  { name: '查看结果', text: '您将立即看到谁发布了证书、为谁发布、何时过期以及其指纹。' },
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

const ui: InspectorCertificadosSslUI = {
  labelAnalyzeCertificate: '分析证书',
  dragDropText: '在此处拖动您的.pem、.crt或.cer文件',
  dragDropSubtext: '(在浏览器中进行100%本地处理)',
  cardStatusTitle: '有效性状态',
  cardSubjectTitle: '主体(所有者)',
  cardIssuerTitle: '颁发者(CA)',
  cardFingerprintsTitle: '指纹',
  cardTechnicalTitle: '技术细节',
  labelValidityStatus: '状态:',
  labelExpiryDate: '到期日期',
  labelIssueDate: '发布日期',
  labelSha256: 'SHA-256指纹',
  labelSha1: 'SHA-1指纹',
  labelSignatureAlgorithm: '签名算法',
  labelVersion: 'X.509版本',
  labelSerialNumber: '序列号',
  labelCommonName: '通用名',
  labelOrganization: '组织',
  labelOrgUnit: '组织单位',
  labelLocality: '地区',
  labelState: '州/省',
  labelCountry: '国家',
  labelEmail: '电子邮件',
  statusValid: '有效',
  statusExpired: '已过期',
  errorMessageInvalid: '无效文件。',
  supportedFormats: '.pem、.crt、.cer、.der',
};

export const content: ToolLocaleContent<InspectorCertificadosSslUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '有关SSL/TLS证书的技术资源',
  bibliography: [
    { name: 'RFC 5280: Internet X.509 Public Key Infrastructure Certificate and CRL Profile', url: 'https://datatracker.ietf.org/doc/html/rfc5280' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'Mozilla: SSL/TLS Encryption Overview', url: 'https://developer.mozilla.org/en-US/docs/Glossary/TLS' },
    { name: 'OpenSSL: X.509 Certificate Format Documentation', url: 'https://www.openssl.org/docs/man1.1.1/man1/x509.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '什么是SSL/TLS证书检查器，为什么需要它?', level: 2 },
    {
      type: 'paragraph',
      html: '在网络开发和网络安全领域，<strong>SSL(安全套接字层)和TLS(传输层安全)证书</strong>是信任的基础。数字证书只是将加密密钥链接到组织或域数据的文件。但是，这些文件通常采用二进制格式(.der)或Base64编码(.pem、.crt)，乍一看不可读。',
    },
    {
      type: 'paragraph',
      html: '我们的<strong>SSL/TLS证书检查器</strong>使您能够以视觉上安全的方式"打开"这些文件。与查询公共域的工具(如著名的SSL Labs测试)不同，此实用程序直接与您设备上的文件一起使用。当您配置Nginx、Apache服务器或将证书加载到AWS或Google Cloud Load Balancer中，并且需要验证手中的文件在上载前是正确的时，这至关重要。',
    },
    { type: 'title', text: '如何逐步检查.pem或.crt文件', level: 2 },
    {
      type: 'paragraph',
      html: '使用我们的工具分析证书非常简单，不需要任何控制台(OpenSSL)知识。请按照以下步骤操作:',
    },
    {
      type: 'list',
      items: [
        '<strong>查找您的文件:</strong> 在您的计算机上找到具有.pem、.crt、.cer或.der扩展名的文件。',
        '<strong>拖放:</strong> 只需将文件拖到上面的虚线区域。',
        '<strong>查看结果:</strong> 您将立即看到谁发布了证书、为谁发布、何时过期以及其指纹。',
      ],
    },
    {
      type: 'tip',
      title: '完全隐私',
      html: '此过程最重要的部分是<strong>隐私</strong>。该文件永远不会上传到我们的服务器。证书ASN.1结构的所有解析都在您浏览器的RAM中进行。完全保护您的公钥。',
    },
    { type: 'title', text: '分析证书时会看到的关键字段', level: 2 },
    {
      type: 'paragraph',
      html: '分析证书时，我们会分解最相关的技术信息，以便您一目了然:',
    },
    {
      type: 'list',
      items: [
        '<strong>主体:</strong> 显示所有者的数据，包括通用名(CN)、组织和位置。',
        '<strong>颁发者:</strong> 标识签署证书的证书颁发机构(CA)(例如Let\'s Encrypt、DigiCert)。',
        '<strong>有效期:</strong> 显示确切的发布日期和关键的到期日期。',
        '<strong>指纹:</strong> SHA-256和SHA-1指纹用于验证文件的完整性。',
      ],
    },
    { type: 'title', text: '支持的格式: PEM、CRT、CER和DER', level: 2 },
    {
      type: 'paragraph',
      html: '有多种证书文件格式，有时会令人困惑。我们的工具与最常见的兼容:',
    },
    {
      type: 'list',
      items: [
        '<strong>PEM(.pem、.crt、.cer):</strong> Linux和网络服务器中最常见的格式。以行<code>-----BEGIN CERTIFICATE-----</code>开头。',
        '<strong>DER(.der、.cer):</strong> 二进制格式。在Windows环境(Java、Active Directory)中被广泛使用，通常在没有专门工具的情况下更难阅读。',
      ],
    },
    {
      type: 'paragraph',
      html: '即使您的文件具有不寻常的扩展名，如果内部结构是标准X.509证书，我们的<strong>node-forge</strong>驱动的引擎也能够轻松解释它。',
    },
    { type: 'title', text: '为什么使用这个工具而不是OpenSSL?', level: 2 },
    {
      type: 'paragraph',
      html: 'OpenSSL是加密的瑞士军刀，但其命令很难记住。要从控制台查看证书，您必须编写:',
    },
    { type: 'code', text: 'openssl x509 -in certificado.crt -text -noout' },
    {
      type: 'paragraph',
      html: '我们的工具为日常工作流程提供明确的优势:',
    },
    {
      type: 'list',
      items: [
        '<strong>速度:</strong> 无需打开终端或记住复杂的标志。',
        '<strong>视觉:</strong> 我们格式化字段名称(Locality、Organization)以便阅读，而不是"L"或"O"之类的短代码。',
        '<strong>有效性警报:</strong> 我们自动计算证书在今天是否有效，从而省去您手动检查当前日期与证书日期的麻烦。',
        '<strong>跨平台:</strong> 适用于具有现代浏览器的任何操作系统，无需安装任何依赖项。',
      ],
    },
    { type: 'title', text: '安全和隐私: 您的证书永远不会离开RAM', level: 2 },
    {
      type: 'paragraph',
      html: '作为开发人员，我知道处理此类信息是多么关键。虽然证书在技术上是<strong>公开信息</strong>(发送到访问您网站的任何浏览器)，但仍然不应不必要地将文件上传到外部服务器。',
    },
    {
      type: 'paragraph',
      html: '此实用程序使用在客户端严格运行的JavaScript。拖动文件时，我们读取其内容并在本地处理。您可以通过断开互联网连接来验证这一点:该工具将以完全相同的方式继续工作。',
    },
    { type: 'title', text: 'SSL检查器的常见用例', level: 2 },
    {
      type: 'paragraph',
      html: '何时将此页面加入书签会很有用?',
    },
    {
      type: 'list',
      items: [
        '<strong>服务器调试:</strong> 当您安装证书且网站继续出现错误时，用于验证您是否未意外加载旧证书。',
        '<strong>链验证:</strong> 查看文件是包含最终证书还是中间证书。',
        '<strong>资产审计:</strong> 检查在旧项目中使用了哪个证书颁发机构。',
        '<strong>复制完整性:</strong> 在服务器之间移动证书时，通过比较其SHA-256指纹来确保文件未损坏。',
      ],
    },
  ],
};

