import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssSpecificityCalculatorUI } from '../ui';

const slug = 'css-specificity-calculator';
const title = 'CSS优先级计算器 在线。选择器权重可视化';
const description =
  '计算任何CSS选择器的优先级和确切权重。可视工具，用于理解哪个CSS规则赢得级联并避免使用!important。';

const faqData = [
  {
    question: 'CSS优先级是什么?',
    answer:
      '优先级是浏览器用来决定当多个规则竞争时哪个CSS规则应用于元素的算法。它以三列分数(A、B、C)表示，分别表示ID、类/属性/伪类和元素/伪元素。',
  },
  {
    question: '类能否在优先级中击败ID?',
    answer:
      '不能直接击败。ID(1,0,0)始终击败任何数量的类(0,N,0)，因为优先级在列之间没有进位。一百个类(0,100,0)永远不会击败单个ID(1,0,0)。',
  },
  {
    question: '当两个选择器有相同的优先级时会发生什么?',
    answer:
      '当两个选择器具有完全相同的权重时，在CSS文件中最后声明的选择器获胜。这称为自然级联顺序。此计算器在出现平手时会以视觉方式警告您。',
  },
  {
    question: '为什么使用!important被认为是不好的做法?',
    answer:
      '!important指令通过强制声明覆盖任何其他规则来破坏自然CSS级联。这在大型项目中创建了难以调试的冲突。BEM等方法倡议保持优先级平坦，以避免需要!important。',
  },
];

const howToData = [
  {
    name: '输入第一个选择器',
    text: '在左侧文本字段中输入选择器A，例如:#header .nav-item > a。ID、类和元素计数器将立即更新。',
  },
  {
    name: '输入第二个选择器',
    text: '在右侧文本字段中输入选择器B，例如:ul li.active a:hover。实时观看权重如何变化。',
  },
  {
    name: '阅读结果',
    text: '计算器将使用绿色横幅突出显示获胜的选择器块。如果两者都平手，将出现平手消息，将级联顺序解释为决胜局。',
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
  inLanguage: 'zh',
};

const ui: CssSpecificityCalculatorUI = {
  labelA: '选择器A',
  labelB: '选择器B',
  placeholderA: '例如 #header .nav-item > a',
  placeholderB: '例如 ul li.active a:hover',
  cardIds: 'ID',
  cardClasses: '类/伪类',
  cardElements: '元素',
  bannerWinner: '此选择器获胜!',
  msgTie: '两个选择器的权重相同。如果它们竞争同一个元素，CSS中<strong>最后</strong>写的那个获胜。',
};

export const content: ToolLocaleContent<CssSpecificityCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料和文档',
  bibliography: [
    {
      name: 'MDN Web Docs: CSS Specificity',
      url: 'https://developer.mozilla.org/en/docs/Web/CSS/Specificity',
    },
    {
      name: 'W3C: Selectors Level 3 - Specificity',
      url: 'https://www.w3.org/TR/selectors-3/#specificity',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'CSS优先级是什么?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'CSS优先级是浏览器用来决定将哪些属性值应用于特定元素的算法。本质上，它是一个数学分数，告诉浏览器规则"有多具体"。',
    },
    {
      type: 'paragraph',
      html: '如果两个规则的优先级不同，无论书写顺序如何，权重较高的规则获胜。如果两者的权重相同，在源代码中最后声明的规则获胜。',
    },
    {
      type: 'title',
      text: '如何计算CSS优先级',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '优先级根据三个类别计算，形成三列权重，通常表示为<strong>(A、B、C)</strong>:',
    },
    {
      type: 'list',
      items: [
        '<strong>A列(ID):</strong> 计算唯一标识符的数量。例如:<code>#header</code>在A列中计为1。',
        '<strong>B列(类、属性和伪类):</strong> 计算所有类(<code>.button</code>)、属性(<code>[type="text"]</code>)和伪类(<code>:hover</code>)。',
        '<strong>C列(元素和伪元素):</strong> 计算所有HTML元素(<code>div</code>、<code>h1</code>)和伪元素(<code>::before</code>)。',
      ],
    },
    {
      type: 'title',
      text: '黄金法则: 列之间无进位',
      level: 3,
    },
    {
      type: 'tip',
      html: '优先级为(0,50,0)的规则<strong>永远不会</strong>比优先级为(1,0,0)的规则更具体。<strong>单个ID击败无限个类。</strong>列永远不会相互溢出。',
    },
    {
      type: 'title',
      text: '!important和BEM架构的问题',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<code>!important</code>指令是优先级规则的例外。使用时，该声明会自动覆盖任何其他规则。它被认为是不好的做法，因为它破坏了自然的级联。',
    },
    {
      type: 'paragraph',
      html: '为了避免大型项目中的优先级争议，<strong>BEM</strong>等方法倡议仅使用单深度类选择器，人为地将优先级保持在(0,1,0)平坦。',
    },
  ],
};

