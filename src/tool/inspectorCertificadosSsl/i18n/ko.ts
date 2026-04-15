import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InspectorCertificadosSslUI } from '../ui';

const slug = 'ssl-tls-certificate-inspector';
const title = '온라인 SSL/TLS 인증서 검사자 PEM 및 CRT 파일 보기';
const description = 'SSL 인증서 파일(.pem, .crt, .der)을 로컬로 분석합니다. 만료 날짜, 발급자, 주체 및 SHA-256 지문을 확인하세요. 데이터가 브라우저를 벗어나지 않습니다.';

const faqData = [
  {
    question: '이 웹사이트에서 SSL 인증서를 분석하는 것이 안전합니까?',
    answer: '네, 매우 안전합니다. 이 유틸리티는 100% 클라이언트 측에서 실행됩니다. .pem 또는 .crt 파일을 드래그하면 브라우저가 로컬에서 데이터를 읽고 서버로 전송하지 않습니다. 완전한 개인정보 보호.',
  },
  {
    question: '어떤 인증서 형식이 지원됩니까?',
    answer: '이 도구는 가장 일반적인 형식을 지원합니다. PEM("BEGIN CERTIFICATE" 헤더가 있는 Base64 인코딩)과 DER(이진 형식)은 보통 .pem, .crt, .cer 또는 .der 확장자입니다.',
  },
  {
    question: '.crt 파일의 만료 날짜를 볼 수 있습니까?',
    answer: '네, 파일을 로드하면 정확한 만료 날짜와 인증서가 오늘 유효한지 여부를 표시하는 "유효성 상태" 섹션이 즉시 표시됩니다.',
  },
  {
    question: '인증서 발급자는 무엇을 합니까?',
    answer: '발급자(Issuer)는 사이트의 신원을 검증한 인증 기관(CA)을 나타냅니다. 인증서가 상용 브라우저에서 인식될 것인지 알아야 합니다.',
  },
  {
    question: 'SHA-256 지문은 어떻게 계산됩니까?',
    answer: '인증서의 이진 콘텐츠에 해시 알고리즘을 직접 적용하여 계산됩니다. 파일이 변조되지 않았는지 확인하고 서버가 예상하는 것과 일치하는지 확인하는 데 도움이 됩니다.',
  },
];

const howToData = [
  { name: '파일 찾기', text: '컴퓨터에서 .pem, .crt, .cer 또는 .der 확장자가 있는 파일을 찾습니다.' },
  { name: '끌어서 놓기', text: '파일을 위의 점선 영역으로 드래그하기만 하면 됩니다.' },
  { name: '결과 보기', text: '즉시 누가 인증서를 발급했는지, 누구를 위한 것인지, 언제 만료되는지, 지문이 표시됩니다.' },
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

const ui: InspectorCertificadosSslUI = {
  labelAnalyzeCertificate: '인증서 분석',
  dragDropText: '.pem, .crt 또는 .cer 파일을 여기로 드래그하세요',
  dragDropSubtext: '(브라우저에서 100% 로컬 처리)',
  cardStatusTitle: '유효성 상태',
  cardSubjectTitle: '주체(소유자)',
  cardIssuerTitle: '발급자(CA)',
  cardFingerprintsTitle: '지문',
  cardTechnicalTitle: '기술 세부 정보',
  labelValidityStatus: '상태:',
  labelExpiryDate: '만료 날짜',
  labelIssueDate: '발급 날짜',
  labelSha256: 'SHA-256 지문',
  labelSha1: 'SHA-1 지문',
  labelSignatureAlgorithm: '서명 알고리즘',
  labelVersion: 'X.509 버전',
  labelSerialNumber: '일련 번호',
  labelCommonName: '일반명',
  labelOrganization: '조직',
  labelOrgUnit: '조직 단위',
  labelLocality: '지역',
  labelState: '도/주',
  labelCountry: '국가',
  labelEmail: '이메일',
  statusValid: '유효',
  statusExpired: '만료됨',
  errorMessageInvalid: '유효하지 않은 파일입니다.',
  supportedFormats: '.pem, .crt, .cer, .der',
};

export const content: ToolLocaleContent<InspectorCertificadosSslUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: 'SSL/TLS 인증서에 관한 기술 자료',
  bibliography: [
    { name: 'RFC 5280: Internet X.509 Public Key Infrastructure Certificate and CRL Profile', url: 'https://datatracker.ietf.org/doc/html/rfc5280' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'Mozilla: SSL/TLS Encryption Overview', url: 'https://developer.mozilla.org/en-US/docs/Glossary/TLS' },
    { name: 'OpenSSL: X.509 Certificate Format Documentation', url: 'https://www.openssl.org/docs/man1.1.1/man1/x509.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'SSL/TLS 인증서 검사자는 무엇이고 왜 필요합니까?', level: 2 },
    {
      type: 'paragraph',
      html: '웹 개발 및 사이버 보안의 세계에서 <strong>SSL(Secure Sockets Layer) 및 TLS(Transport Layer Security) 인증서</strong>는 신뢰의 기초입니다. 디지털 인증서는 암호화 키를 조직 또는 도메인의 데이터에 연결하는 파일일 뿐입니다. 그러나 이러한 파일은 종종 이진 형식(.der) 또는 Base64 인코딩(.pem, .crt)으로 제공되어 한 눈에 읽을 수 없습니다.',
    },
    {
      type: 'paragraph',
      html: '우리의 <strong>SSL/TLS 인증서 검사자</strong>를 사용하면 이러한 파일을 시각적으로 안전하게 "열" 수 있습니다. 공개 도메인을 쿼리하는 도구(유명한 SSL Labs 테스트 등)와 달리 이 유틸리티는 장치의 파일과 직접 작동합니다. 이것은 Nginx, Apache 서버를 구성하거나 AWS 또는 Google Cloud Load Balancer에 SSL 인증서를 로드할 때 매우 중요합니다. 업로드하기 전에 손에 있는 파일이 올바른지 확인해야 합니다.',
    },
    { type: 'title', text: '.pem 또는 .crt 파일을 단계별로 검사하는 방법', level: 2 },
    {
      type: 'paragraph',
      html: '우리의 도구로 인증서를 분석하는 것은 매우 간단하며 콘솔(OpenSSL) 지식이 필요하지 않습니다. 다음 단계를 따르세요.',
    },
    {
      type: 'list',
      items: [
        '<strong>파일 찾기:</strong> 컴퓨터에서 .pem, .crt, .cer 또는 .der 확장자가 있는 파일을 찾습니다.',
        '<strong>끌어서 놓기:</strong> 파일을 위의 점선 영역으로 드래그하기만 하면 됩니다.',
        '<strong>결과 보기:</strong> 즉시 누가 인증서를 발급했는지, 누구를 위한 것인지, 언제 만료되는지, 지문이 표시됩니다.',
      ],
    },
    {
      type: 'tip',
      title: '완전한 개인정보 보호',
      html: '이 프로세스의 가장 중요한 부분은 <strong>개인정보 보호</strong>입니다. 파일은 절대 우리 서버에 업로드되지 않습니다. 인증서의 ASN.1 구조 분석은 모두 브라우저의 RAM 내에서 발생합니다. 공개 키에 대한 완전한 보안.',
    },
    { type: 'title', text: '인증서를 분석할 때 볼 수 있는 주요 필드', level: 2 },
    {
      type: 'paragraph',
      html: '인증서를 분석할 때 가장 관련성 있는 기술 정보를 분석하여 한눈에 확인할 수 있도록 합니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>주체:</strong> 일반명(CN), 조직 및 위치를 포함한 소유자의 데이터를 표시합니다.',
        '<strong>발급자:</strong> 인증서에 서명한 인증 기관(CA)(예: Let\'s Encrypt, DigiCert)을 식별합니다.',
        '<strong>유효 기간:</strong> 정확한 발급 날짜 및 중요한 만료 날짜를 표시합니다.',
        '<strong>지문:</strong> SHA-256 및 SHA-1 지문은 파일 무결성을 확인하는 데 도움이 됩니다.',
      ],
    },
    { type: 'title', text: '지원되는 형식: PEM, CRT, CER 및 DER', level: 2 },
    {
      type: 'paragraph',
      html: '여러 인증서 파일 형식이 있으며 때로는 혼동되기도 합니다. 우리 도구는 가장 일반적인 것과 호환됩니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>PEM(.pem, .crt, .cer):</strong> Linux 및 웹 서버에서 가장 일반적인 형식입니다. 줄 <code>-----BEGIN CERTIFICATE-----</code>로 시작합니다.',
        '<strong>DER(.der, .cer):</strong> 이진 형식입니다. Windows 환경(Java, Active Directory)에서 광범위하게 사용되며 일반적으로 특수 도구 없이 읽기가 더 어렵습니다.',
      ],
    },
    {
      type: 'paragraph',
      html: '파일에 비정상적인 확장자가 있는 경우에도 내부 구조가 표준 X.509 인증서이면 <strong>node-forge</strong> 기반 엔진이 문제 없이 해석할 수 있습니다.',
    },
    { type: 'title', text: 'OpenSSL 대신 이 도구를 사용해야 하는 이유', level: 2 },
    {
      type: 'paragraph',
      html: 'OpenSSL은 암호화의 스위스 군용 칼이지만 명령은 기억하기 어렵습니다. 콘솔에서 인증서를 보려면 다음을 작성해야 합니다.',
    },
    { type: 'code', text: 'openssl x509 -in certificado.crt -text -noout' },
    {
      type: 'paragraph',
      html: '우리 도구는 일일 워크플로우에 대해 명확한 이점을 제공합니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>속도:</strong> 터미널을 열거나 복잡한 플래그를 기억할 필요가 없습니다.',
        '<strong>시각적:</strong> 필드명(Locality, Organization)을 읽을 수 있도록 포맷하고 "L" 또는 "O"와 같은 짧은 코드가 아닙니다.',
        '<strong>유효성 알림:</strong> 인증서가 오늘 유효한지 자동으로 계산하여 현재 날짜를 인증서 날짜와 수동으로 확인할 필요가 없습니다.',
        '<strong>크로스 플랫폼:</strong> 최신 브라우저가 있는 모든 운영 체제에서 작동하며 설치할 종속성이 없습니다.',
      ],
    },
    { type: 'title', text: '보안 및 개인정보: 인증서는 RAM을 떠나지 않습니다', level: 2 },
    {
      type: 'paragraph',
      html: '개발자로서 이러한 유형의 정보를 처리하는 것이 얼마나 중요한지 압니다. 인증서는 기술적으로 <strong>공개 정보</strong>(웹사이트를 방문하는 모든 브라우저로 전송됨)이지만, 불필요하게 외부 서버에 파일을 업로드하지 않는 것이 좋은 관행입니다.',
    },
    {
      type: 'paragraph',
      html: '이 유틸리티는 클라이언트 측에서 엄격하게 실행되는 JavaScript를 사용합니다. 파일을 드래그하면 콘텐츠를 읽고 로컬로 처리합니다. 인터넷을 연결 해제하여 이를 확인할 수 있습니다. 도구는 정확히 같은 방식으로 계속 작동합니다.',
    },
    { type: 'title', text: 'SSL 검사자의 일반적인 사용 사례', level: 2 },
    {
      type: 'paragraph',
      html: '이 페이지에 책갈피를 추가하는 것이 도움이 될 때는 언제입니까?',
    },
    {
      type: 'list',
      items: [
        '<strong>서버 디버깅:</strong> 인증서를 설치하고 웹사이트에서 계속 오류가 발생하는 경우 실수로 이전 인증서를 로드하지 않았는지 확인합니다.',
        '<strong>체인 확인:</strong> 파일에 최종 인증서 또는 중간 인증서가 포함되어 있는지 확인합니다.',
        '<strong>자산 감사:</strong> 이전 프로젝트에서 사용된 인증 기관을 확인합니다.',
        '<strong>복사 무결성:</strong> 서버 간에 인증서를 이동할 때 SHA-256 지문을 비교하여 파일이 손상되지 않았는지 확인합니다.',
      ],
    },
  ],
};

