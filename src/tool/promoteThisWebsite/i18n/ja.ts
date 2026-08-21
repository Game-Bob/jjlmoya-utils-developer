import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromoteThisWebsiteUI } from '../ui';
import { bibliography } from '../bibliography';

const localized = {
    slug: 'promote-this-website',
    title: 'このサイトを宣伝する',
    description: 'スペイン語のjjlmoya.esと国際向けGameBob.devのための社内プロパガンダデスクです。Bobがフィードを恥ずかしいと思う前に、自分のページのスクリーンショットをソーシャル画像に変換します。',
    faqTitle: '猫を怒らせずにこのサイトを宣伝する',
    bibliographyTitle: '作戦対象のページ',
    faq: [
      { question: 'このツールは誰のためのものですか？', answer: 'スペイン語のjjlmoya.esと国際向けGameBob.devのページを宣伝するためのものです。それ以外の人は窓から見ていてください。' },
      { question: 'スクリーンショットを直接貼り付けられますか？', answer: 'はい。コピーしてCtrl+Vを押すとツールのレイヤーになります。猫の委員会も正しい形式の証拠なら受け取ります。' },
      { question: '本番URLを貼るとどうなりますか？', answer: 'ページのメタタイトルを読み、ブランドを選び、Open Graph画像を読み込みます。slugが昇進することはありません。' },
      { question: 'なぜブランドが2つあるのですか？', answer: 'jjlmoya.esはスペイン語ページ、GameBob.devは国際向けページです。猫たちはその違いを無視します。' },
      { question: '画像はアップロードされますか？', answer: 'いいえ。画像はブラウザ内に残り、合成もローカルで行われます。外へ出るのは自分でダウンロードしたPNGだけです。' },
    ],
    howTo: [
      { name: 'スクリーンショットを貼る', text: 'jjlmoya.esまたはGameBob.devの画像をCtrl+Vで貼ります。委員会は自分の帝国の証拠を求めています。' },
      { name: 'ブランドを選ぶ', text: 'スペイン語ならjjlmoya.es、国際向けならGameBob.devを選びます。猫はすでに建物を所有しています。' },
      { name: '画像を配置する', text: 'スクリーンショット、タイトル、ロゴ、背景、マスコットを意図的に見えるように配置します。' },
      { name: 'PNGを書き出す', text: 'Bobが手柄を持っていく前に、希望のサイズでPNGをダウンロードします。' },
    ],
    seoTitle: 'jjlmoyaとGameBobの公式プロパガンダデスク',
    seoIntro: 'これはbrandingという言葉を覚えたばかりの人向けの一般的なSNS合成ツールではありません。猫が監督する中、jjlmoya.esとGameBob.devのページを宣伝するためのものです。',
    seoBody: '実際のスクリーンショットを貼るか本番URLを読み込みます。slugから推測せずページタイトルを読み、合成中も公式のOpen Graph画像を表示します。',
    seoTip: 'jjlmoya.esまたはGameBob.devの本番URLから始めてください。タイトルやブランドや画像が読み込めなければ、委員会はネット、人間、最後に猫を責めます。',
};
const ui: PromoteThisWebsiteUI = {
    urlLabel: 'ウェブサイトURL', urlPlaceholder: 'https://www.example.com/tools/example/', applyUrl: '適用',
    formatLabel: 'フォーマット', panoramic: 'パノラマ · 1536 × 1024', instagram: 'Instagram · 1080 × 1350', square: '正方形 · 1080 × 1080', story: 'ストーリー · 1080 × 1920',
    titleLabel: 'タイトル', titlePlaceholder: '画像に入れる短いタイトル', titleSizeLabel: 'タイトルの文字サイズ', titleBoxSizeLabel: 'タイトル枠のサイズ', titleStyleLabel: 'タイトルデザイン',
    brandLabel: 'ブランド', brandStyleLabel: 'ブランドデザイン', advancedLabel: '高度な合成', assetsLabel: '素材', backgroundLabel: '背景', toolLabel: 'ツールのスクリーンショット', logoLabel: 'ロゴ', mascotLabel: 'マスコット',
    layersLabel: 'レイヤー', backgroundLayer: '背景', toolLayer: 'ツール', logoLayer: 'ロゴ', mascotLayer: 'マスコット', titleLayer: 'タイトル', reset: 'リセット', download: 'PNGをダウンロード', activeLayer: '選択中のレイヤー',
    canvasHint: 'キャンバス上でレイヤーを直接ドラッグできます。Ctrl+Vでスクリーンショットを貼り付けます。', pasted: 'スクリーンショットをツールレイヤーとして貼り付けました。', urlApplied: 'URLを適用しました。タイトルを調整し、宣伝するスクリーンショットを追加してください。', urlLoading: 'ページタイトルと公式画像を読み込んでいます...', urlFailed: 'ページを読み込めませんでした。URLを確認するか素材を手動で追加してください。', fileLoaded: '素材を読み込みました。',
    titlePaper: 'エディトリアルペーパー', titleRibbon: '折りたたみリボン', titleInk: 'インクの飛沫', titlePoster: '夜のポスター', titleTicket: '切符の切れ端', titleMarker: 'マテリアル下線', titleSplit: '分割ブロック', titleCapsule: 'ミニマルカプセル', titleCorner: 'エディトリアルコーナー', titleVertical: '縦アクセント',
    brandPlain: 'プレーンマーク', brandPlaque: 'セラミックプレート', brandTicket: '入場券', brandStamp: 'ラバースタンプ', brandNeon: 'ネオンサイン', brandRibbon: 'シグナルリボン', brandCorner: 'エディトリアルコーナー', brandPixel: 'ピクセルブロック', brandHalo: 'ソフトハロー', brandEditorial: 'エディトリアルライン', defaultTool: 'ツールのスクリーンショットを貼り付け',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: localized.faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};
const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: localized.title,
  description: localized.description,
  step: localized.howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};
const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: localized.title,
  description: localized.description,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<PromoteThisWebsiteUI> = {
  slug: localized.slug,
  title: localized.title,
  description: localized.description,
  ui,
  faqTitle: localized.faqTitle,
  faq: localized.faq,
  bibliographyTitle: localized.bibliographyTitle,
  bibliography,
  howTo: localized.howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: localized.seoTitle, level: 2 },
    { type: 'paragraph', html: localized.seoIntro },
    { type: 'stats', columns: 3, items: [{ value: '2', label: ui.brandLabel, icon: 'mdi:domain' }, { value: '4', label: ui.formatLabel, icon: 'mdi:crop' }, { value: '0', label: ui.activeLayer, icon: 'mdi:cat' }] },
    { type: 'title', text: localized.title, level: 3 },
    { type: 'paragraph', html: localized.seoBody },
    { type: 'title', text: localized.faqTitle, level: 3 },
    { type: 'paragraph', html: localized.seoBody },
    { type: 'table', headers: [ui.toolLayer, ui.titleLayer, ui.brandLabel], rows: [[ui.toolLabel, ui.titleLabel, ui.logoLabel]] },
    { type: 'tip', title: localized.faqTitle, html: localized.seoTip },
  ],
};
