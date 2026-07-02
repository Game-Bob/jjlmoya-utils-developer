import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JwtDecoderUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'jwt-decoder-parser-and-claims-inspector';
const title = 'JWT Decoder, Parser and Claims Inspector';
const description = 'JSON Web Tokenを貼り付けて、ヘッダーとペイロードを即座にデコードし、登録されたクレームを検査し、期限切れトークンを見つけ、認証フローをデバッグするためにクリーンなJSONをコピーします。';

const howTo = [
  {
    name: 'JWTを貼り付ける',
    text: 'Authorizationヘッダー、Cookie、ログエントリ、またはIDプロバイダからトークンをコピーして入力フィールドに貼り付けます。',
  },
  {
    name: 'デコードされたヘッダーとペイロードを読む',
    text: 'このツールはトークンをヘッダー、ペイロード、署名に分割し、JSONセグメントを別々のパネルに表示して素早く検査します。',
  },
  {
    name: '重要なクレームをチェックする',
    text: 'アルゴリズム、発行者、オーディエンス、サブジェクト、発行時刻、有効開始時刻、有効期限を、Unixタイムスタンプを手動で変換することなく確認します。',
  },
  {
    name: '必要なデータをコピーする',
    text: 'チームとサニタイズされたデバッグスナップショットを共有する必要がある場合に、デコードされた1つのセクションまたは完全なデコード済み出力をコピーします。',
  },
];

const faq = [
  {
    question: 'JWTをデコードすることでトークンが有効であることを証明できますか？',
    answer: 'いいえ。デコードはbase64urlエンコードされたヘッダーとペイロードを明らかにするだけです。トークンが信頼できるのは、アプリケーションまたはIDプロバイダによって署名、発行者、オーディエンス、有効期限、および関連クレームが検証された後だけです。',
  },
  {
    question: 'このJWTデコーダをアクセストークンとIDトークンに使用できますか？',
    answer: 'はい。このデコーダは、標準の3部構成のJWT形式を使用している限り、OAuthアクセストークン、OpenID Connect IDトークン、セッショントークン、サービス間トークンの検査に役立ちます。',
  },
  {
    question: '署名パネルがトークンを検証しないのはなぜですか？',
    answer: 'JWT検証には、正しいシークレット、公開鍵、またはJWKS設定が必要です。このツールは、可視の署名文字列が有効性の証明であるかのように装うことなく、開発者がトークンの内容を確認できるように、意図的にデコードと検査に焦点を当てています。',
  },
  {
    question: 'JWTをデバッグする際に最初に何をチェックすべきですか？',
    answer: 'exp、nbf、iss、aud、algから始めます。実際の本番環境の問題のほとんどは、期限切れトークン、クロックスキュー、誤ったオーディエンス値、予期しない発行者URL、または安全でないアルゴリズムの仮定に起因します。',
  },
];

const ui: JwtDecoderUI = {
  tokenLabel: 'JWTトークン',
  tokenPlaceholder: 'ここにJWTを貼り付け: header.payload.signature',
  sampleButton: 'サンプルを読み込む',
  clearButton: 'クリア',
  statusWaiting: 'JSONヘッダー、ペイロード、クレームをデコードするためにトークンを貼り付けてください。',
  statusValid: 'JWTが正常にデコードされました。',
  statusInvalid: 'これは有効な3部構成のJWTではないようです。',
  statusExpired: 'JWTはデコードされましたが、expクレームが既に期限切れです。',
  statusUnsigned: 'JWTはデコードされましたが、署名されていないか、alg noneを使用しています。',
  headerTitle: 'ヘッダー',
  payloadTitle: 'ペイロード',
  signatureTitle: '署名',
  claimsTitle: '登録クレーム',
  copyHeader: 'デコードされたヘッダーをコピー',
  copyPayload: 'デコードされたペイロードをコピー',
  copySignature: '署名をコピー',
  copyAll: 'すべてコピー',
  copiedLabel: 'コピー済み',
  invalidTokenTitle: '無効なJWT',
  invalidTokenBody: 'トークンにドットで区切られた3つのbase64urlセグメントがあることを確認してください。',
  invalidSegmentError: 'トークンにドットで区切られた3つのbase64urlセグメントがあることを確認してください。',
  invalidDecodeError: 'ヘッダーまたはペイロードを有効なJSONとしてデコードできませんでした。',
  emptyJson: '{}',
  signaturePresent: '署名セグメントが存在します。認証レイヤーで正しいキーを使用して検証してください。',
  signatureMissing: '署名セグメントがありません',
  algorithmLabel: 'アルゴリズム',
  typeLabel: 'タイプ',
  issuerLabel: '発行者',
  subjectLabel: 'サブジェクト',
  audienceLabel: 'オーディエンス',
  issuedAtLabel: '発行日時',
  notBeforeLabel: '有効開始日時',
  expiresAtLabel: '有効期限',
  claimMissing: '存在しません',
  privacyNote: 'デコードはブラウザセッション内で実行されます。セキュリティポリシーで許可されている場合を除き、本番環境のシークレットをツールに貼り付けないでください。',
  sampleToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnYW1lYm9iLXVzZXItNDIiLCJuYW1lIjoiR2FtZUJvYiBEZXZlbG9wZXIiLCJpc3MiOiJodHRwczovL3d3dy5nYW1lYm9iLmRldiIsImF1ZCI6ImRldmVsb3Blci10b29scyIsImlhdCI6MTcxNzIwMDAwMCwibmJmIjoxNzE3MjAwMDAwLCJleHAiOjE4OTM0NTYwMDAsInJvbGUiOiJhZG1pbiJ9.demo-signature',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<JwtDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'JWTデコーダ FAQ',
  faq,
  bibliographyTitle: 'JWT仕様とセキュリティリファレンス',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'セキュリティコンテキストを失わずにJWTをデコードする',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'JSON Web Tokenはコンパクトに見えますが、署名アルゴリズム、発行者、オーディエンス、サブジェクト、発行時刻、有効開始時刻、有効期限、アプリケーション固有の認証クレームなど、認証失敗を説明する正確な詳細を含んでいることがよくあります。この<strong>JWTデコーダ、パーサ、クレームインスペクタ</strong>は、3つのトークンセグメントを読み取り可能なJSONに変換し、認証フローをより速くデバッグできるようにします。',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'デコード済みは信頼済みを意味しません',
      html: '誰でもJWTをbase64urlデコードできます。信頼が始まるのは、アプリケーションが正しいシークレット、公開鍵、またはJWKSで署名を検証し、発行者、オーディエンス、有効期限、およびドメイン固有のクレームを検証した後だけです。このツールはデータの検査に使用し、トークンを本物として受け入れるために使用しないでください。',
    },
    {
      type: 'title',
      text: '各JWTセグメントが教えてくれること',
      level: 3,
    },
    {
      type: 'table',
      headers: ['セグメント', '一般的な内容', 'デバッグの価値'],
      rows: [
        ['ヘッダー', 'アルゴリズム、トークンタイプ、オプションのキーID', 'HS256、RS256、ES256など、どの検証戦略をトークンが期待しているかを示します。'],
        ['ペイロード', '登録クレームとアプリケーションクレーム', 'ID、テナント、スコープ、ロール、有効期限、オーディエンスの不一致を明らかにします。'],
        ['署名', 'base64urlエンコードされた暗号署名バイト', '署名セグメントが存在することを確認しますが、別の場所で正しいキーで検証する必要があります。'],
      ],
    },
    {
      type: 'title',
      text: '認証の不具合を通常説明するクレーム',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>exp:</strong> トークンの有効期限が切れている場合、更新ロジックまたはクロック設定が間違っている可能性があります。',
        '<strong>nbf:</strong> トークンがまだ有効でない場合、サーバーとIDプロバイダのクロックが同期していない可能性があります。',
        '<strong>iss:</strong> 発行者URLが設定と異なる場合、トークンが間違ったテナントまたは環境から来ている可能性があります。',
        '<strong>aud:</strong> オーディエンスがAPI識別子と一致しない場合、トークンは別のリソース用に発行されています。',
        '<strong>alg:</strong> アルゴリズムが予期しない場合、検証ツールがトークンを拒否するか、危険な設定ミスを露呈する可能性があります。',
      ],
    },
    {
      type: 'title',
      text: '開発中のJWTパーサのユースケース',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'フロントエンドデバッグ',
          description: 'ログイン後に受け取ったIDトークンとアクセストークンを検査し、スコープ、ロール、プロフィールクレームを確認します。',
          icon: 'mdi:monitor-dashboard',
          points: ['プロフィールクレームをチェック', 'スコープとロールを確認', 'ログイン環境を比較'],
        },
        {
          title: 'バックエンドAPI QA',
          description: '期待される発行者とオーディエンスの値を、Authorizationヘッダーで実際に送信されたトークンと比較します。',
          icon: 'mdi:api',
          highlight: true,
          points: ['オーディエンスの形式を検証', '発行者の不一致を見つける', 'ベアラートークンを検査'],
        },
        {
          title: 'IDプロバイダ設定',
          description: 'Auth0、Azure AD、Cognito、Keycloak、またはカスタムプロバイダからのクレームが、アプリが期待する形状になっているか確認します。',
          icon: 'mdi:account-key',
          points: ['テナントデータを確認', 'カスタムクレームをチェック', 'プロバイダマッピングを比較'],
        },
      ],
    },
    {
      type: 'title',
      text: 'このインスペクタで明らかになる一般的なJWTの失敗',
      level: 3,
    },
    {
      type: 'proscons',
      title: '迅速なチェック vs 信頼の判断',
      items: [
        {
          pro: '不正な形式のトークンを即座に確認できます。',
          con: '期待するオーディエンスや発行者を知ることはできません。',
        },
        {
          pro: 'Unixタイムスタンプクレームを読み取り可能な日付に変換します。',
          con: '実際のキー素材なしでは署名を検証できません。',
        },
        {
          pro: '発行者、オーディエンス、サブジェクト、タイプの欠落値を見つけます。',
          con: 'スコープとロールがアプリケーションにとって安全であることを証明できません。',
        },
      ],
    },
    {
      type: 'summary',
      title: 'ベストプラクティスワークフロー',
      items: [
        'クライアントまたはAPIが実際に受け取った内容を理解するためにトークンをデコードします。',
        'アプリケーションロジックを追う前にexp、nbf、iss、aud、sub、algをチェックします。',
        '署名と信頼の判断は認証レイヤーでのみ検証します。',
        '機密性の高い本番JWTをチケット、ログ、スクリーンショットで共有しないでください。',
      ],
    },
  ],
};
