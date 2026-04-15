import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromptLibraryUI } from '../ui';
const slug = 'prompt-library';
const title = '私人 AI 提示库';
const description = '私密地组织、标记和保存您的 ChatGPT、Midjourney 和 Claude 提示。您在 localStorage 中的专属提示库。';
const faqData = [
  { question: '我的提示保存在哪里？', answer: '您的提示仅保存在浏览器的本地存储中。我们不使用外部服务器，因此您的数据完全私密。' },
  { question: '如果我清除浏览器 cookie 或历史记录会怎样？', answer: '如果您清除网站数据或本地存储，您将丢失已保存的提示。如果您经常清除浏览器，我们建议进行备份。' },
  { question: '我可以将其用于 Midjourney、ChatGPT 或 DALL-E 吗？', answer: '是的，它与任何类型的 AI 指令兼容。您可以创建特定标签来组织命令并轻松将其复制到您首选的 AI 工具。' },
];
const howToData = [
  { name: '创建提示', text: '单击"新提示"按钮并输入标题和说明。' },
  { name: '添加标签', text: '输入以空格或逗号分隔的标签来分类您的提示。' },
  { name: '使用变量', text: '在文本中使用括号 [这样] 在卡片上创建可填充字段。' },
  { name: '复制并分享', text: '一键复制到剪贴板或使用分享按钮分享直接链接。' },
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
  inLanguage: 'zh',
};
const ui: PromptLibraryUI = {
  placeholderSearch: '按关键字或标签搜索...',
  btnNew: '新建提示',
  emptyTitle: '您的库为空',
  emptyDesc: '创建您的第一个提示，开始构建您的私人 AI 存储库。',
  btnAddFirst: '添加第一个',
  modalTitleCreate: '创建新提示',
  modalTitleEdit: '编辑提示',
  labelTitle: '标识标题',
  placeholderTitle: '例如：SEO 营销专家',
  labelContent: '说明（提示）',
  placeholderContent: '在此处为 AI 编写详细说明...',
  hintContent: '提示：使用括号 [这样] 稍后填充变量。',
  labelTags: '标签',
  placeholderTags: '例如：营销、seo（用空格或逗号添加）',
  btnCancel: '取消',
  btnSave: '保存到本地',
  ariaLabelStar: '标星提示',
  ariaLabelEdit: '编辑提示',
  ariaLabelShare: '分享提示',
  ariaLabelCopy: '复制提示',
  ariaLabelDelete: '删除提示',
  varsTitle: '必需变量',
  noResults: '找不到此搜索的提示。',
  confirmTitle: '删除提示？',
  confirmDesc: '此操作无法撤销。',
  btnCancelDelete: '取消',
  btnConfirmDelete: '永久删除',
};
export const content: ToolLocaleContent<PromptLibraryUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  bibliographyTitle: '提示工程参考',
  bibliography: [
    { name: '提示工程指南 (DAIR.AI)', url: 'https://www.promptingguide.ai/' },
    { name: '什么是提示工程 (Google Cloud)', url: 'https://cloud.google.com/discover/what-is-prompt-engineering' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '为什么需要提示库？', level: 2 },
    { type: 'paragraph', html: '如果您定期使用 ChatGPT、Claude 或 Midjourney 等 AI 工具，您可能会发现自己重复相同的说明。<strong>提示库</strong>是停止浪费时间重写您喜爱的命令的最终解决方案。' },
    { type: 'title', text: '组织提示的优势', level: 3 },
    { type: 'list', items: [ '<strong>即时搜索：</strong>通过简单的文本搜索找到您几个月前使用的特定说明。', '<strong>标签分类：</strong>将您的提示标记为"营销"、"编程"或"文案"以快速过滤。', '<strong>单击复制：</strong>只需单击一下即可将全文复制到剪贴板。', '<strong>完全隐私：</strong>所有数据都通过 localStorage 在浏览器中本地存储。' ] },
    { type: 'title', text: '提示中的变量', level: 3 },
    { type: 'paragraph', html: '在提示中使用 <strong>[变量]</strong> 表示法来创建动态可填充字段。打开卡片时，每个定义的变量都会出现输入。提示将与填充的值一起复制，准备粘贴到您的 AI 中。' },
    { type: 'title', text: '共享提示', level: 3 },
    { type: 'paragraph', html: '每个提示都可以通过 URL 分享。分享按钮生成一个链接，打开时会显示预填充提示内容的创建表单。' },
  ],
};

