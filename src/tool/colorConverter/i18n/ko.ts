import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ColorConverterUI } from '../ui';

const slug = 'color-converter-rgb-hex-hsl';
const title = '온라인 컬러 컨버터 RGB HEX 및 HSL';
const description = 'RGB, HEX, HSL 간에 색상을 즉시 변환하세요. 보색 조화를 생성하고 WCAG 대비를 분석합니다. 100% 클라이언트 측에서 실행되며 개인정보를 보호합니다.';

const faqData = [
  {
    question: 'RGB에서 HEX 및 HSL로의 색상 변환기는 어떻게 작동하나요?',
    answer: '이 도구는 빨강, 초록, 파랑(RGB) 값을 가져와 수학적 알고리즘을 사용하여 이에 해당하는 16진수(HEX) 또는 색상, 채도, 명도(HSL) 값으로 변환합니다. 반대 방향으로도 작동합니다.',
  },
  {
    question: '디자인에서 HEX 대신 HSL을 사용해야 하는 이유는 무엇인가요?',
    answer: 'HSL 형식은 훨씬 더 직관적이기 때문입니다. 색조를 바꾸지 않고 채도나 명도를 조절할 수 있어 조화로운 팔레트나 버튼 상태(호버, 비활성화)를 만들기가 훨씬 쉽습니다.',
  },
  {
    question: '상대 대비 값이란 무엇인가요?',
    answer: '휘도를 기준으로 배경에 대한 텍스트의 가독성을 나타내는 지표입니다. 높은 대비는 시각 장애가 있는 사람들도 WCAG 접근성 지침에 따라 콘텐츠를 읽을 수 있도록 보장합니다.',
  },
  {
    question: '이 온라인 색상 변환기를 사용하는 것이 안전한가요?',
    answer: '물론입니다. 100% 클라이언트 측에서 실행되므로 색상 데이터가 사용자의 컴퓨터를 떠나지 않습니다. 모든 처리가 브라우저 내에서 직접 이루어지므로 개인정보 보호와 즉각적인 성능을 보장합니다.',
  },
];

const howToData = [
  { name: '색상 선택', text: '빨강, 초록, 파랑 슬라이더를 사용하거나 텍스트 필드에 HEX 코드를 직접 입력하세요.' },
  { name: 'RGB 채널 조정', text: '슬라이더를 움직여 각 채널의 강도를 변경하고 실시간 업데이트를 확인하세요.' },
  { name: '형식 복사', text: '필요한 HEX, RGB 또는 HSL 형식 옆의 복사 버튼을 클릭하세요.' },
  { name: '조화 탐색', text: '조화 색상(보색, 유사색, 삼보색)을 클릭하여 클립보드에 복사하세요.' },
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
  step: howToData.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
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

const ui: ColorConverterUI = {
  labelPreview: '미리보기 (HEX를 복사하려면 클릭)',
  labelHarmonies: '색상 조화',
  labelR: '빨강',
  labelG: '초록',
  labelB: '파랑',
  labelComp: '보색',
  labelAna1: '유사 1',
  labelAna2: '유사 2',
  labelTri1: '삼보색 1',
  labelTri2: '삼보색 2',
  btnCopy: '복사',
  btnCopied: '복사됨',
  contrastLabel: '대비',
  clickToCopy: '클릭하여 복사',
};

export const content: ToolLocaleContent<ColorConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '색상 및 웹 디자인 리소스',
  bibliography: [
    { name: 'W3C: CSS 색상 문서', url: 'https://www.w3.org/TR/css-color-4/' },
    { name: 'MDN: HSL 색상 모델 가이드', url: 'https://developer.mozilla.org/ko/docs/Web/CSS/color_value/hsl' },
    { name: 'WebAIM: 대비 및 접근성 가이드', url: 'https://webaim.org/resources/contrastchecker/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '개발자를 위한 RGB에서 HEX 및 HSL 색상 변환기', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>프론트엔드 개발</strong> 및 <strong>UI/UX 디자인</strong>의 세계에서 색상 관리는 끊임없는 작업입니다. 당사의 <strong>온라인 색상 변환기</strong>를 사용하면 <strong>HEX, RGB, HSL</strong> 간의 값을 즉시 수학적 정밀도로 변환할 수 있습니다.',
    },
    { type: 'title', text: '색상 형식: HEX, RGB 및 HSL', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>HEX (16진수):</strong> CSS의 사실상 표준입니다. 작고 코드 내에서 공유하기 쉽습니다.',
        '<strong>RGB (빨강, 초록, 파랑):</strong> 가산 혼합 시스템을 기반으로 합니다. 채널을 직접 조작하거나 RGBA로 투명도를 적용하는 데 이상적입니다.',
        '<strong>HSL (색상, 채도, 명도):</strong> 가장 직관적인 형식입니다. 색조, 채도, 명도를 조정하여 조화로운 팔레트를 만드세요.',
      ],
    },
    { type: 'title', text: '대비 및 WCAG 접근성', level: 3 },
    {
      type: 'paragraph',
      html: '계산기에는 휘도를 기반으로 한 <strong>상대 대비</strong> 측정 기능이 포함되어 있습니다. 이를 통해 <strong>WCAG</strong> 지침을 준수하고 텍스트를 선택한 배경에서 읽을 수 있는지 확인할 수 있습니다.',
    },
    { type: 'title', text: '자동 색상 조화', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>보색 (Complementary):</strong> 색상환에서 반대되는 색상으로 최소 대비를 극대화하는 데 이상적입니다.',
        '<strong>유사색 (Analogous):</strong> 부드럽고 조화로운 전환을 만드는 인접한 색상입니다.',
        '<strong>삼보색 (Triadic):</strong> 활기차고 균형 잡힌 구성을 위한 세 가지 등거리 색상입니다.',
      ],
    },
  ],
};

