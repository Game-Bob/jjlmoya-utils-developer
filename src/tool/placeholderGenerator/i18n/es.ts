import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PlaceholderGeneratorUI } from '../ui';

const slug = 'generador-imagenes-placeholder';
const title = 'Generador de Imágenes Placeholder. Mockups Rápidos Online';
const description =
  'Crea imágenes de relleno personalizadas para tus diseños web. Ajusta resolución, fondo, texto y exporta en PNG, WebP o JPEG en milisegundos.';

const faqData = [
  {
    question: '¿Qué es una imagen placeholder?',
    answer:
      'Una imagen placeholder o de relleno es un gráfico temporal utilizado en diseño web y maquetación para reservar el espacio donde irá una imagen definitiva. Ayudan a visualizar la estructura de una página antes de tener el contenido final.',
  },
  {
    question: '¿Puedo usar cualquier resolución en el generador?',
    answer:
      'Sí, puedes introducir cualquier valor numérico para el ancho y el alto. El generador creará un lienzo con las dimensiones exactas solicitadas, perfecto para cuadrículas estrictas o banners publicitarios específicos.',
  },
  {
    question: '¿En qué formato se descargan las imágenes?',
    answer:
      'Por defecto, las imágenes se generan en WebP para una compresión óptima, pero puedes elegir descargarlas en formato PNG si buscas mantener la máxima calidad sin pérdida, o JPEG para compatibilidad tradicional.',
  },
  {
    question: '¿Se procesa esto en algún servidor?',
    answer:
      'No, todo el renderizado de la imagen se genera instantáneamente en la memoria virtual (Canvas) de tu propio navegador. Es instantáneo y no requiere enviar datos a través de la red.',
  },
];

const howToData = [
  {
    name: 'Establecer dimensiones',
    text: 'Introduce los valores de ancho y alto directamente o haz clic en uno de los presets (FHD, HD, Instagram, etc.) para rellenarlos automáticamente.',
  },
  {
    name: 'Configurar colores y texto',
    text: 'Elige el color de fondo y de texto usando los selectores nativos o escribiendo un código hexadecimal. Opcionalmente, añade texto personalizado para reemplazar la etiqueta de dimensiones predeterminada.',
  },
  {
    name: 'Seleccionar tipografía y formato',
    text: 'Escoge la familia tipográfica y el tamaño de fuente. Selecciona el formato de salida (WebP, PNG o JPEG) según tus necesidades.',
  },
  {
    name: 'Descargar la imagen',
    text: 'Haz clic en el botón Descargar para guardar el placeholder generado directamente en tu dispositivo.',
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

const ui: PlaceholderGeneratorUI = {
  labelDimensions: 'Dimensiones Rápidas',
  labelWidth: 'Ancho (px)',
  labelHeight: 'Alto (px)',
  labelBgColor: 'Fondo',
  labelTextColor: 'Texto',
  labelCustomText: 'Texto Personalizado (Opcional)',
  placeholderCustomText: 'Ej: Banner Hero',
  labelFontFamily: 'Tipografía',
  labelFontSize: 'Tamaño Base',
  fontSizeAuto: 'Automático',
  labelFormat: 'Formato de Salida',
  btnDownload: 'Descargar Imagen',
};

export const content: ToolLocaleContent<PlaceholderGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias y Documentación',
  bibliography: [
    {
      name: 'MDN Web Docs: HTMLCanvasElement.toDataURL()',
      url: 'https://developer.mozilla.org/es/docs/Web/API/HTMLCanvasElement/toDataURL',
    },
    {
      name: 'MDN Web Docs: CanvasRenderingContext2D',
      url: 'https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D',
    },
    {
      name: 'W3C: HTML Canvas 2D Context',
      url: 'https://www.w3.org/TR/2dcontext/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'La Herramienta Definitiva para Mockups Rápidos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cuando nos encontramos en las fases tempranas de conceptualización o maquetación estructural de un sitio web (wireframing), rara vez disponemos del contenido fotográfico final. Las dimensiones vacías pueden distorsionar la visualización global del producto y ocultar errores críticos de espaciado o proporciones. Un generador de imágenes placeholder resuelve de golpe este contratiempo, permitiendo inyectar áreas coloreadas rigurosamente dimensionadas de forma instantánea.',
    },
    {
      type: 'tip',
      title: 'Diseño sin Fricciones',
      html: 'Integrar un espacio de 1200x800 píxeles exactamente es imperativo cuando construyes CSS Grids. Al descargar los bloques de relleno evitas inyectar CSS extra o scripts de terceros en tu código temporal.',
    },
    {
      type: 'title',
      text: 'La Importancia de Prescindir de Servicios Externos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una práctica recurrente del ecosistema frontend consiste en vincular servicios como <code>via.placeholder.com</code> o similares directamente en los atributos <code>src</code> del HTML. Si bien resulta teóricamente ágil mediante parámetros URL, posee profundos efectos secundarios que un programador meticuloso evitaría a toda costa.',
    },
    {
      type: 'paragraph',
      html: 'Insertar un dominio remoto en cada etiqueta de carga de una página en desarrollo incrementa la cantidad de peticiones DNS, penaliza los sistemas de hot-reloading de Vite, Gulp o Webpack y expone accidentalmente trazas en ramas que eventualmente acaban en la nube. Al usar esta utilidad y generar la imagen en tu formato preferido (WebP, PNG o JPEG), centralizas tu prototipo completamente en modo localhost.',
    },
    {
      type: 'title',
      text: 'Características Fundamentales del Algoritmo del Generador',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Resolución Pixel Perfect:</strong> HTML5 Canvas nativo asegura que el lienzo exportado corresponde aritméticamente a las coordenadas estipuladas por el usuario.',
        '<strong>Autoscaling Tipográfico:</strong> En el modo Automático, la dimensión de la fuente calcula el área perimetral y el número de caracteres para acoplar con elegancia el texto a lo largo y ancho sin provocar <em>overflows</em> indeseados.',
        '<strong>Fusión Hexadecimal:</strong> Control de estado bidireccional entre selectores de ecosistema nativo HTML e inputs mecanografiados garantizando contrastes precisos dictados por la paleta del UI/UX de tu Figma o Penpot original.',
      ],
    },
    {
      type: 'title',
      text: 'El Arte Oculto del Wireframing Técnico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'No existe proyecto monolítico ni micro frontends que no pase por etapas de cimentación, especialmente frente a clientes exigentes o Product Managers con una visión férrea. Facilitar iteraciones gráficas ágiles sin arrastrar la sobrecarga de <em>assets</em> finalizados separa al desarrollador veloz del atascado. Este generador exprime directamente la API <code>toDataURL()</code> moderna de JS en tu máquina local para brindar un resultado a la altura del mercado industrial sin procesamientos intermedios dudosos.',
    },
  ],
};
