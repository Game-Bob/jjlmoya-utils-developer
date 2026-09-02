import { bibliography } from '../bibliography';
import { createLocalizedContent } from '../localized';
import { localizedUi } from '../localized-ui';

export const content = createLocalizedContent({
  slug: 'open-data-csv-json-missing-values-duplicate-rows-checker',
  title: '공개 데이터 CSV 결측값 검사기',
  description: 'CSV 및 JSON 표를 브라우저에서 검사하여 결측값, 중복 행, 혼합 형식, 파싱 실패와 숫자 이상치를 찾습니다.',
  ui: localizedUi('ko'),
  seo: [
    { type: 'title', text: '공개 데이터를 재사용하기 전에 구조적 문제 찾기', level: 2 },
    { type: 'paragraph', html: '표가 깔끔해 보여도 빈 필드, 중복 레코드, 혼합 값 형식, 잘못된 행 또는 극단적인 숫자가 숨어 있을 수 있습니다. 이 도구는 브라우저에서 CSV와 JSON을 읽고 원본 행까지 추적할 수 있는 수치로 신호를 바꿉니다.' },
    { type: 'title', text: '출처 맥락과 함께 공개 표 확인하기', level: 2 },
    { type: 'paragraph', html: '누락값, null, 빈 문자열은 따로 계산합니다. 중복 행은 행 번호와 함께 표시하고 숫자 이상치는 Tukey 1.5 IQR 경계로 표시합니다. 신호는 확인할 질문이지 품질 판정이 아닙니다.' },
    { type: 'list', items: ['CSV 헤더 또는 JSON 구조를 출처 문서와 비교하세요.', '레코드를 삭제하기 전에 중복 행을 확인하세요.', '단위와 분야 맥락을 사용해 혼합 형식과 이상치를 해석하세요.', '출처, 기간, 정의와 사용 목적을 프로필과 함께 보관하세요.'] },
  ],
  faqTitle: '표 검사에 관한 질문',
  faq: [
    { question: '어떤 파일을 검사할 수 있나요?', answer: '헤더 행이 있는 CSV 또는 객체 배열을 담은 JSON입니다. JSON 객체는 data, rows 또는 records 아래에 배열을 둘 수도 있습니다.' },
    { question: '누락, null, 빈 값과 0을 어떻게 구분하나요?', answer: '없는 JSON 속성, JSON null, 빈 문자열과 숫자 0을 각각 기록합니다.' },
    { question: '이상치는 어떻게 계산하나요?', answer: 'Tukey 1.5 사분위 범위 경계를 사용하고 해당 행을 보고합니다.' },
    { question: '데이터 품질이 높다는 것을 증명하나요?', answer: '아니요. 구조적 신호만 측정하며 의미의 정확성, 정확도, 출처, 합법성 또는 적합성을 증명하지 않습니다.' },
  ],
  bibliography,
  howTo: [
    { name: '표 준비', text: '안정적인 CSV 헤더 또는 JSON 배열을 사용하고 출처 맥락을 준비하세요.' },
    { name: '데이터 불러오기', text: '로컬 파일을 고르거나 텍스트를 붙여넣거나 예시를 여세요.' },
    { name: '신호 읽기', text: '누락, 빈 값, 중복, 혼합 형식과 이상치 수치를 확인하세요.' },
    { name: '원본 행 추적', text: '행 번호와 열별 결과를 사용해 원본 파일로 돌아가세요.' },
    { name: '검토 편집', text: '목적과 결정을 추가하고 출처와 함께 메모를 저장하세요.' },
  ],
});
