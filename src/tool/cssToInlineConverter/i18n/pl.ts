import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssToInlineConverterUI } from '../ui';

const slug = 'konwerter-css-do-inline-html';
const title = 'Konwerter CSS na HTML Inline. Inliner do Wiadomości Email';
const description =
  'Transformuj swoje arkusze stylów i klasy CSS w automatycznie zagnieżdżone style w HTML. Idealny do biuletynów, transakcyjnych wiadomości email i bezpiecznych layoutów webowych.';

const faqData = [
  {
    question: 'Dlaczego wiadomości email potrzebują inline CSS zamiast zewnętrznych arkuszy stylów?',
    answer:
      'Klienci poczty, tacy jak Outlook, Gmail lub Apple Mail, filtrują lub ignorują znaczniki <link> i <style> ze względów bezpieczeństwa. Jedynym gwarantowanym sposobem na prawidłowe zastosowanie stylu w wiadomości email jest osadzenie go bezpośrednio w atrybucie style każdego elementu HTML.',
  },
  {
    question: 'Co się stanie, jeśli element ma już własny atrybut style?',
    answer:
      'Narzędzie respektuje istniejące style inline i dołącza nowe właściwości, symulując zachowanie kaskady CSS: właściwości zadeklarowane później zastępują wcześniejsze w przypadku konfliktu.',
  },
  {
    question: 'Czy to działa z złożonymi selektorami takimi jak :hover lub media queries?',
    answer:
      'Narzędzie przetwarza selektory klas, id, atrybutów oraz pseudo-klas strukturalnych, które DOMParser może rozwiązać. Selektory zależne od stanu, takie jak :hover, i media queries, nie mogą być zagnieżdżone (zależą od środowiska wykonawczego) i są ignorowane.',
  },
  {
    question: 'Czy mój kod HTML i CSS jest wysyłany na jakiś serwer?',
    answer:
      'Nie. Całe przetwarzanie odbywa się 100% w przeglądarce przy użyciu natywnego API DOMParser. Żaden bajt Twojego kodu nie opuszcza Twojego urządzenia, gwarantując całkowitą prywatność dla szablonów z wrażliwą zawartością.',
  },
];

const howToData = [
  {
    name: 'Wklej oryginalny HTML',
    text: 'Wpisz lub wklej HTML, który chcesz przetworzyć, w polu "Oryginalny HTML". Może to być fragment lub pełny dokument.',
  },
  {
    name: 'Dodaj reguły CSS',
    text: 'Wklej klasy i id, które chcesz wstrzyknąć, w polu "Reguły CSS". Narzędzie zastosuje je, respektując specyficzność selektora.',
  },
  {
    name: 'Konwertuj i kopiuj',
    text: 'Kliknij "Wstrzyknij CSS do HTML". Wynik ze wszystkimi zaznajomionymi stylami pojawi się poniżej, gotowy do skopiowania i wklejenia do Twojego menedżera poczty email lub CMS.',
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

const ui: CssToInlineConverterUI = {
  labelHtml: 'Oryginalny HTML',
  labelCss: 'Reguły CSS',
  labelOutput: 'Wynik HTML Inline',
  placeholderHtml: '<div class="my-class">Hello World</div>',
  placeholderCss: '.my-class { color: red; padding: 10px; }',
  placeholderOutput: 'Twój HTML z zagnieżdżonymi stylami pojawi się tutaj...',
  btnConvert: 'Wstrzyknij CSS do HTML',
  btnCopy: 'Kopiuj Kod',
  btnCopied: 'Skopiowano!',
  msgError: 'Błąd przetwarzania. Sprawdź, czy Twój HTML i CSS są prawidłowe.',
};

export const content: ToolLocaleContent<CssToInlineConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje i Dokumentacja',
  bibliography: [
    {
      name: 'Can I email: Macierz Wsparcia HTML i CSS do Wiadomości Email',
      url: 'https://www.caniemail.com/',
    },
    {
      name: 'MDN Web Docs: Globalny atrybut style',
      url: 'https://developer.mozilla.org/en/docs/Web/HTML/Global_attributes/style',
    },
    {
      name: 'API DOMParser: Bezpieczne analizowanie w przeglądarce',
      url: 'https://developer.mozilla.org/en/docs/Web/API/DOMParser',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Co to jest CSS Inliner i po co Ci jest potrzebny?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Podczas opracowywania nowoczesnych aplikacji webowych jesteśmy przyzwyczajeni do separacji zagadnień: HTML buduje strukturę, a zewnętrzny plik CSS dostarcza całego stylu wizualnego. Jednak nie wszystkie środowiska ufają zewnętrznym arkuszom stylów lub globalnym znacznikom <code>&lt;style&gt;</code>.',
    },
    {
      type: 'paragraph',
      html: 'Najpopularniejszy i najsurowszy przypadek użytku, w którym CSS zewnętrzny zawodzi, to <strong>Email Template Development</strong>. W tych środowiskach jedynym niezawodnym sposobem na to, aby czcionka, kolor lub margines były renderowane poprawnie, jest zagnieżdżenie go bezpośrednio w znaczniku: <code>&lt;span style="color: red;"&gt;</code>.',
    },
    {
      type: 'title',
      text: 'Problem CSS w Klientach Poczty',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Klienci poczty takie jak Microsoft Outlook, Apple Mail czy Gmail mają złą sławę ze swoimi restrykcyjnymi silnikami renderowania CSS. Większość filtruje lub odrzuca znaczniki <code>&lt;link&gt;</code> lub <code>&lt;style&gt;</code> ze strachu przed wstrzyknięciami kodu, które mogą zepsuć interfejs czytania.',
    },
    {
      type: 'tip',
      html: 'Dla biuletynów lub transakcyjnych wiadomości email (rachunki, potwierdzenia konta) korzystanie z tabel i <em>inline CSS</em> jest standardem złota w branży marketingu email.',
    },
    {
      type: 'title',
      text: 'Jak to Narzędzie Działa w Twojej Przeglądarce',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Bezpieczne Analizowanie:</strong> Używa <code>API DOMParser</code> do tymczasowej transformacji wejściowego HTML w bezpieczny wirtualny DOM wewnątrz Twojej przeglądarki.',
        '<strong>Symulacja Kaskady:</strong> Analizuje reguły CSS, stosuje wagi specyficzności do selektorów i mutuje atrybuty <code>style</code> wybranych elementów HTML poprzez wstrzykiwanie kodu.',
        '<strong>100% Offline:</strong> Żaden bajt Twojego kodu nie opuszcza Twojego urządzenia. Całkowita prywatność dla szablonów z wrażliwą zawartością.',
      ],
    },
  ],
};
