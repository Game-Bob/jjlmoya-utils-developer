import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlCleanerUI } from '../ui';
const slug = 'limpador-url-rastreamento';
const title = 'Limpador de URL de Rastreamento: Remover UTM, FBCLID e GCLID';
const description = 'Remova automaticamente parâmetros de rastreamento e publicidade de suas URLs. Compartilhe links limpos e proteja sua privacidade digital instantaneamente.';
const faqData = [
  { question: 'Quais tipos de parâmetros de rastreamento essa ferramenta remove?', answer: 'Nossa ferramenta detecta e remove automaticamente parâmetros de rastreamento mais comuns, incluindo UTM (utm_source, utm_medium, etc.), identificadores de cliques publicitários (fbclid, gclid, msclkid) e identificadores de campanhas de email marketing (mc_cid, _hsenc).' },
  { question: 'Isso afeta a funcionalidade do site?', answer: 'Geralmente não. Esses parâmetros são usados quase exclusivamente para análise e marketing. Quando você os remove, a página carregará normalmente, mas o proprietário do site não conseguirá rastrear a origem exata do seu clique.' },
  { question: 'É seguro processar meus links aqui?', answer: 'Absolutamente. Como todas as nossas ferramentas, o processo é 100% client-side. Seus links nunca são enviados para nossos servidores; tudo acontece de forma privada no seu próprio navegador.' },
  { question: 'Por que meus links do Facebook são tão longos?', answer: 'Facebook adiciona um parâmetro chamado "fbclid" a todos os links que saem de sua plataforma. Isso permite que eles rastreiem sua atividade em outros sites, mesmo se você tiver publicidade de terceiros bloqueada.' },
];
const howToData = [
  { name: 'Cole sua URL', text: 'Digite a URL completa que contém parâmetros de rastreamento' },
  { name: 'Clique em Limpar', text: 'A ferramenta analisará a URL automaticamente' },
  { name: 'Revise resultados', text: 'Você verá a URL limpa e uma lista de parâmetros removidos' },
  { name: 'Copie e compartilhe', text: 'Use a URL limpa em seus emails, mídia social ou mensagens' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowToThing> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'pt' };
const ui: UrlCleanerUI = { labelInput: 'Cole a URL com parâmetros de rastreamento', btnClean: 'Limpar', labelCleaned: 'URL Limpa', labelRemoved: 'Rastreadores Removidos', countLabel: 'Parâmetros removidos', reductionLabel: 'Redução de comprimento', noneDetected: 'Nenhum parâmetro de rastreamento comum detectado.', errorInvalid: 'Digite uma URL válida.', btnCopy: 'Copiar', btnCopied: 'Copiado' };
export const content: ToolLocaleContent<UrlCleanerUI> = {
  slug, title, description, ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Recursos sobre Privacidade e Rastreamento Web',
  bibliography: [
    { name: 'Electronic Frontier Foundation (EFF): Guia para Rastreamento Online', url: 'https://www.eff.org/issues/online-behavioral-tracking' },
    { name: 'Google Analytics: Documentação de Parâmetro UTM', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: 'Web Privacy: O Impacto de Click IDs', url: 'https://www.w3.org/community/web-advertising/wiki/Click_Identifiers' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Limpador de URL de Rastreamento: Remover UTM, FBCLID e GCLID', level: 2 },
    { type: 'paragraph', html: 'Remova rastreadores invisíveis de seus links para compartilhá-los de forma limpa, privada e profissional. Descubra o que esses códigos estranhos em suas URLs significam.' },
    { type: 'title', text: 'O que é um Limpador de URL de Rastreamento e por que você precisa de um?', level: 3 },
    { type: 'paragraph', html: 'Já copiou um link para enviar a um amigo e percebeu que é três vezes mais longo do que deveria ser? Esse "ruído" extra são parâmetros de rastreamento. Um <strong>limpador de rastreamento</strong> é uma ferramenta projetada para "eliminar" a URL de todas as informações de publicidade e rastreamento que as grandes plataformas injetam em cada clique que você faz.' },
    { type: 'title', text: 'Parâmetros de rastreamento mais comuns', level: 3 },
    { type: 'list', items: [ '<strong>UTM (Google Analytics):</strong> utm_source, utm_medium, utm_campaign para rastrear campanhas', '<strong>FBCLID:</strong> Identificador de clique do Facebook para contornar restrições de cookies', '<strong>GCLID / DCLID:</strong> Google Click ID para vincular visitas com campanhas do Google Ads', '<strong>MSCLKID:</strong> Identificador de clique do Microsoft Advertising e Bing', '<strong>HubSpot & Mailchimp:</strong> Parâmetros de automação de marketing como _hsenc, mc_cid', '<strong>LinkedIn & Others:</strong> li_fat_id e outros rastreadores de mídia social' ] },
  ],
};
