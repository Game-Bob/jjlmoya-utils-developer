import { bibliography } from '../bibliography';
import { createLocalizedContent } from '../localized';
import { ui } from '../ui';

export const content = createLocalizedContent({
  slug: 'dados-abertos-csv-json-valores-ausentes-linhas-duplicadas-verificador',
  title: 'Verificador de valores ausentes em CSV de dados abertos',
  description: 'Verifique tabelas CSV e JSON localmente para encontrar valores ausentes, linhas duplicadas, tipos mistos, falhas de análise e valores numéricos atípicos.',
  ui: { ...ui, fileLabel: 'Carregar uma tabela CSV ou JSON', pasteLabel: 'Ou cole uma tabela', exampleButton: 'Inspecionar exemplo', profileButton: 'Verificar estes dados', clearButton: 'Limpar perfil', noFile: 'Nenhum ficheiro selecionado', dropHint: 'Largue um ficheiro ou escolha um dispositivo', localBoundary: 'O ficheiro fica neste navegador. Nada é enviado.', intakeTitle: 'Traga uma tabela para a bancada', emptyTitle: 'A bancada de inspeção está pronta', factsTitle: 'Factos medidos nos seus dados', signalTitle: 'Mapa de sinais', signalIntro: 'Comece pelos sinais que exigem uma decisão humana.', warningsTitle: 'Sinais que exigem contexto', reviewTitle: 'Nota de revisão editável' },
  seo: [
    { type: 'title', text: 'Encontre problemas estruturais antes de reutilizar dados abertos', level: 2 },
    { type: 'paragraph', html: 'Uma tabela pode parecer organizada e esconder campos vazios, registos duplicados, tipos mistos, linhas malformadas ou números extremos. Esta ferramenta lê CSV e JSON no navegador e transforma esses sinais em contagens rastreáveis até às linhas fornecidas.' },
    { type: 'title', text: 'Verifique uma tabela pública com o contexto da fonte', level: 2 },
    { type: 'paragraph', html: 'Valores ausentes, null e vazios são contados separadamente. Linhas duplicadas aparecem com os respetivos números e valores numéricos atípicos usam limites IQR de Tukey. Um sinal é uma pergunta para revisão, não um veredito.' },
    { type: 'list', items: ['Compare o cabeçalho CSV ou a estrutura JSON com a documentação da fonte.', 'Verifique linhas duplicadas antes de eliminar registos.', 'Interprete tipos mistos e valores atípicos com unidades e contexto do domínio.', 'Guarde a fonte, o período, as definições e o uso previsto junto do perfil.'] },
  ],
  faqTitle: 'Perguntas sobre a verificação de tabelas',
  faq: [
    { question: 'Que ficheiros podem ser verificados?', answer: 'Um CSV com linha de cabeçalho ou um array JSON de objetos. Um objeto JSON também pode conter o array em data, rows ou records.' },
    { question: 'Como distingue ausente, null, vazio e zero?', answer: 'Uma propriedade JSON ausente, JSON null, texto vazio e zero numérico são registados separadamente.' },
    { question: 'Como são calculados os valores atípicos?', answer: 'A ferramenta usa limites de Tukey com 1,5 vezes o intervalo interquartil e mostra as linhas afetadas.' },
    { question: 'Isto prova uma qualidade elevada dos dados?', answer: 'Não. Mede sinais estruturais, mas não prova correção semântica, exatidão, proveniência, legalidade ou adequação.' },
  ],
  bibliography,
  howTo: [
    { name: 'Preparar a tabela', text: 'Use um cabeçalho CSV estável ou um array JSON e mantenha o contexto da fonte.' },
    { name: 'Carregar os dados', text: 'Escolha um ficheiro local, cole o texto ou abra o exemplo.' },
    { name: 'Ler os sinais', text: 'Veja as contagens de ausentes, vazios, duplicados, tipos mistos e valores atípicos.' },
    { name: 'Seguir as linhas', text: 'Regresse ao ficheiro original através dos números de linha e dos resultados por coluna.' },
    { name: 'Editar a revisão', text: 'Adicione o objetivo e as decisões e guarde a nota junto da fonte.' },
  ],
});
