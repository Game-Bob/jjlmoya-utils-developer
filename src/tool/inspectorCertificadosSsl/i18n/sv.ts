import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InspectorCertificadosSslUI } from '../ui';

const slug = 'certifikatgranskare-ssl-tls';
const title = 'Online SSL/TLS certifikatgranskare Visa PEM och CRT filer';
const description = 'Analysera SSL-certifikatfiler (.pem, .crt, .der) lokalt. Kontrollera utgångsdatum, utfärdare, ämnen och SHA-256-fingeravtryck utan att din data lämnar webbläsaren.';

const faqData = [
  {
    question: 'Är det säkert att analysera mitt SSL-certifikat på denna webbplats?',
    answer: 'Absolut. Det här verktyget körs 100% på klientsidan. När du drar ditt .pem eller .crt fil läser webbläsaren data lokalt och skickar den aldrig till någon server. Fullständig integritet.',
  },
  {
    question: 'Vilka certifikatformat stöds?',
    answer: 'Verktyget stöder de vanligaste formaten: PEM (Base64-kodad med "BEGIN CERTIFICATE"-rubriker) och DER (binärt format), som vanligtvis har .pem-, .crt-, .cer- eller .der-tillägg.',
  },
  {
    question: 'Kan jag se utgångsdatumet för en .crt fil?',
    answer: 'Ja, när du laddar filen ser du omedelbar avsnittet "Giltighet" som visar det exakta utgångsdatumet och huruvida certifikatet fortfarande är giltigt idag.',
  },
  {
    question: 'Vad gör certifikatutfärdaren?',
    answer: 'Utfärdaren (Issuer) anger vilken certifikatmyndighet (CA) som validerade webbplatsens identitet. Det är viktigt att veta om certifikatet kommer att kännas igen av kommersiella webbläsare.',
  },
  {
    question: 'Hur beräknas SHA-256-fingeravtryck?',
    answer: 'De beräknas genom att tillämpa en hash-algoritm direkt på certifikatets binära innehål. De tjänar till att verifiera att filen inte har manipulerats och matchar det servern förväntar.',
  },
];

const howToData = [
  { name: 'Hitta din fil', text: 'Lokalisera filen med filnamnstillägg .pem, .crt, .cer eller .der på din dator.' },
  { name: 'Dra och släpp', text: 'Bara dra filen över det prickade området ovan.' },
  { name: 'Visa resultat', text: 'Omedelbar ser du vem som utfärdade certifikatet, för vem, när det går ut och dess fingeravtryck.' },
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
  inLanguage: 'sv',
};

const ui: InspectorCertificadosSslUI = {
  labelAnalyzeCertificate: 'Analysera certifikat',
  dragDropText: 'Dra din .pem-, .crt- eller .cer-fil här',
  dragDropSubtext: '(100% lokal bearbetning i din webbläsare)',
  cardStatusTitle: 'Giltighet',
  cardSubjectTitle: 'Ämne (Ägare)',
  cardIssuerTitle: 'Utfärdare (CA)',
  cardFingerprintsTitle: 'Fingeravtryck',
  cardTechnicalTitle: 'Tekniska detaljer',
  labelValidityStatus: 'Status:',
  labelExpiryDate: 'Utgår',
  labelIssueDate: 'Utfärdad',
  labelSha256: 'SHA-256-fingeravtryck',
  labelSha1: 'SHA-1-fingeravtryck',
  labelSignatureAlgorithm: 'Signaturalgoritm',
  labelVersion: 'X.509-version',
  labelSerialNumber: 'Serienummer',
  labelCommonName: 'Gemensamt namn',
  labelOrganization: 'Organisation',
  labelOrgUnit: 'Organisationsenhet',
  labelLocality: 'Ort',
  labelState: 'Stat/Provins',
  labelCountry: 'Land',
  labelEmail: 'E-post',
  statusValid: 'Giltigt',
  statusExpired: 'Utgånget',
  errorMessageInvalid: 'Ogiltig fil.',
  supportedFormats: '.pem, .crt, .cer, .der',
};

export const content: ToolLocaleContent<InspectorCertificadosSslUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Tekniska resurser för SSL/TLS certifikat',
  bibliography: [
    { name: 'RFC 5280: Internet X.509 Public Key Infrastructure Certificate and CRL Profile', url: 'https://datatracker.ietf.org/doc/html/rfc5280' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'Mozilla: SSL/TLS Encryption Overview', url: 'https://developer.mozilla.org/en-US/docs/Glossary/TLS' },
    { name: 'OpenSSL: X.509 Certificate Format Documentation', url: 'https://www.openssl.org/docs/man1.1.1/man1/x509.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Vad är en SSL/TLS certifikatgranskare och varför behöver du en?', level: 2 },
    {
      type: 'paragraph',
      html: 'I världen av webbutveckling och cybersäkerhet är <strong>SSL (Secure Sockets Layer) och TLS (Transport Layer Security)-certifikat</strong> grunden för förtroende. Ett digitalt certifikat är bara en fil som länkar en kryptografisk nyckel till en organisations eller domäns data. Dessa filer kommer dock ofta i binärt format (.der) eller Base64-kodat (.pem, .crt) som inte är läsbar vid första anblicken.',
    },
    {
      type: 'paragraph',
      html: 'Vår <strong>SSL/TLS certifikatgranskare</strong> gör att du kan "öppna" dessa filer visuellt och säkert. Till skillnad från verktyg som frågar en offentlig domän (som det berömda SSL Labs-testet) fungerar detta verktyg direkt med filen på din enhet. Detta är viktigt när du konfigurerar Nginx-, Apache-servrar eller laddar certifikat i AWS eller Google Cloud Load Balancer, och du behöver verifiera att filen i din hand är korrekt innan du laddar upp den.',
    },
    { type: 'title', text: 'Hur man inspekterar en .pem eller .crt fil steg för steg', level: 2 },
    {
      type: 'paragraph',
      html: 'Att analysera ett certifikat med vårt verktyg är extremt enkelt och kräver ingen konsol (OpenSSL) kunskap. Följ dessa steg:',
    },
    {
      type: 'list',
      items: [
        '<strong>Hitta din fil:</strong> Lokalisera filen med filnamnstillägg .pem, .crt, .cer eller .der på din dator.',
        '<strong>Dra och släpp:</strong> Bara dra filen över det prickade området ovan.',
        '<strong>Visa resultat:</strong> Omedelbar ser du vem som utfärdade certifikatet, för vem, när det går ut och dess fingeravtryck.',
      ],
    },
    {
      type: 'tip',
      title: 'Fullständig integritet',
      html: 'Den viktigaste delen av denna process är <strong>integritet</strong>. Filen laddas aldrig upp till våra servrar. All parsing av certifikatets ASN.1-struktur sker i din webbläsares RAM. Fullständig säkerhet för dina offentliga nycklar.',
    },
    { type: 'title', text: 'Nyckelfält du ser när du analyserar ditt certifikat', level: 2 },
    {
      type: 'paragraph',
      html: 'När du analyserar ditt certifikat bryter vi ned den viktigaste tekniska informationen så att du kan verifiera den på en gång:',
    },
    {
      type: 'list',
      items: [
        '<strong>Ämne:</strong> Visar ägarens data, inklusive vanligt namn (CN), organisation och plats.',
        '<strong>Utfärdare:</strong> Identifierar certifikatmyndigheten (CA) som signerade certifikatet (t.ex. Let\'s Encrypt, DigiCert).',
        '<strong>Giltighetsperiod:</strong> Visar det exakta utfärdandedatumet och det kritiska utgångsdatumet.',
        '<strong>Fingeravtryck:</strong> SHA-256 och SHA-1 fingeravtryck tjänar till att verifiera filens integritet.',
      ],
    },
    { type: 'title', text: 'Format som stöds: PEM, CRT, CER och DER', level: 2 },
    {
      type: 'paragraph',
      html: 'Det finns flera certifikatfilformat och ibland kan det vara förvirrande. Vårt verktyg är kompatibelt med de vanligaste:',
    },
    {
      type: 'list',
      items: [
        '<strong>PEM (.pem, .crt, .cer):</strong> Det vanligaste formatet på Linux och webbservrar. Börjar med raden <code>-----BEGIN CERTIFICATE-----</code>.',
        '<strong>DER (.der, .cer):</strong> Det binära formatet. Mycket använt i Windows-miljöer (Java, Active Directory) och är vanligtvis svårare att läsa utan specialiserade verktyg.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Även om din fil har ett ovanligt tillägg, om den interna strukturen är ett standard X.509-certifikat, kan vår <strong>node-forge</strong>-driven motor tolka det utan problem.',
    },
    { type: 'title', text: 'Varför använda det här verktyget istället för OpenSSL?', level: 2 },
    {
      type: 'paragraph',
      html: 'OpenSSL är kryptografins schweiziska armé kniv, men dess kommandon är svåra att komma ihåg. För att visa ett certifikat från konsolen måste du skriva:',
    },
    { type: 'code', text: 'openssl x509 -in certificado.crt -text -noout' },
    {
      type: 'paragraph',
      html: 'Vårt verktyg erbjuder tydliga fördelar för dagligt arbetsflöde:',
    },
    {
      type: 'list',
      items: [
        '<strong>Hastighet:</strong> Ingen anledning att öppna terminalen eller komma ihåg komplexa flaggor.',
        '<strong>Visuell:</strong> Vi formaterar fältnamn (Locality, Organization) för att vara läsbara och inte kortkoder som "L" eller "O".',
        '<strong>Giltighetsvarningar:</strong> Vi beräknar automatiskt om certifikatet är giltigt idag, vilket sparar dig från att manuellt kontrollera aktuellt datum mot certifikatdatum.',
        '<strong>Plattformsoberoende:</strong> Fungerar på vilket operativsystem som helst med en modern webbläsare, inga beroenden att installera.',
      ],
    },
    { type: 'title', text: 'Säkerhet och integritet: ditt certifikat lämnar aldrig din RAM', level: 2 },
    {
      type: 'paragraph',
      html: 'Som utvecklare vet jag hur kritisk denna typ av information är att hantera. Även om ett certifikat är tekniskt <strong>offentlig information</strong> (skickad till vilken webbläsare som helst som besöker din webbplats), är det fortfarande god sed att inte ladda upp filer till externa servrar i onödan.',
    },
    {
      type: 'paragraph',
      html: 'Det här verktyget använder JavaScript som körs strikt på klientsidan. När du drar filen läser vi innehållet och behandlar det lokalt. Du kan verifiera detta genom att koppla ifrån internet: verktyget kommer att fortsätta att fungera på exakt samma sätt.',
    },
    { type: 'title', text: 'Vanliga användningsfall för SSL granskaren', level: 2 },
    {
      type: 'paragraph',
      html: 'När skulle det vara användbart att bokmärka denna sida?',
    },
    {
      type: 'list',
      items: [
        '<strong>Serverfelsökning:</strong> När du installerar ett certifikat och webbplatsen fortsätter att ge fel, för att verifiera att du inte av misstag har laddat det gamla certifikatet.',
        '<strong>Kedjevarifiering:</strong> För att se om en fil innehåller slutcertifikatet eller ett mellanliggande certifikat.',
        '<strong>Tillgångsgranskning:</strong> För att kontrollera vilken certifikatmyndighet som användes i ett gammalt projekt.',
        '<strong>Kopieintegritet:</strong> Vid flytt av certifikat mellan servrar, för att säkerställa att filen inte är skadad genom att jämföra dess SHA-256-fingeravtryck.',
      ],
    },
  ],
};

