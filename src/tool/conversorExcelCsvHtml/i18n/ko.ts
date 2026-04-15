import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConversorExcelCsvHtmlUI } from '../ui';

const slug = 'excel-csv-html-table-converter';
const title = 'Excel 및 CSV를 HTML 테이블로 변환하는 코드 생성기';
const description = 'Excel 또는 CSV 데이터를 깨끗하고 의미 있는 HTML 테이블로 즉시 변환하세요. 개발자와 콘텐츠 제작자를 위한 무료 도구입니다.';

const faqData = [
  {
    question: 'Excel 파일(.xlsx)을 HTML로 변환하려면 어떻게 하나요?',
    answer: '먼저 Excel에서 파일을 열고 CSV(쉼표로 구분)로 저장하세요. 그런 다음 해당 CSV 파일을 도구에 업로드하거나 내용을 붙여넣어 HTML 테이블 코드를 받으세요.',
  },
  {
    question: '생성된 코드에 CSS 스타일이 포함되어 있나요?',
    answer: '제너레이터는 테두리와 지브라 스트라이프를 위한 선택적 클래스가 포함된 깨끗한 HTML을 생성합니다. 최종 시각적 스타일은 웹사이트 자체 CSS에 따라 결정되므로 완벽한 통합이 가능합니다.',
  },
  {
    question: '매우 큰 CSV 파일을 업로드할 수 있나요?',
    answer: '네, 저희 도구는 브라우저에서 로컬로 데이터를 처리합니다. 즉, 데이터가 인터넷을 통해 전송되지 않으므로 매우 빠르고 안전합니다.',
  },
  {
    question: 'Google 스프레드시트와 호환되나요?',
    answer: '물론입니다. Google 스프레드시트에서 파일 > 다운로드 > 쉼표로 구분된 값(.csv)을 선택하고 해당 파일을 저희 도구에서 사용하세요.',
  },
];

const howToData = [
  {
    name: '데이터 준비',
    text: 'Excel 또는 CSV 파일을 준비하세요. 데이터가 깨끗한지 확인하세요.',
  },
  {
    name: '데이터 로드',
    text: '입력 영역에 CSV 텍스트를 붙여넣거나 파일을 컨버터로 직접 드래그하세요.',
  },
  {
    name: '테이블 구성',
    text: '첫 번째 행을 헤더로 사용할지 여부와 기본 스타일 사용 여부를 선택하세요.',
  },
  {
    name: '코드 복사',
    text: '"HTML 코드" 탭으로 전환하고 결과를 복사하여 웹사이트에 붙여넣으세요.',
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
  step: howToData.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  inLanguage: 'ko',
};

const ui: ConversorExcelCsvHtmlUI = {
  csvInputLabel: '여기에 CSV를 붙여넣으세요',
  csvInputPlaceholder: '이름,나이,도시\n홍길동,25,서울\n김철수,30,부산',
  uploadLabel: '또는 파일 업로드 (CSV)',
  dragDropLabel: '여기에 파일을 드래그 앤 드롭하세요',
  headerCheckboxLabel: '첫 번째 행을 헤더로 사용',
  bordersCheckboxLabel: '테두리 추가',
  stripeCheckboxLabel: '지브라 스트라이프',
  previewTabLabel: '미리보기',
  codeTabLabel: 'HTML 코드',
  emptyStateLabel: '테이블을 보려면 데이터를 입력하세요',
  copyButtonLabel: '코드 복사',
  copiedLabel: '복사됨!',
};

export const content: ToolLocaleContent<ConversorExcelCsvHtmlUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: 'HTML 테이블 및 데이터 형식 관련 리소스',
  bibliography: [
    { name: 'W3C: HTML 테이블', url: 'https://www.w3.org/WAI/tutorials/tables/' },
    { name: 'MDN: HTML table 요소', url: 'https://developer.mozilla.org/ko/docs/Web/HTML/Element/table' },
    { name: 'RFC 4180: CSV 형식', url: 'https://tools.ietf.org/html/rfc4180' },
    { name: 'Google 스프레드시트: 데이터 다운로드', url: 'https://support.google.com/docs/answer/183965' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Excel 및 CSV를 HTML 테이블로 쉽게 변환', level: 2 },
    {
      type: 'paragraph',
      html: '현대 웹 개발에서 표 형식의 데이터를 제시하는 것은 구조화된 정보를 전달하는 가장 효과적인 방법 중 하나입니다. 그러나 <strong>Excel</strong>과 같은 스프레드시트나 <strong>CSV</strong> 파일의 데이터를 HTML <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code> 태그로 수동 변환하는 것은 지루하고 오류가 발생하기 쉽습니다.',
    },
    { type: 'title', text: '왜 의미 있는 HTML 테이블을 사용해야 하나요?', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>접근성:</strong> 스크린 리더가 구조를 해석하여 시각 장애가 있는 사용자를 도울 수 있습니다.',
        '<strong>SEO:</strong> 검색 엔진이 셀 콘텐츠를 색인화하여 데이터 순위를 높입니다.',
        '<strong>반응형:</strong> 약간의 CSS를 사용하면 HTML 테이블이 모바일 기기에 적합하게 변할 수 있습니다.',
        '<strong>유지보수성:</strong> 이미지를 다시 생성하는 것보다 HTML에서 데이터를 편집하는 것이 훨씬 쉽습니다.',
      ],
    },
    { type: 'title', text: 'Excel-HTML 컨버터 작동 방식', level: 3 },
    {
      type: 'paragraph',
      html: '저희 유틸리티는 쉼표로 구분된 파일(CSV)을 처리하는 네이티브 텍스트 파서를 사용합니다. Microsoft Excel, Google 스프레드시트, LibreOffice Calc를 포함한 대부분의 스프레드시트 프로그램에서 데이터를 CSV 형식으로 내보낼 수 있습니다.',
    },
  ],
};

