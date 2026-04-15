import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicalTypographyUI } from '../ui';

const slug = 'musical-typography';
const title = '음악적 타이포그래피 스케일. 모듈러 스케일 계산기';
const description =
  '음악적 비율에 기반한 모듈러 스케일로 조화로운 시각적 계층 구조를 만드는 무료 온라인 도구입니다. 웹 디자인에 바로 사용할 수 있는 CSS 변수를 생성합니다.';

const faqData = [
  {
    question: '타이포그래피 모듈러 스케일이란 무엇인가요?',
    answer:
      '일정한 수학적 비율을 기반으로 폰트 크기를 결정하는 방법입니다. 음악에서 음표들이 화성적 관계를 가지듯, 모듈러 스케일은 균형 잡히고 예측 가능한 시각적 계층 구조를 만들어냅니다.',
  },
  {
    question: '디자인에 음악적 음정을 사용하는 이유가 무엇인가요?',
    answer:
      '음악적 음정은 인간의 뇌가 조화롭다고 인식하는 비율입니다. 이를 텍스트 크기에 적용하면 크기를 임의로 선택하는 대신, 올바르고 전문적으로 느껴지는 시각적 구조가 탄생합니다.',
  },
  {
    question: '타이포그래피에서 황금비란 무엇인가요?',
    answer:
      '황금 분할이라고도 불리는 1.618 비율입니다. 계층의 각 단계가 기하급수적으로 커지는 매우 극적이고 우아한 스케일을 만들어냅니다. 포트폴리오나 예술 중심 웹사이트에 적합합니다.',
  },
  {
    question: 'CSS 파일에 스케일을 어떻게 적용하나요?',
    answer:
      '이 도구는 :root { --step-N: Xrem; } 형식의 CSS 변수(토큰)를 생성합니다. 메인 CSS 파일에 복사한 후 var(--step-N)으로 사용하면 사이트 전체에서 일관된 타이포그래피를 유지할 수 있습니다.',
  },
];

const howToData = [
  {
    name: '기본 크기 설정',
    text: '스케일의 기본음이 될 본문 텍스트의 폰트 크기(보통 16px)를 입력합니다.',
  },
  {
    name: '음정 선택',
    text: '각 제목 레벨 간의 크기 차이를 결정할 음악적 비율을 선택합니다.',
  },
  {
    name: '계층 구조 미리보기',
    text: '타이포그래피 레벨이 실시간으로 어떻게 보이는지 확인하고, 시각적 조화가 프로젝트에 맞는지 검토합니다.',
  },
  {
    name: '코드 내보내기',
    text: 'CSS 변수 복사를 클릭하면 워크플로에 바로 붙여넣을 수 있는 코드 블록을 얻을 수 있습니다.',
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
  applicationCategory: 'DesignApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ko',
};

const ui: MusicalTypographyUI = {
  labelConfig: '설정',
  labelBaseSize: '기본 크기 (px)',
  hintBaseSize: '본문 텍스트의 크기 (보통 16px).',
  labelRatio: '음악적 스케일 (비율)',
  hintRatio: '각 단계에서 크기가 얼마나 커지는지 결정합니다.',
  labelCalculated: '계산된 값',
  labelPreview: '미리보기',
  btnCopyCss: 'CSS 변수 복사',
  feedbackCopied: '변수가 클립보드에 복사되었습니다!',
  previewText: '음악적 타이포그래피',
  previewSubtext: '디자인을 위한 완벽한 조화 스케일.',
  ratioSecundaMenor: '단2도',
  ratioSegundaMayor: '장2도',
  ratioTerceraMenor: '단3도',
  ratioTerceraMayor: '장3도',
  ratioCuartaPerfecta: '완전4도',
  ratioCuartaAumentada: '증4도',
  ratioQuintaPerfecta: '완전5도',
  ratioProporcionAurea: '황금비',
  ratioSextaMayor: '장6도',
  ratioSeptimaMenor: '단7도',
  ratioSeptimaMayor: '장7도',
  ratioOctava: '옥타브',
};

export const content: ToolLocaleContent<MusicalTypographyUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 자료',
  bibliography: [
    {
      name: 'Bringhurst, R. The Elements of Typographic Style',
      url: 'https://en.wikipedia.org/wiki/The_Elements_of_Typographic_Style',
    },
    {
      name: 'Brown, T. More Meaningful Typography. A List Apart',
      url: 'https://alistapart.com/article/more-meaningful-typography/',
    },
    {
      name: 'Physics of Music. Musical Intervals and Scales',
      url: 'https://es.scribd.com/document/199729396/Physics-of-Music-Notes',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '웹 디자인 속 보이지 않는 조화',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>음악적 타이포그래피 스케일</strong>은 음악적 음정의 수학을 타이포그래피 디자인에 적용합니다. 음악 작품이 정밀한 비율로 구성되듯, 탄탄한 시각 디자인도 모든 크기를 서로 연결하는 수학적 구조로부터 힘을 얻습니다.',
    },
    {
      type: 'title',
      text: '모듈러 스케일의 작동 원리',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: '공식',
      html: '<p>진행 방식은 간단합니다: <code>크기 = 기본값 × 비율<sup>n</sup></code>. 0단계가 기본 텍스트, 1단계가 작은 소제목, 4~5단계가 주요 H1이 됩니다. 동일한 배수 상수(비율)가 모든 관계를 일관성 있게 유지합니다.</p>',
    },
    {
      type: 'card',
      title: '왜 "음악적"인가',
      html: '<p>피타고라스학파는 현을 단순한 비율(1:2, 2:3, 3:4)로 나누면 협화음이 생긴다는 것을 발견했습니다. 옥타브, 완전5도, 완전4도 — 이 음정들이 바로 타이포그래피 비율과 정확히 일치합니다. 당신은 시각적 음악을 작곡하고 있는 것입니다.</p>',
    },
    {
      type: 'title',
      text: '올바른 비율 선택하기',
      level: 3,
    },
    {
      type: 'tip',
      html: '정보가 밀집한 인터페이스(대시보드, 표)에는 <code>1.125</code>나 <code>1.2</code>와 같은 작은 비율을 사용하세요. 에디토리얼이나 포트폴리오 사이트에는 <code>1.5</code>나 <code>1.618</code>처럼 표현력이 강한 비율이 효과적입니다.',
    },
    {
      type: 'paragraph',
      html: '스케일을 <code>font-size</code>에만 국한하지 마세요. 동일한 CSS 변수를 <code>margin</code>, <code>padding</code>, <code>gap</code>에도 활용할 수 있습니다. 여백이 텍스트와 같은 수학적 진행을 따를 때, 디자인은 모두가 느끼지만 쉽게 설명하기 어려운 수준의 완성도에 도달합니다.',
    },
  ],
};

