import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeycodeUI } from '../ui';

const slug = 'keycode';
const title = 'Online Keyboard Key Code Visualizer. KeyCode Inspector';
const description =
  'Free online tool to see the event.key, event.code, event.which and location of any keyboard key in real time. Generates ready-to-use JavaScript code snippets.';

const faqData = [
  {
    question: 'What is the difference between event.key and event.code?',
    answer:
      'event.code represents the physical key on the keyboard, regardless of the configured language. event.key represents the generated character, which may change if you press Shift or use a different language. Use code for game controls; use key for text input and semantic shortcuts.',
  },
  {
    question: 'What is event.which and why is it deprecated?',
    answer:
      'event.which is a legacy property that returns a numeric ASCII code for the key. It is marked as deprecated in modern standards because event.key and event.code replace it with more precise and readable information. It is shown in this tool for educational purposes.',
  },
  {
    question: 'What does the location property mean?',
    answer:
      'The location property indicates where the key is physically located on the keyboard: Standard (normal position), Left (left modifier key), Right (right modifier key), or Numpad (numeric keypad). It is useful to distinguish between the left and right CTRL keys, for example.',
  },
  {
    question: 'Does it work with international keyboards and non-QWERTY layouts?',
    answer:
      'Yes. The tool shows exactly what the browser reports for your keyboard configuration. event.code will always return the QWERTY name of the physical position, while event.key will show the actual character according to your language.',
  },
];

const howToData = [
  {
    name: 'Press any key',
    text: 'With focus on the page, press any key on the keyboard to instantly see all the event information.',
  },
  {
    name: 'Copy individual values',
    text: 'Click the copy button next to each property (event.key, event.code, etc.) to copy that specific value to the clipboard.',
  },
  {
    name: 'Use the code snippets',
    text: 'In the "Quick Snippets" section you will find JavaScript code blocks ready to paste directly into your project.',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'en',
};

const ui: KeycodeUI = {
  promptTitle: 'Press a key',
  promptSubtitle: 'Any key on your keyboard to see its code',
  snippetsTitle: 'Quick Snippets',
  btnCopy: 'Copy',
  locationStandard: 'Standard',
  locationLeft: 'Left',
  locationRight: 'Right',
  locationNumpad: 'Numpad',
};

export const content: ToolLocaleContent<KeycodeUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'References and Standards',
  bibliography: [
    {
      name: 'MDN Web Docs – KeyboardEvent',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent',
    },
    {
      name: 'UI Events Specification (W3C) – KeyboardEvent',
      url: 'https://www.w3.org/TR/uievents/#events-keyboardevents',
    },
    {
      name: 'MDN – KeyboardEvent.code values',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Understanding keyboard events in JavaScript',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'When a user presses a key, the browser fires three events: <code>keydown</code>, <code>keypress</code>, and <code>keyup</code>. Each exposes properties with information about the key pressed, but not all are equivalent or recommended.',
    },
    {
      type: 'title',
      text: 'Key event properties',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'event.code — The physical key',
      html: '<p>Returns the identifier of the <strong>physical position</strong> of the key on the keyboard, using QWERTY nomenclature. For example, the "A" key on an AZERTY keyboard returns <code>KeyQ</code>. Ideal for game controls where position matters, not the character.</p>',
    },
    {
      type: 'card',
      title: 'event.key — The generated character',
      html: '<p>Returns the <strong>character value</strong> generated according to language and active modifiers. Pressing Shift+A returns <code>"A"</code>; without Shift returns <code>"a"</code>. For special keys it returns names like <code>"Enter"</code>, <code>"Escape"</code>, <code>"ArrowUp"</code>.</p>',
    },
    {
      type: 'title',
      text: 'When to use each property',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Use <code>event.code</code> for game controls (WASD regardless of language) and <code>event.key</code> to detect specific characters or semantic keyboard shortcuts like <code>Ctrl+C</code>.',
    },
    {
      type: 'paragraph',
      html: 'The <code>event.which</code> and <code>event.keyCode</code> properties are officially <strong>deprecated</strong> according to the W3C standard. Although modern browsers continue to support them for compatibility, they should not be used in new code.',
    },
  ],
};
