import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CalculadoraTiempoDatosUI } from '../ui';

const slug = 'calcolatore-tempo-dati-impatto-velocita-web';
const title = 'Calcolatore Tempo Dati: Impatto della Velocità Web';
const description = 'Scopri quanto tempo di vita perdono i tuoi utenti aspettando il caricamento del tuo sito web su connessioni 3G, 4G e 5G. Calcola l\'impatto reale del peso del tuo sito.';

const faqData = [
  {
    question: 'Perché è importante conoscere il tempo di caricamento del mio sito web?',
    answer: 'Perché influisce direttamente sull\'esperienza utente, sulla SEO e sulle conversioni. Google ha documentato che ogni secondo di ritardo riduce le conversioni del 7%. Inoltre, il 53% dei visitatori da mobile abbandona una pagina che impiega più di 3 secondi per caricarsi.',
  },
  {
    question: 'Cosa rappresentano quelle piccole percentuali di perdita di tempo di vita?',
    answer: 'Rappresentano la percentuale del tempo totale della vita di una persona (circa 80 anni o 2,5 miliardi di secondi) trascorsa aspettando il caricamento della tua pagina. Anche se individualmente piccole, moltiplicate per milioni di utenti, rappresentano enormi quantità di tempo umano sprecato.',
  },
  {
    question: 'Qual è la velocità media di connessione nel mondo?',
    answer: 'Il 4G è lo standard nei paesi sviluppati. Tuttavia, milioni di utenti nei paesi in via di sviluppo si affidano ancora al 3G. Ecco perché è fondamentale ottimizzare il proprio sito per tutte le velocità di connessione.',
  },
  {
    question: 'Quanto dovrebbe pesare il mio sito web?',
    answer: 'Google raccomanda che la homepage si carichi in meno di 3 secondi su una tipica connessione 4G. Per questo, un sito dovrebbe idealmente pesare tra 1 e 2 MB. Tuttavia, la media globale è vicina ai 2-3 MB.',
  },
  {
    question: 'Come posso ridurre il peso del mio sito?',
    answer: 'Strategie principali: ottimizzare le immagini (50-80% del peso), minificare CSS e JavaScript, utilizzare il lazy loading, implementare la cache del browser e usare una CDN. L\'ottimizzazione delle immagini è solitamente il fattore di maggiore impatto.',
  },
  {
    question: 'La velocità di caricamento influisce sul posizionamento su Google?',
    answer: 'Sì, assolutamente. Google considera i Core Web Vitals come importanti fattori di ranking. Un sito più lento si posizionerà peggio di uno più veloce, anche a parità di contenuti.',
  },
];

const howToData = [
  { name: 'Inserisci il peso del tuo sito', text: 'Usa gli strumenti per sviluppatori del browser o WebPageTest per trovare il peso della tua pagina. Inserisci quel valore in MB.' },
  { name: 'Osserva i tempi di caricamento', text: 'Il calcolatore mostra quanti secondi impiega il tuo sito a caricarsi su 3G, 4G e 5G. I tempi reali sono solitamente più alti.' },
  { name: 'Comprendi l\'impatto sulla vita', text: 'La percentuale "tempo di vita" mostra quanto tempo della vita di qualcuno viene trascorso aspettando. Usalo come motivazione per ottimizzare.' },
  { name: 'Ottimizza e ricalcola', text: 'Dopo l\'ottimizzazione, misura di nuovo e ricalcola. Guarda come i piccoli miglioramenti hanno un grande impatto.' },
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

const ui: CalculadoraTiempoDatosUI = {
  headerTitle: 'Tempo perso nelle reti',
  labelWebSize: 'Peso del sito web (MB)',
  unit: 'MB',
  presetsLabel: 'ESEMPI REALISTICI',
  labelSpeed: 'Velocità di connessione',
  speedLabel3g: '3G',
  speedValue3g: '0,4 Mbps',
  speedLabel4g: '4G/LTE',
  speedValue4g: '10 Mbps',
  speedLabel5g: '5G',
  speedValue5g: '100+ Mbps',
  labelTimes: 'Quante volte al giorno?',
  resultTitle: 'Risultati',
  resultSingleLoad: 'Singolo caricamento',
  resultDailyTotal: 'Totale giornaliero',
  resultTimePerYear: 'all\'anno in attesa',
  resultLifeYears: 'nella tua vita',
  resultMessage: 'Hai perso circa 1 anno di vita',
  copyMessage: 'Copiato',
  preset3g: '3G',
  preset4g: '4G',
  preset5g: '5G',
};

export const content: ToolLocaleContent<CalculadoraTiempoDatosUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Risorse tecniche sull\'ottimizzazione web',
  bibliography: [
    { name: 'Google PageSpeed Insights', url: 'https://pagespeed.web.dev/' },
    { name: 'WebPageTest - Analizza la velocità del sito web', url: 'https://www.webpagetest.org/' },
    { name: 'Web.dev - Core Web Vitals', url: 'https://web.dev/vitals/' },
    { name: 'MDN - Prestazioni Web', url: 'https://developer.mozilla.org/en-US/docs/Web/Performance' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Perché la velocità di caricamento del sito web è fondamentale', level: 2 },
    {
      type: 'paragraph',
      html: 'Nell\'era digitale odierna, la velocità di caricamento del sito web non è un lusso ma una necessità. Ogni millisecondo conta per trattenere gli utenti, migliorare il posizionamento nei motori di ricerca e massimizzare le conversioni. Gli utenti moderni si aspettano che le pagine si carichino in meno di 3 secondi.',
    },
    { type: 'title', text: 'Impatto sull\'esperienza utente', level: 3 },
    {
      type: 'paragraph',
      html: 'Il 53% dei visitatori da mobile abbandona una pagina se impiega più di 3 secondi per caricarsi. I tassi di conversione calano del 7% per ogni secondo aggiuntivo di latenza.',
    },
    { type: 'title', text: 'Comprendere le velocità di connessione', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>3G:</strong> 0,4 Mbps - Comune nelle aree rurali e nei paesi in via di sviluppo',
        '<strong>4G/LTE:</strong> 10 Mbps - Standard nei paesi sviluppati',
        '<strong>5G:</strong> 100+ Mbps - In graduale espansione, ancora limitato',
      ],
    },
    { type: 'title', text: 'Strategie per ridurre il peso del sito', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Ottimizzazione delle immagini:</strong> rappresenta il 50-80% del peso. Riducilo del 40-60% con strumenti come TinyPNG.',
        '<strong>Minificazione:</strong> rimuovi il codice non necessario da CSS e JavaScript. Risparmia il 30-50%.',
        '<strong>Lazy Loading:</strong> carica le immagini solo quando gli utenti vi scorrono sopra.',
        '<strong>Cache del browser:</strong> memorizza i file statici nei browser degli utenti.',
        '<strong>CDN:</strong> servi i contenuti da server geograficamente vicini.',
      ],
    },
    { type: 'title', text: 'Conclusione: ogni secondo conta', level: 2 },
    {
      type: 'paragraph',
      html: 'Il tuo sito web è spesso la prima impressione che gli utenti hanno del tuo brand. Un sito lento frustra gli utenti e fa perdere affari. Un sito veloce e reattivo crea un\'esperienza positiva e migliora tutte le tue metriche.',
    },
  ],
};
