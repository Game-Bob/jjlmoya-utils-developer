import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeycodeUI } from '../ui';

const slug = 'keycode';
const title = '在线键盘按键代码可视化工具。按键代码检查器';
const description =
  '免费在线工具，可实时查看任何键盘按键的event.key、event.code、event.which和位置。生成即用的JavaScript代码片段。';

const faqData = [
  {
    question: 'event.key和event.code有什么区别?',
    answer:
      'event.code代表键盘上按键的物理位置，与配置的语言无关。event.key代表生成的字符，如果按下Shift或使用不同的语言，可能会改变。使用code进行游戏控制；使用key进行文本输入和语义快捷方式。',
  },
  {
    question: '什么是event.which，为什么它已被弃用?',
    answer:
      'event.which是一个旧属性，返回按键的数字ASCII代码。它在现代标准中被标记为已弃用，因为event.key和event.code用更准确和可读的信息取代了它。出于教育目的，在此工具中显示。',
  },
  {
    question: 'location属性是什么意思?',
    answer:
      'location属性指示按键在键盘上的物理位置：标准(正常位置)、左(左修饰键)、右(右修饰键)或数字键盘(数字键盘)。有助于区分左右CTRL键，例如。',
  },
  {
    question: '它是否适用于国际键盘和非QWERTY布局?',
    answer:
      '是的。该工具显示浏览器针对您的键盘配置报告的确切内容。event.code将始终返回物理位置的QWERTY名称，而event.key将根据您的语言显示实际字符。',
  },
];

const howToData = [
  {
    name: '按任意按键',
    text: '将焦点放在页面上，按键盘上的任意按键即可立即查看所有事件信息。',
  },
  {
    name: '复制单个值',
    text: '点击每个属性(event.key、event.code等)旁边的复制按钮，将该特定值复制到剪贴板。',
  },
  {
    name: '使用代码片段',
    text: '在"快速片段"部分，您会找到随时可粘贴到项目中的JavaScript代码块。',
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
  inLanguage: 'zh',
};

const ui: KeycodeUI = {
  promptTitle: '按一个按键',
  promptSubtitle: '按键盘上的任意按键查看其代码',
  snippetsTitle: '快速片段',
  btnCopy: '复制',
  locationStandard: '标准',
  locationLeft: '左',
  locationRight: '右',
  locationNumpad: '数字键盘',
};

export const content: ToolLocaleContent<KeycodeUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料和标准',
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
      text: 'JavaScript中的键盘事件',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '当用户按下按键时，浏览器会触发三个事件：<code>keydown</code>、<code>keypress</code>和<code>keyup</code>。每个都暴露有关按下的按键的信息的属性，但并非所有属性都是等效或推荐的。',
    },
    {
      type: 'title',
      text: '按键事件属性',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'event.code — 物理按键',
      html: '<p>使用QWERTY命名法返回键盘上按键<strong>物理位置</strong>的标识符。例如，AZERTY键盘上的"A"键返回<code>KeyQ</code>。对于位置重要而不是字符的游戏控制非常理想。</p>',
    },
    {
      type: 'card',
      title: 'event.key — 生成的字符',
      html: '<p>返回根据语言和活动修饰符生成的<strong>字符值</strong>。按Shift+A返回<code>"A"</code>；没有Shift时返回<code>"a"</code>。对于特殊按键，返回名称如<code>"Enter"</code>、<code>"Escape"</code>、<code>"ArrowUp"</code>。</p>',
    },
    {
      type: 'title',
      text: '何时使用每个属性',
      level: 3,
    },
    {
      type: 'tip',
      html: '对于游戏控制(无论语言如何都使用WASD)使用<code>event.code</code>，对于检测特定字符或语义键盘快捷方式(如<code>Ctrl+C</code>)使用<code>event.key</code>。',
    },
    {
      type: 'paragraph',
      html: '根据W3C标准，<code>event.which</code>和<code>event.keyCode</code>属性被正式<strong>弃用</strong>。尽管现代浏览器为了兼容性继续支持它们，但不应在新代码中使用它们。',
    },
  ],
};

