import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SvgSanitizerUI } from '../ui';

const slug = 'oczyszczacz-svg';
const title = 'Oczyszczacz SVG Online';
const description = 'Optymalizuj i czyść pliki SVG wyeksportowane z Figmy, Adobe Illustratora lub Inkscape. Usuń metadane, zbędne atrybuty i puste grupy, aby uzyskać SVG gotowy do produkcji.';

const faqData = [
  {
    question: 'Czy mogę wkleić pełny kod HTML strony z osadzonym SVG?',
    answer: 'Tak. Oczyszczacz wykrywa element SVG wewnątrz HTML i wyodrębnia tylko ten blok do przetworzenia. Działa również wtedy, gdy wkleisz bezpośrednio fragment SVG.',
  },
  {
    question: 'Czy narzędzie obsługuje pliki SVG z Illustratora?',
    answer: 'Tak. Illustrator eksportuje SVG z deklaracjami XML, metadanymi i własnymi przestrzeniami nazw, które oczyszczacz usuwa. Wynikiem jest SVG zgodny ze wszystkimi nowoczesnymi przeglądarkami.',
  },
  {
    question: 'Jaka jest różnica między czyszczeniem a minifikacją?',
    answer: 'Czyszczenie usuwa zbędne atrybuty i tagi, ale zachowuje format z wcięciami, dzięki czemu możesz czytać i edytować kod. Minifikacja dodatkowo kompresuje wszystko do jednej linii, aby maksymalnie zmniejszyć rozmiar pliku.',
  },
  {
    question: 'Czy usunięcie identyfikatorów może uszkodzić SVG?',
    answer: 'Tylko jeśli jakiś element SVG odwołuje się do innego przez identyfikator, na przykład przez fill="url(#gradient)". W takim przypadku wyłącz opcję Usuń identyfikatory. Jest ona domyślnie wyłączona właśnie po to, aby uniknąć tego problemu.',
  },
  {
    question: 'Czy mój kod SVG jest wysyłany na serwer?',
    answer: 'Nie. Całe przetwarzanie odbywa się w Twojej przeglądarce przy użyciu natywnych interfejsów API DOMParser i XMLSerializer. Kod nigdy nie opuszcza Twojego urządzenia.',
  },
];

const howToData = [
  { name: 'Wklej SVG', text: 'Wklej kod SVG wyeksportowany z Figmy, Illustratora lub Inkscape do pola tekstowego.' },
  { name: 'Skonfiguruj opcje', text: 'Włącz lub wyłącz opcje: usuń identyfikatory, usuń width/height i minifikuj według swoich potrzeb.' },
  { name: 'Wyczyść', text: 'Kliknij Wyczyść SVG, aby przetworzyć kod i uzyskać zoptymalizowany wynik.' },
  { name: 'Skopiuj lub pobierz', text: 'Użyj przycisków Kopiuj lub Pobierz, aby zachować czysty SVG gotowy do produkcji.' },
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

const ui: SvgSanitizerUI = {
  labelInput: 'Wklej tutaj swój brudny SVG',
  labelOutput: 'Czysty SVG',
  optRemoveIds: 'Usuń identyfikatory',
  optRemoveWH: 'Usuń width/height',
  optMinify: 'Minifikuj',
  btnSanitize: 'Wyczyść SVG',
  btnCopy: 'Kopiuj',
  btnCopied: 'Skopiowano',
  btnDownload: 'Pobierz',
  statOriginal: 'Oryginał',
  statCleaned: 'Czysty',
  statReduction: 'Redukcja',
  statElems: 'Usunięte elem.',
  statAttrs: 'Usunięte atryb.',
  errorPaste: 'Wklej plik SVG przed czyszczeniem.',
  errorProcess: 'Błąd podczas przetwarzania SVG.',
};

export const content: ToolLocaleContent<SvgSanitizerUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Odniesienia',
  bibliography: [
    { name: 'SVG Specification - W3C', url: 'https://www.w3.org/TR/SVG2/' },
    { name: 'Figma SVG Export - Oficjalna dokumentacja', url: 'https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma' },
    { name: 'SVGO - SVG Optimizer (open source reference)', url: 'https://github.com/svg/svgo' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Oczyszczacz SVG: Czysty kod z Figmy i Illustratora', level: 2 },
    {
      type: 'paragraph',
      html: 'Wklej dowolny SVG wyeksportowany z <strong>Figmy</strong>, Adobe Illustratora lub inspektora przeglądarki i uzyskaj czysty, zoptymalizowany plik wektorowy gotowy do produkcji.',
    },
    { type: 'title', text: 'Dlaczego wyeksportowane pliki SVG są takie brudne?', level: 3 },
    {
      type: 'paragraph',
      html: 'Gdy eksportujesz SVG z Figmy, otrzymujesz plik wypełniony atrybutami, które mają sens tylko wewnątrz aplikacji: <code>data-name</code>, <code>xml:space</code>, odwołania do wewnętrznych warstw i metadane projektu. Efektem jest SVG, który może ważyć o 40–70% więcej niż powinien.',
    },
    { type: 'title', text: 'Co usuwa oczyszczacz', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Metadane edytora:</strong> tagi <code>metadata</code>, <code>title</code> i <code>desc</code> dodawane automatycznie przez Figmę i Illustratora.',
        '<strong>Przestrzenie nazw Inkscape:</strong> wszystkie elementy z prefiksem <code>inkscape:</code> i <code>sodipodi:</code>.',
        '<strong>Zbędne atrybuty:</strong> <code>xml:space</code>, <code>version</code>, nadmiarowe <code>xmlns:*</code> oraz atrybuty <code>data-*</code> z Figmy.',
        '<strong>Puste grupy:</strong> elementy <code>&lt;g&gt;</code> bez zawartości pozostałe jako artefakty usuniętych warstw.',
        '<strong>Deklaracje XML:</strong> deklaracja <code>&lt;?xml version="1.0"?&gt;</code> i DOCTYPE zbędne przy osadzaniu SVG w HTML.',
      ],
    },
  ],
};
