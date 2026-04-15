import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgToCssUI } from '../ui';

const slug = 'svg-to-css-converter';
const title = '無料オンラインSVGからCSSおよびData URIへの変換ツール';
const description =
  'SVGアイコンやベクトルをCSSコード（背景またはマスク）や圧縮されたData URIに変換します。外部HTTPリクエストを排除し、ウェブサイトのパフォーマンスを最適化します。';

const faqData = [
  {
    question: 'Data URIを使用するのと、外部.svgファイルを使用するのはどちらが良いですか？',
    answer:
      'ユースケースによります。Data URIはHTTPリクエストを排除しますが（小さなアイコンに最適）、CSSファイルのサイズが増加します。大きな画像や詳細なイラストの場合は、外部ファイルが好ましいです。',
  },
  {
    question: 'CSSに埋め込まれたSVGの色を変更するにはどうすればよいですか？',
    answer:
      '「mask-image」を使用するのが最善の方法です。SVGをマスクとして定義することで、「background-color」を使用して動的に色を変更でき、:hover状態でも有効です。',
  },
  {
    question: 'CSSマスクをサポートしているブラウザはどれですか？',
    answer:
      'すべてのモダンブラウザ（Chrome、Firefox、Safari、Edge）がフルサポートしています。古いブラウザ向けには、一般的に-webkit-プリフィックスが使用されます。',
  },
  {
    question: 'Data URIの使用はSEOに影響しますか？',
    answer:
      'はい、好影響を与えます。ページのレンダリングに必要なリクエスト数を減らすことで、読み込み時間（LCP）とCore Web Vitalsのスコアを向上させます。',
  },
  {
    question: 'ReactやTailwindなどのフレームワークで使用できますか？',
    answer:
      'もちろんです！生成されたコードをコピーして、.cssファイル内、あるいはTailwind CSSの任意の値として使用できます。',
  },
];

const howToData = [
  {
    name: 'SVGを貼り付ける',
    text: 'SVGファイルのソースコードをコピーし、左側のテキストエリアに貼り付けます。',
  },
  {
    name: '出力タイプを選択する',
    text: '背景画像（静的な背景用）、CSSマスク（動的な色のアイコン用）、またはData URIのみ（直接使用用）から選択します。',
  },
  {
    name: '結果をコピーする',
    text: '「コピー」をクリックして、生成されたCSSコードをクリップボードにコピーします。',
  },
  {
    name: 'プロジェクトに適用する',
    text: 'コードをスタイルシートまたはCSSコンポーネントに貼り付けます。マスクの場合は、アイコンの色を定義するためにbackground-colorも追加してください。',
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

const ui: SvgToCssUI = {
  labelPasteTitle: 'SVGを貼り付け',
  labelInputArea: 'SVGソースコード',
  labelPreviewOriginal: '元のプレビュー',
  labelResultTitle: 'CSSの結果',
  labelPreviewApplied: '適用後の結果',
  tabBackground: '背景画像',
  tabMask: 'CSSマスク / Webkit',
  tabUri: 'Data URIのみ',
  btnCopy: 'コピー',
  btnCopied: 'コピー完了！',
  placeholder: '<svg xmlns="http://www.w3.org/2000/svg" ...',
};

export const content: ToolLocaleContent<SvgToCssUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献とドキュメント',
  bibliography: [
    {
      name: 'CSS-Tricks: 背景としてSVGを使用する',
      url: 'https://css-tricks.com/using-svg/',
    },
    {
      name: 'MDN Web Docs: mask-image',
      url: 'https://developer.mozilla.org/ja/docs/Web/CSS/mask-image',
    },
    {
      name: 'MDN Web Docs: background-image',
      url: 'https://developer.mozilla.org/ja/docs/Web/CSS/background-image',
    },
    {
      name: 'W3C: CSS Masking Module Level 1',
      url: 'https://www.w3.org/TR/css-masking-1/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'なぜSVGをCSS Data URIに変換するのですか？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '現代のウェブ開発において、パフォーマンスとリソース読み込みの最適化は不可欠です。<strong>Data URI</strong>を介してアイコンをCSSに直接埋め込むことで、不要なHTTPリクエストを排除し、レイテンシを短縮してTime to Interactive (TTI) を向上させることができます。',
    },
    {
      type: 'paragraph',
      html: 'このツールは、<code>&lt;svg&gt;</code>ベクトルコードを、ブラウザが背景画像やクリッピングマスクとして解釈できるエンコードされた文字列に変換します。これにより、ベクトルの特徴である無限の忠実度と鮮明さを維持できます。',
    },
    {
      type: 'title',
      text: '主な技術的利点',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>HTTPリクエストのゼロ化:</strong> グラフィックを<code>.css</code>ファイルに埋め込むことで、ブラウザは追加の外部ファイルをダウンロードする必要がなくなります。',
        '<strong>CSSマスクによるカスタマイズ:</strong> <code>mask-image</code>技術を使用することで、<code>background-color</code>を使用するだけで複雑なベクトルアイコンの色を変更できます。',
        '<strong>即時レンダリング:</strong> 重要なビジュアルリソースがスタイルシートと同時に利用可能になるため、コンテンツのちらつき（FOUC）を回避できます。',
      ],
    },
    {
      type: 'title',
      text: 'CSSマスク vs 背景',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '多くの開発者はベクトルを埋め込むために単に<code>background-image</code>を使用しますが、これには制限があります。CSSから動的にSVGの色を変更することができません。',
    },
    {
      type: 'paragraph',
      html: '当ユーティリティは、<strong>CSSマスク</strong>用のコード生成をサポートしています。生成されたData URIで<code>mask-image</code>を適用することにより、アイコンがステンシルのように機能し、要素の<code>background-color</code>でアイコンの最終的な色を定義できるようになります。これは、AstroやNext.jsなどのモダンなフレームワークでアイコンを管理するための、最もプロフェッショナルで柔軟な方法です。',
    },
  ],
};

