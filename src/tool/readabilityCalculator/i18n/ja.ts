import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReadabilityCalculatorUI } from '../ui';

const slug = 'visual-readability-calculator-wcag-apca';
const title = '視覚的可読性チェッカー WCAG と APCA';
const description = 'APCAとWCAG 3.0であなたのデザインの実際のコントラストを確認しましょう。フォントの太さとサイズが可読性に与える影響を分析できます。単純な比率から知覚的な読みやすさまで対応。';

const faqData = [
  {
    question: 'APCAとは何ですか？WCAG 2.1とどう違うのですか？',
    answer: 'APCAは、WCAG 3.0向けに開発された「Advanced Perceptual Contrast Algorithm（高度知覚コントラストアルゴリズム）」です。従来の単純な比率とは異なり、APCAは人間の脳がコントラストを知覚する仕組みを数学的にモデル化しており、極性（明るい背景 vs 暗い背景）やフォントのサイズ・ウェイトを考慮しています。',
  },
  {
    question: 'Lc値はどういう意味ですか？',
    answer: 'Lc（Lightness Contrast）はAPCAが算出するコントラスト値です。100が理想的な最大コントラストを示し、60を下回ると連続する文章テキストには問題があるとされます。これは知覚の絶対スケールです。',
  },
  {
    question: 'フォントの太さは可読性にどう影響しますか？',
    answer: '細いフォント（ThinやLight）は読みやすくするためにより高いコントラストが必要です。APCAは低ウェイトのフォントに対してより厳しい基準を設けており、WCAG基準をウェイト100のフォントで通過したデザインでも実際には読みにくい場合があります。',
  },
  {
    question: 'このツールはプライバシーに配慮していますか？',
    answer: 'はい。すべての計算はブラウザ上でローカルに実行されます。分析した色や設定がサーバーに送信されることはなく、デザインプロジェクトのプライバシーは完全に守られます。',
  },
];

const howToData = [
  { name: '色を選ぶ', text: 'カラーピッカーを使ってテキストカラーと背景色を設定してください。' },
  { name: 'タイポグラフィを調整する', text: 'フォントサイズとウェイトのスライダーを動かして、実際のタイポグラフィを再現してください。' },
  { name: '結果を確認する', text: 'WCAG 2.1比率とAPCAのLc値を確認して、デザインがアクセシブルかどうかを判断してください。' },
  { name: '推奨事項を見直す', text: 'ボディテキスト、小さなテキスト、UI要素に対するAPCA固有の推奨事項を確認してください。' },
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

const ui: ReadabilityCalculatorUI = {
  labelColors: 'ベースカラー',
  labelText: 'テキスト',
  labelBg: '背景',
  labelTypo: 'タイポグラフィ',
  labelFontSize: 'フォントサイズ',
  labelFontWeight: 'フォントウェイト',
  labelCompare: 'コントラスト比較',
  labelPreview: '知覚的プレビュー',
  labelApcaRecs: 'APCA 推奨事項',
  labelBody: '本文テキスト（Body）',
  labelSmall: '小さいテキスト / キャプション',
  labelUi: 'UI / ボタン',
  statusYes: 'はい',
  statusNo: 'いいえ',
  wcagAAA: 'AAA 合格',
  wcagAA: 'AA 合格',
  wcagLarge: '大きいテキストのみ',
  wcagFail: '不合格',
  apcaExcellent: '優秀',
  apcaGood: '良好',
  apcaMinimal: '最低限',
  apcaPoor: '不十分',
  previewText: '視覚的な読みやすさは、数学だけではありません。光と影があなたの目と交わる感覚です。',
  wcagRatioLabel: 'WCAG 2.1 比率',
  apcaLcLabel: 'APCA Lc（WCAG 3）',
};

export const content: ToolLocaleContent<ReadabilityCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: 'コントラストとAPCAに関するリソース',
  bibliography: [
    { name: 'W3C: WCAG 3.0 ドラフト（Silver）', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/' },
    { name: 'Myndex: APCA リファレンスガイド', url: 'https://apcaw3.myndex.com/' },
    { name: 'MDN: アクセシビリティとカラーコントラスト', url: 'https://developer.mozilla.org/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '視覚的可読性チェッカー（WCAG vs APCA）', level: 2 },
    {
      type: 'paragraph',
      html: '新しい知覚的アクセシビリティ標準を使って、色とタイポグラフィが実際の読みやすさにどう影響するかを理解しましょう。WCAG 2.1は2008年のシンプルな数式を使用しています。<strong>APCA</strong>は人間の知覚を模倣した<strong>WCAG 3.0</strong>向けの新しいモデルです。',
    },
    { type: 'title', text: 'APCAの主なポイント', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>極性：</strong>ダークモードとライトモードでは知覚が異なることを考慮しています。',
        '<strong>フォントウェイト：</strong>タイポグラフィの太さに応じた具体的なコントラストレベル（Lc）を設定します。',
        '<strong>線形性：</strong>2008年の相対輝度モデルにある数学的な不正確さを修正します。',
      ],
    },
    { type: 'title', text: '推奨されるAPCAレベル', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Lc 90+：</strong>非常に小さいテキストや細いウェイトのテキストに最適。',
        '<strong>Lc 75：</strong>メインの本文テキストの標準。',
        '<strong>Lc 60：</strong>中程度のサイズのコンテンツを読めるようにするための最低基準。',
        '<strong>Lc 45：</strong>大きな要素や装飾的な要素の最低基準。',
      ],
    },
  ],
};

