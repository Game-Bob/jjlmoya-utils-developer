import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'web-development',
  title: 'Web開発',
  description:
    'フロントエンドおよびバックエンド開発者向けの無料Web開発ツール：フォーマッタ、CSS計算機、ジェネレーター、ユーティリティ。',
  seo: [
    {
      type: 'summary',
      title: '開発者ツール',
      items: [
        'コードフォーマッタとバリデータ',
        'CSS計算機とビジュアルツール',
        '設定とセキュリティのジェネレーター',
        '100%ローカルでプライベートな処理',
      ],
    },
    {
      type: 'title',
      text: 'Web開発に不可欠なユーティリティ',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Web開発者のワークフローを加速するために設計されたツールのコレクション。JSONバリデーションからCSS特定度計算まで、各ユーティリティは日々の開発における実際の課題を解決するために作られています。',
    },
    {
      type: 'tip',
      title: 'プライバシー保証',
      html: 'すべてのツールはブラウザ内でローカルにデータを処理します。コード、データ、ファイルが外部サーバーに送信されることはありません。',
    },
  ],
};
