import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { ToolLocaleContent, SEOSection } from '../../../types';
import type { DualOsIconPreviewUI } from '../ui';

interface LocalizedCopy {
  locale: string;
  slug: string;
  title: string;
  description: string;
  faqTitle: string;
  bibliographyTitle: string;
  ui: DualOsIconPreviewUI;
  faq: { question: string; answer: string }[];
  howTo: { name: string; text: string }[];
  seo: SEOSection[];
}

function createDualOsIconPreviewContent(copy: LocalizedCopy): ToolLocaleContent<DualOsIconPreviewUI> {
  const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: copy.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
  const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: copy.title, description: copy.description, step: copy.howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
  const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: copy.title, description: copy.description, applicationCategory: 'DesignApplication', operatingSystem: 'iOS, Android', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: copy.locale };
  return { slug: copy.slug, title: copy.title, description: copy.description, ui: copy.ui, faqTitle: copy.faqTitle, faq: copy.faq, bibliographyTitle: copy.bibliographyTitle, bibliography, howTo: copy.howTo, schemas: [appSchema, faqSchema, howToSchema], seo: copy.seo };
}

const title = 'App Icon Audit für iOS und Android';
const description = 'Lade ein Logo hoch und prüfe sein Aussehen auf iPhone und Pixel. Untersuche iOS Modi, adaptive Android Masken, Sicherheitsabstände und thematische Symbole direkt im Browser.';
const ui: DualOsIconPreviewUI = {
  labelUpload: 'Logo hochladen', uploadAction: 'Bild auswählen', uploadHint: 'Dasselbe Zeichen füllt beide Telefone', dropHint: 'PNG, JPG, WEBP oder SVG', labelAppName: 'App Name', appNamePlaceholder: 'Wird unter dem Symbol angezeigt', labelBrandColor: 'Systemakzentfarbe', labelIosAppearance: 'iOS Darstellung', iosAppearanceHint: 'Prüfe das Zeichen in jedem Home Screen Modus', iosDefault: 'Standard', iosDark: 'Dunkel', iosClear: 'Klar', iosTinted: 'Getönt', labelAndroidShape: 'Adaptive Android Maske', androidShapeHint: 'Launcher können die Außenform ändern', androidCircle: 'Kreis', androidSquircle: 'Squircle', androidRounded: 'Abgerundet', androidTeardrop: 'Tropfen', labelAndroidTheme: 'Thematisches Symbol prüfen', androidThemeHint: 'Färbt jedes Symbol mit einem Systemton und erhält seine Silhouette', iosDeviceLabel: 'iPhone', androidDeviceLabel: 'Pixel', iosHomeLabel: 'Home Screen', androidHomeLabel: 'Launcher', safeZoneLabel: 'iOS Maske', adaptiveLayerLabel: 'Adaptives Symbol', monochromeLabel: 'Themenebene', nameFallback: 'Deine App', emptyLogo: 'Dein Logo', fileError: 'Wähle eine Bilddatei aus.', statusReady: 'Bereit', statusNeedsReview: 'Logo hinzufügen', stageKicker: 'Zwei Gerätekontexte, ein Audit', stageNote: 'Prüfe jede Darstellung im Kontext', auditTitle: 'Logo Audit', auditHint: 'Lokal aus dem geladenen Bild gemessen', auditWaiting: 'Logo hochladen', auditNotChecked: 'Nicht geprüft', auditFile: 'Datei', auditAspect: 'Seitenverhältnis', auditResolution: 'Auflösung', auditIosMask: 'iOS Maskenabstand', auditAndroidZone: 'Android Sicherheitszone', auditMargin: 'Kleinster Rand', auditTransparency: 'Alpha Rand', auditTransparent: 'Transparent', auditFullBleed: 'Vollflächig', statusPass: 'BESTANDEN', statusReview: 'PRÜFEN',
};
const faq = [
  { question: 'Was prüft dieses App Icon Audit?', answer: 'Es prüft Bildmaße, Seitenverhältnis, Auflösung, transparenten Rand, iOS Maskenabstand und die adaptive Android Sicherheitszone. Außerdem siehst du den App Namen in Launcher Größe.' },
  { question: 'Kann ich iPhone und Android gleichzeitig sehen?', answer: 'Ja. Logo und App Name erscheinen gleichzeitig in einem iPhone Home Screen und einem Pixel Launcher. So bleibt der Kontext beider Geräte sichtbar.' },
  { question: 'Was macht der Modus für thematische Android Symbole?', answer: 'Er legt einen Systemton und eine monochrome Darstellung auf jedes Android Symbol in der Szene, einschließlich Zielsymbol, Nachbarsymbolen und Dock. So wird sichtbar, ob die Form auch ohne Originalfarben funktioniert.' },
  { question: 'Verlässt das Logo meinen Browser?', answer: 'Nein. Das Bild wird lokal im Browser gelesen und gemessen. Dieses Tool lädt es nicht auf einen Server hoch.' },
  { question: 'Ist das Ergebnis für die Veröffentlichung im App Store bereit?', answer: 'Nein. Es ist ein lokales Design und Asset Audit. Für finale Exporte, Launcher Verhalten und Store Freigaben brauchst du die Plattformwerkzeuge von Apple und Android sowie ein echtes Gerät oder einen Emulator.' },
];
const howTo = [
  { name: 'Logo hochladen', text: 'Wähle ein PNG, JPG, WEBP oder SVG. Dasselbe lokale Bild erscheint in beiden Gerätekontexten.' },
  { name: 'App Namen eingeben', text: 'Gib die Beschriftung des Launchers ein und prüfe, ob sie neben echten Nachbarsymbolen lesbar bleibt.' },
  { name: 'iOS Darstellungen prüfen', text: 'Wechsle zwischen Standard, Dunkel, Klar und Getönt und achte auf schwachen Kontrast oder verschwindende Details.' },
  { name: 'Android Masken prüfen', text: 'Probiere Kreis, Squircle, abgerundet und Tropfen. Aktiviere danach thematische Symbole, um die monochrome Version im gesamten Launcher zu prüfen.' },
  { name: 'Audit auswerten', text: 'Schaffe mehr freien Rand, vereinfache feine Details oder verbessere den Kontrast, bevor du die finalen Plattform Assets vorbereitest.' },
];

export const content = createDualOsIconPreviewContent({ locale: 'de', slug: 'app-icon-audit-ios-android', title, description, faqTitle: 'Häufig gestellte Fragen', bibliographyTitle: 'Quellen', ui, faq, howTo, seo: [
  { type: 'title', text: 'App Icon vor der Veröffentlichung prüfen', level: 2 },
  { type: 'paragraph', html: 'Lade ein Logo hoch und prüfe es gleichzeitig in einem iPhone Home Screen und einem Pixel Launcher. Dieses App Icon Audit misst Bildfläche, Seitenverhältnis, Auflösung, transparenten Rand, iOS Maskenabstand und die adaptive Android Sicherheitszone. Gib auch den echten App Namen ein, denn ein Symbol kann die Bildprüfung bestehen und trotzdem scheitern, wenn seine Launcher Beschriftung nicht lesbar ist.' },
  { type: 'title', text: 'Was dieses App Icon Audit prüft', level: 3 },
  { type: 'list', items: ['Bildfläche und Seitenverhältnis: Bestätige, dass die Quelle quadratisch ist, bevor Plattformwerkzeuge ihre eigene Darstellung hinzufügen.', 'Auflösung: Erkenne kleine Quelldateien, bevor sie in größeren Launcher Kontexten weich oder unbrauchbar werden.', 'Randabstand: Sieh, ob wichtige Formen oder Buchstaben zu nah an der iOS Maske oder der Android Sicherheitszone liegen.', 'Launcher Beschriftung: Prüfe den App Namen in derselben Größe wie benachbarte Symbole und erkenne ungünstige Umbrüche.', 'Thematische Android Darstellung: Lege eine monochrome Systemfarbe auf Ziel, Nachbarsymbole und Dock, damit Farbe keine schwache Silhouette verdeckt.'] },
  { type: 'title', text: 'Beide Gerätekontexte gleichzeitig ansehen', level: 3 },
  { type: 'paragraph', html: 'Nutze die beiden Telefonansichten als eine Audit Fläche. Wechsle durch iOS Standard, Dunkel, Klar und Getönt und probiere danach Android Kreis, Squircle, abgerundet und Tropfen. Ziel ist, Informationen darüber zu sammeln, wie sich dasselbe Asset auf Launcher Flächen verhält, nicht eine Plattform gegen die andere auszuspielen.' },
  { type: 'title', text: 'Was dieses Audit nicht garantieren kann', level: 3 },
  { type: 'paragraph', html: 'Dies ist eine browserbasierte Design und Asset Prüfung und kein Ersatz für Xcode, Android Studio, ein echtes Gerät oder einen Emulator. Launcher, Betriebssystemversionen und Hersteller können Masken, Abstände, Kontrast und Regeln für thematische Symbole unterschiedlich anwenden. Nutze das Audit, um Risiken früh zu finden, und prüfe danach die finalen Plattform Assets in den Umgebungen, die du unterstützt.' },
  { type: 'tip', title: 'Praktische Audit Routine', html: 'Prüfe das Logo in jeder Darstellung bei der kleinsten sinnvollen Größe. Wenn es nur mit einem Hintergrund, einer Maske oder seinen Originalfarben funktioniert, vereinfache die Grafik oder gib ihr mehr freien Rand, bevor du sie veröffentlichst.' },
] });
