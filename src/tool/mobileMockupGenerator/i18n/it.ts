import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileMockupGeneratorUI } from '../ui';

const slug = 'generatore-mockup-mobile';
const title = 'Generatore di Mockup Mobile per App Store. iPhone e Google Pixel';
const description = 'Crea presentazioni professionali per App Store e Google Play. Mockup di iPhone e Pixel con sfondi personalizzati, layout panoramici ed esportazione massiva in alta risoluzione.';

const faqData = [
  { question: 'Questi screenshot sono validi per App Store e Google Play?', answer: 'Sì, le immagini generate rispettano le proporzioni e i requisiti di qualità degli store. Basta scegliere il dispositivo giusto (iPhone per iOS, Pixel per Android) prima di esportare.' },
  { question: 'Posso usare sfondi personalizzati?', answer: 'Certo. Oltre alla nostra libreria di gradienti premium, puoi caricare qualsiasi immagine dal tuo computer come sfondo per i tuoi mockup.' },
  { question: 'È gratuito per uso commerciale?', answer: 'Sì, puoi usare i mockup generati per progetti commerciali, portfolio o presentazioni senza alcun costo e senza filigrane.' },
  { question: 'I miei screenshot vengono salvati su un server?', answer: 'No. Il generatore funziona al 100% in locale nel tuo browser. Le tue immagini private non lasciano mai il tuo computer.' },
];

const howToData = [
  { name: 'Carica gli screenshot', text: 'Trascina o seleziona gli screenshot della tua app mobile che vuoi presentare.' },
  { name: 'Scegli il dispositivo', text: 'Seleziona il modello di smartphone (iPhone 15 Pro Max o Google Pixel 8) in base allo store di destinazione.' },
  { name: 'Personalizza l\'ambiente', text: 'Regola lo sfondo, l\'angolazione del dispositivo, aggiungi testi marketing e scegli il layout della composizione.' },
  { name: 'Scarica in HD', text: 'Esporta tutti i risultati in formato WebP ad alta risoluzione pronti per il caricamento sullo store.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'DesignApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'it',
};

const ui: MobileMockupGeneratorUI = {
  labelUpload: 'Carica Screenshot',
  dropHint: 'Trascina le immagini qui',
  dropFormats: 'PNG, JPG o WEBP',
  btnMassReplace: 'Sostituzione Massiva (Batch)',
  massReplaceHint: 'Sostituisce le immagini attuali mantenendo i tuoi preset e testi. Ideale per iterazioni rapide.',
  labelSettings: 'Impostazioni Globali',
  labelDevice: 'Dispositivo',
  labelFont: 'Tipografia',
  labelBackground: 'Sfondo',
  titleSwapColors: 'Inverti colori',
  labelAngle: 'Angolo',
  labelSafeArea: 'Safe Area (Alto/Basso)',
  labelSafeAreaColor: 'Colore area',
  emptyTitle: 'Nessuna immagine',
  emptySubtitle: 'Carica i tuoi screenshot per iniziare a progettare',
  btnClearAll: 'Pulisci Canvas',
  btnExport: 'Esporta Tutto (.zip)',
  cardTitleDuplicate: 'Duplica Scena',
  cardTitleReplace: 'Sostituisci Screenshot Attuale',
  cardSectionLayouts: 'Layout Master',
  cardSectionBranding: 'Branding & Copy',
  cardTitleResetText: 'Reimposta Testo',
  cardLabelColor: 'Colore',
  cardTextPlaceholder: 'Scrivi il tuo testo qui...',
  cardSectionDevice: 'Layout Dispositivo',
  cardTitleResetDevice: 'Reimposta Posizione',
  cardSectionScene: 'Oggetti di Scena & Sfondo',
  cardBtnSpecialBg: 'Sfondo Speciale',
  cardBtnDeleteScene: 'Elimina Scena',
  cardRangeLabelSize: 'Dimensione',
  cardRangeLabelX: 'Asse X',
  cardRangeLabelY: 'Asse Y',
  cardRangeLabelRotation: 'Rotazione',
  cardRangeLabelScale: 'Scala',
  presetClassic: 'Classico',
  presetMobileBottom: 'Mobile in basso',
  presetMobileTop: 'Mobile in alto',
  presetFocus: 'Messa a fuoco',
  presetDynamic: 'Dinamico',
  presetSplitLeft: 'Diviso sinistra',
  presetSplitRight: 'Diviso destra',
  presetImageLeft: 'Immagine sinistra',
  presetImageRight: 'Immagine destra',
  confirmClear: 'Sei sicuro di voler eliminare tutti i mockup?',
  processingExport: 'Elaborazione...',
  exportDone: 'Fatto!',
};

export const content: ToolLocaleContent<MobileMockupGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti',
  bibliography: [
    { name: 'Apple App Store Screenshot Requirements', url: 'https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications' },
    { name: 'Google Play Screenshot Requirements', url: 'https://support.google.com/googleplay/android-developer/answer/9866151' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Porta i tuoi screenshot al livello successivo', level: 2 },
    { type: 'paragraph', html: 'Non limitarti a caricare screenshot piatti. Il nostro strumento di mockup permette a sviluppatori e designer di creare asset visivi ad alto impatto senza bisogno di Photoshop o Figma.' },
    { type: 'title', text: 'Potenza con i Layout Master', level: 3 },
    { type: 'grid', columns: 2 },
    { type: 'card', title: 'App Store & Google Play', html: '<p>Ottimizza il tuo tasso di conversione. I mockup di iPhone 15 Pro Max e Pixel 8 sono lo standard mondiale per le schede degli store.</p>' },
    { type: 'card', title: 'Pitch Deck & Marketing', html: '<p>Presenta le tue idee con autorevolezza. Perfetto per presentazioni agli investitori, campagne sui social e portfolio professionali di design UI/UX.</p>' },
    { type: 'title', text: 'Flusso di lavoro professionale', level: 3 },
    { type: 'tip', html: 'Usa i preset "Diviso sinistra" e "Diviso destra" per creare mockup continui che scorrono da un\'immagine all\'altra nei caroselli di Instagram o negli screenshot dell\'App Store.' },
  ],
};
