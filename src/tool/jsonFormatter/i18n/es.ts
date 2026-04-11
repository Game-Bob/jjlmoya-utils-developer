import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonFormatterUI } from '../ui';

const slug = 'json-formatter';
const title = 'Formateador y Validador JSON Online Gratuito';
const description =
  'Herramienta online gratuita para formatear, validar y reparar código JSON. Formatea y embellece JSON. Detecta errores de sintaxis y mejora la lectura del código';

const faqData = [
  {
    question: '¿Son seguros mis datos al usar este formateador?',
    answer:
      'Totalmente. El procesamiento se realiza 100% en tu navegador (Client-Side). Tus datos JSON nunca se envían a ningún servidor, garantizando privacidad total para tus estructuras de datos.',
  },
  {
    question: "¿Qué causa el error 'Invalid JSON'?",
    answer:
      'Suele deberse a comas sobrantes al final de un objeto, falta de comillas dobles en las llaves (keys) o caracteres invisibles. Nuestra herramienta resalta la línea exacta del error para que puedas corregirlo.',
  },
  {
    question: '¿Puede reparar JSON dañado?',
    answer:
      'Nuestra herramienta intenta corregir errores comunes automáticamente, como comas finales innecesarias o escapes de caracteres mal formados, para que el JSON sea válido según el estándar RFC 8259.',
  },
  {
    question: '¿Soporta archivos JSON muy grandes?',
    answer:
      'Sí, el motor de procesado está optimizado para manejar estructuras de datos complejas y archivos extensos sin bloquear la interfaz del navegador.',
  },
];

const howToData = [
  {
    name: 'Pegar el código',
    text: 'Pega tu JSON desordenado o comprimido en el área de texto principal.',
  },
  {
    name: 'Validar y Formatear',
    text: 'El sistema analizará el código automáticamente, resaltando errores de sintaxis y aplicando sangrías para mejorar la lectura.',
  },
  {
    name: 'Elegir estilo',
    text: 'Puedes elegir entre un formato expandido (beautify) o comprimido (minify) según necesites legibilidad o ahorro de espacio.',
  },
  {
    name: 'Copiar resultado',
    text: 'Haz clic en el botón de copiar para llevarte el JSON perfectamente validado a tu portapapeles.',
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

const ui: JsonFormatterUI = {
  labelInput: 'Entrada (JSON)',
  labelOutput: 'Resultado',
  btnMinify: 'Minificar',
  btnBeautify: 'Embellecer',
  btnFix: 'Intentar Arreglar',
  btnCopy: 'Copiar',
  statusWaiting: 'Esperando entrada...',
  statusValid: 'JSON Válido',
  statusInvalid: 'JSON Inválido',
  toastCopied: '¡Copiado!',
  toastFixed: 'JSON reparado (Visualización)',
  toastFixFailed: 'No se pudo reparar automáticamente',
  placeholder: 'Pega tu JSON aquí...',
};

export const content: ToolLocaleContent<JsonFormatterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias y Estándares',
  bibliography: [
    {
      name: 'RFC 8259 – The JavaScript Object Notation (JSON) Data Interchange Format (IETF)',
      url: 'https://datatracker.ietf.org/doc/html/rfc8259',
    },
    {
      name: 'ECMA-404 – The JSON Data Interchange Syntax (Ecma International)',
      url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-404/',
    },
    {
      name: 'JSON.org – Introducing JSON',
      url: 'https://www.json.org/json-en.html',
    },
    {
      name: 'MDN Web Docs – JSON',
      url: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Validación y Formato de JSON',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'JSON (JavaScript Object Notation) es el estándar de facto para el intercambio de datos en la web. Sin embargo, su sintaxis estricta lo hace propenso a errores humanos cuando se edita manualmente.',
    },
    {
      type: 'paragraph',
      html: 'Esta herramienta permite validar la estructura, formatear el código para mejorar su legibilidad y reparar errores sintácticos comunes automáticamente.',
    },
    { type: 'grid', columns: 2 },
    {
      type: 'card',
      title: 'Errores Comunes que Repara',
      html: '<ul><li><strong>Comillas Simples:</strong> El estándar JSON exige comillas dobles. La herramienta convierte <code>\'clave\': \'valor\'</code> a <code>"clave": "valor"</code>.</li><li><strong>Claves sin Comillas:</strong> Detecta claves de objetos estilo JavaScript y les añade las comillas necesarias.</li><li><strong>Comas Sobrantes:</strong> Elimina las comas al final de objetos o arrays (trailing commas) que rompen el parser estricto.</li></ul>',
    },
    {
      type: 'card',
      title: 'Características',
      html: '<ul><li><strong>Resaltado de Sintaxis:</strong> Colorea claves, cadenas, números y booleanos para facilitar la lectura rápida.</li><li><strong>Validación en Tiempo Real:</strong> Indica instantáneamente si el JSON es válido o muestra el error específico de análisis.</li><li><strong>Privacidad Total:</strong> El procesamiento se realiza 100% en tu navegador. Ningún dato se envía a servidores externos.</li></ul>',
    },
  ],
};
