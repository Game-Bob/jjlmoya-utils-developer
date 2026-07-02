import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JwtDecoderUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'decodificador-jwt-parser-e-inspetor-de-claims';
const title = 'Decodificador JWT, Parser e Inspetor de Claims';
const description = 'Cole um JSON Web Token, decodifique seu cabeçalho e payload instantaneamente, inspecione claims registradas, identifique tokens expirados e copie JSON limpo para depurar fluxos de autenticação.';

const howTo = [
  {
    name: 'Cole o JWT',
    text: 'Copie um token de um cabeçalho Authorization, cookie, entrada de log ou provedor de identidade e cole-o no campo de entrada.',
  },
  {
    name: 'Leia o cabeçalho e payload decodificados',
    text: 'A ferramenta divide o token em cabeçalho, payload e assinatura, depois renderiza os segmentos JSON em painéis separados para inspeção rápida.',
  },
  {
    name: 'Verifique claims importantes',
    text: 'Revise algoritmo, emissor, audiência, assunto, data de emissão, data de validade inicial e data de expiração sem converter manualmente timestamps Unix.',
  },
  {
    name: 'Copie os dados necessários',
    text: 'Copie uma seção decodificada ou a saída completa quando precisar compartilhar um snapshot de depuração higienizado com sua equipe.',
  },
];

const faq = [
  {
    question: 'Decodificar um JWT prova que o token é válido?',
    answer: 'Não. A decodificação apenas revela o cabeçalho e o payload codificados em base64url. Um token só é confiável depois que a assinatura, emissor, audiência, expiração e claims relacionadas são validadas pela aplicação ou provedor de identidade.',
  },
  {
    question: 'Posso usar este decodificador JWT para access tokens e ID tokens?',
    answer: 'Sim. O decodificador é útil para inspecionar access tokens OAuth, ID tokens OpenID Connect, tokens de sessão e tokens serviço a serviço, desde que usem o formato JWT padrão de três partes.',
  },
  {
    question: 'Por que o painel de assinatura não verifica o token?',
    answer: 'A verificação JWT requer o segredo correto, chave pública ou configuração JWKS. Esta ferramenta foca intencionalmente na decodificação e inspeção para que os desenvolvedores possam ver o conteúdo do token sem fingir que uma string de assinatura visível é prova de validade.',
  },
  {
    question: 'O que devo verificar primeiro ao depurar um JWT?',
    answer: 'Comece com exp, nbf, iss, aud e alg. A maioria dos problemas reais de produção vem de tokens expirados, desvio de relógio, valores de audiência incorretos, URLs de emissor inesperadas ou suposições inseguras de algoritmo.',
  },
];

const ui: JwtDecoderUI = {
  tokenLabel: 'Token JWT',
  tokenPlaceholder: 'Cole um JWT aqui: cabeçalho.payload.assinatura',
  sampleButton: 'Carregar exemplo',
  clearButton: 'Limpar',
  statusWaiting: 'Cole um token para decodificar seu cabeçalho JSON, payload e claims.',
  statusValid: 'JWT decodificado com sucesso.',
  statusInvalid: 'Isso não parece ser um JWT válido de três partes.',
  statusExpired: 'JWT decodificado, mas a claim exp já está expirada.',
  statusUnsigned: 'JWT decodificado, mas não está assinado ou usa algoritmo none.',
  headerTitle: 'Cabeçalho',
  payloadTitle: 'Payload',
  signatureTitle: 'Assinatura',
  claimsTitle: 'Claims registradas',
  copyHeader: 'Copiar cabeçalho decodificado',
  copyPayload: 'Copiar payload decodificado',
  copySignature: 'Copiar assinatura',
  copyAll: 'Copiar tudo',
  copiedLabel: 'Copiado',
  invalidTokenTitle: 'JWT inválido',
  invalidTokenBody: 'Verifique se o token tem três segmentos base64url separados por pontos.',
  invalidSegmentError: 'Verifique se o token tem três segmentos base64url separados por pontos.',
  invalidDecodeError: 'O cabeçalho ou payload não pode ser decodificado como JSON válido.',
  emptyJson: '{}',
  signaturePresent: 'O segmento de assinatura está presente; verifique-o em sua camada de autenticação com a chave correta.',
  signatureMissing: 'Nenhum segmento de assinatura',
  algorithmLabel: 'Algoritmo',
  typeLabel: 'Tipo',
  issuerLabel: 'Emissor',
  subjectLabel: 'Assunto',
  audienceLabel: 'Audiência',
  issuedAtLabel: 'Emitido em',
  notBeforeLabel: 'Válido a partir de',
  expiresAtLabel: 'Expira em',
  claimMissing: 'Não presente',
  privacyNote: 'A decodificação é executada no seu navegador. Não cole segredos de produção em nenhuma ferramenta a menos que sua política de segurança permita.',
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
};

export const content: ToolLocaleContent<JwtDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'FAQ do decodificador JWT',
  faq,
  bibliographyTitle: 'Especificações JWT e referências de segurança',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Decodifique JWTs sem perder o contexto de segurança',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Um JSON Web Token parece compacto, mas frequentemente carrega o detalhe exato que explica uma falha de autenticação: o algoritmo de assinatura, emissor, audiência, assunto, data de emissão, data de validade inicial, expiração e claims de autorização específicas da aplicação. Este <strong>decodificador JWT, parser e inspetor de claims</strong> transforma os três segmentos do token em JSON legível para que você possa depurar fluxos de autenticação mais rapidamente.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Decodificado não significa confiável',
      html: 'Qualquer pessoa pode decodificar um JWT em base64url. A confiança começa apenas depois que sua aplicação verifica a assinatura com o segredo correto, chave pública ou JWKS, e então valida emissor, audiência, expiração e quaisquer claims específicas do domínio. Use esta ferramenta para inspecionar dados, não para aceitar um token como autêntico.',
    },
    {
      type: 'title',
      text: 'O que cada segmento JWT revela',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Segmento', 'Conteúdo típico', 'Valor para depuração'],
      rows: [
        ['Cabeçalho', 'Algoritmo, tipo de token e ID de chave opcional', 'Mostra se o token espera HS256, RS256, ES256 ou outra estratégia de verificação.'],
        ['Payload', 'Claims registradas e claims da aplicação', 'Revela identidade, tenant, escopos, funções, expiração e incompatibilidades de audiência.'],
        ['Assinatura', 'Bytes de assinatura criptográfica codificados como base64url', 'Confirma que um segmento de assinatura existe, mas deve ser verificado com a chave correta em outro lugar.'],
      ],
    },
    {
      type: 'title',
      text: 'Claims que geralmente explicam falhas de autenticação',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>exp:</strong> se o token expirou, a lógica de renovação ou as configurações de relógio podem estar erradas.',
        '<strong>nbf:</strong> se o token ainda não está ativo, os relógios do servidor e do provedor de identidade podem estar dessincronizados.',
        '<strong>iss:</strong> se a URL do emissor difere da configuração, o token pode vir do tenant ou ambiente errado.',
        '<strong>aud:</strong> se a audiência não corresponde ao identificador da API, o token foi emitido para outro recurso.',
        '<strong>alg:</strong> se o algoritmo é inesperado, seu verificador pode rejeitar o token ou expor um erro de configuração perigoso.',
      ],
    },
    {
      type: 'title',
      text: 'Casos de uso de um parser JWT durante o desenvolvimento',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Depuração frontend',
          description: 'Inspecione ID tokens e access tokens recebidos após o login para confirmar escopos, funções e claims de perfil.',
          icon: 'mdi:monitor-dashboard',
          points: ['Verificar claims de perfil', 'Confirmar escopos e funções', 'Comparar ambientes de login'],
        },
        {
          title: 'QA de API backend',
          description: 'Compare valores esperados de emissor e audiência com o token realmente enviado no cabeçalho Authorization.',
          icon: 'mdi:api',
          highlight: true,
          points: ['Validar formato da audiência', 'Identificar incompatibilidades de emissor', 'Inspecionar bearer tokens'],
        },
        {
          title: 'Configuração de provedor de identidade',
          description: 'Verifique se as claims do Auth0, Azure AD, Cognito, Keycloak ou um provedor personalizado estão formatadas como sua aplicação espera.',
          icon: 'mdi:account-key',
          points: ['Revisar dados do tenant', 'Verificar claims personalizadas', 'Comparar mapeamentos do provedor'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Erros comuns de JWT que este inspetor torna óbvios',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Verificações rápidas versus decisões de confiança',
      items: [
        {
          pro: 'Veja tokens malformados imediatamente.',
          con: 'Não pode saber sua audiência ou emissor esperados.',
        },
        {
          pro: 'Converta claims de timestamp Unix em datas legíveis.',
          con: 'Não pode verificar uma assinatura sem o material de chave real.',
        },
        {
          pro: 'Identifique valores ausentes de emissor, audiência, assunto ou tipo.',
          con: 'Não pode provar que escopos e funções são seguros para sua aplicação.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Fluxo de trabalho de melhores práticas',
      items: [
        'Decodifique o token para entender o que o cliente ou API realmente recebeu.',
        'Verifique exp, nbf, iss, aud, sub e alg antes de buscar lógica de aplicação.',
        'Verifique assinaturas e decisões de confiança apenas em sua camada de autenticação.',
        'Evite compartilhar JWTs de produção sensíveis em tickets, logs ou capturas de tela.',
      ],
    },
  ],
};
