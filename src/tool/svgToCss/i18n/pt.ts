import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgToCssUI } from '../ui';

const slug = 'conversor-svg-para-css';
const title = 'Conversor Gratuito Online de SVG para CSS e Data URI';
const description =
  'Transforme seus ícones e vetores SVG em código CSS (Background ou Mask) ou Data URI compactado. Otimize o desempenho do seu site eliminando solicitações HTTP externas.';

const faqData = [
  {
    question: 'É melhor usar um Data URI ou um arquivo .svg externo?',
    answer:
      'Depende do caso de uso. Os Data URIs eliminam solicitações HTTP (ideal para ícones pequenos), mas aumentam o tamanho do arquivo CSS. Para ilustrações grandes ou ricas em detalhes, um arquivo externo é preferível.',
  },
  {
    question: 'Como faço para alterar a cor de um SVG incorporado no CSS?',
    answer:
      "A melhor maneira é via 'mask-image'. Definindo o SVG como uma máscara, você pode usar 'background-color' para alterar sua cor dinamicamente, inclusive em estados :hover.",
  },
  {
    question: 'Quais navegadores suportam CSS Masks?',
    answer:
      'Todos os navegadores modernos (Chrome, Firefox, Safari, Edge) têm suporte total. Para navegadores mais antigos, os prefixos -webkit- são comumente usados.',
  },
  {
    question: 'O uso de Data URIs afeta o SEO?',
    answer:
      'Sim, positivamente. Ao reduzir o número de solicitações necessárias para renderizar a página, melhora o tempo de carregamento (LCP) e as pontuações do Core Web Vitals.',
  },
  {
    question: 'Posso usá-lo em frameworks como React ou Tailwind?',
    answer:
      'Com certeza! Você pode copiar o código gerado e usá-lo em seus arquivos .css ou até mesmo como valores arbitrários no Tailwind CSS.',
  },
];

const howToData = [
  {
    name: 'Cole o SVG',
    text: 'Copie o código-fonte do seu arquivo SVG e cole-o na área de texto à esquerda.',
  },
  {
    name: 'Escolha o tipo de saída',
    text: 'Selecione entre Imagem de Fundo (para fundos estáticos), Máscara CSS (para ícones com cor dinâmica) ou Apenas Data URI (para uso direto).',
  },
  {
    name: 'Copie o resultado',
    text: 'Clique em "Copiar" para levar o código CSS gerado para sua área de transferência.',
  },
  {
    name: 'Aplique no seu projeto',
    text: 'Cole o código em sua folha de estilo ou componente CSS. Para Máscaras, adicione também background-color para definir a cor do ícone.',
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

const ui: SvgToCssUI = {
  labelPasteTitle: 'Colar SVG',
  labelInputArea: 'Código Fonte do SVG',
  labelPreviewOriginal: 'Visualização Original',
  labelResultTitle: 'Resultado CSS',
  labelPreviewApplied: 'Resultado Aplicado',
  tabBackground: 'Imagem de Fundo',
  tabMask: 'Máscara CSS / Webkit',
  tabUri: 'Apenas Data URI',
  btnCopy: 'Copiar',
  btnCopied: 'Copiado!',
  placeholder: '<svg xmlns="http://www.w3.org/2000/svg" ...',
};

export const content: ToolLocaleContent<SvgToCssUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências e Documentação',
  bibliography: [
    {
      name: 'CSS-Tricks: Usando SVG como Fundo',
      url: 'https://css-tricks.com/using-svg/',
    },
    {
      name: 'MDN Web Docs: mask-image',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image',
    },
    {
      name: 'MDN Web Docs: background-image',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-image',
    },
    {
      name: 'W3C: CSS Masking Module Level 1',
      url: 'https://www.w3.org/TR/css-masking-1/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Por que Converter SVG para CSS Data URI?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'No desenvolvimento web moderno, otimizar o desempenho e o carregamento de recursos é essencial. Incorporar ícones diretamente no CSS via <strong>Data URIs</strong> elimina solicitações HTTP desnecessárias, reduzindo a latência e melhorando o Tempo para Interatividade (TTI).',
    },
    {
      type: 'paragraph',
      html: 'Esta ferramenta transforma o código vetorial <code>&lt;svg&gt;</code> em uma sequência de texto codificada que o navegador pode interpretar como uma imagem de fundo ou uma máscara de recorte, mantendo a escalabilidade infinita e a nitidez característica dos vetores.',
    },
    {
      type: 'title',
      text: 'Principais Benefícios Técnicos',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Zero Solicitações HTTP:</strong> Ao incorporar o gráfico em seus arquivos <code>.css</code>, o navegador não precisa baixar arquivos externos adicionais.',
        '<strong>Personalização via Máscara CSS:</strong> Usando a técnica <code>mask-image</code>, você pode alterar a cor de um ícone vetorial complexo apenas usando <code>background-color</code>.',
        '<strong>Renderização Imediata:</strong> Você evita a oscilação de conteúdo (FOUC), pois os recursos visuais críticos estão disponíveis assim que a folha de estilo é baixada.',
      ],
    },
    {
      type: 'title',
      text: 'Máscaras CSS vs Fundos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Muitos desenvolvedores simplesmente usam <code>background-image</code> para incorporar vetores, mas isso tem uma limitação: você não pode alterar a cor do SVG dinamicamente pelo CSS.',
    },
    {
      type: 'paragraph',
      html: 'Nossa ferramenta suporta a geração de código para <strong>Máscaras CSS</strong>. Ao aplicar uma <code>mask-image</code> com o Data URI gerado, o ícone atua como um estêncil, permitindo que o <code>background-color</code> do elemento defina a cor final do ícone. É a maneira mais profissional e flexível de gerenciar ícones no Astro, Next.js ou qualquer framework moderno.',
    },
  ],
};
