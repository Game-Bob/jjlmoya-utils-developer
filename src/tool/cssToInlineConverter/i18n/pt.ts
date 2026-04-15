import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssToInlineConverterUI } from '../ui';

const slug = 'css-converter-inline-html';
const title = 'Conversor CSS para HTML Inline. Embutidor para Emails';
const description =
  'Transforme suas folhas de estilos e classes CSS em estilos embutidos automaticamente no HTML. Ideal para newsletters, e-mails transacionais e layout web seguro.';

const faqData = [
  {
    question: 'Por que e-mails precisam de CSS inline em vez de folhas de estilos externas?',
    answer:
      'Clientes de e-mail como Outlook, Gmail ou Apple Mail filtram ou ignoram tags <link> e <style> por motivos de segurança. A única maneira garantida de um estilo ser aplicado corretamente em um e-mail é incorporá-lo diretamente no atributo style de cada elemento HTML.',
  },
  {
    question: 'O que acontece se um elemento já tiver seu próprio atributo style?',
    answer:
      'A ferramenta respeita estilos inline existentes e acrescenta as novas propriedades, simulando o comportamento em cascata do CSS: propriedades declaradas depois substituem as anteriores em caso de conflito.',
  },
  {
    question: 'Funciona com seletores complexos como :hover ou media queries?',
    answer:
      'A ferramenta processa seletores de classe, id, atributo e pseudo-classe estrutural que o DOMParser consegue resolver. Seletores dependentes de estado como :hover e media queries não podem ser embutidos (dependem do ambiente de tempo de execução) e são ignorados.',
  },
  {
    question: 'Meu HTML e CSS são enviados para algum servidor?',
    answer:
      'Não. Todo processamento acontece 100% em seu navegador usando a API nativa DOMParser. Nenhum byte de seu código sai de seu dispositivo, garantindo total privacidade para templates com conteúdo sensível.',
  },
];

const howToData = [
  {
    name: 'Cole seu HTML original',
    text: 'Escreva ou cole o HTML que deseja processar no campo "HTML Original". Pode ser um fragmento ou um documento completo.',
  },
  {
    name: 'Adicione suas regras CSS',
    text: 'Cole as classes e ids que deseja injetar no campo "Regras CSS". A ferramenta as aplica respeitando especificidade de seletores.',
  },
  {
    name: 'Converta e copie',
    text: 'Clique em "Injetar CSS no HTML". O resultado com todos os estilos embutidos aparecerá abaixo, pronto para copiar e colar em seu gerenciador de e-mail ou CMS.',
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

const ui: CssToInlineConverterUI = {
  labelHtml: 'HTML Original',
  labelCss: 'Regras CSS',
  labelOutput: 'Resultado HTML Inline',
  placeholderHtml: '<div class="my-class">Hello World</div>',
  placeholderCss: '.my-class { color: red; padding: 10px; }',
  placeholderOutput: 'Seu HTML com estilos incorporados aparecerá aqui...',
  btnConvert: 'Injetar CSS no HTML',
  btnCopy: 'Copiar Código',
  btnCopied: 'Copiado!',
  msgError: 'Erro no processamento. Verifique se seu HTML e CSS são válidos.',
};

export const content: ToolLocaleContent<CssToInlineConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências e Documentação',
  bibliography: [
    {
      name: 'Can I email: Matriz de Suporte HTML e CSS para Emails',
      url: 'https://www.caniemail.com/',
    },
    {
      name: 'MDN Web Docs: O atributo global style',
      url: 'https://developer.mozilla.org/en/docs/Web/HTML/Global_attributes/style',
    },
    {
      name: 'API DOMParser: Análise Segura no Navegador',
      url: 'https://developer.mozilla.org/en/docs/Web/API/DOMParser',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'O que é um Embutidor CSS e Por que Você Precisa de Um?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ao desenvolver aplicações web modernas, estamos acostumados a separar preocupações: HTML constrói a estrutura e um arquivo CSS externo fornece todo o styling visual. No entanto, nem todos os ambientes confiam em folhas de estilo externas ou tags globais <code>&lt;style&gt;</code>.',
    },
    {
      type: 'paragraph',
      html: 'O caso de uso mais popular e rigoroso onde CSS externo falha é <strong>Desenvolvimento de Templates de E-mail</strong>. Nestes ambientes, a única maneira confiável para uma fonte, cor ou margem render corretamente é estar aninhada diretamente na tag: <code>&lt;span style="color: red;"&gt;</code>.',
    },
    {
      type: 'title',
      text: 'O Problema CSS em Clientes de E-mail',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Clientes de e-mail como Microsoft Outlook, Apple Mail ou Gmail têm histórias notórias de seus mecanismos de renderização CSS restritivos. A maioria filtra ou descarta tags <code>&lt;link&gt;</code> ou <code>&lt;style&gt;</code> por medo de injeções de código que possam quebrar a interface de leitura.',
    },
    {
      type: 'tip',
      html: 'Para newsletters ou e-mails transacionais (recibos, confirmações de conta), usar tabelas e <em>CSS inline</em> é o padrão ouro na indústria de marketing de e-mail.',
    },
    {
      type: 'title',
      text: 'Como Esta Ferramenta Funciona em Seu Navegador',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Análise Segura:</strong> Usa a <code>API DOMParser</code> para transformar temporariamente o HTML de entrada em um DOM virtual seguro dentro de seu navegador.',
        '<strong>Simulação em Cascata:</strong> Analisa suas regras CSS, aplica pesos de especificidade a seletores e modifica os atributos <code>style</code> de elementos HTML selecionados injetando o código.',
        '<strong>100% Offline:</strong> Nenhum byte de seu código sai de seu dispositivo. Total privacidade para templates com conteúdo sensível.',
      ],
    },
  ],
};
