import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgSanitizerUI } from '../ui';

const slug = 'pulizia-svg';
const title = 'Pulizia SVG Online';
const description = 'Ottimizza e pulisci gli SVG esportati da Figma, Adobe Illustrator o Inkscape. Rimuovi metadati, attributi inutili e gruppi vuoti per ottenere un SVG pronto per la produzione.';

const faqData = [
  {
    question: 'Posso incollare l\'HTML completo di una pagina con SVG incorporato?',
    answer: 'Sì. Lo strumento rileva l\'elemento SVG all\'interno dell\'HTML ed estrae solo quel blocco per elaborarlo. Funziona anche se incolli direttamente il frammento SVG.',
  },
  {
    question: 'Funziona con gli SVG di Illustrator?',
    answer: 'Sì. Illustrator esporta SVG con dichiarazioni XML, metadati e namespace proprietari che lo strumento rimuove. Il risultato è un SVG compatibile con tutti i browser moderni.',
  },
  {
    question: 'Qual è la differenza tra pulire e minificare?',
    answer: 'Pulire rimuove attributi e tag inutili, ma mantiene il formato con indentazione in modo che tu possa leggere e modificare il codice. Minificare comprime anche tutto in una singola riga per ridurre al massimo il peso del file.',
  },
  {
    question: 'Rimuovere gli ID può rompere l\'SVG?',
    answer: 'Solo se un elemento dell\'SVG fa riferimento a un altro tramite ID, ad esempio con fill="url(#gradient)". In quel caso, disattiva l\'opzione Rimuovi ID. È disattivata per impostazione predefinita proprio per evitare questo problema.',
  },
  {
    question: 'Il mio codice SVG viene inviato a qualche server?',
    answer: 'No. Tutta l\'elaborazione avviene nel tuo browser utilizzando le API native DOMParser e XMLSerializer. Il codice non lascia mai il tuo dispositivo.',
  },
];

const howToData = [
  { name: 'Incolla l\'SVG', text: 'Incolla il codice SVG esportato da Figma, Illustrator o Inkscape nell\'area di testo.' },
  { name: 'Configura le opzioni', text: 'Attiva o disattiva le opzioni: rimuovi ID, elimina width/height e minifica in base alle tue esigenze.' },
  { name: 'Pulisci', text: 'Clicca su Pulisci SVG per elaborare il codice e ottenere il risultato ottimizzato.' },
  { name: 'Copia o scarica', text: 'Usa i pulsanti Copia o Scarica per ottenere l\'SVG pulito pronto per la produzione.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'it',
};

const ui: SvgSanitizerUI = {
  labelInput: 'Incolla qui il tuo SVG sporco',
  labelOutput: 'SVG pulito',
  optRemoveIds: 'Rimuovi ID',
  optRemoveWH: 'Elimina width/height',
  optMinify: 'Minifica',
  btnSanitize: 'Pulisci SVG',
  btnCopy: 'Copia',
  btnCopied: 'Copiato',
  btnDownload: 'Scarica',
  statOriginal: 'Originale',
  statCleaned: 'Pulito',
  statReduction: 'Riduzione',
  statElems: 'Elem. rimossi',
  statAttrs: 'Attrs. rimossi',
  errorPaste: 'Incolla un SVG prima di pulire.',
  errorProcess: 'Errore durante l\'elaborazione dell\'SVG.',
};

export const content: ToolLocaleContent<SvgSanitizerUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti',
  bibliography: [
    { name: 'SVG Specification - W3C', url: 'https://www.w3.org/TR/SVG2/' },
    { name: 'Figma SVG Export - Documentazione ufficiale', url: 'https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma' },
    { name: 'SVGO - SVG Optimizer (riferimento open source)', url: 'https://github.com/svg/svgo' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Pulizia SVG: Codice Pulito da Figma e Illustrator', level: 2 },
    {
      type: 'paragraph',
      html: 'Incolla qualsiasi SVG esportato da <strong>Figma</strong>, Adobe Illustrator o dall\'inspector del browser e ottieni un file vettoriale pulito, ottimizzato e pronto per la produzione.',
    },
    { type: 'title', text: 'Perché gli SVG esportati sono così sporchi?', level: 3 },
    {
      type: 'paragraph',
      html: 'Quando esporti un SVG da Figma, ottieni un file carico di attributi che hanno senso solo all\'interno dell\'applicazione: <code>data-name</code>, <code>xml:space</code>, riferimenti a layer interni e metadati di design. Il risultato è un SVG che può pesare dal 40 al 70% in più del necessario.',
    },
    { type: 'title', text: 'Cosa rimuove lo strumento di pulizia', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Metadati dell\'editor:</strong> tag <code>metadata</code>, <code>title</code> e <code>desc</code> aggiunti automaticamente da Figma e Illustrator.',
        '<strong>Namespace di Inkscape:</strong> tutti gli elementi con prefisso <code>inkscape:</code> e <code>sodipodi:</code>.',
        '<strong>Attributi inutili:</strong> <code>xml:space</code>, <code>version</code>, <code>xmlns:*</code> superflui e attributi <code>data-*</code> di Figma.',
        '<strong>Gruppi vuoti:</strong> elementi <code>&lt;g&gt;</code> senza contenuto rimasti come artefatti di layer eliminati.',
        '<strong>Dichiarazioni XML:</strong> la dichiarazione <code>&lt;?xml version="1.0"?&gt;</code> e il DOCTYPE inutili quando si incorpora un SVG in HTML.',
      ],
    },
  ],
};
