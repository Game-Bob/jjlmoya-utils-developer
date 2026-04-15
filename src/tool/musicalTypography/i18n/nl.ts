import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicalTypographyUI } from '../ui';

const slug = 'muzikale-typografische-schaal';
const title = 'Muzikale Typografische Schaal. Modulaire Schaalcalculator';
const description =
  'Gratis onlinetool om harmonieuze visuele hiërarchiën te maken met modulaire schalen op basis van muzikale verhoudingen. Genereert kant-en-klare CSS-variabelen voor uw webdesign.';

const faqData = [
  {
    question: 'Wat is een typografische modulaire schaal?',
    answer:
      'Dit is een methode om lettergroottes te bepalen op basis van een constante wiskundige verhouding. Net als in muziek, waar noten harmonische relaties hebben, creëert de modulaire schaal een evenwichtige en voorspelbare visuele hiërarchi.',
  },
  {
    question: 'Waarom muzikale intervallen voor design gebruiken?',
    answer:
      'Muzikale intervallen zijn verhoudingen die het menselijk brein als harmonieus waarneemt. Ze toepassen op tekstgroottes creëert een visuele structuur die juist en professioneel aanvoelt, in plaats van willekeurig gekozen maten.',
  },
  {
    question: 'Wat is de Gulden Snede in typografie?',
    answer:
      'Dit is de verhouding 1.618, ook wel de Gulden Sectie genoemd. Het creëert zeer dramatische en elegante schalen waar elke stap in de hiërarchi exponentieel groeit. Perfect voor portfolio- of kunstgerichte websites.',
  },
  {
    question: 'Hoe implementeer ik de schaal in mijn CSS-bestand?',
    answer:
      'De tool genereert CSS-variabelen (tokens) in het formaat :root { --step-N: Xrem; }. Kopieer ze naar uw hoofd CSS-bestand en gebruik ze met var(--step-N) om typografische consistentie over uw site te handhaven.',
  },
];

const howToData = [
  {
    name: 'Stel basisgrootte in',
    text: 'Voer de lettergrootte voor uw lichaamstekst in (meestal 16px), die de fundamentele noot van uw schaal vormt.',
  },
  {
    name: 'Kies het interval',
    text: 'Selecteer een muzikale verhouding om te bepalen hoeveel ruimte er is tussen verschillende kopniveaus.',
  },
  {
    name: 'Preview de hiërarchi',
    text: 'Zie in real-time hoe de typografische niveaus zich gedragen om te verifiëren dat de visuele harmonie bij uw project past.',
  },
  {
    name: 'Exporteer de code',
    text: 'Klik Kopieer CSS-variabelen om het blok gereed voor rechtstreekse invoer in uw workflow te krijgen.',
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
  applicationCategory: 'DesignApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'nl',
};

const ui: MusicalTypographyUI = {
  labelConfig: 'Configuratie',
  labelBaseSize: 'Basisgrootte (px)',
  hintBaseSize: 'Uw paragraaftekstgrootte (meestal 16px).',
  labelRatio: 'Muzikale Schaal (Verhouding)',
  hintRatio: 'Bepaalt hoeveel de grootte bij elke stap toeneemt.',
  labelCalculated: 'Berekende Waarden',
  labelPreview: 'Preview',
  btnCopyCss: 'Kopieer CSS-variabelen',
  feedbackCopied: 'Variabelen naar klembord gekopieerd!',
  previewText: 'Muzikale Typografie',
  previewSubtext: 'Een perfecte harmonische schaal voor uw design.',
  ratioSecundaMenor: 'Kleine Secunde',
  ratioSegundaMayor: 'Grote Secunde',
  ratioTerceraMenor: 'Kleine Terts',
  ratioTerceraMayor: 'Grote Terts',
  ratioCuartaPerfecta: 'Perfect Kwartal',
  ratioCuartaAumentada: 'Verhoogd Kwartal',
  ratioQuintaPerfecta: 'Perfect Kwintal',
  ratioProporcionAurea: 'Gulden Snede',
  ratioSextaMayor: 'Grote Sext',
  ratioSeptimaMenor: 'Kleine Septiem',
  ratioSeptimaMayor: 'Grote Septiem',
  ratioOctava: 'Octaaf',
};

export const content: ToolLocaleContent<MusicalTypographyUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Referenties',
  bibliography: [
    {
      name: 'Bringhurst, R. The Elements of Typographic Style',
      url: 'https://en.wikipedia.org/wiki/The_Elements_of_Typographic_Style',
    },
    {
      name: 'Brown, T. More Meaningful Typography. A List Apart',
      url: 'https://alistapart.com/article/more-meaningful-typography/',
    },
    {
      name: 'Physics of Music. Musical Intervals and Scales',
      url: 'https://es.scribd.com/document/199729396/Physics-of-Music-Notes',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'De onzichtbare harmonie van webdesign',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De <strong>Muzikale Typografische Schaal</strong> past de wiskunde van muzikale intervallen toe op typografisch design. Net als dat een muziekcompositie wordt beheerst door precieze verhoudingen, profiteert een stevig design van een wiskundige structuur die alle maten met elkaar in verband stelt.',
    },
    {
      type: 'title',
      text: 'Hoe de modulaire schaal werkt',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'De formule',
      html: '<p>De progressie is eenvoudig: <code>Size = Base × Ratio<sup>n</sup></code>. Stap 0 is uw basistekst. Stap 1 is een klein bijschrift. Stap 4 of 5 kan uw hoofd H1 zijn. Dezelfde vermenigvuldigingsconstante (de verhouding) garandeert dat alle relaties consistent zijn.</p>',
    },
    {
      type: 'card',
      title: 'Waarom "Muzikaal"',
      html: '<p>De Pythagoreeërs ontdekten dat het delen van een snaar in eenvoudige verhoudingen (1:2, 2:3, 3:4) medeklinker klanken voortbrengen. Deze intervallen, octaaf, perfect kwintal en perfect kwartal, zijn precies de typografische verhoudingen. U stelt visuele muziek samen.</p>',
    },
    {
      type: 'title',
      text: 'De juiste verhouding kiezen',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Voor dichte interfaces (dashboards, tabellen) gebruik kleine verhoudingen zoals <code>1.125</code> of <code>1.2</code>. Voor redactionele of portfoliowers, gebruik meer expressieve verhoudingen zoals <code>1.5</code> of <code>1.618</code>.',
    },
    {
      type: 'paragraph',
      html: 'Beperk de schaal niet alleen tot <code>font-size</code>. Dezelfde CSS-variabelen werken voor <code>margin</code>, <code>padding</code> en <code>gap</code>. Wanneer witruimte dezelfde wiskundige progressie volgt als de tekst, bereikt het ontwerp een coheesieniveau dat iedereen voelt maar weinigen kunnen uitleggen.',
    },
  ],
};
