import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReadabilityCalculatorUI } from '../ui';
const slug = 'visuell-lasbarhetskalkylator';
const title = 'Visuell Läsbarhetskalkylatör WCAG och APCA';
const description = 'Kontrollera den verkliga kontrasten i dina designer med APCA (WCAG 3.0). Analysera hur teckensnittssgravur och storlek påverkar faktisk läsbarhet.';
const faqData = [
  { question: 'Vad är APCA och varför skiljer det sig från WCAG 2.1?', answer: 'APCA är Advanced Perceptual Contrast Algorithm utvecklad för WCAG 3.0. Till skillnad från den gamla enkla formeln använder APCA matematiska modeller som efterliknar hur människans hjärna uppfattar kontrast.' },
  { question: 'Vad betyder Lc-värdet?', answer: 'Lc (Lightness Contrast) är kontraszvärdet som genereras av APCA. Ett värde på 100 representerar ideal maximal kontrast, medan värden under 60 börjar vara kritiska för kontinuerlig läsning av text.' },
  { question: 'Hur påverkar teckensnittssgravuren läsbarheten?', answer: 'Tunna/Lätta typsnitt kräver mycket högre kontrast för att vara läsbara. APCA straffar lågviktiga typsnitt, vilket indikerar att en design som godkänner WCAG med weight-100 typsnitt kan vara oläslig i praktiken.' },
  { question: 'Är denna kalkylator privat?', answer: 'Ja, alla beräkningar utförs lokalt i din webbläsare. Färgerna och inställningarna du analyserar skickas aldrig till någon server, vilket garanterar fullständig integritet för dina designprojekt.' },
];
const howToData = [
  { name: 'Välj Färger', text: 'Använd färgväljarna för att ställa in textfärg och bakgrundsfärg för ditt design.' },
  { name: 'Justera Typografi', text: 'Flytta skjutreglagen för teckensnittstorlek och vikt för att simulera din faktiska typografi.' },
  { name: 'Läs Resultaten', text: 'Kontrollera WCAG 2.1-förhållandet och APCA Lc-värdet för att veta om ditt design är tillgängligt.' },
  { name: 'Granska Rekommendationer', text: 'Kontrollera APCA-specifika rekommendationer för brödtext, liten text och UI-element.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowToThing> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'sv' };
const ui: ReadabilityCalculatorUI = { labelColors: 'Basfärger', labelText: 'Text', labelBg: 'Bakgrund', labelTypo: 'Typografi', labelFontSize: 'Teckensnitsstorlek', labelFontWeight: 'Vikt', labelCompare: 'Kontrastjämförelse', labelPreview: 'Perceptuell Förhandsvisning', labelApcaRecs: 'APCA Rekommendationer', labelBody: 'Läsningstext (Brödtext)', labelSmall: 'Liten Text / Bildtext', labelUi: 'UI / Knappar', statusYes: 'Ja', statusNo: 'Nej', wcagAAA: 'Godkänner AAA', wcagAA: 'Godkänner AA', wcagLarge: 'Endast Stor Text', wcagFail: 'Misslyckas', apcaExcellent: 'Utmärkt', apcaGood: 'Bra', apcaMinimal: 'Minimal', apcaPoor: 'Dålig', previewText: 'Visuell läsbarhet är inte bara matematik. Det är hur ljus och skugga interagerar med dina ögon.', wcagRatioLabel: 'WCAG 2.1 Förhållande', apcaLcLabel: 'APCA Lc (WCAG 3)' };
export const content: ToolLocaleContent<ReadabilityCalculatorUI> = {
  slug, title, description, ui,
  faqTitle: 'Vanliga Frågor',
  faq: faqData,
  bibliographyTitle: 'Resurser på Kontrast och APCA',
  bibliography: [
    { name: 'W3C: WCAG 3.0 Draft (Silver)', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/' },
    { name: 'Myndex: APCA Referensguide', url: 'https://apcaw3.myndex.com/' },
    { name: 'MDN: Tillgänglighet och Färgkontrast', url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Visuell Läsbarhetskalkylatör (WCAG vs APCA)', level: 2 },
    { type: 'paragraph', html: 'Förstå hur dina färger och typografi påverkar faktisk läsning med den nya perceptuella tillgänglighetsstandarden. WCAG 2.1 använder en enkel matematisk formel från 2008. <strong>APCA</strong> är den nya modell som föreslås för <strong>WCAG 3.0</strong> som efterliknar mänsklig perception.' },
    { type: 'title', text: 'Nyckelpoänger för APCA', level: 3 },
    { type: 'list', items: [ '<strong>Polaritet:</strong> Förstår att Mörkt läge uppfattas annorlunda än Ljust läge.', '<strong>Teckensnittssgravur:</strong> Tilldelar specifika kontrastnivåer (Lc) baserat på typografigravur.', '<strong>Linjäritet:</strong> Åtgärdar matematiska felaktighetar i 2008 års relativa luminansmodell.' ] },
    { type: 'title', text: 'Rekommenderade APCA-nivåer', level: 3 },
    { type: 'list', items: [ '<strong>Lc 90+:</strong> Idealisk för mycket liten eller låg gravur text.', '<strong>Lc 75:</strong> Standarden för huvudsaklig läsningstext.', '<strong>Lc 60:</strong> Minimum för läsbart medelstorlek innehål.', '<strong>Lc 45:</strong> Minimum för stora eller dekorativa element.' ] },
  ],
};
