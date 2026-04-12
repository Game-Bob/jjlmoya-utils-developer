import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlEncoderDecoderUI } from '../ui';

const slug = 'codificador-decodificador-url';
const title = 'Codificador y Decodificador de URLs Online';
const description =
  'Convierte caracteres especiales de cualquier enlace a formato seguro (Percent-Encoding) o devuélvelos a su estado original legible al instante de forma local.';

const faqData = [
  {
    question: '¿Qué caracteres se codifican en una URL?',
    answer:
      'Se codifican todos los caracteres no permitidos en el estándar ASCII para URLs: espacios, tildes, ñ, símbolos como &, =, +, #, ?, /, entre otros. Por ejemplo, un espacio se convierte en %20 y la ñ en %C3%B1.',
  },
  {
    question: '¿Cuál es la diferencia entre encodeURI y encodeURIComponent?',
    answer:
      'encodeURI codifica una URL completa y deja intactos los caracteres reservados como / y ?. encodeURIComponent codifica todos los caracteres especiales incluyendo los reservados, siendo ideal para codificar valores individuales de parámetros de consulta.',
  },
  {
    question: '¿Por qué mi URL tiene %20 en lugar de espacios?',
    answer:
      'El protocolo HTTP no permite espacios en las URLs. El %20 es la representación en Percent-Encoding del espacio en blanco según el estándar ASCII. Algunos sistemas usan el signo + como alternativa, pero %20 es el más universal y seguro.',
  },
  {
    question: '¿Es seguro usar esta herramienta con URLs privadas?',
    answer:
      'Sí, completamente seguro. Todo el procesamiento ocurre en tu navegador mediante JavaScript nativo (encodeURIComponent/decodeURIComponent). Ninguna de tus URLs o parámetros se envían a ningún servidor externo.',
  },
];

const howToData = [
  {
    name: 'Pegar el texto crudo',
    text: 'Escribe o pega tu URL o cadena de texto en el campo superior "Texto Crudo (Legible)".',
  },
  {
    name: 'Codificar o decodificar',
    text: 'Haz clic en "Codificar URL" para convertir el texto a formato seguro Percent-Encoding, o en "Decodificar" para revertir una URL codificada a su forma legible.',
  },
  {
    name: 'Copiar el resultado',
    text: 'Usa el botón "Copiar" del campo correspondiente para llevar el resultado a tu portapapeles.',
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

const ui: UrlEncoderDecoderUI = {
  labelRaw: 'Texto Crudo (Legible)',
  labelEncoded: 'URL Formateada (Encoded)',
  btnClear: 'Limpiar',
  btnCopy: 'Copiar',
  btnCopied: '¡Copiado!',
  btnEncode: 'Codificar URL',
  btnDecode: 'Decodificar',
  placeholderRaw: 'https://ejemplo.com/busqueda?q=zapatos de tacón rojo&talla=38',
  placeholderEncoded: 'https%3A%2F%2Fejemplo.com%2Fbusqueda%3Fq%3Dzapatos%20de%20tac%C3%B3n%20rojo%26talla%3D38',
};

export const content: ToolLocaleContent<UrlEncoderDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias y Documentación',
  bibliography: [
    {
      name: 'MDN Web Docs: encodeURIComponent()',
      url: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent',
    },
    {
      name: 'IETF RFC 3986: Estructura de URIs',
      url: 'https://datatracker.ietf.org/doc/html/rfc3986',
    },
    {
      name: 'W3C: URL Living Standard',
      url: 'https://url.spec.whatwg.org/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '¿Qué es la Codificación de una URL?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Al navegar por internet o enviar peticiones a servidores, es común pensar en una URL (Uniform Resource Locator) como simplemente una "dirección web". Sin embargo, el protocolo de internet dicta que las URLs solo pueden transmitirse utilizando un conjunto muy restringido de caracteres <strong>ASCII estándar</strong>.',
    },
    {
      type: 'paragraph',
      html: '¿Qué ocurre si la URL contiene un espacio, tildes, o parámetros especiales como símbolos de más (<code>+</code>) o de igual (<code>=</code>)? Para evitar que los sistemas colapsen intentando leer caracteres ilegales, estos deben ser traducidos a su forma segura compatible utilizando <strong>Percent-Encoding</strong> (Codificación porcentual).',
    },
    {
      type: 'title',
      text: 'Cómo funciona el Percent-Encoding',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cuando utilizas esta herramienta, el algoritmo toma cualquier carácter "inseguro" (como un espacio en blanco o una letra acentuada como la ñ) y lo sustituye por un signo de porcentaje <code>%</code> seguido de dos dígitos hexadecimales correspondientes a su valor en el estándar UTF-8.',
    },
    {
      type: 'list',
      items: [
        '<strong>Ejemplo Básico:</strong> Un simple espacio en blanco será sustituido por su equivalente seguro: <code>%20</code>.',
        '<strong>Soporte Extendido:</strong> Una letra <code>á</code> se transformará en <code>%C3%A1</code>, y la <code>ñ</code> en <code>%C3%B1</code>.',
      ],
    },
    {
      type: 'title',
      text: 'La importancia en APIs y Consultas GET',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cuando desarrollas integraciones, un error típico consiste en pasar una cadena cruda a los parámetros de una URL. Si insertas <code>camisa&azul</code> de forma pura a tu backend (<code>/buscar?q=camisa&azul</code>), el servidor interpretará que <code>azul</code> es un nuevo parámetro, rompiendo toda la lógica del código.',
    },
    {
      type: 'paragraph',
      html: 'Esta herramienta garantiza cálculos limpios y automáticos con un 100% de ejecución en tu navegador local. Ninguna de tus cadenas URL es transmitida a servidores de terceros, asegurando la privacidad de tus tokens y parámetros analíticos.',
    },
  ],
};
