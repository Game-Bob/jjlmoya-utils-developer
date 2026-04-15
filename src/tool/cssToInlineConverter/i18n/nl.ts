import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssToInlineConverterUI } from '../ui';

const slug = 'css-naar-inline-html-converter';
const title = 'CSS naar Inline HTML omzetten. Inliner voor emails';
const description =
  'Zet uw stylesheets en CSS-klassen automatisch om naar inline stijlen in uw HTML. Ideaal voor nieuwsbrieven, transactionele emails en betrouwbare webopmaak.';

const faqData = [
  {
    question: 'Waarom hebben emails inline CSS nodig in plaats van externe stylesheets?',
    answer:
      'E-mailclients zoals Outlook, Gmail of Apple Mail filteren of negeren <link>- en <style>-tags om veiligheidsredenen. De enige gegarandeerde manier om een stijl correct toe te passen in een e-mail, is door die rechtstreeks in het style-attribuut van elk HTML-element in te sluiten.',
  },
  {
    question: 'Wat gebeurt er als een element al een eigen style-attribuut heeft?',
    answer:
      'Het gereedschap respecteert bestaande inline stijlen en voegt de nieuwe eigenschappen daarna toe, waarbij het CSS-cascadegedrag wordt gesimuleerd: eigenschappen die later worden gedeclareerd, overschrijven eerdere bij conflicten.',
  },
  {
    question: 'Werkt het ook met complexe selectors zoals :hover of media queries?',
    answer:
      'Het gereedschap verwerkt klasse-, id-, attribuut- en structurele pseudo-klasseselectors die DOMParser kan oplossen. Toestandsafhankelijke selectors zoals :hover en media queries kunnen niet worden geïnlined (ze zijn afhankelijk van de runtime-omgeving) en worden genegeerd.',
  },
  {
    question: 'Wordt mijn HTML- en CSS-code naar een server gestuurd?',
    answer:
      'Nee. Alle verwerking vindt 100% in uw browser plaats via de native DOMParser API. Geen enkele byte van uw code verlaat uw apparaat, wat volledige privacy garandeert voor sjablonen met gevoelige inhoud.',
  },
];

const howToData = [
  {
    name: 'Plak uw originele HTML',
    text: 'Schrijf of plak de HTML die u wilt verwerken in het veld "Originele HTML". Dit kan een fragment of een volledig document zijn.',
  },
  {
    name: 'Voeg uw CSS-regels toe',
    text: 'Plak de klassen en id\'s die u wilt injecteren in het veld "CSS-regels". Het gereedschap past ze toe met inachtneming van de selectorspecificiteit.',
  },
  {
    name: 'Converteren en kopiëren',
    text: 'Klik op "CSS in HTML injecteren". Het resultaat met alle inline stijlen verschijnt eronder, klaar om te kopiëren en te plakken in uw e-mailprogramma of CMS.',
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

const ui: CssToInlineConverterUI = {
  labelHtml: 'Originele HTML',
  labelCss: 'CSS-regels',
  labelOutput: 'Inline HTML-resultaat',
  placeholderHtml: '<div class="mijn-klasse">Hallo Wereld</div>',
  placeholderCss: '.mijn-klasse { color: red; padding: 10px; }',
  placeholderOutput: 'Uw HTML met ingebedde stijlen verschijnt hier...',
  btnConvert: 'CSS in HTML injecteren',
  btnCopy: 'Code kopiëren',
  btnCopied: 'Gekopieerd!',
  msgError: 'Verwerkingsfout. Controleer of uw HTML en CSS geldig zijn.',
};

export const content: ToolLocaleContent<CssToInlineConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Veelgestelde vragen',
  faq: faqData,
  bibliographyTitle: 'Referenties en documentatie',
  bibliography: [
    {
      name: 'Can I email: HTML- en CSS-ondersteuningsmatrix voor emails',
      url: 'https://www.caniemail.com/',
    },
    {
      name: 'MDN Web Docs: Het globale style-attribuut',
      url: 'https://developer.mozilla.org/nl/docs/Web/HTML/Global_attributes/style',
    },
    {
      name: 'DOMParser API: Veilig parseren in de browser',
      url: 'https://developer.mozilla.org/nl/docs/Web/API/DOMParser',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Wat is een CSS Inliner en waarom heeft u die nodig?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bij het ontwikkelen van moderne webapplicaties zijn we gewend om verantwoordelijkheden te scheiden: HTML bouwt de structuur, een extern CSS-bestand verzorgt alle visuele opmaak. Niet alle omgevingen vertrouwen echter op externe stylesheets of globale <code>&lt;style&gt;</code>-tags.',
    },
    {
      type: 'paragraph',
      html: 'Het meest voorkomende en strenge geval waarbij externe CSS tekortschiet, is de <strong>ontwikkeling van emailsjablonen</strong>. In deze omgevingen is de enige betrouwbare manier om een lettertype, kleur of marge correct weer te geven, het rechtstreeks in de tag insluiten: <code>&lt;span style="color: red;"&gt;</code>.',
    },
    {
      type: 'title',
      text: 'Het CSS-probleem in e-mailclients',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'E-mailclients zoals Microsoft Outlook, Apple Mail of Gmail staan bekend om hun restrictieve CSS-rendermachines. De meeste filteren of verwijderen <code>&lt;link&gt;</code>- of <code>&lt;style&gt;</code>-tags uit angst voor code-injecties die de leesinterface kunnen verstoren.',
    },
    {
      type: 'tip',
      html: 'Voor nieuwsbrieven of transactionele emails (kassabonnen, accountbevestigingen) geldt het gebruik van tabellen en <em>inline CSS</em> als de gouden standaard in de e-mailmarketingbranche.',
    },
    {
      type: 'title',
      text: 'Hoe dit gereedschap werkt in uw browser',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Veilig parseren:</strong> Gebruikt de <code>DOMParser API</code> om de ingevoerde HTML tijdelijk te transformeren naar een veilige virtuele DOM binnen uw browser.',
        '<strong>Cascadesimulatie:</strong> Analyseert uw CSS-regels, past specificiteitsgewichten toe op selectors en schrijft de <code>style</code>-attributen van de geselecteerde HTML-elementen bij door de code in te injecteren.',
        '<strong>100% offline:</strong> Geen enkele byte van uw code verlaat uw apparaat. Volledige privacy voor sjablonen met gevoelige inhoud.',
      ],
    },
  ],
};
