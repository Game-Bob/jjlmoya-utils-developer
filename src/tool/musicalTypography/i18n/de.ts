import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicalTypographyUI } from '../ui';

const slug = 'musikalische-typografie';
const title = 'Musikalische Typografieskala. Modularer Skalenrechner';
const description =
  'Kostenloses Online-Werkzeug zur Erstellung harmonischer visueller Hierarchien mit modularen Skalen auf Basis musikalischer Proportionen. Erzeugt fertige CSS-Variablen für dein Webdesign.';

const faqData = [
  {
    question: 'Was ist eine typografische Modularskala?',
    answer:
      'Eine Methode zur Bestimmung von Schriftgrößen auf Basis eines konstanten mathematischen Verhältnisses. Wie in der Musik, wo Noten harmonische Beziehungen haben, erzeugt die Modularskala eine ausgewogene und vorhersehbare visuelle Hierarchie.',
  },
  {
    question: 'Warum musikalische Intervalle im Design verwenden?',
    answer:
      'Musikalische Intervalle sind Proportionen, die das menschliche Gehirn als harmonisch wahrnimmt. Auf Textgrößen angewendet entsteht eine visuelle Struktur, die sich richtig und professionell anfühlt, anstatt Größen willkürlich zu wählen.',
  },
  {
    question: 'Was ist der Goldene Schnitt in der Typografie?',
    answer:
      'Es ist das Verhältnis 1,618, bekannt als Goldener Schnitt. Er erzeugt sehr dramatische und elegante Skalen, bei denen jede Hierarchiestufe exponentiell wächst. Perfekt für Portfolios oder kunstorientierte Websites.',
  },
  {
    question: 'Wie setze ich die Skala in meiner CSS-Datei ein?',
    answer:
      'Das Werkzeug erzeugt CSS-Variablen (Tokens) im Format :root { --step-N: Xrem; }. Kopiere sie in deine Haupt-CSS-Datei und verwende sie mit var(--step-N), um typografische Konsistenz auf der gesamten Website zu wahren.',
  },
];

const howToData = [
  {
    name: 'Basisgröße festlegen',
    text: 'Gib die Schriftgröße für deinen Fließtext ein (üblicherweise 16px), die als Grundton deiner Skala dient.',
  },
  {
    name: 'Intervall wählen',
    text: 'Wähle eine musikalische Proportion, um festzulegen, wie viel Abstand zwischen den verschiedenen Überschriftsebenen liegt.',
  },
  {
    name: 'Hierarchie vorschauen',
    text: 'Beobachte in Echtzeit, wie sich die typografischen Ebenen verhalten, und prüfe, ob die visuelle Harmonie zu deinem Projekt passt.',
  },
  {
    name: 'Code exportieren',
    text: 'Klicke auf CSS-Variablen kopieren, um den Block zu erhalten, der direkt in deinen Workflow eingefügt werden kann.',
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
  applicationCategory: 'DesignApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'de',
};

const ui: MusicalTypographyUI = {
  labelConfig: 'Konfiguration',
  labelBaseSize: 'Basisgröße (px)',
  hintBaseSize: 'Die Schriftgröße deines Fließtexts (üblicherweise 16px).',
  labelRatio: 'Musikalische Skala (Ratio)',
  hintRatio: 'Bestimmt, wie stark die Größe pro Schritt wächst.',
  labelCalculated: 'Berechnete Werte',
  labelPreview: 'Vorschau',
  btnCopyCss: 'CSS-Variablen kopieren',
  feedbackCopied: 'Variablen in die Zwischenablage kopiert!',
  previewText: 'Musikalische Typografie',
  previewSubtext: 'Eine perfekte harmonische Skala für dein Design.',
  ratioSecundaMenor: 'Kleine Sekunde',
  ratioSegundaMayor: 'Große Sekunde',
  ratioTerceraMenor: 'Kleine Terz',
  ratioTerceraMayor: 'Große Terz',
  ratioCuartaPerfecta: 'Reine Quarte',
  ratioCuartaAumentada: 'Übermäßige Quarte',
  ratioQuintaPerfecta: 'Reine Quinte',
  ratioProporcionAurea: 'Goldener Schnitt',
  ratioSextaMayor: 'Große Sexte',
  ratioSeptimaMenor: 'Kleine Septime',
  ratioSeptimaMayor: 'Große Septime',
  ratioOctava: 'Oktave',
};

export const content: ToolLocaleContent<MusicalTypographyUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Quellen',
  bibliography: [
    {
      name: 'Bringhurst, R. The Elements of Typographic Style',
      url: 'https://en.wikipedia.org/wiki/The_Elements_of_Typographic_Style',
    },
    {
      name: 'Brown, T. More Meaningful Typography. A List Apart',
      url: 'https://alistapart.com/article/more-meaningful-typography/',
    },
    {
      name: 'Physics of Music. Musical Intervals and Scales',
      url: 'https://es.scribd.com/document/199729396/Physics-of-Music-Notes',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Die unsichtbare Harmonie im Webdesign',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die <strong>Musikalische Typografieskala</strong> überträgt die Mathematik musikalischer Intervalle auf das typografische Design. Wie eine Komposition von präzisen Proportionen geleitet wird, profitiert auch ein solides visuelles Design von einer mathematischen Struktur, die alle Größen miteinander verbindet.',
    },
    {
      type: 'title',
      text: 'Wie die Modularskala funktioniert',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'Die Formel',
      html: '<p>Die Progression ist einfach: <code>Größe = Basis × Ratio<sup>n</sup></code>. Stufe 0 ist dein Grundtext. Stufe 1 ist ein kleiner Untertitel. Stufe 4 oder 5 könnte dein Haupt-H1 sein. Die gleiche Multiplikationskonstante (der Ratio) stellt sicher, dass alle Beziehungen konsistent bleiben.</p>',
    },
    {
      type: 'card',
      title: 'Warum "Musikalisch"',
      html: '<p>Die Pythagoreer entdeckten, dass das Teilen einer Saite in einfache Proportionen (1:2, 2:3, 3:4) Konsonanz erzeugt. Diese Intervalle – Oktave, reine Quinte und reine Quarte – sind genau die typografischen Ratios. Du komponierst visuelle Musik.</p>',
    },
    {
      type: 'title',
      text: 'Den richtigen Ratio wählen',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Für dichte Oberflächen (Dashboards, Tabellen) eignen sich kleine Ratios wie <code>1,125</code> oder <code>1,2</code>. Für redaktionelle oder Portfolio-Seiten bieten sich ausdrucksstärkere Ratios wie <code>1,5</code> oder <code>1,618</code> an.',
    },
    {
      type: 'paragraph',
      html: 'Beschränke die Skala nicht auf <code>font-size</code>. Dieselben CSS-Variablen funktionieren auch für <code>margin</code>, <code>padding</code> und <code>gap</code>. Wenn Weißraum derselben mathematischen Progression wie der Text folgt, erreicht das Design einen Grad an Kohäsion, den alle spüren, aber kaum jemand benennen kann.',
    },
  ],
};
