import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PlaceholderGeneratorUI } from '../ui';

const slug = 'placeholder-image-generator';
const title = 'プレースホルダー画像ジェネレーター。ウェブモックアップを素早く作成';
const description =
  'ウェブデザイン用のカスタムプレースホルダー画像を作成できます。解像度・背景色・テキストを自由に調整し、PNG・WebP・JPEGで即時エクスポート。';

const faqData = [
  {
    question: 'プレースホルダー画像とは何ですか？',
    answer:
      'プレースホルダー画像とは、ウェブデザインやレイアウト作成において、最終的な画像が入る場所を一時的に確保するためのグラフィックです。最終コンテンツが用意される前に、ページ全体の構造を視覚的に確認するために使われます。',
  },
  {
    question: 'ジェネレーターで任意の解像度を使えますか？',
    answer:
      'はい、幅と高さに任意の数値を入力できます。ジェネレーターは指定されたとおりの寸法のキャンバスを生成します。厳密なグリッドや特定の広告バナーにも対応しています。',
  },
  {
    question: '画像はどの形式でダウンロードされますか？',
    answer:
      '初期設定ではWebP形式で生成されますが、無劣化の最高品質が必要な場合はPNG、幅広い互換性が必要な場合はJPEGを選択できます。',
  },
  {
    question: 'サーバーで処理されますか？',
    answer:
      'いいえ。すべての画像レンダリングはお使いのブラウザの仮想メモリ（Canvas）内で即座に完結します。ネットワーク経由でデータを送受信することは一切ありません。',
  },
];

const howToData = [
  {
    name: 'サイズを設定する',
    text: '幅と高さの値を直接入力するか、プリセット（FHD・HD・Instagramなど）をクリックして自動入力してください。',
  },
  {
    name: '色とテキストを設定する',
    text: 'ネイティブのカラーピッカーまたは16進数コードの直接入力で、背景色とテキスト色を選択します。任意でカスタムテキストを入力し、デフォルトのサイズ表示と置き換えることもできます。',
  },
  {
    name: 'フォントと出力形式を選ぶ',
    text: 'フォントファミリーとサイズを選択してください。用途に合わせて出力形式（WebP・PNG・JPEG）を指定します。',
  },
  {
    name: '画像をダウンロードする',
    text: '「ダウンロード」ボタンをクリックすると、生成されたプレースホルダー画像がデバイスに直接保存されます。',
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

const ui: PlaceholderGeneratorUI = {
  labelDimensions: 'クイックサイズ',
  labelWidth: '幅 (px)',
  labelHeight: '高さ (px)',
  labelBgColor: '背景色',
  labelTextColor: 'テキスト色',
  labelCustomText: 'カスタムテキスト（任意）',
  placeholderCustomText: '例：ヒーローバナー',
  labelFontFamily: 'フォント',
  labelFontSize: '基本サイズ',
  fontSizeAuto: '自動',
  labelFormat: '出力形式',
  btnDownload: '画像をダウンロード',
};

export const content: ToolLocaleContent<PlaceholderGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考資料',
  bibliography: [
    {
      name: 'MDN Web Docs: HTMLCanvasElement.toDataURL()',
      url: 'https://developer.mozilla.org/ja/docs/Web/API/HTMLCanvasElement/toDataURL',
    },
    {
      name: 'MDN Web Docs: CanvasRenderingContext2D',
      url: 'https://developer.mozilla.org/ja/docs/Web/API/CanvasRenderingContext2D',
    },
    {
      name: 'W3C: HTML Canvas 2D Context',
      url: 'https://www.w3.org/TR/2dcontext/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'モックアップ作業をすばやく進めるための最適ツール',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ウェブサイトの構造設計（ワイヤーフレーミング）や初期コンセプト段階では、最終的な写真素材がそろっていないことがほとんどです。画像がない空白の領域は全体のレイアウト把握を妨げ、余白や比率のミスを見えにくくしてしまいます。プレースホルダー画像ジェネレーターを使えば、正確なサイズの色付きブロックをすぐに挿入でき、こうした問題を一気に解消できます。',
    },
    {
      type: 'tip',
      title: 'ストレスのないデザイン作業',
      html: 'CSSグリッドを構築する際、1200×800ピクセルのような正確なサイズのブロックは欠かせません。ダウンロードしたプレースホルダーを使えば、余計なCSSやサードパーティスクリプトを一時的なコードに混ぜ込まずに済みます。',
    },
    {
      type: 'title',
      text: '外部サービスを使うことの問題点',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'フロントエンド開発では、<code>via.placeholder.com</code>のようなサービスをHTMLの<code>src</code>属性に直接指定する慣習が広く見られます。URLパラメーターで手軽に使える反面、細心の注意を払う開発者なら避けたいような深刻な副作用があります。',
    },
    {
      type: 'paragraph',
      html: '開発中のページのすべての画像タグに外部ドメインを挿入すると、DNSリクエストが増加し、Vite・Gulp・WebpackのホットリローディングシステムのパフォーマンスにSが影響します。また、最終的にクラウドへ上がるブランチに意図せず痕跡を残す恐れもあります。このツールで好みの形式（WebP・PNG・JPEG）の画像を生成すれば、プロトタイプをlocalhostだけで完結させることができます。',
    },
    {
      type: 'title',
      text: 'ジェネレーターのアルゴリズムが持つ主な特長',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>ピクセルパーフェクトな解像度：</strong>ネイティブのHTML5 Canvasにより、エクスポートされるキャンバスはユーザーが指定した座標と寸分違わず一致します。',
        '<strong>タイポグラフィの自動スケーリング：</strong>自動モードでは、フォントサイズが周囲の面積と文字数を計算し、テキストが<em>オーバーフロー</em>することなくきれいに収まるよう調整されます。',
        '<strong>16進数カラーの双方向同期：</strong>ネイティブHTMLのカラーピッカーとテキスト入力欄の状態を双方向で連動させることで、FigmaやPenpotのUI/UXパレットに基づいた精確なカラーコントラストを実現します。',
      ],
    },
    {
      type: 'title',
      text: '技術的なワイヤーフレーミングが持つ奥深さ',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'モノリシックなプロジェクトであれマイクロフロントエンドであれ、基盤を固める段階を経ずに進められるものはほとんどありません。要求の厳しいクライアントや明確なビジョンを持つプロダクトマネージャーと向き合う場面ではなおさらです。最終的な<em>アセット</em>を抱えることなく、グラフィカルな繰り返し作業をすばやく実行できるかどうかが、スピードのある開発者とそうでない開発者の差を生みます。このジェネレーターはローカルマシン上でJSの最新API <code>toDataURL()</code>を直接活用し、不透明な中間処理なしにプロフェッショナルなクオリティの結果を提供します。',
    },
  ],
};

