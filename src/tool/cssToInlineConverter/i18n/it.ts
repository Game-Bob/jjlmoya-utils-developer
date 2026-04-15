import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssToInlineConverterUI } from '../ui';

const slug = 'convertitore-css-inline-html';
const title = 'Convertitore CSS in Stili Inline per Email';
const description =
  'Trasforma i tuoi fogli di stile e le classi CSS in stili incorporati direttamente nel codice HTML. Ideale per newsletter, email transazionali e layout web affidabili su ogni client.';

const faqData = [
  {
    question: 'Perché le email richiedono CSS inline invece di fogli di stile esterni?',
    answer:
      'Client di posta come Outlook, Gmail o Apple Mail filtrano o ignorano i tag <link> e <style> per motivi di sicurezza. L\'unico modo garantito perché uno stile venga applicato correttamente in una email è incorporarlo direttamente nell\'attributo style di ciascun elemento HTML.',
  },
  {
    question: 'Cosa succede se un elemento ha già un attributo style proprio?',
    answer:
      'Lo strumento rispetta gli stili inline esistenti e aggiunge le nuove proprietà in coda, simulando il comportamento della cascata CSS: le proprietà dichiarate dopo sovrascrivono quelle precedenti in caso di conflitto.',
  },
  {
    question: 'Funziona con selettori complessi come :hover o media query?',
    answer:
      'Lo strumento elabora selettori di classe, id, attributo e pseudo-classi strutturali che DOMParser è in grado di risolvere. I selettori dipendenti dallo stato come :hover e le media query non possono essere incorporati inline (dipendono dall\'ambiente di esecuzione) e vengono ignorati.',
  },
  {
    question: 'Il mio codice HTML e CSS viene inviato a qualche server?',
    answer:
      'No. Tutta l\'elaborazione avviene al 100% nel tuo browser tramite la DOMParser API nativa. Nessun byte del tuo codice lascia il tuo dispositivo, garantendo la massima privacy anche per template con contenuti sensibili.',
  },
];

const howToData = [
  {
    name: 'Incolla il tuo HTML originale',
    text: 'Scrivi o incolla l\'HTML che vuoi elaborare nel campo "HTML Originale". Può essere un frammento o un documento completo.',
  },
  {
    name: 'Aggiungi le tue regole CSS',
    text: 'Incolla le classi e gli id che vuoi iniettare nel campo "Regole CSS". Lo strumento le applica rispettando la specificità dei selettori.',
  },
  {
    name: 'Converti e copia',
    text: 'Clicca su "Inietta CSS nell\'HTML". Il risultato con tutti gli stili inline apparirà in basso, pronto da copiare e incollare nel tuo gestore email o CMS.',
  },
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
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
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

const ui: CssToInlineConverterUI = {
  labelHtml: 'HTML Originale',
  labelCss: 'Regole CSS',
  labelOutput: 'Risultato HTML Inline',
  placeholderHtml: '<div class="mia-classe">Ciao Mondo</div>',
  placeholderCss: '.mia-classe { color: red; padding: 10px; }',
  placeholderOutput: 'Qui apparirà il tuo HTML con gli stili incorporati...',
  btnConvert: 'Inietta CSS nell\'HTML',
  btnCopy: 'Copia il codice',
  btnCopied: 'Copiato!',
  msgError: 'Errore di elaborazione. Verifica che HTML e CSS siano validi.',
};

export const content: ToolLocaleContent<CssToInlineConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti e documentazione',
  bibliography: [
    {
      name: 'Can I email: Matrice di supporto HTML e CSS per le email',
      url: 'https://www.caniemail.com/',
    },
    {
      name: 'MDN Web Docs: L\'attributo globale style',
      url: 'https://developer.mozilla.org/it/docs/Web/HTML/Global_attributes/style',
    },
    {
      name: 'DOMParser API: Parsing sicuro nel browser',
      url: 'https://developer.mozilla.org/it/docs/Web/API/DOMParser',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Cos\'è un CSS Inliner e perché ti serve?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nello sviluppo di applicazioni web moderne siamo abituati a separare le responsabilità: l\'HTML costruisce la struttura, un file CSS esterno fornisce tutto lo stile visivo. Tuttavia, non tutti gli ambienti si fidano dei fogli di stile esterni o dei tag <code>&lt;style&gt;</code> globali.',
    },
    {
      type: 'paragraph',
      html: 'Il caso d\'uso più diffuso e restrittivo in cui il CSS esterno non funziona è lo <strong>Sviluppo di Template Email</strong>. In questi contesti, l\'unico modo affidabile perché un font, un colore o un margine vengano visualizzati correttamente è incorporarli direttamente nel tag: <code>&lt;span style="color: red;"&gt;</code>.',
    },
    {
      type: 'title',
      text: 'Il problema del CSS nei client di posta',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Client di posta come Microsoft Outlook, Apple Mail o Gmail hanno una storia nota per i loro motori di rendering CSS restrittivi. La maggior parte filtra o scarta i tag <code>&lt;link&gt;</code> o <code>&lt;style&gt;</code> per paura di iniezioni di codice che potrebbero compromettere l\'interfaccia di lettura.',
    },
    {
      type: 'tip',
      html: 'Per newsletter o email transazionali (ricevute, conferme di account), l\'uso di tabelle e <em>CSS inline</em> è lo standard d\'oro nel settore dell\'email marketing.',
    },
    {
      type: 'title',
      text: 'Come funziona questo strumento nel tuo browser',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Parsing sicuro:</strong> Usa la <code>DOMParser API</code> per trasformare temporaneamente l\'HTML di input in un DOM virtuale sicuro all\'interno del tuo browser.',
        '<strong>Simulazione della cascata:</strong> Analizza le tue regole CSS, applica i pesi di specificità ai selettori e modifica gli attributi <code>style</code> degli elementi HTML selezionati iniettando il codice.',
        '<strong>100% offline:</strong> Nessun byte del tuo codice lascia il tuo dispositivo. Privacy totale per template con contenuti sensibili.',
      ],
    },
  ],
};
