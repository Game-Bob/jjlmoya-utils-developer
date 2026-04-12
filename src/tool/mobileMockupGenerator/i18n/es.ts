import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileMockupGeneratorUI } from '../ui';

const slug = 'generador-mockups-movil';
const title = 'Generador de Mockups para App Store. iPhone y Google Pixel';
const description = 'Crea presentaciones profesionales para la App Store y Google Play. Mockups de iPhone y Pixel con fondos personalizados, layouts panorámicos y exportación masiva en alta resolución.';

const faqData = [
  { question: '¿Son estas capturas válidas para la App Store y Google Play?', answer: 'Sí, las imágenes generadas cumplen con las proporciones y calidades requeridas por las tiendas de aplicaciones. Solo tienes que elegir el dispositivo adecuado (iPhone para iOS, Pixel para Android) antes de exportar.' },
  { question: '¿Puedo usar mis propios fondos personalizados?', answer: 'Claro. Además de nuestra biblioteca de gradientes premium, puedes subir cualquier imagen desde tu ordenador para que sirva de ambiente de fondo para tus mockups.' },
  { question: '¿Es gratis para uso comercial?', answer: 'Sí, puedes usar los mockups generados para tus proyectos comerciales, portafolios o presentaciones sin coste alguno y sin marcas de agua.' },
  { question: '¿Se guardan mis capturas de pantalla en algún servidor?', answer: 'No. El generador funciona 100% localmente en tu navegador. Tus imágenes privadas nunca salen de tu ordenador.' },
];

const howToData = [
  { name: 'Subir capturas', text: 'Arrastra o selecciona las capturas de pantalla de tu aplicación móvil que quieras presentar.' },
  { name: 'Elegir dispositivo', text: 'Selecciona el modelo de smartphone (iPhone 15 Pro Max o Google Pixel 8) según la tienda objetivo.' },
  { name: 'Personalizar entorno', text: 'Ajusta el fondo, el ángulo del dispositivo, añade textos de marketing y elige el layout de la composición.' },
  { name: 'Descargar en HD', text: 'Exporta todos los resultados en formato WebP de alta resolución listos para subir a la tienda de aplicaciones.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
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

const ui: MobileMockupGeneratorUI = {
  labelUpload: 'Subir Capturas',
  dropHint: 'Arrastra tus imágenes aquí',
  dropFormats: 'PNG, JPG o WEBP',
  btnMassReplace: 'Mass Replace (Lote)',
  massReplaceHint: 'Reemplaza las imágenes actuales manteniendo tus presets y textos. Ideal para iteraciones rápidas.',
  labelSettings: 'Configuración Global',
  labelDevice: 'Dispositivo',
  labelFont: 'Tipografía',
  labelBackground: 'Fondo',
  titleSwapColors: 'Intercambiar colores',
  labelAngle: 'Ángulo',
  labelSafeArea: 'Safe Area (Top/Bottom)',
  labelSafeAreaColor: 'Color del área',
  emptyTitle: 'Aún no hay imágenes',
  emptySubtitle: 'Sube tus capturas para empezar a diseñar',
  btnClearAll: 'Limpiar Lienzo',
  btnExport: 'Exportar Todo (.zip)',
  cardTitleDuplicate: 'Duplicar Escena',
  cardTitleReplace: 'Sustituir Captura Actual',
  cardSectionLayouts: 'Layouts Maestros',
  cardSectionBranding: 'Branding & Copys',
  cardTitleResetText: 'Resetear Texto',
  cardLabelColor: 'Color',
  cardTextPlaceholder: 'Escribe el copy aquí...',
  cardSectionDevice: 'Layout Dispositivo',
  cardTitleResetDevice: 'Resetear Posición',
  cardSectionScene: 'Atrezzo & Fondo',
  cardBtnSpecialBg: 'Fondo Especial',
  cardBtnDeleteScene: 'Eliminar Escena',
  cardRangeLabelSize: 'Tamaño',
  cardRangeLabelX: 'Eje X',
  cardRangeLabelY: 'Eje Y',
  cardRangeLabelRotation: 'Giro',
  cardRangeLabelScale: 'Escala',
  presetClassic: 'Clásico',
  presetMobileBottom: 'Móvil Abajo',
  presetMobileTop: 'Móvil Arriba',
  presetFocus: 'Enfoque',
  presetDynamic: 'Dynamic',
  presetSplitLeft: 'Partida Izq.',
  presetSplitRight: 'Partida Der.',
  presetImageLeft: 'Imagen Izq.',
  presetImageRight: 'Imagen Der.',
  confirmClear: '¿Estás seguro de eliminar todos los mockups?',
  processingExport: 'Procesando...',
  exportDone: 'Listo!',
};

export const content: ToolLocaleContent<MobileMockupGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias',
  bibliography: [
    { name: 'Apple App Store Screenshot Requirements', url: 'https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications' },
    { name: 'Google Play Screenshot Requirements', url: 'https://support.google.com/googleplay/android-developer/answer/9866151' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Eleva tus capturas al siguiente nivel', level: 2 },
    { type: 'paragraph', html: 'No te limites a subir capturas de pantalla planas. Nuestra herramienta de mockups permite a desarrolladores y diseñadores crear activos visuales de alto impacto sin necesidad de Photoshop o Figma.' },
    { type: 'title', text: 'Potencia con Layouts Maestros', level: 3 },
    { type: 'grid', columns: 2 },
    { type: 'card', title: 'App Store y Google Play', html: '<p>Optimiza tu tasa de conversión. Los mockups de iPhone 15 Pro Max y Pixel 8 son el estándar mundial para las fichas de las tiendas de aplicaciones.</p>' },
    { type: 'card', title: 'Pitch Decks y Marketing', html: '<p>Presenta tus ideas con autoridad. Ideal para presentaciones a inversores, campañas en redes sociales y portfolios profesionales de diseño UI/UX.</p>' },
    { type: 'title', text: 'Flujo de trabajo profesional', level: 3 },
    { type: 'tip', html: 'Usa los presets de "Partida Izquierda" y "Partida Derecha" para crear mockups continuos que se deslizan de una imagen a otra en carruseles de Instagram o capturas de la App Store.' },
  ],
};
