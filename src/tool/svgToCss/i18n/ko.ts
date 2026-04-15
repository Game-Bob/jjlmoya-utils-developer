import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgToCssUI } from '../ui';

const slug = 'svg-to-css-converter';
const title = '무료 온라인 SVG to CSS 및 Data URI 변환기';
const description =
  'SVG 아이콘과 벡터를 CSS 코드(Background 또는 Mask) 또는 압축된 Data URI로 변환하세요. 외부 HTTP 요청을 제거하여 웹사이트 성능을 최적화합니다.';

const faqData = [
  {
    question: 'Data URI를 사용하는 것과 외부 .svg 파일을 사용하는 것 중 무엇이 더 좋나요?',
    answer:
      '사용 사례에 따라 다릅니다. Data URI는 HTTP 요청을 제거하지만(작은 아이콘에 이상적), CSS 파일 크기를 늘립니다. 크거나 세부적인 일러스트레이션의 경우 외부 파일이 더 바람직합니다.',
  },
  {
    question: 'CSS에 포함된 SVG의 색상을 어떻게 변경하나요?',
    answer:
      "'mask-image'를 사용하는 것이 가장 좋은 방법입니다. SVG를 마스크로 정의하면 'background-color'를 사용하여 :hover 상태에서도 색상을 동적으로 변경할 수 있습니다.",
  },
  {
    question: '어떤 브라우저가 CSS 마스크를 지원하나요?',
    answer:
      '모든 현대적인 브라우저(Chrome, Firefox, Safari, Edge)가 완전히 지원합니다. 구형 브라우저의 경우 일반적으로 -webkit- 접두사가 사용됩니다.',
  },
  {
    question: 'Data URI를 사용하면 SEO에 영향을 미치나요?',
    answer:
      '예, 긍정적인 영향을 미칩니다. 페이지 렌더링에 필요한 요청 수를 줄임으로써 로딩 시간(LCP)과 Core Web Vitals 점수를 개선합니다.',
  },
  {
    question: 'React나 Tailwind와 같은 프레임워크에서 사용할 수 있나요?',
    answer:
      '물론입니다! 생성된 코드를 복사하여 .css 파일이나 Tailwind CSS의 임의 값으로 사용할 수 있습니다.',
  },
];

const howToData = [
  {
    name: 'SVG 붙여넣기',
    text: 'SVG 파일의 소스 코드를 복사하여 왼쪽의 텍스트 영역에 붙여넣습니다.',
  },
  {
    name: '출력 유형 선택',
    text: '배경 이미지(정적인 배경용), CSS 마스크(동적 색상의 아이콘용) 또는 Data URI 전용(직접 사용용) 중에서 선택합니다.',
  },
  {
    name: '결과 복사하기',
    text: '"복사"를 클릭하여 생성된 CSS 코드를 클립보드에 담습니다.',
  },
  {
    name: '프로젝트에 적용',
    text: '코드를 스타일시트나 CSS 컴포넌트에 붙여넣습니다. 마스크의 경우 아이콘 색상을 정의하기 위해 background-color도 추가하세요.',
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

const ui: SvgToCssUI = {
  labelPasteTitle: 'SVG 붙여넣기',
  labelInputArea: 'SVG 소스 코드',
  labelPreviewOriginal: '원본 미리보기',
  labelResultTitle: 'CSS 결과',
  labelPreviewApplied: '적용된 결과',
  tabBackground: '배경 이미지',
  tabMask: 'CSS 마스크 / Webkit',
  tabUri: 'Data URI 전용',
  btnCopy: '복사',
  btnCopied: '복사됨!',
  placeholder: '<svg xmlns="http://www.w3.org/2000/svg" ...',
};

export const content: ToolLocaleContent<SvgToCssUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 자료 및 문서',
  bibliography: [
    {
      name: 'CSS-Tricks: 배경으로 SVG 사용하기',
      url: 'https://css-tricks.com/using-svg/',
    },
    {
      name: 'MDN Web Docs: mask-image',
      url: 'https://developer.mozilla.org/ko/docs/Web/CSS/mask-image',
    },
    {
      name: 'MDN Web Docs: background-image',
      url: 'https://developer.mozilla.org/ko/docs/Web/CSS/background-image',
    },
    {
      name: 'W3C: CSS Masking Module Level 1',
      url: 'https://www.w3.org/TR/css-masking-1/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '왜 SVG를 CSS Data URI로 변환하나요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '현대적인 웹 개발에서 성능과 리소스 로딩 최적화는 필수적입니다. <strong>Data URI</strong>를 통해 아이콘을 CSS에 직접 포함하면 불필요한 HTTP 요청을 제거하고, 지연 시간을 줄이며 TTI(Time to Interactive)를 개선할 수 있습니다.',
    },
    {
      type: 'paragraph',
      html: '이 도구는 <code>&lt;svg&gt;</code> 벡터 코드를 브라우저가 배경 이미지나 클리핑 마스크로 해석할 수 있는 인코딩된 문자열로 변환합니다. 이를 통해 벡터 특유의 무한한 확장성과 선명함을 유지할 수 있습니다.',
    },
    {
      type: 'title',
      text: '주요 기술적 이점',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>HTTP 요청 제로화:</strong> 그래픽을 <code>.css</code> 파일에 직접 포함하면 브라우저가 추가 외부 파일을 다운로드할 필요가 없습니다.',
        '<strong>CSS 마스크를 통한 커스터마이징:</strong> <code>mask-image</code> 기술을 사용하면 <code>background-color</code>만으로 복잡한 벡터 아이콘의 색상을 간단히 변경할 수 있습니다.',
        '<strong>즉각적인 렌더링:</strong> 스타일시트가 다운로드되는 즉시 시각적 리소스를 사용할 수 있으므로 콘텐츠 깜빡임(FOUC) 현상을 피할 수 있습니다.',
      ],
    },
    {
      type: 'title',
      text: 'CSS 마스크 vs 배경',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '많은 개발자가 벡터를 포함하기 위해 단순히 <code>background-image</code>를 사용하지만, 이는 CSS에서 SVG 색상을 동적으로 변경할 수 없다는 한계가 있습니다.',
    },
    {
      type: 'paragraph',
      html: '저희 도구는 <strong>CSS 마스크</strong>를 위한 코드 생성을 지원합니다. 생성된 Data URI로 <code>mask-image</code>를 적용하면 아이콘이 스텐실 역할을 하여 요소의 <code>background-color</code>가 아이콘의 최종 색상을 정의하게 됩니다. 이는 Astro, Next.js 또는 모든 현대적인 프레임워크에서 아이콘을 관리하는 가장 전문적이고 유연한 방법입니다.',
    },
  ],
};

