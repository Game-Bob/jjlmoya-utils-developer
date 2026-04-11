import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'developpement-web',
  title: 'Développement Web',
  description:
    "Outils gratuits de développement web : formateurs, calculatrices CSS, générateurs et utilitaires pour développeurs frontend et backend.",
  seo: [
    {
      type: 'summary',
      title: 'Outils pour Développeurs',
      items: [
        'Formateurs et validateurs de code',
        'Calculatrices CSS et outils visuels',
        'Générateurs de configuration et de sécurité',
        'Traitement 100% local et privé',
      ],
    },
    {
      type: 'title',
      text: 'Utilitaires Essentiels pour le Développement Web',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Une collection d'outils conçus pour accélérer le flux de travail des développeurs web. De la validation JSON aux calculatrices de spécificité CSS, chaque utilitaire est pensé pour résoudre des problèmes réels au quotidien.",
    },
    {
      type: 'tip',
      title: 'Confidentialité garantie',
      html: "Tous les outils traitent les données localement dans votre navigateur. Aucun code, donnée ou fichier n'est envoyé à un serveur externe.",
    },
  ],
};
