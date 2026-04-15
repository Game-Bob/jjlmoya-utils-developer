import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlCleanerUI } from '../ui';

const slug = 'url-tracking-cleaner';
const title = 'URLトラッキングクリーナー：UTM・FBCLID・GCLIDを削除';
const description = 'URLに含まれるトラッキングパラメータや広告パラメータを自動で除去します。クリーンなリンクを共有して、デジタルプライバシーをすぐに守りましょう。';

const faqData = [
  {
    question: 'このツールはどのようなトラッキングパラメータを削除しますか？',
    answer: '代表的なトラッキングパラメータを自動で検出・削除します。UTMパラメータ（utm_source、utm_mediumなど）、広告クリックID（fbclid、gclid、msclkid）、メールマーケティングキャンペーンの識別子（mc_cid、_hsenc）などが対象です。',
  },
  {
    question: 'ウェブサイトの機能に影響はありますか？',
    answer: '基本的にありません。これらのパラメータはほぼ分析・マーケティング目的にのみ使われています。削除してもページは通常どおり表示されますが、サイトオーナーはあなたがどこからアクセスしたかを追跡できなくなります。',
  },
  {
    question: 'ここでリンクを処理しても安全ですか？',
    answer: 'もちろんです。他のすべてのツールと同様、処理は完全にクライアントサイドで行われます。リンクがサーバーに送信されることは一切なく、すべてお使いのブラウザ内でプライベートに完結します。',
  },
  {
    question: 'なぜFacebookのリンクはこんなに長いのですか？',
    answer: 'Facebookはプラットフォームから外部へ出るすべてのリンクに「fbclid」というパラメータを付加します。これにより、サードパーティ広告をブロックしていてもあなたの他サイトでの行動を追跡できるようになっています。',
  },
];

const howToData = [
  { name: 'URLを貼り付ける', text: 'トラッキングパラメータを含む完全なURLを入力してください' },
  { name: '「クリーン」をクリック', text: 'ツールが自動的にURLを解析します' },
  { name: '結果を確認する', text: 'クリーンなURLと削除されたパラメータの一覧が表示されます' },
  { name: 'コピーして共有する', text: 'クリーンなURLをメール、SNS、メッセージで使用してください' },
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

const ui: UrlCleanerUI = {
  labelInput: 'トラッキングパラメータを含むURLを貼り付けてください',
  btnClean: 'クリーンにする',
  labelCleaned: 'クリーンなURL',
  labelRemoved: '削除されたトラッカー',
  countLabel: '削除されたパラメータ数',
  reductionLabel: '長さの削減',
  noneDetected: '一般的なトラッキングパラメータは検出されませんでした。',
  errorInvalid: '有効なURLを入力してください。',
  btnCopy: 'コピー',
  btnCopied: 'コピー済み',
};

export const content: ToolLocaleContent<UrlCleanerUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: 'プライバシーとウェブトラッキングに関するリソース',
  bibliography: [
    { name: 'Electronic Frontier Foundation (EFF): オンライントラッキングガイド', url: 'https://www.eff.org/issues/online-behavioral-tracking' },
    { name: 'Google Analytics: UTMパラメータのドキュメント', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: 'ウェブプライバシー：クリックIDの影響', url: 'https://www.w3.org/community/web-advertising/wiki/Click_Identifiers' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'URLトラッキングクリーナー：UTM・FBCLID・GCLIDを削除', level: 2 },
    {
      type: 'paragraph',
      html: 'リンクから見えないトラッカーを取り除いて、クリーンかつプライベートにプロフェッショナルに共有しましょう。URLに含まれる謎のコードが何を意味するのか、正体を確認してみてください。',
    },
    { type: 'title', text: 'URLトラッキングクリーナーとは？なぜ必要なのか？', level: 3 },
    {
      type: 'paragraph',
      html: '友人に送ろうとリンクをコピーしたとき、必要以上に3倍も長くなっていると気づいたことはありませんか？その余分な「ノイズ」がトラッキングパラメータです。<strong>トラッキングクリーナー</strong>は、大手プラットフォームがあなたのクリックごとに埋め込む広告・追跡情報をURLから取り除くためのツールです。',
    },
    { type: 'title', text: '代表的なトラッキングパラメータ', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>UTM（Google Analytics）：</strong>utm_source、utm_medium、utm_campaignによるキャンペーン追跡',
        '<strong>FBCLID：</strong>Facebookのクリック識別子。Cookie制限を回避するために使われる',
        '<strong>GCLID / DCLID：</strong>Google Click ID。訪問をGoogle Ads キャンペーンに紐付ける',
        '<strong>MSCLKID：</strong>Microsoft AdvertisingとBingのクリック識別子',
        '<strong>HubSpot & Mailchimp：</strong>_hsenc、mc_cidなどのマーケティングオートメーションパラメータ',
        '<strong>LinkedIn & その他：</strong>li_fat_idなどのSNSトラッカー',
      ],
    },
  ],
};

