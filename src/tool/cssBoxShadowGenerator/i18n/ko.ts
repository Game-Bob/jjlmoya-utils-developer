import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssBoxShadowGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'css-box-shadow-generator';
const title = 'CSS Box Shadow Generator';
const description = '실시간 미리보기, 슬라이더, 색상 선택기, 프리셋으로 레이어형 CSS 그림자를 시각적으로 디자인하세요. 깨끗한 네이티브 CSS를 즉시 복사하세요.';

const howTo = [
  { name: '프리셋을 선택하거나 처음부터 시작', text: 'Card, Float, Inset, Glow, Layered 프리셋 중에서 선택하거나 슬라이더로 기본 그림자를 조정하세요.' },
  { name: '레이어 추가 및 쌓기', text: '+를 클릭하여 레이어를 추가하세요(최대 5개). 각 레이어를 선택하여 오프셋, 블러, 스프레드, 색상, 불투명도를 편집하세요.' },
  { name: 'Inset 및 배경 전환', text: '내부 그림자를 위해 inset을 체크하세요. 미리보기 배경색을 변경하세요.' },
  { name: 'CSS 복사', text: '미리보기가 디자인과 일치하면 생성된 CSS를 복사하여 스타일시트에 붙여넣으세요.' },
];

const faq = [
  { question: '하나의 요소에 여러 그림자를 사용할 수 있나요?', answer: '예. CSS는 쉼표로 구분된 box-shadow 값을 지원합니다. 이 도구를 사용하면 독립적인 컨트롤로 최대 5개의 레이어를 쌓을 수 있습니다.' },
  { question: '음수 스프레드 값은 무엇을 하나요?', answer: '음수 스프레드는 블러 전에 그림자를 안쪽으로 축소합니다. 미묘한 떠 있는 효과에 유용합니다.' },
  { question: 'inset 옵션의 용도는 무엇인가요?', answer: 'inset 그림자는 요소 경계 내부에 렌더링되어 움푹 들어간 모양을 만듭니다. 폼 입력 및 눌린 카드에 이상적입니다.' },
  { question: '생성된 CSS에 프레임워크 종속성이 있나요?', answer: '아니요. 결과는 순수 네이티브 CSS입니다. 표준 CSS를 사용하는 모든 프로젝트에서 사용하세요.' },
];

const ui: CssBoxShadowGeneratorUI = {
  offsetXLabel: '오프셋 X',
  offsetYLabel: '오프셋 Y',
  blurLabel: '블러',
  spreadLabel: '스프레드',
  opacityLabel: '불투명도',
  insetLabel: '내부',
  addLayer: '레이어 추가',
  removeLayer: '레이어 제거',
  resetAll: '초기화',
  codeTitle: '생성된 CSS',
  copyCode: 'CSS 복사',
  copied: '복사됨!',
  previewLabel: '미리보기',
  presetCard: 'Card',
  presetFloat: 'Float',
  presetInset: 'Inset',
  presetGlow: 'Glow',
  presetLayered: '레이어',
  presetsLabel: '프리셋',
  layerPrefix: '레이어',
  bgColorLabel: '배경',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<CssBoxShadowGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'CSS 박스 섀도우 생성기 FAQ',
  faq,
  bibliographyTitle: 'CSS Box-Shadow 참조',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: '값을 추측하지 않고 CSS 그림자를 시각적으로 디자인하세요', level: 2 },
    { type: 'paragraph', html: '<strong>box-shadow</strong>를 수동으로 조정하는 것은 지루합니다. 이 시각적 생성기를 사용하면 여러 그림자를 쌓고 실시간으로 확인하며 프로덕션 준비된 CSS를 복사할 수 있습니다.' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: '요소당 그림자 레이어', icon: 'mdi:layers' }, { value: '실시간', label: '변경 시 미리보기 업데이트', icon: 'mdi:eye' }, { value: '5', label: '빠른 프리셋', icon: 'mdi:star' }] },
    { type: 'title', text: '현실적인 깊이를 위해 여러 그림자 쌓기', level: 3 },
    { type: 'paragraph', html: '실제 그림자는 균일한 블러가 아닙니다. 요소 가까이에 타이트한 그림자를 더 부드럽고 넓은 그림자와 쌓으면 자연스러운 깊이가 만들어집니다. <strong>+</strong>로 레이어를 추가하세요.' },
    { type: 'table', headers: ['컨트롤', 'CSS 값', '효과'], rows: [['오프셋 X', '첫 번째 길이', '수평 변위.'], ['오프셋 Y', '두 번째 길이', '수직 변위.'], ['블러', '세 번째 길이', '블러 반경.'], ['스프레드', '네 번째 길이', '그림자 확대 또는 축소.'], ['색상 및 불투명도', 'rgba()', '독립적인 불투명도의 그림자 색상.'], ['내부', 'inset', '요소 경계 내부에 그림자.']] },
    { type: 'summary', title: '권장 워크플로우', items: ['프리셋으로 시작하세요.', '현실적인 깊이를 위해 레이어를 추가하세요.', '떠 있는 카드 효과에 음수 스프레드를 사용하세요.', '생성된 CSS를 복사하여 붙여넣으세요.'] },
  ],
};
