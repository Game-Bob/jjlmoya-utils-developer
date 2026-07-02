import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JwtDecoderUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'decodificatore-jwt-parser-e-ispettore-di-claims';
const title = 'Decodificatore JWT, Parser e Ispettore di Claims';
const description = 'Incolla un JSON Web Token, decodifica header e payload all\'istante, ispeziona i claims registrati, individua i token scaduti e copia JSON pulito per il debug dei flussi di autenticazione.';

const howTo = [
  {
    name: 'Incolla il JWT',
    text: 'Copia un token da un header Authorization, cookie, voce di log o provider di identita e incollalo nel campo di input.',
  },
  {
    name: 'Leggi header e payload decodificati',
    text: 'Lo strumento divide il token in header, payload e firma, quindi visualizza i segmenti JSON in pannelli separati per un\'ispezione rapida.',
  },
  {
    name: 'Controlla i claims importanti',
    text: 'Esamina algoritmo, emittente, audience, soggetto, data di emissione, data di inizio validita e data di scadenza senza convertire manualmente i timestamp Unix.',
  },
  {
    name: 'Copia i dati che ti servono',
    text: 'Copia una sezione decodificata o l\'intero output decodificato quando devi condividere un\'istantanea di debug pulita con il tuo team.',
  },
];

const faq = [
  {
    question: 'Decodificare un JWT dimostra che il token e valido?',
    answer: 'No. La decodifica rivela solo l\'header e il payload codificati in base64url. Un token e affidabile solo dopo che la firma, l\'emittente, l\'audience, la scadenza e i claims correlati sono stati convalidati dall\'applicazione o dal provider di identita.',
  },
  {
    question: 'Posso usare questo decodificatore JWT per access token e ID token?',
    answer: 'Si. Il decodificatore e utile per ispezionare access token OAuth, ID token OpenID Connect, token di sessione e token da servizio a servizio, purche utilizzino il formato JWT standard in tre parti.',
  },
  {
    question: 'Perche il pannello della firma non verifica il token?',
    answer: 'La verifica JWT richiede il segreto corretto, la chiave pubblica o la configurazione JWKS. Questo strumento si concentra intenzionalmente sulla decodifica e sull\'ispezione, cosi che gli sviluppatori possano vedere il contenuto del token senza fingere che una stringa di firma visibile sia una prova di validita.',
  },
  {
    question: 'Cosa dovrei controllare per primo quando faccio debug di un JWT?',
    answer: 'Inizia con exp, nbf, iss, aud e alg. La maggior parte dei problemi reali in produzione deriva da token scaduti, sfasamento dell\'orologio, valori di audience errati, URL dell\'emittente inaspettati o ipotesi di algoritmo non sicure.',
  },
];

const ui: JwtDecoderUI = {
  tokenLabel: 'Token JWT',
  tokenPlaceholder: 'Incolla un JWT qui: header.payload.firma',
  sampleButton: 'Carica esempio',
  clearButton: 'Cancella',
  statusWaiting: 'Incolla un token per decodificare il suo header JSON, payload e claims.',
  statusValid: 'JWT decodificato con successo.',
  statusInvalid: 'Questo non sembra un JWT valido in tre parti.',
  statusExpired: 'JWT decodificato, ma il claim exp e gia scaduto.',
  statusUnsigned: 'JWT decodificato, ma non e firmato o utilizza l\'algoritmo none.',
  headerTitle: 'Header',
  payloadTitle: 'Payload',
  signatureTitle: 'Firma',
  claimsTitle: 'Claims registrati',
  copyHeader: 'Copia header decodificato',
  copyPayload: 'Copia payload decodificato',
  copySignature: 'Copia firma',
  copyAll: 'Copia tutto',
  copiedLabel: 'Copiato',
  invalidTokenTitle: 'JWT non valido',
  invalidTokenBody: 'Verifica che il token abbia tre segmenti base64url separati da punti.',
  invalidSegmentError: 'Verifica che il token abbia tre segmenti base64url separati da punti.',
  invalidDecodeError: 'L\'header o il payload non hanno potuto essere decodificati come JSON valido.',
  emptyJson: '{}',
  signaturePresent: 'Il segmento della firma e presente; verificalo nel tuo livello di autenticazione con la chiave corretta.',
  signatureMissing: 'Nessun segmento di firma',
  algorithmLabel: 'Algoritmo',
  typeLabel: 'Tipo',
  issuerLabel: 'Emittente',
  subjectLabel: 'Soggetto',
  audienceLabel: 'Audience',
  issuedAtLabel: 'Emesso il',
  notBeforeLabel: 'Valido dal',
  expiresAtLabel: 'Scade il',
  claimMissing: 'Non presente',
  privacyNote: 'La decodifica viene eseguita nella sessione del browser. Non incollare segreti di produzione in nessuno strumento, a meno che la tua politica di sicurezza non lo consenta.',
  sampleToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnYW1lYm9iLXVzZXItNDIiLCJuYW1lIjoiR2FtZUJvYiBEZXZlbG9wZXIiLCJpc3MiOiJodHRwczovL3d3dy5nYW1lYm9iLmRldiIsImF1ZCI6ImRldmVsb3Blci10b29scyIsImlhdCI6MTcxNzIwMDAwMCwibmJmIjoxNzE3MjAwMDAwLCJleHAiOjE4OTM0NTYwMDAsInJvbGUiOiJhZG1pbiJ9.demo-signature',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  inLanguage: 'it',
};

export const content: ToolLocaleContent<JwtDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande frequenti sul decodificatore JWT',
  faq,
  bibliographyTitle: 'Specifiche JWT e riferimenti di sicurezza',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Decodifica i JWT senza perdere il contesto di sicurezza',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un JSON Web Token sembra compatto, ma spesso contiene il dettaglio esatto che spiega un errore di autenticazione: l\'algoritmo di firma, l\'emittente, l\'audience, il soggetto, la data di emissione, la data di inizio validita, la scadenza e i claims di autorizzazione specifici dell\'applicazione. Questo <strong>decodificatore JWT, parser e ispettore di claims</strong> trasforma i tre segmenti del token in JSON leggibile per aiutarti a fare debug dei flussi di autenticazione piu velocemente.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Decodificato non significa affidabile',
      html: 'Chiunque puo decodificare un JWT in base64url. La fiducia inizia solo dopo che la tua applicazione ha verificato la firma con il segreto, la chiave pubblica o il JWKS corretti, e poi ha convalidato emittente, audience, scadenza ed eventuali claims specifici del dominio. Usa questo strumento per ispezionare i dati, non per accettare un token come autentico.',
    },
    {
      type: 'title',
      text: 'Cosa ti dice ogni segmento JWT',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Segmento', 'Contenuto tipico', 'Valore di debug'],
      rows: [
        ['Header', 'Algoritmo, tipo di token e ID chiave opzionale', 'Mostra se il token prevede HS256, RS256, ES256 o un\'altra strategia di verifica.'],
        ['Payload', 'Claims registrati e claims applicativi', 'Rivela identita, tenant, scope, ruoli, scadenza e disallineamenti di audience.'],
        ['Firma', 'Byte della firma crittografica codificati come base64url', 'Conferma che esiste un segmento di firma, ma deve essere verificato con la chiave corretta altrove.'],
      ],
    },
    {
      type: 'title',
      text: 'Claims che di solito spiegano gli errori di autenticazione',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>exp:</strong> se il token e scaduto, la logica di refresh o le impostazioni dell\'orologio potrebbero essere errate.',
        '<strong>nbf:</strong> se il token non e ancora attivo, gli orologi del server e del provider di identita potrebbero non essere sincronizzati.',
        '<strong>iss:</strong> se l\'URL dell\'emittente differisce dalla configurazione, il token potrebbe provenire dal tenant o dall\'ambiente sbagliato.',
        '<strong>aud:</strong> se l\'audience non corrisponde all\'identificatore dell\'API, il token e stato emesso per un\'altra risorsa.',
        '<strong>alg:</strong> se l\'algoritmo e inaspettato, il tuo verificatore potrebbe rifiutare il token o esporre un pericoloso errore di configurazione.',
      ],
    },
    {
      type: 'title',
      text: 'Casi d\'uso di un parser JWT durante lo sviluppo',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Debug frontend',
          description: 'Ispeziona gli ID token e gli access token ricevuti dopo il login per confermare scope, ruoli e claims del profilo.',
          icon: 'mdi:monitor-dashboard',
          points: ['Controlla i claims del profilo', 'Conferma scope e ruoli', 'Confronta gli ambienti di login'],
        },
        {
          title: 'QA API backend',
          description: 'Confronta i valori attesi di emittente e audience con il token effettivamente inviato in un header Authorization.',
          icon: 'mdi:api',
          highlight: true,
          points: ['Convalida la forma dell\'audience', 'Individua disallineamenti dell\'emittente', 'Ispeziona i bearer token'],
        },
        {
          title: 'Configurazione del provider di identita',
          description: 'Verifica se i claims di Auth0, Azure AD, Cognito, Keycloak o di un provider personalizzato sono strutturati come la tua app si aspetta.',
          icon: 'mdi:account-key',
          points: ['Esamina i dati del tenant', 'Controlla i claims personalizzati', 'Confronta i mapping del provider'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Errori JWT comuni che questo ispettore rende evidenti',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Verifiche rapide contro decisioni di fiducia',
      items: [
        {
          pro: 'Vedi immediatamente i token malformati.',
          con: 'Non puo conoscere l\'audience o l\'emittente che ti aspetti.',
        },
        {
          pro: 'Converti i claims timestamp Unix in date leggibili.',
          con: 'Non puo verificare una firma senza il materiale della chiave reale.',
        },
        {
          pro: 'Individua valori mancanti di emittente, audience, soggetto o tipo.',
          con: 'Non puo dimostrare che scope e ruoli sono sicuri per la tua applicazione.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Flusso di lavoro consigliato',
      items: [
        'Decodifica il token per capire cosa ha effettivamente ricevuto il client o l\'API.',
        'Controlla exp, nbf, iss, aud, sub e alg prima di inseguire la logica applicativa.',
        'Verifica le firme e le decisioni di fiducia solo nel tuo livello di autenticazione.',
        'Evita di condividere JWT di produzione sensibili in ticket, log o screenshot.',
      ],
    },
  ],
};
