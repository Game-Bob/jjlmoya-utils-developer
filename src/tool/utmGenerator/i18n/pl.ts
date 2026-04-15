import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UtmGeneratorUI } from '../ui';

const slug = 'generator-utm';
const title = 'Generator parametrów UTM dla Google Analytics';
const description = 'Twórz precyzyjne linki śledzące dla swoich cyfrowych kampanii marketingowych. Zoptymalizowany dla Google Analytics i innych narzędzi analitycznych.';

const faqData = [
  {
    question: 'Czy używanie parametrów UTM jest złe dla SEO?',
    answer: 'Nie, o ile używasz tagów kanonicznych. Wyszukiwarki rozumieją, że parametry UTM służą do analityki i nie tworzą duplikatu treści.',
  },
  {
    question: 'Czy powinienem używać parametrów UTM w linkach wewnętrznych?',
    answer: 'Nie, nigdy. Tagi UTM w linkach wewnętrznych przerywają sesję użytkownika w narzędziach takich jak Google Analytics, zniekształcając dane o ruchu.',
  },
  {
    question: 'Czy Google Analytics rozróżnia wielkość liter w UTM?',
    answer: 'Tak. „google”, „Google” i „GOOGLE” będą traktowane jako różne źródła. Zawsze zachowuj spójność, najlepiej używając tylko małych liter.',
  },
];

const howToData = [
  { name: 'Wpisz adres URL', text: 'Wprowadź pełny adres URL swojej witryny, w tym https://' },
  { name: 'Zdefiniuj źródło', text: 'Określ, skąd pochodzi ruch (google, facebook, newsletter itp.)' },
  { name: 'Wybierz medium', text: 'Wybierz typ kanału (cpc, e-mail, social, organic itp.)' },
  { name: 'Nazwij swoją kampanię', text: 'Przypisz identyfikowalną nazwę, aby pogrupować swoje działania marketingowe' },
  { name: 'Skopiuj i używaj', text: 'Skopiuj wygenerowany adres URL i używaj go w swoich postach, reklamach lub podpisach e-mail' },
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

const ui: UtmGeneratorUI = {
  labelUrl: 'Adres URL witryny (np. https://example.com) *',
  labelSource: 'Źródło kampanii (np. google, newsletter) *',
  labelMedium: 'Medium kampanii (np. cpc, email)',
  labelCampaign: 'Nazwa kampanii (np. oferta_letnia)',
  labelTerm: 'Termin kampanii (np. kup_buty)',
  labelContent: 'Treść kampanii (np. banner_top)',
  labelGenerated: 'Wygenerowany adres URL:',
  btnCopy: 'Kopiuj link',
  btnCopied: 'Skopiowano!',
  errorInvalid: 'Wpisz prawidłowy adres URL',
  errorInvalidUrl: 'Nieprawidłowy adres URL',
};

export const content: ToolLocaleContent<UtmGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Referencje',
  bibliography: [
    { name: 'Gromadzenie danych kampanii za pomocą niestandardowych adresów URL — Pomoc Google Analytics (2024)', url: 'https://support.google.com/analytics/answer/1033863' },
    { name: 'Najlepsze praktyki tagowania adresów URL kampanii — Blog VWO (2023)', url: 'https://vwo.com/blog/utm-tagging-best-practices/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Generator UTM: parametry śledzenia dla Google Analytics', level: 2 },
    {
      type: 'paragraph',
      html: 'Parametry <strong>UTM</strong> (Urchin Tracking Module) to etykiety tekstowe dodawane na końcu adresu URL w celu śledzenia ruchu w sieci. Nasz generator upraszcza tworzenie śledzonych linków dla Twoich cyfrowych kampanii marketingowych.',
    },
    { type: 'title', text: '5 filarów śledzonego adresu URL', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Źródło kampanii:</strong> Identyfikuje wyszukiwarkę, sieć społecznościową lub pochodzenie ruchu. Przykład: google, newsletter, facebook.',
        '<strong>Medium kampanii:</strong> Odnosi się do kanału marketingowego. Przykład: cpc, e-mail, social, banner, organic.',
        '<strong>Nazwa kampanii:</strong> Konkretna nazwa Twojej kampanii. Przykład: oferta_letnia_2025, app_launch_v2.',
        '<strong>Termin kampanii:</strong> W przypadku wyszukiwania płatnego — słowa kluczowe, na które licytujesz. Przykład: kup_buty_sportowe.',
        '<strong>Treść kampanii:</strong> Do testów A/B. Rozróżnia podobne elementy w ramach kampanii. Przykład: header_v1, sidebar_v2.',
      ],
    },
    { type: 'title', text: 'Najlepsze praktyki tagowania UTM', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Spójność wielkości liter:</strong> Narzędzia rozróżniają „Google”, „GOOGLE” i „google”. Zawsze używaj małych liter, aby uniknąć duplikatów.',
        '<strong>Unikaj spacji:</strong> Spacje zmieniają się w %20. Zamiast nich używaj łączników (-) lub podkreśleń (_).',
        '<strong>Nie używaj w linkach wewnętrznych:</strong> Śledzenie UTM służy wyłącznie do ruchu zewnętrznego. W linkach wewnętrznych przerywa sesję i psuje kluczowe wskaźniki.',
        '<strong>Dokumentuj swoje tagi:</strong> Prowadź rejestr wszystkich używanych kombinacji, aby zapobiec niespójnościom.',
      ],
    },
  ],
};
