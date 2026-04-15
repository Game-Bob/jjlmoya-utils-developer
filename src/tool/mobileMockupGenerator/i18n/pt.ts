import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileMockupGeneratorUI } from '../ui';

const slug = 'gerador-mockup-mobile';
const title = 'Gerador de Mockups Mobile para App Store. iPhone e Google Pixel';
const description = 'Crie apresentações profissionais para App Store e Google Play. Mockups de iPhone e Pixel com fundos personalizados, layouts panorâmicos e exportação em alta resolução.';

const faqData = [
  { question: 'Essas screenshots são válidas para App Store e Google Play?', answer: 'Sim, as imagens geradas atendem aos requisitos de proporção e qualidade das lojas de aplicativos. Basta escolher o dispositivo correto (iPhone para iOS, Pixel para Android) antes de exportar.' },
  { question: 'Posso usar meus próprios fundos personalizados?', answer: 'Absolutamente. Além de nossa biblioteca premium de gradientes, você pode fazer upload de qualquer imagem do seu computador para servir como fundo ambiente para seus mockups.' },
  { question: 'É grátis para uso comercial?', answer: 'Sim, você pode usar os mockups gerados para projetos comerciais, portfólios ou apresentações sem custo e sem marcas d\'água.' },
  { question: 'Minhas screenshots são salvas em algum servidor?', answer: 'Não. O gerador funciona 100% localmente em seu navegador. Suas imagens privadas nunca deixam seu computador.' },
];

const howToData = [
  { name: 'Envie screenshots', text: 'Arraste ou selecione as screenshots do seu aplicativo móvel que deseja apresentar.' },
  { name: 'Escolha dispositivo', text: 'Selecione o modelo de smartphone (iPhone 15 Pro Max ou Google Pixel 8) conforme a loja de destino.' },
  { name: 'Personalize ambiente', text: 'Ajuste o fundo, ângulo do dispositivo, adicione texto de marketing e escolha o layout de composição.' },
  { name: 'Download em HD', text: 'Exporte todos os resultados em formato WebP de alta resolução pronto para upload na loja de aplicativos.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'pt',
};

const ui: MobileMockupGeneratorUI = {
  labelUpload: 'Enviar Screenshots',
  dropHint: 'Arraste suas imagens aqui',
  dropFormats: 'PNG, JPG ou WEBP',
  btnMassReplace: 'Substituição em Massa (Lote)',
  massReplaceHint: 'Substitui as imagens atuais mantendo presets e texto. Ideal para iterações rápidas.',
  labelSettings: 'Configurações Globais',
  labelDevice: 'Dispositivo',
  labelFont: 'Tipografia',
  labelBackground: 'Fundo',
  titleSwapColors: 'Trocar cores',
  labelAngle: 'Ângulo',
  labelSafeArea: 'Área Segura (Superior/Inferior)',
  labelSafeAreaColor: 'Cor da área',
  emptyTitle: 'Nenhuma imagem ainda',
  emptySubtitle: 'Envie suas screenshots para começar a projetar',
  btnClearAll: 'Limpar Canvas',
  btnExport: 'Exportar Tudo (.zip)',
  cardTitleDuplicate: 'Duplicar Cena',
  cardTitleReplace: 'Substituir Screenshot Atual',
  cardSectionLayouts: 'Layouts Principais',
  cardSectionBranding: 'Marca e Texto',
  cardTitleResetText: 'Redefinir Texto',
  cardLabelColor: 'Cor',
  cardTextPlaceholder: 'Escreva seu texto aqui...',
  cardSectionDevice: 'Layout do Dispositivo',
  cardTitleResetDevice: 'Redefinir Posição',
  cardSectionScene: 'Props e Fundo',
  cardBtnSpecialBg: 'Fundo Especial',
  cardBtnDeleteScene: 'Deletar Cena',
  cardRangeLabelSize: 'Tamanho',
  cardRangeLabelX: 'Eixo X',
  cardRangeLabelY: 'Eixo Y',
  cardRangeLabelRotation: 'Rotação',
  cardRangeLabelScale: 'Escala',
  presetClassic: 'Clássico',
  presetMobileBottom: 'Mobile Inferior',
  presetMobileTop: 'Mobile Superior',
  presetFocus: 'Foco',
  presetDynamic: 'Dinâmico',
  presetSplitLeft: 'Divisão Esquerda',
  presetSplitRight: 'Divisão Direita',
  presetImageLeft: 'Imagem Esquerda',
  presetImageRight: 'Imagem Direita',
  confirmClear: 'Tem certeza de que deseja deletar todos os mockups?',
  processingExport: 'Processando...',
  exportDone: 'Pronto!',
};

export const content: ToolLocaleContent<MobileMockupGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências',
  bibliography: [
    { name: 'Requisitos de Screenshot da Apple App Store', url: 'https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications' },
    { name: 'Requisitos de Screenshot do Google Play', url: 'https://support.google.com/googleplay/android-developer/answer/9866151' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Eleve suas screenshots para o próximo nível', level: 2 },
    { type: 'paragraph', html: 'Não se limite a screenshots simples. Nossa ferramenta de mockup permite que desenvolvedores e designers criem ativos visuais de alto impacto sem precisar de Photoshop ou Figma.' },
    { type: 'title', text: 'Poder com Layouts Principais', level: 3 },
    { type: 'grid', columns: 2 },
    { type: 'card', title: 'App Store e Google Play', html: '<p>Otimize sua taxa de conversão. Mockups de iPhone 15 Pro Max e Pixel 8 são o padrão mundial para listagens de lojas de aplicativos.</p>' },
    { type: 'card', title: 'Pitch Decks e Marketing', html: '<p>Apresente suas ideias com autoridade. Perfeito para apresentações de investidores, campanhas de mídia social e portfólios profissionais de design UI/UX.</p>' },
    { type: 'title', text: 'Fluxo de trabalho profissional', level: 3 },
    { type: 'tip', html: 'Use os presets "Divisão Esquerda" e "Divisão Direita" para criar mockups contínuos que deslizam de uma imagem para outra em carrosséis do Instagram ou screenshots da App Store.' },
  ],
};
