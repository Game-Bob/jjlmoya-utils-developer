import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConversorExcelCsvHtmlUI } from '../ui';

const slug = 'conversor-de-tabela-excel-csv-html';
const title = 'Gerador de Código do Conversor de Tabela Excel e CSV para HTML';
const description = 'Converta instantaneamente os seus dados Excel ou CSV em tabelas HTML limpas e semânticas. Ferramenta gratuita para desenvolvedores e criadores de conteúdo.';

const faqData = [
  {
    question: 'Como converto um arquivo Excel (.xlsx) para HTML?',
    answer: 'Primeiro, abra seu arquivo no Excel e salve-o como CSV (delimitado por vírgulas). Em seguida, carregue esse arquivo CSV na nossa ferramenta ou cole o seu conteúdo para obter o código da tabela HTML.',
  },
  {
    question: 'O código gerado inclui estilos CSS?',
    answer: 'O gerador produz HTML limpo com classes opcionais para bordas e listras de zebra. Os estilos visuais finais dependem do próprio CSS do seu site, garantindo uma integração perfeita.',
  },
  {
    question: 'Posso carregar arquivos CSV muito grandes?',
    answer: 'Sim, nossa ferramenta processa dados localmente no seu navegador. Isso significa que é muito rápido e seguro, pois seus dados nunca viajam pela internet.',
  },
  {
    question: 'É compatível com Google Sheets?',
    answer: 'Absolutamente. No Google Sheets, vá em Arquivo > Fazer download > Valores separados por vírgula (.csv) e use esse arquivo com a nossa ferramenta.',
  },
];

const howToData = [
  {
    name: 'Prepare seus dados',
    text: 'Tenha seu arquivo Excel ou CSV pronto. Certifique-se de que os dados estejam limpos.',
  },
  {
    name: 'Carregue os dados',
    text: 'Cole o texto CSV na área de entrada ou arraste o arquivo diretamente para o conversor.',
  },
  {
    name: 'Configure a tabela',
    text: 'Escolha se deseja usar a primeira linha como cabeçalho e se deseja estilos básicos.',
  },
  {
    name: 'Copie o código',
    text: 'Mude para a guia "Código HTML" e copie o resultado para colar no seu site.',
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

const ui: ConversorExcelCsvHtmlUI = {
  csvInputLabel: 'Cole seu CSV aqui',
  csvInputPlaceholder: 'Nome,Idade,Cidade\nJoão,25,Lisboa\nAna,30,Porto',
  uploadLabel: 'Ou carregue seu arquivo (CSV)',
  dragDropLabel: 'Arraste e solte seu arquivo aqui',
  headerCheckboxLabel: 'Usar primeira linha como cabeçalho',
  bordersCheckboxLabel: 'Adicionar bordas',
  stripeCheckboxLabel: 'Listras de zebra',
  previewTabLabel: 'Pré-visualização',
  codeTabLabel: 'Código HTML',
  emptyStateLabel: 'Insira dados para ver a tabela',
  copyButtonLabel: 'Copiar Código',
  copiedLabel: 'Copiado!',
};

export const content: ToolLocaleContent<ConversorExcelCsvHtmlUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Recursos sobre Tabelas HTML e Formatos de Dados',
  bibliography: [
    { name: 'W3C: Tabelas HTML', url: 'https://www.w3.org/WAI/tutorials/tables/' },
    { name: 'MDN: Elemento de tabela HTML', url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/table' },
    { name: 'RFC 4180: Formato CSV', url: 'https://tools.ietf.org/html/rfc4180' },
    { name: 'Google Sheets: Faça o download dos seus dados', url: 'https://support.google.com/docs/answer/183965' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Converta Excel e CSV para Tabelas HTML Facilmente', level: 2 },
    {
      type: 'paragraph',
      html: 'No desenvolvimento web moderno, apresentar dados tabulares é uma das formas mais eficazes de transmitir informações estruturadas. No entanto, converter manualmente dados de uma planilha como <strong>Excel</strong> ou um arquivo <strong>CSV</strong> para tags HTML <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, e <code>&lt;td&gt;</code> é tedioso e propenso a erros.',
    },
    { type: 'title', text: 'Por que usar tabelas HTML semânticas?', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Acessibilidade:</strong> leitores de tela podem interpretar a estrutura e ajudar usuários com deficiências visuais.',
        '<strong>SEO:</strong> mecanismos de busca indexam o conteúdo das células, melhorando o ranking dos seus dados.',
        '<strong>Responsividade:</strong> com um pouco de CSS, tabelas HTML podem se adaptar a dispositivos móveis.',
        '<strong>Facilidade de manutenção:</strong> é muito mais fácil editar dados em HTML do que gerar novamente uma imagem inteira.',
      ],
    },
    { type: 'title', text: 'Como o Conversor de Excel para HTML Funciona', level: 3 },
    {
      type: 'paragraph',
      html: 'Nossa ferramenta usa um analisador de texto nativo que processa arquivos separados por vírgula (CSV). A maioria dos programas de planilha, incluindo Microsoft Excel, Google Sheets e LibreOffice Calc, permite exportar seus dados no formato CSV.',
    },
  ],
};
