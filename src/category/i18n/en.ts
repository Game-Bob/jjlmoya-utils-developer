import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'web-development',
  title: 'Web Development',
  description:
    'Free web development tools: formatters, CSS calculators, generators and utilities for frontend and backend developers.',
  seo: [
    {
      type: 'summary',
      title: 'Developer Tools',
      items: [
        'Code formatters and validators',
        'CSS calculators and visual tools',
        'Configuration and security generators',
        '100% local and private processing',
      ],
    },
    {
      type: 'title',
      text: 'Essential Web Development Utilities',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "A collection of tools designed to accelerate web developers' workflows. From JSON validation to CSS specificity calculators, each utility is crafted to solve real day-to-day development problems.",
    },
    {
      type: 'tip',
      title: 'Privacy guaranteed',
      html: 'All tools process data locally in your browser. No code, data or files are sent to any external server.',
    },
  ],
};
