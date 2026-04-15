import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssSpecificityCalculatorUI } from '../ui';

const slug = 'css-specificiteit-calculator';
const title = 'CSS Specificiteitsrekenmachine Online. Selectorgewicht Visualiseren';
const description =
  'Bereken de specificiteit en het exacte gewicht van elk CSS-selector. Een visuele tool om te begrijpen welke CSS-regel de cascade wint en het gebruik van !important te vermijden.';

const faqData = [
  {
    question: 'Wat is CSS-specificiteit?',
    answer:
      'Specificiteit is het algoritme dat browsers gebruiken om te beslissen welke CSS-regel op een element wordt toegepast wanneer meerdere regels concurreren. Het wordt weergegeven als een driekolomsscore (A, B, C) die respectievelijk ID\'s, klassen/attributen/pseudo-klassen en elementen/pseudo-elementen aangeeft.',
  },
  {
    question: 'Kan een klasse ooit een ID verslaan in specificiteit?',
    answer:
      'Niet direct. Een ID (1,0,0) verslaat altijd elk aantal klassen (0,N,0) omdat specificiteit geen doorloop heeft tussen kolommen. Honderd klassen (0,100,0) zullen nooit één enkel ID (1,0,0) verslaan.',
  },
  {
    question: 'Wat gebeurt er als twee selectors dezelfde specificiteit hebben?',
    answer:
      'Wanneer twee selectors exact hetzelfde gewicht hebben, wint degene die het laatst in het CSS-bestand is gedeclareerd. Dit staat bekend als de natuurlijke cascadevolgorde. Deze rekenmachine waarschuwt je visueel wanneer er een gelijkspel optreedt.',
  },
  {
    question: 'Waarom wordt het gebruik van !important als slechte praktijk beschouwd?',
    answer:
      'De !important-richtlijn doorbreekt de natuurlijke CSS-cascade door een declaratie te forceren boven elke andere regel. Dit leidt tot conflicten die moeilijk te debuggen zijn in grote projecten. Methodologieën zoals BEM pleiten voor het vlak houden van specificiteit om !important nooit nodig te hebben.',
  },
];

const howToData = [
  {
    name: 'Voer de eerste selector in',
    text: 'Typ selector A in het linker tekstveld, bijvoorbeeld: #header .nav-item > a. De tellers voor ID\'s, Klassen en Elementen worden direct bijgewerkt.',
  },
  {
    name: 'Voer de tweede selector in',
    text: 'Typ selector B in het rechter tekstveld, bijvoorbeeld: ul li.active a:hover. Bekijk hoe de gewichten in realtime veranderen.',
  },
  {
    name: 'Lees het resultaat',
    text: 'De rekenmachine markeert het winnende selectorblok met een groen banner. Als beide gelijkspelen, verschijnt er een bericht dat de cascadevolgorde als beslisser uitlegt.',
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
  inLanguage: 'nl',
};

const ui: CssSpecificityCalculatorUI = {
  labelA: 'Selector A',
  labelB: 'Selector B',
  placeholderA: 'bijv. #header .nav-item > a',
  placeholderB: 'bijv. ul li.active a:hover',
  cardIds: 'ID\'s',
  cardClasses: 'Klassen / Pseudo\'s',
  cardElements: 'Elementen',
  bannerWinner: 'Deze selector wint!',
  msgTie: 'Beide selectors hebben hetzelfde gewicht. Als ze concurreren voor hetzelfde element, wint degene die <strong>als laatste</strong> in de CSS staat.',
};

export const content: ToolLocaleContent<CssSpecificityCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Referenties en Documentatie',
  bibliography: [
    {
      name: 'MDN Web Docs: CSS-specificiteit',
      url: 'https://developer.mozilla.org/nl/docs/Web/CSS/Specificity',
    },
    {
      name: 'W3C: Selectors Level 3 - Specificiteit',
      url: 'https://www.w3.org/TR/selectors-3/#specificity',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Wat is CSS-specificiteit?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'CSS-specificiteit is het algoritme waarmee browsers bepalen welke eigenschapswaarden op een bepaald element worden toegepast. Het is in feite een wiskundig getal dat de browser vertelt hoe "specifiek" een regel is.',
    },
    {
      type: 'paragraph',
      html: 'Als twee regels verschillende specificiteitsniveaus hebben, wint degene met het hoogste gewicht, ongeacht de volgorde waarin ze zijn geschreven. Als beide hetzelfde gewicht hebben, wint de laatste die in de broncode is gedeclareerd.',
    },
    {
      type: 'title',
      text: 'CSS-specificiteit berekenen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Specificiteit wordt berekend op basis van drie categorieën die samen een driekolomsgewicht vormen, vaak uitgedrukt als <strong>(A, B, C)</strong>:',
    },
    {
      type: 'list',
      items: [
        '<strong>Kolom A (ID\'s):</strong> Telt het aantal unieke identificatoren. Voorbeeld: <code>#header</code> telt als 1 in kolom A.',
        '<strong>Kolom B (Klassen, Attributen en Pseudo-klassen):</strong> Telt alle klassen (<code>.button</code>), attributen (<code>[type="text"]</code>) en pseudo-klassen (<code>:hover</code>).',
        '<strong>Kolom C (Elementen en Pseudo-elementen):</strong> Telt alle HTML-elementen (<code>div</code>, <code>h1</code>) en pseudo-elementen (<code>::before</code>).',
      ],
    },
    {
      type: 'title',
      text: 'De gouden regel: geen numerieke doorloop',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Een regel met specificiteit (0,50,0) zal <strong>nooit</strong> specifieker zijn dan een regel (1,0,0). <strong>Één enkel ID verslaat oneindig veel klassen.</strong> Kolommen lopen nooit in elkaar over.',
    },
    {
      type: 'title',
      text: 'Het probleem met !important en BEM-architectuur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De <code>!important</code>-richtlijn is een uitzondering op de specificiteitsregels. Wanneer gebruikt, overschrijft die declaratie automatisch alles. Het wordt als slechte praktijk beschouwd omdat het de natuurlijke cascade vernietigt.',
    },
    {
      type: 'paragraph',
      html: 'Om specificiteitsoorlogen in grote projecten te vermijden, pleiten methodologieën zoals <strong>BEM</strong> voor het gebruik van uitsluitend één niveau van klasse-selectors, waardoor de specificiteit kunstmatig vlak op (0,1,0) wordt gehouden.',
    },
  ],
};
