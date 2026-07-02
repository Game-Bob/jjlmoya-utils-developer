import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VisualCssGridFlexboxGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'visueller-css-grid-flexbox-generator';
const title = 'Visueller CSS Grid & Flexbox Layout Generator';
const description = 'Gestalte responsive Layouts durch Verschieben visueller Blöcke, skalieren des Containers, anpassen der Ausrichtung und Verwenden von Presets  -  dann sauberes natives CSS sofort kopieren.';

const howTo = [
  { name: 'Preset oder Flexbox / Grid wählen', text: 'Beginne mit einem Layout-Preset (Navbar, Cards, Hero, Sidebar, Gallery) oder wechsle manuell zwischen Flexbox und Grid.' },
  { name: 'Layout skalieren', text: 'Ziehe den Container an der unteren Ecke, um zu testen, wie das Design auf verfügbaren Platz reagiert.' },
  { name: 'Ausrichtung anpassen', text: 'Nutze Schieberegler und Dropdowns für Richtung, Wrap, Abstand, Spalten, justify-content, align-items, align-content, Breite, Höhe und Item-Größe.' },
  { name: 'Produktionsreifes CSS kopieren', text: 'Kopiere das generierte CSS, wenn das visuelle Ergebnis der gewünschten Struktur entspricht. Keine Framework-Abhängigkeiten.' },
];

const faq = [
  { question: 'Wann sollte ich Flexbox statt CSS Grid verwenden?', answer: 'Nutze Flexbox bei eindimensionalen Layouts  -  Navigationsleisten, Button-Gruppen, umfließende Cards, zentrierte Inhalte. Grid eignet sich, wenn Zeilen und Spalten gemeinsam wichtig sind  -  Dashboards, Galerien, Formulare, strukturierte Seitenbereiche.' },
  { question: 'Kann dieser Generator responsive Layouts erstellen?', answer: 'Ja. Das generierte CSS verwendet natives Flex-Wrapping oder Grid-Repeat-Spalten. Skaliere die visuelle Leinwand, um Abstände und Ausrichtung bei verschiedenen Größen zu testen.' },
  { question: 'Warum fühlen sich justify-content und align-items in Grid und Flex unterschiedlich an?', answer: 'Flexbox verteilt Elemente entlang einer Haupt- und Querachse. Grid platziert Elemente zuerst in Tracks und richtet dann den Inhalt darin aus. Der Wechsel zwischen beiden Modi macht diesen Unterschied sofort sichtbar.' },
  { question: 'Ist das generierte CSS an ein Framework gebunden?', answer: 'Nein. Das Ergebnis ist reines natives CSS. Verwende es in einfachem HTML, Astro, React, Vue, Svelte, Web Components oder jedem Projekt mit Standard-CSS.' },
  { question: 'Wozu dienen die Layout-Presets?', answer: 'Presets beschleunigen gängige Layouts, damit du realistische Konfigurationen siehst, ohne bei Null anzufangen. Jedes Preset setzt Modus, Richtung, Wrap, Ausrichtung und Containergröße für ein praxisnahes Muster.' },
];

const ui: VisualCssGridFlexboxGeneratorUI = {
  modeLabel: 'Layout-Modus',
  flexMode: 'Flexbox',
  gridMode: 'Grid',
  canvasLabel: 'Interaktive Layout-Leinwand',
  addItem: 'Element hinzufügen',
  removeItem: 'Element entfernen',
  resetLayout: 'Layout zurücksetzen',
  gapLabel: 'Abstand',
  columnsLabel: 'Grid-Spalten',
  widthLabel: 'Container-Breite',
  heightLabel: 'Container-Höhe',
  justifyLabel: 'Ausrichten',
  alignLabel: 'Ausrichten',
  itemSizeLabel: 'Elementgröße',
  codeTitle: 'Generiertes CSS',
  copyCode: 'CSS kopieren',
  copied: 'Kopiert!',
  dragHint: 'Canvas an der Ecke skalieren  -  CSS aktualisiert sich live!',
  outputLabel: 'Generierte CSS-Ausgabe',
  justifyStart: 'Start',
  justifyCenter: 'Mitte',
  justifyEnd: 'Ende',
  justifyBetween: 'Space between',
  justifyAround: 'Space around',
  justifyEvenly: 'Space evenly',
  alignStart: 'Start',
  alignCenter: 'Mitte',
  alignEnd: 'Ende',
  alignStretch: 'Strecken',
  alignBaseline: 'Basislinie',
  itemPrefix: 'Block',
  directionLabel: 'Richtung',
  directionRow: 'Reihe →',
  directionRowReverse: '← Reihe rev',
  directionColumn: 'Spalte ↓',
  directionColumnReverse: '↑ Spalte rev',
  wrapLabel: 'Umbruch',
  wrapNoWrap: 'Kein Umbruch',
  wrapWrap: 'Umbruch',
  wrapWrapReverse: 'Umbruch rev',
  alignContentLabel: 'Inhalt ausr.',
  alignContentStart: 'Start',
  alignContentCenter: 'Mitte',
  alignContentEnd: 'Ende',
  alignContentBetween: 'Space between',
  alignContentAround: 'Space around',
  alignContentEvenly: 'Space evenly',
  alignContentStretch: 'Strecken',
  presetsLabel: 'Presets',
  presetNavbar: 'Navbar',
  presetCards: 'Cards',
  presetHero: 'Hero',
  presetSidebar: 'Sidebar',
  presetGallery: 'Galerie',
  shakeLimit: 'Mindestens 2 Elemente nötig!',
  spanHint: 'Doppelklick auf ein Element ändert die Spaltenspanne (1-3) im Grid-Modus',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<VisualCssGridFlexboxGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'CSS-Layout-Generator FAQ',
  faq,
  bibliographyTitle: 'CSS Grid und Flexbox Referenzen',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Erstelle CSS-Layouts durch Beobachten des Verhaltens, nicht durch Auswendiglernen', level: 2 },
    { type: 'paragraph', html: 'CSS Grid und Flexbox sind mächtig, weil sie Layout-Beziehungen statt fester Koordinaten beschreiben. Schwierig ist vorherzusagen, wie <strong>gap</strong>, <strong>justify-content</strong>, <strong>align-items</strong>, Richtung, Umbruch, Tracks und verfügbarer Platz interagieren. Dieser Generator verwandelt abstrakte Eigenschaften in einen Live-Spielplatz mit Presets und Echtzeit-CSS.' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: 'Schnellstart-Layout-Presets', icon: 'mdi:view-grid-plus' }, { value: 'Live', label: 'CSS aktualisiert bei jeder Änderung', icon: 'mdi:code-braces' }, { value: '0', label: 'Framework-Abhängigkeiten im CSS', icon: 'mdi:language-css3' }] },
    { type: 'title', text: 'Flexbox vs Grid: Modell wählen vor Ausrichtung optimieren', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: 'Flexbox', description: 'Am besten für eindimensionale Flüsse, wo Elemente in einer Reihe oder Spalte ausgerichtet sind und natürlich umbrechen.', icon: 'mdi:format-align-justify', highlight: true, points: ['Navigation', 'Button-Gruppen', 'Umfließende Cards', 'Zentrierter Inhalt'] }, { title: 'CSS Grid', description: 'Am besten für zweidimensionale Strukturen, wo Reihen und Spalten die Form der Komposition definieren.', icon: 'mdi:grid', points: ['Dashboards', 'Galerien', 'Formulare', 'Redaktionelle Bereiche'] }] },
    { type: 'title', text: 'Was jede Steuerung lehrt', level: 3 },
    { type: 'table', headers: ['Steuerung', 'CSS-Eigenschaft', 'Worauf achten'], rows: [['Richtung', '<code>flex-direction</code>', 'Wie die Hauptachse fließt  -  von Reihe zu Spalte wechseln ändert die gesamte Layout-Logik.'], ['Umbruch', '<code>flex-wrap</code>', 'Ob Elemente in einer Zeile bleiben oder bei Platzmangel umbrechen.'], ['Abstand', '<code>gap</code>', 'Der Raum zwischen Elementen ohne Ränder, die an Kanten brechen.'], ['Ausrichten', '<code>justify-content</code>', 'Wie freier Raum entlang der Hauptachse verteilt wird.'], ['Ausrichten', '<code>align-items</code>', 'Wie Elemente auf der Querachse sitzen.'], ['Inhalt ausr.', '<code>align-content</code>', 'Wie umgebrochene Flex-Zeilen oder Grid-Zeilen zusätzlichen Querachsen-Raum verteilen.'], ['Spalten', '<code>grid-template-columns</code>', 'Wie viele gleiche Tracks das Grid erstellt, bevor Elemente in die nächste Zeile umbrechen.'], ['Container-Größe', '<code>width</code> und <code>min-height</code>', 'Wie dasselbe CSS bei verändertem Platz reagiert.']] },
    { type: 'tip', title: 'Zuerst skalieren, dann optimieren', html: 'Skaliere die Leinwand zuerst auf eine realistische Größe. Dann Abstand und Ausrichtung anpassen. So funktioniert das generierte CSS unter echten Bedingungen.' },
    { type: 'title', text: 'Sauberes CSS zum Anpassen', level: 3 },
    { type: 'code', ariaLabel: 'Beispiel generiertes CSS', code: '.layout-playground {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 24px;\n  justify-content: center;\n  align-items: center;\n}' },
    { type: 'diagnostic', variant: 'info', title: 'Warum visuelles Skalieren wichtig ist', html: 'Viele Layout-Bugs erscheinen nur, wenn der Container schmaler, höher oder mit anderer Elementanzahl gefüllt ist. Das Skalieren während der Live-CSS-Aktualisierung hilft, ungünstige Umbrüche und ausrichtungsbedingte Probleme zu erkennen.' },
    { type: 'summary', title: 'Empfohlener Workflow', items: ['Preset wählen oder Flexbox für eindimensionale und Grid für zweidimensionale Strukturen.', 'Leinwand vor dem Kopieren skalieren, damit das Layout realistischen Einschränkungen standhält.', 'Abstand für Zwischenräume nutzen statt Ränder an jedem Kind.' , 'Generiertes CSS als Ausgangspunkt kopieren, dann projektspezifische Selektoren und Media Queries hinzufügen.'] },
  ],
};
