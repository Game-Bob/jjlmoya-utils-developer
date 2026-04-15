import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JsonFormatterUI } from '../ui';

const slug = 'formater-json';
const title = 'Darmowy Formater i Walidator JSON Online';
const description =
  'Darmowe narzędzie online do formatowania, walidacji i naprawy kodu JSON. Upiększ i sformatuj JSON. Wykrywa błędy składni i poprawia czytelność kodu.';

const faqData = [
  {
    question: 'Czy moje dane są bezpieczne podczas korzystania z tego formatera?',
    answer:
      'Absolutnie. Całe przetwarzanie odbywa się w 100% w Twojej przeglądarce (po stronie klienta). Twoje dane JSON nigdy nie są wysyłane na żaden serwer, co zapewnia pełną prywatność Twoich struktur danych.',
  },
  {
    question: 'Co powoduje błąd "Nieprawidłowy JSON"?',
    answer:
      'Zazwyczaj jest to spowodowane przecinkami na końcu obiektu (trailing commas), brakiem cudzysłowów wokół kluczy lub niewidocznymi znakami. Nasze narzędzie podświetla dokładną linię błędu, abyś mógł go naprawić.',
  },
  {
    question: 'Czy narzędzie potrafi naprawić uszkodzony JSON?',
    answer:
      'Nasze narzędzie automatycznie próbuje poprawić typowe błędy, takie jak niepotrzebne przecinki końcowe lub błędne sekwencje ucieczki znaków, aby JSON stał się zgodny ze standardem RFC 8259.',
  },
  {
    question: 'Czy narzędzie obsługuje bardzo duże pliki JSON?',
    answer:
      'Tak, silnik przetwarzania jest zoptymalizowany do obsługi złożonych struktur danych i dużych plików bez blokowania interfejsu przeglądarki.',
  },
];

const howToData = [
  {
    name: 'Wklej swój kod',
    text: 'Wklej niesformatowany lub zminimalizowany kod JSON do głównego pola tekstowego.',
  },
  {
    name: 'Waliduj i formatuj',
    text: 'System automatycznie przeanalizuje kod, podświetli błędy składniowe i zastosuje wcięcia w celu poprawy czytelności.',
  },
  {
    name: 'Wybierz styl',
    text: 'Wybierz format rozszerzony (beautify) lub skompresowany (minify) w zależności od tego, czy potrzebujesz czytelności, czy oszczędności miejsca.',
  },
  {
    name: 'Skopiuj wynik',
    text: 'Kliknij przycisk kopiowania, aby przenieść idealnie zweryfikowany kod JSON do schowka.',
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

const ui: JsonFormatterUI = {
  labelInput: 'Wejście (JSON)',
  labelOutput: 'Wyjście',
  btnMinify: 'Minifikuj',
  btnBeautify: 'Upiększ',
  btnFix: 'Spróbuj naprawić',
  btnCopy: 'Kopiuj',
  statusWaiting: 'Oczekiwanie na dane...',
  statusValid: 'Prawidłowy JSON',
  statusInvalid: 'Nieprawidłowy JSON',
  toastCopied: 'Skopiowano!',
  toastFixed: 'Naprawiono JSON (Podgląd)',
  toastFixFailed: 'Nie udało się automatycznie naprawić',
  placeholder: 'Wklej tutaj swój kod JSON...',
};

export const content: ToolLocaleContent<JsonFormatterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje i Standardy',
  bibliography: [
    {
      name: 'RFC 8259 – The JavaScript Object Notation (JSON) Data Interchange Format (IETF)',
      url: 'https://datatracker.ietf.org/doc/html/rfc8259',
    },
    {
      name: 'ECMA-404 – The JSON Data Interchange Syntax (Ecma International)',
      url: 'https://www.ecma-international.org/publications-and-standards/standards/ecma-404/',
    },
    {
      name: 'JSON.org – Wprowadzenie do JSON',
      url: 'https://www.json.org/json-en.html',
    },
    {
      name: 'MDN Web Docs – JSON',
      url: 'https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/JSON',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Walidacja i Formatowanie JSON',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'JSON (JavaScript Object Notation) to de facto standard wymiany danych w sieci. Jednak jego rygorystyczna składnia sprawia, że jest on podatny na błędy ludzkie podczas ręcznej edycji.',
    },
    {
      type: 'paragraph',
      html: 'To narzędzie pozwala zweryfikować strukturę, sformatować kod w celu poprawy jego czytelności i automatycznie naprawić typowe błędy składniowe.',
    },
    { type: 'grid', columns: 2 },
    {
      type: 'card',
      title: 'Typowe błędy, które naprawia',
      html: '<ul><li><strong>Pojedyncze cudzysłowy:</strong> Standard JSON wymaga podwójnych cudzysłowów. Narzędzie zamienia <code>\'klucz\': \'wartość\'</code> na <code>"klucz": "wartość"</code>.</li><li><strong>Klucze bez cudzysłowów:</strong> Wykrywa klucze obiektów w stylu JavaScript i dodaje niezbędne cudzysłowy.</li><li><strong>Przecinki końcowe:</strong> Usuwa przecinki na końcu obiektów lub tablic (trailing commas), które powodują błędy w rygorystycznych parserach.</li></ul>',
    },
    {
      type: 'card',
      title: 'Funkcje',
      html: '<ul><li><strong>Podświetlanie składni:</strong> Koloruje klucze, ciągi znaków, liczby i wartości logiczne, aby ułatwić szybkie czytanie.</li><li><strong>Walidacja w czasie rzeczywistym:</strong> Błyskawicznie wskazuje, czy JSON jest prawidłowy, lub wyświetla konkretny błąd parsowania.</li><li><strong>Całkowita prywatność:</strong> Przetwarzanie odbywa się w 100% w Twojej przeglądarce. Żadne dane nie są wysyłane na zewnętrzne serwery.</li></ul>',
    },
  ],
};
