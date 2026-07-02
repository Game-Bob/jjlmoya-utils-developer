import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JwtDecoderUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'decodificador-jwt-parser-e-inspector-de-claims';
const title = 'Decodificador JWT, Parser e Inspector de Claims';
const description = 'Pega un JSON Web Token, decodifica su cabecera y payload al instante, inspecciona claims registrados, detecta tokens expirados y copia JSON limpio para depurar flujos de autenticacion.';

const howTo = [
  {
    name: 'Pega el JWT',
    text: 'Copia un token de una cabecera Authorization, cookie, entrada de log o proveedor de identidad y pegalo en el campo de entrada.',
  },
  {
    name: 'Lee la cabecera y el payload decodificados',
    text: 'La herramienta divide el token en cabecera, payload y firma, luego muestra los segmentos JSON en paneles separados para una inspeccion rapida.',
  },
  {
    name: 'Comprueba los claims importantes',
    text: 'Revisa el algoritmo, emisor, audiencia, sujeto, fecha de emision, fecha de validez inicial y fecha de expiracion sin convertir manualmente timestamps Unix.',
  },
  {
    name: 'Copia los datos que necesitas',
    text: 'Copia una seccion decodificada o la salida decodificada completa cuando necesites compartir una instantanea de depuracion saneada con tu equipo.',
  },
];

const faq = [
  {
    question: 'Decodificar un JWT demuestra que el token es valido?',
    answer: 'No. Decodificar solo revela la cabecera y el payload codificados en base64url. Un token es confiable solo despues de que la firma, el emisor, la audiencia, la expiracion y los claims relacionados sean validados por la aplicacion o el proveedor de identidad.',
  },
  {
    question: 'Puedo usar este decodificador JWT para access tokens e ID tokens?',
    answer: 'Si. El decodificador es util para inspeccionar access tokens OAuth, ID tokens OpenID Connect, tokens de sesion y tokens servicio a servicio, siempre que usen el formato JWT estandar de tres partes.',
  },
  {
    question: 'Por que el panel de firma no verifica el token?',
    answer: 'La verificacion JWT requiere el secreto correcto, la clave publica o la configuracion JWKS. Esta herramienta se centra intencionadamente en la decodificacion e inspeccion para que los desarrolladores puedan ver el contenido del token sin pretender que una cadena de firma visible es prueba de validez.',
  },
  {
    question: 'Que debo comprobar primero al depurar un JWT?',
    answer: 'Empieza por exp, nbf, iss, aud y alg. La mayoria de los problemas reales en produccion provienen de tokens expirados, desfase de reloj, valores de audiencia incorrectos, URLs de emisor inesperadas o suposiciones inseguras sobre el algoritmo.',
  },
];

const ui: JwtDecoderUI = {
  tokenLabel: 'Token JWT',
  tokenPlaceholder: 'Pega un JWT aqui: cabecera.payload.firma',
  sampleButton: 'Cargar ejemplo',
  clearButton: 'Limpiar',
  statusWaiting: 'Pega un token para decodificar su cabecera JSON, payload y claims.',
  statusValid: 'JWT decodificado correctamente.',
  statusInvalid: 'Esto no parece un JWT valido de tres partes.',
  statusExpired: 'JWT decodificado, pero el claim exp ya esta expirado.',
  statusUnsigned: 'JWT decodificado, pero no esta firmado o usa el algoritmo none.',
  headerTitle: 'Cabecera',
  payloadTitle: 'Payload',
  signatureTitle: 'Firma',
  claimsTitle: 'Claims registrados',
  copyHeader: 'Copiar cabecera decodificada',
  copyPayload: 'Copiar payload decodificado',
  copySignature: 'Copiar firma',
  copyAll: 'Copiar todo',
  copiedLabel: 'Copiado',
  invalidTokenTitle: 'JWT no valido',
  invalidTokenBody: 'Comprueba que el token tiene tres segmentos base64url separados por puntos.',
  invalidSegmentError: 'Comprueba que el token tiene tres segmentos base64url separados por puntos.',
  invalidDecodeError: 'La cabecera o el payload no se pudieron decodificar como JSON valido.',
  emptyJson: '{}',
  signaturePresent: 'El segmento de firma esta presente; verificalo en tu capa de autenticacion con la clave correcta.',
  signatureMissing: 'Sin segmento de firma',
  algorithmLabel: 'Algoritmo',
  typeLabel: 'Tipo',
  issuerLabel: 'Emisor',
  subjectLabel: 'Sujeto',
  audienceLabel: 'Audiencia',
  issuedAtLabel: 'Emitido el',
  notBeforeLabel: 'No antes del',
  expiresAtLabel: 'Expira el',
  claimMissing: 'No presente',
  privacyNote: 'La decodificacion se ejecuta en tu navegador. No pegues secretos de produccion en ninguna herramienta a menos que tu politica de seguridad lo permita.',
  sampleToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnYW1lYm9iLXVzZXItNDIiLCJuYW1lIjoiR2FtZUJvYiBEZXZlbG9wZXIiLCJpc3MiOiJodHRwczovL3d3dy5nYW1lYm9iLmRldiIsImF1ZCI6ImRldmVsb3Blci10b29scyIsImlhdCI6MTcxNzIwMDAwMCwibmJmIjoxNzE3MjAwMDAwLCJleHAiOjE4OTM0NTYwMDAsInJvbGUiOiJhZG1pbiJ9.demo-signature',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
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
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<JwtDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Preguntas frecuentes sobre el decodificador JWT',
  faq,
  bibliographyTitle: 'Especificaciones JWT y referencias de seguridad',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Decodifica JWTs sin perder el contexto de seguridad',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un JSON Web Token parece compacto, pero a menudo contiene el detalle exacto que explica un fallo de autenticacion: el algoritmo de firma, emisor, audiencia, sujeto, fecha de emision, fecha de validez inicial, expiracion y claims de autorizacion especificos de la aplicacion. Este <strong>decodificador JWT, parser e inspector de claims</strong> convierte los tres segmentos del token en JSON legible para que puedas depurar flujos de autenticacion mas rapido.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Decodificado no significa confiable',
      html: 'Cualquiera puede decodificar un JWT en base64url. La confianza comienza solo despues de que tu aplicacion verifique la firma con el secreto, clave publica o JWKS correctos y luego valide el emisor, la audiencia, la expiracion y cualquier claim especifico del dominio. Usa esta herramienta para inspeccionar datos, no para aceptar un token como autentico.',
    },
    {
      type: 'title',
      text: 'Lo que te dice cada segmento JWT',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Segmento', 'Contenido tipico', 'Valor de depuracion'],
      rows: [
        ['Cabecera', 'Algoritmo, tipo de token e ID de clave opcional', 'Muestra si el token espera HS256, RS256, ES256 u otra estrategia de verificacion.'],
        ['Payload', 'Claims registrados y claims de aplicacion', 'Revela identidad, tenant, scopes, roles, expiracion y desajustes de audiencia.'],
        ['Firma', 'Bytes de firma criptografica codificados como base64url', 'Confirma que existe un segmento de firma, pero debe verificarse con la clave correcta en otro lugar.'],
      ],
    },
    {
      type: 'title',
      text: 'Claims que suelen explicar fallos de autenticacion',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>exp:</strong> si el token expiro, la logica de renovacion o la configuracion del reloj pueden estar mal.',
        '<strong>nbf:</strong> si el token aun no esta activo, los relojes del servidor y del proveedor de identidad pueden estar desincronizados.',
        '<strong>iss:</strong> si la URL del emisor difiere de la configuracion, el token puede venir del tenant o entorno equivocado.',
        '<strong>aud:</strong> si la audiencia no coincide con el identificador de la API, el token fue emitido para otro recurso.',
        '<strong>alg:</strong> si el algoritmo es inesperado, tu verificador puede rechazar el token o exponer un error de configuracion peligroso.',
      ],
    },
    {
      type: 'title',
      text: 'Casos de uso de un parser JWT durante el desarrollo',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Depuracion frontend',
          description: 'Inspecciona ID tokens y access tokens recibidos tras el inicio de sesion para confirmar scopes, roles y claims de perfil.',
          icon: 'mdi:monitor-dashboard',
          points: ['Comprueba claims de perfil', 'Confirma scopes y roles', 'Compara entornos de login'],
        },
        {
          title: 'QA de API backend',
          description: 'Compara los valores esperados de emisor y audiencia con el token realmente enviado en una cabecera Authorization.',
          icon: 'mdi:api',
          highlight: true,
          points: ['Valida la forma de la audiencia', 'Detecta desajustes de emisor', 'Inspecciona bearer tokens'],
        },
        {
          title: 'Configuracion del proveedor de identidad',
          description: 'Comprueba si los claims de Auth0, Azure AD, Cognito, Keycloak o un proveedor personalizado tienen la forma que tu aplicacion espera.',
          icon: 'mdi:account-key',
          points: ['Revisa datos del tenant', 'Comprueba claims personalizados', 'Compara mapeos del proveedor'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Errores comunes de JWT que este inspector hace evidentes',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Comprobaciones rapidas frente a decisiones de confianza',
      items: [
        {
          pro: 'Ve tokens mal formados inmediatamente.',
          con: 'No puede conocer tu audiencia o emisor esperados.',
        },
        {
          pro: 'Convierte claims de timestamp Unix en fechas legibles.',
          con: 'No puede verificar una firma sin el material de clave real.',
        },
        {
          pro: 'Detecta valores faltantes de emisor, audiencia, sujeto o tipo.',
          con: 'No puede demostrar que los scopes y roles son seguros para tu aplicacion.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Flujo de trabajo recomendado',
      items: [
        'Decodifica el token para entender lo que el cliente o la API realmente recibieron.',
        'Comprueba exp, nbf, iss, aud, sub y alg antes de perseguir la logica de aplicacion.',
        'Verifica firmas y decisiones de confianza solo en tu capa de autenticacion.',
        'Evita compartir JWTs de produccion sensibles en tickets, logs o capturas de pantalla.',
      ],
    },
  ],
};
