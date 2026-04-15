import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonFormatterUI } from '../ui';

const slug = 'json-formatter';
const title = '無料オンラインJSONフォーマッタ＆バリデータ';
const description =
  'JSONコードの整形、検証、修復を行う無料オンラインツール。JSONを美しく整形します。構文エラーを検出し、コードの可読性を向上させます。';

const faqData = [
  {
    question: 'このフォーマッタを使用する際、データは安全ですか？',
    answer:
      'もちろんです。すべての処理は100%ブラウザ内（クライアントサイド）で行われます。お客様のJSONデータがサーバーに送信されることはありませんので、データ構造の完全なプライバシーが保証されます。',
  },
  {
    question: '「Invalid JSON」エラーの原因は何ですか？',
    answer:
      '通常、オブジェクトの最後にある余分なカンマ（末尾のカンマ）、キーを囲むダブルクォートの欠落、または不可視文字が原因です。当ツールはエラーの正確な行をハイライト表示するので、簡単に修正できます。',
  },
  {
    question: '壊れたJSONを修復できますか？',
    answer:
      '当ツールは、不要な末尾のカンマや不正なエスケープ文字などの一般的なエラーを自動的に修正しようとします。これにより、RFC 8259標準に準拠した有効なJSONになります。',
  },
  {
    question: '非常に大きなJSONファイルをサポートしていますか？',
    answer:
      'はい。処理エンジンは、複雑なデータ構造や大きなファイルを、ブラウザのインターフェースをブロックすることなく処理できるように最適化されています。',
  },
];

const howToData = [
  {
    name: 'コードを貼り付ける',
    text: '整形されていない、または縮小（minify）されたJSONをメインのテキストエリアに貼り付けます。',
  },
  {
    name: '検証と整形',
    text: 'システムが自動的にコードを分析し、構文エラーをハイライト表示するとともに、可読性を高めるためのインデントを適用します。',
  },
  {
    name: 'スタイルを選択する',
    text: '可読性を重視するか、スペースの節約を重視するかに応じて、展開された形式（整形）か、圧縮された形式（縮小）を選択します。',
  },
  {
    name: '結果をコピーする',
    text: 'コピーボタンをクリックして、完全に検証されたJSONをクリップボードにコピーします。',
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

const ui: JsonFormatterUI = {
  labelInput: '入力 (JSON)',
  labelOutput: '出力',
  btnMinify: '縮小',
  btnBeautify: '整形',
  btnFix: '修復を試みる',
  btnCopy: 'コピー',
  statusWaiting: '入力を待機中...',
  statusValid: '有効なJSON',
  statusInvalid: '無効なJSON',
  toastCopied: 'コピーしました！',
  toastFixed: 'JSONを修復しました（プレビュー）',
  toastFixFailed: '自動修復できませんでした',
  placeholder: 'ここにJSONを貼り付けてください...',
};

export const content: ToolLocaleContent<JsonFormatterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献と標準',
  bibliography: [
    {
      name: 'RFC 8259 – The JavaScript Object Notation (JSON) Data Interchange Format (IETF)',
      url: 'https://datatracker.ietf.org/doc/html/rfc8259',
    },
    {
      name: 'ECMA-404 – The JSON Data Interchange Syntax (Ecma International)',
      url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-404/',
    },
    {
      name: 'JSON.org – JSONの導入',
      url: 'https://www.json.org/json-ja.html',
    },
    {
      name: 'MDN Web Docs – JSON',
      url: 'https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'JSONの検証と整形',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'JSON (JavaScript Object Notation) は、Webにおけるデータ交換の事実上の標準です。しかし、厳密な構文のため、手動で編集するとヒューマンエラーが発生しやすくなります。',
    },
    {
      type: 'paragraph',
      html: 'このツールを使用すると、構造の検証、可読性を高めるためのコードの整形、および一般的な構文エラーの自動修復が可能です。',
    },
    { type: 'grid', columns: 2 },
    {
      type: 'card',
      title: '修復される主なエラー',
      html: '<ul><li><strong>シングルクォート:</strong> JSON標準ではダブルクォートが必要です。ツールは <code>\'key\': \'value\'</code> を <code>"key": "value"</code> に変換します。</li><li><strong>クォートなしのキー:</strong> JavaScriptスタイルのオブジェクトキーを検出し、必要なクォートを追加します。</li><li><strong>末尾のカンマ:</strong> 厳密なパーサーでエラーとなる、オブジェクトや配列の最後にある不要なカンマを削除します。</li></ul>',
    },
    {
      type: 'card',
      title: '特徴',
      html: '<ul><li><strong>シンタックスハイライト:</strong> キー、文字列、数値、真偽値を色分けして表示し、素早い読み取りをサポートします。</li><li><strong>リアルタイム検証:</strong> JSONが有効かどうかを即座に判断、または具体的なパースエラーを表示します。</li><li><strong>完全なプライバシー:</strong> 処理は100%ブラウザ上で行われ、外部サーバーにデータが送信されることはありません。</li></ul>',
    },
  ],
};

