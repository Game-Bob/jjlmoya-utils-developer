import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { KeycodeUI } from '../ui';

const slug = 'wizualizator-kodu-klawisza';
const title = 'Wizualizator Kodu Klawisza Klawiatury Online. KeyCode Inspector';
const description =
  'Darmowe narzędzie online do podglądu event.key, event.code, event.which i położenia dowolnego klawisza klawiatury w czasie rzeczywistym. Generuje gotowe do użycia fragmenty kodu JavaScript.';

const faqData = [
  {
    question: 'Jaka jest różnica między event.key a event.code?',
    answer:
      'event.code reprezentuje fizyczny klawisz na klawiaturze, niezależnie od skonfigurowanego języka. event.key reprezentuje wygenerowany znak, który może się zmienić po naciśnięciu Shift lub użyciu innego języka. Do sterowania grami używaj code; do wprowadzania tekstu i semantycznych skrótów klawiszowych używaj key.',
  },
  {
    question: 'Czym jest event.which i dlaczego jest przestarzałe?',
    answer:
      'event.which to starsze właściwość zwracająca numeryczny kod ASCII klawisza. Jest oznaczone jako przestarzałe (deprecated) w nowoczesnych standardach, ponieważ event.key i event.code zastępują je dokładniejszymi i czytelniejszymi informacjami. Wyświetlane jest w tym narzędziu w celach edukacyjnych.',
  },
  {
    question: 'Co oznacza właściwość location?',
    answer:
      'Właściwość location wskazuje, gdzie klawisz jest fizycznie umieszczony na klawiaturze: Standard (normalna pozycja), Left (lewy klawisz modyfikujący), Right (prawy klawisz modyfikujący) lub Numpad (klawiatura numeryczna). Przydatne jest np. do rozróżnienia lewego i prawego klawisza CTRL.',
  },
  {
    question: 'Czy działa z klawiaturami międzynarodowymi i układami innymi niż QWERTY?',
    answer:
      'Tak. Narzędzie wyświetla dokładnie to, co przeglądarka raportuje dla Twojej konfiguracji klawiatury. event.code zawsze zwróci nazwę QWERTY fizycznej pozycji, podczas gdy event.key pokaże rzeczywisty znak zgodny z Twoim językiem.',
  },
];

const howToData = [
  {
    name: 'Naciśnij dowolny klawisz',
    text: 'Gdy strona ma fokus, naciśnij dowolny klawisz na klawiaturze, aby natychmiast zobaczyć wszystkie informacje o zdarzeniu.',
  },
  {
    name: 'Kopiuj poszczególne wartości',
    text: 'Kliknij przycisk kopiowania obok każdej właściwości (event.key, event.code itp.), aby skopiować tę konkretną wartość do schowka.',
  },
  {
    name: 'Użyj fragmentów kodu',
    text: 'W sekcji „Szybkie fragmenty" znajdziesz bloki kodu JavaScript gotowe do wklejenia bezpośrednio do swojego projektu.',
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
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pl',
};

const ui: KeycodeUI = {
  promptTitle: 'Naciśnij klawisz',
  promptSubtitle: 'Dowolny klawisz na klawiaturze, aby zobaczyć jego kod',
  snippetsTitle: 'Szybkie Fragmenty',
  btnCopy: 'Kopiuj',
  locationStandard: 'Standard',
  locationLeft: 'Lewo',
  locationRight: 'Prawo',
  locationNumpad: 'Numpad',
};

export const content: ToolLocaleContent<KeycodeUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje i Standardy',
  bibliography: [
    {
      name: 'MDN Web Docs – KeyboardEvent',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent',
    },
    {
      name: 'UI Events Specification (W3C) – KeyboardEvent',
      url: 'https://www.w3.org/TR/uievents/#events-keyboardevents',
    },
    {
      name: 'MDN – KeyboardEvent.code values',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Zrozumienie zdarzeń klawiatury w JavaScript',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gdy użytkownik naciśnie klawisz, przeglądarka wyzwala trzy zdarzenia: <code>keydown</code>, <code>keypress</code> i <code>keyup</code>. Każde z nich udostępnia właściwości z informacjami o naciśniętym klawiszu, ale nie wszystkie są równoważne ani zalecane.',
    },
    {
      type: 'title',
      text: 'Właściwości zdarzeń klawiszowych',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'event.code — Fizyczny klawisz',
      html: '<p>Zwraca identyfikator <strong>fizycznej pozycji</strong> klawisza na klawiaturze, używając nomenklatury QWERTY. Na przykład klawisz „A" na klawiaturze AZERTY zwraca <code>KeyQ</code>. Idealny do sterowania grami, gdzie liczy się pozycja, a nie znak.</p>',
    },
    {
      type: 'card',
      title: 'event.key — Wygenerowany znak',
      html: '<p>Zwraca <strong>wartość znaku</strong> wygenerowanego zgodnie z językiem i aktywnymi modyfikatorami. Naciśnięcie Shift+A zwraca <code>"A"</code>; bez Shift zwraca <code>"a"</code>. Dla klawiszy specjalnych zwraca nazwy jak <code>"Enter"</code>, <code>"Escape"</code>, <code>"ArrowUp"</code>.</p>',
    },
    {
      type: 'title',
      text: 'Kiedy używać każdej właściwości',
      level: 3,
    },
    {
      type: 'tip',
      html: 'Używaj <code>event.code</code> do sterowania grami (WASD niezależnie od języka) i <code>event.key</code> do wykrywania określonych znaków lub semantycznych skrótów klawiszowych jak <code>Ctrl+C</code>.',
    },
    {
      type: 'paragraph',
      html: 'Właściwości <code>event.which</code> i <code>event.keyCode</code> są oficjalnie <strong>przestarzałe</strong> zgodnie ze standardem W3C. Chociaż nowoczesne przeglądarki nadal je obsługują dla zachowania kompatybilności, nie powinny być używane w nowym kodzie.',
    },
  ],
};

