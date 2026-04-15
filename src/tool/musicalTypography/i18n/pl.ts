import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MusicalTypographyUI } from '../ui';

const slug = 'muzyczna-skala-typograficzna';
const title = 'Muzyczna Skala Typograficzna. Kalkulator Skali Modularnej';
const description =
  'Darmowe narzędzie online do tworzenia harmonijnych hierarchii wizualnych przy użyciu skal modularnych opartych na proporcjach muzycznych. Generuje gotowe zmienne CSS do Twojego projektu webowego.';

const faqData = [
  {
    question: 'Co to jest typograficzna skala modularna?',
    answer:
      'To metoda określania rozmiarów czcionek na podstawie stałego stosunku matematycznego. Podobnie jak w muzyce, gdzie nuty mają relacje harmoniczne, skala modularna tworzy zbalansowaną i przewidywalną hierarchię wizualną.',
  },
  {
    question: 'Dlaczego używać interwałów muzycznych do projektowania?',
    answer:
      'Interwały muzyczne to proporcje, które ludzki mózg postrzega jako harmonijne. Zastosowanie ich do rozmiarów tekstu tworzy strukturę wizualną, która wydaje się poprawna i profesjonalna, zamiast przypadkowych rozmiarów.',
  },
  {
    question: 'Co to jest Złota Proporcja w typografii?',
    answer:
      'To proporcja 1.618, znana jako Złota Sekcja. Tworzy bardzo dramatyczne i eleganckie skale, w których każdy krok hierarchii rośnie wykładniczo. Idealny dla portfela lub stron nastawionych na sztukę.',
  },
  {
    question: 'Jak wdrożyć skalę w moim pliku CSS?',
    answer:
      'Narzędzie generuje zmienne CSS (tokeny) w formacie :root { --step-N: Xrem; }. Skopiuj je do głównego pliku CSS i używaj ich z var(--step-N), aby zachować konsystencję typograficzną na całej stronie.',
  },
];

const howToData = [
  {
    name: 'Ustaw rozmiar bazowy',
    text: 'Wprowadź rozmiar czcionki dla tekstu w treści (zwykle 16px), który będzie służyć jako fundamentalna nuta Twojej skali.',
  },
  {
    name: 'Wybierz interwał',
    text: 'Wybierz proporcję muzyczną, aby określić, ile miejsca jest między różnymi poziomami nagłówków.',
  },
  {
    name: 'Podgląd hierarchii',
    text: 'Obserwuj, jak zachowują się poziomy typograficzne w czasie rzeczywistym, aby zweryfikować, że wizualna harmonia pasuje do Twojego projektu.',
  },
  {
    name: 'Eksportuj kod',
    text: 'Kliknij Skopiuj zmienne CSS, aby uzyskać blok gotowy do wklejenia bezpośrednio do Twojego przepływu pracy.',
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
  applicationCategory: 'DesignApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pl',
};

const ui: MusicalTypographyUI = {
  labelConfig: 'Konfiguracja',
  labelBaseSize: 'Rozmiar Bazowy (px)',
  hintBaseSize: 'Rozmiar tekstu w akapicie (zwykle 16px).',
  labelRatio: 'Skala Muzyczna (Stosunek)',
  hintRatio: 'Określa, jak bardzo rozmiar rośnie na każdym etapie.',
  labelCalculated: 'Wartości Obliczone',
  labelPreview: 'Podgląd',
  btnCopyCss: 'Skopiuj Zmienne CSS',
  feedbackCopied: 'Zmienne skopiowane do schowka!',
  previewText: 'Muzyczna Typografia',
  previewSubtext: 'Idealna harmoniczna skala do Twojego projektowania.',
  ratioSecundaMenor: 'Sekunda Mała',
  ratioSegundaMayor: 'Sekunda Duża',
  ratioTerceraMenor: 'Tercja Mała',
  ratioTerceraMayor: 'Tercja Duża',
  ratioCuartaPerfecta: 'Kwarta Czysta',
  ratioCuartaAumentada: 'Kwarta Powiększona',
  ratioQuintaPerfecta: 'Kwinta Czysta',
  ratioProporcionAurea: 'Złota Proporcja',
  ratioSextaMayor: 'Seksta Duża',
  ratioSeptimaMenor: 'Septyma Mała',
  ratioSeptimaMayor: 'Septyma Duża',
  ratioOctava: 'Oktawa',
};

export const content: ToolLocaleContent<MusicalTypographyUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Często Zadawane Pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje',
  bibliography: [
    {
      name: 'Bringhurst, R. The Elements of Typographic Style',
      url: 'https://en.wikipedia.org/wiki/The_Elements_of_Typographic_Style',
    },
    {
      name: 'Brown, T. More Meaningful Typography. A List Apart',
      url: 'https://alistapart.com/article/more-meaningful-typography/',
    },
    {
      name: 'Physics of Music. Musical Intervals and Scales',
      url: 'https://es.scribd.com/document/199729396/Physics-of-Music-Notes',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Niewidzialna harmonia projektowania webowego',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Muzyczna Skala Typograficzna</strong> stosuje matematykę interwałów muzycznych do projektowania typograficznego. Podobnie jak kompozycja muzyczna jest rządzona dokładnymi proporcjami, solidny design korzysta ze struktury matematycznej, która wiąże wszystkie rozmiary ze sobą.',
    },
    {
      type: 'title',
      text: 'Jak działa skala modularna',
      level: 3,
    },
    {
      type: 'grid',
      columns: 2,
    },
    {
      type: 'card',
      title: 'Wzór',
      html: '<p>Progresja jest prosta: <code>Size = Base × Ratio<sup>n</sup></code>. Krok 0 to Twój tekst bazowy. Krok 1 to mały podtytuł. Krok 4 lub 5 może być Twoim głównym H1. Ta sama stała mnożenia (stosunek) zapewnia, że wszystkie relacje są spójne.</p>',
    },
    {
      type: 'card',
      title: 'Dlaczego "Muzyczna"',
      html: '<p>Pitagorejczycy odkryli, że podział struny na proste proporcje (1:2, 2:3, 3:4) wytwarzał spółgłoski. Te interwały, oktawa, kwinta czysta i kwarta czysta, to dokładnie typograficzne stosunki. Komponujesz wizualną muzykę.</p>',
    },
    {
      type: 'title',
      text: 'Wybór właściwego stosunku',
      level: 3,
    },
    {
      type: 'tip',
      html: 'W gęstych interfejsach (pulpity nawigacyjne, tabele) używaj małych stosunków, takich jak <code>1.125</code> lub <code>1.2</code>. W przypadku redakcyjnych lub portfelowych stron internetowych używaj bardziej ekspresywnych stosunków, takich jak <code>1.5</code> lub <code>1.618</code>.',
    },
    {
      type: 'paragraph',
      html: 'Nie ograniczaj skali tylko do <code>font-size</code>. Te same zmienne CSS działają dla <code>margin</code>, <code>padding</code> i <code>gap</code>. Kiedy białe miejsce podąża za tą samą progresją matematyczną co tekst, design osiąga poziom koherencji, który wszyscy czują, ale niewielu potrafi wyjaśnić.',
    },
  ],
};
