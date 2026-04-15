import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ColorConverterUI } from '../ui';

const slug = 'conversor-de-cores-rgb-hex-hsl';
const title = 'Conversor de Cores Online RGB HEX e HSL';
const description = 'Converta cores entre RGB, HEX e HSL instantaneamente. Gere harmonias de cores complementares e analise o contraste WCAG. 100% no lado do cliente e privado.';

const faqData = [
  {
    question: 'Como funciona o conversor de cores de RGB para HEX e HSL?',
    answer: 'A ferramenta recebe valores de Vermelho, Verde e Azul (RGB) e utiliza algoritmos matemáticos para convertê-los no seu equivalente hexadecimal (HEX) ou nos valores de Matiz, Saturação e Luminosidade (HSL). Também funciona no sentido inverso.',
  },
  {
    question: 'Por que devo usar HSL em vez de HEX nos meus designs?',
    answer: 'O formato HSL é muito mais intuitivo. Ele permite ajustar a saturação ou a luminosidade sem alterar a matiz, tornando muito mais fácil criar paletas harmônicas ou estados de botões (hover, desativado).',
  },
  {
    question: 'O que é o valor de contraste relativo?',
    answer: 'É uma métrica que indica a legibilidade do texto em relação a um fundo com base na sua luminância. O alto contraste garante que pessoas com deficiências visuais possam ler o conteúdo, seguendo as diretrizes de acessibilidade WCAG.',
  },
  {
    question: 'É seguro usar este conversor de cores online?',
    answer: 'Com certeza. Por ser 100% no lado do cliente, os dados das suas cores nunca saem do seu computador. Todo o processamento ocorre diretamente no seu navegador, garantindo privacidade e desempenho instantâneo.',
  },
];

const howToData = [
  { name: 'Selecione uma Cor', text: 'Use os seletores de Vermelho, Verde e Azul ou digite um código HEX diretamente no campo de texto.' },
  { name: 'Ajuste os Canais RGB', text: 'Mova os seletores para alterar a intensidade de cada canal e veja a atualização em tempo real.' },
  { name: 'Copie o Formato', text: 'Clique no botão Copiar ao lado do formato HEX, RGB ou HSL conforme necessário.' },
  { name: 'Explore Harmonias', text: 'Clique nas cores de harmonia (complementar, análoga, triádica) para copiá-las para a área de transferência.' },
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

const ui: ColorConverterUI = {
  labelPreview: 'Pré-visualização (clique para copiar HEX)',
  labelHarmonies: 'Harmonias de Cores',
  labelR: 'Vermelho',
  labelG: 'Verde',
  labelB: 'Azul',
  labelComp: 'Comp.',
  labelAna1: 'Análoga 1',
  labelAna2: 'Análoga 2',
  labelTri1: 'Triádica 1',
  labelTri2: 'Triádica 2',
  btnCopy: 'Copiar',
  btnCopied: 'Copiado',
  contrastLabel: 'Contraste',
  clickToCopy: 'Clique para copiar',
};

export const content: ToolLocaleContent<ColorConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Recursos de Cores e Web Design',
  bibliography: [
    { name: 'W3C: Documentação de Cores CSS', url: 'https://www.w3.org/TR/css-color-4/' },
    { name: 'MDN: Guia do Modelo de Cores HSL', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl' },
    { name: 'WebAIM: Guia de Contraste e Acessibilidade', url: 'https://webaim.org/resources/contrastchecker/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Conversor de Cores RGB para HEX e HSL para Desenvolvedores', level: 2 },
    {
      type: 'paragraph',
      html: 'No mundo do <strong>desenvolvimento frontend</strong> e do <strong>design UI/UX</strong>, o gerenciamento de cores é uma tarefa constante. Nosso <strong>conversor de cores online</strong> permite transformar valores entre <strong>HEX, RGB e HSL</strong> instantaneamente e com precisão matemática.',
    },
    { type: 'title', text: 'Formatos de Cores: HEX, RGB e HSL', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>HEX (Hexadecimal):</strong> O padrão de fato para CSS. Compacto e fácil de compartilhar no código.',
        '<strong>RGB (Vermelho, Verde, Azul):</strong> Baseado no sistema de luz aditiva. Ideal para manipular canais diretamente ou aplicar transparência com RGBA.',
        '<strong>HSL (Matiz, Saturação, Luminosidade):</strong> O formato mais intuitivo. Ajuste matiz, saturação e luminosidade para criar paletas harmônicas.',
      ],
    },
    { type: 'title', text: 'Contraste e Acessibilidade WCAG', level: 3 },
    {
      type: 'paragraph',
      html: 'A calculadora inclui uma medição de <strong>contraste relativo</strong> baseada na luminância. Isso ajuda você a cumprir as diretrizes <strong>WCAG</strong>, garantindo que o seu texto seja legível em relação aos fundos selecionados.',
    },
    { type: 'title', text: 'Harmonias de Cores Automáticas', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Complementar:</strong> A cor oposta na roda de cores, ideal para contraste máximo.',
        '<strong>Análoga:</strong> Cores adjacentes que criam transições suaves e harmônicas.',
        '<strong>Triádica:</strong> Três cores equidistantes para composições vibrantes e equilibradas.',
      ],
    },
  ],
};
