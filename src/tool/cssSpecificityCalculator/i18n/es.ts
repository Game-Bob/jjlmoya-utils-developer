import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssSpecificityCalculatorUI } from '../ui';

const slug = 'calculadora-especificidad-css';
const title = 'Calculadora de Especificidad CSS Online. Visualizador de Peso';
const description =
  'Calcula la especificidad y peso exacto de cualquier selector CSS. Herramienta visual para entender qué regla CSS gana la cascada y evitar el uso de !important.';

const faqData = [
  {
    question: '¿Qué es la especificidad en CSS?',
    answer:
      'La especificidad es el algoritmo que usan los navegadores para decidir qué regla CSS se aplica a un elemento cuando varias reglas compiten por él. Se representa como una puntuación de tres columnas (A, B, C) que indica IDs, clases/atributos/pseudoclases y elementos/pseudoelementos respectivamente.',
  },
  {
    question: '¿Puede una clase superar a un ID en especificidad?',
    answer:
      'No directamente. Un ID (1,0,0) siempre vence a cualquier número de clases (0,N,0) porque la especificidad no tiene acarreo numérico entre columnas. Cien clases (0,100,0) nunca superarán a un solo ID (1,0,0).',
  },
  {
    question: '¿Qué ocurre cuando dos selectores tienen la misma especificidad?',
    answer:
      'Cuando dos selectores tienen exactamente el mismo peso, gana el que esté declarado último en el archivo CSS. Es lo que se conoce como el orden de la cascada natural. Esta calculadora te avisa visualmente cuando se produce un empate.',
  },
  {
    question: '¿Por qué se considera mala práctica usar !important?',
    answer:
      'La directiva !important rompe la cascada natural del CSS al forzar una declaración sobre cualquier otra regla. Esto genera conflictos difíciles de depurar en proyectos grandes y hace el mantenimiento del código frustrante. Metodologías como BEM abogan por mantener la especificidad plana para evitar necesitar !important.',
  },
];

const howToData = [
  {
    name: 'Escribe el primer selector',
    text: 'Introduce el Selector A en el campo de texto de la izquierda, por ejemplo: #header .nav-item > a. Los contadores de IDs, Clases y Elementos se actualizarán al instante.',
  },
  {
    name: 'Escribe el segundo selector',
    text: 'Introduce el Selector B en el campo de texto de la derecha, por ejemplo: ul li.active a:hover. Observa cómo cambian los pesos en tiempo real.',
  },
  {
    name: 'Lee el resultado',
    text: 'La calculadora resaltará con un banner verde el bloque del selector ganador. Si ambos empatan, aparecerá un mensaje de empate explicando el desempate por orden de cascada.',
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
  inLanguage: 'es',
};

const ui: CssSpecificityCalculatorUI = {
  labelA: 'Selector A',
  labelB: 'Selector B',
  placeholderA: 'ej. #header .nav-item > a',
  placeholderB: 'ej. ul li.active a:hover',
  cardIds: 'IDs',
  cardClasses: 'Clases / Pseudos',
  cardElements: 'Elementos',
  bannerWinner: '¡Este selector gana!',
  msgTie: 'Ambos selectores tienen el mismo peso. Si compiten por el mismo elemento, ganará el que esté escrito <strong>último</strong> en el CSS.',
};

export const content: ToolLocaleContent<CssSpecificityCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias y Documentación',
  bibliography: [
    {
      name: 'MDN Web Docs: Especificidad en CSS',
      url: 'https://developer.mozilla.org/es/docs/Web/CSS/Specificity',
    },
    {
      name: 'W3C: Selectors Level 3 - Especificidad',
      url: 'https://www.w3.org/TR/selectors-3/#specificity',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '¿Qué es la Especificidad en CSS?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La especificidad en CSS es el algoritmo mediante el cual los navegadores deciden qué valores de las propiedades aplicarán a un elemento. Básicamente, es una puntuación matemática que indica al navegador "cuán específica" es una regla.',
    },
    {
      type: 'paragraph',
      html: 'Si dos reglas tienen diferentes niveles de especificidad, ganará la que tenga mayor peso, sin importar el orden en el que fueron escritas. Si ambas tienen el mismo peso, ganará la última declarada en el código fuente.',
    },
    {
      type: 'title',
      text: 'Cómo calcular la Especificidad CSS',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La especificidad se calcula en tres categorías que forman un peso de tres columnas, expresado como <strong>(A, B, C)</strong>:',
    },
    {
      type: 'list',
      items: [
        '<strong>Columna A (IDs):</strong> Suma el número de identificadores únicos. Ejemplo: <code>#header</code> cuenta como 1 en la columna A.',
        '<strong>Columna B (Clases, Atributos y Pseudos):</strong> Suma todas las clases (<code>.button</code>), atributos (<code>[type="text"]</code>) y pseudo-clases (<code>:hover</code>).',
        '<strong>Columna C (Elementos y Pseudo-elementos):</strong> Suma todos los elementos HTML (<code>div</code>, <code>h1</code>) y pseudo-elementos (<code>::before</code>).',
      ],
    },
    {
      type: 'title',
      text: 'La regla de oro: no hay acarreo numérico',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Una regla con especificidad (0,50,0) <strong>nunca</strong> será más específica que una regla (1,0,0). <strong>Un solo ID vence a infinitas clases.</strong> Las columnas no se trasladan entre sí.',
    },
    {
      type: 'title',
      text: 'El problema de !important y la arquitectura BEM',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La directiva <code>!important</code> es una excepción a las reglas de especificidad. Cuando la utilizas, esa declaración sobrescribe cualquier otra automáticamente. Se considera mala práctica ya que destruye la cascada natural.',
    },
    {
      type: 'paragraph',
      html: 'Para evitar guerras de especificidad en proyectos grandes, metodologías como <strong>BEM</strong> abogan por el uso exclusivo de selectores de clase a un único nivel de profundidad, manteniendo la especificidad plana en (0,1,0).',
    },
  ],
};
