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
    id: 'gpt-5.5-pro',
    name: 'GPT-5.5 Pro',
    input: 30.0,
    output: 180.0,
    group: 'OpenAI',
    description: 'Flagship para flujos de trabajo agenteicos y orquestación compleja.',
  },
  {
    id: 'gpt-5.5-standard',
    name: 'GPT-5.5 Standard',
    input: 5.0,
    output: 30.0,
    group: 'OpenAI',
    description: 'Equilibrio de alto rendimiento para tareas multimodales.',
  },
  {
    id: 'claude-fable-5',
    name: 'Claude Fable 5',
    input: 10.0,
    output: 50.0,
    group: 'Anthropic',
    description: 'El modelo más capaz de Anthropic, optimizado para razonamiento profundo.',
  },
  {
    id: 'claude-opus-4.7',
    name: 'Claude Opus 4.7',
    input: 5.0,
    output: 25.0,
    group: 'Anthropic',
    description: 'Referencia en precisión, análisis legal y reducción de alucinaciones.',
  },
  {
    id: 'claude-sonnet-5',
    name: 'Claude Sonnet 5',
    input: 3.0,
    output: 15.0,
    group: 'Anthropic',
    description: 'El estándar de oro para coding y agentes técnicos.',
  },
  {
    id: 'gemini-3.5-flash',
    name: 'Gemini 3.5 Flash',
    input: 1.5,
    output: 9.0,
    group: 'Google',
    description: 'Eficiencia extrema y velocidad, ideal para tareas de alta escala.',
  },
  {
    id: 'gemini-3.1-pro',
    name: 'Gemini 3.1 Pro',
    input: 2.0,
    output: 12.0,
    group: 'Google',
    description: 'Contexto masivo de hasta 10M de tokens para repositorios completos.',
  },
  {
    id: 'deepseek-v4-pro',
    name: 'DeepSeek-V4 Pro',
    input: 0.44,
    output: 0.87,
    group: 'DeepSeek',
    description: 'Modelo open-weight líder en eficiencia de costes para desarrollo.',
  },
  {
    id: 'llama-4-scout',
    name: 'Llama 4 Scout',
    input: 0.11,
    output: 0.34,
    group: 'Meta',
    description: 'Optimizado para despliegue masivo y análisis de contexto ultra-largo.',
  },
];