import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicalTypographyUI } from '../ui';

const slug = 'tipografia-musical';
const title = 'Escalador de Tipografía Musical. Calculadora de Escala Modular';
const description =
  'Herramienta online gratuita para crear jerarquías visuales armónicas con escalas modulares basadas en proporciones musicales. Genera variables CSS listas para tu diseño web.';

const faqData = [
  {
    question: '¿Qué es una escala modular tipográfica?',
    answer:
      'Es un método para determinar tamaños de fuente basados en una proporción matemática constante. Al igual que en la música, donde las notas guardan relaciones armónicas, la escala modular crea una jerarquía visual equilibrada y predecible.',
  },
  {
    question: '¿Por qué usar intervalos musicales para el diseño?',
    answer:
      'Los intervalos musicales son proporciones que el cerebro humano percibe como armónicas. Al aplicarlas al tamaño de los textos, logras una estructura visual que se siente correcta y profesional, sin elegir tamaños al azar.',
  },
  {
    question: '¿Qué es el Número de Oro en tipografía?',
    answer:
      'Es la proporción 1.618, llamada Proporción Áurea. Se utiliza para crear escalas muy dramáticas y elegantes, donde cada paso en la jerarquía crece de forma exponencial. Perfecta para portafolios o sitios de arte.',
  },
  {
    question: '¿Cómo implemento la escala en mi archivo CSS?',
    answer:
      'La herramienta genera variables CSS (tokens) con formato :root { --step-N: Xrem; }. Cópialos en tu archivo CSS principal y úsalos con var(--step-N) para mantener la consistencia tipográfica en todo el sitio.',
  },
];

const howToData = [
  {
    name: 'Definir tamaño base',
    text: 'Introduce el tamaño de fuente para el cuerpo de texto (normalmente 16px) que servirá como nota fundamental de tu escala.',
  },
  {
    name: 'Elegir el intervalo',
    text: 'Selecciona una proporción musical para determinar cuánto espacio habrá entre los diferentes niveles de encabezados.',
  },
  {
    name: 'Previsualizar jerarquía',
    text: 'Observa cómo se comportan los niveles tipográficos en tiempo real para verificar que la armonía visual encaja con tu proyecto.',
  },
  {
    name: 'Exportar código',
    text: 'Pulsa Copiar Variables CSS para obtener el bloque listo para pegar directamente en tu flujo de trabajo.',
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
  applicationCategory: 'DesignApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

const ui: MusicalTypographyUI = {
  labelConfig: 'Configuración',
  labelBaseSize: 'Tamaño Base (px)',
  hintBaseSize: 'El tamaño de tu texto de párrafo (normalmente 16px).',
  labelRatio: 'Escala Musical (Ratio)',
  hintRatio: 'Determina cuánto crece el tamaño en cada paso.',
  labelCalculated: 'Valores Calculados',
  labelPreview: 'Previsualización',
  btnCopyCss: 'Copiar Variables CSS',
  feedbackCopied: '¡Variables copiadas al portapapeles!',
  previewText: 'Tipografía Musical',
  previewSubtext: 'Una escala armónica perfecta para tu diseño.',
  ratioSecundaMenor: 'Segunda Menor',
  ratioSegundaMayor: 'Segunda Mayor',
  ratioTerceraMenor: 'Tercera Menor',
  ratioTerceraMayor: 'Tercera Mayor',
  ratioCuartaPerfecta: 'Cuarta Perfecta',
  ratioCuartaAumentada: 'Cuarta Aumentada',
  ratioQuintaPerfecta: 'Quinta Perfecta',
  ratioProporcionAurea: 'Proporción Áurea',
  ratioSextaMayor: 'Sexta Mayor',
  ratioSeptimaMenor: 'Séptima Menor',
  ratioSeptimaMayor: 'Séptima Mayor',
  ratioOctava: 'Octava',
};

export const content: ToolLocaleContent<MusicalTypographyUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias',
  bibliography: [
    {
      name: 'Bringhurst, R. The Elements of Typographic Style',
      url: 'https://en.wikipedia.org/wiki/The_Elements_of_Typographic_Style',
    },
    {
      name: 'Brown, T. More Meaningful Typography. A List Apart',
      url: 'https://alistapart.com/article/more-meaningful-typography/',
    },
    {
      name: 'Physics of Music. Musical Intervals and Scales',
      url: 'https://es.scribd.com/document/199729396/Physics-of-Music-Notes',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'La armonía invisible del diseño web',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El <strong>Escalador de Tipografía Musical</strong> aplica la matemática de los intervalos musicales al diseño tipográfico. Al igual que una composición musical se rige por proporciones precisas, un diseño sólido se beneficia de una estructura matemática que relaciona todos los tamaños entre sí.',
    },
    {
      type: 'title',
      text: 'Cómo funciona la escala modular',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'La fórmula',
      html: '<p>La progresión es simple: <code>Tamaño = Base × Ratio<sup>n</sup></code>. El paso 0 es tu texto base. El paso 1 es un subtítulo pequeño. El paso 4 o 5 podría ser tu H1 principal. La misma constante multiplicativa (el ratio) garantiza que todas las relaciones sean consistentes.</p>',
    },
    {
      type: 'card',
      title: 'Por qué "Musical"',
      html: '<p>Los pitagóricos descubrieron que dividir una cuerda en proporciones simples (1:2, 2:3, 3:4) producía sonidos consonantes. Estos intervalos, octava, quinta perfecta y cuarta perfecta, son exactamente los ratios tipográficos. Estás componiendo música visual.</p>',
    },
    {
      type: 'title',
      text: 'Eligiendo el ratio adecuado',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Para interfaces densas (dashboards, tablas) usa ratios pequeños como <code>1.125</code> o <code>1.2</code>. Para sitios editoriales o portafolios, usa ratios más expresivos como <code>1.5</code> o <code>1.618</code>.',
    },
    {
      type: 'paragraph',
      html: 'No uses la escala solo para <code>font-size</code>. Las mismas variables CSS funcionan para <code>margin</code>, <code>padding</code> y <code>gap</code>. Cuando el espacio en blanco sigue la misma progresión matemática que el texto, el diseño alcanza un nivel de cohesión que todos sienten pero pocos pueden explicar.',
    },
  ],
};
