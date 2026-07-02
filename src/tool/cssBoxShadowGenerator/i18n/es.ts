import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssBoxShadowGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'generador-sombras-css';
const title = 'CSS Box Shadow Generator';
const description = 'Diseña sombras CSS por capas visualmente con previsualización en vivo, sliders, selectores de color y presets. Copia CSS nativo limpio al instante.';

const howTo = [
  { name: 'Elige un preset o empieza desde cero', text: 'Selecciona entre los presets Card, Float, Inset, Glow o Layered, o ajusta la sombra por defecto con los sliders.' },
  { name: 'Añade y combina capas de sombra', text: 'Pulsa + para añadir más capas (hasta 5). Selecciona cada capa para editar su offset, blur, spread, color y opacidad.' },
  { name: 'Alterna inset y color de fondo', text: 'Activa el checkbox inset para sombras interiores. Cambia el color de fondo de la previsualización.' },
  { name: 'Copia el CSS', text: 'Cuando la previsualización coincida con tu diseño, copia el CSS generado y pégalo en tu stylesheet.' },
];

const faq = [
  { question: '¿Puedo usar múltiples sombras en un elemento?', answer: 'Sí. CSS permite valores box-shadow separados por comas. Esta herramienta te deja apilar hasta 5 capas, cada una con controles independientes.' },
  { question: '¿Qué hace un valor de spread negativo?', answer: 'Un spread negativo encoge la sombra hacia dentro antes de difuminar, haciendo que parezca más pequeña que el elemento. Ideal para efectos flotantes sutiles.' },
  { question: '¿Para qué sirve la opción inset?', answer: 'Las sombras inset se renderizan dentro del borde del elemento, creando un efecto hundido. Son ideales para inputs de formulario y tarjetas presionadas.' },
  { question: '¿El CSS generado tiene dependencias de framework?', answer: 'No. El resultado es CSS nativo puro. Úsalo en cualquier proyecto que soporte CSS estándar.' },
];

const ui: CssBoxShadowGeneratorUI = {
  offsetXLabel: 'Offset X',
  offsetYLabel: 'Offset Y',
  blurLabel: 'Desenfoque',
  spreadLabel: 'Expansión',
  opacityLabel: 'Opacidad',
  insetLabel: 'Interior',
  addLayer: 'Añadir capa',
  removeLayer: 'Quitar capa',
  resetAll: 'Restablecer',
  codeTitle: 'CSS Generado',
  copyCode: 'Copiar CSS',
  copied: '¡Copiado!',
  previewLabel: 'Previsualización',
  presetCard: 'Card',
  presetFloat: 'Float',
  presetInset: 'Inset',
  presetGlow: 'Glow',
  presetLayered: 'Capas',
  presetsLabel: 'Presets',
  layerPrefix: 'Capa',
  bgColorLabel: 'Fondo',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<CssBoxShadowGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'FAQ del Generador de Sombras CSS',
  faq,
  bibliographyTitle: 'Referencias de Box Shadow CSS',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Diseña sombras CSS visualmente en vez de adivinar valores', level: 2 },
    { type: 'paragraph', html: 'Ajustar <strong>box-shadow</strong> a mano es tedioso. Offset X, offset Y, blur, spread, color, opacidad e inset interactúan de formas sutiles. Este generador visual te permite apilar múltiples sombras, previsualizarlas en vivo y copiar CSS listo para producción.' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: 'Capas de sombra por elemento', icon: 'mdi:layers' }, { value: 'En vivo', label: 'Previsualización con cada cambio', icon: 'mdi:eye' }, { value: '5', label: 'Presets rápidos', icon: 'mdi:star' }] },
    { type: 'title', text: 'Apila múltiples sombras para profundidad realista', level: 3 },
    { type: 'paragraph', html: 'Las sombras del mundo real rara vez son un blur uniforme. Apilar una sombra ajustada cerca del elemento con otra más suave y amplia crea profundidad natural. Usa el botón <strong>+</strong> para añadir capas y las pestañas para cambiar entre ellas.' },
    { type: 'table', headers: ['Control', 'Valor CSS', 'Efecto'], rows: [['Offset X', 'Primera longitud', 'Desplazamiento horizontal. Positivo mueve la sombra a la derecha.'], ['Offset Y', 'Segunda longitud', 'Desplazamiento vertical. Positivo mueve la sombra hacia abajo.'], ['Desenfoque', 'Tercera longitud', 'Radio de blur. Más grande crea sombras más suaves.'], ['Expansión', 'Cuarta longitud', 'Expande o encoge la sombra. Negativo encoge.'], ['Color y Opacidad', 'rgba()', 'Color de sombra con control de opacidad independiente.'], ['Interior', 'inset', 'Renderiza la sombra dentro del borde del elemento.']] },
    { type: 'summary', title: 'Flujo de trabajo recomendado', items: ['Empieza con un preset que coincida con tu dirección de diseño.', 'Añade capas para construir profundidad realista.', 'Usa spread negativo en la sombra suave para un efecto de tarjeta flotante.', 'Copia el CSS generado y pégalo en tu stylesheet.'] },
  ],
};
