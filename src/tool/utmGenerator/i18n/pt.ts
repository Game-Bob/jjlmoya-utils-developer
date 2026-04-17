import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UtmGeneratorUI } from '../ui';

const slug = 'gerador-parametros-utm';
const title = 'Gerador de Parâmetros UTM para o Google Analytics';
const description = 'Crie links de rastreamento precisos para as suas campanhas de marketing digital. Otimizado para o Google Analytics e outras ferramentas de análise.';

const faqData = [
  {
    question: 'O uso de parâmetros UTM é ruim para o SEO?',
    answer: 'Não, desde que você use tags canônicas. Os mecanismos de busca entendem que os parâmetros UTM são para análise e não criam conteúdo duplicado.',
  },
  {
    question: 'Devo usar parâmetros UTM para links internos?',
    answer: 'Não, nunca. Tags UTM em links internos quebram a sessão do usuário em ferramentas como o Google Analytics, distorcendo os seus dados de tráfego.',
  },
  {
    question: 'O Google Analytics distingue entre maiúsculas e minúsculas no UTM?',
    answer: 'Sim. "google", "Google" e "GOOGLE" serão tratados como fontes diferentes. Mantenha sempre a consistência, de preferência usando apenas letras minúsculas.',
  },
];

const howToData = [
  { name: 'Insira a URL', text: 'Insira a URL completa do seu site, incluindo https://' },
  { name: 'Defina a fonte', text: 'Especifique de onde vem o tráfego (google, facebook, newsletter, etc.)' },
  { name: 'Selecione o meio', text: 'Escolha o tipo de canal (cpc, e-mail, social, orgânico, etc.)' },
  { name: 'Dê um nome à sua campanha', text: 'Atribua um nome identificável para agrupar os seus esforços de marketing' },
  { name: 'Copie e use', text: 'Copie a URL gerada e use-a nas suas postagens, anúncios ou assinaturas de e-mail' },
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

const ui: UtmGeneratorUI = {
  labelUrl: 'URL do site (ex: https://example.com) *',
  labelSource: 'Fonte da campanha (ex: google, newsletter) *',
  labelMedium: 'Meio da campanha (ex: cpc, e-mail)',
  labelCampaign: 'Nome da campanha (ex: oferta_verao)',
  labelTerm: 'Termo da campanha (ex: comprar_sapatos)',
  labelContent: 'Conteúdo da campanha (ex: banner_superior)',
  labelGenerated: 'URL Gerada:',
  btnCopy: 'Copiar Link',
  btnCopied: 'Copiado!',
  errorInvalid: 'Insira uma URL válida',
  errorInvalidUrl: 'URL inválida',
};

export const content: ToolLocaleContent<UtmGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências',
  bibliography: [
    { name: 'Coletar dados de campanha com URLs personalizadas - Ajuda do Google Analytics (2024)', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: 'Melhores práticas para marcação de URL de campanha - Blog VWO (2023)', url: 'https://vwo.com/blog/utm-tagging-best-practices/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Gerador UTM: Parâmetros de Rastreamento para o Google Analytics', level: 2 },
    {
      type: 'paragraph',
      html: 'Os parâmetros <strong>UTM</strong> (Urchin Tracking Module) são etiquetas de texto adicionadas ao final de uma URL para rastrear o tráfego da web. Nosso gerador simplifica a criação de links rastreáveis para as suas campanhas de marketing digital.',
    },
    { type: 'title', text: 'Os 5 Pilares de uma URL Rastreável', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Fonte da Campanha:</strong> Identifica o mecanismo de busca, a rede social ou a origem do tráfego. Exemplo: google, newsletter, facebook.',
        '<strong>Meio da Campanha:</strong> Refere-se ao canal de marketing. Exemplo: cpc, e-mail, social, banner, orgânico.',
        '<strong>Nome da Campanha:</strong> O nome específico da sua campanha. Exemplo: oferta_verao_2025, lancamento_app_v2.',
        '<strong>Termo da Campanha:</strong> Para buscas pagas, as palavras-chave pelas quais você deu um lance. Exemplo: comprar_sapatos_esportivos.',
        '<strong>Conteúdo da Campanha:</strong> Para testes A/B. Diferencia elementos semelhantes dentro de uma campanha. Exemplo: cabecalho_v1, lateral_v2.',
      ],
    },
    { type: 'title', text: 'Melhores Práticas para Marcação UTM', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Consistência de caixa:</strong> As ferramentas diferenciam entre "Google", "GOOGLE" e "google". Use sempre letras minúsculas para evitar duplicatas.',
        '<strong>Evite espaços:</strong> Espaços tornam-se %20. Em vez disso, use hífens (-) ou sublinhados (_).',
        '<strong>Não use em links internos:</strong> O rastreamento UTM é exclusivo para tráfego externo. Em links internos, ele quebra a sessão e prejudica as métricas principais.',
        '<strong>Documente as suas tags:</strong> Mantenha um registro de todas as combinações que você usa para evitar inconsistências.',
      ],
    },
  ],
};

