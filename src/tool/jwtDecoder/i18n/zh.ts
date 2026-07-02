import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JwtDecoderUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'jwt-decoder-parser-and-claims-inspector';
const title = 'JWT Decoder, Parser and Claims Inspector';
const description = '粘贴 JSON Web Token，即时解码其头部和载荷，检查注册声明，发现过期令牌，并复制干净的 JSON 以调试认证流程。';

const howTo = [
  {
    name: '粘贴 JWT',
    text: '从 Authorization 头、Cookie、日志条目或身份提供商复制令牌，并将其粘贴到输入字段中。',
  },
  {
    name: '读取解码后的头部和载荷',
    text: '该工具将令牌拆分为头部、载荷和签名，然后在单独的面板中渲染 JSON 段以供快速检查。',
  },
  {
    name: '检查重要声明',
    text: '查看算法、签发者、受众、主题、签发时间、生效时间和过期时间，无需手动转换 Unix 时间戳。',
  },
  {
    name: '复制所需数据',
    text: '当需要与团队共享经过清理的调试快照时，复制一个解码后的部分或完整的解码输出。',
  },
];

const faq = [
  {
    question: '解码 JWT 是否能证明令牌有效？',
    answer: '不能。解码仅揭示经过 base64url 编码的头部和载荷。只有在应用程序或身份提供商验证了签名、签发者、受众、过期时间和相关声明后，令牌才是可信的。',
  },
  {
    question: '我可以将此 JWT 解码器用于访问令牌和 ID 令牌吗？',
    answer: '可以。只要使用标准的三部分 JWT 格式，该解码器可用于检查 OAuth 访问令牌、OpenID Connect ID 令牌、会话令牌和服务间令牌。',
  },
  {
    question: '为什么签名面板不验证令牌？',
    answer: 'JWT 验证需要正确的密钥、公钥或 JWKS 配置。该工具有意专注于解码和检查，以便开发人员可以查看令牌内容，而不会假装可见的签名字符串就是有效性的证明。',
  },
  {
    question: '调试 JWT 时应首先检查什么？',
    answer: '从 exp、nbf、iss、aud 和 alg 开始。大多数实际生产问题源于过期令牌、时钟偏差、错误的受众值、意外的签发者 URL 或不安全的算法假设。',
  },
];

const ui: JwtDecoderUI = {
  tokenLabel: 'JWT 令牌',
  tokenPlaceholder: '在此粘贴 JWT: header.payload.signature',
  sampleButton: '加载示例',
  clearButton: '清除',
  statusWaiting: '粘贴令牌以解码其 JSON 头部、载荷和声明。',
  statusValid: 'JWT 解码成功。',
  statusInvalid: '这看起来不像是有效的三部分 JWT。',
  statusExpired: 'JWT 已解码，但 exp 声明已过期。',
  statusUnsigned: 'JWT 已解码，但未签名或使用了 alg none。',
  headerTitle: '头部',
  payloadTitle: '载荷',
  signatureTitle: '签名',
  claimsTitle: '注册声明',
  copyHeader: '复制解码后的头部',
  copyPayload: '复制解码后的载荷',
  copySignature: '复制签名',
  copyAll: '复制全部',
  copiedLabel: '已复制',
  invalidTokenTitle: '无效的 JWT',
  invalidTokenBody: '请检查令牌是否具有三个由点分隔的 base64url 段。',
  invalidSegmentError: '请检查令牌是否具有三个由点分隔的 base64url 段。',
  invalidDecodeError: '无法将头部或载荷解码为有效的 JSON。',
  emptyJson: '{}',
  signaturePresent: '签名段存在；请在您的认证层中使用正确的密钥进行验证。',
  signatureMissing: '无签名段',
  algorithmLabel: '算法',
  typeLabel: '类型',
  issuerLabel: '签发者',
  subjectLabel: '主题',
  audienceLabel: '受众',
  issuedAtLabel: '签发时间',
  notBeforeLabel: '生效时间',
  expiresAtLabel: '过期时间',
  claimMissing: '不存在',
  privacyNote: '解码在您的浏览器会话中运行。除非安全策略允许，否则不要将生产密钥粘贴到任何工具中。',
  sampleToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnYW1lYm9iLXVzZXItNDIiLCJuYW1lIjoiR2FtZUJvYiBEZXZlbG9wZXIiLCJpc3MiOiJodHRwczovL3d3dy5nYW1lYm9iLmRldiIsImF1ZCI6ImRldmVsb3Blci10b29scyIsImlhdCI6MTcxNzIwMDAwMCwibmJmIjoxNzE3MjAwMDAwLCJleHAiOjE4OTM0NTYwMDAsInJvbGUiOiJhZG1pbiJ9.demo-signature',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<JwtDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'JWT 解码器常见问题',
  faq,
  bibliographyTitle: 'JWT 规范和安全参考',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: '在不丢失安全上下文的情况下解码 JWT',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'JSON Web Token 看似简洁，但通常包含解释认证失败的确切细节：签名算法、签发者、受众、主题、签发时间、生效时间、过期时间以及应用程序特定的授权声明。该 <strong>JWT 解码器、解析器和声明检查器</strong>将三个令牌段转换为可读的 JSON，以便您更快地调试认证流程。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '已解码不等于可信',
      html: '任何人都可以对 JWT 进行 base64url 解码。只有在您的应用程序使用正确的密钥、公钥或 JWKS 验证签名，然后验证签发者、受众、过期时间和任何领域特定声明之后，信任才开始。使用此工具检查数据，而不是将其作为令牌真实的证明。',
    },
    {
      type: 'title',
      text: '每个 JWT 段告诉您的信息',
      level: 3,
    },
    {
      type: 'table',
      headers: ['段', '典型内容', '调试价值'],
      rows: [
        ['头部', '算法、令牌类型和可选的密钥 ID', '显示令牌期望 HS256、RS256、ES256 还是其他验证策略。'],
        ['载荷', '注册声明和应用程序声明', '揭示身份、租户、范围、角色、过期和受众不匹配。'],
        ['签名', '以 base64url 编码的加密签名字节', '确认签名段存在，但必须在其他地方用正确的密钥进行验证。'],
      ],
    },
    {
      type: 'title',
      text: '通常能解释认证失败的声明',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>exp:</strong> 如果令牌已过期，刷新逻辑或时钟设置可能有误。',
        '<strong>nbf:</strong> 如果令牌尚未生效，服务器和身份提供商的时钟可能不同步。',
        '<strong>iss:</strong> 如果签发者 URL 与配置不同，令牌可能来自错误的租户或环境。',
        '<strong>aud:</strong> 如果受众与 API 标识符不匹配，令牌是为其他资源签发的。',
        '<strong>alg:</strong> 如果算法出乎意料，您的验证器可能拒绝令牌或暴露危险的配置错误。',
      ],
    },
    {
      type: 'title',
      text: '开发过程中 JWT 解析器的使用场景',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '前端调试',
          description: '检查登录后收到的 ID 令牌和访问令牌，以确认范围、角色和个人资料声明。',
          icon: 'mdi:monitor-dashboard',
          points: ['检查个人资料声明', '确认范围和角色', '比较登录环境'],
        },
        {
          title: '后端 API 质量保证',
          description: '将预期的签发者和受众值与 Authorization 头中实际发送的令牌进行比较。',
          icon: 'mdi:api',
          highlight: true,
          points: ['验证受众形态', '发现签发者不匹配', '检查持有者令牌'],
        },
        {
          title: '身份提供商设置',
          description: '检查来自 Auth0、Azure AD、Cognito、Keycloak 或自定义提供商的声明是否符合您的应用程序预期。',
          icon: 'mdi:account-key',
          points: ['审查租户数据', '检查自定义声明', '比较提供商映射'],
        },
      ],
    },
    {
      type: 'title',
      text: '该检查器能清楚揭示的常见 JWT 错误',
      level: 3,
    },
    {
      type: 'proscons',
      title: '快速检查与信任决策',
      items: [
        {
          pro: '立即看到格式错误的令牌。',
          con: '无法知道您预期的受众或签发者。',
        },
        {
          pro: '将 Unix 时间戳声明转换为可读日期。',
          con: '没有实际密钥材料，无法验证签名。',
        },
        {
          pro: '发现缺失的签发者、受众、主题或类型值。',
          con: '无法证明范围和角色对您的应用程序是安全的。',
        },
      ],
    },
    {
      type: 'summary',
      title: '最佳实践工作流程',
      items: [
        '解码令牌以了解客户端或 API 实际接收到的内容。',
        '在追踪应用程序逻辑之前检查 exp、nbf、iss、aud、sub 和 alg。',
        '仅在您的认证层中验证签名和信任决策。',
        '避免在工单、日志或截图中共享敏感的生产 JWT。',
      ],
    },
  ],
};
