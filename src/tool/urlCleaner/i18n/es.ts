import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlCleanerUI } from '../ui';

const slug = 'limpiador-tracking-url';
const title = 'Limpiador de Tracking de URL: Eliminar UTM, FBCLID y GCLID';
const description = 'Elimina automáticamente parámetros de rastreo y publicidad de tus URLs. Comparte enlaces limpios y protege tu privacidad digital al instante.';

const faqData = [
  {
    question: '¿Qué tipos de parámetros de rastreo elimina esta herramienta?',
    answer: 'Nuestra utilidad detecta y elimina automáticamente los parámetros de seguimiento más comunes, incluyendo UTM (utm_source, utm_medium, etc.), identificadores de clics publicitarios (fbclid, gclid, msclkid) e identificadores de campañas de email marketing (mc_cid, _hsenc).',
  },
  {
    question: '¿Afecta esto a la funcionalidad del sitio web?',
    answer: 'Generalmente no. Estos parámetros se utilizan casi exclusivamente para analítica y marketing. Al eliminarlos, la página cargará normalmente, pero el propietario del sitio no podrá rastrear la fuente exacta de tu clic.',
  },
  {
    question: '¿Es seguro procesar mis enlaces aquí?',
    answer: 'Totalmente. Al igual que todas nuestras utilidades, el proceso es 100% client-side. Los enlaces nunca se envían a nuestros servidores; todo sucede de forma privada en tu propio navegador.',
  },
  {
    question: '¿Por qué mis enlaces de Facebook son tan largos?',
    answer: 'Facebook añade un parámetro llamado "fbclid" a todos los enlaces que salen de su plataforma. Esto les permite rastrear tu actividad en otros sitios web incluso si tienes bloqueada la publicidad de terceros.',
  },
];

const howToData = [
  { name: 'Pega tu URL', text: 'Introduce la URL completa que contiene parámetros de rastreo' },
  { name: 'Haz clic en Limpiar', text: 'El programa analizará la URL automáticamente' },
  { name: 'Revisa los resultados', text: 'Verás la URL limpia y una lista de parámetros removidos' },
  { name: 'Copia y comparte', text: 'Usa la URL limpia en tus correos, redes sociales o mensajes' },
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

const ui: UrlCleanerUI = {
  labelInput: 'Pega la URL con rastreadores',
  btnClean: 'Limpiar',
  labelCleaned: 'URL Limpia',
  labelRemoved: 'Rastreadores Eliminados',
  countLabel: 'Parámetros eliminados',
  reductionLabel: 'Reducción de longitud',
  noneDetected: 'No se detectaron rastreadores comunes.',
  errorInvalid: 'Por favor, introduce una URL válida.',
  btnCopy: 'Copiar',
  btnCopied: 'Copiado',
};

export const content: ToolLocaleContent<UrlCleanerUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Recursos sobre Privacidad y Rastreo Web',
  bibliography: [
    { name: 'Electronic Frontier Foundation (EFF): Guía sobre Rastreo Online', url: 'https://www.eff.org/issues/online-behavioral-tracking' },
    { name: 'Google Analytics: Documentación de Parámetros UTM', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: 'Privacidad en la Web: El impacto de los Click IDs', url: 'https://www.w3.org/community/web-advertising/wiki/Click_Identifiers' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Limpiador de Tracking URL: Elimina UTM, FBCLID y GCLID', level: 2 },
    {
      type: 'paragraph',
      html: 'Elimina rastreadores invisibles de tus enlaces para compartirlos de forma limpia, privada y profesional. Descubre qué significan esos códigos extraños en tus URLs.',
    },
    { type: 'title', text: '¿Qué es un Limpiador de Tracking de URL y por qué lo necesitas?', level: 3 },
    {
      type: 'paragraph',
      html: 'Alguna vez has copiado un enlace para enviárselo a un amigo y te has dado cuenta de que es tres veces más largo de lo que debería ser? Ese "ruido" extra son los parámetros de rastreo. Un <strong>limpiador de tracking</strong> es una herramienta diseñada para "desnudar" la dirección web de toda la información publicitaria y de seguimiento que las grandes plataformas inyectan en cada clic que haces.',
    },
    { type: 'title', text: 'Parámetros de rastreo más comunes', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>UTM (Google Analytics):</strong> utm_source, utm_medium, utm_campaign para rastrear campañas',
        '<strong>FBCLID:</strong> Identificador de clics de Facebook para saltarse restricciones de cookies',
        '<strong>GCLID / DCLID:</strong> Google Click ID para vincular visitas con campañas de Google Ads',
        '<strong>MSCLKID:</strong> Identificador de clics de Microsoft Advertising y Bing',
        '<strong>HubSpot & Mailchimp:</strong> Parámetros de marketing automation como _hsenc, mc_cid',
        '<strong>LinkedIn & Otros:</strong> li_fat_id y otros rastreadores de redes sociales',
      ],
    },
  ],
};
