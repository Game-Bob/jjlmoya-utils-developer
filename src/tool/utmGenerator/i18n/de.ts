import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UtmGeneratorUI } from '../ui';

const slug = 'utm-generator-de';
const title = 'UTM Parameter Generator für Google Analytics';
const description = 'Erstellen Sie präzise Tracking-Links für Ihre digitalen Marketingkampagnen. Optimiert für Google Analytics und andere Analysetools.';

const faqData = [
  {
    question: 'Ist die Verwendung von UTM-Parametern schlecht für SEO?',
    answer: 'Nein, solange Sie Canonical-Tags verwenden. Suchmaschinen verstehen, dass UTM-Parameter für Analysen gedacht sind und keine doppelten Inhalte erzeugen.',
  },
  {
    question: 'Sollte ich UTM-Parameter für interne Links verwenden?',
    answer: 'Nein, niemals. UTM-Tags bei internen Links unterbrechen die Nutzersitzung in Tools wie Google Analytics und verfälschen Ihre Traffic-Daten.',
  },
  {
    question: 'Unterscheidet Google Analytics bei UTM zwischen Groß- und Kleinschreibung?',
    answer: 'Ja. „google“, „Google“ und „GOOGLE“ werden als unterschiedliche Quellen behandelt. Achten Sie immer auf Konsistenz, am besten verwenden Sie nur Kleinschreibung.',
  },
];

const howToData = [
  { name: 'URL eingeben', text: 'Geben Sie die vollständige URL Ihrer Website ein, einschließlich https://' },
  { name: 'Quelle definieren', text: 'Geben Sie an, woher der Traffic kommt (google, facebook, newsletter usw.)' },
  { name: 'Medium auswählen', text: 'Wählen Sie die Art des Kanals (cpc, email, social, organic usw.)' },
  { name: 'Kampagne benennen', text: 'Geben Sie einen identifizierbaren Namen an, um Ihre Marketingaktivitäten zu gruppieren' },
  { name: 'Kopieren und verwenden', text: 'Kopieren Sie die generierte URL und verwenden Sie sie in Ihren Beiträgen, Anzeigen oder E-Mail-Signaturen' },
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

const ui: UtmGeneratorUI = {
  labelUrl: 'Website-URL (z. B. https://example.com) *',
  labelSource: 'Kampagnenquelle (z. B. google, newsletter) *',
  labelMedium: 'Kampagnenmedium (z. B. cpc, email)',
  labelCampaign: 'Kampagnenname (z. B. sommer_angebot)',
  labelTerm: 'Kampagnenbegriff (z. B. schuhe_kaufen)',
  labelContent: 'Kampagneninhalt (z. B. banner_oben)',
  labelGenerated: 'Generierte URL:',
  btnCopy: 'Link kopieren',
  btnCopied: 'Kopiert!',
  errorInvalid: 'Geben Sie eine gültige URL ein',
  errorInvalidUrl: 'Ungültige URL',
};

export const content: ToolLocaleContent<UtmGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Referenzen',
  bibliography: [
    { name: 'Kampagnendaten mit benutzerdefinierten URLs erfassen - Google Analytics-Hilfe (2024)', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: 'Best Practices für die Kennzeichnung von Kampagnen-URLs - VWO Blog (2023)', url: 'https://vwo.com/blog/utm-tagging-best-practices/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'UTM-Generator: Tracking-Parameter für Google Analytics', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>UTM-Parameter</strong> (Urchin Tracking Module) sind Textlabels, die am Ende einer URL hinzugefügt werden, um den Web-Traffic zu verfolgen. Unser Generator vereinfacht das Erstellen von trackingfähigen Links für Ihre digitalen Marketingkampagnen.',
    },
    { type: 'title', text: 'Die 5 Säulen einer verfolgbaren URL', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Kampagnenquelle:</strong> Identifiziert die Suchmaschine, das soziale Netzwerk oder den Traffic-Ursprung. Beispiel: google, newsletter, facebook.',
        '<strong>Kampagnenmedium:</strong> Bezieht sich auf den Marketingkanal. Beispiel: cpc, email, social, banner, organic.',
        '<strong>Kampagnenname:</strong> Der spezifische Name Ihrer Kampagne. Beispiel: sommer_angebot_2025, app_launch_v2.',
        '<strong>Kampagnenbegriff:</strong> Bei bezahlter Suche die Keywords, auf die Sie bieten. Beispiel: sportschuhe_kaufen.',
        '<strong>Kampagneninhalt:</strong> Für A/B-Tests. Unterscheidet ähnliche Elemente innerhalb einer Kampagne. Beispiel: header_v1, sidebar_v2.',
      ],
    },
    { type: 'title', text: 'Best Practices für UTM-Tagging', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Einheitliche Schreibweise:</strong> Tools unterscheiden zwischen „Google“, „GOOGLE“ und „google“. Verwenden Sie immer Kleinschreibung, um Duplikate zu vermeiden.',
        '<strong>Leerzeichen vermeiden:</strong> Leerzeichen werden zu %20. Verwenden Sie stattdessen Bindestriche (-) oder Unterstriche (_).',
        '<strong>Nicht bei internen Links verwenden:</strong> UTM-Tracking ist ausschließlich für externen Traffic gedacht. Bei internen Links unterbricht es die Sitzung und verfälscht wichtige Kennzahlen.',
        '<strong>Dokumentieren Sie Ihre Tags:</strong> Führen Sie Protokoll über alle verwendeten Kombinationen, um Inkonsistenzen zu vermeiden.',
      ],
    },
  ],
};

