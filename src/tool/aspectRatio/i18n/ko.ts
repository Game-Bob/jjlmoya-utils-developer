import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AspectRatioUI } from '../ui';

const slug = 'aspect-ratio-calculator';
const title = '픽셀 단위 화면 비율 계산기. 온라인 비율 계산';
const description =
  '이미지, 비디오 및 웹 디자인의 새로운 해상도를 계산하고 정확한 비율을 유지하여 그래픽 왜곡을 방지합니다. 16:9, 4:3, 21:9 및 사용자 정의 형식을 지원합니다.';

const faqData = [
  {
    question: '화면 비율(Aspect Ratio)이란 무엇인가요?',
    answer:
      '화면 비율은 이미지나 화면의 가로와 세로 폭 사이의 기하학적 관계를 설명합니다. 콜론으로 구분된 두 숫자(예: 16:9)로 표시되며, 가로 너비에 따라 세로 높이가 비례하여 어떻게 변하는지를 나타냅니다.',
  },
  {
    question: '왜 정확한 비율을 유지하는 것이 중요한가요?',
    answer:
      '화면 비율을 무시하면 이미지가 찌그러지거나 늘어나 보이고, 비디오에 예기치 않은 레터박스(검은 띠)가 생기며, 다양한 화면 크기에서 웹 구성 요소의 레이아웃이 깨질 수 있습니다. 정확한 비율을 유지하는 것은 전문적인 디스플레이의 핵심입니다.',
  },
  {
    question: '주어진 비율로 가로 너비에서 세로 높이를 어떻게 계산하나요?',
    answer:
      '계산 공식은 다음과 같습니다: 높이 = 너비 × (비율 높이 / 비율 너비). 예를 들어 가로가 1280px이고 비율이 16:9인 경우, 높이는 1280 × (9/16) = 720px가 됩니다.',
  },
  {
    question: 'YouTube 동영상의 표준 화면 비율은 무엇인가요?',
    answer:
      '16:9는 YouTube와 대부분의 현대적인 비디오 플랫폼의 표준 비율입니다. 이는 1280×720(HD), 1920×1080(Full HD) 또는 3840×2160(4K UHD)과 같은 해상도에 해당합니다.',
  },
  {
    question: '세로형 소셜 미디어 동영상은 어떤 화면 비율을 사용하나요?',
    answer:
      '9:16 비율을 사용하며, 이는 와이드스크린 형식의 정확히 반대입니다. TikTok, Instagram Reels 및 YouTube Shorts의 기본 비율로, 모바일 기기를 세로로 들고 콘텐츠를 소비하는 방식에서 기원했습니다.',
  },
];

const howToData = [
  {
    name: '원본 비율 입력',
    text: '유지하려는 비율의 가로 및 세로 값(예: 와이드스크린의 경우 16과 9)을 입력하거나 사전 설정 중 하나를 선택합니다.',
  },
  {
    name: '스케일 조정',
    text: '"실제 스케일" 섹션에서 가로 또는 세로 값을 변경합니다. 툴이 비율을 유지하기 위해 반대편 값을 자동으로 계산합니다.',
  },
  {
    name: '미리보기 확인',
    text: '미리보기 패널은 계산된 해상도 및 요약된 비율과 함께 비례 스케일로 결과 형태를 보여줍니다.',
  },
  {
    name: '프로젝트에 적용',
    text: '계산된 값을 복사하여 CSS(aspect-ratio: 16 / 9), 비디오 내보내기 또는 디자인 도구의 설정에서 사용하세요.',
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

const ui: AspectRatioUI = {
  labelConfig: '설정',
  labelRatio: '원본 비율',
  labelWidth: '가로 너비',
  labelHeight: '세로 높이',
  labelScale: '실제 스케일',
  labelPixelWidth: '픽셀 (가로)',
  labelPixelHeight: '픽셀 (세로)',
  labelPreview: '비례 미리보기',
  labelStatus: '완벽한 비율',
  labelOffline: '100% 오프라인 도구',
};

export const content: ToolLocaleContent<AspectRatioUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 자료 및 문서',
  bibliography: [
    {
      name: 'MDN Web Docs: aspect-ratio (CSS)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio',
    },
    {
      name: 'Wikipedia: Aspect ratio',
      url: 'https://ko.wikipedia.org/wiki/가로세로비',
    },
    {
      name: 'W3C: CSS Box Sizing Level 4',
      url: 'https://www.w3.org/TR/css-sizing-4/#aspect-ratio',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '화면 비율(Aspect Ratio)이란 무엇인가요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '그래픽 디자인, 사진 및 프론트엔드 개발에서 <strong>화면 비율</strong>은 이미지, 화면 또는 컨테이너의 가로와 세로 폭 사이의 기하학적 관계를 설명합니다. 일반적으로 콜론으로 구분된 두 숫자(예: <code>16:9</code>)로 표시되며, 가로 너비에 따라 세로 높이가 비례하여 어떻게 증가하는지를 나타냅니다.',
    },
    {
      type: 'paragraph',
      html: '화면 비율을 잘못 처리하면 사진이 찌그러지거나, 비디오에 예기치 않은 크롭(레터박스)이 발생하거나, 모바일에서 울트라 와이드 모니터까지 점진적으로 볼 때 웹 구성 요소의 레이아웃이 깨지는 등의 문제가 흔히 발생합니다.',
    },
    {
      type: 'title',
      text: '일반적인 산업 표준 비율',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '전문 분야에 따라 몇 가지 글로벌 표준 비율을 지속적으로 다루게 됩니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>16:9(와이드스크린):</strong> 현대적인 모니터, TV, YouTube 녹화 또는 표준 고해상도(1920×1080 또는 4K 등)에서 절대적으로 우세한 형식입니다.',
        '<strong>9:16(세로형):</strong> 모바일 기기에서의 기본 콘텐츠 소비(TikTok, Instagram Reels, YouTube Shorts)에서 기원했습니다. 와이드스크린 비디오와 정확히 동일한 비율이지만 기기를 물리적으로 회전시킨 형태입니다.',
        '<strong>4:3(클래식 / 빈티지):</strong> 구형 텔레비전 및 모니터, 아날로그 및 특수 디지털 카메라 모델에서 볼 수 있습니다. 약간 정사각형에 가까운 외관은 중앙 구도 축으로 주의를 직접 집중시킵니다.',
      ],
    },
    {
      type: 'title',
      text: '웹 개발과 CSS aspect-ratio 속성',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '이전의 CSS에서는 페이지 로드 시 발생하는 심각한 CLS(Cumulative Layout Shift)를 피하기 위해 YouTube iframe이나 커버 이미지의 동적 공간을 확보하려고 <strong>패딩 핵(Padding Hack)</strong>(예: <code>padding-top: 56.25%</code> 주입)과 같은 복잡한 수학적 시스템을 사용했습니다.',
    },
    {
      type: 'paragraph',
      html: '오늘날 모든 현대적인 레이아웃은 <code>aspect-ratio: 16 / 9;</code>와 같은 속성을 직접 적용하여 시맨틱한 코드를 구현하고, 브라우저가 Grid나 Flexbox를 통해 정의된 원래 너비로부터 누락된 치수를 자동으로 도출할 수 있도록 합니다.',
    },
    {
      type: 'paragraph',
      html: '이 로컬 픽셀 계산기는 디자인의 정밀함을 즉각적인 스케일링 계산으로 전환하여 렌더링 결과물이 치명적인 설정 오류로부터 보호받을 수 있게 도와줍니다.',
    },
  ],
};

