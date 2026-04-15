import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'desenvolvimento-web',
  title: 'Desenvolvimento Web',
  description:
    'Ferramentas gratuitas de desenvolvimento web: formatadores, calculadoras CSS, geradores e utilitários para desenvolvedores frontend e backend.',
  seo: [
    {
      type: 'summary',
      title: 'Ferramentas de Desenvolvedor',
      items: [
        'Formatadores e validadores de código',
        'Calculadoras CSS e ferramentas visuais',
        'Geradores de configuração e segurança',
        'Processamento 100% local e privado',
      ],
    },
    {
      type: 'title',
      text: 'Utilitários Essenciais para o Desenvolvimento Web',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uma coleção de ferramentas projetadas para acelerar o fluxo de trabalho dos desenvolvedores web. Da validação de JSON às calculadoras de especificidade CSS, cada utilitário foi criado para resolver problemas reais no dia a dia do desenvolvimento.',
    },
    {
      type: 'tip',
      title: 'Privacidade garantida',
      html: 'Todas as ferramentas processam dados localmente no seu navegador. Nenhum código, dado ou arquivo é enviado para qualquer servidor externo.',
    },
  ],
};
