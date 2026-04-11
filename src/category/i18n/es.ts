import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'desarrollo-web',
  title: 'Desarrollo Web',
  description:
    'Herramientas gratuitas de desarrollo web: formateadores, calculadoras CSS, generadores y utilidades para programadores frontend y backend.',
  seo: [
    {
      type: 'summary',
      title: 'Herramientas para Desarrolladores',
      items: [
        'Formateadores y validadores de código',
        'Calculadoras CSS y de aspectos visuales',
        'Generadores de configuración y seguridad',
        'Procesamiento 100% local y privado',
      ],
    },
    {
      type: 'title',
      text: 'Utilidades Esenciales para el Desarrollo Web',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Una colección de herramientas diseñadas para acelerar el flujo de trabajo de desarrolladores web. Desde la validación de JSON hasta calculadoras de especificidad CSS, cada utilidad está pensada para resolver problemas reales en el día a día del desarrollo.',
    },
    {
      type: 'tip',
      title: 'Privacidad garantizada',
      html: 'Todas las herramientas procesan los datos localmente en tu navegador. Ningún código, dato ni archivo se envía a ningún servidor externo.',
    },
  ],
};
