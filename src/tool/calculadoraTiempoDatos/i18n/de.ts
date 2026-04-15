import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CalculadoraTiempoDatosUI } from '../ui';

const slug = 'daten-zeit-rechner-web-geschwindigkeit-auswirkung';
const title = 'Datenzeitrechner: Auswirkung der Webgeschwindigkeit';
const description = 'Entdecken Sie, wie viel Lebenszeit Ihre Nutzer mit dem Warten auf das Laden Ihrer Website bei 3G-, 4G- und 5G-Verbindungen verlieren. Berechnen Sie die realen Auswirkungen Ihres Website-Gewichts.';

const faqData = [
  {
    question: 'Warum ist es wichtig, die Ladezeit meiner Website zu kennen?',
    answer: 'Weil sie sich direkt auf die Benutzererfahrung, SEO und Conversions auswirkt. Google hat dokumentiert, dass jede Sekunde Verzögerung die Conversions um 7 % reduziert. Zudem verlassen 53 % der mobilen Besucher eine Seite, die länger als 3 Sekunden zum Laden benötigt.',
  },
  {
    question: 'Was bedeuten diese kleinen Prozentsätze des Lebenszeitverlusts?',
    answer: 'Sie stellen den Prozentsatz der gesamten Lebenszeit einer Person dar (ca. 80 Jahre oder 2,5 Milliarden Sekunden), die mit dem Warten auf das Laden Ihrer Seite verbracht wird. Auch wenn sie einzeln klein erscheinen, summieren sie sich bei Millionen von Nutzern zu enormen Mengen verschwendeter menschlicher Zeit.',
  },
  {
    question: 'Wie hoch ist die durchschnittliche Verbindungsgeschwindigkeit weltweit?',
    answer: '4G ist in Industrieländern Standard. Millionen von Nutzern in Schwellen- und Entwicklungsländern sind jedoch immer noch auf 3G angewiesen. Deshalb ist es entscheidend, Ihre Website für alle Verbindungsgeschwindigkeiten zu optimieren.',
  },
  {
    question: 'Wie schwer sollte meine Website sein?',
    answer: 'Google empfiehlt, dass die Startseite bei einer typischen 4G-Verbindung in weniger als 3 Sekunden lädt. Idealerweise sollte eine Website dafür zwischen 1 und 2 MB wiegen. Der weltweite Durchschnitt liegt jedoch bei fast 2-3 MB.',
  },
  {
    question: 'Wie kann ich das Gewicht meiner Website reduzieren?',
    answer: 'Hauptstrategien: Bilder optimieren (50-80 % des Gewichts), CSS und JavaScript minifizieren, Lazy Loading verwenden, Browser-Cache implementieren und ein CDN nutzen. Die Bildoptimierung ist normalerweise der wirkungsvollste Faktor.',
  },
  {
    question: 'Beeinflusst die Ladegeschwindigkeit das Google-Ranking?',
    answer: 'Ja, absolut. Google betrachtet Core Web Vitals als wichtige Rankingfaktoren. Eine langsamere Website wird schlechter gerankt als eine schnellere, selbst bei ähnlichem Inhalt.',
  },
];

const howToData = [
  { name: 'Website-Gewicht eingeben', text: 'Verwenden Sie Browser-Entwicklertools oder WebPageTest, um das Gewicht Ihrer Seite zu ermitteln. Geben Sie diesen Wert in MB ein.' },
  { name: 'Ladezeiten beobachten', text: 'Der Rechner zeigt an, wie viele Sekunden Ihre Website zum Laden bei 3G, 4G und 5G benötigt. Die realen Zeiten sind meist höher.' },
  { name: 'Lebenszeitauswirkung verstehen', text: 'Der Prozentsatz der „Lebenszeit“ zeigt, wie viel Zeit jemand mit Warten verbringt. Nutzen Sie dies als Motivation zur Optimierung.' },
  { name: 'Optimieren und neu berechnen', text: 'Messen Sie nach der Optimierung erneut und berechnen Sie neu. Sehen Sie, wie kleine Verbesserungen große Auswirkungen haben.' },
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

const ui: CalculadoraTiempoDatosUI = {
  headerTitle: 'In Netzwerken verlorene Zeit',
  labelWebSize: 'Website-Gewicht (MB)',
  unit: 'MB',
  presetsLabel: 'REALISTISCHE BEISPIELE',
  labelSpeed: 'Verbindungsgeschwindigkeit',
  speedLabel3g: '3G',
  speedValue3g: '0,4 Mbps',
  speedLabel4g: '4G/LTE',
  speedValue4g: '10 Mbps',
  speedLabel5g: '5G',
  speedValue5g: '100+ Mbps',
  labelTimes: 'Wie oft pro Tag?',
  resultTitle: 'Ergebnisse',
  resultSingleLoad: 'Einzelner Ladevorgang',
  resultDailyTotal: 'Täglich insgesamt',
  resultTimePerYear: 'Wartezeit pro Jahr',
  resultLifeYears: 'in Ihrem Leben',
  resultMessage: 'Sie haben etwa 1 Jahr Lebenszeit verloren',
  copyMessage: 'Kopiert',
  preset3g: '3G',
  preset4g: '4G',
  preset5g: '5G',
};

export const content: ToolLocaleContent<CalculadoraTiempoDatosUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Technische Ressourcen zur Web-Optimierung',
  bibliography: [
    { name: 'Google PageSpeed Insights', url: 'https://pagespeed.web.dev/' },
    { name: 'WebPageTest - Website-Geschwindigkeit analysieren', url: 'https://www.webpagetest.org/' },
    { name: 'Web.dev - Core Web Vitals', url: 'https://web.dev/vitals/' },
    { name: 'MDN - Web Performance', url: 'https://developer.mozilla.org/en-US/docs/Web/Performance' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Warum die Ladegeschwindigkeit von Websites kritisch ist', level: 2 },
    {
      type: 'paragraph',
      html: 'Im heutigen digitalen Zeitalter ist die Ladegeschwindigkeit von Websites kein Luxus, sondern eine Notwendigkeit. Jede Millisekunde zählt, wenn es darum geht, Nutzer zu binden, das Suchranking zu verbessern und Conversions zu maximieren. Moderne Nutzer erwarten, dass Seiten in weniger als 3 Sekunden laden.',
    },
    { type: 'title', text: 'Auswirkung auf die Benutzererfahrung', level: 3 },
    {
      type: 'paragraph',
      html: '53 % der mobilen Besucher verlassen eine Seite, wenn sie länger als 3 Sekunden zum Laden benötigt. Die Conversion-Raten sinken pro zusätzliche Sekunde Latenz um 7 %.',
    },
    { type: 'title', text: 'Verbindungsgeschwindigkeiten verstehen', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>3G:</strong> 0,4 Mbps - Verbreitet in ländlichen Gebieten und Entwicklungsländern',
        '<strong>4G/LTE:</strong> 10 Mbps - Standard in Industrieländern',
        '<strong>5G:</strong> 100+ Mbps - Wird schrittweise ausgebaut, noch begrenzt',
      ],
    },
    { type: 'title', text: 'Strategien zur Reduzierung des Website-Gewichts', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Bildoptimierung:</strong> Macht 50-80 % des Gewichts aus. Reduzieren Sie es um 40-60 % mit Tools wie TinyPNG.',
        '<strong>Minifizierung:</strong> Entfernen Sie unnötigen Code aus CSS und JavaScript. Sparen Sie 30-50 %.',
        '<strong>Lazy Loading:</strong> Laden Sie Bilder erst, wenn Nutzer zu ihnen scrollen.',
        '<strong>Browser-Cache:</strong> Statische Dateien im Browser des Nutzers zwischenspeichern.',
        '<strong>CDN:</strong> Inhalte von geografisch nahegelegenen Servern bereitstellen.',
      ],
    },
    { type: 'title', text: 'Fazit: Jede Sekunde zählt', level: 2 },
    {
      type: 'paragraph',
      html: 'Ihre Website ist oft der erste Eindruck, den Nutzer von Ihrer Marke haben. Eine langsame Website frustriert Nutzer und führt zu Geschäftsverlusten. Eine schnelle, reaktionsschnelle Website schafft eine positive Erfahrung und verbessert all Ihre Kennzahlen.',
    },
  ],
};
