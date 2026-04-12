import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssSpecificityCalculatorUI } from '../ui';

const slug = 'css-specificity-calculator';
const title = 'CSS Specificity Calculator Online. Selector Weight Visualizer';
const description =
  'Calculate the specificity and exact weight of any CSS selector. Visual tool to understand which CSS rule wins the cascade and avoid using !important.';

const faqData = [
  {
    question: 'What is CSS specificity?',
    answer:
      'Specificity is the algorithm browsers use to decide which CSS rule applies to an element when multiple rules compete. It is represented as a three-column score (A, B, C) indicating IDs, classes/attributes/pseudo-classes, and elements/pseudo-elements respectively.',
  },
  {
    question: 'Can a class ever beat an ID in specificity?',
    answer:
      'Not directly. An ID (1,0,0) always beats any number of classes (0,N,0) because specificity has no carry-over between columns. A hundred classes (0,100,0) will never beat a single ID (1,0,0).',
  },
  {
    question: 'What happens when two selectors have the same specificity?',
    answer:
      'When two selectors have exactly the same weight, the one declared last in the CSS file wins. This is known as natural cascade order. This calculator visually alerts you when a tie occurs.',
  },
  {
    question: 'Why is using !important considered bad practice?',
    answer:
      'The !important directive breaks the natural CSS cascade by forcing a declaration over any other rule. This creates conflicts that are hard to debug in large projects. Methodologies like BEM advocate for keeping specificity flat to avoid ever needing !important.',
  },
];

const howToData = [
  {
    name: 'Enter the first selector',
    text: 'Type Selector A in the left text field, for example: #header .nav-item > a. The IDs, Classes and Elements counters will update instantly.',
  },
  {
    name: 'Enter the second selector',
    text: 'Type Selector B in the right text field, for example: ul li.active a:hover. Watch how the weights change in real time.',
  },
  {
    name: 'Read the result',
    text: 'The calculator will highlight the winning selector block with a green banner. If both tie, a tie message will appear explaining cascade order as the tiebreaker.',
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
  inLanguage: 'en',
};

const ui: CssSpecificityCalculatorUI = {
  labelA: 'Selector A',
  labelB: 'Selector B',
  placeholderA: 'e.g. #header .nav-item > a',
  placeholderB: 'e.g. ul li.active a:hover',
  cardIds: 'IDs',
  cardClasses: 'Classes / Pseudos',
  cardElements: 'Elements',
  bannerWinner: 'This selector wins!',
  msgTie: 'Both selectors have the same weight. If they compete for the same element, the one written <strong>last</strong> in the CSS wins.',
};

export const content: ToolLocaleContent<CssSpecificityCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'References and Documentation',
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
      text: 'What Is CSS Specificity?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'CSS specificity is the algorithm by which browsers decide which property values to apply to a particular element. It is essentially a mathematical score that tells the browser "how specific" a rule is.',
    },
    {
      type: 'paragraph',
      html: 'If two rules have different specificity levels, the one with the higher weight will win, regardless of the order in which they were written. If both have the same weight, the last one declared in the source code wins.',
    },
    {
      type: 'title',
      text: 'How to Calculate CSS Specificity',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Specificity is calculated based on three categories forming a three-column weight, often expressed as <strong>(A, B, C)</strong>:',
    },
    {
      type: 'list',
      items: [
        '<strong>Column A (IDs):</strong> Counts the number of unique identifiers. Example: <code>#header</code> counts as 1 in column A.',
        '<strong>Column B (Classes, Attributes and Pseudo-classes):</strong> Counts all classes (<code>.button</code>), attributes (<code>[type="text"]</code>) and pseudo-classes (<code>:hover</code>).',
        '<strong>Column C (Elements and Pseudo-elements):</strong> Counts all HTML elements (<code>div</code>, <code>h1</code>) and pseudo-elements (<code>::before</code>).',
      ],
    },
    {
      type: 'title',
      text: 'The Golden Rule: No Numeric Carry-Over',
      level: 3,
    },
    {
      type: 'tip',
      html: 'A rule with specificity (0,50,0) will <strong>never</strong> be more specific than a rule (1,0,0). <strong>A single ID beats infinite classes.</strong> Columns never overflow into each other.',
    },
    {
      type: 'title',
      text: 'The Problem With !important and BEM Architecture',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The <code>!important</code> directive is an exception to specificity rules. When used, that declaration automatically overrides any other. It is considered bad practice because it destroys the natural cascade.',
    },
    {
      type: 'paragraph',
      html: 'To avoid specificity wars in large projects, methodologies like <strong>BEM</strong> advocate for using only single-depth class selectors, artificially keeping specificity flat at (0,1,0).',
    },
  ],
};
