import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GeneradorSecurityTxtUI } from '../ui';

const slug = 'security-txt-generator-rfc-9116';
const title = 'Security.txt ジェネレーター RFC 9116';
const description = 'プロフェッショナルな security.txt ファイルを作成して、脆弱性の報告を円滑にし、国際的なウェブセキュリティ標準に準拠しましょう。';

const faqData = [
  {
    question: 'security.txt ファイルとは何ですか？',
    answer: 'RFC 9116 で定義された標準規格で、セキュリティ研究者が脆弱性を責任を持って報告する際の連絡方法をウェブサイトが明示するためのものです。',
  },
  {
    question: 'security.txt ファイルはどこに置けばよいですか？',
    answer: '推奨される場所はドメインの /.well-known/ フォルダです。最終的な URL は https://example.com/.well-known/security.txt になります。',
  },
  {
    question: '有効期限はなぜ必須なのですか？',
    answer: '連絡先情報が古くならないようにするためです。有効な有効期限がない場合、研究者はコミュニケーションチャネルがまだ有効かどうか信頼できません。',
  },
  {
    question: 'security.txt に必須のフィールドは何ですか？',
    answer: 'RFC 9116 によると、必須フィールドは「Contact」（メールアドレスまたは URL）と「Expires」（ISO 8601 形式の将来の日付）です。',
  },
];

const howToData = [
  { name: 'フィールドに入力する', text: 'メールアドレスまたは連絡先 URL を入力し、有効期限を選択します。' },
  { name: '任意フィールドを追加する', text: 'PGP 鍵、セキュリティポリシー、採用情報などの追加情報を入力します。' },
  { name: 'ファイルをダウンロードまたはコピーする', text: '「.txt をダウンロード」をクリックするか、内容をコピーして security.txt として保存します。' },
  { name: 'サーバーにアップロードする', text: 'ドメインの /.well-known/ フォルダにファイルを配置します。' },
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

const ui: GeneradorSecurityTxtUI = {
  titleBasicFields: '必須フィールド',
  labelContact: '連絡先（メールまたは URL）',
  placeholderContact: 'mailto:security@example.com または https://example.com/contact',
  contactTip: '脆弱性報告の送信先アドレスを入力してください。',
  labelExpires: '有効期限',
  expiresTip: '1年以上先の日付は推奨されません。',
  titleOptionalFields: '任意フィールド',
  labelEncryption: '公開鍵',
  placeholderEncryption: 'https://example.com/pgp-key.txt',
  encryptionTip: '暗号化された報告用の PGP 鍵へのリンク。',
  labelPolicy: 'セキュリティポリシー',
  placeholderPolicy: 'https://example.com/security/policy/',
  policyTip: '脆弱性対応方針を説明するページ。',
  labelAcknowledgments: '謝辞',
  placeholderAcknowledgments: 'https://example.com/security/hall-of-fame/',
  acknowledgmentsTip: 'セキュリティ研究者への感謝ページ。',
  labelHiring: '採用情報',
  placeholderHiring: 'https://example.com/jobs',
  hiringTip: 'セキュリティ関連の求人へのリンク。',
  resultTitle: 'プレビュー（security.txt）',
  btnCopy: 'コードをコピー',
  btnDownload: '.txt をダウンロード',
  copiedMessage: 'コピーしました',
  generatingMessage: 'security.txt ファイルを生成中...',
  comment: '生成済み',
};

export const content: ToolLocaleContent<GeneradorSecurityTxtUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: 'Security.txt に関する技術リソース',
  bibliography: [
    { name: 'RFC 9116: A File Format to Aid in Security Vulnerability Disclosure', url: 'https://datatracker.ietf.org/doc/html/rfc9116' },
    { name: 'Security.txt Official Website', url: 'https://securitytxt.org/' },
    { name: 'OWASP: Vulnerability Disclosure Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Security.txt ファイルとは何か、なぜ作成すべきなのか', level: 2 },
    {
      type: 'paragraph',
      html: '現代のサイバーセキュリティにおいて、透明性とコミュニケーションは不可欠です。システム管理者、Web 開発者、またはデジタルビジネスの運営者であれば、<code>robots.txt</code> や <code>ads.txt</code> といった、機械がサイトを理解するのを助けるテキストファイルをご存知でしょう。しかし、プラットフォームの信頼性にとって重要でありながらあまり知られていない標準があります。それが <strong>RFC 9116</strong> で定義された <strong>Security.txt</strong> です。',
    },
    {
      type: 'paragraph',
      html: '<strong>security.txt ファイルを作成する</strong>目的は、セキュリティ研究者が脆弱性を発見した際に、ウェブサイトの管理者に連絡するための標準化された手段を提供することです。このファイルがなければ、システムの欠陥を見つけた倫理的なハッカーは誰に報告すればよいかわからず、情報が埋もれたり、予告なく公開されたり、悪意ある攻撃者に悪用されるリスクが生じます。',
    },
    { type: 'title', text: 'RFC 9116 に沿って Security.txt を作成・設置する方法', level: 2 },
    {
      type: 'paragraph',
      html: 'この標準では、ファイルをサーバーの特定の場所に置くことが求められています。それがフォルダ <code>/.well-known/</code> です。最終的なパスは通常 <code>https://yourdomain.com/.well-known/security.txt</code> となります。ルートへの設置（<code>/security.txt</code>）も許可されていますが、自動スキャンツールでは前者が優先されます。',
    },
    { type: 'title', text: '必ず含めるべき必須フィールド', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>security.txt のコードを生成する</strong>際には、少なくとも次の2つの重要な要素を含める必要があります。',
    },
    {
      type: 'list',
      items: [
        '<strong>Contact:</strong> 報告を受け付けるメールアドレスまたはフォームの URL。<code>mailto:</code> または <code>https://</code> から始まる必要があります。',
        '<strong>Expires:</strong> ファイルの情報が無効になる日付（ISO 8601 形式）。1年以上先の日付は設定しないことが推奨されます。',
      ],
    },
    { type: 'code', text: 'Contact: mailto:security@yourcompany.com\nExpires: 2025-12-31T23:59:59.000Z' },
    { type: 'title', text: '高度なセキュリティのための任意フィールド', level: 3 },
    {
      type: 'paragraph',
      html: 'より堅牢な<strong>ウェブサイト保護</strong>を目指すサイトには、標準規格が追加フィールドを提供しています。',
    },
    {
      type: 'list',
      items: [
        '<strong>Encryption:</strong> 研究者が暗号化された情報を送れるよう、PGP 公開鍵へのリンクを提供します。',
        '<strong>Policy:</strong> 責任ある情報開示プロセスを説明したセキュリティポリシーページへのリンク。',
        '<strong>Acknowledgments:</strong> 研究者への「殿堂」や感謝ページへのリンク。',
        '<strong>Hiring:</strong> サイバーセキュリティ関連の求人情報へのリンク。',
      ],
    },
    { type: 'title', text: '無料の Security.txt ジェネレーターを使うメリット', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>ウェブサイトのセキュリティ連絡先を素早く取得する</strong>方法を知りたいという声はよく聞かれます。本ツールを使えば、複雑な技術文書を読まなくても RFC 9116 のフォーマットに厳密に準拠したファイルを作成できます。',
    },
    {
      type: 'paragraph',
      html: 'ジェネレーターを使うことで、よくある構文ミスも防げます。<code>mailto:</code> プレフィックスの付け忘れや、有効期限のタイムゾーン指定の誤りがあると、研究者の自動ツールがファイルを無視してしまうことがあります。',
    },
    { type: 'title', text: 'SEO とウェブの信頼性への影響', level: 3 },
    {
      type: 'paragraph',
      html: '<code>security.txt</code> は、ページ速度や HTTPS のように Google の直接的なランキング要因ではありませんが、間接的な影響があります。脆弱性を適切に管理するサイトは、SEO を数時間で台無しにしかねない大規模な攻撃（改ざん、スパム注入）を未然に防げます。また、SecurityScorecard や BitSight などの企業向けセキュリティ評価プラットフォームは、この標準を実装しているドメインに加点しています。',
    },
    { type: 'title', text: 'まとめ：より安全なウェブへの簡単な一歩', level: 2 },
    {
      type: 'paragraph',
      html: 'まとめると、<strong>security.txt をダウンロード</strong>してサーバーにアップロードすることは、今すぐできるセキュリティメンテナンス作業の中で最も素早く効果的なものの一つです。善意の研究者の作業を助け、無用な詮索を防ぎ、ユーザーのプライバシーとデータを真剣に考えていることを世界に示せます。',
    },
    {
      type: 'paragraph',
      html: 'セキュリティインシデントが起きてから「連絡手段を用意しておけばよかった」と後悔しないでください。今すぐ<strong>オンライン security.txt ジェネレーター</strong>を使って、デジタルエコシステムを安全に保ちましょう。',
    },
  ],
};

