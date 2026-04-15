import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MobileMockupGeneratorUI } from '../ui';

const slug = 'generator-makiety-mobilne-aplikacji';
const title = 'Generator Makiet Mobilnych dla App Store. iPhone i Google Pixel';
const description = 'Twórz profesjonalne prezentacje dla App Store i Google Play. Makiety iPhone i Pixel z niestandardowymi tłami, układami panoramicznymi i masowym eksportem w wysokiej rozdzielczości.';

const faqData = [
  { question: 'Czy te zrzuty ekranu są ważne dla App Store i Google Play?', answer: 'Tak, wygenerowane obrazy spełniają wymagania proporcji i jakości sklepów aplikacji. Wystarczy wybrać właściwe urządzenie (iPhone dla iOS, Pixel dla Androida) przed eksportowaniem.' },
  { question: 'Czy mogę używać niestandardowych teł?', answer: 'Oczywiście. Oprócz naszej biblioteki gradientów premium możesz przesłać dowolny obraz ze swojego komputera, aby służył jako środowisko tła dla twoich makiet.' },
  { question: 'Czy jest darmowe do użytku komercyjnego?', answer: 'Tak, możesz używać wygenerowanych makiet do projektów komercyjnych, portfeli lub prezentacji bez opłat i bez znaków wodnych.' },
  { question: 'Czy moje zrzuty ekranu są zapisywane na jakimś serwerze?', answer: 'Nie. Generator działa 100% lokalnie w Twojej przeglądarce. Twoje prywatne obrazy nigdy nie opuszczają Twojego komputera.' },
];

const howToData = [
  { name: 'Przesyłaj zrzuty ekranu', text: 'Przeciągnij lub wybierz zrzuty ekranu Twojej aplikacji mobilnej, którą chcesz zaprezentować.' },
  { name: 'Wybierz urządzenie', text: 'Wybierz model smartfona (iPhone 15 Pro Max lub Google Pixel 8) zgodnie z docelowym sklepem.' },
  { name: 'Dostosuj środowisko', text: 'Dostosuj tło, kąt urządzenia, dodaj tekst marketingowy i wybierz układ kompozycji.' },
  { name: 'Pobierz w HD', text: 'Eksportuj wszystkie wyniki w formacie WebP wysokiej rozdzielczości gotowym do przesłania do sklepu aplikacji.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowToThing> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((step, i) => ({ '@type': 'HowToStep', position: i + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DesignApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, inLanguage: 'pl' };

const ui: MobileMockupGeneratorUI = {
  labelUpload: 'Przesyłaj Zrzuty Ekranu', dropHint: 'Przeciągnij tutaj swoje obrazy', dropFormats: 'PNG, JPG lub WEBP', btnMassReplace: 'Masowa Zamiana (Batch)', massReplaceHint: 'Zastępuje bieżące obrazy, zachowując ustawienia i tekst. Idealne do szybkich iteracji.', labelSettings: 'Ustawienia Globalne', labelDevice: 'Urządzenie', labelFont: 'Typografia', labelBackground: 'Tło', titleSwapColors: 'Zamień kolory', labelAngle: 'Kąt', labelSafeArea: 'Bezpieczny Obszar (Góra/Dół)', labelSafeAreaColor: 'Kolor obszaru', emptyTitle: 'Brak obrazów', emptySubtitle: 'Przesyłaj swoje zrzuty ekranu, aby zacząć projektowanie', btnClearAll: 'Wyczyść Kanwę', btnExport: 'Eksportuj Wszystko (.zip)', cardTitleDuplicate: 'Duplikuj Scenę', cardTitleReplace: 'Zastąp Bieżący Zrzut Ekranu', cardSectionLayouts: 'Główne Układy', cardSectionBranding: 'Branding i Kopia', cardTitleResetText: 'Resetuj Tekst', cardLabelColor: 'Kolor', cardTextPlaceholder: 'Wpisz swoją kopię tutaj...', cardSectionDevice: 'Układ Urządzenia', cardTitleResetDevice: 'Resetuj Pozycję', cardSectionScene: 'Właściwości i Tło', cardBtnSpecialBg: 'Specjalne Tło', cardBtnDeleteScene: 'Usuń Scenę', cardRangeLabelSize: 'Rozmiar', cardRangeLabelX: 'Oś X', cardRangeLabelY: 'Oś Y', cardRangeLabelRotation: 'Rotacja', cardRangeLabelScale: 'Skala', presetClassic: 'Klasyczne', presetMobileBottom: 'Dół Mobilny', presetMobileTop: 'Góra Mobilna', presetFocus: 'Fokus', presetDynamic: 'Dynamiczne', presetSplitLeft: 'Podziel Lewo', presetSplitRight: 'Podziel Prawo', presetImageLeft: 'Obraz Lewo', presetImageRight: 'Obraz Prawo', confirmClear: 'Czy na pewno chcesz usunąć wszystkie makiet?', processingExport: 'Przetwarzanie...', exportDone: 'Gotowe!',
};

export const content: ToolLocaleContent<MobileMockupGeneratorUI> = { slug, title, description, ui, faqTitle: 'Często Zadawane Pytania', faq: faqData, bibliographyTitle: 'Referencje', bibliography: [{ name: 'Wymagania dotyczące zrzutów ekranu Apple App Store', url: 'https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications' }, { name: 'Wymagania dotyczące zrzutów ekranu Google Play', url: 'https://support.google.com/googleplay/android-developer/answer/9866151' }], howTo: howToData, schemas: [faqSchema, howToSchema, appSchema], seo: [{ type: 'title', text: 'Podnieś swoje zrzuty ekranu na wyższy poziom', level: 2 }, { type: 'paragraph', html: 'Nie ograniczaj się do płaskich zrzutów ekranu. Nasze narzędzie do makiet pozwala programistom i projektantom tworzyć efektowne zasoby wizualne bez potrzeby Photoshopa czy Figmy.' }, { type: 'title', text: 'Moc z Głównymi Układami', level: 3 }, { type: 'grid', columns: 2 }, { type: 'card', title: 'App Store i Google Play', html: '<p>Optymalizuj swoją stopę konwersji. Makiety iPhone 15 Pro Max i Pixel 8 to światowy standard listy sklepów aplikacji.</p>' }, { type: 'card', title: 'Pitch Decks i Marketing', html: '<p>Zaprezentuj swoje pomysły z władzą. Idealne dla prezentacji inwestorów, kampanii mediów społecznych i profesjonalnych portfeli projektowania UI/UX.</p>' }, { type: 'title', text: 'Profesjonalny przepływ pracy', level: 3 }, { type: 'tip', html: 'Używaj presetów "Podziel Lewo" i "Podziel Prawo", aby tworzyć ciągłe makiet, które przesuwają się z jednego obrazu do drugiego w karuzeli Instagrama lub zrzutach ekranu App Store.' }] };
