import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VisualCssGridFlexboxGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'visuell-css-grid-flexbox-generator';
const title = 'Visuell CSS Grid & Flexbox Layoutgenerator';
const description = 'Designa responsiva layouter genom att flytta visuella block, skala om behållaren, justera justering och använda förinställningar  -  kopiera sedan ren native CSS direkt.';

const howTo = [
  { name: 'Välj en förinställning eller Flexbox / Grid', text: 'Börja med en layoutförinställning (navbar, cards, hero, sidebar, gallery) eller växla mellan Flexbox och Grid manuellt.' },
  { name: 'Skala om layouten', text: 'Skala om behållaren från det nedre hörnet för att testa hur designen reagerar på tillgängligt utrymme.' },
  { name: 'Justera justeringskontroller', text: 'Använd reglage och rullgardiner för riktning, radbrytning, mellanrum, kolumner, justify-content, align-items, align-content, bredd, höjd och objektstorlek.' },
  { name: 'Kopiera produktionsklar CSS', text: 'Kopiera den genererade CSS:en när det visuella resultatet matchar önskad struktur. Inga ramverksberoenden.' },
];

const faq = [
  { question: 'När ska jag använda Flexbox istället för CSS Grid?', answer: 'Använd Flexbox för endimensionella layouter  -  navigeringsfält, knappgrupper, radbrytande kort, centrerat innehåll. Grid när rader och kolumner spelar roll tillsammans  -  dashboards, gallerier, formulär, strukturerade sidavsnitt.' },
  { question: 'Kan denna generator skapa responsiva layouter?', answer: 'Ja. Den genererade CSS:en använder native flex-radbrytning eller upprepade grid-kolumner. Skala om den visuella canvasen för att testa mellanrum och justering vid olika storlekar.' },
  { question: 'Varför känns justify-content och align-items annorlunda i grid och flex?', answer: 'Flexbox fördelar objekt längs en huvudaxel och tväraxel. Grid placerar först objekt i spår och justerar sedan innehållet inuti dem. Att växla mellan lägena gör skillnaden omedelbart synlig.' },
  { question: 'Är den genererade CSS:en bunden till ett ramverk?', answer: 'Nej. Resultatet är ren native CSS. Använd den i vanlig HTML, Astro, React, Vue, Svelte, Web Components eller vilket projekt som helst som accepterar standard-CSS.' },
  { question: 'Vad är layoutförinställningarna till för?', answer: 'Förinställningar snabbar upp vanliga layouter så att du ser realistiska konfigurationer utan att börja från noll. Varje förinställning ställer in läge, riktning, radbrytning, justering och behållarstorlek för ett verkligt mönster.' },
];

const ui: VisualCssGridFlexboxGeneratorUI = {
  modeLabel: 'Layoutläge',
  flexMode: 'Flexbox',
  gridMode: 'Grid',
  canvasLabel: 'Interaktiv layoutcanvas',
  addItem: 'Lägg till objekt',
  removeItem: 'Ta bort objekt',
  resetLayout: 'Återställ layout',
  gapLabel: 'Mellanrum',
  columnsLabel: 'Grid-kolumner',
  widthLabel: 'Behållarbredd',
  heightLabel: 'Behållarhöjd',
  justifyLabel: 'Justera',
  alignLabel: 'Justera',
  itemSizeLabel: 'Objektstorlek',
  codeTitle: 'Genererad CSS',
  copyCode: 'Kopiera CSS',
  copied: 'Kopierat!',
  dragHint: 'Skala om canvasen från hörnet  -  CSS uppdateras live!',
  outputLabel: 'Genererad CSS-utdata',
  justifyStart: 'Start',
  justifyCenter: 'Mitten',
  justifyEnd: 'Slut',
  justifyBetween: 'Space between',
  justifyAround: 'Space around',
  justifyEvenly: 'Space evenly',
  alignStart: 'Start',
  alignCenter: 'Mitten',
  alignEnd: 'Slut',
  alignStretch: 'Sträck',
  alignBaseline: 'Baslinje',
  itemPrefix: 'Block',
  directionLabel: 'Riktning',
  directionRow: 'Rad →',
  directionRowReverse: '← Rad omv',
  directionColumn: 'Kolumn ↓',
  directionColumnReverse: '↑ Kol omv',
  wrapLabel: 'Radbryt',
  wrapNoWrap: 'Ingen radbryt',
  wrapWrap: 'Radbryt',
  wrapWrapReverse: 'Radbryt omv',
  alignContentLabel: 'Justera innehåll',
  alignContentStart: 'Start',
  alignContentCenter: 'Mitten',
  alignContentEnd: 'Slut',
  alignContentBetween: 'Space between',
  alignContentAround: 'Space around',
  alignContentEvenly: 'Space evenly',
  alignContentStretch: 'Sträck',
  presetsLabel: 'Förval',
  presetNavbar: 'Navbar',
  presetCards: 'Kort',
  presetHero: 'Hero',
  presetSidebar: 'Sidopanel',
  presetGallery: 'Galleri',
  shakeLimit: 'Minst 2 objekt krävs!',
  spanHint: 'Dubbelklicka på ett objekt för att ändra kolumnspann (1-3) i Grid-läge',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<VisualCssGridFlexboxGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'CSS layoutgenerator FAQ',
  faq,
  bibliographyTitle: 'CSS Grid och Flexbox referenser',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Bygg CSS-layouter genom att se beteendet, inte memorera egenskaper', level: 2 },
    { type: 'paragraph', html: 'CSS Grid och Flexbox är kraftfulla eftersom de beskriver layoutrelationer istället för fasta koordinater. Det svåra är att förutsäga hur <strong>gap</strong>, <strong>justify-content</strong>, <strong>align-items</strong>, riktning, radbrytning, spår och tillgängligt utrymme samverkar. Denna generator förvandlar abstrakta egenskaper till en levande lekplats med förinställningar och realtids-CSS.' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: 'Snabba layoutförval', icon: 'mdi:view-grid-plus' }, { value: 'Live', label: 'CSS uppdateras vid varje ändring', icon: 'mdi:code-braces' }, { value: '0', label: 'Ramverksberoenden i CSS', icon: 'mdi:language-css3' }] },
    { type: 'title', text: 'Flexbox vs Grid: välj modell innan du finslipar justering', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: 'Flexbox', description: 'Bäst för endimensionella flöden där objekt radar upp sig i rad eller kolumn och bryts naturligt.', icon: 'mdi:format-align-justify', highlight: true, points: ['Navigeringsfält', 'Knappgrupper', 'Radbrytande kort', 'Centrerat innehåll'] }, { title: 'CSS Grid', description: 'Bäst för tvådimensionella strukturer där rader och kolumner definierar kompositionens form.', icon: 'mdi:grid', points: ['Dashboards', 'Gallerier', 'Formulär', 'Redaktionella sektioner'] }] },
    { type: 'title', text: 'Vad varje kontroll lär dig', level: 3 },
    { type: 'table', headers: ['Kontroll', 'CSS-egenskap', 'Vad att titta på'], rows: [['Riktning', '<code>flex-direction</code>', 'Hur huvudaxeln flyter  -  byt från rad till kolumn för att ändra hela layoutlogiken.'], ['Radbryt', '<code>flex-wrap</code>', 'Om objekt stannar på en rad eller flödar till nya rader när utrymmet tar slut.'], ['Mellanrum', '<code>gap</code>', 'Utrymmet mellan objekt utan marginaler som bryts vid kanter.'], ['Justera', '<code>justify-content</code>', 'Hur fritt utrymme fördelas längs huvudaxeln.'], ['Justera', '<code>align-items</code>', 'Hur objekt placeras på tväraxeln.'], ['Justera innehåll', '<code>align-content</code>', 'Hur radbrutna flex-rader eller grid-rader fördelar extra tväraxelutrymme.'], ['Kolumner', '<code>grid-template-columns</code>', 'Hur många lika spår grid:en skapar innan objekt bryts till nästa rad.'], ['Behållarstorlek', '<code>width</code> och <code>min-height</code>', 'Hur samma CSS reagerar när tillgängligt utrymme ändras.']] },
    { type: 'tip', title: 'Skala först, optimera sedan', html: 'Börja med att skala canvasen till en realistisk storlek. Justera sedan mellanrum och justering. På så sätt fungerar den genererade CSS:en under verkliga förhållanden.' },
    { type: 'title', text: 'Ren CSS som du kan anpassa', level: 3 },
    { type: 'code', ariaLabel: 'Exempel på genererad CSS', code: '.layout-playground {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 24px;\n  justify-content: center;\n  align-items: center;\n}' },
    { type: 'diagnostic', variant: 'info', title: 'Varför visuell skalning är viktig', html: 'Många layoutbuggar uppträder bara när behållaren är smalare, högre eller fylld med olika antal objekt. Att skala medan CSS:en uppdateras live hjälper till att upptäcka besvärlig radbrytning och ömtåliga justeringsval.' },
    { type: 'summary', title: 'Rekommenderat arbetsflöde', items: ['Välj en förinställning eller Flexbox för endimensionella flöden och Grid för tvådimensionell struktur.', 'Skala canvasen innan du kopierar CSS så att layouten överlever realistiska begränsningar.', 'Använd gap för mellanrum mellan objekt istället för att lägga till marginaler på varje barn.', 'Kopiera den genererade CSS:en som utgångspunkt och lägg sedan till projektspecifika selektorer och media queries.'] },
  ],
};
