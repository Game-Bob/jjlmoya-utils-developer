import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonFormatterUI } from '../ui';

const slug = 'formatador-json';
const title = 'Formatador e Validador de JSON Online Grátis';
const description =
  'Ferramenta online gratuita para formatar, validar e reparar código JSON. Embeleze e formate JSON. Detecta erros de sintaxe e melhora a legibilidade do código.';

const faqData = [
  {
    question: 'Meus dados estão seguros ao usar este formatador?',
    answer:
      'Com certeza. Todo o processamento ocorre 100% no seu navegador (Client-Side). Seus dados JSON nunca são enviados para nenhum servidor, garantindo total privacidade para suas estruturas de dados.',
  },
  {
    question: "O que causa um erro de 'JSON Inválido'?",
    answer:
      'Geralmente é causado por vírgulas extras no final de um objeto, falta de aspas duplas nas chaves ou caracteres invisíveis. Nossa ferramenta destaca a linha exata do erro para que você possa corrigi-lo.',
  },
  {
    question: 'Ele pode reparar um JSON corrompido?',
    answer:
      'Nossa ferramenta tenta corrigir automaticamente erros comuns, como vírgulas finais desnecessárias ou escapes de caracteres mal formados, para que o JSON se torne válido de acordo com o padrão RFC 8259.',
  },
  {
    question: 'Suporta arquivos JSON muito grandes?',
    answer:
      'Sim, o motor de processamento está otimizado para lidar com estruturas de dados complexas e arquivos grandes sem bloquear a interface do navegador.',
  },
];

const howToData = [
  {
    name: 'Cole seu código',
    text: 'Cole seu JSON não formatado ou minificado na área de texto principal.',
  },
  {
    name: 'Valide e Formate',
    text: 'O sistema analisará automaticamente o código, destacando erros de sintaxe e aplicando indentação para melhorar a legibilidade.',
  },
  {
    name: 'Escolha um estilo',
    text: 'Escolha entre um formato expandido (beautify) ou compactado (minify), dependendo se você precisa de legibilidade ou economia de espaço.',
  },
  {
    name: 'Copie o resultado',
    text: 'Clique no botão de copiar para levar o JSON perfeitamente validado para sua área de transferência.',
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

const ui: JsonFormatterUI = {
  labelInput: 'Entrada (JSON)',
  labelOutput: 'Saída',
  btnMinify: 'Minificar',
  btnBeautify: 'Formatar',
  btnFix: 'Tentar Reparar',
  btnCopy: 'Copiar',
  statusWaiting: 'Aguardando entrada...',
  statusValid: 'JSON Válido',
  statusInvalid: 'JSON Inválido',
  toastCopied: 'Copiado!',
  toastFixed: 'JSON reparado (Visualização)',
  toastFixFailed: 'Não foi possível reparar automaticamente',
  placeholder: 'Cole seu JSON aqui...',
};

export const content: ToolLocaleContent<JsonFormatterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências e Padrões',
  bibliography: [
    {
      name: 'RFC 8259 – The JavaScript Object Notation (JSON) Data Interchange Format (IETF)',
      url: 'https://datatracker.ietf.org/doc/html/rfc8259',
    },
    {
      name: 'ECMA-404 – The JSON Data Interchange Syntax (Ecma International)',
      url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-404/',
    },
    {
      name: 'JSON.org – Introdução ao JSON',
      url: 'https://www.json.org/json-en.html',
    },
    {
      name: 'MDN Web Docs – JSON',
      url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Validação e Formatação de JSON',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O JSON (JavaScript Object Notation) é o padrão de fato para troca de dados na web. No entanto, sua sintaxe rigorosa o torna propenso a erros humanos quando editado manualmente.',
    },
    {
      type: 'paragraph',
      html: 'Esta ferramenta permite que você valide a estrutura, formate o código para melhorar sua legibilidade e repare automaticamente erros comuns de sintaxe.',
    },
    { type: 'grid', columns: 2 },
    {
      type: 'card',
      title: 'Erros Comuns que Repara',
      html: '<ul><li><strong>Aspas Simples:</strong> O padrão JSON exige aspas duplas. A ferramenta converte <code>\'chave\': \'valor\'</code> para <code>"chave": "valor"</code>.</li><li><strong>Chaves sem Aspas:</strong> Detecta chaves de objetos no estilo JavaScript e adiciona as aspas necessárias.</li><li><strong>Vírgulas Finais:</strong> Remove vírgulas ao final de objetos ou arrays (trailing commas) que quebram o parser rigoroso.</li></ul>',
    },
    {
      type: 'card',
      title: 'Recursos',
      html: '<ul><li><strong>Destaque de Sintaxe:</strong> Colore chaves, strings, números e booleanos para facilitar a leitura rápida.</li><li><strong>Validação em Tempo Real:</strong> Indica instantaneamente se o JSON é válido ou mostra o erro específico de análise.</li><li><strong>Privacidade Total:</strong> O processamento ocorre 100% no seu navegador. Nenhum dado é enviado para servidores externos.</li></ul>',
    },
  ],
};
