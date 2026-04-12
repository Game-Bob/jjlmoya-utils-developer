import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PlaceholderGeneratorUI } from '../ui';

const slug = 'placeholder-image-generator';
const title = 'Placeholder Image Generator. Rapid Web Mockups Online';
const description =
  'Create custom placeholder images for your web designs. Adjust resolution, background, text and export in PNG, WebP or JPEG instantly.';

const faqData = [
  {
    question: 'What is a placeholder image?',
    answer:
      'A placeholder or filler image is a temporary graphic used in web design and layout to reserve space where a definitive image will go. They help visualise the structure of a page before the final content is available.',
  },
  {
    question: 'Can I use any resolution in the generator?',
    answer:
      'Yes, you can enter any numeric value for width and height. The generator will create a canvas with the exact requested dimensions, perfect for strict grids or specific advertising banners.',
  },
  {
    question: 'In what format are images downloaded?',
    answer:
      'By default, images are generated in WebP for optimal compression, but you can choose to download them in PNG format to maintain maximum lossless quality, or JPEG for traditional compatibility.',
  },
  {
    question: 'Is this processed on any server?',
    answer:
      'No, all image rendering is generated instantly in the virtual memory (Canvas) of your own browser. It is instant and does not require sending data over the network.',
  },
];

const howToData = [
  {
    name: 'Set dimensions',
    text: 'Enter width and height values directly or click on one of the presets (FHD, HD, Instagram, etc.) to fill them in automatically.',
  },
  {
    name: 'Configure colours and text',
    text: 'Choose background and text colours using the native pickers or by typing a hexadecimal code. Optionally, add custom text to replace the default dimension label.',
  },
  {
    name: 'Select typography and format',
    text: 'Choose the font family and size. Select the output format (WebP, PNG or JPEG) according to your needs.',
  },
  {
    name: 'Download the image',
    text: 'Click the Download button to save the generated placeholder directly to your device.',
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

const ui: PlaceholderGeneratorUI = {
  labelDimensions: 'Quick Dimensions',
  labelWidth: 'Width (px)',
  labelHeight: 'Height (px)',
  labelBgColor: 'Background',
  labelTextColor: 'Text',
  labelCustomText: 'Custom Text (Optional)',
  placeholderCustomText: 'E.g.: Hero Banner',
  labelFontFamily: 'Typography',
  labelFontSize: 'Base Size',
  fontSizeAuto: 'Automatic',
  labelFormat: 'Output Format',
  btnDownload: 'Download Image',
};

export const content: ToolLocaleContent<PlaceholderGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'References and Documentation',
  bibliography: [
    {
      name: 'MDN Web Docs: HTMLCanvasElement.toDataURL()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL',
    },
    {
      name: 'MDN Web Docs: CanvasRenderingContext2D',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D',
    },
    {
      name: 'W3C: HTML Canvas 2D Context',
      url: 'https://www.w3.org/TR/2dcontext/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'The Ultimate Tool for Rapid Mockups',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'During the early stages of conceptualisation or structural layout of a website (wireframing), we rarely have the final photographic content. Empty dimensions can distort the global visualisation of the product and hide critical spacing or proportion errors. A placeholder image generator instantly solves this, allowing you to inject precisely dimensioned coloured areas.',
    },
    {
      type: 'tip',
      title: 'Frictionless Design',
      html: 'Integrating a space of exactly 1200x800 pixels is imperative when building CSS Grids. By downloading fill blocks you avoid injecting extra CSS or third-party scripts into your temporary code.',
    },
    {
      type: 'title',
      text: 'The Importance of Avoiding External Services',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A recurring practice in the frontend ecosystem consists of linking services like <code>via.placeholder.com</code> or similar directly in the <code>src</code> attributes of HTML. While theoretically agile through URL parameters, it has profound side effects that a meticulous developer would avoid at all costs.',
    },
    {
      type: 'paragraph',
      html: 'Inserting a remote domain in each image tag of a development page increases DNS requests, penalises hot-reloading systems of Vite, Gulp or Webpack and accidentally exposes traces in branches that eventually end up in the cloud. By using this utility and generating the image in your preferred format (WebP, PNG or JPEG), you centralise your prototype completely in localhost mode.',
    },
    {
      type: 'title',
      text: 'Key Features of the Generator Algorithm',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Pixel Perfect Resolution:</strong> Native HTML5 Canvas ensures the exported canvas corresponds arithmetically to the coordinates stipulated by the user.',
        '<strong>Typographic Autoscaling:</strong> In Automatic mode, the font size calculates the perimeter area and number of characters to elegantly fit the text without causing unwanted <em>overflows</em>.',
        '<strong>Hexadecimal Fusion:</strong> Bidirectional state control between native HTML ecosystem selectors and typed inputs, guaranteeing precise contrasts dictated by your Figma or Penpot UI/UX palette.',
      ],
    },
    {
      type: 'title',
      text: 'The Hidden Art of Technical Wireframing',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'There is no monolithic project or micro frontend that does not pass through foundation stages, especially when facing demanding clients or Product Managers with an iron vision. Facilitating agile graphical iterations without dragging the overhead of finalised <em>assets</em> separates the fast developer from the stuck one. This generator directly exploits the modern JS <code>toDataURL()</code> API on your local machine to deliver an industry-level result without dubious intermediate processing.',
    },
  ],
};
