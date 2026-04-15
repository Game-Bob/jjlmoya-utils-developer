import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileMockupGeneratorUI } from '../ui';

const slug = 'mobile-mockup-generator';
const title = 'App Store용 모바일 목업 생성기. iPhone 및 Google Pixel';
const description = 'App Store와 Google Play를 위한 전문적인 프레젠테이션을 만들어 보세요. 커스텀 배경, 파노라믹 레이아웃, 고해상도 일괄 내보내기를 지원하는 iPhone과 Pixel 목업.';

const faqData = [
  { question: '이 스크린샷은 App Store와 Google Play에서 유효한가요?', answer: '네, 생성된 이미지는 앱 스토어의 비율 및 품질 요구사항을 충족합니다. 내보내기 전에 적절한 기기(iOS는 iPhone, Android는 Pixel)를 선택하기만 하면 됩니다.' },
  { question: '나만의 커스텀 배경을 사용할 수 있나요?', answer: '물론입니다. 프리미엄 그라데이션 라이브러리 외에도 컴퓨터에서 원하는 이미지를 업로드하여 목업의 배경으로 사용할 수 있습니다.' },
  { question: '상업적 용도로 무료로 사용할 수 있나요?', answer: '네, 생성된 목업을 상업 프로젝트, 포트폴리오, 프레젠테이션에 비용 없이, 워터마크 없이 사용할 수 있습니다.' },
  { question: '스크린샷이 서버에 저장되나요?', answer: '아니요. 생성기는 브라우저에서 100% 로컬로 작동합니다. 개인 이미지는 절대 컴퓨터를 벗어나지 않습니다.' },
];

const howToData = [
  { name: '스크린샷 업로드', text: '프레젠테이션하고 싶은 모바일 앱의 스크린샷을 드래그하거나 선택하세요.' },
  { name: '기기 선택', text: '대상 스토어에 맞게 스마트폰 모델(iPhone 15 Pro Max 또는 Google Pixel 8)을 선택하세요.' },
  { name: '환경 커스터마이즈', text: '배경, 기기 각도를 조정하고, 마케팅 텍스트를 추가한 후 레이아웃을 선택하세요.' },
  { name: 'HD로 다운로드', text: '앱 스토어 업로드에 바로 사용할 수 있는 고해상도 WebP 형식으로 모든 결과를 내보내세요.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'DesignApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  inLanguage: 'ko',
};

const ui: MobileMockupGeneratorUI = {
  labelUpload: '스크린샷 업로드',
  dropHint: '여기에 이미지를 드래그하세요',
  dropFormats: 'PNG, JPG 또는 WEBP',
  btnMassReplace: '일괄 교체 (배치)',
  massReplaceHint: '프리셋과 텍스트를 유지하면서 현재 이미지를 교체합니다. 빠른 반복 작업에 이상적입니다.',
  labelSettings: '전역 설정',
  labelDevice: '기기',
  labelFont: '타이포그래피',
  labelBackground: '배경',
  titleSwapColors: '색상 교체',
  labelAngle: '각도',
  labelSafeArea: '세이프 에리어 (상단/하단)',
  labelSafeAreaColor: '영역 색상',
  emptyTitle: '이미지 없음',
  emptySubtitle: '스크린샷을 업로드하여 디자인을 시작하세요',
  btnClearAll: '캔버스 초기화',
  btnExport: '모두 내보내기 (.zip)',
  cardTitleDuplicate: '장면 복제',
  cardTitleReplace: '현재 스크린샷 교체',
  cardSectionLayouts: '마스터 레이아웃',
  cardSectionBranding: '브랜딩 & 카피',
  cardTitleResetText: '텍스트 초기화',
  cardLabelColor: '색상',
  cardTextPlaceholder: '여기에 카피를 작성하세요...',
  cardSectionDevice: '기기 레이아웃',
  cardTitleResetDevice: '위치 초기화',
  cardSectionScene: '소품 & 배경',
  cardBtnSpecialBg: '특수 배경',
  cardBtnDeleteScene: '장면 삭제',
  cardRangeLabelSize: '크기',
  cardRangeLabelX: 'X축',
  cardRangeLabelY: 'Y축',
  cardRangeLabelRotation: '회전',
  cardRangeLabelScale: '스케일',
  presetClassic: '클래식',
  presetMobileBottom: '모바일 하단',
  presetMobileTop: '모바일 상단',
  presetFocus: '포커스',
  presetDynamic: '다이나믹',
  presetSplitLeft: '왼쪽 분할',
  presetSplitRight: '오른쪽 분할',
  presetImageLeft: '이미지 왼쪽',
  presetImageRight: '이미지 오른쪽',
  confirmClear: '모든 목업을 삭제하시겠습니까?',
  processingExport: '처리 중...',
  exportDone: '완료!',
};

export const content: ToolLocaleContent<MobileMockupGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  bibliographyTitle: '참고 자료',
  bibliography: [
    { name: 'Apple App Store Screenshot Requirements', url: 'https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications' },
    { name: 'Google Play Screenshot Requirements', url: 'https://support.google.com/googleplay/android-developer/answer/9866151' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '스크린샷을 한 단계 업그레이드하세요', level: 2 },
    { type: 'paragraph', html: '단순한 스크린샷에 머물지 마세요. 이 목업 도구를 사용하면 개발자와 디자이너가 Photoshop이나 Figma 없이도 강력한 시각적 에셋을 만들 수 있습니다.' },
    { type: 'title', text: '마스터 레이아웃의 힘', level: 3 },
    { type: 'grid', columns: 2 },
    { type: 'card', title: 'App Store & Google Play', html: '<p>전환율을 최적화하세요. iPhone 15 Pro Max와 Pixel 8 목업은 앱 스토어 등록의 세계 표준입니다.</p>' },
    { type: 'card', title: '피치덱 & 마케팅', html: '<p>설득력 있게 아이디어를 발표하세요. 투자자 프레젠테이션, 소셜 미디어 캠페인, 전문적인 UI/UX 디자인 포트폴리오에 완벽합니다.</p>' },
    { type: 'title', text: '전문적인 워크플로우', level: 3 },
    { type: 'tip', html: '"왼쪽 분할"과 "오른쪽 분할" 프리셋을 사용하면 Instagram 캐러셀이나 App Store 스크린샷에서 이미지가 자연스럽게 이어지는 연속 목업을 만들 수 있습니다.' },
  ],
};

