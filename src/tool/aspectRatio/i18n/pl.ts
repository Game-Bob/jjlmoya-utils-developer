import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AspectRatioUI } from '../ui';

const slug = 'kalkulator-proporcji-obrazu';
const title = 'Kalkulator proporcji obrazu w pikselach. Proporcje online';
const description =
  'Obliczaj nowe rozdzielczości obrazu, wideo i projektów stron internetowych, zachowując dokładne proporcje, aby uniknąć zniekształceń grafiki. Obsługuje formaty 16:9, 4:3, 21:9 i niestandardowe.';

const faqData = [
  {
    question: 'Co to jest proporcja obrazu (Aspect Ratio)?',
    answer:
      'Proporcja obrazu opisuje geometryczną zależność między szerokością a wysokością obrazu lub ekranu. Jest reprezentowana przez dwie liczby oddzielone dwukropkiem (np. 16:9), wskazując, jak wysokość zmienia się proporcjonalnie w stosunku do szerokości.',
  },
  {
    question: 'Dlaczego ważne jest zachowanie poprawnych proporcji?',
    answer:
      'Ignorowanie proporcji obrazu powoduje, że obrazy są spłaszczone lub rozciągnięte, w filmach pojawiają się nieoczekiwane czarne pasy (letterboxing), a komponenty stron internetowych tracą swój układ na ekranach o różnych rozmiarach. Zachowanie poprawnych proporcji jest kluczem do profesjonalnego wyglądu.',
  },
  {
    question: 'Jak obliczyć wysokość na podstawie szerokości przy danej proporcji?',
    answer:
      'Wzór to: Wysokość = Szerokość × (Wysokość proporcji / Szerokość proporcji). Na przykład, dla szerokości 1280px przy proporcji 16:9, wysokość wyniesie: 1280 × (9/16) = 720px.',
  },
  {
    question: 'Jaka jest standardowa proporcja obrazu dla filmów na YouTube?',
    answer:
      'Standardową proporcją dla YouTube i większości nowoczesnych platform wideo jest 16:9. Odpowiada ona rozdzielczościom takim jak 1280×720 (HD), 1920×1080 (Full HD) lub 3840×2160 (4K UHD).',
  },
  {
    question: 'Jakie proporcje obrazu mają pionowe filmy w mediach społecznościowych?',
    answer:
      '9:16, co jest dokładnym odwróceniem formatu panoramicznego. Jest to natywna proporcja dla TikTok, Instagram Reels i YouTube Shorts, wynikająca z korzystania z telefonów komórkowych w pionie.',
  },
];

const howToData = [
  {
    name: 'Wprowadź oryginalną proporcję',
    text: 'Wpisz szerokość i wysokość proporcji, którą chcesz zachować (np. 16 i 9 dla panoramy) lub wybierz jedno z gotowych ustawień.',
  },
  {
    name: 'Dostosuj skalę',
    text: 'Zmień wartość szerokości lub wysokości w sekcji „Rzeczywista skala”. Narzędzie automatycznie obliczy drugą wartość, aby zachować proporcje.',
  },
  {
    name: 'Sprawdź podgląd',
    text: 'Panel podglądu pokazuje wynikowy kształt w skali proporcjonalnej, wraz z uproszczoną proporcją i obliczoną rozdzielczością.',
  },
  {
    name: 'Zastosuj w swoim projekcie',
    text: 'Skopiuj obliczone wartości, aby użyć ich w CSS (aspect-ratio: 16 / 9), przy eksporcie wideo lub w ustawieniach narzędzia projektowego.',
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

const ui: AspectRatioUI = {
  labelConfig: 'Konfiguracja',
  labelRatio: 'Oryginalna proporcja',
  labelWidth: 'Szerokość',
  labelHeight: 'Wysokość',
  labelScale: 'Rzeczywista skala',
  labelPixelWidth: 'Piksele (Szerokość)',
  labelPixelHeight: 'Piksele (Wysokość)',
  labelPreview: 'Podgląd proporcjonalny',
  labelStatus: 'Idealna proporcja',
  labelOffline: 'Narzędzie 100% offline',
};

export const content: ToolLocaleContent<AspectRatioUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje i dokumentacja',
  bibliography: [
    {
      name: 'MDN Web Docs: aspect-ratio (CSS)',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio',
    },
    {
      name: 'Wikipedia: Proporcje obrazu',
      url: 'https://pl.wikipedia.org/wiki/Proporcje_obrazu',
    },
    {
      name: 'W3C: CSS Box Sizing Level 4',
      url: 'https://www.w3.org/TR/css-sizing-4/#aspect-ratio',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Co to jest proporcja obrazu?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'W projektowaniu graficznym, fotografii i programowaniu frontendowym <strong>proporcja obrazu</strong> (Aspect Ratio) opisuje geometryczną zależność między szerokością a wysokością obrazu, ekranu lub kontenera. Zazwyczaj jest reprezentowana przez dwie liczby oddzielone dwukropkiem (np. <code>16:9</code>), wskazując, jak wysokość zmienia się proporcjonalnie w odpowiedzi na szerokość.',
    },
    {
      type: 'paragraph',
      html: 'Błędne zarządzanie proporcjami jest częstą przyczyną spłaszczonych zdjęć, filmów z nieoczekiwanym przycięciem (letterboxing) lub komponentów stron internetowych, które tracą swój układ przy przeglądaniu na różnych urządzeniach – od telefonów po monitory panoramiczne.',
    },
    {
      type: 'title',
      text: 'Typowe proporcje w branży',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'W zależności od Twojej dyscypliny będziesz stale stykać się z ograniczoną liczbą światowych standardów proporcji:',
    },
    {
      type: 'list',
      items: [
        '<strong>16:9 (Panorama):</strong> Absolutnie dominujący format w nowoczesnych monitorach, telewizorach, nagraniach YouTube czy standardowych rozdzielczościach wysokiej jakości (takich jak 1920×1080 lub 4K).',
        '<strong>9:16 (Pion):</strong> Wywodzi się z natywnego sposobu konsumpcji treści na urządzeniach mobilnych (TikTok, Instagram Reels, YouTube Shorts). Dokładnie te same proporcje co w wideo panoramicznym, ale przy fizycznym obróceniu urządzenia.',
        '<strong>4:3 (Klasyczny / Vintage):</strong> Spotykany w starych telewizorach i monitorach oraz w analogowych i specjalistycznych cyfrowych modelach aparatów. Jego nieco kwadratowy wygląd kieruje uwagę bezpośrednio na centralną oś kompozycji.',
      ],
    },
    {
      type: 'title',
      text: 'Programowanie stron i właściwość CSS aspect-ratio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Wcześniej w CSS używano skomplikowanych systemów matematycznych wykorzystujących <strong>Padding Hack</strong> (np. wstrzykiwanie <code>padding-top: 56.25%</code>) w celu zarezerwowania dynamicznej przestrzeni dla ramek iframe YouTube lub obrazów nagłówkowych, aby uniknąć problemu Cumulative Layout Shift (CLS) podczas ładowania strony.',
    },
    {
      type: 'paragraph',
      html: 'Obecnie wszystkie nowoczesne układy bezpośrednio stosują właściwości takie jak <code>aspect-ratio: 16 / 9;</code>, co pozwala uzyskać semantyczny kod i umożliwia przeglądarce automatyczne wyliczenie brakującego wymiaru na podstawie oryginalnej szerokości zdefiniowanej przez Grid lub Flexbox.',
    },
    {
      type: 'paragraph',
      html: 'Ten lokalny kalkulator pikseli przenosi możliwości projektowe na błyskawiczne obliczenia skalowania, które uchronią Twoje projekty przed katastrofalnymi błędami konfiguracji.',
    },
  ],
};
