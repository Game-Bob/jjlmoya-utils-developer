export interface LLMModel {
  id: string;
  name: string;
  input: number;
  output: number;
  group: string;
  description: string;
}

export const LLM_MODELS: LLMModel[] = [
  {
    id: 'gpt-5.4-pro',
    name: 'GPT-5.4 Pro',
    input: 30.0,
    output: 180.0,
    group: 'OpenAI',
    description: 'Deep reasoning with specialized hardware for critical tasks.',
  },
  {
    id: 'gpt-5.4-standard',
    name: 'GPT-5.4 Standard',
    input: 2.5,
    output: 15.0,
    group: 'OpenAI',
    description: 'The gold standard in intelligence for general-purpose applications.',
  },
  {
    id: 'gpt-5.2-reasoning',
    name: 'GPT-5.2 Reasoning',
    input: 1.75,
    output: 14.0,
    group: 'OpenAI',
    description: 'Optimized for complex logic and structured thinking.',
  },
  {
    id: 'claude-4.6-opus',
    name: 'Claude 4.6 Opus',
    input: 5.0,
    output: 25.0,
    group: 'Anthropic',
    description: 'Leader in linguistic nuance and complex ethical reasoning.',
  },
  {
    id: 'claude-4.6-sonnet',
    name: 'Claude 4.6 Sonnet',
    input: 3.0,
    output: 15.0,
    group: 'Anthropic',
    description: 'Unmatched speed and technical precision for developers.',
  },
  {
    id: 'claude-4.6-haiku',
    name: 'Claude 4.6 Haiku',
    input: 1.0,
    output: 5.0,
    group: 'Anthropic',
    description: 'Sub-second efficiency for massive automation workloads.',
  },
  {
    id: 'gemini-3-pro',
    name: 'Gemini 3 Pro',
    input: 2.0,
    output: 12.0,
    group: 'Google',
    description: 'Multimodal context window of 2M+ tokens.',
  },
  {
    id: 'gemini-3-flash',
    name: 'Gemini 3 Flash',
    input: 0.1,
    output: 0.4,
    group: 'Google',
    description: 'Ultra-fast inference at the lowest market cost.',
  },
  {
    id: 'llama-4-maverick',
    name: 'Llama 4 Maverick (405B)',
    input: 0.15,
    output: 0.6,
    group: 'Meta',
    description: 'Enterprise-grade open source power.',
  },
  {
    id: 'llama-4-scout',
    name: 'Llama 4 Scout (70B)',
    input: 0.08,
    output: 0.3,
    group: 'Meta',
    description: 'Balanced efficiency for local deployments and APIs.',
  },
  {
    id: 'deepseek-v4',
    name: 'DeepSeek-V4',
    input: 0.1,
    output: 0.2,
    group: 'DeepSeek',
    description: 'Extreme optimization for coding and mathematics.',
  },
];
