import { bibliography } from '../bibliography';
import { createLocalizedContent } from '../localized';
import { localizedUi } from '../localized-ui';

export const content = createLocalizedContent({
  slug: 'open-data-csv-json-missing-values-duplicate-rows-checker',
  title: '开放数据 CSV 缺失值检查器',
  description: '在浏览器本地检查 CSV 和 JSON 表格，找出缺失值、重复行、混合类型、解析失败和数值异常值。',
  ui: localizedUi('zh'),
  seo: [
    { type: 'title', text: '在重复使用开放数据前发现结构问题', level: 2 },
    { type: 'paragraph', html: '表格看起来整齐，但可能隐藏空字段、重复记录、混合值类型、格式错误的行或极端数值。此工具在浏览器中读取 CSV 和 JSON，并把这些信号转换为可以追溯到原始行的计数。' },
    { type: 'title', text: '结合来源文档检查公开数据表', level: 2 },
    { type: 'paragraph', html: '缺失值、null 和空文本会分别计数。重复行会显示行号，数值异常则使用 Tukey 1.5 IQR 边界标记。信号是需要核查的问题，不是质量判定。' },
    { type: 'list', items: ['将 CSV 表头或 JSON 结构与来源文档进行比较。', '删除记录前先核查重复行。', '结合单位和领域上下文判断混合类型与异常值。', '将来源、时间段、定义和预期用途与检查结果一起保存。'] },
  ],
  faqTitle: '表格检查常见问题',
  faq: [
    { question: '可以检查哪些文件？', answer: '带表头行的 CSV，或包含对象数组的 JSON。JSON 对象也可以把数组放在 data、rows 或 records 下。' },
    { question: '如何区分缺失、null、空值和零？', answer: '缺失的 JSON 属性、JSON null、空文本和数值零会分别记录。' },
    { question: '异常值如何计算？', answer: '工具使用 Tukey 1.5 倍四分位距边界，并报告受影响的行。' },
    { question: '这能证明数据质量很高吗？', answer: '不能。它只测量结构信号，不能证明语义正确性、准确性、来源、合法性或适用性。' },
  ],
  bibliography,
  howTo: [
    { name: '准备表格', text: '使用稳定的 CSV 表头或 JSON 数组，并准备好来源上下文。' },
    { name: '加载数据', text: '选择本地文件、粘贴文本或打开示例。' },
    { name: '阅读信号', text: '查看缺失、空值、重复、混合类型和异常值的计数。' },
    { name: '追踪来源行', text: '使用行号和列级结果返回原始文件。' },
    { name: '编辑记录', text: '补充目的和决定，然后将记录与来源一起保存。' },
  ],
});
