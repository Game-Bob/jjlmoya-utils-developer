import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReadabilityCalculatorUI } from '../ui';
const slug = 'calculadora-legibilidade-visual';
const title = 'Calculadora de Legibilidade Visual WCAG e APCA';
const description = 'Verifique o contraste real de seus designs com APCA (WCAG 3.0). Analise como peso e tamanho da fonte afetam a legibilidade real.';
const faqData = [
  { question: 'O que é APCA e por que é diferente de WCAG 2.1?', answer: 'APCA é o Algoritmo Avançado de Contraste Perceptual desenvolvido para WCAG 3.0. Diferentemente da razão simples antiga, APCA usa modelos matemáticos que imitam como o cérebro humano percebe contraste, levando em conta polaridade e peso/tamanho da fonte.' },
  { question: 'O que significa o valor Lc?', answer: 'Lc (Contraste de Luminosidade) é o valor de contraste gerado por APCA. Um valor de 100 representa contraste máximo ideal, enquanto valores abaixo de 60 começam a ser críticos para leitura contínua.' },
  { question: 'Como o peso da fonte afeta a legibilidade?', answer: 'Fontes Finas/Claras requerem contraste muito mais alto para serem legíveis. APCA penaliza fontes de baixo peso, indicando que um design passando em WCAG com fonte peso-100 pode ser ilegível na prática.' },
  { question: 'Esta calculadora é privada?', answer: 'Sim, todos os cálculos são realizados localmente em seu navegador. As cores e configurações que você analisa nunca são enviadas para nenhum servidor, garantindo total privacidade.' },
];
const howToData = [
  { name: 'Escolha Cores', text: 'Use os seletores de cor para definir a cor do texto e cor de fundo do seu design.' },
  { name: 'Ajuste Tipografia', text: 'Mova os sliders de tamanho e peso de fonte para simular sua tipografia real.' },
  { name: 'Leia os Resultados', text: 'Verifique a razão WCAG 2.1 e o valor Lc APCA para saber se seu design é acessível.' },
  { name: 'Revise Recomendações', text: 'Verifique recomendações específicas de APCA para texto corporal, texto pequeno e elementos de UI.' },
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
const ui: ReadabilityCalculatorUI = {
  labelColors: 'Cores Base',
  labelText: 'Texto',
  labelBg: 'Fundo',
  labelTypo: 'Tipografia',
  labelFontSize: 'Tamanho da Fonte',
  labelFontWeight: 'Peso',
  labelCompare: 'Comparação de Contraste',
  labelPreview: 'Visualização Perceptual',
  labelApcaRecs: 'Recomendações APCA',
  labelBody: 'Texto de Leitura (Corpo)',
  labelSmall: 'Texto Pequeno / Legenda',
  labelUi: 'UI / Botões',
  statusYes: 'Sim',
  statusNo: 'Não',
  wcagAAA: 'Aprova AAA',
  wcagAA: 'Aprova AA',
  wcagLarge: 'Apenas Texto Grande',
  wcagFail: 'Falha',
  apcaExcellent: 'Excelente',
  apcaGood: 'Bom',
  apcaMinimal: 'Mínimo',
  apcaPoor: 'Pobre',
  previewText: 'A legibilidade visual não é apenas matemática. É como luz e sombra interagem com seus olhos.',
  wcagRatioLabel: 'Razão WCAG 2.1',
  apcaLcLabel: 'APCA Lc (WCAG 3)',
};
export const content: ToolLocaleContent<ReadabilityCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Recursos em Contraste e APCA',
  bibliography: [
    { name: 'W3C: WCAG 3.0 Draft (Silver)', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/' },
    { name: 'Myndex: Guia de Referência APCA', url: 'https://apcaw3.myndex.com/' },
    { name: 'MDN: Acessibilidade e Contraste de Cor', url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Calculadora de Legibilidade Visual (WCAG vs APCA)', level: 2 },
    { type: 'paragraph', html: 'Entenda como suas cores e tipografia afetam a leitura real com o novo padrão de acessibilidade perceptual. WCAG 2.1 usa uma fórmula matemática simples de 2008. <strong>APCA</strong> é o novo modelo proposto para <strong>WCAG 3.0</strong> que imita percepção humana.' },
    { type: 'title', text: 'Pontos-Chave de APCA', level: 3 },
    { type: 'list', items: [ '<strong>Polaridade:</strong> Entende que Modo Escuro é percebido diferentemente do Modo Claro.', '<strong>Peso da Fonte:</strong> Atribui níveis de contraste específicos (Lc) baseado em peso tipográfico.', '<strong>Linearidade:</strong> Corrige imprecisões matemáticas no modelo de luminância relativa de 2008.' ] },
    { type: 'title', text: 'Níveis APCA Recomendados', level: 3 },
    { type: 'list', items: [ '<strong>Lc 90+:</strong> Ideal para texto muito pequeno ou peso baixo.', '<strong>Lc 75:</strong> Padrão para texto corporal principal.', '<strong>Lc 60:</strong> Mínimo para conteúdo médio legível.', '<strong>Lc 45:</strong> Mínimo para elementos grandes ou decorativos.' ] },
  ],
};
