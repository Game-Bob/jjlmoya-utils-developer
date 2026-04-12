import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UtmGeneratorUI } from '../ui';

const slug = 'generador-utm';
const title = 'Generador de Parámetros UTM para Google Analytics';
const description = 'Crea enlaces de seguimiento precisos para tus campañas de marketing digital. Optimizado para Google Analytics y otras herramientas de analítica.';

const faqData = [
  {
    question: '¿Es perjudicial para el SEO usar parámetros UTM?',
    answer: 'No, siempre que uses etiquetas canónicas. Los buscadores entienden que los parámetros UTM son para analítica y no crean contenido duplicado.',
  },
  {
    question: '¿Debo usar parámetros UTM para enlaces internos?',
    answer: 'No, nunca. Las etiquetas UTM en enlaces internos rompen la sesión del usuario en herramientas como Google Analytics, distorsionando tus datos de tráfico.',
  },
  {
    question: '¿Google Analytics distingue entre mayúsculas y minúsculas en UTM?',
    answer: 'Sí. "google", "Google" y "GOOGLE" se tratarán como fuentes diferentes. Mantén siempre la consistencia, preferiblemente usando solo minúsculas.',
  },
];

const howToData = [
  { name: 'Ingresa la URL', text: 'Introduce la URL completa de tu sitio web, incluyendo https://' },
  { name: 'Define la fuente', text: 'Especifica de dónde viene el tráfico (google, facebook, newsletter, etc.)' },
  { name: 'Selecciona el medio', text: 'Elige el tipo de canal (cpc, email, social, organic, etc.)' },
  { name: 'Nombra tu campaña', text: 'Asigna un nombre identificable para agrupar tus esfuerzos de marketing' },
  { name: 'Copia y utiliza', text: 'Copia la URL generada y úsala en tus publicaciones, anuncios o firmas de correo' },
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

const ui: UtmGeneratorUI = {
  labelUrl: 'URL del sitio web (p. ej. https://ejemplo.com) *',
  labelSource: 'Fuente de la campaña (p. ej. google, newsletter) *',
  labelMedium: 'Medio de la campaña (p. ej. cpc, email)',
  labelCampaign: 'Nombre de la campaña (p. ej. oferta_verano)',
  labelTerm: 'Término de la campaña (p. ej. comprar_zapatos)',
  labelContent: 'Contenido de la campaña (p. ej. banner_superior)',
  labelGenerated: 'URL Generada:',
  btnCopy: 'Copiar Enlace',
  btnCopied: '¡Copiado!',
  errorInvalid: 'Introduce una URL válida',
  errorInvalidUrl: 'URL no válida',
};

export const content: ToolLocaleContent<UtmGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Referencias',
  bibliography: [
    { name: 'Collect campaign data with custom URLs - Google Analytics Help (2024)', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: 'Best Practices for Campaign URL Tagging - VWO Blog (2023)', url: 'https://vwo.com/blog/utm-tagging-best-practices/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Generador UTM: Parámetros de Seguimiento para Google Analytics', level: 2 },
    {
      type: 'paragraph',
      html: 'Los parámetros <strong>UTM</strong> (Urchin Tracking Module) son etiquetas de texto que se añaden al final de una URL para realizar un seguimiento del tráfico web. Nuestro generador simplifica la creación de enlaces rastreables para tus campañas de marketing digital.',
    },
    { type: 'title', text: 'Los 5 pilares de una URL rastreable', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Campaign Source (Fuente):</strong> Identifica el buscador, la red social o el origen del tráfico. Ejemplo: google, newsletter, facebook.',
        '<strong>Campaign Medium (Medio):</strong> Se refiere al canal de marketing. Ejemplo: cpc, email, social, banner, organico.',
        '<strong>Campaign Name (Nombre):</strong> El nombre específico de tu campaña. Ejemplo: oferta_verano_2025, lanzamiento_app_v2.',
        '<strong>Campaign Term (Término):</strong> Para búsquedas pagadas, las palabras clave por las que has pujado. Ejemplo: comprar_zapatos_deportivos.',
        '<strong>Campaign Content (Contenido):</strong> Para A/B testing. Diferencia elementos similares dentro de una campaña. Ejemplo: header_v1, sidebar_v2.',
      ],
    },
    { type: 'title', text: 'Mejores prácticas para el etiquetado UTM', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Consistencia en mayúsculas:</strong> Las herramientas diferencian "Google", "GOOGLE" y "google". Usa siempre minúsculas para evitar duplicidades.',
        '<strong>Evita los espacios:</strong> Los espacios se convierten en %20. Usa guiones medios (-) o guiones bajos (_) en su lugar.',
        '<strong>No uses en enlaces internos:</strong> El seguimiento UTM es exclusivamente para tráfico externo. En enlaces internos rompe la sesión y arruina métricas clave.',
        '<strong>Documenta tus etiquetas:</strong> Mantén un registro de todas las combinaciones que uses para evitar inconsistencias.',
      ],
    },
  ],
};
