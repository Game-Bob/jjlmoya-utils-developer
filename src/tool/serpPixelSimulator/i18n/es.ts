import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SerpPixelSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'simulador-serp-contador-pixeles';
const title = 'Simulador SERP y Contador de Píxeles SEO';
const description = 'Previsualiza fragmentos de búsqueda estilo Google en tiempo real, mide la anchura en píxeles del título y la meta descripción, y ve exactamente dónde se truncará tu texto.';

const howTo = [
  {
    name: 'Introduce la etiqueta title',
    text: 'Escribe o pega el título de página que quieres probar. La vista previa SERP y el medidor de píxeles se actualizan con cada pulsación.',
  },
  {
    name: 'Añade la URL visible',
    text: 'Usa un dominio y ruta realistas para que el fragmento se parezca al resultado que un buscador analizaría.',
  },
  {
    name: 'Escribe la meta descripción',
    text: 'Añade el texto de la descripción y observa la barra de píxeles. Cuando supera el ancho visual recomendado, la vista previa la trunca con puntos suspensivos.',
  },
  {
    name: 'Alterna entre escritorio y móvil',
    text: 'Compara la representación del título con el ancho de tarjeta de escritorio o móvil antes de publicar los metadatos.',
  },
];

const faq = [
  {
    question: '¿Por qué contar píxeles en vez de caracteres para los títulos SEO?',
    answer: 'Las tarjetas de resultados de Google están limitadas por el ancho visual. Un título con muchas letras estrechas puede albergar más caracteres que uno con letras anchas, mayúsculas o glifos de aspecto grueso. La medición en píxeles ofrece una vista previa más fiel del resultado visible.',
  },
  {
    question: '¿Garantiza esto exactamente cómo truncará Google mi fragmento?',
    answer: 'No. Google puede reescribir los enlaces de título y los fragmentos, y la representación puede variar según la consulta, el dispositivo, el idioma y los experimentos. La herramienta está diseñada como una guía visual práctica para redactar metadatos con menos probabilidades de ser cortados.',
  },
  {
    question: '¿Qué límites de píxeles usa el simulador?',
    answer: 'El límite predeterminado del título en escritorio es de 580 px, el del título en móvil es de 600 px y el de la meta descripción es de 920 px. Son objetivos de redacción, no límites oficiales de Google.',
  },
  {
    question: '¿Por qué la vista previa añade puntos suspensivos?',
    answer: 'Cuando el texto medido supera el ancho de píxeles disponible, el simulador trunca la cadena en el último carácter que cabe y añade tres puntos, imitando el comportamiento práctico que los equipos SEO necesitan para detectar pérdida de significado.',
  },
];

const ui: SerpPixelSimulatorUI = {
  titleLabel: 'Etiqueta title',
  titlePlaceholder: 'GameBob | Estudio de Desarrollo Indie',
  urlLabel: 'URL visible',
  urlPlaceholder: 'https://www.gamebob.dev/es/',
  descriptionLabel: 'Meta descripción',
  descriptionPlaceholder: 'Descubre nuestra colección de herramientas y juegos diseñados para elevar tu flujo de trabajo digital y entretenimiento.',
  deviceLabel: 'Modo de vista previa',
  desktopLabel: 'Escritorio',
  mobileLabel: 'Móvil',
  titlePixelsLabel: 'Ancho del título',
  descriptionPixelsLabel: 'Ancho de la descripción',
  charactersLabel: 'caracteres',
  previewLabel: 'Vista previa estilo Google',
  tooLongLabel: 'Demasiado ancho',
  goodLabel: 'Correcto',
  emptyTitle: 'Tu título aparecerá aquí',
  emptyDescription: 'La vista previa de tu meta descripción aparecerá aquí mientras escribes.',
  defaultTitle: 'GameBob | Estudio de Desarrollo Indie',
  defaultUrl: 'https://www.gamebob.dev/es/',
  defaultDescription: 'Descubre nuestra colección de herramientas y juegos diseñados para elevar tu flujo de trabajo digital y entretenimiento.',
  fallbackUrl: 'ejemplo.com',
  fallbackFaviconText: 'G',
  pixelUnit: 'px',
  ellipsis: '...',
  fetchButtonLabel: 'Obtener',
  fetchLoadingLabel: 'Obteniendo...',
  fetchSuccessLabel: 'Metadatos cargados desde la URL.',
  fetchCorsError: 'El navegador no pudo leer esta página. Puede estar bloqueada por CORS, una redirección, contenido mixto o una regla de red. Puedes pegar o editar los metadatos manualmente.',
  fetchInvalidUrlError: 'Introduce una URL válida antes de obtener los metadatos.',
  fetchNoMetadataError: 'La página se obtuvo, pero no se encontró título ni meta descripción.',
  fetchGenericError: 'No se pudieron obtener los metadatos de esta URL. Comprueba la dirección o completa los campos manualmente.',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<SerpPixelSimulatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas frecuentes sobre el simulador SERP',
  faq,
  bibliographyTitle: 'Documentación sobre resultados de búsqueda',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Deja de adivinar cómo se verá tu resultado en Google',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un title tag puede parecer perfecto en una hoja de cálculo y aun así fallar en el resultado de búsqueda. Google no reserva espacio por número de caracteres; renderiza el texto dentro de una tarjeta visual. Eso significa que <strong>GameBob | Estudio de Desarrollo Indie</strong> y otro título con la misma cantidad de caracteres pueden ocupar anchos muy diferentes según las letras, mayúsculas, puntuación y espaciado.',
    },
    {
      type: 'tip',
      title: 'La regla que realmente ayuda',
      html: 'Escribe el fragmento para que la promesa importante sobreviva a los puntos suspensivos. Pon el tipo de página, la intención de búsqueda y la razón más fuerte para hacer clic antes del límite de píxeles. Los nombres de marca son útiles, pero no deben desplazar el beneficio principal fuera de la vista.',
    },
    {
      type: 'title',
      text: 'Qué mide el contador de píxeles',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Elemento', 'Qué importa', 'Cómo usar el resultado'],
      rows: [
        ['Etiqueta title', 'Ancho renderizado en píxeles, no el número de caracteres', 'Mantén la palabra clave principal y la promesa de clic visibles antes del truncamiento.'],
        ['URL visible', 'Confianza visual y claridad del tema', 'Usa una ruta legible que refuerce hacia dónde lleva el resultado.'],
        ['Meta descripción', 'Un área de fragmento más amplia con comportamiento dependiente de la consulta', 'Pon el beneficio al principio porque Google puede acortarla o reescribirla.'],
        ['Modo dispositivo', 'Las tarjetas de escritorio y móvil pueden sentirse diferentes', 'Revisa ambas antes de publicar metadatos de páginas importantes.'],
      ],
    },
    {
      type: 'title',
      text: 'Por qué los límites de caracteres son un mal hábito SEO',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El consejo tradicional de "mantén los títulos por debajo de 60 caracteres" es cómodo, pero oculta el problema real. Letras anchas como la W y la M, palabras en mayúsculas, separadores, números y nombres de marca largos consumen espacios diferentes. La medición en píxeles hace visible el compromiso de inmediato: puedes ver si una frase se gana su sitio o le roba espacio a un mensaje más fuerte.',
    },
    {
      type: 'title',
      text: 'Un flujo de trabajo práctico para mejores fragmentos',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Empieza por la intención:</strong> describe lo que obtiene el usuario, no solo cómo se llama la página.',
        '<strong>Prueba el título completo:</strong> pégalo en el simulador y observa la barra antes de publicar.',
        '<strong>Quita las palabras débiles:</strong> si la barra se vuelve roja, elimina relleno antes de recortar términos valiosos.',
        '<strong>Revisa los puntos suspensivos:</strong> si la vista previa truncada pierde sentido, reescribe el título en vez de aceptar el corte.',
        '<strong>Repite para la descripción:</strong> asegúrate de que la primera frase transmita la propuesta de valor por sí sola.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Cuando la barra se vuelve roja',
      html: 'Una barra roja no es un aviso de penalización. Significa que el texto actual es más ancho que el objetivo visual seleccionado, por lo que el simulador lo trunca con puntos. Trátalo como una señal editorial: decide si las palabras ocultas son prescindibles o si el fragmento necesita una estructura más afilada.',
    },
    {
      type: 'title',
      text: 'Límites, reescrituras y expectativas realistas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ningún simulador puede garantizar el fragmento exacto que Google mostrará. Google puede reescribir los enlaces de título, poner en negrita los términos de la consulta, elegir texto de la página en lugar de la meta descripción o mostrar fragmentos distintos para diferentes búsquedas. Esta herramienta funciona mejor como un paso rápido de redacción y control de calidad: detecta desbordamientos visuales evidentes antes de que la página llegue a producción.',
    },
    {
      type: 'summary',
      title: 'Mejor uso de este simulador SERP',
      items: [
        'Usa la barra de píxeles para detectar desbordamientos visuales antes de publicar metadatos.',
        'Mantén la intención de búsqueda principal y la promesa de clic visibles antes de cualquier elipsis.',
        'Obtén metadatos de URLs que permitan CORS y edita el resultado manualmente cuando sea necesario.',
        'Considera la vista previa como una guía de redacción, ya que Google puede reescribir fragmentos según la consulta.',
      ],
    },
  ],
};
