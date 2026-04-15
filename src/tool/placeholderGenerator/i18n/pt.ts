import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PlaceholderGeneratorUI } from '../ui';

const slug = 'gerador-imagem-marcador';
const title = 'Gerador de Imagens Marcador. Mockups Web Rápidos Online';
const description =
  'Crie imagens marcador personalizadas para seus designs web. Ajuste a resolução, fundo, texto e exporte em PNG, WebP ou JPEG instantaneamente.';

const faqData = [
  {
    question: 'O que é uma imagem marcador?',
    answer:
      'Uma imagem marcador ou preenchimento é um gráfico temporário usado em design web e layout para reservar espaço onde uma imagem definitiva irá. Ajudam a visualizar a estrutura de uma página antes que o conteúdo final esteja disponível.',
  },
  {
    question: 'Posso usar qualquer resolução no gerador?',
    answer:
      'Sim, você pode inserir qualquer valor numérico para largura e altura. O gerador criará uma tela com as dimensões exatas solicitadas, perfeito para grades rígidas ou banners publicitários específicos.',
  },
  {
    question: 'Em qual formato as imagens são baixadas?',
    answer:
      'Por padrão, as imagens são geradas em WebP para compressão ideal, mas você pode escolher fazer download em PNG para manter qualidade máxima sem perda, ou JPEG para compatibilidade tradicional.',
  },
  {
    question: 'Isto é processado em algum servidor?',
    answer:
      'Não, toda a renderização de imagem é gerada instantaneamente na memória virtual (Canvas) do seu próprio navegador. É instantâneo e não requer envio de dados pela rede.',
  },
];

const howToData = [
  {
    name: 'Defina dimensões',
    text: 'Insira valores de largura e altura diretamente ou clique em um dos presets (FHD, HD, Instagram, etc.) para preenchê-los automaticamente.',
  },
  {
    name: 'Configure cores e texto',
    text: 'Escolha cores de fundo e texto usando os seletores nativos ou digitando um código hexadecimal. Opcionalmente, adicione texto personalizado para substituir o rótulo de dimensão padrão.',
  },
  {
    name: 'Selecione tipografia e formato',
    text: 'Escolha a família e tamanho da fonte. Selecione o formato de saída (WebP, PNG ou JPEG) de acordo com suas necessidades.',
  },
  {
    name: 'Baixe a imagem',
    text: 'Clique no botão Download para salvar o marcador gerado diretamente em seu dispositivo.',
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

const ui: PlaceholderGeneratorUI = {
  labelDimensions: 'Dimensões Rápidas',
  labelWidth: 'Largura (px)',
  labelHeight: 'Altura (px)',
  labelBgColor: 'Fundo',
  labelTextColor: 'Texto',
  labelCustomText: 'Texto Personalizado (Opcional)',
  placeholderCustomText: 'Ex.: Banner Hero',
  labelFontFamily: 'Tipografia',
  labelFontSize: 'Tamanho Base',
  fontSizeAuto: 'Automático',
  labelFormat: 'Formato de Saída',
  btnDownload: 'Baixar Imagem',
};

export const content: ToolLocaleContent<PlaceholderGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências e Documentação',
  bibliography: [
    {
      name: 'MDN Web Docs: HTMLCanvasElement.toDataURL()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL',
    },
    {
      name: 'MDN Web Docs: CanvasRenderingContext2D',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D',
    },
    {
      name: 'W3C: HTML Canvas 2D Context',
      url: 'https://www.w3.org/TR/2dcontext/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'A Ferramenta Definitiva para Mockups Rápidos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nos estágios iniciais de conceptualização ou layout estrutural de um site (wireframing), raramente temos o conteúdo fotográfico final. Dimensões vazias podem distorcer a visualização global do produto e esconder erros críticos de espaçamento ou proporção. Um gerador de imagens marcador resolve isto instantaneamente, permitindo injetar áreas coloridas precisamente dimensionadas.',
    },
    {
      type: 'tip',
      title: 'Design Sem Atrito',
      html: 'Integrar um espaço de exatamente 1200x800 pixels é imperativo ao construir CSS Grids. Ao fazer download de blocos de preenchimento você evita injetar CSS extra ou scripts de terceiros em seu código temporário.',
    },
    {
      type: 'title',
      text: 'A Importância de Evitar Serviços Externos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Uma prática recorrente no ecossistema frontend consiste em vincular serviços como <code>via.placeholder.com</code> ou similares diretamente nos atributos <code>src</code> do HTML. Embora teoricamente ágil através de parâmetros de URL, tem efeitos profundos que um desenvolvedor meticuloso evitaria ao máximo.',
    },
    {
      type: 'paragraph',
      html: 'Inserir um domínio remoto em cada tag de imagem de uma página em desenvolvimento aumenta requisições DNS, penaliza sistemas hot-reloading de Vite, Gulp ou Webpack e expõe acidentalmente rastros em branches que eventualmente terminam na nuvem. Usando este utilitário e gerando a imagem em seu formato preferido (WebP, PNG ou JPEG), você centraliza completamente seu protótipo em modo localhost.',
    },
    {
      type: 'title',
      text: 'Recursos-Chave do Algoritmo do Gerador',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Resolução Perfeita de Pixel:</strong> Canvas HTML5 nativo garante que a tela exportada corresponda aritmeticamente às coordenadas estipuladas pelo usuário.',
        '<strong>Autoscaling Tipográfico:</strong> Em modo Automático, o tamanho da fonte calcula a área do perímetro e número de caracteres para ajustar elegantemente o texto sem causar <em>overflows</em> indesejados.',
        '<strong>Fusão Hexadecimal:</strong> Controle de estado bidirecional entre seletores do ecossistema HTML nativo e entradas digitadas, garantindo contrastes precisos ditados por sua paleta Figma ou Penpot UI/UX.',
      ],
    },
    {
      type: 'title',
      text: 'A Arte Oculta do Wireframing Técnico',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Não há projeto monolítico ou micro frontend que não passe por estágios de fundação, especialmente quando enfrentando clientes exigentes ou Product Managers com uma visão de ferro. Facilitar iterações gráficas ágeis sem arrastar a sobrecarga de <em>assets</em> finalizados separa o desenvolvedor rápido do preso. Este gerador explora diretamente a moderna API <code>toDataURL()</code> do JS em sua máquina local para entregar um resultado de nível industrial sem processamento intermediário duvidoso.',
    },
  ],
};
