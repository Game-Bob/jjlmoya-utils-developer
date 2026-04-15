import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PlaceholderGeneratorUI } from '../ui';

const slug = 'platshallare-bildgenerator';
const title = 'Platshållare Bildgenerator. Snabba Webbmockups Online';
const description =
  'Skapa anpassade platshållarbilder för dina webbdesigner. Justera upplösning, bakgrund, text och exportera i PNG, WebP eller JPEG direkt.';

const faqData = [
  {
    question: 'Vad är en platshållarebild?',
    answer:
      'En platshållarebild eller fyllnadsgrafik är ett tillfälligt grafiskt element som används i webbdesign och layout för att reservera utrymme där en slutgiltig bild ska placeras. De hjälper till att visualisera sidans struktur innan det slutliga innehållet är tillgängligt.',
  },
  {
    question: 'Kan jag använda vilken upplösning som helst i generatorn?',
    answer:
      'Ja, du kan ange vilket numeriskt värde som helst för bredd och höjd. Generatorn skapar en canvas med de exakta begärda dimensionerna, perfekt för strikta rutnät eller specifika reklambanderoller.',
  },
  {
    question: 'I vilket format hämtas bilderna?',
    answer:
      'Som standard genereras bilder i WebP för optimal komprimering, men du kan välja att ladda ned dem i PNG-format för maximal förlustfri kvalitet eller JPEG för traditionell kompatibilitet.',
  },
  {
    question: 'Bearbetas detta på någon server?',
    answer:
      'Nej, all bildrendering genereras omedelbar i det virtuella minnet (Canvas) i din egen webbläsare. Det är omedelbar och kräver inte att data skickas över nätverket.',
  },
];

const howToData = [
  {
    name: 'Ange dimensioner',
    text: 'Ange bredd- och höjdvärden direkt eller klicka på en av förinställningarna (FHD, HD, Instagram, etc.) för att fylla dem in automatiskt.',
  },
  {
    name: 'Konfigurera färger och text',
    text: 'Välj bakgrunds- och textfärger med de inbyggda väljarna eller genom att skriva en hexadecimal kod. Lägg eventuellt till anpassad text för att ersätta standarddimensionsetiketten.',
  },
  {
    name: 'Välj typografi och format',
    text: 'Välj teckensnittsfamilj och storlek. Välj utdataformat (WebP, PNG eller JPEG) enligt dina behov.',
  },
  {
    name: 'Hämta bilden',
    text: 'Klicka på Hämta-knappen för att spara den genererade platshållaren direkt till din enhet.',
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

const ui: PlaceholderGeneratorUI = {
  labelDimensions: 'Snabba Dimensioner',
  labelWidth: 'Bredd (px)',
  labelHeight: 'Höjd (px)',
  labelBgColor: 'Bakgrund',
  labelTextColor: 'Text',
  labelCustomText: 'Anpassad Text (Valfritt)',
  placeholderCustomText: 'T.ex.: Hero Banner',
  labelFontFamily: 'Typografi',
  labelFontSize: 'Basstorlek',
  fontSizeAuto: 'Automatisk',
  labelFormat: 'Utdataformat',
  btnDownload: 'Hämta Bild',
};

export const content: ToolLocaleContent<PlaceholderGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Vanliga Frågor',
  faq: faqData,
  bibliographyTitle: 'Referenser och Dokumentation',
  bibliography: [
    {
      name: 'MDN Web Docs: HTMLCanvasElement.toDataURL()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL',
    },
    {
      name: 'MDN Web Docs: CanvasRenderingContext2D',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D',
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
      text: 'Det Ultimata Verktyget för Snabba Mockups',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Under de tidiga faserna av konceptualisering eller strukturell layout av en webbplats (wireframing) har vi sällan det slutliga fotografiska innehållet. Tomma dimensioner kan förvränga den globala visualiseringen av produkten och dölja kritiska avstånd eller proportionsfel. En platshållarebildgenerator löser detta omedelbar och låter dig injicera exakt dimensionerade färgade områden.',
    },
    {
      type: 'tip',
      title: 'Design utan Friktion',
      html: 'Att integrera ett utrymme på exakt 1200x800 pixlar är absolut nödvändigt när du bygger CSS Grid. Genom att ladda ned fylningsblock undviker du att injicera extra CSS eller tredjepartsscript i din tillfälliga kod.',
    },
    {
      type: 'title',
      text: 'Vikten av att Undvika Externa Tjänster',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En återkommande praxis i frontend-ekosystemet är att länka tjänster som <code>via.placeholder.com</code> eller liknande direkt i HTML <code>src</code>-attribut. Även om det teoretiskt är smidig via URL-parametrar, har det djupa biverkningar som en noggrann utvecklare skulle undvika för nästan all kostnad.',
    },
    {
      type: 'paragraph',
      html: 'Att infoga en fjärr domän i varje bildtagg på en utvecklingssida ökar DNS-förfrågningar, straffar hot-reloading system av Vite, Gulp eller Webpack och avslöjar versökt spår i grenar som slutligen hamnar i molnet. Genom att använda detta verktyg och generera bilden i ditt föredragna format (WebP, PNG eller JPEG) centraliserar du ditt prototyp helt i localhost-läge.',
    },
    {
      type: 'title',
      text: 'Huvudfunktioner i Generatoralgoritmen',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Pixelperfekt Upplösning:</strong> Inbyggd HTML5 Canvas säkerställer att den exporterade canvas motsvarar aritmetiskt de koordinater som användaren angett.',
        '<strong>Typografisk Autoskalning:</strong> I automatisk läge beräknar teckensnittsstorleken omkretsområdet och antalet tecken för att elegant passa in texten utan oönskade <em>överflöden</em>.',
        '<strong>Hexadecimal Fusion:</strong> Dubbelriktad tillståndsöverkontroll mellan inbyggda HTML-ekosystemväljare och skrivna inmatningar, vilket garanterar exakta kontraster som dikterats av din Figma eller Penpot UI/UX-palett.',
      ],
    },
    {
      type: 'title',
      text: 'Den Dolda Konsten att Teknisk Wireframing',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Det finns inget monolitiskt projekt eller micro frontend som inte går igenom grundläggande stadier, särskilt när du står inför krävande klienter eller Product Managers med en järnvilja. Att underlätta smidig grafiska iterationer utan att dra kostnader för färdigställda <em>assets</em> skiljer den snabba utvecklaren från den fastna. Denna generator utnyttjar direkt den moderna JavaScript <code>toDataURL()</code> API på din lokala maskin för att leverera ett resultat av industristandard utan misstänkt mellanliggande bearbetning.',
    },
  ],
};
