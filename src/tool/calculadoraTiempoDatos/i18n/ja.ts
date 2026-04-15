import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CalculadoraTiempoDatosUI } from '../ui';

const slug = 'data-time-calculator-web-speed-impact';
const title = 'データ時間計算機：ウェブ速度の影響';
const description = 'ユーザーが3G、4G、5G接続でウェブサイトの読み込みを待つ間に失う寿命を把握しましょう。サイトの重さがもたらす本当の影響を計算します。';

const faqData = [
  {
    question: 'ウェブサイトの読み込み時間を知ることがなぜ重要なのですか？',
    answer: 'ユーザーエクスペリエンス、SEO、コンバージョンに直接影響するからです。Googleの資料によると、1秒の遅延ごとにコンバージョンが7%減少するとされています。また、モバイル訪問者の53%は、読み込みに3秒以上かかるページを離脱します。',
  },
  {
    question: '寿命の損失として示される小さなパーセンテージは何を意味していますか？',
    answer: 'これは、人の全寿命（約80年、つまり25億秒）のうち、ページの読み込みを待つために費やされる時間の割合を表しています。個々には小さく見えても、数百万人のユーザーに換算すると、膨大な人間の時間が無駄になっていることがわかります。',
  },
  {
    question: '世界中の平均的な接続速度はどれくらいですか？',
    answer: '先進国では4Gが標準です。しかし、発展途上国の数百万人のユーザーはいまだに3Gに頼っています。そのため、あらゆる接続速度に合わせてサイトを最適化することが極めて重要です。',
  },
  {
    question: 'ウェブサイトの重さはどれくらいにすべきですか？',
    answer: 'Googleは、一般的な4G接続でホームページが3秒以内に読み込まれることを推奨しています。そのためには、サイトの重さを1〜2MBに抑えるのが理想的です。しかし、世界平均は2〜3MBに近いです。',
  },
  {
    question: 'サイトの重さを減らすにはどうすればよいですか？',
    answer: '主な戦略：画像の最適化（重さの50〜80%）、CSSとJavaScriptの圧縮（ミニファイ）、遅延読み込み（lazy loading）の使用、ブラウザキャッシュの実装、CDNの利用です。画像の最適化は通常、最も効果的な要因です。',
  },
  {
    question: '読み込み速度はGoogleのランキングに影響しますか？',
    answer: 'はい、間違いなく影響します。GoogleはCore Web Vitalsを重要なランキング要素として考慮しています。読み込みが遅いサイトは、内容が似ていても速いサイトより順位が下がります。',
  },
];

const howToData = [
  { name: 'サイトの重さを入力', text: 'ブラウザの開発者ツールやWebPageTestを使用して、ページの重さを確認します。その値をMB単位で入力します。' },
  { name: '読み込み時間を観察', text: '計算機は、3G、4G、5Gでサイトの読み込みにかかる時間を表示します。実際の時間は通常、これより長くなります。' },
  { name: '寿命への影響を理解', text: '「寿命」のパーセンテージは、誰かの人生のどれくらいが待ち時間に費やされているかを示します。これを最適化のモチベーションにしてください。' },
  { name: '最適化して再計算', text: '最適化後、再度測定して計算し直します。小さな改善が大きな影響を与えることを確認してください。' },
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

const ui: CalculadoraTiempoDatosUI = {
  headerTitle: 'ネットワークで失われる時間',
  labelWebSize: 'サイトの重さ (MB)',
  unit: 'MB',
  presetsLabel: '現実的な例',
  labelSpeed: '接続速度',
  speedLabel3g: '3G',
  speedValue3g: '0.4 Mbps',
  speedLabel4g: '4G/LTE',
  speedValue4g: '10 Mbps',
  speedLabel5g: '5G',
  speedValue5g: '100+ Mbps',
  labelTimes: '1日何回アクセスしますか？',
  resultTitle: '結果',
  resultSingleLoad: '1回の読み込み',
  resultDailyTotal: '1日の合計',
  resultTimePerYear: '1年間の待ち時間',
  resultLifeYears: '一生の待ち時間',
  resultMessage: '約1年の寿命を失いました',
  copyMessage: 'コピーしました',
  preset3g: '3G',
  preset4g: '4G',
  preset5g: '5G',
};

export const content: ToolLocaleContent<CalculadoraTiempoDatosUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: 'ウェブ最適化に関する技術リソース',
  bibliography: [
    { name: 'Google PageSpeed Insights', url: 'https://pagespeed.web.dev/' },
    { name: 'WebPageTest - ウェブサイト速度分析', url: 'https://www.webpagetest.org/' },
    { name: 'Web.dev - Core Web Vitals', url: 'https://web.dev/vitals/' },
    { name: 'MDN - ウェブパフォーマンス', url: 'https://developer.mozilla.org/ja/docs/Web/Performance' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'ウェブサイトの読み込み速度が重要な理由', level: 2 },
    {
      type: 'paragraph',
      html: '今日のデジタル時代において、ウェブサイトの読み込み速度は贅沢品ではなく必需品です。ユーザーをつなぎ留め、検索順位を上げ、コンバージョンを最大化するために、1ミリ秒の差が重要になります。現代のユーザーは、ページが3秒以内に読み込まれることを期待しています。',
    },
    { type: 'title', text: 'ユーザーエクスペリエンスへの影響', level: 3 },
    {
      type: 'paragraph',
      html: 'モバイル訪問者の53%は、読み込みに3秒以上かかるとページを離脱します。コンバージョン率は、遅延が1秒増えるごとに7%低下します。',
    },
    { type: 'title', text: '接続速度について', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>3G:</strong> 0.4 Mbps - 農村部や発展途上国で一般的',
        '<strong>4G/LTE:</strong> 10 Mbps - 先進国の標準',
        '<strong>5G:</strong> 100+ Mbps - 徐々に拡大中だが、まだ限定的',
      ],
    },
    { type: 'title', text: 'サイトの重さを減らす戦略', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>画像の最適化：</strong>重さの50〜80%を占めます。TinyPNGなどのツールで40〜60%削減可能です。',
        '<strong>圧縮（ミニファイ）：</strong>CSSやJavaScriptから不要なコードを削除します。30〜50%削減できます。',
        '<strong>遅延読み込み（Lazy Loading）：</strong>ユーザーがスクロールして表示されるまで画像を読み込みません。',
        '<strong>ブラウザキャッシュ：</strong>静的ファイルをユーザーのブラウザにキャッシュします。',
        '<strong>CDN：</strong>地理的に近いサーバーからコンテンツを配信します。',
      ],
    },
    { type: 'title', text: '結論：1秒の重み', level: 2 },
    {
      type: 'paragraph',
      html: 'ウェブサイトは、ユーザーがブランドに対して抱く第一印象となることが多いです。遅いサイトはユーザーを失望させ、ビジネスチャンスを逃します。速くレスポンスの良いサイトは、ポジティブな体験を生み出し、あらゆる指標を向上させます。',
    },
  ],
};

