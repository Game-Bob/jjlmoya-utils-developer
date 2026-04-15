import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CronGeneratorUI } from '../ui';

const slug = 'cron-de';
const title = 'Online Cron Ausdrucksgenerator. Übersetzer und Visualisierer';
const description =
  'Kostenloses visuelles Tool zum Generieren von Linux-Cron-Ausdrücken. Übersetzt * * * * * in menschliche Sprache und zeigt die nächsten 5 Ausführungen in Echtzeit an.';

const faqData = [
  {
    question: 'Was ist ein Cron-Ausdruck?',
    answer:
      'Es handelt sich um eine Textzeichenfolge, die einen Zeitplan für die Ausführung automatischer Aufgaben auf Unix-ähnlichen Systemen (Linux, macOS) darstellt. Er besteht aus 5 Feldern, die Minuten, Stunden, Tag des Monats, Monat und Wochentag definieren.',
  },
  {
    question: 'Ist es mit allen Systemen kompatibel?',
    answer:
      'Ja, die generierten Ausdrücke folgen dem POSIX-Standard und sind kompatibel mit Linux Crontab, macOS Crons und Cloud-Diensten wie AWS CloudWatch oder GitHub Actions.',
  },
  {
    question: 'Was bedeutet das Sternchen (*) in Cron?',
    answer:
      'Das Sternchen ist ein Platzhalter, der „alle“ bedeutet. Beispielsweise bedeutet ein * im Minutenfeld, dass die Aufgabe jede Minute des definierten Bereichs ausgeführt wird.',
  },
  {
    question: 'Wie kann ich die anstehenden Ausführungen überprüfen?',
    answer:
      'Das Tool enthält eine Echtzeit-Anzeige, die genau die nächsten 5 Daten und Zeiten anzeigt, zu denen Ihre Aufgabe gemäß dem aktuellen Ausdruck ausgeführt wird.',
  },
];

const howToData = [
  {
    name: 'Intervall auswählen',
    text: 'Wählen Sie mit den Schnellvoreinstellungen aus, wie oft die Aufgabe ausgeführt werden soll (jede Minute, jede Stunde, täglich usw.).',
  },
  {
    name: 'Erweiterte Details konfigurieren',
    text: 'Wechseln Sie zur Registerkarte „Erweitert“, um die genauen Minuten, Stunden oder特定 Wochentage manuell zu definieren.',
  },
  {
    name: 'Übersetzung und Daten überprüfen',
    text: 'Lesen Sie die Beschreibung in menschlicher Sprache und überprüfen Sie die nächsten 5 Ausführungen, um sicherzustellen, dass der Zeitplan korrekt ist.',
  },
  {
    name: 'Ausdruck kopieren',
    text: 'Kopieren Sie die resultierende Zeichenfolge und fügen Sie sie direkt in Ihre crontab-Datei oder Serverkonfiguration ein.',
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
  inLanguage: 'de',
};

const ui: CronGeneratorUI = {
  labelMinute: 'Minute',
  labelHour: 'Stunde',
  labelDom: 'Tag (Monat)',
  labelMonth: 'Monat',
  labelDow: 'Tag (Woche)',
  tabQuick: 'Schnell',
  tabAdvanced: 'Erweitert',
  fieldMinute: 'Minute (0-59)',
  fieldHour: 'Stunde (0-23)',
  fieldDom: 'Tag des Monats (1-31)',
  fieldMonth: 'Monat (1-12)',
  fieldDow: 'Wochentag (0-6)',
  hintMinute: 'Z.B.: *, */5, 0,30',
  hintDow: '0 = Sonntag, 6 = Samstag',
  labelNextRuns: 'Nächste Ausführungen',
  btnCopy: 'Ausdruck kopieren',
  btnCopied: 'Kopiert!',
  msgNoRuns: 'Keine anstehenden Ausführungen in einem angemessenen Bereich gefunden.',
  msgError: 'Fehler beim Berechnen der Daten.',
  presetEveryMinute: 'Jede Minute',
  presetEveryHour: 'Jede Stunde',
  presetDaily: 'Täglich',
  presetWeekly: 'Wöchentlich',
  presetMonthly: 'Monatlich',
  presetYearly: 'Jährlich',
  descEveryMinute: 'Wird jede Minute ausgeführt',
  descEveryHour: 'Wird zu Beginn jeder Stunde ausgeführt',
  descEveryDay: 'Wird jeden Tag um Mitternacht ausgeführt',
  descPrefix: 'Wird ausgeführt',
  descEveryMin: 'jede Minute',
  descEveryHourOnDot: 'zu jeder vollen Stunde',
  descAtMinute: 'um Minute {m} jeder Stunde',
  descAtTime: 'um {h}:{m}',
  descOnDay: ' am Tag {d} des Monats',
  descInMonth: ' im Monat {mon}',
  descIfDow: ' wenn es Tag {d} ist (0=So, 6=Sa)',
  descDays: 'Sonntag,Montag,Dienstag,Mittwoch,Donnerstag,Freitag,Samstag',
  descInvalid: 'Ungültiger Ausdruck',
  timeNow: 'jetzt',
  timeMin: 'Min.',
  timeHour: 'Std.',
  timeDays: 'Tage',
  locale: 'de-DE',
};

export const content: ToolLocaleContent<CronGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Referenzen und Dokumentation',
  bibliography: [
    {
      name: 'GNU Crontab-Handbuch: Cron-Ausdrücke unter Linux',
      url: 'https://www.gnu.org/software/mcron/manual/html_node/Crontab-file.html',
    },
    {
      name: 'Cron auf Wikipedia: Geschichte und Syntax',
      url: 'https://de.wikipedia.org/wiki/Cron',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Die Bedeutung von Cron in der modernen Automatisierung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Obwohl wir im Zeitalter von <em>Serverless</em>-Servern und Cloud-Workflows leben, bleibt das <strong>Crontab</strong>-System das Rückgrat der globalen Technologieinfrastruktur. Von kleinen Blogs bis hin zu massiven Bankinfrastrukturen – die Aufgabenplanung sorgt dafür, dass die digitale Welt läuft.',
    },
    {
      type: 'title',
      text: 'Anatomie eines Cron-Ausdrucks',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Feld 1 - Minute (0-59):</strong> Wann die Aufgabe innerhalb der Stunde beginnt.',
        '<strong>Feld 2 - Stunde (0-23):</strong> 24-Stunden-Format erforderlich.',
        '<strong>Feld 3 - Tag des Monats (1-31):</strong> Bestimmter Kalendertag.',
        '<strong>Feld 4 - Monat (1-12):</strong> Von Januar bis Dezember.',
        '<strong>Feld 5 - Wochentag (0-6):</strong> 0 ist normalerweise Sonntag.',
      ],
    },
    {
      type: 'title',
      text: 'Spezielle Operatoren und häufige Fehler',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Verwenden Sie den Schrägstrich <code>/</code>, um Schritte zu definieren: <code>*/5</code> in Minuten wird alle 5 Minuten ausgeführt. Das Komma <code>,</code> erstellt Listen (<code>1,3,5</code>) und der Bindestrich <code>-</code> definiert Bereiche (<code>1-5</code>).',
    },
    {
      type: 'paragraph',
      html: '90 % der Server laufen auf <strong>UTC</strong>. Wenn Sie eine Aufgabe für 02:00 Uhr morgens in Ihrer lokalen Zeitzone planen, wird sie möglicherweise zu einer unerwarteten Zeit ausgeführt. Außerdem hat Cron keinen Zugriff auf Ihren üblichen <code>$PATH</code> – verwenden Sie immer absolute Pfade wie <code>/usr/local/bin/node</code>.',
    },
  ],
};

