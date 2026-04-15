import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AspectRatioUI } from '../ui';

const slug = 'calculadora-proporcao-tela';
const title = 'Calculadora de Proporção (Aspect Ratio) em Pixels. Proporções Online';
const description =
  'Calcule novas resoluções de imagem, vídeo e web design mantendo a proporção exata para evitar distorções gráficas. Suporta 16:9, 4:3, 21:9 e formatos personalizados.';

const faqData = [
  {
    question: 'O que é Aspect Ratio (Proporção)?',
    answer:
      'O Aspect Ratio descreve a relação geométrica entre a largura e a altura de uma imagem ou tela. É representado por dois números separados por dois pontos (ex: 16:9), indicando como a altura muda proporcionalmente em relação à largura.',
  },
  {
    question: 'Por que é importante manter as proporções corretas?',
    answer:
      'Ignorar o Aspect Ratio causa imagens achatadas ou esticadas, barras pretas indesejadas (letterboxing) em vídeos e componentes web que quebram seu layout em diferentes tamanhos de tela. Manter as proporções corretas é fundamental para uma exibição profissional.',
  },
  {
    question: 'Como calculo a altura a partir da largura com uma determinada proporção?',
    answer:
      'A fórmula é: Altura = Largura × (Altura da Proporção / Largura da Proporção). Por exemplo, para uma largura de 1280px com uma proporção de 16:9, a altura seria: 1280 × (9/16) = 720px.',
  },
  {
    question: 'Qual é o Aspect Ratio padrão para vídeos do YouTube?',
    answer:
      '16:9 é a proporção padrão para o YouTube e a maioria das plataformas de vídeo modernas. Corresponde a resoluções como 1280×720 (HD), 1920×1080 (Full HD) ou 3840×2160 (4K UHD).',
  },
  {
    question: 'Qual Aspect Ratio os vídeos verticais das redes sociais usam?',
    answer:
      '9:16, que é exatamente o inverso do formato widescreen. É a proporção nativa do TikTok, Instagram Reels e YouTube Shorts, originada do consumo de conteúdo em smartphones na vertical.',
  },
];

const howToData = [
  {
    name: 'Insira a proporção original',
    text: 'Insira os valores de largura e altura da proporção que deseja manter (ex: 16 e 9 para widescreen) ou selecione um dos modelos prontos.',
  },
  {
    name: 'Ajuste a escala',
    text: 'Altere o valor da largura ou altura na seção "Escala Real". A ferramenta calculará automaticamente o valor oposto para manter a proporção.',
  },
  {
    name: 'Verifique a visualização',
    text: 'O painel de pré-visualização mostra a forma resultante em escala proporcional, com a proporção simplificada e a resolução calculada.',
  },
  {
    name: 'Aplique no seu projeto',
    text: 'Copie os valores calculados para usar no seu CSS (aspect-ratio: 16 / 9), na exportação de vídeos ou nas configurações da sua ferramenta de design.',
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

const ui: AspectRatioUI = {
  labelConfig: 'Configuração',
  labelRatio: 'Proporção Original',
  labelWidth: 'Largura',
  labelHeight: 'Altura',
  labelScale: 'Escala Real',
  labelPixelWidth: 'Pixels (Largura)',
  labelPixelHeight: 'Pixels (Altura)',
  labelPreview: 'Visualização Proporcional',
  labelStatus: 'Proporção Perfeita',
  labelOffline: 'Ferramenta 100% Offline',
};

export const content: ToolLocaleContent<AspectRatioUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências e Documentação',
  bibliography: [
    {
      name: 'MDN Web Docs: aspect-ratio (CSS)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio',
    },
    {
      name: 'Wikipedia: Aspect ratio',
      url: 'https://pt.wikipedia.org/wiki/Proporção_de_tela',
    },
    {
      name: 'W3C: CSS Box Sizing Level 4',
      url: 'https://www.w3.org/TR/css-sizing-4/#aspect-ratio',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'O que é Aspect Ratio?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'No design gráfico, na fotografia e no desenvolvimento frontend, o <strong>Aspect Ratio</strong> descreve a relação geométrica entre a largura e a altura de uma imagem, tela ou contêiner. É normalmente representado por dois números separados por dois pontos (ex: <code>16:9</code>), indicando como a altura aumenta proporcionalmente em resposta à sua largura.',
    },
    {
      type: 'paragraph',
      html: 'O tratamento incorreto das proporções é uma causa comum de fotografias achatadas, vídeos com cortes inesperados (letterboxing) ou componentes web que quebram seu layout quando visualizados progressivamente de dispositivos móveis a monitores ultra-wide.',
    },
    {
      type: 'title',
      text: 'Proporções Comuns na Indústria',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dependendo da sua disciplina, você lidará constantemente com um número limitado de proporções padrão globais:',
    },
    {
      type: 'list',
      items: [
        '<strong>16:9 (Widescreen):</strong> O formato absolutamente dominante para monitores modernos, TVs, gravações do YouTube ou resoluções padrão de alta definição (como 1920×1080 ou 4K).',
        '<strong>9:16 (Vertical):</strong> Originado do consumo nativo de conteúdo móvel (TikTok, Instagram Reels, YouTube Shorts). Exatamente a mesma proporção dos vídeos widescreen, mas com a rotação física do dispositivo aplicada.',
        '<strong>4:3 (Clássico / Vintage):</strong> Presente em televisores e monitores antigos ou em modelos de câmeras analógicas e digitais especializadas. Sua aparência ligeiramente quadrada atrai a atenção direta para o eixo composicional central.',
      ],
    },
    {
      type: 'title',
      text: 'Desenvolvimento Web e a propriedade CSS aspect-ratio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Antigamente no CSS, sistemas matemáticos complexos usando um <strong>Padding Hack</strong> (como a injeção de um <code>padding-top: 56.25%</code>) eram usados para reservar espaços dinâmicos em iframes do YouTube ou imagens de capa, para evitar o terrível Cumulative Layout Shift (CLS) no carregamento da página.',
    },
    {
      type: 'paragraph',
      html: 'Hoje em dia, todos os layouts modernos aplicam diretamente propriedades como <code>aspect-ratio: 16 / 9;</code>, obtendo um código semântico e permitindo que o navegador derive automaticamente a dimensão ausente a partir da largura original definida via Grid ou Flexbox.',
    },
    {
      type: 'paragraph',
      html: 'Esta calculadora de pixels local transfere o poder do design para um cálculo de escala instantâneo que protegerá seus renders de desconfigurações catastróficas.',
    },
  ],
};
