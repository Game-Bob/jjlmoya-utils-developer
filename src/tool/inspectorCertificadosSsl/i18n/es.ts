import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InspectorCertificadosSslUI } from '../ui';

const slug = 'inspector-certificados-ssl-tls';
const title = 'Inspector de Certificados SSL/TLS Online Ver PEM y CRT';
const description = 'Analiza archivos de certificados SSL (.pem, .crt, .der) localmente. Consulta fechas de expiración, emisores, sujetos y huellas digitales SHA-256 sin que tus datos salgan del navegador.';

const faqData = [
  {
    question: '¿Es seguro analizar mi certificado SSL en esta web?',
    answer: 'Absolutamente. Esta utilidad funciona 100% client-side. Al arrastrar tu archivo .pem o .crt, el navegador lee los datos localmente y nunca los envía a ningún servidor. La privacidad es total.',
  },
  {
    question: '¿Qué formatos de certificados son compatibles?',
    answer: 'La herramienta soporta los formatos más habituales: PEM (codificado en Base64 con cabeceras "BEGIN CERTIFICATE") y DER (formato binario), que suelen tener extensiones .pem, .crt, .cer o .der.',
  },
  {
    question: '¿Puedo ver la fecha de expiración de un archivo .crt?',
    answer: 'Sí, al cargar el archivo verás inmediatamente el apartado "Estado de Validez" donde se indica la fecha exacta de vencimiento y si el certificado sigue siendo válido hoy.',
  },
  {
    question: '¿Para qué sirve el emisor del certificado?',
    answer: 'El emisor (Issuer) indica qué Autoridad de Certificación (CA) ha validado la identidad del sitio. Es fundamental para saber si el certificado será reconocido por los navegadores comerciales.',
  },
  {
    question: '¿Cómo se calculan las huellas digitales SHA-256?',
    answer: 'Se calculan aplicando un algoritmo hash directamente sobre el contenido binario del certificado. Sirven para verificar que el archivo no ha sido manipulado y coincide con el que espera el servidor.',
  },
];

const howToData = [
  { name: 'Localiza tu archivo', text: 'Busca el archivo con extensión .pem, .crt, .cer o .der en tu equipo.' },
  { name: 'Arrastra y suelta', text: 'Simplemente desliza el archivo sobre la zona punteada de arriba.' },
  { name: 'Visualiza los resultados', text: 'Instantáneamente verás quién emitió el certificado, para quién es, cuándo caduca y sus huellas digitales.' },
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

const ui: InspectorCertificadosSslUI = {
  labelAnalyzeCertificate: 'Analizar Certificado',
  dragDropText: 'Arrastra tu archivo .pem, .crt o .cer aquí',
  dragDropSubtext: '(Procesamiento 100% local en tu navegador)',
  cardStatusTitle: 'Estado de Validez',
  cardSubjectTitle: 'Sujeto (Propietario)',
  cardIssuerTitle: 'Emisor (CA)',
  cardFingerprintsTitle: 'Huellas Digitales',
  cardTechnicalTitle: 'Detalles Técnicos',
  labelValidityStatus: 'Estado:',
  labelExpiryDate: 'Vence el',
  labelIssueDate: 'Emitido el',
  labelSha256: 'SHA-256 Fingerprint',
  labelSha1: 'SHA-1 Fingerprint',
  labelSignatureAlgorithm: 'Algoritmo de Firma',
  labelVersion: 'Versión X.509',
  labelSerialNumber: 'Número de Serie',
  labelCommonName: 'Common Name',
  labelOrganization: 'Organization',
  labelOrgUnit: 'Org. Unit',
  labelLocality: 'Locality',
  labelState: 'State/Province',
  labelCountry: 'Country',
  labelEmail: 'Email',
  statusValid: 'Válido',
  statusExpired: 'No válido',
  errorMessageInvalid: 'Archivo no válido.',
  supportedFormats: '.pem, .crt, .cer, .der',
};

export const content: ToolLocaleContent<InspectorCertificadosSslUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Recursos Técnicos sobre Certificados SSL/TLS',
  bibliography: [
    { name: 'RFC 5280: Internet X.509 Public Key Infrastructure Certificate and CRL Profile', url: 'https://datatracker.ietf.org/doc/html/rfc5280' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'Mozilla: SSL/TLS Encryption Overview', url: 'https://developer.mozilla.org/en-US/docs/Glossary/TLS' },
    { name: 'OpenSSL: X.509 Certificate Format Documentation', url: 'https://www.openssl.org/docs/man1.1.1/man1/x509.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '¿Qué es un Inspector de Certificados SSL/TLS y por qué lo necesitas?', level: 2 },
    {
      type: 'paragraph',
      html: 'En el mundo del desarrollo web y la ciberseguridad, los <strong>certificados SSL (Secure Sockets Layer) y TLS (Transport Layer Security)</strong> son la piedra angular de la confianza. Un certificado digital no es más que un archivo que vincula una clave criptográfica con los datos de una organización o dominio. Sin embargo, estos archivos suelen venir en formatos binarios (.der) o codificados en Base64 (.pem, .crt) que no son legibles a simple vista.',
    },
    {
      type: 'paragraph',
      html: 'Nuestro <strong>Inspector de Certificados SSL/TLS</strong> te permite "abrir" estos archivos de forma visual y segura. A diferencia de las herramientas que consultan un dominio público (como el famoso test de SSL Labs), esta utilidad trabaja directamente con el archivo que tienes en tu dispositivo. Esto es vital cuando estás configurando servidores Nginx, Apache o cargando certificados en un Load Balancer de AWS o Google Cloud, y necesitas verificar que el archivo que tienes en la mano es el correcto antes de subirlo.',
    },
    { type: 'title', text: 'Cómo inspeccionar un archivo .pem o .crt paso a paso', level: 2 },
    {
      type: 'paragraph',
      html: 'Analizar un certificado con nuestra herramienta es extremadamente sencillo y no requiere conocimientos de consola (OpenSSL). Sigue estos pasos:',
    },
    {
      type: 'list',
      items: [
        '<strong>Localiza tu archivo:</strong> Busca el archivo con extensión .pem, .crt, .cer o .der en tu equipo.',
        '<strong>Arrastra y suelta:</strong> Simplemente desliza el archivo sobre la zona punteada de arriba.',
        '<strong>Visualiza los resultados:</strong> Instantáneamente verás quién emitió el certificado, para quién es, cuándo caduca y sus huellas digitales.',
      ],
    },
    {
      type: 'tip',
      title: 'Privacidad Total',
      html: 'Lo más importante de este proceso es la <strong>privacidad</strong>. El archivo nunca se sube a nuestros servidores. Todo el parseo de la estructura ASN.1 del certificado ocurre dentro de la memoria RAM de tu propio navegador. Seguridad total para tus claves públicas.',
    },
    { type: 'title', text: 'Campos clave que verás al analizar tu certificado', level: 2 },
    {
      type: 'paragraph',
      html: 'Al analizar tu certificado, desglosamos la información técnica más relevante para que puedas verificarla de un vistazo:',
    },
    {
      type: 'list',
      items: [
        '<strong>Sujeto (Subject):</strong> Muestra los datos del propietario, incluyendo el Common Name (CN), organización y ubicación.',
        '<strong>Emisor (Issuer):</strong> Identifica a la Autoridad de Certificación (CA) que firmó el certificado (ej: Let\'s Encrypt, DigiCert).',
        '<strong>Período de Validez:</strong> Muestra la fecha exacta de emisión y la fecha de expiración crítica.',
        '<strong>Fingerprints (Huellas):</strong> Las huellas SHA-256 y SHA-1 sirven para verificar la integridad del archivo.',
      ],
    },
    { type: 'title', text: 'Formatos compatibles: PEM, CRT, CER y DER', level: 2 },
    {
      type: 'paragraph',
      html: 'Existen varios formatos de archivos certificados y a veces es confuso. Nuestra herramienta es compatible con los más habituales:',
    },
    {
      type: 'list',
      items: [
        '<strong>PEM (.pem, .crt, .cer):</strong> Es el más común en Linux y servidores web. Empieza con la línea <code>-----BEGIN CERTIFICATE-----</code>.',
        '<strong>DER (.der, .cer):</strong> Es el formato binario. Se usa mucho en entornos Windows (Java, Active Directory) y suele ser más difícil de leer sin herramientas especializadas.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Incluso si tu archivo tiene una extensión extraña, si la estructura interna es un certificado X.509 estándar, nuestro motor basado en <strong>node-forge</strong> podrá interpretarlo sin problemas.',
    },
    { type: 'title', text: '¿Por qué usar esta herramienta en lugar de OpenSSL?', level: 2 },
    {
      type: 'paragraph',
      html: 'OpenSSL es la navaja suiza de la criptografía, pero sus comandos son difíciles de recordar. Para ver un certificado por consola tendrías que escribir:',
    },
    { type: 'code', text: 'openssl x509 -in certificado.crt -text -noout' },
    {
      type: 'paragraph',
      html: 'Nuestra herramienta ofrece ventajas claras para el flujo de trabajo diario:',
    },
    {
      type: 'list',
      items: [
        '<strong>Velocidad:</strong> No necesitas abrir la terminal ni recordar flags complejas.',
        '<strong>Visual:</strong> Formateamos los nombres de los campos (Locality, Organization) para que sean legibles y no códigos cortos como "L" o "O".',
        '<strong>Alertas de validez:</strong> Calculamos automáticamente si el certificado es válido hoy mismo, ahorrándote contrastar la fecha actual con la del certificado mentalmente.',
        '<strong>Multiplataforma:</strong> Funciona en cualquier sistema operativo con un navegador moderno, sin instalar dependencias.',
      ],
    },
    { type: 'title', text: 'Seguridad y Privacidad: El certificado NO sale de tu RAM', level: 2 },
    {
      type: 'paragraph',
      html: 'Como desarrollador, sé lo crítico que es manejar este tipo de información. Aunque un certificado es técnicamente <strong>información pública</strong> (se envía a cualquier navegador que visite tu web), no deja de ser una buena práctica no subir archivos a servidores externos innecesariamente.',
    },
    {
      type: 'paragraph',
      html: 'Esta utilidad utiliza JavaScript que corre estrictamente en el cliente. Al arrastrar el archivo, leemos su contenido y lo procesamos localmente. Puedes comprobarlo desconectando tu internet: la herramienta seguirá funcionando exactamente igual.',
    },
    { type: 'title', text: 'Casos de uso comunes para el Inspector SSL', level: 2 },
    {
      type: 'paragraph',
      html: '¿Cuándo te vendrá bien tener marcada esta página en favoritos?',
    },
    {
      type: 'list',
      items: [
        '<strong>Debugging de servidores:</strong> Cuando instalas un certificado y la web sigue dando error, para verificar que no has cargado el certificado antiguo por error.',
        '<strong>Verificación de cadenas (Chains):</strong> Para ver si un archivo contiene el certificado final o un certificado intermedio.',
        '<strong>Auditoría de activos:</strong> Para comprobar qué Autoridad de Certificación se usó en un proyecto antiguo.',
        '<strong>Integridad de copias:</strong> Al mover certificados entre servidores, para asegurar que el archivo no está corrupto comparando su SHA-256 fingerprint.',
      ],
    },
  ],
};
