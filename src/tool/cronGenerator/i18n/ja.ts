import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CronGeneratorUI } from '../ui';

const slug = 'cron';
const title = 'オンラインCronエクスプレッション・ジェネレーター：翻訳とビジュアライザー';
const description =
  'LinuxのCronエクスプレッションを生成するための無料のビジュアルツールです。「* * * * *」を人間が理解できる言葉に翻訳し、次回の実行日時5件をリアルタイムで表示します。';

const faqData = [
  {
    question: 'Cronエクスプレッションとは何ですか？',
    answer:
      'Unix系システム（Linux、macOS）でタスクを自動実行するためのスケジュールを表すテキスト文字列です。分、時、日、月、曜日の5つのフィールドで構成されます。',
  },
  {
    question: 'すべてのシステムと互換性がありますか？',
    answer:
      'はい、生成されるエクスプレッションはPOSIX標準に準拠しており、LinuxのCrontab、macOSのcron、AWS CloudWatchやGitHub Actionsなどのクラウドサービスと互換性があります。',
  },
  {
    question: 'Cronにおけるアスタリスク（*）の意味は何ですか？',
    answer:
      'アスタリスクは「すべて」を意味するワイルドカードです。例えば、分のフィールドに「*」を指定すると、定義された範囲の毎分タスクが実行されます。',
  },
  {
    question: '次回の実行予定を確認するにはどうすればよいですか？',
    answer:
      'このツールにはリアルタイム・ビューアが含まれており、現在のエクスプレッションに従ってタスクが実行される直近5件の日時を正確に表示します。',
  },
];

const howToData = [
  {
    name: '間隔を選択する',
    text: 'クイックプリセット（毎分、毎時、毎日など）を使用して、タスクを実行する頻度を選択します。',
  },
  {
    name: '高度な設定を行う',
    text: '「高度な設定」タブに切り替えて、特定の分、時、曜日などを手動で定義します。',
  },
  {
    name: '翻訳と日時を確認する',
    text: '人間が理解できる説明を読み、次回の実行5件をチェックして、スケジュールが正しいことを確認します。',
  },
  {
    name: 'エクスプレッションをコピーする',
    text: '生成された文字列をコピーし、crontabファイルやサーバー設定に直接貼り付けます。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  inLanguage: 'ja',
};

const ui: CronGeneratorUI = {
  labelMinute: '分',
  labelHour: '時',
  labelDom: '日',
  labelMonth: '月',
  labelDow: '曜日',
  tabQuick: 'クイック',
  tabAdvanced: '高度な設定',
  fieldMinute: '分 (0-59)',
  fieldHour: '時 (0-23)',
  fieldDom: '日 (1-31)',
  fieldMonth: '月 (1-12)',
  fieldDow: '曜日 (0-6)',
  hintMinute: '例: *, */5, 0,30',
  hintDow: '0 = 日曜日, 6 = 土曜日',
  labelNextRuns: '次回の実行予定',
  btnCopy: 'エクスプレッションをコピー',
  btnCopied: 'コピーしました',
  msgNoRuns: '妥当な範囲内で次回の実行予定が見つかりませんでした。',
  msgError: '日時の計算中にエラーが発生しました。',
  presetEveryMinute: '毎分',
  presetEveryHour: '毎時',
  presetDaily: '毎日',
  presetWeekly: '毎週',
  presetMonthly: '毎月',
  presetYearly: '毎年',
  descEveryMinute: '毎分実行されます',
  descEveryHour: '毎時0分に実行されます',
  descEveryDay: '毎日深夜0時に実行されます',
  descPrefix: '実行タイミング：',
  descEveryMin: '毎分',
  descEveryHourOnDot: '毎時ちょうど',
  descAtMinute: '毎時{m}分',
  descAtTime: '{h}時{m}分',
  descOnDay: ' 毎月{d}日',
  descInMonth: ' {mon}月',
  descIfDow: ' {d}曜日（0=日, 6=土）の場合',
  descDays: '日曜日,月曜日,火曜日,水曜日,木曜日,金曜日,土曜日',
  descInvalid: '無効なエクスプレッション',
  timeNow: '現在',
  timeMin: '分',
  timeHour: '時間',
  timeDays: '日',
  locale: 'ja-JP',
};

export const content: ToolLocaleContent<CronGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: 'リファレンスとドキュメント',
  bibliography: [
    {
      name: 'GNU Crontabマニュアル：LinuxにおけるCronエクスプレッション',
      url: 'https://www.gnu.org/software/mcron/manual/html_node/Crontab-file.html',
    },
    {
      name: 'WikipediaのCron：履歴と構文',
      url: 'https://ja.wikipedia.org/wiki/Cron',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '現代の自動化におけるCronの重要性',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<em>サーバーレス</em>やクラウドワークフローの時代になっても、<strong>Crontab</strong>システムは世界の技術インフラの根幹であり続けています。小規模なブログから大規模な銀行インフラまで、タスクのスケジューリングはデジタル世界を動かし続けるための不可欠な要素です。',
    },
    {
      type: 'title',
      text: 'Cronエクスプレッションの構造',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>フィールド1 - 分 (0-59):</strong> 1時間の中のどの分にタスクを開始するかを指定します。',
        '<strong>フィールド2 - 時 (0-23):</strong> 24時間形式で指定する必要があります。',
        '<strong>フィールド3 - 日 (1-31):</strong> カレンダーの特定の日を指定します。',
        '<strong>フィールド4 - 月 (1-12):</strong> 1月から12月までを指定します。',
        '<strong>フィールド5 - 曜日 (0-6):</strong> 通常、0は日曜日を表します。',
      ],
    },
    {
      type: 'title',
      text: '特殊演算子とよくある間違い',
      level: 3,
    },
    {
      type: 'tip',
      html: 'スラッシュ <code>/</code> を使用してステップを定義できます。例えば、分のフィールドに <code>*/5</code> と指定すると、5分ごとに実行されます。カンマ <code>,</code> はリスト（<code>1,3,5</code>）を作成し、ハイフン <code>-</code> は範囲（<code>1-5</code>）を定義します。',
    },
    {
      type: 'paragraph',
      html: '多くのサーバーは <strong>UTC</strong>（協定世界時）で動作しています。ローカルのタイムゾーンで午前2時にタスクをスケジュールすると、予期しない時間に実行される可能性があります。また、Cronは通常の <code>$PATH</code> にアクセスできないため、常に <code>/usr/local/bin/node</code> のような絶対パスを使用してください。',
    },
  ],
};

