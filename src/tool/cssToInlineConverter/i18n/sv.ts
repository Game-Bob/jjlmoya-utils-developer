import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssToInlineConverterUI } from '../ui';

const slug = 'css-till-inline-html-konverterare';
const title = 'CSS till Inline HTML Konverterare. Inliner för Epost';
const description =
  'Transformera dina stilmallar och CSS-klasser till automatiskt infogade stilar i din HTML. Perfekt för nyhetsbrev, transaktionsmeddelanden och säker webblayout.';

const faqData = [
  {
    question: 'Varför behöver e-post infogad CSS istället för externa stilmallar?',
    answer:
      'Epostklienter som Outlook, Gmail eller Apple Mail filtrerar eller ignorerar <link> och <style>-taggar av säkerhetsskäl. Det enda garanterade sättet för en stil att tillämpas korrekt i ett e-postmeddelande är att bädda in den direkt i style-attributet för varje HTML-element.',
  },
  {
    question: 'Vad händer om ett element redan har sitt eget style-attribut?',
    answer:
      'Verktyget respekterar befintliga infogade stilar och lägger till nya egenskaper, simulerar CSS-överskridningsbeteendet: egenskaper som deklareras senare åsidosätter tidigare i händelse av konflikt.',
  },
  {
    question: 'Fungerar det med komplexa väljare som :hover eller media queries?',
    answer:
      'Verktyget behandlar klass-, id-, attribut- och strukturell pseudoklassväljare som DOMParser kan lösa. Tillståndsberoendeväljare som :hover och media queries kan inte infogas (de beror på körningsmiljön) och ignoreras.',
  },
  {
    question: 'Skickas min HTML och CSS till någon server?',
    answer:
      'Nej. All bearbetning sker 100% i din webbläsare med använt av det inbyggda DOMParser API:t. Ingen del av din kod lämnar din enhet, vilket garanterar fullständig integritet för mallar med känsligt innehål.',
  },
];

const howToData = [
  {
    name: 'Klistra in din original HTML',
    text: 'Skriv eller klistra in HTML-koden du vill bearbeta i fältet "Original HTML". Det kan vara ett fragment eller ett fullständigt dokument.',
  },
  {
    name: 'Lägg till dina CSS-regler',
    text: 'Klistra in klasserna och id:na du vill injicera i fältet "CSS-regler". Verktyget tillämpar dem med respekt för väljarespecificitet.',
  },
  {
    name: 'Konvertera och kopiera',
    text: 'Klicka på "Injicera CSS i HTML". Resultatet med alla infogade stilar visas nedan, redo att kopiera och klistra in i din e-posthanterare eller CMS.',
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

const ui: CssToInlineConverterUI = {
  labelHtml: 'Original HTML',
  labelCss: 'CSS Regler',
  labelOutput: 'Inline HTML Resultat',
  placeholderHtml: '<div class="my-class">Hello World</div>',
  placeholderCss: '.my-class { color: red; padding: 10px; }',
  placeholderOutput: 'Din HTML med infogade stilar kommer att visas här...',
  btnConvert: 'Injicera CSS i HTML',
  btnCopy: 'Kopiera Kod',
  btnCopied: 'Kopierad!',
  msgError: 'Bearbetningsfel. Kontrollera att din HTML och CSS är giltiga.',
};

export const content: ToolLocaleContent<CssToInlineConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Vanliga Frågor',
  faq: faqData,
  bibliographyTitle: 'Referenser och Dokumentation',
  bibliography: [
    {
      name: 'Can I email: HTML och CSS-stödmatris för Epost',
      url: 'https://www.caniemail.com/',
    },
    {
      name: 'MDN Web Docs: Det globala style-attributet',
      url: 'https://developer.mozilla.org/en/docs/Web/HTML/Global_attributes/style',
    },
    {
      name: 'DOMParser API: Säker parsning i webbläsaren',
      url: 'https://developer.mozilla.org/en/docs/Web/API/DOMParser',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Vad är en CSS Inliner och varför behöver du en?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Vid utveckling av moderna webbapplikationer är vi vana vid att separera ansvaret: HTML bygger strukturen och en extern CSS-fil tillhandahåller all visuell styling. Dock inte alla miljöer litar på externa stilmallar eller globala <code>&lt;style&gt;</code>-taggar.',
    },
    {
      type: 'paragraph',
      html: 'Det mest populära och strikta användningsfallet där extern CSS misslyckas är <strong>Epostmallsutveckling</strong>. I dessa miljöer är det enda pålitliga sättet för en typsnitt, färg eller marginal att renderas korrekt att vara inbäddad direkt i taggen: <code>&lt;span style="color: red;"&gt;</code>.',
    },
    {
      type: 'title',
      text: 'CSS-problemet i Epostklienter',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Epostklienter som Microsoft Outlook, Apple Mail eller Gmail har infamösa historier med sina restriktiva CSS-renderingsmotorer. De flesta filtrerar eller förkastas <code>&lt;link&gt;</code> eller <code>&lt;style&gt;</code>-taggar av rädsla för kodinjektioner som kan bryta läsgränssnittet.',
    },
    {
      type: 'tip',
      html: 'För nyhetsbrev eller transaktionsmeddelanden (kvitton, kontobekräftelser) är det att använda tabeller och <em>infogad CSS</em> som är guldstandarden i e-postmarknadsföringsindustrin.',
    },
    {
      type: 'title',
      text: 'Hur detta verktyg fungerar i din webbläsare',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Säker Parsning:</strong> Använder <code>DOMParser API</code> för att temporärt omvandla den inmatade HTML:n till en säker virtuell DOM i din webbläsare.',
        '<strong>Kaskadsimulering:</strong> Analyserar dina CSS-regler, tillämpar specificitetsvolymer på väljare och muterar <code>style</code>-attributen för valda HTML-element genom att injicera koden.',
        '<strong>100% Offline:</strong> Ingen del av din kod lämnar din enhet. Total integritet för mallar med känsligt innehål.',
      ],
    },
  ],
};
