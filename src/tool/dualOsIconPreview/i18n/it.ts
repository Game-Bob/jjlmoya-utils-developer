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

const title = 'Audit delle icone app per iOS e Android';
const description = 'Carica un logo e controlla come appare su iPhone e Pixel. Esamina modalità iOS, maschere adattive Android, margini sicuri e icone a tema direttamente nel browser.';
const ui: DualOsIconPreviewUI = {
  labelUpload: 'Carica logo', uploadAction: 'Scegli un immagine', uploadHint: 'Lo stesso marchio riempie entrambi i telefoni', dropHint: 'PNG, JPG, WEBP o SVG', labelAppName: 'Nome dell app', appNamePlaceholder: 'Mostrato sotto l icona', labelBrandColor: 'Colore di accento del sistema', labelIosAppearance: 'Aspetto iOS', iosAppearanceHint: 'Controlla il marchio in ogni modalità della schermata Home', iosDefault: 'Predefinito', iosDark: 'Scuro', iosClear: 'Chiaro', iosTinted: 'Colorato', labelAndroidShape: 'Maschera adattiva Android', androidShapeHint: 'Il launcher può cambiare la forma esterna', androidCircle: 'Cerchio', androidSquircle: 'Squircle', androidRounded: 'Arrotondato', androidTeardrop: 'Goccia', labelAndroidTheme: 'Anteprima icona a tema', androidThemeHint: 'Ricolora ogni icona con una tinta di sistema preservandone la silhouette', iosDeviceLabel: 'iPhone', androidDeviceLabel: 'Pixel', iosHomeLabel: 'Schermata Home', androidHomeLabel: 'Launcher', safeZoneLabel: 'Maschera iOS', adaptiveLayerLabel: 'Icona adattiva', monochromeLabel: 'Livello tema', nameFallback: 'La tua app', emptyLogo: 'Il tuo logo', fileError: 'Scegli un file immagine per continuare.', statusReady: 'Pronto', statusNeedsReview: 'Aggiungi un logo', stageKicker: 'Due contesti dispositivo, un audit', stageNote: 'Esamina ogni trattamento nel suo contesto', auditTitle: 'Audit del logo', auditHint: 'Misurato localmente dall immagine caricata', auditWaiting: 'Carica un logo', auditNotChecked: 'Non verificato', auditFile: 'Canvas', auditAspect: 'Rapporto d aspetto', auditResolution: 'Risoluzione', auditIosMask: 'Margine maschera iOS', auditAndroidZone: 'Zona sicura Android', auditMargin: 'Margine minimo', auditTransparency: 'Bordo alfa', auditTransparent: 'Trasparente', auditFullBleed: 'A piena copertura', statusPass: 'SUPERATO', statusReview: 'DA RIVEDERE',
};
const faq = [
  { question: 'Che cosa controlla questo audit dell icona app?', answer: 'Controlla dimensioni, rapporto d aspetto, risoluzione, margine trasparente, margine della maschera iOS e zona sicura adattiva Android. Puoi anche esaminare il nome dell app alla dimensione del launcher.' },
  { question: 'Posso vedere iPhone e Android nello stesso momento?', answer: 'Sì. Lo stesso logo e lo stesso nome vengono mostrati simultaneamente in una schermata Home iPhone e in un launcher Pixel, mantenendo visibile il contesto di entrambi.' },
  { question: 'Che cosa fa la modalità icona a tema Android?', answer: 'Applica una tinta di sistema e un trattamento monocromatico a ogni icona Android della scena, inclusi l icona caricata, le app vicine e il dock. Puoi così capire se la silhouette rimane leggibile senza i colori originali.' },
  { question: 'Il logo lascia il mio browser?', answer: 'No. L immagine viene letta e misurata localmente nel browser. Questo strumento non la carica su un server.' },
  { question: 'È pronto per inviare l app allo store?', answer: 'No. È un audit locale di design e asset. Per esportazione finale, comportamento del launcher e approvazione dello store usa gli strumenti Apple e Android, oltre a un dispositivo reale o un emulatore.' },
];
const howTo = [
  { name: 'Carica il logo', text: 'Scegli un logo PNG, JPG, WEBP o SVG. La stessa immagine locale appare nei due contesti dispositivo.' },
  { name: 'Inserisci il nome dell app', text: 'Scrivi l etichetta del launcher e controlla che rimanga leggibile accanto ai nomi reali delle app vicine.' },
  { name: 'Esamina gli aspetti iOS', text: 'Passa da Predefinito a Scuro, Chiaro e Colorato per trovare contrasto debole o dettagli che scompaiono.' },
  { name: 'Esamina le maschere Android', text: 'Prova cerchio, squircle, arrotondato e goccia. Poi attiva l icona a tema per controllare la versione monocromatica nell intero launcher.' },
  { name: 'Agisci sul risultato', text: 'Aggiungi spazio libero, semplifica i dettagli fini o migliora il contrasto prima di preparare gli asset finali.' },
];

export const content = createDualOsIconPreviewContent({ locale: 'it', slug: 'verifica-icone-app-ios-android', title, description, faqTitle: 'Domande frequenti', bibliographyTitle: 'Riferimenti', ui, faq, howTo, seo: [
  { type: 'title', text: 'Controlla l icona della tua app prima del rilascio', level: 2 },
  { type: 'paragraph', html: 'Carica un logo e controllalo simultaneamente nel contesto di una schermata Home iPhone e di un launcher Pixel. Questo audit dell icona app misura canvas, rapporto d aspetto, risoluzione, margine trasparente, margine della maschera iOS e zona sicura adattiva Android. Inserisci anche il vero nome dell app, perché un marchio può superare il controllo dell icona e fallire quando l etichetta del launcher diventa illeggibile.' },
  { type: 'title', text: 'Che cosa controlla questo audit dell icona', level: 3 },
  { type: 'list', items: ['Canvas e rapporto d aspetto: conferma che la sorgente sia quadrata prima che gli strumenti della piattaforma aggiungano il proprio trattamento.', 'Risoluzione: trova i file sorgente piccoli prima che diventino sfocati o inutilizzabili nei launcher più grandi.', 'Margine esterno: verifica se forme o lettere importanti sono troppo vicine alla maschera iOS o alla zona sicura Android.', 'Etichetta del launcher: controlla il nome dell app alla stessa scala delle icone vicine e individua ritorni a capo scomodi.', 'Trattamento Android a tema: applica una tinta di sistema monocromatica al target, alle icone vicine e al dock per rivelare una silhouette debole.'] },
  { type: 'title', text: 'Visualizza entrambi i contesti dispositivo insieme', level: 3 },
  { type: 'paragraph', html: 'Usa le due viste del telefono come un unica superficie di audit. Passa dagli aspetti iOS Predefinito, Scuro, Chiaro e Colorato, poi prova le maschere Android cerchio, squircle, arrotondato e goccia. L obiettivo è capire come si comporta lo stesso asset sulle superfici del launcher, non stabilire quale piattaforma sia migliore.' },
  { type: 'title', text: 'Che cosa non può garantire l audit', level: 3 },
  { type: 'paragraph', html: 'Questa è una revisione di design e asset nel browser, non sostituisce Xcode, Android Studio, un dispositivo reale o un emulatore. Launcher, versioni del sistema e produttori possono applicare maschere, spaziature, contrasto e regole per icone a tema diverse. Usa l audit per trovare presto i rischi, poi valida gli asset finali negli ambienti supportati.' },
  { type: 'tip', title: 'Routine pratica di audit', html: 'Controlla il logo alla sua dimensione pratica minima in ogni trattamento. Se funziona solo con uno sfondo, una maschera o i colori originali, semplifica la grafica o aggiungi margine prima della pubblicazione.' },
] });
