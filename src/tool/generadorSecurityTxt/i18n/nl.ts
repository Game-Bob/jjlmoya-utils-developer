import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GeneradorSecurityTxtUI } from '../ui';

const slug = 'security-txt-maker';
const title = 'Security.txt Generator RFC 9116';
const description = 'Maak uw professionele security.txt-bestand om kwetsbaarheidsrapportage te vergemakkelijken en internationale webveiligheidsnormen na te leven.';

const faqData = [
  {
    question: 'Wat is het security.txt-bestand?',
    answer: 'Het is een standaard (RFC 9116) waarmee websites kunnen bepalen hoe veiligheidsonderzoekers hen kunnen bereiken om kwetsbaarheden verantwoord te melden.',
  },
  {
    question: 'Waar moet het security.txt-bestand worden geplaatst?',
    answer: 'De aanbevolen standaardlocatie is in de map /.well-known/ van uw domein, wat resulteert in de URL https://example.com/.well-known/security.txt.',
  },
  {
    question: 'Waarom is de vervaldatum verplicht?',
    answer: 'Om ervoor te zorgen dat contactgegevens niet verouderd raken. Als het bestand geen geldige vervaldatum heeft, mogen onderzoekers niet vertrouwen dat communicatiekanalen actief blijven.',
  },
  {
    question: 'Welke velden zijn vereist in een security.txt?',
    answer: 'Volgens RFC 9116 zijn de vereiste velden "Contact" (met een e-mailadres of URL) en "Expires" (met een toekomstige datum in ISO 8601-indeling).',
  },
];

const howToData = [
  { name: 'Vul de velden in', text: 'Vul uw e-mailadres of contact-URL in en selecteer een vervaldatum.' },
  { name: 'Voeg optionele velden toe', text: 'Voeg aanvullende informatie toe, zoals uw PGP-sleutel, beveiligingsbeleid of wervingsbord.' },
  { name: 'Download of kopieer het bestand', text: 'Klik op "Download .txt" of kopieer de inhoud en sla deze op als security.txt.' },
  { name: 'Upload naar server', text: 'Plaats het bestand in de map /.well-known/ van uw domein.' },
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

const ui: GeneradorSecurityTxtUI = {
  titleBasicFields: 'Vereiste velden',
  labelContact: 'Contact (e-mailadres of URL)',
  placeholderContact: 'mailto:security@example.com of https://example.com/contact',
  contactTip: 'Adres waar kwetsbaarheidsrapporten naar moeten worden gestuurd.',
  labelExpires: 'Vervaldatum',
  expiresTip: 'Mag niet meer dan een jaar in de toekomst liggen.',
  titleOptionalFields: 'Optionele velden',
  labelEncryption: 'Openbare sleutel',
  placeholderEncryption: 'https://example.com/pgp-key.txt',
  encryptionTip: 'Link naar uw PGP-sleutel voor versleutelde rapporten.',
  labelPolicy: 'Beveiligingsbeleid',
  placeholderPolicy: 'https://example.com/security/policy/',
  policyTip: 'Pagina met details over hoe u kwetsbaarheden afhandelt.',
  labelAcknowledgments: 'Erkenningen',
  placeholderAcknowledgments: 'https://example.com/security/hall-of-fame/',
  acknowledgmentsTip: 'Pagina ter dankzegging aan veiligheidsonderzoekers.',
  labelHiring: 'Wervingsbord',
  placeholderHiring: 'https://example.com/jobs',
  hiringTip: 'Link naar openstaande beveiligingsfuncties.',
  resultTitle: 'Voorbeeld(security.txt)',
  btnCopy: 'Code kopiëren',
  btnDownload: 'Download .txt',
  copiedMessage: 'Gekopieerd',
  generatingMessage: 'security.txt-bestand genereren...',
  comment: 'Gegenereerd',
};

export const content: ToolLocaleContent<GeneradorSecurityTxtUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Veelgestelde vragen',
  faq: faqData,
  bibliographyTitle: 'Technische bronnen over Security.txt',
  bibliography: [
    { name: 'RFC 9116: A File Format to Aid in Security Vulnerability Disclosure', url: 'https://datatracker.ietf.org/doc/html/rfc9116' },
    { name: 'Security.txt Official Website', url: 'https://securitytxt.org/' },
    { name: 'OWASP: Vulnerability Disclosure Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Wat is een Security.txt-bestand en waarom moet je er een genereren?', level: 2 },
    {
      type: 'paragraph',
      html: 'In het huidige cybersecurity-landschap zijn transparantie en communicatie essentieel. Als u een systeembeheerder, webontwikkelaar of eigenaar van een digitaal bedrijf bent, bent u waarschijnlijk al bekend met tekstbestanden die machines helpen uw website te begrijpen, zoals <code>robots.txt</code> of <code>ads.txt</code>. Er is echter een minder bekende maar vitale standaard voor de integriteit van uw platform: <strong>Security.txt</strong>, gedefinieerd door <strong>RFC 9116</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Het doel van <strong>het genereren van een security.txt-bestand</strong> is veiligheidsonderzoekers een gestandaardiseerde manier te bieden om uw websiteadministratoren te bereiken wanneer zij een kwetsbaarheid ontdekken. Zonder dit bestand weet een ethische hacker die een fout in uw systeem vindt mogelijk niet aan wie deze moet worden gemeld, wat er vaak toe leidt dat de informatie verloren gaat, zonder kennisgeving wordt gepubliceerd, of door kwaadwillenden wordt misbruikt.',
    },
    { type: 'title', text: 'Hoe het Security.txt-bestand according RFC 9116 maken en installeren', level: 2 },
    {
      type: 'paragraph',
      html: 'De <strong>veiligheidsonderzoekercontactstandaard</strong> bepaalt dat dit bestand op een specifieke locatie op uw server moet staan: de map <code>/.well-known/</code>. Het uiteindelijke pad is daarom meestal <code>https://yourdomain.com/.well-known/security.txt</code>. Hoewel het ook mag in de root (<code>/security.txt</code>) staat, verdient de eerste optie de voorkeur van automatische scanningtools.',
    },
    { type: 'title', text: 'Vereiste velden die u niet mag missen', level: 3 },
    {
      type: 'paragraph',
      html: 'Wanneer u <strong>uw security.txt-code verkrijgt</strong>, moet u ervoor zorgen dat deze minstens twee kritieke elementen bevat:',
    },
    {
      type: 'list',
      items: [
        '<strong>Contact:</strong> Het e-mailadres of de URL van een formulier waarheen rapporten moeten worden gestuurd. Moet beginnen met <code>mailto:</code> of <code>https://</code>.',
        '<strong>Expires:</strong> Een datum in ISO 8601-indeling die aangeeft wanneer de informatie van het bestand niet meer geldig is. Het wordt aanbevolen om een datum niet verder dan een jaar in te stellen.',
      ],
    },
    { type: 'code', text: 'Contact: mailto:security@yourcompany.com\nExpires: 2025-12-31T23:59:59.000Z' },
    { type: 'title', text: 'Optionele velden voor geavanceerde beveiliging', level: 3 },
    {
      type: 'paragraph',
      html: 'Voor sites die robuustere <strong>websitebescherming</strong> zoeken, biedt de standaard aanvullende velden:',
    },
    {
      type: 'list',
      items: [
        '<strong>Encryption:</strong> Een link naar uw PGP-sleutel zodat onderzoekers u versleutelde en veilige informatie kunnen sturen.',
        '<strong>Policy:</strong> Een link naar uw beveiligingsbeleidspage waar u het proces van verantwoorde openbaarmaking uitlegt.',
        '<strong>Acknowledgments:</strong> Een link naar uw "Hall of Fame" of waarderingswand voor onderzoekers.',
        '<strong>Hiring:</strong> Een link naar uw openstaande cybersecurity-functies.',
      ],
    },
    { type: 'title', text: 'Voordelen van het gebruik van onze gratis Security.txt-generator', level: 2 },
    {
      type: 'paragraph',
      html: 'Veel mensen vragen zich af <strong>hoe snel het beveiligingscontact van een website kan worden verkregen</strong>. Door onze tool te gebruiken, zorgt u voor strikte naleving van RFC 9116-indeling zonder dat u complexe technische documenten hoeft te lezen.',
    },
    {
      type: 'paragraph',
      html: 'Het gebruik van een generator voorkomt veelvoorkomende syntaxisfouten. Bijvoorbeeld het vergeten van het <code>mailto:</code>-voorvoegsel of het onjuist opmaken van de tijdzone in de vervaldatum kan ervoor zorgen dat de geautomatiseerde tools van onderzoekers uw bestand negeren.',
    },
    { type: 'title', text: 'Impact op SEO en webreputatie', level: 3 },
    {
      type: 'paragraph',
      html: 'Hoewel het <code>security.txt</code>-bestand niet rechtstreeks een rangeerfactor is in Google, zoals paginasnelheid of HTTPS, heeft het wel een indirecte impact. Een website die kwetsbaarheden goed beheert, voorkomt lawaaierige hacks (vervalsing, spam-injecties) die SEO in uren vernietigen. Bovendien geven veel zakelijke beveiligingsbeoordelingsplatformen (zoals SecurityScorecard of BitSight) extra punten aan domeinen die deze standaard implementeren.',
    },
    { type: 'title', text: 'Conclusie: Een eenvoudige stap voor een veiliger web', level: 2 },
    {
      type: 'paragraph',
      html: 'Samenvattend is <strong>security.txt downloaden</strong> en uploaden naar uw server een van de snelste en meest effectieve beveiligingsonderhoudstaken die u vandaag kunt uitvoeren. U maakt het de "goede jongens" gemakkelijk, ontmoedigt de nieuwsgierigen, en laat de wereld zien dat u gebruikersprivacy en gegevens serieus neemt.',
    },
    {
      type: 'paragraph',
      html: 'Wacht niet tot een beveiligingsinbreuk dat u niet vertrouwde. Gebruik nu onze <strong>online security.txt-generator</strong> en behoud controle over uw digitale ecosysteem.',
    },
  ],
};

