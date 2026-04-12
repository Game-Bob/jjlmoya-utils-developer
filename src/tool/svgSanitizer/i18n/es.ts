import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgSanitizerUI } from '../ui';

const slug = 'saneador-svg';
const title = 'Saneador de SVG Online';
const description = 'Optimiza y limpia SVGs exportados desde Figma, Adobe Illustrator o Inkscape. Elimina metadatos, atributos innecesarios y grupos vac\u00edos para obtener un SVG listo para producci\u00f3n.';

const faqData = [
  {
    question: '\u00bfPuedo pegar el HTML completo de una p\u00e1gina con SVG embebido?',
    answer: 'S\u00ed. El saneador detecta el elemento SVG dentro del HTML y extrae solo ese bloque para procesarlo. Tambi\u00e9n funciona si pegas directamente el fragmento SVG.',
  },
  {
    question: '\u00bfSe puede usar con SVGs de Illustrator?',
    answer: 'S\u00ed. Illustrator exporta SVGs con declaraciones XML, metadatos y namespaces propios que el saneador elimina. El resultado es un SVG compatible con todos los navegadores modernos.',
  },
  {
    question: '\u00bfQu\u00e9 diferencia hay entre limpiar y minificar?',
    answer: 'Limpiar elimina atributos y etiquetas innecesarios pero mantiene el formato con indentaci\u00f3n para que puedas leer y editar el c\u00f3digo. Minificar adem\u00e1s colapsa todo en una sola l\u00ednea para reducir el peso al m\u00e1ximo.',
  },
  {
    question: '\u00bfAl eliminar IDs puede romperse el SVG?',
    answer: 'Solo si alg\u00fan elemento del SVG referencia otro por ID, por ejemplo a trav\u00e9s de fill="url(#gradient)". En ese caso desactiva la opci\u00f3n Eliminar IDs. Por defecto est\u00e1 desactivada precisamente para evitar este problema.',
  },
  {
    question: '\u00bfMi c\u00f3digo SVG se env\u00eda a alg\u00fan servidor?',
    answer: 'No. Todo el proceso ocurre en tu navegador usando las APIs nativas DOMParser y XMLSerializer. El c\u00f3digo nunca abandona tu dispositivo.',
  },
];

const howToData = [
  { name: 'Pegar el SVG', text: 'Pega el c\u00f3digo SVG exportado desde Figma, Illustrator o Inkscape en el \u00e1rea de texto.' },
  { name: 'Configurar opciones', text: 'Activa o desactiva las opciones: eliminar IDs, quitar width/height y minificar seg\u00fan tus necesidades.' },
  { name: 'Limpiar', text: 'Haz clic en Limpiar SVG para procesar el c\u00f3digo y obtener el resultado optimizado.' },
  { name: 'Copiar o descargar', text: 'Usa los botones Copiar o Descargar para obtener el SVG limpio listo para producci\u00f3n.' },
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

const ui: SvgSanitizerUI = {
  labelInput: 'Pega tu SVG sucio aqu\u00ed',
  labelOutput: 'SVG limpio',
  optRemoveIds: 'Eliminar IDs',
  optRemoveWH: 'Quitar width/height',
  optMinify: 'Minificar',
  btnSanitize: 'Limpiar SVG',
  btnCopy: 'Copiar',
  btnCopied: 'Copiado',
  btnDownload: 'Descargar',
  statOriginal: 'Original',
  statCleaned: 'Limpio',
  statReduction: 'Reducci\u00f3n',
  statElems: 'Elem. eliminados',
  statAttrs: 'Attrs. eliminados',
  errorPaste: 'Pega un SVG antes de limpiar.',
  errorProcess: 'Error al procesar el SVG.',
};

export const content: ToolLocaleContent<SvgSanitizerUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias',
  bibliography: [
    { name: 'SVG Specification - W3C', url: 'https://www.w3.org/TR/SVG2/' },
    { name: 'Figma SVG Export - Documentaci\u00f3n oficial', url: 'https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma' },
    { name: 'SVGO - SVG Optimizer (referencia open source)', url: 'https://github.com/svg/svgo' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Saneador de SVG: Limpia el C\u00f3digo de Figma e Illustrator', level: 2 },
    {
      type: 'paragraph',
      html: 'Pega cualquier SVG exportado desde <strong>Figma</strong>, Adobe Illustrator o el inspector del navegador y obt\u00e9n un archivo vectorial limpio, optimizado y listo para producci\u00f3n.',
    },
    { type: 'title', text: '\u00bfPor qu\u00e9 los SVG exportados son tan sucios?', level: 3 },
    {
      type: 'paragraph',
      html: 'Cuando exportas un SVG desde Figma, recibes un archivo cargado de atributos que solo tienen sentido dentro de la aplicaci\u00f3n: <code>data-name</code>, <code>xml:space</code>, referencias a capas internas y metadatos de dise\u00f1o. El resultado es un SVG que puede pesar un 40\u201370% m\u00e1s de lo necesario.',
    },
    { type: 'title', text: 'Qu\u00e9 elimina el Saneador', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Metadatos de editor:</strong> etiquetas <code>metadata</code>, <code>title</code> y <code>desc</code> que Figma e Illustrator a\u00f1aden autom\u00e1ticamente.',
        '<strong>Namespaces de Inkscape:</strong> todos los elementos con prefijo <code>inkscape:</code> y <code>sodipodi:</code>.',
        '<strong>Atributos innecesarios:</strong> <code>xml:space</code>, <code>version</code>, <code>xmlns:*</code> superfluos y atributos <code>data-*</code> de Figma.',
        '<strong>Grupos vac\u00edos:</strong> elementos <code>&lt;g&gt;</code> sin contenido que los editores dejan como artefactos de capas eliminadas.',
        '<strong>Declaraciones XML:</strong> la declaraci\u00f3n <code>&lt;?xml version="1.0"?&gt;</code> y el DOCTYPE innecesarios al embeber SVG en HTML.',
      ],
    },
  ],
};
