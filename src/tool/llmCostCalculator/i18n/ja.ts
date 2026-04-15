import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LlmCostCalculatorUI } from '../ui';

const slug = 'llm-cost-calculator';
const title = 'LLMコスト計算ツール。AIモデルAPIの料金見積もり';
const description =
  'LLM APIの呼び出しコストを無料で試算できるオンラインツールです。GPT-4o、Claude、Gemini、Llamaなどを、100万トークンあたりの実際の料金で比較できます。';

const faqData = [
  {
    question: 'LLM APIのコストはどう計算されますか？',
    answer:
      'LLM APIでは、入力トークン（プロンプト）と出力トークン（レスポンス）が別々に課金されます。1リクエストあたりの合計コストは「（入力トークン数 × 入力単価 + 出力トークン数 × 出力単価） ÷ 1,000,000」で算出されます。これにリクエスト数を掛けることで、月間合計コストが求められます。',
  },
  {
    question: 'トークンとは何ですか？単語数とどう関係しますか？',
    answer:
      'トークンとは、言語モデルが処理するテキストの基本単位です。英語では平均して1トークンが約0.75単語に相当するため、1,000トークン ≈ 750単語となります。料金は100万トークンあたり（$/1M）で表示されるのが業界標準です。',
  },
  {
    question: '出力トークンが入力トークンより高いのはなぜですか？',
    answer:
      'テキストを生成（出力）する際、モデルはトークンを1つずつ逐次的に計算するため、入力を読み込む処理よりも計算コストが高くなります。多くのプロバイダーでは、出力トークンの料金を入力トークンの3〜5倍に設定しています。',
  },
  {
    question: 'LLM APIのコストを下げるにはどうすればよいですか？',
    answer:
      '品質要件を満たす中で最も小さなモデルを選択しましょう。繰り返し使うプロンプトはキャッシュを活用することも有効です。システムプロンプトはできるだけ短くし、不要なコンテキストは含めないようにしましょう。分類や抽出などのシンプルなタスクには、GPT-4o miniやGemini Flashのような軽量モデルが大幅なコスト削減につながります。',
  },
];

const howToData = [
  {
    name: 'モデルを選択する',
    text: 'グループ化されたドロップダウンから、使用予定のAIモデルを選びます。モデルはプロバイダーごとに整理されています。',
  },
  {
    name: 'トークン数を入力する',
    text: '入力トークン数（プロンプト）と出力トークン数（レスポンス）の想定値を入力します。各フィールドの下に単語数の目安が表示されます。',
  },
  {
    name: 'リクエスト数を設定する',
    text: 'スライダーまたは数値入力フィールドで、想定するAPIコール数を入力します。合計コストはリアルタイムで更新されます。',
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

const ui: LlmCostCalculatorUI = {
  labelModel: 'LLMモデル',
  labelInputTokens: '入力トークン数',
  labelOutputTokens: '出力トークン数',
  labelRequests: 'リクエスト数',
  unitWords: '単語',
  labelCostPerRequest: '1リクエストあたりのコスト',
  labelTotal: '推定合計コスト',
  labelInput: '入力',
  labelOutput: '出力',
};

export const content: ToolLocaleContent<LlmCostCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考情報と料金ソース',
  bibliography: [
    {
      name: 'OpenAI API 料金',
      url: 'https://openai.com/pricing',
    },
    {
      name: 'Anthropic API 料金',
      url: 'https://www.anthropic.com/pricing',
    },
    {
      name: 'Google AI Studio 料金',
      url: 'https://ai.google.dev/pricing',
    },
    {
      name: 'OpenAI トークナイザー',
      url: 'https://platform.openai.com/tokenizer',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'LLM APIの料金体系を理解する',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '大規模言語モデルのAPIは、時間やリクエスト数ではなく、<strong>トークンの使用量</strong>に基づいて課金されます。各APIコールには2種類のコストが発生します。<strong>入力コスト</strong>（プロンプトの処理）と<strong>出力コスト</strong>（レスポンスの生成）です。この違いを把握することが、月額費用を正確に見積もるうえで欠かせません。',
    },
    {
      type: 'title',
      text: '入力トークンと出力トークンの違い',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: '入力トークン',
      html: '<p>入力トークンとは、モデルに<strong>送信される</strong>すべてのテキストを指します。システムプロンプト、会話履歴、ユーザーメッセージが含まれます。モデルがこれらを並列処理するため、コストは比較的低く抑えられます。200単語程度の一般的なシステムプロンプトは、おおよそ267入力トークンに相当します。</p>',
    },
    {
      type: 'card',
      title: '出力トークン',
      html: '<p>出力トークンは1つずつ逐次的に生成されるため、計算コストが高くなります。多くのプロバイダーでは、出力トークンの料金を入力トークンの<strong>3〜5倍</strong>に設定しています。300単語のレスポンスはおよそ400出力トークンに相当します。レスポンスを簡潔に保つことは、コスト削減に最も効果的な手段のひとつです。</p>',
    },
    {
      type: 'title',
      text: '予算に合ったモデルの選び方',
      level: 3,
    },
    {
      type: 'tip',
      html: 'まずは<code>GPT-4o mini</code>や<code>Gemini 1.5 Flash</code>のような中堅モデルから始め、品質が不十分な場合にのみ上位モデルへ移行することをおすすめします。小型モデルと大型モデルのコスト差は、10〜100倍になることもあります。',
    },
    {
      type: 'paragraph',
      html: 'すべてのタスクが同じモデル品質を必要とするわけではありません。分類・抽出・要約といったタスクは、より小型で安価なモデルでも十分に対応できることが多いです。<code>claude-3-opus</code>や<code>o1</code>のような大規模フロンティアモデルは、品質が結果に直接影響する複雑な推論タスクのために取っておきましょう。',
    },
  ],
};

