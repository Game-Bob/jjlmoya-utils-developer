import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CalculadoraTiempoDatosUI } from '../ui';

const slug = 'data-tijd-calculator-web-snelheid-impact';
const title = 'Data Tijd Calculator: Impact van Web Snelheid';
const description = 'Ontdek hoeveel levensduur uw gebruikers verliezen door te wachten tot uw website is geladen op 3G, 4G en 5G verbindingen. Bereken de reële impact van het gewicht van uw site.';

const faqData = [
  {
    question: 'Waarom is het belangrijk om de laadtijd van mijn website te weten?',
    answer: 'Omdat het direct invloed heeft op de gebruikerservaring, SEO en conversies. Google heeft gedocumenteerd dat elke seconde vertraging de conversies met 7% vermindert. Bovendien verlaat 53% van de mobiele bezoekers een pagina die meer dan 3 seconden nodig heeft om te laden.',
  },
  {
    question: 'Wat betekenen die kleine percentages levensverlies?',
    answer: 'Ze vertegenwoordigen het percentage van de totale levensduur van een persoon (ongeveer 80 jaar of 2,5 miljard seconden) die wordt doorgebracht met wachten op het laden van uw pagina. Hoewel ze individueel klein zijn, vertegenwoordigen ze vermenigvuldigd met miljoenen gebruikers enorme hoeveelheden verspilde menselijke tijd.',
  },
  {
    question: 'Wat is de gemiddelde verbindingssnelheid wereldwijd?',
    answer: '4G is de standaard in ontwikkelde landen. Miljoenen gebruikers in ontwikkelingslanden zijn echter nog steeds afhankelijk van 3G. Daarom is het cruciaal om uw site te optimaliseren voor alle verbindingssnelheden.',
  },
  {
    question: 'Hoe zwaar zou mijn website moeten zijn?',
    answer: 'Google adviseert dat de homepage in minder dan 3 seconden laadt op een typische 4G-verbinding. Hiervoor zou een site idealiter tussen de 1 en 2 MB moeten wegen. Het wereldwijde gemiddelde ligt echter rond de 2-3 MB.',
  },
  {
    question: 'Hoe kan ik het gewicht van mijn site verminderen?',
    answer: 'Belangrijkste strategieën: afbeeldingen optimaliseren (50-80% van het gewicht), CSS en JavaScript minificeren, lazy loading gebruiken, browsercache implementeren en een CDN gebruiken. Afbeelding-optimalisatie is meestal de meest impactvolle factor.',
  },
  {
    question: 'Heeft de laadsnelheid invloed op de Google-ranking?',
    answer: 'Ja, absoluut. Google beschouwt Core Web Vitals als belangrijke rankingfactoren. Een tragere site zal slechter ranken dan een snellere, zelfs bij vergelijkbare inhoud.',
  },
];

const howToData = [
  { name: 'Voer uw site-gewicht in', text: 'Gebruik de ontwikkeltools van de browser of WebPageTest om het gewicht van uw pagina te achterhalen. Voer die waarde in MB in.' },
  { name: 'Observeer laadtijden', text: 'De calculator laat zien hoeveel seconden het duurt voordat uw site geladen is op 3G, 4G en 5G. De werkelijke tijden zijn meestal hoger.' },
  { name: 'Begrijp de impact op de levensduur', text: 'Het percentage "levensduur" laat zien hoeveel van iemands leven wordt besteed aan wachten. Gebruik dit als motivatie om te optimaliseren.' },
  { name: 'Optimaliseer en herbereken', text: 'Meet na het optimaliseren opnieuw en bereken het opnieuw. Zie hoe kleine verbeteringen een grote impact hebben.' },
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

const ui: CalculadoraTiempoDatosUI = {
  headerTitle: 'Verloren tijd in netwerken',
  labelWebSize: 'Website gewicht (MB)',
  unit: 'MB',
  presetsLabel: 'REALISTISCHE VOORBEELDEN',
  labelSpeed: 'Verbindingssnelheid',
  speedLabel3g: '3G',
  speedValue3g: '0,4 Mbps',
  speedLabel4g: '4G/LTE',
  speedValue4g: '10 Mbps',
  speedLabel5g: '5G',
  speedValue5g: '100+ Mbps',
  labelTimes: 'Hoe vaak per dag?',
  resultTitle: 'Resultaten',
  resultSingleLoad: 'Enkele lading',
  resultDailyTotal: 'Dagelijks totaal',
  resultTimePerYear: 'per jaar wachten',
  resultLifeYears: 'in uw leven',
  resultMessage: 'U heeft ongeveer 1 jaar leven verloren',
  copyMessage: 'Gekopieerd',
  preset3g: '3G',
  preset4g: '4G',
  preset5g: '5G',
};

export const content: ToolLocaleContent<CalculadoraTiempoDatosUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Technische bronnen over web-optimalisatie',
  bibliography: [
    { name: 'Google PageSpeed Insights', url: 'https://pagespeed.web.dev/' },
    { name: 'WebPageTest - Analyseer website-snelheid', url: 'https://www.webpagetest.org/' },
    { name: 'Web.dev - Core Web Vitals', url: 'https://web.dev/vitals/' },
    { name: 'MDN - Webprestaties', url: 'https://developer.mozilla.org/en-US/docs/Web/Performance' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Waarom websitelaadsnelheid cruciaal is', level: 2 },
    {
      type: 'paragraph',
      html: 'In het huidige digitale tijdperk is de laadsnelheid van een website geen luxe, maar een noodzaak. Elke milliseconde telt bij het behouden van gebruikers, het verbeteren van zoekresultaten en het maximaliseren van conversies. Moderne gebruikers verwachten dat pagina\'s in minder dan 3 seconden geladen zijn.',
    },
    { type: 'title', text: 'Impact op de gebruikerservaring', level: 3 },
    {
      type: 'paragraph',
      html: '53% van de mobiele bezoekers verlaat een pagina als het meer dan 3 seconden duurt om te laden. Conversiepercentages dalen met 7% voor elke extra seconde vertraging.',
    },
    { type: 'title', text: 'Inzicht in verbindingssnelheden', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>3G:</strong> 0,4 Mbps - Gebruikelijk in landelijke gebieden en ontwikkelingslanden',
        '<strong>4G/LTE:</strong> 10 Mbps - Standaard in ontwikkelde landen',
        '<strong>5G:</strong> 100+ Mbps - Geleidelijk uitbreidend, nog steeds beperkt',
      ],
    },
    { type: 'title', text: 'Strategieën om het gewicht van de site te verminderen', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Afbeeldingsoptimalisatie:</strong> Vertegenwoordigt 50-80% van het gewicht. Verminder met 40-60% met tools als TinyPNG.',
        '<strong>Minificatie:</strong> Verwijder onnodige code uit CSS en JavaScript. Bespaar 30-50%.',
        '<strong>Lazy Loading:</strong> Laad afbeeldingen pas wanneer gebruikers ernaar toe scrollen.',
        '<strong>Browsercache:</strong> Cache statische bestanden in de browsers van gebruikers.',
        '<strong>CDN:</strong> Serveer inhoud van geografisch nabijgelegen servers.',
      ],
    },
    { type: 'title', text: 'Conclusie: elke seconde telt', level: 2 },
    {
      type: 'paragraph',
      html: 'Uw website is vaak de eerste indruk die gebruikers van uw merk krijgen. Een trage site frustreert gebruikers en kost u business. Een snelle, responsieve site zorgt voor een positieve ervaring en verbetert al uw statistieken.',
    },
  ],
};
