import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DuplicateCssRemoverUI } from '../ui';

const slug = 'doppeltes-css-entfernen';
const title = 'Doppelten CSS Code online entfernen. Stylesheets vereinheitlichen und bereinigen';
const description =
  'Kostenloses Tool zum Bereinigen und Entfernen doppelter CSS-Regeln. Fasst redundante Selektoren zusammen, respektiert die Kaskade und reduziert sofort die Dateigröße – direkt im Browser.';

const faqData = [
  {
    question: 'Was passiert, wenn CSS-Selektoren doppelt vorkommen?',
    answer:
      'Wenn derselbe Selektor mehrfach vorkommt, wendet der Browser alle Regeln an, wobei die letzte Deklaration jeder Eigenschaft die früheren überschreibt. Das erzeugt unnötig große Dateien, ohne das visuelle Ergebnis zu verbessern.',
  },
  {
    question: 'Gehen beim Entfernen von Duplikaten Eigenschaften verloren?',
    answer:
      'Nein. Der Algorithmus respektiert strikt die CSS-Kaskade: Bei Konflikten unter demselben Selektor wird immer die zuletzt deklarierte Eigenschaft beibehalten. Einzigartige Eigenschaften aus jedem Block werden unter einem einzigen, vereinheitlichten Selektor zusammengeführt.',
  },
  {
    question: 'Funktioniert das Tool mit minifiziertem CSS oder CSS mit Kommentaren?',
    answer:
      'Das Tool entfernt CSS-Kommentare automatisch vor der Verarbeitung und arbeitet korrekt mit einzeiligem Code. Bei CSS mit erweitertem Nesting oder komplexen At-Rules wird empfohlen, die Blöcke vorher zu trennen.',
  },
  {
    question: 'Wird mein CSS an einen Server übertragen?',
    answer:
      'Nein. Die gesamte Verarbeitung findet direkt in Ihrem Browser per lokalem JavaScript statt. Kein Teil Ihres CSS wird an externe Server übertragen – Ihr Code bleibt vollständig privat.',
  },
];

const howToData = [
  {
    name: 'Ihren CSS Code einfügen',
    text: 'Kopieren Sie den Inhalt Ihrer CSS-Datei mit wiederholten Selektoren und fügen Sie ihn in das linke Feld „Dirty / Duplicate CSS" ein.',
  },
  {
    name: 'Bereinigung starten',
    text: 'Klicken Sie auf „CSS bereinigen und vereinheitlichen". Das Tool durchsucht alle Selektoren, führt Eigenschaften zusammen und entfernt redundante Blöcke.',
  },
  {
    name: 'Ergebnis prüfen und kopieren',
    text: 'Sehen Sie sich die Byte-Einsparungen an und kopieren Sie das optimierte CSS über den Button „Code kopieren" direkt in Ihr Projekt.',
  },
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
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
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

const ui: DuplicateCssRemoverUI = {
  labelInput: 'Dirty / Duplicate CSS',
  labelOutput: 'Bereinigtes CSS',
  placeholderInput: '.btn { padding: 10px; color: red; }\n.btn { margin: 5px; color: blue; }',
  placeholderOutput: 'Hier erscheint das optimierte und vereinheitlichte CSS...',
  btnClean: 'CSS bereinigen und vereinheitlichen',
  btnCopy: 'Code kopieren',
  btnCopied: 'Kopiert!',
  statBytesOriginal: 'Originalgröße',
  statBytesClean: 'Bereinigte Größe',
  statSaving: 'Ersparnis',
};

export const content: ToolLocaleContent<DuplicateCssRemoverUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Referenzen und Dokumentation',
  bibliography: [
    {
      name: 'Web Vitals: Einfluss von CSS auf Render-Blocking und FCP',
      url: 'https://web.dev/articles/render-blocking-resources',
    },
    {
      name: 'W3C-Spezifikation: CSS-Kaskade und Vererbung',
      url: 'https://www.w3.org/TR/css-cascade-4/',
    },
    {
      name: 'Clean CSS: Bibliothek und Methoden zur CSS-Minifizierung',
      url: 'https://github.com/clean-css/clean-css',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Warum entsteht doppelter CSS Code?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bei der langfristigen Pflege von Webprojekten oder der Arbeit mit Legacy-Code kommt es sehr häufig vor, dass mehrere Entwickler überlappende CSS-Regeln schreiben. Aus Angst, ein bestehendes Design zu beschädigen, fügt man lieber eine neue redundante Regel am Ende des Dokuments hinzu, statt die ursprüngliche zu bearbeiten oder umzustrukturieren.',
    },
    {
      type: 'paragraph',
      html: 'Das Ergebnis ist eine ineffiziente Datei mit Dutzenden von mehrfach deklarierten Selektoren, die die Lesbarkeit erschweren und das Download-Gewicht der Webseite erheblich erhöhen.',
    },
    {
      type: 'title',
      text: 'Der versteckte Einfluss auf die Web-Performance (Web Vitals)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Stylesheet-Dateien blockieren das natürliche Rendering des Browsers (als <strong>Render-Blocking</strong>-Ressource). Solange der Browser das vollständige CSSOM nicht heruntergeladen und aufgebaut hat, bleibt der Bildschirm leer.',
    },
    {
      type: 'tip',
      html: 'Redundante Stile zu bereinigen ist keine reine Ordnungsfrage – es ist eine messbare und unmittelbare Verbesserung wichtiger Metriken wie dem <strong>First Contentful Paint (FCP)</strong>.',
    },
    {
      type: 'title',
      text: 'Wie wir doppelte Regeln zusammenführen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dieses Tool arbeitet wie ein intelligenter Assembler. Statt nur Leerzeichen zu komprimieren (wie ein herkömmlicher Minifier), durchsucht es den Text rekursiv nach identischen Selektoren.',
    },
    {
      type: 'list',
      items: [
        'Stellen Sie sich vor, Sie haben die Regel <code>.box { color: red; }</code> und hundert Zeilen weiter unten ein <code>.box { padding: 10px; color: blue; }</code>. Das Tool führt beide Blöcke unter demselben Selektor <code>.box</code> zusammen und kombiniert das Padding.',
        '<strong>Erhalt der CSS-Kaskade:</strong> Bei direkten Konflikten bewahrt der Algorithmus strikt die zuletzt deklarierte Eigenschaft. So bleibt Ihr ursprüngliches Layout beim Bereinigen erhalten.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Schluss damit, Kilobytes toter Textdaten an die Mobilgeräte Ihrer Nutzer zu schicken. Vereinheitlichen Sie Ihren Code in Millisekunden – vollständig offline, direkt im Browser.',
    },
  ],
};
