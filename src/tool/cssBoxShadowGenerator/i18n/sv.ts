import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssBoxShadowGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'css-boxskugga-generator';
const title = 'CSS Box Shadow Generator';
const description = 'Designa skiktade CSS-skuggor visuellt med live-förhandsvisning, reglage, färgväljare och förinställningar. Kopiera ren native CSS direkt.';

const howTo = [
  { name: 'Välj en förinställning eller börja från grunden', text: 'Välj bland förinställningarna Card, Float, Inset, Glow eller Layered, eller justera standardskuggan med reglagen.' },
  { name: 'Lägg till och stapla lager', text: 'Klicka + för att lägga till lager (upp till 5). Välj varje lager för att redigera offset, blur, spread, färg och opacitet.' },
  { name: 'Växla inset och bakgrund', text: 'Markera inset för inre skuggor. Ändra bakgrundsfärgen för förhandsvisningen.' },
  { name: 'Kopiera CSS:en', text: 'När förhandsvisningen matchar din design, kopiera den genererade CSS:en och klistra in i din stilmall.' },
];

const faq = [
  { question: 'Kan jag använda flera skuggor på ett element?', answer: 'Ja. CSS tillåter kommaseparerade box-shadow-värden. Det här verktyget låter dig stapla upp till 5 lager med oberoende kontroller.' },
  { question: 'Vad gör ett negativt spread-värde?', answer: 'Negativ spread krymper skuggan inåt före oskärpan. Användbart för subtila svävande effekter.' },
  { question: 'Vad är inset-alternativet till för?', answer: 'Inset-skuggor renderas innanför elementkanten och skapar ett försänkt utseende. Idealisk för formulärfält och intryckta kort.' },
  { question: 'Har den genererade CSS:en ramverksberoenden?', answer: 'Nej. Resultatet är ren native CSS. Använd i alla projekt med standard-CSS.' },
];

const ui: CssBoxShadowGeneratorUI = {
  offsetXLabel: 'Offset X',
  offsetYLabel: 'Offset Y',
  blurLabel: 'Oskärpa',
  spreadLabel: 'Spridning',
  opacityLabel: 'Opacitet',
  insetLabel: 'Inre',
  addLayer: 'Lägg till lager',
  removeLayer: 'Ta bort lager',
  resetAll: 'Återställ',
  codeTitle: 'Genererad CSS',
  copyCode: 'Kopiera CSS',
  copied: 'Kopierat!',
  previewLabel: 'Förhandsvisning',
  presetCard: 'Card',
  presetFloat: 'Float',
  presetInset: 'Inset',
  presetGlow: 'Glow',
  presetLayered: 'Lager',
  presetsLabel: 'Förval',
  layerPrefix: 'Lager',
  bgColorLabel: 'Bakgrund',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<CssBoxShadowGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'CSS Box-Shadow Generator FAQ',
  faq,
  bibliographyTitle: 'CSS Box-Shadow Referenser',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Designa CSS-skuggor visuellt istället för att gissa värden', level: 2 },
    { type: 'paragraph', html: 'Att justera <strong>box-shadow</strong> för hand är tråkigt. Denna visuella generator låter dig stapla flera skuggor, se dem live och kopiera produktionsklar CSS.' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: 'Skugglager per element', icon: 'mdi:layers' }, { value: 'Live', label: 'Förhandsvisning vid varje ändring', icon: 'mdi:eye' }, { value: '5', label: 'Snabba förval', icon: 'mdi:star' }] },
    { type: 'title', text: 'Stapla flera skuggor för realistiskt djup', level: 3 },
    { type: 'paragraph', html: 'Verkliga skuggor är sällan enhetlig oskärpa. Att stapla en tight skugga nära elementet med en mjukare, bredare skapar naturligt djup. Använd <strong>+</strong> för att lägga till lager.' },
    { type: 'table', headers: ['Kontroll', 'CSS-värde', 'Effekt'], rows: [['Offset X', '1:a längd', 'Horisontell förskjutning.'], ['Offset Y', '2:a längd', 'Vertikal förskjutning.'], ['Oskärpa', '3:e längd', 'Oskärperadie.'], ['Spridning', '4:e längd', 'Expanderar eller krymper skuggan.'], ['Färg & Opacitet', 'rgba()', 'Skuggfärg med oberoende opacitet.'], ['Inre', 'inset', 'Skugga innanför elementkanten.']] },
    { type: 'summary', title: 'Rekommenderat arbetsflöde', items: ['Börja med en förinställning.', 'Lägg till lager för realistiskt djup.', 'Använd negativ spread för svävande kort.', 'Kopiera CSS:en och klistra in.'] },
  ],
};
