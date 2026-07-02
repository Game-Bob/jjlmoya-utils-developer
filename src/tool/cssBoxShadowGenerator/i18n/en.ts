import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssBoxShadowGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'css-box-shadow-generator';
const title = 'CSS Box Shadow Generator';
const description = 'Design layered CSS box shadows visually with live preview, sliders, color pickers and presets. Copy clean native CSS instantly.';

const howTo = [
  { name: 'Pick a preset or start from scratch', text: 'Choose from card, float, inset, glow, or layered presets, or adjust the default shadow with the sliders.' },
  { name: 'Add and layer shadows', text: 'Click + to add more shadow layers (up to 5). Select each layer to edit its offset, blur, spread, color and opacity independently.' },
  { name: 'Toggle inset and background', text: 'Enable the inset checkbox for inner shadows. Change the preview background color to match your design.' },
  { name: 'Copy the CSS', text: 'When the preview matches your design, copy the generated box-shadow CSS and paste it into your stylesheet.' },
];

const faq = [
  { question: 'Can I use multiple shadows on one element?', answer: 'Yes. CSS supports comma-separated box-shadow values. This tool lets you stack up to 5 layers, each with independent controls. Select a layer tab to edit it.' },
  { question: 'What does a negative spread value do?', answer: 'A negative spread shrinks the shadow inward before blurring, making it appear smaller than the element. This is useful for subtle floating effects where the shadow sits close to the edges.' },
  { question: 'Why use the inset option?', answer: 'Inset shadows render inside the element border, creating a pressed or recessed look. They are ideal for form inputs, sunken cards, and depth illusions on flat surfaces.' },
  { question: 'Is the generated CSS framework-independent?', answer: 'Yes. The output is pure native CSS box-shadow syntax. Use it in any project that supports standard CSS.' },
];

const ui: CssBoxShadowGeneratorUI = {
  offsetXLabel: 'Offset X',
  offsetYLabel: 'Offset Y',
  blurLabel: 'Blur',
  spreadLabel: 'Spread',
  opacityLabel: 'Opacity',
  insetLabel: 'Color & Inset',
  addLayer: 'Add layer',
  removeLayer: 'Remove layer',
  resetAll: 'Reset',
  codeTitle: 'Generated CSS',
  copyCode: 'Copy CSS',
  copied: 'Copied!',
  previewLabel: 'Layers',
  presetCard: 'Card',
  presetFloat: 'Float',
  presetInset: 'Inset',
  presetGlow: 'Glow',
  presetLayered: 'Layered',
  presetsLabel: 'Presets',
  layerPrefix: 'Layer',
  bgColorLabel: 'BG Color',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<CssBoxShadowGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'CSS Box Shadow Generator FAQ',
  faq,
  bibliographyTitle: 'CSS Box Shadow References',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Design box shadows visually instead of guessing values', level: 2 },
    { type: 'paragraph', html: 'Tweaking <strong>box-shadow</strong> by hand is tedious. Offset X, offset Y, blur radius, spread radius, color, opacity and inset all interact in subtle ways. This visual generator lets you stack multiple shadows, preview them live, and copy production-ready CSS.' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: 'Shadow layers per element', icon: 'mdi:layers' }, { value: 'Live', label: 'Preview updates on every slider move', icon: 'mdi:eye' }, { value: '5', label: 'Quick-start presets', icon: 'mdi:star' }] },
    { type: 'title', text: 'Layer multiple shadows for realistic depth', level: 3 },
    { type: 'paragraph', html: 'Real-world shadows are rarely a single uniform blur. Layering a tight shadow close to the element with a softer, wider shadow farther away creates natural depth. Use the <strong>+</strong> button to add layers and the layer tabs to switch between them.' },
    { type: 'title', text: 'Understanding each control', level: 3 },
    { type: 'table', headers: ['Control', 'CSS value', 'Effect'], rows: [['Offset X', 'First length', 'Horizontal displacement. Positive moves shadow right.'], ['Offset Y', 'Second length', 'Vertical displacement. Positive moves shadow down.'], ['Blur', 'Third length', 'Blur radius. Larger creates softer, wider shadows.'], ['Spread', 'Fourth length', 'Expands or shrinks the shadow. Negative shrinks.'], ['Color & Opacity', 'rgba()', 'Shadow color with independent opacity control.'], ['Inset', 'inset keyword', 'Renders the shadow inside the element border.']] },
    { type: 'tip', title: 'Use a subtle background grid', html: 'The preview area shows a dotted grid so you can see how shadows extend beyond the element. Use negative spread values for shadows that sit tighter than the element itself.' },
    { type: 'summary', title: 'Best practice workflow', items: ['Start with a preset that matches your design direction.', 'Add layers to build realistic depth (tight shadow + soft shadow + ambient).', 'Use a negative spread on the soft shadow for a floating card effect.', 'Copy the generated CSS and paste it into your stylesheet.'] },
  ],
};
