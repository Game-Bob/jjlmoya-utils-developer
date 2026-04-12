import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GeneradorSecurityTxtUI } from '../ui';

const slug = 'generador-security-txt-rfc-9116';
const title = 'Generador de Security.txt RFC 9116';
const description = 'Crea tu archivo security.txt profesional para facilitar el reporte de vulnerabilidades y cumplir con los estándares internacionales de seguridad web.';

const faqData = [
  {
    question: '¿Qué es el archivo security.txt?',
    answer: 'Es un estándar (RFC 9116) que permite a los sitios web definir cómo los investigadores de seguridad deben contactar con ellos para reportar vulnerabilidades de forma responsable.',
  },
  {
    question: '¿Dónde se debe colocar el archivo security.txt?',
    answer: 'La ubicación estándar recomendada es en la carpeta /.well-known/ de tu dominio, resultando en la URL https://ejemplo.com/.well-known/security.txt.',
  },
  {
    question: '¿Por qué es obligatoria la fecha de expiración?',
    answer: 'Para asegurar que la información de contacto no quede obsoleta. Si el archivo no tiene una fecha de expiración válida, los investigadores podrían no confiar en que los canales de comunicación sigan activos.',
  },
  {
    question: '¿Qué campos son requeridos en un security.txt?',
    answer: 'Según el RFC 9116, los campos requeridos son "Contact" (con una dirección de correo o URL) y "Expires" (con una fecha futura en formato ISO 8601).',
  },
];

const howToData = [
  { name: 'Rellena los campos', text: 'Completa tu dirección de correo o URL de contacto y selecciona una fecha de expiración.' },
  { name: 'Añade campos opcionales', text: 'Incluye información adicional como tu clave PGP, política de seguridad o bolsa de trabajo.' },
  { name: 'Descarga o copia el archivo', text: 'Haz clic en "Descargar .txt" o copia el contenido y guárdalo como security.txt.' },
  { name: 'Sube al servidor', text: 'Coloca el archivo en la carpeta /.well-known/ de tu dominio.' },
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

const ui: GeneradorSecurityTxtUI = {
  titleBasicFields: 'Campos Básicos (REQUERIDOS)',
  labelContact: 'Contacto (Email o URL)',
  placeholderContact: 'mailto:seguridad@ejemplo.com o https://ejemplo.com/contacto',
  contactTip: 'Dirección a la que enviar los reportes de vulnerabilidades.',
  labelExpires: 'Fecha de Expiración',
  expiresTip: 'No debe ser superior a un año en el futuro.',
  titleOptionalFields: 'Campos Opcionales',
  labelEncryption: 'Clave Pública',
  placeholderEncryption: 'https://ejemplo.com/pgp-key.txt',
  encryptionTip: 'Enlace a tu llave PGP para reportes cifrados.',
  labelPolicy: 'Política de Seguridad',
  placeholderPolicy: 'https://ejemplo.com/seguridad/politica/',
  policyTip: 'Página que detalla cómo manejar vulnerabilidades.',
  labelAcknowledgments: 'Agradecimientos',
  placeholderAcknowledgments: 'https://ejemplo.com/seguridad/hall-of-fame/',
  acknowledgmentsTip: 'Página de agradecimiento a investigadores.',
  labelHiring: 'Bolsa de Trabajo',
  placeholderHiring: 'https://ejemplo.com/jobs',
  hiringTip: 'Enlace a ofertas de empleo de seguridad.',
  resultTitle: 'Vista Previa (security.txt)',
  btnCopy: 'Copiar Código',
  btnDownload: 'Descargar .txt',
  copiedMessage: 'Copiado',
  generatingMessage: 'Generando archivo security.txt...',
  comment: 'Generado',
};

export const content: ToolLocaleContent<GeneradorSecurityTxtUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Recursos Técnicos sobre Security.txt',
  bibliography: [
    { name: 'RFC 9116: A File Format to Aid in Security Vulnerability Disclosure', url: 'https://datatracker.ietf.org/doc/html/rfc9116' },
    { name: 'Security.txt Official Website', url: 'https://securitytxt.org/' },
    { name: 'OWASP: Vulnerability Disclosure Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '¿Qué es un archivo Security.txt y por qué necesitas generarlo?', level: 2 },
    {
      type: 'paragraph',
      html: 'En el panorama actual de la ciberseguridad, la transparencia y la comunicación son fundamentales. Si eres administrador de sistemas, desarrollador web o dueño de un negocio digital, probablemente ya conozcas los archivos de texto que ayudan a las máquinas a entender tu web, como <code>robots.txt</code> o <code>ads.txt</code>. Sin embargo, existe un estándar menos conocido pero vital para la integridad de tu plataforma: el <strong>Security.txt</strong>, definido por el <strong>RFC 9116</strong>.',
    },
    {
      type: 'paragraph',
      html: 'El propósito de <strong>generar un archivo security.txt</strong> es proporcionar a los investigadores de seguridad un método estandarizado para contactar con los responsables de un sitio web cuando descubren una vulnerabilidad. Sin este archivo, un "hacker ético" que encuentre un fallo en tu sistema podría no saber a quién reportarlo, lo que a menudo lleva a que la información se pierda, se publique sin previo aviso o, en el peor de los casos, sea explotada por actores maliciosos.',
    },
    { type: 'title', text: 'Cómo crear e instalar el archivo Security.txt siguiendo el RFC 9116', level: 2 },
    {
      type: 'paragraph',
      html: 'El <strong>estándar de contacto para investigadores de seguridad</strong> dicta que este archivo debe residir en una ubicación específica de tu servidor: la carpeta <code>/.well-known/</code>. Por lo tanto, la ruta final suele ser <code>https://tudominio.com/.well-known/security.txt</code>. Aunque también se permite colocarlo en la raíz (<code>/security.txt</code>), la primera opción es la preferida por las herramientas de escaneo automático.',
    },
    { type: 'title', text: 'Campos requeridos que no pueden faltar', level: 3 },
    {
      type: 'paragraph',
      html: 'Al <strong>obtener tu código de security.txt</strong>, debes asegurarte de que incluya al menos dos elementos críticos:',
    },
    {
      type: 'list',
      items: [
        '<strong>Contact:</strong> La dirección de correo electrónico o URL de un formulario donde recibir los reportes. Debe empezar con <code>mailto:</code> o <code>https://</code>.',
        '<strong>Expires:</strong> Una fecha en formato ISO 8601 que indique cuándo deja de ser válida la información del archivo. Se recomienda no poner una fecha superior a un año.',
      ],
    },
    { type: 'code', text: 'Contact: mailto:seguridad@tuempresa.es\nExpires: 2025-12-31T23:59:59.000Z' },
    { type: 'title', text: 'Campos opcionales para una seguridad avanzada', level: 3 },
    {
      type: 'paragraph',
      html: 'Para los sitios que buscan una <strong>protección de sitio web</strong> más robusta, el estándar ofrece campos adicionales:',
    },
    {
      type: 'list',
      items: [
        '<strong>Encryption:</strong> Un enlace a tu clave pública PGP para que los investigadores puedan enviarte información cifrada y segura.',
        '<strong>Policy:</strong> Un enlace a tu página de política de seguridad donde expliques el proceso de divulgación responsable (Responsible Disclosure).',
        '<strong>Acknowledgments:</strong> Un enlace a tu "Hall of Fame" o muro de agradecimientos para investigadores.',
        '<strong>Hiring:</strong> Un enlace a tus ofertas de empleo relacionadas con la ciberseguridad.',
      ],
    },
    { type: 'title', text: 'Beneficios de usar nuestro generador de Security.txt gratuito', level: 2 },
    {
      type: 'paragraph',
      html: 'Mucha gente se pregunta <strong>cómo sacar el contacto de seguridad</strong> de una web de forma rápida. Al utilizar nuestra herramienta, te aseguras de cumplir estrictamente con el formato del RFC 9116 sin tener que leer documentos técnicos complejos.',
    },
    {
      type: 'paragraph',
      html: 'Usar un generador te ahorra errores comunes de sintaxis. Por ejemplo, olvidar el prefijo <code>mailto:</code> o formatear mal la zona horaria en la fecha de expiración puede hacer que las herramientas automatizadas de los investigadores ignoren tu archivo.',
    },
    { type: 'title', text: 'Impacto en el posicionamiento y reputación web', level: 3 },
    {
      type: 'paragraph',
      html: 'Aunque el archivo <code>security.txt</code> no es un factor de ranking directo en Google como lo puede ser la velocidad de carga o el HTTPS, sí influye indirectamente. Una web que gestiona bien sus vulnerabilidades evita hackeos ruidosos (deface, inyecciones de spam) que arruinan el SEO en cuestión de horas. Además, muchas plataformas de rating de seguridad corporativa (como SecurityScorecard o BitSight) otorgan puntos extra a los dominios que implementan este estándar.',
    },
    { type: 'title', text: 'Conclusión: Un paso sencillo para una web más segura', level: 2 },
    {
      type: 'paragraph',
      html: 'En resumen, <strong>descargar security.txt</strong> y subirlo a tu servidor es una de las tareas de mantenimiento de seguridad más rápidas y efectivas que puedes realizar hoy mismo. Facilitas el trabajo a los "buenos", desincentivas a los curiosos y demuestras al mundo que te tomas en serio la privacidad y los datos de tus usuarios.',
    },
    {
      type: 'paragraph',
      html: 'No esperes a tener una brecha de seguridad para arrepentirte de no haber facilitado un canal de comunicación. Usa nuestro <strong>generador de security.txt online</strong> ahora y mantén tu ecosistema digital bajo control.',
    },
  ],
};
