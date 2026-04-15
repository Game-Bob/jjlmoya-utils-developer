import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UtmGeneratorUI } from '../ui';

const slug = 'utm-generator';
const title = 'Google 애널리틱스용 UTM 매개변수 생성기';
const description = '디지털 마케팅 캠페인을 위한 정확한 추적 링크를 만드세요. Google 애널리틱스 및 기타 분석 도구에 최적화되어 있습니다.';

const faqData = [
  {
    question: 'UTM 매개변수를 사용하는 것이 SEO에 좋지 않나요?',
    answer: '아니요, 캐노니컬(canonical) 태그를 사용하는 한 괜찮습니다. 검색 엔진은 UTM 매개변수가 분석용임을 이해하며 중복 콘텐츠를 생성하지 않습니다.',
  },
  {
    question: '내부 링크에 UTM 매개변수를 사용해야 하나요?',
    answer: '아니요, 절대 안 됩니다. 내부 링크의 UTM 태그는 Google 애널리틱스와 같은 도구에서 사용자 세션을 끊어 트래픽 데이터를 왜곡합니다.',
  },
  {
    question: 'Google 애널리틱스는 UTM에서 대소문자를 구분하나요?',
    answer: '네. "google", "Google", "GOOGLE"은 서로 다른 소스로 처리됩니다. 항상 일관성을 유지하고 가급적 소문자만 사용하는 것이 좋습니다.',
  },
];

const howToData = [
  { name: 'URL 입력', text: 'https://를 포함한 웹사이트의 전체 URL을 입력합니다.' },
  { name: '소스 정의', text: '트래픽이 어디에서 오는지 지정합니다(google, facebook, newsletter 등).' },
  { name: '매체 선택', text: '채널 유형을 선택합니다(cpc, email, social, organic 등).' },
  { name: '캠페인 이름 지정', text: '마케팅 활동을 그룹화하기 위해 식별 가능한 이름을 할당합니다.' },
  { name: '복사 및 사용', text: '생성된 URL을 복사하여 게시물, 광고 또는 이메일 서명에 사용합니다.' },
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

const ui: UtmGeneratorUI = {
  labelUrl: '웹사이트 URL (예: https://example.com) *',
  labelSource: '캠페인 소스 (예: google, newsletter) *',
  labelMedium: '캠페인 매체 (예: cpc, email)',
  labelCampaign: '캠페인 이름 (예: summer_offer)',
  labelTerm: '캠페인 키워드 (예: buy_shoes)',
  labelContent: '캠페인 콘텐츠 (예: banner_top)',
  labelGenerated: '생성된 URL:',
  btnCopy: '링크 복사',
  btnCopied: '복사됨!',
  errorInvalid: '유효한 URL을 입력하세요',
  errorInvalidUrl: '잘못된 URL',
};

export const content: ToolLocaleContent<UtmGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 자료',
  bibliography: [
    { name: '맞춤 URL을 사용하여 캠페인 데이터 수집 - Google 애널리틱스 고객센터 (2024)', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: '캠페인 URL 태깅을 위한 모범 사례 - VWO 블로그 (2023)', url: 'https://vwo.com/blog/utm-tagging-best-practices/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'UTM 생성기: Google 애널리틱스용 추적 매개변수', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>UTM</strong> 매개변수(Urchin Tracking Module)는 웹 트래픽을 추적하기 위해 URL 끝에 추가되는 텍스트 라벨입니다. 당사의 생성기는 디지털 마케팅 캠페인을 위한 추적 가능한 링크 생성을 간소화합니다.',
    },
    { type: 'title', text: '추적 가능한 URL의 5가지 핵심 요소', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>캠페인 소스:</strong> 검색 엔진, 소셜 네트워크 또는 트래픽 소스를 식별합니다. 예: google, newsletter, facebook.',
        '<strong>캠페인 매체:</strong> 마케팅 채널을 나타냅니다. 예: cpc, email, social, banner, organic.',
        '<strong>캠페인 이름:</strong> 캠페인의 특정 이름입니다. 예: summer_offer_2025, app_launch_v2.',
        '<strong>캠페인 키워드:</strong> 유료 검색의 경우 입찰한 키워드입니다. 예: buy_sports_shoes.',
        '<strong>캠페인 콘텐츠:</strong> A/B 테스트용입니다. 캠페인 내에서 유사한 요소를 구별합니다. 예: header_v1, sidebar_v2.',
      ],
    },
    { type: 'title', text: 'UTM 태깅 모범 사례', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>대소문자 일관성:</strong> 도구는 "Google", "GOOGLE" 및 "google"을 구분합니다. 중복을 피하기 위해 항상 소문자를 사용하세요.',
        '<strong>공백 피하기:</strong> 공백은 %20이 됩니다. 대신 하이픈(-) 또는 언더바(_)를 사용하세요.',
        '<strong>내부 링크에 사용 금지:</strong> UTM 추적은 외부 트래픽 전용입니다. 내부 링크에 사용하면 세션이 끊기고 주요 지표가 훼손됩니다.',
        '<strong>태그 문서화:</strong> 불일치를 방지하기 위해 사용하는 모든 조합의 기록을 보관하세요.',
      ],
    },
  ],
};

