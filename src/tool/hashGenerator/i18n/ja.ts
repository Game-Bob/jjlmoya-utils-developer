import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashGeneratorUI } from '../ui';

const slug = 'hash-generator';
const title = 'オンライン・セキュリティ・ハッシュ・ジェネレーター';
const description = 'MD5、SHA-1、SHA-256、SHA-512ハッシュを瞬時に計算。開発者向けの無料、プライベート、超高速なセキュリティツールです。100%クライアントサイドで動作します。';

const faqData = [
  {
    question: 'ハッシュとは何ですか？何に使用されますか？',
    answer: 'ハッシュは、テキストやファイルの固有のデジタル指紋です。データが改ざんされていないことを確認したり、パスワードを安全に保存したりするために使用されます。',
  },
  {
    question: 'このオンライン・ジェネレーターを使用するのは安全ですか？',
    answer: 'はい、完全に安全です。他のサイトとは異なり、ハッシュの処理はお客様のブラウザ内で直接行われます。データがサーバーに送信されることはありません。',
  },
  {
    question: 'どのハッシュアルゴリズムを選択すべきですか？',
    answer: '現代的なセキュリティと鍵の保存には、SHA-256またはSHA-512を推奨します。MD5とSHA-1は、レガシーシステムとの互換性が必要な場合にのみ使用してください。',
  },
  {
    question: '「ソルト（Salt）」を追加するとはどういう意味ですか？',
    answer: 'ソルトは、テキストに混ぜられる追加の文字列で、ハッシュを固有のものにし、辞書攻撃による解読をはるかに困難にします。',
  },
];

const howToData = [
  { name: 'テキストを入力', text: 'ハッシュ化したいテキストを入力ボックスに入力または貼り付けます。' },
  { name: 'セキュリティ設定', text: 'オプションのソルトを追加したり、処理回数（ストレッチング）を増やして堅牢性を高めます。' },
  { name: '結果を取得', text: '入力と同時に、リアルタイムで様々なハッシュ（MD5、SHAなど）が計算されます。' },
  { name: 'ハッシュをコピー', text: '各アルゴリズムの横にあるコピーアイコンをクリックして、クリップボードに保存します。' },
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

const ui: HashGeneratorUI = {
  labelInput: '入力テキスト',
  placeholderInput: 'ここにテキストを入力または貼り付けて、ハッシュを計算します...',
  labelSalt: 'ソルト (任意)',
  placeholderSalt: 'セキュリティ・シード...',
  labelRounds: 'ラウンド (ストレッチ)',
  copyMd5: 'MD5をコピー',
  copySha1: 'SHA-1をコピー',
  copySha256: 'SHA-256をコピー',
  copySha512: 'SHA-512をコピー',
};

export const content: ToolLocaleContent<HashGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: 'ハッシュ化に関する技術資料',
  bibliography: [
    { name: 'MDN Web Docs: SubtleCrypto.digest() API', url: 'https://developer.mozilla.org/ja/docs/Web/API/SubtleCrypto/digest' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'IETF: The MD5 Message-Digest Algorithm (RFC 1321)', url: 'https://datatracker.ietf.org/doc/html/rfc1321' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '暗号化ハッシュとは何ですか？', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>暗号化ハッシュ</strong>とは、任意のデータを固定長の文字列に変換する数学的関数です。同じ入力は常に同じ出力を生成しますが、入力にわずかな変更を加えるだけで、全く異なるハッシュが生成されます。',
    },
    { type: 'title', text: '利用可能なアルゴリズム', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>MD5 (128ビット):</strong> 高速で広くサポートされています。パスワードには安全ではないとされていますが、重要ではない環境でのファイル整合性チェックには有用です。',
        '<strong>SHA-1 (160ビット):</strong> 2017年以降、重要なセキュリティ用途では非推奨となりました。レガシーシステムには依然として存在します。',
        '<strong>SHA-256 (256ビット):</strong> ほとんどのアプリケーションで現在の標準となっています。ビットコイン、TLS、コード署名などで使用されています。',
        '<strong>SHA-512 (512ビット):</strong> SHA-2のより長いバリアントで、最大の衝突耐性が必要な場合に最適です。',
      ],
    },
    { type: 'title', text: 'ソルトとキー・ストレッチング', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>ソルト</strong>はハッシュ化の前にテキストに追加されるランダムな文字列で、2つの同一の入力から異なるハッシュが生成されることを保証します。<strong>キー・ストレッチング</strong>（ラウンド）は、ブルートフォース攻撃に対する耐性を高めるためにハッシュ関数を複数回適用します。',
    },
    { type: 'title', text: '完全なプライバシー：100%クライアントサイド', level: 3 },
    {
      type: 'paragraph',
      html: 'このツールは、SHAにはブラウザの<strong>Web Crypto API</strong>を使用し、MD5には純粋なTypeScript実装を使用します。すべての処理はローカルで行われ、データがデバイスから外部に出ることはありません。',
    },
  ],
};

