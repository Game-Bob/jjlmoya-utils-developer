import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssToInlineConverterUI } from '../ui';

const slug = 'css-to-inline-converter';
const title = 'CSSをインラインHTMLに変換するメール向けツール';
const description =
  'スタイルシートやCSSクラスを、HTML内に直接埋め込まれたインラインスタイルへ自動変換します。ニュースレター、トランザクショナルメール、安定したWebレイアウトに最適です。';

const faqData = [
  {
    question: 'メールに外部スタイルシートではなくインラインCSSが必要な理由は？',
    answer:
      'Outlook、Gmail、Apple MailなどのメールクライアントはセキュリティUP上の理由から<link>タグや<style>タグを除去または無視します。メール内でスタイルを確実に反映させる唯一の方法は、各HTML要素のstyle属性に直接埋め込むことです。',
  },
  {
    question: '要素にすでにstyle属性がある場合はどうなりますか？',
    answer:
      'ツールは既存のインラインスタイルを尊重し、新しいプロパティをその後に追加します。CSSカスケードの挙動をシミュレートしており、競合が生じた場合は後から宣言されたプロパティが優先されます。',
  },
  {
    question: ':hoverやメディアクエリのような複雑なセレクターにも対応していますか？',
    answer:
      'このツールはDOMParserが解決できる、クラス・ID・属性・構造的疑似クラスのセレクターを処理します。:hoverのような状態依存セレクターやメディアクエリはランタイム環境に依存するためインライン化できず、無視されます。',
  },
  {
    question: 'HTMLやCSSのコードはサーバーに送信されますか？',
    answer:
      'いいえ。すべての処理はブラウザ内のネイティブDOMParser APIを使って100%ローカルで行われます。コードの一切がデバイスの外に出ることはなく、機密コンテンツを含むテンプレートでも完全なプライバシーが保証されます。',
  },
];

const howToData = [
  {
    name: '元のHTMLを貼り付ける',
    text: '「元のHTML」フィールドに処理したいHTMLを入力または貼り付けます。断片でも完全なドキュメントでも構いません。',
  },
  {
    name: 'CSSルールを追加する',
    text: '注入したいクラスやIDを「CSSルール」フィールドに貼り付けます。ツールはセレクターの詳細度を考慮して適用します。',
  },
  {
    name: '変換してコピーする',
    text: '「CSSをHTMLに注入」をクリックします。すべてのインラインスタイルが適用された結果が下に表示され、メール管理ツールやCMSにそのままコピー＆ペーストできます。',
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

const ui: CssToInlineConverterUI = {
  labelHtml: '元のHTML',
  labelCss: 'CSSルール',
  labelOutput: 'インラインHTML結果',
  placeholderHtml: '<div class="my-class">こんにちは世界</div>',
  placeholderCss: '.my-class { color: red; padding: 10px; }',
  placeholderOutput: 'スタイルが埋め込まれたHTMLがここに表示されます...',
  btnConvert: 'CSSをHTMLに注入',
  btnCopy: 'コードをコピー',
  btnCopied: 'コピーしました！',
  msgError: '処理エラーです。HTMLとCSSが正しい形式であるか確認してください。',
};

export const content: ToolLocaleContent<CssToInlineConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考資料とドキュメント',
  bibliography: [
    {
      name: 'Can I email: メール向けHTMLおよびCSSサポートマトリクス',
      url: 'https://www.caniemail.com/',
    },
    {
      name: 'MDN Web Docs: グローバルstyle属性',
      url: 'https://developer.mozilla.org/ja/docs/Web/HTML/Global_attributes/style',
    },
    {
      name: 'DOMParser API: ブラウザ内の安全なパース処理',
      url: 'https://developer.mozilla.org/ja/docs/Web/API/DOMParser',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'CSSインライナーとは何か、なぜ必要なのか',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '現代のWeb開発では、役割を分離するのが一般的です。HTMLが構造を担い、外部CSSファイルがすべての視覚スタイルを提供します。しかし、外部スタイルシートやグローバルな<code>&lt;style&gt;</code>タグを信頼しない環境も存在します。',
    },
    {
      type: 'paragraph',
      html: '外部CSSが機能しない最も代表的な用途が<strong>メールテンプレート開発</strong>です。この環境では、フォント・色・余白を正しく表示させる唯一の確実な方法は、タグに直接埋め込むことです: <code>&lt;span style="color: red;"&gt;</code>。',
    },
    {
      type: 'title',
      text: 'メールクライアントにおけるCSSの問題',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Microsoft Outlook、Apple Mail、GmailなどのメールクライアントはCSSレンダリングエンジンが非常に制限的なことで知られています。多くは読み取りインターフェースを破壊しかねないコードインジェクションを防ぐため、<code>&lt;link&gt;</code>タグや<code>&lt;style&gt;</code>タグを除去します。',
    },
    {
      type: 'tip',
      html: 'ニュースレターやトランザクショナルメール（領収書、アカウント確認メールなど）では、テーブルレイアウトと<em>インラインCSS</em>の使用がメールマーケティング業界のゴールドスタンダードとされています。',
    },
    {
      type: 'title',
      text: 'このツールがブラウザ内でどう動くか',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>安全なパース:</strong> <code>DOMParser API</code>を使用して、入力されたHTMLをブラウザ内の安全な仮想DOMに一時的に変換します。',
        '<strong>カスケードのシミュレーション:</strong> CSSルールを解析し、セレクターに詳細度の重みを付け、対象HTML要素の<code>style</code>属性にコードを注入して書き換えます。',
        '<strong>完全オフライン:</strong> コードの一切がデバイスの外に出ません。機密コンテンツを含むテンプレートでも完全なプライバシーを確保できます。',
      ],
    },
  ],
};

