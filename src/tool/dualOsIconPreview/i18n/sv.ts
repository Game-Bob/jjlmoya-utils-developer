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

const title = 'Granskning av appikoner för iOS och Android';
const description = 'Ladda upp en logotyp och granska hur den ser ut på iPhone och Pixel. Kontrollera iOS lägen, adaptiva Android masker, säkra marginaler och tematiska ikoner i webbläsaren.';
const ui: DualOsIconPreviewUI = {
  labelUpload: 'Ladda upp logotyp', uploadAction: 'Välj en bild', uploadHint: 'Samma märke fyller båda telefonerna', dropHint: 'PNG, JPG, WEBP eller SVG', labelAppName: 'Appnamn', appNamePlaceholder: 'Visas under ikonen', labelBrandColor: 'Systemets accentfärg', labelIosAppearance: 'iOS utseende', iosAppearanceHint: 'Kontrollera märket i varje läge på hemskärmen', iosDefault: 'Standard', iosDark: 'Mörk', iosClear: 'Klar', iosTinted: 'Tonad', labelAndroidShape: 'Adaptiv Android mask', androidShapeHint: 'Launchern kan ändra ytterformen', androidCircle: 'Cirkel', androidSquircle: 'Squircle', androidRounded: 'Rundad', androidTeardrop: 'Droppe', labelAndroidTheme: 'Förhandsvisa tematisk ikon', androidThemeHint: 'Färgar om varje ikon med en systemton och bevarar dess siluett', iosDeviceLabel: 'iPhone', androidDeviceLabel: 'Pixel', iosHomeLabel: 'Hemskärm', androidHomeLabel: 'Launcher', safeZoneLabel: 'iOS mask', adaptiveLayerLabel: 'Adaptiv ikon', monochromeLabel: 'Temalager', nameFallback: 'Din app', emptyLogo: 'Din logotyp', fileError: 'Välj en bildfil för att fortsätta.', statusReady: 'Klar', statusNeedsReview: 'Lägg till en logotyp', stageKicker: 'Två enhetskontexter, en granskning', stageNote: 'Inspektera varje behandling i sitt sammanhang', auditTitle: 'Logotypgranskning', auditHint: 'Mätt lokalt från den inlästa bilden', auditWaiting: 'Ladda upp en logotyp', auditNotChecked: 'Inte kontrollerad', auditFile: 'Canvas', auditAspect: 'Bildförhållande', auditResolution: 'Upplösning', auditIosMask: 'iOS maskmarginal', auditAndroidZone: 'Android säker zon', auditMargin: 'Minsta kantmarginal', auditTransparency: 'Alfakant', auditTransparent: 'Transparent', auditFullBleed: 'Helt fylld', statusPass: 'GODKÄND', statusReview: 'GRANSKA',
};
const faq = [
  { question: 'Vad kontrollerar denna granskning av appikonen?', answer: 'Den kontrollerar bildmått, bildförhållande, upplösning, transparent kantmarginal, iOS maskmarginal och Androids adaptiva säkra zon. Du kan också se appnamnet i launcherns storlek.' },
  { question: 'Kan jag se iPhone och Android samtidigt?', answer: 'Ja. Samma logotyp och appnamn visas samtidigt på en iPhone hemskärm och i en Pixel launcher, så sammanhanget för båda enheterna finns kvar.' },
  { question: 'Vad gör Androids läge för tematiska ikoner?', answer: 'Det lägger en systemton och en monokrom behandling på alla Android ikoner i scenen, inklusive den uppladdade ikonen, närliggande appar och dockan. Då syns om siluetten fortfarande går att läsa utan originalfärgerna.' },
  { question: 'Lämnar logotypen min webbläsare?', answer: 'Nej. Bilden läses och mäts lokalt i webbläsaren. Verktyget laddar inte upp den till en server.' },
  { question: 'Är resultatet klart för publicering i en appbutik?', answer: 'Nej. Det är en lokal granskning av design och tillgångar. Använd Apples och Androids plattformsverktyg samt en riktig enhet eller emulator för slutlig export, launcherbeteende och butiksgodkännande.' },
];
const howTo = [
  { name: 'Ladda upp logotypen', text: 'Välj en PNG, JPG, WEBP eller SVG logotyp. Samma lokala bild visas i båda enhetskontexterna.' },
  { name: 'Skriv in appnamnet', text: 'Skriv launcherns etikett och kontrollera att den fortfarande är läsbar bredvid riktiga etiketter från närliggande appar.' },
  { name: 'Inspektera iOS utseenden', text: 'Växla mellan Standard, Mörk, Klar och Tonad och leta efter svag kontrast eller detaljer som försvinner.' },
  { name: 'Inspektera Android masker', text: 'Prova cirkel, squircle, rundad och droppe. Aktivera sedan tematiska ikoner för att granska den monokroma versionen i hela launchern.' },
  { name: 'Agera på granskningen', text: 'Lägg till luft, förenkla små detaljer eller förbättra kontrasten innan du förbereder plattformsfilerna.' },
];

export const content = createDualOsIconPreviewContent({ locale: 'sv', slug: 'granskning-appikoner-ios-android', title, description, faqTitle: 'Vanliga frågor', bibliographyTitle: 'Källor', ui, faq, howTo, seo: [
  { type: 'title', text: 'Granska appikonen före lansering', level: 2 },
  { type: 'paragraph', html: 'Ladda upp en logotyp och inspektera den samtidigt i en iPhone hemskärm och en Pixel launcher. Den här granskningen av appikonen mäter canvas, bildförhållande, upplösning, transparent kantmarginal, iOS maskmarginal och Androids adaptiva säkra zon. Skriv också in det riktiga appnamnet, eftersom ett märke kan klara ikonkontrollen men ändå misslyckas när launcherns etikett blir svårläst.' },
  { type: 'title', text: 'Det här kontrollerar granskningen av appikonen', level: 3 },
  { type: 'list', items: ['Canvas och bildförhållande: bekräfta att källan är kvadratisk innan plattformsverktygen lägger på sin egen behandling.', 'Upplösning: hitta små källfiler innan de blir suddiga eller oanvändbara i större launchers.', 'Kantmarginal: se om viktiga former eller bokstäver ligger för nära iOS masken eller Androids säkra zon.', 'Launcher etikett: kontrollera appnamnet i samma skala som ikonerna bredvid och upptäck dåliga radbrytningar.', 'Tematisk Android behandling: lägg en monokrom systemton på mål, närliggande ikoner och docka så att färgen inte döljer en svag siluett.'] },
  { type: 'title', text: 'Se båda enhetskontexterna samtidigt', level: 3 },
  { type: 'paragraph', html: 'Använd de två telefonvyerna som en enda granskningsyta. Gå igenom iOS Standard, Mörk, Klar och Tonad och prova sedan Android cirkel, squircle, rundad och droppe. Målet är att förstå hur samma tillgång fungerar på olika launcher ytor, inte att utse en plattform till bättre än den andra.' },
  { type: 'title', text: 'Det här kan granskningen inte garantera', level: 3 },
  { type: 'paragraph', html: 'Detta är en webbläsarbaserad granskning av design och tillgångar, inte en ersättning för Xcode, Android Studio, en riktig enhet eller en emulator. Launchers, operativsystemsversioner och tillverkare kan använda olika masker, avstånd, kontrast och regler för tematiska ikoner. Använd granskningen för att hitta risker tidigt och validera sedan de slutliga tillgångarna i miljöerna du stöder.' },
  { type: 'tip', title: 'Praktisk granskningsrutin', html: 'Granska logotypen i den minsta praktiska storleken och i varje behandling. Om märket bara fungerar med en bakgrund, en mask eller originalfärgerna, förenkla bilden eller lägg till marginal innan publicering.' },
] });
