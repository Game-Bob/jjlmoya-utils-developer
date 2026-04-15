import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InspectorCertificadosSslUI } from '../ui';

const slug = 'inspetor-certificados-ssl-tls';
const title = 'Inspetor de Certificados SSL/TLS Online Visualizar ficheiros PEM e CRT';
const description = 'Analise ficheiros de certificados SSL (.pem, .crt, .der) localmente. Verifique datas de expiração, emissores, titulares e impressões digitais SHA-256 sem que os seus dados saiam do browser.';

const faqData = [
  {
    question: 'É seguro analisar o meu certificado SSL neste site?',
    answer: 'Absolutamente. Este utilitário funciona 100% do lado do cliente. Quando arrasta o seu ficheiro .pem ou .crt, o browser lê os dados localmente e nunca os envia para qualquer servidor. Privacidade total.',
  },
  {
    question: 'Que formatos de certificado são suportados?',
    answer: 'A ferramenta suporta os formatos mais comuns: PEM (codificado em Base64 com cabeçalhos "BEGIN CERTIFICATE") e DER (formato binário), que normalmente têm extensões .pem, .crt, .cer ou .der.',
  },
  {
    question: 'Posso ver a data de expiração de um ficheiro .crt?',
    answer: 'Sim, ao carregar o ficheiro verá imediatamente a secção "Estado de Validade", que mostra a data exata de expiração e se o certificado ainda é válido hoje.',
  },
  {
    question: 'Para que serve o emissor do certificado?',
    answer: 'O emissor (Issuer) indica qual Autoridade de Certificação (CA) validou a identidade do site. É fundamental para saber se o certificado será reconhecido pelos browsers comerciais.',
  },
  {
    question: 'Como são calculadas as impressões digitais SHA-256?',
    answer: 'São calculadas aplicando um algoritmo de hash diretamente ao conteúdo binário do certificado. Servem para verificar que o ficheiro não foi adulterado e corresponde ao que o servidor espera.',
  },
];

const howToData = [
  { name: 'Encontre o seu ficheiro', text: 'Localize o ficheiro com extensão .pem, .crt, .cer ou .der no seu computador.' },
  { name: 'Arraste e solte', text: 'Arraste simplesmente o ficheiro para a área pontilhada acima.' },
  { name: 'Veja os resultados', text: 'Instantaneamente verá quem emitiu o certificado, para quem é, quando expira e as suas impressões digitais.' },
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

const ui: InspectorCertificadosSslUI = {
  labelAnalyzeCertificate: 'Analisar Certificado',
  dragDropText: 'Arraste o seu ficheiro .pem, .crt ou .cer para aqui',
  dragDropSubtext: '(Processamento 100% local no seu browser)',
  cardStatusTitle: 'Estado de Validade',
  cardSubjectTitle: 'Titular (Subject)',
  cardIssuerTitle: 'Emissor (CA)',
  cardFingerprintsTitle: 'Impressões Digitais',
  cardTechnicalTitle: 'Detalhes Técnicos',
  labelValidityStatus: 'Estado:',
  labelExpiryDate: 'Expira em',
  labelIssueDate: 'Emitido em',
  labelSha256: 'Impressão SHA-256',
  labelSha1: 'Impressão SHA-1',
  labelSignatureAlgorithm: 'Algoritmo de Assinatura',
  labelVersion: 'Versão X.509',
  labelSerialNumber: 'Número de Série',
  labelCommonName: 'Common Name',
  labelOrganization: 'Organization',
  labelOrgUnit: 'Org. Unit',
  labelLocality: 'Locality',
  labelState: 'State/Province',
  labelCountry: 'Country',
  labelEmail: 'Email',
  statusValid: 'Válido',
  statusExpired: 'Expirado',
  errorMessageInvalid: 'Ficheiro inválido.',
  supportedFormats: '.pem, .crt, .cer, .der',
};

export const content: ToolLocaleContent<InspectorCertificadosSslUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Recursos Técnicos sobre Certificados SSL/TLS',
  bibliography: [
    { name: 'RFC 5280: Internet X.509 Public Key Infrastructure Certificate and CRL Profile', url: 'https://datatracker.ietf.org/doc/html/rfc5280' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'Mozilla: Visão geral da encriptação SSL/TLS', url: 'https://developer.mozilla.org/pt-PT/docs/Glossary/TLS' },
    { name: 'OpenSSL: Documentação do Formato de Certificado X.509', url: 'https://www.openssl.org/docs/man1.1.1/man1/x509.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'O que é um Inspetor de Certificados SSL/TLS e por que precisa de um?', level: 2 },
    {
      type: 'paragraph',
      html: 'No mundo do desenvolvimento web e da cibersegurança, os <strong>certificados SSL (Secure Sockets Layer) e TLS (Transport Layer Security)</strong> são a pedra angular da confiança digital. Um certificado digital não é mais do que um ficheiro que associa uma chave criptográfica aos dados de uma organização ou domínio. No entanto, estes ficheiros surgem frequentemente em formatos binários (.der) ou codificados em Base64 (.pem, .crt) que não são legíveis à primeira vista.',
    },
    {
      type: 'paragraph',
      html: 'O nosso <strong>Inspetor de Certificados SSL/TLS</strong> permite-lhe "abrir" estes ficheiros de forma visual e segura. Ao contrário das ferramentas que consultam um domínio público (como o popular teste da SSL Labs), este utilitário trabalha diretamente com o ficheiro que tem no seu dispositivo. É fundamental quando está a configurar servidores Nginx ou Apache, ou a carregar certificados num Load Balancer da AWS ou Google Cloud, e precisa de verificar se o ficheiro em mãos está correto antes de o enviar.',
    },
    { type: 'title', text: 'Como inspecionar um ficheiro .pem ou .crt passo a passo', level: 2 },
    {
      type: 'paragraph',
      html: 'Analisar um certificado com a nossa ferramenta é extremamente simples e não requer conhecimentos de linha de comandos (OpenSSL). Siga estes passos:',
    },
    {
      type: 'list',
      items: [
        '<strong>Encontre o seu ficheiro:</strong> Localize o ficheiro com extensão .pem, .crt, .cer ou .der no seu computador.',
        '<strong>Arraste e solte:</strong> Arraste simplesmente o ficheiro para a área pontilhada acima.',
        '<strong>Veja os resultados:</strong> Instantaneamente verá quem emitiu o certificado, para quem é, quando expira e as suas impressões digitais.',
      ],
    },
    {
      type: 'tip',
      title: 'Privacidade Total',
      html: 'O mais importante neste processo é a <strong>privacidade</strong>. O ficheiro nunca é carregado para os nossos servidores. Toda a análise da estrutura ASN.1 do certificado acontece na RAM do seu próprio browser. Segurança total para as suas chaves públicas.',
    },
    { type: 'title', text: 'Campos principais que verá ao analisar o seu certificado', level: 2 },
    {
      type: 'paragraph',
      html: 'Ao analisar o seu certificado, apresentamos as informações técnicas mais relevantes para que possa verificá-las de relance:',
    },
    {
      type: 'list',
      items: [
        '<strong>Titular (Subject):</strong> Mostra os dados do proprietário, incluindo o Common Name (CN), organização e localização.',
        '<strong>Emissor (Issuer):</strong> Identifica a Autoridade de Certificação (CA) que assinou o certificado (ex.: Let\'s Encrypt, DigiCert).',
        '<strong>Período de Validade:</strong> Mostra a data exata de emissão e a data crítica de expiração.',
        '<strong>Impressões Digitais:</strong> As impressões SHA-256 e SHA-1 servem para verificar a integridade do ficheiro.',
      ],
    },
    { type: 'title', text: 'Formatos suportados: PEM, CRT, CER e DER', level: 2 },
    {
      type: 'paragraph',
      html: 'Existem vários formatos de ficheiros de certificado e por vezes é confuso. A nossa ferramenta é compatível com os mais comuns:',
    },
    {
      type: 'list',
      items: [
        '<strong>PEM (.pem, .crt, .cer):</strong> O formato mais comum em Linux e servidores web. Começa com a linha <code>-----BEGIN CERTIFICATE-----</code>.',
        '<strong>DER (.der, .cer):</strong> O formato binário. Muito usado em ambientes Windows (Java, Active Directory) e geralmente mais difícil de ler sem ferramentas especializadas.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Mesmo que o seu ficheiro tenha uma extensão invulgar, se a estrutura interna for um certificado X.509 padrão, o nosso motor baseado em <strong>node-forge</strong> conseguirá interpretá-lo sem problemas.',
    },
    { type: 'title', text: 'Por que usar esta ferramenta em vez de OpenSSL?', level: 2 },
    {
      type: 'paragraph',
      html: 'O OpenSSL é o canivete suíço da criptografia, mas os seus comandos são difíceis de memorizar. Para ver um certificado na linha de comandos teria de escrever:',
    },
    { type: 'code', text: 'openssl x509 -in certificado.crt -text -noout' },
    {
      type: 'paragraph',
      html: 'A nossa ferramenta oferece vantagens claras para o fluxo de trabalho diário:',
    },
    {
      type: 'list',
      items: [
        '<strong>Rapidez:</strong> Não precisa de abrir o terminal nem de memorizar opções complexas.',
        '<strong>Visual:</strong> Formatamos os nomes dos campos (Locality, Organization) para serem legíveis, não abreviações como "L" ou "O".',
        '<strong>Alertas de validade:</strong> Calculamos automaticamente se o certificado é válido hoje, poupando-lhe a verificação manual das datas.',
        '<strong>Multiplataforma:</strong> Funciona em qualquer sistema operativo com um browser moderno, sem instalar dependências.',
      ],
    },
    { type: 'title', text: 'Segurança e Privacidade: o seu certificado nunca sai do browser', level: 2 },
    {
      type: 'paragraph',
      html: 'Como programador, sei o quão crítico é lidar com este tipo de informação. Embora um certificado seja tecnicamente <strong>informação pública</strong> (é enviado a qualquer browser que visita o seu site), é ainda assim boa prática não carregar ficheiros para servidores externos desnecessariamente.',
    },
    {
      type: 'paragraph',
      html: 'Este utilitário usa JavaScript que corre estritamente no cliente. Ao arrastar o ficheiro, lemos o seu conteúdo e processamos tudo localmente. Pode verificá-lo desligando a internet: a ferramenta continuará a funcionar exatamente da mesma forma.',
    },
    { type: 'title', text: 'Casos de uso comuns para o Inspetor SSL', level: 2 },
    {
      type: 'paragraph',
      html: 'Quando é que terá esta página nos favoritos a ser útil?',
    },
    {
      type: 'list',
      items: [
        '<strong>Depuração de servidor:</strong> Quando instala um certificado mas o site continua a dar erros, para verificar que não carregou por engano o certificado antigo.',
        '<strong>Verificação de cadeia:</strong> Para ver se um ficheiro contém o certificado final ou um certificado intermédio.',
        '<strong>Auditoria de ativos:</strong> Para verificar qual Autoridade de Certificação foi usada num projeto antigo.',
        '<strong>Integridade de cópias:</strong> Ao mover certificados entre servidores, para garantir que o ficheiro não está corrompido comparando a sua impressão SHA-256.',
      ],
    },
  ],
};
