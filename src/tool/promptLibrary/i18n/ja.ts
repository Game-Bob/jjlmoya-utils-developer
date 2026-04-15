import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromptLibraryUI } from '../ui';

const slug = 'prompt-library';
const title = 'プライベート AI プロンプトライブラリ';
const description = 'ChatGPT、Midjourney、Claudeのプロンプトをプライベートに整理・タグ付け・保存。localStorageに保存される自分だけのプロンプトバンク。';

const faqData = [
  {
    question: 'プロンプトはどこに保存されますか？',
    answer: 'プロンプトはブラウザのローカルストレージ（localStorage）にのみ保存されます。外部サーバーは使用しないため、データは100%プライベートです。',
  },
  {
    question: 'ブラウザのCookieや履歴を削除するとどうなりますか？',
    answer: 'サイトデータやローカルストレージを削除すると、保存済みのプロンプトが失われます。ブラウザを頻繁にクリアする場合は、バックアップを取ることをお勧めします。',
  },
  {
    question: 'Midjourney、ChatGPT、DALL-Eにも使えますか？',
    answer: 'はい、あらゆる種類のAI指示に対応しています。専用タグを作成してコマンドを整理し、お好みのAIツールへ簡単にコピーできます。',
  },
];

const howToData = [
  { name: 'プロンプトを作成する', text: '「新規プロンプト」ボタンをクリックし、タイトルと指示を入力してください。' },
  { name: 'タグを追加する', text: 'スペースまたはカンマで区切ってタグを入力し、プロンプトを分類します。' },
  { name: '変数を使う', text: 'テキスト内に角括弧[このように]を使って、カード上に入力可能なフィールドを作成します。' },
  { name: 'コピーして共有する', text: 'ワンクリックでクリップボードにコピーするか、共有ボタンで直接リンクをシェアします。' },
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
  inLanguage: 'ja',
};

const ui: PromptLibraryUI = {
  placeholderSearch: 'キーワードまたはタグで検索...',
  btnNew: '新規プロンプト',
  emptyTitle: 'ライブラリが空です',
  emptyDesc: '最初のプロンプトを作成して、プライベートAIリポジトリの構築を始めましょう。',
  btnAddFirst: '最初のものを追加',
  modalTitleCreate: '新規プロンプトを作成',
  modalTitleEdit: 'プロンプトを編集',
  labelTitle: '識別タイトル',
  placeholderTitle: '例：SEOマーケティング専門家',
  labelContent: '指示（プロンプト）',
  placeholderContent: 'AIへの詳細な指示をここに入力してください...',
  hintContent: 'ヒント：テキスト内に角括弧[このように]を使うと、後で変数を埋めることができます。',
  labelTags: 'タグ',
  placeholderTags: '例：marketing, seo（スペースまたはカンマで追加）',
  btnCancel: 'キャンセル',
  btnSave: 'ローカルに保存',
  ariaLabelStar: 'プロンプトをお気に入りに登録',
  ariaLabelEdit: 'プロンプトを編集',
  ariaLabelShare: 'プロンプトを共有',
  ariaLabelCopy: 'プロンプトをコピー',
  ariaLabelDelete: 'プロンプトを削除',
  varsTitle: '必須変数',
  noResults: 'この検索に一致するプロンプトが見つかりません。',
  confirmTitle: 'プロンプトを削除しますか？',
  confirmDesc: 'この操作は元に戻せません。',
  btnCancelDelete: 'キャンセル',
  btnConfirmDelete: '完全に削除',
};

export const content: ToolLocaleContent<PromptLibraryUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: 'プロンプトエンジニアリング参考資料',
  bibliography: [
    { name: 'Prompt Engineering Guide (DAIR.AI)', url: 'https://www.promptingguide.ai/' },
    { name: 'プロンプトエンジニアリングとは（Google Cloud）', url: 'https://cloud.google.com/discover/what-is-prompt-engineering' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'プロンプトライブラリが必要な理由', level: 2 },
    {
      type: 'paragraph',
      html: 'ChatGPT、Claude、MidjourneyなどのAIツールを日常的に使っているなら、同じ指示を何度も書き直した経験があるはずです。<strong>プロンプトライブラリ</strong>は、お気に入りのコマンドを書き直す手間をなくすための決定的な解決策です。',
    },
    { type: 'title', text: 'プロンプト整理のメリット', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>即時検索：</strong>数ヶ月前に使った特定の指示も、シンプルなテキスト検索でサッと見つけられます。',
        '<strong>タグ分類：</strong>プロンプトに「marketing」「programming」「copywriting」などのタグを付けてすばやくフィルタリング。',
        '<strong>ワンクリックコピー：</strong>全文をクリップボードにたった一度のクリックでコピーできます。',
        '<strong>完全なプライバシー：</strong>すべてのデータはlocalStorage経由でブラウザにローカル保存されます。',
      ],
    },
    { type: 'title', text: 'プロンプト内の変数', level: 3 },
    {
      type: 'paragraph',
      html: 'プロンプトに<strong>[変数名]</strong>という形式を使うと、動的に入力できるフィールドを作成できます。カードを開くと、定義した変数ごとに入力欄が表示され、値を入力した状態でプロンプトがコピーされます。そのままAIに貼り付けるだけで完了です。',
    },
    { type: 'title', text: 'プロンプトの共有', level: 3 },
    {
      type: 'paragraph',
      html: '各プロンプトはURLで共有できます。共有ボタンを押すとリンクが生成され、そのリンクを開くとプロンプトの内容があらかじめ入力された作成フォームが表示されます。',
    },
  ],
};

