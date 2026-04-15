import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PlaceholderGeneratorUI } from '../ui';

const slug = 'platzhalter-bild-generator';
const title = 'Platzhalter Bild Generator. Schnelle Web Mockups online';
const description =
  'Erstellen Sie individuelle Platzhalterbilder für Ihre Web-Designs. Passen Sie Auflösung, Hintergrund und Text an und exportieren Sie sofort als PNG, WebP oder JPEG.';

const faqData = [
  {
    question: 'Was ist ein Platzhalterbild?',
    answer:
      'Ein Platzhalterbild ist eine temporäre Grafik, die im Webdesign und bei der Seitenerstellung verwendet wird, um den Bereich zu reservieren, in dem später ein endgültiges Bild platziert wird. Sie helfen dabei, die Struktur einer Seite zu visualisieren, bevor der finale Inhalt vorliegt.',
  },
  {
    question: 'Kann ich im Generator jede beliebige Auflösung verwenden?',
    answer:
      'Ja, Sie können beliebige numerische Werte für Breite und Höhe eingeben. Der Generator erstellt eine Arbeitsfläche mit exakt den angeforderten Abmessungen – ideal für präzise Raster oder spezifische Werbeformate.',
  },
  {
    question: 'In welchem Format werden die Bilder heruntergeladen?',
    answer:
      'Standardmäßig werden Bilder im WebP-Format erzeugt, das eine optimale Kompression bietet. Sie können aber auch PNG für verlustfreie Qualität oder JPEG für klassische Kompatibilität wählen.',
  },
  {
    question: 'Wird das auf einem Server verarbeitet?',
    answer:
      'Nein, das gesamte Rendering erfolgt sofort im virtuellen Speicher (Canvas) Ihres eigenen Browsers. Die Verarbeitung ist augenblicklich und erfordert keinerlei Datenübertragung über das Netzwerk.',
  },
];

const howToData = [
  {
    name: 'Abmessungen festlegen',
    text: 'Geben Sie Breite und Höhe direkt ein oder klicken Sie auf eines der Voreinstellungen (FHD, HD, Instagram usw.), um die Felder automatisch auszufüllen.',
  },
  {
    name: 'Farben und Text konfigurieren',
    text: 'Wählen Sie Hintergrund- und Textfarbe über die nativen Auswahlfelder oder durch Eingabe eines Hexadezimalcodes. Optional können Sie einen eigenen Text eingeben, der die Standard-Dimensionsanzeige ersetzt.',
  },
  {
    name: 'Schrift und Format auswählen',
    text: 'Wählen Sie die Schriftfamilie und -größe. Legen Sie das Ausgabeformat (WebP, PNG oder JPEG) je nach Ihren Anforderungen fest.',
  },
  {
    name: 'Bild herunterladen',
    text: 'Klicken Sie auf die Schaltfläche „Herunterladen", um das erstellte Platzhalterbild direkt auf Ihrem Gerät zu speichern.',
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

const ui: PlaceholderGeneratorUI = {
  labelDimensions: 'Schnellformate',
  labelWidth: 'Breite (px)',
  labelHeight: 'Höhe (px)',
  labelBgColor: 'Hintergrund',
  labelTextColor: 'Text',
  labelCustomText: 'Eigener Text (Optional)',
  placeholderCustomText: 'z. B.: Hero-Banner',
  labelFontFamily: 'Schriftart',
  labelFontSize: 'Basisgröße',
  fontSizeAuto: 'Automatisch',
  labelFormat: 'Ausgabeformat',
  btnDownload: 'Bild herunterladen',
};

export const content: ToolLocaleContent<PlaceholderGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Referenzen und Dokumentation',
  bibliography: [
    {
      name: 'MDN Web Docs: HTMLCanvasElement.toDataURL()',
      url: 'https://developer.mozilla.org/de/docs/Web/API/HTMLCanvasElement/toDataURL',
    },
    {
      name: 'MDN Web Docs: CanvasRenderingContext2D',
      url: 'https://developer.mozilla.org/de/docs/Web/API/CanvasRenderingContext2D',
    },
    {
      name: 'W3C: HTML Canvas 2D Context',
      url: 'https://www.w3.org/TR/2dcontext/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Das ideale Werkzeug für schnelle Mockups',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'In frühen Konzept- und Strukturphasen eines Webprojekts (Wireframing) ist das finale Bildmaterial selten verfügbar. Leere Platzhalter können die Gesamtwahrnehmung des Layouts verzerren und kritische Abstands- oder Proportionsfehler verbergen. Ein Platzhalter-Bild-Generator löst dieses Problem sofort: Er ermöglicht das Einfügen exakt dimensionierter, farbiger Flächen ohne Umwege.',
    },
    {
      type: 'tip',
      title: 'Reibungsloses Design',
      html: 'Beim Aufbau von CSS Grids ist ein Platzhalter mit exakt 1200x800 Pixeln oft unverzichtbar. Mit heruntergeladenen Füllblöcken vermeiden Sie überflüssiges CSS oder externe Skripte in Ihrem temporären Code.',
    },
    {
      type: 'title',
      text: 'Warum externe Dienste problematisch sind',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Im Frontend-Alltag ist es verbreitet, Dienste wie <code>via.placeholder.com</code> direkt in <code>src</code>-Attribute einzubinden. Das klingt praktisch, hat aber erhebliche Nebenwirkungen, die ein gewissenhafter Entwickler vermeiden sollte.',
    },
    {
      type: 'paragraph',
      html: 'Jede externe Bildadresse in einer Entwicklungsseite erzeugt zusätzliche DNS-Anfragen, verlangsamt Hot-Reloading-Systeme wie Vite, Gulp oder Webpack und hinterlässt ungewollt Spuren in Branches, die irgendwann in der Cloud landen. Mit diesem Generator und dem Export im bevorzugten Format (WebP, PNG oder JPEG) bleibt Ihr Prototyp vollständig im Localhost-Modus.',
    },
    {
      type: 'title',
      text: 'Technische Stärken des Generators',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Pixel-genaue Auflösung:</strong> Der native HTML5 Canvas stellt sicher, dass die exportierte Arbeitsfläche arithmetisch exakt den vom Nutzer angegebenen Koordinaten entspricht.',
        '<strong>Typografisches Autoscaling:</strong> Im automatischen Modus berechnet die Schriftgröße die Umfangsfläche und Zeichenanzahl, um den Text elegant einzupassen – ohne unerwünschte <em>Overflows</em>.',
        '<strong>Hexadezimale Synchronisation:</strong> Bidirektionale Zustandskontrolle zwischen nativen HTML-Farbwählern und Texteingaben sorgt für präzise Kontraste, die Ihrer Figma- oder Penpot-Palette entsprechen.',
      ],
    },
    {
      type: 'title',
      text: 'Die verborgene Kunst des technischen Wireframings',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kein monolithisches Projekt und kein Micro-Frontend kommt ohne Grundlagenarbeit aus – erst recht nicht bei anspruchsvollen Kunden oder Product Managern mit klarer Vision. Wer grafische Iterationen zügig durchführen kann, ohne fertige <em>Assets</em> mitschleppen zu müssen, hat einen klaren Vorteil. Dieser Generator greift direkt auf die moderne JS-API <code>toDataURL()</code> auf Ihrer lokalen Maschine zurück und liefert ein professionelles Ergebnis ohne fragwürdige Zwischenverarbeitung.',
    },
  ],
};
