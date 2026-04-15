import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HashGeneratorUI } from '../ui';

const slug = 'generator-hash';
const title = 'Internetowy Generator Hashy Bezpieczeństwa';
const description = 'Natychmiastowo obliczaj hashe MD5, SHA-1, SHA-256 i SHA-512. Bezpłatne, prywatne i ultra-szybkie narzędzie bezpieczeństwa dla programistów. 100% po stronie klienta.';

const faqData = [
  {
    question: 'Co to jest hash i do czego służy?',
    answer: 'Hash to unikalny cyfrowy odcisk palca tekstu lub pliku. Służy do weryfikacji, czy dane nie zostały sfałszowane, oraz do bezpiecznego przechowywania haseł.',
  },
  {
    question: 'Czy korzystanie z tego generatora online jest bezpieczne?',
    answer: 'Tak, jest to całkowicie bezpieczne. W przeciwieństwie do innych witryn, przetwarzamy hash bezpośrednio w Twojej przeglądarce. Twoje dane nigdy nie są wysyłane na żaden serwer.',
  },
  {
    question: 'Który algorytm hash wybrać?',
    answer: 'W przypadku nowoczesnych zabezpieczeń i przechowywania kluczy zalecamy SHA-256 lub SHA-512. MD5 i SHA-1 powinny być używane tylko w celu zapewnienia kompatybilności ze starszymi systemami.',
  },
  {
    question: "Co oznacza dodanie 'soli' (Salt)?",
    answer: 'Sól to dodatkowy ciąg znaków zmieszany z tekstem, aby uczynić hash unikalnym i znacznie trudniejszym do złamania za pomocą ataków słownikowych.',
  },
];

const howToData = [
  { name: 'Wprowadź tekst', text: 'Wpisz lub wklej tekst, z którego chcesz utworzyć hash, w polu wejściowym.' },
  { name: 'Skonfiguruj bezpieczeństwo', text: 'Dodaj opcjonalną sól lub zwiększ liczbę rund przetwarzania, aby uzyskać większą solidność.' },
  { name: 'Pobierz wyniki', text: 'Różne hashe (MD5, SHA itp.) są obliczane w czasie rzeczywistym podczas pisania.' },
  { name: 'Skopiuj hash', text: 'Kliknij ikonę kopiowania obok każdego algorytmu, aby zapisać go w schowku.' },
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

const ui: HashGeneratorUI = {
  labelInput: 'Tekst wejściowy',
  placeholderInput: 'Wpisz lub wklej tekst tutaj, aby obliczyć jego hashe...',
  labelSalt: 'Sól (opcjonalnie)',
  placeholderSalt: 'Ziarno bezpieczeństwa...',
  labelRounds: 'Rundy (Stretch)',
  copyMd5: 'Kopiuj MD5',
  copySha1: 'Kopiuj SHA-1',
  copySha256: 'Kopiuj SHA-256',
  copySha512: 'Kopiuj SHA-512',
};

export const content: ToolLocaleContent<HashGeneratorUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Zasoby techniczne dotyczące hashowania',
  bibliography: [
    { name: 'MDN Web Docs: SubtleCrypto.digest() API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'IETF: The MD5 Message-Digest Algorithm (RFC 1321)', url: 'https://datatracker.ietf.org/doc/html/rfc1321' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Co to jest kryptograficzny hash?', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>Kryptograficzny hash</strong> to funkcja matematyczna, która przekształca dowolną ilość danych w ciąg o stałej długości. Te same dane wejściowe zawsze dają ten sam wynik, ale każda, nawet minimalna zmiana w danych wejściowych generuje całkowicie inny hash.',
    },
    { type: 'title', text: 'Dostępne algorytmy', level: 3 },
    {
      type: 'list',
      items: [
        '<strong>MD5 (128 bitów):</strong> Szybki i szeroko wspierany. Uważany za niebezpieczny dla haseł, ale przydatny do sprawdzania integralności plików w środowiskach o niskim stopniu krytyczności.',
        '<strong>SHA-1 (160 bitów):</strong> Od 2017 r. wycofany z krytycznych zastosowań związanych z bezpieczeństwem. Wciąż obecny w starszych systemach.',
        '<strong>SHA-256 (256 bitów):</strong> Obecny standard dla większości aplikacji. Stosowany w Bitcoinie, TLS i podpisywaniu kodu.',
        '<strong>SHA-512 (512 bitów):</strong> Dłuższy wariant SHA-2, idealny, gdy wymagana jest maksymalna odporność na kolizje.',
      ],
    },
    { type: 'title', text: 'Sól i Key Stretching', level: 3 },
    {
      type: 'paragraph',
      html: '<strong>Sól</strong> to losowy ciąg znaków dodawany do tekstu przed hashowaniem, co gwarantuje, że dwa identyczne wejścia wygenerują różne hashe. <strong>Key Stretching</strong> (rundy) stosuje funkcję hash wielokrotnie, aby utrudnić ataki typu brute-force.',
    },
    { type: 'title', text: 'Całkowita prywatność: 100% po stronie klienta', level: 3 },
    {
      type: 'paragraph',
      html: 'To narzędzie wykorzystuje przeglądarkowe API <strong>Web Crypto</strong> dla SHA oraz czystą implementację TypeScript dla MD5. Całe przetwarzanie odbywa się lokalnie: Twoje dane nigdy nie opuszczają Twojego urządzenia.',
    },
  ],
};
