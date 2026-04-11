import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonFormatterUI } from '../ui';

const slug = 'json-formatter';
const title = 'Free Online JSON Formatter and Validator';
const description =
  'Free online tool to format, validate and repair JSON code. Beautify and format JSON. Detects syntax errors and improves code readability.';

const faqData = [
  {
    question: 'Is my data safe when using this formatter?',
    answer:
      'Absolutely. All processing happens 100% in your browser (Client-Side). Your JSON data is never sent to any server, ensuring complete privacy for your data structures.',
  },
  {
    question: "What causes an 'Invalid JSON' error?",
    answer:
      'It is usually caused by trailing commas at the end of an object, missing double quotes around keys, or invisible characters. Our tool highlights the exact line of the error so you can fix it.',
  },
  {
    question: 'Can it repair broken JSON?',
    answer:
      'Our tool automatically tries to correct common errors such as unnecessary trailing commas or malformed character escapes, so the JSON becomes valid according to the RFC 8259 standard.',
  },
  {
    question: 'Does it support very large JSON files?',
    answer:
      'Yes, the processing engine is optimised to handle complex data structures and large files without blocking the browser interface.',
  },
];

const howToData = [
  {
    name: 'Paste your code',
    text: 'Paste your unformatted or minified JSON into the main text area.',
  },
  {
    name: 'Validate and Format',
    text: 'The system will automatically analyse the code, highlighting syntax errors and applying indentation to improve readability.',
  },
  {
    name: 'Choose a style',
    text: 'Choose between an expanded (beautify) or compressed (minify) format depending on whether you need readability or space saving.',
  },
  {
    name: 'Copy the result',
    text: 'Click the copy button to take the perfectly validated JSON to your clipboard.',
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

const ui: JsonFormatterUI = {
  labelInput: 'Input (JSON)',
  labelOutput: 'Output',
  btnMinify: 'Minify',
  btnBeautify: 'Beautify',
  btnFix: 'Try to Fix',
  btnCopy: 'Copy',
  statusWaiting: 'Waiting for input...',
  statusValid: 'Valid JSON',
  statusInvalid: 'Invalid JSON',
  toastCopied: 'Copied!',
  toastFixed: 'JSON repaired (Preview)',
  toastFixFailed: 'Could not repair automatically',
  placeholder: 'Paste your JSON here...',
};

export const content: ToolLocaleContent<JsonFormatterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'References and Standards',
  bibliography: [
    {
      name: 'RFC 8259 – The JavaScript Object Notation (JSON) Data Interchange Format (IETF)',
      url: 'https://datatracker.ietf.org/doc/html/rfc8259',
    },
    {
      name: 'ECMA-404 – The JSON Data Interchange Syntax (Ecma International)',
      url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-404/',
    },
    {
      name: 'JSON.org – Introducing JSON',
      url: 'https://www.json.org/json-en.html',
    },
    {
      name: 'MDN Web Docs – JSON',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'JSON Validation and Formatting',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'JSON (JavaScript Object Notation) is the de facto standard for data exchange on the web. However, its strict syntax makes it prone to human errors when edited manually.',
    },
    {
      type: 'paragraph',
      html: 'This tool allows you to validate the structure, format the code to improve its readability, and automatically repair common syntax errors.',
    },
    { type: 'grid', columns: 2 },
    {
      type: 'card',
      title: 'Common Errors it Repairs',
      html: "<ul><li><strong>Single Quotes:</strong> The JSON standard requires double quotes. The tool converts <code>'key': 'value'</code> to <code>\"key\": \"value\"</code>.</li><li><strong>Unquoted Keys:</strong> Detects JavaScript-style object keys and adds the necessary quotes.</li><li><strong>Trailing Commas:</strong> Removes commas at the end of objects or arrays (trailing commas) that break the strict parser.</li></ul>",
    },
    {
      type: 'card',
      title: 'Features',
      html: '<ul><li><strong>Syntax Highlighting:</strong> Colours keys, strings, numbers and booleans to facilitate quick reading.</li><li><strong>Real-Time Validation:</strong> Instantly indicates whether the JSON is valid or shows the specific parsing error.</li><li><strong>Total Privacy:</strong> Processing happens 100% in your browser. No data is sent to external servers.</li></ul>',
    },
  ],
};
