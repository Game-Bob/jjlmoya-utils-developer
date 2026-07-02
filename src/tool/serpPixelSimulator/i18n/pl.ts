import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SerpPixelSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'symulator-serp-licznik-pikseli';
const title = 'Symulator SERP i Licznik Pikseli SEO';
const description = 'Podglądaj fragmenty wyników wyszukiwania w stylu Google w czasie rzeczywistym, mierz szerokość tytułu i meta opisu w pikselach i zobacz dokładnie, gdzie twój tekst zostanie przycięty.';

const howTo = [
  {
    name: 'Wprowadź znacznik title',
    text: 'Wpisz lub wklej tytuł strony, który chcesz przetestować. Podgląd SERP i miernik pikseli aktualizują się przy każdym naciśnięciu klawisza.',
  },
  {
    name: 'Dodaj widoczny adres URL',
    text: 'Użyj realistycznej domeny i ścieżki, aby fragment przypominał wynik, który przeskanowałby użytkownik.',
  },
  {
    name: 'Wpisz meta opis',
    text: 'Dodaj tekst opisu i obserwuj pasek pikseli. Gdy przekroczy zalecaną szerokość wizualną, podgląd przycina go wielokropkiem.',
  },
  {
    name: 'Przełącz między pulpitem a urządzeniem mobilnym',
    text: 'Porównaj renderowanie tytułu z szerokością karty na pulpicie lub urządzeniu mobilnym przed opublikowaniem metadanych.',
  },
];

const faq = [
  {
    question: 'Dlaczego liczyć piksele zamiast znaków dla tytułów SEO?',
    answer: 'Karty wyników Google są ograniczone szerokością wizualną. Tytuł z wieloma wąskimi literami może pomieścić więcej znaków niż tytuł z szerokimi literami, wielkimi literami lub grubo wyglądającymi glifami. Pomiar w pikselach daje dokładniejszy podgląd widocznego wyniku.',
  },
  {
    question: 'Czy to gwarantuje dokładnie, jak Google przytnie mój fragment?',
    answer: 'Nie. Google może przepisywać linki tytułowe i fragmenty, a renderowanie może się różnić w zależności od zapytania, urządzenia, języka i eksperymentów. Narzędzie jest pomyślane jako praktyczna wizualna wskazówka do pisania metadanych, które rzadziej zostaną przycięte.',
  },
  {
    question: 'Jakie limity pikseli stosuje symulator?',
    answer: 'Domyślny limit tytułu na pulpicie wynosi 580 px, na urządzeniu mobilnym 600 px, a limit meta opisu to 920 px. Są to cele redakcyjne, a nie oficjalne limity Google.',
  },
  {
    question: 'Dlaczego podgląd dodaje wielokropek?',
    answer: 'Gdy zmierzony tekst przekracza dostępną szerokość w pikselach, symulator przycina ciąg przy ostatnim pasującym znaku i dodaje trzy kropki, naśladując praktyczne zachowanie potrzebne zespołom SEO do wykrywania utraty znaczenia.',
  },
];

const ui: SerpPixelSimulatorUI = {
  titleLabel: 'Znacznik title',
  titlePlaceholder: 'GameBob | Niezależne Studio Deweloperskie',
  urlLabel: 'Widoczny URL',
  urlPlaceholder: 'https://www.gamebob.dev/pl/',
  descriptionLabel: 'Meta opis',
  descriptionPlaceholder: 'Odkryj naszą kolekcję narzędzi i gier zaprojektowanych, aby ulepszyć twój cyfrowy przepływ pracy i rozrywkę.',
  deviceLabel: 'Tryb podglądu',
  desktopLabel: 'Pulpit',
  mobileLabel: 'Mobilny',
  titlePixelsLabel: 'Szerokość tytułu',
  descriptionPixelsLabel: 'Szerokość opisu',
  charactersLabel: 'znaków',
  previewLabel: 'Podgląd na żywo w stylu Google',
  tooLongLabel: 'Za szeroki',
  goodLabel: 'Pasuje',
  emptyTitle: 'Twój tytuł pojawi się tutaj',
  emptyDescription: 'Podgląd twojego meta opisu pojawi się tutaj podczas pisania.',
  defaultTitle: 'GameBob | Niezależne Studio Deweloperskie',
  defaultUrl: 'https://www.gamebob.dev/pl/',
  defaultDescription: 'Odkryj naszą kolekcję narzędzi i gier zaprojektowanych, aby ulepszyć twój cyfrowy przepływ pracy i rozrywkę.',
  fallbackUrl: 'przyklad.pl',
  fallbackFaviconText: 'G',
  pixelUnit: 'px',
  ellipsis: '...',
  fetchButtonLabel: 'Pobierz',
  fetchLoadingLabel: 'Pobieranie...',
  fetchSuccessLabel: 'Metadane załadowane z adresu URL.',
  fetchCorsError: 'Przeglądarka nie mogła odczytać tej strony. Może być zablokowana przez CORS, przekierowanie, mieszaną zawartość lub regułę sieciową. Nadal możesz wkleić lub edytować metadane ręcznie.',
  fetchInvalidUrlError: 'Wprowadź prawidłowy adres URL przed pobraniem metadanych.',
  fetchNoMetadataError: 'Strona została pobrana, ale nie znaleziono tytułu ani meta opisu.',
  fetchGenericError: 'Nie można pobrać metadanych z tego adresu URL. Sprawdź adres lub wypełnij pola ręcznie.',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<SerpPixelSimulatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Najczęściej zadawane pytania o symulator SERP',
  faq,
  bibliographyTitle: 'Dokumentacja dotycząca wyników wyszukiwania',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Przestań zgadywać, jak będzie wyglądać twój wynik w Google',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Znacznik title może wyglądać idealnie w arkuszu kalkulacyjnym, a mimo to zawieść w wyniku wyszukiwania. Google nie rezerwuje miejsca według liczby znaków; renderuje tekst wewnątrz karty wizualnej. Oznacza to, że <strong>GameBob | Niezależne Studio Deweloperskie</strong> i inny tytuł o tej samej liczbie znaków mogą zajmować bardzo różne szerokości w zależności od liter, wielkości znaków, interpunkcji i odstępów.',
    },
    {
      type: 'tip',
      title: 'Zasada, która naprawdę pomaga',
      html: 'Napisz fragment tak, aby ważna obietnica przetrwała wielokropek. Umieść typ strony, intencję wyszukiwania i najsilniejszy powód do kliknięcia przed limitem pikseli. Nazwy marek są przydatne, ale nie powinny wypychać głównej korzyści poza widok.',
    },
    {
      type: 'title',
      text: 'Co mierzy licznik pikseli',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Element', 'Co ma znaczenie', 'Jak użyć wyniku'],
      rows: [
        ['Znacznik title', 'Szerokość renderowana w pikselach, nie surowa liczba znaków', 'Utrzymuj główne słowo kluczowe i obietnicę kliknięcia widoczne przed przycięciem.'],
        ['Widoczny URL', 'Zaufanie wizualne i jasność tematu', 'Użyj czytelnej ścieżki, która wzmacnia, dokąd prowadzi wynik.'],
        ['Meta opis', 'Szerszy obszar fragmentu z zachowaniem zależnym od zapytania', 'Umieść korzyść na początku, ponieważ Google może go skrócić lub przepisać.'],
        ['Tryb urządzenia', 'Karty na pulpicie i urządzeniach mobilnych mogą wyglądać inaczej', 'Sprawdź oba przed opublikowaniem metadanych dla ważnych stron.'],
      ],
    },
    {
      type: 'title',
      text: 'Dlaczego limity znaków to słaby nawyk SEO',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tradycyjna porada, taka jak "utrzymuj tytuły poniżej 60 znaków", jest wygodna, ale ukrywa prawdziwy problem. Szerokie litery, takie jak W i M, wielkie litery, separatory, cyfry i długie nazwy marek zajmują różną przestrzeń. Pomiar w pikselach natychmiast uwidacznia kompromis: możesz zobaczyć, czy fraza zasługuje na swoje miejsce, czy kradnie przestrzeń silniejszemu przekazowi.',
    },
    {
      type: 'title',
      text: 'Praktyczny przepływ pracy dla lepszych fragmentów',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Zacznij od intencji:</strong> opisz, co otrzymuje użytkownik, a nie tylko jak nazywa się strona.',
        '<strong>Przetestuj pełny tytuł:</strong> wklej go do symulatora i obserwuj pasek przed publikacją.',
        '<strong>Usuń słabe słowa:</strong> jeśli pasek zmieni kolor na czerwony, usuń wypełniacze przed obcięciem wartościowych terminów.',
        '<strong>Sprawdź wielokropek:</strong> jeśli przycięty podgląd traci znaczenie, przepisz tytuł zamiast akceptować cięcie.',
        '<strong>Powtórz dla opisu:</strong> upewnij się, że pierwsze zdanie samodzielnie niesie propozycję wartości.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Gdy pasek zmienia kolor na czerwony',
      html: 'Czerwony pasek nie jest ostrzeżeniem o karze. Oznacza, że bieżący tekst jest szerszy niż wybrany cel wizualny, więc symulator przycina go kropkami. Potraktuj to jako sygnał redakcyjny: zdecyduj, czy ukryte słowa są zbędne, czy fragment potrzebuje ostrzejszej struktury.',
    },
    {
      type: 'title',
      text: 'Ograniczenia, przepisywanie i realistyczne oczekiwania',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Żaden symulator nie może zagwarantować dokładnego fragmentu, który pokaże Google. Google może przepisywać linki tytułowe, pogrubiać terminy zapytania, wybierać tekst strony zamiast meta opisu lub wyświetlać różne fragmenty dla różnych wyszukiwań. To narzędzie najlepiej sprawdza się jako szybki etap redakcyjny i kontroli jakości: wykrywa oczywiste przepełnienia wizualne, zanim strona trafi do produkcji.',
    },
    {
      type: 'summary',
      title: 'Najlepsze wykorzystanie tego symulatora SERP',
      items: [
        'Użyj paska pikseli, aby wykryć przepełnienia wizualne przed opublikowaniem metadanych.',
        'Utrzymuj główną intencję wyszukiwania i obietnicę kliknięcia widoczne przed jakimkolwiek wielokropkiem.',
        'Pobieraj metadane z adresów URL, które zezwalają na CORS, a następnie edytuj wynik ręcznie w razie potrzeby.',
        'Traktuj podgląd jako wskazówkę redakcyjną, ponieważ Google wciąż może przepisywać fragmenty w zależności od zapytania.',
      ],
    },
  ],
};
