import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CalculadoraTiempoDatosUI } from '../ui';

const slug = 'data-tids-kalkylator-webbhastighet-paverkan';
const title = 'Datatidskalkylator: Webbhastighetens påverkan';
const description = 'Upptäck hur mycket livstid dina användare förlorar på att vänta på att din webbplats ska laddas via 3G-, 4G- och 5G-anslutningar. Beräkna den faktiska påverkan av din webbplats vikt.';

const faqData = [
  {
    question: 'Varför är det viktigt att veta laddningstiden för min webbplats?',
    answer: 'Eftersom det direkt påverkar användarupplevelsen, SEO och konverteringar. Google har dokumenterat att varje sekunds fördröjning minskar konverteringarna med 7 %. Dessutom lämnar 53 % av mobilbesökarna en sida som tar mer än 3 sekunder att ladda.',
  },
  {
    question: 'Vad representerar dessa små procentsatser av livstidsförlust?',
    answer: 'De representerar den procentuella andelen av en persons totala livstid (cirka 80 år eller 2,5 miljarder sekunder) som spenderas på att vänta på att din sida ska ladda. Även om de är små individuellt, representerar de enorma mängder bortkastad mänsklig tid när de multipliceras med miljontals användare.',
  },
  {
    question: 'Vad är den genomsnittliga anslutningshastigheten i världen?',
    answer: '4G är standard i utvecklade länder. Miljontals användare i utvecklingsländer är dock fortfarande beroende av 3G. Det är därför det är avgörande att optimera din webbplats för alla anslutningshastigheter.',
  },
  {
    question: 'Hur mycket bör min webbplats väga?',
    answer: 'Google rekommenderar att startsidan laddas på mindre än 3 sekunder via en typisk 4G-anslutning. För detta bör en webbplats helst väga mellan 1 och 2 MB. Det globala genomsnittet ligger dock nära 2–3 MB.',
  },
  {
    question: 'Hur kan jag minska min webbplats vikt?',
    answer: 'Huvudstrategier: optimera bilder (50–80 % av vikten), minifiera CSS och JavaScript, använda lazy loading, implementera webbläsarcache och använda en CDN. Bildoptimering är vanligtvis den mest effektiva faktorn.',
  },
  {
    question: 'Påverkar laddningshastigheten Google-rankningen?',
    answer: 'Ja, absolut. Google betraktar Core Web Vitals som viktiga rankningsfaktorer. En långsammare webbplats kommer att rankas sämre än en snabbare, även med liknande innehåll.',
  },
];

const howToData = [
  { name: 'Ange din webbplats vikt', text: 'Använd webbläsarens utvecklarverktyg eller WebPageTest för att hitta din sidas vikt. Ange det värdet i MB.' },
  { name: 'Observera laddningstider', text: 'Kalkylatorn visar hur många sekunder det tar för din webbplats att ladda via 3G, 4G och 5G. Tiderna i verkligheten är vanligtvis högre.' },
  { name: 'Förstå livstidspåverkan', text: 'Procentandelen ”livstid” visar hur mycket av någons liv som spenderas på att vänta. Använd detta som motivation för att optimera.' },
  { name: 'Optimera och beräkna om', text: 'Mät igen och beräkna om efter optimeringen. Se hur små förbättringar har stor betydelse.' },
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

const ui: CalculadoraTiempoDatosUI = {
  headerTitle: 'Förlorad tid i nätverk',
  labelWebSize: 'Webbplatsvikt (MB)',
  unit: 'MB',
  presetsLabel: 'REALISTISKA EXEMPEL',
  labelSpeed: 'Anslutningshastighet',
  speedLabel3g: '3G',
  speedValue3g: '0,4 Mbps',
  speedLabel4g: '4G/LTE',
  speedValue4g: '10 Mbps',
  speedLabel5g: '5G',
  speedValue5g: '100+ Mbps',
  labelTimes: 'Hur många gånger per dag?',
  resultTitle: 'Resultat',
  resultSingleLoad: 'Enskild laddning',
  resultDailyTotal: 'Daglig total',
  resultTimePerYear: 'väntetid per år',
  resultLifeYears: 'under din livstid',
  resultMessage: 'Du har förlorat ungefär 1 år av ditt liv',
  copyMessage: 'Kopierat',
  preset3g: '3G',
  preset4g: '4G',
  preset5g: '5G',
};

export const content: ToolLocaleContent<CalculadoraTiempoDatosUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Tekniska resurser för webboptimering',
  bibliography: [
    { name: 'Google PageSpeed Insights', url: 'https://pagespeed.web.dev/' },
    { name: 'WebPageTest - Analysera webbplatsens hastighet', url: 'https://www.webpagetest.org/' },
    { name: 'Web.dev - Core Web Vitals', url: 'https://web.dev/vitals/' },
    { name: 'MDN - Webbprestanda', url: 'https://developer.mozilla.org/en-US/docs/Web/Performance' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Varför laddningshastigheten är kritisk', level: 2 },
    {
      type: 'paragraph',
      html: 'I dagens digitala tidsålder är laddningshastigheten på en webbplats inte en lyx, utan en nödvändighet. Varje millisekund räknas när man ska behålla användare, förbättra sökrankningen och maximera konverteringarna. Moderna användare förväntar sig att sidor laddas på mindre än 3 sekunder.',
    },
    { type: 'title', text: 'Påverkan på användarupplevelsen', level: 3 },
    {
      type: 'paragraph',
      html: '53 % av mobilbesökarna lämnar en sida om det tar mer än 3 sekunder att ladda. Konverteringsgraden sjunker med 7 % för varje extra sekunds fördröjning.',
    },
    { type: 'title', text: 'Förståelse för anslutningshastigheter', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>3G:</strong> 0,4 Mbps - Vanligt i landsbygdsområden och utvecklingsländer',
        '<strong>4G/LTE:</strong> 10 Mbps - Standard i utvecklade länder',
        '<strong>5G:</strong> 100+ Mbps - Utökas gradvis, fortfarande begränsat',
      ],
    },
    { type: 'title', text: 'Strategier för att minska webbplatsens vikt', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Bildoptimering:</strong> Representerar 50–80 % av vikten. Minska med 40–60 % med verktyg som TinyPNG.',
        '<strong>Minifiering:</strong> Ta bort onödig kod från CSS och JavaScript. Spara 30–50 %.',
        '<strong>Lazy Loading:</strong> Ladda bilder först när användaren scrollar till dem.',
        '<strong>Webbläsarcache:</strong> Cachelagra statiska filer i användarnas webbläsare.',
        '<strong>CDN:</strong> Leverera innehåll från servrar som ligger geografiskt nära.',
      ],
    },
    { type: 'title', text: 'Slutsats: Varje sekund räknas', level: 2 },
    {
      type: 'paragraph',
      html: 'Din webbplats är ofta det första intrycket användarna får av ditt varumärke. En långsam webbplats frustrerar användare och leder till förlorade affärer. En snabb, responsiv webbplats skapar en positiv upplevelse och förbättrar alla dina mätvärden.',
    },
  ],
};
