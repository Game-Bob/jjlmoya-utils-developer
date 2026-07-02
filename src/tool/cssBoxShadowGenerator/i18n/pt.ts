import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssBoxShadowGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'gerador-sombras-css';
const title = 'CSS Box Shadow Generator';
const description = 'Crie sombras CSS em camadas visualmente com pré-visualização ao vivo, sliders, seletores de cor e presets. Copie CSS nativo limpo instantaneamente.';

const howTo = [
  { name: 'Escolha um preset ou comece do zero', text: 'Selecione entre os presets Card, Float, Inset, Glow ou Layered, ou ajuste a sombra padrão com os sliders.' },
  { name: 'Adicione e empilhe camadas', text: 'Clique + para adicionar camadas (até 5). Selecione cada camada para editar offset, blur, spread, cor e opacidade.' },
  { name: 'Alterne inset e cor de fundo', text: 'Marque inset para sombras internas. Altere a cor de fundo da pré-visualização.' },
  { name: 'Copie o CSS', text: 'Quando a pré-visualização corresponder ao seu design, copie o CSS gerado e cole na sua folha de estilo.' },
];

const faq = [
  { question: 'Posso usar várias sombras em um elemento?', answer: 'Sim. CSS permite valores box-shadow separados por vírgula. Esta ferramenta permite empilhar até 5 camadas com controles independentes.' },
  { question: 'O que faz um valor spread negativo?', answer: 'Spread negativo encolhe a sombra para dentro antes do desfoque. Útil para efeitos flutuantes sutis.' },
  { question: 'Para que serve a opção inset?', answer: 'Sombras inset são renderizadas dentro da borda do elemento, criando um efeito afundado. Ideal para inputs e cartões pressionados.' },
  { question: 'O CSS gerado tem dependências de framework?', answer: 'Não. O resultado é CSS nativo puro. Use em qualquer projeto com CSS padrão.' },
];

const ui: CssBoxShadowGeneratorUI = {
  offsetXLabel: 'Offset X',
  offsetYLabel: 'Offset Y',
  blurLabel: 'Desfoque',
  spreadLabel: 'Expansão',
  opacityLabel: 'Opacidade',
  insetLabel: 'Interno',
  addLayer: 'Adicionar camada',
  removeLayer: 'Remover camada',
  resetAll: 'Restaurar',
  codeTitle: 'CSS Gerado',
  copyCode: 'Copiar CSS',
  copied: 'Copiado!',
  previewLabel: 'Pré-visualização',
  presetCard: 'Card',
  presetFloat: 'Float',
  presetInset: 'Inset',
  presetGlow: 'Glow',
  presetLayered: 'Camadas',
  presetsLabel: 'Presets',
  layerPrefix: 'Camada',
  bgColorLabel: 'Fundo',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<CssBoxShadowGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'FAQ do Gerador de Sombras CSS',
  faq,
  bibliographyTitle: 'Referências Box Shadow CSS',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Crie sombras CSS visualmente em vez de adivinhar valores', level: 2 },
    { type: 'paragraph', html: 'Ajustar <strong>box-shadow</strong> manualmente é tedioso. Este gerador visual permite empilhar múltiplas sombras, visualizá-las ao vivo e copiar CSS pronto para produção.' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: 'Camadas de sombra por elemento', icon: 'mdi:layers' }, { value: 'Ao vivo', label: 'Pré-visualização a cada mudança', icon: 'mdi:eye' }, { value: '5', label: 'Presets rápidos', icon: 'mdi:star' }] },
    { type: 'title', text: 'Empilhe múltiplas sombras para profundidade realista', level: 3 },
    { type: 'paragraph', html: 'Sombras reais raramente são um blur uniforme. Empilhar uma sombra apertada perto do elemento com uma mais suave e ampla cria profundidade natural. Use <strong>+</strong> para adicionar camadas.' },
    { type: 'table', headers: ['Controle', 'Valor CSS', 'Efeito'], rows: [['Offset X', '1º comprimento', 'Deslocamento horizontal.'], ['Offset Y', '2º comprimento', 'Deslocamento vertical.'], ['Desfoque', '3º comprimento', 'Raio de blur.'], ['Expansão', '4º comprimento', 'Expande ou encolhe a sombra.'], ['Cor e Opacidade', 'rgba()', 'Cor da sombra com opacidade independente.'], ['Interno', 'inset', 'Sombra dentro da borda do elemento.']] },
    { type: 'summary', title: 'Workflow recomendado', items: ['Comece com um preset.', 'Adicione camadas para profundidade realista.', 'Use spread negativo para efeito de card flutuante.', 'Copie o CSS gerado e cole.'] },
  ],
};
