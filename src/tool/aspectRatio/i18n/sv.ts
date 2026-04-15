import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AspectRatioUI } from '../ui';

const slug = 'bildforhallande-kalkylator';
const title = 'Bildförhållande kalkylator i pixlar. Onlineproportioner';
const description =
  'Beräkna nya upplösningar för bilder, video och webbdesign och bibehåll exakta proportioner för att undvika förvrängd grafik. Stöder 16:9, 4:3, 21:9 och anpassade format.';

const faqData = [
  {
    question: 'Vad är bildförhållande (Aspect Ratio)?',
    answer:
      'Bildförhållandet beskriver det geometriska förhållandet mellan bredden och höjden på en bild eller skärm. Det representeras med två siffror separerade av ett kolon (t.ex. 16:9), vilket anger hur höjden ändras proportionellt i förhållande till bredden.',
  },
  {
    question: 'Varför är det viktigt att bibehålla korrekta proportioner?',
    answer:
      'Att ignorera bildförhållandet orsakar ihoptryckta eller utsträckta bilder, oväntade svarta kanter (letterboxing) i videor och webbkomponenter som tappar sin layout på olika skärmstorlekar. Att bibehålla korrekta proportioner är nyckeln till en professionell visning.',
  },
  {
    question: 'Hur beräknar jag höjden från bredden med ett givet förhållande?',
    answer:
      'Formeln är: Höjd = Bredd × (Höjd i förhållandet / Bredd i förhållandet). Till exempel, för en bredd på 1280px med ett 16:9-förhållande blir höjden: 1280 × (9/16) = 720px.',
  },
  {
    question: 'Vad är standard bildförhållande för YouTube-videor?',
    answer:
      '16:9 är standardförhållandet för YouTube och de flesta moderna videoplattformar. Det motsvarar upplösningar som 1280×720 (HD), 1920×1080 (Full HD) eller 3840×2160 (4K UHD).',
  },
  {
    question: 'Vilket bildförhållande använder vertikala videor i sociala medier?',
    answer:
      '9:16, vilket är den exakta motsatsen till widescreen-formatet. Det är det nativa förhållandet för TikTok, Instagram Reels och YouTube Shorts, som har sitt ursprung i hur vi håller mobilen vertikalt.',
  },
];

const howToData = [
  {
    name: 'Ange ursprungligt förhållande',
    text: 'Ange bredd- och höjdvärdena för det förhållande du vill bibehålla (t.ex. 16 och 9 för widescreen) eller välj en av förinställningarna.',
  },
  {
    name: 'Justera skalan',
    text: 'Ändra bredd- eller höjdvärdet i avsnittet "Verklig skala". Verktyget beräknar automatiskt det motsatta värdet för att bibehålla proportionerna.',
  },
  {
    name: 'Kontrollera förhandsgranskningen',
    text: 'Förhandsgranskningspanelen visar den resulterande formen i proportionell skala, med det förenklade förhållandet och den beräknade upplösningen.',
  },
  {
    name: 'Använd i ditt projekt',
    text: 'Kopiera de beräknade värdena för att använda i din CSS (aspect-ratio: 16 / 9), vid videoexport eller i inställningarna för ditt designverktyg.',
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

const ui: AspectRatioUI = {
  labelConfig: 'Konfiguration',
  labelRatio: 'Ursprungligt förhållande',
  labelWidth: 'Bredd',
  labelHeight: 'Höjd',
  labelScale: 'Verklig skala',
  labelPixelWidth: 'Pixlar (Bredd)',
  labelPixelHeight: 'Pixlar (Höjd)',
  labelPreview: 'Proportionell förhandsgranskning',
  labelStatus: 'Perfekt förhållande',
  labelOffline: '100 % offline-verktyg',
};

export const content: ToolLocaleContent<AspectRatioUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Referenser och dokumentation',
  bibliography: [
    {
      name: 'MDN Web Docs: aspect-ratio (CSS)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio',
    },
    {
      name: 'Wikipedia: Aspect ratio',
      url: 'https://sv.wikipedia.org/wiki/Bildförhållande',
    },
    {
      name: 'W3C: CSS Box Sizing Level 4',
      url: 'https://www.w3.org/TR/css-sizing-4/#aspect-ratio',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Vad är bildförhållande?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Inom grafisk design, fotografi och frontend-utveckling beskriver <strong>bildförhållandet</strong> (Aspect Ratio) det geometriska förhållandet mellan bredden och höjden på en bild, skärm eller behållare. Det representeras vanligtvis med två siffror separerade av ett kolon (t.ex. <code>16:9</code>), vilket anger hur höjden ökar proportionellt i förhållande till dess bredd.',
    },
    {
      type: 'paragraph',
      html: 'Felaktig hantering av bildförhållanden är en vanlig orsak till ihoptryckta fotografier, videor med oväntad beskärning (letterboxing) eller webbkomponenter som tappar sin layout när de visas på allt från mobiler till ultrabreda bildskärmar.',
    },
    {
      type: 'title',
      text: 'Vanliga branschförhållanden',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Beroende på din disciplin kommer du ständigt att hantera ett begränsat antal globala standardproportioner:',
    },
    {
      type: 'list',
      items: [
        '<strong>16:9 (Widescreen):</strong> Det absolut dominerande formatet för moderna bildskärmar, TV-apparater, YouTube-inspelningar eller standard HD-upplösningar (som 1920×1080 eller 4K).',
        '<strong>9:16 (Vertikalt):</strong> Har sitt ursprung i mobilanvändning (TikTok, Instagram Reels, YouTube Shorts). Exakt samma förhållande som widescreen-videor, men med en fysisk rotation av enheten.',
        '<strong>4:3 (Klassiskt / Vintage):</strong> Finns i gamla TV-apparater och bildskärmar eller i analoga och specialiserade digitala kameramodeller. Dess något kvadratiska utseende drar blicken direkt till det centrala kompositionsplanet.',
      ],
    },
    {
      type: 'title',
      text: 'Webbutveckling och CSS-egenskapen aspect-ratio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tidigare användes komplexa matematiska system i CSS med ett <strong>Padding Hack</strong> (som att injicera <code>padding-top: 56.25%</code>) för att reservera dynamiska utrymmen i YouTube-iframes eller omslagsbilder, för att undvika problem med Cumulative Layout Shift (CLS) vid sidladdning.',
    },
    {
      type: 'paragraph',
      html: 'Numera tillämpar alla moderna layouter egenskaper som <code>aspect-ratio: 16 / 9;</code> direkt, vilket ger semantisk kod och låter webbläsaren automatiskt härleda den dimension som saknas från den ursprungliga bredden som definierats via Grid eller Flexbox.',
    },
    {
      type: 'paragraph',
      html: 'Denna lokala pixelkalkylator överför designens kraft till en omedelbar skalningsberäkning som skyddar dina renderingar från förödande felkonfigurationer.',
    },
  ],
};
