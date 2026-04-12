import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromptLibraryUI } from '../ui';

const slug = 'biblioteca-prompts';
const title = 'Biblioteca de Prompts de IA';
const description = 'Organiza, etiqueta y guarda tus prompts de ChatGPT, Midjourney y Claude de forma privada. Tu propio banco de prompts en localStorage.';

const faqData = [
  {
    question: '\u00bfD\u00f3nde se guardan mis prompts?',
    answer: 'Tus prompts se guardan exclusivamente en el almacenamiento local de tu navegador (localStorage). No utilizamos servidores externos, lo que significa que tus datos son 100% privados.',
  },
  {
    question: '\u00bfQu\u00e9 pasa si borro las cookies o el historial del navegador?',
    answer: 'Si borras los datos del sitio o el almacenamiento local de tu navegador, perder\u00e1s tus prompts guardados. Te recomendamos hacer copias de seguridad si limpias tu navegador frecuentemente.',
  },
  {
    question: '\u00bfPuedo usar esta herramienta para Midjourney, ChatGPT o DALL-E?',
    answer: 'S\u00ed, es compatible con cualquier tipo de instrucci\u00f3n de IA. Puedes crear etiquetas espec\u00edficas para organizar tus comandos y copiarlos a tu herramienta de IA preferida f\u00e1cilmente.',
  },
];

const howToData = [
  { name: 'Crear un prompt', text: 'Haz clic en el bot\u00f3n Nuevo Prompt e introduce el t\u00edtulo y la instrucci\u00f3n.' },
  { name: 'A\u00f1adir etiquetas', text: 'Escribe etiquetas separadas por espacio o coma para clasificar tus prompts.' },
  { name: 'Usar variables', text: 'Usa corchetes [ASI] en el texto para crear campos rellenables en la tarjeta.' },
  { name: 'Copiar y compartir', text: 'Copia al portapapeles con un clic o comparte un enlace directo con el bot\u00f3n compartir.' },
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

const ui: PromptLibraryUI = {
  placeholderSearch: 'Buscar por palabra clave o etiqueta...',
  btnNew: 'Nuevo Prompt',
  emptyTitle: 'Tu biblioteca est\u00e1 vac\u00eda',
  emptyDesc: 'Crea tu primer prompt y empieza a construir tu repositorio de inteligencia artificial privado.',
  btnAddFirst: 'A\u00f1adir el primero',
  modalTitleCreate: 'Crear Nuevo Prompt',
  modalTitleEdit: 'Editar Prompt',
  labelTitle: 'T\u00edtulo identificativo',
  placeholderTitle: 'Ej: Experto en Marketing SEO',
  labelContent: 'Instrucci\u00f3n (Prompt)',
  placeholderContent: 'Escribe aqu\u00ed las instrucciones detalladas para la IA...',
  hintContent: 'Recomendaci\u00f3n: usa corchetes [COMO ESTOS] para rellenar variables m\u00e1s tarde.',
  labelTags: 'Etiquetas',
  placeholderTags: 'Ej: marketing, seo (espacio o coma para a\u00f1adir)',
  btnCancel: 'Cancelar',
  btnSave: 'Guardar en Local',
  ariaLabelStar: 'Destacar prompt',
  ariaLabelEdit: 'Editar prompt',
  ariaLabelShare: 'Compartir prompt',
  ariaLabelCopy: 'Copiar prompt',
  ariaLabelDelete: 'Eliminar prompt',
  varsTitle: 'Variables requeridas',
  noResults: 'No se encontraron prompts para esta b\u00fasqueda.',
  confirmTitle: '\u00bfEliminar prompt?',
  confirmDesc: 'Esta acci\u00f3n no se puede deshacer.',
  btnCancelDelete: 'Cancelar',
  btnConfirmDelete: 'Eliminar definitivamente',
};

export const content: ToolLocaleContent<PromptLibraryUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias sobre Prompt Engineering',
  bibliography: [
    { name: 'Prompt Engineering Guide (DAIR.AI)', url: 'https://www.promptingguide.ai/' },
    { name: 'Qu\u00e9 es prompt engineering (Google Cloud)', url: 'https://cloud.google.com/discover/what-is-prompt-engineering' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '\u00bfPor qu\u00e9 necesitas una Biblioteca de Prompts?', level: 2 },
    {
      type: 'paragraph',
      html: 'Si trabajas habitualmente con herramientas de inteligencia artificial como ChatGPT, Claude o Midjourney, seguramente te habrás encontrado repitiendo las mismas instrucciones. Una <strong>biblioteca de prompts</strong> es la solución definitiva para dejar de perder tiempo reescribiendo tus comandos favoritos.',
    },
    { type: 'title', text: 'Ventajas de organizar tus prompts', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>B\u00fasqueda instant\u00e1nea:</strong> Encuentra esa instrucci\u00f3n espec\u00edfica que utilizaste hace meses con una simple b\u00fasqueda por texto.',
        '<strong>Clasificaci\u00f3n por etiquetas:</strong> Etiqueta tus utilidades como "marketing", "programaci\u00f3n" o "copywriting" para filtrar r\u00e1pidamente.',
        '<strong>Copiado r\u00e1pido:</strong> Con un solo clic, puedes copiar el texto completo al portapapeles.',
        '<strong>Privacidad total:</strong> Todos tus datos se guardan de forma local en tu navegador mediante localStorage.',
      ],
    },
    { type: 'title', text: 'Variables en tus prompts', level: 3 },
    {
      type: 'paragraph',
      html: 'Usa la notaci\u00f3n <strong>[VARIABLE]</strong> en tus prompts para crear campos rellenables din\u00e1micamente. Cuando abras la tarjeta, aparecer\u00e1n inputs para cada variable definida. El prompt se copia con los valores rellenos, listo para pegar en tu IA.',
    },
    { type: 'title', text: 'Compartir prompts', level: 3 },
    {
      type: 'paragraph',
      html: 'Cada prompt puede compartirse mediante una URL. El bot\u00f3n de compartir genera un enlace que, al abrirse, muestra el formulario de creaci\u00f3n pre-rellenado con el contenido del prompt.',
    },
  ],
};
