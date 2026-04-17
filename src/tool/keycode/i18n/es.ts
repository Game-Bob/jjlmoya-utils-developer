import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeycodeUI } from '../ui';

const slug = 'keycode';
const title = 'Visualizador de Códigos de Teclado Online. KeyCode Inspector';
const description =
  'Herramienta online gratuita para ver en tiempo real el event.key, event.code, event.which y location de cualquier tecla de tu teclado. Genera snippets de código JavaScript listos para usar.';

const faqData = [
  {
    question: '¿Qué diferencia hay entre event.key y event.code?',
    answer:
      'event.code representa la tecla física del teclado, independiente del idioma configurado. event.key representa el carácter generado, que puede cambiar si pulsas Shift o usas otro idioma. Para controles de juego usa code; para texto y atajos semánticos, usa key.',
  },
  {
    question: '¿Qué es event.which y por qué aparece como obsoleto?',
    answer:
      'event.which es una propiedad heredada que devuelve un código numérico ASCII de la tecla. Está marcada como obsoleta (deprecated) en los estándares modernos porque event.key y event.code la reemplazan con información más precisa y legible. Se muestra en esta herramienta con fines educativos.',
  },
  {
    question: '¿Qué significa la propiedad location?',
    answer:
      'La propiedad location indica dónde está físicamente la tecla en el teclado: Standard (posición normal), Left (tecla modificadora izquierda), Right (tecla modificadora derecha) o Numpad (teclado numérico). Es útil para distinguir entre el CTRL izquierdo y el derecho, por ejemplo.',
  },
  {
    question: '¿Funciona con teclados internacionales y distribuciones no QWERTY?',
    answer:
      'Sí. La herramienta muestra exactamente lo que reporta el navegador para tu configuración de teclado. event.code siempre devolverá el nombre QWERTY de la posición física, mientras que event.key mostrará el carácter real según tu idioma.',
  },
];

const howToData = [
  {
    name: 'Pulsar cualquier tecla',
    text: 'Con el foco en la página, pulsa cualquier tecla del teclado para ver instantáneamente toda la información del evento.',
  },
  {
    name: 'Copiar valores individuales',
    text: 'Haz clic en el botón de copiar junto a cada propiedad (event.key, event.code, etc.) para copiar ese valor concreto al portapapeles.',
  },
  {
    name: 'Usar los snippets de código',
    text: 'En la sección "Snippets Rápidos" encontrarás bloques de código JavaScript listos para pegar directamente en tu proyecto.',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

const ui: KeycodeUI = {
  promptTitle: 'Presiona una tecla',
  promptSubtitle: 'Cualquier tecla de tu teclado para ver su código',
  snippetsTitle: 'Snippets Rápidos',
  btnCopy: 'Copiar',
  locationStandard: 'Standard',
  locationLeft: 'Left',
  locationRight: 'Right',
  locationNumpad: 'Numpad',
};

export const content: ToolLocaleContent<KeycodeUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias y Estándares',
  bibliography: [
    {
      name: 'MDN Web Docs – KeyboardEvent',
      url: 'https://developer.mozilla.org/es/docs/Web/API/KeyboardEvent',
    },
    {
      name: 'UI Events Specification (W3C) – KeyboardEvent',
      url: 'https://www.w3.org/TR/uievents/#events-keyboardevents',
    },
    {
      name: 'MDN – KeyboardEvent.code values',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Entendiendo los eventos de teclado en JavaScript',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cuando un usuario pulsa una tecla, el navegador dispara tres eventos: <code>keydown</code>, <code>keypress</code> y <code>keyup</code>. Cada uno expone propiedades con información sobre la tecla pulsada, pero no todas son equivalentes ni recomendadas.',
    },
    {
      type: 'title',
      text: 'Propiedades clave del evento',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'event.code — La tecla física',
      html: '<p>Devuelve el identificador de la <strong>posición física</strong> de la tecla en el teclado, usando nomenclatura QWERTY. Por ejemplo, la tecla "A" en un teclado AZERTY devuelve <code>KeyQ</code>. Ideal para controles de videojuegos donde importa la posición, no el carácter.</p>',
    },
    {
      type: 'card',
      title: 'event.key — El carácter generado',
      html: '<p>Devuelve el <strong>valor del carácter</strong> generado según el idioma y modificadores activos. Si pulsas Shift+A devuelve <code>"A"</code>; sin Shift devuelve <code>"a"</code>. Para teclas especiales devuelve nombres como <code>"Enter"</code>, <code>"Escape"</code>, <code>"ArrowUp"</code>.</p>',
    },
    {
      type: 'title',
      text: 'Cuándo usar cada propiedad',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Usa <code>event.code</code> para controles de juego (WASD independiente del idioma) y <code>event.key</code> para detectar caracteres específicos o atajos de teclado semánticos como <code>Ctrl+C</code>.',
    },
    {
      type: 'paragraph',
      html: 'Las propiedades <code>event.which</code> y <code>event.keyCode</code> están oficialmente <strong>obsoletas</strong> según el estándar W3C. Aunque los navegadores modernos las siguen soportando por compatibilidad, no deben usarse en código nuevo.',
    },
  ],
};

