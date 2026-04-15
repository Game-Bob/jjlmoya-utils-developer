import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgSanitizerUI } from '../ui';

const slug = 'svg-sanitizer';
const title = 'SVG 새니타이저 온라인';
const description = 'Figma, Adobe Illustrator 또는 Inkscape에서 내보낸 SVG를 최적화하고 정리합니다. 메타데이터, 불필요한 속성, 빈 그룹을 제거해 바로 배포할 수 있는 SVG를 만들어보세요.';

const faqData = [
  {
    question: 'SVG가 포함된 페이지의 전체 HTML을 붙여넣을 수 있나요?',
    answer: '네. 새니타이저가 HTML 내에서 SVG 요소를 자동으로 감지해 해당 블록만 추출하여 처리합니다. SVG 코드를 직접 붙여넣어도 동일하게 동작합니다.',
  },
  {
    question: 'Illustrator에서 내보낸 SVG도 사용할 수 있나요?',
    answer: '네. Illustrator는 XML 선언, 메타데이터, 독자적인 네임스페이스가 포함된 SVG를 내보내는데, 새니타이저가 이를 모두 제거합니다. 결과물은 모든 최신 브라우저와 호환되는 SVG입니다.',
  },
  {
    question: '정리(Clean)와 압축(Minify)의 차이는 무엇인가요?',
    answer: '정리는 불필요한 속성과 태그를 제거하되 들여쓰기 형식을 유지해 코드를 읽고 편집할 수 있게 합니다. 압축은 여기에 더해 모든 내용을 한 줄로 합쳐 파일 크기를 최대한 줄입니다.',
  },
  {
    question: 'ID를 제거하면 SVG가 깨질 수 있나요?',
    answer: '예를 들어 fill="url(#gradient)"처럼 SVG 내 요소가 다른 요소를 ID로 참조하는 경우에만 문제가 생길 수 있습니다. 그럴 때는 ID 제거 옵션을 비활성화하세요. 이 문제를 방지하기 위해 기본값은 비활성화로 설정되어 있습니다.',
  },
  {
    question: 'SVG 코드가 서버로 전송되나요?',
    answer: '아니요. 모든 처리는 브라우저 내에서 기본 DOMParser 및 XMLSerializer API를 사용해 이루어집니다. 코드는 절대 사용자 기기를 벗어나지 않습니다.',
  },
];

const howToData = [
  { name: 'SVG 붙여넣기', text: 'Figma, Illustrator 또는 Inkscape에서 내보낸 SVG 코드를 텍스트 영역에 붙여넣습니다.' },
  { name: '옵션 설정', text: '필요에 따라 ID 제거, width/height 제거, 압축 옵션을 켜거나 끕니다.' },
  { name: '정리하기', text: 'SVG 정리 버튼을 클릭해 코드를 처리하고 최적화된 결과를 확인합니다.' },
  { name: '복사 또는 다운로드', text: '복사 또는 다운로드 버튼으로 배포 준비가 완료된 깨끗한 SVG를 저장합니다.' },
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

const ui: SvgSanitizerUI = {
  labelInput: '정리할 SVG를 여기에 붙여넣으세요',
  labelOutput: '정리된 SVG',
  optRemoveIds: 'ID 제거',
  optRemoveWH: 'width/height 제거',
  optMinify: '압축',
  btnSanitize: 'SVG 정리',
  btnCopy: '복사',
  btnCopied: '복사됨',
  btnDownload: '다운로드',
  statOriginal: '원본',
  statCleaned: '정리 후',
  statReduction: '감소율',
  statElems: '제거된 요소',
  statAttrs: '제거된 속성',
  errorPaste: '정리하기 전에 SVG를 붙여넣어 주세요.',
  errorProcess: 'SVG 처리 중 오류가 발생했습니다.',
};

export const content: ToolLocaleContent<SvgSanitizerUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 자료',
  bibliography: [
    { name: 'SVG Specification - W3C', url: 'https://www.w3.org/TR/SVG2/' },
    { name: 'Figma SVG Export - 공식 문서', url: 'https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma' },
    { name: 'SVGO - SVG Optimizer (오픈소스 레퍼런스)', url: 'https://github.com/svg/svgo' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'SVG 새니타이저: Figma와 Illustrator 코드 정리하기', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>Figma</strong>, Adobe Illustrator 또는 브라우저 인스펙터에서 내보낸 SVG를 붙여넣으면, 바로 배포할 수 있는 깔끔하고 최적화된 벡터 파일을 얻을 수 있습니다.',
    },
    { type: 'title', text: '내보낸 SVG는 왜 지저분할까요?', level: 3 },
    {
      type: 'paragraph',
      html: 'Figma에서 SVG를 내보내면 앱 내부에서만 의미 있는 속성들이 가득 담긴 파일이 생성됩니다. <code>data-name</code>, <code>xml:space</code>, 내부 레이어 참조, 디자인 메타데이터 등이 그 예입니다. 결과적으로 실제 필요한 용량보다 40~70%까지 더 큰 SVG가 만들어집니다.',
    },
    { type: 'title', text: '새니타이저가 제거하는 것들', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>편집기 메타데이터:</strong> Figma와 Illustrator가 자동으로 추가하는 <code>metadata</code>, <code>title</code>, <code>desc</code> 태그.',
        '<strong>Inkscape 네임스페이스:</strong> <code>inkscape:</code> 및 <code>sodipodi:</code> 접두사를 가진 모든 요소.',
        '<strong>불필요한 속성:</strong> <code>xml:space</code>, <code>version</code>, 불필요한 <code>xmlns:*</code>, Figma의 <code>data-*</code> 속성.',
        '<strong>빈 그룹:</strong> 삭제된 레이어의 잔재로 남은 콘텐츠 없는 <code>&lt;g&gt;</code> 요소.',
        '<strong>XML 선언:</strong> HTML에 SVG를 삽입할 때 필요 없는 <code>&lt;?xml version="1.0"?&gt;</code> 선언과 DOCTYPE.',
      ],
    },
  ],
};

