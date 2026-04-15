import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssToInlineConverterUI } from '../ui';

const slug = 'css-zu-inline-html-konverter';
const title = 'CSS zu Inline HTML konvertieren. Inliner für Emails';
const description =
  'Wandeln Sie Ihre Stylesheets und CSS-Klassen in direkt eingebettete Inline-Styles innerhalb Ihres HTML um. Ideal für Newsletter, transaktionale Emails und zuverlässige Web-Layouts.';

const faqData = [
  {
    question: 'Warum benötigen Emails Inline-CSS statt externer Stylesheets?',
    answer:
      'E-Mail-Clients wie Outlook, Gmail oder Apple Mail filtern oder ignorieren <link>- und <style>-Tags aus Sicherheitsgründen. Die einzige zuverlässige Methode, damit ein Stil in einer E-Mail korrekt angezeigt wird, ist, ihn direkt im style-Attribut des jeweiligen HTML-Elements einzubetten.',
  },
  {
    question: 'Was passiert, wenn ein Element bereits ein eigenes style-Attribut hat?',
    answer:
      'Das Werkzeug respektiert vorhandene Inline-Styles und fügt die neuen Eigenschaften dahinter an – es simuliert dabei das Verhalten der CSS-Kaskade: Bei Konflikten überschreiben später deklarierte Eigenschaften frühere.',
  },
  {
    question: 'Funktioniert es auch mit komplexen Selektoren wie :hover oder Media Queries?',
    answer:
      'Das Werkzeug verarbeitet Klassen-, ID-, Attribut- und strukturelle Pseudo-Klassen-Selektoren, die DOMParser auflösen kann. Zustandsabhängige Selektoren wie :hover und Media Queries können nicht inline eingebettet werden – sie hängen von der Laufzeitumgebung ab und werden ignoriert.',
  },
  {
    question: 'Wird mein HTML- und CSS-Code an einen Server gesendet?',
    answer:
      'Nein. Die gesamte Verarbeitung findet zu 100 % in Ihrem Browser mithilfe der nativen DOMParser-API statt. Kein einziges Byte Ihres Codes verlässt Ihr Gerät – das garantiert vollständige Privatsphäre, auch bei Vorlagen mit vertraulichen Inhalten.',
  },
];

const howToData = [
  {
    name: 'Fügen Sie Ihr HTML ein',
    text: 'Schreiben oder fügen Sie das HTML, das Sie verarbeiten möchten, in das Feld „Original-HTML" ein. Es kann sich um ein Fragment oder ein vollständiges Dokument handeln.',
  },
  {
    name: 'CSS-Regeln hinzufügen',
    text: 'Fügen Sie die Klassen und IDs, die Sie einbetten möchten, in das Feld „CSS-Regeln" ein. Das Werkzeug wendet sie unter Berücksichtigung der Selektorspezifität an.',
  },
  {
    name: 'Konvertieren und kopieren',
    text: 'Klicken Sie auf „CSS in HTML einbetten". Das Ergebnis mit allen Inline-Styles erscheint darunter – bereit zum Kopieren und Einfügen in Ihren E-Mail-Manager oder Ihr CMS.',
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

const ui: CssToInlineConverterUI = {
  labelHtml: 'Original-HTML',
  labelCss: 'CSS-Regeln',
  labelOutput: 'Ergebnis als Inline-HTML',
  placeholderHtml: '<div class="meine-klasse">Hallo Welt</div>',
  placeholderCss: '.meine-klasse { color: red; padding: 10px; }',
  placeholderOutput: 'Hier erscheint Ihr HTML mit eingebetteten Styles...',
  btnConvert: 'CSS in HTML einbetten',
  btnCopy: 'Code kopieren',
  btnCopied: 'Kopiert!',
  msgError: 'Verarbeitungsfehler. Prüfen Sie, ob HTML und CSS korrekt sind.',
};

export const content: ToolLocaleContent<CssToInlineConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Referenzen und Dokumentation',
  bibliography: [
    {
      name: 'Can I email: HTML- und CSS-Unterstützungsmatrix für Emails',
      url: 'https://www.caniemail.com/',
    },
    {
      name: 'MDN Web Docs: Das globale style-Attribut',
      url: 'https://developer.mozilla.org/de/docs/Web/HTML/Global_attributes/style',
    },
    {
      name: 'DOMParser API: Sicheres Parsen im Browser',
      url: 'https://developer.mozilla.org/de/docs/Web/API/DOMParser',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Was ist ein CSS Inliner und wozu brauchen Sie ihn?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bei der Entwicklung moderner Webanwendungen sind wir es gewohnt, Verantwortlichkeiten zu trennen: HTML bildet die Struktur, eine externe CSS-Datei liefert das gesamte visuelle Styling. Doch nicht alle Umgebungen vertrauen externen Stylesheets oder globalen <code>&lt;style&gt;</code>-Tags.',
    },
    {
      type: 'paragraph',
      html: 'Der bekannteste und strengste Anwendungsfall, in dem externes CSS versagt, ist die <strong>Entwicklung von E-Mail-Vorlagen</strong>. In diesen Umgebungen ist die einzige zuverlässige Methode, damit Schrift, Farbe oder Abstand korrekt dargestellt werden, sie direkt in das Tag einzubetten: <code>&lt;span style="color: red;"&gt;</code>.',
    },
    {
      type: 'title',
      text: 'Das CSS-Problem in E-Mail-Clients',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'E-Mail-Clients wie Microsoft Outlook, Apple Mail oder Gmail sind für ihre restriktiven CSS-Rendering-Engines bekannt. Die meisten filtern oder verwerfen <code>&lt;link&gt;</code>- oder <code>&lt;style&gt;</code>-Tags aus Angst vor Code-Injektionen, die die Leseoberfläche beschädigen könnten.',
    },
    {
      type: 'tip',
      html: 'Für Newsletter oder transaktionale Emails (Quittungen, Kontobestätigungen) gelten Tabellen und <em>Inline-CSS</em> als Goldstandard in der E-Mail-Marketing-Branche.',
    },
    {
      type: 'title',
      text: 'So funktioniert das Werkzeug in Ihrem Browser',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Sicheres Parsen:</strong> Verwendet die <code>DOMParser-API</code>, um das eingegebene HTML vorübergehend in ein sicheres virtuelles DOM in Ihrem Browser umzuwandeln.',
        '<strong>Kaskaden-Simulation:</strong> Analysiert Ihre CSS-Regeln, gewichtet Selektoren nach Spezifität und schreibt die <code>style</code>-Attribute der betroffenen HTML-Elemente durch das Einbetten des Codes um.',
        '<strong>100 % offline:</strong> Kein einziges Byte Ihres Codes verlässt Ihr Gerät. Vollständige Privatsphäre für Vorlagen mit sensiblen Inhalten.',
      ],
    },
  ],
};
