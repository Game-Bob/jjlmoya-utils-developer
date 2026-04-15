import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'web-ontwikkeling',
  title: 'Webontwikkeling',
  description:
    'Gratis tools voor webontwikkeling: formatters, CSS-calculators, generators en hulpprogramma\'s voor frontend- en backend-ontwikkelaars.',
  seo: [
    {
      type: 'summary',
      title: 'Developer Tools',
      items: [
        'Code formatters en validators',
        'CSS calculators en visuele tools',
        'Configuratie- en beveiligingsgenerators',
        '100% lokale en privéverwerking',
      ],
    },
    {
      type: 'title',
      text: 'Essentiële Hulpprogramma\'s voor Webontwikkeling',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een verzameling tools die zijn ontworpen om de workflow van webontwikkelaars te versnellen. Van JSON-validatie tot CSS-specificiteitcalculators, elk hulpprogramma is gemaakt om echte dagelijkse ontwikkelingsproblemen op te lossen.',
    },
    {
      type: 'tip',
      title: 'Privacy gegarandeerd',
      html: 'Alle tools verwerken gegevens lokaal in uw browser. Er worden geen codes, gegevens of bestanden naar een externe server verzonden.',
    },
  ],
};
