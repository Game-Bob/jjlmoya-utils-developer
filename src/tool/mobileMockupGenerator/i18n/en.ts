import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileMockupGeneratorUI } from '../ui';

const slug = 'mobile-mockup-generator';
const title = 'Mobile Mockup Generator for App Store. iPhone and Google Pixel';
const description = 'Create professional presentations for the App Store and Google Play. iPhone and Pixel mockups with custom backgrounds, panoramic layouts, and bulk high-resolution export.';

const faqData = [
  { question: 'Are these screenshots valid for the App Store and Google Play?', answer: 'Yes, the generated images meet the proportions and quality requirements of the app stores. Just choose the right device (iPhone for iOS, Pixel for Android) before exporting.' },
  { question: 'Can I use my own custom backgrounds?', answer: 'Absolutely. In addition to our premium gradient library, you can upload any image from your computer to serve as the background environment for your mockups.' },
  { question: 'Is it free for commercial use?', answer: 'Yes, you can use the generated mockups for commercial projects, portfolios or presentations at no cost and with no watermarks.' },
  { question: 'Are my screenshots saved to any server?', answer: 'No. The generator works 100% locally in your browser. Your private images never leave your computer.' },
];

const howToData = [
  { name: 'Upload screenshots', text: 'Drag or select the screenshots of your mobile app that you want to present.' },
  { name: 'Choose device', text: 'Select the smartphone model (iPhone 15 Pro Max or Google Pixel 8) according to the target store.' },
  { name: 'Customize environment', text: 'Adjust the background, device angle, add marketing text and choose the composition layout.' },
  { name: 'Download in HD', text: 'Export all results in high-resolution WebP format ready to upload to the app store.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'DesignApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'en',
};

const ui: MobileMockupGeneratorUI = {
  labelUpload: 'Upload Screenshots',
  dropHint: 'Drag your images here',
  dropFormats: 'PNG, JPG or WEBP',
  btnMassReplace: 'Mass Replace (Batch)',
  massReplaceHint: 'Replaces current images while keeping your presets and text. Ideal for quick iterations.',
  labelSettings: 'Global Settings',
  labelDevice: 'Device',
  labelFont: 'Typography',
  labelBackground: 'Background',
  titleSwapColors: 'Swap colors',
  labelAngle: 'Angle',
  labelSafeArea: 'Safe Area (Top/Bottom)',
  labelSafeAreaColor: 'Area color',
  emptyTitle: 'No images yet',
  emptySubtitle: 'Upload your screenshots to start designing',
  btnClearAll: 'Clear Canvas',
  btnExport: 'Export All (.zip)',
  cardTitleDuplicate: 'Duplicate Scene',
  cardTitleReplace: 'Replace Current Screenshot',
  cardSectionLayouts: 'Master Layouts',
  cardSectionBranding: 'Branding & Copy',
  cardTitleResetText: 'Reset Text',
  cardLabelColor: 'Color',
  cardTextPlaceholder: 'Write your copy here...',
  cardSectionDevice: 'Device Layout',
  cardTitleResetDevice: 'Reset Position',
  cardSectionScene: 'Props & Background',
  cardBtnSpecialBg: 'Special Background',
  cardBtnDeleteScene: 'Delete Scene',
  cardRangeLabelSize: 'Size',
  cardRangeLabelX: 'X Axis',
  cardRangeLabelY: 'Y Axis',
  cardRangeLabelRotation: 'Rotation',
  cardRangeLabelScale: 'Scale',
  presetClassic: 'Classic',
  presetMobileBottom: 'Mobile Bottom',
  presetMobileTop: 'Mobile Top',
  presetFocus: 'Focus',
  presetDynamic: 'Dynamic',
  presetSplitLeft: 'Split Left',
  presetSplitRight: 'Split Right',
  presetImageLeft: 'Image Left',
  presetImageRight: 'Image Right',
  confirmClear: 'Are you sure you want to delete all mockups?',
  processingExport: 'Processing...',
  exportDone: 'Done!',
};

export const content: ToolLocaleContent<MobileMockupGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'References',
  bibliography: [
    { name: 'Apple App Store Screenshot Requirements', url: 'https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications' },
    { name: 'Google Play Screenshot Requirements', url: 'https://support.google.com/googleplay/android-developer/answer/9866151' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Elevate your screenshots to the next level', level: 2 },
    { type: 'paragraph', html: 'Don\'t limit yourself to flat screenshots. Our mockup tool allows developers and designers to create high-impact visual assets without needing Photoshop or Figma.' },
    { type: 'title', text: 'Power with Master Layouts', level: 3 },
    { type: 'grid', columns: 2 },
    { type: 'card', title: 'App Store & Google Play', html: '<p>Optimize your conversion rate. iPhone 15 Pro Max and Pixel 8 mockups are the world standard for app store listings.</p>' },
    { type: 'card', title: 'Pitch Decks & Marketing', html: '<p>Present your ideas with authority. Perfect for investor presentations, social media campaigns and professional UI/UX design portfolios.</p>' },
    { type: 'title', text: 'Professional workflow', level: 3 },
    { type: 'tip', html: 'Use the "Split Left" and "Split Right" presets to create continuous mockups that slide from one image to another in Instagram carousels or App Store screenshots.' },
  ],
};
