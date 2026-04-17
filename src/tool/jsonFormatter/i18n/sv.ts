import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonFormatterUI } from '../ui';

const slug = 'json-formaterare-validator';
const title = 'Gratis Online JSON formaterare och Validator';
const description =
  'Gratis onlineverktyg för att formatera, validera och reparera JSON-kod. Snygga till och formatera JSON. Upptäcker syntaxfel och förbättrar kodens läsbarhet.';

const faqData = [
  {
    question: 'Är mina data säkra när jag använder denna formaterare?',
    answer:
      'Absolut. All bearbetning sker till 100 % i din webbläsare (Client-Side). Dina JSON-data skickas aldrig till någon server, vilket garanterar fullständig integritet för dina datastrukturer.',
  },
  {
    question: 'Vad orsakar ett "Invalid JSON"-fel?',
    answer:
      'Det orsakas vanligtvis av extra kommatecken i slutet av ett objekt, saknade dubbla citattecken runt nycklar eller osynliga tecken. Vårt verktyg markerar exakt vilken rad felet finns på så att du kan åtgärda det.',
  },
  {
    question: 'Kan verktyget reparera trasig JSON?',
    answer:
      'Vårt verktyg försöker automatiskt korrigera vanliga fel som onödiga avslutande kommatecken eller felaktiga teckenkodningar, så att JSON-koden blir giltig enligt RFC 8259-standarden.',
  },
  {
    question: 'Stöder det mycket stora JSON-filer?',
    answer:
      'Ja, bearbetningsmotorn är optimerad för att hantera komplexa datastrukturer och stora filer utan att blockera webbläsarens gränssnitt.',
  },
];

const howToData = [
  {
    name: 'Klistra in din kod',
    text: 'Klistra in din oformaterade eller minifierade JSON i det stora textfältet.',
  },
  {
    name: 'Validera och formatera',
    text: 'Systemet analyserar automatiskt koden, markerar syntaxfel och tillämpar indrag för att förbättra läsbarheten.',
  },
  {
    name: 'Välj en stil',
    text: 'Välj mellan ett expanderat (beautify) eller komprimerat (minify) format beroende på om du behöver läsbarhet eller platsbesparing.',
  },
  {
    name: 'Kopiera resultatet',
    text: 'Klicka på kopieringsknappen för att ta den perfekt validerade JSON-koden till ditt urklipp.',
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

const ui: JsonFormatterUI = {
  labelInput: 'Inmatning (JSON)',
  labelOutput: 'Resultat',
  btnMinify: 'Minifiera',
  btnBeautify: 'Formatera',
  btnFix: 'Försök reparera',
  btnCopy: 'Kopiera',
  statusWaiting: 'Väntar på inmatning...',
  statusValid: 'Giltig JSON',
  statusInvalid: 'Ogiltig JSON',
  toastCopied: 'Kopierad!',
  toastFixed: 'JSON reparerad (Förhandsgranskning)',
  toastFixFailed: 'Kunde inte reparera automatiskt',
  placeholder: 'Klistra in din JSON här...',
};

export const content: ToolLocaleContent<JsonFormatterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Referenser och Standarder',
  bibliography: [
    {
      name: 'RFC 8259 – The JavaScript Object Notation (JSON) Data Interchange Format (IETF)',
      url: 'https://datatracker.ietf.org/doc/html/rfc8259',
    },
    {
      name: 'ECMA-404 – The JSON Data Interchange Syntax (Ecma International)',
      url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-404/',
    },
    {
      name: 'JSON.org – Introduktion till JSON',
      url: 'https://www.json.org/json-en.html',
    },
    {
      name: 'MDN Web Docs – JSON',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'JSON-validering och formatering',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'JSON (JavaScript Object Notation) är de facto-standard för datautbyte på nätet. Dess strikta syntax gör den dock sårbar för mänskliga fel vid manuell redigering.',
    },
    {
      type: 'paragraph',
      html: 'Detta verktyg låter dig validera strukturen, formatera koden för att förbättra dess läsbarhet och automatiskt reparera vanliga syntaxfel.',
    },
    { type: 'grid', columns: 2 },
    {
      type: 'card',
      title: 'Vanliga fel som repareras',
      html: '<ul><li><strong>Enkla citattecken:</strong> JSON-standarden kräver dubbla citattecken. Verktyget konverterar <code>\'key\': \'value\'</code> till <code>"key": "value"</code>.</li><li><strong>Nycklar utan citattecken:</strong> Hittar objektsnycklar i JavaScript-stil och lägger till nödvändiga citattecken.</li><li><strong>Extra kommatecken i slutet:</strong> Tar bort kommatecken i slutet av objekt eller arrayer (trailing commas) som bryter den strikta tolken.</li></ul>',
    },
    {
      type: 'card',
      title: 'Funktioner',
      html: '<ul><li><strong>Syntaxmarkering:</strong> Färgsätter nycklar, strängar, siffror och booleaner för att underlätta snabb läsning.</li><li><strong>Realtidsvalidering:</strong> Indikerar direkt om JSON-koden är giltig eller visar det specifika tolkningsfelet.</li><li><strong>Total integritet:</strong> Bearbetningen sker till 100 % i din webbläsare. Inga data skickas till externa servrar.</li></ul>',
    },
  ],
};

