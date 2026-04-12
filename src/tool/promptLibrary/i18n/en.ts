import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromptLibraryUI } from '../ui';

const slug = 'prompt-library';
const title = 'Private AI Prompt Library';
const description = 'Organize, tag and save your ChatGPT, Midjourney and Claude prompts privately. Your own prompt bank in localStorage.';

const faqData = [
  {
    question: 'Where are my prompts saved?',
    answer: 'Your prompts are saved exclusively in your browser\'s local storage (localStorage). We do not use external servers, meaning your data is 100% private.',
  },
  {
    question: 'What happens if I clear browser cookies or history?',
    answer: 'If you clear site data or local storage, you will lose your saved prompts. We recommend making backups if you frequently clear your browser.',
  },
  {
    question: 'Can I use this tool for Midjourney, ChatGPT or DALL-E?',
    answer: 'Yes, it is compatible with any type of AI instruction. You can create specific tags to organize your commands and copy them to your preferred AI tool easily.',
  },
];

const howToData = [
  { name: 'Create a prompt', text: 'Click the New Prompt button and enter the title and instruction.' },
  { name: 'Add tags', text: 'Type tags separated by space or comma to classify your prompts.' },
  { name: 'Use variables', text: 'Use brackets [LIKE THIS] in the text to create fillable fields on the card.' },
  { name: 'Copy and share', text: 'Copy to clipboard with one click or share a direct link with the share button.' },
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

const ui: PromptLibraryUI = {
  placeholderSearch: 'Search by keyword or tag...',
  btnNew: 'New Prompt',
  emptyTitle: 'Your library is empty',
  emptyDesc: 'Create your first prompt and start building your private AI repository.',
  btnAddFirst: 'Add the first one',
  modalTitleCreate: 'Create New Prompt',
  modalTitleEdit: 'Edit Prompt',
  labelTitle: 'Identifying title',
  placeholderTitle: 'E.g.: SEO Marketing Expert',
  labelContent: 'Instruction (Prompt)',
  placeholderContent: 'Write detailed instructions for the AI here...',
  hintContent: 'Tip: use brackets [LIKE THESE] to fill in variables later.',
  labelTags: 'Tags',
  placeholderTags: 'E.g.: marketing, seo (space or comma to add)',
  btnCancel: 'Cancel',
  btnSave: 'Save Locally',
  ariaLabelStar: 'Star prompt',
  ariaLabelEdit: 'Edit prompt',
  ariaLabelShare: 'Share prompt',
  ariaLabelCopy: 'Copy prompt',
  ariaLabelDelete: 'Delete prompt',
  varsTitle: 'Required variables',
  noResults: 'No prompts found for this search.',
  confirmTitle: 'Delete prompt?',
  confirmDesc: 'This action cannot be undone.',
  btnCancelDelete: 'Cancel',
  btnConfirmDelete: 'Delete permanently',
};

export const content: ToolLocaleContent<PromptLibraryUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Prompt Engineering References',
  bibliography: [
    { name: 'Prompt Engineering Guide (DAIR.AI)', url: 'https://www.promptingguide.ai/' },
    { name: 'What is prompt engineering (Google Cloud)', url: 'https://cloud.google.com/discover/what-is-prompt-engineering' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Why do you need a Prompt Library?', level: 2 },
    {
      type: 'paragraph',
      html: 'If you regularly work with AI tools like ChatGPT, Claude or Midjourney, you have probably found yourself repeating the same instructions. A <strong>prompt library</strong> is the definitive solution to stop wasting time rewriting your favorite commands.',
    },
    { type: 'title', text: 'Benefits of organizing your prompts', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Instant search:</strong> Find that specific instruction you used months ago with a simple text search.',
        '<strong>Tag classification:</strong> Tag your prompts as "marketing", "programming" or "copywriting" to filter quickly.',
        '<strong>One-click copy:</strong> Copy the full text to clipboard with a single click.',
        '<strong>Total privacy:</strong> All your data is stored locally in your browser via localStorage.',
      ],
    },
    { type: 'title', text: 'Variables in your prompts', level: 3 },
    {
      type: 'paragraph',
      html: 'Use the <strong>[VARIABLE]</strong> notation in your prompts to create dynamically fillable fields. When you open a card, inputs will appear for each defined variable. The prompt is copied with the filled values, ready to paste into your AI.',
    },
    { type: 'title', text: 'Sharing prompts', level: 3 },
    {
      type: 'paragraph',
      html: 'Each prompt can be shared via a URL. The share button generates a link that, when opened, shows the creation form pre-filled with the prompt content.',
    },
  ],
};
