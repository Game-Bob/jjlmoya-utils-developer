import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlEncoderDecoderUI } from '../ui';

const slug = 'url-encoder-decoder';
const title = 'URL Encoder and Decoder Online';
const description =
  'Convert special characters from any link to safe format (Percent-Encoding) or return them to their original readable state instantly and locally.';

const faqData = [
  {
    question: 'Which characters get encoded in a URL?',
    answer:
      'All characters not permitted in the ASCII standard for URLs are encoded: spaces, accented letters, symbols such as &, =, +, #, ?, / and others. For example, a space becomes %20 and ñ becomes %C3%B1.',
  },
  {
    question: 'What is the difference between encodeURI and encodeURIComponent?',
    answer:
      'encodeURI encodes a complete URL and leaves reserved characters such as / and ? intact. encodeURIComponent encodes all special characters including reserved ones, making it ideal for encoding individual query parameter values.',
  },
  {
    question: 'Why does my URL have %20 instead of spaces?',
    answer:
      'The HTTP protocol does not allow spaces in URLs. %20 is the Percent-Encoding representation of a space according to the ASCII standard. Some systems use the + sign as an alternative, but %20 is the most universal and safe.',
  },
  {
    question: 'Is it safe to use this tool with private URLs?',
    answer:
      'Yes, completely safe. All processing happens in your browser using native JavaScript (encodeURIComponent/decodeURIComponent). None of your URLs or parameters are sent to any external server.',
  },
];

const howToData = [
  {
    name: 'Paste the raw text',
    text: 'Type or paste your URL or text string into the upper field "Raw Text (Readable)".',
  },
  {
    name: 'Encode or decode',
    text: 'Click "Encode URL" to convert the text to safe Percent-Encoding format, or "Decode" to revert an encoded URL to its readable form.',
  },
  {
    name: 'Copy the result',
    text: 'Use the "Copy" button of the corresponding field to take the result to your clipboard.',
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

const ui: UrlEncoderDecoderUI = {
  labelRaw: 'Raw Text (Readable)',
  labelEncoded: 'Formatted URL (Encoded)',
  btnClear: 'Clear',
  btnCopy: 'Copy',
  btnCopied: 'Copied!',
  btnEncode: 'Encode URL',
  btnDecode: 'Decode',
  placeholderRaw: 'https://example.com/search?q=red high heels&size=38',
  placeholderEncoded: 'https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dred%20high%20heels%26size%3D38',
};

export const content: ToolLocaleContent<UrlEncoderDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'References and Documentation',
  bibliography: [
    {
      name: 'MDN Web Docs: encodeURIComponent()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent',
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
      text: 'What is URL Encoding?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'When browsing the internet or sending requests to servers, it is common to think of a URL (Uniform Resource Locator) as simply a "web address". However, internet protocol dictates that URLs can only be transmitted using a very restricted set of <strong>standard ASCII</strong> characters.',
    },
    {
      type: 'paragraph',
      html: 'What happens if the URL contains a space, accented letters, or special parameters such as plus (<code>+</code>) or equals (<code>=</code>) signs? To prevent systems from collapsing when trying to read illegal characters, these must be translated to their safe compatible form using <strong>Percent-Encoding</strong>.',
    },
    {
      type: 'title',
      text: 'How Percent-Encoding Works',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'When you use this tool, the algorithm takes any "unsafe" character (such as a space or an accented letter like ñ) and replaces it with a percent sign <code>%</code> followed by two hexadecimal digits corresponding to its value in the UTF-8 standard.',
    },
    {
      type: 'list',
      items: [
        '<strong>Basic Example:</strong> A simple space will be replaced by its safe equivalent: <code>%20</code>.',
        '<strong>Extended Support:</strong> The letter <code>á</code> becomes <code>%C3%A1</code>, and <code>ñ</code> becomes <code>%C3%B1</code>.',
      ],
    },
    {
      type: 'title',
      text: 'Importance in APIs and GET Requests',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'When developing integrations, a typical mistake is passing a raw string to URL parameters. If you insert <code>shirt&blue</code> raw into your backend (<code>/search?q=shirt&blue</code>), the server will interpret <code>blue</code> as a new parameter, breaking all the logic.',
    },
    {
      type: 'paragraph',
      html: 'This tool guarantees clean, automatic calculations with 100% execution in your local browser. None of your URL strings are transmitted to third-party servers, ensuring the privacy of your tokens and analytics parameters.',
    },
  ],
};
