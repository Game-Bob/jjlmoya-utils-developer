import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DuplicateCssRemoverUI } from '../ui';

const slug = 'duplicate-css-remover';
const title = 'CSS 중복 제거 온라인 도구. 스타일시트를 정리하고 최적화하세요';
const description =
  '중복된 CSS 코드를 깔끔하게 정리하는 무료 도구입니다. 불필요한 셀렉터를 통합하고, 캐스케이드를 유지하면서 브라우저에서 즉시 파일 크기를 줄여드립니다.';

const faqData = [
  {
    question: 'CSS 셀렉터가 중복되면 어떻게 되나요?',
    answer:
      '같은 셀렉터가 여러 번 등장하면 브라우저는 모든 규칙을 적용하지만, 각 속성의 마지막 선언이 이전 선언을 덮어씁니다. 그 결과 시각적인 차이도 없이 파일만 쓸데없이 무거워집니다.',
  },
  {
    question: '중복을 제거하면 속성이 사라지지 않나요?',
    answer:
      '아닙니다. 알고리즘은 CSS 캐스케이드를 엄격히 따릅니다. 같은 셀렉터 아래 속성이 충돌하면 항상 마지막에 선언된 것을 유지합니다. 각 블록의 고유한 속성은 하나의 통합 셀렉터 아래로 합쳐집니다.',
  },
  {
    question: '압축된 CSS나 주석이 있는 CSS에서도 작동하나요?',
    answer:
      '네. 도구는 처리 전에 CSS 주석을 자동으로 제거하며 한 줄짜리 코드에서도 정상 작동합니다. 고급 중첩이나 복잡한 at-rule이 포함된 CSS는 미리 블록을 분리한 뒤 사용하는 것을 권장합니다.',
  },
  {
    question: '내 CSS가 서버로 전송되나요?',
    answer:
      '아닙니다. 모든 처리는 로컬 JavaScript를 통해 브라우저 안에서 직접 이루어집니다. CSS의 어떤 부분도 외부 서버로 전송되지 않으며, 코드의 완전한 프라이버시가 보장됩니다.',
  },
];

const howToData = [
  {
    name: 'CSS 붙여넣기',
    text: '반복된 셀렉터가 포함된 CSS 파일 내용을 복사해 왼쪽 "중복 CSS" 필드에 붙여넣으세요.',
  },
  {
    name: '정리 실행',
    text: '"CSS 정리 및 통합" 버튼을 클릭하세요. 도구가 모든 셀렉터를 스캔하고 속성을 병합하며 불필요한 블록을 제거합니다.',
  },
  {
    name: '결과 확인 후 복사',
    text: '절약된 바이트를 확인한 뒤 "코드 복사" 버튼으로 최적화된 CSS를 복사해 프로젝트에 바로 사용하세요.',
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

const ui: DuplicateCssRemoverUI = {
  labelInput: '중복 CSS (정리 전)',
  labelOutput: '정리된 CSS',
  placeholderInput: '.btn { padding: 10px; color: red; }\n.btn { margin: 5px; color: blue; }',
  placeholderOutput: '최적화·통합된 CSS가 여기에 나타납니다...',
  btnClean: 'CSS 정리 및 통합',
  btnCopy: '코드 복사',
  btnCopied: '복사됨!',
  statBytesOriginal: '원본 바이트',
  statBytesClean: '정리 후 바이트',
  statSaving: '절약량',
};

export const content: ToolLocaleContent<DuplicateCssRemoverUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 자료 및 문서',
  bibliography: [
    {
      name: 'Web Vitals: CSS가 Render-Blocking과 FCP에 미치는 영향',
      url: 'https://web.dev/articles/render-blocking-resources',
    },
    {
      name: 'W3C 명세: CSS 캐스케이드와 상속',
      url: 'https://www.w3.org/TR/css-cascade-4/',
    },
    {
      name: 'Clean CSS: CSS 압축 라이브러리와 방법론',
      url: 'https://github.com/clean-css/clean-css',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'CSS 코드는 왜 중복될까요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '장기 웹 프로젝트를 유지하거나 레거시 코드를 다룰 때, 여러 개발자가 겹치는 CSS 규칙을 작성하는 일은 매우 흔합니다. 기존 디자인을 건드릴까 봐 두려운 나머지, 원래 코드를 수정하거나 리팩터링하는 대신 문서 끝에 새 규칙을 덧붙이는 방식을 선택하곤 하죠.',
    },
    {
      type: 'paragraph',
      html: '그 결과는 수십 개의 셀렉터가 반복 선언된 비효율적인 파일이며, 가독성을 해치고 웹 페이지의 다운로드 무게를 크게 늘립니다.',
    },
    {
      type: 'title',
      text: '웹 성능(Web Vitals)에 미치는 숨겨진 영향',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '스타일시트 파일은 브라우저의 자연스러운 렌더링을 막습니다(<strong>Render-Blocking</strong> 리소스). 브라우저가 완전한 CSSOM을 다운로드하고 구성하기 전까지는 화면이 텅 빈 상태로 남아 있습니다.',
    },
    {
      type: 'tip',
      html: '불필요한 스타일을 제거하는 것은 단순히 코드를 깔끔하게 만드는 일이 아닙니다. <strong>First Contentful Paint(FCP)</strong> 같은 핵심 지표를 즉각적이고 수치적으로 개선할 수 있습니다.',
    },
    {
      type: 'title',
      text: '중복 규칙을 통합하는 방법',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '이 도구는 지능형 어셈블러처럼 작동합니다. 전통적인 압축 도구처럼 공백만 줄이는 게 아니라, 텍스트를 재귀적으로 스캔하여 동일한 셀렉터 패턴을 찾아냅니다.',
    },
    {
      type: 'list',
      items: [
        '<code>.box { color: red; }</code> 규칙이 있고 100줄 아래에 <code>.box { padding: 10px; color: blue; }</code>가 있다고 상상해보세요. 이 도구는 두 블록을 같은 <code>.box</code> 셀렉터 아래로 통합하고 padding을 합칩니다.',
        '<strong>CSS 캐스케이드 보존:</strong> 직접적인 충돌이 있을 경우, 알고리즘은 마지막에 선언된 속성을 엄격히 보존합니다. 덕분에 정리 작업 후에도 원래 레이아웃이 무너지지 않습니다.',
      ],
    },
    {
      type: 'paragraph',
      html: '사용자의 스마트폰에 쓸모없는 수 킬로바이트를 계속 전송하는 일은 이제 그만하세요. 브라우저에서 완전 오프라인으로, 밀리초 단위로 코드를 통합하세요.',
    },
  ],
};

