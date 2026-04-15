import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LlmCostCalculatorUI } from '../ui';

const slug = 'kalkulator-kosztow-llm';
const title = 'Kalkulator Kosztów LLM. Estymator Cen Modeli AI';
const description =
  'Bezpłatne narzędzie online do oszacowania kosztów wywoływania interfejsów API LLM. Porównuj GPT-4o, Claude, Gemini, Llama i inne z rzeczywistymi cenami tokenów za milion tokenów.';

const faqData = [
  {
    question: 'Jak obliczany jest koszt interfejsu API LLM?',
    answer:
      'Interfejsy API LLM pobierają opłaty oddzielnie za tokeny wejściowe (prompt) i tokeny wyjściowe (odpowiedź). Całkowity koszt na żądanie to: (tokeny wejściowe × cena wejściowa + tokeny wyjściowe × cena wyjściowa) / 1 000 000. Pomnóż przez liczbę żądań, aby uzyskać całkowity miesięczny koszt.',
  },
  {
    question: 'Co to są tokeny i jak się mają do słów?',
    answer:
      'Token to podstawowa jednostka tekstu, którą przetwarza model językowy. Przeciętnie 1 token równa się około 0,75 słowa w języku angielskim, więc 1000 tokenów ≈ 750 słów. Ceny są podawane za milion tokenów ($/1M), co jest standardową jednostką cen na wszystkich platformach.',
  },
  {
    question: 'Dlaczego tokeny wyjściowe są droższe niż tokeny wejściowe?',
    answer:
      'Generowanie tekstu (wyjście) wymaga, aby model obliczył każdy token sekwencyjnie, co jest bardziej intensywne obliczeniowo niż czytanie wejścia. Większość dostawców pobiera 3-5 razy więcej za tokeny wyjściowe niż tokeny wejściowe.',
  },
  {
    question: 'Jak mogę zmniejszyć koszty API LLM?',
    answer:
      'Użyj najmniejszego modelu, który spełnia Twoje wymagania jakościowe. Jeśli to możliwe, buforuj powtórzone prompty. Minimalizuj długość system prompt i unikaj niepotrzebnego kontekstu. W przypadku prostych zadań klasyfikacji lub ekstrakcji, mniejsze modele, takie jak GPT-4o mini lub Gemini Flash, oferują znaczne oszczędności.',
  },
];

const howToData = [
  {
    name: 'Wybierz model',
    text: 'Wybierz model AI, który planujesz użyć, z rozwijanego menu pogrupowanego. Modele są zorganizowane według dostawcy.',
  },
  {
    name: 'Wprowadź liczbę tokenów',
    text: 'Wprowadź oczekiwaną liczbę tokenów wejściowych (Twój prompt) i tokenów wyjściowych (odpowiedź). Poniżej każdego pola pojawią się oszacowania słów.',
  },
  {
    name: 'Ustaw liczbę żądań',
    text: 'Użyj suwaka lub pola liczby, aby wprowadzić, ile połączeń API spodziewasz się. Całkowity koszt aktualizuje się w czasie rzeczywistym.',
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
  inLanguage: 'pl',
};

const ui: LlmCostCalculatorUI = {
  labelModel: 'Model LLM',
  labelInputTokens: 'Tokeny Wejściowe',
  labelOutputTokens: 'Tokeny Wyjściowe',
  labelRequests: 'Liczba Żądań',
  unitWords: 'słowa',
  labelCostPerRequest: 'Koszt za Żądanie',
  labelTotal: 'Szacunkowy Całkowity Koszt',
  labelInput: 'Wejście',
  labelOutput: 'Wyjście',
};

export const content: ToolLocaleContent<LlmCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje i Źródła Cen',
  bibliography: [
    {
      name: 'Ceny API OpenAI',
      url: 'https://openai.com/pricing',
    },
    {
      name: 'Ceny API Anthropic',
      url: 'https://www.anthropic.com/pricing',
    },
    {
      name: 'Ceny Google AI Studio',
      url: 'https://ai.google.dev/pricing',
    },
    {
      name: 'Tokenizer OpenAI',
      url: 'https://platform.openai.com/tokenizer',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Zrozumienie cen API LLM',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Interfejsy API dużych modeli językowych pobierają opłaty na podstawie użycia tokenów, a nie czasu lub żądań. Każde połączenie API ma dwa koszty: <strong>koszt wejścia</strong> (przetwarzanie Twojego promptu) i <strong>koszt wyjścia</strong> (generowanie odpowiedzi). Zrozumienie tego podziału jest kluczowe do dokładnego oszacowania Twojego miesięcznego rachunku.',
    },
    {
      type: 'title',
      text: 'Tokeny wejściowe a tokeny wyjściowe',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'Tokeny wejściowe',
      html: '<p>Tokeny wejściowe reprezentują wszystko wysłane <strong>do</strong> modelu: Twój system prompt, historię konwersacji i komunikat użytkownika. Są tańsze, ponieważ model przetwarza je równolegle. Typowy system prompt 200 słów kosztuje około 267 tokenów wejściowych.</p>',
    },
    {
      type: 'card',
      title: 'Tokeny wyjściowe',
      html: '<p>Tokeny wyjściowe są generowane jeden po drugim w sekwencji, co czyni je bardziej kosztownym obliczeniowo. Większość dostawców pobiera <strong>3-5 razy więcej</strong> za tokeny wyjściowe. Odpowiedź 300 słów generuje około 400 tokenów wyjściowych. Utrzymanie odpowiedzi zwięzłe to jedna z najskuteczniejszych strategii obniżania kosztów.</p>',
    },
    {
      type: 'title',
      text: 'Wybór właściwego modelu do Twojego budżetu',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Zacznij od zdolnego modelu średniej klasy, takiego jak <code>GPT-4o mini</code> lub <code>Gemini 1.5 Flash</code>, i uaktualnij tylko wtedy, gdy jakość spadnie. Różnica w kosztach między małym a dużym modelem może wynosić 10-100 razy.',
    },
    {
      type: 'paragraph',
      html: 'Nie wszystkie zadania wymagają tej samej jakości modelu. Zadania klasyfikacji, ekstrakcji i streszczania często działają dobrze z mniejszymi, tańszymi modelami. Zarezerwuj duże modele graniczne, takie jak <code>claude-3-opus</code> lub <code>o1</code>, na złożone zadania rozumowania, gdzie jakość bezpośrednio wpływa na wyniki.',
    },
  ],
};
