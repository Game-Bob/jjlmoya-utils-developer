import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReadabilityCalculatorUI } from '../ui';

const slug = 'calculadora-legibilidad-visual-wcag-apca';
const title = 'Calculadora de Legibilidad Visual WCAG y APCA';
const description = 'Comprueba el contraste real de tus dise\u00f1os con APCA (WCAG 3.0). Analiza c\u00f3mo influye el grosor de la fuente y el tama\u00f1o en la lectura real. De ratios simples a legibilidad perceptual.';

const faqData = [
  {
    question: '\u00bfQu\u00e9 es APCA y por qu\u00e9 es diferente a WCAG 2.1?',
    answer: 'APCA es el Algoritmo de Contraste Perceptual Avanzado desarrollado para WCAG 3.0. A diferencia del antiguo ratio simple, APCA utiliza modelos matem\u00e1ticos que imitan c\u00f3mo el cerebro humano percibe el contraste, teniendo en cuenta la polaridad (fondo claro vs. oscuro) y el tama\u00f1o/grosor de las fuentes.',
  },
  {
    question: '\u00bfQu\u00e9 significa el valor Lc?',
    answer: 'Lc (Lightness Contrast) es el valor de contraste que genera APCA. Un valor de 100 representa un contraste m\u00e1ximo ideal, mientras que valores inferiores a 60 empiezan a ser cr\u00edticos para textos de lectura continua. Es una escala de magnitud absoluta de la percepci\u00f3n.',
  },
  {
    question: '\u00bfC\u00f3mo influye el grosor de la fuente en la legibilidad?',
    answer: 'Las fuentes delgadas (Thin/Light) requieren un contraste mucho mayor para ser legibles. APCA penaliza las fuentes de poco peso, indicando que un dise\u00f1o que pasa WCAG con una fuente de 100 de grosor puede ser ilegible en la pr\u00e1ctica.',
  },
  {
    question: '\u00bfEs esta calculadora privada?',
    answer: 'S\u00ed, todos los c\u00e1lculos se realizan localmente en tu navegador. Los colores y configuraciones que analices nunca se env\u00edan a ning\u00fan servidor, garantizando total privacidad en tus proyectos de dise\u00f1o.',
  },
];

const howToData = [
  { name: 'Elegir Colores', text: 'Usa los selectores de color para definir el color del texto y el color de fondo de tu dise\u00f1o.' },
  { name: 'Ajustar Tipograf\u00eda', text: 'Mueve los sliders de tama\u00f1o y grosor de fuente para simular tu tipograf\u00eda real.' },
  { name: 'Leer los Resultados', text: 'Consulta el ratio WCAG 2.1 y el valor Lc de APCA para saber si tu dise\u00f1o es accesible.' },
  { name: 'Ver Recomendaciones', text: 'Revisa las recomendaciones APCA espec\u00edficas para texto de lectura, texto peque\u00f1o y elementos UI.' },
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
  inLanguage: 'es',
};

const ui: ReadabilityCalculatorUI = {
  labelColors: 'Colores Base',
  labelText: 'Texto',
  labelBg: 'Fondo',
  labelTypo: 'Tipograf\u00eda',
  labelFontSize: 'Tama\u00f1o de Fuente',
  labelFontWeight: 'Grosor (Weight)',
  labelCompare: 'Comparativa de Contraste',
  labelPreview: 'Vista Previa Perceptual',
  labelApcaRecs: 'Recomendaciones APCA',
  labelBody: 'Texto de Lectura (Body)',
  labelSmall: 'Texto Peque\u00f1o / Caption',
  labelUi: 'UI / Botones',
  statusYes: 'S\u00ed',
  statusNo: 'No',
  wcagAAA: 'Pasa AAA',
  wcagAA: 'Pasa AA',
  wcagLarge: 'Solo Texto Grande',
  wcagFail: 'No Pasa',
  apcaExcellent: 'Excelente',
  apcaGood: 'Bueno',
  apcaMinimal: 'M\u00ednimo',
  apcaPoor: 'Pobre',
  previewText: 'La legibilidad visual no es solo matem\u00e1tica. Es c\u00f3mo luz y sombra interact\u00faan con tus ojos.',
  wcagRatioLabel: 'Ratio WCAG 2.1',
  apcaLcLabel: 'APCA Lc (WCAG 3)',
};

export const content: ToolLocaleContent<ReadabilityCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Recursos sobre Contraste y APCA',
  bibliography: [
    { name: 'W3C: Draft de WCAG 3.0 (Silver)', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/' },
    { name: 'Myndex: Gu\u00eda de Referencia APCA', url: 'https://apcaw3.myndex.com/' },
    { name: 'MDN: Accesibilidad y Contraste de Color', url: 'https://developer.mozilla.org/es/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Calculadora de Legibilidad Visual (WCAG vs APCA)', level: 2 },
    {
      type: 'paragraph',
      html: 'Comprende c\u00f3mo tus colores y tipograf\u00eda afectan la lectura real con el nuevo est\u00e1ndar de accesibilidad perceptual. WCAG 2.1 usa una f\u00f3rmula matem\u00e1tica simple de 2008. <strong>APCA</strong> es el nuevo modelo propuesto para <strong>WCAG 3.0</strong> que imita la percepci\u00f3n humana.',
    },
    { type: 'title', text: 'Puntos Clave de APCA', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Polaridad:</strong> Entiende que el modo oscuro (Dark Mode) se percibe distinto al modo claro.',
        '<strong>Grosor de Fuente:</strong> Asigna niveles de contraste (Lc) espec\u00edficos seg\u00fan el peso de la tipograf\u00eda.',
        '<strong>Linealidad:</strong> Corrige las imprecisiones matem\u00e1ticas de la luminancia relativa de 2008.',
      ],
    },
    { type: 'title', text: 'Niveles APCA Recomendados', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Lc 90+:</strong> Ideal para texto muy peque\u00f1o o de poco peso.',
        '<strong>Lc 75:</strong> El est\u00e1ndar para texto de lectura principal (Body).',
        '<strong>Lc 60:</strong> M\u00ednimo para contenido legible de tama\u00f1o medio.',
        '<strong>Lc 45:</strong> M\u00ednimo para elementos grandes o decorativos.',
      ],
    },
  ],
};
