import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlEncoderDecoderUI } from '../ui';

const slug = 'url-encoder-decoder';
const title = '온라인 URL 인코더 및 디코더';
const description =
  '모든 링크의 특수 문자를 안전한 형식(퍼센트 인코딩)으로 변환하거나 원래의 읽기 가능한 상태로 즉시 로컬에서 복구합니다.';

const faqData = [
  {
    question: 'URL에서 어떤 문자가 인코딩되나요?',
    answer:
      'URL의 ASCII 표준에서 허용되지 않는 모든 문자가 인코딩됩니다: 공백, 액센트가 있는 문자, &, =, +, #, ?, / 등의 기호입니다. 예를 들어, 공백은 %20이 되고 ñ은 %C3%B1이 됩니다.',
  },
  {
    question: 'encodeURI와 encodeURIComponent의 차이점은 무엇인가요?',
    answer:
      'encodeURI는 전체 URL을 인코딩하며 / 및 ?와 같은 예약 문자를 그대로 둡니다. encodeURIComponent는 예약 문자를 포함한 모든 특수 문자를 인코딩하므로 개별 쿼리 매개변수 값을 인코딩하는 데 이상적입니다.',
  },
  {
    question: '왜 내 URL에 공백 대신 %20이 있나요?',
    answer:
      'HTTP 프로토콜은 URL에 공백을 허용하지 않습니다. %20은 ASCII 표준에 따른 공백의 퍼센트 인코딩 표현입니다. 일부 시스템에서는 + 기호를 대안으로 사용하지만, %20이 가장 보편적이고 안전합니다.',
  },
  {
    question: '개인적인 URL에 이 도구를 사용해도 안전한가요?',
    answer:
      '네, 완전히 안전합니다. 모든 처리는 네이티브 JavaScript(encodeURIComponent/decodeURIComponent)를 사용하여 브라우저 내에서 이루어집니다. 사용자의 URL이나 매개변수는 외부 서버로 전송되지 않습니다.',
  },
];

const howToData = [
  {
    name: '원본 텍스트 붙여넣기',
    text: '상단 필드 "원본 텍스트(읽기 가능)"에 URL 또는 텍스트 문자열을 입력하거나 붙여넣습니다.',
  },
  {
    name: '인코딩 또는 디코딩',
    text: '"URL 인코딩"을 클릭하여 텍스트를 안전한 퍼센트 인코딩 형식으로 변환하거나, "디코딩"을 클릭하여 인코딩된 URL을 읽기 가능한 형태로 되돌립니다.',
  },
  {
    name: '결과 복사하기',
    text: '해당 필드의 "복사" 버튼을 사용하여 결과를 클립보드에 담습니다.',
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

const ui: UrlEncoderDecoderUI = {
  labelRaw: '원본 텍스트 (읽기 가능)',
  labelEncoded: '포맷된 URL (인코딩됨)',
  btnClear: '지우기',
  btnCopy: '복사',
  btnCopied: '복사됨!',
  btnEncode: 'URL 인코딩',
  btnDecode: '디코딩',
  placeholderRaw: 'https://example.com/search?q=빨간 구두&size=38',
  placeholderEncoded: 'https%3A%2F%2Fexample.com%2Fsearch%3Fq%3D%EB%B9%A4%EA%B0%84%20%EA%B5%AC%EB%91%90%26size%3D38',
};

export const content: ToolLocaleContent<UrlEncoderDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 자료 및 문서',
  bibliography: [
    {
      name: 'MDN Web Docs: encodeURIComponent()',
      url: 'https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent',
    },
    {
      name: 'IETF RFC 3986: URI Generic Syntax',
      url: 'https://datatracker.ietf.org/doc/html/rfc3986',
    },
    {
      name: 'W3C: URL Living Standard',
      url: 'https://url.spec.whatwg.org/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'URL 인코딩이란 무엇인가요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '인터넷을 탐색하거나 서버에 요청을 보낼 때, URL(Uniform Resource Locator)을 단순히 "웹 주소"라고 생각하기 쉽습니다. 하지만 인터넷 프로토콜은 URL이 매우 제한된 <strong>표준 ASCII</strong> 문자 세트만을 사용하여 전송되어야 한다고 규정하고 있습니다.',
    },
    {
      type: 'paragraph',
      html: 'URL에 공백, 액센트가 있는 문자 또는 플러스(<code>+</code>)나 등호(<code>=</code>)와 같은 특수 매개변수가 포함되어 있으면 어떻게 될까요? 잘못된 문자를 읽으려 할 때 시스템이 충돌하는 것을 방지하기 위해, 이러한 문자는 <strong>퍼센트 인코딩</strong>을 사용하여 안전한 호환 형식으로 번역되어야 합니다.',
    },
    {
      type: 'title',
      text: '퍼센트 인코딩의 작동 방식',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '이 도구를 사용하면 알고리즘이 "안전하지 않은" 문자(공백이나 ñ와 같은 액센트 문자)를 가져와 퍼센트 기호 <code>%</code>와 UTF-8 표준의 해당 값에 해당하는 두 자리 16진수로 바꿉니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>기본 예시:</strong> 단순한 공백은 안전한 대체물인 <code>%20</code>으로 바뀝니다.',
        '<strong>확장 지원:</strong> 문자 <code>가</code>는 <code>%EA%B0%80</code>가 됩니다.',
      ],
    },
    {
      type: 'title',
      text: 'API 및 GET 요청에서의 중요성',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '개발 시 흔히 하는 실수는 URL 매개변수에 원본 문자열을 직접 전달하는 것입니다. <code>셔츠&파랑</code>을 그대로 백엔드(<code>/search?q=셔츠&파랑</code>)에 삽입하면, 서버는 <code>파랑</code>을 새로운 매개변수로 해석하여 모든 로직이 깨지게 됩니다.',
    },
    {
      type: 'paragraph',
      html: '이 도구는 로컬 브라우저에서의 100% 실행을 통해 깨끗하고 자동적인 계산을 보장합니다. 사용자의 URL 문자열은 제3자 서버로 전송되지 않으므로 토큰 및 분석 매개변수의 개인정보가 보호됩니다.',
    },
  ],
};

