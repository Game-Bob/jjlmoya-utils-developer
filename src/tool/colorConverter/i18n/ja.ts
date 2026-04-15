import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ColorConverterUI } from '../ui';

const slug = 'color-converter-rgb-hex-hsl';
const title = 'オンライン・カラーコンバーター：RGB, HEX, HSL';
const description = 'RGB、HEX、HSL間ですぐに色を変換できます。補色ハーモニーの生成やWCAGコントラストの分析も可能。100%クライアントサイドでプライバシーも安心。';

const faqData = [
  {
    question: 'RGBからHEXやHSLへのカラーコンバーターはどのように機能しますか？',
    answer: 'このツールは赤、緑、青（RGB）の値を受け取り、数学的アルゴリズムを使用して、それらに相当する16進数（HEX）や、色相、彩度、輝度（HSL）の値に変換します。逆の変換も可能です。',
  },
  {
    question: 'デザインでHEXの代わりにHSLを使用すべきなのはなぜですか？',
    answer: 'HSL形式は非常に直感的だからです。色相を変えずに彩度や輝度を調整できるため、調和のとれたパレットやボタンの状態（ホバー、無効）をはるかに簡単に作成できます。',
  },
  {
    question: '相対コントラスト値とは何ですか？',
    answer: '輝度に基づいて、背景に対するテキストの読みやすさを示す指標です。ハイコントラストを維持することで、WCAGのアクセシビリティ・ガイドラインに従い、視覚障害のある方でもコンテンツを読めるようになります。',
  },
  {
    question: 'このオンライン・カラーコンバーターを使っても安全ですか？',
    answer: 'はい、もちろんです。100%クライアントサイドで動作するため、色のデータがコンピュータの外に出ることはありません。すべての処理はブラウザ内で直接行われるため、プライバシーと即時のパフォーマンスが保証されます。',
  },
];

const howToData = [
  { name: '色を選択する', text: '赤、緑、青のスライダーを使用するか、テキストフィールドにHEXコードを直接入力します。' },
  { name: 'RGBチャンネルを調整する', text: 'スライダーを動かして各チャンネルの強度を変更し、リアルタイムの更新を確認します。' },
  { name: '形式をコピーする', text: '必要なHEX、RGB、HSL形式の隣にある「コピー」ボタンをクリックします。' },
  { name: 'ハーモニーを探索する', text: 'ハーモニーカラー（補色、類似色、三補色）をクリックして、クリップボードにコピーします。' },
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

const ui: ColorConverterUI = {
  labelPreview: 'プレビュー（クリックでHEXをコピー）',
  labelHarmonies: 'カラーハーモニー',
  labelR: '赤',
  labelG: '緑',
  labelB: '青',
  labelComp: '補色',
  labelAna1: '類似 1',
  labelAna2: '類似 2',
  labelTri1: '三補色 1',
  labelTri2: '三補色 2',
  btnCopy: 'コピー',
  btnCopied: 'コピーしました',
  contrastLabel: 'コントラスト',
  clickToCopy: 'クリックしてコピー',
};

export const content: ToolLocaleContent<ColorConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '色とウェブデザインのリソース',
  bibliography: [
    { name: 'W3C: CSSカラー・ドキュメント', url: 'https://www.w3.org/TR/css-color-4/' },
    { name: 'MDN: HSLカラーモデル・ガイド', url: 'https://developer.mozilla.org/ja/docs/Web/CSS/color_value/hsl' },
    { name: 'WebAIM: コントラストとアクセシビリティ・ガイド', url: 'https://webaim.org/resources/contrastchecker/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '開発者のためのRGB・HEX・HSLカラーコンバーター', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>フロントエンド開発</strong>や<strong>UI/UXデザイン</strong>の世界では、色の管理は欠かせないタスクです。当社の<strong>オンライン・カラーコンバーター</strong>を使用すると、<strong>HEX、RGB、HSL</strong>の間で値を瞬時に、かつ数学的な精度で変換できます。',
    },
    { type: 'title', text: '色の形式：HEX, RGB, HSL', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>HEX（16進数）：</strong>CSSの事実上の標準です。コンパクトでコード内で共有しやすい形式です。',
        '<strong>RGB（赤、緑、青）：</strong>加法混色に基づいています。チャンネルを直接操作したり、RGBAで透明度を適用したりするのに適しています。',
        '<strong>HSL（色相、彩度、輝度）：</strong>最も直感的な形式です。色相、彩度、輝度を調整して、調和のとれたパレットを作成するのに最適です。',
      ],
    },
    { type: 'title', text: 'コントラストとWCAGアクセシビリティ', level: 3 },
    {
      type: 'paragraph',
      html: 'この計算機には、輝度に基づく<strong>相対コントラスト</strong>の測定機能が含まれています。これにより、<strong>WCAG</strong>のガイドラインを満たし、選択した背景に対してテキストが読みやすいことを確認できます。',
    },
    { type: 'title', text: '自動カラーハーモニー', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>補色（Complementary）：</strong>色相環の反対側の色で、コントラストを最大化するのに最適です。',
        '<strong>類似色（Analogous）：</strong>隣接する色で、滑らかで調和のとれた遷移を作り出します。',
        '<strong>三補色（Triadic）：</strong>等間隔に配置された3つの色で、活気がありバランスの取れた構成を実現します。',
      ],
    },
  ],
};

