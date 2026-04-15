import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlCleanerUI } from '../ui';

const slug = 'url-tracking-bereiniger';
const title = 'URL Tracking Bereiniger: UTM, FBCLID und GCLID entfernen';
const description = 'Entfernt automatisch Tracking- und Werbeparameter aus deinen URLs. Teile saubere Links und schütze deine digitale Privatsphäre sofort.';

const faqData = [
  {
    question: 'Welche Arten von Tracking-Parametern entfernt dieses Tool?',
    answer: 'Das Tool erkennt und entfernt automatisch die gängigsten Tracking-Parameter: UTM-Parameter (utm_source, utm_medium usw.), Klick-IDs aus der Werbung (fbclid, gclid, msclkid) sowie Kennungen aus E-Mail-Marketing-Kampagnen (mc_cid, _hsenc).',
  },
  {
    question: 'Beeinträchtigt das die Funktionalität der Website?',
    answer: 'In der Regel nicht. Diese Parameter werden fast ausschließlich für Analyse und Marketing verwendet. Wenn du sie entfernst, lädt die Seite ganz normal – nur der Websitebetreiber kann nicht mehr nachvollziehen, woher dein Klick stammte.',
  },
  {
    question: 'Ist es sicher, meine Links hier zu verarbeiten?',
    answer: 'Absolut. Wie alle unsere Tools läuft der Prozess zu 100 % clientseitig ab. Deine Links werden niemals an unsere Server übertragen – alles geschieht privat in deinem eigenen Browser.',
  },
  {
    question: 'Warum sind meine Facebook-Links so lang?',
    answer: 'Facebook hängt an jeden Link, der die Plattform verlässt, einen Parameter namens „fbclid" an. Damit können sie deine Aktivitäten auf anderen Websites verfolgen – selbst wenn du Drittanbieter-Werbung blockiert hast.',
  },
];

const howToData = [
  { name: 'URL einfügen', text: 'Gib die vollständige URL ein, die Tracking-Parameter enthält' },
  { name: 'Bereinigen klicken', text: 'Das Tool analysiert die URL automatisch' },
  { name: 'Ergebnis prüfen', text: 'Du siehst die bereinigte URL und eine Liste der entfernten Parameter' },
  { name: 'Kopieren und teilen', text: 'Nutze die saubere URL in E-Mails, sozialen Netzwerken oder Nachrichten' },
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

const ui: UrlCleanerUI = {
  labelInput: 'URL mit Tracking-Parametern einfügen',
  btnClean: 'Bereinigen',
  labelCleaned: 'Bereinigte URL',
  labelRemoved: 'Entfernte Tracker',
  countLabel: 'Entfernte Parameter',
  reductionLabel: 'Längenreduktion',
  noneDetected: 'Keine gängigen Tracking-Parameter gefunden.',
  errorInvalid: 'Bitte gib eine gültige URL ein.',
  btnCopy: 'Kopieren',
  btnCopied: 'Kopiert',
};

export const content: ToolLocaleContent<UrlCleanerUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Ressourcen zu Datenschutz und Web-Tracking',
  bibliography: [
    { name: 'Electronic Frontier Foundation (EFF): Leitfaden zum Online-Tracking', url: 'https://www.eff.org/issues/online-behavioral-tracking' },
    { name: 'Google Analytics: Dokumentation zu UTM-Parametern', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: 'Web-Datenschutz: Die Auswirkungen von Klick-IDs', url: 'https://www.w3.org/community/web-advertising/wiki/Click_Identifiers' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'URL Tracking Bereiniger: UTM, FBCLID und GCLID entfernen', level: 2 },
    {
      type: 'paragraph',
      html: 'Entferne unsichtbare Tracker aus deinen Links, um sie sauber, diskret und professionell zu teilen. Erfahre, was diese seltsamen Codes in deinen URLs wirklich bedeuten.',
    },
    { type: 'title', text: 'Was ist ein URL Tracking Bereiniger und warum brauchst du ihn?', level: 3 },
    {
      type: 'paragraph',
      html: 'Hast du schon mal einen Link kopiert, um ihn an jemanden zu schicken, und dabei festgestellt, dass er dreimal so lang ist wie nötig? Dieser überschüssige Ballast sind Tracking-Parameter. Ein <strong>Tracking-Bereiniger</strong> ist ein Tool, das die URL von all den Werbe- und Analyse-Informationen befreit, die große Plattformen bei jedem deiner Klicks einschleusen.',
    },
    { type: 'title', text: 'Die häufigsten Tracking-Parameter', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>UTM (Google Analytics):</strong> utm_source, utm_medium, utm_campaign zur Kampagnenverfolgung',
        '<strong>FBCLID:</strong> Facebook-Klick-ID, um Cookie-Beschränkungen zu umgehen',
        '<strong>GCLID / DCLID:</strong> Google Click ID zur Verknüpfung von Besuchen mit Google Ads-Kampagnen',
        '<strong>MSCLKID:</strong> Klick-ID von Microsoft Advertising und Bing',
        '<strong>HubSpot & Mailchimp:</strong> Marketing-Automatisierungsparameter wie _hsenc, mc_cid',
        '<strong>LinkedIn & andere:</strong> li_fat_id und weitere Social-Media-Tracker',
      ],
    },
  ],
};
