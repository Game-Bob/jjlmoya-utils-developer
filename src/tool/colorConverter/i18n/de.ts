import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ColorConverterUI } from '../ui';

const slug = 'farbkonverter-rgb-hex-hsl';
const title = 'Online Farbkonverter RGB HEX und HSL';
const description = 'Konvertieren Sie Farben sofort zwischen RGB, HEX und HSL. Generieren Sie komplementäre Farbharmonien und analysieren Sie den WCAG-Kontrast. 100 % clientseitig und privat.';

const faqData = [
  {
    question: 'Wie funktioniert der Farbkonverter für RGB zu HEX und HSL?',
    answer: 'Das Tool nimmt Rot-, Grün- und Blauwerte (RGB) und verwendet mathematische Algorithmen, um diese in ihr Hexadezimal-Äquivalent (HEX) oder in Werte für Farbton, Sättigung und Helligkeit (HSL) umzurechnen. Es funktioniert auch umgekehrt.',
  },
  {
    question: 'Warum sollte ich in meinen Designs HSL anstelle von HEX verwenden?',
    answer: 'Das HSL-Format ist viel intuitiver. Es ermöglicht Ihnen, Sättigung oder Helligkeit anzupassen, ohne den Farbton zu ändern, was das Erstellen harmonischer Paletten oder Schaltflächenzustände (Hover, Deaktiviert) erheblich erleichtert.',
  },
  {
    question: 'Was ist der relative Kontrastwert?',
    answer: 'Dies ist eine Kennzahl, die die Lesbarkeit von Text auf einem Hintergrund basierend auf seiner Luminanz angibt. Ein hoher Kontrast stellt sicher, dass Menschen mit Sehbehinderungen den Inhalt gemäß den WCAG-Barrierefreiheitsrichtlinien lesen können.',
  },
  {
    question: 'Ist es sicher, diesen Online-Farbkonverter zu verwenden?',
    answer: 'Absolut. Da er zu 100 % clientseitig ausgeführt wird, verlassen Ihre Farbdaten niemals Ihren Computer. Die gesamte Verarbeitung findet direkt in Ihrem Browser statt, was Privatsphäre und sofortige Leistung garantiert.',
  },
];

const howToData = [
  { name: 'Farbe auswählen', text: 'Verwenden Sie die Schieberegler für Rot, Grün und Blau oder geben Sie einen HEX-Code direkt in das Textfeld ein.' },
  { name: 'RGB-Kanäle anpassen', text: 'Bewegen Sie die Schieberegler, um die Intensität jedes Kanals zu ändern und die Aktualisierung in Echtzeit zu sehen.' },
  { name: 'Format kopieren', text: 'Klicken Sie auf die Schaltfläche „Kopieren“ neben dem HEX-, RGB- oder HSL-Format, das Sie benötigen.' },
  { name: 'Harmonien erkunden', text: 'Klicken Sie auf die Harmoniefarben (komplementär, analog, triadisch), um sie in die Zwischenablage zu kopieren.' },
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

const ui: ColorConverterUI = {
  labelPreview: 'Vorschau (Klicken zum Kopieren von HEX)',
  labelHarmonies: 'Farbharmonien',
  labelR: 'Rot',
  labelG: 'Grün',
  labelB: 'Blau',
  labelComp: 'Komp.',
  labelAna1: 'Analog 1',
  labelAna2: 'Analog 2',
  labelTri1: 'Triade 1',
  labelTri2: 'Triade 2',
  btnCopy: 'Kopieren',
  btnCopied: 'Kopiert',
  contrastLabel: 'Kontrast',
  clickToCopy: 'Klicken zum Kopieren',
};

export const content: ToolLocaleContent<ColorConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Farben- und Webdesign-Ressourcen',
  bibliography: [
    { name: 'W3C: CSS-Farbdokumentation', url: 'https://www.w3.org/TR/css-color-4/' },
    { name: 'MDN: HSL-Farbmodell-Leitfaden', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl' },
    { name: 'WebAIM: Kontrast- und Barrierefreiheitsleitfaden', url: 'https://webaim.org/resources/contrastchecker/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'RGB zu HEX und HSL Farbkonverter für Entwickler', level: 2 },
    {
      type: 'paragraph',
      html: 'In der Welt der <strong>Frontend-Entwicklung</strong> und des <strong>UI/UX-Designs</strong> ist Farbmanagement eine ständige Aufgabe. Unser <strong>Online-Farbkonverter</strong> ermöglicht es Ihnen, Werte zwischen <strong>HEX, RGB und HSL</strong> sofort und mit mathematischer Präzision umzuwandeln.',
    },
    { type: 'title', text: 'Farbformate: HEX, RGB und HSL', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>HEX (Hexadezimal):</strong> Der De-facto-Standard für CSS. Kompakt und einfach im Code zu teilen.',
        '<strong>RGB (Rot, Grün, Blau):</strong> Basierend auf dem additiven Lichtsystem. Ideal für die direkte Manipulation von Kanälen oder die Anwendung von Transparenz mit RGBA.',
        '<strong>HSL (Hue, Saturation, Lightness):</strong> Das intuitivste Format. Passen Sie Farbton, Sättigung und Helligkeit an, um harmonische Paletten zu erstellen.',
      ],
    },
    { type: 'title', text: 'Kontrast und WCAG-Barrierefreiheit', level: 3 },
    {
      type: 'paragraph',
      html: 'Der Rechner enthält eine <strong>relative Kontrastmessung</strong> basierend auf der Luminanz. Dies hilft Ihnen, die <strong>WCAG</strong>-Richtlinien einzuhalten und sicherzustellen, dass Ihr Text auf ausgewählten Hintergründen lesbar ist.',
    },
    { type: 'title', text: 'Automatische Farbharmonien', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Komplementär:</strong> Die gegenüberliegende Farbe im Farbkreis, ideal für maximalen Kontrast.',
        '<strong>Analog:</strong> Benachbarte Farben, die sanfte, harmonische Übergänge schaffen.',
        '<strong>Triadisch:</strong> Drei äquidistante Farben für lebendige, ausgewogene Kompositionen.',
      ],
    },
  ],
};
