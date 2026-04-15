import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LlmCostCalculatorUI } from '../ui';

const slug = 'llm-kostnadskalkylator';
const title = 'LLM Kostnadskalkylatör. AI Modellprisbedömmare';
const description =
  'Gratis onlineverktyg för att uppskatta kostnaden för LLM API-anrop. Jämför GPT-4o, Claude, Gemini, Llama och mer med verkliga tokenpriser per miljon.';

const faqData = [
  {
    question: 'Hur beräknas kostnaden för LLM API?',
    answer:
      'LLM API:er tar separat betalt för indatatoken (din prompt) och utdatatoken (svaret). Total kostnad per förfrågan är: (indatatoken × indatapris + utdatatoken × utdatapris) / 1,000,000. Multiplicera med antal förfrågningar för att få total månadskostnad.',
  },
  {
    question: 'Vad är tokens och hur förhåller de sig till ord?',
    answer:
      'En token är den grundläggande textenheten som en språkmodell bearbetar. I genomsnitt motsvarar 1 token cirka 0,75 ord på engelska, så 1,000 tokens ≈ 750 ord. Priser anges per miljon tokens ($/1M), vilket är standardprisenheten hos alla leverantörer.',
  },
  {
    question: 'Varför är utdatatoken dyrare än indatatoken?',
    answer:
      'Att generera text (utdata) kräver att modellen beräknar varje token sekventiellt, vilket är mer beräkningsintensivt än att läsa indata. De flesta leverantörer tar ut 3–5 gånger mer för utdatatoken än indatatoken.',
  },
  {
    question: 'Hur kan jag minska mina LLM API-kostnader?',
    answer:
      'Använd den minsta modellen som uppfyller dina kvalitetskrav. Cachelagra repeterade prompts när möjligt. Minimera systemprompten och undvik onödig kontext. För enkla klassificerings- eller extraheringsuppgifter erbjuder mindre modeller som GPT-4o mini eller Gemini Flash betydande besparingar.',
  },
];

const howToData = [
  {
    name: 'Välj en modell',
    text: 'Välj AI-modellen du planerar att använda från den grupperade listrutan. Modeller är organiserade efter leverantör.',
  },
  {
    name: 'Ange tokenantal',
    text: 'Ange det förväntade antalet indatatoken (din prompt) och utdatatoken (svaret). Ordestimater visas under varje fält.',
  },
  {
    name: 'Ange antal förfrågningar',
    text: 'Använd skjutreglaget eller nummeringsinmatningen för att ange hur många API-anrop du förväntar. Total kostnad uppdateras i realtid.',
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
  inLanguage: 'sv',
};

const ui: LlmCostCalculatorUI = {
  labelModel: 'LLM Modell',
  labelInputTokens: 'Indatatoken',
  labelOutputTokens: 'Utdatatoken',
  labelRequests: 'Antal Förfrågningar',
  unitWords: 'ord',
  labelCostPerRequest: 'Kostnad per Förfrågan',
  labelTotal: 'Uppskattad Total Kostnad',
  labelInput: 'Indata',
  labelOutput: 'Utdata',
};

export const content: ToolLocaleContent<LlmCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Vanliga Frågor',
  faq: faqData,
  bibliographyTitle: 'Referenser och Priskällor',
  bibliography: [
    {
      name: 'OpenAI API-prissättning',
      url: 'https://openai.com/pricing',
    },
    {
      name: 'Anthropic API-prissättning',
      url: 'https://www.anthropic.com/pricing',
    },
    {
      name: 'Google AI Studio-prissättning',
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
      text: 'Förstå LLM API-prissättning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'API:er för stora språkmodeller debiterar baserat på tokenanvändning, inte tid eller förfrågningar. Varje API-anrop har två kostnader: <strong>inmatningskostnaden</strong> (bearbetar din prompt) och <strong>utmatningskostnaden</strong> (genererar svaret). Att förstå denna uppdelning är nyckeln till att uppskatta din månadsfaktura korrekt.',
    },
    {
      type: 'title',
      text: 'Indatatoken vs utdatatoken',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'Indatatoken',
      html: '<p>Indatatoken representerar allt som skickas <strong>till</strong> modellen: din systemprompt, konversationshistorik och användarmeddelande. De är billigare eftersom modellen bearbetar dem parallellt. En typisk systemprompt på 200 ord kostar ungefär 267 indatatoken.</p>',
    },
    {
      type: 'card',
      title: 'Utdatatoken',
      html: '<p>Utdatatoken genereras sekventiellt, en i taget, vilket gör dem beräkningsmässigt dyrare. De flesta leverantörer tar ut <strong>3–5× mer</strong> för utdatatoken. Ett svar på 300 ord genererar ungefär 400 utdatatoken. Att hålla svaren korta är en av de mest effektiva kostnadsbesparingsstrategi.</p>',
    },
    {
      type: 'title',
      text: 'Välja rätt modell för din budget',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Börja med en kapabel mellanniesemodell som <code>GPT-4o mini</code> eller <code>Gemini 1.5 Flash</code> och uppgradera bara om kvaliteten är otillräcklig. Skillnaden i kostnad mellan en liten och stor modell kan vara 10–100×.',
    },
    {
      type: 'paragraph',
      html: 'Inte alla uppgifter kräver samma modellkvalitet. Klassificerings-, extraherings- och sammanfattningsuppgifter fungerar ofta bra med mindre, billigare modeller. Reservera stora gränsmodeller som <code>claude-3-opus</code> eller <code>o1</code> för komplexa resonemangsuppgifter där kvaliteten direkt påverkar resultaten.',
    },
  ],
};
