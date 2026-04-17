import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GeneradorSecurityTxtUI } from '../ui';

const slug = 'security-txt-skapare';
const title = 'Security.txt Generator RFC 9116';
const description = 'Skapa din professionella security.txt-fil för att underlätta rapportering av säkerhetsproblem och följa internationella webbs äkerhetsstandarder.';

const faqData = [
  {
    question: 'Vad är security.txt-filen?',
    answer: 'Det är en standard (RFC 9116) som gör det möjligt för webbplatser att definiera hur säkerhetsforskare bör kontakta dem för att på ansvarsfull väg rapportera säkerhetsproblem.',
  },
  {
    question: 'Var bör security.txt-filen placeras?',
    answer: 'Den rekommenderade standardplatsen är i mappen /.well-known/ på din domän, vilket resulterar i URL:en https://example.com/.well-known/security.txt.',
  },
  {
    question: 'Varför är utgångsdatum obligatoriskt?',
    answer: 'För att säkerställa att kontaktinformationen inte blir föråldrad. Om filen inte har ett giltigt utgångsdatum kanske forskare inte kan lita på att kommunikationskanalerna förblir aktiva.',
  },
  {
    question: 'Vilka fält krävs i en security.txt?',
    answer: 'Enligt RFC 9116 är de obligatoriska fälten "Contact" (med en e-postadress eller URL) och "Expires" (med ett framtida datum i ISO 8601-format).',
  },
];

const howToData = [
  { name: 'Fyll i fälten', text: 'Fyll i din e-postadress eller kontakt-URL och välj ett utgångsdatum.' },
  { name: 'Lägg till valfria fält', text: 'Inkludera ytterligare information som din PGP-nyckel, säkerhetsprincip eller jobbanslagstavla.' },
  { name: 'Ladda ned eller kopiera filen', text: 'Klicka på "Ladda ned .txt" eller kopiera innehållet och spara som security.txt.' },
  { name: 'Ladda upp till server', text: 'Placera filen i mappen /.well-known/ på din domän.' },
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

const ui: GeneradorSecurityTxtUI = {
  titleBasicFields: 'Obligatoriska fält',
  labelContact: 'Kontakt (e-post eller URL)',
  placeholderContact: 'mailto:security@example.com eller https://example.com/contact',
  contactTip: 'Adressen dit säkerhetsrapporter bör skickas.',
  labelExpires: 'Utgångsdatum',
  expiresTip: 'Ska inte överstiga ett år i framtiden.',
  titleOptionalFields: 'Valfria fält',
  labelEncryption: 'Offentlig nyckel',
  placeholderEncryption: 'https://example.com/pgp-key.txt',
  encryptionTip: 'Länk till din PGP-nyckel för krypterade rapporter.',
  labelPolicy: 'Säkerhetsprincip',
  placeholderPolicy: 'https://example.com/security/policy/',
  policyTip: 'Sida med information om hur du hanterar säkerhetsproblem.',
  labelAcknowledgments: 'Erkännanden',
  placeholderAcknowledgments: 'https://example.com/security/hall-of-fame/',
  acknowledgmentsTip: 'Sida som tackar säkerhetsforskare.',
  labelHiring: 'Jobbanslagstavla',
  placeholderHiring: 'https://example.com/jobs',
  hiringTip: 'Länk till säkerhetsjobbsöppningar.',
  resultTitle: 'Förhandsgransking(security.txt)',
  btnCopy: 'Kopiera kod',
  btnDownload: 'Ladda ned .txt',
  copiedMessage: 'Kopierat',
  generatingMessage: 'Genererar security.txt-fil...',
  comment: 'Genererad',
};

export const content: ToolLocaleContent<GeneradorSecurityTxtUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Tekniska resurser om Security.txt',
  bibliography: [
    { name: 'RFC 9116: A File Format to Aid in Security Vulnerability Disclosure', url: 'https://datatracker.ietf.org/doc/html/rfc9116' },
    { name: 'Security.txt Official Website', url: 'https://securitytxt.org/' },
    { name: 'OWASP: Vulnerability Disclosure Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Vad är en Security.txt-fil och varför behöver du generera en?', level: 2 },
    {
      type: 'paragraph',
      html: 'I dagens cybersäkerhetsmiljö är transparens och kommunikation essentiella. Om du är systemadministratör, webbutvecklare eller ägare av ett digitalt företag är du förmodligen redan bekant med textfiler som hjälper maskiner att förstå din webbplats, som <code>robots.txt</code> eller <code>ads.txt</code>. Det finns dock en mindre känd men livsviktig standard för din plattforms integritet: <strong>Security.txt</strong>, definierad av <strong>RFC 9116</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Syftet med <strong>att generera en security.txt-fil</strong> är att ge säkerhetsforskare ett standardiserat sätt att kontakta webbplatsadministratörer när de upptäcker en sårbarhet. Utan denna fil kanske en etisk hacker som hittar en brist i ditt system inte vet vem som ska rapporteras till, vilket ofta resulterar i att informationen går förlorad, publiceras utan meddelande eller utnyttjas av skadliga aktörer.',
    },
    { type: 'title', text: 'Hur du skapar och installerar Security.txt-filen enligt RFC 9116', level: 2 },
    {
      type: 'paragraph',
      html: 'Standarden för <strong>säkerhetsforskarens kontakt</strong> föreskriver att denna fil måste finnas på en specifik plats på servern: mappen <code>/.well-known/</code>. Den slutgiltiga vägen är därför vanligtvis <code>https://yourdomain.com/.well-known/security.txt</code>. Även om det är tillåtet att placera den i roten (<code>/security.txt</code>), föredras det första alternativet av automatiska skanningsverktyg.',
    },
    { type: 'title', text: 'Obligatoriska fält som du inte får missa', level: 3 },
    {
      type: 'paragraph',
      html: 'När du <strong>får din security.txt-kod</strong> måste du se till att den innehåller minst två kritiska element:',
    },
    {
      type: 'list',
      items: [
        '<strong>Contact:</strong> E-postadressen eller URL:en för ett formulär dit rapporter ska skickas. Måste börja med <code>mailto:</code> eller <code>https://</code>.',
        '<strong>Expires:</strong> Ett datum i ISO 8601-format som anger när filens information inte längre är giltig. Det rekommenderas att inte ställa in ett datum längre än ett år fram i tiden.',
      ],
    },
    { type: 'code', text: 'Contact: mailto:security@yourcompany.com\nExpires: 2025-12-31T23:59:59.000Z' },
    { type: 'title', text: 'Valfria fält för avancerad säkerhet', level: 3 },
    {
      type: 'paragraph',
      html: 'För webbplatser som söker mer robust <strong>webbplatsskydd</strong> erbjuder standarden ytterligare fält:',
    },
    {
      type: 'list',
      items: [
        '<strong>Encryption:</strong> En länk till din offentliga PGP-nyckel så att forskare kan skicka dig krypterad och säker information.',
        '<strong>Policy:</strong> En länk till din säkerhetsprincipsida där du förklarar processen för ansvarsfull avslöjande.',
        '<strong>Acknowledgments:</strong> En länk till din "Hall of Fame" eller värderingsväggen för forskare.',
        '<strong>Hiring:</strong> En länk till dina öppna cybersäkerhetsjobb.',
      ],
    },
    { type: 'title', text: 'Fördelar med att använda vår gratis Security.txt-generator', level: 2 },
    {
      type: 'paragraph',
      html: 'Många människor undrar <strong>hur man snabbt får en webbplats säkerhetskontakt</strong>. Genom att använda vårt verktyg säkerställer du strikt efterlevnad av RFC 9116-formatet utan att behöva läsa komplexa tekniska dokument.',
    },
    {
      type: 'paragraph',
      html: 'Att använda en generator undviker vanliga syntaxfel. Till exempel kan det att glömma <code>mailto:</code>-prefixet eller felaktigt formatera tidszonen i utgångsdatumet få forskarnas automatiserade verktyg att ignorera din fil.',
    },
    { type: 'title', text: 'Inverkan på SEO och webrykte', level: 3 },
    {
      type: 'paragraph',
      html: 'Även om filen <code>security.txt</code> inte är en direkt rankingfaktor i Google som sidshastighet eller HTTPS, har den en indirekt påverkan. En webbplats som hanterar sårbarheter väl undviker bullrig hacking (förfalskning, skräpinjektion) som förstör SEO på timmar. Dessutom ger många företagsplattformar för säkerhetsbedömning (som SecurityScorecard eller BitSight) extra poäng till domäner som implementerar denna standard.',
    },
    { type: 'title', text: 'Slutsats: Ett enkelt steg för ett säkrare webben', level: 2 },
    {
      type: 'paragraph',
      html: 'Sammanfattningsvis är <strong>nedladdning av security.txt</strong> och uppladdning av det till servern en av de snabbaste och mest effektiva säkerhetsmaintenanceuppgifterna du kan utföra idag. Du gör det lätt för "de goda killarna", avskräcker de nyfikna och visar världen att du tar användarprivacy och data på allvar.',
    },
    {
      type: 'paragraph',
      html: 'Vänta inte på ett säkerhetsbrott för att ångra att du inte tillhandahöll det. Använd vår <strong>online security.txt-generator</strong> nu och behåll kontrollen över ditt digitala ekosystem.',
    },
  ],
};

