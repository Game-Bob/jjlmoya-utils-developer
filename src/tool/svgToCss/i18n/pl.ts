import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgToCssUI } from '../ui';

const slug = 'konwerter-svg-na-css';
const title = 'Darmowy konwerter SVG na CSS i Data URI online';
const description =
  'Przekształć swoje ikony i wektory SVG w kod CSS (Background lub Mask) lub skompresowany Data URI. Zoptymalizuj wydajność swojej strony internetowej, eliminując zewnętrzne żądania HTTP.';

const faqData = [
  {
    question: 'Czy lepiej jest używać Data URI czy zewnętrznego pliku .svg?',
    answer:
      'To zależy od przypadku użycia. Data URI eliminują żądania HTTP (idealne dla małych ikon), ale zwiększają rozmiar pliku CSS. W przypadku dużych lub bogatych w szczegóły ilustracji preferowany jest plik zewnętrzny.',
  },
  {
    question: 'Jak zmienić kolor obrazu SVG osadzonego w CSS?',
    answer:
      "Najlepszym sposobem jest użycie 'mask-image'. Definiując SVG jako maskę, możesz użyć 'background-color', aby dynamicznie zmieniać jego kolor, nawet w stanach :hover.",
  },
  {
    question: 'Które przeglądarki obsługują maski CSS?',
    answer:
      'Wszystkie nowoczesne przeglądarki (Chrome, Firefox, Safari, Edge) mają pełne wsparcie. W przypadku starszych przeglądarek powszechnie stosuje się prefiksy -webkit-.',
  },
  {
    question: 'Czy używanie Data URI wpływa na SEO?',
    answer:
      'Tak, pozytywnie. Zmniejszając liczbę żądań potrzebnych do wyrenderowania strony, poprawia czas ładowania (LCP) i wyniki Core Web Vitals.',
  },
  {
    question: 'Czy mogę go używać w frameworkach takich jak React czy Tailwind?',
    answer:
      'Oczywiście! Możesz skopiować wygenerowany kod i użyć go w swoich plikach .css lub nawet jako dowolne wartości w Tailwind CSS.',
  },
];

const howToData = [
  {
    name: 'Wklej SVG',
    text: 'Skopiuj kod źródłowy pliku SVG i wklej go w polu tekstowym po lewej stronie.',
  },
  {
    name: 'Wybierz typ wyjściowy',
    text: 'Wybierz między tłem (Background Image dla statycznego tła), maską CSS (CSS Mask dla ikon z dynamicznym kolorem) lub samym Data URI (do bezpośredniego użycia).',
  },
  {
    name: 'Skopiuj wynik',
    text: 'Kliknij „Kopiuj”, aby pobrać wygenerowany kod CSS do schowka.',
  },
  {
    name: 'Zastosuj w swoim projekcie',
    text: 'Wklej kod do arkusza stylów lub komponentu CSS. W przypadku masek dodaj również background-color, aby zdefiniować kolor ikony.',
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

const ui: SvgToCssUI = {
  labelPasteTitle: 'Wklej SVG',
  labelInputArea: 'Kod źródłowy SVG',
  labelPreviewOriginal: 'Podgląd oryginału',
  labelResultTitle: 'Wynik CSS',
  labelPreviewApplied: 'Zastosowany wynik',
  tabBackground: 'Obraz tła (Background)',
  tabMask: 'Maska CSS / Webkit',
  tabUri: 'Tylko Data URI',
  btnCopy: 'Kopiuj',
  btnCopied: 'Skopiowano!',
  placeholder: '<svg xmlns="http://www.w3.org/2000/svg" ...',
};

export const content: ToolLocaleContent<SvgToCssUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje i dokumentacja',
  bibliography: [
    {
      name: 'CSS-Tricks: Używanie SVG jako tła',
      url: 'https://css-tricks.com/using-svg/',
    },
    {
      name: 'MDN Web Docs: mask-image',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image',
    },
    {
      name: 'MDN Web Docs: background-image',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-image',
    },
    {
      name: 'W3C: CSS Masking Module Level 1',
      url: 'https://www.w3.org/TR/css-masking-1/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Dlaczego warto konwertować SVG na CSS Data URI?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W nowoczesnym programowaniu stron internetowych optymalizacja wydajności i ładowania zasobów jest kluczowa. Osadzanie ikon bezpośrednio w CSS za pomocą <strong>Data URI</strong> eliminuje niepotrzebne żądania HTTP, zmniejszając opóźnienia i poprawiając wskaźnik Time to Interactive (TTI).',
    },
    {
      type: 'paragraph',
      html: 'To narzędzie przekształca kod wektorowy <code>&lt;svg&gt;</code> w zakodowany ciąg tekstowy, który przeglądarka może zinterpretować jako obraz tła lub maskę przycinającą, zachowując nieskończoną skalowalność i ostrość charakterystyczną dla wektorów.',
    },
    {
      type: 'title',
      text: 'Kluczowe korzyści techniczne',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Zero żądań HTTP:</strong> Osadzając grafikę w plikach <code>.css</code>, przeglądarka nie musi pobierać dodatkowych plików zewnętrznych.',
        '<strong>Personalizacja przez maskę CSS:</strong> Dzięki technice <code>mask-image</code> możesz zmienić kolor złożonej ikony wektorowej po prostu za pomocą <code>background-color</code>.',
        '<strong>Natychmiastowe renderowanie:</strong> Unikasz mignięcia treści (FOUC), ponieważ krytyczne zasoby wizualne są dostępne natychmiast po pobraniu arkusza stylów.',
      ],
    },
    {
      type: 'title',
      text: 'Maski CSS vs Tła (Backgrounds)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wielu deweloperów używa po prostu <code>background-image</code> do osadzania wektorów, ale ma to pewne ograniczenie: nie można dynamicznie zmieniać koloru SVG z poziomu CSS.',
    },
    {
      type: 'paragraph',
      html: 'Nasze narzędzie obsługuje generowanie kodu dla <strong>masek CSS</strong>. Stosując <code>mask-image</code> z wygenerowanym Data URI, ikona działa jak szablon, pozwalając <code>background-color</code> elementu zdefiniować ostateczny kolor ikony. To najbardziej profesjonalny i elastyczny sposób zarządzania ikonami w Astro, Next.js lub jakimkolwiek nowoczesnym frameworku.',
    },
  ],
};
