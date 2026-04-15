import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromptLibraryUI } from '../ui';

const slug = 'biblioteca-prompts-privada';
const title = 'Biblioteca Privada de Prompts IA';
const description = 'Organize, rotule e salve seus prompts do ChatGPT, Midjourney e Claude de forma privada. Seu próprio banco de prompts no localStorage.';

const faqData = [
  { question: 'Onde meus prompts são salvos?', answer: 'Seus prompts são salvos exclusivamente no localStorage do seu navegador. Não usamos servidores externos, então seus dados são 100% privados.' },
  { question: 'O que acontece se eu limpar cookies ou histórico do navegador?', answer: 'Se você limpar dados do site ou localStorage, perderá seus prompts salvos. Recomendamos fazer backups se você frequentemente limpa seu navegador.' },
  { question: 'Posso usar isso para Midjourney, ChatGPT ou DALL-E?', answer: 'Sim, é compatível com qualquer tipo de instrução de IA. Você pode criar tags específicas para organizar seus comandos e copiá-los para sua ferramenta IA preferida facilmente.' },
];

const howToData = [
  { name: 'Crie um prompt', text: 'Clique no botão Novo Prompt e insira o título e instrução.' },
  { name: 'Adicione tags', text: 'Digite tags separadas por espaço ou vírgula para classificar seus prompts.' },
  { name: 'Use variáveis', text: 'Use colchetes [ASSIM] no texto para criar campos preenchíveis no cartão.' },
  { name: 'Copie e compartilhe', text: 'Copie para área de transferência com um clique ou compartilhe um link direto com o botão de compartilhamento.' },
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

const ui: PromptLibraryUI = {
  placeholderSearch: 'Procure por palavra-chave ou tag...',
  btnNew: 'Novo Prompt',
  emptyTitle: 'Sua biblioteca está vazia',
  emptyDesc: 'Crie seu primeiro prompt e comece a construir seu repositório privado de IA.',
  btnAddFirst: 'Adicione o primeiro',
  modalTitleCreate: 'Criar Novo Prompt',
  modalTitleEdit: 'Editar Prompt',
  labelTitle: 'Título de identificação',
  placeholderTitle: 'Ex.: Especialista em Marketing SEO',
  labelContent: 'Instrução (Prompt)',
  placeholderContent: 'Escreva instruções detalhadas para a IA aqui...',
  hintContent: 'Dica: use colchetes [ASSIM] para preencher variáveis depois.',
  labelTags: 'Tags',
  placeholderTags: 'Ex.: marketing, seo (espaço ou vírgula para adicionar)',
  btnCancel: 'Cancelar',
  btnSave: 'Salvar Localmente',
  ariaLabelStar: 'Marcar prompt',
  ariaLabelEdit: 'Editar prompt',
  ariaLabelShare: 'Compartilhar prompt',
  ariaLabelCopy: 'Copiar prompt',
  ariaLabelDelete: 'Deletar prompt',
  varsTitle: 'Variáveis requeridas',
  noResults: 'Nenhum prompt encontrado para esta busca.',
  confirmTitle: 'Deletar prompt?',
  confirmDesc: 'Esta ação não pode ser desfeita.',
  btnCancelDelete: 'Cancelar',
  btnConfirmDelete: 'Deletar permanentemente',
};

export const content: ToolLocaleContent<PromptLibraryUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências de Engenharia de Prompts',
  bibliography: [
    { name: 'Guia de Engenharia de Prompts (DAIR.AI)', url: 'https://www.promptingguide.ai/' },
    { name: 'O que é engenharia de prompts (Google Cloud)', url: 'https://cloud.google.com/discover/what-is-prompt-engineering' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Por que você precisa de uma Biblioteca de Prompts?', level: 2 },
    { type: 'paragraph', html: 'Se você trabalha regularmente com ferramentas de IA como ChatGPT, Claude ou Midjourney, provavelmente se encontrou repetindo as mesmas instruções. Uma <strong>biblioteca de prompts</strong> é a solução definitiva para parar de perder tempo reescrevendo seus comandos favoritos.' },
    { type: 'title', text: 'Benefícios de organizar seus prompts', level: 3 },
    { type: 'list', items: [ '<strong>Busca instantânea:</strong> Encontre essa instrução específica que usou meses atrás com uma busca de texto simples.', '<strong>Classificação por tag:</strong> Rotule seus prompts como "marketing", "programação" ou "copywriting" para filtrar rapidamente.', '<strong>Cópia com um clique:</strong> Copie o texto completo para área de transferência com um único clique.', '<strong>Privacidade total:</strong> Todos os seus dados são armazenados localmente em seu navegador via localStorage.' ] },
    { type: 'title', text: 'Variáveis em seus prompts', level: 3 },
    { type: 'paragraph', html: 'Use a notação <strong>[VARIABLE]</strong> em seus prompts para criar campos dinamicamente preenchíveis. Quando você abre um cartão, as entradas aparecem para cada variável definida. O prompt é copiado com os valores preenchidos, pronto para colar em sua IA.' },
    { type: 'title', text: 'Compartilhando prompts', level: 3 },
    { type: 'paragraph', html: 'Cada prompt pode ser compartilhado via URL. O botão de compartilhamento gera um link que, quando aberto, mostra o formulário de criação pré-preenchido com o conteúdo do prompt.' },
  ],
};
