import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'web-development',
  title: '웹 개발',
  description:
    '프론트엔드 및 백엔드 개발자를 위한 무료 웹 개발 툴: 포매터, CSS 계산기, 제너레이터 및 유틸리티.',
  seo: [
    {
      type: 'summary',
      title: '개발자 도구',
      items: [
        '코드 포매터 및 유효성 검사기',
        'CSS 계산기 및 시각적 도구',
        '설정 및 보안 제너레이터',
        '100% 로컬 및 개인 처리',
      ],
    },
    {
      type: 'title',
      text: '웹 개발을 위한 필수 유틸리티',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '웹 개발자의 작업 흐름을 가속화하도록 설계된 도구 모음입니다. JSON 유효성 검사부터 CSS 명시도 계산기까지, 각 유틸리티는 일상적인 개발 문제를 해결하기 위해 제작되었습니다.',
    },
    {
      type: 'tip',
      title: '개인정보 보호 보장',
      html: '모든 도구는 브라우저에서 로컬로 데이터를 처리합니다. 코드, 데이터 또는 파일은 외부 서버로 전송되지 않습니다.',
    },
  ],
};
