import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssBoxShadowGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'css-box-shadow-generator';
const title = 'CSS Box Shadow Generator';
const description = 'レイヤー状のCSSシャドウをライブプレビュー、スライダー、カラーピッカー、プリセットで視覚的にデザイン。クリーンなネイティブCSSを即座にコピー。';

const howTo = [
  { name: 'プリセットを選ぶかゼロから始める', text: 'Card、Float、Inset、Glow、Layeredのプリセットから選ぶか、スライダーでデフォルトの影を調整します。' },
  { name: 'レイヤーを追加して重ねる', text: '+をクリックしてレイヤーを追加（最大5つ）。各レイヤーを選択してオフセット、ぼかし、スプレッド、色、不透明度を編集します。' },
  { name: 'インセットと背景を切り替え', text: '内側の影にはinsetをチェック。プレビューの背景色を変更します。' },
  { name: 'CSSをコピー', text: 'プレビューがデザインと一致したら、生成されたCSSをコピーしてスタイルシートに貼り付けます。' },
];

const faq = [
  { question: '1つの要素に複数の影を使えますか？', answer: 'はい。CSSはカンマ区切りのbox-shadow値をサポートしています。このツールでは独立したコントロールで最大5つのレイヤーを重ねられます。' },
  { question: '負のスプレッド値は何をしますか？', answer: '負のスプレッドはぼかしの前に影を内側に縮めます。微妙な浮遊効果に便利です。' },
  { question: 'insetオプションの用途は？', answer: 'inset影は要素の境界の内側に描画され、くぼんだ外観を作ります。フォーム入力や押し込まれたカードに最適です。' },
  { question: '生成されたCSSにフレームワーク依存はありますか？', answer: 'いいえ。結果は純粋なネイティブCSSです。標準CSSを使用するあらゆるプロジェクトで使用できます。' },
];

const ui: CssBoxShadowGeneratorUI = {
  offsetXLabel: 'オフセットX',
  offsetYLabel: 'オフセットY',
  blurLabel: 'ぼかし',
  spreadLabel: 'スプレッド',
  opacityLabel: '不透明度',
  insetLabel: '内側',
  addLayer: 'レイヤー追加',
  removeLayer: 'レイヤー削除',
  resetAll: 'リセット',
  codeTitle: '生成されたCSS',
  copyCode: 'CSSをコピー',
  copied: 'コピーしました！',
  previewLabel: 'プレビュー',
  presetCard: 'Card',
  presetFloat: 'Float',
  presetInset: 'Inset',
  presetGlow: 'Glow',
  presetLayered: 'レイヤー',
  presetsLabel: 'プリセット',
  layerPrefix: 'レイヤー',
  bgColorLabel: '背景',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<CssBoxShadowGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'CSSボックスシャドウジェネレーター FAQ',
  faq,
  bibliographyTitle: 'CSS Box-Shadow リファレンス',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: '値を推測せずにCSSシャドウを視覚的にデザイン', level: 2 },
    { type: 'paragraph', html: '<strong>box-shadow</strong>を手動で調整するのは面倒です。このビジュアルジェネレーターを使えば、複数の影を重ねてライブで確認し、本番対応のCSSをコピーできます。' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: '要素あたりの影レイヤー', icon: 'mdi:layers' }, { value: 'ライブ', label: '変更ごとにプレビュー更新', icon: 'mdi:eye' }, { value: '5', label: 'クイックプリセット', icon: 'mdi:star' }] },
    { type: 'title', text: '複数の影を重ねてリアルな奥行きを', level: 3 },
    { type: 'paragraph', html: '実際の影は均一なぼかしではありません。要素の近くにタイトな影を、より柔らかく広い影と重ねることで自然な奥行きが生まれます。<strong>+</strong>でレイヤーを追加できます。' },
    { type: 'table', headers: ['コントロール', 'CSS値', '効果'], rows: [['オフセットX', '1番目の長さ', '水平方向の変位。'], ['オフセットY', '2番目の長さ', '垂直方向の変位。'], ['ぼかし', '3番目の長さ', 'ぼかしの半径。'], ['スプレッド', '4番目の長さ', '影を拡大または縮小。'], ['色と不透明度', 'rgba()', '独立した不透明度の影の色。'], ['内側', 'inset', '要素の境界内に影を描画。']] },
    { type: 'summary', title: '推奨ワークフロー', items: ['プリセットから始める。', 'レイヤーを追加してリアルな奥行きを。', '浮遊カード効果には負のスプレッドを使用。', '生成されたCSSをコピーして貼り付け。'] },
  ],
};
