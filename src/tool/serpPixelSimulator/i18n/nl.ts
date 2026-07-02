import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SerpPixelSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'serp-pixel-simulator-meten';
const title = 'SERP Simulator en SEO Pixelteller';
const description = 'Bekijk een voorbeeld van Google-achtige zoeksnippets in realtime, meet de breedte van titel en meta description in pixels en zie precies waar je tekst wordt afgekapt.';

const howTo = [
  {
    name: 'Voer de title-tag in',
    text: 'Typ of plak de paginatitel die je wilt testen. De SERP-voorvertoning en pixelmeter worden bij elke toetsaanslag bijgewerkt.',
  },
  {
    name: 'Voeg de zichtbare URL toe',
    text: 'Gebruik een realistische domeinnaam en pad zodat het snippet lijkt op het resultaat dat een zoeker zou scannen.',
  },
  {
    name: 'Schrijf de meta description',
    text: 'Voeg de beschrijvingstekst toe en let op de pixelbalk. Wanneer deze de aanbevolen visuele breedte overschrijdt, wordt de voorvertoning afgekapt met een beletselteken.',
  },
  {
    name: 'Schakel tussen desktop en mobiel',
    text: 'Vergelijk de titelweergave met de kaartbreedte voor desktop of mobiel voordat je metadata publiceert.',
  },
];

const faq = [
  {
    question: 'Waarom pixels tellen in plaats van tekens voor SEO-titels?',
    answer: 'Google-zoekresultaatkaarten worden beperkt door visuele breedte. Een titel met veel smalle letters kan meer tekens bevatten dan een titel met brede letters, hoofdletters of dik ogende glyphs. Pixelmeting geeft een nauwkeuriger voorbeeld van het zichtbare resultaat.',
  },
  {
    question: 'Garandeert dit precies hoe Google mijn snippet zal afkappen?',
    answer: 'Nee. Google kan titellinks en snippets herschrijven, en de weergave kan variëren per zoekopdracht, apparaat, taal en experiment. De tool is bedoeld als een praktische visuele leidraad voor het schrijven van metadata die minder snel wordt afgekapt.',
  },
  {
    question: 'Welke pixellimieten gebruikt de simulator?',
    answer: 'De standaard titellimiet voor desktop is 580 px, voor mobiel 600 px en de limiet voor meta descriptions is 920 px. Dit zijn schrijfdoelen, geen officiële Google-limieten.',
  },
  {
    question: 'Waarom voegt de voorvertoning een beletselteken toe?',
    answer: 'Wanneer de gemeten tekst de beschikbare pixelbreedte overschrijdt, kapt de simulator de string af bij het laatste passende teken en voegt drie puntjes toe. Dit komt overeen met het praktische gedrag dat SEO-teams nodig hebben om betekenisverlies te signaleren.',
  },
];

const ui: SerpPixelSimulatorUI = {
  titleLabel: 'Title-tag',
  titlePlaceholder: 'GameBob | Indie Ontwikkelstudio',
  urlLabel: 'Zichtbare URL',
  urlPlaceholder: 'https://www.gamebob.dev/nl/',
  descriptionLabel: 'Meta description',
  descriptionPlaceholder: 'Ontdek onze collectie tools en games die jouw digitale workflow en entertainment naar een hoger niveau tillen.',
  deviceLabel: 'Voorvertoningsmodus',
  desktopLabel: 'Desktop',
  mobileLabel: 'Mobiel',
  titlePixelsLabel: 'Titelbreedte',
  descriptionPixelsLabel: 'Beschrijvingsbreedte',
  charactersLabel: 'tekens',
  previewLabel: 'Live voorvertoning in Google-stijl',
  tooLongLabel: 'Te breed',
  goodLabel: 'Past',
  emptyTitle: 'Jouw titel verschijnt hier',
  emptyDescription: 'De voorvertoning van jouw meta description verschijnt hier terwijl je typt.',
  defaultTitle: 'GameBob | Indie Ontwikkelstudio',
  defaultUrl: 'https://www.gamebob.dev/nl/',
  defaultDescription: 'Ontdek onze collectie tools en games die jouw digitale workflow en entertainment naar een hoger niveau tillen.',
  fallbackUrl: 'voorbeeld.nl',
  fallbackFaviconText: 'G',
  pixelUnit: 'px',
  ellipsis: '...',
  fetchButtonLabel: 'Ophalen',
  fetchLoadingLabel: 'Ophalen...',
  fetchSuccessLabel: 'Metadata geladen vanaf de URL.',
  fetchCorsError: 'De browser kon deze pagina niet lezen. Deze kan geblokkeerd zijn door CORS, een omleiding, gemengde inhoud of een netwerkregel. Je kunt de metadata nog steeds handmatig plakken of bewerken.',
  fetchInvalidUrlError: 'Voer een geldige URL in voordat je metadata ophaalt.',
  fetchNoMetadataError: 'De pagina is opgehaald, maar er is geen titel of meta description gevonden.',
  fetchGenericError: 'Metadata kon niet worden opgehaald van deze URL. Controleer het adres of vul de velden handmatig in.',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<SerpPixelSimulatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Veelgestelde vragen over de SERP-simulator',
  faq,
  bibliographyTitle: 'Documentatie over zoekresultaten',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Stop met gissen hoe je Google-resultaat eruit zal zien',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een title-tag kan er perfect uitzien in een spreadsheet en toch mislukken in het zoekresultaat. Google reserveert geen ruimte op basis van tekens; het rendert tekst binnen een visuele kaart. Dat betekent dat <strong>GameBob | Indie Ontwikkelstudio</strong> en een andere titel met hetzelfde aantal tekens heel verschillende breedtes kunnen innemen, afhankelijk van de letters, hoofdletters, leestekens en spatiëring.',
    },
    {
      type: 'tip',
      title: 'De regel die echt helpt',
      html: 'Schrijf het snippet zo dat de belangrijke belofte het beletselteken overleeft. Plaats het paginatype, de zoekintentie en de sterkste reden om te klikken vóór de pixellimiet. Merknamen zijn nuttig, maar ze mogen het belangrijkste voordeel niet uit het zicht duwen.',
    },
    {
      type: 'title',
      text: 'Wat de pixelteller meet',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Element', 'Wat telt', 'Hoe gebruik je het resultaat'],
      rows: [
        ['Title-tag', 'Gerenderde breedte in pixels, niet het ruwe aantal tekens', 'Houd het primaire keyword en de klikbelofte zichtbaar vóór het afkappen.'],
        ['Zichtbare URL', 'Visueel vertrouwen en duidelijkheid van het onderwerp', 'Gebruik een leesbaar pad dat aangeeft waar het resultaat naartoe leidt.'],
        ['Meta description', 'Een breder snippetgebied met zoekopdrachtafhankelijk gedrag', 'Zet het voordeel vooraan, want Google kan het inkorten of herschrijven.'],
        ['Apparaatmodus', 'Desktop- en mobiele kaarten kunnen anders aanvoelen', 'Controleer beide voordat je metadata voor belangrijke pagina\'s publiceert.'],
      ],
    },
    {
      type: 'title',
      text: 'Waarom tekenlimieten een slechte SEO-gewoonte zijn',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Traditioneel advies zoals "houd titels onder de 60 tekens" is gemakkelijk, maar verbergt het echte probleem. Brede letters zoals W en M, hoofdletters, scheidingstekens, cijfers en lange merknamen nemen allemaal verschillende ruimte in. Pixelmeting maakt de afweging direct zichtbaar: je kunt zien of een zin zijn plaats verdient of ruimte steelt van een sterkere boodschap.',
    },
    {
      type: 'title',
      text: 'Een praktische workflow voor betere snippets',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Begin met de intentie:</strong> beschrijf wat de gebruiker krijgt, niet alleen hoe de pagina heet.',
        '<strong>Test de volledige titel:</strong> plak hem in de simulator en let op de balk voordat je publiceert.',
        '<strong>Verwijder zwakke woorden:</strong> als de balk rood wordt, verwijder dan opvulling voordat je waardevolle termen wegsnijdt.',
        '<strong>Controleer het beletselteken:</strong> als de afgekapte voorvertoning zijn betekenis verliest, herschrijf dan de titel in plaats van de afkapping te accepteren.',
        '<strong>Herhaal voor de beschrijving:</strong> zorg ervoor dat de eerste zin de waardepropositie op zichzelf draagt.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Als de balk rood wordt',
      html: 'Een rode balk is geen strafwaarschuwing. Het betekent dat de huidige tekst breder is dan het geselecteerde visuele doel, dus kapt de simulator hem af met puntjes. Behandel dit als een redactioneel signaal: beslis of de verborgen woorden weg kunnen, of dat het snippet een scherpere structuur nodig heeft.',
    },
    {
      type: 'title',
      text: 'Beperkingen, herschrijvingen en realistische verwachtingen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Geen enkele simulator kan het exacte snippet garanderen dat Google zal tonen. Google kan titellinks herschrijven, zoektermen vetgedrukt weergeven, paginatekst kiezen in plaats van de meta description, of verschillende snippets tonen voor verschillende zoekopdrachten. Deze tool is het meest geschikt als een snelle schrijf- en QA-stap: hij detecteert duidelijke visuele overloop voordat de pagina in productie gaat.',
    },
    {
      type: 'summary',
      title: 'Beste gebruik van deze SERP simulator',
      items: [
        'Gebruik de pixelbalk om visuele overloop te detecteren voordat je metadata publiceert.',
        'Houd de belangrijkste zoekintentie en klikbelofte zichtbaar vóór elk beletselteken.',
        'Haal metadata op van URL\'s die CORS toestaan en bewerk het resultaat handmatig indien nodig.',
        'Beschouw de voorvertoning als een schrijfhulpmiddel, want Google kan snippets nog steeds herschrijven per zoekopdracht.',
      ],
    },
  ],
};
