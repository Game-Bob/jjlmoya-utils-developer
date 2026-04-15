import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReadabilityCalculatorUI } from '../ui';

const slug = 'calcolatore-leggibilita-visiva-wcag-apca';
const title = 'Calcolatore di Leggibilità Visiva WCAG e APCA';
const description = 'Verifica il contrasto reale dei tuoi design con APCA (WCAG 3.0). Analizza come il peso e la dimensione del font influenzano la leggibilità effettiva. Dai semplici rapporti alla leggibilità percettiva.';

const faqData = [
  {
    question: "Cos'è APCA e perché è diverso da WCAG 2.1?",
    answer: "APCA è l'Advanced Perceptual Contrast Algorithm sviluppato per WCAG 3.0. A differenza del vecchio rapporto semplice, APCA utilizza modelli matematici che replicano come il cervello umano percepisce il contrasto, tenendo conto della polarità (sfondo chiaro vs. scuro) e della dimensione e del peso del font.",
  },
  {
    question: 'Cosa rappresenta il valore Lc?',
    answer: "Lc (Lightness Contrast) è il valore di contrasto generato da APCA. Un valore di 100 rappresenta il contrasto massimo ideale, mentre valori inferiori a 60 diventano critici per i testi a lettura continua. È una scala di magnitudine assoluta della percezione.",
  },
  {
    question: 'Come influisce il peso del font sulla leggibilità?',
    answer: 'I font sottili (Thin/Light) richiedono un contrasto molto più elevato per essere leggibili. APCA penalizza i font a basso peso, indicando che un design che supera WCAG con un font a peso 100 potrebbe risultare illeggibile nella pratica.',
  },
  {
    question: 'Questo calcolatore è privato?',
    answer: 'Sì, tutti i calcoli vengono eseguiti localmente nel tuo browser. I colori e le impostazioni che analizzi non vengono mai inviati a nessun server, garantendo la massima privacy per i tuoi progetti di design.',
  },
];

const howToData = [
  { name: 'Scegli i Colori', text: 'Usa i selettori di colore per impostare il colore del testo e dello sfondo del tuo design.' },
  { name: 'Regola la Tipografia', text: 'Usa i cursori di dimensione e peso del font per simulare la tua tipografia reale.' },
  { name: 'Leggi i Risultati', text: 'Controlla il rapporto WCAG 2.1 e il valore APCA Lc per sapere se il tuo design è accessibile.' },
  { name: 'Esamina i Consigli', text: 'Leggi le raccomandazioni APCA specifiche per il testo corpo, il testo piccolo e gli elementi UI.' },
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
  inLanguage: 'it',
};

const ui: ReadabilityCalculatorUI = {
  labelColors: 'Colori Base',
  labelText: 'Testo',
  labelBg: 'Sfondo',
  labelTypo: 'Tipografia',
  labelFontSize: 'Dimensione Font',
  labelFontWeight: 'Peso Font',
  labelCompare: 'Confronto Contrasto',
  labelPreview: 'Anteprima Percettiva',
  labelApcaRecs: 'Raccomandazioni APCA',
  labelBody: 'Testo Corpo (Body)',
  labelSmall: 'Testo Piccolo / Didascalia',
  labelUi: 'UI / Pulsanti',
  statusYes: 'Sì',
  statusNo: 'No',
  wcagAAA: 'Supera AAA',
  wcagAA: 'Supera AA',
  wcagLarge: 'Solo Testo Grande',
  wcagFail: 'Non Supera',
  apcaExcellent: 'Eccellente',
  apcaGood: 'Buono',
  apcaMinimal: 'Minimo',
  apcaPoor: 'Insufficiente',
  previewText: 'La leggibilità visiva non è solo matematica. È il modo in cui luce e ombra interagiscono con i tuoi occhi.',
  wcagRatioLabel: 'Rapporto WCAG 2.1',
  apcaLcLabel: 'APCA Lc (WCAG 3)',
};

export const content: ToolLocaleContent<ReadabilityCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Risorse su Contrasto e APCA',
  bibliography: [
    { name: 'W3C: Bozza WCAG 3.0 (Silver)', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/' },
    { name: 'Myndex: Guida di Riferimento APCA', url: 'https://apcaw3.myndex.com/' },
    { name: 'MDN: Accessibilità e Contrasto Colore', url: 'https://developer.mozilla.org/it/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Calcolatore di Leggibilità Visiva (WCAG vs APCA)', level: 2 },
    {
      type: 'paragraph',
      html: 'Scopri come i tuoi colori e la tua tipografia influenzano la leggibilità reale con il nuovo standard di accessibilità percettiva. WCAG 2.1 usa una semplice formula matematica del 2008. <strong>APCA</strong> è il nuovo modello proposto per <strong>WCAG 3.0</strong> che replica la percezione umana.',
    },
    { type: 'title', text: 'Punti Chiave di APCA', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Polarità:</strong> Riconosce che la modalità scura (Dark Mode) viene percepita diversamente da quella chiara.',
        '<strong>Peso del Font:</strong> Assegna livelli di contrasto specifici (Lc) in base al peso tipografico.',
        '<strong>Linearità:</strong> Corregge le imprecisioni matematiche nel modello di luminanza relativa del 2008.',
      ],
    },
    { type: 'title', text: 'Livelli APCA Consigliati', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Lc 90+:</strong> Ideale per testo molto piccolo o di basso peso.',
        '<strong>Lc 75:</strong> Lo standard per il testo corpo principale.',
        '<strong>Lc 60:</strong> Minimo per contenuto di dimensione media leggibile.',
        '<strong>Lc 45:</strong> Minimo per elementi grandi o decorativi.',
      ],
    },
  ],
};
