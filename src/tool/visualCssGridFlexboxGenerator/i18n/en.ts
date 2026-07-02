import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VisualCssGridFlexboxGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'visual-css-grid-flexbox-generator';
const title = 'Visual CSS Grid & Flexbox Layout Generator';
const description = 'Design responsive layouts by dragging visual blocks, resizing the container, tuning alignment controls and using presets  -  then copy clean native CSS instantly.';

const howTo = [
  {
    name: 'Choose a preset or Flexbox / Grid',
    text: 'Start with a layout preset (navbar, cards, hero, sidebar, gallery) or switch between Flexbox and Grid mode manually.',
  },
  {
    name: 'Drag and resize the layout',
    text: 'Reorder items by dragging them and resize the container from the corner handle to test how the design reacts to available space.',
  },
  {
    name: 'Tune alignment controls',
    text: 'Use sliders and selects for direction, wrap, gap, columns, justify-content, align-items, align-content, width, height and item size.',
  },
  {
    name: 'Copy production-ready CSS',
    text: 'Copy the generated CSS when the visual result matches the structure you want to implement. No framework dependencies.',
  },
];

const faq = [
  {
    question: 'When should I use Flexbox instead of CSS Grid?',
    answer: 'Use Flexbox when the layout is mainly one-dimensional  -  navigation bars, button groups, wrapped cards, centered content. Use Grid when rows and columns matter together  -  dashboards, galleries, form layouts and structured page sections.',
  },
  {
    question: 'Can this generator create responsive layouts?',
    answer: 'Yes. The generated CSS uses native flex wrapping or grid repeat columns. Resize the visual canvas to test how spacing and alignment behave at different sizes before writing media queries.',
  },
  {
    question: 'Why do justify-content and align-items feel different in grid and flex?',
    answer: 'Flexbox distributes items along a main axis and cross axis. Grid places items into tracks first, then aligns content inside those tracks. Toggling both modes on the same canvas makes that behavioral difference immediately visible.',
  },
  {
    question: 'Is the generated CSS tied to a framework?',
    answer: 'No. The output is pure native CSS. Use it in plain HTML, Astro, React, Vue, Svelte, Web Components or any project that accepts standard CSS.',
  },
  {
    question: 'What are the layout presets for?',
    answer: 'Presets jump-start common layouts so you can see realistic configurations instead of starting from scratch. Each preset sets mode, direction, wrap, alignment and container size to match a real-world pattern.',
  },
];

const ui: VisualCssGridFlexboxGeneratorUI = {
  modeLabel: 'Layout mode',
  flexMode: 'Flexbox',
  gridMode: 'Grid',
  canvasLabel: 'Interactive layout canvas',
  addItem: 'Add item',
  removeItem: 'Remove item',
  resetLayout: 'Reset layout',
  gapLabel: 'Gap',
  columnsLabel: 'Grid columns',
  widthLabel: 'Container width',
  heightLabel: 'Container height',
  justifyLabel: 'Justify',
  alignLabel: 'Align',
  itemSizeLabel: 'Item size',
  codeTitle: 'Generated CSS',
  copyCode: 'Copy CSS',
  copied: 'Copied!',
  dragHint: 'Resize the bordered canvas from the corner handle  -  CSS updates live!',
  outputLabel: 'Generated CSS output',
  justifyStart: 'Start',
  justifyCenter: 'Center',
  justifyEnd: 'End',
  justifyBetween: 'Space between',
  justifyAround: 'Space around',
  justifyEvenly: 'Space evenly',
  alignStart: 'Start',
  alignCenter: 'Center',
  alignEnd: 'End',
  alignStretch: 'Stretch',
  alignBaseline: 'Baseline',
  itemPrefix: 'Block',
  directionLabel: 'Direction',
  directionRow: 'Row →',
  directionRowReverse: '← Row rev',
  directionColumn: 'Column ↓',
  directionColumnReverse: '↑ Col rev',
  wrapLabel: 'Wrap',
  wrapNoWrap: 'No wrap',
  wrapWrap: 'Wrap',
  wrapWrapReverse: 'Wrap rev',
  alignContentLabel: 'Align content',
  alignContentStart: 'Start',
  alignContentCenter: 'Center',
  alignContentEnd: 'End',
  alignContentBetween: 'Space between',
  alignContentAround: 'Space around',
  alignContentEvenly: 'Space evenly',
  alignContentStretch: 'Stretch',
  presetsLabel: 'Presets',
  presetNavbar: 'Navbar',
  presetCards: 'Cards',
  presetHero: 'Hero',
  presetSidebar: 'Sidebar',
  presetGallery: 'Gallery',
  shakeLimit: 'Need at least 2 items!',
  spanHint: 'Double-click an item to change its column span (1-3) in Grid mode',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
};

export const content: ToolLocaleContent<VisualCssGridFlexboxGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'CSS layout generator FAQ',
  faq,
  bibliographyTitle: 'CSS Grid and Flexbox references',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Build CSS layouts by seeing the behavior, not memorizing properties',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'CSS Grid and Flexbox are powerful because they describe layout relationships instead of fixed coordinates. The hard part is predicting how <strong>gap</strong>, <strong>justify-content</strong>, <strong>align-items</strong>, direction, wrapping, tracks and available space interact. This visual generator turns those abstract properties into a live playground with presets, drag-and-drop reordering and real-time CSS output.',
    },
    {
      type: 'stats',
      columns: 3,
      items: [
        { value: '5', label: 'Quick-start layout presets', icon: 'mdi:view-grid-plus' },
        { value: 'Live', label: 'CSS output updates on every change', icon: 'mdi:code-braces' },
        { value: '0', label: 'Framework dependencies in generated CSS', icon: 'mdi:language-css3' },
      ],
    },
    {
      type: 'title',
      text: 'Flexbox vs Grid: choose the model before polishing alignment',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Flexbox',
          description: 'Best for one-dimensional flows where items line up along a row or column and may wrap naturally.',
          icon: 'mdi:format-align-justify',
          highlight: true,
          points: ['Navigation bars', 'Button groups', 'Wrapped cards', 'Centered content'],
        },
        {
          title: 'CSS Grid',
          description: 'Best for two-dimensional structures where rows and columns define the shape of the composition.',
          icon: 'mdi:grid',
          points: ['Dashboards', 'Galleries', 'Form layouts', 'Editorial sections'],
        },
      ],
    },
    {
      type: 'title',
      text: 'What each control teaches you',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Control', 'CSS property', 'What to watch'],
      rows: [
        ['Direction', '<code>flex-direction</code>', 'How the main axis flows  -  swap row for column to change the entire layout logic.'],
        ['Wrap', '<code>flex-wrap</code>', 'Whether items stay on one line or flow to new rows when space runs out.'],
        ['Gap', '<code>gap</code>', 'The space between items without adding margins that break at edges.'],
        ['Justify', '<code>justify-content</code>', 'How free space is distributed along the main axis or inline axis.'],
        ['Align', '<code>align-items</code>', 'How items sit on the cross axis or inside their grid area.'],
        ['Align content', '<code>align-content</code>', 'How wrapped flex lines or grid rows distribute extra cross-axis space.'],
        ['Grid columns', '<code>grid-template-columns</code>', 'How many equal tracks the grid creates before items wrap to another row.'],
        ['Container size', '<code>width</code> and <code>min-height</code>', 'How the same CSS reacts when available space changes.'],
      ],
    },
    {
      type: 'tip',
      title: 'Drag first, optimize second',
      html: 'Start by dragging blocks into the visual order that matches the intended reading flow. Then adjust gap and alignment. This keeps the generated CSS aligned with document order instead of hiding structure with fragile positioning tricks.',
    },
    {
      type: 'title',
      text: 'Clean CSS output you can adapt',
      level: 3,
    },
    {
      type: 'code',
      ariaLabel: 'Example generated CSS',
      code: '.layout-playground {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 24px;\n  justify-content: center;\n  align-items: center;\n}',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Why visual resizing matters',
      html: 'Many layout bugs appear only when the container is narrower, taller or filled with different item counts. Resizing the playground while the CSS updates live helps you spot awkward wrapping, excessive gaps and alignment choices that only work at one viewport size.',
    },
    {
      type: 'summary',
      title: 'Best practice workflow',
      items: [
        'Choose a preset or Flexbox for one-dimensional flows and Grid for two-dimensional structure.',
        'Resize the visual canvas before copying CSS so the layout survives realistic constraints.',
        'Use gap for spacing between items instead of adding margins to every child.',
        'Copy the generated CSS as a starting point, then add project-specific selectors and media queries.',
      ],
    },
  ],
};
