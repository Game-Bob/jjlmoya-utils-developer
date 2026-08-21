import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromoteThisWebsiteUI } from '../ui';
import { bibliography } from '../bibliography';

const localized = {
    slug: 'promote-this-website',
    title: '推广这个网站',
    description: '为西班牙语 jjlmoya.es 和国际版 GameBob.dev 准备的内部宣传台。在 Bob 觉得信息流很丢脸之前，把自己页面的截图变成社交媒体图片。',
    faqTitle: '别惹猫生气，推广这个网站',
    bibliographyTitle: '行动中的页面',
    faq: [
      { question: '这个工具到底给谁用？', answer: '用来推广西班牙语 jjlmoya.es 和国际版 GameBob.dev 页面。其他人可以从窗户往里看。' },
      { question: '可以直接粘贴截图吗？', answer: '可以。复制截图后按 Ctrl+V，它会成为工具图层。只要格式正确，猫咪委员会也接受证据。' },
      { question: '粘贴生产环境 URL 会发生什么？', answer: '工具会读取页面的 meta 标题，选择对应品牌并加载 Open Graph 图片。slug 终于不会得到晋升。' },
      { question: '为什么有两个品牌？', answer: 'jjlmoya.es 是西班牙语页面，GameBob.dev 是国际页面。猫咪完全不在乎这个区别。' },
      { question: '我的图片会被上传吗？', answer: '不会。图片留在浏览器中，合成也在本地完成。只有你主动下载的 PNG 会离开页面。' },
    ],
    howTo: [
      { name: '粘贴截图', text: '用 Ctrl+V 粘贴 jjlmoya.es 或 GameBob.dev 的截图。委员会需要自己帝国的证据。' },
      { name: '选择品牌', text: '西班牙语选择 jjlmoya.es，国际页面选择 GameBob.dev。猫咪已经拥有办公场所。' },
      { name: '排列图片', text: '拖动截图、标题、标志、背景和吉祥物，让合成看起来像是认真设计过的。' },
      { name: '导出 PNG', text: '在 Bob 抢走功劳之前，按需要的尺寸下载 PNG。' },
    ],
    seoTitle: 'jjlmoya 和 GameBob 的官方宣传台',
    seoIntro: '这不是给刚学会 branding 这个词的人准备的通用社交图片编辑器。它的用途是推广我们在 jjlmoya.es 和 GameBob.dev 上的页面，同时接受猫咪监督。',
    seoBody: '粘贴真实截图或加载生产环境 URL。工具读取页面标题，而不是从 slug 猜测，并在排列其他图层时保持官方 Open Graph 图片可见。',
    seoTip: '从 jjlmoya.es 或 GameBob.dev 的生产环境 URL 开始。如果标题、品牌或图片没有加载，委员会会先责怪网络，再责怪人，最后责怪猫。',
};
const ui: PromoteThisWebsiteUI = {
    urlLabel: '网站 URL', urlPlaceholder: 'https://www.example.com/tools/example/', applyUrl: '应用',
    formatLabel: '格式', panoramic: '全景 · 1536 × 1024', instagram: 'Instagram · 1080 × 1350', square: '方形 · 1080 × 1080', story: '快拍 · 1080 × 1920',
    titleLabel: '标题', titlePlaceholder: '图片的简短标题', titleSizeLabel: '标题字体大小', titleBoxSizeLabel: '标题框大小', titleStyleLabel: '标题设计',
    brandLabel: '品牌', brandStyleLabel: '品牌设计', advancedLabel: '高级合成', assetsLabel: '素材', backgroundLabel: '背景', toolLabel: '工具截图', logoLabel: '标志', mascotLabel: '吉祥物',
    layersLabel: '图层', backgroundLayer: '背景', toolLayer: '工具', logoLayer: '标志', mascotLayer: '吉祥物', titleLayer: '标题', reset: '重置', download: '下载 PNG', activeLayer: '当前图层',
    canvasHint: '直接在画布上拖动图层。使用 Ctrl+V 粘贴截图。', pasted: '截图已作为工具图层粘贴。', urlApplied: 'URL 已应用。调整标题并添加要推广的截图。', urlLoading: '正在读取页面标题和官方图片...', urlFailed: '无法读取该页面。请检查 URL 或手动添加素材。', fileLoaded: '素材已加载。',
    titlePaper: '编辑纸张', titleRibbon: '折叠丝带', titleInk: '墨水飞溅', titlePoster: '夜间海报', titleTicket: '撕边票据', titleMarker: '材质下划线', titleSplit: '分割方块', titleCapsule: '极简胶囊', titleCorner: '编辑角标', titleVertical: '垂直强调',
    brandPlain: '简洁标志', brandPlaque: '陶瓷铭牌', brandTicket: '入场券', brandStamp: '橡皮图章', brandNeon: '霓虹招牌', brandRibbon: '信号丝带', brandCorner: '编辑角标', brandPixel: '像素方块', brandHalo: '柔和光晕', brandEditorial: '编辑线条', defaultTool: '粘贴工具截图',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: localized.faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};
const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: localized.title,
  description: localized.description,
  step: localized.howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};
const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: localized.title,
  description: localized.description,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<PromoteThisWebsiteUI> = {
  slug: localized.slug,
  title: localized.title,
  description: localized.description,
  ui,
  faqTitle: localized.faqTitle,
  faq: localized.faq,
  bibliographyTitle: localized.bibliographyTitle,
  bibliography,
  howTo: localized.howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: localized.seoTitle, level: 2 },
    { type: 'paragraph', html: localized.seoIntro },
    { type: 'stats', columns: 3, items: [{ value: '2', label: ui.brandLabel, icon: 'mdi:domain' }, { value: '4', label: ui.formatLabel, icon: 'mdi:crop' }, { value: '0', label: ui.activeLayer, icon: 'mdi:cat' }] },
    { type: 'title', text: localized.title, level: 3 },
    { type: 'paragraph', html: localized.seoBody },
    { type: 'title', text: localized.faqTitle, level: 3 },
    { type: 'paragraph', html: localized.seoBody },
    { type: 'table', headers: [ui.toolLayer, ui.titleLayer, ui.brandLabel], rows: [[ui.toolLabel, ui.titleLabel, ui.logoLabel]] },
    { type: 'tip', title: localized.faqTitle, html: localized.seoTip },
  ],
};
