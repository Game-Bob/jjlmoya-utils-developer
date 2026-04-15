import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LlmCostCalculatorUI } from '../ui';

const slug = 'llm-cost-calculator-de';
const title = 'LLM Kostenrechner. KI Modell Preisschätzer';
const description =
  'Kostenloses Online-Tool zur Schätzung der Kosten von LLM-API-Aufrufen. Vergleiche GPT-4o, Claude, Gemini, Llama und mehr mit realen Token-Preisen pro Million Tokens.';

const faqData = [
  {
    question: 'Wie werden die Kosten einer LLM-API berechnet?',
    answer:
      'LLM-APIs berechnen Eingabe Tokens (den Prompt) und Ausgabe Tokens (die Antwort) getrennt. Die Gesamtkosten pro Anfrage betragen: (Eingabe Tokens × Eingabepreis + Ausgabe Tokens × Ausgabepreis) / 1.000.000. Multipliziere diesen Wert mit der Anzahl der Anfragen, um die monatlichen Gesamtkosten zu erhalten.',
  },
  {
    question: 'Was sind Tokens und wie hängen sie mit Wörtern zusammen?',
    answer:
      'Ein Token ist die grundlegende Texteinheit, die ein Sprachmodell verarbeitet. Im Durchschnitt entspricht 1 Token etwa 0,75 Wörtern auf Englisch, also 1.000 Tokens ≈ 750 Wörter. Preise werden pro Million Tokens ($/1M) angegeben – das ist die branchenübliche Einheit bei allen Anbietern.',
  },
  {
    question: 'Warum sind Ausgabe Tokens teurer als Eingabe Tokens?',
    answer:
      'Das Generieren von Text (Ausgabe) erfordert, dass das Modell jeden Token nacheinander berechnet – das ist rechenintensiver als das Lesen der Eingabe. Die meisten Anbieter berechnen für Ausgabe Tokens das 3- bis 5-Fache des Preises für Eingabe Tokens.',
  },
  {
    question: 'Wie kann ich die Kosten meiner LLM-API senken?',
    answer:
      'Nutze das kleinste Modell, das deinen Qualitätsanforderungen entspricht. Caching von wiederholten Prompts spart ebenfalls Kosten. Halte den System-Prompt möglichst kurz und vermeide unnötigen Kontext. Für einfache Klassifizierungs- oder Extraktionsaufgaben bieten kleinere Modelle wie GPT-4o mini oder Gemini Flash erhebliche Einsparungen.',
  },
];

const howToData = [
  {
    name: 'Modell auswählen',
    text: 'Wähle das KI Modell, das du verwenden möchtest, aus dem gruppierten Dropdown. Die Modelle sind nach Anbieter sortiert.',
  },
  {
    name: 'Token-Anzahl eingeben',
    text: 'Gib die erwartete Anzahl an Eingabe Tokens (dein Prompt) und Ausgabe Tokens (die Antwort) ein. Unter jedem Feld erscheint eine Schätzung in Wörtern.',
  },
  {
    name: 'Anzahl der Anfragen festlegen',
    text: 'Nutze den Schieberegler oder das Zahlenfeld, um die erwartete Anzahl an API-Aufrufen anzugeben. Die Gesamtkosten werden in Echtzeit aktualisiert.',
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
  inLanguage: 'de',
};

const ui: LlmCostCalculatorUI = {
  labelModel: 'LLM-Modell',
  labelInputTokens: 'Eingabe Tokens',
  labelOutputTokens: 'Ausgabe Tokens',
  labelRequests: 'Anzahl Anfragen',
  unitWords: 'Wörter',
  labelCostPerRequest: 'Kosten pro Anfrage',
  labelTotal: 'Geschätzte Gesamtkosten',
  labelInput: 'Eingabe',
  labelOutput: 'Ausgabe',
};

export const content: ToolLocaleContent<LlmCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Quellen und Preisreferenzen',
  bibliography: [
    {
      name: 'OpenAI API-Preise',
      url: 'https://openai.com/pricing',
    },
    {
      name: 'Anthropic API-Preise',
      url: 'https://www.anthropic.com/pricing',
    },
    {
      name: 'Google AI Studio Preise',
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
      text: 'LLM-API-Preise verstehen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'APIs für große Sprachmodelle werden nach Token-Nutzung abgerechnet – nicht nach Zeit oder Anfragen. Jeder API-Aufruf hat zwei Kostenkomponenten: die <strong>Eingabekosten</strong> (Verarbeitung deines Prompts) und die <strong>Ausgabekosten</strong> (Generierung der Antwort). Diesen Unterschied zu verstehen ist der Schlüssel zur genauen Schätzung deiner monatlichen Rechnung.',
    },
    {
      type: 'title',
      text: 'Eingabe Tokens vs. Ausgabe Tokens',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'Eingabe Tokens',
      html: '<p>Eingabe Tokens umfassen alles, was <strong>an</strong> das Modell gesendet wird: deinen System-Prompt, den Gesprächsverlauf und die Nutzernachricht. Sie sind günstiger, weil das Modell sie parallel verarbeitet. Ein typischer System-Prompt mit 200 Wörtern entspricht etwa 267 Eingabe Tokens.</p>',
    },
    {
      type: 'card',
      title: 'Ausgabe Tokens',
      html: '<p>Ausgabe Tokens werden sequenziell – Token für Token – erzeugt, was sie rechenintensiver macht. Die meisten Anbieter berechnen für Ausgabe Tokens <strong>das 3- bis 5-Fache</strong> des Eingabepreises. Eine Antwort mit 300 Wörtern erzeugt etwa 400 Ausgabe Tokens. Präzise Antworten zu halten ist eine der wirkungsvollsten Methoden, Kosten zu sparen.</p>',
    },
    {
      type: 'title',
      text: 'Das richtige Modell für dein Budget wählen',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Starte mit einem leistungsfähigen Mittelklasse-Modell wie <code>GPT-4o mini</code> oder <code>Gemini 1.5 Flash</code> und steige nur dann auf, wenn die Qualität nicht ausreicht. Der Kostenunterschied zwischen kleinen und großen Modellen kann das 10- bis 100-Fache betragen.',
    },
    {
      type: 'paragraph',
      html: 'Nicht jede Aufgabe erfordert die gleiche Modellqualität. Klassifizierung, Extraktion und Zusammenfassungen funktionieren häufig auch mit kleineren, günstigeren Modellen gut. Spare dir große Frontier-Modelle wie <code>claude-3-opus</code> oder <code>o1</code> für komplexe Denkaufgaben, bei denen Qualität direkt das Ergebnis beeinflusst.',
    },
  ],
};

