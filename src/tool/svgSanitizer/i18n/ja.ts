import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgSanitizerUI } from '../ui';

const slug = 'svg-sanitizer';
const title = 'SVGサニタイザー オンライン';
const description = 'FigmaやAdobe Illustrator、Inkscapeからエクスポートしたsvgを最適化してクリーンアップ。メタデータや不要な属性、空のグループを削除し、本番環境に対応したSVGを生成します。';

const faqData = [
  {
    question: 'SVGが埋め込まれたページのHTML全体を貼り付けることはできますか？',
    answer: 'はい。HTML内のSVG要素を自動的に検出し、そのブロックだけを抽出して処理します。SVGフラグメントをそのまま貼り付けた場合も同様に動作します。',
  },
  {
    question: 'IllustratorのSVGにも対応していますか？',
    answer: 'はい。IllustratorがエクスポートするSVGにはXML宣言やメタデータ、独自のnamespaceが含まれますが、これらをすべて削除します。結果として、あらゆるモダンブラウザと互換性のあるSVGが得られます。',
  },
  {
    question: 'クリーニングとminify（圧縮）の違いは何ですか？',
    answer: 'クリーニングは不要な属性やタグを削除しますが、コードを読んで編集できるようにインデント形式を保持します。minifyはさらにすべてを1行に圧縮し、ファイルサイズを最小化します。',
  },
  {
    question: 'IDを削除するとSVGが壊れることはありますか？',
    answer: 'SVG内の要素が別の要素をIDで参照している場合、例えばfill="url(#gradient)"のような場合にのみ問題が発生します。その場合はIDを削除オプションをオフにしてください。この問題を防ぐため、デフォルトでは無効になっています。',
  },
  {
    question: 'SVGコードはサーバーに送信されますか？',
    answer: 'いいえ。すべての処理はブラウザ上でネイティブのDOMParserおよびXMLSerializer APIを使用して行われます。コードがデバイス外に出ることは一切ありません。',
  },
];

const howToData = [
  { name: 'SVGを貼り付ける', text: 'Figma、Illustrator、InkscapeからエクスポートしたSVGコードをテキストエリアに貼り付けます。' },
  { name: 'オプションを設定する', text: 'IDの削除、width/heightの除去、minifyなど、必要に応じてオプションを有効または無効にします。' },
  { name: 'クリーニングする', text: '「SVGをクリーニング」ボタンをクリックしてコードを処理し、最適化された結果を取得します。' },
  { name: 'コピーまたはダウンロードする', text: 'コピーまたはダウンロードボタンを使用して、本番環境に対応したクリーンなSVGを保存します。' },
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

const ui: SvgSanitizerUI = {
  labelInput: 'クリーニング前のSVGをここに貼り付け',
  labelOutput: 'クリーンなSVG',
  optRemoveIds: 'IDを削除',
  optRemoveWH: 'width/heightを除去',
  optMinify: 'Minify',
  btnSanitize: 'SVGをクリーニング',
  btnCopy: 'コピー',
  btnCopied: 'コピー済み',
  btnDownload: 'ダウンロード',
  statOriginal: '元のサイズ',
  statCleaned: 'クリーン後',
  statReduction: '削減率',
  statElems: '削除した要素',
  statAttrs: '削除した属性',
  errorPaste: 'クリーニング前にSVGを貼り付けてください。',
  errorProcess: 'SVGの処理中にエラーが発生しました。',
};

export const content: ToolLocaleContent<SvgSanitizerUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考資料',
  bibliography: [
    { name: 'SVG Specification - W3C', url: 'https://www.w3.org/TR/SVG2/' },
    { name: 'Figma SVG Export - 公式ドキュメント', url: 'https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma' },
    { name: 'SVGO - SVG Optimizer (オープンソースリファレンス)', url: 'https://github.com/svg/svgo' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'SVGサニタイザー：FigmaとIllustratorのコードをクリーンアップ', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>Figma</strong>やAdobe Illustrator、ブラウザのインスペクターからエクスポートしたSVGを貼り付けるだけで、クリーンで最適化された、本番環境にそのまま使えるベクターファイルが得られます。',
    },
    { type: 'title', text: 'エクスポートしたSVGはなぜ汚いのか？', level: 3 },
    {
      type: 'paragraph',
      html: 'FigmaからSVGをエクスポートすると、アプリ内でのみ意味を持つ属性が大量に含まれたファイルが生成されます。<code>data-name</code>、<code>xml:space</code>、内部レイヤーへの参照、デザインメタデータなどがその例です。結果として、本来必要なサイズより40〜70%も大きなSVGになることがあります。',
    },
    { type: 'title', text: 'サニタイザーが削除するもの', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>エディタのメタデータ：</strong>FigmaやIllustratorが自動的に追加する<code>metadata</code>、<code>title</code>、<code>desc</code>タグ。',
        '<strong>Inkscapeのnamespace：</strong><code>inkscape:</code>や<code>sodipodi:</code>プレフィックスを持つすべての要素。',
        '<strong>不要な属性：</strong><code>xml:space</code>、<code>version</code>、余分な<code>xmlns:*</code>、Figmaの<code>data-*</code>属性。',
        '<strong>空のグループ：</strong>削除されたレイヤーの残骸として残る、コンテンツのない<code>&lt;g&gt;</code>要素。',
        '<strong>XML宣言：</strong>HTMLにSVGを埋め込む際には不要な<code>&lt;?xml version="1.0"?&gt;</code>宣言とDOCTYPE。',
      ],
    },
  ],
};

