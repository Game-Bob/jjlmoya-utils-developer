import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicalTypographyUI } from '../ui';

const slug = 'escala-tipografica-musical';
const title = 'Escala Tipográfica Musical. Calculadora de Escala Modular';
const description =
  'Ferramenta online gratuita para criar hierarquias visuais harmoniosas usando escalas modulares baseadas em proporções musicais. Gera variáveis CSS prontas para usar no seu design web.';

const faqData = [
  { question: 'O que é uma escala tipográfica modular?', answer: 'É um método para determinar tamanhos de fonte com base em uma proporção matemática constante. Assim como na música, onde as notas têm relações harmônicas, a escala modular cria uma hierarquia visual equilibrada e previsível.' },
  { question: 'Por que usar intervalos musicais para design?', answer: 'Intervalos musicais são proporções que o cérebro humano percebe como harmoniosas. Aplicá-los a tamanhos de texto cria uma estrutura visual que parece correta e profissional, em vez de escolher tamanhos aleatoriamente.' },
  { question: 'Qual é a Razão Dourada em tipografia?', answer: 'É a proporção 1.618, conhecida como a Seção Dourada. Ela cria escalas muito dramáticas e elegantes, onde cada passo da hierarquia cresce exponencialmente. Perfeita para portfólios ou sites focados em arte.' },
  { question: 'Como implemento a escala no meu arquivo CSS?', answer: 'A ferramenta gera variáveis CSS (tokens) no formato :root { --step-N: Xrem; }. Copie-as para seu arquivo CSS principal e use-as com var(--step-N) para manter consistência tipográfica em seu site.' },
];

const howToData = [
  { name: 'Defina o tamanho base', text: 'Digite o tamanho da fonte para seu texto de corpo (geralmente 16px), que servirá como nota fundamental de sua escala.' },
  { name: 'Escolha o intervalo', text: 'Selecione uma proporção musical para determinar quanto espaço existe entre diferentes níveis de título.' },
  { name: 'Visualize a hierarquia', text: 'Veja em tempo real como os níveis tipográficos se comportam para verificar se a harmonia visual se ajusta ao seu projeto.' },
  { name: 'Exporte o código', text: 'Clique em Copiar Variáveis CSS para obter o bloco pronto para colar diretamente em seu fluxo de trabalho.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowToThing> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'DesignApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pt',
};

const ui: MusicalTypographyUI = {
  labelConfig: 'Configuração',
  labelBaseSize: 'Tamanho Base (px)',
  hintBaseSize: 'Seu tamanho de texto de parágrafo (geralmente 16px).',
  labelRatio: 'Escala Musical (Razão)',
  hintRatio: 'Determina quanto o tamanho cresce em cada etapa.',
  labelCalculated: 'Valores Calculados',
  labelPreview: 'Visualizar',
  btnCopyCss: 'Copiar Variáveis CSS',
  feedbackCopied: 'Variáveis copiadas para a área de transferência!',
  previewText: 'Tipografia Musical',
  previewSubtext: 'Uma escala harmônica perfeita para seu design.',
  ratioSecundaMenor: 'Segunda Menor',
  ratioSegundaMayor: 'Segunda Maior',
  ratioTerceraMenor: 'Terça Menor',
  ratioTerceraMayor: 'Terça Maior',
  ratioCuartaPerfecta: 'Quarta Perfeita',
  ratioCuartaAumentada: 'Quarta Aumentada',
  ratioQuintaPerfecta: 'Quinta Perfeita',
  ratioProporcionAurea: 'Razão Dourada',
  ratioSextaMayor: 'Sexta Maior',
  ratioSeptimaMenor: 'Sétima Menor',
  ratioSeptimaMayor: 'Sétima Maior',
  ratioOctava: 'Oitava',
};

export const content: ToolLocaleContent<MusicalTypographyUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências',
  bibliography: [
    { name: 'Bringhurst, R. The Elements of Typographic Style', url: 'https://en.wikipedia.org/wiki/The_Elements_of_Typographic_Style' },
    { name: 'Brown, T. More Meaningful Typography. A List Apart', url: 'https://alistapart.com/article/more-meaningful-typography/' },
    { name: 'Physics of Music. Musical Intervals and Scales', url: 'https://es.scribd.com/document/199729396/Physics-of-Music-Notes' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'A Harmonia Invisível do Web Design', level: 2 },
    { type: 'paragraph', html: 'A <strong>Escala Tipográfica Musical</strong> aplica a matemática de intervalos musicais ao design tipográfico. Assim como uma composição musical é regida por proporções precisas, um design sólido se beneficia de uma estrutura matemática que relaciona todos os tamanhos.' },
    { type: 'title', text: 'Como a escala modular funciona', level: 3 },
    { type: 'grid', columns: 2 },
    { type: 'card', title: 'A fórmula', html: '<p>A progressão é simples: <code>Size = Base × Ratio<sup>n</sup></code>. Etapa 0 é seu texto base. Etapa 1 é um pequeno subtítulo. Etapa 4 ou 5 pode ser seu H1 principal. A mesma constante multiplicadora (a razão) garante que todas as relações sejam consistentes.</p>' },
    { type: 'card', title: 'Por que "Musical"', html: '<p>Os pitagóricos descobriram que dividir uma corda em proporções simples (1:2, 2:3, 3:4) produz sons consonantes. Esses intervalos, oitava, quinta perfeita e quarta perfeita, são exatamente as razões tipográficas. Você está compondo música visual.</p>' },
    { type: 'title', text: 'Escolhendo a razão certa', level: 3 },
    { type: 'tip', html: 'Para interfaces densas (painéis, tabelas) use razões pequenas como <code>1.125</code> ou <code>1.2</code>. Para sites editoriais ou de portfólio, use razões mais expressivas como <code>1.5</code> ou <code>1.618</code>.' },
    { type: 'paragraph', html: 'Não limite a escala apenas a <code>font-size</code>. As mesmas variáveis CSS funcionam para <code>margin</code>, <code>padding</code> e <code>gap</code>. Quando o espaço em branco segue a mesma progressão matemática que o texto, o design atinge um nível de coesão que todos sentem mas poucos conseguem explicar.' },
  ],
};
