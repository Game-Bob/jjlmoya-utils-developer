import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlEncoderDecoderUI } from '../ui';

const slug = 'codificador-url-decodificador';
const title = 'Codificador e Decodificador de URL Online';
const description =
  'Converta caracteres especiais de qualquer link para um formato seguro (Percent-Encoding) ou restaure-os instantaneamente para o estado original legível de forma local.';

const faqData = [
  {
    question: 'Quais caracteres são codificados em uma URL?',
    answer:
      'Todos os caracteres não permitidos no padrão ASCII para URLs são codificados: espaços, letras acentuadas, símbolos como &, =, +, #, ?, / e outros. Por exemplo, um espaço torna-se %20 e um ñ torna-se %C3%B1.',
  },
  {
    question: 'Qual a diferença entre encodeURI e encodeURIComponent?',
    answer:
      'O encodeURI codifica uma URL completa e mantém intactos caracteres reservados como / e ?. O encodeURIComponent codifica todos os caracteres especiais, incluindo os reservados, sendo ideal para codificar valores individuais de parâmetros de consulta.',
  },
  {
    question: 'Por que minha URL tem %20 em vez de espaços?',
    answer:
      'O protocolo HTTP não permite espaços em URLs. %20 é a representação em Percent-Encoding de um espaço de acordo com o padrão ASCII. Alguns sistemas usam o sinal + como alternativa, mas %20 é o mais universal e seguro.',
  },
  {
    question: 'É seguro usar esta ferramenta com URLs privadas?',
    answer:
      'Sim, totalmente seguro. Todo o processamento ocorre no seu navegador usando JavaScript nativo (encodeURIComponent/decodeURIComponent). Nenhuma das suas URLs ou parâmetros é enviada para qualquer servidor externo.',
  },
];

const howToData = [
  {
    name: 'Cole o texto bruto',
    text: 'Digite ou cole sua URL ou sequência de texto no campo superior "Texto Bruto (Legível)".',
  },
  {
    name: 'Codificar ou decodificar',
    text: 'Clique em "Codificar URL" para converter o texto para o formato seguro Percent-Encoding, ou em "Decodificar" para reverter uma URL codificada para sua forma legível.',
  },
  {
    name: 'Copie o resultado',
    text: 'Use o botão "Copiar" do campo correspondente para levar o resultado para sua área de transferência.',
  },
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
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
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

const ui: UrlEncoderDecoderUI = {
  labelRaw: 'Texto Bruto (Legível)',
  labelEncoded: 'URL Formatada (Codificada)',
  btnClear: 'Limpar',
  btnCopy: 'Copiar',
  btnCopied: 'Copiado!',
  btnEncode: 'Codificar URL',
  btnDecode: 'Decodificar',
  placeholderRaw: 'https://example.com/search?q=sapatos vermelhos&size=38',
  placeholderEncoded: 'https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dsapatos%20vermelhos%26size%3D38',
};

export const content: ToolLocaleContent<UrlEncoderDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências e Documentação',
  bibliography: [
    {
      name: 'MDN Web Docs: encodeURIComponent()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent',
    },
    {
      name: 'IETF RFC 3986: URI Generic Syntax',
      url: 'https://datatracker.ietf.org/doc/html/rfc3986',
    },
    {
      name: 'W3C: URL Living Standard',
      url: 'https://url.spec.whatwg.org/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'O que é Codificação de URL?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ao navegar na internet ou enviar solicitações para servidores, é comum pensar em uma URL (Uniform Resource Locator) simplesmente como um "endereço web". No entanto, o protocolo de internet dita que as URLs só podem ser transmitidas usando um conjunto muito restrito de caracteres <strong>ASCII padrão</strong>.',
    },
    {
      type: 'paragraph',
      html: 'O que acontece se a URL contiver um espaço, letras acentuadas ou parâmetros especiais como os sinais de mais (<code>+</code>) ou igual (<code>=</code>)? Para evitar que os sistemas falhem ao tentar ler caracteres ilegais, estes devem ser traduzidos para sua forma segura e compatível usando <strong>Percent-Encoding</strong>.',
    },
    {
      type: 'title',
      text: 'Como o Percent-Encoding funciona',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ao usar esta ferramenta, o algoritmo pega qualquer caractere "inseguro" (como um espaço ou uma letra acentuada como ñ) e o substitui por um sinal de porcentagem <code>%</code> seguido por dois dígitos hexadecimais correspondentes ao seu valor no padrão UTF-8.',
    },
    {
      type: 'list',
      items: [
        '<strong>Exemplo Básico:</strong> Um simples espaço será substituído por seu equivalente seguro: <code>%20</code>.',
        '<strong>Suporte Estendido:</strong> A letra <code>á</code> torna-se <code>%C3%A1</code>, e <code>ñ</code> torna-se <code>%C3%B1</code>.',
      ],
    },
    {
      type: 'title',
      text: 'Importância em APIs e solicitações GET',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ao desenvolver integrações, um erro típico é passar uma sequência bruta para parâmetros de URL. Se você inserir <code>camisa&azul</code> de forma bruta no seu backend (<code>/search?q=camisa&azul</code>), o servidor interpretará <code>azul</code> como um novo parâmetro, quebrando toda a lógica.',
    },
    {
      type: 'paragraph',
      html: 'Esta ferramenta garante cálculos limpos e automáticos com 100% de execução no seu navegador local. Nenhuma de suas sequências de URL é transmitida para servidores de terceiros, garantindo a privacidade de seus tokens e parâmetros analíticos.',
    },
  ],
};
