import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CalculadoraTiempoDatosUI } from '../ui';

const slug = 'calculadora-tiempo-datos';
const title = 'Calculadora de Tiempo en Datos Impacto de la Velocidad Web';
const description = 'Descubre cuánto tiempo de vida pierden tus usuarios esperando a que tu web cargue en conexiones 3G, 4G y 5G. Calcula el impacto real del peso de tu sitio.';

const faqData = [
  {
    question: '¿Por qué es importante saber el tiempo de carga de mi sitio web?',
    answer: 'Porque directamente impacta en la experiencia del usuario, el SEO y las conversiones. Google ha documentado que cada segundo de retraso reduce las conversiones un 7%. Además, el 53% de los visitantes móviles abandonan una página que tarda más de 3 segundos en cargar.',
  },
  {
    question: '¿Qué son esos porcentajes tan pequeños de "tiempo de vida"?',
    answer: 'Son el porcentaje del tiempo de vida total de una persona (aproximadamente 80 años o 2.5 mil millones de segundos) que se invierte esperando que tu página cargue. Aunque parezcan pequeños, cuando se multiplican por millones de usuarios, representan enormes cantidades de tiempo humano desperdiciado.',
  },
  {
    question: '¿Cuál es la velocidad de conexión promedio en el mundo?',
    answer: 'Varía enormemente por región. En países desarrollados, 4G es estándar. Sin embargo, millones de usuarios en países en desarrollo aún dependen de 3G. Por eso es crucial optimizar tu sitio para funcionar bien en todas las velocidades.',
  },
  {
    question: '¿Qué peso debería tener mi sitio web?',
    answer: 'Google recomienda que la homepage cargue en menos de 3 segundos en una conexión 4G típica. Para esto, un sitio debería idealmente pesar entre 1-2 MB. Sin embargo, el promedio global es cercano a 2-3 MB, lo que significa que la mayoría de sitios están por encima del óptimo.',
  },
  {
    question: '¿Cómo puedo reducir el peso de mi sitio?',
    answer: 'Las principales estrategias son: optimizar imágenes (representan 50-80% del peso), minificar CSS y JavaScript, usar lazy loading, implementar cache del navegador y usar un CDN. La optimización de imágenes suele ser el factor más impactante.',
  },
  {
    question: '¿La velocidad de carga afecta el posicionamiento en Google?',
    answer: 'Sí, absolutamente. Google considera Core Web Vitals (que miden velocidad y experiencia de usuario) como factores de ranking importantes. Un sitio lento tendrá peor posicionamiento que uno rápido, incluso con contenido similar.',
  },
];

const howToData = [
  { name: 'Ingresa el Peso de tu Sitio', text: 'Utiliza las herramientas de desarrollador de tu navegador (Network tab) o servicios como WebPageTest para averiguar el peso total de tu página. Introduce ese valor en MB.' },
  { name: 'Observa los Tiempos de Carga', text: 'La calculadora mostrará automáticamente cuántos segundos tardará tu sitio en cargar en conexiones 3G, 4G y 5G. Recuerda que en la práctica, los tiempos suelen ser mayores.' },
  { name: 'Entiende el Impacto en Tiempo de Vida', text: 'El porcentaje de "tiempo de vida" ilustra cuánto del tiempo de vida total de una persona se invierte en esperar. Usa esto como motivación para optimizar.' },
  { name: 'Optimiza y Vuelve a Calcular', text: 'Después de optimizar tu sitio, vuelve a medir el peso y recalcula. Verás cómo pequeñas mejoras tienen grandes impactos.' },
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

const ui: CalculadoraTiempoDatosUI = {
  headerTitle: 'Tiempo Perdido en Redes',
  labelWebSize: 'Peso de la web (MB)',
  unit: 'MB',
  presetsLabel: 'EJEMPLOS REALISTAS',
  labelSpeed: 'Velocidad de conexión',
  speedLabel3g: '3G',
  speedValue3g: '0.4 Mbps',
  speedLabel4g: '4G/LTE',
  speedValue4g: '10 Mbps',
  speedLabel5g: '5G',
  speedValue5g: '100+ Mbps',
  labelTimes: '¿Cuántas veces al día?',
  resultTitle: 'Resultados',
  resultSingleLoad: 'Una carga',
  resultDailyTotal: 'Total diario',
  resultTimePerYear: 'al año esperando',
  resultLifeYears: 'en tu vida útil',
  resultMessage: 'Has perdido aproximadamente 1 año completo de vida',
  copyMessage: 'Copiado',
  preset3g: '3G',
  preset4g: '4G',
  preset5g: '5G',
};

export const content: ToolLocaleContent<CalculadoraTiempoDatosUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Recursos Técnicos sobre Optimización Web',
  bibliography: [
    { name: 'Google PageSpeed Insights', url: 'https://pagespeed.web.dev/' },
    { name: 'WebPageTest - Analiza la velocidad de tu sitio', url: 'https://www.webpagetest.org/' },
    { name: 'Web.dev - Core Web Vitals', url: 'https://web.dev/vitals/' },
    { name: 'MDN - Web Performance', url: 'https://developer.mozilla.org/en-US/docs/Web/Performance' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '¿Por Qué la Velocidad de Carga es Crítica para tu Web?', level: 2 },
    {
      type: 'paragraph',
      html: 'En la era digital actual, la velocidad de carga de un sitio web no es un lujo, sino una <strong>necesidad absoluta</strong>. Cada milisegundo cuenta cuando se trata de retener usuarios, mejorar el posicionamiento en buscadores y maximizar las conversiones. La realidad es que los usuarios modernos tienen expectativas muy altas: esperan que una página web cargue en menos de 3 segundos.',
    },
    {
      type: 'paragraph',
      html: 'El peso de tu sitio web es uno de los factores más directamente relacionados con la velocidad de carga. Esta calculadora te ayuda a entender exactamente cuánto tiempo pierden tus visitantes esperando que tu página se cargue.',
    },
    { type: 'title', text: 'El Impacto de la Velocidad en la Experiencia del Usuario', level: 3 },
    {
      type: 'paragraph',
      html: 'La velocidad de carga afecta directamente a varios aspectos críticos de tu presencia en línea. Los estudios demuestran que el 53% de los visitantes de sitios móviles abandonan una página si tarda más de 3 segundos en cargar.',
    },
    {
      type: 'paragraph',
      html: 'Las tasas de conversión caen un 7% por cada segundo adicional de latencia. Si tu tienda online pierde 100 ventas al día porque tu sitio tarda 5 segundos en lugar de 2, estás perdiendo decenas de miles de euros anualmente.',
    },
    { type: 'title', text: 'Entendiendo las Diferentes Velocidades de Conexión', level: 3 },
    {
      type: 'paragraph',
      html: 'Las velocidades de conexión varían enormemente según la geografía y la tecnología disponible:',
    },
    {
      type: 'table',
      headers: ['Tecnología', 'Velocidad', 'Disponibilidad', 'Tiempo de Carga (5MB)'],
      rows: [
        ['<strong>3G</strong>', '0.4 Mbps', 'Común en áreas rurales y países en desarrollo', '[100 segundos'],
        ['<strong>4G/LTE</strong>', '10 Mbps', 'Estándar en países desarrollados', '[4 segundos'],
        ['<strong>5G</strong>', '100+ Mbps', 'Crecimiento gradual, aún limitado', '[0.4 segundos'],
      ],
    },
    { type: 'title', text: 'Estrategias para Reducir el Peso de tu Sitio', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Optimización de Imágenes:</strong> Representan entre el 50-80% del peso total. Usar TinyPNG o ImageOptim puede reducir el tamaño en un 40-60%.',
        '<strong>Minificación de CSS y JavaScript:</strong> Elimina espacios en blanco y código innecesario. Puedes ahorrar el 30-50%.',
        '<strong>Lazy Loading:</strong> Carga imágenes solo cuando el usuario se desplaza hacia ellas.',
        '<strong>Cache Agresivo:</strong> Configura tu servidor para cachear archivos estáticos en el navegador del usuario.',
        '<strong>CDN:</strong> Usa un CDN como Cloudflare para servir contenido desde servidores cercanos.',
      ],
    },
    { type: 'title', text: 'Conclusión: Cada Segundo Cuenta', level: 2 },
    {
      type: 'paragraph',
      html: 'Tu sitio web es a menudo la primera impresión que los usuarios tienen de tu marca. Si esa impresión es de frustración mientras esperan a que cargue, has perdido la batalla antes de empezar. Un sitio rápido crea una experiencia positiva que fideliza usuarios y mejora todas tus métricas.',
    },
  ],
};
