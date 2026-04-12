import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlCleanerUI } from '../ui';

const slug = 'url-tracking-cleaner';
const title = 'URL Tracking Cleaner: Remove UTM, FBCLID and GCLID';
const description = 'Automatically remove tracking and advertising parameters from your URLs. Share clean links and protect your digital privacy instantly.';

const faqData = [
  {
    question: 'What types of tracking parameters does this tool remove?',
    answer: 'Our tool automatically detects and removes the most common tracking parameters, including UTM (utm_source, utm_medium, etc.), advertising click identifiers (fbclid, gclid, msclkid) and email marketing campaign identifiers (mc_cid, _hsenc).',
  },
  {
    question: 'Does this affect website functionality?',
    answer: 'Generally no. These parameters are used almost exclusively for analytics and marketing. When you remove them, the page will load normally, but the website owner won\'t be able to track the exact source of your click.',
  },
  {
    question: 'Is it safe to process my links here?',
    answer: 'Absolutely. Like all our tools, the process is 100% client-side. Your links are never sent to our servers; everything happens privately in your own browser.',
  },
  {
    question: 'Why are my Facebook links so long?',
    answer: 'Facebook adds a parameter called "fbclid" to all links that leave their platform. This allows them to track your activity on other websites even if you have third-party advertising blocked.',
  },
];

const howToData = [
  { name: 'Paste your URL', text: 'Enter the complete URL that contains tracking parameters' },
  { name: 'Click Clean', text: 'The tool will analyze the URL automatically' },
  { name: 'Review results', text: 'You\'ll see the cleaned URL and a list of removed parameters' },
  { name: 'Copy and share', text: 'Use the clean URL in your emails, social media or messages' },
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

const ui: UrlCleanerUI = {
  labelInput: 'Paste the URL with tracking parameters',
  btnClean: 'Clean',
  labelCleaned: 'Clean URL',
  labelRemoved: 'Removed Trackers',
  countLabel: 'Parameters removed',
  reductionLabel: 'Length reduction',
  noneDetected: 'No common tracking parameters detected.',
  errorInvalid: 'Please enter a valid URL.',
  btnCopy: 'Copy',
  btnCopied: 'Copied',
};

export const content: ToolLocaleContent<UrlCleanerUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Resources on Privacy and Web Tracking',
  bibliography: [
    { name: 'Electronic Frontier Foundation (EFF): Guide to Online Tracking', url: 'https://www.eff.org/issues/online-behavioral-tracking' },
    { name: 'Google Analytics: UTM Parameter Documentation', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: 'Web Privacy: The Impact of Click IDs', url: 'https://www.w3.org/community/web-advertising/wiki/Click_Identifiers' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'URL Tracking Cleaner: Remove UTM, FBCLID and GCLID', level: 2 },
    {
      type: 'paragraph',
      html: 'Remove invisible trackers from your links to share them cleanly, privately and professionally. Discover what those strange codes in your URLs mean.',
    },
    { type: 'title', text: 'What is a URL Tracking Cleaner and why do you need it?', level: 3 },
    {
      type: 'paragraph',
      html: 'Ever copied a link to send to a friend and realized it\'s three times longer than it should be? That extra "noise" is tracking parameters. A <strong>tracking cleaner</strong> is a tool designed to "strip" the URL of all the advertising and tracking information that big platforms inject into every click you make.',
    },
    { type: 'title', text: 'Most common tracking parameters', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>UTM (Google Analytics):</strong> utm_source, utm_medium, utm_campaign to track campaigns',
        '<strong>FBCLID:</strong> Facebook click identifier to bypass cookie restrictions',
        '<strong>GCLID / DCLID:</strong> Google Click ID to link visits with Google Ads campaigns',
        '<strong>MSCLKID:</strong> Microsoft Advertising and Bing click identifier',
        '<strong>HubSpot & Mailchimp:</strong> Marketing automation parameters like _hsenc, mc_cid',
        '<strong>LinkedIn & Others:</strong> li_fat_id and other social media trackers',
      ],
    },
  ],
};
