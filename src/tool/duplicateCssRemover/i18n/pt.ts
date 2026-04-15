import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DuplicateCssRemoverUI } from '../ui';

const slug = 'removedor-de-css-duplicado';
const title = 'Remover CSS Duplicado Online. Unifique e Limpe as Suas Folhas de Estilo';
const description =
  'Ferramenta gratuita para limpar e purgar código CSS duplicado. Unifica seletores redundantes, respeita a cascade e reduz instantaneamente o tamanho dos ficheiros diretamente no browser.';

const faqData = [
  {
    question: 'O que acontece quando os seletores CSS são duplicados?',
    answer:
      'Quando o mesmo seletor aparece várias vezes, o browser aplica todas as regras, mas a última declaração de cada propriedade substitui as anteriores. O resultado são ficheiros mais pesados do que o necessário, sem qualquer benefício real para o resultado visual.',
  },
  {
    question: 'Perco alguma propriedade ao remover os duplicados?',
    answer:
      'Não. O algoritmo respeita rigorosamente a cascade do CSS: em caso de conflitos sob o mesmo seletor, preserva sempre a última propriedade declarada. As propriedades exclusivas de cada bloco são combinadas num único seletor unificado.',
  },
  {
    question: 'Funciona com CSS minificado ou com comentários?',
    answer:
      'A ferramenta remove automaticamente os comentários CSS antes de processar e funciona corretamente com código numa só linha. Para CSS com nesting avançado ou at-rules complexas, recomenda-se separar os blocos primeiro.',
  },
  {
    question: 'O meu CSS é enviado para algum servidor?',
    answer:
      'Não. Todo o processamento ocorre diretamente no seu browser através de JavaScript local. Nenhuma parte do seu CSS é transmitida para qualquer servidor externo, garantindo total privacidade do seu código.',
  },
];

const howToData = [
  {
    name: 'Cole o seu CSS',
    text: 'Copie o conteúdo do seu ficheiro CSS com seletores repetidos e cole-o no campo da esquerda "Dirty / Duplicate CSS".',
  },
  {
    name: 'Execute a limpeza',
    text: 'Clique no botão "Limpar e Unificar CSS". A ferramenta irá analisar todos os seletores, fundir propriedades e remover blocos redundantes.',
  },
  {
    name: 'Reveja os resultados e copie',
    text: 'Verifique a poupança em bytes obtida e copie o CSS otimizado com o botão "Copiar Código" para o usar diretamente no seu projeto.',
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

const ui: DuplicateCssRemoverUI = {
  labelInput: 'CSS Sujo / Duplicado',
  labelOutput: 'CSS Limpo',
  placeholderInput: '.btn { padding: 10px; color: red; }\n.btn { margin: 5px; color: blue; }',
  placeholderOutput: 'O CSS otimizado e unificado aparecerá aqui...',
  btnClean: 'Limpar e Unificar CSS',
  btnCopy: 'Copiar Código',
  btnCopied: 'Copiado!',
  statBytesOriginal: 'Bytes Originais',
  statBytesClean: 'Bytes Limpos',
  statSaving: 'Poupança',
};

export const content: ToolLocaleContent<DuplicateCssRemoverUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências e Documentação',
  bibliography: [
    {
      name: 'Web Vitals: impacto do CSS no Render-Blocking e no FCP',
      url: 'https://web.dev/articles/render-blocking-resources',
    },
    {
      name: 'Especificação W3C: Cascade e Herança CSS',
      url: 'https://www.w3.org/TR/css-cascade-4/',
    },
    {
      name: 'Clean CSS: biblioteca e metodologias para minificação de CSS',
      url: 'https://github.com/clean-css/clean-css',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Por que o código CSS acaba por se duplicar?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ao manter projetos web a longo prazo ou ao trabalhar com código legado (<em>legacy code</em>), é extremamente comum que vários programadores escrevam regras CSS sobrepostas. Muitas vezes, com medo de estragar um design existente, prefere-se adicionar uma nova regra redundante no final do documento a editar ou refatorar a original.',
    },
    {
      type: 'paragraph',
      html: 'O resultado é um ficheiro ineficiente com dezenas de seletores declarados repetidamente, que compromete a legibilidade e aumenta consideravelmente o peso de transferência da página web.',
    },
    {
      type: 'title',
      text: 'O impacto oculto no desempenho web (Web Vitals)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Os ficheiros de folhas de estilo bloqueiam a renderização natural do browser (um recurso <strong>Render-Blocking</strong>). Até o browser transferir e construir o CSSOM completo, o ecrã permanece em branco.',
    },
    {
      type: 'tip',
      html: 'Purgar estilos redundantes não é apenas uma questão de organização do código — é uma melhoria mensurável e imediata em métricas vitais como o <strong>First Contentful Paint (FCP)</strong>.',
    },
    {
      type: 'title',
      text: 'Como unificamos as regras duplicadas',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Esta ferramenta funciona como um montador inteligente. Em vez de se limitar a comprimir espaços em branco (como faria um minifier tradicional), percorre o texto recursivamente à procura de padrões de seletores idênticos.',
    },
    {
      type: 'list',
      items: [
        'Imagine ter a regra <code>.box { color: red; }</code> e cem linhas abaixo um <code>.box { padding: 10px; color: blue; }</code>. A ferramenta unifica ambos os blocos sob o mesmo seletor <code>.box</code>, combinando o padding.',
        '<strong>Preservação da Cascade CSS:</strong> Em caso de conflitos diretos, o algoritmo preserva rigorosamente a última propriedade declarada. Assim, o seu layout original não é quebrado ao purgar o documento.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Deixe de enviar kilobytes de texto morto para os telemóveis dos seus utilizadores. Unifique o seu código em milissegundos, completamente offline, diretamente no browser.',
    },
  ],
};
