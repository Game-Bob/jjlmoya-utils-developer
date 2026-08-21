import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromoteThisWebsiteUI } from '../ui';
import { bibliography } from '../bibliography';

const localized = {
    slug: 'promuovi-questo-sito',
    title: 'Promuovi questo sito',
    description: 'Il banco propaganda interno di jjlmoya.es in spagnolo e GameBob.dev a livello internazionale. Trasforma gli screenshot delle tue pagine in immagini social prima che Bob trovi il feed imbarazzante.',
    faqTitle: 'Promuovi questo sito senza far arrabbiare il gatto',
    bibliographyTitle: "Pagine dell'operazione",
    faq: [
      { question: 'Per chi è davvero questo strumento?', answer: 'Per promuovere le pagine di jjlmoya.es in spagnolo e GameBob.dev a livello internazionale. Gli altri possono guardare dalla finestra.' },
      { question: 'Posso incollare direttamente uno screenshot?', answer: 'Sì. Copia uno screenshot e premi Ctrl+V. Diventa il livello dello strumento: anche il consiglio felino accetta le prove nel formato giusto.' },
      { question: 'Cosa succede con un URL di produzione?', answer: "Lo strumento legge il titolo meta, sceglie il marchio corretto e carica l'immagine Open Graph. Lo slug finalmente non viene promosso." },
      { question: 'Perché ci sono due marchi?', answer: 'jjlmoya.es è la pagina spagnola e GameBob.dev quella internazionale. Ai gatti non interessa affatto.' },
      { question: 'Le mie immagini vengono caricate?', answer: 'No. Restano nel browser e la composizione viene renderizzata localmente. Esce solo il PNG che scarichi consapevolmente.' },
    ],
    howTo: [
      { name: 'Incolla uno screenshot', text: 'Incolla con Ctrl+V uno screenshot di jjlmoya.es o GameBob.dev. Il consiglio vuole prove dal proprio impero.' },
      { name: 'Scegli il marchio', text: 'Scegli jjlmoya.es per lo spagnolo o GameBob.dev per la pagina internazionale. Il gatto possiede già i locali.' },
      { name: "Componi l'immagine", text: 'Sposta screenshot, titolo, logo, sfondo e mascotte finché la composizione sembra intenzionale.' },
      { name: 'Esporta il PNG', text: 'Scarica il PNG nelle dimensioni desiderate prima che Bob si prenda il merito.' },
    ],
    seoTitle: 'Il banco propaganda ufficiale di jjlmoya e GameBob',
    seoIntro: 'Non è un compositore social generico per chi ha appena scoperto la parola branding. Serve a promuovere le nostre pagine jjlmoya.es e GameBob.dev mentre i gatti supervisionano.',
    seoBody: "Incolla uno screenshot reale o carica un URL di produzione. Lo strumento legge il titolo della pagina invece di indovinarlo dallo slug e mantiene visibile l'immagine Open Graph durante la composizione.",
    seoTip: "Inizia con un URL di jjlmoya.es o GameBob.dev. Se titolo, marchio o immagine non vengono caricati, il consiglio accuserà la rete, poi l'uomo e infine i gatti.",
};
const ui: PromoteThisWebsiteUI = {
    urlLabel: 'URL del sito', urlPlaceholder: 'https://www.example.com/strumenti/esempio/', applyUrl: 'Applica',
    formatLabel: 'Formato', panoramic: 'Panoramico · 1536 × 1024', instagram: 'Instagram · 1080 × 1350', square: 'Quadrato · 1080 × 1080', story: 'Storia · 1080 × 1920',
    titleLabel: 'Titolo', titlePlaceholder: "Un titolo breve per l'immagine", titleSizeLabel: 'Dimensione del carattere del titolo', titleBoxSizeLabel: 'Dimensione del riquadro del titolo', titleStyleLabel: 'Stile del titolo',
    brandLabel: 'Marchio', brandStyleLabel: 'Stile del marchio', advancedLabel: 'Composizione avanzata', assetsLabel: 'Risorse', backgroundLabel: 'Sfondo', toolLabel: 'Screenshot dello strumento', logoLabel: 'Logo', mascotLabel: 'Mascotte',
    layersLabel: 'Livelli', backgroundLayer: 'Sfondo', toolLayer: 'Strumento', logoLayer: 'Logo', mascotLayer: 'Mascotte', titleLayer: 'Titolo', reset: 'Ripristina', download: 'Scarica PNG', activeLayer: 'Livello attivo',
    canvasHint: 'Trascina i livelli direttamente sulla tela. Incolla uno screenshot con Ctrl+V.', pasted: 'Screenshot incollato come livello dello strumento.', urlApplied: 'URL applicato. Regola il titolo e aggiungi lo screenshot da promuovere.', urlLoading: 'Lettura del titolo della pagina e della sua immagine ufficiale...', urlFailed: "Impossibile leggere la pagina. Controlla l'URL o aggiungi le risorse manualmente.", fileLoaded: 'Risorsa caricata.',
    titlePaper: 'Carta editoriale', titleRibbon: 'Nastro piegato', titleInk: "Macchia d'inchiostro", titlePoster: 'Manifesto notturno', titleTicket: 'Biglietto strappato', titleMarker: 'Sottolineatura materica', titleSplit: 'Blocco diviso', titleCapsule: 'Capsula minima', titleCorner: 'Angolo editoriale', titleVertical: 'Accento verticale',
    brandPlain: 'Marchio semplice', brandPlaque: 'Targa in ceramica', brandTicket: "Biglietto d'ingresso", brandStamp: 'Timbro in gomma', brandNeon: 'Insegna al neon', brandRibbon: 'Nastro segnaletico', brandCorner: 'Angolo editoriale', brandPixel: 'Blocco pixel', brandHalo: 'Alone morbido', brandEditorial: 'Linea editoriale', defaultTool: 'Incolla lo screenshot del tuo strumento',
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
  inLanguage: 'it',
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
