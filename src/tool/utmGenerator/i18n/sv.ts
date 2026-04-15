import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UtmGeneratorUI } from '../ui';

const slug = 'utm-generator-sv';
const title = 'UTM parametergenerator för Google Analytics';
const description = 'Skapa exakta spårningslänkar för dina digitala marknadsföringskampanjer. Optimerad för Google Analytics och andra analysverktyg.';

const faqData = [
  {
    question: 'Är det dåligt för SEO att använda UTM-parametrar?',
    answer: 'Nej, så länge du använder kanoniska taggar (canonical tags). Sökmotorer förstår att UTM-parametrar är för analys och skapar inte duplicerat innehåll.',
  },
  {
    question: 'Bör jag använda UTM-parametrar för interna länkar?',
    answer: 'Nej, aldrig. UTM-taggar på interna länkar bryter användarsessionen i verktyg som Google Analytics, vilket förvränger dina trafikdata.',
  },
  {
    question: 'Skiljer Google Analytics på stora och små bokstäver i UTM?',
    answer: 'Ja. "google", "Google" och "GOOGLE" kommer att behandlas som olika källor. Var alltid konsekvent, använd helst endast små bokstäver.',
  },
];

const howToData = [
  { name: 'Ange URL', text: 'Ange den kompletta webbadressen till din webbplats, inklusive https://' },
  { name: 'Definiera källan', text: 'Ange var trafiken kommer ifrån (google, facebook, nyhetsbrev, etc.)' },
  { name: 'Välj medium', text: 'Välj typ av kanal (cpc, e-post, socialt, organiskt, etc.)' },
  { name: 'Namnge din kampanj', text: 'Tilldela ett identifierbart namn för att gruppera dina marknadsföringsinsatser' },
  { name: 'Kopiera och använd', text: 'Kopiera den genererade webbadressen och använd den i dina inlägg, annonser eller e-postsignaturer' },
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

const ui: UtmGeneratorUI = {
  labelUrl: 'Webbplats-URL (t.ex. https://example.com) *',
  labelSource: 'Kampanjkälla (t.ex. google, newsletter) *',
  labelMedium: 'Kampanjmedium (t.ex. cpc, email)',
  labelCampaign: 'Kampanjnamn (t.ex. sommar_erbjudande)',
  labelTerm: 'Kampanjterm (t.ex. köpa_skor)',
  labelContent: 'Kampanjinnehåll (t.ex. banner_top)',
  labelGenerated: 'Genererad URL:',
  btnCopy: 'Kopiera länk',
  btnCopied: 'Kopierad!',
  errorInvalid: 'Ange en giltig URL',
  errorInvalidUrl: 'Ogiltig URL',
};

export const content: ToolLocaleContent<UtmGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Referenser',
  bibliography: [
    { name: 'Samla in kampanjdata med anpassade webbadresser - Hjälp för Google Analytics (2024)', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: 'Bästa praxis för taggning av kampanj-URL - VWO Blog (2023)', url: 'https://vwo.com/blog/utm-tagging-best-practices/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'UTM-generator: Spårningsparametrar för Google Analytics', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>UTM</strong>-parametrar (Urchin Tracking Module) är textetiketter som läggs till i slutet av en URL för att spåra webbtrafik. Vår generator förenklar skapandet av spårbara länkar för dina digitala marknadsföringskampanjer.',
    },
    { type: 'title', text: 'De 5 pelarna i en spårbar URL', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Kampanjkälla:</strong> Identifierar sökmotorn, det sociala nätverket eller trafikkällan. Exempel: google, newsletter, facebook.',
        '<strong>Kampanjmedium:</strong> Avser marknadsföringskanalen. Exempel: cpc, email, social, banner, organic.',
        '<strong>Kampanjnamn:</strong> Det specifika namnet på din kampanj. Exempel: sommarerbjudande_2025, app_launch_v2.',
        '<strong>Kampanjterm:</strong> För betalda sökningar, de sökord du bjuder på. Exempel: köpa_sportskor.',
        '<strong>Kampanjinnehåll:</strong> För A/B-tester. Särskiljer liknande element inom en kampanj. Exempel: header_v1, sidebar_v2.',
      ],
    },
    { type: 'title', text: 'Bästa praxis för UTM-taggning', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Konsekvent skiftläge:</strong> Verktygen skiljer på "Google", "GOOGLE" och "google". Använd alltid små bokstäver för att undvika dubbletter.',
        '<strong>Undvik mellanslag:</strong> Mellanslag blir %20. Använd bindestreck (-) eller understreck (_) istället.',
        '<strong>Använd inte på interna länkar:</strong> UTM-spårning är uteslutande för extern trafik. På interna länkar bryter det sessionen och förstör viktiga mätvärden.',
        '<strong>Dokumentera dina taggar:</strong> För logg över alla kombinationer du använder för att förhindra inkonsekvenser.',
      ],
    },
  ],
};

