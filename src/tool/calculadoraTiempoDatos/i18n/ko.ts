import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CalculadoraTiempoDatosUI } from '../ui';

const slug = 'data-time-calculator-web-speed-impact';
const title = '데이터 시간 계산기: 웹 속도의 영향';
const description = '사용자가 3G, 4G, 5G 연결에서 웹사이트 로딩을 기다리는 동안 잃게 되는 수명을 파악하세요. 사이트 무게의 실제 영향을 계산합니다.';

const faqData = [
  {
    question: '웹사이트 로딩 시간을 아는 것이 왜 중요한가요?',
    answer: '사용자 경험, SEO 및 전환에 직접적인 영향을 미치기 때문입니다. Google의 자료에 따르면 로딩이 1초 지연될 때마다 전환율이 7% 감소합니다. 또한 모바일 방문자의 53%는 로딩에 3초 이상 걸리는 페이지를 이탈합니다.',
  },
  {
    question: '수명 손실로 표시되는 작은 백분율은 무엇을 의미하나요?',
    answer: '이는 한 사람의 전체 수명(약 80년, 즉 25억 초) 중 페이지 로딩을 기다리는 데 소비되는 시간의 비율을 나타냅니다. 개별적으로는 작아 보일 수 있지만, 수백만 명의 사용자를 곱하면 막대한 양의 인간 시간이 낭비되고 있음을 알 수 있습니다.',
  },
  {
    question: '전 세계 평균 연결 속도는 어느 정도인가요?',
    answer: '선진국에서는 4G가 표준입니다. 하지만 개발도상국의 수백만 명의 사용자는 여전히 3G에 의존하고 있습니다. 이것이 모든 연결 속도에 맞게 사이트를 최적화하는 것이 중요한 이유입니다.',
  },
  {
    question: '웹사이트 무게는 어느 정도가 적당한가요?',
    answer: 'Google은 일반적인 4G 연결에서 홈페이지가 3초 이내에 로드될 것을 권장합니다. 이를 위해 사이트 무게는 이상적으로 1~2MB 사이여야 합니다. 그러나 전 세계 평균은 2~3MB에 가깝습니다.',
  },
  {
    question: '사이트 무게를 줄이려면 어떻게 해야 하나요?',
    answer: '주요 전략: 이미지 최적화(무게의 50~80%), CSS 및 JavaScript 압축(minify), 지연 로딩(lazy loading) 사용, 브라우저 캐시 구현, CDN 활용입니다. 이미지 최적화는 일반적으로 가장 효과적인 요소입니다.',
  },
  {
    question: '로딩 속도가 Google 순위에 영향을 미치나요?',
    answer: '네, 물론입니다. Google은 Core Web Vitals를 중요한 순위 요소로 고려합니다. 로딩이 느린 사이트는 비슷한 콘텐츠를 가진 빠른 사이트보다 순위가 낮아집니다.',
  },
];

const howToData = [
  { name: '사이트 무게 입력', text: '브라우저 개발자 도구나 WebPageTest를 사용하여 페이지 무게를 확인하세요. 그 값을 MB 단위로 입력합니다.' },
  { name: '로딩 시간 관찰', text: '계산기는 3G, 4G, 5G에서 사이트 로딩에 걸리는 시간을 표시합니다. 실제 시간은 일반적으로 이보다 더 깁니다.' },
  { name: '수명에 미치는 영향 이해', text: '"수명" 백분율은 누군가의 인생 중 얼마만큼이 기다림에 소비되는지 보여줍니다. 이를 최적화의 동기로 삼으세요.' },
  { name: '최적화 및 재계산', text: '최적화 후 다시 측정하고 재계산하세요. 작은 개선이 큰 영향을 미치는 것을 확인하세요.' },
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

const ui: CalculadoraTiempoDatosUI = {
  headerTitle: '네트워크에서 낭비되는 시간',
  labelWebSize: '웹사이트 무게 (MB)',
  unit: 'MB',
  presetsLabel: '현실적인 예시',
  labelSpeed: '연결 속도',
  speedLabel3g: '3G',
  speedValue3g: '0.4 Mbps',
  speedLabel4g: '4G/LTE',
  speedValue4g: '10 Mbps',
  speedLabel5g: '5G',
  speedValue5g: '100+ Mbps',
  labelTimes: '하루에 몇 번 접속하나요?',
  resultTitle: '결과',
  resultSingleLoad: '1회 로드',
  resultDailyTotal: '하루 총계',
  resultTimePerYear: '연간 대기 시간',
  resultLifeYears: '평생 대기 시간',
  resultMessage: '약 1년의 수명을 잃었습니다',
  copyMessage: '복사됨',
  preset3g: '3G',
  preset4g: '4G',
  preset5g: '5G',
};

export const content: ToolLocaleContent<CalculadoraTiempoDatosUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '웹 최적화 관련 기술 리소스',
  bibliography: [
    { name: 'Google PageSpeed Insights', url: 'https://pagespeed.web.dev/' },
    { name: 'WebPageTest - 웹사이트 속도 분석', url: 'https://www.webpagetest.org/' },
    { name: 'Web.dev - Core Web Vitals', url: 'https://web.dev/vitals/' },
    { name: 'MDN - 웹 성능', url: 'https://developer.mozilla.org/ko/docs/Web/Performance' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '웹사이트 로딩 속도가 중요한 이유', level: 2 },
    {
      type: 'paragraph',
      html: '오늘날의 디지털 시대에 웹사이트 로딩 속도는 사치가 아니라 필수입니다. 사용자 유지, 검색 순위 향상 및 전환 극대화에 있어 밀리초 단위가 중요합니다. 현대의 사용자는 페이지가 3초 이내에 로드되기를 기대합니다.',
    },
    { type: 'title', text: '사용자 경험에 미치는 영향', level: 3 },
    {
      type: 'paragraph',
      html: '모바일 방문자의 53%는 로딩에 3초 이상 걸리면 페이지를 이탈합니다. 전환율은 지연이 1초 추가될 때마다 7%씩 감소합니다.',
    },
    { type: 'title', text: '연결 속도 이해', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>3G:</strong> 0.4 Mbps - 시골 지역 및 개발도상국에서 일반적',
        '<strong>4G/LTE:</strong> 10 Mbps - 선진국 표준',
        '<strong>5G:</strong> 100+ Mbps - 점진적으로 확대 중이나 여전히 제한적',
      ],
    },
    { type: 'title', text: '사이트 무게를 줄이는 전략', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>이미지 최적화:</strong> 무게의 50~80%를 차지합니다. TinyPNG와 같은 도구로 40~60% 줄일 수 있습니다.',
        '<strong>압축(Minification):</strong> CSS 및 JavaScript에서 불필요한 코드를 제거합니다. 30~50% 절약 가능합니다.',
        '<strong>지연 로딩(Lazy Loading):</strong> 사용자가 스크롤할 때 이미지를 로드합니다.',
        '<strong>브라우저 캐시:</strong> 정적 파일을 사용자 브라우저에 캐시합니다.',
        '<strong>CDN:</strong> 지리적으로 가까운 서버에서 콘텐츠를 제공합니다.',
      ],
    },
    { type: 'title', text: '결론: 모든 순간이 중요합니다', level: 2 },
    {
      type: 'paragraph',
      html: '귀하의 웹사이트는 종종 사용자가 브랜드에 대해 갖는 첫인상입니다. 느린 사이트는 사용자를 실망시키고 비즈니스 기회를 잃게 합니다. 빠르고 응답성이 뛰어난 사이트는 긍정적인 경험을 만들고 모든 지표를 향상시킵니다.',
    },
  ],
};

