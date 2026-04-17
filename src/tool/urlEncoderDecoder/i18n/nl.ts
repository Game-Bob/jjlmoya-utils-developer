import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlEncoderDecoderUI } from '../ui';

const slug = 'url-codeertool';
const title = 'URL Encoder and Decoder Online';
const description =
  'Converteer speciale tekens van elke link naar een veilig formaat (Percent-Encoding) of herstel ze direct en lokaal naar hun oorspronkelijke leesbare staat.';

const faqData = [
  {
    question: 'Welke tekens worden gecodeerd in een URL?',
    answer:
      'Alle tekens die niet zijn toegestaan in de ASCII-standaard voor URL\'s worden gecodeerd: spaties, letters met accenten, symbolen zoals &, =, +, #, ?, / en andere. Een spatie wordt bijvoorbeeld %20 en een ñ wordt %C3%B1.',
  },
  {
    question: 'Wat is het verschil tussen encodeURI en encodeURIComponent?',
    answer:
      'encodeURI codeert een volledige URL en laat gereserveerde tekens zoals / en ? intact. encodeURIComponent codeert alle speciale tekens inclusief gereserveerde tekens, waardoor het ideaal is voor het coderen van individuele queryparameterwaarden.',
  },
  {
    question: 'Waarom heeft mijn URL %20 in plaats von spaties?',
    answer:
      'Het HTTP-protocol staat geen spaties in URL\'s toe. %20 is de Percent-Encoding weergave van een spatie volgens de ASCII-standaard. Sommige systemen gebruiken het + teken als alternatief, maar %20 is het meest universeel en veilig.',
  },
  {
    question: 'Is het veilig om deze tool te gebruiken met privé URL\'s?',
    answer:
      'Ja, volledig veilig. Alle verwerking vindt plaats in uw browser met behulp van native JavaScript (encodeURIComponent/decodeURIComponent). Geen van uw URL\'s of parameters wordt naar een externe server verzonden.',
  },
];

const howToData = [
  {
    name: 'Plak de ruwe tekst',
    text: 'Typ of plak uw URL of tekstreeks in het bovenste veld "Ruwe tekst (leesbaar)".',
  },
  {
    name: 'Coderen of decoderen',
    text: 'Klik op "URL coderen" om de tekst te converteren naar het veilige Percent-Encoding formaat, of op "Decoderen" om een gecodeerde URL terug te zetten naar de leesbare vorm.',
  },
  {
    name: 'Kopieer het resultaat',
    text: 'Gebruik de knop "Kopiëren" van het bijbehorende veld om het resultaat naar uw klembord te kopiëren.',
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

const ui: UrlEncoderDecoderUI = {
  labelRaw: 'Ruwe tekst (leesbaar)',
  labelEncoded: 'Geformatteerde URL (gecodeerd)',
  btnClear: 'Wissen',
  btnCopy: 'Kopiëren',
  btnCopied: 'Gekopieerd!',
  btnEncode: 'URL coderen',
  btnDecode: 'Decoderen',
  placeholderRaw: 'https://example.com/search?q=rode schoenen&size=38',
  placeholderEncoded: 'https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Drode%20schoenen%26size%3D38',
};

export const content: ToolLocaleContent<UrlEncoderDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Referenties en Documentatie',
  bibliography: [
    {
      name: 'MDN Web Docs: encodeURIComponent()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent',
    },
    {
      name: 'IETF RFC 3986: URI Generic Syntax',
      url: 'https://datatracker.ietf.org/doc/html/rfc3986',
    },
    {
      name: 'W3C: URL Living Standard',
      url: 'https://url.spec.whatwg.org/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Wat is URL-codering?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bij het surfen op internet of het verzenden van verzoeken naar servers, is het gebruikelijk om een URL (Uniform Resource Locator) simpelweg als een "webadres" te beschouwen. Het internetprotocol schrijft echter voor dat URL\'s alleen kunnen worden verzonden met een zeer beperkte set <strong>standaard ASCII</strong>-tekens.',
    },
    {
      type: 'paragraph',
      html: 'Wat gebeurt er als de URL een spatie, letters met accenten of speciale parameters bevat zoals plus- (<code>+</code>) of isgelijktekens (<code>=</code>)? Om te voorkomen dat systemen vastlopen bij het proberen te lezen van ongeldige tekens, moeten deze worden vertaald naar hun veilige compatibele vorm met behulp van <strong>Percent-Encoding</strong>.',
    },
    {
      type: 'title',
      text: 'Hoe Percent-Encoding werkt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wanneer u deze tool gebruikt, neemt het algoritme elk "onveilig" teken (zoals een spatie of een letter met accent zoals ñ) en vervangt dit door een procentteken <code>%</code> gevolgd door twee hexadecimale cijfers die overeenkomen met de waarde in de UTF-8 standaard.',
    },
    {
      type: 'list',
      items: [
        '<strong>Basisvoorbeeld:</strong> Een eenvoudige spatie wordt vervangen door het veilige equivalent: <code>%20</code>.',
        '<strong>Uitgebreide ondersteuning:</strong> De letter <code>á</code> wordt <code>%C3%A1</code> en <code>ñ</code> wordt <code>%C3%B1</code>.',
      ],
    },
    {
      type: 'title',
      text: 'Belang in API\'s en GET-verzoeken',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bij het ontwikkelen van integraties is een typische fout het doorgeven van een ruwe tekenreeks aan URL-parameters. Als u <code>shirt&blauw</code> onbewerkt in uw backend invoegt (<code>/search?q=shirt&blauw</code>), zal de server <code>blauw</code> interpreteren als een nieuwe parameter, waardoor de hele logica wordt verbroken.',
    },
    {
      type: 'paragraph',
      html: 'Deze tool garandeert schone, automatische berekeningen met 100% uitvoering in uw lokale browser. Geen van uw URL-tekenreeksen wordt naar servers van derden verzonden, wat de privacy van uw tokens en analyseparameters waarborgt.',
    },
  ],
};

