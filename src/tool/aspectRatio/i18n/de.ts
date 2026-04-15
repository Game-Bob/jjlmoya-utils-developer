import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AspectRatioUI } from '../ui';

const slug = 'seitenverhaeltnis-rechner';
const title = 'Seitenverhältnis Rechner in Pixeln. Online Proportionen';
const description =
  'Berechnen Sie neue Bild-, Video- und Webdesign-Auflösungen und behalten Sie die exakten Proportionen bei, um grafische Verzerrungen zu vermeiden. Unterstützt 16:9, 4:3, 21:9 und benutzerdefinierte Formate.';

const faqData = [
  {
    question: 'Was ist das Seitenverhältnis?',
    answer:
      'Das Seitenverhältnis (Aspect Ratio) beschreibt das geometrische Verhältnis zwischen der Breite und der Höhe eines Bildes oder Bildschirms. Es wird durch zwei Zahlen dargestellt, die durch einen Doppelpunkt getrennt sind (z. B. 16:9), und gibt an, wie sich die Höhe proportional zur Breite verändert.',
  },
  {
    question: 'Warum ist es wichtig, die korrekten Proportionen beizubehalten?',
    answer:
      'Das Ignorieren des Seitenverhältnisses führt zu gestauchten oder gestreckten Bildern, unerwünschten schwarzen Balken (Letterboxing) in Videos und Webkomponenten, deren Layout bei unterschiedlichen Bildschirmgrößen zerstört wird. Die Beibehaltung korrekter Proportionen ist entscheidend für eine professionelle Darstellung.',
  },
  {
    question: 'Wie berechne ich die Höhe aus der Breite bei einem gegebenen Verhältnis?',
    answer:
      'Die Formel lautet: Höhe = Breite × (Verhältnis Höhe / Verhältnis Breite). Beispiel: Bei einer Breite von 1280px mit einem Verhältnis von 16:9 wäre die Höhe: 1280 × (9/16) = 720px.',
  },
  {
    question: 'Was ist das Standard-Seitenverhältnis für YouTube-Videos?',
    answer:
      '16:9 ist das Standardverhältnis für YouTube und die meisten modernen Videoplattformen. Es entspricht Auflösungen wie 1280×720 (HD), 1920×1080 (Full HD) oder 3840×2160 (4K UHD).',
  },
  {
    question: 'Welches Seitenverhältnis nutzen vertikale Social-Media-Videos?',
    answer:
      '9:16, was genau dem Umkehrschluss des Breitbildformats entspricht. Es ist das native Verhältnis für TikTok, Instagram Reels und YouTube Shorts, bedingt durch die vertikale Nutzung von Smartphones.',
  },
];

const howToData = [
  {
    name: 'Originalverhältnis eingeben',
    text: 'Geben Sie die Breiten- und Höhenwerte des Verhältnisses ein, das Sie beibehalten möchten (z. B. 16 und 9 für Breitbild), oder wählen Sie eine der Voreinstellungen.',
  },
  {
    name: 'Skalierung anpassen',
    text: 'Ändern Sie den Breiten- oder Höhenwert im Abschnitt "Echtmaßstab". Das Tool berechnet automatisch den jeweils anderen Wert, um die Proportionen zu wahren.',
  },
  {
    name: 'Vorschau prüfen',
    text: 'Das Vorschauband zeigt die resultierende Form im proportionalen Maßstab mit dem vereinfachten Verhältnis und der berechneten Auflösung.',
  },
  {
    name: 'In Ihr Projekt übernehmen',
    text: 'Kopieren Sie die berechneten Werte, um sie in Ihrem CSS (aspect-ratio: 16 / 9), beim Video-Export oder in den Einstellungen Ihres Design-Tools zu verwenden.',
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

const ui: AspectRatioUI = {
  labelConfig: 'Konfiguration',
  labelRatio: 'Originalverhältnis',
  labelWidth: 'Breite',
  labelHeight: 'Höhe',
  labelScale: 'Echtmaßstab',
  labelPixelWidth: 'Pixel (Breite)',
  labelPixelHeight: 'Pixel (Höhe)',
  labelPreview: 'Proportionale Vorschau',
  labelStatus: 'Perfektes Verhältnis',
  labelOffline: '100% Offline-Tool',
};

export const content: ToolLocaleContent<AspectRatioUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Referenzen und Dokumentation',
  bibliography: [
    {
      name: 'MDN Web Docs: aspect-ratio (CSS)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio',
    },
    {
      name: 'Wikipedia: Seitenverhältnis',
      url: 'https://de.wikipedia.org/wiki/Seitenverhältnis',
    },
    {
      name: 'W3C: CSS Box Sizing Level 4',
      url: 'https://www.w3.org/TR/css-sizing-4/#aspect-ratio',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Was ist das Seitenverhältnis?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Im Grafikdesign, in der Fotografie und in der Frontend-Entwicklung beschreibt das <strong>Seitenverhältnis</strong> (Aspect Ratio) die geometrische Beziehung zwischen der Breite und der Höhe eines Bildes, eines Bildschirms oder eines Containers. Es wird üblicherweise durch zwei Zahlen dargestellt, die durch einen Doppelpunkt getrennt sind (z. B. <code>16:9</code>), und gibt an, wie die Höhe proportional zur Breite skaliert wird.',
    },
    {
      type: 'paragraph',
      html: 'Falsch gehandhabte Seitenverhältnisse sind eine häufige Ursache für gestauchte Fotos, Videos mit unerwartetem Beschnitt (Letterboxing) oder Webkomponenten, deren Layout beim Betrachten auf unterschiedlichen Geräten – vom Smartphone bis hin zu Ultra-Wide-Monitoren – fehlerhaft dargestellt wird.',
    },
    {
      type: 'title',
      text: 'Gängige Branchenverhältnisse',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Je nach Fachbereich werden Sie ständig mit einer begrenzten Anzahl an globalen Standardproportionen zu tun haben:',
    },
    {
      type: 'list',
      items: [
        '<strong>16:9 (Widescreen):</strong> Das absolut dominante Format für moderne Monitore, Fernseher, YouTube-Aufnahmen oder Standard-HD-Auflösungen (wie 1920×1080 oder 4K).',
        '<strong>9:16 (Vertikal):</strong> Entstanden durch die native Nutzung von Inhalten auf Mobilgeräten (TikTok, Instagram Reels, YouTube Shorts). Exakt das gleiche Verhältnis wie Breitbildvideos, jedoch mit einer physischen Drehung des Geräts.',
        '<strong>4:3 (Klassisch / Vintage):</strong> Zu finden bei alten Fernsehern und Monitoren sowie bei analogen und speziellen digitalen Kameramodellen. Die fast quadratische Optik lenkt den Blick direkt auf die zentrale Bildachse.',
      ],
    },
    {
      type: 'title',
      text: 'Webentwicklung und die CSS-Eigenschaft aspect-ratio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Früher wurden in CSS komplexe mathematische Systeme mit einem <strong>Padding-Hack</strong> (wie <code>padding-top: 56.25%</code>) verwendet, um dynamische Platzhalter für YouTube-Iframes oder Titelbilder zu reservieren und so ein störendes Cumulative Layout Shift (CLS) beim Laden der Seite zu vermeiden.',
    },
    {
      type: 'paragraph',
      html: 'Heutzutage nutzen alle modernen Layouts direkt Eigenschaften wie <code>aspect-ratio: 16 / 9;</code>. Dies sorgt für semantischen Code und ermöglicht es dem Browser, die fehlende Dimension automatisch von der ursprünglichen, über Grid oder Flexbox definierten Breite abzuleiten.',
    },
    {
      type: 'paragraph',
      html: 'Dieser lokale Pixel-Rechner unterstützt Sie dabei, durch sofortige Skalierungsberechnungen Designfehler und katastrophale Fehlkonfigurationen zu vermeiden.',
    },
  ],
};
