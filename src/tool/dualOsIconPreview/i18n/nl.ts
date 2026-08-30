import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { ToolLocaleContent, SEOSection } from '../../../types';
import type { DualOsIconPreviewUI } from '../ui';

interface LocalizedCopy {
  locale: string;
  slug: string;
  title: string;
  description: string;
  faqTitle: string;
  bibliographyTitle: string;
  ui: DualOsIconPreviewUI;
  faq: { question: string; answer: string }[];
  howTo: { name: string; text: string }[];
  seo: SEOSection[];
}

function createDualOsIconPreviewContent(copy: LocalizedCopy): ToolLocaleContent<DualOsIconPreviewUI> {
  const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: copy.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
  const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: copy.title, description: copy.description, step: copy.howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
  const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: copy.title, description: copy.description, applicationCategory: 'DesignApplication', operatingSystem: 'iOS, Android', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: copy.locale };
  return { slug: copy.slug, title: copy.title, description: copy.description, ui: copy.ui, faqTitle: copy.faqTitle, faq: copy.faq, bibliographyTitle: copy.bibliographyTitle, bibliography, howTo: copy.howTo, schemas: [appSchema, faqSchema, howToSchema], seo: copy.seo };
}

const title = 'Apppictogram audit voor iOS en Android';
const description = 'Upload een logo en controleer hoe het eruitziet op iPhone en Pixel. Bekijk iOS modi, adaptieve Android maskers, veilige marges en thema pictogrammen direct in de browser.';
const ui: DualOsIconPreviewUI = {
  labelUpload: 'Logo uploaden', uploadAction: 'Afbeelding kiezen', uploadHint: 'Hetzelfde teken vult beide telefoons', dropHint: 'PNG, JPG, WEBP of SVG', labelAppName: 'Appnaam', appNamePlaceholder: 'Verschijnt onder het pictogram', labelBrandColor: 'Systeemkleur voor accent', labelIosAppearance: 'iOS weergave', iosAppearanceHint: 'Controleer het teken in elke beginschermmodus', iosDefault: 'Standaard', iosDark: 'Donker', iosClear: 'Helder', iosTinted: 'Getint', labelAndroidShape: 'Adaptief Android masker', androidShapeHint: 'De launcher kan de buitenvorm wijzigen', androidCircle: 'Cirkel', androidSquircle: 'Squircle', androidRounded: 'Rond', androidTeardrop: 'Druppel', labelAndroidTheme: 'Themapictogram bekijken', androidThemeHint: 'Geeft elk pictogram één systeemtint en behoudt de omtrek', iosDeviceLabel: 'iPhone', androidDeviceLabel: 'Pixel', iosHomeLabel: 'Beginscherm', androidHomeLabel: 'Launcher', safeZoneLabel: 'iOS masker', adaptiveLayerLabel: 'Adaptief pictogram', monochromeLabel: 'Thema laag', nameFallback: 'Je app', emptyLogo: 'Je logo', fileError: 'Kies een afbeeldingsbestand om verder te gaan.', statusReady: 'Gereed', statusNeedsReview: 'Logo toevoegen', stageKicker: 'Twee apparaatcontexten, één audit', stageNote: 'Bekijk elke behandeling in context', auditTitle: 'Logo audit', auditHint: 'Lokaal gemeten op basis van de geladen afbeelding', auditWaiting: 'Upload een logo', auditNotChecked: 'Niet gecontroleerd', auditFile: 'Canvas', auditAspect: 'Beeldverhouding', auditResolution: 'Resolutie', auditIosMask: 'iOS masker marge', auditAndroidZone: 'Android veilige zone', auditMargin: 'Minimale rand', auditTransparency: 'Alfa rand', auditTransparent: 'Transparant', auditFullBleed: 'Volledig gevuld', statusPass: 'GESLAAGD', statusReview: 'CONTROLEREN',
};
const faq = [
  { question: 'Wat controleert deze audit van het apppictogram?', answer: 'De audit controleert afmetingen, beeldverhouding, resolutie, transparante rand, iOS masker marge en de adaptieve Android veilige zone. Je kunt ook de appnaam op launcher formaat bekijken.' },
  { question: 'Kan ik iPhone en Android tegelijk zien?', answer: 'Ja. Hetzelfde logo en dezelfde appnaam verschijnen tegelijk in een iPhone beginscherm en een Pixel launcher, zodat de context van beide apparaten zichtbaar blijft.' },
  { question: 'Wat doet de modus voor Android themapictogrammen?', answer: 'De modus past één systeemtint en een monochrome behandeling toe op elk Android pictogram in de scène, inclusief het geüploade pictogram, omliggende apps en het dock. Zo zie je of de vorm zonder de oorspronkelijke kleuren leesbaar blijft.' },
  { question: 'Verlaat het logo mijn browser?', answer: 'Nee. De afbeelding wordt lokaal in je browser gelezen en gemeten. Deze tool uploadt haar niet naar een server.' },
  { question: 'Is het resultaat klaar voor publicatie in een app store?', answer: 'Nee. Dit is een lokale ontwerp en asset audit. Gebruik Apple en Android platformtools plus een echt apparaat of emulator voor de definitieve export, launcherwerking en storegoedkeuring.' },
];
const howTo = [
  { name: 'Upload het logo', text: 'Kies een PNG, JPG, WEBP of SVG logo. Dezelfde lokale afbeelding verschijnt in beide apparaatcontexten.' },
  { name: 'Voer de appnaam in', text: 'Typ het launcherlabel en controleer of het leesbaar blijft naast de echte labels van omliggende apps.' },
  { name: 'Bekijk iOS weergaven', text: 'Wissel tussen Standaard, Donker, Helder en Getint en let op zwak contrast of verdwijnende details.' },
  { name: 'Bekijk Android maskers', text: 'Probeer cirkel, squircle, rond en druppel. Schakel daarna themapictogrammen in om de monochrome versie overal in de launcher te beoordelen.' },
  { name: 'Handel op basis van de audit', text: 'Voeg ademruimte toe, vereenvoudig kleine details of verbeter het contrast voordat je de definitieve platformassets maakt.' },
];

export const content = createDualOsIconPreviewContent({ locale: 'nl', slug: 'appicoon-audit-ios-android', title, description, faqTitle: 'Veelgestelde vragen', bibliographyTitle: 'Bronnen', ui, faq, howTo, seo: [
  { type: 'title', text: 'Controleer je apppictogram vóór publicatie', level: 2 },
  { type: 'paragraph', html: 'Upload één logo en bekijk het tegelijk in een iPhone beginscherm en een Pixel launcher. Deze audit van het apppictogram meet het canvas, de beeldverhouding, de resolutie, de transparante rand, de iOS masker marge en de adaptieve Android veilige zone. Voer ook de echte appnaam in, want een teken kan de pictogramcontrole doorstaan en toch mislukken wanneer het launcherlabel onleesbaar wordt.' },
  { type: 'title', text: 'Wat deze audit van het apppictogram controleert', level: 3 },
  { type: 'list', items: ['Canvas en beeldverhouding: controleer of de bron vierkant is voordat platformtools hun eigen behandeling toevoegen.', 'Resolutie: vind kleine bronbestanden voordat ze zacht of onbruikbaar worden in grotere launchers.', 'Randmarge: controleer of belangrijke vormen of letters te dicht bij het iOS masker of de Android veilige zone staan.', 'Launcherlabel: bekijk de appnaam op dezelfde schaal als pictogrammen ernaast en ontdek onhandige afbrekingen.', 'Android themabehandeling: pas één monochrome systeemtint toe op doel, omliggende pictogrammen en dock zodat kleur geen zwakke omtrek verbergt.'] },
  { type: 'title', text: 'Bekijk beide apparaatcontexten tegelijk', level: 3 },
  { type: 'paragraph', html: 'Gebruik de twee telefoonweergaven als één auditoppervlak. Doorloop iOS Standaard, Donker, Helder en Getint en probeer daarna Android cirkel, squircle, rond en druppel. Het doel is informatie verzamelen over hetzelfde asset op verschillende launcheroppervlakken, niet bepalen welk platform beter is.' },
  { type: 'title', text: 'Wat de audit niet kan garanderen', level: 3 },
  { type: 'paragraph', html: 'Dit is een browsergebaseerde ontwerp en assetcontrole en geen vervanging voor Xcode, Android Studio, een echt apparaat of een emulator. Launchers, besturingssysteemversies en fabrikanten kunnen maskers, tussenruimtes, contrast en regels voor themapictogrammen anders toepassen. Gebruik de audit om risico s vroeg te vinden en valideer daarna de definitieve platformassets in de omgevingen die je ondersteunt.' },
  { type: 'tip', title: 'Praktische audit routine', html: 'Bekijk het logo in elke behandeling op de kleinste praktische grootte. Als het alleen werkt met één achtergrond, masker of de oorspronkelijke kleuren, vereenvoudig het ontwerp of voeg ruimte toe voordat je publiceert.' },
] });
