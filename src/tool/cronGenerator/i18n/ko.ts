import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CronGeneratorUI } from '../ui';

const slug = 'cron';
const title = '온라인 Cron 표현식 생성기. 번역 및 시각화 도구';
const description =
  'Linux Cron 표현식을 생성하기 위한 무료 시각화 도구입니다. * * * * *을 인간이 이해할 수 있는 언어로 번역하고 다음 5번의 실행 일정을 실시간으로 보여줍니다.';

const faqData = [
  {
    question: 'Cron 표현식이란 무엇인가요?',
    answer:
      'Unix 계열 시스템(Linux, macOS)에서 자동 작업을 위한 실행 일정을 나타내는 텍스트 문자열입니다. 분, 시, 일, 월, 요일을 정의하는 5개의 필드로 구성됩니다.',
  },
  {
    question: '모든 시스템과 호환되나요?',
    answer:
      '네, 생성된 표현식은 POSIX 표준을 따르며 Linux Crontab, macOS cron, AWS CloudWatch 또는 GitHub Actions와 같은 클라우드 서비스와 호환됩니다.',
  },
  {
    question: 'Cron에서 별표(*)는 무엇을 의미하나요?',
    answer:
      '별표는 "모두"를 의미하는 와일드카드입니다. 예를 들어 분 필드에 *가 있으면 작업이 정의된 범위의 매 분마다 실행됨을 의미합니다.',
  },
  {
    question: '향후 실행 일정을 어떻게 확인할 수 있나요?',
    answer:
      '이 도구에는 현재 표현식에 따라 작업이 실행될 다음 5개의 날짜와 시간을 정확하게 보여주는 실시간 뷰어가 포함되어 있습니다.',
  },
];

const howToData = [
  {
    name: '간격 선택',
    text: '빠른 프리셋(매분, 매시간, 매일 등)을 사용하여 작업 실행 빈도를 선택하세요.',
  },
  {
    name: '고급 세부 정보 구성',
    text: '"고급" 탭으로 전환하여 분, 시간 또는 특정 요일을 수동으로 정의하세요.',
  },
  {
    name: '번역 및 날짜 확인',
    text: '인간 언어 설명을 읽고 다음 5번의 실행 일정을 확인하여 스케줄이 올바른지 확인하세요.',
  },
  {
    name: '표현식 복사',
    text: '결과 문자열을 복사하여 crontab 파일이나 서버 구성에 직접 붙여넣으세요.',
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
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
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

const ui: CronGeneratorUI = {
  labelMinute: '분',
  labelHour: '시',
  labelDom: '일 (월)',
  labelMonth: '월',
  labelDow: '요일 (주)',
  tabQuick: '빠른 설정',
  tabAdvanced: '고급 설정',
  fieldMinute: '분 (0-59)',
  fieldHour: '시간 (0-23)',
  fieldDom: '일 (1-31)',
  fieldMonth: '월 (1-12)',
  fieldDow: '요일 (0-6)',
  hintMinute: '예: *, */5, 0,30',
  hintDow: '0 = 일요일, 6 = 토요일',
  labelNextRuns: '다음 실행 일정',
  btnCopy: '표현식 복사',
  btnCopied: '복사됨!',
  msgNoRuns: '합리적인 범위 내에서 예정된 실행 일정을 찾을 수 없습니다.',
  msgError: '날짜 계산 중 오류가 발생했습니다.',
  presetEveryMinute: '매분',
  presetEveryHour: '매시간',
  presetDaily: '매일',
  presetWeekly: '매주',
  presetMonthly: '매월',
  presetYearly: '매년',
  descEveryMinute: '매분 실행',
  descEveryHour: '매시간 정각에 실행',
  descEveryDay: '매일 자정에 실행',
  descPrefix: '실행:',
  descEveryMin: '매분',
  descEveryHourOnDot: '매시간 정각',
  descAtMinute: '매시 {m}분에',
  descAtTime: '{h}:{m}에',
  descOnDay: ' 매월 {d}일에',
  descInMonth: ' {mon}월에',
  descIfDow: ' {d}요일인 경우 (0=일, 6=토)',
  descDays: '일요일,월요일,화요일,수요일,목요일,금요일,토요일',
  descInvalid: '유효하지 않은 표현식',
  timeNow: '지금',
  timeMin: '분',
  timeHour: '시간',
  timeDays: '일',
  locale: 'ko-KR',
};

export const content: ToolLocaleContent<CronGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참조 및 문서',
  bibliography: [
    {
      name: 'GNU Crontab 매뉴얼: Linux의 Cron 표현식',
      url: 'https://www.gnu.org/software/mcron/manual/html_node/Crontab-file.html',
    },
    {
      name: '위키백과 Cron: 역사 및 구문',
      url: 'https://ko.wikipedia.org/wiki/Cron',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '현대 자동화에서 Cron의 중요성',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<em>서버리스</em> 서버와 클라우드 워크플로우의 시대에 살고 있음에도 불구하고, <strong>Crontab</strong> 시스템은 여전히 글로벌 기술 인프라의 중추로 남아 있습니다. 소규모 블로그부터 거대한 금융 인프라에 이르기까지 작업 스케줄링은 디지털 세상을 움직이게 하는 핵심입니다.',
    },
    {
      type: 'title',
      text: 'Cron 표현식의 구조',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>필드 1 - 분 (0-59):</strong> 한 시간 내에서 작업이 시작되는 시점입니다.',
        '<strong>필드 2 - 시간 (0-23):</strong> 24시간 형식이 필요합니다.',
        '<strong>필드 3 - 일 (1-31):</strong> 특정 달력 일자입니다.',
        '<strong>필드 4 - 월 (1-12):</strong> 1월부터 12월까지입니다.',
        '<strong>필드 5 - 요일 (0-6):</strong> 일반적으로 0은 일요일입니다.',
      ],
    },
    {
      type: 'title',
      text: '특수 연산자 및 일반적인 실수',
      level: 3,
    },
    {
      type: 'tip',
      html: '슬래시 <code>/</code>를 사용하여 단계를 정의하세요: 분 필드의 <code>*/5</code>는 5분마다 실행됨을 의미합니다. 쉼표 <code>,</code>는 목록(<code>1,3,5</code>)을 만들고 하이픈 <code>-</code>은 범위(<code>1-5</code>)를 정의합니다.',
    },
    {
      type: 'paragraph',
      html: '서버의 90%는 <strong>UTC</strong>를 기준으로 작동합니다. 지역 시간대로 오전 2시에 작업을 스케줄링하면 예상치 못한 시간에 실행될 수 있습니다. 또한 Cron은 일반적인 <code>$PATH</code>에 액세스할 수 없으므로 항상 <code>/usr/local/bin/node</code>와 같은 절대 경로를 사용해야 합니다.',
    },
  ],
};

