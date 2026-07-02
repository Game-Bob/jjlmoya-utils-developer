import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VisualCssGridFlexboxGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'gerador-visual-css-grid-flexbox';
const title = 'Gerador Visual de Layout CSS Grid & Flexbox';
const description = 'Projete layouts responsivos movendo blocos visuais, redimensionando o contêiner, ajustando o alinhamento e usando presets  -  depois copie CSS nativo limpo instantaneamente.';

const howTo = [
  { name: 'Escolha um preset ou Flexbox / Grid', text: 'Comece com um preset de layout (navbar, cards, hero, sidebar, gallery) ou alterne entre Flexbox e Grid manualmente.' },
  { name: 'Redimensione o layout', text: 'Redimensione o contêiner pelo canto inferior para testar como o design reage ao espaço disponível.' },
  { name: 'Ajuste os controles de alinhamento', text: 'Use sliders e selects para direção, wrap, espaçamento, colunas, justify-content, align-items, align-content, largura, altura e tamanho dos itens.' },
  { name: 'Copie CSS pronto para produção', text: 'Copie o CSS gerado quando o resultado visual corresponder à estrutura desejada. Sem dependências de framework.' },
];

const faq = [
  { question: 'Quando usar Flexbox em vez de CSS Grid?', answer: 'Use Flexbox para layouts unidimensionais  -  barras de navegação, grupos de botões, cards embrulhados, conteúdo centralizado. Grid quando linhas e colunas importam juntas  -  dashboards, galerias, formulários, seções estruturadas.' },
  { question: 'Este gerador pode criar layouts responsivos?', answer: 'Sim. O CSS gerado usa flex wrapping nativo ou colunas repetidas do grid. Redimensione o canvas visual para testar espaçamento e alinhamento em diferentes tamanhos.' },
  { question: 'Por que justify-content e align-items parecem diferentes em grid e flex?', answer: 'Flexbox distribui itens ao longo de um eixo principal e um transversal. Grid posiciona itens nos tracks primeiro, depois alinha o conteúdo dentro deles. Alternar entre os modos torna essa diferença imediatamente visível.' },
  { question: 'O CSS gerado está vinculado a algum framework?', answer: 'Não. O resultado é CSS nativo puro. Use em HTML simples, Astro, React, Vue, Svelte, Web Components ou qualquer projeto que aceite CSS padrão.' },
  { question: 'Para que servem os presets de layout?', answer: 'Os presets aceleram layouts comuns para ver configurações realistas sem começar do zero. Cada preset configura modo, direção, wrap, alinhamento e tamanho do contêiner para um padrão real.' },
];

const ui: VisualCssGridFlexboxGeneratorUI = {
  modeLabel: 'Modo de layout',
  flexMode: 'Flexbox',
  gridMode: 'Grid',
  canvasLabel: 'Canvas de layout interativo',
  addItem: 'Adicionar item',
  removeItem: 'Remover item',
  resetLayout: 'Restaurar layout',
  gapLabel: 'Espaçamento',
  columnsLabel: 'Colunas do grid',
  widthLabel: 'Largura do contêiner',
  heightLabel: 'Altura do contêiner',
  justifyLabel: 'Justificar',
  alignLabel: 'Alinhar',
  itemSizeLabel: 'Tamanho do item',
  codeTitle: 'CSS Gerado',
  copyCode: 'Copiar CSS',
  copied: 'Copiado!',
  dragHint: 'Redimensione o canvas pelo canto  -  o CSS atualiza ao vivo!',
  outputLabel: 'Saída CSS gerada',
  justifyStart: 'Início',
  justifyCenter: 'Centro',
  justifyEnd: 'Fim',
  justifyBetween: 'Space between',
  justifyAround: 'Space around',
  justifyEvenly: 'Space evenly',
  alignStart: 'Início',
  alignCenter: 'Centro',
  alignEnd: 'Fim',
  alignStretch: 'Esticar',
  alignBaseline: 'Linha base',
  itemPrefix: 'Bloco',
  directionLabel: 'Direção',
  directionRow: 'Linha →',
  directionRowReverse: '← Linha inv',
  directionColumn: 'Coluna ↓',
  directionColumnReverse: '↑ Col inv',
  wrapLabel: 'Quebra',
  wrapNoWrap: 'Sem quebra',
  wrapWrap: 'Com quebra',
  wrapWrapReverse: 'Quebra inv',
  alignContentLabel: 'Alinhar conteúdo',
  alignContentStart: 'Início',
  alignContentCenter: 'Centro',
  alignContentEnd: 'Fim',
  alignContentBetween: 'Space between',
  alignContentAround: 'Space around',
  alignContentEvenly: 'Space evenly',
  alignContentStretch: 'Esticar',
  presetsLabel: 'Presets',
  presetNavbar: 'Navbar',
  presetCards: 'Cards',
  presetHero: 'Hero',
  presetSidebar: 'Sidebar',
  presetGallery: 'Galeria',
  shakeLimit: 'Precisa de pelo menos 2 itens!',
  spanHint: 'Clique duplo em um item para alterar sua extensão de coluna (1-3) no modo Grid',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<VisualCssGridFlexboxGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'FAQ do gerador de layout CSS',
  faq,
  bibliographyTitle: 'Referências CSS Grid e Flexbox',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Construa layouts CSS observando o comportamento, não decorando propriedades', level: 2 },
    { type: 'paragraph', html: 'CSS Grid e Flexbox são poderosos porque descrevem relações de layout em vez de coordenadas fixas. O difícil é prever como <strong>gap</strong>, <strong>justify-content</strong>, <strong>align-items</strong>, direção, quebra, tracks e espaço disponível interagem. Este gerador transforma propriedades abstratas em um playground vivo com presets e CSS em tempo real.' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: 'Presets de layout rápidos', icon: 'mdi:view-grid-plus' }, { value: 'Ao vivo', label: 'CSS atualiza a cada mudança', icon: 'mdi:code-braces' }, { value: '0', label: 'Dependências de framework no CSS', icon: 'mdi:language-css3' }] },
    { type: 'title', text: 'Flexbox vs Grid: escolha o modelo antes de refinar o alinhamento', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: 'Flexbox', description: 'Ideal para fluxos unidimensionais onde os itens se alinham em linha ou coluna e podem quebrar naturalmente.', icon: 'mdi:format-align-justify', highlight: true, points: ['Navegação', 'Grupos de botões', 'Cards embrulhados', 'Conteúdo centralizado'] }, { title: 'CSS Grid', description: 'Ideal para estruturas bidimensionais onde linhas e colunas definem a forma da composição.', icon: 'mdi:grid', points: ['Dashboards', 'Galerias', 'Formulários', 'Seções editoriais'] }] },
    { type: 'title', text: 'O que cada controle ensina', level: 3 },
    { type: 'table', headers: ['Controle', 'Propriedade CSS', 'O que observar'], rows: [['Direção', '<code>flex-direction</code>', 'Como o eixo principal flui  -  trocar de linha para coluna muda toda a lógica.'], ['Quebra', '<code>flex-wrap</code>', 'Se os itens ficam em uma linha ou quebram para novas linhas.'], ['Espaçamento', '<code>gap</code>', 'O espaço entre itens sem margens que quebram nas bordas.'], ['Justificar', '<code>justify-content</code>', 'Como o espaço livre é distribuído ao longo do eixo principal.'], ['Alinhar', '<code>align-items</code>', 'Como os itens se posicionam no eixo transversal.'], ['Alinhar conteúdo', '<code>align-content</code>', 'Como linhas quebradas ou fileiras do grid distribuem o espaço extra.'], ['Colunas', '<code>grid-template-columns</code>', 'Quantos tracks iguais o grid cria antes dos itens passarem para outra linha.'], ['Tam. contêiner', '<code>width</code> e <code>min-height</code>', 'Como o mesmo CSS reage quando o espaço disponível muda.']] },
    { type: 'tip', title: 'Redimensione primeiro, otimize depois', html: 'Comece redimensionando o canvas para um tamanho realista. Depois ajuste espaçamento e alinhamento. Assim o CSS gerado funciona em condições reais.' },
    { type: 'title', text: 'CSS limpo que você pode adaptar', level: 3 },
    { type: 'code', ariaLabel: 'Exemplo de CSS gerado', code: '.layout-playground {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 24px;\n  justify-content: center;\n  align-items: center;\n}' },
    { type: 'diagnostic', variant: 'info', title: 'Por que o redimensionamento visual importa', html: 'Muitos bugs de layout só aparecem quando o contêiner é mais estreito, mais alto ou tem número diferente de itens. Redimensionar enquanto o CSS atualiza ao vivo ajuda a identificar quebras incômodas e escolhas de alinhamento frágeis.' },
    { type: 'summary', title: 'Workflow recomendado', items: ['Escolha um preset ou Flexbox para fluxos unidimensionais e Grid para estrutura bidimensional.', 'Redimensione o canvas antes de copiar o CSS para que o layout sobreviva a restrições realistas.', 'Use gap para espaçamento entre itens em vez de adicionar margens a cada filho.', 'Copie o CSS gerado como ponto de partida, depois adicione seletores específicos e media queries.'] },
  ],
};
