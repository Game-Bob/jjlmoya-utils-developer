import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DuplicateCssRemoverUI } from '../ui';

const slug = 'duplicate-css-remover';
const title = 'CSSの重複を削除するオンラインツール。スタイルシートを整理して最適化';
const description =
  '重複したCSSコードを無料でクリーンアップできるツール。冗長なセレクターを統合し、カスケードを維持しながら、ブラウザ上でファイルサイズを即座に削減します。';

const faqData = [
  {
    question: 'CSSセレクターが重複しているとどうなりますか？',
    answer:
      '同じセレクターが複数回登場すると、ブラウザはすべてのルールを適用しますが、各プロパティの最後の宣言が前の宣言を上書きします。これにより、見た目に何の差もないまま、ファイルが必要以上に大きくなってしまいます。',
  },
  {
    question: '重複を削除するとプロパティが失われますか？',
    answer:
      'いいえ。このアルゴリズムはCSSカスケードを厳密に尊重します。同じセレクター内でプロパティが競合する場合は、常に最後に宣言されたものが保持されます。各ブロック固有のプロパティは、ひとつに統合されたセレクターの下にまとめられます。',
  },
  {
    question: 'ミニファイ済みのCSSやコメント付きのCSSでも使えますか？',
    answer:
      'はい。ツールは処理前にCSSコメントを自動的に削除し、1行にまとまったコードでも正しく動作します。高度なネストや複雑なアットルールが含まれるCSSには、あらかじめブロックを分割してから使用することをお勧めします。',
  },
  {
    question: 'CSSのデータはサーバーに送信されますか？',
    answer:
      'いいえ。すべての処理はブラウザ内のローカルJavaScriptで完結します。CSSの一部も外部サーバーに送信されることはなく、コードのプライバシーは完全に守られます。',
  },
];

const howToData = [
  {
    name: 'CSSを貼り付ける',
    text: '重複セレクターを含むCSSファイルの内容をコピーして、左側の「Dirty / Duplicate CSS」フィールドに貼り付けます。',
  },
  {
    name: 'クリーンアップを実行する',
    text: '「CSSをクリーンアップして統合」ボタンをクリックします。ツールがすべてのセレクターを解析し、プロパティをマージして冗長なブロックを削除します。',
  },
  {
    name: '結果を確認してコピーする',
    text: '削減されたバイト数を確認し、「コードをコピー」ボタンで最適化済みのCSSをコピーして、プロジェクトに直接活用しましょう。',
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
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ja',
};

const ui: DuplicateCssRemoverUI = {
  labelInput: '重複CSS（クリーニング前）',
  labelOutput: 'クリーン済みCSS',
  placeholderInput: '.btn { padding: 10px; color: red; }\n.btn { margin: 5px; color: blue; }',
  placeholderOutput: '最適化・統合されたCSSがここに表示されます...',
  btnClean: 'CSSをクリーンアップして統合',
  btnCopy: 'コードをコピー',
  btnCopied: 'コピーしました！',
  statBytesOriginal: '元のサイズ（バイト）',
  statBytesClean: 'クリーン後のサイズ',
  statSaving: '削減量',
};

export const content: ToolLocaleContent<DuplicateCssRemoverUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考資料とドキュメント',
  bibliography: [
    {
      name: 'Web Vitals：CSSがRender-BlockingとFCPに与える影響',
      url: 'https://web.dev/articles/render-blocking-resources',
    },
    {
      name: 'W3C仕様：CSSカスケードと継承',
      url: 'https://www.w3.org/TR/css-cascade-4/',
    },
    {
      name: 'Clean CSS：CSSミニファイのライブラリと手法',
      url: 'https://github.com/clean-css/clean-css',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'CSSコードが重複してしまう原因',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '長期プロジェクトのメンテナンスやレガシーコードの作業では、複数の開発者が重複したCSSルールを書いてしまうことがよくあります。既存のデザインを壊すのが怖いため、元のコードを修正・リファクタリングするよりも、ドキュメントの末尾に新しいルールを追加する方を選びがちです。',
    },
    {
      type: 'paragraph',
      html: 'その結果、何十もの重複セレクターを抱えた非効率なファイルが生まれ、可読性を損なうだけでなく、Webページのダウンロードサイズも大幅に増加させてしまいます。',
    },
    {
      type: 'title',
      text: 'Webパフォーマンス（Web Vitals）への隠れた影響',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'スタイルシートファイルはブラウザのレンダリングをブロックします（<strong>Render-Blocking</strong>リソース）。完全なCSSOMをダウンロードして構築し終えるまで、画面は真っ白なままです。',
    },
    {
      type: 'tip',
      html: '冗長なスタイルを削除することは、コードの整理整頓だけの話ではありません。<strong>First Contentful Paint（FCP）</strong>などの重要なパフォーマンス指標を、即座に、数値として改善できます。',
    },
    {
      type: 'title',
      text: '重複ルールを統合する仕組み',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'このツールはインテリジェントなアセンブラーとして機能します。従来のミニファイアのように空白を圧縮するだけでなく、テキストを再帰的にスキャンして同一のセレクターパターンを検出します。',
    },
    {
      type: 'list',
      items: [
        '<code>.box { color: red; }</code>というルールがあり、100行後に<code>.box { padding: 10px; color: blue; }</code>がある場合を想像してください。このツールは両方のブロックを同じ<code>.box</code>セレクターの下に統合し、paddingをマージします。',
        '<strong>CSSカスケードの保全：</strong>直接的な競合がある場合、アルゴリズムは最後に宣言されたプロパティを厳密に保持します。これにより、ドキュメントをクリーンアップしても元のレイアウトが崩れません。',
      ],
    },
    {
      type: 'paragraph',
      html: 'ユーザーのスマートフォンに無駄なキロバイトを送り続けるのはもう終わりにしましょう。ブラウザ上で、完全オフラインで、ミリ秒単位でコードを統合できます。',
    },
  ],
};

