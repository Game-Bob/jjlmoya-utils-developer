import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicalTypographyUI } from '../ui';

const slug = 'musical-typography';
const title = '音乐性排版秤。模块化秤计算器';
const description = '免费在线工具，使用基于音乐比例的模块化秤创建和谐的视觉层级。为您的网页设计生成现成的CSS变量。';

const faqData = [
  { question: '什么是排版模块化秤?', answer: '这是一种基于恒定数学比例来确定字体大小的方法。就像音乐中音符有和谐关系一样，模块化秤创建了平衡且可预测的视觉层级。' },
  { question: '为什么在设计中使用音乐间隔?', answer: '音乐间隔是人脑感知为和谐的比例。将它们应用于文本大小会创建看起来正确和专业的视觉结构，而不是随意选择的大小。' },
  { question: '排版中的黄金比例是什么?', answer: '这是比例1.618，称为黄金分割。它创建非常戏剧性和优雅的秤，其中层级中的每一步呈指数增长。非常适合投资组合或以艺术为中心的网站。' },
  { question: '我如何在CSS文件中实施秤?', answer: '该工具以:root { --step-N: Xrem; }格式生成CSS变量（token）。将它们复制到主CSS文件中，并使用var(--step-N)来维护您网站上的排版一致性。' },
];

const howToData = [
  { name: '设置基础大小', text: '输入正文的字体大小（通常为16px），它将作为您秤的基本音符。' },
  { name: '选择间隔', text: '选择一个音乐比例来确定不同标题级别之间有多少空间。' },
  { name: '预览层级', text: '实时查看排版级别的表现方式，以验证视觉和谐是否适合您的项目。' },
  { name: '导出代码', text: '单击复制CSS变量获取准备好直接粘贴到工作流的块。' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowToThing> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DesignApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'zh' };

const ui: MusicalTypographyUI = { labelConfig: '配置', labelBaseSize: '基础大小 (px)', hintBaseSize: '您的段落文本大小（通常16px）。', labelRatio: '音乐秤（比例）', hintRatio: '确定每个步骤的大小增长程度。', labelCalculated: '计算值', labelPreview: '预览', btnCopyCss: '复制CSS变量', feedbackCopied: '变量已复制到剪贴板！', previewText: '音乐排版', previewSubtext: '为您的设计提供完美的和谐秤。', ratioSecundaMenor: '小二度', ratioSegundaMayor: '大二度', ratioTerceraMenor: '小三度', ratioTerceraMayor: '大三度', ratioCuartaPerfecta: '完全四度', ratioCuartaAumentada: '增大四度', ratioQuintaPerfecta: '完全五度', ratioProporcionAurea: '黄金比例', ratioSextaMayor: '大六度', ratioSeptimaMenor: '小七度', ratioSeptimaMayor: '大七度', ratioOctava: '八度' };

export const content: ToolLocaleContent<MusicalTypographyUI> = { slug, title, description, ui, faqTitle: '常见问题', faq: faqData, bibliographyTitle: '参考', bibliography: [{ name: 'Bringhurst, R. The Elements of Typographic Style', url: 'https://en.wikipedia.org/wiki/The_Elements_of_Typographic_Style' }, { name: 'Brown, T. More Meaningful Typography. A List Apart', url: 'https://alistapart.com/article/more-meaningful-typography/' }, { name: 'Physics of Music. Musical Intervals and Scales', url: 'https://es.scribd.com/document/199729396/Physics-of-Music-Notes' }], howTo: howToData, schemas: [faqSchema, howToSchema, appSchema], seo: [{ type: 'title', text: '网页设计中看不见的和谐', level: 2 }, { type: 'paragraph', html: '<strong>音乐排版秤</strong>将音乐间隔的数学应用于排版设计。就像音乐作品受精确比例支配一样，一个好的设计受益于一个将所有大小联系起来的数学结构。' }, { type: 'title', text: '模块化秤如何工作', level: 3 }, { type: 'grid', columns: 2 }, { type: 'card', title: '公式', html: '<p>进度很简单：<code>Size = Base × Ratio<sup>n</sup></code>。第0步是您的基础文本。第1步是小字幕。第4或5步可能是您的主H1。相同的乘法常数（比例）确保所有关系一致。</p>' }, { type: 'card', title: '为什么是"音乐的"', html: '<p>毕达哥拉斯发现，将弦分成简单比例（1:2、2:3、3:4）会产生辅音。这些间隔、八度、完全五度和完全四度，正是排版比例。您正在组成视觉音乐。</p>' }, { type: 'title', text: '选择正确的比例', level: 3 }, { type: 'tip', html: '对于密集界面（仪表板、表格），使用小比例（如<code>1.125</code>或<code>1.2</code>）。对于编辑或投资组合网站，使用更富表现力的比例（如<code>1.5</code>或<code>1.618</code>）。' }, { type: 'paragraph', html: '不要将秤限制在仅<code>font-size</code>。相同的CSS变量适用于<code>margin</code>、<code>padding</code>和<code>gap</code>。当空白遵循与文本相同的数学进度时，设计达到所有人都能感受但很少有人能解释的凝聚力。' }] };

