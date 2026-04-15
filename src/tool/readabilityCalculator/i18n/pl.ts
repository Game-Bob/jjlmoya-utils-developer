import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReadabilityCalculatorUI } from '../ui';

const slug = 'kalkulator-czytelnosci-wizualnej-wcag-apca';
const title = 'Kalkulator Czytelności Wizualnej WCAG i APCA';
const description = 'Sprawdzaj rzeczywisty kontrast swoich projektów za pomocą APCA (WCAG 3.0). Analizuj, jak waga i rozmiar czcionki wpływają na faktyczną czytelność. Od prostych stosunków do percepcyjnej czytelności.';

const faqData = [
  { question: 'Co to jest APCA i czym się różni od WCAG 2.1?', answer: 'APCA to zaawansowany algorytm kontrastu percepcyjnego opracowany dla WCAG 3.0. W przeciwieństwie do starego prostego stosunku, APCA wykorzystuje modele matematyczne naśladujące sposób, w jaki ludzki mózg postrzega kontrast, biorąc pod uwagę polarność (jasne vs. ciemne tło) i rozmiar/wagę czcionki.' },
  { question: 'Co oznacza wartość Lc?', answer: 'Lc (Lightness Contrast) to wartość kontrastu wygenerowana przez APCA. Wartość 100 reprezentuje idealny maksymalny kontrast, podczas gdy wartości poniżej 60 zaczynają być krytyczne dla ciągłego czytania tekstu. To absolutna skala wielkości percepcji.' },
  { question: 'Jak waga czcionki wpływa na czytelność?', answer: 'Cienkie/lekkie czcionki wymagają znacznie wyższego kontrastu, aby być czytelne. APCA karze lekkie czcionki, wskazując, że projekt przechodzący WCAG z wagą 100 może być nieczytelny w praktyce.' },
  { question: 'Czy ten kalkulator jest prywatny?', answer: 'Tak, wszystkie obliczenia są wykonywane lokalnie w przeglądarce. Kolory i ustawienia, które analizujesz, nigdy nie są wysyłane do żadnego serwera, gwarantując pełną prywatność dla Twoich projektów designu.' },
];

const howToData = [
  { name: 'Wybierz kolory', text: 'Użyj selektorów kolorów, aby ustawić kolor tekstu i kolor tła Twojego designu.' },
  { name: 'Dostosuj typografię', text: 'Przesuń suwaki rozmiaru czcionki i wagi, aby symulować swoją rzeczywistą typografię.' },
  { name: 'Czytaj wyniki', text: 'Sprawdź stosunek WCAG 2.1 i wartość APCA Lc, aby wiedzieć, czy Twój design jest dostępny.' },
  { name: 'Przejrzyj rekomendacje', text: 'Sprawdź rekomendacje specyficzne dla APCA dla tekstu głównego, małego tekstu i elementów UI.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowToThing> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'pl' };

const ui: ReadabilityCalculatorUI = { labelColors: 'Kolory Bazowe', labelText: 'Tekst', labelBg: 'Tło', labelTypo: 'Typografia', labelFontSize: 'Rozmiar Czcionki', labelFontWeight: 'Waga', labelCompare: 'Porównanie Kontrastu', labelPreview: 'Percepcyjny Podgląd', labelApcaRecs: 'Rekomendacje APCA', labelBody: 'Tekst Czytania (Treść)', labelSmall: 'Mały Tekst / Podpis', labelUi: 'UI / Przyciski', statusYes: 'Tak', statusNo: 'Nie', wcagAAA: 'Przechodzi AAA', wcagAA: 'Przechodzi AA', wcagLarge: 'Tylko duży tekst', wcagFail: 'Niepowodzenie', apcaExcellent: 'Doskonały', apcaGood: 'Dobry', apcaMinimal: 'Minimalny', apcaPoor: 'Słaby', previewText: 'Czytelność wizualna to nie tylko matematyka. To jak światło i cień oddziałują na twoje oczy.', wcagRatioLabel: 'Stosunek WCAG 2.1', apcaLcLabel: 'APCA Lc (WCAG 3)', };

export const content: ToolLocaleContent<ReadabilityCalculatorUI> = { slug, title, description, ui, faqTitle: 'Często Zadawane Pytania', faq: faqData, bibliographyTitle: 'Zasoby na temat Kontrastu i APCA', bibliography: [{ name: 'W3C: WCAG 3.0 Draft (Silver)', url: 'https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/' }, { name: 'Myndex: APCA Reference Guide', url: 'https://apcaw3.myndex.com/' }, { name: 'MDN: Accessibility and Color Contrast', url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast' }], howTo: howToData, schemas: [faqSchema, howToSchema, appSchema], seo: [{ type: 'title', text: 'Kalkulator Czytelności Wizualnej (WCAG vs APCA)', level: 2 }, { type: 'paragraph', html: 'Dowiedz się, jak Twoje kolory i typografia wpływają na rzeczywiste czytanie za pomocą nowego standardu percepcyjnej dostępności. WCAG 2.1 używa prostego wzoru matematycznego z 2008 roku. <strong>APCA</strong> to nowy model proponowany dla <strong>WCAG 3.0</strong>, który naśladuje percepcję człowieka.' }, { type: 'title', text: 'Kluczowe Punkty APCA', level: 3 }, { type: 'list', items: ['<strong>Polarność:</strong> Rozumie, że Tryb Ciemny jest postrzegany inaczej niż Tryb Jasny.', '<strong>Waga Czcionki:</strong> Przydziela określone poziomy kontrastu (Lc) w zależności od wagi typografii.', '<strong>Liniowość:</strong> Naprawia nieścisłości matematyczne w modelu względnej luminancji z 2008 roku.'] }, { type: 'title', text: 'Rekomendowane Poziomy APCA', level: 3 }, { type: 'list', items: ['<strong>Lc 90+:</strong> Idealne dla bardzo małego lub nisko ważonego tekstu.', '<strong>Lc 75:</strong> Standard dla głównego tekstu czytającego.', '<strong>Lc 60:</strong> Minimum dla czytelnej zawartości średniego rozmiaru.', '<strong>Lc 45:</strong> Minimum dla dużych lub dekoracyjnych elementów.'] }] };
