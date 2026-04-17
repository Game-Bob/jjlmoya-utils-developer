import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GeneradorSecurityTxtUI } from '../ui';

const slug = 'gerador-security-txt';
const title = 'Gerador Security.txt RFC 9116';
const description = 'Crie seu arquivo security.txt profissional para facilitar a divulgação de vulnerabilidades e cumprir padrões internacionais de segurança da web.';

const faqData = [
  {
    question: 'O que é o arquivo security.txt?',
    answer: 'É um padrão (RFC 9116) que permite que os sites definam como os pesquisadores de segurança devem contatá-los para relatar vulnerabilidades de forma responsável.',
  },
  {
    question: 'Onde o arquivo security.txt deve ser colocado?',
    answer: 'O local padrão recomendado é na pasta /.well-known/ do seu domínio, resultando na URL https://example.com/.well-known/security.txt.',
  },
  {
    question: 'Por que a data de expiração é obrigatória?',
    answer: 'Para garantir que as informações de contato não se tornem desatualizadas. Se o arquivo não tiver uma data de expiração válida, os pesquisadores podem não confiar que os canais de comunicação permaneçam ativos.',
  },
  {
    question: 'Quais campos são obrigatórios em um security.txt?',
    answer: 'De acordo com RFC 9116, os campos obrigatórios são "Contact" (com um endereço de e-mail ou URL) e "Expires" (com uma data futura em formato ISO 8601).',
  },
];

const howToData = [
  { name: 'Preencha os campos', text: 'Complete seu endereço de e-mail ou URL de contato e selecione uma data de expiração.' },
  { name: 'Adicione campos opcionais', text: 'Inclua informações adicionais como sua chave PGP, política de segurança ou quadro de vagas.' },
  { name: 'Baixe ou copie o arquivo', text: 'Clique em "Download .txt" ou copie o conteúdo e salve como security.txt.' },
  { name: 'Envie para o servidor', text: 'Coloque o arquivo na pasta /.well-known/ do seu domínio.' },
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
  inLanguage: 'pt',
};

const ui: GeneradorSecurityTxtUI = {
  titleBasicFields: 'Campos obrigatórios',
  labelContact: 'Contato (e-mail ou URL)',
  placeholderContact: 'mailto:security@example.com ou https://example.com/contact',
  contactTip: 'Endereço para onde os relatórios de vulnerabilidades devem ser enviados.',
  labelExpires: 'Data de expiração',
  expiresTip: 'Não deve exceder um ano no futuro.',
  titleOptionalFields: 'Campos opcionais',
  labelEncryption: 'Chave pública',
  placeholderEncryption: 'https://example.com/pgp-key.txt',
  encryptionTip: 'Link para sua chave PGP para relatórios criptografados.',
  labelPolicy: 'Política de segurança',
  placeholderPolicy: 'https://example.com/security/policy/',
  policyTip: 'Página detalhando como você lida com vulnerabilidades.',
  labelAcknowledgments: 'Reconhecimentos',
  placeholderAcknowledgments: 'https://example.com/security/hall-of-fame/',
  acknowledgmentsTip: 'Página agradecendo pesquisadores de segurança.',
  labelHiring: 'Quadro de vagas',
  placeholderHiring: 'https://example.com/jobs',
  hiringTip: 'Link para aberturas de empregos em segurança.',
  resultTitle: 'Visualização(security.txt)',
  btnCopy: 'Copiar código',
  btnDownload: 'Download .txt',
  copiedMessage: 'Copiado',
  generatingMessage: 'Gerando arquivo security.txt...',
  comment: 'Gerado',
};

export const content: ToolLocaleContent<GeneradorSecurityTxtUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Perguntas frequentes',
  faq: faqData,
  bibliographyTitle: 'Recursos técnicos sobre Security.txt',
  bibliography: [
    { name: 'RFC 9116: A File Format to Aid in Security Vulnerability Disclosure', url: 'https://datatracker.ietf.org/doc/html/rfc9116' },
    { name: 'Security.txt Official Website', url: 'https://securitytxt.org/' },
    { name: 'OWASP: Vulnerability Disclosure Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'O que é um arquivo Security.txt e por que você precisa gerar um?', level: 2 },
    {
      type: 'paragraph',
      html: 'Na atual paisagem de segurança cibernética, a transparência e a comunicação são essenciais. Se você é um administrador de sistema, desenvolvedor web ou proprietário de negócios digitais, provavelmente já está familiarizado com arquivos de texto que ajudam máquinas a entender seu site, como <code>robots.txt</code> ou <code>ads.txt</code>. No entanto, existe um padrão menos conhecido, mas vital para a integridade da sua plataforma: <strong>Security.txt</strong>, definido pela <strong>RFC 9116</strong>.',
    },
    {
      type: 'paragraph',
      html: 'O propósito de <strong>gerar um arquivo security.txt</strong> é fornecer aos pesquisadores de segurança um método padronizado para entrar em contato com os administradores do seu site ao descobrir uma vulnerabilidade. Sem este arquivo, um hacker ético que encontre uma falha no seu sistema pode não saber a quem relatar, o que frequentemente resulta em informações serem perdidas, publicadas sem aviso ou exploradas por atores maliciosos.',
    },
    { type: 'title', text: 'Como criar e instalar o arquivo Security.txt seguindo RFC 9116', level: 2 },
    {
      type: 'paragraph',
      html: 'O <strong>padrão de contato do pesquisador de segurança</strong> determina que este arquivo deve residir em um local específico do seu servidor: a pasta <code>/.well-known/</code>. Portanto, o caminho final é geralmente <code>https://yourdomain.com/.well-known/security.txt</code>. Embora seja permitido colocá-lo na raiz (<code>/security.txt</code>), a primeira opção é preferida por ferramentas de varredura automática.',
    },
    { type: 'title', text: 'Campos obrigatórios que você não pode perder', level: 3 },
    {
      type: 'paragraph',
      html: 'Ao <strong>obter seu código security.txt</strong>, você deve garantir que inclua pelo menos dois elementos críticos:',
    },
    {
      type: 'list',
      items: [
        '<strong>Contact:</strong> O endereço de e-mail ou URL de um formulário para onde os relatórios devem ser enviados. Deve começar com <code>mailto:</code> ou <code>https://</code>.',
        '<strong>Expires:</strong> Uma data em formato ISO 8601 que indica quando as informações do arquivo não são mais válidas. Recomenda-se não definir uma data mais de um ano no futuro.',
      ],
    },
    { type: 'code', text: 'Contact: mailto:security@yourcompany.com\nExpires: 2025-12-31T23:59:59.000Z' },
    { type: 'title', text: 'Campos opcionais para segurança avançada', level: 3 },
    {
      type: 'paragraph',
      html: 'Para sites que buscam <strong>proteção mais robusta</strong>, o padrão oferece campos adicionais:',
    },
    {
      type: 'list',
      items: [
        '<strong>Encryption:</strong> Um link para sua chave pública PGP para que os pesquisadores possam enviar informações criptografadas e seguras.',
        '<strong>Policy:</strong> Um link para sua página de política de segurança onde você explica o processo de divulgação responsável.',
        '<strong>Acknowledgments:</strong> Um link para seu "Hall da Fama" ou mural de apreciação para pesquisadores.',
        '<strong>Hiring:</strong> Um link para suas aberturas de empregos em segurança cibernética.',
      ],
    },
    { type: 'title', text: 'Benefícios do uso de nosso gerador Security.txt gratuito', level: 2 },
    {
      type: 'paragraph',
      html: 'Muitas pessoas se perguntam <strong>como obter rapidamente o contato de segurança de um site</strong>. Ao usar nossa ferramenta, você garante conformidade rigorosa com o formato RFC 9116 sem precisar ler documentos técnicos complexos.',
    },
    {
      type: 'paragraph',
      html: 'Usar um gerador economiza erros de sintaxe comum. Por exemplo, esquecer o prefixo <code>mailto:</code> ou formatar incorretamente o fuso horário na data de expiração pode fazer com que as ferramentas automáticas dos pesquisadores ignorem seu arquivo.',
    },
    { type: 'title', text: 'Impacto no SEO e reputação web', level: 3 },
    {
      type: 'paragraph',
      html: 'Embora o arquivo <code>security.txt</code> não seja um fator de classificação direto no Google como velocidade da página ou HTTPS, ele tem um impacto indireto. Um site que gerencia bem as vulnerabilidades evita hackers barulhentos (falsificação, injeção de spam) que destroem o SEO em poucas horas. Além disso, muitas plataformas de classificação de segurança corporativas (como SecurityScorecard ou BitSight) concedem pontos extras para domínios que implementam este padrão.',
    },
    { type: 'title', text: 'Conclusão: Uma etapa simples para a web mais segura', level: 2 },
    {
      type: 'paragraph',
      html: 'Em resumo, <strong>baixar security.txt</strong> e enviá-lo para seu servidor é uma das tarefas de manutenção de segurança mais rápidas e eficazes que você pode executar hoje. Você facilita para os "rapazes bons", desencoraja os curiosos e mostra ao mundo que leva a privacidade dos usuários e dados a sério.',
    },
    {
      type: 'paragraph',
      html: 'Não espere até uma violação de segurança para se arrepender de não ter fornecido. Use nosso <strong>gerador security.txt online gratuito</strong> agora e mantenha controle do seu ecossistema digital.',
    },
  ],
};

