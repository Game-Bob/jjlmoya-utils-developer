import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeycodeUI } from '../ui';

const slug = 'inspecionador-codigo-tecla-teclado';
const title = 'Visualizador Online de Código de Tecla. Inspetor de Código de Tecla';
const description =
  'Ferramenta online gratuita para ver event.key, event.code, event.which e localização de qualquer tecla de teclado em tempo real. Gera snippets de código JavaScript prontos para usar.';

const faqData = [
  {
    question: 'Qual é a diferença entre event.key e event.code?',
    answer:
      'event.code representa a posição física da tecla no teclado, independentemente do idioma configurado. event.key representa o carácter gerado, que pode mudar se você pressionar Shift ou usar um idioma diferente. Use code para controles de jogos; use key para entrada de texto e atalhos semânticos.',
  },
  {
    question: 'O que é event.which e por que está deprecado?',
    answer:
      'event.which é uma propriedade herdada que retorna um código ASCII numérico para a tecla. É marcada como deprecada nos padrões modernos porque event.key e event.code a substituem por informações mais precisas e legíveis. É mostrada nesta ferramenta para fins educacionais.',
  },
  {
    question: 'O que significa a propriedade location?',
    answer:
      'A propriedade location indica onde a tecla está fisicamente localizada no teclado: Padrão (posição normal), Esquerda (tecla modificadora esquerda), Direita (tecla modificadora direita) ou Teclado Numérico (teclado numérico). É útil distinguir entre as teclas CTRL esquerda e direita, por exemplo.',
  },
  {
    question: 'Funciona com teclados internacionais e layouts não QWERTY?',
    answer:
      'Sim. A ferramenta mostra exatamente o que o navegador relata para sua configuração de teclado. event.code sempre retornará o nome QWERTY da posição física, enquanto event.key mostrará o carácter real de acordo com seu idioma.',
  },
];

const howToData = [
  {
    name: 'Pressione qualquer tecla',
    text: 'Com o foco na página, pressione qualquer tecla do teclado para ver instantaneamente todas as informações do evento.',
  },
  {
    name: 'Copie valores individuais',
    text: 'Clique no botão de cópia ao lado de cada propriedade (event.key, event.code, etc.) para copiar esse valor específico para a área de transferência.',
  },
  {
    name: 'Use os snippets de código',
    text: 'Na seção "Quick Snippets" você encontrará blocos de código JavaScript prontos para colar diretamente em seu projeto.',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pt',
};

const ui: KeycodeUI = {
  promptTitle: 'Pressione uma tecla',
  promptSubtitle: 'Qualquer tecla do seu teclado para ver seu código',
  snippetsTitle: 'Snippets Rápidos',
  btnCopy: 'Copiar',
  locationStandard: 'Padrão',
  locationLeft: 'Esquerda',
  locationRight: 'Direita',
  locationNumpad: 'Teclado Numérico',
};

export const content: ToolLocaleContent<KeycodeUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências e Padrões',
  bibliography: [
    {
      name: 'MDN Web Docs – KeyboardEvent',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent',
    },
    {
      name: 'Especificação UI Events (W3C) – KeyboardEvent',
      url: 'https://www.w3.org/TR/uievents/#events-keyboardevents',
    },
    {
      name: 'MDN – Valores de KeyboardEvent.code',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Compreendendo eventos de teclado em JavaScript',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Quando um usuário pressiona uma tecla, o navegador dispara três eventos: <code>keydown</code>, <code>keypress</code> e <code>keyup</code>. Cada um expõe propriedades com informações sobre a tecla pressionada, mas nem todas são equivalentes ou recomendadas.',
    },
    {
      type: 'title',
      text: 'Propriedades de eventos de tecla',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'event.code — A tecla física',
      html: '<p>Retorna o identificador da <strong>posição física</strong> da tecla no teclado, usando nomenclatura QWERTY. Por exemplo, a tecla "A" em um teclado AZERTY retorna <code>KeyQ</code>. Ideal para controles de jogos onde a posição importa, não o carácter.</p>',
    },
    {
      type: 'card',
      title: 'event.key — O carácter gerado',
      html: '<p>Retorna o <strong>valor de carácter</strong> gerado de acordo com o idioma e modificadores ativos. Pressionar Shift+A retorna <code>"A"</code>; sem Shift retorna <code>"a"</code>. Para teclas especiais, retorna nomes como <code>"Enter"</code>, <code>"Escape"</code>, <code>"ArrowUp"</code>.</p>',
    },
    {
      type: 'title',
      text: 'Quando usar cada propriedade',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Use <code>event.code</code> para controles de jogos (WASD independentemente do idioma) e <code>event.key</code> para detectar carácteres específicos ou atalhos de teclado semânticos como <code>Ctrl+C</code>.',
    },
    {
      type: 'paragraph',
      html: 'As propriedades <code>event.which</code> e <code>event.keyCode</code> estão oficialmente <strong>deprecadas</strong> de acordo com o padrão W3C. Embora os navegadores modernos continuem a suportá-las para compatibilidade, elas não devem ser usadas em código novo.',
    },
  ],
};
