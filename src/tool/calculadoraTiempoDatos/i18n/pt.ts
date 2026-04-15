import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CalculadoraTiempoDatosUI } from '../ui';

const slug = 'calculadora-tempo-dados-impacto-velocidade-web';
const title = 'Calculadora de Tempo de Dados: Impacto da Velocidade Web';
const description = 'Descubra quanto tempo de vida os seus usuários perdem esperando o carregamento do seu website em conexões 3G, 4G e 5G. Calcule o impacto real do peso do seu site.';

const faqData = [
  {
    question: 'Por que é importante saber o tempo de carregamento do meu website?',
    answer: 'Porque impacta diretamente a experiência do usuário, o SEO e as conversões. O Google documentou que cada segundo de atraso reduz as conversões em 7%. Além disso, 53% dos visitantes móveis abandonam uma página que leva mais de 3 segundos para carregar.',
  },
  {
    question: 'O que representam essas pequenas porcentagens de perda de tempo de vida?',
    answer: 'Representam a porcentagem do tempo total de vida de uma pessoa (aproximadamente 80 anos ou 2,5 bilhões de segundos) gasta esperando o carregamento da sua página. Embora pequenas individualmente, multiplicadas por milhões de usuários, representam quantidades enormes de tempo humano desperdiçado.',
  },
  {
    question: 'Qual é a velocidade média de conexão em todo o mundo?',
    answer: 'O 4G é padrão em países desenvolvidos. No entanto, milhões de usuários em países em desenvolvimento ainda dependem do 3G. É por isso que é crucial otimizar o seu site para todas as velocidades de conexão.',
  },
  {
    question: 'Quanto o meu website deve pesar?',
    answer: 'O Google recomenda que a página inicial carregue em menos de 3 segundos em uma conexão 4G típica. Para isso, um site deve idealmente pesar entre 1 e 2 MB. No entanto, a média global está próxima de 2 a 3 MB.',
  },
  {
    question: 'Como posso reduzir o peso do meu site?',
    answer: 'Estratégias principais: otimizar imagens (50-80% do peso), minificar CSS e JavaScript, usar lazy loading, implementar cache do navegador e usar uma CDN. A otimização de imagens costuma ser o fator de maior impacto.',
  },
  {
    question: 'A velocidade de carregamento afeta o ranking no Google?',
    answer: 'Sim, com certeza. O Google considera os Core Web Vitals como fatores de ranking importantes. Um site mais lento terá um ranking pior do que um mais rápido, mesmo com conteúdo semelhante.',
  },
];

const howToData = [
  { name: 'Insira o Peso do Seu Site', text: 'Use ferramentas de desenvolvedor do navegador ou o WebPageTest para encontrar o peso da sua página. Insira esse valor em MB.' },
  { name: 'Observe os Tempos de Carregamento', text: 'A calculadora mostra quantos segundos o seu site leva para carregar em 3G, 4G e 5G. Os tempos no mundo real costumam ser maiores.' },
  { name: 'Entenda o Impacto no Tempo de Vida', text: 'A porcentagem de "tempo de vida" mostra quanto da vida de alguém é gasto esperando. Use isso como motivação para otimizar.' },
  { name: 'Otimize e Recalcule', text: 'Depois de otimizar, meça novamente e recalcule. Veja como pequenas melhorias têm um grande impacto.' },
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

const ui: CalculadoraTiempoDatosUI = {
  headerTitle: 'Tempo Perdido em Redes',
  labelWebSize: 'Peso do website (MB)',
  unit: 'MB',
  presetsLabel: 'EXEMPLOS REALISTAS',
  labelSpeed: 'Velocidade de conexão',
  speedLabel3g: '3G',
  speedValue3g: '0,4 Mbps',
  speedLabel4g: '4G/LTE',
  speedValue4g: '10 Mbps',
  speedLabel5g: '5G',
  speedValue5g: '100+ Mbps',
  labelTimes: 'Quantas vezes por dia?',
  resultTitle: 'Resultados',
  resultSingleLoad: 'Carga única',
  resultDailyTotal: 'Total diário',
  resultTimePerYear: 'por ano esperando',
  resultLifeYears: 'em sua vida',
  resultMessage: 'Você perdeu aproximadamente 1 ano de vida',
  copyMessage: 'Copiado',
  preset3g: '3G',
  preset4g: '4G',
  preset5g: '5G',
};

export const content: ToolLocaleContent<CalculadoraTiempoDatosUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Recursos Técnicos sobre Otimização Web',
  bibliography: [
    { name: 'Google PageSpeed Insights', url: 'https://pagespeed.web.dev/' },
    { name: 'WebPageTest - Analise a Velocidade do Website', url: 'https://www.webpagetest.org/' },
    { name: 'Web.dev - Core Web Vitals', url: 'https://web.dev/vitals/' },
    { name: 'MDN - Desempenho Web', url: 'https://developer.mozilla.org/en-US/docs/Web/Performance' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Por que a Velocidade de Carregamento do Website é Crítica', level: 2 },
    {
      type: 'paragraph',
      html: 'Na era digital de hoje, a velocidade de carregamento do website não é um luxo, mas uma necessidade. Cada milissegundo conta para reter usuários, melhorar os rankings de busca e maximizar as conversões. Os usuários modernos esperam que as páginas carreguem em menos de 3 segundos.',
    },
    { type: 'title', text: 'Impacto na Experiência do Usuário', level: 3 },
    {
      type: 'paragraph',
      html: '53% dos visitantes móveis abandonam uma página se ela levar mais de 3 segundos para carregar. As taxas de conversão caem 7% para cada segundo adicional de latência.',
    },
    { type: 'title', text: 'Entendendo as Velocidades de Conexão', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>3G:</strong> 0,4 Mbps - Comum em áreas rurais e países em desenvolvimento',
        '<strong>4G/LTE:</strong> 10 Mbps - Padrão em países desenvolvidos',
        '<strong>5G:</strong> 100+ Mbps - Expandindo gradualmente, ainda limitado',
      ],
    },
    { type: 'title', text: 'Estratégias para Reduzir o Peso do Site', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Otimização de Imagens:</strong> Representa 50-80% do peso. Reduza de 40-60% com ferramentas como o TinyPNG.',
        '<strong>Minificação:</strong> Remova código desnecessário do CSS e JavaScript. Economize 30-50%.',
        '<strong>Lazy Loading:</strong> Carregue imagens apenas quando os usuários rolarem até elas.',
        '<strong>Cache do Navegador:</strong> Armazene arquivos estáticos nos navegadores dos usuários.',
        '<strong>CDN:</strong> Sirva conteúdo de servidores geograficamente próximos.',
      ],
    },
    { type: 'title', text: 'Conclusão: Cada Segundo Conta', level: 2 },
    {
      type: 'paragraph',
      html: 'O seu website costuma ser a primeira impressão que os usuários têm da sua marca. Um site lento frustra os usuários e faz perder negócios. Um site rápido e responsivo cria uma experiência positiva e melhora todas as suas métricas.',
    },
  ],
};
