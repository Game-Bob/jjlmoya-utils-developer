import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DuplicateCssRemoverUI } from '../ui';

const slug = 'duplicate-css-remover';
const title = 'Duplicate CSS Remover Online. Unify and Clean Stylesheets';
const description =
  'Free tool to clean and purge duplicate CSS code. Unifies redundant selectors, respects the cascade, and reduces your file size instantly in the browser.';

const faqData = [
  {
    question: 'What happens when CSS selectors are duplicated?',
    answer:
      'When the same selector appears multiple times, the browser applies all the rules but the last declaration of each property overrides the earlier ones. This generates heavier files than necessary with no real benefit to the visual result.',
  },
  {
    question: 'Will any properties be lost when removing duplicates?',
    answer:
      'No. The algorithm strictly respects the CSS cascade: for conflicting properties under the same selector, it always preserves the last declared one. Unique properties from each block are combined under a single unified selector.',
  },
  {
    question: 'Does it work with minified CSS or CSS with comments?',
    answer:
      'The tool automatically strips CSS comments before processing and works correctly with single-line code. For CSS with advanced nesting or complex at-rules, it is recommended to separate the blocks first.',
  },
  {
    question: 'Is my CSS sent to any server?',
    answer:
      'No. All processing happens directly in your browser via local JavaScript. No part of your CSS is transmitted to any external server, guaranteeing complete privacy of your code.',
  },
];

const howToData = [
  {
    name: 'Paste your dirty CSS',
    text: 'Copy the content of your CSS file with repeated selectors and paste it into the left field labeled "Dirty / Duplicate CSS".',
  },
  {
    name: 'Run the cleanup',
    text: 'Click the "Clean and Unify CSS" button. The tool will scan all selectors, merge properties, and remove redundant blocks.',
  },
  {
    name: 'Review stats and copy',
    text: 'Check the byte savings achieved and copy the optimized CSS with the "Copy Code" button to use it directly in your project.',
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

const ui: DuplicateCssRemoverUI = {
  labelInput: 'Dirty / Duplicate CSS',
  labelOutput: 'Clean CSS',
  placeholderInput: '.btn { padding: 10px; color: red; }\n.btn { margin: 5px; color: blue; }',
  placeholderOutput: 'Optimized and unified CSS will appear here...',
  btnClean: 'Clean and Unify CSS',
  btnCopy: 'Copy Code',
  btnCopied: 'Copied!',
  statBytesOriginal: 'Original Bytes',
  statBytesClean: 'Clean Bytes',
  statSaving: 'Savings',
};

export const content: ToolLocaleContent<DuplicateCssRemoverUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'References and Documentation',
  bibliography: [
    {
      name: 'Web Vitals: CSS Impact on Render-Blocking and FCP',
      url: 'https://web.dev/articles/render-blocking-resources',
    },
    {
      name: 'W3C Specification: CSS Cascade and Inheritance',
      url: 'https://www.w3.org/TR/css-cascade-4/',
    },
    {
      name: 'Clean CSS: Library and Methodologies for CSS Minification',
      url: 'https://github.com/clean-css/clean-css',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Why Does CSS Code Get Duplicated?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'When maintaining long-term web projects or working with legacy code, it is extremely common for multiple developers to write overlapping CSS rules. Often, out of fear of breaking an existing design, a developer prefers to add a new redundant rule at the end of the document rather than editing or refactoring the original.',
    },
    {
      type: 'paragraph',
      html: 'The result is an inefficient file with dozens of selectors declared repeatedly, killing readability and significantly increasing the download weight of your web page.',
    },
    {
      type: 'title',
      text: 'The Hidden Impact on Web Performance (Web Vitals)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Stylesheet files block the natural rendering of the browser (a <strong>Render-Blocking</strong> resource). Until your browser downloads and builds the complete CSSOM, your screen remains blank.',
    },
    {
      type: 'tip',
      html: 'Purging redundant styles is not just about code cleanliness; it is a measurable and immediate improvement in vital metrics such as <strong>First Contentful Paint (FCP)</strong>.',
    },
    {
      type: 'title',
      text: 'How We Unify Duplicate Rules',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'This utility acts as an intelligent assembler. Rather than just compressing whitespace (as a traditional minifier would), it recursively scans the text for identical selector patterns.',
    },
    {
      type: 'list',
      items: [
        'Imagine having the rule <code>.box { color: red; }</code> and a hundred lines later a <code>.box { padding: 10px; color: blue; }</code>. The tool will unify both blocks under the same selector <code>.box</code>, merging the padding.',
        '<strong>CSS Cascade Preservation:</strong> For direct conflicts, the algorithm strictly preserves the last declared property. This ensures your original layout does not break when purging the document.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Stop sending kilobytes of dead text to your users\' mobile phones. Unify your code in milliseconds entirely offline from your browser.',
    },
  ],
};
