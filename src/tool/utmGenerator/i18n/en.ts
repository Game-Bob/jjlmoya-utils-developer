import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UtmGeneratorUI } from '../ui';

const slug = 'utm-generator';
const title = 'UTM Parameter Generator for Google Analytics';
const description = 'Create precise tracking links for your digital marketing campaigns. Optimized for Google Analytics and other analytics tools.';

const faqData = [
  {
    question: 'Is using UTM parameters bad for SEO?',
    answer: 'No, as long as you use canonical tags. Search engines understand that UTM parameters are for analytics and do not create duplicate content.',
  },
  {
    question: 'Should I use UTM parameters for internal links?',
    answer: 'No, never. UTM tags on internal links break the user session in tools like Google Analytics, distorting your traffic data.',
  },
  {
    question: 'Does Google Analytics distinguish between uppercase and lowercase in UTM?',
    answer: 'Yes. "google", "Google" and "GOOGLE" will be treated as different sources. Always maintain consistency, preferably using only lowercase.',
  },
];

const howToData = [
  { name: 'Enter the URL', text: 'Input the complete URL of your website, including https://' },
  { name: 'Define the source', text: 'Specify where the traffic comes from (google, facebook, newsletter, etc.)' },
  { name: 'Select the medium', text: 'Choose the type of channel (cpc, email, social, organic, etc.)' },
  { name: 'Name your campaign', text: 'Assign an identifiable name to group your marketing efforts' },
  { name: 'Copy and use', text: 'Copy the generated URL and use it in your posts, ads or email signatures' },
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

const ui: UtmGeneratorUI = {
  labelUrl: 'Website URL (e.g. https://example.com) *',
  labelSource: 'Campaign source (e.g. google, newsletter) *',
  labelMedium: 'Campaign medium (e.g. cpc, email)',
  labelCampaign: 'Campaign name (e.g. summer_offer)',
  labelTerm: 'Campaign term (e.g. buy_shoes)',
  labelContent: 'Campaign content (e.g. banner_top)',
  labelGenerated: 'Generated URL:',
  btnCopy: 'Copy Link',
  btnCopied: 'Copied!',
  errorInvalid: 'Enter a valid URL',
  errorInvalidUrl: 'Invalid URL',
};

export const content: ToolLocaleContent<UtmGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'References',
  bibliography: [
    { name: 'Collect campaign data with custom URLs - Google Analytics Help (2024)', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: 'Best Practices for Campaign URL Tagging - VWO Blog (2023)', url: 'https://vwo.com/blog/utm-tagging-best-practices/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'UTM Generator: Tracking Parameters for Google Analytics', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>UTM</strong> parameters (Urchin Tracking Module) are text labels added to the end of a URL to track web traffic. Our generator simplifies creating trackable links for your digital marketing campaigns.',
    },
    { type: 'title', text: 'The 5 Pillars of a Trackable URL', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Campaign Source:</strong> Identifies the search engine, social network or traffic origin. Example: google, newsletter, facebook.',
        '<strong>Campaign Medium:</strong> Refers to the marketing channel. Example: cpc, email, social, banner, organic.',
        '<strong>Campaign Name:</strong> The specific name of your campaign. Example: summer_offer_2025, app_launch_v2.',
        '<strong>Campaign Term:</strong> For paid searches, the keywords you bid on. Example: buy_sports_shoes.',
        '<strong>Campaign Content:</strong> For A/B testing. Differentiates similar elements within a campaign. Example: header_v1, sidebar_v2.',
      ],
    },
    { type: 'title', text: 'Best Practices for UTM Tagging', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Case consistency:</strong> Tools differentiate "Google", "GOOGLE" and "google". Always use lowercase to avoid duplicates.',
        '<strong>Avoid spaces:</strong> Spaces become %20. Use hyphens (-) or underscores (_) instead.',
        '<strong>Don\'t use on internal links:</strong> UTM tracking is exclusively for external traffic. On internal links, it breaks the session and ruins key metrics.',
        '<strong>Document your tags:</strong> Keep a record of all combinations you use to prevent inconsistencies.',
      ],
    },
  ],
};
