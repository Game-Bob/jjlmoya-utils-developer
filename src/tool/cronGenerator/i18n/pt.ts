import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CronGeneratorUI } from '../ui';

const slug = 'cron-pt';
const title = 'Gerador de Expressões Cron Online. Tradutor e Visualizador';
const description =
  'Ferramenta visual gratuita para gerar expressões Linux Cron. Traduz * * * * * para linguagem humana e mostra as próximas 5 execuções em tempo real.';

const faqData = [
  {
    question: 'O que é uma expressão Cron?',
    answer:
      'É uma sequência de texto que representa um agendamento de execução para tarefas automáticas em sistemas do tipo Unix (Linux, macOS). Consiste em 5 campos que definem minutos, horas, dia do mês, mês e dia da semana.',
  },
  {
    question: 'É compatível com todos os sistemas?',
    answer:
      'Sim, as expressões geradas seguem o padrão POSIX, compatível com Linux Crontab, macOS crons e serviços de nuvem como AWS CloudWatch ou GitHub Actions.',
  },
  {
    question: 'O que significa o asterisco (*) no Cron?',
    answer:
      'O asterisco é um curinga que significa "todos". Por exemplo, um * no campo de minutos significa que a tarefa será executada a cada minuto do intervalo definido.',
  },
  {
    question: 'Como posso verificar as próximas execuções?',
    answer:
      'A ferramenta inclui um visualizador em tempo real que mostra exatamente as próximas 5 datas e horários em que sua tarefa será executada de acordo com a expressão atual.',
  },
];

const howToData = [
  {
    name: 'Selecione o intervalo',
    text: 'Escolha com que frequência deseja que a tarefa seja executada usando as predefinições rápidas (a cada minuto, a cada hora, diariamente, etc.).',
  },
  {
    name: 'Configure detalhes avançados',
    text: 'Mude para a guia "Avançado" para definir manualmente os minutos, horas ou dias específicos da semana exatos.',
  },
  {
    name: 'Verifique a tradução e as datas',
    text: 'Leia a descrição em linguagem humana e verifique as próximas 5 execuções para confirmar se o agendamento está correto.',
  },
  {
    name: 'Copie a expressão',
    text: 'Copie a sequência resultante e cole-a diretamente no seu arquivo crontab ou configuração do servidor.',
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

const ui: CronGeneratorUI = {
  labelMinute: 'Minuto',
  labelHour: 'Hora',
  labelDom: 'Dia (Mês)',
  labelMonth: 'Mês',
  labelDow: 'Dia (Semana)',
  tabQuick: 'Rápido',
  tabAdvanced: 'Avançado',
  fieldMinute: 'Minuto (0-59)',
  fieldHour: 'Hora (0-23)',
  fieldDom: 'Dia do Mês (1-31)',
  fieldMonth: 'Mês (1-12)',
  fieldDow: 'Dia da Semana (0-6)',
  hintMinute: 'Ex: *, */5, 0,30',
  hintDow: '0 = Domingo, 6 = Sábado',
  labelNextRuns: 'Próximas Execuções',
  btnCopy: 'Copiar Expressão',
  btnCopied: 'Copiado!',
  msgNoRuns: 'Nenhuma execução futura encontrada em um intervalo razoável.',
  msgError: 'Erro ao calcular as datas.',
  presetEveryMinute: 'A cada minuto',
  presetEveryHour: 'A cada hora',
  presetDaily: 'Diariamente',
  presetWeekly: 'Semanalmente',
  presetMonthly: 'Mensalmente',
  presetYearly: 'Anualmente',
  descEveryMinute: 'Executa a cada minuto',
  descEveryHour: 'Executa no início de cada hora',
  descEveryDay: 'Executa todos os dias à meia-noite',
  descPrefix: 'Executa',
  descEveryMin: 'a cada minuto',
  descEveryHourOnDot: 'a cada hora em ponto',
  descAtMinute: 'no minuto {m} de cada hora',
  descAtTime: 'às {h}:{m}',
  descOnDay: ' no dia {d} do mês',
  descInMonth: ' no mês {mon}',
  descIfDow: ' se for dia {d} (0=Dom, 6=Sáb)',
  descDays: 'Domingo,Segunda-feira,Terça-feira,Quarta-feira,Quinta-feira,Sexta-feira,Sábado',
  descInvalid: 'Expressão inválida',
  timeNow: 'agora',
  timeMin: 'min',
  timeHour: 'h',
  timeDays: 'dias',
  locale: 'pt-PT',
};

export const content: ToolLocaleContent<CronGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Referências e Documentação',
  bibliography: [
    {
      name: 'Manual do GNU Crontab: Expressões Cron no Linux',
      url: 'https://www.gnu.org/software/mcron/manual/html_node/Crontab-file.html',
    },
    {
      name: 'Cron na Wikipedia: História e Sintaxe',
      url: 'https://pt.wikipedia.org/wiki/Cron',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'A Importância do Cron na Automação Moderna',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Apesar de vivermos na era dos servidores <em>serverless</em> e dos fluxos de trabalho na nuvem, o sistema <strong>Crontab</strong> continua a ser a espinha dorsal da infraestrutura tecnológica global. De pequenos blogs a infraestruturas bancárias massivas, o agendamento de tarefas é o que mantém o mundo digital em funcionamento.',
    },
    {
      type: 'title',
      text: 'Anatomia de uma Expressão Cron',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Campo 1 - Minuto (0-59):</strong> Quando a tarefa começa dentro da hora.',
        '<strong>Campo 2 - Hora (0-23):</strong> Formato de 24 horas obrigatório.',
        '<strong>Campo 3 - Dia do Mês (1-31):</strong> Dia específico do calendário.',
        '<strong>Campo 4 - Mês (1-12):</strong> De janeiro a dezembro.',
        '<strong>Campo 5 - Dia da Semana (0-6):</strong> 0 é normalmente domingo.',
      ],
    },
    {
      type: 'title',
      text: 'Operadores especiais e erros comuns',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Use a barra <code>/</code> para definir etapas: <code>*/5</code> nos minutos executa a cada 5 minutos. A vírgula <code>,</code> cria listas (<code>1,3,5</code>) e o hífen <code>-</code> define intervalos (<code>1-5</code>).',
    },
    {
      type: 'paragraph',
      html: '90% dos servidores funcionam em <strong>UTC</strong>. Se agendar uma tarefa às 02:00 da manhã pensando no seu fuso horário local, ela poderá ser executada num horário inesperado. Além disso, o Cron não tem acesso ao seu <code>$PATH</code> habitual — use sempre caminhos absolutos como <code>/usr/local/bin/node</code>.',
    },
  ],
};

