import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromptLibraryUI } from '../ui';

const slug = 'ai-prompt-bibliotheek';
const title = 'Privé AI Prompt Bibliotheek';
const description = 'Organiseer, label en sla je ChatGPT-, Midjourney- en Claude-prompts privé op. Je eigen promptbank in localStorage.';

const faqData = [
  {
    question: 'Waar worden mijn prompts opgeslagen?',
    answer: 'Je prompts worden uitsluitend opgeslagen in de lokale opslag (localStorage) van je browser. We gebruiken geen externe servers, wat betekent dat je gegevens 100% privé zijn.',
  },
  {
    question: 'Wat gebeurt er als ik browsercookies of de geschiedenis wis?',
    answer: 'Als je de sitegegevens of lokale opslag van je browser wist, verlies je je opgeslagen prompts. We raden aan om back-ups te maken als je je browser regelmatig schoonmaakt.',
  },
  {
    question: 'Kan ik dit hulpmiddel gebruiken voor Midjourney, ChatGPT of DALL-E?',
    answer: 'Ja, het is compatibel met alle soorten AI-instructies. Je kunt specifieke tags aanmaken om je opdrachten te organiseren en ze eenvoudig naar je favoriete AI-tool kopiëren.',
  },
];

const howToData = [
  { name: 'Maak een prompt aan', text: 'Klik op de knop Nieuwe Prompt en voer de titel en instructie in.' },
  { name: 'Tags toevoegen', text: 'Typ tags gescheiden door spatie of komma om je prompts te classificeren.' },
  { name: 'Variabelen gebruiken', text: 'Gebruik vierkante haken [ZO ALS DEZE] in de tekst om invulbare velden op de kaart te maken.' },
  { name: 'Kopiëren en delen', text: 'Kopieer naar klembord met één klik of deel een directe link via de deelknop.' },
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

const ui: PromptLibraryUI = {
  placeholderSearch: 'Zoek op trefwoord of tag...',
  btnNew: 'Nieuwe Prompt',
  emptyTitle: 'Je bibliotheek is leeg',
  emptyDesc: 'Maak je eerste prompt aan en begin met het opbouwen van je privé AI-archief.',
  btnAddFirst: 'Eerste toevoegen',
  modalTitleCreate: 'Nieuwe Prompt Aanmaken',
  modalTitleEdit: 'Prompt Bewerken',
  labelTitle: 'Herkenbare titel',
  placeholderTitle: 'Bijv.: SEO Marketing Expert',
  labelContent: 'Instructie (Prompt)',
  placeholderContent: 'Schrijf hier de gedetailleerde instructies voor de AI...',
  hintContent: 'Tip: gebruik vierkante haken [ZO ALS DEZE] om later variabelen in te vullen.',
  labelTags: 'Tags',
  placeholderTags: 'Bijv.: marketing, seo (spatie of komma om toe te voegen)',
  btnCancel: 'Annuleren',
  btnSave: 'Lokaal Opslaan',
  ariaLabelStar: 'Prompt markeren als favoriet',
  ariaLabelEdit: 'Prompt bewerken',
  ariaLabelShare: 'Prompt delen',
  ariaLabelCopy: 'Prompt kopiëren',
  ariaLabelDelete: 'Prompt verwijderen',
  varsTitle: 'Vereiste variabelen',
  noResults: 'Geen prompts gevonden voor deze zoekopdracht.',
  confirmTitle: 'Prompt verwijderen?',
  confirmDesc: 'Deze actie kan niet ongedaan worden gemaakt.',
  btnCancelDelete: 'Annuleren',
  btnConfirmDelete: 'Definitief verwijderen',
};

export const content: ToolLocaleContent<PromptLibraryUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Referenties over Prompt Engineering',
  bibliography: [
    { name: 'Prompt Engineering Guide (DAIR.AI)', url: 'https://www.promptingguide.ai/' },
    { name: 'Wat is prompt engineering (Google Cloud)', url: 'https://cloud.google.com/discover/what-is-prompt-engineering' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Waarom heb je een Prompt Bibliotheek nodig?', level: 2 },
    {
      type: 'paragraph',
      html: 'Als je regelmatig werkt met AI-tools zoals ChatGPT, Claude of Midjourney, heb je waarschijnlijk al eens dezelfde instructies opnieuw moeten typen. Een <strong>promptbibliotheek</strong> is de definitieve oplossing om te stoppen met het steeds opnieuw schrijven van je favoriete opdrachten.',
    },
    { type: 'title', text: 'Voordelen van het organiseren van je prompts', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Directe zoekfunctie:</strong> Vind die specifieke instructie die je maanden geleden gebruikte met een eenvoudige tekstzoekopdracht.',
        '<strong>Tagclassificatie:</strong> Label je prompts als "marketing", "programmeren" of "copywriting" om snel te filteren.',
        '<strong>Kopiëren met één klik:</strong> Kopieer de volledige tekst naar het klembord met slechts één klik.',
        '<strong>Volledige privacy:</strong> Al je gegevens worden lokaal opgeslagen in je browser via localStorage.',
      ],
    },
    { type: 'title', text: 'Variabelen in je prompts', level: 3 },
    {
      type: 'paragraph',
      html: 'Gebruik de notatie <strong>[VARIABELE]</strong> in je prompts om dynamisch invulbare velden te maken. Wanneer je een kaart opent, verschijnen er invoervelden voor elke gedefinieerde variabele. De prompt wordt gekopieerd met de ingevulde waarden, klaar om in je AI te plakken.',
    },
    { type: 'title', text: 'Prompts delen', level: 3 },
    {
      type: 'paragraph',
      html: 'Elke prompt kan worden gedeeld via een URL. De deelknop genereert een link die, wanneer geopend, het aanmaaklomulier toont dat al is ingevuld met de promptinhoud.',
    },
  ],
};
