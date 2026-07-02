import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SerpPixelSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'simulador-serp-contador-pixels';
const title = 'Simulador SERP e Contador de Píxeis SEO';
const description = 'Pré-visualize snippets de pesquisa ao estilo Google em tempo real, meça a largura em píxeis do título e da meta description e veja exatamente onde o seu texto será truncado.';

const howTo = [
  {
    name: 'Introduza a tag title',
    text: 'Digite ou cole o título da página que pretende testar. A pré-visualização SERP e o medidor de píxeis atualizam-se a cada tecla premida.',
  },
  {
    name: 'Adicione o URL visível',
    text: 'Use um domínio e caminho realistas para que o snippet se pareça com o resultado que um utilizador analisaria.',
  },
  {
    name: 'Escreva a meta description',
    text: 'Adicione o texto da descrição e observe a barra de píxeis. Quando excede a largura visual recomendada, a pré-visualização trunca-a com reticências.',
  },
  {
    name: 'Alterne entre desktop e mobile',
    text: 'Compare a renderização do título com a largura do cartão de desktop ou mobile antes de publicar os metadados.',
  },
];

const faq = [
  {
    question: 'Porquê contar píxeis em vez de caracteres para títulos SEO?',
    answer: 'Os cartões de resultados do Google são limitados pela largura visual. Um título com muitas letras estreitas pode conter mais caracteres do que um com letras largas, maiúsculas ou glifos de aspeto espesso. A medição em píxeis oferece uma pré-visualização mais fiel do resultado visível.',
  },
  {
    question: 'Isto garante exatamente como o Google irá truncar o meu snippet?',
    answer: 'Não. O Google pode reescrever os links de título e os snippets, e a renderização pode variar consoante a consulta, o dispositivo, o idioma e as experiências. A ferramenta foi concebida como um guia visual prático para escrever metadados com menor probabilidade de serem cortados.',
  },
  {
    question: 'Que limites de píxeis utiliza o simulador?',
    answer: 'O limite predefinido do título em desktop é de 580 px, o do título em mobile é de 600 px e o limite da meta description é de 920 px. São metas de redação, não limites oficiais do Google.',
  },
  {
    question: 'Porque é que a pré-visualização adiciona reticências?',
    answer: 'Quando o texto medido excede a largura de píxeis disponível, o simulador trunca a string no último caractere que cabe e acrescenta três pontos, reproduzindo o comportamento prático de que as equipas de SEO precisam para detetar perda de significado.',
  },
];

const ui: SerpPixelSimulatorUI = {
  titleLabel: 'Tag title',
  titlePlaceholder: 'GameBob | Estúdio de Desenvolvimento Independente',
  urlLabel: 'URL visível',
  urlPlaceholder: 'https://www.gamebob.dev/pt/',
  descriptionLabel: 'Meta description',
  descriptionPlaceholder: 'Descubra a nossa coleção de ferramentas e jogos concebidos para elevar o seu fluxo de trabalho digital e entretenimento.',
  deviceLabel: 'Modo de pré-visualização',
  desktopLabel: 'Desktop',
  mobileLabel: 'Mobile',
  titlePixelsLabel: 'Largura do título',
  descriptionPixelsLabel: 'Largura da descrição',
  charactersLabel: 'caracteres',
  previewLabel: 'Pré-visualização ao vivo estilo Google',
  tooLongLabel: 'Demasiado largo',
  goodLabel: 'Ok',
  emptyTitle: 'O seu título aparecerá aqui',
  emptyDescription: 'A pré-visualização da sua meta description aparecerá aqui enquanto digita.',
  defaultTitle: 'GameBob | Estúdio de Desenvolvimento Independente',
  defaultUrl: 'https://www.gamebob.dev/pt/',
  defaultDescription: 'Descubra a nossa coleção de ferramentas e jogos concebidos para elevar o seu fluxo de trabalho digital e entretenimento.',
  fallbackUrl: 'exemplo.com',
  fallbackFaviconText: 'G',
  pixelUnit: 'px',
  ellipsis: '...',
  fetchButtonLabel: 'Obter',
  fetchLoadingLabel: 'A obter...',
  fetchSuccessLabel: 'Metadados carregados a partir do URL.',
  fetchCorsError: 'O navegador não conseguiu ler esta página. Pode estar bloqueada por CORS, um redireccionamento, conteúdo misto ou uma regra de rede. Pode colar ou editar os metadados manualmente.',
  fetchInvalidUrlError: 'Introduza um URL válido antes de obter os metadados.',
  fetchNoMetadataError: 'A página foi obtida, mas não foi encontrado título nem meta description.',
  fetchGenericError: 'Não foi possível obter os metadados deste URL. Verifique o endereço ou preencha os campos manualmente.',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<SerpPixelSimulatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Perguntas frequentes sobre o simulador SERP',
  faq,
  bibliographyTitle: 'Documentação sobre resultados de pesquisa',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Deixe de adivinhar como será o seu resultado no Google',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uma tag title pode parecer perfeita numa folha de cálculo e mesmo assim falhar no resultado de pesquisa. O Google não reserva espaço por contagem de caracteres; renderiza o texto dentro de um cartão visual. Isso significa que <strong>GameBob | Estúdio de Desenvolvimento Independente</strong> e outro título com o mesmo número de caracteres podem ocupar larguras muito diferentes consoante as letras, maiúsculas, pontuação e espaçamento.',
    },
    {
      type: 'tip',
      title: 'A regra que realmente ajuda',
      html: 'Escreva o snippet para que a promessa importante sobreviva às reticências. Coloque o tipo de página, a intenção de pesquisa e o motivo mais forte para clicar antes do limite de píxeis. Os nomes de marca são úteis, mas não devem empurrar o benefício principal para fora de vista.',
    },
    {
      type: 'title',
      text: 'O que o contador de píxeis está a medir',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Elemento', 'O que importa', 'Como usar o resultado'],
      rows: [
        ['Tag title', 'Largura renderizada em píxeis, não a contagem bruta de caracteres', 'Mantenha a palavra-chave principal e a promessa de clique visíveis antes do truncamento.'],
        ['URL visível', 'Confiança visual e clareza do tópico', 'Use um caminho legível que reforce o destino do resultado.'],
        ['Meta description', 'Uma área de snippet mais ampla com comportamento dependente da consulta', 'Coloque o benefício em primeiro plano, pois o Google pode encurtá-la ou reescrevê-la.'],
        ['Modo dispositivo', 'Os cartões de desktop e mobile podem parecer diferentes', 'Verifique ambos antes de publicar metadados de páginas importantes.'],
      ],
    },
    {
      type: 'title',
      text: 'Porque é que os limites de caracteres são um mau hábito de SEO',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O conselho tradicional como "mantenha os títulos abaixo dos 60 caracteres" é conveniente, mas esconde o verdadeiro problema. Letras largas como W e M, palavras em maiúsculas, separadores, números e nomes de marca longos consomem todos espaços diferentes. A medição em píxeis torna o compromisso visível de imediato: pode ver se uma frase merece o seu lugar ou rouba espaço a uma mensagem mais forte.',
    },
    {
      type: 'title',
      text: 'Um fluxo de trabalho prático para melhores snippets',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Comece pela intenção:</strong> descreva o que o utilizador obtém, não apenas como a página se chama.',
        '<strong>Teste o título completo:</strong> cole-o no simulador e observe a barra antes de publicar.',
        '<strong>Remova palavras fracas:</strong> se a barra ficar vermelha, elimine o enchimento antes de cortar termos valiosos.',
        '<strong>Verifique as reticências:</strong> se a pré-visualização truncada perder sentido, reescreva o título em vez de aceitar o corte.',
        '<strong>Repita para a descrição:</strong> certifique-se de que a primeira frase transmite a proposta de valor por si só.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Quando a barra fica vermelha',
      html: 'Uma barra vermelha não é um aviso de penalização. Significa que o texto atual é mais largo do que o alvo visual selecionado, pelo que o simulador o trunca com pontos. Trate isso como um sinal editorial: decida se as palavras ocultas são dispensáveis ou se o snippet precisa de uma estrutura mais afiada.',
    },
    {
      type: 'title',
      text: 'Limites, reescritas e expectativas realistas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nenhum simulador pode garantir o snippet exato que o Google mostrará. O Google pode reescrever links de título, colocar termos da consulta em negrito, escolher texto da página em vez da meta description ou mostrar snippets diferentes para pesquisas diferentes. Esta ferramenta é mais útil como uma etapa rápida de redação e controlo de qualidade: deteta transbordos visuais óbvios antes de a página chegar à produção.',
    },
    {
      type: 'summary',
      title: 'Melhor utilização deste simulador SERP',
      items: [
        'Use a barra de píxeis para detetar transbordos visuais antes de publicar metadados.',
        'Mantenha a intenção de pesquisa principal e a promessa de clique visíveis antes de qualquer reticência.',
        'Obtenha metadados de URLs que permitam CORS e edite o resultado manualmente quando necessário.',
        'Considere a pré-visualização como um guia de redação, pois o Google ainda pode reescrever snippets por consulta.',
      ],
    },
  ],
};
