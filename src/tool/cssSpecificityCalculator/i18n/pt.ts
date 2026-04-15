import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssSpecificityCalculatorUI } from '../ui';

const slug = 'calculadora-especificidade-css';
const title = 'Calculadora de Especificidade CSS Online. Visualizador de Peso de Seletores';
const description =
  'Calcule a especificidade e o peso exato de qualquer seletor CSS. Ferramenta visual para entender qual regra CSS vence a cascata e evitar o uso de !important.';

const faqData = [
  {
    question: 'O que é especificidade CSS?',
    answer:
      'A especificidade é o algoritmo que os browsers usam para decidir qual regra CSS aplicar a um elemento quando várias regras competem entre si. É representada como uma pontuação de três colunas (A, B, C) que indica, respetivamente, IDs, classes/atributos/pseudo-classes e elementos/pseudo-elementos.',
  },
  {
    question: 'Uma classe pode alguma vez superar um ID em especificidade?',
    answer:
      'Não diretamente. Um ID (1,0,0) bate sempre qualquer número de classes (0,N,0), porque a especificidade não tem transporte numérico entre colunas. Cem classes (0,100,0) nunca vão superar um único ID (1,0,0).',
  },
  {
    question: 'O que acontece quando dois seletores têm a mesma especificidade?',
    answer:
      'Quando dois seletores têm exatamente o mesmo peso, vence aquele que foi declarado por último no ficheiro CSS. A isso chama-se a ordem natural da cascata. Esta calculadora avisa-te visualmente quando ocorre um empate.',
  },
  {
    question: 'Por que usar !important é considerado má prática?',
    answer:
      'A diretiva !important quebra a cascata CSS natural ao forçar uma declaração sobre qualquer outra regra. Isso cria conflitos difíceis de depurar em projetos grandes. Metodologias como o BEM defendem manter a especificidade plana para nunca precisar de !important.',
  },
];

const howToData = [
  {
    name: 'Escreve o primeiro seletor',
    text: 'Escreve o Seletor A no campo de texto da esquerda, por exemplo: #header .nav-item > a. Os contadores de IDs, Classes e Elementos atualizam-se instantaneamente.',
  },
  {
    name: 'Escreve o segundo seletor',
    text: 'Escreve o Seletor B no campo de texto da direita, por exemplo: ul li.active a:hover. Observa como os pesos mudam em tempo real.',
  },
  {
    name: 'Lê o resultado',
    text: 'A calculadora realça com um banner verde o bloco do seletor vencedor. Se ambos empatarem, aparece uma mensagem a explicar que a ordem da cascata serve de desempate.',
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

const ui: CssSpecificityCalculatorUI = {
  labelA: 'Seletor A',
  labelB: 'Seletor B',
  placeholderA: 'ex. #header .nav-item > a',
  placeholderB: 'ex. ul li.active a:hover',
  cardIds: 'IDs',
  cardClasses: 'Classes / Pseudos',
  cardElements: 'Elementos',
  bannerWinner: 'Este seletor vence!',
  msgTie: 'Ambos os seletores têm o mesmo peso. Se competirem pelo mesmo elemento, vence o que estiver escrito <strong>por último</strong> no CSS.',
};

export const content: ToolLocaleContent<CssSpecificityCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências e Documentação',
  bibliography: [
    {
      name: 'MDN Web Docs: Especificidade CSS',
      url: 'https://developer.mozilla.org/pt/docs/Web/CSS/Specificity',
    },
    {
      name: 'W3C: Selectors Level 3 - Especificidade',
      url: 'https://www.w3.org/TR/selectors-3/#specificity',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'O que é a Especificidade CSS?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A especificidade CSS é o algoritmo pelo qual os browsers decidem que valores de propriedades aplicar a um determinado elemento. É essencialmente uma pontuação matemática que diz ao browser "quão específica" é uma regra.',
    },
    {
      type: 'paragraph',
      html: 'Se duas regras têm níveis de especificidade diferentes, vence a que tiver maior peso, independentemente da ordem em que foram escritas. Se tiverem o mesmo peso, vence a última declarada no código fonte.',
    },
    {
      type: 'title',
      text: 'Como calcular a especificidade CSS',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A especificidade calcula-se com base em três categorias que formam um peso de três colunas, normalmente expresso como <strong>(A, B, C)</strong>:',
    },
    {
      type: 'list',
      items: [
        '<strong>Coluna A (IDs):</strong> Conta o número de identificadores únicos. Exemplo: <code>#header</code> conta como 1 na coluna A.',
        '<strong>Coluna B (Classes, Atributos e Pseudo-classes):</strong> Conta todas as classes (<code>.button</code>), atributos (<code>[type="text"]</code>) e pseudo-classes (<code>:hover</code>).',
        '<strong>Coluna C (Elementos e Pseudo-elementos):</strong> Conta todos os elementos HTML (<code>div</code>, <code>h1</code>) e pseudo-elementos (<code>::before</code>).',
      ],
    },
    {
      type: 'title',
      text: 'A regra de ouro: sem transporte numérico',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Uma regra com especificidade (0,50,0) <strong>nunca</strong> será mais específica do que uma regra (1,0,0). <strong>Um único ID bate infinitas classes.</strong> As colunas nunca transbordam umas para as outras.',
    },
    {
      type: 'title',
      text: 'O problema do !important e a arquitetura BEM',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A diretiva <code>!important</code> é uma exceção às regras de especificidade. Quando usada, essa declaração sobrescreve automaticamente qualquer outra. Considera-se má prática porque destrói a cascata natural.',
    },
    {
      type: 'paragraph',
      html: 'Para evitar guerras de especificidade em projetos grandes, metodologias como o <strong>BEM</strong> defendem o uso exclusivo de seletores de classe com um único nível de profundidade, mantendo artificialmente a especificidade plana em (0,1,0).',
    },
  ],
};
