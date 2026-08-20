import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromoteThisWebsiteUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'promote-this-website';
const title = 'Promote this website';
const description = 'The internal propaganda desk for jjlmoya.es in Spanish and GameBob.dev internationally. Turn screenshots from your own pages into social images before Bob decides the feed is embarrassing.';

const howTo = [
  { name: 'Paste one of our screenshots', text: 'Paste a screenshot from a page on jjlmoya.es or GameBob.dev with Ctrl+V. The board has requested evidence from its own empire.' },
  { name: 'Choose the language house', text: 'Pick jjlmoya.es for Spanish or GameBob.dev for the international page. This is not a marketplace. The cat already owns the premises.' },
  { name: 'Arrange the public narrative', text: 'Drag the screenshot, title, logo, background and mascot until the composition looks intentional rather than accidentally exported at 2 a.m.' },
  { name: 'Export before the cat notices', text: 'Download a PNG at the selected dimensions and publish it. Bob will take the credit because that is how management works.' },
];

const faq = [
  { question: 'Who is this tool actually for?', answer: 'For promoting the pages on jjlmoya.es in Spanish and GameBob.dev internationally. Everyone else is welcome to look through the window.' },
  { question: 'Can I paste a screenshot directly into the tool?', answer: 'Yes. Copy a screenshot from one of our pages to the clipboard and press Ctrl+V. It becomes the tool layer, because even the feline board accepts evidence when it arrives in the correct format.' },
  { question: 'What happens when I paste a production URL?', answer: 'The tool reads the page meta title, chooses the Spanish jjlmoya.es or international GameBob.dev brand, loads the Open Graph image and uses it as the visual evidence until a more specific tool image is available. The slug is finally denied a promotion.' },
  { question: 'Why are there two brands?', answer: 'jjlmoya.es is the Spanish page and GameBob.dev is the international page. The distinction is important for language and completely ignored by the cats.' },
  { question: 'Does the tool upload my images?', answer: 'No. Images stay in the browser and the composition is rendered locally. The only thing leaving the page is the PNG you deliberately download, assuming Bob has approved the export.' },
];

const ui: PromoteThisWebsiteUI = {
  urlLabel: 'Website URL',
  urlPlaceholder: 'https://www.example.com/tools/example/',
  applyUrl: 'Apply',
  formatLabel: 'Format',
  panoramic: 'Panoramic · 1536 × 1024',
  instagram: 'Instagram · 1080 × 1350',
  square: 'Square · 1080 × 1080',
  story: 'Story · 1080 × 1920',
  titleLabel: 'Title',
  titlePlaceholder: 'A short title for the image',
  titleSizeLabel: 'Title font size',
  titleBoxSizeLabel: 'Title box size',
  titleStyleLabel: 'Title treatment',
  brandLabel: 'Brand',
  brandStyleLabel: 'Brand treatment',
  advancedLabel: 'Advanced composition',
  assetsLabel: 'Assets',
  backgroundLabel: 'Background',
  toolLabel: 'Tool screenshot',
  logoLabel: 'Logo',
  mascotLabel: 'Mascot',
  layersLabel: 'Layers',
  backgroundLayer: 'Background',
  toolLayer: 'Tool',
  logoLayer: 'Logo',
  mascotLayer: 'Mascot',
  titleLayer: 'Title',
  reset: 'Reset',
  download: 'Download PNG',
  activeLayer: 'Active layer',
  canvasHint: 'Drag the layers directly on the canvas. Paste a screenshot with Ctrl+V.',
  pasted: 'Screenshot pasted as the tool layer.',
  urlApplied: 'URL applied. Adjust the title and add the screenshot you want to promote.',
  urlLoading: 'Reading the page title and its official image...',
  urlFailed: 'Could not read that page. Check the URL or add the assets manually.',
  fileLoaded: 'Asset loaded.',
  titlePaper: 'Editorial paper',
  titleRibbon: 'Folded ribbon',
  titleInk: 'Ink splash',
  titlePoster: 'Night poster',
  titleTicket: 'Ticket stub',
  titleMarker: 'Material underline',
  titleSplit: 'Split block',
  titleCapsule: 'Minimal capsule',
  titleCorner: 'Editorial corner',
  titleVertical: 'Vertical accent',
  brandPlain: 'Plain mark',
  brandPlaque: 'Ceramic plaque',
  brandTicket: 'Admit one',
  brandStamp: 'Rubber stamp',
  brandNeon: 'Neon sign',
  brandRibbon: 'Signal ribbon',
  brandCorner: 'Editorial corner',
  brandPixel: 'Pixel block',
  brandHalo: 'Soft halo',
  brandEditorial: 'Editorial line',
  defaultTool: 'Paste your tool screenshot',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<PromoteThisWebsiteUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Promote this website without angering the cat',
  faq,
  bibliographyTitle: 'Pages from the operation',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'The official propaganda desk for jjlmoya and GameBob', level: 2 },
    { type: 'paragraph', html: 'This is not a generic social media composer for a person who has just discovered the word branding. It exists to promote the pages published under <strong>jjlmoya.es</strong> in Spanish and <strong>GameBob.dev</strong> internationally, while the cats supervise from somewhere just outside the brief.' },
    { type: 'stats', columns: 3, items: [{ value: '2', label: 'House brands to glorify', icon: 'mdi:domain' }, { value: '4', label: 'Formats for the propaganda', icon: 'mdi:crop' }, { value: '0', label: 'Meetings requested by Bob', icon: 'mdi:cat' }] },
    { type: 'title', text: 'The screenshot remains in charge', level: 3 },
    { type: 'paragraph', html: 'Paste a real screenshot from one of our pages or load a production URL. The tool reads the page title instead of guessing from the slug, loads the official Open Graph image and keeps the visual evidence visible while the supporting cast gets arranged around it.' },
    { type: 'title', text: 'Two domains one suspiciously small team', level: 3 },
    { type: 'paragraph', html: '<strong>jjlmoya.es</strong> is the Spanish page. <strong>GameBob.dev</strong> is the international page. The language changes, the propaganda department does not. The human prepares the image. The cats retain editorial authority.' },
    { type: 'table', headers: ['Layer', 'What it does', 'What the board calls it'], rows: [['Tool', 'Position, scale, frame', 'The evidence'], ['Title', 'Text, size, treatment, color', 'The approved narrative'], ['Brand', 'Spanish or international page', 'The house whose glory is required'], ['Background', 'Open Graph image or upload', 'The respectable context']] },
    { type: 'tip', title: 'Start with one of our pages', html: 'Paste a production URL from <strong>jjlmoya.es</strong> or <strong>GameBob.dev</strong>. If the page title, brand and Open Graph image do not load, the board will blame the network, then the human, then the cats.' },
  ],
};
