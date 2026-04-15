import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ColorConverterUI } from '../ui';

const slug = 'konwerter-kolorow-rgb-hex-hsl';
const title = 'Internetowy konwerter kolorów RGB, HEX i HSL';
const description = 'Natychmiast konwertuj kolory między formatami RGB, HEX i HSL. Generuj komplementarne harmonie kolorów i analizuj kontrast WCAG. W 100% po stronie klienta i prywatnie.';

const faqData = [
  {
    question: 'Jak działa konwerter kolorów z RGB na HEX i HSL?',
    answer: 'Narzędzie pobiera wartości czerwonego, zielonego i niebieskiego (RGB) i wykorzystuje algorytmy matematyczne do ich konwersji na odpowiednik szesnastkowy (HEX) lub wartości odcienia, nasycenia i jasności (HSL). Działa to również w drugą stronę.',
  },
  {
    question: 'Dlaczego w moich projektach powinienem używać HSL zamiast HEX?',
    answer: 'Format HSL jest znacznie bardziej intuicyjny. Pozwala na dostosowanie nasycenia lub jasności bez zmiany samego odcienia, co znacznie ułatwia tworzenie harmonijnych palet lub stanów przycisków (hover, disabled).',
  },
  {
    question: 'Co to jest wartość kontrastu względnego?',
    answer: 'Jest to wskaźnik określający czytelność tekstu na danym tle w oparciu o jego luminancję. Wysoki kontrast zapewnia osobom z niepełnosprawnościami wzroku możliwość odczytania treści, zgodnie z wytycznymi WCAG dotyczącymi dostępności.',
  },
  {
    question: 'Czy korzystanie z tego konwertera kolorów online jest bezpieczne?',
    answer: 'Absolutnie. Ponieważ narzędzie działa w 100% po stronie klienta, dane o Twoich kolorach nigdy nie opuszczają Twojego komputera. Całe przetwarzanie odbywa się bezpośrednio w przeglądarce, co gwarantuje prywatność i natychmiastowe działanie.',
  },
];

const howToData = [
  { name: 'Wybierz kolor', text: 'Użyj suwaków czerwonego, zielonego i niebieskiego lub wpisz kod HEX bezpośrednio w polu tekstowym.' },
  { name: 'Dostosuj kanały RGB', text: 'Przesuń suwaki, aby zmienić intensywność każdego kanału i zobaczyć aktualizację w czasie rzeczywistym.' },
  { name: 'Skopiuj format', text: 'Kliknij przycisk Kopiuj obok potrzebnego formatu HEX, RGB lub HSL.' },
  { name: 'Eksploruj harmonie', text: 'Kliknij na kolory harmonii (komplementarne, analogiczne, triady), aby skopiować je do schowka.' },
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pl',
};

const ui: ColorConverterUI = {
  labelPreview: 'Podgląd (kliknij, aby skopiować HEX)',
  labelHarmonies: 'Harmonie kolorów',
  labelR: 'Czerwony',
  labelG: 'Zielony',
  labelB: 'Niebieski',
  labelComp: 'Kompl.',
  labelAna1: 'Analog. 1',
  labelAna2: 'Analog. 2',
  labelTri1: 'Triada 1',
  labelTri2: 'Triada 2',
  btnCopy: 'Kopiuj',
  btnCopied: 'Skopiowano',
  contrastLabel: 'Kontrast',
  clickToCopy: 'Kliknij, aby skopiować',
};

export const content: ToolLocaleContent<ColorConverterUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Zasoby dotyczące kolorów i projektowania stron',
  bibliography: [
    { name: 'W3C: Dokumentacja kolorów CSS', url: 'https://www.w3.org/TR/css-color-4/' },
    { name: 'MDN: Przewodnik po modelu kolorów HSL', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl' },
    { name: 'WebAIM: Przewodnik po kontraście i dostępności', url: 'https://webaim.org/resources/contrastchecker/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Konwerter kolorów RGB na HEX i HSL dla programistów', level: 2 },
    {
      type: 'paragraph',
      html: 'W świecie <strong>frontend developmentu</strong> i projektowania <strong>UI/UX</strong> zarządzanie kolorami jest stałym zadaniem. Nasz <strong>konwerter kolorów online</strong> pozwala na natychmiastową transformację wartości między formatami <strong>HEX, RGB i HSL</strong> z matematyczną precyzją.',
    },
    { type: 'title', text: 'Formaty kolorów: HEX, RGB i HSL', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>HEX (szesnastkowy):</strong> standard de facto dla CSS. Kompaktowy i łatwy do udostępniania w kodzie.',
        '<strong>RGB (Czerwony, Zielony, Niebieski):</strong> oparty na systemie światła addytywnego. Idealny do bezpośredniego manipulowania kanałami lub nakładania przezroczystości za pomocą RGBA.',
        '<strong>HSL (Odcień, Nasycenie, Jasność):</strong> najbardziej intuicyjny format. Dostosuj odcień, nasycenie i jasność, aby tworzyć harmonijne palety.',
      ],
    },
    { type: 'title', text: 'Kontrast i dostępność WCAG', level: 3 },
    {
      type: 'paragraph',
      html: 'Kalkulator zawiera pomiar <strong>kontrastu względnego</strong> opartego na luminancji. Pomaga to spełnić wytyczne <strong>WCAG</strong>, zapewniając czytelność tekstu na wybranych tłach.',
    },
    { type: 'title', text: 'Automatyczne harmonie kolorów', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Komplementarne:</strong> kolor przeciwny na kole kolorów, idealny dla uzyskania maksymalnego kontrastu.',
        '<strong>Analogiczne:</strong> sąsiednie kolory, które tworzą gładkie, harmonijne przejścia.',
        '<strong>Triady:</strong> trzy kolory w równej odległości dla uzyskania żywych, zrównoważonych kompozycji.',
      ],
    },
  ],
};
