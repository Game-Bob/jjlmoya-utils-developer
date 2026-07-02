import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SerpPixelSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'serp-pixel-simulator-raknare';
const title = 'SERP Simulator och SEO Pixelräknare';
const description = 'Förhandsgranska Google-liknande söksnuttar i realtid, mät bredden på titel och metabeskrivning i pixlar och se exakt var din text kommer att kapas.';

const howTo = [
  {
    name: 'Ange title-taggen',
    text: 'Skriv eller klistra in sidtiteln du vill testa. SERP-förhandsgranskningen och pixelmätaren uppdateras vid varje tangenttryckning.',
  },
  {
    name: 'Lägg till den synliga URL:en',
    text: 'Använd en realistisk domän och sökväg så att snutten liknar resultatet en sökare skulle skanna.',
  },
  {
    name: 'Skriv metabeskrivningen',
    text: 'Lägg till beskrivningstexten och titta på pixelfältet. När den överskrider den rekommenderade visuella bredden kapar förhandsgranskningen den med ellipser.',
  },
  {
    name: 'Växla mellan dator och mobil',
    text: 'Jämför titelrenderingen med kortbredden för dator eller mobil innan du publicerar metadata.',
  },
];

const faq = [
  {
    question: 'Varför räkna pixlar istället för tecken för SEO-titlar?',
    answer: 'Googles sökresultatkort begränsas av visuell bredd. En titel med många smala bokstäver kan rymma fler tecken än en titel med breda bokstäver, versaler eller fetstilta glyfer. Pixelmätning ger en mer exakt förhandsvisning av det synliga resultatet.',
  },
  {
    question: 'Garanterar detta exakt hur Google kommer att kapa min snutt?',
    answer: 'Nej. Google kan skriva om titellänkar och snuttar, och renderingen kan variera beroende på sökfråga, enhet, språk och experiment. Verktyget är utformat som en praktisk visuell vägledning för att skriva metadata som är mindre troligt att kapas.',
  },
  {
    question: 'Vilka pixelgränser använder simulatorn?',
    answer: 'Standardgränsen för titel på dator är 580 px, på mobil 600 px och gränsen för metabeskrivning är 920 px. Dessa är skrivmål, inte officiella Google-gränser.',
  },
  {
    question: 'Varför lägger förhandsgranskningen till ellipser?',
    answer: 'När den uppmätta texten överskrider den tillgängliga pixelbredden kapar simulatorn strängen vid det sista passande tecknet och lägger till tre punkter, vilket matchar det praktiska beteende SEO-team behöver för att upptäcka meningsförlust.',
  },
];

const ui: SerpPixelSimulatorUI = {
  titleLabel: 'Title-tagg',
  titlePlaceholder: 'GameBob | Oberoende Utvecklingsstudio',
  urlLabel: 'Synlig URL',
  urlPlaceholder: 'https://www.gamebob.dev/sv/',
  descriptionLabel: 'Metabeskrivning',
  descriptionPlaceholder: 'Upptäck vår samling av verktyg och spel som är utformade för att lyfta ditt digitala arbetsflöde och underhållning.',
  deviceLabel: 'Förhandsgranskningsläge',
  desktopLabel: 'Dator',
  mobileLabel: 'Mobil',
  titlePixelsLabel: 'Titelbredd',
  descriptionPixelsLabel: 'Beskrivningsbredd',
  charactersLabel: 'tecken',
  previewLabel: 'Live-förhandsgranskning i Google-stil',
  tooLongLabel: 'För bred',
  goodLabel: 'Passar',
  emptyTitle: 'Din titel visas här',
  emptyDescription: 'Förhandsgranskningen av din metabeskrivning visas här medan du skriver.',
  defaultTitle: 'GameBob | Oberoende Utvecklingsstudio',
  defaultUrl: 'https://www.gamebob.dev/sv/',
  defaultDescription: 'Upptäck vår samling av verktyg och spel som är utformade för att lyfta ditt digitala arbetsflöde och underhållning.',
  fallbackUrl: 'exempel.se',
  fallbackFaviconText: 'G',
  pixelUnit: 'px',
  ellipsis: '...',
  fetchButtonLabel: 'Hämta',
  fetchLoadingLabel: 'Hämtar...',
  fetchSuccessLabel: 'Metadata laddades från URL:en.',
  fetchCorsError: 'Webbläsaren kunde inte läsa denna sida. Den kan vara blockerad av CORS, en omdirigering, blandat innehåll eller en nätverksregel. Du kan fortfarande klistra in eller redigera metadata manuellt.',
  fetchInvalidUrlError: 'Ange en giltig URL innan du hämtar metadata.',
  fetchNoMetadataError: 'Sidan hämtades, men ingen titel eller metabeskrivning hittades.',
  fetchGenericError: 'Metadata kunde inte hämtas från denna URL. Kontrollera adressen eller fyll i fälten manuellt.',
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<SerpPixelSimulatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Vanliga frågor om SERP simulatorn',
  faq,
  bibliographyTitle: 'Dokumentation om sökresultat',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Sluta gissa hur ditt Google-resultat kommer att se ut',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En title-tagg kan se perfekt ut i ett kalkylblad och ändå misslyckas i sökresultatet. Google reserverar inte utrymme efter teckenantal; det renderar text inuti ett visuellt kort. Det betyder att <strong>GameBob | Oberoende Utvecklingsstudio</strong> och en annan titel med samma antal tecken kan uppta mycket olika bredder beroende på bokstäverna, versaler, interpunktion och mellanrum.',
    },
    {
      type: 'tip',
      title: 'Regeln som verkligen hjälper',
      html: 'Skriv snutten så att det viktiga löftet överlever ellipsen. Placera sidtypen, sökintentionen och den starkaste anledningen att klicka före pixelgränsen. Varumärkesnamn är användbara, men de ska inte trycka ut huvudfördelen ur sikte.',
    },
    {
      type: 'title',
      text: 'Vad pixelräknaren mäter',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Element', 'Vad som spelar roll', 'Hur du använder resultatet'],
      rows: [
        ['Title-tagg', 'Renderad bredd i pixlar, inte antal tecken', 'Håll det primära nyckelordet och klicklöftet synliga före kapningen.'],
        ['Synlig URL', 'Visuellt förtroende och ämnestydehet', 'Använd en läsbar sökväg som förstärker vart resultatet leder.'],
        ['Metabeskrivning', 'Ett bredare snuttområde med frågeberoende beteende', 'Placera fördelen först eftersom Google kan förkorta eller skriva om den.'],
        ['Enhetsläge', 'Dator- och mobilkort kan kännas olika', 'Kontrollera båda innan du publicerar metadata för viktiga sidor.'],
      ],
    },
    {
      type: 'title',
      text: 'Varför teckengränser är en svag SEO-vana',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Traditionella råd som "håll titlar under 60 tecken" är bekväma, men döljer det verkliga problemet. Breda bokstäver som W och M, versaler, avgränsare, siffror och långa varumärkesnamn tar alla olika utrymme. Pixelmätning gör avvägningen omedelbart synlig: du kan se om en fras förtjänar sin plats eller stjäl utrymme från ett starkare budskap.',
    },
    {
      type: 'title',
      text: 'Ett praktiskt arbetsflöde för bättre snuttar',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Börja med intentionen:</strong> beskriv vad användaren får, inte bara vad sidan heter.',
        '<strong>Testa hela titeln:</strong> klistra in den i simulatorn och titta på fältet innan publicering.',
        '<strong>Ta bort svaga ord:</strong> om fältet blir rött, ta bort utfyllnadsord innan du kapar värdefulla termer.',
        '<strong>Kontrollera ellipsen:</strong> om den kapade förhandsgranskningen tappar mening, skriv om titeln istället för att acceptera kapningen.',
        '<strong>Upprepa för beskrivningen:</strong> se till att den första meningen bär värdeerbjudandet på egen hand.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'När fältet blir rött',
      html: 'Ett rött fält är inte en straffvarning. Det betyder att den aktuella texten är bredare än det valda visuella målet, så simulatorn kapar den med punkter. Behandla det som en redaktionell signal: avgör om de dolda orden är onödiga eller om snutten behöver en skarpare struktur.',
    },
    {
      type: 'title',
      text: 'Begränsningar, omskrivningar och realistiska förväntningar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ingen simulator kan garantera den exakta snutt Google kommer att visa. Google kan skriva om titellänkar, fetstilta söktermer, välja sidtext istället för metabeskrivningen eller visa olika snuttar för olika sökningar. Detta verktyg är bäst lämpat som ett snabbt skriv- och QA-steg: det fångar uppenbar visuell överskridning innan sidan når produktion.',
    },
    {
      type: 'summary',
      title: 'Bästa användning av denna SERP simulator',
      items: [
        'Använd pixelfältet för att fånga visuell överskridning innan du publicerar metadata.',
        'Håll den huvudsakliga sökintentionen och klicklöftet synliga före någon ellips.',
        'Hämta metadata från URL:er som tillåter CORS och redigera sedan resultatet manuellt vid behov.',
        'Betrakta förhandsgranskningen som en skrivguide, eftersom Google fortfarande kan skriva om snuttar per sökfråga.',
      ],
    },
  ],
};
