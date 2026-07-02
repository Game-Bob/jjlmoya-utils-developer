import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SerpPixelSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'serp-pixel-simulator';
const title = 'SERPシミュレーター & SEOピクセルカウンター';
const description = 'Google検索結果のスニペットをリアルタイムでプレビューし、タイトルとメタディスクリプションのピクセル幅を測定して、テキストがどこで切り詰められるかを正確に確認できます。';

const howTo = [
  {
    name: 'タイトルタグを入力する',
    text: 'テストしたいページタイトルを入力または貼り付けます。SERPプレビューとピクセルメーターはキー入力ごとに更新されます。',
  },
  {
    name: '表示URLを追加する',
    text: '検索者がスキャンする結果に似せるために、現実的なドメインとパスを使用します。',
  },
  {
    name: 'メタディスクリプションを書く',
    text: '説明文を追加し、ピクセルバーを確認します。推奨される表示幅を超えると、プレビューは省略記号で切り詰めます。',
  },
  {
    name: 'デスクトップとモバイルを切り替える',
    text: 'メタデータを公開する前に、デスクトップまたはモバイルのカード幅でタイトルの表示を比較します。',
  },
];

const faq = [
  {
    question: 'SEOタイトルに文字数ではなくピクセル数を使う理由は？',
    answer: 'Google検索結果カードは表示幅によって制約されます。細い文字が多いタイトルは、太い文字や大文字、太字に見えるグリフを含むタイトルよりも多くの文字を収めることができます。ピクセル測定は、表示される結果のより正確なプレビューを提供します。',
  },
  {
    question: 'これはGoogleがスニペットをどのように切り詰めるかを正確に保証しますか？',
    answer: 'いいえ。Googleはタイトルリンクやスニペットを書き換えることがあり、表示はクエリ、デバイス、言語、実験によって異なる場合があります。このツールは、切り詰められる可能性の低いメタデータを作成するための実用的な視覚的ガイドとして設計されています。',
  },
  {
    question: 'シミュレーターはどのようなピクセル制限を使用していますか？',
    answer: 'デスクトップのデフォルトのタイトル制限は580px、モバイルのタイトル制限は600px、メタディスクリプションの制限は920pxです。これらは執筆目標であり、Google公式の制限ではありません。',
  },
  {
    question: 'プレビューが省略記号を追加するのはなぜですか？',
    answer: '測定されたテキストが利用可能なピクセル幅を超えると、シミュレーターは収まる最後の文字で文字列を切り詰め、3つのドットを追加します。これはSEOチームが意味の喪失を検出するために必要な実用的な動作と一致します。',
  },
];

const ui: SerpPixelSimulatorUI = {
  titleLabel: 'タイトルタグ',
  titlePlaceholder: 'GameBob | インディー開発スタジオ',
  urlLabel: '表示URL',
  urlPlaceholder: 'https://www.gamebob.dev/ja/',
  descriptionLabel: 'メタディスクリプション',
  descriptionPlaceholder: 'デジタルワークフローとエンターテイメントを向上させるために設計されたツールとゲームのコレクションをご覧ください。',
  deviceLabel: 'プレビューモード',
  desktopLabel: 'デスクトップ',
  mobileLabel: 'モバイル',
  titlePixelsLabel: 'タイトルの幅',
  descriptionPixelsLabel: '説明の幅',
  charactersLabel: '文字',
  previewLabel: 'Googleスタイルのライブプレビュー',
  tooLongLabel: '長すぎます',
  goodLabel: '収まります',
  emptyTitle: 'タイトルがここに表示されます',
  emptyDescription: 'メタディスクリプションのプレビューは入力に応じてここに表示されます。',
  defaultTitle: 'GameBob | インディー開発スタジオ',
  defaultUrl: 'https://www.gamebob.dev/ja/',
  defaultDescription: 'デジタルワークフローとエンターテイメントを向上させるために設計されたツールとゲームのコレクションをご覧ください。',
  fallbackUrl: 'example.co.jp',
  fallbackFaviconText: 'G',
  pixelUnit: 'px',
  ellipsis: '...',
  fetchButtonLabel: '取得',
  fetchLoadingLabel: '取得中...',
  fetchSuccessLabel: 'URLからメタデータを読み込みました。',
  fetchCorsError: 'ブラウザがこのページを読み取れませんでした。CORS、リダイレクト、混在コンテンツ、またはネットワークルールによってブロックされている可能性があります。手動でメタデータを貼り付けまたは編集することはできます。',
  fetchInvalidUrlError: 'メタデータを取得する前に有効なURLを入力してください。',
  fetchNoMetadataError: 'ページは取得されましたが、タイトルまたはメタディスクリプションが見つかりませんでした。',
  fetchGenericError: 'このURLからメタデータを取得できませんでした。アドレスを確認するか、手動でフィールドに入力してください。',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<SerpPixelSimulatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'SERPシミュレーターに関するよくある質問',
  faq,
  bibliographyTitle: '検索結果に関するドキュメント',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Google検索結果がどう見えるか推測するのをやめましょう',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'タイトルタグはスプレッドシートでは完璧に見えても、検索結果では失敗することがあります。Googleは文字数でスペースを確保するのではなく、視覚的なカード内にテキストをレンダリングします。つまり、<strong>GameBob | インディー開発スタジオ</strong>と同じ文字数の別のタイトルでも、文字、大文字/小文字、句読点、間隔によって非常に異なる幅を占める可能性があります。',
    },
    {
      type: 'tip',
      title: '本当に役立つルール',
      html: '重要な約束が省略記号を生き延びるようにスニペットを書きます。ページタイプ、検索意図、クリックする最も強力な理由をピクセル制限の前に配置します。ブランド名は便利ですが、主要な利点を視界から押し出してはいけません。',
    },
    {
      type: 'title',
      text: 'ピクセルカウンターが測定するもの',
      level: 3,
    },
    {
      type: 'table',
      headers: ['要素', '重要なこと', '結果の使い方'],
      rows: [
        ['タイトルタグ', '生の文字数ではなく、ピクセル単位のレンダリング幅', '切り詰めの前に主要キーワードとクリックの約束を表示されたままにします。'],
        ['表示URL', '視覚的な信頼性とトピックの明確さ', '結果の行き先を補強する読みやすいパスを使用します。'],
        ['メタディスクリプション', 'クエリ依存の動作を持つより広いスニペット領域', 'Googleが短縮または書き換える可能性があるため、利点を前に配置します。'],
        ['デバイスモード', 'デスクトップとモバイルのカードは異なる印象を与える可能性があります', '重要なページのメタデータを公開する前に両方を確認します。'],
      ],
    },
    {
      type: 'title',
      text: '文字数制限が弱いSEO習慣である理由',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '「タイトルは60文字以内に収める」という従来のアドバイスは便利ですが、本当の問題を隠しています。WやMのような幅の広い文字、大文字の単語、区切り文字、数字、長いブランド名はすべて異なるスペースを消費します。ピクセル測定はトレードオフを即座に可視化します：フレーズがその場所に値するか、より強いメッセージからスペースを奪っているかを確認できます。',
    },
    {
      type: 'title',
      text: 'より良いスニペットのための実践的なワークフロー',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>意図から始める:</strong> ユーザーが得るものを説明し、ページの名前だけではありません。',
        '<strong>完全なタイトルをテストする:</strong> 公開前にシミュレーターに貼り付けてバーを確認します。',
        '<strong>弱い単語を削除する:</strong> バーが赤くなったら、貴重な用語を切り取る前にフィラーを削除します。',
        '<strong>省略記号を確認する:</strong> 切り詰められたプレビューが意味を失う場合は、切り取りを受け入れるのではなくタイトルを書き直します。',
        '<strong>説明について繰り返す:</strong> 最初の文だけで価値提案を伝えられるようにします。',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'バーが赤くなったとき',
      html: '赤いバーはペナルティ警告ではありません。現在のテキストが選択された視覚的ターゲットよりも広いため、シミュレーターがドットで切り詰めていることを意味します。これを編集上のシグナルとして扱います：隠れた単語が捨ててもよいものか、スニペットがよりシャープな構造を必要としているかを判断します。',
    },
    {
      type: 'title',
      text: '制限、書き換え、現実的な期待',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'どのシミュレーターもGoogleが表示する正確なスニペットを保証することはできません。Googleはタイトルリンクを書き換えたり、クエリ用語を太字にしたり、メタディスクリプションの代わりにページテキストを選択したり、異なる検索に対して異なるスニペットを表示したりする場合があります。このツールは、迅速な執筆とQAのステップとして最適です：ページが本番環境に到達する前に明らかな視覚的オーバーフローを検出します。',
    },
    {
      type: 'summary',
      title: 'このSERPシミュレーターの最適な使い方',
      items: [
        'メタデータを公開する前に視覚的オーバーフローを検出するためにピクセルバーを使用します。',
        '主な検索意図とクリックの約束を省略記号の前に表示されたままにします。',
        'CORSを許可するURLからメタデータを取得し、必要に応じて手動で結果を編集します。',
        'Googleがクエリごとにスニペットを書き換える可能性があるため、プレビューを執筆ガイドとして扱います。',
      ],
    },
  ],
};
