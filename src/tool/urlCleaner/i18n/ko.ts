import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlCleanerUI } from '../ui';

const slug = 'url-tracking-cleaner';
const title = 'URL 트래킹 클리너: UTM, FBCLID, GCLID 제거';
const description = 'URL에 포함된 추적 및 광고 파라미터를 자동으로 제거합니다. 깔끔한 링크를 공유하고 디지털 프라이버시를 즉시 보호하세요.';

const faqData = [
  {
    question: '이 도구는 어떤 종류의 추적 파라미터를 제거하나요?',
    answer: '가장 흔한 추적 파라미터를 자동으로 감지하고 제거합니다. UTM 파라미터(utm_source, utm_medium 등), 광고 클릭 식별자(fbclid, gclid, msclkid), 이메일 마케팅 캠페인 식별자(mc_cid, _hsenc) 등이 포함됩니다.',
  },
  {
    question: '웹사이트 기능에 영향을 미치나요?',
    answer: '일반적으로 그렇지 않습니다. 이 파라미터들은 거의 전적으로 분석과 마케팅 목적으로 사용됩니다. 제거해도 페이지는 정상적으로 로드되지만, 사이트 운영자는 클릭의 정확한 출처를 추적할 수 없게 됩니다.',
  },
  {
    question: '여기서 링크를 처리해도 안전한가요?',
    answer: '물론입니다. 저희 모든 도구와 마찬가지로 처리 과정은 100% 클라이언트 사이드에서 이루어집니다. 링크는 절대 서버로 전송되지 않으며, 모든 작업은 사용자의 브라우저 내에서 비공개로 처리됩니다.',
  },
  {
    question: 'Facebook 링크가 왜 그렇게 긴가요?',
    answer: 'Facebook은 플랫폼을 벗어나는 모든 링크에 "fbclid"라는 파라미터를 추가합니다. 이를 통해 서드파티 광고를 차단했더라도 다른 웹사이트에서의 활동을 추적할 수 있습니다.',
  },
];

const howToData = [
  { name: 'URL 붙여넣기', text: '추적 파라미터가 포함된 전체 URL을 입력하세요' },
  { name: '정리하기 클릭', text: '도구가 URL을 자동으로 분석합니다' },
  { name: '결과 확인', text: '정리된 URL과 제거된 파라미터 목록을 확인하세요' },
  { name: '복사하여 공유', text: '이메일, SNS, 메시지에서 깨끗한 URL을 사용하세요' },
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

const ui: UrlCleanerUI = {
  labelInput: '추적 파라미터가 포함된 URL 붙여넣기',
  btnClean: '정리하기',
  labelCleaned: '정리된 URL',
  labelRemoved: '제거된 트래커',
  countLabel: '제거된 파라미터 수',
  reductionLabel: '길이 감소',
  noneDetected: '일반적인 추적 파라미터가 감지되지 않았습니다.',
  errorInvalid: '유효한 URL을 입력해 주세요.',
  btnCopy: '복사',
  btnCopied: '복사됨',
};

export const content: ToolLocaleContent<UrlCleanerUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '프라이버시 및 웹 추적 관련 자료',
  bibliography: [
    { name: 'Electronic Frontier Foundation (EFF): 온라인 추적 가이드', url: 'https://www.eff.org/issues/online-behavioral-tracking' },
    { name: 'Google Analytics: UTM 파라미터 문서', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: '웹 프라이버시: 클릭 ID의 영향', url: 'https://www.w3.org/community/web-advertising/wiki/Click_Identifiers' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'URL 트래킹 클리너: UTM, FBCLID, GCLID 제거', level: 2 },
    {
      type: 'paragraph',
      html: '링크에서 보이지 않는 트래커를 제거하여 깔끔하고 안전하게, 그리고 전문적으로 공유하세요. URL 속 그 이상한 코드들이 무엇인지 알아보세요.',
    },
    { type: 'title', text: 'URL 트래킹 클리너란 무엇이며 왜 필요한가요?', level: 3 },
    {
      type: 'paragraph',
      html: '친구에게 보내려고 링크를 복사했다가 필요 이상으로 세 배나 길다는 걸 눈치챈 적 있으신가요? 그 쓸데없이 긴 부분이 바로 추적 파라미터입니다. <strong>트래킹 클리너</strong>는 대형 플랫폼들이 여러분의 모든 클릭에 심어 놓은 광고 및 추적 정보를 URL에서 제거하는 도구입니다.',
    },
    { type: 'title', text: '가장 흔한 추적 파라미터', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>UTM (Google Analytics):</strong> utm_source, utm_medium, utm_campaign으로 캠페인 추적',
        '<strong>FBCLID:</strong> 쿠키 제한을 우회하는 Facebook 클릭 식별자',
        '<strong>GCLID / DCLID:</strong> 방문을 Google Ads 캠페인과 연결하는 Google Click ID',
        '<strong>MSCLKID:</strong> Microsoft Advertising 및 Bing 클릭 식별자',
        '<strong>HubSpot & Mailchimp:</strong> _hsenc, mc_cid 같은 마케팅 자동화 파라미터',
        '<strong>LinkedIn & 기타:</strong> li_fat_id 및 기타 소셜 미디어 트래커',
      ],
    },
  ],
};

