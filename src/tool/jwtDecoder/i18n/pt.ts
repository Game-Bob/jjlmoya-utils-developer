import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JwtDecoderUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'decodificador-jwt-parser-e-inspetor-de-claims';
const title = 'Decodificador JWT, Parser e Inspetor de Claims';
const description = 'Cole um JSON Web Token, decodifique seu cabecalho e payload instantaneamente, inspecione claims registradas, identifique tokens expirados e copie JSON limpo para depurar fluxos de autenticacao.';

const howTo = [
  {
    name: 'Cole o JWT',
    text: 'Copie um token de um cabecalho Authorization, cookie, entrada de log ou provedor de identidade e cole-o no campo de entrada.',
  },
  {
    name: 'Leia o cabecalho e payload decodificados',
    text: 'A ferramenta divide o token em cabecalho, payload e assinatura, depois renderiza os segmentos JSON em paineis separados para inspecao rapida.',
  },
  {
    name: 'Verifique claims importantes',
    text: 'Revise algoritmo, emissor, audiencia, assunto, data de emissao, data de validade inicial e data de expiracao sem converter manualmente timestamps Unix.',
  },
  {
    name: 'Copie os dados necessarios',
    text: 'Copie uma secao decodificada ou a saida completa quando precisar compartilhar um snapshot de depuracao higienizado com sua equipe.',
  },
];

const faq = [
  {
    question: 'Decodificar um JWT prova que o token e valido?',
    answer: 'Nao. A decodificacao apenas revela o cabecalho e o payload codificados em base64url. Um token so e confiavel depois que a assinatura, emissor, audiencia, expiracao e claims relacionadas sao validadas pela aplicacao ou provedor de identidade.',
  },
  {
    question: 'Posso usar este decodificador JWT para access tokens e ID tokens?',
    answer: 'Sim. O decodificador e util para inspecionar access tokens OAuth, ID tokens OpenID Connect, tokens de sessao e tokens servico a servico, desde que usem o formato JWT padrao de tres partes.',
  },
  {
    question: 'Por que o painel de assinatura nao verifica o token?',
    answer: 'A verificacao JWT requer o segredo correto, chave publica ou configuracao JWKS. Esta ferramenta foca intencionalmente na decodificacao e inspecao para que os desenvolvedores possam ver o conteudo do token sem fingir que uma string de assinatura visivel e prova de validade.',
  },
  {
    question: 'O que devo verificar primeiro ao depurar um JWT?',
    answer: 'Comece com exp, nbf, iss, aud e alg. A maioria dos problemas reais de producao vem de tokens expirados, desvio de relogio, valores de audiencia incorretos, URLs de emissor inesperadas ou suposicoes inseguras de algoritmo.',
  },
];

const ui: JwtDecoderUI = {
  tokenLabel: 'Token JWT',
  tokenPlaceholder: 'Cole um JWT aqui: cabecalho.payload.assinatura',
  sampleButton: 'Carregar exemplo',
  clearButton: 'Limpar',
  statusWaiting: 'Cole um token para decodificar seu cabecalho JSON, payload e claims.',
  statusValid: 'JWT decodificado com sucesso.',
  statusInvalid: 'Isso nao parece ser um JWT valido de tres partes.',
  statusExpired: 'JWT decodificado, mas a claim exp ja esta expirada.',
  statusUnsigned: 'JWT decodificado, mas nao esta assinado ou usa algoritmo none.',
  headerTitle: 'Cabecalho',
  payloadTitle: 'Payload',
  signatureTitle: 'Assinatura',
  claimsTitle: 'Claims registradas',
  copyHeader: 'Copiar cabecalho decodificado',
  copyPayload: 'Copiar payload decodificado',
  copySignature: 'Copiar assinatura',
  copyAll: 'Copiar tudo',
  copiedLabel: 'Copiado',
  invalidTokenTitle: 'JWT invalido',
  invalidTokenBody: 'Verifique se o token tem tres segmentos base64url separados por pontos.',
  invalidSegmentError: 'Verifique se o token tem tres segmentos base64url separados por pontos.',
  invalidDecodeError: 'O cabecalho ou payload nao pode ser decodificado como JSON valido.',
  emptyJson: '{}',
  signaturePresent: 'O segmento de assinatura esta presente; verifique-o em sua camada de autenticacao com a chave correta.',
  signatureMissing: 'Nenhum segmento de assinatura',
  algorithmLabel: 'Algoritmo',
  typeLabel: 'Tipo',
  issuerLabel: 'Emissor',
  subjectLabel: 'Assunto',
  audienceLabel: 'Audiencia',
  issuedAtLabel: 'Emitido em',
  notBeforeLabel: 'Valido a partir de',
  expiresAtLabel: 'Expira em',
  claimMissing: 'Nao presente',
  privacyNote: 'A decodificacao e executada no seu navegador. Nao cole segredos de producao em nenhuma ferramenta a menos que sua politica de seguranca permita.',
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
  bibliographyTitle: 'Especificacoes JWT e referencias de seguranca',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Decodifique JWTs sem perder o contexto de seguranca',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Um JSON Web Token parece compacto, mas frequentemente carrega o detalhe exato que explica uma falha de autenticacao: o algoritmo de assinatura, emissor, audiencia, assunto, data de emissao, data de validade inicial, expiracao e claims de autorizacao especificas da aplicacao. Este <strong>decodificador JWT, parser e inspetor de claims</strong> transforma os tres segmentos do token em JSON legivel para que voce possa depurar fluxos de autenticacao mais rapidamente.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Decodificado nao significa confiavel',
      html: 'Qualquer pessoa pode decodificar um JWT em base64url. A confianca comeca apenas depois que sua aplicacao verifica a assinatura com o segredo correto, chave publica ou JWKS, e entao valida emissor, audiencia, expiracao e quaisquer claims especificas do dominio. Use esta ferramenta para inspecionar dados, nao para aceitar um token como autentico.',
    },
    {
      type: 'title',
      text: 'O que cada segmento JWT revela',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Segmento', 'Conteudo tipico', 'Valor para depuracao'],
      rows: [
        ['Cabecalho', 'Algoritmo, tipo de token e ID de chave opcional', 'Mostra se o token espera HS256, RS256, ES256 ou outra estrategia de verificacao.'],
        ['Payload', 'Claims registradas e claims da aplicacao', 'Revela identidade, tenant, escopos, funcoes, expiracao e incompatibilidades de audiencia.'],
        ['Assinatura', 'Bytes de assinatura criptografica codificados como base64url', 'Confirma que um segmento de assinatura existe, mas deve ser verificado com a chave correta em outro lugar.'],
      ],
    },
    {
      type: 'title',
      text: 'Claims que geralmente explicam falhas de autenticacao',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>exp:</strong> se o token expirou, a logica de renovacao ou as configuracoes de relogio podem estar erradas.',
        '<strong>nbf:</strong> se o token ainda nao esta ativo, os relogios do servidor e do provedor de identidade podem estar dessincronizados.',
        '<strong>iss:</strong> se a URL do emissor difere da configuracao, o token pode vir do tenant ou ambiente errado.',
        '<strong>aud:</strong> se a audiencia nao corresponde ao identificador da API, o token foi emitido para outro recurso.',
        '<strong>alg:</strong> se o algoritmo e inesperado, seu verificador pode rejeitar o token ou expor um erro de configuracao perigoso.',
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
          title: 'Depuracao frontend',
          description: 'Inspecione ID tokens e access tokens recebidos apos o login para confirmar escopos, funcoes e claims de perfil.',
          icon: 'mdi:monitor-dashboard',
          points: ['Verificar claims de perfil', 'Confirmar escopos e funcoes', 'Comparar ambientes de login'],
        },
        {
          title: 'QA de API backend',
          description: 'Compare valores esperados de emissor e audiencia com o token realmente enviado no cabecalho Authorization.',
          icon: 'mdi:api',
          highlight: true,
          points: ['Validar formato da audiencia', 'Identificar incompatibilidades de emissor', 'Inspecionar bearer tokens'],
        },
        {
          title: 'Configuracao de provedor de identidade',
          description: 'Verifique se as claims do Auth0, Azure AD, Cognito, Keycloak ou um provedor personalizado estao formatadas como sua aplicacao espera.',
          icon: 'mdi:account-key',
          points: ['Revisar dados do tenant', 'Verificar claims personalizadas', 'Comparar mapeamentos do provedor'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Erros comuns de JWT que este inspetor torna obvios',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Verificacoes rapidas versus decisoes de confianca',
      items: [
        {
          pro: 'Veja tokens malformados imediatamente.',
          con: 'Nao pode saber sua audiencia ou emissor esperados.',
        },
        {
          pro: 'Converta claims de timestamp Unix em datas legiveis.',
          con: 'Nao pode verificar uma assinatura sem o material de chave real.',
        },
        {
          pro: 'Identifique valores ausentes de emissor, audiencia, assunto ou tipo.',
          con: 'Nao pode provar que escopos e funcoes sao seguros para sua aplicacao.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Fluxo de trabalho de melhores praticas',
      items: [
        'Decodifique o token para entender o que o cliente ou API realmente recebeu.',
        'Verifique exp, nbf, iss, aud, sub e alg antes de buscar logica de aplicacao.',
        'Verifique assinaturas e decisoes de confianca apenas em sua camada de autenticacao.',
        'Evite compartilhar JWTs de producao sensiveis em tickets, logs ou capturas de tela.',
      ],
    },
  ],
};
