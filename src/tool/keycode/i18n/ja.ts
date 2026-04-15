import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeycodeUI } from '../ui';

const slug = 'keycode';
const title = 'キーボードコードビジュアライザー オンライン。KeyCode Inspector';
const description =
  'キーボードの任意のキーの event.key、event.code、event.which、およびロケーションをリアルタイムで確認できる無料のオンラインツール。すぐに使えるJavaScriptコードスニペットを生成します。';

const faqData = [
  {
    question: 'event.key と event.code の違いは何ですか？',
    answer:
      'event.code は、設定された言語に関係なく、キーボード上の物理的なキーを表します。event.key は生成された文字を表し、Shift を押したり別の言語を使用したりすると変化します。ゲームコントロールには code を使用し、テキスト入力やセマンティックなショートカットには key を使用してください。',
  },
  {
    question: 'event.which とは何ですか？なぜ非推奨なのですか？',
    answer:
      'event.which はキーの数値ASCIIコードを返すレガシーなプロパティです。event.key と event.code がより正確で読みやすい情報に置き換えるため、モダンな標準では非推奨（deprecated）とされています。このツールでは教育目的で表示しています。',
  },
  {
    question: 'location プロパティはどういう意味ですか？',
    answer:
      'location プロパティは、キーボード上のキーの物理的な位置を示します：Standard（通常の位置）、Left（左側の修飾キー）、Right（右側の修飾キー）、Numpad（テンキー）。たとえば、左と右のCtrlキーを区別するのに便利です。',
  },
  {
    question: '国際的なキーボードやQWERT Y以外のレイアウトでも動作しますか？',
    answer:
      'はい。このツールはブラウザがあなたのキーボード設定に対してレポートする内容をそのまま表示します。event.code は常に物理的な位置のQWERTY名を返し、event.key はあなたの言語に応じた実際の文字を表示します。',
  },
];

const howToData = [
  {
    name: '任意のキーを押す',
    text: 'ページにフォーカスがある状態で、キーボードの任意のキーを押すと、すべてのイベント情報が即座に表示されます。',
  },
  {
    name: '個別の値をコピーする',
    text: '各プロパティ（event.key、event.code など）の横にあるコピーボタンをクリックすると、その値をクリップボードにコピーできます。',
  },
  {
    name: 'コードスニペットを使用する',
    text: '「クイックスニペット」セクションには、プロジェクトに直接貼り付けられるJavaScriptコードブロックがあります。',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'ja',
};

const ui: KeycodeUI = {
  promptTitle: 'キーを押してください',
  promptSubtitle: 'キーボードの任意のキーを押してコードを確認',
  snippetsTitle: 'クイックスニペット',
  btnCopy: 'コピー',
  locationStandard: 'Standard',
  locationLeft: '左',
  locationRight: '右',
  locationNumpad: 'Numpad',
};

export const content: ToolLocaleContent<KeycodeUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考資料と標準',
  bibliography: [
    {
      name: 'MDN Web Docs – KeyboardEvent',
      url: 'https://developer.mozilla.org/ja/docs/Web/API/KeyboardEvent',
    },
    {
      name: 'UI Events Specification (W3C) – KeyboardEvent',
      url: 'https://www.w3.org/TR/uievents/#events-keyboardevents',
    },
    {
      name: 'MDN – KeyboardEvent.code values',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'JavaScriptのキーボードイベントを理解する',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ユーザーがキーを押すと、ブラウザは3つのイベントを発火します：<code>keydown</code>、<code>keypress</code>、<code>keyup</code>。それぞれが押されたキーに関する情報を持つプロパティを公開しますが、すべてが同等または推奨されているわけではありません。',
    },
    {
      type: 'title',
      text: 'キーイベントのプロパティ',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'event.code — 物理的なキー',
      html: '<p>QWERTYの命名規則を使用して、キーボード上のキーの<strong>物理的な位置</strong>の識別子を返します。たとえば、AZERTYキーボードの「A」キーは<code>KeyQ</code>を返します。位置が重要であり文字ではないゲームコントロールに最適です。</p>',
    },
    {
      type: 'card',
      title: 'event.key — 生成された文字',
      html: '<p>言語とアクティブな修飾キーに応じて生成された<strong>文字値</strong>を返します。Shift+Aを押すと<code>"A"</code>が返され、Shiftなしでは<code>"a"</code>が返されます。特殊キーの場合は<code>"Enter"</code>、<code>"Escape"</code>、<code>"ArrowUp"</code>などの名前が返されます。</p>',
    },
    {
      type: 'title',
      text: '各プロパティをいつ使うか',
      level: 3,
    },
    {
      type: 'tip',
      html: 'ゲームコントロール（言語に関係なくWASD）には<code>event.code</code>を使用し、特定の文字や<code>Ctrl+C</code>のようなセマンティックなキーボードショートカットを検出するには<code>event.key</code>を使用してください。',
    },
    {
      type: 'paragraph',
      html: '<code>event.which</code>と<code>event.keyCode</code>プロパティはW3C標準に従い、公式に<strong>非推奨</strong>となっています。モダンブラウザは互換性のためにこれらを引き続きサポートしていますが、新しいコードでは使用しないでください。',
    },
  ],
};

