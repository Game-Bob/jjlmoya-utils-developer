import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CronGeneratorUI } from '../ui';

const slug = 'generator-wyrazenia-cron';
const title = 'Internetowy generator wyrażeń Cron. Tłumacz i wizualizator';
const description =
  'Darmowe narzędzie wizualne do generowania wyrażeń Linux Cron. Tłumaczy * * * * * na język ludzki i pokazuje 5 następnych wykonań w czasie rzeczywistym.';

const faqData = [
  {
    question: 'Co to jest wyrażenie Cron?',
    answer:
      'Jest to ciąg tekstowy reprezentujący harmonogram wykonywania automatycznych zadań w systemach typu Unix (Linux, macOS). Składa się z 5 pól definiujących minuty, godziny, dzień miesiąca, miesiąc i dzień tygodnia.',
  },
  {
    question: 'Czy jest kompatybilny ze wszystkimi systemami?',
    answer:
      'Tak, wygenerowane wyrażenia są zgodne ze standardem POSIX, kompatybilne z Linux Crontab, macOS cron oraz usługami chmurowymi, takimi jak AWS CloudWatch czy GitHub Actions.',
  },
  {
    question: 'Co oznacza gwiazdka (*) w Cron?',
    answer:
      'Gwiazdka to symbol wieloznaczny oznaczający „wszystko”. Na przykład gwiazdka w polu minut oznacza, że zadanie będzie uruchamiane w każdej minucie zdefiniowanego zakresu.',
  },
  {
    question: 'Jak mogę sprawdzić nadchodzące wykonania?',
    answer:
      'Narzędzie zawiera wizualizator czasu rzeczywistego, który pokazuje dokładnie 5 następnych dat i godzin, w których zadanie zostanie uruchomione zgodnie z bieżącym wyrażeniem.',
  },
];

const howToData = [
  {
    name: 'Wybierz interwał',
    text: 'Wybierz, jak często zadanie ma być uruchamiane, korzystając z szybkich ustawień wstępnych (co minutę, co godzinę, codziennie itp.).',
  },
  {
    name: 'Skonfiguruj zaawansowane szczegóły',
    text: 'Przełącz się na kartę „Zaawansowane”, aby ręcznie zdefiniować dokładne minuty, godziny lub określone dni tygodnia.',
  },
  {
    name: 'Zweryfikuj tłumaczenie i daty',
    text: 'Przeczytaj opis w języku ludzkim i sprawdź 5 następnych wykonań, aby potwierdzić, że harmonogram jest prawidłowy.',
  },
  {
    name: 'Skopiuj wyrażenie',
    text: 'Skopiuj wynikowy ciąg znaków i wklej go bezpośrednio do pliku crontab lub konfiguracji serwera.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
  inLanguage: 'pl',
};

const ui: CronGeneratorUI = {
  labelMinute: 'Minuta',
  labelHour: 'Godzina',
  labelDom: 'Dzień (miesiąc)',
  labelMonth: 'Miesiąc',
  labelDow: 'Dzień (tydzień)',
  tabQuick: 'Szybkie',
  tabAdvanced: 'Zaawansowane',
  fieldMinute: 'Minuta (0-59)',
  fieldHour: 'Godzina (0-23)',
  fieldDom: 'Dzień miesiąca (1-31)',
  fieldMonth: 'Miesiąc (1-12)',
  fieldDow: 'Dzień tygodnia (0-6)',
  hintMinute: 'Np.: *, */5, 0,30',
  hintDow: '0 = Niedziela, 6 = Sobota',
  labelNextRuns: 'Następne wykonania',
  btnCopy: 'Kopiuj wyrażenie',
  btnCopied: 'Skopiowano!',
  msgNoRuns: 'Nie znaleziono nadchodzących wykonań w rozsądnym zakresie.',
  msgError: 'Błąd podczas obliczania dat.',
  presetEveryMinute: 'Co minutę',
  presetEveryHour: 'Co godzinę',
  presetDaily: 'Codziennie',
  presetWeekly: 'Co tydzień',
  presetMonthly: 'Co miesiąc',
  presetYearly: 'Co rok',
  descEveryMinute: 'Uruchamia się co minutę',
  descEveryHour: 'Uruchamia się na początku każdej godziny',
  descEveryDay: 'Uruchamia się codziennie o północy',
  descPrefix: 'Uruchamia się',
  descEveryMin: 'co minutę',
  descEveryHourOnDot: 'o każdej pełnej godzinie',
  descAtMinute: 'w minucie {m} każdej godziny',
  descAtTime: 'o godzinie {h}:{m}',
  descOnDay: ' w dniu {d} miesiąca',
  descInMonth: ' w miesiącu {mon}',
  descIfDow: ' jeśli jest to dzień {d} (0=Niedz, 6=Sob)',
  descDays: 'Niedziela,Poniedziałek,Wtorek,Środa,Czwartek,Piątek,Sobota',
  descInvalid: 'Nieprawidłowe wyrażenie',
  timeNow: 'teraz',
  timeMin: 'min',
  timeHour: 'h',
  timeDays: 'dni',
  locale: 'pl-PL',
};

export const content: ToolLocaleContent<CronGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje i dokumentacja',
  bibliography: [
    {
      name: 'Podręcznik GNU Crontab: wyrażenia Cron w systemie Linux',
      url: 'https://www.gnu.org/software/mcron/manual/html_node/Crontab-file.html',
    },
    {
      name: 'Cron w Wikipedii: historia i składnia',
      url: 'https://pl.wikipedia.org/wiki/Cron',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Znaczenie Cron we współczesnej automatyzacji',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mimo że żyjemy w erze serwerów <em>serverless</em> i przepływów pracy w chmurze, system <strong>Crontab</strong> pozostaje kręgosłupem globalnej infrastruktury technologicznej. Od małych blogów po potężne infrastruktury bankowe, harmonogram zadań to coś, co sprawia, że cyfrowy świat działa.',
    },
    {
      type: 'title',
      text: 'Anatomia wyrażenia Cron',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Pole 1 – Minuta (0-59):</strong> Kiedy zadanie rozpoczyna się w ciągu godziny.',
        '<strong>Pole 2 – Godzina (0-23):</strong> Wymagany format 24-godzinny.',
        '<strong>Pole 3 – Dzień miesiąca (1-31):</strong> Konkretny dzień kalendarzowy.',
        '<strong>Pole 4 – Miesiąc (1-12):</strong> Od stycznia do grudnia.',
        '<strong>Pole 5 – Dzień tygodnia (0-6):</strong> 0 to zazwyczaj niedziela.',
      ],
    },
    {
      type: 'title',
      text: 'Operatory specjalne i typowe błędy',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Używaj ukośnika <code>/</code> do definiowania kroków: <code>*/5</code> w minutach oznacza uruchamianie co 5 minut. Przecinek <code>,</code> tworzy listy (<code>1,3,5</code>), a łącznik <code>-</code> definiuje zakresy (<code>1-5</code>).',
    },
    {
      type: 'paragraph',
      html: '90% serwerów działa w czasie <strong>UTC</strong>. Jeśli zaplanujesz zadanie na 02:00 rano, myśląc o lokalnej strefie czasowej, może ono zostać uruchomione o nieoczekiwanej porze. Ponadto Cron nie ma dostępu do Twojej zwykłej ścieżki <code>$PATH</code> – zawsze używaj ścieżek bezwzględnych, takich jak <code>/usr/local/bin/node</code>.',
    },
  ],
};

