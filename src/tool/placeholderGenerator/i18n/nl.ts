import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PlaceholderGeneratorUI } from '../ui';

const slug = 'placeholder-afbeelding-generator';
const title = 'Placeholder Afbeelding Generator. Snelle Webmockups Online';
const description =
  'Maak op maat gemaakte placeholderafbeeldingen voor je webontwerpen. Stel resolutie, achtergrond en tekst in en exporteer direct als PNG, WebP of JPEG.';

const faqData = [
  {
    question: 'Wat is een placeholderafbeelding?',
    answer:
      'Een placeholderafbeelding is een tijdelijke grafische afbeelding die in webdesign en opmaak wordt gebruikt om ruimte te reserveren voor een definitief beeld. Ze helpen de structuur van een pagina te visualiseren voordat de uiteindelijke inhoud beschikbaar is.',
  },
  {
    question: 'Kan ik elke gewenste resolutie gebruiken in de generator?',
    answer:
      'Ja, je kunt elke numerieke waarde voor breedte en hoogte invoeren. De generator maakt een canvas met de exact gevraagde afmetingen, perfect voor strikte rasters of specifieke advertentiebanners.',
  },
  {
    question: 'In welk formaat worden afbeeldingen gedownload?',
    answer:
      'Standaard worden afbeeldingen gegenereerd in WebP voor optimale compressie. Je kunt echter ook PNG kiezen voor maximale verliesvrije kwaliteit, of JPEG voor traditionele compatibiliteit.',
  },
  {
    question: 'Wordt dit verwerkt op een server?',
    answer:
      'Nee, alle afbeeldingsrendering vindt onmiddellijk plaats in het virtuele geheugen (Canvas) van je eigen browser. Het is instant en vereist geen gegevensverzending via het netwerk.',
  },
];

const howToData = [
  {
    name: 'Afmetingen instellen',
    text: "Voer de waarden voor breedte en hoogte direct in, of klik op een van de presets (FHD, HD, Instagram, enz.) om ze automatisch in te vullen.",
  },
  {
    name: 'Kleuren en tekst configureren',
    text: 'Kies achtergrond- en tekstkleur via de native kleurkiezers of door een hexadecimale code in te typen. Voeg optioneel een eigen tekst toe ter vervanging van het standaard afmetingslabel.',
  },
  {
    name: 'Typografie en formaat kiezen',
    text: 'Selecteer de lettertypefamilie en de basisgrootte. Kies het uitvoerformaat (WebP, PNG of JPEG) op basis van je behoeften.',
  },
  {
    name: 'Afbeelding downloaden',
    text: 'Klik op de knop Downloaden om de gegenereerde placeholder direct op je apparaat op te slaan.',
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

const ui: PlaceholderGeneratorUI = {
  labelDimensions: 'Snelle Afmetingen',
  labelWidth: 'Breedte (px)',
  labelHeight: 'Hoogte (px)',
  labelBgColor: 'Achtergrond',
  labelTextColor: 'Tekst',
  labelCustomText: 'Eigen Tekst (Optioneel)',
  placeholderCustomText: 'Bijv.: Hero Banner',
  labelFontFamily: 'Typografie',
  labelFontSize: 'Basisgrootte',
  fontSizeAuto: 'Automatisch',
  labelFormat: 'Uitvoerformaat',
  btnDownload: 'Afbeelding downloaden',
};

export const content: ToolLocaleContent<PlaceholderGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Veelgestelde vragen',
  faq: faqData,
  bibliographyTitle: 'Referenties en documentatie',
  bibliography: [
    {
      name: 'MDN Web Docs: HTMLCanvasElement.toDataURL()',
      url: 'https://developer.mozilla.org/nl/docs/Web/API/HTMLCanvasElement/toDataURL',
    },
    {
      name: 'MDN Web Docs: CanvasRenderingContext2D',
      url: 'https://developer.mozilla.org/nl/docs/Web/API/CanvasRenderingContext2D',
    },
    {
      name: 'W3C: HTML Canvas 2D Context',
      url: 'https://www.w3.org/TR/2dcontext/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Het ultieme hulpmiddel voor snelle mockups',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "In de vroege fasen van conceptontwikkeling of structurele opmaak van een website (wireframing) beschikken we zelden over het definitieve beeldmateriaal. Lege vlakken kunnen de algehele visualisatie van het product vertekenen en kritieke fouten in afstanden of verhoudingen verbergen. Een placeholderafbeelding generator lost dit meteen op: je kunt er nauwkeurig gedimensioneerde gekleurde vlakken mee invoegen zonder omwegen.",
    },
    {
      type: 'tip',
      title: 'Ontwerpen zonder weerstand',
      html: 'Bij het bouwen van CSS Grids is een ruimte van precies 1200x800 pixels vaak onmisbaar. Door opvulblokken te downloaden vermijd je het injecteren van extra CSS of scripts van derden in je tijdelijke code.',
    },
    {
      type: 'title',
      text: 'Waarom externe diensten beter te vermijden zijn',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'In het frontend-ecosysteem is het gebruikelijk om diensten zoals <code>via.placeholder.com</code> direct in <code>src</code>-attributen te koppelen. Hoewel dat via URL-parameters handig lijkt, zijn er verstrekkende bijwerkingen die een zorgvuldige ontwikkelaar liever vermijdt.',
    },
    {
      type: 'paragraph',
      html: 'Een extern domein in elk afbeeldingstag op een ontwikkelpagina verhoogt het aantal DNS-verzoeken, vertraagt hot-reloading-systemen van Vite, Gulp of Webpack en laat onbedoeld sporen achter in branches die uiteindelijk in de cloud belanden. Door deze tool te gebruiken en de afbeelding in je favoriete formaat (WebP, PNG of JPEG) te genereren, blijft je prototype volledig in localhost-modus.',
    },
    {
      type: 'title',
      text: 'Kernfuncties van het generatoralgoritme',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Pixelperfecte resolutie:</strong> Native HTML5 Canvas zorgt ervoor dat het geëxporteerde canvas rekenkundig overeenkomt met de door de gebruiker opgegeven coördinaten.',
        '<strong>Typografische automatische schaling:</strong> In de automatische modus berekent de lettergrootte het perimeteroppervlak en het aantal tekens om de tekst elegant te laten passen zonder ongewenste <em>overflows</em>.',
        '<strong>Hexadecimale synchronisatie:</strong> Bidirectionele statuscontrole tussen native HTML-kleurkiezers en getypte invoervelden garandeert nauwkeurige contrasten die worden bepaald door het UI/UX-kleurenpalet van je Figma- of Penpot-ontwerp.',
      ],
    },
    {
      type: 'title',
      text: 'De verborgen kunst van technisch wireframen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Er bestaat geen monolithisch project of micro-frontend dat de fundamentele bouwfasen kan overslaan, zeker niet bij veeleisende opdrachtgevers of Product Managers met een ijzersterk oog voor detail. Wie grafische iteraties snel kan doorvoeren zonder de ballast van definitieve <em>assets</em> mee te slepen, onderscheidt zich als vlotte ontwikkelaar. Deze generator maakt rechtstreeks gebruik van de moderne JS-API <code>toDataURL()</code> op je lokale machine en levert een resultaat op industrieniveau, zonder twijfelachtige tussenverwerking.',
    },
  ],
};
