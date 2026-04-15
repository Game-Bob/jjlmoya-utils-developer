import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgToCssUI } from '../ui';

const slug = 'svg-zu-css-konverter';
const title = 'Kostenloser Online SVG zu CSS und Data URI Konverter';
const description =
  'Verwandeln Sie Ihre SVG-Icons und Vektoren in CSS-Code (Background oder Mask) oder komprimierte Data-URIs. Optimieren Sie die Performance Ihrer Website durch Vermeidung externer HTTP-Anfragen.';

const faqData = [
  {
    question: 'Ist es besser, eine Data-URI oder eine externe .svg-Datei zu verwenden?',
    answer:
      'Das hängt vom Anwendungsfall ab. Data-URIs eliminieren HTTP-Anfragen (ideal für kleine Icons), vergrößern jedoch die CSS-Datei. Für große oder detailreiche Illustrationen ist eine externe Datei vorzuziehen.',
  },
  {
    question: 'Wie ändere ich die Farbe eines in CSS eingebetteten SVGs?',
    answer:
      'Der beste Weg ist über „mask-image“. Indem Sie das SVG als Maske definieren, können Sie die „background-color“ verwenden, um die Farbe dynamisch zu ändern, sogar in :hover-Zuständen.',
  },
  {
    question: 'Welche Browser unterstützen CSS-Masken?',
    answer:
      'Alle modernen Browser (Chrome, Firefox, Safari, Edge) bieten volle Unterstützung. Für ältere Browser werden häufig -webkit-Präfixe verwendet.',
  },
  {
    question: 'Beeinflusst die Verwendung von Data-URIs die SEO?',
    answer:
      'Ja, positiv. Durch die Reduzierung der Anzahl der Anfragen, die zum Rendern der Seite benötigt werden, verbessert sich die Ladezeit (LCP) und die Core Web Vitals-Werte.',
  },
  {
    question: 'Kann ich es in Frameworks wie React oder Tailwind verwenden?',
    answer:
      'Absolut! Sie können den generierten Code kopieren und in Ihren .css-Dateien oder sogar als beliebige Werte in Tailwind CSS verwenden.',
  },
];

const howToData = [
  {
    name: 'SVG einfügen',
    text: 'Kopieren Sie den Quellcode Ihrer SVG-Datei und fügen Sie ihn in das Textfeld auf der linken Seite ein.',
  },
  {
    name: 'Ausgabetyp wählen',
    text: 'Wählen Sie zwischen Background Image (für statische Hintergründe), CSS Mask (für Icons mit dynamischer Farbe) oder Data URI Only (zur direkten Verwendung).',
  },
  {
    name: 'Ergebnis kopieren',
    text: 'Klicken Sie auf „Kopieren“, um den generierten CSS-Code in Ihre Zwischenablage zu übernehmen.',
  },
  {
    name: 'In Ihr Projekt übernehmen',
    text: 'Fügen Sie den Code in Ihr Stylesheet oder Ihre CSS-Komponente ein. Bei Masken fügen Sie zusätzlich background-color hinzu, um die Icon-Farbe zu definieren.',
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

const ui: SvgToCssUI = {
  labelPasteTitle: 'SVG einfügen',
  labelInputArea: 'SVG Quellcode',
  labelPreviewOriginal: 'Original Vorschau',
  labelResultTitle: 'CSS Ergebnis',
  labelPreviewApplied: 'Angewandtes Ergebnis',
  tabBackground: 'Background Image',
  tabMask: 'CSS Mask / Webkit',
  tabUri: 'Nur Data URI',
  btnCopy: 'Kopieren',
  btnCopied: 'Kopiert!',
  placeholder: '<svg xmlns="http://www.w3.org/2000/svg" ...',
};

export const content: ToolLocaleContent<SvgToCssUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Referenzen und Dokumentation',
  bibliography: [
    {
      name: 'CSS-Tricks: Using SVG as Background',
      url: 'https://css-tricks.com/using-svg/',
    },
    {
      name: 'MDN Web Docs: mask-image',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image',
    },
    {
      name: 'MDN Web Docs: background-image',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-image',
    },
    {
      name: 'W3C: CSS Masking Module Level 1',
      url: 'https://www.w3.org/TR/css-masking-1/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Warum SVG in CSS Data URI konvertieren?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In der modernen Webentwicklung ist die Optimierung von Performance und Ressourcen-Ladezeiten essenziell. Das direkte Einbetten von Icons in CSS via <strong>Data URIs</strong> eliminiert unnötige HTTP-Anfragen, reduziert Latenzen und verbessert den Time to Interactive (TTI).',
    },
    {
      type: 'paragraph',
      html: 'Dieses Tool transformiert <code>&lt;svg&gt;</code> Vektor-Code in einen kodierten Text-String, den der Browser als Hintergrundbild oder Maske interpretieren kann. Dabei bleiben die unendliche Skalierbarkeit und die Schärfe von Vektoren erhalten.',
    },
    {
      type: 'title',
      text: 'Wichtige technische Vorteile',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Null HTTP-Anfragen:</strong> Durch das Einbetten der Grafiken in Ihre <code>.css</code>-Dateien muss der Browser keine zusätzlichen externen Dateien herunterladen.',
        '<strong>Anpassung via CSS-Maske:</strong> Mit der <code>mask-image</code>-Technik können Sie die Farbe eines komplexen Vektor-Icons einfach über <code>background-color</code> ändern.',
        '<strong>Sofortiges Rendering:</strong> Sie vermeiden Content-Flackern (FOUC), da kritische visuelle Ressourcen sofort verfügbar sind, sobald das Stylesheet geladen ist.',
      ],
    },
    {
      type: 'title',
      text: 'CSS Masken vs. Hintergründe',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Viele Entwickler nutzen einfach <code>background-image</code>, um Vektoren einzubetten, was jedoch eine Einschränkung hat: Die Farbe des SVGs kann nicht dynamisch über CSS geändert werden.',
    },
    {
      type: 'paragraph',
      html: 'Unser Tool unterstützt die Code-Generierung für <strong>CSS Masken</strong>. Durch Anwendung einer <code>mask-image</code> mit der generierten Data-URI fungiert das Icon als Schablone, wodurch die <code>background-color</code> des Elements die endgültige Farbe definiert. Dies ist der professionellste Weg, Icons in Astro, Next.js oder anderen modernen Frameworks zu verwalten.',
    },
  ],
};
