import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { PromoteThisWebsiteUI } from '../ui';
import { bibliography } from '../bibliography';

const localized = {
    slug: 'promuj-te-strone',
    title: 'Promuj tę stronę',
    description: 'Wewnętrzne biuro propagandy jjlmoya.es po hiszpańsku i GameBob.dev na świecie. Zamieniaj zrzuty własnych stron w obrazy do mediów społecznościowych, zanim Bob uzna, że feed jest żenujący.',
    faqTitle: 'Promuj tę stronę bez denerwowania kota',
    bibliographyTitle: 'Strony z operacji',
    faq: [
      { question: 'Dla kogo właściwie jest to narzędzie?', answer: 'Do promowania stron jjlmoya.es po hiszpańsku i GameBob.dev na świecie. Reszta może patrzeć przez okno.' },
      { question: 'Czy mogę wkleić zrzut ekranu?', answer: 'Tak. Skopiuj zrzut i naciśnij Ctrl+V. Stanie się warstwą narzędzia, bo koci zarząd przyjmuje dowody w poprawnym formacie.' },
      { question: 'Co się dzieje po wklejeniu adresu produkcyjnego?', answer: 'Narzędzie odczytuje tytuł meta, wybiera markę i ładuje obraz Open Graph. Slug nie dostanie już awansu.' },
      { question: 'Dlaczego są dwie marki?', answer: 'jjlmoya.es to strona hiszpańska, a GameBob.dev międzynarodowa. Koty całkowicie ignorują tę różnicę.' },
      { question: 'Czy moje obrazy są wysyłane?', answer: 'Nie. Zostają w przeglądarce, a kompozycja jest renderowana lokalnie. Stronę opuszcza tylko świadomie pobrany PNG.' },
    ],
    howTo: [
      { name: 'Wklej zrzut ekranu', text: 'Wklej Ctrl+V zrzut z jjlmoya.es lub GameBob.dev. Zarząd żąda dowodu z własnego imperium.' },
      { name: 'Wybierz markę', text: 'Wybierz jjlmoya.es dla hiszpańskiego lub GameBob.dev dla strony międzynarodowej. Kot już posiada lokal.' },
      { name: 'Ułóż obraz', text: 'Przeciągaj zrzut, tytuł, logo, tło i maskotkę, aż kompozycja będzie wyglądała na zamierzoną.' },
      { name: 'Eksportuj PNG', text: 'Pobierz PNG w wybranym rozmiarze, zanim Bob przypisze sobie zasługi.' },
    ],
    seoTitle: 'Oficjalne biuro propagandy jjlmoya i GameBob',
    seoIntro: 'To nie jest ogólny kompozytor obrazów społecznościowych dla kogoś, kto właśnie odkrył słowo branding. Służy do promowania naszych stron jjlmoya.es i GameBob.dev pod nadzorem kotów.',
    seoBody: 'Wklej prawdziwy zrzut lub załaduj adres produkcyjny. Narzędzie czyta tytuł strony zamiast zgadywać go ze sluga i zachowuje widoczny obraz Open Graph podczas układania warstw.',
    seoTip: 'Zacznij od adresu produkcyjnego jjlmoya.es lub GameBob.dev. Jeśli tytuł, marka lub obraz się nie ładują, zarząd obwini sieć, człowieka, a na końcu koty.',
};
const ui: PromoteThisWebsiteUI = {
    urlLabel: 'Adres strony', urlPlaceholder: 'https://www.example.com/narzedzia/przyklad/', applyUrl: 'Zastosuj',
    formatLabel: 'Format', panoramic: 'Panorama · 1536 × 1024', instagram: 'Instagram · 1080 × 1350', square: 'Kwadrat · 1080 × 1080', story: 'Relacja · 1080 × 1920',
    titleLabel: 'Tytuł', titlePlaceholder: 'Krótki tytuł obrazu', titleSizeLabel: 'Rozmiar czcionki tytułu', titleBoxSizeLabel: 'Rozmiar pola tytułu', titleStyleLabel: 'Styl tytułu',
    brandLabel: 'Marka', brandStyleLabel: 'Styl marki', advancedLabel: 'Zaawansowana kompozycja', assetsLabel: 'Zasoby', backgroundLabel: 'Tło', toolLabel: 'Zrzut narzędzia', logoLabel: 'Logo', mascotLabel: 'Maskotka',
    layersLabel: 'Warstwy', backgroundLayer: 'Tło', toolLayer: 'Narzędzie', logoLayer: 'Logo', mascotLayer: 'Maskotka', titleLayer: 'Tytuł', reset: 'Resetuj', download: 'Pobierz PNG', activeLayer: 'Aktywna warstwa',
    canvasHint: 'Przeciągaj warstwy bezpośrednio po obszarze roboczym. Wklej zrzut skrótem Ctrl+V.', pasted: 'Zrzut wklejony jako warstwa narzędzia.', urlApplied: 'Zastosowano adres. Dostosuj tytuł i dodaj zrzut, który chcesz promować.', urlLoading: 'Odczytywanie tytułu strony i oficjalnego obrazu...', urlFailed: 'Nie udało się odczytać strony. Sprawdź adres lub dodaj zasoby ręcznie.', fileLoaded: 'Zasób załadowany.',
    titlePaper: 'Papier redakcyjny', titleRibbon: 'Złożona wstążka', titleInk: 'Plama atramentu', titlePoster: 'Nocny plakat', titleTicket: 'Oderwany bilet', titleMarker: 'Materiałowe podkreślenie', titleSplit: 'Podzielony blok', titleCapsule: 'Minimalna kapsuła', titleCorner: 'Róg redakcyjny', titleVertical: 'Pionowy akcent',
    brandPlain: 'Prosta marka', brandPlaque: 'Ceramiczna tabliczka', brandTicket: 'Bilet wstępu', brandStamp: 'Gumowa pieczęć', brandNeon: 'Neonowy szyld', brandRibbon: 'Wstążka sygnałowa', brandCorner: 'Róg redakcyjny', brandPixel: 'Blok pikseli', brandHalo: 'Delikatna poświata', brandEditorial: 'Linia redakcyjna', defaultTool: 'Wklej zrzut narzędzia',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: localized.faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};
const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: localized.title,
  description: localized.description,
  step: localized.howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};
const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: localized.title,
  description: localized.description,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<PromoteThisWebsiteUI> = {
  slug: localized.slug,
  title: localized.title,
  description: localized.description,
  ui,
  faqTitle: localized.faqTitle,
  faq: localized.faq,
  bibliographyTitle: localized.bibliographyTitle,
  bibliography,
  howTo: localized.howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: localized.seoTitle, level: 2 },
    { type: 'paragraph', html: localized.seoIntro },
    { type: 'stats', columns: 3, items: [{ value: '2', label: ui.brandLabel, icon: 'mdi:domain' }, { value: '4', label: ui.formatLabel, icon: 'mdi:crop' }, { value: '0', label: ui.activeLayer, icon: 'mdi:cat' }] },
    { type: 'title', text: localized.title, level: 3 },
    { type: 'paragraph', html: localized.seoBody },
    { type: 'title', text: localized.faqTitle, level: 3 },
    { type: 'paragraph', html: localized.seoBody },
    { type: 'table', headers: [ui.toolLayer, ui.titleLayer, ui.brandLabel], rows: [[ui.toolLabel, ui.titleLabel, ui.logoLabel]] },
    { type: 'tip', title: localized.faqTitle, html: localized.seoTip },
  ],
};
