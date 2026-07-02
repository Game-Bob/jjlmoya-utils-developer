import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssBoxShadowGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'css-boxschatten-generator';
const title = 'CSS Box Shadow Generator';
const description = 'Gestalte geschichtete CSS-Schatten visuell mit Live-Vorschau, Schiebereglern, Farbwählern und Presets. Kopiere sauberes natives CSS sofort.';

const howTo = [
  { name: 'Preset wählen oder von Grund auf starten', text: 'Wähle aus den Presets Card, Float, Inset, Glow oder Layered, oder passe den Standardschatten mit den Reglern an.' },
  { name: 'Schattenebenen hinzufügen und stapeln', text: 'Klicke + für weitere Ebenen (bis zu 5). Wähle jede Ebene aus, um Offset, Blur, Spread, Farbe und Deckkraft zu bearbeiten.' },
  { name: 'Inset und Hintergrund umschalten', text: 'Aktiviere die Inset-Checkbox für innere Schatten. Ändere die Hintergrundfarbe der Vorschau.' },
  { name: 'CSS kopieren', text: 'Wenn die Vorschau deinem Design entspricht, kopiere das generierte CSS und füge es in dein Stylesheet ein.' },
];

const faq = [
  { question: 'Kann ich mehrere Schatten auf ein Element anwenden?', answer: 'Ja. CSS erlaubt kommagetrennte box-shadow-Werte. Dieses Tool lässt dich bis zu 5 Ebenen stapeln, jede mit unabhängigen Steuerelementen.' },
  { question: 'Was bewirkt ein negativer Spread-Wert?', answer: 'Ein negativer Spread verkleinert den Schatten nach innen vor dem Weichzeichnen. Nützlich für subtile schwebende Effekte.' },
  { question: 'Wofür ist die Inset-Option?', answer: 'Inset-Schatten werden innerhalb des Elementrands gerendert und erzeugen einen vertieften Look. Ideal für Formulareingaben und gedrückte Karten.' },
  { question: 'Hat das generierte CSS Framework-Abhängigkeiten?', answer: 'Nein. Das Ergebnis ist reines natives CSS. Verwende es in jedem Projekt mit Standard-CSS.' },
];

const ui: CssBoxShadowGeneratorUI = {
  offsetXLabel: 'Offset X',
  offsetYLabel: 'Offset Y',
  blurLabel: 'Weichzeichner',
  spreadLabel: 'Ausbreitung',
  opacityLabel: 'Deckkraft',
  insetLabel: 'Innen',
  addLayer: 'Ebene hinzu',
  removeLayer: 'Ebene entfernen',
  resetAll: 'Zurücksetzen',
  codeTitle: 'Generiertes CSS',
  copyCode: 'CSS kopieren',
  copied: 'Kopiert!',
  previewLabel: 'Vorschau',
  presetCard: 'Card',
  presetFloat: 'Float',
  presetInset: 'Inset',
  presetGlow: 'Glow',
  presetLayered: 'Ebenen',
  presetsLabel: 'Presets',
  layerPrefix: 'Ebene',
  bgColorLabel: 'Hintergrund',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<CssBoxShadowGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'CSS Box-Shadow Generator FAQ',
  faq,
  bibliographyTitle: 'CSS Box-Shadow Referenzen',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Gestalte CSS-Schatten visuell statt Werte zu raten', level: 2 },
    { type: 'paragraph', html: '<strong>box-shadow</strong> von Hand anzupassen ist mühsam. Offset X, Offset Y, Blur, Spread, Farbe, Deckkraft und Inset interagieren subtil. Dieser Generator lässt dich mehrere Schatten stapeln, live ansehen und produktionsreifes CSS kopieren.' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: 'Schattenebenen pro Element', icon: 'mdi:layers' }, { value: 'Live', label: 'Vorschau bei jeder Änderung', icon: 'mdi:eye' }, { value: '5', label: 'Schnellstart-Presets', icon: 'mdi:star' }] },
    { type: 'title', text: 'Mehrere Schatten für realistische Tiefe stapeln', level: 3 },
    { type: 'paragraph', html: 'Echte Schatten sind selten ein einheitlicher Blur. Einen engen Schatten nah am Element mit einem weicheren, breiteren zu stapeln erzeugt natürliche Tiefe. Nutze <strong>+</strong> zum Hinzufügen.' },
    { type: 'table', headers: ['Steuerung', 'CSS-Wert', 'Effekt'], rows: [['Offset X', 'Erste Länge', 'Horizontale Verschiebung.'], ['Offset Y', 'Zweite Länge', 'Vertikale Verschiebung.'], ['Weichzeichner', 'Dritte Länge', 'Blur-Radius. Größer = weicher.'], ['Ausbreitung', 'Vierte Länge', 'Vergrößert oder verkleinert den Schatten.'], ['Farbe & Deckkraft', 'rgba()', 'Schattenfarbe mit unabhängiger Deckkraft.'], ['Innen', 'inset', 'Rendert den Schatten innerhalb des Elements.']] },
    { type: 'summary', title: 'Empfohlener Workflow', items: ['Starte mit einem Preset.', 'Füge Ebenen für realistische Tiefe hinzu.', 'Nutze negativen Spread für schwebende Karten.', 'Kopiere das CSS und füge es ein.'] },
  ],
};
