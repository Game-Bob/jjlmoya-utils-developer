import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'wang-ye-kai-fa',
  title: 'Web开发',
  description:
    '免费Web开发工具：面向前后端开发者的代码格式化、CSS计算器、生成器及实用工具。',
  seo: [
    {
      type: 'summary',
      title: '开发者工具',
      items: [
        '代码格式化与校验',
        'CSS计算器与视觉工具',
        '配置与安全生成器',
        '100%本地私密处理',
      ],
    },
    {
      type: 'title',
      text: 'Web开发必备工具集',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '专为加速Web开发者工作流而设计的工具集合。从JSON校验到CSS权重计算器，每一个工具都旨在解决日常开发中的实际问题。',
    },
    {
      type: 'tip',
      title: '隐私保障',
      html: '所有工具均在浏览器本地处理数据。您的代码、数据或文件不会被发送到任何外部服务器。',
    },
  ],
};
