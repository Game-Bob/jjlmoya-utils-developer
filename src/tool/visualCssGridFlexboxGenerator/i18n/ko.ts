import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VisualCssGridFlexboxGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'visual-css-grid-flexbox-generator';
const title = '비주얼 CSS Grid & Flexbox 레이아웃 생성기';
const description = '시각적 블록을 이동하고, 컨테이너 크기를 조정하고, 정렬을 조정하고, 프리셋을 사용하여 반응형 레이아웃을 디자인  -  그런 다음 깨끗한 네이티브 CSS를 즉시 복사하세요.';

const howTo = [
  { name: '프리셋 또는 Flexbox / Grid 선택', text: '레이아웃 프리셋(navbar, cards, hero, sidebar, gallery)으로 시작하거나 Flexbox와 Grid를 수동으로 전환하세요.' },
  { name: '레이아웃 크기 조정', text: '右下 모서리에서 컨테이너 크기를 조정하여 디자인이 사용 가능한 공간에 어떻게 반응하는지 테스트하세요.' },
  { name: '정렬 컨트롤 조정', text: '방향, 줄바꿈, 간격, 열, justify-content, align-items, align-content, 너비, 높이 및 아이템 크기에 대해 슬라이더와 선택을 사용하세요.' },
  { name: '프로덕션 준비 CSS 복사', text: '시각적 결과가 원하는 구조와 일치하면 생성된 CSS를 복사하세요. 프레임워크 의존성 없음.' },
];

const faq = [
  { question: 'Flexbox 대신 CSS Grid를 언제 사용해야 하나요?', answer: '1차원 레이아웃에는 Flexbox를 사용  -  내비게이션 바, 버튼 그룹, 줄바꿈 카드, 중앙 정렬 콘텐츠. 행과 열이 함께 중요한 경우 Grid  -  대시보드, 갤러리, 폼, 구조화된 페이지 섹션.' },
  { question: '이 생성기로 반응형 레이아웃을 만들 수 있나요?', answer: '예. 생성된 CSS는 네이티브 flex 줄바꿈 또는 반복 grid 열을 사용합니다. 비주얼 캔버스 크기를 조정하여 다양한 크기에서 간격과 정렬을 테스트하세요.' },
  { question: 'justify-content와 align-items가 grid와 flex에서 다르게 느껴지는 이유는?', answer: 'Flexbox는 주축과 교차축을 따라 아이템을 분산시킵니다. Grid는 먼저 아이템을 트랙에 배치한 다음 그 안에서 콘텐츠를 정렬합니다. 두 모드를 전환하면 그 차이가 즉시 보입니다.' },
  { question: '생성된 CSS가 프레임워크에 종속되나요?', answer: '아니요. 결과는 순수 네이티브 CSS입니다. 일반 HTML, Astro, React, Vue, Svelte, Web Components 또는 표준 CSS를 허용하는 모든 프로젝트에서 사용하세요.' },
  { question: '레이아웃 프리셋은 무엇을 위한 것인가요?', answer: '프리셋은 일반적인 레이아웃을 가속화하여 처음부터 시작하지 않고 현실적인 구성을 볼 수 있게 합니다. 각 프리셋은 실제 패턴에 맞게 모드, 방향, 줄바꿈, 정렬 및 컨테이너 크기를 설정합니다.' },
];

const ui: VisualCssGridFlexboxGeneratorUI = {
  modeLabel: '레이아웃 모드',
  flexMode: 'Flexbox',
  gridMode: 'Grid',
  canvasLabel: '인터랙티브 레イ아웃 캔버스',
  addItem: '아이템 추가',
  removeItem: '아이템 제거',
  resetLayout: '레이아웃 초기화',
  gapLabel: '간격',
  columnsLabel: 'Grid 열',
  widthLabel: '컨테이너 너비',
  heightLabel: '컨테이너 높이',
  justifyLabel: '정렬',
  alignLabel: '정렬',
  itemSizeLabel: '아이템 크기',
  codeTitle: '생성된 CSS',
  copyCode: 'CSS 복사',
  copied: '복사됨!',
  dragHint: '모서리에서 캔버스 크기 조정  -  CSS가 실시간 업데이트!',
  outputLabel: '생성된 CSS 출력',
  justifyStart: '시작',
  justifyCenter: '중앙',
  justifyEnd: '끝',
  justifyBetween: 'Space between',
  justifyAround: 'Space around',
  justifyEvenly: 'Space evenly',
  alignStart: '시작',
  alignCenter: '중앙',
  alignEnd: '끝',
  alignStretch: '늘리기',
  alignBaseline: '기준선',
  itemPrefix: '블록',
  directionLabel: '방향',
  directionRow: '행 →',
  directionRowReverse: '← 행 역순',
  directionColumn: '열 ↓',
  directionColumnReverse: '↑ 열 역순',
  wrapLabel: '줄바꿈',
  wrapNoWrap: '줄바꿈 없음',
  wrapWrap: '줄바꿈',
  wrapWrapReverse: '역순 줄바꿈',
  alignContentLabel: '콘텐츠 정렬',
  alignContentStart: '시작',
  alignContentCenter: '중앙',
  alignContentEnd: '끝',
  alignContentBetween: 'Space between',
  alignContentAround: 'Space around',
  alignContentEvenly: 'Space evenly',
  alignContentStretch: '늘리기',
  presetsLabel: '프리셋',
  presetNavbar: '내비바',
  presetCards: '카드',
  presetHero: '히어로',
  presetSidebar: '사이드바',
  presetGallery: '갤러리',
  shakeLimit: '최소 2개의 아이템이 필요합니다!',
  spanHint: 'Grid 모드에서 아이템을 더블클릭하여 열 범위(1-3) 변경',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<VisualCssGridFlexboxGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'CSS 레이아웃 생성기 FAQ',
  faq,
  bibliographyTitle: 'CSS Grid 및 Flexbox 참조',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: '속성을 암기하지 않고 동작을 보며 CSS 레이아웃 구축', level: 2 },
    { type: 'paragraph', html: 'CSS Grid와 Flexbox는 고정 좌표 대신 레이아웃 관계를 설명하기 때문에 강력합니다. 어려운 점은 <strong>gap</strong>, <strong>justify-content</strong>, <strong>align-items</strong>, 방향, 줄바꿈, 트랙 및 사용 가능한 공간이 어떻게 상호작용하는지 예측하는 것입니다. 이 생성기는 추상적인 속성을 프리셋과 실시간 CSS가 있는 살아있는 놀이터로 변환합니다.' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: '빠른 시작 프리셋', icon: 'mdi:view-grid-plus' }, { value: '실시간', label: '변경 시 CSS 업데이트', icon: 'mdi:code-braces' }, { value: '0', label: 'CSS의 프레임워크 의존성', icon: 'mdi:language-css3' }] },
    { type: 'title', text: 'Flexbox vs Grid: 정렬을 다듬기 전에 모델 선택', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: 'Flexbox', description: '아이템이 행이나 열에 정렬되고 자연스럽게 줄바꿈되는 1차원 흐름에 가장 적합.', icon: 'mdi:format-align-justify', highlight: true, points: ['내비게이션 바', '버튼 그룹', '줄바꿈 카드', '중앙 정렬 콘텐츠'] }, { title: 'CSS Grid', description: '행과 열이 컴포지션의 형태를 정의하는 2차원 구조에 가장 적합.', icon: 'mdi:grid', points: ['대시보드', '갤러리', '폼', '편집 섹션'] }] },
    { type: 'title', text: '각 컨트롤이 가르치는 것', level: 3 },
    { type: 'table', headers: ['컨트롤', 'CSS 속성', '주목할 점'], rows: [['방향', '<code>flex-direction</code>', '주축이 어떻게 흐르는지  -  행에서 열로 전환하면 전체 레이아웃 로직이 변경됩니다.'], ['줄바꿈', '<code>flex-wrap</code>', '아이템이 한 줄에 머무는지 공간이 부족하면 새 줄로 넘어가는지.'], ['간격', '<code>gap</code>', '가장자리에서 깨지지 않는 아이템 간 공간.'], ['정렬', '<code>justify-content</code>', '빈 공간이 주축을 따라 어떻게 분배되는지.'], ['정렬', '<code>align-items</code>', '아이템이 교차축에서 어떻게 배치되는지.'], ['콘텐츠 정렬', '<code>align-content</code>', '줄바꿈된 flex 행 또는 grid 행이 추가 교차축 공간을 어떻게 분배하는지.'], ['열', '<code>grid-template-columns</code>', '아이템이 다음 행으로 이동하기 전에 grid가 생성하는 동일 트랙의 수.'], ['컨테이너 크기', '<code>width</code> 및 <code>min-height</code>', '사용 가능한 공간이 변경될 때 동일한 CSS가 어떻게 반응하는지.']] },
    { type: 'tip', title: '먼저 스케일, 그 다음 최적화', html: '먼저 캔버스를 현실적인 크기로 스케일하세요. 그런 다음 간격과 정렬을 조정하세요. 이렇게 하면 생성된 CSS가 실제 조건에서 작동합니다.' },
    { type: 'title', text: '적응 가능한 깨끗한 CSS', level: 3 },
    { type: 'code', ariaLabel: '생성된 CSS 예제', code: '.layout-playground {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 24px;\n  justify-content: center;\n  align-items: center;\n}' },
    { type: 'diagnostic', variant: 'info', title: '비주얼 스케일링이 중요한 이유', html: '많은 레이아웃 버그는 컨테이너가 더 좁거나, 더 높거나, 다른 수의 아이템으로 채워질 때만 나타납니다. CSS가 실시간으로 업데이트되는 동안 스케일링하면 어색한 줄바꿈과 취약한 정렬 선택을 발견하는 데 도움이 됩니다.' },
    { type: 'summary', title: '권장 워크플로우', items: ['1차원 흐름에는 프리셋 또는 Flexbox, 2차원 구조에는 Grid를 선택하세요.', 'CSS를 복사하기 전에 캔버스를 스케일하여 레이아웃이 현실적인 제약을 견딜 수 있도록 하세요.', '각 자식에 마진을 추가하는 대신 아이템 간 간격에 gap을 사용하세요.', '생성된 CSS를 시작점으로 복사한 다음 프로젝트별 선택자와 미디어 쿼리를 추가하세요.'] },
  ],
};
