import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssBoxShadowGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'css-box-schaduw-generator';
const title = 'CSS Box Shadow Generator';
const description = 'Ontwerp gelaagde CSS-schaduwen visueel met live voorbeeld, schuifregelaars, kleurkiezers en presets. Kopieer schone native CSS direct.';

const howTo = [
  { name: 'Kies een preset of begin vanaf nul', text: 'Kies uit de presets Card, Float, Inset, Glow of Layered, of pas de standaard schaduw aan met de schuifregelaars.' },
  { name: 'Voeg lagen toe en stapel ze', text: 'Klik + om lagen toe te voegen (tot 5). Selecteer elke laag om offset, blur, spread, kleur en dekking te bewerken.' },
  { name: 'Schakel inset en achtergrond', text: 'Vink inset aan voor binnenste schaduwen. Wijzig de achtergrondkleur van het voorbeeld.' },
  { name: 'Kopieer de CSS', text: 'Wanneer het voorbeeld overeenkomt met je ontwerp, kopieer de gegenereerde CSS en plak deze in je stylesheet.' },
];

const faq = [
  { question: 'Kan ik meerdere schaduwen op een element gebruiken?', answer: 'Ja. CSS staat komma-gescheiden box-shadow waarden toe. Deze tool laat je tot 5 lagen stapelen met onafhankelijke bediening.' },
  { question: 'Wat doet een negatieve spread waarde?', answer: 'Negatieve spread verkleint de schaduw naar binnen voor het vervagen. Handig voor subtiele zwevende effecten.' },
  { question: 'Waarvoor dient de inset optie?', answer: 'Inset schaduwen worden binnen de elementrand weergegeven en creëren een verzonken look. Ideaal voor formuliervelden en ingedrukte kaarten.' },
  { question: 'Heeft de gegenereerde CSS framework-afhankelijkheden?', answer: 'Nee. Het resultaat is pure native CSS. Gebruik het in elk project met standaard CSS.' },
];

const ui: CssBoxShadowGeneratorUI = {
  offsetXLabel: 'Offset X',
  offsetYLabel: 'Offset Y',
  blurLabel: 'Vervaging',
  spreadLabel: 'Spreiding',
  opacityLabel: 'Dekking',
  insetLabel: 'Binnen',
  addLayer: 'Laag toevoegen',
  removeLayer: 'Laag verwijderen',
  resetAll: 'Herstellen',
  codeTitle: 'Gegenereerde CSS',
  copyCode: 'CSS kopiëren',
  copied: 'Gekopieerd!',
  previewLabel: 'Voorbeeld',
  presetCard: 'Card',
  presetFloat: 'Float',
  presetInset: 'Inset',
  presetGlow: 'Glow',
  presetLayered: 'Lagen',
  presetsLabel: 'Presets',
  layerPrefix: 'Laag',
  bgColorLabel: 'Achtergrond',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<CssBoxShadowGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'CSS Box-Shadow Generator FAQ',
  faq,
  bibliographyTitle: 'CSS Box-Shadow Referenties',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Ontwerp CSS-schaduwen visueel in plaats van waarden te raden', level: 2 },
    { type: 'paragraph', html: '<strong>box-shadow</strong> handmatig aanpassen is vervelend. Deze visuele generator laat je meerdere schaduwen stapelen, live bekijken en productieklaar CSS kopiëren.' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: 'Schaduwlagen per element', icon: 'mdi:layers' }, { value: 'Live', label: 'Voorbeeld bij elke wijziging', icon: 'mdi:eye' }, { value: '5', label: 'Snelle presets', icon: 'mdi:star' }] },
    { type: 'title', text: 'Stapel meerdere schaduwen voor realistische diepte', level: 3 },
    { type: 'paragraph', html: 'Echte schaduwen zijn zelden uniform. Een strakke schaduw dicht bij het element stapelen met een zachtere, bredere creëert natuurlijke diepte. Gebruik <strong>+</strong> om lagen toe te voegen.' },
    { type: 'table', headers: ['Bediening', 'CSS-waarde', 'Effect'], rows: [['Offset X', '1e lengte', 'Horizontale verplaatsing.'], ['Offset Y', '2e lengte', 'Verticale verplaatsing.'], ['Vervaging', '3e lengte', 'Blur-radius.'], ['Spreiding', '4e lengte', 'Vergroot of verkleint de schaduw.'], ['Kleur & Dekking', 'rgba()', 'Schaduwkleur met onafhankelijke dekking.'], ['Binnen', 'inset', 'Schaduw binnen de elementrand.']] },
    { type: 'summary', title: 'Aanbevolen workflow', items: ['Begin met een preset.', 'Voeg lagen toe voor realistische diepte.', 'Gebruik negatieve spread voor zwevende kaarten.', 'Kopieer de CSS en plak deze.'] },
  ],
};
