import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DuplicateCssRemoverUI } from '../ui';

const slug = 'usuwanie-duplikatow-css';
const title = 'Usuwanie zduplikowanego CSS online. Porządkuj i optymalizuj arkusze stylów';
const description =
  'Bezpłatne narzędzie do czyszczenia i usuwania zduplikowanego kodu CSS. Scala nadmiarowe selektory, zachowuje kaskadę i natychmiast zmniejsza rozmiar pliku bezpośrednio w przeglądarce.';

const faqData = [
  {
    question: 'Co się dzieje, gdy selektory CSS są zduplikowane?',
    answer:
      'Gdy ten sam selektor pojawia się kilka razy, przeglądarka stosuje wszystkie reguły, ale ostatnia deklaracja każdej właściwości nadpisuje poprzednie. Efektem są niepotrzebnie ciężkie pliki, bez żadnych korzyści dla efektu wizualnego.',
  },
  {
    question: 'Czy podczas usuwania duplikatów utracę jakieś właściwości?',
    answer:
      'Nie. Algorytm ściśle przestrzega kaskady CSS: w przypadku konfliktów pod tym samym selektorem zawsze zachowuje ostatnio zadeklarowaną właściwość. Unikalne właściwości z każdego bloku są łączone pod jednym scalonym selektorem.',
  },
  {
    question: 'Czy działa z minifikowanym CSS lub CSS z komentarzami?',
    answer:
      'Narzędzie automatycznie usuwa komentarze CSS przed przetworzeniem i poprawnie obsługuje kod w jednej linii. W przypadku CSS z zaawansowanym zagnieżdżaniem lub złożonymi at-rules zaleca się wcześniejsze rozdzielenie bloków.',
  },
  {
    question: 'Czy mój CSS jest wysyłany na serwer?',
    answer:
      'Nie. Całe przetwarzanie odbywa się bezpośrednio w przeglądarce za pomocą lokalnego JavaScript. Żadna część twojego CSS nie jest przesyłana do żadnego zewnętrznego serwera, co gwarantuje pełną prywatność kodu.',
  },
];

const howToData = [
  {
    name: 'Wklej swój CSS',
    text: 'Skopiuj zawartość pliku CSS z powtarzającymi się selektorami i wklej ją do lewego pola "Dirty / Duplicate CSS".',
  },
  {
    name: 'Uruchom czyszczenie',
    text: 'Kliknij przycisk "Wyczyść i scal CSS". Narzędzie przeskanuje wszystkie selektory, połączy właściwości i usunie nadmiarowe bloki.',
  },
  {
    name: 'Sprawdź wyniki i skopiuj',
    text: 'Sprawdź uzyskane oszczędności w bajtach i skopiuj zoptymalizowany CSS przyciskiem "Kopiuj kod", aby użyć go bezpośrednio w projekcie.',
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

const ui: DuplicateCssRemoverUI = {
  labelInput: 'Brudny / Zduplikowany CSS',
  labelOutput: 'Czysty CSS',
  placeholderInput: '.btn { padding: 10px; color: red; }\n.btn { margin: 5px; color: blue; }',
  placeholderOutput: 'Zoptymalizowany i scalony CSS pojawi się tutaj...',
  btnClean: 'Wyczyść i scal CSS',
  btnCopy: 'Kopiuj kod',
  btnCopied: 'Skopiowano!',
  statBytesOriginal: 'Oryginalne bajty',
  statBytesClean: 'Czyste bajty',
  statSaving: 'Oszczędność',
};

export const content: ToolLocaleContent<DuplicateCssRemoverUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Źródła i dokumentacja',
  bibliography: [
    {
      name: 'Web Vitals: wpływ CSS na Render-Blocking i FCP',
      url: 'https://web.dev/articles/render-blocking-resources',
    },
    {
      name: 'Specyfikacja W3C: kaskada i dziedziczenie CSS',
      url: 'https://www.w3.org/TR/css-cascade-4/',
    },
    {
      name: 'Clean CSS: biblioteka i metody minifikacji CSS',
      url: 'https://github.com/clean-css/clean-css',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Dlaczego kod CSS się duplikuje?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Przy utrzymaniu długoterminowych projektów webowych lub pracy z kodem dziedziczonym (<em>legacy code</em>) bardzo często zdarza się, że kilku programistów pisze nakładające się reguły CSS. Z obawy przed zepsuciem istniejącego projektu deweloper woli dodać nową, nadmiarową regułę na końcu dokumentu zamiast edytować lub refaktoryzować oryginał.',
    },
    {
      type: 'paragraph',
      html: 'Efektem jest nieefektywny plik z dziesiątkami wielokrotnie zadeklarowanych selektorów, który zabija czytelność i znacząco zwiększa wagę pobieranej strony.',
    },
    {
      type: 'title',
      text: 'Ukryty wpływ na wydajność stron (Web Vitals)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pliki stylów blokują naturalne renderowanie przeglądarki (zasób <strong>Render-Blocking</strong>). Dopóki przeglądarka nie pobierze i nie zbuduje kompletnego CSSOM, ekran pozostaje pusty.',
    },
    {
      type: 'tip',
      html: 'Usuwanie nadmiarowych stylów to nie tylko kwestia porządku w kodzie — to mierzalna i natychmiastowa poprawa kluczowych metryk, takich jak <strong>First Contentful Paint (FCP)</strong>.',
    },
    {
      type: 'title',
      text: 'Jak scalamy zduplikowane reguły',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'To narzędzie działa jak inteligentny asembler. Zamiast tylko kompresować białe znaki (jak robi to tradycyjny minifier), rekurencyjnie przeszukuje tekst w poszukiwaniu identycznych wzorców selektorów.',
    },
    {
      type: 'list',
      items: [
        'Wyobraź sobie, że masz regułę <code>.box { color: red; }</code>, a sto linii niżej <code>.box { padding: 10px; color: blue; }</code>. Narzędzie scali oba bloki pod tym samym selektorem <code>.box</code>, łącząc padding.',
        '<strong>Zachowanie kaskady CSS:</strong> W przypadku bezpośrednich konfliktów algorytm ściśle zachowuje ostatnio zadeklarowaną właściwość. Dzięki temu twój oryginalny układ nie rozpadnie się po wyczyszczeniu dokumentu.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Koniec z wysyłaniem kilobajtów martwego tekstu na telefony twoich użytkowników. Scal swój kod w milisekundy, całkowicie offline, bezpośrednio z przeglądarki.',
    },
  ],
};
