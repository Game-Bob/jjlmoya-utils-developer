import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromoteThisWebsiteUI } from '../ui';
import { bibliography } from '../bibliography';

const localized = {
    slug: 'diese-website-bewerben',
    title: 'Diese Website bewerben',
    description: 'Die interne Propagandastelle für jjlmoya.es auf Spanisch und GameBob.dev international. Verwandle Screenshots deiner eigenen Seiten in Social-Bilder, bevor Bob den Feed peinlich findet.',
    faqTitle: 'Diese Website bewerben, ohne die Katze zu verärgern',
    bibliographyTitle: 'Seiten der Operation',
    faq: [
      { question: 'Für wen ist dieses Werkzeug eigentlich?', answer: 'Für die Bewerbung der Seiten jjlmoya.es auf Spanisch und GameBob.dev international. Alle anderen dürfen durchs Fenster schauen.' },
      { question: 'Kann ich einen Screenshot direkt einfügen?', answer: 'Ja. Kopiere einen Screenshot und drücke Strg+V. Er wird zur Werkzeugebene, denn selbst die Katzenverwaltung akzeptiert Beweise im richtigen Format.' },
      { question: 'Was passiert mit einer Produktions-URL?', answer: 'Das Werkzeug liest den Meta-Titel, wählt die passende Marke und lädt das Open-Graph-Bild. Der Slug bekommt endlich keine Beförderung.' },
      { question: 'Warum gibt es zwei Marken?', answer: 'jjlmoya.es ist die spanische Seite und GameBob.dev die internationale Seite. Die Katzen ignorieren diesen Unterschied.' },
      { question: 'Werden meine Bilder hochgeladen?', answer: 'Nein. Die Bilder bleiben im Browser und die Komposition wird lokal erstellt. Nur dein bewusst heruntergeladenes PNG verlässt die Seite.' },
    ],
    howTo: [
      { name: 'Screenshot einfügen', text: 'Füge mit Strg+V einen Screenshot von jjlmoya.es oder GameBob.dev ein. Die Behörde verlangt Beweise aus dem eigenen Imperium.' },
      { name: 'Marke auswählen', text: 'Wähle jjlmoya.es für Spanisch oder GameBob.dev für die internationale Seite. Die Katze besitzt bereits die Räumlichkeiten.' },
      { name: 'Bild arrangieren', text: 'Ziehe Screenshot, Titel, Logo, Hintergrund und Maskottchen an die richtige Stelle, bis es absichtlich aussieht.' },
      { name: 'PNG exportieren', text: 'Lade das PNG in den gewünschten Maßen herunter, bevor Bob den Verdienst beansprucht.' },
    ],
    seoTitle: 'Die offizielle Propagandastelle für jjlmoya und GameBob',
    seoIntro: 'Dies ist kein beliebiger Social-Media-Komponist für jemanden, der gerade das Wort Branding entdeckt hat. Er existiert, um unsere Seiten unter jjlmoya.es und GameBob.dev zu bewerben, während die Katzen die Arbeit beaufsichtigen.',
    seoBody: 'Füge einen echten Screenshot ein oder lade eine Produktions-URL. Das Werkzeug liest den Seitentitel statt aus dem Slug zu raten und hält das Open-Graph-Bild sichtbar, während die Nebenrollen platziert werden.',
    seoTip: 'Beginne mit einer Produktions-URL von jjlmoya.es oder GameBob.dev. Wenn Titel, Marke oder Bild fehlen, beschuldigt die Behörde zuerst das Netz, dann den Menschen und zuletzt die Katzen.',
};
const ui: PromoteThisWebsiteUI = {
    urlLabel: 'Webseiten-URL', urlPlaceholder: 'https://www.example.com/tools/beispiel/', applyUrl: 'Anwenden',
    formatLabel: 'Format', panoramic: 'Panorama · 1536 × 1024', instagram: 'Instagram · 1080 × 1350', square: 'Quadrat · 1080 × 1080', story: 'Story · 1080 × 1920',
    titleLabel: 'Titel', titlePlaceholder: 'Kurzer Titel für das Bild', titleSizeLabel: 'Schriftgröße des Titels', titleBoxSizeLabel: 'Größe des Titelfelds', titleStyleLabel: 'Titelgestaltung',
    brandLabel: 'Marke', brandStyleLabel: 'Markengestaltung', advancedLabel: 'Erweiterte Komposition', assetsLabel: 'Elemente', backgroundLabel: 'Hintergrund', toolLabel: 'Werkzeug-Screenshot', logoLabel: 'Logo', mascotLabel: 'Maskottchen',
    layersLabel: 'Ebenen', backgroundLayer: 'Hintergrund', toolLayer: 'Werkzeug', logoLayer: 'Logo', mascotLayer: 'Maskottchen', titleLayer: 'Titel', reset: 'Zurücksetzen', download: 'PNG herunterladen', activeLayer: 'Aktive Ebene',
    canvasHint: 'Ziehe die Ebenen direkt auf der Zeichenfläche. Füge einen Screenshot mit Strg+V ein.', pasted: 'Screenshot als Werkzeugebene eingefügt.', urlApplied: 'URL angewendet. Passe den Titel an und füge den gewünschten Screenshot hinzu.', urlLoading: 'Seitentitel und offizielles Bild werden gelesen ...', urlFailed: 'Diese Seite konnte nicht gelesen werden. Prüfe die URL oder füge die Elemente manuell hinzu.', fileLoaded: 'Element geladen.',
    titlePaper: 'Redaktionelles Papier', titleRibbon: 'Gefaltetes Band', titleInk: 'Tintenspritzer', titlePoster: 'Nachtplakat', titleTicket: 'Abgerissene Eintrittskarte', titleMarker: 'Material-Unterstreichung', titleSplit: 'Geteilter Block', titleCapsule: 'Minimale Kapsel', titleCorner: 'Redaktionelle Ecke', titleVertical: 'Vertikaler Akzent',
    brandPlain: 'Schlichte Marke', brandPlaque: 'Keramiktafel', brandTicket: 'Eintrittskarte', brandStamp: 'Gummistempel', brandNeon: 'Neonschild', brandRibbon: 'Signalband', brandCorner: 'Redaktionelle Ecke', brandPixel: 'Pixelblock', brandHalo: 'Sanfter Schein', brandEditorial: 'Redaktionelle Linie', defaultTool: 'Füge den Werkzeug-Screenshot ein',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: localized.faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};
const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: localized.title,
  description: localized.description,
  step: localized.howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};
const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: localized.title,
  description: localized.description,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'de',
};

export const content: ToolLocaleContent<PromoteThisWebsiteUI> = {
  slug: localized.slug,
  title: localized.title,
  description: localized.description,
  ui,
  faqTitle: localized.faqTitle,
  faq: localized.faq,
  bibliographyTitle: localized.bibliographyTitle,
  bibliography,
  howTo: localized.howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: localized.seoTitle, level: 2 },
    { type: 'paragraph', html: localized.seoIntro },
    { type: 'stats', columns: 3, items: [{ value: '2', label: ui.brandLabel, icon: 'mdi:domain' }, { value: '4', label: ui.formatLabel, icon: 'mdi:crop' }, { value: '0', label: ui.activeLayer, icon: 'mdi:cat' }] },
    { type: 'title', text: localized.title, level: 3 },
    { type: 'paragraph', html: localized.seoBody },
    { type: 'title', text: localized.faqTitle, level: 3 },
    { type: 'paragraph', html: localized.seoBody },
    { type: 'table', headers: [ui.toolLayer, ui.titleLayer, ui.brandLabel], rows: [[ui.toolLabel, ui.titleLabel, ui.logoLabel]] },
    { type: 'tip', title: localized.faqTitle, html: localized.seoTip },
  ],
};
