import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LlmCostCalculatorUI } from '../ui';

const slug = 'llm-cost-calculator';
const title = 'LLM 비용 계산기. AI 모델 API 가격 추정 도구';
const description =
  'LLM API 호출 비용을 무료로 추산할 수 있는 온라인 도구입니다. GPT-4o, Claude, Gemini, Llama 등을 백만 토큰당 실제 가격으로 비교해 보세요.';

const faqData = [
  {
    question: 'LLM API 비용은 어떻게 계산되나요?',
    answer:
      'LLM API는 입력 토큰(프롬프트)과 출력 토큰(응답)을 별도로 청구합니다. 요청당 총 비용은 (입력 토큰 × 입력 가격 + 출력 토큰 × 출력 가격) / 1,000,000으로 계산됩니다. 여기에 요청 수를 곱하면 월간 총 비용을 구할 수 있습니다.',
  },
  {
    question: '토큰이란 무엇이며, 단어와 어떤 관계가 있나요?',
    answer:
      '토큰은 언어 모델이 처리하는 텍스트의 기본 단위입니다. 영어 기준으로 평균 1 토큰은 약 0.75 단어에 해당하므로, 1,000 토큰 ≈ 750 단어입니다. 가격은 백만 토큰당($/1M)으로 표시되며, 이것이 모든 제공업체에서 통용되는 표준 단위입니다.',
  },
  {
    question: '출력 토큰이 입력 토큰보다 더 비싼 이유는 무엇인가요?',
    answer:
      '텍스트를 생성(출력)할 때 모델은 각 토큰을 순서대로 계산해야 하기 때문에, 입력을 읽는 것보다 연산 부하가 큽니다. 대부분의 제공업체에서는 출력 토큰에 입력 토큰보다 3~5배 높은 요금을 부과합니다.',
  },
  {
    question: 'LLM API 비용을 줄이려면 어떻게 해야 하나요?',
    answer:
      '품질 요건을 충족하는 가장 작은 모델을 사용하세요. 반복되는 프롬프트는 가능하면 캐싱을 활용하세요. 시스템 프롬프트 길이를 최소화하고 불필요한 컨텍스트는 제거하세요. 단순 분류나 추출 작업에는 GPT-4o mini나 Gemini Flash 같은 경량 모델이 상당한 비용 절감 효과를 제공합니다.',
  },
];

const howToData = [
  {
    name: '모델 선택',
    text: '그룹화된 드롭다운에서 사용할 AI 모델을 선택하세요. 모델은 제공업체별로 정리되어 있습니다.',
  },
  {
    name: '토큰 수 입력',
    text: '예상 입력 토큰 수(프롬프트)와 출력 토큰 수(응답)를 입력하세요. 각 필드 아래에 단어 수 추정값이 표시됩니다.',
  },
  {
    name: '요청 수 설정',
    text: '슬라이더 또는 숫자 입력 필드를 사용해 예상 API 호출 수를 입력하세요. 총 비용이 실시간으로 업데이트됩니다.',
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
  inLanguage: 'ko',
};

const ui: LlmCostCalculatorUI = {
  labelModel: 'LLM 모델',
  labelInputTokens: '입력 토큰',
  labelOutputTokens: '출력 토큰',
  labelRequests: '요청 수',
  unitWords: '단어',
  labelCostPerRequest: '요청당 비용',
  labelTotal: '예상 총 비용',
  labelInput: '입력',
  labelOutput: '출력',
};

export const content: ToolLocaleContent<LlmCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 자료 및 가격 출처',
  bibliography: [
    {
      name: 'OpenAI API 가격',
      url: 'https://openai.com/pricing',
    },
    {
      name: 'Anthropic API 가격',
      url: 'https://www.anthropic.com/pricing',
    },
    {
      name: 'Google AI Studio 가격',
      url: 'https://ai.google.dev/pricing',
    },
    {
      name: 'OpenAI 토크나이저',
      url: 'https://platform.openai.com/tokenizer',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'LLM API 가격 구조 이해하기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '대형 언어 모델 API는 시간이나 요청 수가 아닌 토큰 사용량을 기준으로 요금을 부과합니다. API 호출 한 번에는 두 가지 비용이 발생합니다. <strong>입력 비용</strong>(프롬프트 처리)과 <strong>출력 비용</strong>(응답 생성)입니다. 이 차이를 이해하는 것이 월간 비용을 정확하게 예측하는 핵심입니다.',
    },
    {
      type: 'title',
      text: '입력 토큰과 출력 토큰 비교',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: '입력 토큰',
      html: '<p>입력 토큰은 모델에 <strong>전송되는</strong> 모든 내용을 의미합니다. 시스템 프롬프트, 대화 기록, 사용자 메시지가 포함됩니다. 모델이 이를 병렬로 처리하기 때문에 상대적으로 저렴합니다. 200단어 분량의 일반적인 시스템 프롬프트는 약 267개의 입력 토큰에 해당합니다.</p>',
    },
    {
      type: 'card',
      title: '출력 토큰',
      html: '<p>출력 토큰은 하나씩 순서대로 생성되기 때문에 연산 부하가 더 큽니다. 대부분의 제공업체는 출력 토큰에 <strong>3~5배 더 높은</strong> 요금을 부과합니다. 300단어 분량의 응답은 약 400개의 출력 토큰을 생성합니다. 응답을 간결하게 유지하는 것이 가장 효과적인 비용 절감 전략 중 하나입니다.</p>',
    },
    {
      type: 'title',
      text: '예산에 맞는 모델 선택하기',
      level: 3,
    },
    {
      type: 'tip',
      html: '<code>GPT-4o mini</code>나 <code>Gemini 1.5 Flash</code> 같은 중급 모델부터 시작하고, 품질이 부족한 경우에만 상위 모델로 업그레이드하세요. 소형 모델과 대형 모델의 비용 차이는 10~100배에 달할 수 있습니다.',
    },
    {
      type: 'paragraph',
      html: '모든 작업에 동일한 수준의 모델이 필요한 것은 아닙니다. 분류, 추출, 요약 같은 작업은 더 작고 저렴한 모델로도 충분히 처리할 수 있는 경우가 많습니다. <code>claude-3-opus</code>나 <code>o1</code> 같은 대형 프론티어 모델은 품질이 결과에 직접적인 영향을 미치는 복잡한 추론 작업을 위해 아껴두세요.',
    },
  ],
};

