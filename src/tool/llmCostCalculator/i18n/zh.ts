import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LlmCostCalculatorUI } from '../ui';

const slug = 'llm-cost-calculator';
const title = 'LLM 成本计算器。AI 模型定价估算工具';
const description =
  '用于估算 LLM API 调用成本的免费在线工具。使用实际百万代币价格比较 GPT-4o、Claude、Gemini、Llama 等。';

const faqData = [
  {
    question: 'LLM API 成本如何计算？',
    answer:
      'LLM API 对输入代币（您的提示）和输出代币（响应）分别收费。每个请求的总成本为：（输入代币 × 输入价格 + 输出代币 × 输出价格）/ 1,000,000。乘以请求数得到总月度成本。',
  },
  {
    question: '什么是代币，它们与单词有什么关系？',
    answer:
      '代币是语言模型处理的基本文本单位。平均而言，1 个代币等于英文中约 0.75 个单词，因此 1000 个代币 ≈ 750 个单词。价格以百万代币计 ($/1M)，这是所有提供商的标准定价单位。',
  },
  {
    question: '为什么输出代币比输入代币更昂贵？',
    answer:
      '生成文本（输出）需要模型依次计算每个代币，这在计算上比读取输入更密集。大多数提供商对输出代币的收费是输入代币的 3–5 倍。',
  },
  {
    question: '如何降低我的 LLM API 成本？',
    answer:
      '使用满足您质量要求的最小模型。尽可能缓存重复的提示。最小化系统提示长度并避免不必要的上下文。对于简单的分类或提取任务，GPT-4o mini 或 Gemini Flash 等较小的模型可以显著节省成本。',
  },
];

const howToData = [
  {
    name: '选择模型',
    text: '从分组下拉菜单中选择您计划使用的 AI 模型。模型按提供商组织。',
  },
  {
    name: '输入代币计数',
    text: '输入预期的输入代币数（您的提示）和输出代币数（响应）。单词估计显示在每个字段下方。',
  },
  {
    name: '设置请求数',
    text: '使用滑块或数字输入来输入您预期的 API 调用次数。总成本实时更新。',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'zh',
};

const ui: LlmCostCalculatorUI = {
  labelModel: 'LLM 模型',
  labelInputTokens: '输入代币',
  labelOutputTokens: '输出代币',
  labelRequests: '请求数',
  unitWords: '单词',
  labelCostPerRequest: '每个请求的成本',
  labelTotal: '估算总成本',
  labelInput: '输入',
  labelOutput: '输出',
};

export const content: ToolLocaleContent<LlmCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料和定价来源',
  bibliography: [
    {
      name: 'OpenAI API 定价',
      url: 'https://openai.com/pricing',
    },
    {
      name: 'Anthropic API 定价',
      url: 'https://www.anthropic.com/pricing',
    },
    {
      name: 'Google AI Studio 定价',
      url: 'https://ai.google.dev/pricing',
    },
    {
      name: 'OpenAI 令牌生成器',
      url: 'https://platform.openai.com/tokenizer',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '理解 LLM API 定价',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '大型语言模型 API 根据代币使用情况计费，而不是按时间或请求次数计费。每个 API 调用有两项成本：<strong>输入成本</strong>（处理您的提示）和<strong>输出成本</strong>（生成响应）。理解这种分割是准确估算您每月账单的关键。',
    },
    {
      type: 'title',
      text: '输入代币与输出代币',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: '输入代币',
      html: '<p>输入代币代表发送<strong>给</strong>模型的所有内容：您的系统提示、对话历史和用户消息。由于模型并行处理它们，所以它们更便宜。一个 200 字的典型系统提示大约需要 267 个输入代币。</p>',
    },
    {
      type: 'card',
      title: '输出代币',
      html: '<p>输出代币按顺序逐个生成，使其在计算上更昂贵。大多数提供商对输出代币的收费<strong>多出 3–5 倍</strong>。一个 300 字的响应会生成大约 400 个输出代币。保持响应简洁是最有效的成本节省策略之一。</p>',
    },
    {
      type: 'title',
      text: '为您的预算选择合适的模型',
      level: 3,
    },
    {
      type: 'tip',
      html: '从有能力的中等层级模型开始，例如 <code>GPT-4o mini</code> 或 <code>Gemini 1.5 Flash</code>，仅在质量不足时升级。小型和大型模型之间的成本差异可能是 10–100×。',
    },
    {
      type: 'paragraph',
      html: '并非所有任务都需要相同的模型质量。分类、提取和汇总任务通常在较小、较便宜的模型上表现良好。保留大型前沿模型，如 <code>claude-3-opus</code> 或 <code>o1</code>，用于复杂的推理任务，其中质量直接影响结果。',
    },
  ],
};

