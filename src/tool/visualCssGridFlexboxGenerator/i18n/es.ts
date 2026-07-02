import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VisualCssGridFlexboxGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'generador-visual-css-grid-flexbox';
const title = 'Generador Visual de Layouts CSS Grid y Flexbox';
const description = 'Diseña layouts responsive arrastrando bloques visuales, redimensionando el contenedor, ajustando controles de alineación y usando presets  -  luego copia CSS nativo limpio al instante.';

const howTo = [
  { name: 'Elige un preset o Flexbox / Grid', text: 'Empieza con un preset de layout (navbar, cards, hero, sidebar, gallery) o cambia entre Flexbox y Grid manualmente.' },
  { name: 'Redimensiona el layout', text: 'Redimensiona el contenedor desde la esquina inferior para probar cómo reacciona el diseño al espacio disponible.' },
  { name: 'Ajusta los controles de alineación', text: 'Usa sliders y selects para dirección, wrap, gap, columnas, justify-content, align-items, align-content, ancho, alto y tamaño de ítem.' },
  { name: 'Copia CSS listo para producción', text: 'Copia el CSS generado cuando el resultado visual coincida con la estructura que quieres implementar. Sin dependencias de frameworks.' },
];

const faq = [
  { question: '¿Cuándo debo usar Flexbox en vez de CSS Grid?', answer: 'Usa Flexbox cuando el layout sea principalmente unidimensional  -  barras de navegación, grupos de botones, cards envueltas, contenido centrado. Usa Grid cuando filas y columnas importan juntas  -  dashboards, galerías, formularios y secciones de página estructuradas.' },
  { question: '¿Puede este generador crear layouts responsive?', answer: 'Sí. El CSS generado usa flex wrapping nativo o grid repeat columns. Redimensiona el canvas visual para probar cómo se comportan el espaciado y la alineación a diferentes tamaños antes de escribir media queries.' },
  { question: '¿Por qué justify-content y align-items se sienten diferentes en grid y flex?', answer: 'Flexbox distribuye ítems a lo largo de un eje principal y un eje transversal. Grid coloca ítems en tracks primero, luego alinea el contenido dentro de esos tracks. Alternar entre ambos modos en el mismo canvas hace visible esa diferencia de comportamiento.' },
  { question: '¿El CSS generado está atado a algún framework?', answer: 'No. El resultado es CSS nativo puro. Úsalo en HTML plano, Astro, React, Vue, Svelte, Web Components o cualquier proyecto que acepte CSS estándar.' },
  { question: '¿Para qué sirven los presets de layout?', answer: 'Los presets aceleran layouts comunes para que veas configuraciones realistas sin empezar desde cero. Cada preset configura modo, dirección, wrap, alineación y tamaño del contenedor para un patrón del mundo real.' },
];

const ui: VisualCssGridFlexboxGeneratorUI = {
  modeLabel: 'Modo de layout',
  flexMode: 'Flexbox',
  gridMode: 'Grid',
  canvasLabel: 'Canvas de layout interactivo',
  addItem: 'Añadir ítem',
  removeItem: 'Quitar ítem',
  resetLayout: 'Restablecer layout',
  gapLabel: 'Espaciado',
  columnsLabel: 'Columnas del grid',
  widthLabel: 'Ancho del contenedor',
  heightLabel: 'Alto del contenedor',
  justifyLabel: 'Justificar',
  alignLabel: 'Alinear',
  itemSizeLabel: 'Tamaño de ítem',
  codeTitle: 'CSS Generado',
  copyCode: 'Copiar CSS',
  copied: '¡Copiado!',
  dragHint: 'Redimensiona el canvas desde la esquina  -  ¡el CSS se actualiza en vivo!',
  outputLabel: 'Salida de CSS generado',
  justifyStart: 'Inicio',
  justifyCenter: 'Centro',
  justifyEnd: 'Fin',
  justifyBetween: 'Space between',
  justifyAround: 'Space around',
  justifyEvenly: 'Space evenly',
  alignStart: 'Inicio',
  alignCenter: 'Centro',
  alignEnd: 'Fin',
  alignStretch: 'Estirar',
  alignBaseline: 'Línea base',
  itemPrefix: 'Bloque',
  directionLabel: 'Dirección',
  directionRow: 'Fila →',
  directionRowReverse: '← Fila rev',
  directionColumn: 'Columna ↓',
  directionColumnReverse: '↑ Col rev',
  wrapLabel: 'Wrap',
  wrapNoWrap: 'Sin wrap',
  wrapWrap: 'Wrap',
  wrapWrapReverse: 'Wrap rev',
  alignContentLabel: 'Al content',
  alignContentStart: 'Inicio',
  alignContentCenter: 'Centro',
  alignContentEnd: 'Fin',
  alignContentBetween: 'Space between',
  alignContentAround: 'Space around',
  alignContentEvenly: 'Space evenly',
  alignContentStretch: 'Estirar',
  presetsLabel: 'Presets',
  presetNavbar: 'Navbar',
  presetCards: 'Cards',
  presetHero: 'Hero',
  presetSidebar: 'Sidebar',
  presetGallery: 'Galería',
  shakeLimit: '¡Se necesitan al menos 2 ítems!',
  spanHint: 'Doble clic en un ítem para cambiar su span de columna (1-3) en modo Grid',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<VisualCssGridFlexboxGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'FAQ del generador de layouts CSS',
  faq,
  bibliographyTitle: 'Referencias de CSS Grid y Flexbox',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Construye layouts CSS viendo el comportamiento, no memorizando propiedades', level: 2 },
    { type: 'paragraph', html: 'CSS Grid y Flexbox son potentes porque describen relaciones de layout en vez de coordenadas fijas. Lo difícil es predecir cómo interactúan <strong>gap</strong>, <strong>justify-content</strong>, <strong>align-items</strong>, dirección, wrapping, tracks y el espacio disponible. Este generador visual convierte esas propiedades abstractas en un playground vivo con presets, reordenación y salida CSS en tiempo real.' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: 'Presets de layout rápidos', icon: 'mdi:view-grid-plus' }, { value: 'En vivo', label: 'CSS se actualiza con cada cambio', icon: 'mdi:code-braces' }, { value: '0', label: 'Dependencias de framework en el CSS', icon: 'mdi:language-css3' }] },
    { type: 'title', text: 'Flexbox vs Grid: elige el modelo antes de pulir la alineación', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: 'Flexbox', description: 'Ideal para flujos unidimensionales donde los ítems se alinean en fila o columna y pueden envolverse.', icon: 'mdi:format-align-justify', highlight: true, points: ['Barras de navegación', 'Grupos de botones', 'Cards envueltas', 'Contenido centrado'] }, { title: 'CSS Grid', description: 'Ideal para estructuras bidimensionales donde filas y columnas definen la forma de la composición.', icon: 'mdi:grid', points: ['Dashboards', 'Galerías', 'Formularios', 'Secciones editoriales'] }] },
    { type: 'title', text: 'Qué te enseña cada control', level: 3 },
    { type: 'table', headers: ['Control', 'Propiedad CSS', 'Qué observar'], rows: [['Dirección', '<code>flex-direction</code>', 'Cómo fluye el eje principal  -  cambia fila por columna para cambiar toda la lógica del layout.'], ['Wrap', '<code>flex-wrap</code>', 'Si los ítems se quedan en una línea o fluyen a nuevas filas cuando se acaba el espacio.'], ['Gap', '<code>gap</code>', 'El espacio entre ítems sin añadir márgenes que se rompen en los bordes.'], ['Justificar', '<code>justify-content</code>', 'Cómo se distribuye el espacio libre a lo largo del eje principal.'], ['Alinear', '<code>align-items</code>', 'Cómo se sitúan los ítems en el eje transversal.'], ['Align content', '<code>align-content</code>', 'Cómo las líneas envueltas o filas del grid distribuyen el espacio extra del eje transversal.'], ['Columnas', '<code>grid-template-columns</code>', 'Cuántos tracks iguales crea el grid antes de que los ítems pasen a otra fila.'], ['Tamaño contenedor', '<code>width</code> y <code>min-height</code>', 'Cómo reacciona el mismo CSS cuando cambia el espacio disponible.']] },
    { type: 'tip', title: 'Primero redimensiona, luego optimiza', html: 'Empieza por redimensionar el canvas visual a un tamaño realista. Luego ajusta gap y alineación. Así el CSS generado funciona en escenarios reales, no solo en el tamaño por defecto.' },
    { type: 'title', text: 'CSS limpio que puedes adaptar', level: 3 },
    { type: 'code', ariaLabel: 'Ejemplo de CSS generado', code: '.layout-playground {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 24px;\n  justify-content: center;\n  align-items: center;\n}' },
    { type: 'diagnostic', variant: 'info', title: 'Por qué importa el redimensionado visual', html: 'Muchos bugs de layout solo aparecen cuando el contenedor es más estrecho, más alto o tiene distinto número de ítems. Redimensionar el playground mientras el CSS se actualiza en vivo te ayuda a detectar wrapping incómodo, gaps excesivos y decisiones de alineación que solo funcionan a un tamaño.' },
    { type: 'summary', title: 'Flujo de trabajo recomendado', items: ['Elige un preset o Flexbox para flujos unidimensionales y Grid para estructura bidimensional.', 'Redimensiona el canvas visual antes de copiar CSS para que el layout sobreviva restricciones realistas.', 'Usa gap para espaciado entre ítems en vez de añadir márgenes a cada hijo.', 'Copia el CSS generado como punto de partida, luego añade selectores específicos y media queries.'] },
  ],
};
