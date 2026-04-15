import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssSpecificityCalculatorUI } from '../ui';

const slug = 'css-specificity-calculator';
const title = 'CSS 우선순위 계산기 온라인. 선택자 가중치 시각화 도구';
const description =
  'CSS 선택자의 우선순위와 정확한 가중치를 계산합니다. 어떤 CSS 규칙이 캐스케이드에서 이기는지 시각적으로 확인하고 !important 남용을 방지하세요.';

const faqData = [
  {
    question: 'CSS 우선순위란 무엇인가요?',
    answer:
      'CSS 우선순위(specificity)는 여러 규칙이 경쟁할 때 브라우저가 어떤 CSS 규칙을 요소에 적용할지 결정하는 알고리즘입니다. 세 열의 점수(A, B, C)로 표현되며 각각 ID, 클래스·속성·가상 클래스, 요소·가상 요소의 수를 나타냅니다.',
  },
  {
    question: '클래스가 ID보다 우선순위가 높아질 수 있나요?',
    answer:
      '직접적으로는 불가능합니다. ID(1,0,0)는 클래스(0,N,0)가 아무리 많아도 항상 이깁니다. 우선순위 열 사이에는 자리 올림이 없기 때문입니다. 클래스 100개(0,100,0)도 ID 하나(1,0,0)를 이길 수 없습니다.',
  },
  {
    question: '두 선택자의 우선순위가 같으면 어떻게 되나요?',
    answer:
      '두 선택자의 가중치가 완전히 같을 때는 CSS 파일에서 나중에 선언된 것이 적용됩니다. 이것이 자연스러운 캐스케이드 순서입니다. 이 계산기는 동점이 발생하면 시각적으로 알려줍니다.',
  },
  {
    question: '!important 사용이 나쁜 관행으로 여겨지는 이유는 무엇인가요?',
    answer:
      '!important는 다른 모든 규칙을 강제로 무시하게 만들어 CSS의 자연스러운 캐스케이드를 깨뜨립니다. 규모가 큰 프로젝트에서 디버깅하기 어려운 문제를 일으킵니다. BEM 같은 방법론은 !important가 필요 없도록 우선순위를 평평하게 유지하는 것을 권장합니다.',
  },
];

const howToData = [
  {
    name: '첫 번째 선택자 입력',
    text: '왼쪽 텍스트 필드에 선택자 A를 입력하세요. 예: #header .nav-item > a. ID, 클래스, 요소 카운터가 즉시 업데이트됩니다.',
  },
  {
    name: '두 번째 선택자 입력',
    text: '오른쪽 텍스트 필드에 선택자 B를 입력하세요. 예: ul li.active a:hover. 가중치가 실시간으로 변하는 것을 확인하세요.',
  },
  {
    name: '결과 확인',
    text: '이긴 선택자 블록이 초록색 배너로 강조 표시됩니다. 두 선택자가 동점이면 캐스케이드 순서가 우선순위를 결정한다는 메시지가 표시됩니다.',
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
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ko',
};

const ui: CssSpecificityCalculatorUI = {
  labelA: '선택자 A',
  labelB: '선택자 B',
  placeholderA: '예: #header .nav-item > a',
  placeholderB: '예: ul li.active a:hover',
  cardIds: 'ID',
  cardClasses: '클래스 / 가상',
  cardElements: '요소',
  bannerWinner: '이 선택자가 이겼습니다!',
  msgTie: '두 선택자의 가중치가 같습니다. 같은 요소에 적용될 경우 CSS에서 <strong>나중에</strong> 작성된 쪽이 우선합니다.',
};

export const content: ToolLocaleContent<CssSpecificityCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 자료 및 문서',
  bibliography: [
    {
      name: 'MDN Web Docs: CSS 우선순위',
      url: 'https://developer.mozilla.org/ko/docs/Web/CSS/Specificity',
    },
    {
      name: 'W3C: Selectors Level 3 - 우선순위',
      url: 'https://www.w3.org/TR/selectors-3/#specificity',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'CSS 우선순위란?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'CSS 우선순위는 브라우저가 특정 요소에 어떤 속성 값을 적용할지 결정하는 알고리즘입니다. 쉽게 말해 규칙이 "얼마나 구체적인지"를 브라우저에 알려주는 수학적 점수입니다.',
    },
    {
      type: 'paragraph',
      html: '두 규칙의 우선순위가 다르면, 작성 순서와 관계없이 가중치가 높은 쪽이 이깁니다. 가중치가 같으면 소스 코드에서 나중에 선언된 것이 적용됩니다.',
    },
    {
      type: 'title',
      text: 'CSS 우선순위 계산 방법',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '우선순위는 세 가지 범주를 기반으로 계산되어 <strong>(A, B, C)</strong>라는 세 열의 가중치로 표현됩니다:',
    },
    {
      type: 'list',
      items: [
        '<strong>열 A (ID):</strong> 고유 식별자의 수를 셉니다. 예: <code>#header</code>는 열 A에서 1로 계산됩니다.',
        '<strong>열 B (클래스, 속성, 가상 클래스):</strong> 모든 클래스(<code>.button</code>), 속성(<code>[type="text"]</code>), 가상 클래스(<code>:hover</code>)를 셉니다.',
        '<strong>열 C (요소, 가상 요소):</strong> 모든 HTML 요소(<code>div</code>, <code>h1</code>)와 가상 요소(<code>::before</code>)를 셉니다.',
      ],
    },
    {
      type: 'title',
      text: '황금 규칙: 열 간 자리 올림은 없다',
      level: 3,
    },
    {
      type: 'tip',
      html: '우선순위가 (0,50,0)인 규칙은 (1,0,0)인 규칙보다 <strong>절대로</strong> 강해질 수 없습니다. <strong>ID 하나가 클래스 수백 개를 이깁니다.</strong> 열은 서로 넘쳐흐르지 않습니다.',
    },
    {
      type: 'title',
      text: '!important의 문제점과 BEM 아키텍처',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<code>!important</code>는 우선순위 규칙의 예외입니다. 사용하면 해당 선언이 다른 모든 규칙을 자동으로 덮어씁니다. 자연스러운 캐스케이드를 파괴하기 때문에 나쁜 관행으로 여겨집니다.',
    },
    {
      type: 'paragraph',
      html: '대규모 프로젝트에서 우선순위 충돌을 피하기 위해 <strong>BEM</strong>과 같은 방법론은 단일 깊이의 클래스 선택자만 사용하여 우선순위를 (0,1,0)으로 평평하게 유지하는 것을 권장합니다.',
    },
  ],
};

