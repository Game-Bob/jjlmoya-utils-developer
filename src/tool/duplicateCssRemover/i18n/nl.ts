import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DuplicateCssRemoverUI } from '../ui';

const slug = 'dubbele-css-verwijderen';
const title = 'Dubbele CSS online verwijderen. Stylesheets samenvoegen en opschonen';
const description =
  'Gratis tool om dubbele CSS-code op te schonen en te verwijderen. Voegt redundante selectors samen, respecteert de cascade en verkleint je bestandsgrootte direct in de browser.';

const faqData = [
  {
    question: 'Wat gebeurt er als CSS-selectors worden gedupliceerd?',
    answer:
      'Wanneer dezelfde selector meerdere keren voorkomt, past de browser alle regels toe, maar de laatste declaratie van elke eigenschap overschrijft de eerdere. Het resultaat zijn onnodig zware bestanden zonder enig visueel voordeel.',
  },
  {
    question: 'Gaan er eigenschappen verloren bij het verwijderen van duplicaten?',
    answer:
      'Nee. Het algoritme respecteert de CSS-cascade strikt: bij conflicterende eigenschappen onder dezelfde selector wordt altijd de laatste gedeclareerde bewaard. Unieke eigenschappen uit elk blok worden samengevoegd onder één geünificeerde selector.',
  },
  {
    question: 'Werkt het met geminificeerde CSS of CSS met commentaar?',
    answer:
      'De tool verwijdert CSS-commentaar automatisch vóór de verwerking en werkt correct met code op één regel. Voor CSS met geavanceerde nesting of complexe at-rules wordt aanbevolen de blokken eerst te scheiden.',
  },
  {
    question: 'Wordt mijn CSS naar een server gestuurd?',
    answer:
      'Nee. Alle verwerking vindt direct in je browser plaats via lokaal JavaScript. Geen enkel deel van je CSS wordt naar een externe server gestuurd, wat de volledige privacy van je code garandeert.',
  },
];

const howToData = [
  {
    name: 'Plak je CSS',
    text: 'Kopieer de inhoud van je CSS-bestand met herhaalde selectors en plak het in het linkerveld "Dirty / Duplicate CSS".',
  },
  {
    name: 'Start de opschoning',
    text: 'Klik op "CSS opschonen en samenvoegen". De tool doorzoekt alle selectors, voegt eigenschappen samen en verwijdert redundante blokken.',
  },
  {
    name: 'Bekijk de resultaten en kopieer',
    text: 'Controleer de behaalde bytebesparing en kopieer de geoptimaliseerde CSS met de knop "Code kopiëren" voor direct gebruik in je project.',
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

const ui: DuplicateCssRemoverUI = {
  labelInput: 'Vuile / Dubbele CSS',
  labelOutput: 'Opgeschoonde CSS',
  placeholderInput: '.btn { padding: 10px; color: red; }\n.btn { margin: 5px; color: blue; }',
  placeholderOutput: 'Geoptimaliseerde en samengevoegde CSS verschijnt hier...',
  btnClean: 'CSS opschonen en samenvoegen',
  btnCopy: 'Code kopiëren',
  btnCopied: 'Gekopieerd!',
  statBytesOriginal: 'Originele bytes',
  statBytesClean: 'Opgeschoonde bytes',
  statSaving: 'Besparing',
};

export const content: ToolLocaleContent<DuplicateCssRemoverUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Veelgestelde vragen',
  faq: faqData,
  bibliographyTitle: 'Referenties en documentatie',
  bibliography: [
    {
      name: 'Web Vitals: de invloed van CSS op Render-Blocking en FCP',
      url: 'https://web.dev/articles/render-blocking-resources',
    },
    {
      name: 'W3C-specificatie: CSS Cascade en Overerving',
      url: 'https://www.w3.org/TR/css-cascade-4/',
    },
    {
      name: 'Clean CSS: bibliotheek en methoden voor CSS-minificatie',
      url: 'https://github.com/clean-css/clean-css',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Waarom raakt CSS-code gedupliceerd?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bij het onderhouden van langlopende webprojecten of het werken met legacy-code komt het heel vaak voor dat meerdere ontwikkelaars overlappende CSS-regels schrijven. Uit angst om een bestaand ontwerp te breken, voegt een ontwikkelaar liever een nieuwe redundante regel toe aan het einde van het document dan de originele te bewerken of te refactoren.',
    },
    {
      type: 'paragraph',
      html: 'Het resultaat is een inefficiënt bestand met tientallen herhaaldelijk gedeclareerde selectors, wat de leesbaarheid verslechtert en het downloadgewicht van je webpagina aanzienlijk vergroot.',
    },
    {
      type: 'title',
      text: 'De verborgen impact op webprestaties (Web Vitals)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Stylesheetbestanden blokkeren de natuurlijke weergave van de browser (een <strong>Render-Blocking</strong>-bron). Zolang de browser het volledige CSSOM niet heeft gedownload en opgebouwd, blijft het scherm leeg.',
    },
    {
      type: 'tip',
      html: 'Overbodige stijlen verwijderen gaat niet alleen om codenetjes — het is een meetbare en directe verbetering van vitale metrics zoals de <strong>First Contentful Paint (FCP)</strong>.',
    },
    {
      type: 'title',
      text: 'Hoe we dubbele regels samenvoegen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Deze tool werkt als een intelligente assembler. In plaats van alleen witruimte te comprimeren (zoals een traditionele minifier), doorzoekt hij de tekst recursief op zoek naar identieke selectorpatronen.',
    },
    {
      type: 'list',
      items: [
        'Stel je voor dat je de regel <code>.box { color: red; }</code> hebt en honderd regels later een <code>.box { padding: 10px; color: blue; }</code>. De tool voegt beide blokken samen onder dezelfde selector <code>.box</code>, inclusief de padding.',
        '<strong>Behoud van de CSS-cascade:</strong> Bij directe conflicten bewaart het algoritme strikt de als laatste gedeclareerde eigenschap. Zo blijft je oorspronkelijke opmaak intact na het opschonen.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Stop met het sturen van kilobytes dode tekst naar de telefoons van je gebruikers. Voeg je code samen in milliseconden, volledig offline vanuit je browser.',
    },
  ],
};
