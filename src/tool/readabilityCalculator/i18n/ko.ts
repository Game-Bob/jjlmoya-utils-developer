import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReadabilityCalculatorUI } from '../ui';

const slug = 'visual-readability-calculator-wcag-apca';
const title = '시각적 가독성 계산기 WCAG와 APCA';
const description = 'APCA(WCAG 3.0)로 디자인의 실제 명암 대비를 확인하세요. 폰트 굵기와 크기가 실제 가독성에 미치는 영향을 분석합니다. 단순 비율부터 지각적 가독성까지 모두 확인할 수 있습니다.';

const faqData = [
  {
    question: 'APCA란 무엇이며 WCAG 2.1과 어떻게 다른가요?',
    answer: 'APCA는 WCAG 3.0을 위해 개발된 고급 지각적 명암 대비 알고리즘(Advanced Perceptual Contrast Algorithm)입니다. 기존의 단순 비율과 달리, APCA는 극성(밝은 배경 대 어두운 배경)과 폰트 크기 및 굵기를 고려하여 인간의 뇌가 명암 대비를 지각하는 방식을 수학적으로 모델링합니다.',
  },
  {
    question: 'Lc 값은 무엇을 의미하나요?',
    answer: 'Lc(Lightness Contrast)는 APCA가 생성하는 명암 대비 값입니다. 100은 이상적인 최대 명암 대비를 나타내며, 60 미만은 연속적인 읽기 텍스트에 문제가 생기기 시작하는 수준입니다. 이는 지각의 절대적 크기 척도입니다.',
  },
  {
    question: '폰트 굵기가 가독성에 어떤 영향을 미치나요?',
    answer: '얇은 폰트(Thin/Light)는 읽기 위해 훨씬 더 높은 명암 대비가 필요합니다. APCA는 낮은 굵기의 폰트에 불이익을 주며, 굵기 100의 폰트로 WCAG를 통과한 디자인이 실제로는 읽기 어려울 수 있음을 보여줍니다.',
  },
  {
    question: '이 계산기는 개인정보를 보호하나요?',
    answer: '네, 모든 계산은 브라우저에서 로컬로 수행됩니다. 분석하는 색상과 설정은 어떤 서버에도 전송되지 않으므로 디자인 프로젝트의 완전한 개인정보 보호가 보장됩니다.',
  },
];

const howToData = [
  { name: '색상 선택', text: '색상 선택기를 사용하여 디자인의 텍스트 색상과 배경 색상을 설정하세요.' },
  { name: '타이포그래피 조정', text: '폰트 크기와 굵기 슬라이더를 조정하여 실제 타이포그래피를 시뮬레이션하세요.' },
  { name: '결과 확인', text: 'WCAG 2.1 비율과 APCA Lc 값을 확인하여 디자인이 접근성 기준을 충족하는지 파악하세요.' },
  { name: '권장 사항 검토', text: '본문 텍스트, 작은 텍스트, UI 요소에 대한 APCA 전용 권장 사항을 확인하세요.' },
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

const ui: ReadabilityCalculatorUI = {
  labelColors: '기본 색상',
  labelText: '텍스트',
  labelBg: '배경',
  labelTypo: '타이포그래피',
  labelFontSize: '폰트 크기',
  labelFontWeight: '폰트 굵기',
  labelCompare: '명암 대비 비교',
  labelPreview: '지각적 미리보기',
  labelApcaRecs: 'APCA 권장 사항',
  labelBody: '본문 텍스트 (Body)',
  labelSmall: '작은 텍스트 / 캡션',
  labelUi: 'UI / 버튼',
  statusYes: '예',
  statusNo: '아니오',
  wcagAAA: 'AAA 통과',
  wcagAA: 'AA 통과',
  wcagLarge: '큰 텍스트만 해당',
  wcagFail: '미통과',
  apcaExcellent: '우수',
  apcaGood: '양호',
  apcaMinimal: '최소',
  apcaPoor: '미흡',
  previewText: '시각적 가독성은 수학만이 아닙니다. 빛과 그림자가 당신의 눈과 상호작용하는 방식입니다.',
  wcagRatioLabel: 'WCAG 2.1 비율',
  apcaLcLabel: 'APCA Lc (WCAG 3)',
};

export const content: ToolLocaleContent<ReadabilityCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '명암 대비와 APCA 관련 자료',
  bibliography: [
    { name: 'W3C: WCAG 3.0 초안 (Silver)', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/' },
    { name: 'Myndex: APCA 참조 가이드', url: 'https://apcaw3.myndex.com/' },
    { name: 'MDN: 접근성과 색상 명암 대비', url: 'https://developer.mozilla.org/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '시각적 가독성 계산기 (WCAG vs APCA)', level: 2 },
    {
      type: 'paragraph',
      html: '새로운 지각적 접근성 표준으로 색상과 타이포그래피가 실제 가독성에 미치는 영향을 이해하세요. WCAG 2.1은 2008년의 단순한 수학 공식을 사용합니다. <strong>APCA</strong>는 인간의 지각을 모방한 <strong>WCAG 3.0</strong>의 새로운 모델입니다.',
    },
    { type: 'title', text: 'APCA의 핵심 포인트', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>극성:</strong> 다크 모드와 라이트 모드가 다르게 인식된다는 점을 반영합니다.',
        '<strong>폰트 굵기:</strong> 타이포그래피 굵기에 따른 구체적인 명암 대비 수준(Lc)을 설정합니다.',
        '<strong>선형성:</strong> 2008년 상대적 밝기 모델의 수학적 부정확성을 수정합니다.',
      ],
    },
    { type: 'title', text: '권장 APCA 수준', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Lc 90+:</strong> 매우 작거나 가는 텍스트에 이상적입니다.',
        '<strong>Lc 75:</strong> 메인 본문 텍스트의 표준 수준입니다.',
        '<strong>Lc 60:</strong> 중간 크기 콘텐츠의 최소 가독성 기준입니다.',
        '<strong>Lc 45:</strong> 크거나 장식적인 요소의 최소 기준입니다.',
      ],
    },
  ],
};

