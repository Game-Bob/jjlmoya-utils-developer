import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DuplicateCssRemoverUI } from '../ui';

const slug = 'eliminador-css-duplicado';
const title = 'Eliminador de CSS Duplicado Online. Unifica y Limpia Estilos';
const description =
  'Herramienta gratuita para limpiar y purgar código CSS duplicado. Unifica selectores redundantes, respeta la cascada y reduce el tamaño de tus archivos al instante.';

const faqData = [
  {
    question: '¿Qué ocurre cuando hay selectores CSS duplicados?',
    answer:
      'Cuando el mismo selector aparece varias veces, el navegador aplica todas las reglas pero la última declaración de cada propiedad sobreescribe a las anteriores. Esto genera archivos más pesados de lo necesario sin ningún beneficio real en el resultado visual.',
  },
  {
    question: '¿Se perderá alguna propiedad al eliminar duplicados?',
    answer:
      'No. El algoritmo respeta estrictamente la cascada CSS: ante propiedades en conflicto bajo el mismo selector, preserva siempre la última declarada. Las propiedades únicas de cada bloque se combinan bajo un único selector unificado.',
  },
  {
    question: '¿Funciona con CSS minificado o con comentarios?',
    answer:
      'La herramienta elimina automáticamente los comentarios CSS antes de procesar y trabaja correctamente con código en una sola línea. Para CSS con anidamiento avanzado (nesting, at-rules complejos) se recomienda separar primero los bloques.',
  },
  {
    question: '¿Mis datos se envían a algún servidor?',
    answer:
      'No. Todo el procesamiento ocurre directamente en tu navegador mediante JavaScript local. Ningún fragmento de tu CSS es transmitido a ningún servidor externo, garantizando la privacidad total de tu código.',
  },
];

const howToData = [
  {
    name: 'Pega tu CSS sucio',
    text: 'Copia el contenido de tu archivo CSS con selectores repetidos y pégalo en el campo de la izquierda "CSS Sucio / Duplicado".',
  },
  {
    name: 'Ejecuta la limpieza',
    text: 'Haz clic en el botón "Limpiar y Unificar CSS". La herramienta escaneará todos los selectores, combinará propiedades y eliminará bloques redundantes.',
  },
  {
    name: 'Revisa las estadísticas y copia',
    text: 'Observa el ahorro en bytes obtenido y copia el CSS optimizado con el botón "Copiar Código" para usarlo directamente en tu proyecto.',
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

const ui: DuplicateCssRemoverUI = {
  labelInput: 'CSS Sucio / Duplicado',
  labelOutput: 'CSS Limpio',
  placeholderInput: '.btn { padding: 10px; color: red; }\n.btn { margin: 5px; color: blue; }',
  placeholderOutput: 'Aquí aparecerá el CSS optimizado y unificado...',
  btnClean: 'Limpiar y Unificar CSS',
  btnCopy: 'Copiar Código',
  btnCopied: '¡Copiado!',
  statBytesOriginal: 'Bytes Originales',
  statBytesClean: 'Bytes Limpios',
  statSaving: 'De Ahorro',
};

export const content: ToolLocaleContent<DuplicateCssRemoverUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias y Documentación',
  bibliography: [
    {
      name: 'Web Vitals: Impacto del CSS en Render-Blocking y FCP',
      url: 'https://web.dev/articles/render-blocking-resources',
    },
    {
      name: 'Especificación W3C: Cascada CSS y Herencia',
      url: 'https://www.w3.org/TR/css-cascade-4/',
    },
    {
      name: 'Clean CSS: Librería y metodologías para CSS minifier',
      url: 'https://github.com/clean-css/clean-css',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '¿Por qué se duplica el código CSS?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Al mantener proyectos web a largo plazo o trabajar con código heredado (<em>legacy code</em>), es extremadamente común que varios desarrolladores escriban reglas CSS superpuestas. A menudo, por miedo a romper un diseño existente, un programador prefiere añadir una nueva regla redundante al final del documento en lugar de editar o refactorizar la original.',
    },
    {
      type: 'paragraph',
      html: 'El resultado es un archivo ineficiente con docenas de selectores declarados de forma repetida que ahogan la legibilidad y aumentan considerablemente el peso de descarga de tu página web.',
    },
    {
      type: 'title',
      text: 'El impacto oculto en el Rendimiento Web (Web Vitals)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Los archivos de estilo bloquean el renderizado natural del navegador (recurso <strong>Render-Blocking</strong>). Hasta que tu navegador no descarga y construye el CSSOM completo, tu pantalla permanece en blanco.',
    },
    {
      type: 'tip',
      html: 'Purgar los estilos redundantes no es una mera cuestión de pulcritud en el código; es una mejora medible e inmediata en métricas vitales como el <strong>First Contentful Paint (FCP)</strong>.',
    },
    {
      type: 'title',
      text: 'Cómo unificamos las reglas duplicadas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Esta utilidad actúa como un ensamblador inteligente. En lugar de limitarse a comprimir espacios (como haría un minificador tradicional), escanea recursivamente el texto buscando patrones de selectores idénticos.',
    },
    {
      type: 'list',
      items: [
        'Imagina tener la regla <code>.box { color: red; }</code> y cien líneas más abajo un <code>.box { padding: 10px; color: blue; }</code>. La herramienta unificará ambos bloques bajo el mismo selector <code>.box</code> combinando el padding.',
        '<strong>Preservación de la Cascada CSS:</strong> Ante conflictos directos, el algoritmo preserva estrictamente la última propiedad declarada. Así garantizamos que tu maquetado original no se rompa al purgar el documento.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Se acabó enviar kilobytes de texto muerto a los teléfonos móviles de tus usuarios. Unifica tu código en milésimas de segundo totalmente offline desde tu navegador.',
    },
  ],
};
