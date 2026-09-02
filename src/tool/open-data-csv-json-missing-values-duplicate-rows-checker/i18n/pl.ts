import { bibliography } from '../bibliography';
import { createLocalizedContent } from '../localized';
import { ui } from '../ui';

export const content = createLocalizedContent({
  slug: 'otwarte-dane-csv-json-brakujace-wartosci-duplikaty-wierszy-kontroler',
  title: 'Kontroler brakujących wartości w otwartych danych CSV',
  description: 'Lokalnie sprawdzaj tabele CSV i JSON pod kątem brakujących wartości, zduplikowanych wierszy, mieszanych typów, błędów parsowania i wartości odstających.',
  ui: { ...ui, fileLabel: 'Wczytaj tabelę CSV lub JSON', pasteLabel: 'Lub wklej tabelę', exampleButton: 'Sprawdź przykład', profileButton: 'Sprawdź dane', clearButton: 'Wyczyść profil', noFile: 'Nie wybrano pliku', dropHint: 'Upuść plik lub wybierz go z urządzenia', localBoundary: 'Plik pozostaje w tej przeglądarce. Nic nie jest wysyłane.', intakeTitle: 'Przenieś tabelę na stanowisko kontroli', emptyTitle: 'Stanowisko kontroli jest gotowe', factsTitle: 'Fakty zmierzone w danych', signalTitle: 'Mapa sygnałów', signalIntro: 'Zacznij od sygnałów wymagających decyzji człowieka.', warningsTitle: 'Sygnały wymagające kontekstu', reviewTitle: 'Edytowalna notatka z kontroli' },
  seo: [
    { type: 'title', text: 'Znajdź problemy strukturalne przed ponownym użyciem otwartych danych', level: 2 },
    { type: 'paragraph', html: 'Tabela może wyglądać schludnie, a mimo to zawierać puste pola, powtórzone rekordy, mieszane typy, niepoprawne wiersze lub skrajne liczby. To narzędzie odczytuje CSV i JSON w przeglądarce oraz zamienia sygnały w liczby możliwe do prześledzenia do wierszy źródłowych.' },
    { type: 'title', text: 'Sprawdzaj publiczną tabelę razem z dokumentacją źródła', level: 2 },
    { type: 'paragraph', html: 'Braki, wartości null i puste teksty są liczone osobno. Zduplikowane wiersze są zgłaszane z numerami, a odstające liczby używają granic IQR Tukeya. Sygnał jest pytaniem do sprawdzenia, a nie oceną jakości.' },
    { type: 'list', items: ['Porównaj nagłówek CSV lub strukturę JSON z dokumentacją źródłową.', 'Sprawdź zduplikowane wiersze przed usunięciem rekordów.', 'Oceń mieszane typy i wartości odstające z uwzględnieniem jednostek i dziedziny.', 'Zachowaj źródło, okres, definicje i przeznaczenie obok profilu.'] },
  ],
  faqTitle: 'Pytania o kontrolę tabel',
  faq: [
    { question: 'Jakie pliki można sprawdzić?', answer: 'CSV z wierszem nagłówka lub tablicę JSON obiektów. Obiekt JSON może też przechowywać tablicę pod data, rows albo records.' },
    { question: 'Jak rozróżniane są brak, null, pusto i zero?', answer: 'Brakująca właściwość JSON, JSON null, pusty tekst i liczbowe zero są zapisywane oddzielnie.' },
    { question: 'Jak obliczane są wartości odstające?', answer: 'Narzędzie używa granic Tukeya przy 1,5 razy rozstępie międzykwartylowym i pokazuje dotknięte wiersze.' },
    { question: 'Czy to dowodzi wysokiej jakości danych?', answer: 'Nie. Mierzy sygnały strukturalne, ale nie dowodzi poprawności znaczeniowej, dokładności, pochodzenia, legalności ani przydatności.' },
  ],
  bibliography,
  howTo: [
    { name: 'Przygotuj tabelę', text: 'Użyj stabilnego nagłówka CSV lub tablicy JSON i zachowaj kontekst źródła.' },
    { name: 'Wczytaj dane', text: 'Wybierz lokalny plik, wklej tekst lub otwórz przykład.' },
    { name: 'Odczytaj sygnały', text: 'Sprawdź liczby braków, pustych wartości, duplikatów, typów mieszanych i odstających.' },
    { name: 'Prześledź wiersze', text: 'Wróć do oryginalnego pliku przez numery wierszy i wyniki kolumn.' },
    { name: 'Edytuj notatkę', text: 'Dodaj cel i decyzje, a następnie zachowaj notatkę przy źródle.' },
  ],
});
