import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashGeneratorUI } from '../ui';

const slug = 'hash-generator';
const title = '온라인 보안 해시 생성기';
const description = 'MD5, SHA-1, SHA-256, SHA-512 해시를 즉시 계산합니다. 개발자를 위한 무료, 비공개, 초고속 보안 도구입니다. 100% 클라이언트 측에서 작동합니다.';

const faqData = [
  {
    question: '해시란 무엇이며 어디에 사용되나요?',
    answer: '해시는 텍스트나 파일의 고유한 디지털 지문입니다. 데이터가 변조되지 않았는지 확인하고 비밀번호를 안전하게 저장하는 데 사용됩니다.',
  },
  {
    question: '이 온라인 생성기를 사용하는 것이 안전한가요?',
    answer: '네, 완전히 안전합니다. 다른 사이트와 달리 해시 처리는 사용자의 브라우저에서 직접 이루어집니다. 데이터는 절대 서버로 전송되지 않습니다.',
  },
  {
    question: '어떤 해시 알고리즘을 선택해야 하나요?',
    answer: '현대적인 보안과 키 저장소에는 SHA-256 또는 SHA-512를 권장합니다. MD5와 SHA-1은 기존 시스템과의 호환성을 위해서만 사용해야 합니다.',
  },
  {
    question: "'솔트(Salt)'를 추가한다는 것은 무엇을 의미하나요?",
    answer: '솔트는 해시를 고유하게 만들고 사전 공격을 통한 해독을 훨씬 어렵게 만들기 위해 텍스트와 섞는 추가 문자열입니다.',
  },
];

const howToData = [
  { name: '텍스트 입력', text: '해시화하려는 텍스트를 입력란에 입력하거나 붙여넣습니다.' },
  { name: '보안 구성', text: '선택적으로 솔트를 추가하거나 처리 라운드(스트레칭)를 늘려 견고함을 높입니다.' },
  { name: '결과 확인', text: '입력하는 동안 실시간으로 다양한 해시(MD5, SHA 등)가 계산됩니다.' },
  { name: '해시 복사', text: '각 알고리즘 옆의 복사 아이콘을 클릭하여 클립보드에 저장합니다.' },
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

const ui: HashGeneratorUI = {
  labelInput: '입력 텍스트',
  placeholderInput: '해시를 계산할 텍스트를 여기에 입력하거나 붙여넣으세요...',
  labelSalt: '솔트 (선택 사항)',
  placeholderSalt: '보안 시드...',
  labelRounds: '라운드 (스트레칭)',
  copyMd5: 'MD5 복사',
  copySha1: 'SHA-1 복사',
  copySha256: 'SHA-256 복사',
  copySha512: 'SHA-512 복사',
};

export const content: ToolLocaleContent<HashGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '해싱 관련 기술 리소스',
  bibliography: [
    { name: 'MDN Web Docs: SubtleCrypto.digest() API', url: 'https://developer.mozilla.org/ko/docs/Web/API/SubtleCrypto/digest' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'IETF: The MD5 Message-Digest Algorithm (RFC 1321)', url: 'https://datatracker.ietf.org/doc/html/rfc1321' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '암호화 해시란 무엇인가요?', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>암호화 해시</strong>는 임의의 데이터를 고정된 길이의 문자열로 변환하는 수학적 함수입니다. 동일한 입력은 항상 동일한 출력을 생성하지만, 입력이 조금만 변경되어도 완전히 다른 해시가 생성됩니다.',
    },
    { type: 'title', text: '사용 가능한 알고리즘', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>MD5 (128비트):</strong> 빠르고 널리 지원됩니다. 비밀번호 보안용으로는 부적합한 것으로 간주되지만 중요하지 않은 환경에서의 파일 무결성 검사에는 유용합니다.',
        '<strong>SHA-1 (160비트):</strong> 2017년 이후 보안상 중요한 용도에서는 사용이 권장되지 않습니다. 여전히 기존 시스템에 남아 있습니다.',
        '<strong>SHA-256 (256비트):</strong> 대부분의 애플리케이션에 대한 현재 표준입니다. 비트코인, TLS 및 코드 서명에 사용됩니다.',
        '<strong>SHA-512 (512비트):</strong> SHA-2의 더 긴 변형으로, 최대의 충돌 저항이 필요한 경우에 이상적입니다.',
      ],
    },
    { type: 'title', text: '솔트 및 키 스트레칭', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>솔트</strong>는 해싱 전에 텍스트에 추가되는 무작위 문자열로, 두 개의 동일한 입력이 서로 다른 해시를 생성하도록 보장합니다. <strong>키 스트레칭</strong>(라운드)은 무차별 대입 공격에 대비하기 위해 해시 함수를 여러 번 적용합니다.',
    },
    { type: 'title', text: '완벽한 개인정보 보호: 100% 클라이언트 측', level: 3 },
    {
      type: 'paragraph',
      html: '이 도구는 SHA의 경우 브라우저의 <strong>Web Crypto API</strong>를 사용하고 MD5의 경우 순수 TypeScript 구현을 사용합니다. 모든 처리는 로컬에서 이루어지며, 사용자의 데이터는 기기를 떠나지 않습니다.',
    },
  ],
};

