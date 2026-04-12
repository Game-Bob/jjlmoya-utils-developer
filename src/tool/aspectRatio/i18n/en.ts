import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AspectRatioUI } from '../ui';

const slug = 'aspect-ratio-calculator';
const title = 'Aspect Ratio Calculator in Pixels. Online Proportions';
const description =
  'Calculate new image, video and web design resolutions and maintain the exact proportion to avoid distorting graphics. Supports 16:9, 4:3, 21:9 and custom formats.';

const faqData = [
  {
    question: 'What is the Aspect Ratio?',
    answer:
      'The Aspect Ratio describes the geometric relationship between the width and height of an image or screen. It is represented with two numbers separated by a colon (e.g. 16:9), indicating how the height changes proportionally in relation to the width.',
  },
  {
    question: 'Why is it important to maintain correct proportions?',
    answer:
      'Ignoring the Aspect Ratio causes squashed or stretched images, unexpected letterboxing in videos and web components that break their layout at different screen sizes. Maintaining correct proportions is key to professional display.',
  },
  {
    question: 'How do I calculate the height from the width with a given ratio?',
    answer:
      'The formula is: Height = Width × (Ratio Height / Ratio Width). For example, for a width of 1280px with a 16:9 ratio, the height would be: 1280 × (9/16) = 720px.',
  },
  {
    question: 'What is the standard Aspect Ratio for YouTube videos?',
    answer:
      '16:9 is the standard ratio for YouTube and most modern video platforms. It corresponds to resolutions such as 1280×720 (HD), 1920×1080 (Full HD) or 3840×2160 (4K UHD).',
  },
  {
    question: 'What Aspect Ratio do vertical social media videos use?',
    answer:
      '9:16, which is exactly the inverse of widescreen format. It is the native ratio of TikTok, Instagram Reels and YouTube Shorts, originating from consuming content on a mobile phone held vertically.',
  },
];

const howToData = [
  {
    name: 'Enter the original ratio',
    text: 'Enter the width and height values of the ratio you want to maintain (e.g. 16 and 9 for widescreen) or select one of the presets.',
  },
  {
    name: 'Adjust the scale',
    text: 'Change the width or height value in the "Real Scale" section. The tool will automatically calculate the opposite value to maintain the proportion.',
  },
  {
    name: 'Check the preview',
    text: 'The preview panel shows the resulting shape at proportional scale, with the simplified ratio and calculated resolution.',
  },
  {
    name: 'Apply in your project',
    text: 'Copy the calculated values to use in your CSS (aspect-ratio: 16 / 9), in video export or in the settings of your design tool.',
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

const ui: AspectRatioUI = {
  labelConfig: 'Configuration',
  labelRatio: 'Original Ratio',
  labelWidth: 'Width',
  labelHeight: 'Height',
  labelScale: 'Real Scale',
  labelPixelWidth: 'Pixels (Width)',
  labelPixelHeight: 'Pixels (Height)',
  labelPreview: 'Proportional Preview',
  labelStatus: 'Perfect Ratio',
  labelOffline: '100% Offline Tool',
};

export const content: ToolLocaleContent<AspectRatioUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'References and Documentation',
  bibliography: [
    {
      name: 'MDN Web Docs: aspect-ratio (CSS)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio',
    },
    {
      name: 'Wikipedia: Aspect ratio',
      url: 'https://en.wikipedia.org/wiki/Aspect_ratio',
    },
    {
      name: 'W3C: CSS Box Sizing Level 4',
      url: 'https://www.w3.org/TR/css-sizing-4/#aspect-ratio',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'What is the Aspect Ratio?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In graphic design, photography and frontend development, the <strong>Aspect Ratio</strong> describes the geometric relationship between the width and height of an image, screen or container. It is typically represented with two numbers separated by a colon (e.g. <code>16:9</code>), indicating how the height increases proportionally in response to its width.',
    },
    {
      type: 'paragraph',
      html: 'Mishandling aspect ratios is a common cause of squashed photographs, videos with unexpected cropping (letterboxing) or web components that break their layout when viewed progressively from mobile to ultra-wide monitors.',
    },
    {
      type: 'title',
      text: 'Common Industry Ratios',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Depending on your discipline, you will constantly deal with a limited number of global standard proportions:',
    },
    {
      type: 'list',
      items: [
        '<strong>16:9 (Widescreen):</strong> The absolute dominant format for modern monitors, TVs, YouTube recordings or standard high-definition resolutions (such as 1920×1080 or 4K).',
        '<strong>9:16 (Vertical):</strong> Originated from native mobile content consumption (TikTok, Instagram Reels, YouTube Shorts). Exactly the same ratio as widescreen videos, but with the physical rotation of the device applied.',
        '<strong>4:3 (Classic / Vintage):</strong> Present in old televisions and monitors or in analogue and specialised digital camera models. Its slightly square appearance draws direct attention to the central compositional axis.',
      ],
    },
    {
      type: 'title',
      text: 'Web Development and the CSS aspect-ratio property',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Formerly in CSS, complex mathematical systems using a <strong>Padding Hack</strong> (such as injecting a <code>padding-top: 56.25%</code>) were used to reserve dynamic spaces in YouTube iframes or cover images, to avoid terrible Cumulative Layout Shift (CLS) on page load.',
    },
    {
      type: 'paragraph',
      html: 'Nowadays all modern layouts directly apply properties such as <code>aspect-ratio: 16 / 9;</code>, achieving semantic code and allowing the browser to automatically derive the missing dimension from the original width defined via Grid or Flexbox.',
    },
    {
      type: 'paragraph',
      html: 'This local pixel calculator transfers design power to an instant scaling calculation that will protect your renders from catastrophic misconfigurations.',
    },
  ],
};
