import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ConversorExcelCsvHtmlUI } from '../ui';

const slug = 'konwerter-tabel-excel-csv-html';
const title = 'Generator kodu konwertera tabel Excel i CSV na HTML';
const description = 'Natychmiast konwertuj dane Excel lub CSV na czyste, semantyczne tabele HTML. Darmowe narzędzie dla programistów i twórców treści.';

const faqData = [
  {
    question: 'Jak przekonwertować plik Excel (.xlsx) na HTML?',
    answer: 'Najpierw otwórz plik w programie Excel i zapisz go jako CSV (rozdzielany przecinkami). Następnie prześlij ten plik CSV do naszego narzędzia lub wklej jego zawartość, aby otrzymać kod tabeli HTML.',
  },
  {
    question: 'Czy wygenerowany kod zawiera style CSS?',
    answer: 'Generator tworzy czysty kod HTML z opcjonalnymi klasami dla obramowań i pasów zebry. Ostateczne style wizualne zależą od własnego kodu CSS Twojej witryny, co zapewnia idealną integrację.',
  },
  {
    question: 'Czy mogę przesyłać bardzo duże pliki CSV?',
    answer: 'Tak, nasze narzędzie przetwarza dane lokalnie w Twojej przeglądarce. Oznacza to, że jest bardzo szybkie i bezpieczne, ponieważ Twoje dane nigdy nie są przesyłane przez Internet.',
  },
  {
    question: 'Czy narzędzie jest kompatybilne z Arkuszami Google?',
    answer: 'Absolutnie. W Arkuszach Google wybierz Plik > Pobierz > Wartości rozdzielane przecinkami (.csv) i użyj tego pliku w naszym narzędziu.',
  },
];

const howToData = [
  {
    name: 'Przygotuj dane',
    text: 'Przygotuj swój plik Excel lub CSV. Upewnij się, że dane są poprawne.',
  },
  {
    name: 'Załaduj dane',
    text: 'Wklej tekst CSV w obszarze wejściowym lub przeciągnij plik bezpośrednio do konwertera.',
  },
  {
    name: 'Skonfiguruj tabelę',
    text: 'Wybierz, czy chcesz użyć pierwszego wiersza jako nagłówka i czy chcesz zastosować podstawowe style.',
  },
  {
    name: 'Skopiuj kod',
    text: 'Przełącz się na kartę „Kod HTML” i skopiuj wynik, aby wkleić go na swojej stronie internetowej.',
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
  step: howToData.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
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

const ui: ConversorExcelCsvHtmlUI = {
  csvInputLabel: 'Wklej tutaj swój kod CSV',
  csvInputPlaceholder: 'Imię,Wiek,Miasto\nJan,25,Warszawa\nAnna,30,Kraków',
  uploadLabel: 'Lub prześlij swój plik (CSV)',
  dragDropLabel: 'Przeciągnij i upuść plik tutaj',
  headerCheckboxLabel: 'Użyj pierwszego wiersza jako nagłówka',
  bordersCheckboxLabel: 'Dodaj obramowanie',
  stripeCheckboxLabel: 'Pasy zebry',
  previewTabLabel: 'Podgląd',
  codeTabLabel: 'Kod HTML',
  emptyStateLabel: 'Wprowadź dane, aby zobaczyć tabelę',
  copyButtonLabel: 'Kopiuj kod',
  copiedLabel: 'Skopiowano!',
};

export const content: ToolLocaleContent<ConversorExcelCsvHtmlUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Zasoby dotyczące tabel HTML i formatów danych',
  bibliography: [
    { name: 'W3C: Tabele HTML', url: 'https://www.w3.org/WAI/tutorials/tables/' },
    { name: 'MDN: Element tabeli HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table' },
    { name: 'RFC 4180: Format CSV', url: 'https://tools.ietf.org/html/rfc4180' },
    { name: 'Arkusze Google: Pobieranie danych', url: 'https://support.google.com/docs/answer/183965' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Łatwo konwertuj pliki Excel i CSV na tabele HTML', level: 2 },
    {
      type: 'paragraph',
      html: 'W nowoczesnym tworzeniu stron internetowych prezentowanie danych tabelarycznych jest jednym z najskuteczniejszych sposobów przekazywania ustrukturyzowanych informacji. Jednak ręczne konwertowanie danych z arkusza kalkulacyjnego, takiego jak <strong>Excel</strong> lub plik <strong>CSV</strong>, na znaczniki HTML <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> i <code>&lt;td&gt;</code> jest żmudne i podatne na błędy.',
    },
    { type: 'title', text: 'Dlaczego warto używać semantycznych tabel HTML?', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Dostępność:</strong> Czytniki ekranu mogą interpretować strukturę i pomagać użytkownikom z niepełnosprawnością wzroku.',
        '<strong>SEO:</strong> Wyszukiwarki indeksują zawartość komórek, co poprawia ranking Twoich danych.',
        '<strong>Responsywność:</strong> Przy odrobinie kodu CSS tabele HTML mogą dostosowywać się do urządzeń mobilnych.',
        '<strong>Łatwość konserwacji:</strong> Znacznie łatwiej jest edytować dane w formacie HTML niż ponownie generować cały obraz.',
      ],
    },
    { type: 'title', text: 'Jak działa konwerter programu Excel na HTML', level: 3 },
    {
      type: 'paragraph',
      html: 'Nasze narzędzie wykorzystuje natywny parser tekstu, który przetwarza pliki rozdzielane przecinkami (CSV). Większość programów do obsługi arkuszy kalkulacyjnych, w tym Microsoft Excel, Arkusze Google i LibreOffice Calc, umożliwia eksportowanie danych w formacie CSV.',
    },
  ],
};
