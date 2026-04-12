import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CalculadoraTiempoDatosUI } from '../ui';

const slug = 'data-time-calculator-web-speed-impact';
const title = 'Data Time Calculator Impact of Web Speed';
const description = 'Discover how much lifetime your users lose waiting for your website to load on 3G, 4G, and 5G connections. Calculate the real impact of your site weight.';

const faqData = [
  {
    question: 'Why is knowing my website load time important?',
    answer: 'Because it directly impacts user experience, SEO, and conversions. Google has documented that each second of delay reduces conversions by 7%. Additionally, 53% of mobile visitors abandon a page that takes more than 3 seconds to load.',
  },
  {
    question: 'What are those small percentages of lifetime loss?',
    answer: 'They represent the percentage of a person\'s total lifetime (approximately 80 years or 2.5 billion seconds) spent waiting for your page to load. Though small individually, multiplied by millions of users, they represent enormous amounts of wasted human time.',
  },
  {
    question: 'What is the average connection speed worldwide?',
    answer: '4G is standard in developed countries. However, millions of users in developing countries still rely on 3G. This is why it is crucial to optimize your site for all connection speeds.',
  },
  {
    question: 'What should my website weight be?',
    answer: 'Google recommends that the homepage load in less than 3 seconds on a typical 4G connection. For this, a site should ideally weigh between 1-2 MB. However, the global average is close to 2-3 MB.',
  },
  {
    question: 'How can I reduce my site weight?',
    answer: 'Main strategies: optimize images (50-80% of weight), minify CSS and JavaScript, use lazy loading, implement browser cache, and use a CDN. Image optimization is usually the most impactful factor.',
  },
  {
    question: 'Does load speed affect Google ranking?',
    answer: 'Yes, absolutely. Google considers Core Web Vitals as important ranking factors. A slower site will rank worse than a faster one, even with similar content.',
  },
];

const howToData = [
  { name: 'Enter Your Site Weight', text: 'Use browser developer tools or WebPageTest to find your page weight. Enter that value in MB.' },
  { name: 'Observe Load Times', text: 'The calculator shows how many seconds your site takes to load on 3G, 4G, and 5G. Real-world times are usually higher.' },
  { name: 'Understand Lifetime Impact', text: 'The "lifetime" percentage shows how much of someone\'s life is spent waiting. Use this as motivation to optimize.' },
  { name: 'Optimize and Recalculate', text: 'After optimizing, measure again and recalculate. See how small improvements have big impact.' },
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

const ui: CalculadoraTiempoDatosUI = {
  headerTitle: 'Time Lost in Networks',
  labelWebSize: 'Website weight (MB)',
  unit: 'MB',
  presetsLabel: 'REALISTIC EXAMPLES',
  labelSpeed: 'Connection speed',
  speedLabel3g: '3G',
  speedValue3g: '0.4 Mbps',
  speedLabel4g: '4G/LTE',
  speedValue4g: '10 Mbps',
  speedLabel5g: '5G',
  speedValue5g: '100+ Mbps',
  labelTimes: 'How many times per day?',
  resultTitle: 'Results',
  resultSingleLoad: 'Single load',
  resultDailyTotal: 'Daily total',
  resultTimePerYear: 'per year waiting',
  resultLifeYears: 'in your lifetime',
  resultMessage: 'You have lost approximately 1 year of life',
  copyMessage: 'Copied',
  preset3g: '3G',
  preset4g: '4G',
  preset5g: '5G',
};

export const content: ToolLocaleContent<CalculadoraTiempoDatosUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Technical Resources on Web Optimization',
  bibliography: [
    { name: 'Google PageSpeed Insights', url: 'https://pagespeed.web.dev/' },
    { name: 'WebPageTest - Analyze Website Speed', url: 'https://www.webpagetest.org/' },
    { name: 'Web.dev - Core Web Vitals', url: 'https://web.dev/vitals/' },
    { name: 'MDN - Web Performance', url: 'https://developer.mozilla.org/en-US/docs/Web/Performance' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Why Website Load Speed is Critical', level: 2 },
    {
      type: 'paragraph',
      html: 'In today\'s digital era, website load speed is not a luxury but a necessity. Every millisecond counts when retaining users, improving search rankings, and maximizing conversions. Modern users expect pages to load in less than 3 seconds.',
    },
    { type: 'title', text: 'Impact on User Experience', level: 3 },
    {
      type: 'paragraph',
      html: '53% of mobile visitors abandon a page if it takes more than 3 seconds to load. Conversion rates drop 7% for each additional second of latency.',
    },
    { type: 'title', text: 'Understanding Connection Speeds', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>3G:</strong> 0.4 Mbps - Common in rural areas and developing countries',
        '<strong>4G/LTE:</strong> 10 Mbps - Standard in developed countries',
        '<strong>5G:</strong> 100+ Mbps - Gradually expanding, still limited',
      ],
    },
    { type: 'title', text: 'Strategies to Reduce Site Weight', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Image Optimization:</strong> Represents 50-80% of weight. Reduce by 40-60% with tools like TinyPNG.',
        '<strong>Minification:</strong> Remove unnecessary code from CSS and JavaScript. Save 30-50%.',
        '<strong>Lazy Loading:</strong> Load images only when users scroll to them.',
        '<strong>Browser Cache:</strong> Cache static files on user browsers.',
        '<strong>CDN:</strong> Serve content from geographically close servers.',
      ],
    },
    { type: 'title', text: 'Conclusion: Every Second Counts', level: 2 },
    {
      type: 'paragraph',
      html: 'Your website is often the first impression users have of your brand. A slow site frustrates users and loses business. A fast, responsive site creates a positive experience and improves all your metrics.',
    },
  ],
};
