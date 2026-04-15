import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgSanitizerUI } from '../ui';

const slug = 'svg-sanitizer-sv';
const title = 'Online SVG Sanering';
const description = 'Optimera och rensa SVG exporterade från Figma, Adobe Illustrator eller Inkscape. Ta bort metadata, onödiga attribut och tomma grupper för att få en produktionsklar SVG.';

const faqData = [
  {
    question: 'Kan jag klistra in hela HTML på en sida med inbäddad SVG?',
    answer: 'Ja. Saneringen identifierar SVG-elementet inuti HTML och extraherar bara det blocket för bearbetning. Det fungerar också om du klistrar in SVG-fragmentet direkt.',
  },
  {
    question: 'Fungerar det med Illustrator SVG?',
    answer: 'Ja. Illustrator exporterar SVG med XML-deklarationer, metadata och egna namnrymder som saneringen tar bort. Resultatet är en SVG kompatibel med alla moderna webbläsare.',
  },
  {
    question: 'Vad är skillnaden mellan rensning och minifiering?',
    answer: 'Rensning tar bort onödiga attribut och taggar men behåller det indragna formatet så du kan läsa och redigera koden. Minifiering drar också ihop allt till en enda rad för att minska filstorlek maximalt.',
  },
  {
    question: 'Kan borttagning av ID-nummer skada SVG?',
    answer: 'Endast om ett element i SVG refererar till ett annat med ID, till exempel genom fill="url(#gradient)". I så fall inaktivera alternativet Ta bort ID. Det är inaktiverat som standard just för att undvika detta problem.',
  },
  {
    question: 'Skickas min SVG-kod till någon server?',
    answer: 'Nej. All bearbetning sker i din webbläsare med hjälp av nativa DOMParser- och XMLSerializer-API:er. Koden lämnar aldrig din enhet.',
  },
];

const howToData = [
  { name: 'Klistra in SVG', text: 'Klistra in SVG-koden exporterad från Figma, Illustrator eller Inkscape i textområdet.' },
  { name: 'Konfigurera alternativ', text: 'Aktivera eller inaktivera alternativ: ta bort ID, ta bort bredd/höjd och minifiera enligt dina behov.' },
  { name: 'Rensa', text: 'Klicka på Rensa SVG för att bearbeta koden och få det optimerade resultatet.' },
  { name: 'Kopiera eller ladda ned', text: 'Använd knapparna Kopiera eller Ladda ned för att få den rensade SVG klar för produktion.' },
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
  inLanguage: 'sv',
};

const ui: SvgSanitizerUI = {
  labelInput: 'Klistra in din smutsiga SVG här',
  labelOutput: 'Ren SVG',
  optRemoveIds: 'Ta bort ID',
  optRemoveWH: 'Ta bort bredd/höjd',
  optMinify: 'Minifiera',
  btnSanitize: 'Rensa SVG',
  btnCopy: 'Kopiera',
  btnCopied: 'Kopierat',
  btnDownload: 'Ladda ned',
  statOriginal: 'Original',
  statCleaned: 'Ren',
  statReduction: 'Minskning',
  statElems: 'Element borttagna',
  statAttrs: 'Attribut borttagna',
  errorPaste: 'Klistra in en SVG innan rensning.',
  errorProcess: 'Fel vid bearbetning av SVG.',
};

export const content: ToolLocaleContent<SvgSanitizerUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Referenser',
  bibliography: [
    { name: 'SVG Specification — W3C', url: 'https://www.w3.org/TR/SVG2/' },
    { name: 'Figma SVG Export — Official Documentation', url: 'https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma' },
    { name: 'SVGO — SVG Optimizer (open source reference)', url: 'https://github.com/svg/svgo' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'SVG Sanering: Ren kod från Figma och Illustrator', level: 2 },
    {
      type: 'paragraph',
      html: 'Klistra in vilken SVG som helst exporterad från <strong>Figma</strong>, Adobe Illustrator eller webbläsarens inspektör och få en ren, optimerad vektorfil redo för produktion.',
    },
    { type: 'title', text: 'Varför är exporterade SVG så smutsiga?', level: 3 },
    {
      type: 'paragraph',
      html: 'När du exporterar en SVG från Figma får du en fil fullproppad med attribut som bara är vettiga inuti appen: <code>data-name</code>, <code>xml:space</code>, referenser till interna lager och designmetadata. Resultatet är en SVG som väger 40-70% mer än nödvändigt.',
    },
    { type: 'title', text: 'Vad saneringen tar bort', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Redigerarmetadata:</strong> <code>metadata</code>, <code>title</code> och <code>desc</code> taggar som Figma och Illustrator lägger till automatiskt.',
        '<strong>Inkscape-namnrymder:</strong> alla element med <code>inkscape:</code> och <code>sodipodi:</code> prefix.',
        '<strong>Onödiga attribut:</strong> <code>xml:space</code>, <code>version</code>, överflödiga <code>xmlns:*</code> och Figma <code>data-*</code> attribut.',
        '<strong>Tomma grupper:</strong> <code>&lt;g&gt;</code> element utan innehåll kvar från raderade lager.',
        '<strong>XML deklarationer:</strong> deklarationen <code>&lt;?xml version="1.0"?&gt;</code> och DOCTYPE onödiga vid inbäddning av SVG i HTML.',
      ],
    },
  ],
};

