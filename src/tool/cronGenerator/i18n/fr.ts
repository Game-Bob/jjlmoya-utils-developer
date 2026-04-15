import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CronGeneratorUI } from '../ui';

const slug = 'cron-fr';
const title = 'Générateur d\'expressions Cron en ligne. Traducteur et visualiseur';
const description =
  'Outil visuel gratuit pour générer des expressions Cron Linux. Traduit * * * * * en langage humain et affiche les 5 prochaines exécutions en temps réel.';

const faqData = [
  {
    question: 'Qu\'est-ce qu\'une expression Cron ?',
    answer:
      'C\'est une chaîne de texte qui représente un calendrier d\'exécution pour des tâches automatiques sur les systèmes de type Unix (Linux, macOS). Elle se compose de 5 champs définissant les minutes, heures, jour du mois, mois et jour de la semaine.',
  },
  {
    question: 'Est-elle compatible avec tous les systèmes ?',
    answer:
      'Oui, les expressions générées suivent la norme POSIX, compatible avec Linux Crontab, les crons macOS et les services cloud comme AWS CloudWatch ou GitHub Actions.',
  },
  {
    question: 'Que signifie l\'astérisque (*) dans Cron ?',
    answer:
      'L\'astérisque est un caractère générique signifiant "tous". Par exemple, un * dans le champ des minutes indique que la tâche s\'exécutera chaque minute de la plage définie.',
  },
  {
    question: 'Comment vérifier les prochaines exécutions ?',
    answer:
      'L\'outil inclut un visualiseur en temps réel affichant exactement les 5 prochaines dates et heures auxquelles votre tâche s\'exécutera selon l\'expression actuelle.',
  },
];

const howToData = [
  {
    name: 'Sélectionner l\'intervalle',
    text: 'Choisissez la fréquence d\'exécution de la tâche à l\'aide des préréglages rapides (chaque minute, chaque heure, quotidien, etc.).',
  },
  {
    name: 'Configurer les détails avancés',
    text: 'Passez à l\'onglet "Avancé" pour définir manuellement les minutes, heures ou jours de la semaine spécifiques.',
  },
  {
    name: 'Vérifier la traduction et les dates',
    text: 'Lisez la description en langage naturel et vérifiez les 5 prochaines exécutions pour confirmer que le calendrier est correct.',
  },
  {
    name: 'Copier l\'expression',
    text: 'Copiez la chaîne résultante et collez-la directement dans votre fichier crontab ou votre configuration serveur.',
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
  inLanguage: 'fr',
};

const ui: CronGeneratorUI = {
  labelMinute: 'Minute',
  labelHour: 'Heure',
  labelDom: 'Jour (Mois)',
  labelMonth: 'Mois',
  labelDow: 'Jour (Semaine)',
  tabQuick: 'Rapide',
  tabAdvanced: 'Avancé',
  fieldMinute: 'Minute (0-59)',
  fieldHour: 'Heure (0-23)',
  fieldDom: 'Jour du Mois (1-31)',
  fieldMonth: 'Mois (1-12)',
  fieldDow: 'Jour de la Semaine (0-6)',
  hintMinute: 'Ex : *, */5, 0,30',
  hintDow: '0 = Dimanche, 6 = Samedi',
  labelNextRuns: 'Prochaines exécutions',
  btnCopy: 'Copier l\'expression',
  btnCopied: 'Copié !',
  msgNoRuns: 'Aucune exécution prochaine trouvée dans un délai raisonnable.',
  msgError: 'Erreur lors du calcul des dates.',
  presetEveryMinute: 'Chaque minute',
  presetEveryHour: 'Chaque heure',
  presetDaily: 'Quotidien',
  presetWeekly: 'Hebdomadaire',
  presetMonthly: 'Mensuel',
  presetYearly: 'Annuel',
  descEveryMinute: 'S\'exécute chaque minute',
  descEveryHour: 'S\'exécute au début de chaque heure',
  descEveryDay: 'S\'exécute chaque jour à minuit',
  descPrefix: 'S\'exécute',
  descEveryMin: 'chaque minute',
  descEveryHourOnDot: 'chaque heure pile',
  descAtMinute: 'à la minute {m} de chaque heure',
  descAtTime: 'à {h}:{m}',
  descOnDay: ' le jour {d} du mois',
  descInMonth: ' au mois {mon}',
  descIfDow: ' si c\'est le jour {d} (0=Dim, 6=Sam)',
  descDays: 'Dimanche,Lundi,Mardi,Mercredi,Jeudi,Vendredi,Samedi',
  descInvalid: 'Expression invalide',
  timeNow: 'maintenant',
  timeMin: 'min',
  timeHour: 'h',
  timeDays: 'jours',
  locale: 'fr-FR',
};

export const content: ToolLocaleContent<CronGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Questions fréquentes',
  faq: faqData,
  bibliographyTitle: 'Références et documentation',
  bibliography: [
    {
      name: 'Manuel GNU Crontab : Expressions Cron sous Linux',
      url: 'https://www.gnu.org/software/mcron/manual/html_node/Crontab-file.html',
    },
    {
      name: 'Cron sur Wikipedia : Histoire et syntaxe',
      url: 'https://en.wikipedia.org/wiki/Cron',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'L\'importance de Cron dans l\'automatisation moderne',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Malgré l\'ère des serveurs <em>serverless</em> et des flux de travail cloud, le système <strong>Crontab</strong> reste l\'épine dorsale de l\'infrastructure technologique mondiale. Des petits blogs aux grandes infrastructures bancaires, la planification des tâches maintient le monde numérique en marche.',
    },
    {
      type: 'title',
      text: 'Anatomie d\'une expression Cron',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Champ 1 - Minute (0-59) :</strong> Quand la tâche démarre dans l\'heure.',
        '<strong>Champ 2 - Heure (0-23) :</strong> Format 24 heures obligatoire.',
        '<strong>Champ 3 - Jour du Mois (1-31) :</strong> Jour calendaire spécifique.',
        '<strong>Champ 4 - Mois (1-12) :</strong> De janvier à décembre.',
        '<strong>Champ 5 - Jour de la Semaine (0-6) :</strong> 0 correspond généralement au Dimanche.',
      ],
    },
    {
      type: 'title',
      text: 'Opérateurs spéciaux et erreurs courantes',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Utilisez le slash <code>/</code> pour définir des pas : <code>*/5</code> en minutes s\'exécute toutes les 5 minutes. La virgule <code>,</code> crée des listes (<code>1,3,5</code>) et le tiret <code>-</code> définit des plages (<code>1-5</code>).',
    },
    {
      type: 'paragraph',
      html: '90% des serveurs fonctionnent en <strong>UTC</strong>. Si vous planifiez une tâche à 02h00 en pensant à votre fuseau local, elle peut s\'exécuter à un moment inattendu. De plus, Cron n\'a pas accès à votre <code>$PATH</code> habituel — utilisez toujours des chemins absolus comme <code>/usr/local/bin/node</code>.',
    },
  ],
};

