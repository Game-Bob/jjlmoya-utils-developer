import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlEncoderDecoderUI } from '../ui';

const slug = 'url-encoder-decoder-sv';
const title = 'URL Encoder och Decoder Online';
const description =
  'Konvertera specialtecken från valfri länk till ett säkert format (Percent-Encoding) eller återställ dem omedelbart och lokalt till deras ursprungliga läsbara tillstånd.';

const faqData = [
  {
    question: 'Vilka tecken kodas i en URL?',
    answer:
      'Alla tecken som inte är tillåtna i ASCII-standarden för URL:er kodas: blanksteg, accenter, symboler som &, =, +, #, ?, / och andra. Till exempel blir ett blanksteg %20 och ett ñ blir %C3%B1.',
  },
  {
    question: 'Vad är skillnaden mellan encodeURI och encodeURIComponent?',
    answer:
      'encodeURI kodar en komplett URL och lämnar reserverade tecken som / och ? intakta. encodeURIComponent kodar alla specialtecken inklusive reserverade tecken, vilket gör den idealisk för att koda enskilda värden för frågeparametrar.',
  },
  {
    question: 'Varför har min URL %20 istället för blanksteg?',
    answer:
      'HTTP-protokollet tillåter inte blanksteg i URL:er. %20 är Percent-Encoding-representationen av ett blanksteg enligt ASCII-standarden. Vissa system använder plustecknet (+) som ett alternativ, men %20 är det mest universella och säkra.',
  },
  {
    question: 'Är det säkert att använda det här verktyget med privata URL:er?',
    answer:
      'Ja, helt säkert. All bearbetning sker i din webbläsare med hjälp av inbyggd JavaScript (encodeURIComponent/decodeURIComponent). Ingen av dina URL:er eller parametrar skickas till någon extern server.',
  },
];

const howToData = [
  {
    name: 'Klistra in råtexten',
    text: 'Skriv eller klistra in din URL eller textsträng i det övre fältet ”Råtext (läsbar)”.',
  },
  {
    name: 'Koda eller avkoda',
    text: 'Klicka på ”Koda URL” för att konvertera texten till det säkra Percent-Encoding-formatet, eller ”Avkoda” för att återställa en kodad URL till dess läsbara form.',
  },
  {
    name: 'Kopiera resultatet',
    text: 'Använd knappen ”Kopiera” i motsvarande fält för att ta resultatet till ditt urklipp.',
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

const ui: UrlEncoderDecoderUI = {
  labelRaw: 'Råtext (läsbar)',
  labelEncoded: 'Formaterad URL (kodad)',
  btnClear: 'Rensa',
  btnCopy: 'Kopiera',
  btnCopied: 'Kopierad!',
  btnEncode: 'Koda URL',
  btnDecode: 'Avkoda',
  placeholderRaw: 'https://example.com/search?q=röda skor&size=38',
  placeholderEncoded: 'https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dr%C3%B6da%20skor%26size%3D38',
};

export const content: ToolLocaleContent<UrlEncoderDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Referenser och dokumentation',
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
      text: 'Vad är URL-kodning?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'När man surfar på internet eller skickar förfrågningar till servrar är det vanligt att tänka på en URL (Uniform Resource Locator) helt enkelt som en ”webbadress”. Internetprotokoll föreskriver dock att URL:er endast kan överföras med en mycket begränsad uppsättning <strong>standard-ASCII</strong>-tecken.',
    },
    {
      type: 'paragraph',
      html: 'Vad händer om URL:en innehåller ett blanksteg, accenter eller specialparametrar som plustecken (<code>+</code>) eller likhetstecken (<code>=</code>)? För att förhindra att system kraschar när de försöker läsa otillåtna tecken, måste dessa översättas till sin säkra kompatibla form med hjälp av <strong>Percent-Encoding</strong>.',
    },
    {
      type: 'title',
      text: 'Hur Percent-Encoding fungerar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'När du använder det här verktyget tar algoritmen alla ”osäkra” tecken (som ett blanksteg eller ett tecken med accent som ñ) och ersätter det med ett procenttecken <code>%</code> följt av två hexadecimala siffror som motsvarar dess värde i UTF-8-standarden.',
    },
    {
      type: 'list',
      items: [
        '<strong>Grundläggande exempel:</strong> Ett enkelt blanksteg ersätts med dess säkra motsvarighet: <code>%20</code>.',
        '<strong>Utökat stöd:</strong> Bokstaven <code>å</code> blir <code>%C3%A5</code>, <code>ä</code> blir <code>%C3%A4</code> och <code>ö</code> blir <code>%C3%B6</code>.',
      ],
    },
    {
      type: 'title',
      text: 'Betydelse i API:er och GET-förfrågningar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Vid utveckling av integrationer är ett typiskt misstag att skicka en rå sträng till URL-parametrar. Om du infogar <code>skjorta&blå</code> i råformat i din backend (<code>/search?q=skjorta&blå</code>), kommer servern att tolka <code>blå</code> som en ny parameter, vilket förstör hela logiken.',
    },
    {
      type: 'paragraph',
      html: 'Detta verktyg garanterar rena, automatiska beräkningar med 100 % körning i din lokala webbläsare. Ingen av dina URL-strängar överförs till tredjepartsservrar, vilket säkerställer integriteten för dina tokens och analysparametrar.',
    },
  ],
};

