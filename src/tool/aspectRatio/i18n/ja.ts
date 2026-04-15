import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AspectRatioUI } from '../ui';

const slug = 'aspect-ratio-calculator';
const title = 'アスペクト比計算ツール（ピクセル）。オンライン比率計算';
const description =
  'グラフィックの歪みを防ぐために、正確な比率を維持したまま画像、ビデオ、Webデザインの新しい解像度を計算します。16:9、4:3、21:9、およびカスタム形式をサポートしています。';

const faqData = [
  {
    question: 'アスペクト比とは何ですか？',
    answer:
      'アスペクト比は、画像や画面の幅と高さの幾何学的な関係を表します。コロンで区切られた2つの数字（例：16:9）で表され、幅に対して高さが比例してどのように変化するかを示します。',
  },
  {
    question: 'なぜ正しい比率を維持することが重要なのですか？',
    answer:
      'アスペクト比を無視すると、画像が押しつぶされたり引き伸ばされたり、ビデオに予期しないレターボックス（黒枠）が表示されたり、異なる画面サイズでWebコンポーネントのレイアウトが崩れたりします。正確な比率を維持することは、プロフェッショナルな表示に不可欠です。',
  },
  {
    question: '特定の比率で幅から高さを計算するにはどうすればよいですか？',
    answer:
      '公式は「高さ = 幅 × (比率の高さ / 比率の幅)」です。例えば、アスペクト比16:9で幅が1280pxの場合、高さは「1280 × (9/16) = 720px」になります。',
  },
  {
    question: 'YouTube動画の標準的なアスペクト比は何ですか？',
    answer:
      '16:9は、YouTubeやほとんどの最新ビデオプラットフォームの標準比率です。これは、1280×720 (HD)、1920×1080 (Full HD)、3840×2160 (4K UHD) などの解像度に対応しています。',
  },
  {
    question: '縦型のSNS動画ではどのアスペクト比が使用されますか？',
    answer:
      '9:16です。これはワイドスクリーン形式のちょうど逆になります。TikTok、Instagramリール、YouTubeショートのネイティブな比率であり、スマートフォンを縦に持ってコンテンツを視聴することに由来します。',
  },
];

const howToData = [
  {
    name: '元の比率を入力する',
    text: '維持したい比率の幅と高さの値（例：ワイドスクリーンの場合は16と9）を入力するか、プリセットから1つ選択します。',
  },
  {
    name: 'スケールを調整する',
    text: '「実際のスケール」セクションで幅または高さの値を変更します。ツールは比率を維持するために、もう一方の値を自動的に計算します。',
  },
  {
    name: 'プレビューを確認する',
    text: 'プレビューパネルには、計算された解像度と簡略化された比率とともに、比例したスケールでの結果の形状が表示されます。',
  },
  {
    name: 'プロジェクトに適用する',
    text: '計算された値をコピーして、CSS（aspect-ratio: 16 / 9）、ビデオの書き出し、またはデザインツールの設定で使用します。',
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

const ui: AspectRatioUI = {
  labelConfig: '設定',
  labelRatio: '元の比率',
  labelWidth: '幅',
  labelHeight: '高さ',
  labelScale: '実際のスケール',
  labelPixelWidth: 'ピクセル（幅）',
  labelPixelHeight: 'ピクセル（高さ）',
  labelPreview: '比例プレビュー',
  labelStatus: '完璧な比率',
  labelOffline: '100%オフラインツール',
};

export const content: ToolLocaleContent<AspectRatioUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献とドキュメント',
  bibliography: [
    {
      name: 'MDN Web Docs: aspect-ratio (CSS)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio',
    },
    {
      name: 'Wikipedia: アスペクト比',
      url: 'https://ja.wikipedia.org/wiki/アスペクト比',
    },
    {
      name: 'W3C: CSS Box Sizing Level 4',
      url: 'https://www.w3.org/TR/css-sizing-4/#aspect-ratio',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'アスペクト比とは何ですか？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'グラフィックデザイン、写真、フロントエンド開発において、<strong>アスペクト比</strong>は画像、画面、またはコンテナの幅と高さの幾何学的な関係を表します。通常、コロンで区切られた2つの数字（例：<code>16:9</code>）で表され、幅の変化に応じて高さがどのように比例して増加するかを示します。',
    },
    {
      type: 'paragraph',
      html: 'アスペクト比の誤った処理は、写真が押しつぶされたり、ビデオに予期しないクロッピング（レターボックス）が発生したり、モバイルからウルトラワイドモニターまで段階的に閲覧したときにWebコンポーネントのレイアウトが崩れたりする一般的な原因です。',
    },
    {
      type: 'title',
      text: '業界で一般的な比率',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '専門分野に応じて、いくつかの世界標準的な比率を常に扱うことになります。',
    },
    {
      type: 'list',
      items: [
        '<strong>16:9（ワイドスクリーン）:</strong> 最新のモニター、テレビ、YouTubeの録画、または標準的な高解像度（1920×1080や4Kなど）における圧倒的な主要形式。',
        '<strong>9:16（垂直）:</strong> モバイルデバイスでのネイティブなコンテンツ視聴（TikTok、Instagramリール、YouTubeショート）から生まれました。ワイドスクリーン動画と全く同じ比率ですが、デバイスを物理的に回転させた状態です。',
        '<strong>4:3（クラシック / ヴィンテージ）:</strong> 古いテレビやモニター、アナログや特殊なデジタルカメラモデルに見られます。やや正方形に近い外観は、中央の構図軸に直接注意を引き付けます。',
      ],
    },
    {
      type: 'title',
      text: 'Web開発とCSSのaspect-ratioプロパティ',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '以前のCSSでは、ページの読み込み時に発生するひどい累積レイアウトシフト（CLS）を避けるために、YouTubeのiframeやカバー画像の動的なスペースを確保するために、<strong>パディングハック</strong>（<code>padding-top: 56.25%</code>を注入するなど）を使用した複雑な数学的システムが使われていました。',
    },
    {
      type: 'paragraph',
      html: '現在では、すべてのモダンなレイアウトに<code>aspect-ratio: 16 / 9;</code>のようなプロパティを直接適用することで、セマンティックなコードを実現し、GridやFlexboxで定義された元の幅からブラウザが自動的に欠けている寸法を導き出せるようになっています。',
    },
    {
      type: 'paragraph',
      html: 'このローカルピクセル計算ツールは、デザインの精度を瞬時のスケーリング計算に委ね、壊滅的な誤設定からレンダリングを保護します。',
    },
  ],
};

