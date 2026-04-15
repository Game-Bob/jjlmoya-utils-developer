import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'webbutveckling',
  title: 'Webbutveckling',
  description:
    'Kostnadsfria verktyg för webbutveckling: formaterare, CSS-kalkylatorer, generatorer och verktyg för frontend- och backend-utvecklare.',
  seo: [
    {
      type: 'summary',
      title: 'Utvecklarverktyg',
      items: [
        'Kodformaterare och validatorer',
        'CSS-kalkylatorer och visuella verktyg',
        'Konfigurations- och säkerhetsgeneratorer',
        '100 % lokal och privat bearbetning',
      ],
    },
    {
      type: 'title',
      text: 'Oumbärliga verktyg för webbutveckling',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En samling verktyg utformade för att påskynda arbetsflödet för webbutvecklare. Från JSON-validering till CSS-specificitetskalkylatorer, varje verktyg är skapat för att lösa verkliga problem i den dagliga utvecklingen.',
    },
    {
      type: 'tip',
      title: 'Garanterad integritet',
      html: 'Alla verktyg bearbetar data lokalt i din webbläsare. Ingen kod, data eller filer skickas till någon extern server.',
    },
  ],
};
