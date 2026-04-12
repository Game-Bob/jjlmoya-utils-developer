import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LlmCostCalculatorUI } from '../ui';

const slug = 'llm-cost-calculator';
const title = 'LLM Cost Calculator. AI Model Pricing Estimator';
const description =
  'Free online tool to estimate the cost of calling LLM APIs. Compare GPT-4o, Claude, Gemini, Llama and more with real token prices per million tokens.';

const faqData = [
  {
    question: 'How is the LLM API cost calculated?',
    answer:
      'LLM APIs charge separately for input tokens (the prompt) and output tokens (the response). The total cost per request is: (input tokens × input price + output tokens × output price) / 1,000,000. Multiply by the number of requests to get the total monthly cost.',
  },
  {
    question: 'What are tokens and how do they relate to words?',
    answer:
      'A token is the basic unit of text that a language model processes. On average, 1 token equals about 0.75 words in English, so 1,000 tokens ≈ 750 words. Prices are listed per million tokens ($/1M), which is the standard pricing unit across providers.',
  },
  {
    question: 'Why are output tokens more expensive than input tokens?',
    answer:
      'Generating text (output) requires the model to compute each token sequentially, which is computationally more intensive than reading the input. Most providers charge 3–5x more for output tokens than input tokens.',
  },
  {
    question: 'How can I reduce my LLM API costs?',
    answer:
      'Use the smallest model that meets your quality requirements. Cache repeated prompts when possible. Minimize system prompt length and avoid unnecessary context. For simple classification or extraction tasks, smaller models like GPT-4o mini or Gemini Flash offer significant savings.',
  },
];

const howToData = [
  {
    name: 'Select a model',
    text: 'Choose the AI model you plan to use from the grouped dropdown. Models are organized by provider.',
  },
  {
    name: 'Enter token counts',
    text: 'Enter the expected number of input tokens (your prompt) and output tokens (the response). Word estimates appear below each field.',
  },
  {
    name: 'Set the number of requests',
    text: 'Use the slider or number input to enter how many API calls you expect. The total cost updates in real time.',
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
  inLanguage: 'en',
};

const ui: LlmCostCalculatorUI = {
  labelModel: 'LLM Model',
  labelInputTokens: 'Input Tokens',
  labelOutputTokens: 'Output Tokens',
  labelRequests: 'Number of Requests',
  unitWords: 'words',
  labelCostPerRequest: 'Cost per Request',
  labelTotal: 'Estimated Total Cost',
  labelInput: 'Input',
  labelOutput: 'Output',
};

export const content: ToolLocaleContent<LlmCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'References and Pricing Sources',
  bibliography: [
    {
      name: 'OpenAI API Pricing',
      url: 'https://openai.com/pricing',
    },
    {
      name: 'Anthropic API Pricing',
      url: 'https://www.anthropic.com/pricing',
    },
    {
      name: 'Google AI Studio Pricing',
      url: 'https://ai.google.dev/pricing',
    },
    {
      name: 'OpenAI Tokenizer',
      url: 'https://platform.openai.com/tokenizer',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Understanding LLM API pricing',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Large Language Model APIs charge based on token usage, not time or requests. Every API call has two costs: the <strong>input cost</strong> (processing your prompt) and the <strong>output cost</strong> (generating the response). Understanding this split is key to estimating your monthly bill accurately.',
    },
    {
      type: 'title',
      text: 'Input tokens vs output tokens',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'Input tokens',
      html: '<p>Input tokens represent everything sent <strong>to</strong> the model: your system prompt, conversation history, and user message. They are cheaper because the model processes them in parallel. A typical system prompt of 200 words costs roughly 267 input tokens.</p>',
    },
    {
      type: 'card',
      title: 'Output tokens',
      html: '<p>Output tokens are generated one by one in sequence, making them more computationally expensive. Most providers charge <strong>3–5× more</strong> for output tokens. A 300-word response generates roughly 400 output tokens. Keeping responses concise is one of the most effective cost-saving strategies.</p>',
    },
    {
      type: 'title',
      text: 'Choosing the right model for your budget',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Start with a capable mid-tier model like <code>GPT-4o mini</code> or <code>Gemini 1.5 Flash</code> and only upgrade if quality falls short. The cost difference between a small and large model can be 10–100×.',
    },
    {
      type: 'paragraph',
      html: 'Not all tasks require the same model quality. Classification, extraction, and summarization tasks often perform well with smaller, cheaper models. Reserve large frontier models like <code>claude-3-opus</code> or <code>o1</code> for complex reasoning tasks where quality directly affects outcomes.',
    },
  ],
};
