import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicalTypographyUI } from '../ui';

const slug = 'musical-typography';
const title = 'Musical Typography Scale. Modular Scale Calculator';
const description =
  'Free online tool to create harmonious visual hierarchies using modular scales based on musical proportions. Generates ready-to-use CSS variables for your web design.';

const faqData = [
  {
    question: 'What is a typographic modular scale?',
    answer:
      'It is a method for determining font sizes based on a constant mathematical ratio. Just like in music, where notes have harmonic relationships, the modular scale creates a balanced and predictable visual hierarchy.',
  },
  {
    question: 'Why use musical intervals for design?',
    answer:
      'Musical intervals are proportions that the human brain perceives as harmonious. Applying them to text sizes creates a visual structure that feels correct and professional, rather than choosing sizes at random.',
  },
  {
    question: 'What is the Golden Ratio in typography?',
    answer:
      'It is the proportion 1.618, known as the Golden Section. It creates very dramatic and elegant scales where each step in the hierarchy grows exponentially. Perfect for portfolio or art-focused websites.',
  },
  {
    question: 'How do I implement the scale in my CSS file?',
    answer:
      'The tool generates CSS variables (tokens) in :root { --step-N: Xrem; } format. Copy them into your main CSS file and use them with var(--step-N) to maintain typographic consistency across your site.',
  },
];

const howToData = [
  {
    name: 'Set the base size',
    text: 'Enter the font size for your body text (usually 16px) which will serve as the fundamental note of your scale.',
  },
  {
    name: 'Choose the interval',
    text: 'Select a musical proportion to determine how much space there is between different heading levels.',
  },
  {
    name: 'Preview the hierarchy',
    text: 'Watch how the typographic levels behave in real time to verify the visual harmony fits your project.',
  },
  {
    name: 'Export the code',
    text: 'Click Copy CSS Variables to get the block ready to paste directly into your workflow.',
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
  applicationCategory: 'DesignApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'en',
};

const ui: MusicalTypographyUI = {
  labelConfig: 'Configuration',
  labelBaseSize: 'Base Size (px)',
  hintBaseSize: 'Your paragraph text size (usually 16px).',
  labelRatio: 'Musical Scale (Ratio)',
  hintRatio: 'Determines how much the size grows at each step.',
  labelCalculated: 'Calculated Values',
  labelPreview: 'Preview',
  btnCopyCss: 'Copy CSS Variables',
  feedbackCopied: 'Variables copied to clipboard!',
  previewText: 'Musical Typography',
  previewSubtext: 'A perfect harmonic scale for your design.',
  ratioSecundaMenor: 'Minor Second',
  ratioSegundaMayor: 'Major Second',
  ratioTerceraMenor: 'Minor Third',
  ratioTerceraMayor: 'Major Third',
  ratioCuartaPerfecta: 'Perfect Fourth',
  ratioCuartaAumentada: 'Augmented Fourth',
  ratioQuintaPerfecta: 'Perfect Fifth',
  ratioProporcionAurea: 'Golden Ratio',
  ratioSextaMayor: 'Major Sixth',
  ratioSeptimaMenor: 'Minor Seventh',
  ratioSeptimaMayor: 'Major Seventh',
  ratioOctava: 'Octave',
};

export const content: ToolLocaleContent<MusicalTypographyUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'References',
  bibliography: [
    {
      name: 'Bringhurst, R. The Elements of Typographic Style',
      url: 'https://en.wikipedia.org/wiki/The_Elements_of_Typographic_Style',
    },
    {
      name: 'Brown, T. More Meaningful Typography. A List Apart',
      url: 'https://alistapart.com/article/more-meaningful-typography/',
    },
    {
      name: 'Physics of Music. Musical Intervals and Scales',
      url: 'https://es.scribd.com/document/199729396/Physics-of-Music-Notes',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'The invisible harmony of web design',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The <strong>Musical Typography Scale</strong> applies the mathematics of musical intervals to typographic design. Just as a musical composition is governed by precise proportions, a solid visual design benefits from a mathematical structure that relates all sizes to each other.',
    },
    {
      type: 'title',
      text: 'How the modular scale works',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'The formula',
      html: '<p>The progression is simple: <code>Size = Base × Ratio<sup>n</sup></code>. Step 0 is your base text. Step 1 is a small subtitle. Step 4 or 5 could be your main H1. The same multiplying constant (the ratio) ensures all relationships are consistent.</p>',
    },
    {
      type: 'card',
      title: 'Why "Musical"',
      html: '<p>The Pythagoreans discovered that dividing a string in simple proportions (1:2, 2:3, 3:4) produced consonant sounds. These intervals, octave, perfect fifth and perfect fourth, are exactly the typographic ratios. You are composing visual music.</p>',
    },
    {
      type: 'title',
      text: 'Choosing the right ratio',
      level: 3,
    },
    {
      type: 'tip',
      html: 'For dense interfaces (dashboards, tables) use small ratios like <code>1.125</code> or <code>1.2</code>. For editorial or portfolio sites, use more expressive ratios like <code>1.5</code> or <code>1.618</code>.',
    },
    {
      type: 'paragraph',
      html: 'Don\'t limit the scale to <code>font-size</code> only. The same CSS variables work for <code>margin</code>, <code>padding</code> and <code>gap</code>. When whitespace follows the same mathematical progression as the text, the design achieves a level of cohesion that everyone feels but few can explain.',
    },
  ],
};
