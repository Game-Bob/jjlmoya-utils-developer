import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssSpecificityCalculatorUI } from '../ui';

const slug = 'css-spezifitaet-rechner';
const title = 'CSS Spezifitätsrechner Online. Selektorgewicht Visualisierer';
const description =
  'Berechnen Sie die Spezifität und das genaue Gewicht jedes CSS-Selektors. Visuelles Tool, um zu verstehen, welche CSS-Regel in der Kaskade gewinnt, und um die Verwendung von !important zu vermeiden.';

const faqData = [
  {
    question: 'Was ist CSS-Spezifität?',
    answer:
      'Spezifität ist der Algorithmus, den Browser verwenden, um zu entscheiden, welche CSS-Regel auf ein Element angewendet wird, wenn mehrere Regeln konkurrieren. Sie wird als dreispaltiger Wert (A, B, C) dargestellt, der IDs, Klassen/Attribute/Pseudoklassen bzw. Elemente/Pseudoelemente angibt.',
  },
  {
    question: 'Kann eine Klasse jemals eine ID in der Spezifität schlagen?',
    answer:
      'Nicht direkt. Eine ID (1,0,0) schlägt immer eine beliebige Anzahl von Klassen (0,N,0), da es bei der Spezifität keinen Übertrag zwischen den Spalten gibt. Hundert Klassen (0,100,0) werden niemals eine einzige ID (1,0,0) schlagen.',
  },
  {
    question: 'Was passiert, wenn zwei Selektoren die gleiche Spezifität haben?',
    answer:
      'Wenn zwei Selektoren genau das gleiche Gewicht haben, gewinnt derjenige, der zuletzt in der CSS-Datei deklariert wurde. Dies wird als natürliche Kaskadenreihenfolge bezeichnet. Dieser Rechner warnt Sie visuell, wenn ein Gleichstand auftritt.',
  },
  {
    question: 'Warum gilt die Verwendung von !important als schlechte Praxis?',
    answer:
      'Die Anweisung !important bricht die natürliche CSS-Kaskade auf, indem sie eine Deklaration gegenüber jeder anderen Regel erzwingt. Dies führt zu Konflikten, die in großen Projekten schwer zu debuggen sind. Methodiken wie BEM plädieren dafür, die Spezifität flach zu halten, um !important niemals zu benötigen.',
  },
];

const howToData = [
  {
    name: 'Geben Sie den ersten Selektor ein',
    text: 'Geben Sie Selektor A in das linke Textfeld ein, zum Beispiel: #header .nav-item > a. Die Zähler für IDs, Klassen und Elemente werden sofort aktualisiert.',
  },
  {
    name: 'Geben Sie den zweiten Selektor ein',
    text: 'Geben Sie Selektor B in das rechte Textfeld ein, zum Beispiel: ul li.active a:hover. Beobachten Sie, wie sich die Gewichte in Echtzeit ändern.',
  },
  {
    name: 'Lesen Sie das Ergebnis',
    text: 'Der Rechner hebt den gewinnenden Selektorblock mit einem grünen Banner hervor. Wenn beide gleichauf liegen, erscheint eine Meldung, die die Kaskadenreihenfolge als Entscheidungsfaktor erklärt.',
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

const ui: CssSpecificityCalculatorUI = {
  labelA: 'Selektor A',
  labelB: 'Selektor B',
  placeholderA: 'z.B. #header .nav-item > a',
  placeholderB: 'z.B. ul li.active a:hover',
  cardIds: 'IDs',
  cardClasses: 'Klassen / Pseudos',
  cardElements: 'Elemente',
  bannerWinner: 'Dieser Selektor gewinnt!',
  msgTie: 'Beide Selektoren haben das gleiche Gewicht. Wenn sie um das gleiche Element konkurrieren, gewinnt derjenige, der <strong>zuletzt</strong> im CSS geschrieben wurde.',
};

export const content: ToolLocaleContent<CssSpecificityCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Referenzen und Dokumentation',
  bibliography: [
    {
      name: 'MDN Web Docs: CSS-Spezifität',
      url: 'https://developer.mozilla.org/en/docs/Web/CSS/Specificity',
    },
    {
      name: 'W3C: Selektoren Level 3 - Spezifität',
      url: 'https://www.w3.org/TR/selectors-3/#specificity',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Was ist CSS-Spezifität?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die CSS-Spezifität ist der Algorithmus, nach dem Browser entscheiden, welche Eigenschaftswerte auf ein bestimmtes Element angewendet werden. Es ist im Grunde ein mathematischer Wert, der dem Browser sagt, „wie spezifisch“ eine Regel ist.',
    },
    {
      type: 'paragraph',
      html: 'Wenn zwei Regeln unterschiedliche Spezifitätsstufen haben, gewinnt diejenige mit dem höheren Gewicht, unabhängig von der Reihenfolge, in der sie geschrieben wurden. Wenn beide das gleiche Gewicht haben, gewinnt die letzte im Quellcode deklarierte Regel.',
    },
    {
      type: 'title',
      text: 'So berechnen Sie die CSS-Spezifität',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Spezifität wird auf der Grundlage von drei Kategorien berechnet, die ein dreispaltiges Gewicht bilden, das oft als <strong>(A, B, C)</strong> ausgedrückt wird:',
    },
    {
      type: 'list',
      items: [
        '<strong>Spalte A (IDs):</strong> Zählt die Anzahl der eindeutigen Identifikatoren. Beispiel: <code>#header</code> zählt als 1 in Spalte A.',
        '<strong>Spalte B (Klassen, Attribute und Pseudoklassen):</strong> Zählt alle Klassen (<code>.button</code>), Attribute (<code>[type="text"]</code>) und Pseudoklassen (<code>:hover</code>).',
        '<strong>Spalte C (Elemente und Pseudoelemente):</strong> Zählt alle HTML-Elemente (<code>div</code>, <code>h1</code>) und Pseudoelemente (<code>::before</code>).',
      ],
    },
    {
      type: 'title',
      text: 'Die goldene Regel: Kein numerischer Übertrag',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Eine Regel mit der Spezifität (0,50,0) wird <strong>niemals</strong> spezifischer sein als eine Regel (1,0,0). <strong>Eine einzige ID schlägt unendlich viele Klassen.</strong> Spalten laufen niemals ineinander über.',
    },
    {
      type: 'title',
      text: 'Das Problem mit !important und der BEM-Architektur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die Anweisung <code>!important</code> ist eine Ausnahme von den Spezifitätsregeln. Wenn sie verwendet wird, überschreibt diese Deklaration automatisch jede andere. Sie gilt als schlechte Praxis, da sie die natürliche Kaskade zerstört.',
    },
    {
      type: 'paragraph',
      html: 'Um Spezifitätskriege in großen Projekten zu vermeiden, plädieren Methodiken wie <strong>BEM</strong> für die Verwendung von Selektoren mit nur einer Ebene von Klassen, wodurch die Spezifität künstlich flach bei (0,1,0) gehalten wird.',
    },
  ],
};
