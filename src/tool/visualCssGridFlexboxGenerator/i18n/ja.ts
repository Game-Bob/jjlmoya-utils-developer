import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VisualCssGridFlexboxGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'visual-css-grid-flexbox-generator';
const title = 'ビジュアルCSS Grid & Flexboxレイアウトジェネレーター';
const description = 'ビジュアルブロックを移動し、コンテナをリサイズし、配置を調整し、プリセットを使用してレスポンシブレイアウトを設計  -  クリーンなネイティブCSSをすぐにコピー。';

const howTo = [
  { name: 'プリセットまたはFlexbox/Gridを選択', text: 'レイアウトプリセット（navbar, cards, hero, sidebar, gallery）から始めるか、FlexboxとGridを手動で切り替えます。' },
  { name: 'レイアウトをリサイズ', text: '右下隅からコンテナをリサイズして、デザインが利用可能なスペースにどう反応するかテストします。' },
  { name: '配置コントロールを調整', text: '方向、折り返し、間隔、列数、justify-content、align-items、align-content、幅、高さ、アイテムサイズのスライダーとセレクトを使用します。' },
  { name: '本番対応CSSをコピー', text: '視覚的な結果が目的の構造と一致したら、生成されたCSSをコピーします。フレームワーク依存なし。' },
];

const faq = [
  { question: 'Flexboxの代わりにCSS Gridを使うべきタイミングは？', answer: '1次元レイアウトにはFlexboxを使用  -  ナビゲーションバー、ボタングループ、折り返しカード、中央揃えコンテンツ。行と列が共に重要な場合はGrid  -  ダッシュボード、ギャラリー、フォーム、構造化されたページセクション。' },
  { question: 'このジェネレーターでレスポンシブレイアウトを作成できますか？', answer: 'はい。生成されるCSSはネイティブのflex折り返しまたは繰り返しgrid列を使用します。ビジュアルキャンバスをリサイズして、異なるサイズでの間隔と配置をテストできます。' },
  { question: 'justify-contentとalign-itemsがgridとflexで異なる理由は？', answer: 'Flexboxは主軸と交差軸に沿ってアイテムを分散します。Gridは最初にアイテムをトラックに配置し、その中でコンテンツを整列させます。両モードを切り替えると、その違いがすぐに分かります。' },
  { question: '生成されたCSSはフレームワークに依存しますか？', answer: 'いいえ。結果は純粋なネイティブCSSです。プレーンHTML、Astro、React、Vue、Svelte、Web Componentsなど、標準CSSを受け入れるあらゆるプロジェクトで使用できます。' },
  { question: 'レイアウトプリセットの目的は？', answer: 'プリセットは一般的なレイアウトを加速し、ゼロから始めずに現実的な設定を確認できます。各プリセットは、実際のパターンに合わせてモード、方向、折り返し、配置、コンテナサイズを設定します。' },
];

const ui: VisualCssGridFlexboxGeneratorUI = {
  modeLabel: 'レイアウトモード',
  flexMode: 'Flexbox',
  gridMode: 'Grid',
  canvasLabel: 'インタラクティブレイアウトキャンバス',
  addItem: 'アイテム追加',
  removeItem: 'アイテム削除',
  resetLayout: 'レイアウトをリセット',
  gapLabel: '間隔',
  columnsLabel: 'Grid列数',
  widthLabel: 'コンテナ幅',
  heightLabel: 'コンテナ高さ',
  justifyLabel: '水平配置',
  alignLabel: '垂直配置',
  itemSizeLabel: 'アイテムサイズ',
  codeTitle: '生成されたCSS',
  copyCode: 'CSSをコピー',
  copied: 'コピーしました！',
  dragHint: '隅からキャンバスをリサイズ  -  CSSがライブ更新！',
  outputLabel: '生成されたCSS出力',
  justifyStart: '先頭',
  justifyCenter: '中央',
  justifyEnd: '末尾',
  justifyBetween: 'Space between',
  justifyAround: 'Space around',
  justifyEvenly: 'Space evenly',
  alignStart: '先頭',
  alignCenter: '中央',
  alignEnd: '末尾',
  alignStretch: 'ストレッチ',
  alignBaseline: 'ベースライン',
  itemPrefix: 'ブロック',
  directionLabel: '方向',
  directionRow: '行 →',
  directionRowReverse: '← 行 逆',
  directionColumn: '列 ↓',
  directionColumnReverse: '↑ 列 逆',
  wrapLabel: '折り返し',
  wrapNoWrap: '折り返しなし',
  wrapWrap: '折り返す',
  wrapWrapReverse: '逆折り返し',
  alignContentLabel: 'コンテンツ配置',
  alignContentStart: '先頭',
  alignContentCenter: '中央',
  alignContentEnd: '末尾',
  alignContentBetween: 'Space between',
  alignContentAround: 'Space around',
  alignContentEvenly: 'Space evenly',
  alignContentStretch: 'ストレッチ',
  presetsLabel: 'プリセット',
  presetNavbar: 'ナビバー',
  presetCards: 'カード',
  presetHero: 'ヒーロー',
  presetSidebar: 'サイドバー',
  presetGallery: 'ギャラリー',
  shakeLimit: '最低2つのアイテムが必要です！',
  spanHint: 'Gridモードでアイテムをダブルクリックして列スパン（1-3）を変更',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<VisualCssGridFlexboxGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'CSSレイアウトジェネレーター FAQ',
  faq,
  bibliographyTitle: 'CSS GridとFlexboxのリファレンス',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'プロパティを暗記せず、動作を見てCSSレイアウトを構築', level: 2 },
    { type: 'paragraph', html: 'CSS GridとFlexboxは、固定座標ではなくレイアウト関係を記述するため強力です。難しいのは、<strong>gap</strong>、<strong>justify-content</strong>、<strong>align-items</strong>、方向、折り返し、トラック、利用可能なスペースがどのように相互作用するかを予測することです。このジェネレーターは、抽象的なプロパティをプリセットとリアルタイムCSSを備えた生きたプレイグラウンドに変えます。' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: 'クイックスタートプリセット', icon: 'mdi:view-grid-plus' }, { value: 'ライブ', label: '変更ごとにCSSが更新', icon: 'mdi:code-braces' }, { value: '0', label: 'CSSのフレームワーク依存', icon: 'mdi:language-css3' }] },
    { type: 'title', text: 'Flexbox vs Grid: 配置を調整する前にモデルを選択', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: 'Flexbox', description: 'アイテムが行または列に並び、自然に折り返す1次元フローに最適。', icon: 'mdi:format-align-justify', highlight: true, points: ['ナビゲーションバー', 'ボタングループ', '折り返しカード', '中央揃えコンテンツ'] }, { title: 'CSS Grid', description: '行と列がコンポジションの形状を定義する2次元構造に最適。', icon: 'mdi:grid', points: ['ダッシュボード', 'ギャラリー', 'フォーム', '編集セクション'] }] },
    { type: 'title', text: '各コントロールが教えること', level: 3 },
    { type: 'table', headers: ['コントロール', 'CSSプロパティ', '注目点'], rows: [['方向', '<code>flex-direction</code>', '主軸の流れ方  -  行から列に切り替えるとレイアウト全体のロジックが変わる。'], ['折り返し', '<code>flex-wrap</code>', 'アイテムが1行に留まるか、スペースが尽きると新しい行に流れるか。'], ['間隔', '<code>gap</code>', '端で崩れないアイテム間のスペース。'], ['水平配置', '<code>justify-content</code>', '空きスペースが主軸に沿ってどのように分配されるか。'], ['垂直配置', '<code>align-items</code>', 'アイテムが交差軸上でどのように配置されるか。'], ['コンテンツ配置', '<code>align-content</code>', '折り返されたflex行またはgrid行が追加の交差軸スペースをどのように分配するか。'], ['列数', '<code>grid-template-columns</code>', 'アイテムが次の行に移動する前にgridが作成する等しいトラックの数。'], ['コンテナサイズ', '<code>width</code>と<code>min-height</code>', '利用可能なスペースが変わったときに同じCSSがどのように反応するか。']] },
    { type: 'tip', title: 'まずスケール、次に最適化', html: 'まずキャンバスを現実的なサイズにスケールします。次に間隔と配置を調整します。これにより、生成されたCSSが実際の条件下で機能します。' },
    { type: 'title', text: '適応可能なクリーンなCSS', level: 3 },
    { type: 'code', ariaLabel: '生成CSSの例', code: '.layout-playground {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 24px;\n  justify-content: center;\n  align-items: center;\n}' },
    { type: 'diagnostic', variant: 'info', title: 'ビジュアルスケーリングが重要な理由', html: '多くのレイアウトバグは、コンテナがより狭く、より高く、または異なるアイテム数で満たされたときにのみ現れます。CSSがライブ更新されている間にスケーリングすることで、ぎこちない折り返しや脆弱な配置選択を発見できます。' },
    { type: 'summary', title: '推奨ワークフロー', items: ['1次元フローにはプリセットまたはFlexbox、2次元構造にはGridを選択。', 'CSSをコピーする前にキャンバスをスケールして、レイアウトが現実的な制約に耐えられるように。', '各子にマージンを追加する代わりに、アイテム間の間隔にgapを使用。', '生成されたCSSを出発点としてコピーし、プロジェクト固有のセレクタとメディアクエリを追加。'] },
  ],
};
