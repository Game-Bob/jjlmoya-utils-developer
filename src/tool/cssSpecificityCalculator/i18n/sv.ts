import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssSpecificityCalculatorUI } from '../ui';

const slug = 'css-specificitetskalkulator';
const title = 'CSS Specificitetskalkulator Online. Selectorviktvisualiserare';
const description =
  'Beräkna specificiteten och exaktvikten för alla CSS-selektorer. Visuellt verktyg för att förstå vilken CSS-regel som vinner kaskaden och undvika att använda !important.';

const faqData = [
  {
    question: 'Vad är CSS-specificitet?',
    answer:
      'Specificitet är den algoritm som webbläsare använder för att bestämma vilken CSS-regel som gäller för ett element när flera regler konkurrerar. Den representeras som ett tresiffrigt värde (A, B, C) som indikerar ID:n, klasser/attribut/pseudoklasser och element/pseudoelement respektive.',
  },
  {
    question: 'Kan en klass någonsin slå ett ID i specificitet?',
    answer:
      'Inte direkt. Ett ID (1,0,0) slår alltid ett vilket antal klasser som helst (0,N,0) eftersom specificitet inte har överföring mellan kolumner. Hundra klasser (0,100,0) kommer aldrig att slå ett enda ID (1,0,0).',
  },
  {
    question: 'Vad händer när två selektorer har samma specificitet?',
    answer:
      'När två selektorer har exakt samma vikt vinner den som deklarerats sist i CSS-filen. Detta kallas naturlig kaskadordning. Denna kalkylator varnar visuellt dig när en oavgjord händelse inträffar.',
  },
  {
    question: 'Varför anses det vara dålig praxis att använda !important?',
    answer:
      'Direktivet !important bryter den naturliga CSS-kaskaden genom att tvinga en deklaration över någon annan regel. Detta skapar konflikter som är svåra att felsöka i stora projekt. Metodologier som BEM förespråkar att hålla specificiteten platt för att undvika att någonsin behöva !important.',
  },
];

const howToData = [
  {
    name: 'Ange den första väljaren',
    text: 'Skriv väljare A i textfältet till vänster, till exempel: #header .nav-item > a. Räknarna för ID:n, klasser och element uppdateras omedelbar.',
  },
  {
    name: 'Ange den andra väljaren',
    text: 'Skriv väljare B i textfältet till höger, till exempel: ul li.active a:hover. Se hur vikterna ändras i realtid.',
  },
  {
    name: 'Läs resultatet',
    text: 'Kalkylatorn markerar vinnarblocken med en grön banderoll. Om både är oavgjort visas ett oavgjort meddelande som förklarar kaskadordningen som tiebreaker.',
  },
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
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
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

const ui: CssSpecificityCalculatorUI = {
  labelA: 'Väljare A',
  labelB: 'Väljare B',
  placeholderA: 't.ex. #header .nav-item > a',
  placeholderB: 't.ex. ul li.active a:hover',
  cardIds: 'ID',
  cardClasses: 'Klasser / Pseudoklasser',
  cardElements: 'Element',
  bannerWinner: 'Denna väljare vinner!',
  msgTie: 'Båda väljarna har samma vikt. Om de konkurrerar om samma element vinner den som skrevs <strong>sist</strong> i CSS.',
};

export const content: ToolLocaleContent<CssSpecificityCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Vanliga Frågor',
  faq: faqData,
  bibliographyTitle: 'Referenser och Dokumentation',
  bibliography: [
    {
      name: 'MDN Web Docs: CSS Specificity',
      url: 'https://developer.mozilla.org/en/docs/Web/CSS/Specificity',
    },
    {
      name: 'W3C: Selectors Level 3 - Specificity',
      url: 'https://www.w3.org/TR/selectors-3/#specificity',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Vad är CSS-specificitet?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'CSS-specificitet är den algoritm som webbläsare använder för att avgöra vilka egenskapsvärden som ska tillämpas på ett visst element. Det är i huvudsak ett matematiskt värde som berättar för webbläsaren "hur specifik" en regel är.',
    },
    {
      type: 'paragraph',
      html: 'Om två regler har olika specificitetsnivåer vinner den med högre vikt, oavsett i vilken ordning de skrevs. Om båda har samma vikt vinner den som senast deklarerats i källkoden.',
    },
    {
      type: 'title',
      text: 'Hur man beräknar CSS-specificitet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Specificitet beräknas baserat på tre kategorier som bildar en trestegs vikt, ofta uttryckt som <strong>(A, B, C)</strong>:',
    },
    {
      type: 'list',
      items: [
        '<strong>Kolumn A (ID):</strong> Räknar antalet unika identifierare. Exempel: <code>#header</code> räknas som 1 i kolumn A.',
        '<strong>Kolumn B (Klasser, attribut och pseudoklasser):</strong> Räknar alla klasser (<code>.button</code>), attribut (<code>[type="text"]</code>) och pseudoklasser (<code>:hover</code>).',
        '<strong>Kolumn C (Element och pseudoelement):</strong> Räknar alla HTML-element (<code>div</code>, <code>h1</code>) och pseudoelement (<code>::before</code>).',
      ],
    },
    {
      type: 'title',
      text: 'Gyllene regeln: Ingen överföring mellan kolumner',
      level: 3,
    },
    {
      type: 'tip',
      html: 'En regel med specificitet (0,50,0) kommer <strong>aldrig</strong> att vara mer specifik än en regel (1,0,0). <strong>Ett enda ID slår oändliga klasser.</strong> Kolumner flödar aldrig över i varandra.',
    },
    {
      type: 'title',
      text: 'Problemet med !important och BEM-arkitektur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Direktivet <code>!important</code> är ett undantag från specificitetsreglerna. Vid användning åsidosätter den deklarationen automatiskt någon annan. Det anses vara dålig praxis eftersom det förstör den naturliga kaskaden.',
    },
    {
      type: 'paragraph',
      html: 'För att undvika specificitétskrig i stora projekt förespråkar metodologier som <strong>BEM</strong> användning av endast enkla klassväljare, vilket artificiellt håller specificiteten platt på (0,1,0).',
    },
  ],
};
