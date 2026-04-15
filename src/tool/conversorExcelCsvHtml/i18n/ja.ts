import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConversorExcelCsvHtmlUI } from '../ui';

const slug = 'excel-csv-html-table-converter';
const title = 'Excel・CSVからHTMLテーブルへの変換コード生成ツール';
const description = 'ExcelやCSVのデータを、クリーンでセマンティックなHTMLテーブルに即座に変換します。開発者やコンテンツ作成者のための無料ツールです。';

const faqData = [
  {
    question: 'Excelファイル（.xlsx）をHTMLに変換するにはどうすればよいですか？',
    answer: 'まず、Excelでファイルを開き、CSV形式（カンマ区切り）で保存します。次に、そのCSVファイルを当ツールにアップロードするか、内容を貼り付けることでHTMLテーブルコードを取得できます。',
  },
  {
    question: '生成されたコードにはCSSスタイルが含まれていますか？',
    answer: 'ジェネレーターは、境界線やゼブラストライプ用のオプションクラスを含むクリーンなHTMLを生成します。最終的な視覚スタイルはウェブサイト自身のCSSに依存するため、完璧な統合が可能です。',
  },
  {
    question: '非常に大きなCSVファイルをアップロードできますか？',
    answer: 'はい、当ツールはブラウザ内でローカルにデータを処理します。データがインターネット経由で送信されることはないため、非常に高速で安全です。',
  },
  {
    question: 'Googleスプレッドシートに対応していますか？',
    answer: 'もちろんです。Googleスプレッドシートで「ファイル」>「ダウンロード」>「カンマ区切り形式（.csv）」を選択し、そのファイルを当ツールで使用してください。',
  },
];

const howToData = [
  {
    name: 'データの準備',
    text: 'ExcelまたはCSVファイルを用意し、データがクリーンであることを確認してください。',
  },
  {
    name: 'データの読み込み',
    text: '入力エリアにCSVテキストを貼り付けるか、ファイルをコンバーターに直接ドラッグします。',
  },
  {
    name: 'テーブルの設定',
    text: '最初の行をヘッダーとして使用するかどうか、また基本的なスタイルを適用するかどうかを選択します。',
  },
  {
    name: 'コードのコピー',
    text: '「HTMLコード」タブに切り替え、結果をコピーしてウェブサイトに貼り付けます。',
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
  step: howToData.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  inLanguage: 'ja',
};

const ui: ConversorExcelCsvHtmlUI = {
  csvInputLabel: 'ここにCSVを貼り付けてください',
  csvInputPlaceholder: '名前,年齢,都市\n田中,25,東京\n佐藤,30,大阪',
  uploadLabel: 'またはファイルをアップロード（CSV）',
  dragDropLabel: 'ここにファイルをドラッグ＆ドロップ',
  headerCheckboxLabel: '最初の行をヘッダーとして使用',
  bordersCheckboxLabel: '境界線を追加',
  stripeCheckboxLabel: 'ゼブラストライプ',
  previewTabLabel: 'プレビュー',
  codeTabLabel: 'HTMLコード',
  emptyStateLabel: 'データを入力してテーブルを表示',
  copyButtonLabel: 'コードをコピー',
  copiedLabel: 'コピーしました！',
};

export const content: ToolLocaleContent<ConversorExcelCsvHtmlUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: 'HTMLテーブルとデータ形式に関するリソース',
  bibliography: [
    { name: 'W3C: HTMLテーブル', url: 'https://www.w3.org/WAI/tutorials/tables/' },
    { name: 'MDN: HTML table要素', url: 'https://developer.mozilla.org/ja/docs/Web/HTML/Element/table' },
    { name: 'RFC 4180: CSV形式', url: 'https://tools.ietf.org/html/rfc4180' },
    { name: 'Googleスプレッドシート：データのダウンロード', url: 'https://support.google.com/docs/answer/183965' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Excel・CSVをHTMLテーブルに簡単に変換', level: 2 },
    {
      type: 'paragraph',
      html: '現代のウェブ開発において、表形式のデータを表示することは、構造化された情報を伝えるための最も効果的な方法の1つです。しかし、<strong>Excel</strong>などのスプレッドシートや<strong>CSV</strong>ファイルのデータをHTMLの<code>&lt;table&gt;</code>、<code>&lt;tr&gt;</code>、<code>&lt;td&gt;</code>タグに手動で変換するのは、退屈でエラーが発生しやすい作業です。',
    },
    { type: 'title', text: 'なぜセマンティックなHTMLテーブルを使うべきなのか？', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>アクセシビリティ：</strong>スクリーンリーダーが構造を解釈できるため、視覚障害のあるユーザーを支援できます。',
        '<strong>SEO：</strong>検索エンジンがセル内のコンテンツをインデックスするため、データのランキングが向上します。',
        '<strong>レスポンシブ：</strong>CSSを少し追加するだけで、HTMLテーブルをモバイルデバイスに適応させることができます。',
        '<strong>メンテナンス性：</strong>画像を生成し直すよりも、HTML内のデータを編集する方がはるかに簡単です。',
      ],
    },
    { type: 'title', text: 'ExcelからHTMLへのコンバーターの仕組み', level: 3 },
    {
      type: 'paragraph',
      html: '当ツールは、カンマ区切りファイル（CSV）を処理するネイティブテキストパーサーを使用しています。Microsoft Excel、Googleスプレッドシート、LibreOffice Calcを含むほとんどのスプレッドシートプログラムでは、データをCSV形式でエクスポートできます。',
    },
  ],
};

