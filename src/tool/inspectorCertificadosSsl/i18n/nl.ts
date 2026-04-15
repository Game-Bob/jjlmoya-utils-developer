import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InspectorCertificadosSslUI } from '../ui';

const slug = 'ssl-tls-certificate-inspector-nl';
const title = 'Online SSL TLS certificaatinspecteur Bekijk PEM en CRT bestanden';
const description = 'Analyseer SSL-certificaatbestanden (.pem, .crt, .der) lokaal. Controleer vervaldatums, certificaatautoriteiten, onderwerpen en SHA-256-vingerafdrukken zonder dat uw gegevens uw browser verlaten.';

const faqData = [
  {
    question: 'Is het veilig om mijn SSL-certificaat op deze website te analyseren?',
    answer: 'Absoluut. Dit hulpprogramma draait 100% aan de clientzijde. Wanneer u uw .pem of .crt bestand sleept, leest de browser de gegevens lokaal en verzendt ze nooit naar een server. Volledige privacy.',
  },
  {
    question: 'Welke certificaatindelingen worden ondersteund?',
    answer: 'Het hulpprogramma ondersteunt de meest voorkomende indelingen: PEM (Base64 gecodeerd met "BEGIN CERTIFICATE"-headers) en DER (binair formaat), die doorgaans .pem-, .crt-, .cer- of .der-extensies hebben.',
  },
  {
    question: 'Kan ik de vervaldatum van een .crt bestand zien?',
    answer: 'Ja, wanneer u het bestand laadt, ziet u onmiddellijk de sectie "Geldigstatus" waarin de exacte vervaldatum en of het certificaat vandaag nog geldig is, wordt weergegeven.',
  },
  {
    question: 'Wat doet de certificaatuitgever?',
    answer: 'De uitgever (Issuer) geeft aan welke certificaatautoriteit (CA) de identiteit van de site heeft gevalideerd. Het is essentieel om te weten of het certificaat door commerciële browsers wordt herkend.',
  },
  {
    question: 'Hoe worden SHA-256-vingerafdrukken berekend?',
    answer: 'Ze worden berekend door een hash-algoritme rechtstreeks toe te passen op de binaire inhoud van het certificaat. Ze dienen om te verifiëren dat het bestand niet is gewijzigd en overeenkomt met wat de server verwacht.',
  },
];

const howToData = [
  { name: 'Zoek uw bestand', text: 'Zoek het bestand met extensie .pem, .crt, .cer of .der op uw computer.' },
  { name: 'Slepen en neerzetten', text: 'Sleep het bestand gewoon naar het stippelgebied hierboven.' },
  { name: 'Resultaten weergeven', text: 'Onmiddellijk ziet u wie het certificaat heeft uitgegeven, voor wie, wanneer het vervalt en de vingerafdrukken.' },
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
  inLanguage: 'nl',
};

const ui: InspectorCertificadosSslUI = {
  labelAnalyzeCertificate: 'Certificaat analyseren',
  dragDropText: 'Sleep uw .pem-, .crt- of .cer-bestand hier naartoe',
  dragDropSubtext: '(100% lokale verwerking in uw browser)',
  cardStatusTitle: 'Geldigstatus',
  cardSubjectTitle: 'Onderwerp (Eigenaar)',
  cardIssuerTitle: 'Uitgever (CA)',
  cardFingerprintsTitle: 'Vingerafdrukken',
  cardTechnicalTitle: 'Technische details',
  labelValidityStatus: 'Status:',
  labelExpiryDate: 'Vervalt op',
  labelIssueDate: 'Uitgegeven op',
  labelSha256: 'SHA-256-vingerafdruk',
  labelSha1: 'SHA-1-vingerafdruk',
  labelSignatureAlgorithm: 'Handtekeningalgoritme',
  labelVersion: 'X.509-versie',
  labelSerialNumber: 'Serienummer',
  labelCommonName: 'Algemene naam',
  labelOrganization: 'Organisatie',
  labelOrgUnit: 'Organisatie-eenheid',
  labelLocality: 'Plaats',
  labelState: 'Staat/Provincie',
  labelCountry: 'Land',
  labelEmail: 'E-mail',
  statusValid: 'Geldig',
  statusExpired: 'Verlopen',
  errorMessageInvalid: 'Ongeldig bestand.',
  supportedFormats: '.pem, .crt, .cer, .der',
};

export const content: ToolLocaleContent<InspectorCertificadosSslUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Veelgestelde vragen',
  faq: faqData,
  bibliographyTitle: 'Technische bronnen over SSL/TLS-certificaten',
  bibliography: [
    { name: 'RFC 5280: Internet X.509 Public Key Infrastructure Certificate and CRL Profile', url: 'https://datatracker.ietf.org/doc/html/rfc5280' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'Mozilla: SSL/TLS Encryption Overview', url: 'https://developer.mozilla.org/en-US/docs/Glossary/TLS' },
    { name: 'OpenSSL: X.509 Certificate Format Documentation', url: 'https://www.openssl.org/docs/man1.1.1/man1/x509.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Wat is een SSL TLS certificaatinspecteur en waarom heb je er een nodig?', level: 2 },
    {
      type: 'paragraph',
      html: 'In de wereld van webontwikkeling en cyberbeveiliging zijn <strong>SSL (Secure Sockets Layer) en TLS (Transport Layer Security)-certificaten</strong> de hoeksteen van vertrouwen. Een digitaal certificaat is niets meer dan een bestand dat een cryptografische sleutel aan organisatie- of domeingegevens koppelt. Deze bestanden komen echter vaak in binaire formaten (.der) of Base64-gecodeerde (.pem, .crt) formaten die niet direct leesbaar zijn.',
    },
    {
      type: 'paragraph',
      html: 'Onze <strong>SSL TLS certificaatinspecteur</strong> stelt u in staat deze bestanden visueel en veilig te "openen". In tegenstelling tot tools die een openbaar domein opvragen (zoals de beroemde SSL Labs-test), werkt dit hulpprogramma rechtstreeks met het bestand op uw apparaat. Dit is van essentieel belang wanneer u Nginx-, Apache-servers configureert of certificaten in AWS of Google Cloud Load Balancer laadt, en u moet verifiëren dat het bestand in uw hand correct is voordat u het uploadt.',
    },
    { type: 'title', text: 'Hoe stap voor stap een .pem of .crt bestand inspecteren', level: 2 },
    {
      type: 'paragraph',
      html: 'Een certificaat met onze tool analyseren is extreem eenvoudig en vereist geen consolkennis (OpenSSL). Volg deze stappen:',
    },
    {
      type: 'list',
      items: [
        '<strong>Zoek uw bestand:</strong> Zoek het bestand met extensie .pem, .crt, .cer of .der op uw computer.',
        '<strong>Sleep en zet neer:</strong> Sleep het bestand gewoon naar het stippelgebied hierboven.',
        '<strong>Bekijk resultaten:</strong> Onmiddellijk ziet u wie het certificaat heeft uitgegeven, voor wie, wanneer het vervalt en de vingerafdrukken.',
      ],
    },
    {
      type: 'tip',
      title: 'Volledige privacy',
      html: 'Het belangrijkste deel van dit proces is <strong>privacy</strong>. Het bestand wordt nooit naar onze servers geüpload. Alle ontleding van de ASN.1-structuur van het certificaat vindt plaats in het RAM van uw eigen browser. Volledige beveiliging voor uw openbare sleutels.',
    },
    { type: 'title', text: 'Belangrijke velden die u ziet bij het analyseren van uw certificaat', level: 2 },
    {
      type: 'paragraph',
      html: 'Bij het analyseren van uw certificaat leggen we de meest relevante technische informatie uit zodat u deze in één oogopslag kunt verifiëren:',
    },
    {
      type: 'list',
      items: [
        '<strong>Onderwerp:</strong> Geeft de gegevens van de eigenaar weer, inclusief de algemene naam (CN), organisatie en locatie.',
        '<strong>Uitgever:</strong> Identificeert de certificaatautoriteit (CA) die het certificaat heeft ondertekend (bijv. Let\'s Encrypt, DigiCert).',
        '<strong>Geldigheidsperiode:</strong> Geeft de exacte uitgiftedatum en kritieke vervaldatum weer.',
        '<strong>Vingerafdrukken:</strong> SHA-256- en SHA-1-vingerafdrukken dienen om de integriteit van het bestand te verifiëren.',
      ],
    },
    { type: 'title', text: 'Ondersteunde indelingen: PEM, CRT, CER en DER', level: 2 },
    {
      type: 'paragraph',
      html: 'Er zijn verschillende certificaatbestandsindelingen en soms is het verwarrend. Ons hulpprogramma is compatibel met de meest voorkomende:',
    },
    {
      type: 'list',
      items: [
        '<strong>PEM (.pem, .crt, .cer):</strong> De meest voorkomende indeling in Linux- en webservers. Begint met de regel <code>-----BEGIN CERTIFICATE-----</code>.',
        '<strong>DER (.der, .cer):</strong> Het binaire formaat. Veel gebruikt in Windows-omgevingen (Java, Active Directory) en is meestal moeilijker leesbaar zonder gespecialiseerde hulpmiddelen.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Zelfs als uw bestand een ongebruikelijke extensie heeft, als de interne structuur een standaard X.509-certificaat is, kan onze <strong>node-forge</strong>-engine het zonder problemen interpreteren.',
    },
    { type: 'title', text: 'Waarom dit hulpprogramma gebruiken in plaats van OpenSSL?', level: 2 },
    {
      type: 'paragraph',
      html: 'OpenSSL is het Zwitserse zakmes van cryptografie, maar de commando\'s zijn moeilijk te onthouden. Om een certificaat van de console weer te geven, moet je schrijven:',
    },
    { type: 'code', text: 'openssl x509 -in certificado.crt -text -noout' },
    {
      type: 'paragraph',
      html: 'Ons hulpprogramma biedt duidelijke voordelen voor dagelijkse workflows:',
    },
    {
      type: 'list',
      items: [
        '<strong>Snelheid:</strong> Geen noodzaak om de terminal te openen of ingewikkelde vlaggen te onthouden.',
        '<strong>Visueel:</strong> We formatteren veldnamen (Locality, Organization) zodat ze leesbaar zijn en geen korte codes zoals "L" of "O".',
        '<strong>Geldigheidswaarschuwingen:</strong> We berekenen automatisch of het certificaat vandaag geldig is, zodat u niet handmatig de huidige datum tegen de certificaatdatum hoeft te controleren.',
        '<strong>Platformonafhankelijk:</strong> Werkt op elk besturingssysteem met een moderne browser, geen afhankelijkheden om te installeren.',
      ],
    },
    { type: 'title', text: 'Beveiliging en privacy: uw certificaat verlaat nooit uw RAM', level: 2 },
    {
      type: 'paragraph',
      html: 'Als ontwikkelaar weet ik hoe kritiek het is om dit soort informatie af te handelen. Hoewel een certificaat technisch <strong>openbare informatie</strong> is (verzonden naar elke browser die uw website bezoekt), is het nog steeds goed practice om bestanden niet onnodig naar externe servers te uploaden.',
    },
    {
      type: 'paragraph',
      html: 'Dit hulpprogramma maakt gebruik van JavaScript dat strikt aan de clientzijde draait. Wanneer u het bestand sleept, lezen we de inhoud en verwerken deze lokaal. U kunt dit verifiëren door internet uit te schakelen: het hulpprogramma blijft precies hetzelfde werken.',
    },
    { type: 'title', text: 'Veel voorkomende gebruiksscenario\'s voor de SSL inspecteur', level: 2 },
    {
      type: 'paragraph',
      html: 'Wanneer zou het bladwijzeren van deze pagina nuttig zijn?',
    },
    {
      type: 'list',
      items: [
        '<strong>Serverdebugging:</strong> Wanneer u een certificaat installeert en de website blijft fouten geven, om te verifiëren dat u niet per ongeluk het oude certificaat hebt geladen.',
        '<strong>Ketenverificatie:</strong> Om te zien of een bestand het eindcertificaat of een tussencertificaat bevat.',
        '<strong>Asset-audit:</strong> Om te controleren welke certificaatautoriteit in een oud project is gebruikt.',
        '<strong>Kopie-integriteit:</strong> Bij het verplaatsen van certificaten tussen servers, om ervoor te zorgen dat het bestand niet beschadigd is door de SHA-256-vingerafdruk te vergelijken.',
      ],
    },
  ],
};

