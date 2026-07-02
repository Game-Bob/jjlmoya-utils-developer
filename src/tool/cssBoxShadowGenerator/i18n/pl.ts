import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CssBoxShadowGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'generator-cieni-css';
const title = 'CSS Box Shadow Generator';
const description = 'Projektuj warstwowe cienie CSS wizualnie z podglądem na żywo, suwakami, wybierakami kolorów i presetami. Kopiuj czysty natywny CSS natychmiast.';

const howTo = [
  { name: 'Wybierz preset lub zacznij od zera', text: 'Wybierz spośród presetów Card, Float, Inset, Glow lub Layered albo dostosuj domyślny cień suwakami.' },
  { name: 'Dodawaj i układaj warstwy', text: 'Kliknij +, aby dodać warstwy (do 5). Wybierz każdą warstwę, aby edytować offset, blur, spread, kolor i przezroczystość.' },
  { name: 'Przełącz inset i tło', text: 'Zaznacz inset dla cieni wewnętrznych. Zmień kolor tła podglądu.' },
  { name: 'Kopiuj CSS', text: 'Gdy podgląd pasuje do twojego projektu, skopiuj wygenerowany CSS i wklej do arkusza stylów.' },
];

const faq = [
  { question: 'Czy mogę użyć wielu cieni na jednym elemencie?', answer: 'Tak. CSS pozwala na wartości box-shadow oddzielone przecinkami. To narzędzie umożliwia układanie do 5 warstw z niezależnymi kontrolkami.' },
  { question: 'Co robi ujemna wartość spread?', answer: 'Ujemny spread zmniejsza cień do wewnątrz przed rozmyciem. Przydatne do subtelnych efektów unoszenia.' },
  { question: 'Do czego służy opcja inset?', answer: 'Cienie inset są renderowane wewnątrz krawędzi elementu, tworząc efekt wklęsłości. Idealne do pól formularzy i wciśniętych kart.' },
  { question: 'Czy wygenerowany CSS ma zależności od frameworków?', answer: 'Nie. Wynik to czysty natywny CSS. Używaj w każdym projekcie ze standardowym CSS.' },
];

const ui: CssBoxShadowGeneratorUI = {
  offsetXLabel: 'Offset X',
  offsetYLabel: 'Offset Y',
  blurLabel: 'Rozmycie',
  spreadLabel: 'Rozprz.',
  opacityLabel: 'Przezrocz.',
  insetLabel: 'Wewn.',
  addLayer: 'Dodaj warstwę',
  removeLayer: 'Usuń warstwę',
  resetAll: 'Resetuj',
  codeTitle: 'Wygenerowany CSS',
  copyCode: 'Kopiuj CSS',
  copied: 'Skopiowano!',
  previewLabel: 'Podgląd',
  presetCard: 'Card',
  presetFloat: 'Float',
  presetInset: 'Inset',
  presetGlow: 'Glow',
  presetLayered: 'Warstwy',
  presetsLabel: 'Presety',
  layerPrefix: 'Warstwa',
  bgColorLabel: 'Tło',
};

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'DeveloperApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' } };

export const content: ToolLocaleContent<CssBoxShadowGeneratorUI> = {
  slug, title, description, ui,
  faqTitle: 'FAQ Generatora Cieni CSS',
  faq,
  bibliographyTitle: 'Referencje Box Shadow CSS',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    { type: 'title', text: 'Projektuj cienie CSS wizualnie zamiast zgadywać wartości', level: 2 },
    { type: 'paragraph', html: 'Ręczne dostosowywanie <strong>box-shadow</strong> jest uciążliwe. Ten wizualny generator pozwala układać wiele cieni, podglądać je na żywo i kopiować gotowy CSS.' },
    { type: 'stats', columns: 3, items: [{ value: '5', label: 'Warstw cienia na element', icon: 'mdi:layers' }, { value: 'Na żywo', label: 'Podgląd przy każdej zmianie', icon: 'mdi:eye' }, { value: '5', label: 'Szybkie presety', icon: 'mdi:star' }] },
    { type: 'title', text: 'Układaj wiele cieni dla realistycznej głębi', level: 3 },
    { type: 'paragraph', html: 'Prawdziwe cienie rzadko są jednolitym rozmyciem. Nakładanie ciasnego cienia blisko elementu z bardziej miękkim, szerszym tworzy naturalną głębię. Użyj <strong>+</strong> do dodawania warstw.' },
    { type: 'table', headers: ['Kontrolka', 'Wartość CSS', 'Efekt'], rows: [['Offset X', '1. długość', 'Przesunięcie poziome.'], ['Offset Y', '2. długość', 'Przesunięcie pionowe.'], ['Rozmycie', '3. długość', 'Promień rozmycia.'], ['Rozprz.', '4. długość', 'Powiększa lub zmniejsza cień.'], ['Kolor i przezrocz.', 'rgba()', 'Kolor cienia z niezależną przezroczystością.'], ['Wewn.', 'inset', 'Cień wewnątrz krawędzi elementu.']] },
    { type: 'summary', title: 'Zalecany workflow', items: ['Zacznij od presetu.', 'Dodaj warstwy dla realistycznej głębi.', 'Użyj ujemnego spread dla efektu unoszenia karty.', 'Skopiuj wygenerowany CSS i wklej.'] },
  ],
};
