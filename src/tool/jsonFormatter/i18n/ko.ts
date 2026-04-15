import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonFormatterUI } from '../ui';

const slug = 'json-formatter';
const title = '무료 온라인 JSON 포매터 및 유효성 검사기';
const description =
  'JSON 코드를 포맷팅, 유효성 검사 및 복구할 수 있는 무료 온라인 도구입니다. JSON 코드를 보기 좋게 정리하고, 구문 오류를 감지하며 가독성을 높여줍니다.';

const faqData = [
  {
    question: '이 포매터를 사용할 때 내 데이터는 안전한가요?',
    answer:
      '물론입니다. 모든 처리는 100% 사용자의 브라우저(클라이언트 측)에서 이루어집니다. JSON 데이터는 서버로 전송되지 않으므로 데이터 구조에 대한 완벽한 개인정보 보호가 보장됩니다.',
  },
  {
    question: "'Invalid JSON' 오류가 발생하는 이유는 무엇인가요?",
    answer:
      '주로 객체의 마지막에 쉼표(trailing comma)가 있거나, 키(key)를 큰따옴표로 감싸지 않았거나, 보이지 않는 문자가 포함된 경우에 발생합니다. 저희 도구는 오류가 발생한 정확한 줄을 표시하여 수정을 도와줍니다.',
  },
  {
    question: '망가진 JSON을 복구할 수 있나요?',
    answer:
      '저희 도구는 불필요한 마지막 쉼표나 잘못된 이스케이프 문자 등 흔한 오류를 자동으로 수정하려고 시도합니다. 이를 통해 RFC 8259 표준에 부합하는 유효한 JSON으로 만들어줍니다.',
  },
  {
    question: '매우 큰 JSON 파일도 지원하나요?',
    answer:
      '예, 처리 엔진은 복잡한 데이터 구조와 대용량 파일을 브라우저 인터페이스의 멈춤 없이 처리할 수 있도록 최적화되어 있습니다.',
  },
];

const howToData = [
  {
    name: '코드 붙여넣기',
    text: '포맷팅되지 않았거나 축소(minify)된 JSON 코드를 메인 텍스트 영역에 붙여넣습니다.',
  },
  {
    name: '유효성 검사 및 포맷팅',
    text: '시스템이 자동으로 코드를 분석하여 구문 오류를 표시하고 가독성을 위해 들여쓰기를 적용합니다.',
  },
  {
    name: '스타일 선택',
    text: '가독성을 위한 확장 형식(beautify) 또는 공간 절약을 위한 압축 형식(minify) 중에서 원하는 스타일을 선택하세요.',
  },
  {
    name: '결과 복사하기',
    text: '복사 버튼을 클릭하여 완벽하게 검증된 JSON 코드를 클립보드에 담으세요.',
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

const ui: JsonFormatterUI = {
  labelInput: '입력 (JSON)',
  labelOutput: '출력',
  btnMinify: '압축 (Minify)',
  btnBeautify: '정렬 (Beautify)',
  btnFix: '자동 복구 시도',
  btnCopy: '복사',
  statusWaiting: '입력 대기 중...',
  statusValid: '유효한 JSON',
  statusInvalid: '유효하지 않은 JSON',
  toastCopied: '복사되었습니다!',
  toastFixed: 'JSON 복구됨 (미리보기)',
  toastFixFailed: '자동으로 복구할 수 없습니다',
  placeholder: '여기에 JSON을 붙여넣으세요...',
};

export const content: ToolLocaleContent<JsonFormatterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 자료 및 표준',
  bibliography: [
    {
      name: 'RFC 8259 – The JavaScript Object Notation (JSON) Data Interchange Format (IETF)',
      url: 'https://datatracker.ietf.org/doc/html/rfc8259',
    },
    {
      name: 'ECMA-404 – The JSON Data Interchange Syntax (Ecma International)',
      url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-404/',
    },
    {
      name: 'JSON.org – JSON 소개',
      url: 'https://www.json.org/json-ko.html',
    },
    {
      name: 'MDN Web Docs – JSON',
      url: 'https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'JSON 유효성 검사 및 포맷팅',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'JSON(JavaScript Object Notation)은 웹 데이터 교환의 표준입니다. 하지만 구문이 엄격하여 수동으로 편집할 때 실수가 발생하기 쉽습니다.',
    },
    {
      type: 'paragraph',
      html: '이 도구를 사용하면 구조적 유효성을 확인하고, 가독성을 위해 코드를 정리하며, 흔히 발생하는 구문 오류를 자동으로 복구할 수 있습니다.',
    },
    { type: 'grid', columns: 2 },
    {
      type: 'card',
      title: '자동 복구되는 흔한 오류',
      html: '<ul><li><strong>작은따옴표:</strong> JSON 표준은 큰따옴표를 요구합니다. 이 도구는 <code>\'key\': \'value\'</code> 형식을 <code>"key": "value"</code>로 변환합니다.</li><li><strong>따옴표 없는 키:</strong> JavaScript 스타일의 객체 키를 감지하여 필요한 따옴표를 추가합니다.</li><li><strong>마지막 쉼표:</strong> 엄격한 파서에서 오류를 일으키는 객체나 배열의 마지막 쉼표(trailing commas)를 제거합니다.</li></ul>',
    },
    {
      type: 'card',
      title: '특징',
      html: '<ul><li><strong>구문 강조:</strong> 키, 문자열, 숫자, 불리언을 색상별로 표시하여 빠른 읽기를 도와줍니다.</li><li><strong>실시간 유효성 검사:</strong> JSON이 유효한지 즉시 알려주거나 특정 파싱 오류를 표시합니다.</li><li><strong>완벽한 개인정보 보호:</strong> 모든 처리는 사용자의 브라우저에서 이루어집니다. 어떤 데이터도 외부 서버로 전송되지 않습니다.</li></ul>',
    },
  ],
};

