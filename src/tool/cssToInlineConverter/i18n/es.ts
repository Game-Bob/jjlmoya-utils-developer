import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssToInlineConverterUI } from '../ui';

const slug = 'convertidor-css-inline';
const title = 'Convertidor de CSS Externo a Inline HTML. Inliner para Emails';
const description =
  'Transforma tus hojas de estilo y clases CSS a estilos incrustados en línea automáticamente en tu HTML. Ideal para newsletters, emails transaccionales y maquetación web segura.';

const faqData = [
  {
    question: '¿Por qué los emails necesitan CSS inline y no externo?',
    answer:
      'Los clientes de correo como Outlook, Gmail o Apple Mail filtran o ignoran las etiquetas <link> y <style> por razones de seguridad. La única forma garantizada de que un estilo se aplique correctamente en un email es incrustarlo directamente en el atributo style de cada elemento HTML.',
  },
  {
    question: '¿Qué ocurre si un elemento tiene ya un atributo style propio?',
    answer:
      'La herramienta respeta los estilos inline existentes y añade las nuevas propiedades a continuación, simulando el comportamiento de la cascada CSS: las propiedades declaradas más tarde sobreescriben las anteriores en caso de conflicto.',
  },
  {
    question: '¿Funciona con selectores complejos como :hover o media queries?',
    answer:
      'La herramienta procesa selectores de clase, id, atributos y pseudo-clases estructurales que DOMParser puede resolver. Los selectores dependientes de estado como :hover y las media queries no se pueden inlinear (ya que dependen del entorno en tiempo de ejecución) y son ignorados.',
  },
  {
    question: '¿Mi código HTML y CSS se envía a algún servidor?',
    answer:
      'No. Todo el procesamiento ocurre 100% en tu navegador usando la DOMParser API nativa. Ningún byte de tu código sale de tu dispositivo, lo que garantiza privacidad total para plantillas con contenido sensible.',
  },
];

const howToData = [
  {
    name: 'Pega tu HTML original',
    text: 'Escribe o pega el HTML que deseas procesar en el campo "HTML Original". Puede ser un fragmento o un documento completo.',
  },
  {
    name: 'Añade tus reglas CSS',
    text: 'Pega en el campo "Reglas CSS" las clases e ids que deseas inyectar. La herramienta las aplica respetando la especificidad de los selectores.',
  },
  {
    name: 'Convierte y copia',
    text: 'Haz clic en "Inyectar CSS en el HTML". El resultado con todos los estilos inline aparecerá abajo listo para copiar y pegar en tu gestor de email o CMS.',
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

const ui: CssToInlineConverterUI = {
  labelHtml: 'HTML Original',
  labelCss: 'Reglas CSS',
  labelOutput: 'Resultado HTML En Línea',
  placeholderHtml: '<div class="mi-clase">Hola Mundo</div>',
  placeholderCss: '.mi-clase { color: red; padding: 10px; }',
  placeholderOutput: 'Aquí aparecerá tu HTML con los estilos incrustados...',
  btnConvert: 'Inyectar CSS en el HTML',
  btnCopy: 'Copiar Código',
  btnCopied: '¡Copiado!',
  msgError: 'Error al procesar. Comprueba que el HTML y el CSS sean correctos.',
};

export const content: ToolLocaleContent<CssToInlineConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias y Documentación',
  bibliography: [
    {
      name: 'Can I email: La matriz de soporte HTML y CSS para Emails',
      url: 'https://www.caniemail.com/',
    },
    {
      name: 'MDN Web Docs: El atributo global de estilo (style)',
      url: 'https://developer.mozilla.org/es/docs/Web/HTML/Global_attributes/style',
    },
    {
      name: 'DOMParser API: Parseo seguro en el navegador',
      url: 'https://developer.mozilla.org/es/docs/Web/API/DOMParser',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '¿Qué es un CSS Inliner y por qué lo necesitas?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Al desarrollar aplicaciones web modernas, estamos acostumbrados a separar responsabilidades: el HTML construye la estructura, y un archivo CSS externo aporta todo el estilo visual. Sin embargo, no todos los entornos confían en hojas de estilo externas ni etiquetas globales <code>&lt;style&gt;</code>.',
    },
    {
      type: 'paragraph',
      html: 'El caso de uso más popular y estricto donde el CSS externo falla es el <strong>Desarrollo de Plantillas de Email</strong>. En estos contextos, la única manera fiable de que una fuente, color o margen renderice correctamente es que esté anidado directamente en la etiqueta: <code>&lt;span style="color: red;"&gt;</code>.',
    },
    {
      type: 'title',
      text: 'El problema del CSS en correos electrónicos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Los clientes de correo como Microsoft Outlook, Apple Mail o Gmail tienen historiales por sus motores de renderizado CSS restrictivos. La mayoría filtra o descarta etiquetas <code>&lt;link&gt;</code> o <code>&lt;style&gt;</code> por temor a inyecciones de código que puedan romper la interfaz de lectura.',
    },
    {
      type: 'tip',
      html: 'Para newsletters o correos transaccionales (recibos, confirmaciones de cuenta), usar tablas y estilos en línea (<em>inline CSS</em>) es el estándar oro en la industria del email marketing.',
    },
    {
      type: 'title',
      text: 'Cómo funciona esta herramienta en tu navegador',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Parseo Seguro:</strong> Utiliza la <code>DOMParser API</code> para transformar temporalmente el HTML de entrada en un DOM virtual seguro dentro de tu navegador.',
        '<strong>Simulación de Cascada:</strong> Analiza tus reglas CSS, aplica pesos de especificidad a los selectores y muta los atributos <code>style</code> de los elementos seleccionados inyectando el código.',
        '<strong>100% Offline:</strong> Ningún byte de tu código sale de tu dispositivo. Privacidad total para plantillas con contenido sensible.',
      ],
    },
  ],
};
