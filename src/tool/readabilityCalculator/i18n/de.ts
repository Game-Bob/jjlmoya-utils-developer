import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReadabilityCalculatorUI } from '../ui';

const slug = 'visueller-lesbarkeitsrechner-wcag-apca';
const title = 'Visueller Lesbarkeitsrechner WCAG und APCA';
const description = 'Prüfen Sie den echten Kontrast Ihrer Designs mit APCA (WCAG 3.0). Analysieren Sie, wie Schriftgewicht und -größe die tatsächliche Lesbarkeit beeinflussen. Von einfachen Verhältnissen zur wahrnehmungsbasierten Lesbarkeit.';

const faqData = [
  {
    question: 'Was ist APCA und warum unterscheidet es sich von WCAG 2.1?',
    answer: 'APCA ist der Advanced Perceptual Contrast Algorithm, der für WCAG 3.0 entwickelt wurde. Anders als das alte einfache Verhältnis verwendet APCA mathematische Modelle, die nachbilden, wie das menschliche Gehirn Kontrast wahrnimmt – unter Berücksichtigung der Polarität (heller vs. dunkler Hintergrund) und der Schriftgröße bzw. des Schriftgewichts.',
  },
  {
    question: 'Was bedeutet der Lc-Wert?',
    answer: 'Lc (Lightness Contrast) ist der von APCA erzeugte Kontrastwert. Ein Wert von 100 steht für idealen Maximalkontrast, während Werte unter 60 für Fließtext kritisch werden. Es handelt sich um eine absolute Wahrnehmungsskala.',
  },
  {
    question: 'Wie beeinflusst das Schriftgewicht die Lesbarkeit?',
    answer: 'Dünne Schriften (Thin/Light) benötigen wesentlich höhere Kontraste, um lesbar zu sein. APCA bestraft Schriften mit geringem Gewicht und zeigt, dass ein Design, das WCAG mit einer 100er-Schrift besteht, in der Praxis unleserlich sein kann.',
  },
  {
    question: 'Ist dieser Rechner datenschutzkonform?',
    answer: 'Ja, alle Berechnungen werden lokal in Ihrem Browser durchgeführt. Die analysierten Farben und Einstellungen werden niemals an einen Server übertragen, was vollständige Privatsphäre für Ihre Designprojekte garantiert.',
  },
];

const howToData = [
  { name: 'Farben wählen', text: 'Verwenden Sie die Farbwähler, um die Text- und Hintergrundfarbe Ihres Designs festzulegen.' },
  { name: 'Typografie anpassen', text: 'Stellen Sie mit den Schiebereglern die Schriftgröße und das Schriftgewicht ein, um Ihre tatsächliche Typografie zu simulieren.' },
  { name: 'Ergebnisse ablesen', text: 'Prüfen Sie das WCAG 2.1-Verhältnis und den APCA-Lc-Wert, um festzustellen, ob Ihr Design barrierefrei ist.' },
  { name: 'Empfehlungen prüfen', text: 'Lesen Sie die APCA-spezifischen Empfehlungen für Fließtext, kleinen Text und UI-Elemente.' },
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

const ui: ReadabilityCalculatorUI = {
  labelColors: 'Grundfarben',
  labelText: 'Text',
  labelBg: 'Hintergrund',
  labelTypo: 'Typografie',
  labelFontSize: 'Schriftgröße',
  labelFontWeight: 'Schriftgewicht',
  labelCompare: 'Kontrastvergleich',
  labelPreview: 'Wahrnehmungsvorschau',
  labelApcaRecs: 'APCA-Empfehlungen',
  labelBody: 'Fließtext (Body)',
  labelSmall: 'Kleiner Text / Bildunterschrift',
  labelUi: 'UI / Schaltflächen',
  statusYes: 'Ja',
  statusNo: 'Nein',
  wcagAAA: 'Besteht AAA',
  wcagAA: 'Besteht AA',
  wcagLarge: 'Nur großer Text',
  wcagFail: 'Nicht bestanden',
  apcaExcellent: 'Ausgezeichnet',
  apcaGood: 'Gut',
  apcaMinimal: 'Minimal',
  apcaPoor: 'Unzureichend',
  previewText: 'Visuelle Lesbarkeit ist nicht nur Mathematik. Es ist die Art, wie Licht und Schatten mit Ihren Augen interagieren.',
  wcagRatioLabel: 'WCAG 2.1 Verhältnis',
  apcaLcLabel: 'APCA Lc (WCAG 3)',
};

export const content: ToolLocaleContent<ReadabilityCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Ressourcen zu Kontrast und APCA',
  bibliography: [
    { name: 'W3C: WCAG 3.0 Entwurf (Silver)', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/' },
    { name: 'Myndex: APCA Referenzhandbuch', url: 'https://apcaw3.myndex.com/' },
    { name: 'MDN: Barrierefreiheit und Farbkontrast', url: 'https://developer.mozilla.org/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Visueller Lesbarkeitsrechner (WCAG vs APCA)', level: 2 },
    {
      type: 'paragraph',
      html: 'Verstehen Sie, wie Farben und Typografie die tatsächliche Lesbarkeit beeinflussen – mit dem neuen wahrnehmungsbasierten Barrierefreiheitsstandard. WCAG 2.1 nutzt eine einfache Formel aus dem Jahr 2008. <strong>APCA</strong> ist das neue Modell für <strong>WCAG 3.0</strong>, das menschliche Wahrnehmung nachbildet.',
    },
    { type: 'title', text: 'Kernpunkte von APCA', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Polarität:</strong> Berücksichtigt, dass Dark Mode anders wahrgenommen wird als Light Mode.',
        '<strong>Schriftgewicht:</strong> Weist spezifische Kontrastschwellen (Lc) je nach Schriftstärke zu.',
        '<strong>Linearität:</strong> Behebt mathematische Ungenauigkeiten im relativen Luminanzmodell von 2008.',
      ],
    },
    { type: 'title', text: 'Empfohlene APCA-Stufen', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Lc 90+:</strong> Ideal für sehr kleinen oder dünnen Text.',
        '<strong>Lc 75:</strong> Standard für normalen Fließtext.',
        '<strong>Lc 60:</strong> Minimum für lesbaren Text mittlerer Größe.',
        '<strong>Lc 45:</strong> Minimum für große oder dekorative Elemente.',
      ],
    },
  ],
};
