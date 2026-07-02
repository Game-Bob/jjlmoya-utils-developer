import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SerpPixelSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'serp-pixel-simulator';
const title = 'SERP模拟器和SEO像素计数器';
const description = '实时预览Google风格的搜索结果摘要，以像素为单位测量标题和元描述的宽度，并准确查看文本将在何处被截断。';

const howTo = [
  {
    name: '输入标题标签',
    text: '输入或粘贴您要测试的页面标题。SERP预览和像素计量器会在每次按键时更新。',
  },
  {
    name: '添加显示网址',
    text: '使用逼真的域名和路径，让摘要看起来像搜索者会扫描的结果。',
  },
  {
    name: '编写元描述',
    text: '添加描述文本并观察像素条。当超过推荐的视觉宽度时，预览会用省略号截断。',
  },
  {
    name: '在桌面端和移动端之间切换',
    text: '在发布元数据之前，将标题的渲染效果与桌面端或移动端的卡片宽度进行比较。',
  },
];

const faq = [
  {
    question: '为什么要用像素而不是字符数来计算SEO标题？',
    answer: 'Google搜索结果卡片受视觉宽度限制。包含许多窄字母的标题比包含宽字母、大写字母或粗体字形的标题能容纳更多字符。像素测量可以更准确地预览可见结果。',
  },
  {
    question: '这能保证Google会精确按照这种方式截断我的摘要吗？',
    answer: '不能。Google可能会重写标题链接和摘要，而且渲染效果可能因查询、设备、语言和实验而异。该工具旨在作为编写不太可能被截断的元数据的实用视觉指南。',
  },
  {
    question: '模拟器使用什么像素限制？',
    answer: '桌面端默认标题限制为580像素，移动端标题限制为600像素，元描述限制为920像素。这些是编写目标，而不是Google的官方限制。',
  },
  {
    question: '为什么预览会添加省略号？',
    answer: '当测量的文本超出可用的像素宽度时，模拟器会在最后一个能容纳的字符处截断字符串，并添加三个点，这与SEO团队检测含义丢失所需的实际行为一致。',
  },
];

const ui: SerpPixelSimulatorUI = {
  titleLabel: '标题标签',
  titlePlaceholder: 'GameBob | 独立开发工作室',
  urlLabel: '显示网址',
  urlPlaceholder: 'https://www.gamebob.dev/zh/',
  descriptionLabel: '元描述',
  descriptionPlaceholder: '探索我们为提升您的数字工作流程和娱乐体验而设计的工具和游戏集合。',
  deviceLabel: '预览模式',
  desktopLabel: '桌面端',
  mobileLabel: '移动端',
  titlePixelsLabel: '标题宽度',
  descriptionPixelsLabel: '描述宽度',
  charactersLabel: '字符',
  previewLabel: 'Google风格实时预览',
  tooLongLabel: '过宽',
  goodLabel: '适合',
  emptyTitle: '您的标题将显示在此处',
  emptyDescription: '您的元描述预览将在您输入时显示在此处。',
  defaultTitle: 'GameBob | 独立开发工作室',
  defaultUrl: 'https://www.gamebob.dev/zh/',
  defaultDescription: '探索我们为提升您的数字工作流程和娱乐体验而设计的工具和游戏集合。',
  fallbackUrl: 'example.cn',
  fallbackFaviconText: 'G',
  pixelUnit: 'px',
  ellipsis: '...',
  fetchButtonLabel: '获取',
  fetchLoadingLabel: '获取中...',
  fetchSuccessLabel: '已从URL加载元数据。',
  fetchCorsError: '浏览器无法读取此页面。可能被CORS、重定向、混合内容或网络规则阻止。您仍然可以手动粘贴或编辑元数据。',
  fetchInvalidUrlError: '在获取元数据之前，请输入有效的URL。',
  fetchNoMetadataError: '页面已获取，但未找到标题或元描述。',
  fetchGenericError: '无法从此URL获取元数据。请检查地址或手动填写字段。',
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
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<SerpPixelSimulatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'SERP模拟器常见问题',
  faq,
  bibliographyTitle: '搜索结果文档',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: '不要再猜测您的Google搜索结果会是什么样子',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '标题标签在电子表格中看起来很完美，但在搜索结果中仍可能失败。Google不是按字符数预留空间，而是在视觉卡片内渲染文本。这意味着<strong>GameBob | 独立开发工作室</strong>和另一个字符数相同的标题，根据字母、大小写、标点符号和间距的不同，可能占据截然不同的宽度。',
    },
    {
      type: 'tip',
      title: '真正有用的规则',
      html: '编写摘要时，让重要的承诺在省略号之后仍然存在。将页面类型、搜索意图和最强烈的点击理由放在像素限制之前。品牌名称有用，但不应将主要优势挤出视线。',
    },
    {
      type: 'title',
      text: '像素计数器测量什么',
      level: 3,
    },
    {
      type: 'table',
      headers: ['元素', '重要因素', '如何使用结果'],
      rows: [
        ['标题标签', '以像素为单位的渲染宽度，而非原始字符数', '在截断之前保持主要关键词和点击承诺可见。'],
        ['显示网址', '视觉信任和主题清晰度', '使用可读的路径，强化结果的去向。'],
        ['元描述', '较宽的摘要区域，具有查询依赖行为', '将优势放在前面，因为Google可能会缩短或重写它。'],
        ['设备模式', '桌面端和移动端卡片可能有不同的感觉', '在发布重要页面的元数据之前，检查两种模式。'],
      ],
    },
    {
      type: 'title',
      text: '为什么字符限制是薄弱的SEO习惯',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '像"保持标题在60个字符以下"这样的传统建议很方便，但隐藏了真正的问题。宽字母如W和M、大写单词、分隔符、数字和长品牌名称都占用不同的空间。像素测量使权衡立即可见：您可以看到一个短语是否值得占据其位置，或者是否从更强的信息中窃取了空间。',
    },
    {
      type: 'title',
      text: '制作更好摘要的实用工作流程',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>从意图开始：</strong>描述用户得到什么，而不仅仅是页面叫什么。',
        '<strong>测试完整标题：</strong>在发布前将其粘贴到模拟器中并观察像素条。',
        '<strong>移除无力的词语：</strong>如果像素条变红，在剪掉有价值的术语之前删除填充词。',
        '<strong>检查省略号：</strong>如果截断的预览失去意义，请重写标题而不是接受截断。',
        '<strong>对描述重复操作：</strong>确保第一句话本身就承载了价值主张。',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '当像素条变红时',
      html: '红色条不是惩罚警告。这意味着当前文本比所选的视觉目标宽，因此模拟器用点截断它。将其视为编辑信号：决定隐藏的词语是否可有可无，或者摘要是否需要更清晰的结构。',
    },
    {
      type: 'title',
      text: '限制、重写和现实预期',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '任何模拟器都无法保证Google显示的摘要完全一致。Google可能会重写标题链接，将查询词加粗，选择页面文本而不是元描述，或为不同的搜索显示不同的摘要。此工具最适合作为快速的编写和QA步骤：在页面投入生产之前，它能捕捉到明显的视觉溢出。',
    },
    {
      type: 'summary',
      title: '此SERP模拟器的最佳用途',
      items: [
        '在发布元数据之前，使用像素条检测视觉溢出。',
        '在任何省略号之前保持主要搜索意图和点击承诺可见。',
        '从允许CORS的URL获取元数据，然后在需要时手动编辑结果。',
        '将预览视为编写指南，因为Google仍可能根据查询重写摘要。',
      ],
    },
  ],
};
