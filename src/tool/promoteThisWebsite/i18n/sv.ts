import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromoteThisWebsiteUI } from '../ui';
import { bibliography } from '../bibliography';

const localized = {
    slug: 'marknadsfor-den-har-webbplatsen',
    title: 'Marknadsför den här webbplatsen',
    description: 'Den interna propagandadisken för jjlmoya.es på spanska och GameBob.dev internationellt. Gör skärmbilder av dina egna sidor till sociala bilder innan Bob tycker att flödet är pinsamt.',
    faqTitle: 'Marknadsför sidan utan att göra katten arg',
    bibliographyTitle: 'Sidor från operationen',
    faq: [
      { question: 'Vem är verktyget egentligen till för?', answer: 'För att marknadsföra sidorna på jjlmoya.es på spanska och GameBob.dev internationellt. Alla andra får titta genom fönstret.' },
      { question: 'Kan jag klistra in en skärmbild direkt?', answer: 'Ja. Kopiera en skärmbild och tryck Ctrl+V. Den blir verktygslagret, eftersom kattstyrelsen godkänner bevis i rätt format.' },
      { question: 'Vad händer med en produktions-URL?', answer: 'Verktyget läser sidans metatitel, väljer rätt varumärke och laddar Open Graph-bilden. Sluggen får ingen befordran.' },
      { question: 'Varför finns två varumärken?', answer: 'jjlmoya.es är den spanska sidan och GameBob.dev den internationella. Katten bryr sig inte om skillnaden.' },
      { question: 'Laddas mina bilder upp?', answer: 'Nej. De stannar i webbläsaren och kompositionen renderas lokalt. Bara PNG-filen du själv laddar ner lämnar sidan.' },
    ],
    howTo: [
      { name: 'Klistra in en skärmbild', text: 'Klistra in en bild från jjlmoya.es eller GameBob.dev med Ctrl+V. Styrelsen vill ha bevis från sitt eget imperium.' },
      { name: 'Välj varumärke', text: 'Välj jjlmoya.es för spanska eller GameBob.dev för den internationella sidan. Katten äger redan lokalen.' },
      { name: 'Ordna bilden', text: 'Dra skärmbild, titel, logotyp, bakgrund och maskot tills kompositionen ser avsiktlig ut.' },
      { name: 'Exportera PNG', text: 'Ladda ner PNG i önskad storlek innan Bob tar åt sig äran.' },
    ],
    seoTitle: 'Den officiella propagandadisken för jjlmoya och GameBob',
    seoIntro: 'Det här är inte en generisk social bildkompositör för någon som precis upptäckt ordet branding. Den finns för att marknadsföra våra sidor på jjlmoya.es och GameBob.dev medan katterna övervakar.',
    seoBody: 'Klistra in en riktig skärmbild eller läs in en produktions-URL. Verktyget läser sidans titel i stället för att gissa från sluggen och håller Open Graph-bilden synlig.',
    seoTip: 'Börja med en produktions-URL från jjlmoya.es eller GameBob.dev. Om titel, varumärke eller bild inte laddas skyller styrelsen på nätet, människan och till sist katterna.',
};
const ui: PromoteThisWebsiteUI = {
    urlLabel: 'Webbplatsens URL', urlPlaceholder: 'https://www.example.com/verktyg/exempel/', applyUrl: 'Använd',
    formatLabel: 'Format', panoramic: 'Panorama · 1536 × 1024', instagram: 'Instagram · 1080 × 1350', square: 'Kvadrat · 1080 × 1080', story: 'Story · 1080 × 1920',
    titleLabel: 'Titel', titlePlaceholder: 'En kort titel för bilden', titleSizeLabel: 'Titelns teckenstorlek', titleBoxSizeLabel: 'Titelrutans storlek', titleStyleLabel: 'Titelstil',
    brandLabel: 'Varumärke', brandStyleLabel: 'Varumärkesstil', advancedLabel: 'Avancerad komposition', assetsLabel: 'Resurser', backgroundLabel: 'Bakgrund', toolLabel: 'Skärmbild av verktyget', logoLabel: 'Logotyp', mascotLabel: 'Maskot',
    layersLabel: 'Lager', backgroundLayer: 'Bakgrund', toolLayer: 'Verktyg', logoLayer: 'Logotyp', mascotLayer: 'Maskot', titleLayer: 'Titel', reset: 'Återställ', download: 'Ladda ner PNG', activeLayer: 'Aktivt lager',
    canvasHint: 'Dra lagren direkt på arbetsytan. Klistra in en skärmbild med Ctrl+V.', pasted: 'Skärmbilden klistrades in som verktygslager.', urlApplied: 'URL tillämpad. Justera titeln och lägg till skärmbilden du vill marknadsföra.', urlLoading: 'Läser sidans titel och officiella bild...', urlFailed: 'Sidan kunde inte läsas. Kontrollera URL:en eller lägg till resurser manuellt.', fileLoaded: 'Resurs laddad.',
    titlePaper: 'Redaktionellt papper', titleRibbon: 'Vikt band', titleInk: 'Bläckstänk', titlePoster: 'Nattposter', titleTicket: 'Avriven biljett', titleMarker: 'Materiell understrykning', titleSplit: 'Delat block', titleCapsule: 'Minimal kapsel', titleCorner: 'Redaktionellt hörn', titleVertical: 'Vertikal accent',
    brandPlain: 'Enkel logotyp', brandPlaque: 'Keramisk plakett', brandTicket: 'Inträdesbiljett', brandStamp: 'Gummistämpel', brandNeon: 'Neonskylt', brandRibbon: 'Signalband', brandCorner: 'Redaktionellt hörn', brandPixel: 'Pixelblock', brandHalo: 'Mjuk gloria', brandEditorial: 'Redaktionell linje', defaultTool: 'Klistra in verktygets skärmbild',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: localized.faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};
const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: localized.title,
  description: localized.description,
  step: localized.howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};
const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: localized.title,
  description: localized.description,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<PromoteThisWebsiteUI> = {
  slug: localized.slug,
  title: localized.title,
  description: localized.description,
  ui,
  faqTitle: localized.faqTitle,
  faq: localized.faq,
  bibliographyTitle: localized.bibliographyTitle,
  bibliography,
  howTo: localized.howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: localized.seoTitle, level: 2 },
    { type: 'paragraph', html: localized.seoIntro },
    { type: 'stats', columns: 3, items: [{ value: '2', label: ui.brandLabel, icon: 'mdi:domain' }, { value: '4', label: ui.formatLabel, icon: 'mdi:crop' }, { value: '0', label: ui.activeLayer, icon: 'mdi:cat' }] },
    { type: 'title', text: localized.title, level: 3 },
    { type: 'paragraph', html: localized.seoBody },
    { type: 'title', text: localized.faqTitle, level: 3 },
    { type: 'paragraph', html: localized.seoBody },
    { type: 'table', headers: [ui.toolLayer, ui.titleLayer, ui.brandLabel], rows: [[ui.toolLabel, ui.titleLabel, ui.logoLabel]] },
    { type: 'tip', title: localized.faqTitle, html: localized.seoTip },
  ],
};
