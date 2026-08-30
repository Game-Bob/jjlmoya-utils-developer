import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { ToolLocaleContent, SEOSection } from '../../../types';
import type { DualOsIconPreviewUI } from '../ui';

interface LocalizedCopy {
  locale: string;
  slug: string;
  title: string;
  description: string;
  faqTitle: string;
  bibliographyTitle: string;
  ui: DualOsIconPreviewUI;
  faq: { question: string; answer: string }[];
  howTo: { name: string; text: string }[];
  seo: SEOSection[];
}

function createDualOsIconPreviewContent(copy: LocalizedCopy): ToolLocaleContent<DualOsIconPreviewUI> {
  const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: copy.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
  const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: copy.title, description: copy.description, step: copy.howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
  const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: copy.title, description: copy.description, applicationCategory: 'DesignApplication', operatingSystem: 'iOS, Android', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: copy.locale };
  return { slug: copy.slug, title: copy.title, description: copy.description, ui: copy.ui, faqTitle: copy.faqTitle, faq: copy.faq, bibliographyTitle: copy.bibliographyTitle, bibliography, howTo: copy.howTo, schemas: [appSchema, faqSchema, howToSchema], seo: copy.seo };
}

const title = 'iOS 및 Android 앱 아이콘 감사';
const description = '로고를 업로드하고 iPhone과 Pixel에서 보이는 모습을 감사하세요. iOS 모드, Android 적응형 마스크, 안전 여백과 테마 아이콘을 브라우저에서 확인할 수 있습니다.';
const ui: DualOsIconPreviewUI = {
  labelUpload: '로고 업로드', uploadAction: '이미지 선택', uploadHint: '같은 마크를 두 휴대폰에 표시', dropHint: 'PNG, JPG, WEBP 또는 SVG', labelAppName: '앱 이름', appNamePlaceholder: '아이콘 아래에 표시', labelBrandColor: '시스템 강조 색상', labelIosAppearance: 'iOS 화면', iosAppearanceHint: '모든 홈 화면 모드에서 마크 확인', iosDefault: '기본', iosDark: '다크', iosClear: '클리어', iosTinted: '색조', labelAndroidShape: 'Android 적응형 마스크', androidShapeHint: '런처가 바깥 모양을 바꿀 수 있음', androidCircle: '원형', androidSquircle: '스쿼클', androidRounded: '둥근 모서리', androidTeardrop: '물방울', labelAndroidTheme: '테마 아이콘 미리보기', androidThemeHint: '모든 아이콘을 하나의 시스템 색으로 다시 칠하면서 실루엣을 유지', iosDeviceLabel: 'iPhone', androidDeviceLabel: 'Pixel', iosHomeLabel: '홈 화면', androidHomeLabel: '런처', safeZoneLabel: 'iOS 마스크', adaptiveLayerLabel: '적응형 아이콘', monochromeLabel: '테마 레이어', nameFallback: '내 앱', emptyLogo: '내 로고', fileError: '계속하려면 이미지 파일을 선택하세요.', statusReady: '준비됨', statusNeedsReview: '로고 추가', stageKicker: '두 기기 컨텍스트, 하나의 감사', stageNote: '모든 처리를 실제 컨텍스트에서 확인', auditTitle: '로고 감사', auditHint: '불러온 이미지에서 로컬로 측정', auditWaiting: '로고 업로드', auditNotChecked: '확인하지 않음', auditFile: '캔버스', auditAspect: '화면 비율', auditResolution: '해상도', auditIosMask: 'iOS 마스크 여백', auditAndroidZone: 'Android 안전 영역', auditMargin: '최소 가장자리 여백', auditTransparency: '알파 가장자리', auditTransparent: '투명', auditFullBleed: '전체 채움', statusPass: '통과', statusReview: '검토',
};
const faq = [
  { question: '이 앱 아이콘 감사는 무엇을 확인하나요?', answer: '이미지 크기, 화면 비율, 해상도, 투명 가장자리 여백, iOS 마스크 여유와 Android 적응형 안전 영역을 확인합니다. 런처 크기에서 앱 이름이 읽히는지도 볼 수 있습니다.' },
  { question: 'iPhone과 Android를 동시에 볼 수 있나요?', answer: '네. 같은 로고와 앱 이름을 iPhone 홈 화면과 Pixel 런처에 동시에 표시하므로 두 기기의 주변 정보까지 유지하며 확인할 수 있습니다.' },
  { question: 'Android 테마 아이콘 모드는 무엇을 하나요?', answer: '업로드한 아이콘, 주변 앱, 독을 포함한 장면의 모든 Android 아이콘에 하나의 시스템 색조와 단색 처리를 적용합니다. 원래 색이 없어도 형태가 읽히는지 확인할 수 있습니다.' },
  { question: '로고가 브라우저 밖으로 전송되나요?', answer: '아니요. 이미지는 브라우저 안에서 로컬로 읽고 측정합니다. 이 도구는 서버로 업로드하지 않습니다.' },
  { question: '앱 스토어 제출에 바로 사용할 수 있나요?', answer: '아니요. 로컬 디자인 및 에셋 감사입니다. 최종 내보내기와 런처 동작, 스토어 승인을 위해 Apple 및 Android 플랫폼 도구와 실제 기기 또는 에뮬레이터를 사용하세요.' },
];
const howTo = [
  { name: '로고 업로드', text: 'PNG, JPG, WEBP 또는 SVG 로고를 선택하세요. 같은 로컬 이미지가 두 기기 컨텍스트에 나타납니다.' },
  { name: '앱 이름 입력', text: '런처 라벨을 입력하고 실제 주변 앱 이름 옆에서도 읽기 쉬운지 확인하세요.' },
  { name: 'iOS 화면 확인', text: '기본, 다크, 클리어, 색조를 전환하며 약한 대비나 사라지는 세부 요소를 찾으세요.' },
  { name: 'Android 마스크 확인', text: '원형, 스쿼클, 둥근 모서리, 물방울을 시도하세요. 테마 아이콘을 켜고 전체 런처의 단색 버전도 확인하세요.' },
  { name: '감사 결과에 대응', text: '여백을 늘리고 작은 세부 요소를 단순화하거나 대비를 개선한 뒤 최종 플랫폼 에셋을 준비하세요.' },
];

export const content = createDualOsIconPreviewContent({ locale: 'ko', slug: 'dual-ios-android-app-icon-preview', title, description, faqTitle: '자주 묻는 질문', bibliographyTitle: '참고 자료', ui, faq, howTo, seo: [
  { type: 'title', text: '출시 전에 앱 아이콘 감사하기', level: 2 },
  { type: 'paragraph', html: '하나의 로고를 업로드하고 iPhone 홈 화면과 Pixel 런처 컨텍스트에서 동시에 확인하세요. 이 앱 아이콘 감사는 캔버스, 화면 비율, 해상도, 투명 가장자리 여백, iOS 마스크 여유와 Android 적응형 안전 영역을 측정합니다. 실제 앱 이름도 입력하세요. 아이콘 자체는 통과해도 런처 라벨이 읽기 어려우면 실제 사용에서 문제가 될 수 있습니다.' },
  { type: 'title', text: '이 앱 아이콘 감사가 확인하는 항목', level: 3 },
  { type: 'list', items: ['캔버스와 화면 비율: 플랫폼 도구가 자체 처리를 추가하기 전에 원본이 정사각형인지 확인합니다.', '해상도: 큰 런처 화면에서 흐려질 수 있는 작은 원본 파일을 찾습니다.', '가장자리 여백: 중요한 모양이나 글자가 iOS 마스크 또는 Android 안전 영역에 너무 가까운지 확인합니다.', '런처 라벨: 주변 아이콘과 같은 크기로 앱 이름을 확인하고 어색한 줄바꿈을 찾습니다.', 'Android 테마 처리: 대상 아이콘과 주변 아이콘, 독에 단색 시스템 색을 적용하여 색상에 가려진 약한 실루엣을 드러냅니다.'] },
  { type: 'title', text: '두 기기 컨텍스트를 동시에 보기', level: 3 },
  { type: 'paragraph', html: '두 휴대폰 화면을 하나의 감사 화면으로 사용하세요. iOS 기본, 다크, 클리어, 색조 표시를 전환하고 Android 원형, 스쿼클, 둥근 모서리, 물방울 마스크를 시도하세요. 목적은 같은 에셋이 여러 런처 화면에서 어떻게 보이는지 파악하는 것이며, 어느 플랫폼이 더 나은지 겨루는 것이 아닙니다.' },
  { type: 'title', text: '이 감사가 보장하지 않는 것', level: 3 },
  { type: 'paragraph', html: '브라우저에서 진행하는 디자인 및 에셋 검토이며 Xcode, Android Studio, 실제 기기 또는 에뮬레이터를 대신하지 않습니다. 런처와 운영체제 버전, 제조사에 따라 마스크, 간격, 대비, 테마 아이콘 규칙이 달라질 수 있습니다. 먼저 위험을 찾고, 이후 지원할 환경에서 최종 플랫폼 에셋을 검증하세요.' },
  { type: 'tip', title: '실용적인 감사 순서', html: '모든 표시 방식에서 실제로 사용할 가장 작은 크기의 로고를 확인하세요. 하나의 배경이나 마스크, 원래 색상에서만 작동한다면 공개 전에 그래픽을 단순화하거나 여백을 추가하세요.' },
] });
