import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssToInlineConverterUI } from '../ui';

const slug = 'css-to-inline-converter';
const title = 'CSS to Inline HTML Converter. Inliner for Emails';
const description =
  'Transform your stylesheets and CSS classes into automatically inlined styles in your HTML. Ideal for newsletters, transactional emails, and safe web layout.';

const faqData = [
  {
    question: 'Why do emails need inline CSS instead of external stylesheets?',
    answer:
      'Email clients like Outlook, Gmail, or Apple Mail filter or ignore <link> and <style> tags for security reasons. The only guaranteed way for a style to be applied correctly in an email is to embed it directly in the style attribute of each HTML element.',
  },
  {
    question: 'What happens if an element already has its own style attribute?',
    answer:
      'The tool respects existing inline styles and appends the new properties, simulating CSS cascade behavior: properties declared later override earlier ones in case of conflict.',
  },
  {
    question: 'Does it work with complex selectors like :hover or media queries?',
    answer:
      'The tool processes class, id, attribute, and structural pseudo-class selectors that DOMParser can resolve. State-dependent selectors like :hover and media queries cannot be inlined (they depend on runtime environment) and are ignored.',
  },
  {
    question: 'Is my HTML and CSS code sent to any server?',
    answer:
      'No. All processing happens 100% in your browser using the native DOMParser API. No byte of your code leaves your device, guaranteeing total privacy for templates with sensitive content.',
  },
];

const howToData = [
  {
    name: 'Paste your original HTML',
    text: 'Write or paste the HTML you want to process in the "Original HTML" field. It can be a fragment or a complete document.',
  },
  {
    name: 'Add your CSS rules',
    text: 'Paste the classes and ids you want to inject in the "CSS Rules" field. The tool applies them respecting selector specificity.',
  },
  {
    name: 'Convert and copy',
    text: 'Click "Inject CSS into HTML". The result with all inline styles will appear below, ready to copy and paste into your email manager or CMS.',
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

const ui: CssToInlineConverterUI = {
  labelHtml: 'Original HTML',
  labelCss: 'CSS Rules',
  labelOutput: 'Inline HTML Result',
  placeholderHtml: '<div class="my-class">Hello World</div>',
  placeholderCss: '.my-class { color: red; padding: 10px; }',
  placeholderOutput: 'Your HTML with embedded styles will appear here...',
  btnConvert: 'Inject CSS into HTML',
  btnCopy: 'Copy Code',
  btnCopied: 'Copied!',
  msgError: 'Processing error. Check that your HTML and CSS are valid.',
};

export const content: ToolLocaleContent<CssToInlineConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'References and Documentation',
  bibliography: [
    {
      name: 'Can I email: HTML and CSS Support Matrix for Emails',
      url: 'https://www.caniemail.com/',
    },
    {
      name: 'MDN Web Docs: The global style attribute',
      url: 'https://developer.mozilla.org/en/docs/Web/HTML/Global_attributes/style',
    },
    {
      name: 'DOMParser API: Safe in-browser parsing',
      url: 'https://developer.mozilla.org/en/docs/Web/API/DOMParser',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'What Is a CSS Inliner and Why Do You Need One?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'When developing modern web applications, we are used to separating concerns: HTML builds the structure, and an external CSS file provides all the visual styling. However, not all environments trust external stylesheets or global <code>&lt;style&gt;</code> tags.',
    },
    {
      type: 'paragraph',
      html: 'The most popular and strict use case where external CSS fails is <strong>Email Template Development</strong>. In these environments, the only reliable way for a font, color, or margin to render correctly is to be nested directly in the tag: <code>&lt;span style="color: red;"&gt;</code>.',
    },
    {
      type: 'title',
      text: 'The CSS Problem in Email Clients',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Email clients like Microsoft Outlook, Apple Mail, or Gmail have notorious histories with their restrictive CSS rendering engines. Most filter or discard <code>&lt;link&gt;</code> or <code>&lt;style&gt;</code> tags for fear of code injections that could break the reading interface.',
    },
    {
      type: 'tip',
      html: 'For newsletters or transactional emails (receipts, account confirmations), using tables and <em>inline CSS</em> is the gold standard in the email marketing industry.',
    },
    {
      type: 'title',
      text: 'How This Tool Works in Your Browser',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Safe Parsing:</strong> Uses the <code>DOMParser API</code> to temporarily transform the input HTML into a safe virtual DOM inside your browser.',
        '<strong>Cascade Simulation:</strong> Analyzes your CSS rules, applies specificity weights to selectors, and mutates the <code>style</code> attributes of selected HTML elements by injecting the code.',
        '<strong>100% Offline:</strong> No byte of your code leaves your device. Total privacy for templates with sensitive content.',
      ],
    },
  ],
};
