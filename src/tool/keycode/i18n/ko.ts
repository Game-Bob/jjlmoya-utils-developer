import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeycodeUI } from '../ui';

const slug = 'keycode';
const title = '키보드 키코드 시각화 도구 온라인. KeyCode Inspector';
const description =
  '키보드의 모든 키에 대한 event.key, event.code, event.which 및 위치를 실시간으로 확인할 수 있는 무료 온라인 도구. 바로 사용할 수 있는 JavaScript 코드 스니펫을 생성합니다.';

const faqData = [
  {
    question: 'event.key와 event.code의 차이점은 무엇인가요?',
    answer:
      'event.code는 설정된 언어와 관계없이 키보드의 물리적 키를 나타냅니다. event.key는 생성된 문자를 나타내며, Shift를 누르거나 다른 언어를 사용하면 변경될 수 있습니다. 게임 컨트롤에는 code를 사용하고, 텍스트 입력과 의미론적 단축키에는 key를 사용하세요.',
  },
  {
    question: 'event.which는 무엇이고 왜 더 이상 사용하지 않나요?',
    answer:
      'event.which는 키의 숫자 ASCII 코드를 반환하는 레거시 속성입니다. event.key와 event.code가 더 정확하고 읽기 쉬운 정보로 대체하기 때문에 현대 표준에서는 더 이상 사용되지 않는(deprecated) 속성으로 표시되어 있습니다. 교육 목적으로 이 도구에 표시됩니다.',
  },
  {
    question: 'location 속성은 무엇을 의미하나요?',
    answer:
      'location 속성은 키보드에서 키가 물리적으로 어디에 위치하는지를 나타냅니다: Standard(일반 위치), Left(왼쪽 수정자 키), Right(오른쪽 수정자 키), Numpad(숫자 키패드). 예를 들어 왼쪽 Ctrl 키와 오른쪽 Ctrl 키를 구별하는 데 유용합니다.',
  },
  {
    question: '국제 키보드 및 QWERTY가 아닌 레이아웃에서도 작동하나요?',
    answer:
      '네. 이 도구는 브라우저가 키보드 설정에 대해 보고하는 내용을 그대로 표시합니다. event.code는 항상 물리적 위치의 QWERTY 이름을 반환하고, event.key는 사용자의 언어에 따른 실제 문자를 표시합니다.',
  },
];

const howToData = [
  {
    name: '아무 키나 누르기',
    text: '페이지에 포커스가 있는 상태에서 키보드의 아무 키나 누르면 모든 이벤트 정보를 즉시 확인할 수 있습니다.',
  },
  {
    name: '개별 값 복사하기',
    text: '각 속성(event.key, event.code 등) 옆의 복사 버튼을 클릭하면 해당 값을 클립보드에 복사할 수 있습니다.',
  },
  {
    name: '코드 스니펫 사용하기',
    text: '"빠른 스니펫" 섹션에서 프로젝트에 바로 붙여넣을 수 있는 JavaScript 코드 블록을 찾을 수 있습니다.',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ko',
};

const ui: KeycodeUI = {
  promptTitle: '키를 누르세요',
  promptSubtitle: '키보드의 아무 키나 눌러서 코드를 확인하세요',
  snippetsTitle: '빠른 스니펫',
  btnCopy: '복사',
  locationStandard: 'Standard',
  locationLeft: '왼쪽',
  locationRight: '오른쪽',
  locationNumpad: 'Numpad',
};

export const content: ToolLocaleContent<KeycodeUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 자료 및 표준',
  bibliography: [
    {
      name: 'MDN Web Docs – KeyboardEvent',
      url: 'https://developer.mozilla.org/ko/docs/Web/API/KeyboardEvent',
    },
    {
      name: 'UI Events Specification (W3C) – KeyboardEvent',
      url: 'https://www.w3.org/TR/uievents/#events-keyboardevents',
    },
    {
      name: 'MDN – KeyboardEvent.code values',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'JavaScript에서 키보드 이벤트 이해하기',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '사용자가 키를 누르면 브라우저는 세 가지 이벤트를 발생시킵니다: <code>keydown</code>, <code>keypress</code>, <code>keyup</code>. 각각은 눌린 키에 대한 정보가 담긴 속성을 제공하지만, 모두 동등하거나 권장되는 것은 아닙니다.',
    },
    {
      type: 'title',
      text: '키 이벤트 속성',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'event.code — 물리적 키',
      html: '<p>QWERTY 명명법을 사용하여 키보드에서 키의 <strong>물리적 위치</strong> 식별자를 반환합니다. 예를 들어 AZERTY 키보드의 "A" 키는 <code>KeyQ</code>를 반환합니다. 문자가 아닌 위치가 중요한 게임 컨트롤에 이상적입니다.</p>',
    },
    {
      type: 'card',
      title: 'event.key — 생성된 문자',
      html: '<p>언어와 활성화된 수정자에 따라 생성된 <strong>문자 값</strong>을 반환합니다. Shift+A를 누르면 <code>"A"</code>가 반환되고, Shift 없이 누르면 <code>"a"</code>가 반환됩니다. 특수 키의 경우 <code>"Enter"</code>, <code>"Escape"</code>, <code>"ArrowUp"</code>과 같은 이름을 반환합니다.</p>',
    },
    {
      type: 'title',
      text: '각 속성을 언제 사용해야 할까요',
      level: 3,
    },
    {
      type: 'tip',
      html: '게임 컨트롤(언어와 관계없이 WASD)에는 <code>event.code</code>를 사용하고, 특정 문자나 <code>Ctrl+C</code>와 같은 의미론적 키보드 단축키를 감지할 때는 <code>event.key</code>를 사용하세요.',
    },
    {
      type: 'paragraph',
      html: '<code>event.which</code>와 <code>event.keyCode</code> 속성은 W3C 표준에 따라 공식적으로 <strong>더 이상 사용되지 않습니다</strong>. 최신 브라우저에서 호환성을 위해 계속 지원하지만, 새 코드에서는 사용하지 않는 것이 좋습니다.',
    },
  ],
};

