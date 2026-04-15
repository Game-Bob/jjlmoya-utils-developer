import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromptLibraryUI } from '../ui';
const slug = 'privat-prompt-bibliotek';
const title = 'Privat AI Prompt Bibliotek';
const description = 'Organisera, tagga och spara dina ChatGPT, Midjourney och Claude-promptar privat. Din egen promptbank i localStorage.';
const faqData = [
  { question: 'Var sparas mina prompter?', answer: 'Dina prompter sparas uteslutande i din webbläsares lokala lagring. Vi använder inte externa servrar, så dina data är 100% privata.' },
  { question: 'Vad händer om jag rensar webbläsarcookies eller historik?', answer: 'Om du rensar webbplatsdata eller lokala lagringsdata förlorar du dina sparade prompter. Vi rekommenderar att du gör säkerhetskopior om du ofta rensar din webbläsare.' },
  { question: 'Kan jag använda detta för Midjourney, ChatGPT eller DALL-E?', answer: 'Ja, det är kompatibelt med alla typer av AI-instruktioner. Du kan skapa specifika taggar för att organisera dina kommandon och kopiera dem till ditt föredragna AI-verktyg enkelt.' },
];
const howToData = [
  { name: 'Skapa en prompt', text: 'Klicka på knappen Ny prompt och ange titel och instruktion.' },
  { name: 'Lägg till taggar', text: 'Skriv taggar åtskilda av mellanslag eller kommatecken för att klassificera dina prompter.' },
  { name: 'Använd variabler', text: 'Använd hakparenteser [SÅ HÄR] i texten för att skapa ifyllbara fält på kortet.' },
  { name: 'Kopiera och dela', text: 'Kopiera till urklipp med ett klick eller dela en direkt länk med delningsknappen.' },
];
const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
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
const ui: PromptLibraryUI = {
  placeholderSearch: 'Sök efter nyckelord eller tagg...',
  btnNew: 'Ny Prompt',
  emptyTitle: 'Ditt bibliotek är tomt',
  emptyDesc: 'Skapa din första prompt och börja bygga ditt privata AI-arkiv.',
  btnAddFirst: 'Lägg till den första',
  modalTitleCreate: 'Skapa Ny Prompt',
  modalTitleEdit: 'Redigera Prompt',
  labelTitle: 'Identifierande titel',
  placeholderTitle: 'Ex.: SEO Marketing Expert',
  labelContent: 'Instruktion (Prompt)',
  placeholderContent: 'Skriv detaljerade instruktioner för AI här...',
  hintContent: 'Tips: använd hakparenteser [SÅHÄR] för att fylla i variabler senare.',
  labelTags: 'Taggar',
  placeholderTags: 'Ex.: marketing, seo (mellanslag eller kommatecken för att lägga till)',
  btnCancel: 'Avbryt',
  btnSave: 'Spara Lokalt',
  ariaLabelStar: 'Stjärnmärk prompt',
  ariaLabelEdit: 'Redigera prompt',
  ariaLabelShare: 'Dela prompt',
  ariaLabelCopy: 'Kopiera prompt',
  ariaLabelDelete: 'Ta bort prompt',
  varsTitle: 'Obligatoriska variabler',
  noResults: 'Inga prompter hittades för denna sökning.',
  confirmTitle: 'Ta bort prompt?',
  confirmDesc: 'Denna åtgärd kan inte ångras.',
  btnCancelDelete: 'Avbryt',
  btnConfirmDelete: 'Ta bort permanent',
};
export const content: ToolLocaleContent<PromptLibraryUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Vanliga Frågor',
  faq: faqData,
  bibliographyTitle: 'Prompt Engineering Referenser',
  bibliography: [
    { name: 'Prompt Engineering Guide (DAIR.AI)', url: 'https://www.promptingguide.ai/' },
    { name: 'Vad är prompt engineering (Google Cloud)', url: 'https://cloud.google.com/discover/what-is-prompt-engineering' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Varför behöver du ett Prompt Bibliotek?', level: 2 },
    { type: 'paragraph', html: 'Om du regelbundet arbetar med AI-verktyg som ChatGPT, Claude eller Midjourney, har du förmodligen hittat dig själv upprepa samma instruktioner. Ett <strong>prompt-bibliotek</strong> är den definitiva lösningen för att sluta slösa tid på att skriva om dina favoritkommandon.' },
    { type: 'title', text: 'Fördelar med att organisera dina prompter', level: 3 },
    { type: 'list', items: [ '<strong>Omedelbar sökning:</strong> Hitta den specifika instruktionen du använde för månader sedan med en enkel textsökning.', '<strong>Taggklassificering:</strong> Tagga dina prompter som "marketing", "programmering" eller "copywriting" för snabb filtrering.', '<strong>Enklick-kopiering:</strong> Kopiera hela texten till urklipp med ett enda klick.', '<strong>Fullständig integritet:</strong> All din data lagras lokalt i din webbläsare via localStorage.' ] },
    { type: 'title', text: 'Variabler i dina prompter', level: 3 },
    { type: 'paragraph', html: 'Använd <strong>[VARIABLE]</strong> notationen i dina prompter för att skapa dynamiskt ifyllbara fält. När du öppnar ett kort visas inmatningar för varje definierad variabel. Prompten kopieras med de ifyllda värdena, redo att klistra in i din AI.' },
    { type: 'title', text: 'Delning av prompter', level: 3 },
    { type: 'paragraph', html: 'Varje prompt kan delas via en URL. Delningsknappen genererar en länk som, när den öppnas, visar skapningsformuläret förifyllt med promptinnehållet.' },
  ],
};
