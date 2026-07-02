import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SerpPixelSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'serp-simulator-pixel-zaehler';
const title = 'SERP Simulator und SEO Pixelzähler';
const description = 'Vorschau von Google-ähnlichen Such-Snippets in Echtzeit, messen Sie die Breite von Titel und Meta-Beschreibung in Pixeln und sehen Sie genau, wo Ihr Text abgeschnitten wird.';

const howTo = [
  {
    name: 'Geben Sie den Title-Tag ein',
    text: 'Tippen oder fügen Sie den Seitentitel ein, den Sie testen möchten. Die SERP-Vorschau und der Pixelmesser werden bei jedem Tastendruck aktualisiert.',
  },
  {
    name: 'Fügen Sie die sichtbare URL hinzu',
    text: 'Verwenden Sie eine realistische Domain und einen Pfad, damit das Snippet dem Ergebnis ähnelt, das ein Suchender scannen würde.',
  },
  {
    name: 'Schreiben Sie die Meta-Beschreibung',
    text: 'Fügen Sie den Beschreibungstext hinzu und beobachten Sie den Pixelbalken. Wenn er die empfohlene visuelle Breite überschreitet, kürzt die Vorschau ihn mit Auslassungspunkten.',
  },
  {
    name: 'Wechseln Sie zwischen Desktop und Mobilgerät',
    text: 'Vergleichen Sie die Titeldarstellung mit der Desktop- oder mobilen Kartenbreite, bevor Sie Metadaten veröffentlichen.',
  },
];

const faq = [
  {
    question: 'Warum Pixel statt Zeichen für SEO-Titel zählen?',
    answer: 'Google-Suchergebniskarten sind durch die visuelle Breite begrenzt. Ein Titel mit vielen schmalen Buchstaben kann mehr Zeichen enthalten als ein Titel mit breiten Buchstaben, Großbuchstaben oder fett wirkenden Glyphen. Die Pixelmessung liefert eine genauere Vorschau des sichtbaren Ergebnisses.',
  },
  {
    question: 'Garantiert dies genau, wie Google mein Snippet abschneidet?',
    answer: 'Nein. Google kann Titel-Links und Snippets umschreiben, und die Darstellung kann je nach Suchanfrage, Gerät, Sprache und Experiment variieren. Das Tool ist als praktische visuelle Orientierungshilfe gedacht, um Metadaten zu schreiben, die weniger wahrscheinlich abgeschnitten werden.',
  },
  {
    question: 'Welche Pixelgrenzen verwendet der Simulator?',
    answer: 'Die Standard-Titelgrenze für Desktop beträgt 580 px, für Mobilgeräte 600 px und die Meta-Beschreibungsgrenze liegt bei 920 px. Dies sind Schreibziele, keine offiziellen Google-Grenzwerte.',
  },
  {
    question: 'Warum fügt die Vorschau Auslassungspunkte hinzu?',
    answer: 'Wenn der gemessene Text die verfügbare Pixelbreite überschreitet, kürzt der Simulator die Zeichenkette am letzten passenden Zeichen und hängt drei Punkte an, was dem praktischen Verhalten entspricht, das SEO-Teams benötigen, um Bedeutungsverlust zu erkennen.',
  },
];

const ui: SerpPixelSimulatorUI = {
  titleLabel: 'Title-Tag',
  titlePlaceholder: 'GameBob | Indie-Entwicklungsstudio',
  urlLabel: 'Sichtbare URL',
  urlPlaceholder: 'https://www.gamebob.dev/de/',
  descriptionLabel: 'Meta-Beschreibung',
  descriptionPlaceholder: 'Entdecken Sie unsere Sammlung von Tools und Spielen, die Ihren digitalen Workflow und Ihre Unterhaltung bereichern.',
  deviceLabel: 'Vorschaumodus',
  desktopLabel: 'Desktop',
  mobileLabel: 'Mobil',
  titlePixelsLabel: 'Titelbreite',
  descriptionPixelsLabel: 'Beschreibungsbreite',
  charactersLabel: 'Zeichen',
  previewLabel: 'Live-Vorschau im Google-Stil',
  tooLongLabel: 'Zu breit',
  goodLabel: 'Passt',
  emptyTitle: 'Ihr Titel erscheint hier',
  emptyDescription: 'Die Vorschau Ihrer Meta-Beschreibung erscheint hier, während Sie tippen.',
  defaultTitle: 'GameBob | Indie-Entwicklungsstudio',
  defaultUrl: 'https://www.gamebob.dev/de/',
  defaultDescription: 'Entdecken Sie unsere Sammlung von Tools und Spielen, die Ihren digitalen Workflow und Ihre Unterhaltung bereichern.',
  fallbackUrl: 'beispiel.de',
  fallbackFaviconText: 'G',
  pixelUnit: 'px',
  ellipsis: '...',
  fetchButtonLabel: 'Abrufen',
  fetchLoadingLabel: 'Wird abgerufen...',
  fetchSuccessLabel: 'Metadaten von der URL geladen.',
  fetchCorsError: 'Der Browser konnte diese Seite nicht lesen. Sie könnte durch CORS, eine Weiterleitung, gemischten Inhalt oder eine Netzwerkregel blockiert sein. Sie können die Metadaten weiterhin manuell einfügen oder bearbeiten.',
  fetchInvalidUrlError: 'Geben Sie eine gültige URL ein, bevor Sie Metadaten abrufen.',
  fetchNoMetadataError: 'Die Seite wurde abgerufen, aber es wurde kein Titel oder keine Meta-Beschreibung gefunden.',
  fetchGenericError: 'Metadaten konnten von dieser URL nicht abgerufen werden. Überprüfen Sie die Adresse oder füllen Sie die Felder manuell aus.',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  inLanguage: 'de',
};

export const content: ToolLocaleContent<SerpPixelSimulatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Häufig gestellte Fragen zum SERP-Simulator',
  faq,
  bibliographyTitle: 'Dokumentation zu Suchergebnissen',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Hören Sie auf zu raten, wie Ihr Google-Ergebnis aussehen wird',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ein Title-Tag kann in einer Tabelle perfekt aussehen und im Suchergebnis trotzdem versagen. Google reserviert keinen Platz nach Zeichenanzahl; es rendert Text innerhalb einer visuellen Karte. Das bedeutet, dass <strong>GameBob | Indie-Entwicklungsstudio</strong> und ein anderer Titel mit der gleichen Zeichenanzahl je nach Buchstaben, Groß-/Kleinschreibung, Zeichensetzung und Abständen sehr unterschiedliche Breiten einnehmen können.',
    },
    {
      type: 'tip',
      title: 'Die Regel, die wirklich hilft',
      html: 'Schreiben Sie das Snippet so, dass das wichtige Versprechen die Auslassungspunkte überlebt. Platzieren Sie Seitentyp, Suchabsicht und den stärksten Klickgrund vor der Pixelgrenze. Markennamen sind nützlich, sollten aber den Hauptnutzen nicht aus dem Blickfeld drängen.',
    },
    {
      type: 'title',
      text: 'Was der Pixelzähler misst',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Element', 'Was zählt', 'So nutzen Sie das Ergebnis'],
      rows: [
        ['Title-Tag', 'Gerenderte Breite in Pixeln, nicht rohe Zeichenanzahl', 'Halten Sie das Hauptkeyword und das Klickversprechen vor der Kürzung sichtbar.'],
        ['Sichtbare URL', 'Visuelles Vertrauen und Themenklarheit', 'Verwenden Sie einen lesbaren Pfad, der das Ziel des Ergebnisses unterstreicht.'],
        ['Meta-Beschreibung', 'Ein breiterer Snippet-Bereich mit suchanfragenabhängigem Verhalten', 'Stellen Sie den Nutzen an den Anfang, da Google ihn kürzen oder umschreiben kann.'],
        ['Gerätemodus', 'Desktop- und Mobilkarten können sich unterschiedlich anfühlen', 'Überprüfen Sie beide, bevor Sie Metadaten für wichtige Seiten veröffentlichen.'],
      ],
    },
    {
      type: 'title',
      text: 'Warum Zeichenbegrenzungen eine schwache SEO-Gewohnheit sind',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der traditionelle Ratschlag wie "Titel unter 60 Zeichen halten" ist bequem, verschleiert aber das eigentliche Problem. Breite Buchstaben wie W und M, Großbuchstaben, Trennzeichen, Zahlen und lange Markennamen verbrauchen alle unterschiedlichen Platz. Die Pixelmessung macht den Kompromiss sofort sichtbar: Sie können sehen, ob eine Phrase ihren Platz verdient oder Raum von einer stärkeren Botschaft stiehlt.',
    },
    {
      type: 'title',
      text: 'Ein praktischer Workflow für bessere Snippets',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Beginnen Sie mit der Absicht:</strong> beschreiben Sie, was der Nutzer bekommt, nicht nur, wie die Seite heißt.',
        '<strong>Testen Sie den vollständigen Titel:</strong> fügen Sie ihn in den Simulator ein und beobachten Sie den Balken vor der Veröffentlichung.',
        '<strong>Entfernen Sie schwache Wörter:</strong> wenn der Balken rot wird, entfernen Sie Füllwörter, bevor Sie wertvolle Begriffe kürzen.',
        '<strong>Prüfen Sie die Auslassungspunkte:</strong> wenn die gekürzte Vorschau an Bedeutung verliert, schreiben Sie den Titel um, anstatt die Kürzung hinzunehmen.',
        '<strong>Wiederholen Sie dies für die Beschreibung:</strong> stellen Sie sicher, dass der erste Satz das Wertversprechen für sich allein trägt.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Wenn der Balken rot wird',
      html: 'Ein roter Balken ist keine Strafwarnung. Er bedeutet, dass der aktuelle Text breiter ist als das gewählte visuelle Ziel, sodass der Simulator ihn mit Punkten kürzt. Betrachten Sie dies als redaktionelles Signal: Entscheiden Sie, ob die versteckten Wörter verzichtbar sind oder ob das Snippet eine schärfere Struktur benötigt.',
    },
    {
      type: 'title',
      text: 'Grenzen, Umschreibungen und realistische Erwartungen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kein Simulator kann das exakte Snippet garantieren, das Google anzeigen wird. Google kann Titel-Links umschreiben, Suchbegriffe fett formatieren, Seitentext anstelle der Meta-Beschreibung wählen oder verschiedene Snippets für verschiedene Suchanfragen anzeigen. Dieses Tool eignet sich am besten als schneller Schreib- und QA-Schritt: Es erkennt offensichtlichen visuellen Überlauf, bevor die Seite in die Produktion gelangt.',
    },
    {
      type: 'summary',
      title: 'Beste Nutzung dieses SERP Simulators',
      items: [
        'Nutzen Sie den Pixelbalken, um visuellen Überlauf vor der Veröffentlichung von Metadaten zu erkennen.',
        'Halten Sie die Hauptsuchabsicht und das Klickversprechen vor jeder Auslassung sichtbar.',
        'Rufen Sie Metadaten von URLs ab, die CORS erlauben, und bearbeiten Sie das Ergebnis bei Bedarf manuell.',
        'Betrachten Sie die Vorschau als Schreibhilfe, denn Google kann Snippets pro Suchanfrage weiterhin umschreiben.',
      ],
    },
  ],
};
