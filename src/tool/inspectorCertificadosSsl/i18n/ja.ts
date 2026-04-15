import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InspectorCertificadosSslUI } from '../ui';

const slug = 'ssl-tls-certificate-inspector';
const title = 'オンラインSSL/TLS証明書インスペクタ PEMおよびCRTファイルを表示';
const description = 'SSL証明書ファイル(.pem、.crt、.der)をローカルで分析します。有効期限、発行者、サブジェクト、SHA-256フィンガープリントを確認できます。データはブラウザから出ません。';

const faqData = [
  {
    question: 'このウェブサイトでSSL証明書を分析するのは安全ですか?',
    answer: 'はい、非常に安全です。このユーティリティは100%クライアント側で動作します。.pemまたは.crtファイルをドラッグすると、ブラウザはデータをローカルで読み取り、サーバーに送信することはありません。完全なプライバシーが保証されます。',
  },
  {
    question: 'どの証明書形式がサポートされていますか?',
    answer: 'このツールは最も一般的な形式をサポートしています。PEM(「BEGIN CERTIFICATE」ヘッダー付きBase64エンコード)とDER(バイナリ形式)で、通常は.pem、.crt、.cer、.derの拡張子があります。',
  },
  {
    question: '.crtファイルの有効期限を確認できますか?',
    answer: 'はい、ファイルを読み込むと、正確な有効期限と証明書が今日有効かどうかを表示する「有効期限ステータス」セクションが表示されます。',
  },
  {
    question: '証明書発行者は何をしていますか?',
    answer: 'Issuer(発行者)は、サイトのアイデンティティを検証した認証局(CA)を示します。証明書が商用ブラウザで認識されるかどうかを知ることが重要です。',
  },
  {
    question: 'SHA-256フィンガープリントはどのように計算されますか?',
    answer: 'ハッシュアルゴリズムを証明書のバイナリコンテンツに直接適用して計算されます。ファイルが改ざんされていないことを確認し、サーバーが期待するものと一致することを確認するのに役立ちます。',
  },
];

const howToData = [
  { name: 'ファイルを見つけてください', text: 'コンピュータ上の.pem、.crt、.cerまたは.der拡張子のファイルを探します。' },
  { name: 'ドラッグ&ドロップ', text: 'ファイルを上記の点線エリアにドラッグするだけです。' },
  { name: '結果を表示', text: 'すぐに、誰が証明書を発行したか、誰のものか、いつ期限切れになるか、フィンガープリントが表示されます。' },
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

const ui: InspectorCertificadosSslUI = {
  labelAnalyzeCertificate: '証明書を分析',
  dragDropText: '.pem、.crtまたは.cerファイルをここにドラッグしてください',
  dragDropSubtext: '(ブラウザで100%ローカル処理)',
  cardStatusTitle: '有効性ステータス',
  cardSubjectTitle: 'サブジェクト(所有者)',
  cardIssuerTitle: '発行者(CA)',
  cardFingerprintsTitle: 'フィンガープリント',
  cardTechnicalTitle: '技術詳細',
  labelValidityStatus: 'ステータス:',
  labelExpiryDate: '有効期限',
  labelIssueDate: '発行日',
  labelSha256: 'SHA-256フィンガープリント',
  labelSha1: 'SHA-1フィンガープリント',
  labelSignatureAlgorithm: '署名アルゴリズム',
  labelVersion: 'X.509バージョン',
  labelSerialNumber: 'シリアル番号',
  labelCommonName: '一般名',
  labelOrganization: '組織',
  labelOrgUnit: '組織単位',
  labelLocality: '市区町村',
  labelState: '都道府県',
  labelCountry: '国',
  labelEmail: 'メール',
  statusValid: '有効',
  statusExpired: '期限切れ',
  errorMessageInvalid: '無効なファイルです。',
  supportedFormats: '.pem、.crt、.cer、.der',
};

export const content: ToolLocaleContent<InspectorCertificadosSslUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: 'SSL/TLS証明書に関する技術リソース',
  bibliography: [
    { name: 'RFC 5280: Internet X.509 Public Key Infrastructure Certificate and CRL Profile', url: 'https://datatracker.ietf.org/doc/html/rfc5280' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'Mozilla: SSL/TLS Encryption Overview', url: 'https://developer.mozilla.org/en-US/docs/Glossary/TLS' },
    { name: 'OpenSSL: X.509 Certificate Format Documentation', url: 'https://www.openssl.org/docs/man1.1.1/man1/x509.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'SSL/TLS証明書インスペクタとは何か、なぜ必要なのか?', level: 2 },
    {
      type: 'paragraph',
      html: 'ウェブ開発とサイバーセキュリティの世界では、<strong>SSL(Secure Sockets Layer)およびTLS(Transport Layer Security)証明書</strong>は信頼の基礎です。デジタル証明書は、暗号化キーを組織またはドメインのデータにリンクするファイルにすぎません。ただし、これらのファイルはバイナリ形式(.der)またはBase64エンコード(.pem、.crt)で提供されることが多く、一見読むことができません。',
    },
    {
      type: 'paragraph',
      html: '私たちの<strong>SSL/TLS証明書インスペクタ</strong>を使用すると、これらのファイルを視覚的かつ安全に「開く」ことができます。公開ドメインをクエリするツール(有名なSSL Labsテストなど)とは異なり、このユーティリティはデバイス上のファイルで直接機能します。これは、Nginx、Apacheサーバーを設定するか、AWSまたはGoogle Cloud Load BalancerにSSL証明書を読み込むときに非常に重要です。アップロードする前に、手持ちのファイルが正しいことを確認する必要があります。',
    },
    { type: 'title', text: '.pemまたは.crtファイルを段階的に検査する方法', level: 2 },
    {
      type: 'paragraph',
      html: '私たちのツールで証明書を分析するのは非常に簡単で、コンソール(OpenSSL)の知識は必要ありません。次の手順に従ってください。',
    },
    {
      type: 'list',
      items: [
        '<strong>ファイルを見つけてください:</strong> コンピュータ上の.pem、.crt、.cerまたは.der拡張子のファイルを探します。',
        '<strong>ドラッグ&ドロップ:</strong> ファイルを上記の点線エリアにドラッグするだけです。',
        '<strong>結果を表示:</strong> すぐに、誰が証明書を発行したか、誰のものか、いつ期限切れになるか、フィンガープリントが表示されます。',
      ],
    },
    {
      type: 'tip',
      title: '完全なプライバシー',
      html: 'このプロセスの最も重要な部分は<strong>プライバシー</strong>です。ファイルは当社のサーバーにアップロードされることはありません。証明書のASN.1構造の解析はすべて、ブラウザのRAM内で行われます。公開鍵の完全なセキュリティです。',
    },
    { type: 'title', text: '証明書を分析するときに表示される主なフィールド', level: 2 },
    {
      type: 'paragraph',
      html: '証明書を分析するとき、最も関連性のある技術情報を分解して、一目で検証できるようにします。',
    },
    {
      type: 'list',
      items: [
        '<strong>サブジェクト:</strong> 一般名(CN)、組織、場所を含む所有者のデータを表示します。',
        '<strong>発行者:</strong> 証明書に署名した認証局(CA)(例:Let\'s Encrypt、DigiCert)を識別します。',
        '<strong>有効期限:</strong> 正確な発行日と重要な有効期限を表示します。',
        '<strong>フィンガープリント:</strong> SHA-256およびSHA-1フィンガープリントはファイルの整合性を検証するために機能します。',
      ],
    },
    { type: 'title', text: 'サポートされているフォーマット:PEM、CRT、CERおよびDER', level: 2 },
    {
      type: 'paragraph',
      html: 'いくつかの証明書ファイル形式があり、時には混乱することがあります。私たちのツールは最も一般的なものと互換性があります。',
    },
    {
      type: 'list',
      items: [
        '<strong>PEM(.pem、.crt、.cer):</strong> LinuxおよびWebサーバーの最も一般的な形式。行<code>-----BEGIN CERTIFICATE-----</code>で始まります。',
        '<strong>DER(.der、.cer):</strong> バイナリ形式。Windows環境(Java、Active Directory)で多く使用されており、通常、特殊なツールなしで読むのが難しくなります。',
      ],
    },
    {
      type: 'paragraph',
      html: 'ファイルに不慣れな拡張子がある場合でも、内部構造が標準的なX.509証明書である場合、<strong>node-forge</strong>で駆動されるエンジンは問題なくそれを解釈できます。',
    },
    { type: 'title', text: 'OpenSSLの代わりにこのツールを使用する理由', level: 2 },
    {
      type: 'paragraph',
      html: 'OpenSSLは暗号化の万能ナイフですが、コマンドは覚えにくいものです。コンソールから証明書を表示するには、次のように記述する必要があります。',
    },
    { type: 'code', text: 'openssl x509 -in certificado.crt -text -noout' },
    {
      type: 'paragraph',
      html: '私たちのツールは日常的なワークフロー向けに明らかな利点を提供します。',
    },
    {
      type: 'list',
      items: [
        '<strong>速度:</strong> ターミナルを開いたり、複雑なフラグを覚えたりする必要はありません。',
        '<strong>ビジュアル:</strong> フィールド名(Locality、Organization)をわかりやすく書式設定し、「L」や「O」などの短いコードではなくします。',
        '<strong>有効性アラート:</strong> 証明書が今日有効かどうかを自動的に計算し、現在の日付を証明書の日付と手動で確認する手間を省きます。',
        '<strong>クロスプラットフォーム:</strong> 最新のブラウザがあれば、どのオペレーティングシステムでも動作し、インストールする依存関係はありません。',
      ],
    },
    { type: 'title', text: 'セキュリティとプライバシー:証明書はRAMを離れることはありません', level: 2 },
    {
      type: 'paragraph',
      html: '開発者として、このタイプの情報を処理することがいかに重要かを知っています。証明書は技術的には<strong>公開情報</strong>(ウェブサイトを訪問するすべてのブラウザに送信される)ですが、それでも不要に外部サーバーにファイルをアップロードしないことは良い慣例です。',
    },
    {
      type: 'paragraph',
      html: 'このユーティリティは、クライアント側で厳密に実行されるJavaScriptを使用しています。ファイルをドラッグすると、コンテンツを読み取り、ローカルで処理します。インターネットを切断することでこれを確認できます。ツールは完全に同じように動作し続けます。',
    },
    { type: 'title', text: 'SSLインスペクタの一般的な使用例', level: 2 },
    {
      type: 'paragraph',
      html: 'このページをブックマークするのが役立つのはいつでしょうか?',
    },
    {
      type: 'list',
      items: [
        '<strong>サーバーデバッグ:</strong> 証明書をインストールしてウェブサイトがエラーを出し続ける場合、誤って古い証明書をロードしていないことを確認します。',
        '<strong>チェーン検証:</strong> ファイルがエンド証明書を含むか、仲介証明書を含むかを確認するため。',
        '<strong>資産監査:</strong> 古いプロジェクトでどの認証局が使用されたかを確認するため。',
        '<strong>コピー整合性:</strong> サーバー間で証明書を移動する場合、SHA-256フィンガープリントを比較してファイルが破損していないことを確認します。',
      ],
    },
  ],
};

