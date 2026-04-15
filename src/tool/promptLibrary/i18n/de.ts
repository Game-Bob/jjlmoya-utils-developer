import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromptLibraryUI } from '../ui';

const slug = 'prompt-bibliothek';
const title = 'Private KI Prompt Bibliothek';
const description = 'Organisiere, verschlagworte und speichere deine ChatGPT-, Midjourney- und Claude-Prompts privat. Deine eigene Prompt-Sammlung im localStorage.';

const faqData = [
  {
    question: 'Wo werden meine Prompts gespeichert?',
    answer: 'Deine Prompts werden ausschließlich im lokalen Speicher deines Browsers (localStorage) gespeichert. Wir verwenden keine externen Server, was bedeutet, dass deine Daten zu 100 % privat sind.',
  },
  {
    question: 'Was passiert, wenn ich Browser-Cookies oder den Verlauf lösche?',
    answer: 'Wenn du die Website-Daten oder den lokalen Speicher deines Browsers leerst, gehen deine gespeicherten Prompts verloren. Wir empfehlen, Sicherungskopien anzulegen, wenn du deinen Browser häufig bereinigst.',
  },
  {
    question: 'Kann ich dieses Tool für Midjourney, ChatGPT oder DALL-E nutzen?',
    answer: 'Ja, es ist mit jeder Art von KI-Anweisung kompatibel. Du kannst spezifische Tags erstellen, um deine Befehle zu organisieren, und sie ganz einfach in dein bevorzugtes KI-Tool kopieren.',
  },
];

const howToData = [
  { name: 'Prompt erstellen', text: 'Klicke auf die Schaltfläche Neuer Prompt und gib Titel und Anweisung ein.' },
  { name: 'Tags hinzufügen', text: 'Tippe Tags getrennt durch Leerzeichen oder Komma ein, um deine Prompts zu klassifizieren.' },
  { name: 'Variablen verwenden', text: 'Nutze eckige Klammern [SO WIE HIER] im Text, um ausfüllbare Felder auf der Karte zu erstellen.' },
  { name: 'Kopieren und teilen', text: 'Mit einem Klick in die Zwischenablage kopieren oder über die Teilen-Schaltfläche einen direkten Link weitergeben.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
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
  inLanguage: 'de',
};

const ui: PromptLibraryUI = {
  placeholderSearch: 'Nach Schlüsselwort oder Tag suchen...',
  btnNew: 'Neuer Prompt',
  emptyTitle: 'Deine Bibliothek ist leer',
  emptyDesc: 'Erstelle deinen ersten Prompt und beginne, dein privates KI-Repository aufzubauen.',
  btnAddFirst: 'Ersten hinzufügen',
  modalTitleCreate: 'Neuen Prompt erstellen',
  modalTitleEdit: 'Prompt bearbeiten',
  labelTitle: 'Bezeichnender Titel',
  placeholderTitle: 'Z. B.: SEO-Marketing-Experte',
  labelContent: 'Anweisung (Prompt)',
  placeholderContent: 'Schreibe hier die detaillierten Anweisungen für die KI...',
  hintContent: 'Tipp: Verwende eckige Klammern [SO WIE HIER], um Variablen später auszufüllen.',
  labelTags: 'Tags',
  placeholderTags: 'Z. B.: marketing, seo (Leerzeichen oder Komma zum Hinzufügen)',
  btnCancel: 'Abbrechen',
  btnSave: 'Lokal speichern',
  ariaLabelStar: 'Prompt markieren',
  ariaLabelEdit: 'Prompt bearbeiten',
  ariaLabelShare: 'Prompt teilen',
  ariaLabelCopy: 'Prompt kopieren',
  ariaLabelDelete: 'Prompt löschen',
  varsTitle: 'Erforderliche Variablen',
  noResults: 'Keine Prompts für diese Suche gefunden.',
  confirmTitle: 'Prompt löschen?',
  confirmDesc: 'Diese Aktion kann nicht rückgängig gemacht werden.',
  btnCancelDelete: 'Abbrechen',
  btnConfirmDelete: 'Endgültig löschen',
};

export const content: ToolLocaleContent<PromptLibraryUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Referenzen zum Prompt Engineering',
  bibliography: [
    { name: 'Prompt Engineering Guide (DAIR.AI)', url: 'https://www.promptingguide.ai/' },
    { name: 'Was ist Prompt Engineering (Google Cloud)', url: 'https://cloud.google.com/discover/what-is-prompt-engineering' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Warum brauchst du eine Prompt Bibliothek?', level: 2 },
    {
      type: 'paragraph',
      html: 'Wer regelmäßig mit KI-Tools wie ChatGPT, Claude oder Midjourney arbeitet, kennt das Problem: Man schreibt dieselben Anweisungen immer wieder neu. Eine <strong>Prompt-Bibliothek</strong> ist die endgültige Lösung, um das lästige Wiederholen deiner Lieblingsanweisungen zu beenden.',
    },
    { type: 'title', text: 'Vorteile der Prompt-Organisation', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Sofortsuche:</strong> Finde jene spezifische Anweisung, die du vor Monaten verwendet hast, mit einer einfachen Textsuche.',
        '<strong>Tag-Klassifizierung:</strong> Verschlagworte deine Prompts mit „Marketing", „Programmierung" oder „Copywriting", um schnell zu filtern.',
        '<strong>Ein-Klick-Kopieren:</strong> Den vollständigen Text mit einem einzigen Klick in die Zwischenablage kopieren.',
        '<strong>Vollständige Privatsphäre:</strong> Alle deine Daten werden lokal im Browser über localStorage gespeichert.',
      ],
    },
    { type: 'title', text: 'Variablen in deinen Prompts', level: 3 },
    {
      type: 'paragraph',
      html: 'Verwende die <strong>[VARIABLE]</strong>-Notation in deinen Prompts, um dynamisch ausfüllbare Felder zu erstellen. Wenn du eine Karte öffnest, erscheinen Eingabefelder für jede definierte Variable. Der Prompt wird mit den eingetragenen Werten kopiert und ist direkt zum Einfügen in deine KI bereit.',
    },
    { type: 'title', text: 'Prompts teilen', level: 3 },
    {
      type: 'paragraph',
      html: 'Jeder Prompt kann über eine URL geteilt werden. Die Teilen-Schaltfläche generiert einen Link, der beim Öffnen das Erstellungsformular mit dem Prompt-Inhalt vorausgefüllt anzeigt.',
    },
  ],
};
