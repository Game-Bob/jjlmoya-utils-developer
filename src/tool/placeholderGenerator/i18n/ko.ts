import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PlaceholderGeneratorUI } from '../ui';

const slug = 'placeholder-image-generator';
const title = '플레이스홀더 이미지 생성기. 빠른 웹 목업 제작 도구';
const description =
  '웹 디자인에 필요한 맞춤형 플레이스홀더 이미지를 만들어보세요. 해상도, 배경색, 텍스트를 조정하고 PNG, WebP 또는 JPEG로 즉시 내보낼 수 있습니다.';

const faqData = [
  {
    question: '플레이스홀더 이미지란 무엇인가요?',
    answer:
      '플레이스홀더 이미지는 웹 디자인과 레이아웃 구성에서 최종 이미지가 들어갈 자리를 임시로 채우는 그래픽입니다. 최종 콘텐츠가 준비되기 전에 페이지 구조를 시각적으로 확인하는 데 유용합니다.',
  },
  {
    question: '생성기에서 어떤 해상도든 사용할 수 있나요?',
    answer:
      '네, 너비와 높이에 원하는 숫자 값을 입력할 수 있습니다. 생성기는 정확히 요청한 크기의 캔버스를 만들어주므로, 엄격한 그리드나 특정 광고 배너 제작에도 적합합니다.',
  },
  {
    question: '이미지는 어떤 형식으로 다운로드되나요?',
    answer:
      '기본값은 WebP 형식으로 최적의 압축률을 제공합니다. 무손실 최고 품질이 필요하다면 PNG를, 범용 호환성이 필요하다면 JPEG를 선택할 수도 있습니다.',
  },
  {
    question: '서버에서 처리되나요?',
    answer:
      '아니요. 모든 이미지 렌더링은 사용자 브라우저의 가상 메모리(Canvas)에서 즉시 처리됩니다. 네트워크를 통해 어떠한 데이터도 전송되지 않습니다.',
  },
];

const howToData = [
  {
    name: '크기 설정',
    text: '너비와 높이 값을 직접 입력하거나, 프리셋(FHD, HD, Instagram 등) 버튼을 클릭해 자동으로 채울 수 있습니다.',
  },
  {
    name: '색상과 텍스트 구성',
    text: '기본 색상 선택기를 사용하거나 16진수 코드를 직접 입력해 배경색과 텍스트 색상을 설정하세요. 선택적으로 기본 크기 표시 대신 사용할 커스텀 텍스트를 추가할 수 있습니다.',
  },
  {
    name: '서체와 형식 선택',
    text: '글꼴 패밀리와 크기를 선택하세요. 필요에 따라 출력 형식(WebP, PNG 또는 JPEG)을 지정합니다.',
  },
  {
    name: '이미지 다운로드',
    text: '다운로드 버튼을 클릭하면 생성된 플레이스홀더 이미지가 기기에 바로 저장됩니다.',
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

const ui: PlaceholderGeneratorUI = {
  labelDimensions: '빠른 크기 선택',
  labelWidth: '너비 (px)',
  labelHeight: '높이 (px)',
  labelBgColor: '배경색',
  labelTextColor: '텍스트 색상',
  labelCustomText: '커스텀 텍스트 (선택 사항)',
  placeholderCustomText: '예: 히어로 배너',
  labelFontFamily: '서체',
  labelFontSize: '기본 크기',
  fontSizeAuto: '자동',
  labelFormat: '출력 형식',
  btnDownload: '이미지 다운로드',
};

export const content: ToolLocaleContent<PlaceholderGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 자료 및 문서',
  bibliography: [
    {
      name: 'MDN Web Docs: HTMLCanvasElement.toDataURL()',
      url: 'https://developer.mozilla.org/ko/docs/Web/API/HTMLCanvasElement/toDataURL',
    },
    {
      name: 'MDN Web Docs: CanvasRenderingContext2D',
      url: 'https://developer.mozilla.org/ko/docs/Web/API/CanvasRenderingContext2D',
    },
    {
      name: 'W3C: HTML Canvas 2D Context',
      url: 'https://www.w3.org/TR/2dcontext/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '빠른 목업 작업을 위한 최적의 도구',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '웹사이트의 구조 설계(와이어프레이밍) 초기 단계에서는 최종 사진 콘텐츠가 준비되어 있지 않은 경우가 대부분입니다. 빈 영역은 전체 레이아웃 시각화를 왜곡하고, 간격이나 비율 오류를 눈에 띄지 않게 만들 수 있습니다. 플레이스홀더 이미지 생성기를 사용하면 정확한 크기의 색상 블록을 즉시 삽입할 수 있어 이 문제를 단번에 해결할 수 있습니다.',
    },
    {
      type: 'tip',
      title: '마찰 없는 디자인 작업',
      html: 'CSS Grid를 구성할 때 정확히 1200×800픽셀의 공간이 필요한 경우가 많습니다. 플레이스홀더 블록을 다운로드해 사용하면 임시 코드에 불필요한 CSS나 서드파티 스크립트를 추가하지 않아도 됩니다.',
    },
    {
      type: 'title',
      text: '외부 서비스 의존의 문제점',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '프론트엔드 개발 환경에서는 <code>via.placeholder.com</code>과 같은 외부 서비스를 HTML의 <code>src</code> 속성에 직접 연결하는 관행이 흔합니다. URL 파라미터를 통해 편리하게 사용할 수 있지만, 꼼꼼한 개발자라면 피하고 싶은 심각한 부작용이 있습니다.',
    },
    {
      type: 'paragraph',
      html: '개발 중인 페이지의 모든 이미지 태그에 외부 도메인을 삽입하면 DNS 요청이 증가하고, Vite, Gulp, Webpack 같은 핫 리로딩 시스템의 성능이 저하됩니다. 또한 결국 클라우드에 올라갈 브랜치에 의도치 않은 흔적을 남길 수 있습니다. 이 도구를 사용해 원하는 형식(WebP, PNG 또는 JPEG)의 이미지를 생성하면, 프로토타입 전체를 localhost 환경에서 완전히 완결지을 수 있습니다.',
    },
    {
      type: 'title',
      text: '생성기 알고리즘의 핵심 기능',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>픽셀 퍼펙트 해상도:</strong> 네이티브 HTML5 Canvas를 사용하므로, 내보낸 캔버스가 사용자가 지정한 좌표와 정확히 일치합니다.',
        '<strong>타이포그래피 자동 스케일링:</strong> 자동 모드에서 글꼴 크기는 둘레 면적과 문자 수를 계산하여, 원치 않는 <em>오버플로</em> 없이 텍스트가 자연스럽게 맞아 들어가도록 조정됩니다.',
        '<strong>16진수 색상 양방향 동기화:</strong> HTML 네이티브 색상 선택기와 텍스트 입력 간의 상태가 양방향으로 동기화되어, Figma나 Penpot의 UI/UX 팔레트에 따른 정밀한 색 대비를 보장합니다.',
      ],
    },
    {
      type: 'title',
      text: '기술적 와이어프레이밍의 숨겨진 가치',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '모놀리식 프로젝트든 마이크로 프론트엔드든, 기반 작업 단계를 거치지 않고 완성될 수 있는 것은 없습니다. 까다로운 클라이언트나 확고한 비전을 가진 프로덕트 매니저를 상대할 때는 더욱 그렇습니다. 완성된 <em>에셋</em>의 무게를 짊어지지 않고도 빠르게 그래픽 이터레이션을 수행할 수 있는지 여부가 민첩한 개발자와 그렇지 않은 개발자를 구분 짓습니다. 이 생성기는 로컬 머신에서 현대적인 JS API인 <code>toDataURL()</code>을 직접 활용해, 불투명한 중간 처리 없이 업계 수준의 결과물을 제공합니다.',
    },
  ],
};

