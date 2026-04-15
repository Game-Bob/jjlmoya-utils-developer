import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LlmCostCalculatorUI } from '../ui';

const slug = 'llm-cost-calculator-nl';
const title = 'LLM Kostencalculator. Prijsschatter voor AI Model APIs';
const description =
  'Gratis online tool om de kosten van LLM API-aanroepen te schatten. Vergelijk GPT-4o, Claude, Gemini, Llama en meer met echte tokenprijzen per miljoen tokens.';

const faqData = [
  {
    question: 'Hoe worden de kosten van een LLM API berekend?',
    answer:
      'LLM APIs rekenen afzonderlijk voor invoer-tokens (de prompt) en uitvoer-tokens (het antwoord). De totale kosten per verzoek zijn: (invoer-tokens × invoerprijs + uitvoer-tokens × uitvoerprijs) / 1.000.000. Vermenigvuldig dit met het aantal verzoeken om de totale maandelijkse kosten te berekenen.',
  },
  {
    question: 'Wat zijn tokens en hoe verhouden ze zich tot woorden?',
    answer:
      'Een token is de basiseenheid van tekst die een taalmodel verwerkt. Gemiddeld is 1 token gelijk aan ongeveer 0,75 woord in het Engels, dus 1.000 tokens ≈ 750 woorden. Prijzen worden opgegeven per miljoen tokens ($/1M), de standaard prijseenheid bij alle aanbieders.',
  },
  {
    question: 'Waarom zijn uitvoer-tokens duurder dan invoer-tokens?',
    answer:
      'Bij het genereren van tekst (uitvoer) moet het model elke token achtereenvolgens berekenen, wat rekenintensief is dan het lezen van de invoer. De meeste aanbieders rekenen 3 tot 5 keer meer voor uitvoer-tokens dan voor invoer-tokens.',
  },
  {
    question: 'Hoe kan ik mijn LLM API-kosten verlagen?',
    answer:
      'Gebruik het kleinste model dat voldoet aan jouw kwaliteitseisen. Sla herhaalde prompts op in een cache wanneer mogelijk. Houd de systeemprompt zo kort mogelijk en vermijd onnodige context. Voor eenvoudige classificatie- of extractietaken bieden kleinere modellen zoals GPT-4o mini of Gemini Flash aanzienlijke besparingen.',
  },
];

const howToData = [
  {
    name: 'Selecteer een model',
    text: 'Kies het AI-model dat je wilt gebruiken uit de gegroepeerde keuzelijst. Modellen zijn georganiseerd per aanbieder.',
  },
  {
    name: 'Voer het aantal tokens in',
    text: 'Voer het verwachte aantal invoer-tokens (jouw prompt) en uitvoer-tokens (het antwoord) in. Onder elk veld verschijnt een schatting in woorden.',
  },
  {
    name: 'Stel het aantal verzoeken in',
    text: 'Gebruik de schuifregelaar of het getalveld om in te voeren hoeveel API-aanroepen je verwacht. De totale kosten worden realtime bijgewerkt.',
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
  inLanguage: 'nl',
};

const ui: LlmCostCalculatorUI = {
  labelModel: 'LLM-model',
  labelInputTokens: 'Invoer tokens',
  labelOutputTokens: 'Uitvoer tokens',
  labelRequests: 'Aantal verzoeken',
  unitWords: 'woorden',
  labelCostPerRequest: 'Kosten per verzoek',
  labelTotal: 'Geschatte totale kosten',
  labelInput: 'Invoer',
  labelOutput: 'Uitvoer',
};

export const content: ToolLocaleContent<LlmCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Veelgestelde vragen',
  faq: faqData,
  bibliographyTitle: 'Bronnen en prijsreferenties',
  bibliography: [
    {
      name: 'OpenAI API-prijzen',
      url: 'https://openai.com/pricing',
    },
    {
      name: 'Anthropic API-prijzen',
      url: 'https://www.anthropic.com/pricing',
    },
    {
      name: 'Google AI Studio prijzen',
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
      text: 'LLM API-prijzen begrijpen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'APIs voor grote taalmodellen rekenen op basis van tokengebruik, niet op basis van tijd of het aantal verzoeken. Elke API-aanroep heeft twee kostencomponenten: de <strong>invoerkosten</strong> (verwerking van jouw prompt) en de <strong>uitvoerkosten</strong> (generatie van het antwoord). Dit onderscheid begrijpen is de sleutel tot een nauwkeurige schatting van je maandelijkse rekening.',
    },
    {
      type: 'title',
      text: 'Invoer tokens versus uitvoer-tokens',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'Invoer tokens',
      html: '<p>Invoer tokens vertegenwoordigen alles wat <strong>naar</strong> het model wordt gestuurd: jouw systeemprompt, de gespreksgeschiedenis en het gebruikersbericht. Ze zijn goedkoper omdat het model ze parallel verwerkt. Een typische systeemprompt van 200 woorden kost ongeveer 267 invoer-tokens.</p>',
    },
    {
      type: 'card',
      title: 'Uitvoer tokens',
      html: '<p>Uitvoer tokens worden één voor één achtereenvolgens gegenereerd, wat ze rekenintensief maakt. De meeste aanbieders rekenen <strong>3 tot 5 keer meer</strong> voor uitvoer-tokens. Een antwoord van 300 woorden genereert ongeveer 400 uitvoer-tokens. Antwoorden beknopt houden is een van de meest effectieve strategieën om kosten te besparen.</p>',
    },
    {
      type: 'title',
      text: 'Het juiste model kiezen voor jouw budget',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Begin met een capabel middenklasse model zoals <code>GPT-4o mini</code> of <code>Gemini 1.5 Flash</code> en schakel alleen over naar een groter model als de kwaliteit tekortschiet. Het kostenverschil tussen een klein en groot model kan 10 tot 100 keer zijn.',
    },
    {
      type: 'paragraph',
      html: 'Niet alle taken vereisen dezelfde modelkwaliteit. Classificatie, extractie en samenvattingen werken vaak prima met kleinere, goedkopere modellen. Bewaar grote frontier-modellen zoals <code>claude-3-opus</code> of <code>o1</code> voor complexe redeneeruitgaven waarbij kwaliteit direct het resultaat beïnvloedt.',
    },
  ],
};

