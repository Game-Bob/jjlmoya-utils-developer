import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LlmCostCalculatorUI } from '../ui';

const slug = 'calculadora-custo-llm';
const title = 'Calculadora de Custo LLM. Estimador de Preços de Modelos IA';
const description =
  'Ferramenta online gratuita para estimar o custo de chamar APIs LLM. Compare GPT-4o, Claude, Gemini, Llama e mais com preços reais de tokens por milhão.';

const faqData = [
  {
    question: 'Como é calculado o custo da API LLM?',
    answer:
      'As APIs LLM cobram separadamente para tokens de entrada (seu prompt) e tokens de saída (a resposta). O custo total por solicitação é: (tokens de entrada × preço de entrada + tokens de saída × preço de saída) / 1.000.000. Multiplique pelo número de solicitações para obter o custo mensal total.',
  },
  {
    question: 'O que são tokens e como se relacionam com palavras?',
    answer:
      'Um token é a unidade básica de texto que um modelo de linguagem processa. Em média, 1 token equivale a cerca de 0,75 palavras em inglês, então 1.000 tokens ≈ 750 palavras. Os preços são listados por milhão de tokens ($/1M), que é a unidade de preço padrão em todos os provedores.',
  },
  {
    question: 'Por que os tokens de saída são mais caros que os de entrada?',
    answer:
      'Gerar texto (saída) requer que o modelo compute cada token sequencialmente, o que é computacionalmente mais intensivo do que ler a entrada. A maioria dos provedores cobra 3–5x mais para tokens de saída do que de entrada.',
  },
  {
    question: 'Como posso reduzir meus custos de API LLM?',
    answer:
      'Use o menor modelo que atenda a seus requisitos de qualidade. Cache prompts repetidos quando possível. Minimize o comprimento do prompt do sistema e evite contexto desnecessário. Para tarefas simples de classificação ou extração, modelos menores como GPT-4o mini ou Gemini Flash oferecem economias significativas.',
  },
];

const howToData = [
  {
    name: 'Selecione um modelo',
    text: 'Escolha o modelo IA que você planeja usar no dropdown agrupado. Os modelos são organizados por provedor.',
  },
  {
    name: 'Insira contagens de tokens',
    text: 'Digite o número esperado de tokens de entrada (seu prompt) e tokens de saída (a resposta). Estimativas de palavras aparecem abaixo de cada campo.',
  },
  {
    name: 'Defina o número de solicitações',
    text: 'Use o slider ou entrada numérica para inserir quantas chamadas de API você espera. O custo total é atualizado em tempo real.',
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
  inLanguage: 'pt',
};

const ui: LlmCostCalculatorUI = {
  labelModel: 'Modelo LLM',
  labelInputTokens: 'Tokens de Entrada',
  labelOutputTokens: 'Tokens de Saída',
  labelRequests: 'Número de Solicitações',
  unitWords: 'palavras',
  labelCostPerRequest: 'Custo por Solicitação',
  labelTotal: 'Custo Total Estimado',
  labelInput: 'Entrada',
  labelOutput: 'Saída',
};

export const content: ToolLocaleContent<LlmCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências e Fontes de Preços',
  bibliography: [
    {
      name: 'Preços de API OpenAI',
      url: 'https://openai.com/pricing',
    },
    {
      name: 'Preços de API Anthropic',
      url: 'https://www.anthropic.com/pricing',
    },
    {
      name: 'Preços Google AI Studio',
      url: 'https://ai.google.dev/pricing',
    },
    {
      name: 'Tokenizador OpenAI',
      url: 'https://platform.openai.com/tokenizer',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Entendendo preços de API LLM',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'As APIs de Modelo de Linguagem Grande cobram com base no uso de tokens, não em tempo ou solicitações. Cada chamada de API tem dois custos: o <strong>custo de entrada</strong> (processando seu prompt) e o <strong>custo de saída</strong> (gerando a resposta). Entender essa divisão é fundamental para estimar sua fatura mensal com precisão.',
    },
    {
      type: 'title',
      text: 'Tokens de entrada vs tokens de saída',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'Tokens de entrada',
      html: '<p>Os tokens de entrada representam tudo enviado <strong>para</strong> o modelo: seu prompt do sistema, histórico de conversa e mensagem do usuário. Eles são mais baratos porque o modelo os processa em paralelo. Um prompt de sistema típico de 200 palavras custa aproximadamente 267 tokens de entrada.</p>',
    },
    {
      type: 'card',
      title: 'Tokens de saída',
      html: '<p>Os tokens de saída são gerados um por um em sequência, tornando-os computacionalmente mais caros. A maioria dos provedores cobra <strong>3–5× mais</strong> para tokens de saída. Uma resposta de 300 palavras gera aproximadamente 400 tokens de saída. Manter as respostas concisas é uma das estratégias mais eficazes de economia de custos.</p>',
    },
    {
      type: 'title',
      text: 'Escolhendo o modelo certo para seu orçamento',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Comece com um modelo de nível médio capaz como <code>GPT-4o mini</code> ou <code>Gemini 1.5 Flash</code> e atualize apenas se a qualidade for insuficiente. A diferença de custo entre um modelo pequeno e grande pode ser 10–100×.',
    },
    {
      type: 'paragraph',
      html: 'Nem todas as tarefas requerem a mesma qualidade de modelo. Tarefas de classificação, extração e resumo geralmente funcionam bem com modelos menores e mais baratos. Reserve grandes modelos de fronteira como <code>claude-3-opus</code> ou <code>o1</code> para tarefas de raciocínio complexo onde a qualidade afeta diretamente os resultados.',
    },
  ],
};
