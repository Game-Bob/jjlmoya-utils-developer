import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlEncoderDecoderUI } from '../ui';

const slug = 'koder-i-dekoder-url';
const title = 'Koder i dekoder URL online';
const description =
  'Konwertuj znaki specjalne z dowolnego łącza na bezpieczny format (Percent-Encoding) lub natychmiast i lokalnie przywracaj je do ich oryginalnego, czytelnego stanu.';

const faqData = [
  {
    question: 'Które znaki są kodowane w adresie URL?',
    answer:
      'Wszystkie znaki niedozwolone w standardzie ASCII dla adresów URL są kodowane: spacje, litery z akcentami, symbole takie jak &, =, +, #, ?, / i inne. Na przykład spacja zmienia się w %20, a ñ w %C3%B1.',
  },
  {
    question: 'Jaka jest różnica między encodeURI a encodeURIComponent?',
    answer:
      'encodeURI koduje kompletny adres URL i pozostawia niezmienione znaki zarezerwowane, takie jak / i ?. encodeURIComponent koduje wszystkie znaki specjalne, w tym znaki zarezerwowane, co czyni go idealnym do kodowania poszczególnych wartości parametrów zapytania.',
  },
  {
    question: 'Dlaczego mój adres URL zawiera %20 zamiast spacji?',
    answer:
      'Protokół HTTP nie pozwala na spacje w adresach URL. %20 to reprezentacja spacji w formacie Percent-Encoding zgodnie ze standardem ASCII. Niektóre systemy używają znaku + jako alternatywy, ale %20 jest najbardziej uniwersalne i bezpieczne.',
  },
  {
    question: 'Czy używanie tego narzędzia z prywatnymi adresami URL jest bezpieczne?',
    answer:
      'Tak, całkowicie bezpieczne. Całe przetwarzanie odbywa się w Twojej przeglądarce przy użyciu natywnego JavaScript (encodeURIComponent/decodeURIComponent). Żaden z Twoich adresów URL ani parametrów nie jest wysyłany do żadnego zewnętrznego serwera.',
  },
];

const howToData = [
  {
    name: 'Wklej surowy tekst',
    text: 'Wpisz lub wklej swój adres URL lub ciąg tekstowy w górnym polu „Tekst surowy (czytelny)”.',
  },
  {
    name: 'Zakoduj lub dekoduj',
    text: 'Kliknij „Koduj URL”, aby przekonwertować tekst na bezpieczny format Percent-Encoding, lub „Dekoduj”, aby przywrócić zakodowany adres URL do jego czytelnej formy.',
  },
  {
    name: 'Skopiuj wynik',
    text: 'Użyj przycisku „Kopiuj” w odpowiednim polu, aby przenieść wynik do schowka.',
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

const ui: UrlEncoderDecoderUI = {
  labelRaw: 'Tekst surowy (czytelny)',
  labelEncoded: 'Sformatowany adres URL (zakodowany)',
  btnClear: 'Wyczyść',
  btnCopy: 'Kopiuj',
  btnCopied: 'Skopiowano!',
  btnEncode: 'Koduj URL',
  btnDecode: 'Dekoduj',
  placeholderRaw: 'https://example.com/search?q=czerwone buty&size=38',
  placeholderEncoded: 'https%3A%2F%2Fexample.com%2Fsearch%3Fq%3Dczerwone%20buty%26size%3D38',
};

export const content: ToolLocaleContent<UrlEncoderDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje i dokumentacja',
  bibliography: [
    {
      name: 'MDN Web Docs: encodeURIComponent()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent',
    },
    {
      name: 'IETF RFC 3986: URI Generic Syntax',
      url: 'https://datatracker.ietf.org/doc/html/rfc3986',
    },
    {
      name: 'W3C: URL Living Standard',
      url: 'https://url.spec.whatwg.org/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Co to jest kodowanie URL?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Podczas przeglądania Internetu lub wysyłania żądań do serwerów często myślimy o adresie URL (Uniform Resource Locator) po prostu jako o „adresie internetowym”. Jednak protokół internetowy dyktuje, że adresy URL mogą być przesyłane wyłącznie przy użyciu bardzo ograniczonego zestawu <strong>standardowych znaków ASCII</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Co się dzieje, jeśli adres URL zawiera spację, litery z akcentami lub parametry specjalne, takie jak znaki plusa (<code>+</code>) lub równości (<code>=</code>)? Aby zapobiec awariom systemów przy próbie odczytu niedozwolonych znaków, należy je przetłumaczyć na ich bezpieczną, kompatybilną formę za pomocą <strong>Percent-Encoding</strong>.',
    },
    {
      type: 'title',
      text: 'Jak działa Percent-Encoding',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Gdy korzystasz z tego narzędzia, algorytm pobiera dowolny „niebezpieczny” znak (taki jak spacja lub litera z akcentem, np. ñ) i zastępuje go znakiem procenta <code>%</code>, po którym następują dwie cyfry szesnastkowe odpowiadające jego wartości w standardzie UTF-8.',
    },
    {
      type: 'list',
      items: [
        '<strong>Podstawowy przykład:</strong> Zwykła spacja zostanie zastąpiona jej bezpiecznym odpowiednikiem: <code>%20</code>.',
        '<strong>Rozszerzone wsparcie:</strong> Litera <code>ą</code> staje się <code>%C3%B1</code>, a <code>ł</code> staje się <code>%C5%82</code>.',
      ],
    },
    {
      type: 'title',
      text: 'Znaczenie w interfejsach API i żądaniach GET',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Podczas tworzenia integracji typowym błędem jest przekazywanie surowego ciągu znaków do parametrów URL. Jeśli wstawisz <code>koszula&niebieska</code> w surowej formie do swojego backendu (<code>/search?q=koszula&niebieska</code>), serwer zinterpretuje <code>niebieska</code> jako nowy parametr, co zepsuje całą logikę.',
    },
    {
      type: 'paragraph',
      html: 'To narzędzie gwarantuje czyste, automatyczne obliczenia przy 100% wykonaniu w lokalnej przeglądarce. Żaden z Twoich ciągów URL nie jest przesyłany do serwerów stron trzecich, co zapewnia prywatność Twoich tokenów i parametrów analitycznych.',
    },
  ],
};
