import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssSpecificityCalculatorUI } from '../ui';

const slug = 'kalkulator-specyficznosci-css';
const title = 'Kalkulator Specyficzności CSS Online. Wizualizator Wagi Selektora';
const description =
  'Oblicz specyficzność i dokładną wagę dowolnego selektora CSS. Narzędzie wizualne, które pomoże zrozumieć, która reguła CSS wygrywa kaskadę i uniknąć używania !important.';

const faqData = [
  {
    question: 'Czym jest specyficzność CSS?',
    answer:
      'Specyficzność to algorytm, którego przeglądarki używają do rozstrzygania, która reguła CSS zostanie zastosowana do elementu, gdy rywalizuje kilka reguł naraz. Wyrażana jest jako trzycyfrowy wynik (A, B, C) oznaczający odpowiednio: identyfikatory, klasy/atrybuty/pseudoklasy oraz elementy/pseudoelementy.',
  },
  {
    question: 'Czy klasa może kiedykolwiek pokonać ID pod względem specyficzności?',
    answer:
      'Nie, bezpośrednio nie. ID (1,0,0) zawsze bije dowolną liczbę klas (0,N,0), bo specyficzność nie przenosi wartości między kolumnami. Sto klas (0,100,0) nigdy nie pokona jednego ID (1,0,0).',
  },
  {
    question: 'Co się dzieje, gdy dwa selektory mają tę samą specyficzność?',
    answer:
      'Gdy dwa selektory mają dokładnie tę samą wagę, wygrywa ten zadeklarowany później w pliku CSS. Nazywa się to naturalnym porządkiem kaskady. Kalkulator wyświetli wizualne ostrzeżenie, gdy dojdzie do remisu.',
  },
  {
    question: 'Dlaczego używanie !important uchodzi za złą praktykę?',
    answer:
      'Dyrektywa !important zaburza naturalną kaskadę CSS, wymuszając daną deklarację ponad wszelkimi innymi regułami. Prowadzi to do konfliktów trudnych do debugowania w dużych projektach. Metodologie takie jak BEM zalecają utrzymywanie płaskiej specyficzności, by nigdy nie potrzebować !important.',
  },
];

const howToData = [
  {
    name: 'Wpisz pierwszy selektor',
    text: 'Wpisz Selektor A w lewym polu tekstowym, na przykład: #header .nav-item > a. Liczniki ID, Klas i Elementów zaktualizują się natychmiast.',
  },
  {
    name: 'Wpisz drugi selektor',
    text: 'Wpisz Selektor B w prawym polu tekstowym, na przykład: ul li.active a:hover. Obserwuj, jak wagi zmieniają się w czasie rzeczywistym.',
  },
  {
    name: 'Odczytaj wynik',
    text: 'Kalkulator podświetli zielonym banerem blok zwycięskiego selektora. W przypadku remisu pojawi się komunikat wyjaśniający, że decyduje porządek kaskady.',
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
  inLanguage: 'pl',
};

const ui: CssSpecificityCalculatorUI = {
  labelA: 'Selektor A',
  labelB: 'Selektor B',
  placeholderA: 'np. #header .nav-item > a',
  placeholderB: 'np. ul li.active a:hover',
  cardIds: 'ID',
  cardClasses: 'Klasy / Pseudo',
  cardElements: 'Elementy',
  bannerWinner: 'Ten selektor wygrywa!',
  msgTie: 'Oba selektory mają tę samą wagę. Jeśli rywalizują o ten sam element, wygrywa ten napisany <strong>jako ostatni</strong> w CSS.',
};

export const content: ToolLocaleContent<CssSpecificityCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Źródła i Dokumentacja',
  bibliography: [
    {
      name: 'MDN Web Docs: Specyficzność CSS',
      url: 'https://developer.mozilla.org/pl/docs/Web/CSS/Specificity',
    },
    {
      name: 'W3C: Selectors Level 3 - Specyficzność',
      url: 'https://www.w3.org/TR/selectors-3/#specificity',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Czym jest specyficzność CSS?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Specyficzność CSS to algorytm, według którego przeglądarki decydują, które wartości właściwości zastosować do danego elementu. To nic innego jak matematyczny wynik, który mówi przeglądarce, jak bardzo „szczegółowa" jest dana reguła.',
    },
    {
      type: 'paragraph',
      html: 'Jeśli dwie reguły mają różne poziomy specyficzności, wygrywa ta o wyższej wadze — niezależnie od kolejności, w jakiej zostały napisane. Gdy obie mają tę samą wagę, decyduje ta zadeklarowana później w kodzie źródłowym.',
    },
    {
      type: 'title',
      text: 'Jak oblicza się specyficzność CSS',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Specyficzność obliczana jest w oparciu o trzy kategorie, tworzące trzycyfrową wagę, często zapisywaną jako <strong>(A, B, C)</strong>:',
    },
    {
      type: 'list',
      items: [
        '<strong>Kolumna A (ID):</strong> Liczy liczbę unikalnych identyfikatorów. Przykład: <code>#header</code> to 1 w kolumnie A.',
        '<strong>Kolumna B (Klasy, Atrybuty i Pseudoklasy):</strong> Liczy wszystkie klasy (<code>.button</code>), atrybuty (<code>[type="text"]</code>) i pseudoklasy (<code>:hover</code>).',
        '<strong>Kolumna C (Elementy i Pseudoelementy):</strong> Liczy wszystkie elementy HTML (<code>div</code>, <code>h1</code>) i pseudoelementy (<code>::before</code>).',
      ],
    },
    {
      type: 'title',
      text: 'Złota zasada: brak przeniesień między kolumnami',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Reguła o specyficzności (0,50,0) <strong>nigdy</strong> nie będzie bardziej szczegółowa niż reguła (1,0,0). <strong>Jeden ID bije nieskończoną liczbę klas.</strong> Kolumny nigdy nie przelewają się do siebie.',
    },
    {
      type: 'title',
      text: 'Problem z !important i architektura BEM',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dyrektywa <code>!important</code> stanowi wyjątek od zasad specyficzności. Gdy zostanie użyta, dana deklaracja automatycznie nadpisuje każdą inną. Uchodzi za złą praktykę, bo niszczy naturalną kaskadę.',
    },
    {
      type: 'paragraph',
      html: 'Aby unikać wojen specyficzności w dużych projektach, metodologie takie jak <strong>BEM</strong> promują stosowanie wyłącznie jednopoziomowych selektorów klasowych, sztucznie utrzymując specyficzność na płaskim poziomie (0,1,0).',
    },
  ],
};
