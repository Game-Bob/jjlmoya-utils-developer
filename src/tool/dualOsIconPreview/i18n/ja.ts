import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { ToolLocaleContent, SEOSection } from '../../../types';
import type { DualOsIconPreviewUI } from '../ui';

interface LocalizedCopy {
  locale: string;
  slug: string;
  title: string;
  description: string;
  faqTitle: string;
  bibliographyTitle: string;
  ui: DualOsIconPreviewUI;
  faq: { question: string; answer: string }[];
  howTo: { name: string; text: string }[];
  seo: SEOSection[];
}

function createDualOsIconPreviewContent(copy: LocalizedCopy): ToolLocaleContent<DualOsIconPreviewUI> {
  const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: copy.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
  const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: copy.title, description: copy.description, step: copy.howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
  const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: copy.title, description: copy.description, applicationCategory: 'DesignApplication', operatingSystem: 'iOS, Android', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: copy.locale };
  return { slug: copy.slug, title: copy.title, description: copy.description, ui: copy.ui, faqTitle: copy.faqTitle, faq: copy.faq, bibliographyTitle: copy.bibliographyTitle, bibliography, howTo: copy.howTo, schemas: [appSchema, faqSchema, howToSchema], seo: copy.seo };
}

const title = 'iOS と Android のアプリアイコン監査';
const description = 'ロゴをアップロードして iPhone と Pixel での表示を監査します。iOS の表示モード、Android のアダプティブマスク、安全な余白、テーマアイコンをブラウザで確認できます。';
const ui: DualOsIconPreviewUI = {
  labelUpload: 'ロゴをアップロード', uploadAction: '画像を選択', uploadHint: '同じマークを両方のスマートフォンに表示', dropHint: 'PNG、JPG、WEBP、SVG', labelAppName: 'アプリ名', appNamePlaceholder: 'アイコンの下に表示', labelBrandColor: 'システムのアクセント色', labelIosAppearance: 'iOS の表示', iosAppearanceHint: 'ホーム画面のすべてのモードで確認', iosDefault: '標準', iosDark: 'ダーク', iosClear: 'クリア', iosTinted: '色合い', labelAndroidShape: 'Android アダプティブマスク', androidShapeHint: 'ランチャーによって外形が変わります', androidCircle: '円形', androidSquircle: 'スクワークル', androidRounded: '角丸', androidTeardrop: 'ティアドロップ', labelAndroidTheme: 'テーマアイコンをプレビュー', androidThemeHint: 'システムの色合いで全アイコンを再着色し、シルエットを保ちます', iosDeviceLabel: 'iPhone', androidDeviceLabel: 'Pixel', iosHomeLabel: 'ホーム画面', androidHomeLabel: 'ランチャー', safeZoneLabel: 'iOS マスク', adaptiveLayerLabel: 'アダプティブアイコン', monochromeLabel: 'テーマレイヤー', nameFallback: 'あなたのアプリ', emptyLogo: 'あなたのロゴ', fileError: '続行するには画像ファイルを選択してください。', statusReady: '準備完了', statusNeedsReview: 'ロゴを追加', stageKicker: '2つの端末コンテキストを1つの監査で確認', stageNote: 'すべての表示を実際の文脈で確認', auditTitle: 'ロゴ監査', auditHint: '読み込んだ画像をローカルで測定', auditWaiting: 'ロゴをアップロード', auditNotChecked: '未確認', auditFile: 'キャンバス', auditAspect: 'アスペクト比', auditResolution: '解像度', auditIosMask: 'iOS マスク余白', auditAndroidZone: 'Android 安全領域', auditMargin: '最小端余白', auditTransparency: 'アルファ端', auditTransparent: '透明', auditFullBleed: '全面', statusPass: '合格', statusReview: '要確認',
};
const faq = [
  { question: 'このアプリアイコン監査では何を確認できますか？', answer: '画像の寸法、アスペクト比、解像度、透明な端の余白、iOS マスクの余白、Android アダプティブアイコンの安全領域を確認できます。ランチャーで表示されるアプリ名も確認できます。' },
  { question: 'iPhone と Android を同時に表示できますか？', answer: 'できます。同じロゴとアプリ名を iPhone のホーム画面と Pixel のランチャーに同時に表示し、両方の端末コンテキストを保ったまま確認できます。' },
  { question: 'Android のテーマアイコンモードは何をしますか？', answer: '読み込んだアイコン、周囲のアプリ、ドックを含む Android のすべてのアイコンに、1つのシステム色とモノクロ処理を適用します。元の色がなくても形が読めるか確認できます。' },
  { question: 'ロゴがブラウザの外へ送信されますか？', answer: '送信されません。画像はブラウザ内でローカルに読み込まれ、測定されます。サーバーへアップロードしません。' },
  { question: 'アプリストアへの提出にそのまま使えますか？', answer: 'そのままでは使えません。これはデザインとアセットのローカル監査です。最終書き出し、ランチャーの動作、ストア審査には Apple と Android のツール、実機またはエミュレーターを使用してください。' },
];
const howTo = [
  { name: 'ロゴをアップロード', text: 'PNG、JPG、WEBP、SVG のロゴを選択します。同じ画像が2つの端末コンテキストに表示されます。' },
  { name: 'アプリ名を入力', text: 'ランチャーのラベルを入力し、周囲の実際のアプリ名の横でも読みやすいか確認します。' },
  { name: 'iOS の表示を確認', text: '標準、ダーク、クリア、色合いを切り替え、コントラスト不足や消える細部を探します。' },
  { name: 'Android のマスクを確認', text: '円形、スクワークル、角丸、ティアドロップを試します。テーマアイコンを有効にしてランチャー全体のモノクロ表示も確認します。' },
  { name: '監査結果に対応', text: '余白を増やし、細部を簡略化し、コントラストを改善してから最終アセットを準備します。' },
];

export const content = createDualOsIconPreviewContent({ locale: 'ja', slug: 'dual-ios-android-app-icon-preview', title, description, faqTitle: 'よくある質問', bibliographyTitle: '参考資料', ui, faq, howTo, seo: [
  { type: 'title', text: '公開前にアプリアイコンを監査する', level: 2 },
  { type: 'paragraph', html: '1つのロゴをアップロードし、iPhone のホーム画面と Pixel のランチャーで同時に確認します。このアプリアイコン監査では、画像のキャンバス、アスペクト比、解像度、透明な端の余白、iOS マスクの余白、Android アダプティブアイコンの安全領域を測定します。実際のアプリ名も入力してください。アイコン自体が問題なくても、ランチャーのラベルが読みにくくなることがあります。' },
  { type: 'title', text: 'この監査で確認できること', level: 3 },
  { type: 'list', items: ['キャンバスと比率: プラットフォームのツールが処理を追加する前に、元画像が正方形か確認します。', '解像度: 大きなランチャー表示でぼやける小さな元ファイルを見つけます。', '端の余白: 重要な形や文字が iOS マスクや Android 安全領域に近すぎないか確認します。', 'ランチャーのラベル: 周囲のアイコンと同じ大きさでアプリ名を確認し、不自然な改行を見つけます。', 'Android テーマ処理: 対象、周囲のアイコン、ドックにモノクロのシステム色を適用し、色に隠れた弱い形を確認します。'] },
  { type: 'title', text: '2つの端末コンテキストを同時に見る', level: 3 },
  { type: 'paragraph', html: '2つのスマートフォン表示を1つの監査画面として使います。iOS の標準、ダーク、クリア、色合いを切り替え、Android の円形、スクワークル、角丸、ティアドロップも試してください。同じアセットが複数のランチャー画面でどう見えるかを知ることが目的であり、どちらかのプラットフォームを競わせることが目的ではありません。' },
  { type: 'title', text: 'この監査で保証できないこと', level: 3 },
  { type: 'paragraph', html: 'これはブラウザで行うデザインとアセットの確認であり、Xcode、Android Studio、実機、エミュレーターの代わりではありません。ランチャー、OS のバージョン、メーカーによってマスク、余白、コントラスト、テーマアイコンの規則が異なる場合があります。早い段階でリスクを見つけた後、対応する環境で最終アセットを検証してください。' },
  { type: 'tip', title: '実用的な監査手順', html: 'すべての表示モードで、実際に使われる最小サイズのロゴを確認します。1つの背景、マスク、元の色でしか機能しない場合は、図形を簡略化するか余白を増やしてから公開します。' },
] });
