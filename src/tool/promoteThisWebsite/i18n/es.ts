import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromoteThisWebsiteUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'promociona-esta-web';
const title = 'Promociona esta web';
const description = 'La mesa de propaganda interna de jjlmoya.es en español y GameBob.dev a nivel internacional. Convierte capturas de tus propias páginas en imágenes para redes antes de que Bob decida que el feed da vergüenza.';

const howTo = [
  { name: 'Pega una de nuestras capturas', text: 'Pega con Ctrl+V una captura de una página de jjlmoya.es o GameBob.dev. La junta necesita pruebas de su propio imperio.' },
  { name: 'Elige la casa lingüística', text: 'Escoge jjlmoya.es para español o GameBob.dev para la página internacional. Esto no es un marketplace. La gata ya es dueña del local.' },
  { name: 'Ordena el relato oficial', text: 'Arrastra la captura, el título, el logo, el fondo y la mascota hasta que la composición parezca intencionada y no exportada accidentalmente a las dos de la mañana.' },
  { name: 'Descarga antes de que la gata se entere', text: 'Descarga un PNG con las dimensiones elegidas y publícalo. Bob se llevará el mérito porque así funciona la dirección.' },
];

const faq = [
  { question: '¿Para quién es realmente esta herramienta?', answer: 'Para promocionar las páginas de jjlmoya.es en español y GameBob.dev a nivel internacional. El resto puede mirar por la ventana.' },
  { question: '¿Puedo pegar directamente una captura?', answer: 'Sí. Copia una captura de una de nuestras páginas y pulsa Ctrl+V. Se convierte en la capa de la herramienta, porque hasta la junta felina acepta pruebas si llegan en el formato correcto.' },
  { question: '¿Qué pasa cuando pego una URL de producción?', answer: 'La herramienta lee el título meta de la página, elige la marca española jjlmoya.es o la internacional GameBob.dev, carga la imagen Open Graph y la usa como evidencia visual hasta que haya una imagen más concreta. Al slug se le acaba por fin el ascenso.' },
  { question: '¿Por qué hay dos marcas?', answer: 'jjlmoya.es es la página en español y GameBob.dev es la página internacional. La diferencia importa para el idioma y a las gatas les da exactamente igual.' },
  { question: '¿La herramienta sube mis imágenes?', answer: 'No. Las imágenes se quedan en el navegador y la composición se renderiza localmente. Lo único que sale de la página es el PNG que tú descargas deliberadamente, suponiendo que Bob haya aprobado la exportación.' },
];

const ui: PromoteThisWebsiteUI = {
  urlLabel: 'URL de la web',
  urlPlaceholder: 'https://www.example.com/utilidades/ejemplo/',
  applyUrl: 'Aplicar',
  formatLabel: 'Formato',
  panoramic: 'Panorámico · 1536 × 1024',
  instagram: 'Instagram · 1080 × 1350',
  square: 'Cuadrado · 1080 × 1080',
  story: 'Historia · 1080 × 1920',
  titleLabel: 'Título',
  titlePlaceholder: 'Un título corto para la imagen',
  titleSizeLabel: 'Tamaño de fuente del título',
  titleBoxSizeLabel: 'Tamaño de la caja del título',
  titleStyleLabel: 'Diseño del título',
  brandLabel: 'Marca',
  brandStyleLabel: 'Diseño de la marca',
  advancedLabel: 'Composición avanzada',
  assetsLabel: 'Recursos',
  backgroundLabel: 'Fondo',
  toolLabel: 'Captura de la herramienta',
  logoLabel: 'Logo',
  mascotLabel: 'Mascota',
  layersLabel: 'Capas',
  backgroundLayer: 'Fondo',
  toolLayer: 'Herramienta',
  logoLayer: 'Logo',
  mascotLayer: 'Mascota',
  titleLayer: 'Título',
  reset: 'Restablecer',
  download: 'Descargar PNG',
  activeLayer: 'Capa activa',
  canvasHint: 'Arrastra las capas directamente sobre el lienzo. Pega una captura con Ctrl+V.',
  pasted: 'Captura pegada como capa de la herramienta.',
  urlApplied: 'URL aplicada. Ajusta el título y añade la captura que quieras promocionar.',
  urlLoading: 'Leyendo el título de la página y su imagen oficial...',
  urlFailed: 'No se ha podido leer esa página. Comprueba la URL o añade los recursos manualmente.',
  fileLoaded: 'Recurso cargado.',
  titlePaper: 'Papel editorial',
  titleRibbon: 'Cinta doblada',
  titleInk: 'Mancha de tinta',
  titlePoster: 'Cartel nocturno',
  titleTicket: 'Entrada recortada',
  titleMarker: 'Subrayado material',
  titleSplit: 'Bloque partido',
  titleCapsule: 'Cápsula mínima',
  titleCorner: 'Esquina editorial',
  titleVertical: 'Acento vertical',
  brandPlain: 'Marca simple',
  brandPlaque: 'Placa cerámica',
  brandTicket: 'Admit one',
  brandStamp: 'Sello de goma',
  brandNeon: 'Rótulo de neón',
  brandRibbon: 'Cinta de señal',
  brandCorner: 'Esquina editorial',
  brandPixel: 'Bloque pixel',
  brandHalo: 'Halo suave',
  brandEditorial: 'Línea editorial',
  defaultTool: 'Pega la captura de tu herramienta',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<PromoteThisWebsiteUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Promociona esta web sin enfadar a la gata',
  faq,
  bibliographyTitle: 'Páginas de la operación',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'La mesa oficial de propaganda de jjlmoya y GameBob', level: 2 },
    { type: 'paragraph', html: 'Esto no es un compositor genérico de imágenes sociales para alguien que acaba de descubrir la palabra branding. Existe para promocionar las páginas publicadas bajo <strong>jjlmoya.es</strong> en español y <strong>GameBob.dev</strong> a nivel internacional, mientras las gatas supervisan desde algún lugar justo fuera del briefing.' },
    { type: 'stats', columns: 3, items: [{ value: '2', label: 'Marcas de la casa que glorificar', icon: 'mdi:domain' }, { value: '4', label: 'Formatos para la propaganda', icon: 'mdi:crop' }, { value: '0', label: 'Reuniones solicitadas por Bob', icon: 'mdi:cat' }] },
    { type: 'title', text: 'La captura sigue mandando', level: 3 },
    { type: 'paragraph', html: 'Pega una captura real de una de nuestras páginas o carga una URL de producción. La herramienta lee el título de la página en vez de inventárselo mirando el slug, carga la imagen Open Graph oficial y mantiene visible la prueba mientras el reparto secundario se coloca alrededor.' },
    { type: 'title', text: 'Dos dominios y un equipo sospechosamente pequeño', level: 3 },
    { type: 'paragraph', html: '<strong>jjlmoya.es</strong> es la página en español. <strong>GameBob.dev</strong> es la página internacional. Cambia el idioma, pero no el departamento de propaganda. El humano prepara la imagen. Las gatas conservan la autoridad editorial.' },
    { type: 'table', headers: ['Capa', 'Qué hace', 'Cómo la llama la junta'], rows: [['Herramienta', 'Posición, escala y marco', 'La evidencia'], ['Título', 'Texto, tamaño, diseño y color', 'El relato aprobado'], ['Marca', 'Página española o internacional', 'La casa cuya gloria toca exigir'], ['Fondo', 'Imagen Open Graph o subida', 'El contexto respetable']] },
    { type: 'tip', title: 'Empieza por una de nuestras páginas', html: 'Pega una URL de producción de <strong>jjlmoya.es</strong> o <strong>GameBob.dev</strong>. Si no cargan el título, la marca o la imagen Open Graph, la junta culpará a la red, después al humano y finalmente a las gatas.' },
  ],
};
