import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'web-entwicklung',
  title: 'Webentwicklung',
  description:
    'Kostenlose Webentwicklung-Tools: Formatierer, CSS-Rechner, Generatoren und Hilfsprogramme für Frontend- und Backend-Entwickler.',
  seo: [
    {
      type: 'summary',
      title: 'Entwicklertools',
      items: [
        'Code-Formatierer und Validatoren',
        'CSS-Rechner und visuelle Werkzeuge',
        'Konfigurations- und Sicherheitsgeneratoren',
        '100% lokale und private Verarbeitung',
      ],
    },
    {
      type: 'title',
      text: 'Essenzielle Werkzeuge für die Webentwicklung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Eine Sammlung von Tools, die den Workflow von Webentwicklern beschleunigen. Von der JSON-Validierung bis hin zu CSS-Spezifitätsrechnern ist jedes Hilfsprogramm darauf ausgelegt, reale Probleme im Entwicklungsalltag zu lösen.',
    },
    {
      type: 'tip',
      title: 'Privatsphäre garantiert',
      html: 'Alle Tools verarbeiten Daten lokal in Ihrem Browser. Es werden keine Codes, Daten oder Dateien an externe Server gesendet.',
    },
  ],
};
