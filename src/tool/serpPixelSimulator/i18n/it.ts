import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SerpPixelSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'simulatore-serp-contatore-pixel';
const title = 'Simulatore SERP e Contatore Pixel SEO';
const description = 'Visualizza in anteprima gli snippet di ricerca in stile Google in tempo reale, misura la larghezza in pixel del titolo e della meta description e scopri esattamente dove il testo verrà troncato.';

const howTo = [
  {
    name: 'Inserisci il tag title',
    text: 'Digita o incolla il titolo della pagina che vuoi testare. L\'anteprima SERP e il misuratore di pixel si aggiornano a ogni tasto premuto.',
  },
  {
    name: 'Aggiungi l\'URL visibile',
    text: 'Usa un dominio e un percorso realistici in modo che lo snippet assomigli al risultato che un utente esaminerebbe.',
  },
  {
    name: 'Scrivi la meta description',
    text: 'Aggiungi il testo della descrizione e osserva la barra dei pixel. Quando supera la larghezza visiva consigliata, l\'anteprima la tronca con i puntini di sospensione.',
  },
  {
    name: 'Passa da desktop a mobile',
    text: 'Confronta la resa del titolo con la larghezza della scheda desktop o mobile prima di pubblicare i metadati.',
  },
];

const faq = [
  {
    question: 'Perché contare i pixel invece dei caratteri per i titoli SEO?',
    answer: 'Le schede dei risultati di Google sono vincolate dalla larghezza visiva. Un titolo con molte lettere strette può contenere più caratteri di uno con lettere larghe, maiuscole o glifi dall\'aspetto marcato. La misurazione in pixel offre un\'anteprima più fedele del risultato visibile.',
  },
  {
    question: 'Questo garantisce esattamente come Google troncherà il mio snippet?',
    answer: 'No. Google può riscrivere i link del titolo e gli snippet, e la resa può variare in base alla query, al dispositivo, alla lingua e agli esperimenti. Lo strumento è pensato come una guida visiva pratica per scrivere metadati con meno probabilità di essere tagliati.',
  },
  {
    question: 'Quali limiti di pixel utilizza il simulatore?',
    answer: 'Il limite predefinito del titolo su desktop è di 580 px, su mobile di 600 px e il limite della meta description è di 920 px. Sono obiettivi di scrittura, non limiti ufficiali di Google.',
  },
  {
    question: 'Perché l\'anteprima aggiunge i puntini di sospensione?',
    answer: 'Quando il testo misurato supera la larghezza in pixel disponibile, il simulatore tronca la stringa all\'ultimo carattere che rientra e aggiunge tre puntini, riproducendo il comportamento pratico di cui i team SEO hanno bisogno per individuare la perdita di significato.',
  },
];

const ui: SerpPixelSimulatorUI = {
  titleLabel: 'Tag title',
  titlePlaceholder: 'GameBob | Studio di Sviluppo Indipendente',
  urlLabel: 'URL visibile',
  urlPlaceholder: 'https://www.gamebob.dev/it/',
  descriptionLabel: 'Meta description',
  descriptionPlaceholder: 'Scopri la nostra collezione di strumenti e giochi pensati per migliorare il tuo flusso di lavoro digitale e l\'intrattenimento.',
  deviceLabel: 'Modalità anteprima',
  desktopLabel: 'Desktop',
  mobileLabel: 'Mobile',
  titlePixelsLabel: 'Larghezza titolo',
  descriptionPixelsLabel: 'Larghezza descrizione',
  charactersLabel: 'caratteri',
  previewLabel: 'Anteprima dal vivo in stile Google',
  tooLongLabel: 'Troppo larga',
  goodLabel: 'Ok',
  emptyTitle: 'Il tuo titolo apparirà qui',
  emptyDescription: 'L\'anteprima della tua meta description apparirà qui mentre digiti.',
  defaultTitle: 'GameBob | Studio di Sviluppo Indipendente',
  defaultUrl: 'https://www.gamebob.dev/it/',
  defaultDescription: 'Scopri la nostra collezione di strumenti e giochi pensati per migliorare il tuo flusso di lavoro digitale e l\'intrattenimento.',
  fallbackUrl: 'esempio.com',
  fallbackFaviconText: 'G',
  pixelUnit: 'px',
  ellipsis: '...',
  fetchButtonLabel: 'Recupera',
  fetchLoadingLabel: 'Recupero in corso...',
  fetchSuccessLabel: 'Metadati caricati dall\'URL.',
  fetchCorsError: 'Il browser non ha potuto leggere questa pagina. Potrebbe essere bloccata da CORS, un reindirizzamento, contenuti misti o una regola di rete. Puoi comunque incollare o modificare i metadati manualmente.',
  fetchInvalidUrlError: 'Inserisci un URL valido prima di recuperare i metadati.',
  fetchNoMetadataError: 'La pagina è stata recuperata, ma non è stato trovato alcun titolo o meta description.',
  fetchGenericError: 'Impossibile recuperare i metadati da questo URL. Verifica l\'indirizzo o compila i campi manualmente.',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  inLanguage: 'it',
};

export const content: ToolLocaleContent<SerpPixelSimulatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande frequenti sul simulatore SERP',
  faq,
  bibliographyTitle: 'Documentazione sui risultati di ricerca',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Smetti di indovinare come apparirà il tuo risultato su Google',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un tag title può sembrare perfetto in un foglio di calcolo e comunque fallire nel risultato di ricerca. Google non riserva spazio in base al numero di caratteri; mostra il testo all\'interno di una scheda visiva. Questo significa che <strong>GameBob | Studio di Sviluppo Indipendente</strong> e un altro titolo con lo stesso numero di caratteri possono occupare larghezze molto diverse a seconda delle lettere, delle maiuscole, della punteggiatura e della spaziatura.',
    },
    {
      type: 'tip',
      title: 'La regola che aiuta davvero',
      html: 'Scrivi lo snippet in modo che la promessa importante sopravviva ai puntini di sospensione. Metti il tipo di pagina, l\'intento di ricerca e il motivo più forte per cliccare prima del limite di pixel. I nomi dei marchi sono utili, ma non devono spingere il beneficio principale fuori dalla vista.',
    },
    {
      type: 'title',
      text: 'Cosa misura il contatore di pixel',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Elemento', 'Cosa conta', 'Come usare il risultato'],
      rows: [
        ['Tag title', 'Larghezza renderizzata in pixel, non il conteggio grezzo dei caratteri', 'Mantieni la parola chiave principale e la promessa di clic visibili prima del troncamento.'],
        ['URL visibile', 'Fiducia visiva e chiarezza dell\'argomento', 'Usa un percorso leggibile che rafforzi la destinazione del risultato.'],
        ['Meta description', 'Un\'area snippet più ampia con comportamento dipendente dalla query', 'Metti il beneficio in primo piano perché Google potrebbe accorciarla o riscriverla.'],
        ['Modalità dispositivo', 'Le schede desktop e mobile possono sembrare diverse', 'Controlla entrambe prima di pubblicare i metadati per le pagine importanti.'],
      ],
    },
    {
      type: 'title',
      text: 'Perché i limiti di caratteri sono una cattiva abitudine SEO',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il consiglio tradizionale come "mantieni i titoli sotto i 60 caratteri" è comodo, ma nasconde il vero problema. Lettere larghe come W e M, parole in maiuscolo, separatori, numeri e nomi di marca lunghi consumano tutti spazi diversi. La misurazione in pixel rende il compromesso immediatamente visibile: puoi vedere se una frase si guadagna il suo posto o ruba spazio a un messaggio più forte.',
    },
    {
      type: 'title',
      text: 'Un flusso di lavoro pratico per snippet migliori',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Inizia con l\'intento:</strong> descrivi cosa ottiene l\'utente, non solo come si chiama la pagina.',
        '<strong>Testa il titolo completo:</strong> incollalo nel simulatore e osserva la barra prima di pubblicare.',
        '<strong>Rimuovi le parole deboli:</strong> se la barra diventa rossa, elimina i riempitivi prima di tagliare i termini preziosi.',
        '<strong>Controlla i puntini di sospensione:</strong> se l\'anteprima troncata perde significato, riscrivi il titolo invece di accettare il taglio.',
        '<strong>Ripeti per la descrizione:</strong> assicurati che la prima frase porti da sola la proposta di valore.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Quando la barra diventa rossa',
      html: 'Una barra rossa non è un avviso di penalizzazione. Significa che il testo attuale è più largo dell\'obiettivo visivo selezionato, quindi il simulatore lo tronca con i puntini. Consideralo come un segnale editoriale: decidi se le parole nascoste sono sacrificabili o se lo snippet ha bisogno di una struttura più affilata.',
    },
    {
      type: 'title',
      text: 'Limiti, riscritture e aspettative realistiche',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nessun simulatore può garantire lo snippet esatto che Google mostrerà. Google può riscrivere i link del titolo, mettere in grassetto i termini della query, scegliere il testo della pagina invece della meta description o mostrare snippet diversi per ricerche diverse. Questo strumento è più utile come fase rapida di scrittura e controllo qualità: rileva gli overflow visivi evidenti prima che la pagina arrivi in produzione.',
    },
    {
      type: 'summary',
      title: 'Miglior uso di questo simulatore SERP',
      items: [
        'Usa la barra dei pixel per individuare gli overflow visivi prima di pubblicare i metadati.',
        'Mantieni l\'intento di ricerca principale e la promessa di clic visibili prima di qualsiasi ellissi.',
        'Recupera i metadati dagli URL che consentono CORS, poi modifica il risultato manualmente se necessario.',
        'Considera l\'anteprima come una guida alla scrittura, perché Google può comunque riscrivere gli snippet per ogni query.',
      ],
    },
  ],
};
