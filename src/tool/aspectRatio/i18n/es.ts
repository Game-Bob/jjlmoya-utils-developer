import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AspectRatioUI } from '../ui';

const slug = 'calculadora-aspect-ratio';
const title = 'Calculadora de Aspect Ratio a Píxeles. Proporciones Online';
const description =
  'Calcula nuevas resoluciones de imagen, vídeo y diseño web y mantén la proporción exacta para no deformar gráficos. Soporta formatos 16:9, 4:3, 21:9 y customizados.';

const faqData = [
  {
    question: '¿Qué es el Aspect Ratio o relación de aspecto?',
    answer:
      'El Aspect Ratio describe la relación geométrica entre la anchura y la altura de una imagen o pantalla. Se representa con dos números separados por dos puntos (ej. 16:9), indicando cómo varía la altura proporcionalmente en relación a la anchura.',
  },
  {
    question: '¿Por qué es importante mantener las proporciones correctas?',
    answer:
      'Ignorar el Aspect Ratio genera imágenes achatadas o estiradas, vídeos con letterboxing inesperado y componentes web que rompen su maquetación en diferentes tamaños de pantalla. Mantener proporciones correctas es clave para una visualización profesional.',
  },
  {
    question: '¿Cómo calcular el alto a partir del ancho con un ratio dado?',
    answer:
      'La fórmula es: Alto = Ancho × (Ratio Alto / Ratio Ancho). Por ejemplo, para un ancho de 1280px con ratio 16:9, el alto sería: 1280 × (9/16) = 720px.',
  },
  {
    question: '¿Cuál es el Aspect Ratio estándar para vídeos en YouTube?',
    answer:
      '16:9 es el ratio estándar para YouTube y la mayoría de plataformas de vídeo modernas. Equivale a resoluciones como 1280×720 (HD), 1920×1080 (Full HD) o 3840×2160 (4K UHD).',
  },
  {
    question: '¿Qué Aspect Ratio usan los vídeos verticales de redes sociales?',
    answer:
      '9:16, que es exactamente el inverso del formato panorámico. Es el ratio nativo de TikTok, Instagram Reels y YouTube Shorts, originado por el consumo de contenido en móvil con el dispositivo en vertical.',
  },
];

const howToData = [
  {
    name: 'Introducir el ratio original',
    text: 'Escribe los valores de anchura y altura del ratio que quieres mantener (ej. 16 y 9 para formato panorámico) o selecciona uno de los presets.',
  },
  {
    name: 'Ajustar el escalado',
    text: 'Cambia el valor de ancho o de alto en la sección "Escala Real". La herramienta calculará automáticamente el valor opuesto para mantener la proporción.',
  },
  {
    name: 'Verificar en la vista previa',
    text: 'El panel de vista previa muestra la forma resultante a escala proporcional, con el ratio simplificado y la resolución calculada.',
  },
  {
    name: 'Aplicar en tu proyecto',
    text: 'Copia los valores calculados para usarlos en tu CSS (aspect-ratio: 16 / 9), en la exportación de vídeo o en la configuración de tu herramienta de diseño.',
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

const ui: AspectRatioUI = {
  labelConfig: 'Configuración',
  labelRatio: 'Ratio Original',
  labelWidth: 'Ancho',
  labelHeight: 'Alto',
  labelScale: 'Escala Real',
  labelPixelWidth: 'Píxeles (Ancho)',
  labelPixelHeight: 'Píxeles (Alto)',
  labelPreview: 'Vista Previa Proporcional',
  labelStatus: 'Relación Perfecta',
  labelOffline: '100% Offline Tool',
};

export const content: ToolLocaleContent<AspectRatioUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias y Documentación',
  bibliography: [
    {
      name: 'MDN Web Docs: aspect-ratio (CSS)',
      url: 'https://developer.mozilla.org/es/docs/Web/CSS/aspect-ratio',
    },
    {
      name: 'Wikipedia: Relación de aspecto',
      url: 'https://es.wikipedia.org/wiki/Relaci%C3%B3n_de_aspecto',
    },
    {
      name: 'W3C: CSS Box Sizing Level 4',
      url: 'https://www.w3.org/TR/css-sizing-4/#aspect-ratio',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '¿Qué es el Aspect Ratio (Relación de Aspecto)?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En diseño gráfico, fotografía y desarrollo frontend, el <strong>Aspect Ratio</strong> o relación de aspecto describe la relación geométrica que existe entre la anchura y la altura de una imagen, pantalla o contenedor. Se representa típicamente con dos números separados por dos puntos (por ejemplo, <code>16:9</code>), indicando cómo aumenta proporcionalmente la altura en respuesta de su anchura.',
    },
    {
      type: 'paragraph',
      html: 'Manejar mal las relaciones de aspecto es causa habitual de fotografías achatadas, vídeos con recortes imprevistos (letterboxing) o componentes web que rompen su maquetación al ser visualizados progresivamente desde el móvil hasta en monitores ultra anchos.',
    },
    {
      type: 'title',
      text: 'Ratios Comunes en la Industria',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dependiendo de tu disciplina, lidiarás constantemente con un número limitado de proporciones estándar globales:',
    },
    {
      type: 'list',
      items: [
        '<strong>16:9 (Panorámico):</strong> El formato dominante absoluto para monitores modernos, televisores, grabaciones en YouTube o resoluciones estándar de alta definición (como 1920×1080 o 4K).',
        '<strong>9:16 (Vertical):</strong> Originado a causa del consumo de contenido móvil nativo (TikTok, Instagram Reels, YouTube Shorts). Exactamente el mismo ratio que los vídeos panorámicos, pero con la rotación física del dispositivo aplicada.',
        '<strong>4:3 (Clásico / Vintage):</strong> Presente en televisiones y monitores antiguos o en modelos de cámaras fotográficas análogas y digitales especializadas. Su apariencia ligeramente cuadrada atrae la atención directa sobre el eje central compositivo.',
      ],
    },
    {
      type: 'title',
      text: 'Desarrollo Web y la propiedad CSS aspect-ratio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Antiguamente en CSS se dependía de complejos sistemas matemáticos usando un <strong>Padding Hack</strong> (como inyectar un <code>padding-top: 56.25%</code>) para reservar espacios dinámicos en los iframes de YouTube o imágenes de portada, con el fin de evitar un terrible Cumulative Layout Shift (CLS) en la carga de página.',
    },
    {
      type: 'paragraph',
      html: 'Actualmente todas las maquetaciones modernas aplican directamente propiedades como <code>aspect-ratio: 16 / 9;</code>, logrando un código semántico y permitiendo al navegador derivar automágicamente la medida faltante desde el ancho original definido vía Grid o Flexbox.',
    },
    {
      type: 'paragraph',
      html: 'Esta calculadora local de píxeles transfiere la potencia de diseño a un cálculo de escalado instantáneo que protegerá tus renders de desconfiguraciones catastróficas.',
    },
  ],
};
