import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgToCssUI } from '../ui';

const slug = 'convertidor-svg-css';
const title = 'Convertidor de SVG a CSS y Data URI. Optimización Web';
const description =
  'Transforma tus iconos y vectores SVG en código CSS (Background o Mask) o Data URI comprimido. Optimiza el rendimiento de tu web eliminando peticiones HTTP externas.';

const faqData = [
  {
    question: '¿Es mejor usar Data URI o un archivo .svg externo?',
    answer:
      'Depende del uso. Los Data URIs eliminan peticiones HTTP (ideal para iconos pequeños), pero aumentan el tamaño del CSS. Para ilustraciones grandes o ricas en detalles, es preferible un archivo externo.',
  },
  {
    question: '¿Cómo cambio el color de un SVG incrustado en CSS?',
    answer:
      "La mejor forma es mediante 'mask-image'. Al definir el SVG como una máscara, puedes usar 'background-color' para cambiar su color dinámicamente, incluso en estados :hover.",
  },
  {
    question: '¿Qué navegadores soportan las Máscaras CSS?',
    answer:
      'Todos los navegadores modernos (Chrome, Firefox, Safari, Edge) tienen soporte completo. Para navegadores antiguos se suelen usar prefijos -webkit-.',
  },
  {
    question: '¿Afecta el uso de Data URIs al SEO?',
    answer:
      'Sí, de forma positiva. Al reducir el número de peticiones necesarias para renderizar la página, mejora el tiempo de carga (LCP) y la puntuación en Core Web Vitals.',
  },
  {
    question: '¿Puedo usarlo en frameworks como React o Tailwind?',
    answer:
      '¡Por supuesto! Puedes copiar el código generado y usarlo en tus archivos .css o incluso como valores arbitrarios en Tailwind CSS.',
  },
];

const howToData = [
  {
    name: 'Pegar el SVG',
    text: 'Copia el código fuente de tu archivo SVG y pégalo en el área de texto de la izquierda.',
  },
  {
    name: 'Elegir el tipo de salida',
    text: 'Selecciona entre Background Image (para fondos estáticos), CSS Mask (para iconos con color dinámico) o Solo Data URI (para uso directo).',
  },
  {
    name: 'Copiar el resultado',
    text: 'Haz clic en "Copiar" para llevar el código CSS generado a tu portapapeles.',
  },
  {
    name: 'Aplicar en tu proyecto',
    text: 'Pega el código en tu hoja de estilos o componente CSS. Para Masks, añade también background-color para definir el color del icono.',
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

const ui: SvgToCssUI = {
  labelPasteTitle: 'Pegar SVG',
  labelInputArea: 'Código Fuente SVG',
  labelPreviewOriginal: 'Vista Previa Original',
  labelResultTitle: 'Resultado CSS',
  labelPreviewApplied: 'Resultado Aplicado',
  tabBackground: 'Background Image',
  tabMask: 'CSS Mask / Webkit',
  tabUri: 'Solo Data URI',
  btnCopy: 'Copiar',
  btnCopied: '¡Copiado!',
  placeholder: '<svg xmlns="http://www.w3.org/2000/svg" ...',
};

export const content: ToolLocaleContent<SvgToCssUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias y Documentación',
  bibliography: [
    {
      name: 'CSS-Tricks: Using SVG as Background',
      url: 'https://css-tricks.com/using-svg/',
    },
    {
      name: 'MDN Web Docs: mask-image',
      url: 'https://developer.mozilla.org/es/docs/Web/CSS/mask-image',
    },
    {
      name: 'MDN Web Docs: background-image',
      url: 'https://developer.mozilla.org/es/docs/Web/CSS/background-image',
    },
    {
      name: 'W3C: CSS Masking Module Level 1',
      url: 'https://www.w3.org/TR/css-masking-1/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '¿Por qué convertir SVG a CSS Data URI?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En el desarrollo web moderno, optimizar el rendimiento y la carga de recursos es fundamental. Insertar iconos directamente en el CSS mediante <strong>Data URIs</strong> elimina peticiones HTTP innecesarias, lo que reduce la latencia y mejora el tiempo hasta que la página es interactiva (TTI).',
    },
    {
      type: 'paragraph',
      html: 'Esta herramienta transforma el código vectorial <code>&lt;svg&gt;</code> en una cadena de texto codificada que el navegador puede interpretar como una imagen de fondo o una máscara de recorte, manteniendo la escalabilidad infinita y la nitidez característica de los vectores.',
    },
    {
      type: 'title',
      text: 'Beneficios Técnicos Principales',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Cero Peticiones HTTP:</strong> Al integrar el gráfico en tus archivos <code>.css</code>, el navegador no necesita descargar archivos externos adicionales.',
        '<strong>Personalización vía CSS Mask:</strong> Usando la técnica de <code>mask-image</code>, puedes cambiar el color de un icono vectorial complejo simplemente usando <code>background-color</code>.',
        '<strong>Renderizado Inmediato:</strong> Evitas el parpadeo de contenido (FOUC) ya que los recursos visuales críticos están disponibles tan pronto como se descarga la hoja de estilos.',
      ],
    },
    {
      type: 'title',
      text: 'Máscaras CSS (CSS Masks) vs Backgrounds',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mucha gente usa simplemente <code>background-image</code> para incrustar vectores, pero esto tiene una limitación: no puedes cambiar el color del SVG dinámicamente desde CSS.',
    },
    {
      type: 'paragraph',
      html: 'Nuestra utilidad soporta la generación de código para <strong>Máscaras CSS</strong>. Al aplicar un <code>mask-image</code> con el Data URI generado, el icono actúa como un estencil, permitiendo que el <code>background-color</code> del elemento defina el color final del icono. Es la forma más profesional y flexible de gestionar iconos en Astro, Next.js o cualquier framework moderno.',
    },
  ],
};
