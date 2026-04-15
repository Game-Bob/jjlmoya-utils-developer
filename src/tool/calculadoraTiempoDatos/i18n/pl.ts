import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { CalculadoraTiempoDatosUI } from '../ui';

const slug = 'kalkulator-czasu-danych-wplyw-predkosci-strony';
const title = 'Kalkulator czasu danych: Wpływ prędkości strony';
const description = 'Odkryj, ile czasu życia tracą Twoi użytkownicy, czekając na załadowanie Twojej strony w sieciach 3G, 4G i 5G. Oblicz rzeczywisty wpływ wagi Twojej strony.';

const faqData = [
  {
    question: 'Dlaczego znajomość czasu ładowania mojej strony jest ważna?',
    answer: 'Ponieważ ma to bezpośredni wpływ na doświadczenie użytkownika, SEO i konwersje. Google udokumentowało, że każda sekunda opóźnienia zmniejsza konwersję o 7%. Dodatkowo 53% użytkowników mobilnych opuszcza stronę, która ładuje się dłużej niż 3 sekundy.',
  },
  {
    question: 'Co oznaczają te małe procenty utraty czasu życia?',
    answer: 'Reprezentują one procent całkowitego czasu życia człowieka (około 80 lat lub 2,5 miliarda sekund) spędzonego na czekaniu na załadowanie Twojej strony. Choć pojedynczo mogą wydawać się małe, po pomnożeniu przez miliony użytkowników dają ogromne ilości zmarnowanego ludzkiego czasu.',
  },
  {
    question: 'Jaka jest średnia prędkość połączenia na świecie?',
    answer: '4G jest standardem w krajach rozwiniętych. Jednak miliony użytkowników w krajach rozwijających się nadal korzystają z 3G. Dlatego kluczowe jest zoptymalizowanie strony dla wszystkich prędkości połączeń.',
  },
  {
    question: 'Ile powinna ważyć moja strona internetowa?',
    answer: 'Google zaleca, aby strona główna ładowała się w mniej niż 3 sekundy na typowym połączeniu 4G. W tym celu strona powinna idealnie ważyć od 1 do 2 MB. Jednak średnia światowa wynosi blisko 2-3 MB.',
  },
  {
    question: 'Jak mogę zmniejszyć wagę mojej strony?',
    answer: 'Główne strategie: optymalizacja obrazów (50-80% wagi), minifikacja CSS i JavaScript, stosowanie lazy loading, wdrożenie pamięci podręcznej przeglądarki i korzystanie z CDN. Optymalizacja obrazów jest zazwyczaj najbardziej wpływowym czynnikiem.',
  },
  {
    question: 'Czy prędkość ładowania wpływa na ranking w Google?',
    answer: 'Tak, zdecydowanie. Google bierze pod uwagę Core Web Vitals jako ważne czynniki rankingowe. Wolniejsza strona będzie miała gorszą pozycję niż szybsza, nawet przy podobnej treści.',
  },
];

const howToData = [
  { name: 'Wpisz wagę swojej strony', text: 'Użyj narzędzi deweloperskich przeglądarki lub WebPageTest, aby sprawdzić wagę strony. Wpisz tę wartość w MB.' },
  { name: 'Obserwuj czasy ładowania', text: 'Kalkulator pokazuje, ile sekund zajmuje ładowanie strony w sieciach 3G, 4G i 5G. Czasy w rzeczywistości są zazwyczaj wyższe.' },
  { name: 'Zrozum wpływ na czas życia', text: 'Procent „czasu życia” pokazuje, ile czyjegoś życia mija na czekaniu. Użyj tego jako motywacji do optymalizacji.' },
  { name: 'Optymalizuj i oblicz ponownie', text: 'Po optymalizacji zmierz ponownie i wykonaj obliczenia. Zobacz, jak małe ulepszenia mają duży wpływ.' },
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

const ui: CalculadoraTiempoDatosUI = {
  headerTitle: 'Czas stracony w sieciach',
  labelWebSize: 'Waga strony (MB)',
  unit: 'MB',
  presetsLabel: 'REALISTYCZNE PRZYKŁADY',
  labelSpeed: 'Prędkość połączenia',
  speedLabel3g: '3G',
  speedValue3g: '0,4 Mbps',
  speedLabel4g: '4G/LTE',
  speedValue4g: '10 Mbps',
  speedLabel5g: '5G',
  speedValue5g: '100+ Mbps',
  labelTimes: 'Ile razy dziennie?',
  resultTitle: 'Wyniki',
  resultSingleLoad: 'Pojedyncze ładowanie',
  resultDailyTotal: 'Dziennie łącznie',
  resultTimePerYear: 'rocznie na czekaniu',
  resultLifeYears: 'w ciągu życia',
  resultMessage: 'Straciłeś około 1 rok życia',
  copyMessage: 'Skopiowano',
  preset3g: '3G',
  preset4g: '4G',
  preset5g: '5G',
};

export const content: ToolLocaleContent<CalculadoraTiempoDatosUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Zasoby techniczne dotyczące optymalizacji stron www',
  bibliography: [
    { name: 'Google PageSpeed Insights', url: 'https://pagespeed.web.dev/' },
    { name: 'WebPageTest - Analiza prędkości stron internetowych', url: 'https://www.webpagetest.org/' },
    { name: 'Web.dev - Core Web Vitals', url: 'https://web.dev/vitals/' },
    { name: 'MDN - Wydajność stron internetowych', url: 'https://developer.mozilla.org/en-US/docs/Web/Performance' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Dlaczego prędkość ładowania strony jest krytyczna', level: 2 },
    {
      type: 'paragraph',
      html: 'W dzisiejszej erze cyfrowej prędkość ładowania strony nie jest luksusem, lecz koniecznością. Każda milisekunda liczy się przy zatrzymywaniu użytkowników, poprawie pozycji w wyszukiwarkach i maksymalizacji konwersji. Współcześni użytkownicy oczekują, że strony załadują się w mniej niż 3 sekundy.',
    },
    { type: 'title', text: 'Wpływ na doświadczenie użytkownika', level: 3 },
    {
      type: 'paragraph',
      html: '53% użytkowników mobilnych opuszcza stronę, jeśli jej ładowanie trwa dłużej niż 3 sekundy. Współczynnik konwersji spada o 7% na każdą dodatkową sekundę opóźnienia.',
    },
    { type: 'title', text: 'Zrozumienie prędkości połączeń', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>3G:</strong> 0,4 Mbps - powszechne na obszarach wiejskich i w krajach rozwijających się',
        '<strong>4G/LTE:</strong> 10 Mbps - standard w krajach rozwiniętych',
        '<strong>5G:</strong> 100+ Mbps - stopniowo się rozwija, wciąż ograniczony',
      ],
    },
    { type: 'title', text: 'Strategie zmniejszania wagi strony', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>Optymalizacja obrazów:</strong> stanowią 50-80% wagi. Zmniejsz ją o 40-60% za pomocą narzędzi takich jak TinyPNG.',
        '<strong>Minifikacja:</strong> usuń niepotrzebny kod z CSS i JavaScript. Zaoszczędź 30-50%.',
        '<strong>Lazy Loading:</strong> ładuj obrazy tylko wtedy, gdy użytkownik do nich przewinie.',
        '<strong>Pamięć podręczna przeglądarki:</strong> przechowuj pliki statyczne w przeglądarkach użytkowników.',
        '<strong>CDN:</strong> dostarczaj treści z serwerów bliskich geograficznie.',
      ],
    },
    { type: 'title', text: 'Podsumowanie: każda sekunda się liczy', level: 2 },
    {
      type: 'paragraph',
      html: 'Twoja strona internetowa to często pierwsze wrażenie, jakie użytkownicy mają o Twojej marce. Wolna strona frustruje użytkowników i powoduje straty w biznesie. Szybka, responsywna strona tworzy pozytywne doświadczenia i poprawia wszystkie Twoje wskaźniki.',
    },
  ],
};
