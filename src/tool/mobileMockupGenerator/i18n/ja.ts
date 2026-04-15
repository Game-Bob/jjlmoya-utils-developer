import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileMockupGeneratorUI } from '../ui';

const slug = 'mobile-mockup-generator';
const title = 'App Store向けモバイルモックアップジェネレーター。iPhoneとGoogle Pixel対応';
const description = 'App StoreとGoogle Play向けのプロフェッショナルなプレゼンテーションを作成。カスタム背景、パノラマレイアウト、高解像度一括エクスポートに対応したiPhoneとPixelのモックアップ。';

const faqData = [
  { question: 'これらのスクリーンショットはApp StoreとGoogle Playで有効ですか？', answer: 'はい、生成された画像はアプリストアの比率と品質要件を満たしています。エクスポート前に適切なデバイス（iOSにはiPhone、AndroidにはPixel）を選ぶだけで大丈夫です。' },
  { question: 'オリジナルの背景画像を使用できますか？', answer: 'もちろんです。プレミアムグラデーションライブラリに加え、コンピューターから任意の画像をアップロードしてモックアップの背景として使用できます。' },
  { question: '商用利用は無料ですか？', answer: 'はい、生成したモックアップは商業プロジェクト、ポートフォリオ、プレゼンテーションに費用なし・透かしなしで使用できます。' },
  { question: 'スクリーンショットはサーバーに保存されますか？', answer: 'いいえ。ジェネレーターはブラウザ内で完全にローカル動作します。プライベートな画像がコンピューターの外に出ることは一切ありません。' },
];

const howToData = [
  { name: 'スクリーンショットをアップロード', text: '紹介したいモバイルアプリのスクリーンショットをドラッグするか選択してください。' },
  { name: 'デバイスを選択', text: 'ターゲットストアに応じてスマートフォンモデル（iPhone 15 Pro MaxまたはGoogle Pixel 8）を選択します。' },
  { name: '環境をカスタマイズ', text: '背景、デバイスの角度を調整し、マーケティングテキストを追加してレイアウトを選択します。' },
  { name: 'HDでダウンロード', text: 'アプリストアへのアップロードに対応した高解像度WebP形式ですべてのモックアップをエクスポートします。' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'DesignApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  inLanguage: 'ja',
};

const ui: MobileMockupGeneratorUI = {
  labelUpload: 'スクリーンショットをアップロード',
  dropHint: 'ここに画像をドラッグ',
  dropFormats: 'PNG、JPGまたはWEBP',
  btnMassReplace: '一括置換（バッチ）',
  massReplaceHint: 'プリセットとテキストを維持したまま現在の画像を置換します。素早い繰り返し作業に最適です。',
  labelSettings: 'グローバル設定',
  labelDevice: 'デバイス',
  labelFont: 'フォント',
  labelBackground: '背景',
  titleSwapColors: '色を入れ替え',
  labelAngle: '角度',
  labelSafeArea: 'セーフエリア（上下）',
  labelSafeAreaColor: 'エリアの色',
  emptyTitle: '画像がありません',
  emptySubtitle: 'スクリーンショットをアップロードしてデザインを始めましょう',
  btnClearAll: 'キャンバスをクリア',
  btnExport: 'すべてエクスポート（.zip）',
  cardTitleDuplicate: 'シーンを複製',
  cardTitleReplace: '現在のスクリーンショットを置換',
  cardSectionLayouts: 'マスターレイアウト',
  cardSectionBranding: 'ブランディング＆コピー',
  cardTitleResetText: 'テキストをリセット',
  cardLabelColor: 'カラー',
  cardTextPlaceholder: 'コピーをここに入力...',
  cardSectionDevice: 'デバイスレイアウト',
  cardTitleResetDevice: '位置をリセット',
  cardSectionScene: 'プロップス＆背景',
  cardBtnSpecialBg: 'スペシャル背景',
  cardBtnDeleteScene: 'シーンを削除',
  cardRangeLabelSize: 'サイズ',
  cardRangeLabelX: 'X軸',
  cardRangeLabelY: 'Y軸',
  cardRangeLabelRotation: '回転',
  cardRangeLabelScale: 'スケール',
  presetClassic: 'クラシック',
  presetMobileBottom: 'モバイル下部',
  presetMobileTop: 'モバイル上部',
  presetFocus: 'フォーカス',
  presetDynamic: 'ダイナミック',
  presetSplitLeft: '左分割',
  presetSplitRight: '右分割',
  presetImageLeft: '画像左',
  presetImageRight: '画像右',
  confirmClear: 'すべてのモックアップを削除してよろしいですか？',
  processingExport: '処理中...',
  exportDone: '完了！',
};

export const content: ToolLocaleContent<MobileMockupGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考資料',
  bibliography: [
    { name: 'Apple App Store Screenshot Requirements', url: 'https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications' },
    { name: 'Google Play Screenshot Requirements', url: 'https://support.google.com/googleplay/android-developer/answer/9866151' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'スクリーンショットを次のレベルへ', level: 2 },
    { type: 'paragraph', html: '平凡なスクリーンショットで終わらせないでください。このモックアップツールを使えば、開発者やデザイナーがPhotoshopやFigmaなしで高インパクトなビジュアルアセットを作れます。' },
    { type: 'title', text: 'マスターレイアウトのパワー', level: 3 },
    { type: 'grid', columns: 2 },
    { type: 'card', title: 'App Store & Google Play', html: '<p>コンバージョン率を最適化しましょう。iPhone 15 Pro MaxとPixel 8のモックアップは、アプリストア掲載の世界標準です。</p>' },
    { type: 'card', title: 'ピッチデック＆マーケティング', html: '<p>説得力を持ってアイデアを伝えましょう。投資家向けプレゼン、SNSキャンペーン、プロフェッショナルなUI/UXデザインポートフォリオに最適です。</p>' },
    { type: 'title', text: 'プロフェッショナルなワークフロー', level: 3 },
    { type: 'tip', html: '「左分割」と「右分割」のプリセットを使うと、InstagramカルーセルやApp Storeのスクリーンショットで画像がシームレスにつながるモックアップを作成できます。' },
  ],
};

