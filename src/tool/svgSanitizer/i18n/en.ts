import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgSanitizerUI } from '../ui';

const slug = 'svg-sanitizer';
const title = 'Online SVG Sanitizer';
const description = 'Optimize and clean SVGs exported from Figma, Adobe Illustrator or Inkscape. Remove metadata, unnecessary attributes and empty groups to get a production-ready SVG.';

const faqData = [
  {
    question: 'Can I paste the full HTML of a page with an embedded SVG?',
    answer: 'Yes. The sanitizer detects the SVG element inside the HTML and extracts only that block for processing. It also works if you paste the SVG fragment directly.',
  },
  {
    question: 'Does it work with Illustrator SVGs?',
    answer: 'Yes. Illustrator exports SVGs with XML declarations, metadata and proprietary namespaces that the sanitizer removes. The result is an SVG compatible with all modern browsers.',
  },
  {
    question: 'What is the difference between cleaning and minifying?',
    answer: 'Cleaning removes unnecessary attributes and tags but keeps the indented format so you can read and edit the code. Minifying also collapses everything into a single line to reduce file size to the maximum.',
  },
  {
    question: 'Can removing IDs break the SVG?',
    answer: 'Only if an element in the SVG references another by ID, for example through fill="url(#gradient)". In that case, disable the Remove IDs option. It is disabled by default precisely to avoid this problem.',
  },
  {
    question: 'Is my SVG code sent to any server?',
    answer: 'No. All processing happens in your browser using the native DOMParser and XMLSerializer APIs. The code never leaves your device.',
  },
];

const howToData = [
  { name: 'Paste the SVG', text: 'Paste the SVG code exported from Figma, Illustrator or Inkscape into the text area.' },
  { name: 'Configure options', text: 'Enable or disable options: remove IDs, strip width/height and minify according to your needs.' },
  { name: 'Clean', text: 'Click Clean SVG to process the code and get the optimized result.' },
  { name: 'Copy or download', text: 'Use the Copy or Download buttons to get the clean SVG ready for production.' },
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
  step: howToData.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
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

const ui: SvgSanitizerUI = {
  labelInput: 'Paste your dirty SVG here',
  labelOutput: 'Clean SVG',
  optRemoveIds: 'Remove IDs',
  optRemoveWH: 'Strip width/height',
  optMinify: 'Minify',
  btnSanitize: 'Clean SVG',
  btnCopy: 'Copy',
  btnCopied: 'Copied',
  btnDownload: 'Download',
  statOriginal: 'Original',
  statCleaned: 'Clean',
  statReduction: 'Reduction',
  statElems: 'Elem. removed',
  statAttrs: 'Attrs. removed',
  errorPaste: 'Paste an SVG before cleaning.',
  errorProcess: 'Error processing the SVG.',
};

export const content: ToolLocaleContent<SvgSanitizerUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'References',
  bibliography: [
    { name: 'SVG Specification - W3C', url: 'https://www.w3.org/TR/SVG2/' },
    { name: 'Figma SVG Export - Official Documentation', url: 'https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma' },
    { name: 'SVGO - SVG Optimizer (open source reference)', url: 'https://github.com/svg/svgo' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'SVG Sanitizer: Clean Code from Figma and Illustrator', level: 2 },
    {
      type: 'paragraph',
      html: 'Paste any SVG exported from <strong>Figma</strong>, Adobe Illustrator or the browser inspector and get a clean, optimized vector file ready for production.',
    },
    { type: 'title', text: 'Why are exported SVGs so dirty?', level: 3 },
    {
      type: 'paragraph',
      html: 'When you export an SVG from Figma, you get a file loaded with attributes that only make sense inside the app: <code>data-name</code>, <code>xml:space</code>, references to internal layers and design metadata. The result is an SVG that can weigh 40-70% more than necessary.',
    },
    { type: 'title', text: 'What the Sanitizer removes', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Editor metadata:</strong> <code>metadata</code>, <code>title</code> and <code>desc</code> tags that Figma and Illustrator add automatically.',
        '<strong>Inkscape namespaces:</strong> all elements with <code>inkscape:</code> and <code>sodipodi:</code> prefix.',
        '<strong>Unnecessary attributes:</strong> <code>xml:space</code>, <code>version</code>, superfluous <code>xmlns:*</code> and Figma <code>data-*</code> attributes.',
        '<strong>Empty groups:</strong> <code>&lt;g&gt;</code> elements with no content left as artifacts of deleted layers.',
        '<strong>XML declarations:</strong> the <code>&lt;?xml version="1.0"?&gt;</code> declaration and DOCTYPE unnecessary when embedding SVG in HTML.',
      ],
    },
  ],
};
