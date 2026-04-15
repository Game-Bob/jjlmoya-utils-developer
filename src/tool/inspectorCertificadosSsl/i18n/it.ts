import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InspectorCertificadosSslUI } from '../ui';

const slug = 'ispettore-certificati-ssl-tls';
const title = 'Ispettore Certificati SSL/TLS Online Visualizza file PEM e CRT';
const description = 'Analizza i file di certificati SSL (.pem, .crt, .der) in locale. Controlla date di scadenza, emittenti, intestatari e impronte SHA-256 senza che i tuoi dati lascino il browser.';

const faqData = [
  {
    question: 'È sicuro analizzare il mio certificato SSL su questo sito?',
    answer: 'Assolutamente sì. Questo strumento funziona al 100% lato client. Quando trascini il tuo file .pem o .crt, il browser legge i dati in locale e non li invia mai a nessun server. Privacy totale.',
  },
  {
    question: 'Quali formati di certificato sono supportati?',
    answer: 'Lo strumento supporta i formati più comuni: PEM (codificato in Base64 con intestazioni "BEGIN CERTIFICATE") e DER (formato binario), che di solito hanno estensioni .pem, .crt, .cer o .der.',
  },
  {
    question: 'Posso vedere la data di scadenza di un file .crt?',
    answer: 'Sì, dopo aver caricato il file vedrai immediatamente la sezione "Stato di Validità", che mostra la data di scadenza esatta e se il certificato è ancora valido oggi.',
  },
  {
    question: 'A cosa serve l\'emittente del certificato?',
    answer: 'L\'emittente (Issuer) indica quale Autorità di Certificazione (CA) ha validato l\'identità del sito. È fondamentale per sapere se il certificato sarà riconosciuto dai browser commerciali.',
  },
  {
    question: 'Come vengono calcolate le impronte SHA-256?',
    answer: 'Vengono calcolate applicando un algoritmo di hash direttamente al contenuto binario del certificato. Servono a verificare che il file non sia stato alterato e corrisponda a quanto il server si aspetta.',
  },
];

const howToData = [
  { name: 'Trova il tuo file', text: 'Individua il file con estensione .pem, .crt, .cer o .der sul tuo computer.' },
  { name: 'Trascina e rilascia', text: 'Trascina semplicemente il file nell\'area tratteggiata qui sopra.' },
  { name: 'Visualizza i risultati', text: 'Immediatamente vedrai chi ha emesso il certificato, a chi è intestato, quando scade e le sue impronte digitali.' },
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

const ui: InspectorCertificadosSslUI = {
  labelAnalyzeCertificate: 'Analizza Certificato',
  dragDropText: 'Trascina qui il tuo file .pem, .crt o .cer',
  dragDropSubtext: '(Elaborazione 100% locale nel tuo browser)',
  cardStatusTitle: 'Stato di Validità',
  cardSubjectTitle: 'Intestatario (Subject)',
  cardIssuerTitle: 'Emittente (CA)',
  cardFingerprintsTitle: 'Impronte Digitali',
  cardTechnicalTitle: 'Dettagli Tecnici',
  labelValidityStatus: 'Stato:',
  labelExpiryDate: 'Scade il',
  labelIssueDate: 'Emesso il',
  labelSha256: 'Impronta SHA-256',
  labelSha1: 'Impronta SHA-1',
  labelSignatureAlgorithm: 'Algoritmo di Firma',
  labelVersion: 'Versione X.509',
  labelSerialNumber: 'Numero di Serie',
  labelCommonName: 'Common Name',
  labelOrganization: 'Organization',
  labelOrgUnit: 'Org. Unit',
  labelLocality: 'Locality',
  labelState: 'State/Province',
  labelCountry: 'Country',
  labelEmail: 'Email',
  statusValid: 'Valido',
  statusExpired: 'Scaduto',
  errorMessageInvalid: 'File non valido.',
  supportedFormats: '.pem, .crt, .cer, .der',
};

export const content: ToolLocaleContent<InspectorCertificadosSslUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Risorse Tecniche sui Certificati SSL/TLS',
  bibliography: [
    { name: 'RFC 5280: Internet X.509 Public Key Infrastructure Certificate and CRL Profile', url: 'https://datatracker.ietf.org/doc/html/rfc5280' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'Mozilla: Panoramica sulla crittografia SSL/TLS', url: 'https://developer.mozilla.org/it/docs/Glossary/TLS' },
    { name: 'OpenSSL: Documentazione del formato certificato X.509', url: 'https://www.openssl.org/docs/man1.1.1/man1/x509.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Cos\'è un Ispettore di Certificati SSL/TLS e perché ti serve?', level: 2 },
    {
      type: 'paragraph',
      html: 'Nel mondo dello sviluppo web e della sicurezza informatica, i <strong>certificati SSL (Secure Sockets Layer) e TLS (Transport Layer Security)</strong> sono il pilastro della fiducia digitale. Un certificato digitale non è altro che un file che collega una chiave crittografica ai dati di un\'organizzazione o di un dominio. Questi file si presentano però spesso in formati binari (.der) o codificati in Base64 (.pem, .crt) che non sono leggibili a prima vista.',
    },
    {
      type: 'paragraph',
      html: 'Il nostro <strong>Ispettore di Certificati SSL/TLS</strong> ti permette di "aprire" questi file in modo visivo e sicuro. A differenza degli strumenti che interrogano un dominio pubblico (come il popolare test di SSL Labs), questo strumento lavora direttamente con il file che hai sul tuo dispositivo. È fondamentale quando stai configurando server Nginx o Apache, o stai caricando certificati su un Load Balancer di AWS o Google Cloud, e vuoi verificare che il file in tuo possesso sia corretto prima di caricarlo.',
    },
    { type: 'title', text: 'Come ispezionare un file .pem o .crt passo dopo passo', level: 2 },
    {
      type: 'paragraph',
      html: 'Analizzare un certificato con il nostro strumento è semplicissimo e non richiede alcuna conoscenza della riga di comando (OpenSSL). Segui questi passaggi:',
    },
    {
      type: 'list',
      items: [
        '<strong>Trova il tuo file:</strong> Individua il file con estensione .pem, .crt, .cer o .der sul tuo computer.',
        '<strong>Trascina e rilascia:</strong> Trascina semplicemente il file nell\'area tratteggiata qui sopra.',
        '<strong>Visualizza i risultati:</strong> Immediatamente vedrai chi ha emesso il certificato, a chi è intestato, quando scade e le sue impronte digitali.',
      ],
    },
    {
      type: 'tip',
      title: 'Privacy Totale',
      html: 'La cosa più importante di questo processo è la <strong>privacy</strong>. Il file non viene mai caricato sui nostri server. Tutta l\'elaborazione della struttura ASN.1 del certificato avviene nella RAM del tuo browser. Massima sicurezza per le tue chiavi pubbliche.',
    },
    { type: 'title', text: 'I campi principali che vedrai analizzando il tuo certificato', level: 2 },
    {
      type: 'paragraph',
      html: 'Quando analizzi il tuo certificato, scomponiamo le informazioni tecniche più rilevanti così da permetterti di verificarle a colpo d\'occhio:',
    },
    {
      type: 'list',
      items: [
        '<strong>Intestatario (Subject):</strong> Mostra i dati del proprietario, inclusi il Common Name (CN), l\'organizzazione e la località.',
        '<strong>Emittente (Issuer):</strong> Identifica l\'Autorità di Certificazione (CA) che ha firmato il certificato (ad es. Let\'s Encrypt, DigiCert).',
        '<strong>Periodo di Validità:</strong> Mostra la data esatta di emissione e la data di scadenza.',
        '<strong>Impronte (Fingerprints):</strong> Le impronte SHA-256 e SHA-1 servono a verificare l\'integrità del file.',
      ],
    },
    { type: 'title', text: 'Formati supportati: PEM, CRT, CER e DER', level: 2 },
    {
      type: 'paragraph',
      html: 'Esistono diversi formati di file certificato e a volte possono generare confusione. Il nostro strumento è compatibile con i più diffusi:',
    },
    {
      type: 'list',
      items: [
        '<strong>PEM (.pem, .crt, .cer):</strong> Il formato più comune su Linux e sui server web. Inizia con la riga <code>-----BEGIN CERTIFICATE-----</code>.',
        '<strong>DER (.der, .cer):</strong> Il formato binario. Molto usato in ambienti Windows (Java, Active Directory) e di solito più difficile da leggere senza strumenti specializzati.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Anche se il tuo file ha un\'estensione insolita, se la struttura interna è un certificato X.509 standard, il nostro motore basato su <strong>node-forge</strong> sarà in grado di interpretarlo senza problemi.',
    },
    { type: 'title', text: 'Perché usare questo strumento invece di OpenSSL?', level: 2 },
    {
      type: 'paragraph',
      html: 'OpenSSL è il coltellino svizzero della crittografia, ma i suoi comandi sono difficili da ricordare. Per visualizzare un certificato dalla riga di comando dovresti digitare:',
    },
    { type: 'code', text: 'openssl x509 -in certificado.crt -text -noout' },
    {
      type: 'paragraph',
      html: 'Il nostro strumento offre vantaggi concreti nel lavoro quotidiano:',
    },
    {
      type: 'list',
      items: [
        '<strong>Velocità:</strong> Non devi aprire il terminale né ricordare opzioni complesse.',
        '<strong>Chiarezza visiva:</strong> I nomi dei campi (Locality, Organization) sono formattati in modo leggibile, non come codici abbreviati tipo "L" o "O".',
        '<strong>Avvisi di validità:</strong> Calcoliamo automaticamente se il certificato è valido oggi, risparmiarti il confronto manuale delle date.',
        '<strong>Multipiattaforma:</strong> Funziona su qualsiasi sistema operativo con un browser moderno, senza installare dipendenze.',
      ],
    },
    { type: 'title', text: 'Sicurezza e Privacy: il tuo certificato non lascia mai il browser', level: 2 },
    {
      type: 'paragraph',
      html: 'Da sviluppatore, so quanto sia delicato gestire questo tipo di informazioni. Anche se un certificato è tecnicamente <strong>informazione pubblica</strong> (viene inviato a qualsiasi browser che visita il tuo sito), è comunque buona pratica non caricare file su server esterni inutilmente.',
    },
    {
      type: 'paragraph',
      html: 'Questo strumento usa JavaScript che gira esclusivamente nel browser. Quando trascini il file, ne leggiamo il contenuto ed elaboriamo tutto in locale. Puoi verificarlo disconnettendo Internet: lo strumento continuerà a funzionare esattamente allo stesso modo.',
    },
    { type: 'title', text: 'Casi d\'uso tipici per l\'Ispettore SSL', level: 2 },
    {
      type: 'paragraph',
      html: 'Quando ti torna utile tenere questa pagina tra i preferiti?',
    },
    {
      type: 'list',
      items: [
        '<strong>Debug del server:</strong> Quando installi un certificato ma il sito continua a dare errori, per verificare di non aver caricato per sbaglio il vecchio certificato.',
        '<strong>Verifica della catena:</strong> Per controllare se un file contiene il certificato finale o un certificato intermedio.',
        '<strong>Audit degli asset:</strong> Per verificare quale Autorità di Certificazione è stata usata in un vecchio progetto.',
        '<strong>Integrità delle copie:</strong> Quando si spostano certificati tra server, per assicurarsi che il file non sia corrotto confrontando l\'impronta SHA-256.',
      ],
    },
  ],
};
