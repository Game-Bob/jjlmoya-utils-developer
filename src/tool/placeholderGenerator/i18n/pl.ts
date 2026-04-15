import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PlaceholderGeneratorUI } from '../ui';

const slug = 'generator-obrazu-zastepczego';
const title = 'Generator Obrazu Zastępczego. Szybkie Mockupy Online';
const description =
  'Twórz niestandardowe obrazy zastępcze dla swoich projektów webowych. Dostosuj rozdzielczość, tło, tekst i eksportuj w formatach PNG, WebP lub JPEG natychmiast.';

const faqData = [
  {
    question: 'Co to jest obraz zastępczy?',
    answer:
      'Obraz zastępczy, znany również jako placeholder, to tymczasowa grafika używana w projektowaniu stron internetowych i układach, aby zarezerwować miejsce, w którym ostatecznie pojawi się definicja obrazu. Pomaga wizualizować strukturę strony przed dostępnością ostatecznej zawartości.',
  },
  {
    question: 'Czy mogę użyć dowolnej rozdzielczości w generatorze?',
    answer:
      'Tak, możesz wprowadzić dowolną wartość liczbową dla szerokości i wysokości. Generator utworzy kanwę z dokładnie żądanymi wymiarami, idealnymi do ścisłych siatek lub określonych banerów reklamowych.',
  },
  {
    question: 'W jakim formacie są pobierane obrazy?',
    answer:
      'Domyślnie obrazy są generowane w formacie WebP dla optymalnej kompresji, ale możesz wybrać pobieranie w formacie PNG, aby zachować maksymalną jakość bez strat, lub JPEG dla tradycyjnej kompatybilności.',
  },
  {
    question: 'Czy to jest przetwarzane na jakimkolwiek serwerze?',
    answer:
      'Nie, całe renderowanie obrazu jest generowane natychmiast w pamięci wirtualnej (Canvas) Twojej przeglądarki. Jest to błyskawiczne i nie wymaga wysyłania danych przez sieć.',
  },
];

const howToData = [
  {
    name: 'Ustaw wymiary',
    text: 'Wprowadź wartości szerokości i wysokości bezpośrednio lub kliknij jedno z ustawień wstępnych (FHD, HD, Instagram itp.), aby je automatycznie wypełnić.',
  },
  {
    name: 'Skonfiguruj kolory i tekst',
    text: 'Wybierz kolory tła i tekstu za pomocą selektorów natywnych lub wpisując kod szesnastkowy. Opcjonalnie dodaj niestandardowy tekst, aby zastąpić domyślną etykietę wymiaru.',
  },
  {
    name: 'Wybierz typografię i format',
    text: 'Wybierz rodzinę czcionek i rozmiar. Wybierz format wyjściowy (WebP, PNG lub JPEG) zgodnie z Twoimi potrzebami.',
  },
  {
    name: 'Pobierz obraz',
    text: 'Kliknij przycisk Pobierz, aby zapisać wygenerowany obraz zastępczy bezpośrednio na swoim urządzeniu.',
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

const ui: PlaceholderGeneratorUI = {
  labelDimensions: 'Szybkie Wymiary',
  labelWidth: 'Szerokość (px)',
  labelHeight: 'Wysokość (px)',
  labelBgColor: 'Tło',
  labelTextColor: 'Tekst',
  labelCustomText: 'Niestandardowy Tekst (Opcjonalnie)',
  placeholderCustomText: 'Np.: Hero Banner',
  labelFontFamily: 'Typografia',
  labelFontSize: 'Rozmiar Bazowy',
  fontSizeAuto: 'Automatycznie',
  labelFormat: 'Format Wyjściowy',
  btnDownload: 'Pobierz Obraz',
};

export const content: ToolLocaleContent<PlaceholderGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje i Dokumentacja',
  bibliography: [
    {
      name: 'MDN Web Docs: HTMLCanvasElement.toDataURL()',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL',
    },
    {
      name: 'MDN Web Docs: CanvasRenderingContext2D',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D',
    },
    {
      name: 'W3C: HTML Canvas 2D Context',
      url: 'https://www.w3.org/TR/2dcontext/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Ostateczne Narzędzie do Szybkich Mockupów',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Na początkowych etapach konceptualizacji lub strukturalizacji witryny (wireframing) rzadko dysponujemy ostateczną zawartością fotograficzną. Puste wymiary mogą zniekształcić globalną wizualizację produktu i ukryć krytyczne błędy w odstępach lub proporcjach. Generator obrazów zastępczych natychmiast rozwiązuje ten problem, pozwalając na wstrzykiwanie dokładnie wymiarowanych obszarów kolorowych.',
    },
    {
      type: 'tip',
      title: 'Projektowanie Bez Tarcia',
      html: 'Integracja przestrzeni o dokładnie 1200x800 pikseli jest konieczna podczas budowania CSS Grids. Pobierając bloki wypełniające, unikasz wstrzykiwania dodatkowego CSS lub skryptów trzecich stron do kodu tymczasowego.',
    },
    {
      type: 'title',
      text: 'Znaczenie Unikania Usług Zewnętrznych',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Często spotykana praktyka w ekosystemie frontendu polega na łączeniu się z usługami takimi jak <code>via.placeholder.com</code> lub podobnymi bezpośrednio w atrybutach <code>src</code> HTML. Choć teoretycznie zwinne poprzez parametry URL, ma to poważne skutki uboczne, które ostrożny programista będzie starał się unikać.',
    },
    {
      type: 'paragraph',
      html: 'Wstawienie domeny zdalnej w każde znaczenie obrazu na stronie deweloperskiej zwiększa żądania DNS, karze systemy hot-reload Vite, Gulp lub Webpack i przypadkowo ujawnia ślady w gałęziach, które ostatecznie trafiają do chmury. Korzystając z tego narzędzia i generując obraz w preferowanym formacie (WebP, PNG lub JPEG), centralizujesz swój prototyp całkowicie w trybie localhost.',
    },
    {
      type: 'title',
      text: 'Kluczowe Cechy Algorytmu Generatora',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Rozdzielczość Pixel Perfect:</strong> Natywna HTML5 Canvas zapewnia, że eksportowana kanwa odpowiada arytmetycznie współrzędnym określonym przez użytkownika.',
        '<strong>Automatyczne Skalowanie Typograficzne:</strong> W trybie Automatycznie rozmiar czcionki oblicza obszar obwodu i liczbę znaków, aby elegancko dopasować tekst bez niepożądanych <em>przepełnień</em>.',
        '<strong>Fuzja Szesnastkowa:</strong> Dwukierunkowa kontrola stanu między selektorami natywnego ekosystemu HTML i wpisanymi danymi wejściowymi, gwarantując precyzyjne kontrasty dyktowane przez paletę Figma lub Penpot UI/UX.',
      ],
    },
    {
      type: 'title',
      text: 'Ukryta Sztuka Technicznych Wireframe\'ów',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nie ma monolitycznego projektu ani mikrofrontendu, który nie przejdzie przez etapy tworzenia fundamentu, zwłaszcza gdy mamy do czynienia z wymagającymi klientami lub Product Managerami z żelazną wizją. Ułatwienie zwinnymi iteracjami graficznymi bez noszenia obciążenia ostatecznych <em>assetów</em> oddziela szybkiego programistę od zablokowanego. Ten generator bezpośrednio wykorzystuje nowoczesny API JS <code>toDataURL()</code> na Twojej lokalnej maszynie, aby dostarczyć rezultat na poziomie branżowym bez wątpliwego pośredniego przetwarzania.',
    },
  ],
};
