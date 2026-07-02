import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SerpPixelSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'serp-pixel-simulator';
const title = 'SERP 시뮬레이터 & SEO 픽셀 카운터';
const description = 'Google 스타일 검색 스니펫을 실시간으로 미리보고, 제목과 메타 설명의 픽셀 너비를 측정하며, 텍스트가 정확히 어디서 잘릴지 확인하세요.';

const howTo = [
  {
    name: '타이틀 태그 입력하기',
    text: '테스트하려는 페이지 제목을 입력하거나 붙여넣으세요. SERP 미리보기와 픽셀 측정기는 키 입력마다 업데이트됩니다.',
  },
  {
    name: '표시 URL 추가하기',
    text: '검색자가 스캔할 결과와 유사하게 보이도록 현실적인 도메인과 경로를 사용하세요.',
  },
  {
    name: '메타 설명 작성하기',
    text: '설명 텍스트를 추가하고 픽셀 바를 관찰하세요. 권장 시각적 너비를 초과하면 미리보기가 말줄임표로 자릅니다.',
  },
  {
    name: '데스크톱과 모바일 전환하기',
    text: '메타데이터를 게시하기 전에 데스크톱 또는 모바일 카드 너비로 제목 렌더링을 비교하세요.',
  },
];

const faq = [
  {
    question: 'SEO 제목에 문자 수 대신 픽셀을 세는 이유는 무엇인가요?',
    answer: 'Google 검색 결과 카드는 시각적 너비에 의해 제한됩니다. 좁은 글자가 많은 제목은 넓은 글자, 대문자 또는 굵게 보이는 글리프가 있는 제목보다 더 많은 문자를 포함할 수 있습니다. 픽셀 측정은 표시되는 결과를 더 정확하게 미리 볼 수 있게 해줍니다.',
  },
  {
    question: '이것이 Google이 내 스니펫을 어떻게 자를지 정확히 보장하나요?',
    answer: '아니요. Google은 제목 링크와 스니펫을 다시 작성할 수 있으며, 렌더링은 쿼리, 기기, 언어, 실험에 따라 달라질 수 있습니다. 이 도구는 잘릴 가능성이 적은 메타데이터를 작성하기 위한 실용적인 시각적 가이드로 설계되었습니다.',
  },
  {
    question: '시뮬레이터는 어떤 픽셀 제한을 사용하나요?',
    answer: '데스크톱의 기본 제목 제한은 580px, 모바일 제목 제한은 600px, 메타 설명 제한은 920px입니다. 이는 작성 목표이며 공식 Google 제한이 아닙니다.',
  },
  {
    question: '미리보기가 말줄임표를 추가하는 이유는 무엇인가요?',
    answer: '측정된 텍스트가 사용 가능한 픽셀 너비를 초과하면, 시뮬레이터는 맞는 마지막 문자에서 문자열을 자르고 세 개의 점을 추가합니다. 이는 SEO 팀이 의미 손실을 감지하는 데 필요한 실용적인 동작과 일치합니다.',
  },
];

const ui: SerpPixelSimulatorUI = {
  titleLabel: '타이틀 태그',
  titlePlaceholder: 'GameBob | 인디 개발 스튜디오',
  urlLabel: '표시 URL',
  urlPlaceholder: 'https://www.gamebob.dev/ko/',
  descriptionLabel: '메타 설명',
  descriptionPlaceholder: '디지털 워크플로우와 엔터테인먼트를 향상시키도록 설계된 도구 및 게임 컬렉션을 발견하세요.',
  deviceLabel: '미리보기 모드',
  desktopLabel: '데스크톱',
  mobileLabel: '모바일',
  titlePixelsLabel: '제목 너비',
  descriptionPixelsLabel: '설명 너비',
  charactersLabel: '자',
  previewLabel: 'Google 스타일 실시간 미리보기',
  tooLongLabel: '너무 김',
  goodLabel: '적합함',
  emptyTitle: '제목이 여기에 표시됩니다',
  emptyDescription: '메타 설명 미리보기가 입력하는 대로 여기에 표시됩니다.',
  defaultTitle: 'GameBob | 인디 개발 스튜디오',
  defaultUrl: 'https://www.gamebob.dev/ko/',
  defaultDescription: '디지털 워크플로우와 엔터테인먼트를 향상시키도록 설계된 도구 및 게임 컬렉션을 발견하세요.',
  fallbackUrl: 'example.co.kr',
  fallbackFaviconText: 'G',
  pixelUnit: 'px',
  ellipsis: '...',
  fetchButtonLabel: '가져오기',
  fetchLoadingLabel: '가져오는 중...',
  fetchSuccessLabel: 'URL에서 메타데이터를 로드했습니다.',
  fetchCorsError: '브라우저가 이 페이지를 읽을 수 없습니다. CORS, 리디렉션, 혼합 콘텐츠 또는 네트워크 규칙에 의해 차단되었을 수 있습니다. 여전히 메타데이터를 수동으로 붙여넣거나 편집할 수 있습니다.',
  fetchInvalidUrlError: '메타데이터를 가져오기 전에 유효한 URL을 입력하세요.',
  fetchNoMetadataError: '페이지를 가져왔지만 제목 또는 메타 설명을 찾을 수 없습니다.',
  fetchGenericError: '이 URL에서 메타데이터를 가져올 수 없습니다. 주소를 확인하거나 필드를 수동으로 입력하세요.',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<SerpPixelSimulatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'SERP 시뮬레이터에 관한 자주 묻는 질문',
  faq,
  bibliographyTitle: '검색 결과 문서',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Google 결과가 어떻게 보일지 추측하지 마세요',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '타이틀 태그는 스프레드시트에서는 완벽해 보여도 검색 결과에서는 실패할 수 있습니다. Google은 문자 수로 공간을 예약하지 않고 시각적 카드 안에 텍스트를 렌더링합니다. 즉, <strong>GameBob | 인디 개발 스튜디오</strong>와 동일한 문자 수의 다른 제목이 문자, 대소문자, 구두점, 간격에 따라 매우 다른 너비를 차지할 수 있습니다.',
    },
    {
      type: 'tip',
      title: '실제로 도움이 되는 규칙',
      html: '중요한 약속이 말줄임표를 살아남도록 스니펫을 작성하세요. 페이지 유형, 검색 의도, 클릭해야 할 가장 강력한 이유를 픽셀 제한 이전에 배치하세요. 브랜드 이름은 유용하지만 주요 혜택을 시야에서 밀어내서는 안 됩니다.',
    },
    {
      type: 'title',
      text: '픽셀 카운터가 측정하는 것',
      level: 3,
    },
    {
      type: 'table',
      headers: ['요소', '중요한 것', '결과 사용 방법'],
      rows: [
        ['타이틀 태그', '원시 문자 수가 아닌 픽셀 단위의 렌더링 너비', '잘리기 전에 주요 키워드와 클릭 약속을 계속 표시합니다.'],
        ['표시 URL', '시각적 신뢰와 주제 명확성', '결과가 어디로 연결되는지 강화하는 읽기 쉬운 경로를 사용합니다.'],
        ['메타 설명', '쿼리 종속 동작이 있는 더 넓은 스니펫 영역', 'Google이 축소하거나 다시 작성할 수 있으므로 혜택을 앞에 배치합니다.'],
        ['기기 모드', '데스크톱과 모바일 카드는 다르게 느껴질 수 있습니다', '중요한 페이지의 메타데이터를 게시하기 전에 두 가지를 모두 확인합니다.'],
      ],
    },
    {
      type: 'title',
      text: '문자 제한이 약한 SEO 습관인 이유',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '"제목을 60자 미만으로 유지하라"와 같은 전통적인 조언은 편리하지만 실제 문제를 숨깁니다. W와 M 같은 넓은 글자, 대문자 단어, 구분자, 숫자, 긴 브랜드 이름은 모두 다른 공간을 소비합니다. 픽셀 측정은 절충안을 즉시 가시화합니다: 문구가 그 자리를 차지할 자격이 있는지, 더 강한 메시지로부터 공간을 빼앗고 있는지 확인할 수 있습니다.',
    },
    {
      type: 'title',
      text: '더 나은 스니펫을 위한 실용적인 워크플로우',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>의도로 시작하세요:</strong> 페이지의 이름뿐만 아니라 사용자가 얻는 것을 설명하세요.',
        '<strong>완전한 제목을 테스트하세요:</strong> 게시하기 전에 시뮬레이터에 붙여넣고 바를 관찰하세요.',
        '<strong>약한 단어를 제거하세요:</strong> 바가 빨간색으로 바뀌면, 가치 있는 용어를 자르기 전에 채우기 단어를 제거하세요.',
        '<strong>말줄임표를 확인하세요:</strong> 잘린 미리보기가 의미를 잃으면, 자르기를 수용하는 대신 제목을 다시 작성하세요.',
        '<strong>설명에 대해 반복하세요:</strong> 첫 문장이 가치 제안을 자체적으로 전달하는지 확인하세요.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '바가 빨간색으로 바뀔 때',
      html: '빨간색 바는 패널티 경고가 아닙니다. 현재 텍스트가 선택한 시각적 목표보다 넓어서 시뮬레이터가 점으로 자르고 있음을 의미합니다. 이것을 편집 신호로 처리하세요: 숨겨진 단어를 버릴 수 있는지, 아니면 스니펫이 더 날카로운 구조가 필요한지 결정하세요.',
    },
    {
      type: 'title',
      text: '제한, 재작성 및 현실적인 기대',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '어떤 시뮬레이터도 Google이 표시할 정확한 스니펫을 보장할 수 없습니다. Google은 제목 링크를 다시 쓰거나, 쿼리 용어를 굵게 표시하거나, 메타 설명 대신 페이지 텍스트를 선택하거나, 다른 검색에 대해 다른 스니펫을 표시할 수 있습니다. 이 도구는 빠른 작성 및 QA 단계로 가장 잘 사용됩니다: 페이지가 프로덕션에 도달하기 전에 명백한 시각적 오버플로를 감지합니다.',
    },
    {
      type: 'summary',
      title: '이 SERP 시뮬레이터의 최적 사용법',
      items: [
        '메타데이터를 게시하기 전에 시각적 오버플로를 감지하기 위해 픽셀 바를 사용하세요.',
        '주요 검색 의도와 클릭 약속을 말줄임표 앞에 계속 표시하세요.',
        'CORS를 허용하는 URL에서 메타데이터를 가져온 다음 필요에 따라 수동으로 결과를 편집하세요.',
        'Google이 쿼리별로 스니펫을 다시 작성할 수 있으므로 미리보기를 작성 가이드로 간주하세요.',
      ],
    },
  ],
};
