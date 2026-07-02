import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VisualCssGridFlexboxGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'wizualny-generator-css-grid-flexbox';
const title = 'Wizualny Generator Układów CSS Grid & Flexbox';
const description = 'Projektuj responsywne układy, przesuwając wizualne bloki, skalując kontener, dostosowując wyrównanie i używając presetów  -  następnie kopiuj czysty natywny CSS natychmiast.';

const howTo = [
  { name: 'Wybierz preset lub Flexbox / Grid', text: 'Zacznij od presetu układu (navbar, cards, hero, sidebar, gallery) lub przełączaj się między Flexbox a Grid ręcznie.' },
  { name: 'Skaluj układ', text: 'Skaluj kontener za dolny róg, aby przetestować, jak projekt reaguje na dostępną przestrzeń.' },
  { name: 'Dostosuj kontrolki wyrównania', text: 'Użyj suwaków i list rozwijanych dla kierunku, zawijania, odstępu, kolumn, justify-content, align-items, align-content, szerokości, wysokości i rozmiaru elementów.' },
  { name: 'Kopiuj gotowy CSS', text: 'Kopiuj wygenerowany CSS, gdy wynik wizualny odpowiada pożądanej strukturze. Bez zależności od frameworków.' },
];

const faq = [
  { question: 'Kiedy używać Flexbox zamiast CSS Grid?', answer: 'Używaj Flexbox do układów jednowymiarowych  -  paski nawigacyjne, grupy przycisków, zawijane karty, wyśrodkowana zawartość. Grid, gdy wiersze i kolumny mają znaczenie razem  -  dashboardy, galerie, formularze, ustrukturyzowane sekcje stron.' },
  { question: 'Czy ten generator może tworzyć układy responsywne?', answer: 'Tak. Wygenerowany CSS używa natywnego zawijania flex lub powtarzanych kolumn grid. Skaluj wizualne płótno, aby przetestować odstępy i wyrównanie przy różnych rozmiarach.' },
  { question: 'Dlaczego justify-content i align-items działają inaczej w grid i flex?', answer: 'Flexbox rozdziela elementy wzdłuż osi głównej i poprzecznej. Grid najpierw umieszcza elementy w ścieżkach, a następnie wyrównuje zawartość wewnątrz nich. Przełączanie między trybami czyni tę różnicę natychmiast widoczną.' },
  { question: 'Czy wygenerowany CSS jest powiązany z jakimś frameworkiem?', answer: 'Nie. Wynik to czysty natywny CSS. Używaj go w zwykłym HTML, Astro, React, Vue, Svelte, Web Components lub dowolnym projekcie akceptującym standardowy CSS.' },
  { question: 'Do czego służą presety układu?', answer: 'Presety przyspieszają typowe układy, aby zobaczyć realistyczne konfiguracje bez zaczynania od zera. Każdy preset ustawia tryb, kierunek, zawijanie, wyrównanie i rozmiar kontenera dla rzeczywistego wzorca.' },
];

const ui: VisualCssGridFlexboxGeneratorUI = {
  modeLabel: 'Tryb układu',
  flexMode: 'Flexbox',
  gridMode: 'Grid',
  canvasLabel: 'Interaktywne płótno układu',
  addItem: 'Dodaj element',
  removeItem: 'Usuń element',
  resetLayout: 'Resetuj układ',
  gapLabel: 'Odstęp',
  columnsLabel: 'Kolumny grid',
  widthLabel: 'Szerokość kontenera',
  heightLabel: 'Wysokość kontenera',
  justifyLabel: 'Wyrównaj',
  alignLabel: 'Wyrównaj',
  itemSizeLabel: 'Rozmiar elementu',
  codeTitle: 'Wygenerowany CSS',
  copyCode: 'Kopiuj CSS',
  copied: 'Skopiowano!',
  dragHint: 'Skaluj płótno za róg  -  CSS aktualizuje się na żywo!',
  outputLabel: 'Wyjście wygenerowanego CSS',
  justifyStart: 'Początek',
  justifyCenter: 'Środek',
  justifyEnd: 'Koniec',
  justifyBetween: 'Space between',
  justifyAround: 'Space around',
  justifyEvenly: 'Space evenly',
  alignStart: 'Początek',
  alignCenter: 'Środek',
  alignEnd: 'Koniec',
  alignStretch: 'Rozciągnij',
  alignBaseline: 'Linia bazowa',
  itemPrefix: 'Blok',
  directionLabel: 'Kierunek',
  directionRow: 'Wiersz →',
  directionRowReverse: '← Wiersz odw',
  directionColumn: 'Kolumna ↓',
  directionColumnReverse: '↑ Kol odw',
  wrapLabel: 'Zawijanie',
  wrapNoWrap: 'Bez zawijania',
  wrapWrap: 'Zawijaj',
  wrapWrapReverse: 'Zawijaj odw',
  alignContentLabel: 'Wyrównaj zawartość',
  alignContentStart: 'Początek',
  alignContentCenter: 'Środek',
  alignContentEnd: 'Koniec',
  alignContentBetween: 'Space between',
  alignContentAround: 'Space around',
  alignContentEvenly: 'Space evenly',
  alignContentStretch: 'Rozciągnij',
  presetsLabel: 'Presety',
  presetNavbar: 'Navbar',
  presetCards: 'Karty',
  presetHero: 'Hero',
  presetSidebar: 'Boczny',
  presetGallery: 'Galeria',
  shakeLimit: 'Potrzeba co najmniej 2 elementów!',
  spanHint: 'Kliknij dwukrotnie element, aby zmienić rozpiętość kolumny (1-3) w trybie Grid',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<VisualCssGridFlexboxGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'FAQ generatora układów CSS',
  faq,
  bibliographyTitle: 'Referencje CSS Grid i Flexbox',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Buduj układy CSS, obserwując zachowanie, nie zapamiętując właściwości', level: 2 },
    { type: 'paragraph', html: 'CSS Grid i Flexbox są potężne, ponieważ opisują relacje układu zamiast stałych współrzędnych. Trudność polega na przewidywaniu, jak <strong>gap</strong>, <strong>justify-content</strong>, <strong>align-items</strong>, kierunek, zawijanie, ścieżki i dostępna przestrzeń współdziałają. Ten generator zamienia abstrakcyjne właściwości w żywy plac zabaw z presetami i CSS w czasie rzeczywistym.' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: 'Szybkie presety układów', icon: 'mdi:view-grid-plus' }, { value: 'Na żywo', label: 'CSS aktualizuje się przy każdej zmianie', icon: 'mdi:code-braces' }, { value: '0', label: 'Zależności od frameworków w CSS', icon: 'mdi:language-css3' }] },
    { type: 'title', text: 'Flexbox vs Grid: wybierz model przed dopracowaniem wyrównania', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: 'Flexbox', description: 'Najlepszy dla przepływów jednowymiarowych, gdzie elementy układają się w wierszu lub kolumnie i naturalnie się zawijają.', icon: 'mdi:format-align-justify', highlight: true, points: ['Paski nawigacyjne', 'Grupy przycisków', 'Zawijane karty', 'Wyśrodkowana zawartość'] }, { title: 'CSS Grid', description: 'Najlepszy dla struktur dwuwymiarowych, gdzie wiersze i kolumny definiują kształt kompozycji.', icon: 'mdi:grid', points: ['Dashboardy', 'Galerie', 'Formularze', 'Sekcje redakcyjne'] }] },
    { type: 'title', text: 'Czego uczy każda kontrolka', level: 3 },
    { type: 'table', headers: ['Kontrolka', 'Właściwość CSS', 'Na co zwrócić uwagę'], rows: [['Kierunek', '<code>flex-direction</code>', 'Jak płynie oś główna  -  zmiana z wiersza na kolumnę zmienia całą logikę układu.'], ['Zawijanie', '<code>flex-wrap</code>', 'Czy elementy zostają w jednej linii, czy przechodzą do nowych wierszy.'], ['Odstęp', '<code>gap</code>', 'Przestrzeń między elementami bez marginesów łamiących się na krawędziach.'], ['Wyrównaj', '<code>justify-content</code>', 'Jak wolna przestrzeń jest rozdzielana wzdłuż osi głównej.'], ['Wyrównaj', '<code>align-items</code>', 'Jak elementy osadzają się na osi poprzecznej.'], ['Wyrównaj zawartość', '<code>align-content</code>', 'Jak zawinięte linie flex lub wiersze grid rozdzielają dodatkową przestrzeń.'], ['Kolumny', '<code>grid-template-columns</code>', 'Ile równych ścieżek tworzy grid, zanim elementy przejdą do następnego wiersza.'], ['Rozmiar kontenera', '<code>width</code> i <code>min-height</code>', 'Jak ten sam CSS reaguje, gdy zmienia się dostępna przestrzeń.']] },
    { type: 'tip', title: 'Najpierw skaluj, potem optymalizuj', html: 'Zacznij od przeskalowania płótna do realistycznego rozmiaru. Następnie dostosuj odstęp i wyrównanie. Dzięki temu wygenerowany CSS działa w rzeczywistych warunkach.' },
    { type: 'title', text: 'Czysty CSS, który możesz dostosować', level: 3 },
    { type: 'code', ariaLabel: 'Przykład wygenerowanego CSS', code: '.layout-playground {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 24px;\n  justify-content: center;\n  align-items: center;\n}' },
    { type: 'diagnostic', variant: 'info', title: 'Dlaczego wizualne skalowanie ma znaczenie', html: 'Wiele błędów układu pojawia się dopiero, gdy kontener jest węższy, wyższy lub wypełniony inną liczbą elementów. Skalowanie podczas aktualizacji CSS na żywo pomaga wykryć niewygodne zawijanie i kruche decyzje dotyczące wyrównania.' },
    { type: 'summary', title: 'Zalecany przepływ pracy', items: ['Wybierz preset lub Flexbox dla przepływów jednowymiarowych i Grid dla struktury dwuwymiarowej.', 'Skaluj płótno przed skopiowaniem CSS, aby układ przetrwał realistyczne ograniczenia.', 'Używaj gap do odstępów między elementami zamiast dodawania marginesów do każdego dziecka.', 'Kopiuj wygenerowany CSS jako punkt wyjścia, a następnie dodaj selektory specyficzne dla projektu i media queries.'] },
  ],
};
