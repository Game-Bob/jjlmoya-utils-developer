import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LlmCostCalculatorUI } from '../ui';

const slug = 'llm-cost-calculator';
const title = 'Calculadora de Costes de LLMs. Estimador de Precios de APIs de IA';
const description =
  'Herramienta online gratuita para estimar el coste de llamadas a APIs de modelos de lenguaje. Compara GPT-4o, Claude, Gemini, Llama y más con precios reales por millón de tokens.';

const faqData = [
  {
    question: '¿Cómo se calcula el coste de una API de LLM?',
    answer:
      'Las APIs de LLM cobran de forma separada por los tokens de entrada (el prompt) y los tokens de salida (la respuesta). El coste total por petición es: (tokens entrada × precio entrada + tokens salida × precio salida) / 1.000.000. Multiplica por el número de peticiones para obtener el coste mensual total.',
  },
  {
    question: '¿Qué son los tokens y cómo se relacionan con las palabras?',
    answer:
      'Un token es la unidad básica de texto que procesa un modelo de lenguaje. En promedio, 1 token equivale a aproximadamente 0,75 palabras en inglés, es decir, 1.000 tokens ≈ 750 palabras. Los precios se indican por millón de tokens ($/1M), que es la unidad estándar en todos los proveedores.',
  },
  {
    question: '¿Por qué los tokens de salida son más caros que los de entrada?',
    answer:
      'Generar texto (salida) requiere que el modelo calcule cada token de forma secuencial, lo cual es computacionalmente más costoso que leer la entrada. La mayoría de los proveedores cobran entre 3 y 5 veces más por los tokens de salida que por los de entrada.',
  },
  {
    question: '¿Cómo puedo reducir los costes de la API de un LLM?',
    answer:
      'Usa el modelo más pequeño que cumpla tus requisitos de calidad. Cachea los prompts repetidos cuando sea posible. Minimiza la longitud del prompt de sistema y evita contexto innecesario. Para tareas simples de clasificación o extracción, modelos más pequeños como GPT-4o mini o Gemini Flash ofrecen un ahorro significativo.',
  },
];

const howToData = [
  {
    name: 'Selecciona un modelo',
    text: 'Elige el modelo de IA que planeas usar en el desplegable agrupado. Los modelos están organizados por proveedor.',
  },
  {
    name: 'Introduce el número de tokens',
    text: 'Introduce el número esperado de tokens de entrada (tu prompt) y de salida (la respuesta). Debajo de cada campo aparece una estimación en palabras.',
  },
  {
    name: 'Ajusta el número de peticiones',
    text: 'Usa el deslizador o el campo numérico para indicar cuántas llamadas a la API esperas. El coste total se actualiza en tiempo real.',
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
  inLanguage: 'es',
};

const ui: LlmCostCalculatorUI = {
  labelModel: 'Modelo LLM',
  labelInputTokens: 'Tokens Entrada',
  labelOutputTokens: 'Tokens Salida',
  labelRequests: 'Número de Peticiones',
  unitWords: 'palabras',
  labelCostPerRequest: 'Coste por Petición',
  labelTotal: 'Coste Total Estimado',
  labelInput: 'Input',
  labelOutput: 'Output',
};

export const content: ToolLocaleContent<LlmCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias y Fuentes de Precios',
  bibliography: [
    {
      name: 'Precios de la API de OpenAI',
      url: 'https://openai.com/pricing',
    },
    {
      name: 'Precios de la API de Anthropic',
      url: 'https://www.anthropic.com/pricing',
    },
    {
      name: 'Precios de Google AI Studio',
      url: 'https://ai.google.dev/pricing',
    },
    {
      name: 'Tokenizador de OpenAI',
      url: 'https://platform.openai.com/tokenizer',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Cómo funciona el precio de las APIs de LLM',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Las APIs de modelos de lenguaje cobran en función del uso de tokens, no por tiempo ni por petición. Cada llamada tiene dos costes: el <strong>coste de entrada</strong> (procesar tu prompt) y el <strong>coste de salida</strong> (generar la respuesta). Entender esta diferencia es clave para estimar con precisión tu factura mensual.',
    },
    {
      type: 'title',
      text: 'Tokens de entrada frente a tokens de salida',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'Tokens de entrada',
      html: '<p>Los tokens de entrada representan todo lo que se envía <strong>al</strong> modelo: tu prompt de sistema, el historial de conversación y el mensaje del usuario. Son más baratos porque el modelo los procesa en paralelo. Un prompt de sistema típico de 200 palabras genera aproximadamente 267 tokens de entrada.</p>',
    },
    {
      type: 'card',
      title: 'Tokens de salida',
      html: '<p>Los tokens de salida se generan uno a uno de forma secuencial, lo que los hace computacionalmente más costosos. La mayoría de los proveedores cobran <strong>entre 3 y 5 veces más</strong> por los tokens de salida. Una respuesta de 300 palabras genera aproximadamente 400 tokens de salida. Mantener las respuestas concisas es una de las estrategias de ahorro más efectivas.</p>',
    },
    {
      type: 'title',
      text: 'Elegir el modelo adecuado para tu presupuesto',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Empieza con un modelo de gama media como <code>GPT-4o mini</code> o <code>Gemini 1.5 Flash</code> y solo escala si la calidad no es suficiente. La diferencia de coste entre un modelo pequeño y uno grande puede ser de 10 a 100 veces.',
    },
    {
      type: 'paragraph',
      html: 'No todas las tareas requieren el mismo nivel de modelo. Las tareas de clasificación, extracción y resumen suelen funcionar bien con modelos más pequeños y económicos. Reserva los modelos más grandes como <code>claude-3-opus</code> o <code>o1</code> para razonamientos complejos donde la calidad afecta directamente al resultado.',
    },
  ],
};
