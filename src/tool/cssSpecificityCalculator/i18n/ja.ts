import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssSpecificityCalculatorUI } from '../ui';

const slug = 'css-specificity-calculator';
const title = 'CSSセレクター詳細度チェッカー オンライン。セレクターの重みを可視化';
const description =
  'CSSセレクターの詳細度と正確な重みを計算します。どのCSSルールがカスケードで勝つかを視覚的に確認でき、!importantの乱用を防ぐのに役立つツールです。';

const faqData = [
  {
    question: 'CSSの詳細度とは何ですか？',
    answer:
      '詳細度とは、複数のCSSルールが競合する際にブラウザがどのルールを適用するかを決定するアルゴリズムです。3列のスコア（A、B、C）で表され、それぞれIDの数、クラス・属性・擬似クラスの数、要素・擬似要素の数を示します。',
  },
  {
    question: 'クラスセレクターはIDセレクターに勝てますか？',
    answer:
      '直接には勝てません。ID（1,0,0）はどれだけ多くのクラス（0,N,0）があっても必ず勝ちます。詳細度の列間には繰り上がりがないためです。100個のクラス（0,100,0）があっても、たった1つのID（1,0,0）には勝てません。',
  },
  {
    question: '2つのセレクターの詳細度が同じ場合はどうなりますか？',
    answer:
      '2つのセレクターのスコアがまったく同じ場合、CSSファイルで後に書かれた方が優先されます。これが「カスケードの自然順序」です。このツールは同点になった場合に視覚的に通知します。',
  },
  {
    question: 'なぜ !important を使うのは悪い習慣とされていますか？',
    answer:
      '!important を使うと、そのスタイル宣言が他のすべてのルールより強制的に優先されてしまい、CSSの自然なカスケードが崩れます。大規模なプロジェクトではデバッグが困難になる問題を引き起こします。BEMのような手法は、!importantを使わなくて済むよう詳細度をフラットに保つことを推奨しています。',
  },
];

const howToData = [
  {
    name: '最初のセレクターを入力する',
    text: '左側のテキストフィールドにセレクターAを入力してください。例：#header .nav-item > a。ID、クラス、要素のカウンターがリアルタイムで更新されます。',
  },
  {
    name: '2番目のセレクターを入力する',
    text: '右側のテキストフィールドにセレクターBを入力してください。例：ul li.active a:hover。重みがリアルタイムで変化するのを確認できます。',
  },
  {
    name: '結果を確認する',
    text: '勝ったセレクターのブロックが緑のバナーでハイライトされます。両方が引き分けの場合は、カスケード順序がタイブレーカーになる旨のメッセージが表示されます。',
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

const ui: CssSpecificityCalculatorUI = {
  labelA: 'セレクター A',
  labelB: 'セレクター B',
  placeholderA: '例：#header .nav-item > a',
  placeholderB: '例：ul li.active a:hover',
  cardIds: 'ID',
  cardClasses: 'クラス / 擬似',
  cardElements: '要素',
  bannerWinner: 'このセレクターが勝ちです！',
  msgTie: '両方のセレクターの重みが同じです。同じ要素に対して競合する場合、CSSで<strong>後に</strong>書かれた方が優先されます。',
};

export const content: ToolLocaleContent<CssSpecificityCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考資料とドキュメント',
  bibliography: [
    {
      name: 'MDN Web Docs: CSSの詳細度',
      url: 'https://developer.mozilla.org/ja/docs/Web/CSS/Specificity',
    },
    {
      name: 'W3C: Selectors Level 3 - 詳細度',
      url: 'https://www.w3.org/TR/selectors-3/#specificity',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'CSSの詳細度とは？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'CSSの詳細度とは、ブラウザが特定の要素にどのプロパティ値を適用するかを決定するアルゴリズムです。ルールが「どれだけ具体的か」をブラウザに伝える数値スコアと言えます。',
    },
    {
      type: 'paragraph',
      html: '2つのルールの詳細度が異なる場合、書かれた順序に関係なく、重みが大きい方が優先されます。同じ重みの場合は、ソースコードで後に宣言された方が優先されます。',
    },
    {
      type: 'title',
      text: 'CSSの詳細度の計算方法',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '詳細度は3つのカテゴリに基づいて計算され、<strong>(A, B, C)</strong> という3列の重みとして表されます：',
    },
    {
      type: 'list',
      items: [
        '<strong>列A（ID）：</strong>一意の識別子の数を数えます。例：<code>#header</code> は列Aで1としてカウントされます。',
        '<strong>列B（クラス、属性、擬似クラス）：</strong>すべてのクラス（<code>.button</code>）、属性（<code>[type="text"]</code>）、擬似クラス（<code>:hover</code>）を数えます。',
        '<strong>列C（要素、擬似要素）：</strong>すべてのHTML要素（<code>div</code>、<code>h1</code>）と擬似要素（<code>::before</code>）を数えます。',
      ],
    },
    {
      type: 'title',
      text: '黄金律：列をまたいだ繰り上がりはない',
      level: 3,
    },
    {
      type: 'tip',
      html: '詳細度が (0,50,0) のルールは、(1,0,0) のルールより<strong>絶対に</strong>強くなりません。<strong>IDひとつがクラスをいくつ積み重ねても勝ちます。</strong>列間に繰り上がりは存在しません。',
    },
    {
      type: 'title',
      text: '!important の問題とBEMアーキテクチャ',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<code>!important</code> は詳細度ルールの例外です。使用すると、その宣言が他のどんなルールよりも自動的に優先されます。自然なカスケードを壊すため、悪い習慣とされています。',
    },
    {
      type: 'paragraph',
      html: '大規模プロジェクトでの詳細度の衝突を避けるために、<strong>BEM</strong> のような手法では1段階のクラスセレクターのみを使うことを推奨し、詳細度を (0,1,0) のフラットな状態に保ちます。',
    },
  ],
};

