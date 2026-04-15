import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DuplicateCssRemoverUI } from '../ui';

const slug = 'duplicate-css-remover';
const title = '在线去除重复CSS工具。整合并清理您的样式表';
const description =
  '免费工具，用于清理和删除重复的CSS代码。合并冗余选择器，遵循层叠规则，直接在浏览器中即时缩减文件大小。';

const faqData = [
  {
    question: 'CSS选择器重复会有什么影响？',
    answer:
      '当同一个选择器出现多次时，浏览器会应用所有规则，但每个属性的最后一次声明会覆盖之前的。这导致文件比实际需要的更大，而视觉效果却没有任何改善。',
  },
  {
    question: '去除重复后会丢失属性吗？',
    answer:
      '不会。算法严格遵循CSS层叠规则：对于同一选择器下存在冲突的属性，始终保留最后声明的那个。每个块中独有的属性都会合并到一个统一的选择器下。',
  },
  {
    question: '支持压缩过的CSS或含注释的CSS吗？',
    answer:
      '支持。工具在处理前会自动去除CSS注释，也能正确处理单行代码。对于包含高级嵌套或复杂at规则的CSS，建议先将代码块分离后再使用。',
  },
  {
    question: '我的CSS会被上传到服务器吗？',
    answer:
      '不会。所有处理均通过本地JavaScript直接在您的浏览器中完成。您的CSS不会传输到任何外部服务器，代码隐私完全有保障。',
  },
];

const howToData = [
  {
    name: '粘贴您的CSS',
    text: '复制含有重复选择器的CSS文件内容，粘贴到左侧标有"待处理CSS"的输入框中。',
  },
  {
    name: '执行清理',
    text: '点击"清理并合并CSS"按钮。工具将扫描所有选择器，合并属性，并删除冗余块。',
  },
  {
    name: '查看统计并复制',
    text: '查看节省的字节数，然后点击"复制代码"按钮，将优化后的CSS直接用于您的项目。',
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
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'zh',
};

const ui: DuplicateCssRemoverUI = {
  labelInput: '待处理CSS（含重复）',
  labelOutput: '清理后的CSS',
  placeholderInput: '.btn { padding: 10px; color: red; }\n.btn { margin: 5px; color: blue; }',
  placeholderOutput: '优化并合并后的CSS将显示在此处...',
  btnClean: '清理并合并CSS',
  btnCopy: '复制代码',
  btnCopied: '已复制！',
  statBytesOriginal: '原始字节数',
  statBytesClean: '清理后字节数',
  statSaving: '节省',
};

export const content: ToolLocaleContent<DuplicateCssRemoverUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '参考资料与文档',
  bibliography: [
    {
      name: 'Web Vitals：CSS对渲染阻塞和FCP的影响',
      url: 'https://web.dev/articles/render-blocking-resources',
    },
    {
      name: 'W3C规范：CSS层叠与继承',
      url: 'https://www.w3.org/TR/css-cascade-4/',
    },
    {
      name: 'Clean CSS：CSS压缩库与方法论',
      url: 'https://github.com/clean-css/clean-css',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'CSS代码为什么会出现重复？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '在长期维护的Web项目或遗留代码中，多名开发者写出相互重叠的CSS规则是极为常见的现象。为了避免破坏现有设计，开发者往往选择在文档末尾添加新的冗余规则，而不是去修改或重构原有代码。',
    },
    {
      type: 'paragraph',
      html: '结果是一个低效的文件，其中有数十个反复声明的选择器，既损害代码可读性，又大幅增加了网页的下载体积。',
    },
    {
      type: 'title',
      text: '对Web性能（Web Vitals）的隐性影响',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '样式表文件会阻塞浏览器的正常渲染（即<strong>渲染阻塞</strong>资源）。在浏览器下载并构建完整的CSSOM之前，页面屏幕将保持空白。',
    },
    {
      type: 'tip',
      html: '清除冗余样式不仅仅是代码整洁的问题，更是对<strong>首次内容绘制（FCP）</strong>等关键性能指标的即时、可量化的改善。',
    },
    {
      type: 'title',
      text: '我们如何合并重复规则',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '本工具的工作原理类似于智能汇编器。它不像传统压缩工具那样只是压缩空白字符，而是递归扫描文本，查找完全相同的选择器模式。',
    },
    {
      type: 'list',
      items: [
        '假设您有规则 <code>.box { color: red; }</code>，而一百行之后又有 <code>.box { padding: 10px; color: blue; }</code>。工具会将这两个块合并到同一个 <code>.box</code> 选择器下，同时保留 padding 属性。',
        '<strong>CSS层叠保护：</strong>对于直接冲突的属性，算法严格保留最后声明的那个。这确保了在清理文档后，原有布局不会出现错乱。',
      ],
    },
    {
      type: 'paragraph',
      html: '不要再向用户的手机发送数千字节的无效文本了。直接在浏览器中完全离线操作，毫秒之间完成代码合并。',
    },
  ],
};

