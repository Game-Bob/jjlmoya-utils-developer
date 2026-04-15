import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UtmGeneratorUI } from '../ui';

const slug = 'utm-generator';
const title = 'Googleアナリティクス用UTMパラメータ生成器';
const description = 'デジタルマーケティングキャンペーン用の正確なトラッキングリンクを作成します。Googleアナリティクスやその他の分析ツールに最適化されています。';

const faqData = [
  {
    question: 'UTMパラメータを使用することはSEOに悪影響を与えますか？',
    answer: 'いいえ。カノニカル（canonical）タグを使用している限り、問題ありません。検索エンジンはUTMパラメータが分析用であることを理解しており、重複コンテンツとはなしません。',
  },
  {
    question: '内部リンクにUTMパラメータを使用すべきですか？',
    answer: 'いいえ、絶対に使用しないでください。内部リンクにUTMタグを付けると、Googleアナリティクスなどのツールでユーザーセッションが途切れてしまい、トラフィックデータが歪んでしまいます。',
  },
  {
    question: 'GoogleアナリティクスはUTMの大文字と小文字を区別しますか？',
    answer: 'はい。「google」、「Google」、「GOOGLE」は異なるソースとして扱われます。常に一貫性を保ち、できれば小文字のみを使用することをお勧めします。',
  },
];

const howToData = [
  { name: 'URLを入力', text: 'https:// を含むウェブサイトの完全なURLを入力します。' },
  { name: 'ソースを定義', text: 'トラフィックの発生元を指定します（google, facebook, newsletterなど）。' },
  { name: 'メディアを選択', text: 'チャネルの種類を選択します（cpc, email, social, organicなど）。' },
  { name: 'キャンペーン名を指定', text: 'マーケティング活動をグループ化するための識別可能な名前を割り当てます。' },
  { name: 'コピーして使用', text: '生成されたURLをコピーして、投稿、広告、メールの署名などで使用します。' },
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

const ui: UtmGeneratorUI = {
  labelUrl: 'ウェブサイトのURL (例: https://example.com) *',
  labelSource: 'キャンペーンのソース (例: google, newsletter) *',
  labelMedium: 'キャンペーンのメディア (例: cpc, email)',
  labelCampaign: 'キャンペーン名 (例: summer_offer)',
  labelTerm: 'キャンペーンのキーワード (例: buy_shoes)',
  labelContent: 'キャンペーンの内容 (例: banner_top)',
  labelGenerated: '生成されたURL:',
  btnCopy: 'リンクをコピー',
  btnCopied: 'コピー完了！',
  errorInvalid: '有効なURLを入力してください',
  errorInvalidUrl: '無効なURLです',
};

export const content: ToolLocaleContent<UtmGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献',
  bibliography: [
    { name: 'カスタム URL を使用してキャンペーン データを収集する - Google アナリティクス ヘルプ (2024)', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: 'キャンペーン URL タグ付けのベスト プラクティス - VWO ブログ (2023)', url: 'https://vwo.com/blog/utm-tagging-best-practices/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'UTM生成器：Googleアナリティクス用トラッキングパラメータ', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>UTM</strong>パラメータ（Urchin Tracking Module）は、ウェブトラフィックを追跡するためにURLの末尾に追加されるテキストラベルです。当社の生成器は、デジタルマーケティングキャンペーン用の追跡可能なリンクの作成を簡素化します。',
    },
    { type: 'title', text: '追跡可能なURLの5つの要素', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>キャンペーンソース：</strong>検索エンジン、ソーシャルネットワーク、またはトラフィックの発生源を特定します。例：google, newsletter, facebook。',
        '<strong>キャンペーンメディア：</strong>マーケティングチャネルを指します。例：cpc, email, social, banner, organic。',
        '<strong>キャンペーン名：</strong>キャンペーンの特定の名前です。例：summer_offer_2025, app_launch_v2。',
        '<strong>キャンペーンキーワード：</strong>有料検索の場合、入札したキーワードです。例：buy_sports_shoes。',
        '<strong>キャンペーン内容：</strong>A/Bテスト用。キャンペーン内の同様の要素を区別します。例：header_v1, sidebar_v2。',
      ],
    },
    { type: 'title', text: 'UTMタグ付けのベストプラクティス', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>大文字小文字の一貫性：</strong>ツールは「Google」、「GOOGLE」、「google」を区別します。重複を避けるために、常に小文字を使用してください。',
        '<strong>スペースを避ける：</strong>スペースは %20 になります。代わりにハイフン（-）やアンダースコア（_）を使用してください。',
        '<strong>内部リンクに使用しない：</strong>UTMトラッキングは外部トラフィック専用です。内部リンクに使用するとセッションが切れ、主要な指標が損なわれます。',
        '<strong>タグを記録する：</strong>不整合を防ぐために、使用したすべての組み合わせの記録を保存してください。',
      ],
    },
  ],
};

