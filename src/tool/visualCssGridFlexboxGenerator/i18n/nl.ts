import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VisualCssGridFlexboxGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'visuele-css-grid-flexbox-generator';
const title = 'Visuele CSS Grid & Flexbox Layout Generator';
const description = 'Ontwerp responsive layouts door visuele blokken te verplaatsen, de container te schalen, uitlijning aan te passen en presets te gebruiken  -  kopieer dan direct schone native CSS.';

const howTo = [
  { name: 'Kies een preset of Flexbox / Grid', text: 'Begin met een layout-preset (navbar, cards, hero, sidebar, gallery) of schakel handmatig tussen Flexbox en Grid.' },
  { name: 'Schaal de layout', text: 'Schaal de container via de onderste hoek om te testen hoe het ontwerp reageert op beschikbare ruimte.' },
  { name: 'Pas uitlijning aan', text: 'Gebruik schuifregelaars en dropdowns voor richting, wrap, tussenruimte, kolommen, justify-content, align-items, align-content, breedte, hoogte en itemgrootte.' },
  { name: 'Kopieer productieklaar CSS', text: 'Kopieer de gegenereerde CSS wanneer het visuele resultaat overeenkomt met de gewenste structuur. Geen framework-afhankelijkheden.' },
];

const faq = [
  { question: 'Wanneer gebruik ik Flexbox in plaats van CSS Grid?', answer: 'Gebruik Flexbox voor eendimensionale layouts  -  navigatiebalken, knoppengroepen, omslaande cards, gecentreerde inhoud. Grid wanneer rijen en kolommen samen belangrijk zijn  -  dashboards, galerijen, formulieren, gestructureerde paginagedeelten.' },
  { question: 'Kan deze generator responsive layouts maken?', answer: 'Ja. De gegenereerde CSS gebruikt native flex wrapping of grid repeat-kolommen. Schaal het visuele canvas om afstanden en uitlijning op verschillende formaten te testen.' },
  { question: 'Waarom voelen justify-content en align-items anders in grid en flex?', answer: 'Flexbox verdeelt items langs een hoofdas en dwarsas. Grid plaatst items eerst in tracks en lijnt daarna de inhoud daarbinnen uit. Schakelen tussen beide modi maakt dat verschil direct zichtbaar.' },
  { question: 'Is de gegenereerde CSS gebonden aan een framework?', answer: 'Nee. Het resultaat is pure native CSS. Gebruik het in gewone HTML, Astro, React, Vue, Svelte, Web Components of elk project dat standaard CSS accepteert.' },
  { question: 'Waar dienen de layout-presets voor?', answer: 'Presets versnellen veelvoorkomende layouts zodat je realistische configuraties ziet zonder vanaf nul te beginnen. Elke preset stelt modus, richting, wrap, uitlijning en containergrootte in voor een praktijkpatroon.' },
];

const ui: VisualCssGridFlexboxGeneratorUI = {
  modeLabel: 'Layoutmodus',
  flexMode: 'Flexbox',
  gridMode: 'Grid',
  canvasLabel: 'Interactief layoutcanvas',
  addItem: 'Item toevoegen',
  removeItem: 'Item verwijderen',
  resetLayout: 'Layout herstellen',
  gapLabel: 'Tussenruimte',
  columnsLabel: 'Grid-kolommen',
  widthLabel: 'Containerbreedte',
  heightLabel: 'Containerhoogte',
  justifyLabel: 'Uitlijnen',
  alignLabel: 'Uitlijnen',
  itemSizeLabel: 'Itemgrootte',
  codeTitle: 'Gegenereerde CSS',
  copyCode: 'CSS kopiëren',
  copied: 'Gekopieerd!',
  dragHint: 'Schaal het canvas via de hoek  -  CSS wordt live bijgewerkt!',
  outputLabel: 'Gegenereerde CSS-uitvoer',
  justifyStart: 'Start',
  justifyCenter: 'Midden',
  justifyEnd: 'Einde',
  justifyBetween: 'Space between',
  justifyAround: 'Space around',
  justifyEvenly: 'Space evenly',
  alignStart: 'Start',
  alignCenter: 'Midden',
  alignEnd: 'Einde',
  alignStretch: 'Rekken',
  alignBaseline: 'Basislijn',
  itemPrefix: 'Blok',
  directionLabel: 'Richting',
  directionRow: 'Rij →',
  directionRowReverse: '← Rij omg',
  directionColumn: 'Kolom ↓',
  directionColumnReverse: '↑ Kol omg',
  wrapLabel: 'Omslaan',
  wrapNoWrap: 'Niet omslaan',
  wrapWrap: 'Omslaan',
  wrapWrapReverse: 'Omslaan omg',
  alignContentLabel: 'Inhoud uitlijnen',
  alignContentStart: 'Start',
  alignContentCenter: 'Midden',
  alignContentEnd: 'Einde',
  alignContentBetween: 'Space between',
  alignContentAround: 'Space around',
  alignContentEvenly: 'Space evenly',
  alignContentStretch: 'Rekken',
  presetsLabel: 'Presets',
  presetNavbar: 'Navbar',
  presetCards: 'Kaarten',
  presetHero: 'Hero',
  presetSidebar: 'Zijbalk',
  presetGallery: 'Galerij',
  shakeLimit: 'Minstens 2 items nodig!',
  spanHint: 'Dubbelklik op een item om de kolomspanwijdte (1-3) te wijzigen in Grid-modus',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<VisualCssGridFlexboxGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'CSS layout generator FAQ',
  faq,
  bibliographyTitle: 'CSS Grid en Flexbox referenties',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Bouw CSS-layouts door het gedrag te zien, niet door eigenschappen te onthouden', level: 2 },
    { type: 'paragraph', html: 'CSS Grid en Flexbox zijn krachtig omdat ze layoutrelaties beschrijven in plaats van vaste coördinaten. Het moeilijke is voorspellen hoe <strong>gap</strong>, <strong>justify-content</strong>, <strong>align-items</strong>, richting, omslaan, tracks en beschikbare ruimte samenwerken. Deze generator verandert abstracte eigenschappen in een live speeltuin met presets en realtime CSS.' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: 'Snelle layout-presets', icon: 'mdi:view-grid-plus' }, { value: 'Live', label: 'CSS-update bij elke wijziging', icon: 'mdi:code-braces' }, { value: '0', label: 'Framework-afhankelijkheden in CSS', icon: 'mdi:language-css3' }] },
    { type: 'title', text: 'Flexbox vs Grid: kies het model voor je de uitlijning verfijnt', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: 'Flexbox', description: 'Beste voor eendimensionale stromen waar items in een rij of kolom uitlijnen en natuurlijk omslaan.', icon: 'mdi:format-align-justify', highlight: true, points: ['Navigatiebalken', 'Knoppengroepen', 'Omslaande cards', 'Gecentreerde inhoud'] }, { title: 'CSS Grid', description: 'Beste voor tweedimensionale structuren waar rijen en kolommen de vorm van de compositie bepalen.', icon: 'mdi:grid', points: ['Dashboards', 'Galerijen', 'Formulieren', 'Redactionele secties'] }] },
    { type: 'title', text: 'Wat elke bediening je leert', level: 3 },
    { type: 'table', headers: ['Bediening', 'CSS-eigenschap', 'Waar op te letten'], rows: [['Richting', '<code>flex-direction</code>', 'Hoe de hoofdas stroomt  -  wissel van rij naar kolom om de hele logica te veranderen.'], ['Omslaan', '<code>flex-wrap</code>', 'Of items op één regel blijven of naar nieuwe regels omslaan bij ruimtegebrek.'], ['Tussenruimte', '<code>gap</code>', 'De ruimte tussen items zonder marges die aan randen breken.'], ['Uitlijnen', '<code>justify-content</code>', 'Hoe vrije ruimte wordt verdeeld langs de hoofdas.'], ['Uitlijnen', '<code>align-items</code>', 'Hoe items op de dwarsas zitten.'], ['Inhoud uitlijnen', '<code>align-content</code>', 'Hoe omgeslagen regels of grid-rijen extra dwarsruimte verdelen.'], ['Kolommen', '<code>grid-template-columns</code>', 'Hoeveel gelijke tracks het grid maakt voordat items naar de volgende rij omslaan.'], ['Containergrootte', '<code>width</code> en <code>min-height</code>', 'Hoe dezelfde CSS reageert bij veranderende beschikbare ruimte.']] },
    { type: 'tip', title: 'Schaal eerst, optimaliseer daarna', html: 'Begin met het canvas te schalen naar een realistische grootte. Pas daarna tussenruimte en uitlijning aan. Zo werkt de gegenereerde CSS onder echte omstandigheden.' },
    { type: 'title', text: 'Schone CSS die je kunt aanpassen', level: 3 },
    { type: 'code', ariaLabel: 'Voorbeeld gegenereerde CSS', code: '.layout-playground {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 24px;\n  justify-content: center;\n  align-items: center;\n}' },
    { type: 'diagnostic', variant: 'info', title: 'Waarom visueel schalen belangrijk is', html: 'Veel layoutbugs verschijnen alleen als de container smaller, hoger of anders gevuld is. Schalen terwijl de CSS live bijwerkt helpt bij het ontdekken van onhandig omslaan en fragiele uitlijningskeuzes.' },
    { type: 'summary', title: 'Aanbevolen workflow', items: ['Kies een preset of Flexbox voor eendimensionale stromen en Grid voor tweedimensionale structuur.', 'Schaal het canvas voordat je CSS kopieert zodat de layout realistische beperkingen overleeft.', 'Gebruik gap voor tussenruimte in plaats van marges aan elk kind toe te voegen.', 'Kopieer de gegenereerde CSS als startpunt en voeg projectspecifieke selectors en media queries toe.'] },
  ],
};
