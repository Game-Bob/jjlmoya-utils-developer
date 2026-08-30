import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import { bibliography } from '../bibliography';
import type { ToolLocaleContent, SEOSection } from '../../../types';
import type { DualOsIconPreviewUI } from '../ui';

interface LocalizedCopy {
  locale: string;
  slug: string;
  title: string;
  description: string;
  faqTitle: string;
  bibliographyTitle: string;
  ui: DualOsIconPreviewUI;
  faq: { question: string; answer: string }[];
  howTo: { name: string; text: string }[];
  seo: SEOSection[];
}

function createDualOsIconPreviewContent(copy: LocalizedCopy): ToolLocaleContent<DualOsIconPreviewUI> {
  const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: copy.faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
  const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: copy.title, description: copy.description, step: copy.howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
  const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: copy.title, description: copy.description, applicationCategory: 'DesignApplication', operatingSystem: 'iOS, Android', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: copy.locale };
  return { slug: copy.slug, title: copy.title, description: copy.description, ui: copy.ui, faqTitle: copy.faqTitle, faq: copy.faq, bibliographyTitle: copy.bibliographyTitle, bibliography, howTo: copy.howTo, schemas: [appSchema, faqSchema, howToSchema], seo: copy.seo };
}

const title = 'Audyt ikon aplikacji dla iOS i Androida';
const description = 'Prześlij logo i sprawdź jego wygląd na iPhonie oraz Pixelu. Zobacz tryby iOS, adaptacyjne maski Androida, bezpieczne marginesy i ikony tematyczne w przeglądarce.';
const ui: DualOsIconPreviewUI = {
  labelUpload: 'Prześlij logo', uploadAction: 'Wybierz obraz', uploadHint: 'Ten sam znak wypełnia oba telefony', dropHint: 'PNG, JPG, WEBP lub SVG', labelAppName: 'Nazwa aplikacji', appNamePlaceholder: 'Wyświetlana pod ikoną', labelBrandColor: 'Systemowy kolor akcentu', labelIosAppearance: 'Wygląd iOS', iosAppearanceHint: 'Sprawdź znak w każdym trybie ekranu początkowego', iosDefault: 'Domyślny', iosDark: 'Ciemny', iosClear: 'Jasny', iosTinted: 'Barwiony', labelAndroidShape: 'Adaptacyjna maska Androida', androidShapeHint: 'Launcher może zmienić zewnętrzny kształt', androidCircle: 'Okrąg', androidSquircle: 'Squircle', androidRounded: 'Zaokrąglony', androidTeardrop: 'Łza', labelAndroidTheme: 'Podgląd ikony tematycznej', androidThemeHint: 'Nadaje każdej ikonie jeden systemowy odcień i zachowuje jej sylwetkę', iosDeviceLabel: 'iPhone', androidDeviceLabel: 'Pixel', iosHomeLabel: 'Ekran początkowy', androidHomeLabel: 'Launcher', safeZoneLabel: 'Maska iOS', adaptiveLayerLabel: 'Ikona adaptacyjna', monochromeLabel: 'Warstwa motywu', nameFallback: 'Twoja aplikacja', emptyLogo: 'Twoje logo', fileError: 'Wybierz plik obrazu, aby kontynuować.', statusReady: 'Gotowe', statusNeedsReview: 'Dodaj logo', stageKicker: 'Dwa konteksty urządzeń, jeden audyt', stageNote: 'Sprawdź każde przetworzenie w kontekście', auditTitle: 'Audyt logo', auditHint: 'Zmierzono lokalnie na podstawie wczytanego obrazu', auditWaiting: 'Prześlij logo', auditNotChecked: 'Nie sprawdzono', auditFile: 'Obszar obrazu', auditAspect: 'Proporcje', auditResolution: 'Rozdzielczość', auditIosMask: 'Margines maski iOS', auditAndroidZone: 'Bezpieczna strefa Androida', auditMargin: 'Minimalny margines', auditTransparency: 'Krawędź alfa', auditTransparent: 'Przezroczyste', auditFullBleed: 'Pełne pokrycie', statusPass: 'OK', statusReview: 'SPRAWDŹ',
};
const faq = [
  { question: 'Co sprawdza ten audyt ikony aplikacji?', answer: 'Sprawdza wymiary obrazu, proporcje, rozdzielczość, przezroczysty margines, zapas maski iOS oraz adaptacyjną bezpieczną strefę Androida. Pozwala też obejrzeć nazwę aplikacji w rozmiarze launchera.' },
  { question: 'Czy mogę jednocześnie zobaczyć iPhone a i Androida?', answer: 'Tak. To samo logo i nazwa aplikacji są wyświetlane jednocześnie na ekranie początkowym iPhone a oraz w launcherze Pixela, więc zachowujesz kontekst obu urządzeń.' },
  { question: 'Co robi tryb ikon tematycznych Androida?', answer: 'Nakłada jeden systemowy odcień i monochromatyczne przetworzenie na każdą ikonę Androida w scenie, także na przesłaną ikonę, sąsiednie aplikacje i dok. Dzięki temu widać, czy kształt pozostaje czytelny bez oryginalnych kolorów.' },
  { question: 'Czy logo opuszcza moją przeglądarkę?', answer: 'Nie. Obraz jest odczytywany i mierzony lokalnie w przeglądarce. To narzędzie nie wysyła go na serwer.' },
  { question: 'Czy wynik nadaje się do wysłania do sklepu z aplikacjami?', answer: 'Nie. To lokalny audyt projektu i assetów. Do końcowego eksportu, zachowania launchera i akceptacji sklepu użyj narzędzi Apple i Androida oraz prawdziwego urządzenia lub emulatora.' },
];
const howTo = [
  { name: 'Prześlij logo', text: 'Wybierz logo PNG, JPG, WEBP lub SVG. Ten sam lokalny obraz pojawi się w obu kontekstach urządzeń.' },
  { name: 'Wpisz nazwę aplikacji', text: 'Wpisz etykietę launchera i sprawdź, czy pozostaje czytelna obok prawdziwych etykiet sąsiednich aplikacji.' },
  { name: 'Sprawdź wygląd iOS', text: 'Przełącz Domyślny, Ciemny, Jasny i Barwiony, aby znaleźć słaby kontrast lub znikające szczegóły.' },
  { name: 'Sprawdź maski Androida', text: 'Wypróbuj okrąg, squircle, zaokrąglenie i łzę. Następnie włącz ikony tematyczne i oceń wersję monochromatyczną w całym launcherze.' },
  { name: 'Zareaguj na audyt', text: 'Dodaj oddech, uprość drobne szczegóły lub popraw kontrast przed przygotowaniem końcowych assetów platformy.' },
];

export const content = createDualOsIconPreviewContent({ locale: 'pl', slug: 'audyt-ikon-aplikacji-ios-android', title, description, faqTitle: 'Najczęściej zadawane pytania', bibliographyTitle: 'Materiały źródłowe', ui, faq, howTo, seo: [
  { type: 'title', text: 'Przeprowadź audyt ikony aplikacji przed publikacją', level: 2 },
  { type: 'paragraph', html: 'Prześlij jedno logo i obejrzyj je jednocześnie w kontekście ekranu początkowego iPhone a oraz launchera Pixela. Ten audyt ikony aplikacji mierzy obszar obrazu, proporcje, rozdzielczość, przezroczysty margines, zapas maski iOS i adaptacyjną bezpieczną strefę Androida. Wpisz też prawdziwą nazwę aplikacji, ponieważ znak może przejść kontrolę ikony, ale zawieść, gdy etykieta launchera stanie się nieczytelna.' },
  { type: 'title', text: 'Co sprawdza audyt ikony aplikacji', level: 3 },
  { type: 'list', items: ['Obszar i proporcje: potwierdź, że źródło jest kwadratowe, zanim narzędzia platformy dodadzą własne przetworzenie.', 'Rozdzielczość: znajdź małe pliki źródłowe, zanim staną się miękkie lub bezużyteczne w większym launcherze.', 'Margines krawędzi: sprawdź, czy ważne kształty lub litery nie leżą zbyt blisko maski iOS albo bezpiecznej strefy Androida.', 'Etykieta launchera: obejrzyj nazwę aplikacji w tej samej skali co sąsiednie ikony i znajdź niezręczne łamanie tekstu.', 'Tematyczne przetworzenie Androida: nałóż monochromatyczny odcień systemu na cel, sąsiednie ikony i dok, aby kolor nie ukrywał słabej sylwetki.'] },
  { type: 'title', text: 'Zobacz oba konteksty urządzeń jednocześnie', level: 3 },
  { type: 'paragraph', html: 'Traktuj oba widoki telefonu jako jedną powierzchnię audytu. Przełączaj wygląd iOS Domyślny, Ciemny, Jasny i Barwiony, a potem wypróbuj maski Androida: okrąg, squircle, zaokrąglenie i łzę. Celem jest zebranie informacji o zachowaniu tego samego assetu na powierzchniach launchera, a nie rozstrzyganie, która platforma jest lepsza.' },
  { type: 'title', text: 'Czego audyt nie może zagwarantować', level: 3 },
  { type: 'paragraph', html: 'To przeglądarkowy przegląd projektu i assetów, a nie zamiennik Xcode, Android Studio, prawdziwego urządzenia ani emulatora. Launchery, wersje systemu i producenci mogą stosować inne maski, odstępy, kontrast oraz zasady ikon tematycznych. Wykorzystaj audyt do wczesnego wykrywania ryzyka, a następnie sprawdź końcowe assety platformy w obsługiwanych środowiskach.' },
  { type: 'tip', title: 'Praktyczna procedura audytu', html: 'Oglądaj logo w najmniejszym praktycznym rozmiarze i w każdym dostępnym przetworzeniu. Jeśli działa tylko na jednym tle, w jednej masce lub w oryginalnych kolorach, uprość grafikę albo dodaj margines przed publikacją.' },
] });
