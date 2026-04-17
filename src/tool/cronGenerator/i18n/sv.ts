import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CronGeneratorUI } from '../ui';

const slug = 'cron-uttrycksgenerator';
const title = 'Online Cron Expression Generator. Översättare och visualisera';
const description =
  'Gratis visuellt verktyg för att generera Linux Cron-uttryck. Översätter * * * * * till mänskligt språk och visar de nästa 5 körningarna i realtid.';

const faqData = [
  {
    question: 'Vad är ett Cron-uttryck?',
    answer:
      'Det är en textsträng som representerar ett körschema för automatiska uppgifter på Unix-liknande system (Linux, macOS). Det består av 5 fält som definierar minuter, timmar, dag i månaden, månad och veckodag.',
  },
  {
    question: 'Är det kompatibelt med alla system?',
    answer:
      'Ja, de genererade uttrycken följer POSIX-standarden, kompatibla med Linux Crontab, macOS cron och molntjänster som AWS CloudWatch eller GitHub Actions.',
  },
  {
    question: 'Vad betyder asterisk (*) i Cron?',
    answer:
      'Asterisken är ett jokertecken som betyder "alla". Till exempel betyder en * i fältet för minuter att uppgiften kommer att köras varje minut i det definierade intervallet.',
  },
  {
    question: 'Hur kan jag kontrollera kommande körningar?',
    answer:
      'Verktyget innehåller en realtidsvy som visar exakt de nästa 5 datumen och tiderna då din uppgift kommer att köras enligt det aktuella uttrycket.',
  },
];

const howToData = [
  {
    name: 'Välj intervall',
    text: 'Välj hur ofta du vill att uppgiften ska köras med hjälp av snabbinställningarna (varje minut, varje timme, dagligen, etc.).',
  },
  {
    name: 'Konfigurera avancerade detaljer',
    text: 'Byt till fliken "Avancerat" för att manuellt definiera exakta minuter, timmar eller specifika veckodagar.',
  },
  {
    name: 'Verifiera översättning och datum',
    text: 'Läs beskrivningen på mänskligt språk och kontrollera de nästa 5 körningarna för att bekräfta att schemat är korrekt.',
  },
  {
    name: 'Kopiera uttrycket',
    text: 'Kopiera den resulterande strängen och klistra in den direkt i din crontab-fil eller serverkonfiguration.',
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
  inLanguage: 'sv',
};

const ui: CronGeneratorUI = {
  labelMinute: 'Minut',
  labelHour: 'Timme',
  labelDom: 'Dag (månad)',
  labelMonth: 'Månad',
  labelDow: 'Dag (vecka)',
  tabQuick: 'Snabb',
  tabAdvanced: 'Avancerad',
  fieldMinute: 'Minut (0-59)',
  fieldHour: 'Timme (0-23)',
  fieldDom: 'Dag i månaden (1-31)',
  fieldMonth: 'Månad (1-12)',
  fieldDow: 'Veckodag (0-6)',
  hintMinute: 'T.ex.: *, */5, 0,30',
  hintDow: '0 = Söndag, 6 = Lördag',
  labelNextRuns: 'Nästa körningar',
  btnCopy: 'Kopiera uttryck',
  btnCopied: 'Kopierat!',
  msgNoRuns: 'Inga kommande körningar hittades inom ett rimligt intervall.',
  msgError: 'Fel vid beräkning av datum.',
  presetEveryMinute: 'Varje minut',
  presetEveryHour: 'Varje timme',
  presetDaily: 'Dagligen',
  presetWeekly: 'Veckovis',
  presetMonthly: 'Månadsvis',
  presetYearly: 'Årligen',
  descEveryMinute: 'Körs varje minut',
  descEveryHour: 'Körs i början av varje timme',
  descEveryDay: 'Körs varje dag vid midnatt',
  descPrefix: 'Körs',
  descEveryMin: 'varje minut',
  descEveryHourOnDot: 'varje heltimme',
  descAtMinute: 'vid minut {m} varje timme',
  descAtTime: 'klockan {h}:{m}',
  descOnDay: ' den {d}:e i månaden',
  descInMonth: ' i månad {mon}',
  descIfDow: ' om det är dag {d} (0=Sön, 6=Lör)',
  descDays: 'Söndag,Måndag,Tisdag,Onsdag,Torsdag,Fredag,Lördag',
  descInvalid: 'Ogiltigt uttryck',
  timeNow: 'nu',
  timeMin: 'min',
  timeHour: 'h',
  timeDays: 'dagar',
  locale: 'sv-SE',
};

export const content: ToolLocaleContent<CronGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  bibliographyTitle: 'Referenser och dokumentation',
  bibliography: [
    {
      name: 'GNU Crontab Manual: Cron-uttryck på Linux',
      url: 'https://www.gnu.org/software/mcron/manual/html_node/Crontab-file.html',
    },
    {
      name: 'Cron på Wikipedia: Historia och syntax',
      url: 'https://sv.wikipedia.org/wiki/Cron',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Vikten av Cron i modern automatisering',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Trots att vi lever i en tid av <em>serverless</em>-servrar och molnbaserade arbetsflöden, förblir <strong>Crontab</strong>-systemet ryggraden i den globala teknikinfrastrukturen. Från små bloggar till massiva bankinfrastrukturer är schemaläggning av uppgifter det som håller den digitala världen igång.',
    },
    {
      type: 'title',
      text: 'Anatomin hos ett Cron-uttryck',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Fält 1 - Minut (0-59):</strong> När uppgiften startar inom timmen.',
        '<strong>Fält 2 - Timme (0-23):</strong> 24-timmarsformat krävs.',
        '<strong>Fält 3 - Dag i månaden (1-31):</strong> Specifik kalenderdag.',
        '<strong>Fält 4 - Månad (1-12):</strong> Från januari till december.',
        '<strong>Fält 5 - Veckodag (0-6):</strong> 0 är vanligtvis söndag.',
      ],
    },
    {
      type: 'title',
      text: 'Specialoperatorer och vanliga misstag',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Använd snedstreck <code>/</code> för att definiera steg: <code>*/5</code> i minuter körs var 5:e minut. Komma <code>,</code> skapar listor (<code>1,3,5</code>) och bindestreck <code>-</code> definierar intervall (<code>1-5</code>).',
    },
    {
      type: 'paragraph',
      html: '90 % av alla servrar körs på <strong>UTC</strong>. Om du schemalägger en uppgift kl. 02:00 med din lokala tidszon i åtanke, kan den köras vid en oväntad tidpunkt. Cron har dessutom inte tillgång till din vanliga <code>$PATH</code> – använd alltid absoluta sökvägar som <code>/usr/local/bin/node</code>.',
    },
  ],
};

