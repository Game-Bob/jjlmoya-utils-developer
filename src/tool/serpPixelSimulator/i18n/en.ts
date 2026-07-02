import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SerpPixelSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'serp-pixel-simulator';
const title = 'SERP Simulator and SEO Pixel Counter';
const description = 'Preview Google-style search snippets in real time, measure title and meta description width by pixels, and see exactly where your copy will be trimmed.';

const howTo = [
  {
    name: 'Enter the title tag',
    text: 'Type or paste the page title you want to test. The SERP preview and pixel meter update on every keystroke.',
  },
  {
    name: 'Add the visible URL',
    text: 'Use a realistic domain and path so the snippet resembles the result a searcher would scan.',
  },
  {
    name: 'Write the meta description',
    text: 'Add the description copy and watch the pixel bar. When it exceeds the recommended visual width, the preview trims it with an ellipsis.',
  },
  {
    name: 'Switch desktop and mobile',
    text: 'Compare title rendering with a desktop or mobile card width before publishing metadata.',
  },
];

const faq = [
  {
    question: 'Why count pixels instead of characters for SEO titles?',
    answer: 'Google search cards are constrained by visual width. A title with many narrow letters can fit more characters than a title with wide letters, uppercase words, or bold-looking glyphs. Pixel measurement gives a closer preview of the visible result.',
  },
  {
    question: 'Does this guarantee exactly how Google will truncate my snippet?',
    answer: 'No. Google can rewrite title links and snippets, and rendering can vary by query, device, language and experiment. The tool is designed as a practical visual guardrail for writing metadata that is less likely to be cut off.',
  },
  {
    question: 'What pixel limits does the simulator use?',
    answer: 'The default desktop title limit is 580 px, the mobile title limit is 600 px, and the meta description guardrail is 920 px. These are writing targets, not official Google limits.',
  },
  {
    question: 'Why does the preview add an ellipsis?',
    answer: 'When the measured text exceeds the available pixel width, the simulator trims the string at the last fitting character and appends three dots, matching the practical behavior SEO teams need to spot lost meaning.',
  },
];

const ui: SerpPixelSimulatorUI = {
  titleLabel: 'Title tag',
  titlePlaceholder: 'GameBob | Indie Development Studio',
  urlLabel: 'Displayed URL',
  urlPlaceholder: 'https://www.gamebob.dev/en/',
  descriptionLabel: 'Meta description',
  descriptionPlaceholder: 'Discover our collection of tools and games designed to elevate your digital workflow and entertainment.',
  deviceLabel: 'Preview mode',
  desktopLabel: 'Desktop',
  mobileLabel: 'Mobile',
  titlePixelsLabel: 'Title width',
  descriptionPixelsLabel: 'Description width',
  charactersLabel: 'characters',
  previewLabel: 'Live Google-style preview',
  tooLongLabel: 'Too wide',
  goodLabel: 'Fits',
  emptyTitle: 'Your title will appear here',
  emptyDescription: 'Your meta description preview will appear here as you type.',
  defaultTitle: 'GameBob | Indie Development Studio',
  defaultUrl: 'https://www.gamebob.dev/en/',
  defaultDescription: 'Discover our collection of tools and games designed to elevate your digital workflow and entertainment.',
  fallbackUrl: 'example.com',
  fallbackFaviconText: 'G',
  pixelUnit: 'px',
  ellipsis: '...',
  fetchButtonLabel: 'Fetch',
  fetchLoadingLabel: 'Fetching...',
  fetchSuccessLabel: 'Metadata loaded from the URL.',
  fetchCorsError: 'The browser could not read this page. It may be blocked by CORS, a redirect, mixed content or a network rule. You can still paste or edit the metadata manually.',
  fetchInvalidUrlError: 'Enter a valid URL before fetching metadata.',
  fetchNoMetadataError: 'The page was fetched, but no title or meta description was found.',
  fetchGenericError: 'Metadata could not be fetched from this URL. Check the address or paste the fields manually.',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
};

export const content: ToolLocaleContent<SerpPixelSimulatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'SERP simulator FAQ',
  faq,
  bibliographyTitle: 'Search result documentation',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Stop guessing how your Google result will look',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A title tag can look perfect in a spreadsheet and still break in the search result. Google does not reserve space by character count; it renders text inside a visual card. That means <strong>GameBob | Indie Development Studio</strong> and another title with the same number of characters can occupy very different widths depending on the letters, casing, punctuation and spacing.',
    },
    {
      type: 'tip',
      title: 'The rule that actually helps',
      html: 'Write the snippet so the important promise survives the ellipsis. Put the page type, the search intent and the strongest reason to click before the pixel limit. Brand names are useful, but they should not push the main benefit out of view.',
    },
    {
      type: 'title',
      text: 'What the pixel counter is measuring',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Element', 'What matters', 'How to use the result'],
      rows: [
        ['Title tag', 'Rendered width in pixels, not raw character count', 'Keep the primary keyword and click promise visible before truncation.'],
        ['Displayed URL', 'Visual trust and topic clarity', 'Use a readable path that reinforces where the result leads.'],
        ['Meta description', 'A wider snippet area with query-dependent behavior', 'Front-load the benefit because Google may shorten or rewrite it.'],
        ['Device mode', 'Desktop and mobile cards can feel different', 'Check both before shipping metadata for important pages.'],
      ],
    },
    {
      type: 'title',
      text: 'Why character limits are a weak SEO habit',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Traditional advice such as "keep titles under 60 characters" is convenient, but it hides the real problem. Wide letters like W and M, uppercase words, separators, numbers and long brand names all consume different space. Pixel measurement makes the trade-off visible immediately: you can see whether a phrase earns its place or steals room from a stronger message.',
    },
    {
      type: 'title',
      text: 'A practical workflow for better snippets',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Start with intent:</strong> describe what the user gets, not just what the page is called.',
        '<strong>Test the full title:</strong> paste it into the simulator and watch the bar before publishing.',
        '<strong>Move weak words out:</strong> if the bar turns red, remove filler before cutting valuable terms.',
        '<strong>Check the ellipsis:</strong> if the truncated preview loses meaning, rewrite the title instead of accepting the cut.',
        '<strong>Repeat for the description:</strong> make sure the first sentence carries the value proposition on its own.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'When the bar turns red',
      html: 'A red bar is not a penalty warning. It means the current text is wider than the selected visual target, so the simulator trims it with dots. Treat that as an editorial signal: decide whether the hidden words are disposable, or whether the snippet needs a sharper structure.',
    },
    {
      type: 'title',
      text: 'Limits, rewrites and real-world expectations',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'No simulator can guarantee the exact snippet Google will show. Google may rewrite title links, bold query terms, choose page text instead of the meta description, or display different snippets for different searches. This tool is best used as a fast writing and QA step: it catches obvious visual overflow before the page reaches production.',
    },
    {
      type: 'summary',
      title: 'Best use of this SERP simulator',
      items: [
        'Use the pixel bar to catch visual overflow before publishing metadata.',
        'Keep the main search intent and click promise visible before any ellipsis.',
        'Fetch metadata from URLs that allow CORS, then edit the result manually when needed.',
        'Treat the preview as a writing guardrail, because Google can still rewrite snippets per query.',
      ],
    },
  ],
};
