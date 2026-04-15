import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GeneradorSecurityTxtUI } from '../ui';

const slug = 'security-txt-generator-rfc-9116-it';
const title = 'Generatore Security.txt RFC 9116';
const description = 'Crea il tuo file security.txt professionale per agevolare la segnalazione delle vulnerabilità e rispettare gli standard internazionali di sicurezza web.';

const faqData = [
  {
    question: "Cos'è il file security.txt?",
    answer: 'È uno standard (RFC 9116) che consente ai siti web di definire come i ricercatori di sicurezza debbano contattarli per segnalare le vulnerabilità in modo responsabile.',
  },
  {
    question: 'Dove va posizionato il file security.txt?',
    answer: 'La posizione standard consigliata è la cartella /.well-known/ del proprio dominio, con URL risultante https://example.com/.well-known/security.txt.',
  },
  {
    question: "Perché la data di scadenza è obbligatoria?",
    answer: "Per garantire che le informazioni di contatto non diventino obsolete. In assenza di una data di scadenza valida, i ricercatori potrebbero non fidarsi dell'attività dei canali di comunicazione.",
  },
  {
    question: 'Quali campi sono obbligatori in un security.txt?',
    answer: 'Secondo RFC 9116, i campi obbligatori sono "Contact" (con un indirizzo email o URL) e "Expires" (con una data futura in formato ISO 8601).',
  },
];

const howToData = [
  { name: 'Compila i campi', text: 'Inserisci il tuo indirizzo email o URL di contatto e scegli una data di scadenza.' },
  { name: 'Aggiungi i campi facoltativi', text: 'Includi informazioni aggiuntive come la tua chiave PGP, la policy di sicurezza o le offerte di lavoro.' },
  { name: 'Scarica o copia il file', text: 'Clicca su "Scarica .txt" oppure copia il contenuto e salvalo come security.txt.' },
  { name: 'Carica sul server', text: 'Inserisci il file nella cartella /.well-known/ del tuo dominio.' },
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

const ui: GeneradorSecurityTxtUI = {
  titleBasicFields: 'Campi Obbligatori',
  labelContact: 'Contatto (Email o URL)',
  placeholderContact: 'mailto:security@example.com o https://example.com/contatto',
  contactTip: 'Indirizzo a cui inviare le segnalazioni di vulnerabilità.',
  labelExpires: 'Data di Scadenza',
  expiresTip: 'Non deve superare un anno nel futuro.',
  titleOptionalFields: 'Campi Facoltativi',
  labelEncryption: 'Chiave Pubblica',
  placeholderEncryption: 'https://example.com/pgp-key.txt',
  encryptionTip: 'Link alla tua chiave PGP per segnalazioni cifrate.',
  labelPolicy: 'Policy di Sicurezza',
  placeholderPolicy: 'https://example.com/sicurezza/policy/',
  policyTip: 'Pagina che descrive come gestire le vulnerabilità.',
  labelAcknowledgments: 'Ringraziamenti',
  placeholderAcknowledgments: 'https://example.com/sicurezza/hall-of-fame/',
  acknowledgmentsTip: 'Pagina di ringraziamento ai ricercatori di sicurezza.',
  labelHiring: 'Offerte di Lavoro',
  placeholderHiring: 'https://example.com/lavora-con-noi',
  hiringTip: 'Link alle posizioni aperte nel campo della sicurezza.',
  resultTitle: 'Anteprima (security.txt)',
  btnCopy: 'Copia Codice',
  btnDownload: 'Scarica .txt',
  copiedMessage: 'Copiato',
  generatingMessage: 'Generazione del file security.txt in corso...',
  comment: 'Generato',
};

export const content: ToolLocaleContent<GeneradorSecurityTxtUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Risorse Tecniche su Security.txt',
  bibliography: [
    { name: 'RFC 9116: A File Format to Aid in Security Vulnerability Disclosure', url: 'https://datatracker.ietf.org/doc/html/rfc9116' },
    { name: 'Security.txt Official Website', url: 'https://securitytxt.org/' },
    { name: 'OWASP: Vulnerability Disclosure Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Cos\'è un file Security.txt e perché dovresti crearne uno?', level: 2 },
    {
      type: 'paragraph',
      html: 'Nel panorama attuale della sicurezza informatica, trasparenza e comunicazione sono fondamentali. Se sei un amministratore di sistema, uno sviluppatore web o il titolare di un\'attività digitale, probabilmente conosci già i file di testo che aiutano le macchine a comprendere il tuo sito, come <code>robots.txt</code> o <code>ads.txt</code>. Esiste però uno standard meno noto ma essenziale per l\'integrità della tua piattaforma: <strong>Security.txt</strong>, definito da <strong>RFC 9116</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Lo scopo di <strong>generare un file security.txt</strong> è fornire ai ricercatori di sicurezza un metodo standardizzato per contattare i responsabili di un sito web quando scoprono una vulnerabilità. Senza questo file, un hacker etico che trova una falla nel tuo sistema potrebbe non sapere a chi segnalarla, con il rischio che l\'informazione vada persa, venga pubblicata senza preavviso o, nel peggiore dei casi, sfruttata da malintenzionati.',
    },
    { type: 'title', text: 'Come creare e installare il file Security.txt seguendo RFC 9116', level: 2 },
    {
      type: 'paragraph',
      html: 'Lo <strong>standard per il contatto con i ricercatori di sicurezza</strong> prevede che questo file risieda in una posizione specifica del tuo server: la cartella <code>/.well-known/</code>. Il percorso finale è quindi solitamente <code>https://tuodominio.it/.well-known/security.txt</code>. È consentito anche inserirlo nella root (<code>/security.txt</code>), ma la prima opzione è preferita dagli strumenti di scansione automatica.',
    },
    { type: 'title', text: 'I campi obbligatori che non possono mancare', level: 3 },
    {
      type: 'paragraph',
      html: 'Quando <strong>generi il tuo codice security.txt</strong>, devi assicurarti che includa almeno due elementi critici:',
    },
    {
      type: 'list',
      items: [
        '<strong>Contact:</strong> L\'indirizzo email o l\'URL di un modulo per ricevere le segnalazioni. Deve iniziare con <code>mailto:</code> o <code>https://</code>.',
        '<strong>Expires:</strong> Una data in formato ISO 8601 che indica quando le informazioni del file non saranno più valide. Si raccomanda di non impostare una data superiore a un anno.',
      ],
    },
    { type: 'code', text: 'Contact: mailto:security@tuaazienda.it\nExpires: 2025-12-31T23:59:59.000Z' },
    { type: 'title', text: 'Campi facoltativi per una sicurezza avanzata', level: 3 },
    {
      type: 'paragraph',
      html: 'Per i siti che puntano a una <strong>protezione più robusta</strong>, lo standard offre campi aggiuntivi:',
    },
    {
      type: 'list',
      items: [
        '<strong>Encryption:</strong> Un link alla tua chiave pubblica PGP affinché i ricercatori possano inviarti informazioni cifrate.',
        '<strong>Policy:</strong> Un link alla tua pagina di security policy, dove spieghi il processo di divulgazione responsabile.',
        '<strong>Acknowledgments:</strong> Un link alla tua "Hall of Fame" o alla pagina dei ringraziamenti per i ricercatori.',
        '<strong>Hiring:</strong> Un link alle tue offerte di lavoro nel campo della cybersicurezza.',
      ],
    },
    { type: 'title', text: 'I vantaggi del nostro generatore di Security.txt gratuito', level: 2 },
    {
      type: 'paragraph',
      html: 'In molti si chiedono <strong>come ottenere rapidamente il contatto di sicurezza</strong> di un sito web. Con il nostro strumento ti assicuri di rispettare scrupolosamente il formato RFC 9116 senza dover leggere complessi documenti tecnici.',
    },
    {
      type: 'paragraph',
      html: 'Usare un generatore ti evita i classici errori di sintassi. Ad esempio, dimenticare il prefisso <code>mailto:</code> o formattare in modo errato il fuso orario nella data di scadenza può fare sì che gli strumenti automatizzati dei ricercatori ignorino completamente il tuo file.',
    },
    { type: 'title', text: 'Impatto su SEO e reputazione web', level: 3 },
    {
      type: 'paragraph',
      html: 'Sebbene il file <code>security.txt</code> non sia un fattore di ranking diretto su Google come la velocità di caricamento o HTTPS, ha comunque un impatto indiretto. Un sito che gestisce bene le vulnerabilità evita attacchi rumorosi (defacement, iniezioni di spam) che possono compromettere il posizionamento in poche ore. Inoltre, molte piattaforme di rating sulla sicurezza aziendale (come SecurityScorecard o BitSight) assegnano punti extra ai domini che adottano questo standard.',
    },
    { type: 'title', text: 'Conclusione: Un passo semplice per un web più sicuro', level: 2 },
    {
      type: 'paragraph',
      html: 'In sintesi, <strong>scaricare security.txt</strong> e caricarlo sul tuo server è una delle operazioni di manutenzione della sicurezza più rapide ed efficaci che puoi compiere oggi stesso. Faciliti il lavoro ai "buoni", scoraggi i curiosi e dimostri al mondo che prendi sul serio la privacy e i dati dei tuoi utenti.',
    },
    {
      type: 'paragraph',
      html: 'Non aspettare una violazione della sicurezza per rimpiangere di non aver predisposto un canale di comunicazione. Usa subito il nostro <strong>generatore di security.txt online</strong> e tieni il tuo ecosistema digitale sotto controllo.',
    },
  ],
};

