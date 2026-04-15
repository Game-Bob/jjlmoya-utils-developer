import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgSanitizerUI } from '../ui';

const slug = 'svg-opschoner';
const title = 'SVG Opschoner Online';
const description = 'Optimaliseer en maak SVGs schoon die geëxporteerd zijn vanuit Figma, Adobe Illustrator of Inkscape. Verwijder metadata, overbodige attributen en lege groepen voor een productieklare SVG.';

const faqData = [
  {
    question: 'Kan ik de volledige HTML van een pagina met ingesloten SVG plakken?',
    answer: 'Ja. De opschoner detecteert het SVG-element in de HTML en extraheert alleen dat blok voor verwerking. Het werkt ook als je het SVG-fragment direct plakt.',
  },
  {
    question: 'Werkt het ook met SVGs van Illustrator?',
    answer: 'Ja. Illustrator exporteert SVGs met XML-declaraties, metadata en eigen namespaces die de opschoner verwijdert. Het resultaat is een SVG die compatibel is met alle moderne browsers.',
  },
  {
    question: 'Wat is het verschil tussen opschonen en minificeren?',
    answer: 'Opschonen verwijdert overbodige attributen en tags, maar behoudt het ingesprongen formaat zodat je de code kunt lezen en bewerken. Minificeren comprimeert alles ook nog eens tot één regel om de bestandsgrootte maximaal te beperken.',
  },
  {
    question: 'Kan het verwijderen van ID\'s de SVG beschadigen?',
    answer: 'Alleen als een element in de SVG een ander element via ID aanroept, bijvoorbeeld via fill="url(#gradient)". Schakel in dat geval de optie ID\'s verwijderen uit. Die is standaard uitgeschakeld om dit probleem te voorkomen.',
  },
  {
    question: 'Wordt mijn SVG-code naar een server gestuurd?',
    answer: 'Nee. Alle verwerking vindt plaats in je browser via de ingebouwde DOMParser- en XMLSerializer-API\'s. De code verlaat je apparaat nooit.',
  },
];

const howToData = [
  { name: 'SVG plakken', text: 'Plak de SVG-code geëxporteerd vanuit Figma, Illustrator of Inkscape in het tekstveld.' },
  { name: 'Opties instellen', text: 'Schakel opties in of uit: ID\'s verwijderen, width/height weghalen en minificeren naar behoefte.' },
  { name: 'Opschonen', text: 'Klik op SVG opschonen om de code te verwerken en het geoptimaliseerde resultaat te krijgen.' },
  { name: 'Kopiëren of downloaden', text: 'Gebruik de knoppen Kopiëren of Downloaden om de schoongemaakte SVG klaar voor productie te bewaren.' },
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

const ui: SvgSanitizerUI = {
  labelInput: 'Plak hier je onbewerkte SVG',
  labelOutput: 'Schoongemaakte SVG',
  optRemoveIds: 'ID\'s verwijderen',
  optRemoveWH: 'width/height weghalen',
  optMinify: 'Minificeren',
  btnSanitize: 'SVG opschonen',
  btnCopy: 'Kopiëren',
  btnCopied: 'Gekopieerd',
  btnDownload: 'Downloaden',
  statOriginal: 'Origineel',
  statCleaned: 'Schoon',
  statReduction: 'Reductie',
  statElems: 'Elem. verwijderd',
  statAttrs: 'Attrs. verwijderd',
  errorPaste: 'Plak eerst een SVG voordat je opschoont.',
  errorProcess: 'Fout bij het verwerken van de SVG.',
};

export const content: ToolLocaleContent<SvgSanitizerUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Veelgestelde vragen',
  faq: faqData,
  bibliographyTitle: 'Referenties',
  bibliography: [
    { name: 'SVG Specification - W3C', url: 'https://www.w3.org/TR/SVG2/' },
    { name: 'Figma SVG Export - Officiële documentatie', url: 'https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma' },
    { name: 'SVGO - SVG Optimizer (open source referentie)', url: 'https://github.com/svg/svgo' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'SVG Opschoner: Code van Figma en Illustrator schoonmaken', level: 2 },
    {
      type: 'paragraph',
      html: 'Plak een willekeurige SVG geëxporteerd vanuit <strong>Figma</strong>, Adobe Illustrator of de browser-inspector en ontvang een schone, geoptimaliseerde vectorafbeelding klaar voor productie.',
    },
    { type: 'title', text: 'Waarom zijn geëxporteerde SVGs zo rommelig?', level: 3 },
    {
      type: 'paragraph',
      html: 'Wanneer je een SVG exporteert vanuit Figma, krijg je een bestand vol attributen die alleen binnen de applicatie zinvol zijn: <code>data-name</code>, <code>xml:space</code>, verwijzingen naar interne lagen en designmetadata. Het resultaat is een SVG die 40 tot 70% groter kan zijn dan nodig.',
    },
    { type: 'title', text: 'Wat de opschoner verwijdert', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Editormetadata:</strong> de tags <code>metadata</code>, <code>title</code> en <code>desc</code> die Figma en Illustrator automatisch toevoegen.',
        '<strong>Inkscape-namespaces:</strong> alle elementen met het prefix <code>inkscape:</code> en <code>sodipodi:</code>.',
        '<strong>Overbodige attributen:</strong> <code>xml:space</code>, <code>version</code>, overbodige <code>xmlns:*</code> en Figma-<code>data-*</code>-attributen.',
        '<strong>Lege groepen:</strong> <code>&lt;g&gt;</code>-elementen zonder inhoud die als resten van verwijderde lagen overblijven.',
        '<strong>XML-declaraties:</strong> de <code>&lt;?xml version="1.0"?&gt;</code>-declaratie en het DOCTYPE die niet nodig zijn bij het insluiten van SVG in HTML.',
      ],
    },
  ],
};
