import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConversorExcelCsvHtmlUI } from '../ui';

const slug = 'conversor-excel-csv-html-tabla';
const title = 'Conversor de Excel y CSV a Tabla HTML Generador de Código';
const description = 'Convierte tus datos de Excel o CSV a tablas HTML semánticas y limpias al instante. Herramienta gratuita para desarrolladores y creadores de contenido.';

const faqData = [
  {
    question: '¿Cómo convierto un archivo Excel (.xlsx) a HTML?',
    answer: 'Primero, abre tu archivo en Excel y guárdalo como CSV (delimitado por comas). Luego, sube ese archivo CSV a nuestra herramienta o pega su contenido para obtener el código HTML de la tabla.',
  },
  {
    question: '¿El código generado incluye estilos CSS?',
    answer: 'El generador produce HTML limpio con clases opcionales para bordes y filas cebra. Los estilos visuales finales dependerán del CSS de tu propio sitio web, asegurando una integración perfecta.',
  },
  {
    question: '¿Puedo subir archivos CSV muy grandes?',
    answer: 'Sí, nuestra herramienta procesa los datos localmente en tu navegador. Esto significa que es muy rápida y segura, ya que tus datos nunca viajan por internet.',
  },
  {
    question: '¿Es compatible con Google Sheets?',
    answer: 'Totalmente. En Google Sheets, ve a Archivo > Descargar > Valores separados por comas (.csv) y usa ese archivo con nuestra herramienta.',
  },
];

const howToData = [
  {
    name: 'Prepara tus datos',
    text: 'Ten tu archivo Excel o CSV listo. Asegúrate de que los datos estén limpios.',
  },
  {
    name: 'Carga los datos',
    text: 'Pega el texto CSV en el área de entrada o arrastra el archivo directamente al convertidor.',
  },
  {
    name: 'Configura la tabla',
    text: 'Elige si quieres usar la primera fila como encabezado y si deseas estilos básicos.',
  },
  {
    name: 'Copia el código',
    text: 'Cambia a la pestaña de "Código HTML" y copia el resultado para pegarlo en tu web.',
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

const ui: ConversorExcelCsvHtmlUI = {
  csvInputLabel: 'Pega tu CSV aquí',
  csvInputPlaceholder: 'Nombre,Edad,Ciudad\nJuan,25,Madrid\nAna,30,Barcelona',
  uploadLabel: 'O sube tu archivo (CSV)',
  dragDropLabel: 'Arrastra y suelta tu archivo aquí',
  headerCheckboxLabel: 'Primera fila como encabezado',
  bordersCheckboxLabel: 'Añadir bordes',
  stripeCheckboxLabel: 'Filas cebra',
  previewTabLabel: 'Previsualización',
  codeTabLabel: 'Código HTML',
  emptyStateLabel: 'Introduce datos para ver la tabla',
  copyButtonLabel: 'Copiar Código',
  copiedLabel: '¡Copiado!',
};

export const content: ToolLocaleContent<ConversorExcelCsvHtmlUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Recursos sobre Tablas HTML y Formatos de Datos',
  bibliography: [
    { name: 'W3C: HTML Tables', url: 'https://www.w3.org/WAI/tutorials/tables/' },
    { name: 'MDN: HTML table element', url: 'https://developer.mozilla.org/es/docs/Web/HTML/Element/table' },
    { name: 'RFC 4180: CSV Format', url: 'https://tools.ietf.org/html/rfc4180' },
    { name: 'Google Sheets: Descargar datos', url: 'https://support.google.com/docs/answer/183965' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Convertir Excel y CSV a Tabla HTML de Forma Fácil', level: 2 },
    {
      type: 'paragraph',
      html: 'En el desarrollo web moderno, la presentación de datos tabulares sigue siendo una de las formas más efectivas de transmitir información estructurada. Sin embargo, pasar manualmente los datos desde una hoja de cálculo como <strong>Excel</strong> o un archivo <strong>CSV</strong> a etiquetas HTML <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> y <code>&lt;td&gt;</code> es una tarea tediosa y propensa a errores.',
    },
    { type: 'title', text: '¿Por qué usar tablas HTML semánticas?', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Accesibilidad:</strong> Los lectores de pantalla pueden interpretar la estructura y ayudar a usuarios con discapacidad visual.',
        '<strong>SEO:</strong> Los motores de búsqueda indexan el contenido de las celdas, mejorando el posicionamiento de tus datos.',
        '<strong>Responsividad:</strong> Con un poco de CSS, las tablas HTML pueden adaptarse a dispositivos móviles.',
        '<strong>Mantenimiento:</strong> Es mucho más fácil editar un dato en el HTML que regenerar una imagen completa.',
      ],
    },
    { type: 'title', text: 'Cómo funciona el Conversor de Excel a HTML', level: 3 },
    {
      type: 'paragraph',
      html: 'Nuestra utilidad utiliza un analizador de texto nativo que procesa archivos delimitados por comas (CSV). La mayoría de los programas de hojas de cálculo, incluidos Microsoft Excel, Google Sheets y LibreOffice Calc, permiten exportar sus datos en formato CSV.',
    },
  ],
};
