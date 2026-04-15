import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssToInlineConverterUI } from '../ui';

const slug = 'css-to-inline-converter';
const title = 'CSS 인라인 HTML 변환기. 이메일용 CSS 인라이너';
const description =
  '스타일시트와 CSS 클래스를 HTML 내에 직접 삽입된 인라인 스타일로 자동 변환합니다. 뉴스레터, 트랜잭션 이메일, 안정적인 웹 레이아웃에 적합합니다.';

const faqData = [
  {
    question: '이메일에 외부 스타일시트 대신 인라인 CSS가 필요한 이유는 무엇인가요?',
    answer:
      'Outlook, Gmail, Apple Mail 같은 이메일 클라이언트는 보안 이유로 <link> 및 <style> 태그를 필터링하거나 무시합니다. 이메일에서 스타일이 올바르게 적용되도록 보장하는 유일한 방법은 각 HTML 요소의 style 속성에 직접 삽입하는 것입니다.',
  },
  {
    question: '요소에 이미 자체 style 속성이 있는 경우 어떻게 되나요?',
    answer:
      '이 도구는 기존 인라인 스타일을 유지하고 새로운 속성을 뒤에 추가하여 CSS 캐스케이드 동작을 시뮬레이션합니다. 충돌이 발생하면 나중에 선언된 속성이 앞의 속성을 덮어씁니다.',
  },
  {
    question: ':hover나 미디어 쿼리 같은 복잡한 선택자도 처리되나요?',
    answer:
      '이 도구는 DOMParser가 처리할 수 있는 클래스, ID, 속성, 구조적 가상 클래스 선택자를 처리합니다. :hover 같은 상태 의존 선택자와 미디어 쿼리는 런타임 환경에 의존하므로 인라인화할 수 없으며 무시됩니다.',
  },
  {
    question: '내 HTML과 CSS 코드가 서버로 전송되나요?',
    answer:
      '아니요. 모든 처리는 브라우저 내 기본 DOMParser API를 사용하여 100% 로컬에서 이루어집니다. 코드의 단 한 바이트도 기기 밖으로 나가지 않아 민감한 콘텐츠가 포함된 템플릿도 완전한 개인 정보 보호가 보장됩니다.',
  },
];

const howToData = [
  {
    name: '원본 HTML 붙여넣기',
    text: '처리할 HTML을 "원본 HTML" 필드에 입력하거나 붙여넣습니다. 조각이나 완전한 문서 모두 가능합니다.',
  },
  {
    name: 'CSS 규칙 추가',
    text: '삽입할 클래스와 ID를 "CSS 규칙" 필드에 붙여넣습니다. 도구는 선택자 명시도를 고려하여 적용합니다.',
  },
  {
    name: '변환 후 복사',
    text: '"CSS를 HTML에 삽입"을 클릭합니다. 모든 인라인 스타일이 적용된 결과가 아래에 표시되며, 이메일 관리자나 CMS에 바로 붙여넣을 수 있습니다.',
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

const ui: CssToInlineConverterUI = {
  labelHtml: '원본 HTML',
  labelCss: 'CSS 규칙',
  labelOutput: '인라인 HTML 결과',
  placeholderHtml: '<div class="my-class">안녕하세요</div>',
  placeholderCss: '.my-class { color: red; padding: 10px; }',
  placeholderOutput: '스타일이 삽입된 HTML이 여기에 표시됩니다...',
  btnConvert: 'CSS를 HTML에 삽입',
  btnCopy: '코드 복사',
  btnCopied: '복사됨!',
  msgError: '처리 오류입니다. HTML과 CSS가 올바른지 확인하세요.',
};

export const content: ToolLocaleContent<CssToInlineConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 자료 및 문서',
  bibliography: [
    {
      name: 'Can I email: 이메일용 HTML 및 CSS 지원 매트릭스',
      url: 'https://www.caniemail.com/',
    },
    {
      name: 'MDN Web Docs: 글로벌 style 속성',
      url: 'https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/style',
    },
    {
      name: 'DOMParser API: 브라우저 내 안전한 파싱',
      url: 'https://developer.mozilla.org/ko/docs/Web/API/DOMParser',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'CSS 인라이너란 무엇이며 왜 필요한가요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '현대 웹 개발에서는 역할 분리가 일반적입니다. HTML이 구조를 담당하고 외부 CSS 파일이 모든 시각적 스타일을 제공합니다. 하지만 외부 스타일시트나 전역 <code>&lt;style&gt;</code> 태그를 신뢰하지 않는 환경도 존재합니다.',
    },
    {
      type: 'paragraph',
      html: '외부 CSS가 작동하지 않는 가장 대표적인 사례가 <strong>이메일 템플릿 개발</strong>입니다. 이 환경에서 글꼴, 색상, 여백이 올바르게 렌더링되도록 보장하는 유일한 방법은 태그에 직접 삽입하는 것입니다: <code>&lt;span style="color: red;"&gt;</code>.',
    },
    {
      type: 'title',
      text: '이메일 클라이언트에서의 CSS 문제',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Microsoft Outlook, Apple Mail, Gmail 같은 이메일 클라이언트는 제한적인 CSS 렌더링 엔진으로 잘 알려져 있습니다. 대부분은 읽기 인터페이스를 손상시킬 수 있는 코드 인젝션을 방지하기 위해 <code>&lt;link&gt;</code> 또는 <code>&lt;style&gt;</code> 태그를 필터링하거나 삭제합니다.',
    },
    {
      type: 'tip',
      html: '뉴스레터나 트랜잭션 이메일(영수증, 계정 확인 메일)에서는 테이블 레이아웃과 <em>인라인 CSS</em>를 사용하는 것이 이메일 마케팅 업계의 표준입니다.',
    },
    {
      type: 'title',
      text: '이 도구가 브라우저에서 작동하는 방식',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>안전한 파싱:</strong> <code>DOMParser API</code>를 사용하여 입력된 HTML을 브라우저 내의 안전한 가상 DOM으로 임시 변환합니다.',
        '<strong>캐스케이드 시뮬레이션:</strong> CSS 규칙을 분석하고 선택자에 명시도 가중치를 적용한 후, 선택된 HTML 요소의 <code>style</code> 속성에 코드를 삽입하여 수정합니다.',
        '<strong>100% 오프라인:</strong> 코드의 단 한 바이트도 기기 밖으로 나가지 않습니다. 민감한 콘텐츠가 포함된 템플릿도 완전한 개인 정보 보호가 가능합니다.',
      ],
    },
  ],
};

