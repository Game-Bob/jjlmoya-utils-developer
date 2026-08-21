import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromoteThisWebsiteUI } from '../ui';
import { bibliography } from '../bibliography';

const localized = {
    slug: 'promover-este-site',
    title: 'Promover este site',
    description: 'A central de propaganda interna do jjlmoya.es em espanhol e do GameBob.dev internacional. Transforma capturas das tuas próprias páginas em imagens sociais antes de Bob achar o feed embaraçoso.',
    faqTitle: 'Promover este site sem irritar a gata',
    bibliographyTitle: 'Páginas da operação',
    faq: [
      { question: 'Para quem é esta ferramenta?', answer: 'Para promover as páginas do jjlmoya.es em espanhol e do GameBob.dev internacionalmente. Os restantes podem espreitar pela janela.' },
      { question: 'Posso colar uma captura diretamente?', answer: 'Sim. Copia uma captura e prime Ctrl+V. Ela torna-se a camada da ferramenta, porque até o conselho felino aceita provas no formato certo.' },
      { question: 'O que acontece com um URL de produção?', answer: 'A ferramenta lê o título meta, escolhe a marca e carrega a imagem Open Graph. O slug deixa finalmente de receber promoção.' },
      { question: 'Porque existem duas marcas?', answer: 'jjlmoya.es é a página espanhola e GameBob.dev é a página internacional. As gatas ignoram completamente a distinção.' },
      { question: 'As minhas imagens são carregadas?', answer: 'Não. Ficam no navegador e a composição é renderizada localmente. Só sai o PNG que descarregas de propósito.' },
    ],
    howTo: [
      { name: 'Cola uma captura', text: 'Cola com Ctrl+V uma captura do jjlmoya.es ou do GameBob.dev. O conselho quer provas do seu próprio império.' },
      { name: 'Escolhe a marca', text: 'Escolhe jjlmoya.es para espanhol ou GameBob.dev para a página internacional. A gata já é dona das instalações.' },
      { name: 'Compõe a imagem', text: 'Arrasta captura, título, logótipo, fundo e mascote até a composição parecer intencional.' },
      { name: 'Exporta o PNG', text: 'Descarrega o PNG nas dimensões escolhidas antes de Bob ficar com o mérito.' },
    ],
    seoTitle: 'A central oficial de propaganda do jjlmoya e do GameBob',
    seoIntro: 'Isto não é um compositor social genérico para alguém que acabou de descobrir a palavra branding. Existe para promover as nossas páginas jjlmoya.es e GameBob.dev enquanto as gatas supervisionam.',
    seoBody: 'Cola uma captura real ou carrega um URL de produção. A ferramenta lê o título da página em vez de adivinhar pelo slug e mantém a imagem Open Graph visível durante a composição.',
    seoTip: 'Começa por um URL de produção do jjlmoya.es ou do GameBob.dev. Se título, marca ou imagem não carregarem, o conselho culpará a rede, depois o humano e por fim as gatas.',
};
const ui: PromoteThisWebsiteUI = {
    urlLabel: 'URL do site', urlPlaceholder: 'https://www.example.com/ferramentas/exemplo/', applyUrl: 'Aplicar',
    formatLabel: 'Formato', panoramic: 'Panorâmico · 1536 × 1024', instagram: 'Instagram · 1080 × 1350', square: 'Quadrado · 1080 × 1080', story: 'Story · 1080 × 1920',
    titleLabel: 'Título', titlePlaceholder: 'Um título curto para a imagem', titleSizeLabel: 'Tamanho da fonte do título', titleBoxSizeLabel: 'Tamanho da caixa do título', titleStyleLabel: 'Estilo do título',
    brandLabel: 'Marca', brandStyleLabel: 'Estilo da marca', advancedLabel: 'Composição avançada', assetsLabel: 'Recursos', backgroundLabel: 'Fundo', toolLabel: 'Captura da ferramenta', logoLabel: 'Logótipo', mascotLabel: 'Mascote',
    layersLabel: 'Camadas', backgroundLayer: 'Fundo', toolLayer: 'Ferramenta', logoLayer: 'Logótipo', mascotLayer: 'Mascote', titleLayer: 'Título', reset: 'Repor', download: 'Descarregar PNG', activeLayer: 'Camada ativa',
    canvasHint: 'Arrasta as camadas diretamente no canvas. Cola uma captura com Ctrl+V.', pasted: 'Captura colada como camada da ferramenta.', urlApplied: 'URL aplicada. Ajusta o título e adiciona a captura que queres promover.', urlLoading: 'A ler o título da página e a imagem oficial...', urlFailed: 'Não foi possível ler essa página. Verifica o URL ou adiciona os recursos manualmente.', fileLoaded: 'Recurso carregado.',
    titlePaper: 'Papel editorial', titleRibbon: 'Fita dobrada', titleInk: 'Mancha de tinta', titlePoster: 'Cartaz noturno', titleTicket: 'Bilhete recortado', titleMarker: 'Sublinhado material', titleSplit: 'Bloco dividido', titleCapsule: 'Cápsula minimalista', titleCorner: 'Canto editorial', titleVertical: 'Acento vertical',
    brandPlain: 'Marca simples', brandPlaque: 'Placa de cerâmica', brandTicket: 'Bilhete de entrada', brandStamp: 'Carimbo de borracha', brandNeon: 'Letreiro de néon', brandRibbon: 'Fita de sinalização', brandCorner: 'Canto editorial', brandPixel: 'Bloco de píxeis', brandHalo: 'Halo suave', brandEditorial: 'Linha editorial', defaultTool: 'Cola a captura da tua ferramenta',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: localized.faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};
const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: localized.title,
  description: localized.description,
  step: localized.howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};
const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: localized.title,
  description: localized.description,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<PromoteThisWebsiteUI> = {
  slug: localized.slug,
  title: localized.title,
  description: localized.description,
  ui,
  faqTitle: localized.faqTitle,
  faq: localized.faq,
  bibliographyTitle: localized.bibliographyTitle,
  bibliography,
  howTo: localized.howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: localized.seoTitle, level: 2 },
    { type: 'paragraph', html: localized.seoIntro },
    { type: 'stats', columns: 3, items: [{ value: '2', label: ui.brandLabel, icon: 'mdi:domain' }, { value: '4', label: ui.formatLabel, icon: 'mdi:crop' }, { value: '0', label: ui.activeLayer, icon: 'mdi:cat' }] },
    { type: 'title', text: localized.title, level: 3 },
    { type: 'paragraph', html: localized.seoBody },
    { type: 'title', text: localized.faqTitle, level: 3 },
    { type: 'paragraph', html: localized.seoBody },
    { type: 'table', headers: [ui.toolLayer, ui.titleLayer, ui.brandLabel], rows: [[ui.toolLabel, ui.titleLabel, ui.logoLabel]] },
    { type: 'tip', title: localized.faqTitle, html: localized.seoTip },
  ],
};
