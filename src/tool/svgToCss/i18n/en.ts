import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgToCssUI } from '../ui';

const slug = 'svg-to-css-converter';
const title = 'Free Online SVG to CSS and Data URI Converter';
const description =
  'Transform your SVG icons and vectors into CSS code (Background or Mask) or compressed Data URI. Optimise your website performance by eliminating external HTTP requests.';

const faqData = [
  {
    question: 'Is it better to use a Data URI or an external .svg file?',
    answer:
      'It depends on the use case. Data URIs eliminate HTTP requests (ideal for small icons), but increase CSS file size. For large or detail-rich illustrations, an external file is preferable.',
  },
  {
    question: 'How do I change the colour of an SVG embedded in CSS?',
    answer:
      "The best way is via 'mask-image'. By defining the SVG as a mask, you can use 'background-color' to change its colour dynamically, even in :hover states.",
  },
  {
    question: 'Which browsers support CSS Masks?',
    answer:
      'All modern browsers (Chrome, Firefox, Safari, Edge) have full support. For older browsers, -webkit- prefixes are commonly used.',
  },
  {
    question: 'Does using Data URIs affect SEO?',
    answer:
      'Yes, positively. By reducing the number of requests needed to render the page, it improves load time (LCP) and Core Web Vitals scores.',
  },
  {
    question: 'Can I use it in frameworks like React or Tailwind?',
    answer:
      'Absolutely! You can copy the generated code and use it in your .css files or even as arbitrary values in Tailwind CSS.',
  },
];

const howToData = [
  {
    name: 'Paste the SVG',
    text: 'Copy the source code of your SVG file and paste it into the text area on the left.',
  },
  {
    name: 'Choose the output type',
    text: 'Select between Background Image (for static backgrounds), CSS Mask (for icons with dynamic colour) or Data URI Only (for direct use).',
  },
  {
    name: 'Copy the result',
    text: 'Click "Copy" to bring the generated CSS code to your clipboard.',
  },
  {
    name: 'Apply in your project',
    text: 'Paste the code into your stylesheet or CSS component. For Masks, also add background-color to define the icon colour.',
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

const ui: SvgToCssUI = {
  labelPasteTitle: 'Paste SVG',
  labelInputArea: 'SVG Source Code',
  labelPreviewOriginal: 'Original Preview',
  labelResultTitle: 'CSS Result',
  labelPreviewApplied: 'Applied Result',
  tabBackground: 'Background Image',
  tabMask: 'CSS Mask / Webkit',
  tabUri: 'Data URI Only',
  btnCopy: 'Copy',
  btnCopied: 'Copied!',
  placeholder: '<svg xmlns="http://www.w3.org/2000/svg" ...',
};

export const content: ToolLocaleContent<SvgToCssUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'References and Documentation',
  bibliography: [
    {
      name: 'CSS-Tricks: Using SVG as Background',
      url: 'https://css-tricks.com/using-svg/',
    },
    {
      name: 'MDN Web Docs: mask-image',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image',
    },
    {
      name: 'MDN Web Docs: background-image',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-image',
    },
    {
      name: 'W3C: CSS Masking Module Level 1',
      url: 'https://www.w3.org/TR/css-masking-1/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Why Convert SVG to CSS Data URI?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In modern web development, optimising performance and resource loading is essential. Embedding icons directly in CSS via <strong>Data URIs</strong> eliminates unnecessary HTTP requests, reducing latency and improving Time to Interactive (TTI).',
    },
    {
      type: 'paragraph',
      html: 'This tool transforms <code>&lt;svg&gt;</code> vector code into an encoded text string that the browser can interpret as a background image or a clipping mask, maintaining infinite scalability and the sharpness characteristic of vectors.',
    },
    {
      type: 'title',
      text: 'Key Technical Benefits',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Zero HTTP Requests:</strong> By embedding the graphic in your <code>.css</code> files, the browser does not need to download additional external files.',
        '<strong>Customisation via CSS Mask:</strong> Using the <code>mask-image</code> technique, you can change the colour of a complex vector icon simply by using <code>background-color</code>.',
        '<strong>Immediate Rendering:</strong> You avoid content flicker (FOUC) since critical visual resources are available as soon as the stylesheet is downloaded.',
      ],
    },
    {
      type: 'title',
      text: 'CSS Masks vs Backgrounds',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Many developers simply use <code>background-image</code> to embed vectors, but this has a limitation: you cannot change the SVG colour dynamically from CSS.',
    },
    {
      type: 'paragraph',
      html: 'Our utility supports code generation for <strong>CSS Masks</strong>. By applying a <code>mask-image</code> with the generated Data URI, the icon acts as a stencil, allowing the <code>background-color</code> of the element to define the final icon colour. It is the most professional and flexible way to manage icons in Astro, Next.js or any modern framework.',
    },
  ],
};
