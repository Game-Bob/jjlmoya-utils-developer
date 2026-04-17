import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CronGeneratorUI } from '../ui';

const slug = 'generatore-espressioni-cron';
const title = 'Generatore di espressioni Cron online. Traduttore e visualizzatore';
const description =
  'Strumento visivo gratuito per generare espressioni Linux Cron. Traduce * * * * * in linguaggio umano e mostra le prossime 5 esecuzioni in tempo reale.';

const faqData = [
  {
    question: 'Cos\'è un\'espressione Cron?',
    answer:
      'È una stringa di testo che rappresenta una pianificazione di esecuzione per attività automatiche su sistemi di tipo Unix (Linux, macOS). Consiste in 5 campi che definiscono minuti, ore, giorno del mese, mese e giorno della settimana.',
  },
  {
    question: 'È compatibile con tutti i sistemi?',
    answer:
      'Sì, le espressioni generate seguono lo standard POSIX, compatibile con Linux Crontab, macOS cron e servizi cloud come AWS CloudWatch o GitHub Actions.',
  },
  {
    question: 'Cosa significa l\'asterisco (*) in Cron?',
    answer:
      'L\'asterisco è un carattere jolly che significa "tutti". Ad esempio, un * nel campo dei minuti significa che l\'attività verrà eseguita ogni minuto dell\'intervallo definito.',
  },
  {
    question: 'Come posso controllare le prossime esecuzioni?',
    answer:
      'Lo strumento include un visualizzatore in tempo reale che mostra esattamente le prossime 5 date e orari in cui l\'attività verrà eseguita in base all\'espressione corrente.',
  },
];

const howToData = [
  {
    name: 'Seleziona l\'intervallo',
    text: 'Scegli la frequenza con cui desideri eseguire l\'attività utilizzando i predefiniti rapidi (ogni minuto, ogni ora, ogni giorno, ecc.).',
  },
  {
    name: 'Configura dettagli avanzati',
    text: 'Passa alla scheda "Avanzate" per definire manualmente i minuti, le ore o i giorni della settimana esatti.',
  },
  {
    name: 'Verifica la traduzione e le date',
    text: 'Leggi la descrizione in linguaggio umano e controlla le prossime 5 esecuzioni per confermare che la pianificazione sia corretta.',
  },
  {
    name: 'Copia l\'espressione',
    text: 'Copia la stringa risultante e incollala direttamente nel file crontab o nella configurazione del server.',
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
  inLanguage: 'it',
};

const ui: CronGeneratorUI = {
  labelMinute: 'Minuto',
  labelHour: 'Ora',
  labelDom: 'Giorno (Mese)',
  labelMonth: 'Mese',
  labelDow: 'Giorno (Settimana)',
  tabQuick: 'Rapido',
  tabAdvanced: 'Avanzato',
  fieldMinute: 'Minuto (0-59)',
  fieldHour: 'Ora (0-23)',
  fieldDom: 'Giorno del mese (1-31)',
  fieldMonth: 'Mese (1-12)',
  fieldDow: 'Giorno della settimana (0-6)',
  hintMinute: 'Es: *, */5, 0,30',
  hintDow: '0 = Domenica, 6 = Sabato',
  labelNextRuns: 'Prossime esecuzioni',
  btnCopy: 'Copia espressione',
  btnCopied: 'Copiato!',
  msgNoRuns: 'Nessuna esecuzione imminente trovata entro un intervallo ragionevole.',
  msgError: 'Errore nel calcolo delle date.',
  presetEveryMinute: 'Ogni minuto',
  presetEveryHour: 'Ogni ora',
  presetDaily: 'Ogni giorno',
  presetWeekly: 'Ogni settimana',
  presetMonthly: 'Ogni mese',
  presetYearly: 'Ogni anno',
  descEveryMinute: 'Eseguito ogni minuto',
  descEveryHour: 'Eseguito all\'inizio di ogni ora',
  descEveryDay: 'Eseguito ogni giorno a mezzanotte',
  descPrefix: 'Eseguito',
  descEveryMin: 'ogni minuto',
  descEveryHourOnDot: 'ogni ora in punto',
  descAtMinute: 'al minuto {m} di ogni ora',
  descAtTime: 'alle ore {h}:{m}',
  descOnDay: ' il giorno {d} del mese',
  descInMonth: ' nel mese {mon}',
  descIfDow: ' se è il giorno {d} (0=Dom, 6=Sab)',
  descDays: 'Domenica,Lunedì,Martedì,Mercoledì,Giovedì,Venerdì,Sabato',
  descInvalid: 'Espressione non valida',
  timeNow: 'adesso',
  timeMin: 'min',
  timeHour: 'h',
  timeDays: 'giorni',
  locale: 'it-IT',
};

export const content: ToolLocaleContent<CronGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Riferimenti e documentazione',
  bibliography: [
    {
      name: 'Manuale GNU Crontab: espressioni Cron su Linux',
      url: 'https://www.gnu.org/software/mcron/manual/html_node/Crontab-file.html',
    },
    {
      name: 'Cron su Wikipedia: storia e sintassi',
      url: 'https://it.wikipedia.org/wiki/Cron',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'L\'importanza di Cron nell\'automazione moderna',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nonostante si viva nell\'era dei server <em>serverless</em> e dei flussi di lavoro cloud, il sistema <strong>Crontab</strong> rimane la spina dorsale dell\'infrastruttura tecnologica globale. Dai piccoli blog alle enormi infrastrutture bancarie, la pianificazione delle attività è ciò che fa funzionare il mondo digitale.',
    },
    {
      type: 'title',
      text: 'Anatomia di un\'espressione Cron',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Campo 1 - Minuto (0-59):</strong> Quando l\'attività inizia all\'interno dell\'ora.',
        '<strong>Campo 2 - Ora (0-23):</strong> Richiesto il formato 24 ore.',
        '<strong>Campo 3 - Giorno del mese (1-31):</strong> Giorno specifico del calendario.',
        '<strong>Campo 4 - Mese (1-12):</strong> Da gennaio a dicembre.',
        '<strong>Campo 5 - Giorno della settimana (0-6):</strong> 0 è in genere domenica.',
      ],
    },
    {
      type: 'title',
      text: 'Operatori speciali ed errori comuni',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Usa la barra <code>/</code> per definire gli intervalli: <code>*/5</code> nei minuti indica l\'esecuzione ogni 5 minuti. La virgola <code>,</code> crea elenchi (<code>1,3,5</code>) e il trattino <code>-</code> definisce intervalli (<code>1-5</code>).',
    },
    {
      type: 'paragraph',
      html: 'Il 90% dei server funziona in <strong>UTC</strong>. Se pianifichi un\'attività alle 02:00 del mattino pensando al tuo fuso orario locale, potrebbe essere eseguita in un orario imprevisto. Inoltre, Cron non ha accesso al tuo solito <code>$PATH</code>: usa sempre percorsi assoluti come <code>/usr/local/bin/node</code>.',
    },
  ],
};

