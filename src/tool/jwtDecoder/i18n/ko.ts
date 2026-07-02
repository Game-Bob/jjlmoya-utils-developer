import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JwtDecoderUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'jwt-decoder-parser-and-claims-inspector';
const title = 'JWT Decoder, Parser and Claims Inspector';
const description = 'JSON Web Token을 붙여넣고 헤더와 페이로드를 즉시 디코딩하며 등록된 클레임을 검사하고 만료된 토큰을 발견하며 인증 흐름을 디버깅하기 위해 깨끗한 JSON을 복사하세요.';

const howTo = [
  {
    name: 'JWT 붙여넣기',
    text: 'Authorization 헤더, 쿠키, 로그 항목 또는 ID 공급자에서 토큰을 복사하여 입력 필드에 붙여넣으세요.',
  },
  {
    name: '디코딩된 헤더와 페이로드 읽기',
    text: '이 도구는 토큰을 헤더, 페이로드, 서명으로 분할한 다음 JSON 세그먼트를 별도의 패널에 표시하여 빠르게 검사합니다.',
  },
  {
    name: '중요한 클레임 확인하기',
    text: '알고리즘, 발급자, 수신자, 주체, 발급 시간, 유효 시작 시간, 만료 시간을 Unix 타임스탬프를 수동으로 변환하지 않고 검토하세요.',
  },
  {
    name: '필요한 데이터 복사하기',
    text: '팀과 정리된 디버깅 스냅샷을 공유해야 할 때 디코딩된 한 섹션이나 전체 디코딩 출력을 복사하세요.',
  },
];

const faq = [
  {
    question: 'JWT를 디코딩하면 토큰이 유효하다는 것이 증명되나요?',
    answer: '아니요. 디코딩은 base64url로 인코딩된 헤더와 페이로드만 보여줍니다. 토큰은 서명, 발급자, 수신자, 만료 및 관련 클레임이 애플리케이션이나 ID 공급자에 의해 검증된 후에만 신뢰할 수 있습니다.',
  },
  {
    question: '이 JWT 디코더를 액세스 토큰과 ID 토큰에 사용할 수 있나요?',
    answer: '네. 이 디코더는 표준 3부분 JWT 형식을 사용하는 한 OAuth 액세스 토큰, OpenID Connect ID 토큰, 세션 토큰 및 서비스 간 토큰을 검사하는 데 유용합니다.',
  },
  {
    question: '서명 패널이 토큰을 검증하지 않는 이유는 무엇인가요?',
    answer: 'JWT 검증에는 올바른 시크릿, 공개 키 또는 JWKS 구성이 필요합니다. 이 도구는 눈에 보이는 서명 문자열이 유효성 증명인 것처럼 가장하지 않고 개발자가 토큰 내용을 볼 수 있도록 의도적으로 디코딩과 검사에 중점을 둡니다.',
  },
  {
    question: 'JWT를 디버깅할 때 가장 먼저 무엇을 확인해야 하나요?',
    answer: 'exp, nbf, iss, aud, alg부터 시작하세요. 대부분의 실제 운영 문제는 만료된 토큰, 클록 스큐, 잘못된 수신자 값, 예상치 못한 발급자 URL 또는 안전하지 않은 알고리즘 가정에서 비롯됩니다.',
  },
];

const ui: JwtDecoderUI = {
  tokenLabel: 'JWT 토큰',
  tokenPlaceholder: '여기에 JWT 붙여넣기: header.payload.signature',
  sampleButton: '샘플 로드',
  clearButton: '지우기',
  statusWaiting: 'JSON 헤더, 페이로드 및 클레임을 디코딩하려면 토큰을 붙여넣으세요.',
  statusValid: 'JWT가 성공적으로 디코딩되었습니다.',
  statusInvalid: '이것은 유효한 3부분 JWT로 보이지 않습니다.',
  statusExpired: 'JWT가 디코딩되었지만 exp 클레임이 이미 만료되었습니다.',
  statusUnsigned: 'JWT가 디코딩되었지만 서명되지 않았거나 alg none을 사용합니다.',
  headerTitle: '헤더',
  payloadTitle: '페이로드',
  signatureTitle: '서명',
  claimsTitle: '등록된 클레임',
  copyHeader: '디코딩된 헤더 복사',
  copyPayload: '디코딩된 페이로드 복사',
  copySignature: '서명 복사',
  copyAll: '모두 복사',
  copiedLabel: '복사됨',
  invalidTokenTitle: '유효하지 않은 JWT',
  invalidTokenBody: '토큰에 점으로 구분된 3개의 base64url 세그먼트가 있는지 확인하세요.',
  invalidSegmentError: '토큰에 점으로 구분된 3개의 base64url 세그먼트가 있는지 확인하세요.',
  invalidDecodeError: '헤더 또는 페이로드를 유효한 JSON으로 디코딩할 수 없습니다.',
  emptyJson: '{}',
  signaturePresent: '서명 세그먼트가 있습니다. 인증 레이어에서 올바른 키로 검증하세요.',
  signatureMissing: '서명 세그먼트 없음',
  algorithmLabel: '알고리즘',
  typeLabel: '유형',
  issuerLabel: '발급자',
  subjectLabel: '주체',
  audienceLabel: '수신자',
  issuedAtLabel: '발급 시간',
  notBeforeLabel: '유효 시작',
  expiresAtLabel: '만료 시간',
  claimMissing: '없음',
  privacyNote: '디코딩은 브라우저 세션에서 실행됩니다. 보안 정책에서 허용하지 않는 한 운영 시크릿을 어떤 도구에도 붙여넣지 마세요.',
  sampleToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnYW1lYm9iLXVzZXItNDIiLCJuYW1lIjoiR2FtZUJvYiBEZXZlbG9wZXIiLCJpc3MiOiJodHRwczovL3d3dy5nYW1lYm9iLmRldiIsImF1ZCI6ImRldmVsb3Blci10b29scyIsImlhdCI6MTcxNzIwMDAwMCwibmJmIjoxNzE3MjAwMDAwLCJleHAiOjE4OTM0NTYwMDAsInJvbGUiOiJhZG1pbiJ9.demo-signature',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<JwtDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'JWT 디코더 FAQ',
  faq,
  bibliographyTitle: 'JWT 명세 및 보안 참조',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: '보안 컨텍스트를 잃지 않고 JWT 디코딩하기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'JSON Web Token은 간결해 보이지만, 서명 알고리즘, 발급자, 수신자, 주체, 발급 시간, 유효 시작 시간, 만료 시간 및 애플리케이션별 인증 클레임 등 인증 실패를 설명하는 정확한 세부 정보를 담고 있는 경우가 많습니다. 이 <strong>JWT 디코더, 파서 및 클레임 인스펙터</strong>는 세 개의 토큰 세그먼트를 읽을 수 있는 JSON으로 변환하여 인증 흐름을 더 빠르게 디버깅할 수 있게 해줍니다.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '디코딩이 신뢰를 의미하지는 않습니다',
      html: '누구나 JWT를 base64url로 디코딩할 수 있습니다. 신뢰는 애플리케이션이 올바른 시크릿, 공개 키 또는 JWKS로 서명을 검증한 다음 발급자, 수신자, 만료 및 도메인별 클레임을 검증한 후에만 시작됩니다. 이 도구는 데이터 검사용으로 사용하고 토큰을 진짜로 받아들이는 데 사용하지 마세요.',
    },
    {
      type: 'title',
      text: '각 JWT 세그먼트가 알려주는 것',
      level: 3,
    },
    {
      type: 'table',
      headers: ['세그먼트', '일반적인 내용', '디버깅 가치'],
      rows: [
        ['헤더', '알고리즘, 토큰 유형 및 선택적 키 ID', 'HS256, RS256, ES256 또는 다른 검증 전략을 토큰이 기대하는지 보여줍니다.'],
        ['페이로드', '등록된 클레임 및 애플리케이션 클레임', '신원, 테넌트, 스코프, 역할, 만료 및 수신자 불일치를 드러냅니다.'],
        ['서명', 'base64url로 인코딩된 암호화 서명 바이트', '서명 세그먼트가 존재함을 확인하지만 다른 곳에서 올바른 키로 검증해야 합니다.'],
      ],
    },
    {
      type: 'title',
      text: '보통 인증 실패를 설명하는 클레임',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>exp:</strong> 토큰이 만료된 경우 갱신 로직이나 클록 설정이 잘못되었을 수 있습니다.',
        '<strong>nbf:</strong> 토큰이 아직 활성화되지 않은 경우 서버와 ID 공급자의 클록이 동기화되지 않았을 수 있습니다.',
        '<strong>iss:</strong> 발급자 URL이 구성과 다른 경우 토큰이 잘못된 테넌트나 환경에서 온 것일 수 있습니다.',
        '<strong>aud:</strong> 수신자가 API 식별자와 일치하지 않는 경우 토큰이 다른 리소스용으로 발급된 것입니다.',
        '<strong>alg:</strong> 알고리즘이 예상치 못한 경우 검증기가 토큰을 거부하거나 위험한 구성 실수를 드러낼 수 있습니다.',
      ],
    },
    {
      type: 'title',
      text: '개발 중 JWT 파서의 사용 사례',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '프론트엔드 디버깅',
          description: '로그인 후 수신된 ID 토큰과 액세스 토큰을 검사하여 스코프, 역할 및 프로필 클레임을 확인하세요.',
          icon: 'mdi:monitor-dashboard',
          points: ['프로필 클레임 확인', '스코프와 역할 확인', '로그인 환경 비교'],
        },
        {
          title: '백엔드 API QA',
          description: '예상되는 발급자 및 수신자 값과 Authorization 헤더에 실제로 전송된 토큰을 비교하세요.',
          icon: 'mdi:api',
          highlight: true,
          points: ['수신자 형태 검증', '발급자 불일치 발견', '베어러 토큰 검사'],
        },
        {
          title: 'ID 공급자 설정',
          description: 'Auth0, Azure AD, Cognito, Keycloak 또는 커스텀 공급자의 클레임이 앱이 기대하는 형태인지 확인하세요.',
          icon: 'mdi:account-key',
          points: ['테넌트 데이터 검토', '커스텀 클레임 확인', '공급자 매핑 비교'],
        },
      ],
    },
    {
      type: 'title',
      text: '이 인스펙터가 명확하게 보여주는 일반적인 JWT 실수',
      level: 3,
    },
    {
      type: 'proscons',
      title: '빠른 검사 vs 신뢰 결정',
      items: [
        {
          pro: '잘못된 형식의 토큰을 즉시 확인할 수 있습니다.',
          con: '예상하는 수신자나 발급자를 알 수 없습니다.',
        },
        {
          pro: 'Unix 타임스탬프 클레임을 읽을 수 있는 날짜로 변환합니다.',
          con: '실제 키 자료 없이는 서명을 검증할 수 없습니다.',
        },
        {
          pro: '발급자, 수신자, 주체, 유형의 누락된 값을 찾습니다.',
          con: '스코프와 역할이 애플리케이션에 안전하다는 것을 증명할 수 없습니다.',
        },
      ],
    },
    {
      type: 'summary',
      title: '모범 사례 워크플로',
      items: [
        '클라이언트나 API가 실제로 받은 내용을 이해하기 위해 토큰을 디코딩하세요.',
        '애플리케이션 로직을 추적하기 전에 exp, nbf, iss, aud, sub, alg를 확인하세요.',
        '서명과 신뢰 결정은 인증 레이어에서만 검증하세요.',
        '민감한 운영 JWT를 티켓, 로그, 스크린샷에 공유하지 마세요.',
      ],
    },
  ],
};
