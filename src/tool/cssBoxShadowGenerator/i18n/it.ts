import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssBoxShadowGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'generatore-ombre-css';
const title = 'CSS Box Shadow Generator';
const description = 'Progetta ombre CSS a strati visivamente con anteprima in tempo reale, slider, selettori di colore e preset. Copia CSS nativo pulito all\'istante.';

const howTo = [
  { name: 'Scegli un preset o parti da zero', text: 'Seleziona tra i preset Card, Float, Inset, Glow o Layered, o regola l\'ombra predefinita con gli slider.' },
  { name: 'Aggiungi e sovrapponi strati', text: 'Clicca + per aggiungere strati (fino a 5). Seleziona ogni strato per modificarne offset, blur, spread, colore e opacità.' },
  { name: 'Attiva inset e cambia lo sfondo', text: 'Spunta inset per ombre interne. Cambia il colore di sfondo dell\'anteprima.' },
  { name: 'Copia il CSS', text: 'Quando l\'anteprima corrisponde al tuo design, copia il CSS generato e incollalo nel tuo foglio di stile.' },
];

const faq = [
  { question: 'Posso usare più ombre su un elemento?', answer: 'Sì. CSS permette valori box-shadow separati da virgole. Questo strumento ti permette di impilare fino a 5 strati con controlli indipendenti.' },
  { question: 'Cosa fa un valore spread negativo?', answer: 'Uno spread negativo restringe l\'ombra verso l\'interno prima della sfocatura. Utile per effetti fluttuanti sottili.' },
  { question: 'A cosa serve l\'opzione inset?', answer: 'Le ombre inset vengono renderizzate all\'interno del bordo, creando un effetto incassato. Ideale per input e card premute.' },
  { question: 'Il CSS generato ha dipendenze da framework?', answer: 'No. Il risultato è CSS nativo puro. Usalo in qualsiasi progetto con CSS standard.' },
];

const ui: CssBoxShadowGeneratorUI = {
  offsetXLabel: 'Offset X',
  offsetYLabel: 'Offset Y',
  blurLabel: 'Sfocatura',
  spreadLabel: 'Espansione',
  opacityLabel: 'Opacità',
  insetLabel: 'Interno',
  addLayer: 'Aggiungi strato',
  removeLayer: 'Rimuovi strato',
  resetAll: 'Ripristina',
  codeTitle: 'CSS Generato',
  copyCode: 'Copia CSS',
  copied: 'Copiato!',
  previewLabel: 'Anteprima',
  presetCard: 'Card',
  presetFloat: 'Float',
  presetInset: 'Inset',
  presetGlow: 'Glow',
  presetLayered: 'Strati',
  presetsLabel: 'Preset',
  layerPrefix: 'Strato',
  bgColorLabel: 'Sfondo',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<CssBoxShadowGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'FAQ Generatore di Ombre CSS',
  faq,
  bibliographyTitle: 'Riferimenti Box Shadow CSS',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Progetta ombre CSS visivamente invece di indovinare i valori', level: 2 },
    { type: 'paragraph', html: 'Regolare <strong>box-shadow</strong> a mano è noioso. Questo generatore ti permette di impilare più ombre, vederle in diretta e copiare CSS pronto per la produzione.' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: 'Strati ombra per elemento', icon: 'mdi:layers' }, { value: 'Live', label: 'Anteprima ad ogni modifica', icon: 'mdi:eye' }, { value: '5', label: 'Preset rapidi', icon: 'mdi:star' }] },
    { type: 'title', text: 'Sovrapponi più ombre per profondità realistica', level: 3 },
    { type: 'paragraph', html: 'Le ombre reali non sono mai un blur uniforme. Sovrapporre un\'ombra stretta vicino all\'elemento con una più morbida e ampia crea profondità naturale. Usa <strong>+</strong> per aggiungere strati.' },
    { type: 'table', headers: ['Controllo', 'Valore CSS', 'Effetto'], rows: [['Offset X', '1a lunghezza', 'Spostamento orizzontale.'], ['Offset Y', '2a lunghezza', 'Spostamento verticale.'], ['Sfocatura', '3a lunghezza', 'Raggio di blur.'], ['Espansione', '4a lunghezza', 'Allarga o restringe l\'ombra.'], ['Colore & Opacità', 'rgba()', 'Colore ombra con opacità indipendente.'], ['Interno', 'inset', 'Ombra dentro il bordo dell\'elemento.']] },
    { type: 'summary', title: 'Workflow consigliato', items: ['Inizia con un preset.', 'Aggiungi strati per profondità realistica.', 'Usa spread negativo per effetto card fluttuante.', 'Copia il CSS e incollalo.'] },
  ],
};
