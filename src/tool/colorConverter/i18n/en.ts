import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ColorConverterUI } from '../ui';

const slug = 'color-converter-rgb-hex-hsl';
const title = 'Online Color Converter RGB HEX and HSL';
const description = 'Convert colors between RGB, HEX and HSL instantly. Generate complementary color harmonies and analyze WCAG contrast. 100% client-side and private.';

const faqData = [
  {
    question: 'How does the RGB to HEX and HSL color converter work?',
    answer: 'The tool takes Red, Green and Blue (RGB) values and uses mathematical algorithms to convert them to their hexadecimal (HEX) equivalent or Hue, Saturation, Lightness (HSL) values. It also works in reverse.',
  },
  {
    question: 'Why should I use HSL instead of HEX in my designs?',
    answer: 'The HSL format is much more intuitive. It lets you adjust saturation or lightness without changing the hue, making it far easier to create harmonic palettes or button states (hover, disabled).',
  },
  {
    question: 'What is the relative contrast value?',
    answer: 'It is a metric that indicates the readability of text against a background based on its luminance. High contrast ensures people with visual impairments can read the content, following WCAG accessibility guidelines.',
  },
  {
    question: 'Is it safe to use this online color converter?',
    answer: 'Absolutely. Being 100% client-side, your color data never leaves your computer. All processing happens directly in your browser, guaranteeing privacy and instant performance.',
  },
];

const howToData = [
  { name: 'Select a Color', text: 'Use the Red, Green and Blue sliders or type a HEX code directly into the text field.' },
  { name: 'Adjust RGB Channels', text: 'Move the sliders to change the intensity of each channel and see the real-time update.' },
  { name: 'Copy the Format', text: 'Click the Copy button next to the HEX, RGB or HSL format you need.' },
  { name: 'Explore Harmonies', text: 'Click on the harmony colors (complementary, analogous, triadic) to copy them to the clipboard.' },
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

const ui: ColorConverterUI = {
  labelPreview: 'Preview (click to copy HEX)',
  labelHarmonies: 'Color Harmonies',
  labelR: 'Red',
  labelG: 'Green',
  labelB: 'Blue',
  labelComp: 'Comp.',
  labelAna1: 'Analog 1',
  labelAna2: 'Analog 2',
  labelTri1: 'Triad 1',
  labelTri2: 'Triad 2',
  btnCopy: 'Copy',
  btnCopied: 'Copied',
  contrastLabel: 'Contrast',
  clickToCopy: 'Click to copy',
};

export const content: ToolLocaleContent<ColorConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Color and Web Design Resources',
  bibliography: [
    { name: 'W3C: CSS Color Documentation', url: 'https://www.w3.org/TR/css-color-4/' },
    { name: 'MDN: HSL Color Model Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl' },
    { name: 'WebAIM: Contrast and Accessibility Guide', url: 'https://webaim.org/resources/contrastchecker/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'RGB to HEX and HSL Color Converter for Developers', level: 2 },
    {
      type: 'paragraph',
      html: 'In the world of <strong>frontend development</strong> and <strong>UI/UX design</strong>, color management is a constant task. Our <strong>online color converter</strong> lets you transform values between <strong>HEX, RGB and HSL</strong> instantly and with mathematical precision.',
    },
    { type: 'title', text: 'Color Formats: HEX, RGB and HSL', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>HEX (Hexadecimal):</strong> The de facto standard for CSS. Compact and easy to share in code.',
        '<strong>RGB (Red, Green, Blue):</strong> Based on the additive light system. Ideal for manipulating channels directly or applying transparency with RGBA.',
        '<strong>HSL (Hue, Saturation, Lightness):</strong> The most intuitive format. Adjust hue, saturation and lightness to create harmonic palettes.',
      ],
    },
    { type: 'title', text: 'Contrast and WCAG Accessibility', level: 3 },
    {
      type: 'paragraph',
      html: 'The calculator includes a <strong>relative contrast</strong> measurement based on luminance. This helps you meet <strong>WCAG</strong> guidelines, ensuring your text is readable against selected backgrounds.',
    },
    { type: 'title', text: 'Automatic Color Harmonies', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Complementary:</strong> The opposite color on the color wheel, ideal for maximum contrast.',
        '<strong>Analogous:</strong> Adjacent colors that create smooth, harmonic transitions.',
        '<strong>Triadic:</strong> Three equidistant colors for vibrant, balanced compositions.',
      ],
    },
  ],
};
