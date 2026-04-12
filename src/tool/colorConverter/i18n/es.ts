import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ColorConverterUI } from '../ui';

const slug = 'conversor-color-rgb-hex-hsl';
const title = 'Conversor de Color RGB HEX y HSL';
const description = 'Convierte colores entre RGB, HEX y HSL al instante. Genera armonías complementarias y analiza el contraste WCAG. Herramienta 100% client-side y privada.';

const faqData = [
  {
    question: '\u00bfC\u00f3mo funciona el conversor de colores RGB a HEX y HSL?',
    answer: 'La herramienta toma valores de Rojo, Verde y Azul (RGB) y utiliza algoritmos matem\u00e1ticos para convertirlos a su equivalente hexadecimal (HEX) o en valores de tono, saturaci\u00f3n y luminosidad (HSL). Tambi\u00e9n funciona a la inversa.',
  },
  {
    question: '\u00bfPor qu\u00e9 usar HSL en lugar de HEX en mis dise\u00f1os?',
    answer: 'El formato HSL es mucho m\u00e1s intuitivo. Permite modificar la saturaci\u00f3n o la luminosidad sin cambiar la tonalidad, lo que facilita la creaci\u00f3n de paletas arm\u00f3nicas y estados de botones (hover, disabled).',
  },
  {
    question: '\u00bfQu\u00e9 es el valor de contraste relativo?',
    answer: 'Es una m\u00e9trica que indica la legibilidad de un texto sobre un fondo basada en su luminancia. Un contraste alto asegura que personas con dificultades visuales puedan leer el contenido, siguiendo las pautas WCAG.',
  },
  {
    question: '\u00bfEs seguro usar este conversor de color online?',
    answer: 'Totalmente. Al ser 100% client-side, los datos de color nunca salen de tu ordenador. Todo el proceso ocurre directamente en tu navegador, garantizando privacidad y rapidez instant\u00e1nea.',
  },
];

const howToData = [
  { name: 'Seleccionar Color', text: 'Usa los sliders de Rojo, Verde y Azul o escribe directamente el c\u00f3digo HEX en el campo de texto.' },
  { name: 'Ajustar Canales RGB', text: 'Mueve los sliders para cambiar la intensidad de cada canal y ver la actualizaci\u00f3n en tiempo real.' },
  { name: 'Copiar el Formato', text: 'Haz clic en el bot\u00f3n Copiar junto al formato HEX, RGB o HSL que necesites.' },
  { name: 'Explorar Armon\u00edas', text: 'Haz clic en los colores de armon\u00eda (complementario, an\u00e1logos, tr\u00edada) para copiarlos al portapapeles.' },
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

const ui: ColorConverterUI = {
  labelPreview: 'Vista Previa (clic para copiar HEX)',
  labelHarmonies: 'Armon\u00edas de Color',
  labelR: 'Rojo',
  labelG: 'Verde',
  labelB: 'Azul',
  labelComp: 'Comp.',
  labelAna1: 'An\u00e1logo 1',
  labelAna2: 'An\u00e1logo 2',
  labelTri1: 'Tr\u00edada 1',
  labelTri2: 'Tr\u00edada 2',
  btnCopy: 'Copiar',
  btnCopied: 'Copiado',
  contrastLabel: 'Contraste',
  clickToCopy: 'Clic para copiar',
};

export const content: ToolLocaleContent<ColorConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Recursos de Color y Dise\u00f1o Web',
  bibliography: [
    { name: 'W3C: Documentaci\u00f3n de Colores en CSS', url: 'https://www.w3.org/TR/css-color-4/' },
    { name: 'MDN: Gu\u00eda del Modelo de Color HSL', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl' },
    { name: 'WebAIM: Gu\u00eda de Contraste y Accesibilidad', url: 'https://webaim.org/resources/contrastchecker/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Conversor de Color RGB a HEX y HSL para Desarrolladores', level: 2 },
    {
      type: 'paragraph',
      html: 'En el mundo del <strong>desarrollo frontend</strong> y el <strong>dise\u00f1o UI/UX</strong>, el manejo de colores es una tarea constante. Nuestro <strong>conversor de color online</strong> te permite transformar valores entre <strong>HEX, RGB y HSL</strong> de forma instant\u00e1nea y con precisi\u00f3n matem\u00e1tica.',
    },
    { type: 'title', text: 'Formatos de Color: HEX, RGB y HSL', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>HEX (Hexadecimal):</strong> El est\u00e1ndar de facto para CSS. Compacto y f\u00e1cil de compartir en el c\u00f3digo.',
        '<strong>RGB (Red, Green, Blue):</strong> Basado en el sistema aditivo de luz. Ideal para manipular canales directamente o aplicar transparencia con RGBA.',
        '<strong>HSL (Hue, Saturation, Lightness):</strong> El formato m\u00e1s intuitivo. Permite ajustar tono, saturaci\u00f3n y luminosidad para crear paletas arm\u00f3nicas.',
      ],
    },
    { type: 'title', text: 'Contraste y Accesibilidad WCAG', level: 3 },
    {
      type: 'paragraph',
      html: 'La calculadora incluye una medici\u00f3n de <strong>contraste relativo</strong> basada en la luminancia. Esto te ayuda a cumplir con las pautas <strong>WCAG</strong>, asegurando que tus textos sean legibles sobre los fondos seleccionados.',
    },
    { type: 'title', text: 'Armon\u00edas Autom\u00e1ticas de Color', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Complementario:</strong> El color opuesto en la rueda crom\u00e1tica, ideal para contraste m\u00e1ximo.',
        '<strong>An\u00e1logos:</strong> Colores adyacentes que crean transiciones suaves y arm\u00f3nicas.',
        '<strong>Tr\u00edada:</strong> Tres colores equidistantes para composiciones vibrantes y equilibradas.',
      ],
    },
  ],
};
