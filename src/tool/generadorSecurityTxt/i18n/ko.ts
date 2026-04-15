import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GeneradorSecurityTxtUI } from '../ui';

const slug = 'security-txt-generator-rfc-9116';
const title = 'Security.txt 생성기 RFC 9116';
const description = '취약점 보고를 용이하게 하고 국제 웹 보안 표준을 준수하는 전문 security.txt 파일을 만들세요.';

const faqData = [
  {
    question: 'security.txt 파일이란 무엇입니까?',
    answer: '이는 표준(RFC 9116)으로, 웹사이트가 보안 연구자가 취약점을 책임감 있게 보고해야 하는 방법을 정의할 수 있게 합니다.',
  },
  {
    question: 'security.txt 파일은 어디에 배치되어야 합니까?',
    answer: '권장 표준 위치는 도메인의 /.well-known/ 폴더이며, 결과 URL은 https://example.com/.well-known/security.txt입니다.',
  },
  {
    question: '만료 날짜가 필수인 이유는 무엇입니까?',
    answer: '연락처 정보가 만료되지 않도록 하기 위함입니다. 파일에 유효한 만료 날짜가 없으면 연구자는 통신 채널이 활성화되어 있는지 신뢰하지 않을 수 있습니다.',
  },
  {
    question: 'security.txt에서 필수 필드는 무엇입니까?',
    answer: 'RFC 9116에 따르면 필수 필드는 "Contact"(이메일 주소 또는 URL 포함)와 "Expires"(ISO 8601 형식의 미래 날짜 포함)입니다.',
  },
];

const howToData = [
  { name: '필드 작성', text: '이메일 주소 또는 연락처 URL을 완료하고 만료 날짜를 선택하세요.' },
  { name: '선택적 필드 추가', text: 'PGP 키, 보안 정책 또는 채용 게시판과 같은 추가 정보를 포함하세요.' },
  { name: '파일 다운로드 또는 복사', text: '"Download .txt"를 클릭하거나 내용을 복사하여 security.txt로 저장하세요.' },
  { name: '서버에 업로드', text: '파일을 도메인의 /.well-known/ 폴더에 배치하세요.' },
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

const ui: GeneradorSecurityTxtUI = {
  titleBasicFields: '필수 필드',
  labelContact: '연락처(이메일 또는 URL)',
  placeholderContact: 'mailto:security@example.com 또는 https://example.com/contact',
  contactTip: '취약점 보고를 보낼 주소입니다.',
  labelExpires: '만료 날짜',
  expiresTip: '향후 1년을 초과하면 안 됩니다.',
  titleOptionalFields: '선택적 필드',
  labelEncryption: '공개 키',
  placeholderEncryption: 'https://example.com/pgp-key.txt',
  encryptionTip: '암호화된 보고를 위한 PGP 키 링크입니다.',
  labelPolicy: '보안 정책',
  placeholderPolicy: 'https://example.com/security/policy/',
  policyTip: '취약점 처리 방법을 자세히 설명하는 페이지입니다.',
  labelAcknowledgments: '감사의 말',
  placeholderAcknowledgments: 'https://example.com/security/hall-of-fame/',
  acknowledgmentsTip: '보안 연구자에게 감사를 표하는 페이지입니다.',
  labelHiring: '채용 게시판',
  placeholderHiring: 'https://example.com/jobs',
  hiringTip: '보안 채용 공고 링크입니다.',
  resultTitle: '미리보기(security.txt)',
  btnCopy: '코드 복사',
  btnDownload: '.txt 다운로드',
  copiedMessage: '복사됨',
  generatingMessage: 'security.txt 파일 생성 중...',
  comment: '생성됨',
};

export const content: ToolLocaleContent<GeneradorSecurityTxtUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: 'Security.txt에 관한 기술 자료',
  bibliography: [
    { name: 'RFC 9116: A File Format to Aid in Security Vulnerability Disclosure', url: 'https://datatracker.ietf.org/doc/html/rfc9116' },
    { name: 'Security.txt Official Website', url: 'https://securitytxt.org/' },
    { name: 'OWASP: Vulnerability Disclosure Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'security.txt 파일이란 무엇이고 생성해야 하는 이유는 무엇입니까?', level: 2 },
    {
      type: 'paragraph',
      html: '오늘날의 사이버 보안 환경에서 투명성과 소통이 필수적입니다. 시스템 관리자, 웹 개발자 또는 디지털 비즈니스 소유자라면 아마도 <code>robots.txt</code> 또는 <code>ads.txt</code>와 같은 머신이 웹사이트를 이해하도록 돕는 텍스트 파일에 이미 익숙할 것입니다. 그러나 플랫폼의 무결성을 위한 덜 알려져 있지만 중요한 표준이 있습니다: <strong>Security.txt</strong>, <strong>RFC 9116</strong>으로 정의됩니다.',
    },
    {
      type: 'paragraph',
      html: '<strong>security.txt 파일을 생성하는</strong> 목적은 보안 연구자에게 웹사이트 관리자에게 연락하는 표준화된 방법을 제공하는 것입니다. 이 파일이 없으면 시스템의 결함을 발견한 윤리적 해커는 누구에게 보고해야 할지 모를 수 있으며, 이는 종종 정보가 손실되거나 공지 없이 공개되거나 악의적인 행위자에 의해 악용되는 결과를 초래합니다.',
    },
    { type: 'title', text: 'RFC 9116에 따라 Security.txt 파일을 만들고 설치하는 방법', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>보안 연구자 연락처 표준</strong>은 이 파일이 서버의 특정 위치에 있어야 함을 규정합니다: <code>/.well-known/</code> 폴더입니다. 따라서 최종 경로는 일반적으로 <code>https://yourdomain.com/.well-known/security.txt</code>입니다. 루트에 배치하는 것도 허용되지만(<code>/security.txt</code>) 첫 번째 옵션은 자동 스캐닝 도구에서 선호합니다.',
    },
    { type: 'title', text: '놓칠 수 없는 필수 필드', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>security.txt 코드를 얻을</strong> 때 최소한 두 개의 중요한 요소를 포함해야 합니다:',
    },
    {
      type: 'list',
      items: [
        '<strong>Contact:</strong> 보고서를 보낼 이메일 주소 또는 양식의 URL입니다. <code>mailto:</code> 또는 <code>https://</code>로 시작해야 합니다.',
        '<strong>Expires:</strong> 파일의 정보가 더 이상 유효하지 않음을 나타내는 ISO 8601 형식의 날짜입니다. 1년 이상 앞으로 설정하지 않는 것이 좋습니다.',
      ],
    },
    { type: 'code', text: 'Contact: mailto:security@yourcompany.com\nExpires: 2025-12-31T23:59:59.000Z' },
    { type: 'title', text: '고급 보안을 위한 선택적 필드', level: 3 },
    {
      type: 'paragraph',
      html: '더 강력한 <strong>웹사이트 보호</strong>를 원하는 사이트의 경우 표준은 추가 필드를 제공합니다:',
    },
    {
      type: 'list',
      items: [
        '<strong>Encryption:</strong> 연구자가 암호화되고 안전한 정보를 보낼 수 있도록 PGP 공개 키 링크입니다.',
        '<strong>Policy:</strong> 책임감 있는 공개 프로세스를 설명하는 보안 정책 페이지 링크입니다.',
        '<strong>Acknowledgments:</strong> 연구자를 위한 "명예의 전당" 또는 감사 벽 링크입니다.',
        '<strong>Hiring:</strong> 사이버 보안 채용 공고 링크입니다.',
      ],
    },
    { type: 'title', text: '무료 Security.txt 생성기 사용의 이점', level: 2 },
    {
      type: 'paragraph',
      html: '많은 사람들이 <strong>웹사이트의 보안 연락처를 빠르게 얻는 방법</strong>을 궁금해합니다. 우리의 도구를 사용하면 복잡한 기술 문서를 읽을 필요 없이 RFC 9116 형식을 엄격하게 준수합니다.',
    },
    {
      type: 'paragraph',
      html: '생성기를 사용하면 일반적인 구문 오류를 피할 수 있습니다. 예를 들어 <code>mailto:</code> 접두사를 잊거나 만료 날짜의 시간대 형식을 잘못 지정하면 연구자의 자동화된 도구가 파일을 무시할 수 있습니다.',
    },
    { type: 'title', text: 'SEO 및 웹 평판에 미치는 영향', level: 3 },
    {
      type: 'paragraph',
      html: '<code>security.txt</code> 파일은 페이지 속도나 HTTPS와 같은 Google의 직접적인 순위 지정 요소가 아니지만 간접적인 영향을 미칩니다. 취약점을 잘 관리하는 웹사이트는 SEO를 수 시간 내에 망칠 수 있는 시끄러운 해킹(손상, 스팸 삽입)을 방지합니다. 또한 많은 회사 보안 평점 플랫폼(예: SecurityScorecard 또는 BitSight)은 이 표준을 구현하는 도메인에 추가 포인트를 부여합니다.',
    },
    { type: 'title', text: '결론: 더 안전한 웹을 위한 간단한 단계', level: 2 },
    {
      type: 'paragraph',
      html: '요약하면 <strong>security.txt를 다운로드</strong>하고 서버에 업로드하는 것은 오늘날 수행할 수 있는 가장 빠르고 효과적인 보안 유지 관리 작업 중 하나입니다. "좋은 사람들"이 쉽게 할 수 있도록 하고, 호기심 많은 사람들을 억제하며, 사용자 개인정보 보호 및 데이터를 진지하게 받아들인다는 것을 세상에 보여줍니다.',
    },
    {
      type: 'paragraph',
      html: '보안 침해로 인해 이를 제공하지 않은 것을 후회할 때까지 기다리지 마세요. 지금 <strong>온라인 security.txt 생성기</strong>를 사용하여 디지털 생태계를 제어하세요.',
    },
  ],
};

