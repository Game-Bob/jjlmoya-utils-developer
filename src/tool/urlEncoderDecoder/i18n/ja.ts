import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlEncoderDecoderUI } from '../ui';

const slug = 'url-encoder-decoder';
const title = 'オンラインURLエンコーダー＆デコーダー';
const description =
  'あらゆるリンクの特殊文字を安全な形式（パーセントエンコーディング）に変換、または元の読み取り可能な状態に即座にローカルで復元します。';

const faqData = [
  {
    question: 'URLではどの文字がエンコードされますか？',
    answer:
      'URLのASCII標準で許可されていないすべての文字がエンコードされます：スペース、アクセント付き文字、&、=、+、#、?、/ などの記号。例えば、スペースは %20 に、ñ は %C3%B1 になります。',
  },
  {
    question: 'encodeURI と encodeURIComponent の違いは何ですか？',
    answer:
      'encodeURI は完全なURLをエンコードし、/ や ? などの予約文字をそのまま残します。encodeURIComponent は予約文字を含むすべての特殊文字をエンコードするため、個々のクエリパラメータ値をエンコードするのに最適です。',
  },
  {
    question: 'URLにスペースではなく %20 があるのはなぜですか？',
    answer:
      'HTTPプロトコルでは、URLにスペースを含めることはできません。%20 は ASCII標準に従ったスペースのパーセントエンコーディング表現です。一部のシステムでは代わりに + 記号を使用しますが、%20 が最も普遍的で安全です。',
  },
  {
    question: 'プライベートなURLでこのツールを使用しても安全ですか？',
    answer:
      'はい、完全に安全です。すべての処理は、ネイティブJavaScript（encodeURIComponent/decodeURIComponent）を使用してブラウザ内で行われます。URLやパラメータが外部サーバーに送信されることはありません。',
  },
];

const howToData = [
  {
    name: '生テキストを貼り付ける',
    text: 'URLまたはテキスト文字列を上の「生テキスト（読み取り可能）」フィールドに入力または貼り付けます。',
  },
  {
    name: 'エンコードまたはデコード',
    text: '「URLエンコード」をクリックしてテキストを安全なパーセントエンコーディング形式に変換するか、「デコード」をクリックしてエンコードされたURLを読み取り可能な形式に戻します。',
  },
  {
    name: '結果をコピーする',
    text: '対応するフィールドの「コピー」ボタンを使用して、結果をクリップボードに保存します。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ja',
};

const ui: UrlEncoderDecoderUI = {
  labelRaw: '生テキスト（読み取り可能）',
  labelEncoded: 'フォーマット済みURL（エンコード済み）',
  btnClear: 'クリア',
  btnCopy: 'コピー',
  btnCopied: 'コピー完了！',
  btnEncode: 'URLエンコード',
  btnDecode: 'デコード',
  placeholderRaw: 'https://example.com/search?q=赤い靴&size=38',
  placeholderEncoded: 'https%3A%2F%2Fexample.com%2Fsearch%3Fq%3D%E8%B5%A4%E3%81%84%E9%9D%B4%26size%3D38',
};

export const content: ToolLocaleContent<UrlEncoderDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献とドキュメント',
  bibliography: [
    {
      name: 'MDN Web Docs: encodeURIComponent()',
      url: 'https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent',
    },
    {
      name: 'IETF RFC 3986: URI Generic Syntax',
      url: 'https://datatracker.ietf.org/doc/html/rfc3986',
    },
    {
      name: 'W3C: URL Living Standard',
      url: 'https://url.spec.whatwg.org/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'URLエンコードとは何ですか？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'インターネットを閲覧したりサーバーにリクエストを送信したりする際、URL（Uniform Resource Locator）を単なる「ウェブアドレス」と考えがちです。しかし、インターネットプロトコルでは、URLは非常に限定された<strong>標準ASCII</strong>文字セットを使用してのみ送信できると規定されています。',
    },
    {
      type: 'paragraph',
      html: 'URLにスペース、アクセント付き文字、あるいはプラス（<code>+</code>）やイコール（<code>=</code>）などの特殊なパラメータが含まれている場合はどうなるでしょうか？不正な文字を読み取ろうとしてシステムがダウンするのを防ぐために、これらは<strong>パーセントエンコーディング</strong>を使用して安全な互換形式に変換される必要があります。',
    },
    {
      type: 'title',
      text: 'パーセントエンコーディングの仕組み',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'このツールを使用すると、アルゴリズムが「安全でない」文字（スペースやアクセント付き文字など）を受け取り、それをパーセント記号 <code>%</code> と、UTF-8標準におけるその値に対応する2桁の16進数に置き換えます。',
    },
    {
      type: 'list',
      items: [
        '<strong>基本的な例：</strong> 単純なスペースは、安全な同等物である <code>%20</code> に置き換えられます。',
        '<strong>拡張サポート：</strong> 文字 <code>あ</code> は <code>%E3%81%82</code> になります。',
      ],
    },
    {
      type: 'title',
      text: 'APIとGETリクエストにおける重要性',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '開発においてよくある間違いは、生の文字列をURLパラメータに渡すことです。<code>shirt&blue</code> をそのままバックエンド（<code>/search?q=shirt&blue</code>）に挿入すると、サーバーは <code>blue</code> を新しいパラメータとして解釈し、ロジックが破綻してしまいます。',
    },
    {
      type: 'paragraph',
      html: 'このツールは、ローカルブラウザでの100%の実行により、クリーンで自動的な計算を保証します。URL文字列がサードパーティのサーバーに送信されることはないため、トークンや分析パラメータのプライバシーが確保されます。',
    },
  ],
};

