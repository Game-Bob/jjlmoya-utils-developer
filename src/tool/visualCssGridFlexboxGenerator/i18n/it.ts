import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VisualCssGridFlexboxGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'generatore-visuale-css-grid-flexbox';
const title = 'Generatore Visivo di Layout CSS Grid & Flexbox';
const description = 'Progetta layout responsivi spostando blocchi visivi, ridimensionando il contenitore, regolando l\'allineamento e usando i preset  -  poi copia CSS nativo pulito all\'istante.';

const howTo = [
  { name: 'Scegli un preset o Flexbox / Grid', text: 'Inizia con un preset di layout (navbar, cards, hero, sidebar, gallery) o passa manualmente tra Flexbox e Grid.' },
  { name: 'Ridimensiona il layout', text: 'Ridimensiona il contenitore dall\'angolo inferiore per testare come il design reagisce allo spazio disponibile.' },
  { name: 'Regola i controlli di allineamento', text: 'Usa slider e select per direzione, wrap, gap, colonne, justify-content, align-items, align-content, larghezza, altezza e dimensione elementi.' },
  { name: 'Copia CSS pronto per la produzione', text: 'Copia il CSS generato quando il risultato visivo corrisponde alla struttura desiderata. Nessuna dipendenza da framework.' },
];

const faq = [
  { question: 'Quando usare Flexbox invece di CSS Grid?', answer: 'Usa Flexbox per layout unidimensionali  -  barre di navigazione, gruppi di pulsanti, card a capo, contenuto centrato. Grid quando righe e colonne contano insieme  -  dashboard, gallerie, form, sezioni strutturate.' },
  { question: 'Questo generatore può creare layout responsivi?', answer: 'Sì. Il CSS generato usa flex wrapping nativo o colonne ripetute grid. Ridimensiona il canvas visivo per testare spaziatura e allineamento a diverse dimensioni.' },
  { question: 'Perché justify-content e align-items sembrano diversi in grid e flex?', answer: 'Flexbox distribuisce gli elementi lungo un asse principale e uno trasversale. Grid posiziona prima gli elementi nei track, poi allinea il contenuto al loro interno. Passare da un modo all\'altro rende questa differenza immediatamente visibile.' },
  { question: 'Il CSS generato è legato a un framework?', answer: 'No. Il risultato è CSS nativo puro. Usalo in HTML semplice, Astro, React, Vue, Svelte, Web Components o qualsiasi progetto che accetti CSS standard.' },
  { question: 'A cosa servono i preset di layout?', answer: 'I preset accelerano i layout comuni per vedere configurazioni realistiche senza partire da zero. Ogni preset imposta modalità, direzione, wrap, allineamento e dimensione del contenitore per un pattern reale.' },
];

const ui: VisualCssGridFlexboxGeneratorUI = {
  modeLabel: 'Modalità layout',
  flexMode: 'Flexbox',
  gridMode: 'Grid',
  canvasLabel: 'Canvas layout interattivo',
  addItem: 'Aggiungi elemento',
  removeItem: 'Rimuovi elemento',
  resetLayout: 'Ripristina layout',
  gapLabel: 'Spaziatura',
  columnsLabel: 'Colonne grid',
  widthLabel: 'Larghezza contenitore',
  heightLabel: 'Altezza contenitore',
  justifyLabel: 'Giustifica',
  alignLabel: 'Allinea',
  itemSizeLabel: 'Dimensione elemento',
  codeTitle: 'CSS Generato',
  copyCode: 'Copia CSS',
  copied: 'Copiato!',
  dragHint: 'Ridimensiona il canvas dall\'angolo  -  il CSS si aggiorna in tempo reale!',
  outputLabel: 'Output CSS generato',
  justifyStart: 'Inizio',
  justifyCenter: 'Centro',
  justifyEnd: 'Fine',
  justifyBetween: 'Space between',
  justifyAround: 'Space around',
  justifyEvenly: 'Space evenly',
  alignStart: 'Inizio',
  alignCenter: 'Centro',
  alignEnd: 'Fine',
  alignStretch: 'Estendi',
  alignBaseline: 'Linea base',
  itemPrefix: 'Blocco',
  directionLabel: 'Direzione',
  directionRow: 'Riga →',
  directionRowReverse: '← Riga inv',
  directionColumn: 'Colonna ↓',
  directionColumnReverse: '↑ Col inv',
  wrapLabel: 'A capo',
  wrapNoWrap: 'No a capo',
  wrapWrap: 'A capo',
  wrapWrapReverse: 'A capo inv',
  alignContentLabel: 'Allinea contenuto',
  alignContentStart: 'Inizio',
  alignContentCenter: 'Centro',
  alignContentEnd: 'Fine',
  alignContentBetween: 'Space between',
  alignContentAround: 'Space around',
  alignContentEvenly: 'Space evenly',
  alignContentStretch: 'Estendi',
  presetsLabel: 'Preset',
  presetNavbar: 'Navbar',
  presetCards: 'Cards',
  presetHero: 'Hero',
  presetSidebar: 'Sidebar',
  presetGallery: 'Galleria',
  shakeLimit: 'Servono almeno 2 elementi!',
  spanHint: 'Doppio clic su un elemento per cambiare l\'estensione di colonna (1-3) in modalità Grid',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<VisualCssGridFlexboxGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'FAQ generatore layout CSS',
  faq,
  bibliographyTitle: 'Riferimenti CSS Grid e Flexbox',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Costruisci layout CSS osservando il comportamento, non memorizzando proprietà', level: 2 },
    { type: 'paragraph', html: 'CSS Grid e Flexbox sono potenti perché descrivono relazioni di layout invece di coordinate fisse. La difficoltà è prevedere come interagiscono <strong>gap</strong>, <strong>justify-content</strong>, <strong>align-items</strong>, direzione, a capo, track e spazio disponibile. Questo generatore trasforma proprietà astratte in un playground vivo con preset e CSS in tempo reale.' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: 'Preset layout rapidi', icon: 'mdi:view-grid-plus' }, { value: 'Live', label: 'CSS aggiornato a ogni modifica', icon: 'mdi:code-braces' }, { value: '0', label: 'Dipendenze framework nel CSS', icon: 'mdi:language-css3' }] },
    { type: 'title', text: 'Flexbox vs Grid: scegli il modello prima di rifinire l\'allineamento', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: 'Flexbox', description: 'Ideale per flussi unidimensionali dove gli elementi si allineano in riga o colonna e vanno a capo naturalmente.', icon: 'mdi:format-align-justify', highlight: true, points: ['Navigazione', 'Gruppi di pulsanti', 'Card a capo', 'Contenuto centrato'] }, { title: 'CSS Grid', description: 'Ideale per strutture bidimensionali dove righe e colonne definiscono la forma della composizione.', icon: 'mdi:grid', points: ['Dashboard', 'Gallerie', 'Form', 'Sezioni editoriali'] }] },
    { type: 'title', text: 'Cosa insegna ogni controllo', level: 3 },
    { type: 'table', headers: ['Controllo', 'Proprietà CSS', 'Cosa osservare'], rows: [['Direzione', '<code>flex-direction</code>', 'Come scorre l\'asse principale  -  passare da riga a colonna cambia tutta la logica.'], ['A capo', '<code>flex-wrap</code>', 'Se gli elementi restano su una riga o vanno a capo quando lo spazio finisce.'], ['Spaziatura', '<code>gap</code>', 'Lo spazio tra elementi senza margini che si rompono ai bordi.'], ['Giustifica', '<code>justify-content</code>', 'Come lo spazio libero è distribuito lungo l\'asse principale.'], ['Allinea', '<code>align-items</code>', 'Come gli elementi si posizionano sull\'asse trasversale.'], ['Allinea contenuto', '<code>align-content</code>', 'Come le righe a capo o le righe grid distribuiscono lo spazio extra.'], ['Colonne', '<code>grid-template-columns</code>', 'Quanti track uguali crea il grid prima che gli elementi vadano a capo.'], ['Dim. contenitore', '<code>width</code> e <code>min-height</code>', 'Come lo stesso CSS reagisce quando lo spazio disponibile cambia.']] },
    { type: 'tip', title: 'Prima ridimensiona, poi ottimizza', html: 'Inizia ridimensionando il canvas a una dimensione realistica. Poi regola spaziatura e allineamento. Così il CSS generato funziona in condizioni reali.' },
    { type: 'title', text: 'CSS pulito che puoi adattare', level: 3 },
    { type: 'code', ariaLabel: 'Esempio CSS generato', code: '.layout-playground {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 24px;\n  justify-content: center;\n  align-items: center;\n}' },
    { type: 'diagnostic', variant: 'info', title: 'Perché il ridimensionamento visivo è importante', html: 'Molti bug di layout compaiono solo quando il contenitore è più stretto, più alto o con un numero diverso di elementi. Ridimensionare mentre il CSS si aggiorna in diretta aiuta a individuare ritorni a capo scomodi e scelte di allineamento fragili.' },
    { type: 'summary', title: 'Workflow consigliato', items: ['Scegli un preset o Flexbox per flussi unidimensionali e Grid per struttura bidimensionale.', 'Ridimensiona il canvas prima di copiare il CSS affinché il layout sopravviva a vincoli realistici.', 'Usa gap per la spaziatura tra elementi invece di aggiungere margini a ogni figlio.', 'Copia il CSS generato come punto di partenza, poi aggiungi selettori specifici e media queries.'] },
  ],
};
