import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CronGeneratorUI } from '../ui';

const slug = 'cron-expressie-generator';
const title = 'Online Cron Expressie Generator. Vertaler en Visualizer';
const description =
  'Gratis visuele tool om Linux Cron expressies te genereren. Vertaalt * * * * * naar menselijke taal en toont de volgende 5 uitvoeringen in real-time.';

const faqData = [
  {
    question: 'Wat is een Cron expressie?',
    answer:
      'Het is een tekstreeks die een uitvoeringsschema vertegenwoordigt voor automatische taken op Unix-achtige systemen (Linux, macOS). Het bestaat uit 5 velden die minuten, uren, dag van de maand, maand en dag van de week definiëren.',
  },
  {
    question: 'Is het compatibel met alle systemen?',
    answer:
      'Ja, de gegenereerde expressies volgen de POSIX-standaard, compatibel met Linux Crontab, macOS crons en clouddiensten zoals AWS CloudWatch of GitHub Actions.',
  },
  {
    question: 'Wat betekent het sterretje (*) in Cron?',
    answer:
      'Het sterretje is een wildcard die "alle" betekent. Bijvoorbeeld, een * in het minutenveld betekent dat de taak elke minuut van het gedefinieerde bereik zal worden uitgevoerd.',
  },
  {
    question: 'Hoe kan ik de komende uitvoeringen controleren?',
    answer:
      'De tool bevat een real-time viewer die precies de volgende 5 datums en tijden toont waarop uw taak volgens de huidige expressie zal worden uitgevoerd.',
  },
];

const howToData = [
  {
    name: 'Selecteer het interval',
    text: 'Kies hoe vaak u de taak wilt laten uitvoeren met de snelle presets (elke minuut, elk uur, dagelijks, enz.).',
  },
  {
    name: 'Configureer geavanceerde details',
    text: 'Schakel over naar het tabblad "Geavanceerd" om handmatig de exacte minuten, uren of specifieke dagen van de week te definiëren.',
  },
  {
    name: 'Verifieer de vertaling en datums',
    text: 'Lees de beschrijving in menselijke taal en controleer de volgende 5 uitvoeringen om te bevestigen dat het schema correct is.',
  },
  {
    name: 'Kopieer de expressie',
    text: 'Kopieer de resulterende reeks en plak deze rechtstreeks in uw crontab-bestand of serverconfiguratie.',
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
  inLanguage: 'nl',
};

const ui: CronGeneratorUI = {
  labelMinute: 'Minuut',
  labelHour: 'Uur',
  labelDom: 'Dag (Maand)',
  labelMonth: 'Maand',
  labelDow: 'Dag (Week)',
  tabQuick: 'Snel',
  tabAdvanced: 'Geavanceerd',
  fieldMinute: 'Minuut (0-59)',
  fieldHour: 'Uur (0-23)',
  fieldDom: 'Dag van de maand (1-31)',
  fieldMonth: 'Maand (1-12)',
  fieldDow: 'Dag van de week (0-6)',
  hintMinute: 'Bijv.: *, */5, 0,30',
  hintDow: '0 = Zondag, 6 = Zaterdag',
  labelNextRuns: 'Volgende uitvoeringen',
  btnCopy: 'Kopieer expressie',
  btnCopied: 'Gekopieerd!',
  msgNoRuns: 'Geen komende uitvoeringen gevonden binnen een redelijk bereik.',
  msgError: 'Fout bij het berekenen van datums.',
  presetEveryMinute: 'Elke minuut',
  presetEveryHour: 'Elk uur',
  presetDaily: 'Dagelijks',
  presetWeekly: 'Wekelijks',
  presetMonthly: 'Maandelijks',
  presetYearly: 'Jaarlijks',
  descEveryMinute: 'Wordt elke minuut uitgevoerd',
  descEveryHour: 'Wordt aan het begin van elk uur uitgevoerd',
  descEveryDay: 'Wordt elke dag om middernacht uitgevoerd',
  descPrefix: 'Wordt uitgevoerd',
  descEveryMin: 'elke minuut',
  descEveryHourOnDot: 'elk uur op de stip',
  descAtMinute: 'om minuut {m} van elk uur',
  descAtTime: 'om {h}:{m}',
  descOnDay: ' op dag {d} van de maand',
  descInMonth: ' in maand {mon}',
  descIfDow: ' als het dag {d} is (0=Zon, 6=Zat)',
  descDays: 'Zondag,Maandag,Dinsdag,Woensdag,Donderdag,Vrijdag,Zaterdag',
  descInvalid: 'Ongeldige expressie',
  timeNow: 'nu',
  timeMin: 'min',
  timeHour: 'u',
  timeDays: 'dagen',
  locale: 'nl-NL',
};

export const content: ToolLocaleContent<CronGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Referenties en Documentatie',
  bibliography: [
    {
      name: 'GNU Crontab Handleiding: Cron expressies op Linux',
      url: 'https://www.gnu.org/software/mcron/manual/html_node/Crontab-file.html',
    },
    {
      name: 'Cron op Wikipedia: Geschiedenis en Syntaxis',
      url: 'https://nl.wikipedia.org/wiki/Cron',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Het belang van Cron in moderne automatisering',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ondanks dat we in het tijdperk van <em>serverless</em> servers en cloudworkflows leven, blijft het <strong>Crontab</strong>-systeem de ruggengraat van de wereldwijde technologie-infrastructur. Van kleine blogs tot enorme bankinfrastructuren, taakplanning is wat de digitale wereld draaiende houdt.',
    },
    {
      type: 'title',
      text: 'Anatomie van een Cron expressie',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Veld 1 - Minuut (0-59):</strong> Wanneer de taak binnen het uur begint.',
        '<strong>Veld 2 - Uur (0-23):</strong> 24-uurs formaat vereist.',
        '<strong>Veld 3 - Dag van de maand (1-31):</strong> Specifieke kalenderdag.',
        '<strong>Veld 4 - Maand (1-12):</strong> Van januari tot december.',
        '<strong>Veld 5 - Dag van de week (0-6):</strong> 0 is meestal zondag.',
      ],
    },
    {
      type: 'title',
      text: 'Speciale operatoren en veelvoorkomende fouten',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Gebruik de schuine streep <code>/</code> om stappen te definiëren: <code>*/5</code> in minuten wordt elke 5 minuten uitgevoerd. De komma <code>,</code> maakt lijsten (<code>1,3,5</code>) en het koppelteken <code>-</code> definieert bereiken (<code>1-5</code>).',
    },
    {
      type: 'paragraph',
      html: '90% van de servers draait op <strong>UTC</strong>. Als u een taak plant om 02:00 uur \'s nachts op basis van uw lokale tijdzone, kan deze op een onverwacht tijdstip worden uitgevoerd. Bovendien heeft Cron geen toegang tot uw gebruikelijke <code>$PATH</code> — gebruik altijd absolute paden zoals <code>/usr/local/bin/node</code>.',
    },
  ],
};

