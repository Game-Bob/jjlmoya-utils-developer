import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromptLibraryUI } from '../ui';

const slug = 'prompt-library';
const title = 'AI 프롬프트 개인 라이브러리';
const description = 'ChatGPT, Midjourney, Claude 프롬프트를 개인적으로 정리하고 태그를 붙여 저장하세요. localStorage에 저장되는 나만의 프롬프트 뱅크.';

const faqData = [
  {
    question: '프롬프트는 어디에 저장되나요?',
    answer: '프롬프트는 브라우저의 로컬 스토리지(localStorage)에만 저장됩니다. 외부 서버를 사용하지 않으므로 데이터는 100% 개인 보호됩니다.',
  },
  {
    question: '브라우저 쿠키나 기록을 삭제하면 어떻게 되나요?',
    answer: '사이트 데이터나 로컬 스토리지를 삭제하면 저장된 프롬프트가 사라집니다. 브라우저를 자주 초기화하는 경우 백업을 만들어 두시기를 권장합니다.',
  },
  {
    question: 'Midjourney, ChatGPT, DALL-E에도 사용할 수 있나요?',
    answer: '네, 모든 종류의 AI 지시어와 호환됩니다. 특정 태그를 만들어 명령어를 정리하고 원하는 AI 도구에 쉽게 복사할 수 있습니다.',
  },
];

const howToData = [
  { name: '프롬프트 만들기', text: '새 프롬프트 버튼을 클릭하고 제목과 지시어를 입력하세요.' },
  { name: '태그 추가하기', text: '공백이나 쉼표로 구분하여 태그를 입력해 프롬프트를 분류하세요.' },
  { name: '변수 사용하기', text: '텍스트에 대괄호[이렇게]를 사용해 카드에 입력 가능한 필드를 만드세요.' },
  { name: '복사하고 공유하기', text: '한 번의 클릭으로 클립보드에 복사하거나 공유 버튼으로 직접 링크를 공유하세요.' },
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

const ui: PromptLibraryUI = {
  placeholderSearch: '키워드 또는 태그로 검색...',
  btnNew: '새 프롬프트',
  emptyTitle: '라이브러리가 비어 있습니다',
  emptyDesc: '첫 번째 프롬프트를 만들고 나만의 AI 저장소를 구축하세요.',
  btnAddFirst: '첫 번째 추가하기',
  modalTitleCreate: '새 프롬프트 만들기',
  modalTitleEdit: '프롬프트 편집',
  labelTitle: '식별 제목',
  placeholderTitle: '예: SEO 마케팅 전문가',
  labelContent: '지시어 (프롬프트)',
  placeholderContent: 'AI를 위한 상세 지시어를 여기에 작성하세요...',
  hintContent: '팁: 텍스트에 대괄호[이렇게]를 사용하면 나중에 변수를 채울 수 있습니다.',
  labelTags: '태그',
  placeholderTags: '예: marketing, seo (공백이나 쉼표로 추가)',
  btnCancel: '취소',
  btnSave: '로컬에 저장',
  ariaLabelStar: '프롬프트 즐겨찾기',
  ariaLabelEdit: '프롬프트 편집',
  ariaLabelShare: '프롬프트 공유',
  ariaLabelCopy: '프롬프트 복사',
  ariaLabelDelete: '프롬프트 삭제',
  varsTitle: '필수 변수',
  noResults: '이 검색에 해당하는 프롬프트가 없습니다.',
  confirmTitle: '프롬프트를 삭제할까요?',
  confirmDesc: '이 작업은 취소할 수 없습니다.',
  btnCancelDelete: '취소',
  btnConfirmDelete: '영구 삭제',
};

export const content: ToolLocaleContent<PromptLibraryUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '프롬프트 엔지니어링 참고자료',
  bibliography: [
    { name: 'Prompt Engineering Guide (DAIR.AI)', url: 'https://www.promptingguide.ai/' },
    { name: '프롬프트 엔지니어링이란 (Google Cloud)', url: 'https://cloud.google.com/discover/what-is-prompt-engineering' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '프롬프트 라이브러리가 필요한 이유', level: 2 },
    {
      type: 'paragraph',
      html: 'ChatGPT, Claude, Midjourney 같은 AI 도구를 자주 사용한다면, 같은 지시어를 반복해서 작성하느라 시간을 낭비한 경험이 있을 것입니다. <strong>프롬프트 라이브러리</strong>는 즐겨 쓰는 명령어를 다시 작성하는 번거로움을 완전히 해소해 주는 해결책입니다.',
    },
    { type: 'title', text: '프롬프트 정리의 장점', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>즉시 검색:</strong> 몇 달 전에 사용했던 특정 지시어도 간단한 텍스트 검색으로 바로 찾을 수 있습니다.',
        '<strong>태그 분류:</strong> 프롬프트에 "marketing", "programming", "copywriting" 같은 태그를 붙여 빠르게 필터링하세요.',
        '<strong>원클릭 복사:</strong> 클릭 한 번으로 전체 텍스트를 클립보드에 복사합니다.',
        '<strong>완전한 개인 보호:</strong> 모든 데이터는 localStorage를 통해 브라우저에 로컬로 저장됩니다.',
      ],
    },
    { type: 'title', text: '프롬프트의 변수 활용', level: 3 },
    {
      type: 'paragraph',
      html: '프롬프트에 <strong>[변수명]</strong> 표기법을 사용하면 동적으로 입력 가능한 필드를 만들 수 있습니다. 카드를 열면 정의된 각 변수에 대한 입력란이 나타나며, 값을 채운 상태로 프롬프트가 복사되어 AI에 바로 붙여넣을 수 있습니다.',
    },
    { type: 'title', text: '프롬프트 공유하기', level: 3 },
    {
      type: 'paragraph',
      html: '각 프롬프트는 URL로 공유할 수 있습니다. 공유 버튼을 누르면 링크가 생성되며, 해당 링크를 열면 프롬프트 내용이 미리 채워진 작성 양식이 표시됩니다.',
    },
  ],
};

