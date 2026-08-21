import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromoteThisWebsiteUI } from '../ui';
import { bibliography } from '../bibliography';

const localized = {
    slug: 'promote-this-website',
    title: '이 웹사이트 홍보하기',
    description: '스페인어 jjlmoya.es와 국제용 GameBob.dev를 위한 사내 선전 데스크입니다. Bob이 피드를 부끄러워하기 전에 내 페이지의 스크린샷을 소셜 이미지로 바꿉니다.',
    faqTitle: '고양이를 화나게 하지 않고 웹사이트 홍보하기',
    bibliographyTitle: '작전 관련 페이지',
    faq: [
      { question: '이 도구는 누구를 위한 것인가요?', answer: '스페인어 jjlmoya.es와 국제용 GameBob.dev 페이지를 홍보하기 위한 도구입니다. 나머지는 창밖에서 구경하면 됩니다.' },
      { question: '스크린샷을 바로 붙여넣을 수 있나요?', answer: '네. 스크린샷을 복사하고 Ctrl+V를 누르면 도구 레이어가 됩니다. 고양이 위원회도 올바른 형식의 증거는 받습니다.' },
      { question: '운영 URL을 붙여넣으면 어떻게 되나요?', answer: '페이지 메타 제목을 읽고 브랜드를 선택한 뒤 Open Graph 이미지를 불러옵니다. slug가 승진하는 일은 이제 없습니다.' },
      { question: '브랜드가 왜 두 개인가요?', answer: 'jjlmoya.es는 스페인어 페이지이고 GameBob.dev는 국제 페이지입니다. 고양이들은 그 차이를 무시합니다.' },
      { question: '이미지가 업로드되나요?', answer: '아니요. 이미지는 브라우저에 남고 합성은 로컬에서 처리됩니다. 직접 다운로드한 PNG만 페이지 밖으로 나갑니다.' },
    ],
    howTo: [
      { name: '스크린샷 붙여넣기', text: 'jjlmoya.es 또는 GameBob.dev의 스크린샷을 Ctrl+V로 붙여넣습니다. 위원회는 자기 제국의 증거를 요구합니다.' },
      { name: '브랜드 선택', text: '스페인어는 jjlmoya.es, 국제 페이지는 GameBob.dev를 선택합니다. 고양이는 이미 사무실을 소유하고 있습니다.' },
      { name: '이미지 배치', text: '스크린샷, 제목, 로고, 배경, 마스코트를 의도적으로 보이도록 배치합니다.' },
      { name: 'PNG 내보내기', text: 'Bob이 공을 가로채기 전에 원하는 크기로 PNG를 다운로드합니다.' },
    ],
    seoTitle: 'jjlmoya와 GameBob의 공식 선전 데스크',
    seoIntro: '이것은 branding이라는 말을 막 배운 사람을 위한 평범한 소셜 이미지 도구가 아닙니다. 고양이가 감독하는 동안 jjlmoya.es와 GameBob.dev 페이지를 홍보하기 위해 존재합니다.',
    seoBody: '실제 스크린샷을 붙여넣거나 운영 URL을 불러오세요. slug로 추측하지 않고 페이지 제목을 읽으며, 합성하는 동안 공식 Open Graph 이미지를 보여줍니다.',
    seoTip: 'jjlmoya.es 또는 GameBob.dev의 운영 URL로 시작하세요. 제목이나 브랜드나 이미지가 로드되지 않으면 위원회는 네트워크, 인간, 마지막으로 고양이를 탓합니다.',
};
const ui: PromoteThisWebsiteUI = {
    urlLabel: '웹사이트 URL', urlPlaceholder: 'https://www.example.com/tools/example/', applyUrl: '적용',
    formatLabel: '형식', panoramic: '파노라마 · 1536 × 1024', instagram: 'Instagram · 1080 × 1350', square: '정사각형 · 1080 × 1080', story: '스토리 · 1080 × 1920',
    titleLabel: '제목', titlePlaceholder: '이미지에 넣을 짧은 제목', titleSizeLabel: '제목 글꼴 크기', titleBoxSizeLabel: '제목 상자 크기', titleStyleLabel: '제목 디자인',
    brandLabel: '브랜드', brandStyleLabel: '브랜드 디자인', advancedLabel: '고급 구성', assetsLabel: '에셋', backgroundLabel: '배경', toolLabel: '도구 스크린샷', logoLabel: '로고', mascotLabel: '마스코트',
    layersLabel: '레이어', backgroundLayer: '배경', toolLayer: '도구', logoLayer: '로고', mascotLayer: '마스코트', titleLayer: '제목', reset: '초기화', download: 'PNG 다운로드', activeLayer: '활성 레이어',
    canvasHint: '캔버스에서 레이어를 직접 드래그하세요. Ctrl+V로 스크린샷을 붙여넣을 수 있습니다.', pasted: '스크린샷을 도구 레이어로 붙여넣었습니다.', urlApplied: 'URL을 적용했습니다. 제목을 조정하고 홍보할 스크린샷을 추가하세요.', urlLoading: '페이지 제목과 공식 이미지를 읽는 중...', urlFailed: '페이지를 읽을 수 없습니다. URL을 확인하거나 에셋을 직접 추가하세요.', fileLoaded: '에셋을 불러왔습니다.',
    titlePaper: '에디토리얼 페이퍼', titleRibbon: '접힌 리본', titleInk: '잉크 번짐', titlePoster: '밤의 포스터', titleTicket: '찢은 티켓', titleMarker: '머티리얼 밑줄', titleSplit: '분할 블록', titleCapsule: '미니멀 캡슐', titleCorner: '에디토리얼 코너', titleVertical: '세로 포인트',
    brandPlain: '심플 마크', brandPlaque: '세라믹 명판', brandTicket: '입장권', brandStamp: '고무 도장', brandNeon: '네온사인', brandRibbon: '시그널 리본', brandCorner: '에디토리얼 코너', brandPixel: '픽셀 블록', brandHalo: '부드러운 후광', brandEditorial: '에디토리얼 라인', defaultTool: '도구 스크린샷을 붙여넣으세요',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: localized.faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};
const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: localized.title,
  description: localized.description,
  step: localized.howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};
const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: localized.title,
  description: localized.description,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ko',
};

export const content: ToolLocaleContent<PromoteThisWebsiteUI> = {
  slug: localized.slug,
  title: localized.title,
  description: localized.description,
  ui,
  faqTitle: localized.faqTitle,
  faq: localized.faq,
  bibliographyTitle: localized.bibliographyTitle,
  bibliography,
  howTo: localized.howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: localized.seoTitle, level: 2 },
    { type: 'paragraph', html: localized.seoIntro },
    { type: 'stats', columns: 3, items: [{ value: '2', label: ui.brandLabel, icon: 'mdi:domain' }, { value: '4', label: ui.formatLabel, icon: 'mdi:crop' }, { value: '0', label: ui.activeLayer, icon: 'mdi:cat' }] },
    { type: 'title', text: localized.title, level: 3 },
    { type: 'paragraph', html: localized.seoBody },
    { type: 'title', text: localized.faqTitle, level: 3 },
    { type: 'paragraph', html: localized.seoBody },
    { type: 'table', headers: [ui.toolLayer, ui.titleLayer, ui.brandLabel], rows: [[ui.toolLabel, ui.titleLabel, ui.logoLabel]] },
    { type: 'tip', title: localized.faqTitle, html: localized.seoTip },
  ],
};
