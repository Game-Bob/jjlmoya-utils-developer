import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicalTypographyUI } from '../ui';

const slug = 'musical-typography';
const title = '音楽的タイポグラフィスケール。モジュラースケール計算機';
const description =
  '音楽的比率に基づくモジュラースケールで、調和のとれた視覚的階層を作成できる無料オンラインツール。Webデザインにすぐ使えるCSS変数を生成します。';

const faqData = [
  {
    question: 'タイポグラフィのモジュラースケールとは何ですか？',
    answer:
      '一定の数学的比率に基づいてフォントサイズを決定する手法です。音楽における音符が和声的な関係を持つように、モジュラースケールはバランスが取れた予測可能な視覚的階層を生み出します。',
  },
  {
    question: 'なぜデザインに音楽的インターバルを使うのですか？',
    answer:
      '音楽的インターバルは人間の脳が調和的と感じる比率です。テキストサイズに適用すると、無作為にサイズを選ぶのではなく、正しくプロフェッショナルに感じられる視覚的構造が生まれます。',
  },
  {
    question: 'タイポグラフィにおける黄金比とは何ですか？',
    answer:
      '1.618という比率で、黄金分割とも呼ばれます。階層の各ステップが指数関数的に拡大する、非常にドラマチックで洗練されたスケールを生み出します。ポートフォリオやアート系サイトに最適です。',
  },
  {
    question: 'CSSファイルにスケールを実装するにはどうすればいいですか？',
    answer:
      'このツールは :root { --step-N: Xrem; } 形式のCSS変数（トークン）を生成します。メインのCSSファイルにコピーし、var(--step-N) で使用することで、サイト全体のタイポグラフィの一貫性を保てます。',
  },
];

const howToData = [
  {
    name: 'ベースサイズを設定する',
    text: '本文テキストのフォントサイズ（通常16px）を入力します。これがスケールの基音になります。',
  },
  {
    name: 'インターバルを選ぶ',
    text: '異なる見出しレベル間のサイズの広がりを決める音楽的比率を選択します。',
  },
  {
    name: '階層をプレビューする',
    text: 'タイポグラフィのレベルがリアルタイムでどのように見えるかを確認し、視覚的な調和がプロジェクトに合うかを検証します。',
  },
  {
    name: 'コードをエクスポートする',
    text: '「CSS変数をコピー」をクリックして、ワークフローに直接貼り付けられるブロックを取得します。',
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
  applicationCategory: 'DesignApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ja',
};

const ui: MusicalTypographyUI = {
  labelConfig: '設定',
  labelBaseSize: 'ベースサイズ (px)',
  hintBaseSize: '本文テキストのサイズ（通常16px）。',
  labelRatio: '音楽的スケール（比率）',
  hintRatio: '各ステップでサイズがどれだけ大きくなるかを決定します。',
  labelCalculated: '計算値',
  labelPreview: 'プレビュー',
  btnCopyCss: 'CSS変数をコピー',
  feedbackCopied: '変数をクリップボードにコピーしました！',
  previewText: '音楽的タイポグラフィ',
  previewSubtext: 'デザインのための完璧な調和スケール。',
  ratioSecundaMenor: '短2度',
  ratioSegundaMayor: '長2度',
  ratioTerceraMenor: '短3度',
  ratioTerceraMayor: '長3度',
  ratioCuartaPerfecta: '完全4度',
  ratioCuartaAumentada: '増4度',
  ratioQuintaPerfecta: '完全5度',
  ratioProporcionAurea: '黄金比',
  ratioSextaMayor: '長6度',
  ratioSeptimaMenor: '短7度',
  ratioSeptimaMayor: '長7度',
  ratioOctava: 'オクターブ',
};

export const content: ToolLocaleContent<MusicalTypographyUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献',
  bibliography: [
    {
      name: 'Bringhurst, R. The Elements of Typographic Style',
      url: 'https://en.wikipedia.org/wiki/The_Elements_of_Typographic_Style',
    },
    {
      name: 'Brown, T. More Meaningful Typography. A List Apart',
      url: 'https://alistapart.com/article/more-meaningful-typography/',
    },
    {
      name: 'Physics of Music. Musical Intervals and Scales',
      url: 'https://es.scribd.com/document/199729396/Physics-of-Music-Notes',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Webデザインに宿る見えない調和',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>音楽的タイポグラフィスケール</strong>は、音楽的インターバルの数学をタイポグラフィデザインに応用します。音楽の作曲が精密な比率によって支配されているように、優れたビジュアルデザインも、すべてのサイズを互いに関連付ける数学的構造から恩恵を受けます。',
    },
    {
      type: 'title',
      text: 'モジュラースケールの仕組み',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: '計算式',
      html: '<p>計算の仕組みはシンプルです：<code>サイズ = ベース × 比率<sup>n</sup></code>。ステップ0が基本テキスト、ステップ1が小さなサブタイトル、ステップ4か5がメインのH1になります。同じ乗数定数（比率）がすべての関係に一貫性をもたらします。</p>',
    },
    {
      type: 'card',
      title: 'なぜ「音楽的」なのか',
      html: '<p>ピタゴラス学派は、弦を単純な比率（1:2、2:3、3:4）で分割すると協和音が生まれることを発見しました。オクターブ、完全5度、完全4度というこれらのインターバルは、まさにタイポグラフィの比率と同じです。視覚的な音楽を作曲しているのです。</p>',
    },
    {
      type: 'title',
      text: '適切な比率の選び方',
      level: 3,
    },
    {
      type: 'tip',
      html: '密度の高いインターフェース（ダッシュボード、テーブル）には<code>1.125</code>や<code>1.2</code>のような小さい比率を使いましょう。エディトリアルやポートフォリオサイトには、<code>1.5</code>や<code>1.618</code>のような表現豊かな比率が効果的です。',
    },
    {
      type: 'paragraph',
      html: 'スケールを<code>font-size</code>だけに限定しないでください。同じCSS変数は<code>margin</code>、<code>padding</code>、<code>gap</code>にも使えます。余白がテキストと同じ数学的な進行に従うとき、デザインは誰もが感じるけれど説明できないレベルの一体感を達成します。',
    },
  ],
};

