import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JwtDecoderUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'dekoder-jwt-parser-i-inspektor-claims';
const title = 'Dekoder JWT, Parser i Inspektor Claims';
const description = 'Wklej JSON Web Token, natychmiast zdekoduj jego nagłówek i payload, sprawdź zarejestrowane claims, wykryj wygasłe tokeny i skopiuj czysty JSON do debugowania procesów uwierzytelniania.';

const howTo = [
  {
    name: 'Wklej JWT',
    text: 'Skopiuj token z nagłówka Authorization, ciasteczka, wpisu w logu lub dostawcy tożsamości i wklej go w pole wejściowe.',
  },
  {
    name: 'Odczytaj odkodowany nagłówek i payload',
    text: 'Narzędzie dzieli token na nagłówek, payload i podpis, a następnie renderuje segmenty JSON w oddzielnych panelach do szybkiej inspekcji.',
  },
  {
    name: 'Sprawdź ważne claims',
    text: 'Przejrzyj algorytm, wystawcę, odbiorcę, temat, czas wystawienia, czas ważności od i czas wygaśnięcia bez ręcznego przeliczania znaczników czasu Unix.',
  },
  {
    name: 'Skopiuj potrzebne dane',
    text: 'Skopiuj jedną odkodowaną sekcję lub całe odkodowane dane wyjściowe, gdy potrzebujesz udostępnić oczyszczoną migawkę debugowania swojemu zespołowi.',
  },
];

const faq = [
  {
    question: 'Czy odkodowanie JWT dowodzi, że token jest ważny?',
    answer: 'Nie. Odkodowanie ujawnia tylko nagłówek i payload zakodowane w base64url. Token jest godny zaufania dopiero po zweryfikowaniu podpisu, wystawcy, odbiorcy, daty wygaśnięcia i powiązanych claims przez aplikację lub dostawcę tożsamości.',
  },
  {
    question: 'Czy mogę używać tego dekodera JWT do access tokenów i ID tokenów?',
    answer: 'Tak. Dekoder jest przydatny do inspekcji access tokenów OAuth, ID tokenów OpenID Connect, tokenów sesyjnych i tokenów service-to-service, o ile używają standardowego trzyczęściowego formatu JWT.',
  },
  {
    question: 'Dlaczego panel podpisu nie weryfikuje tokena?',
    answer: 'Weryfikacja JWT wymaga poprawnego sekretu, klucza publicznego lub konfiguracji JWKS. To narzędzie celowo koncentruje się na odkodowaniu i inspekcji, aby programiści mogli zobaczyć zawartość tokena bez udawania, że widoczny ciąg podpisu jest dowodem ważności.',
  },
  {
    question: 'Co powinienem sprawdzić najpierw podczas debugowania JWT?',
    answer: 'Zacznij od exp, nbf, iss, aud i alg. Większość rzeczywistych problemów produkcyjnych wynika z wygasłych tokenów, rozbieżności zegarów, nieprawidłowych wartości odbiorcy, nieoczekiwanych adresów URL wystawcy lub niebezpiecznych założeń dotyczących algorytmu.',
  },
];

const ui: JwtDecoderUI = {
  tokenLabel: 'Token JWT',
  tokenPlaceholder: 'Wklej tutaj JWT: nagłówek.payload.podpis',
  sampleButton: 'Wczytaj przykład',
  clearButton: 'Wyczyść',
  statusWaiting: 'Wklej token, aby odkodować jego nagłówek JSON, payload i claims.',
  statusValid: 'JWT pomyślnie odkodowany.',
  statusInvalid: 'To nie wygląda na poprawny trzyczęściowy JWT.',
  statusExpired: 'JWT odkodowany, ale claim exp jest już wygasły.',
  statusUnsigned: 'JWT odkodowany, ale nie jest podpisany lub używa algorytmu none.',
  headerTitle: 'Nagłówek',
  payloadTitle: 'Payload',
  signatureTitle: 'Podpis',
  claimsTitle: 'Zarejestrowane claims',
  copyHeader: 'Kopiuj odkodowany nagłówek',
  copyPayload: 'Kopiuj odkodowany payload',
  copySignature: 'Kopiuj podpis',
  copyAll: 'Kopiuj wszystko',
  copiedLabel: 'Skopiowano',
  invalidTokenTitle: 'Nieprawidłowy JWT',
  invalidTokenBody: 'Sprawdź, czy token ma trzy segmenty base64url oddzielone kropkami.',
  invalidSegmentError: 'Sprawdź, czy token ma trzy segmenty base64url oddzielone kropkami.',
  invalidDecodeError: 'Nagłówek lub payload nie mógł zostać odkodowany jako prawidłowy JSON.',
  emptyJson: '{}',
  signaturePresent: 'Segment podpisu jest obecny; zweryfikuj go w swojej warstwie uwierzytelniania z poprawnym kluczem.',
  signatureMissing: 'Brak segmentu podpisu',
  algorithmLabel: 'Algorytm',
  typeLabel: 'Typ',
  issuerLabel: 'Wystawca',
  subjectLabel: 'Temat',
  audienceLabel: 'Odbiorca',
  issuedAtLabel: 'Wystawiony',
  notBeforeLabel: 'Ważny od',
  expiresAtLabel: 'Wygasa',
  claimMissing: 'Nieobecny',
  privacyNote: 'Dekodowanie odbywa się w sesji przeglądarki. Nie wklejaj sekretów produkcyjnych do żadnego narzędzia, chyba że zezwala na to Twoja polityka bezpieczeństwa.',
  sampleToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJnYW1lYm9iLXVzZXItNDIiLCJuYW1lIjoiR2FtZUJvYiBEZXZlbG9wZXIiLCJpc3MiOiJodHRwczovL3d3dy5nYW1lYm9iLmRldiIsImF1ZCI6ImRldmVsb3Blci10b29scyIsImlhdCI6MTcxNzIwMDAwMCwibmJmIjoxNzE3MjAwMDAwLCJleHAiOjE4OTM0NTYwMDAsInJvbGUiOiJhZG1pbiJ9.demo-signature',
};

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step, index) => ({
    '@type': 'HowToStep',
    position: index + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
};

export const content: ToolLocaleContent<JwtDecoderUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'FAQ dekodera JWT',
  faq,
  bibliographyTitle: 'Specyfikacje JWT i odniesienia bezpieczeństwa',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Dekoduj JWT bez utraty kontekstu bezpieczeństwa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'JSON Web Token wygląda na zwarty, ale często zawiera dokładnie te szczegóły, które wyjaśniają błąd uwierzytelniania: algorytm podpisywania, wystawcę, odbiorcę, temat, czas wystawienia, czas ważności od, datę wygaśnięcia i claims autoryzacyjne specyficzne dla aplikacji. Ten <strong>dekoder JWT, parser i inspektor claims</strong> przekształca trzy segmenty tokena w czytelny JSON, dzięki czemu możesz szybciej debugować procesy uwierzytelniania.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Odkodowany nie oznacza zaufany',
      html: 'Każdy może zdekodować JWT za pomocą base64url. Zaufanie zaczyna się dopiero po zweryfikowaniu podpisu przez aplikację przy użyciu poprawnego sekretu, klucza publicznego lub JWKS, a następnie zwalidowaniu wystawcy, odbiorcy, daty wygaśnięcia i wszelkich claims specyficznych dla domeny. Używaj tego narzędzia do inspekcji danych, a nie do uznawania tokena za autentyczny.',
    },
    {
      type: 'title',
      text: 'Co mówi każdy segment JWT',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Segment', 'Typowa zawartość', 'Wartość debugowania'],
      rows: [
        ['Nagłówek', 'Algorytm, typ tokena i opcjonalny identyfikator klucza', 'Pokazuje, czy token oczekuje HS256, RS256, ES256 lub innej strategii weryfikacji.'],
        ['Payload', 'Zarejestrowane claims i claims aplikacji', 'Ujawnia tożsamość, dzierżawę, zakresy, role, wygaśnięcie i niezgodności odbiorcy.'],
        ['Podpis', 'Bajty podpisu kryptograficznego zakodowane jako base64url', 'Potwierdza, że segment podpisu istnieje, ale musi zostać zweryfikowany z odpowiednim kluczem w innym miejscu.'],
      ],
    },
    {
      type: 'title',
      text: 'Claims, które zwykle wyjaśniają nieudane uwierzytelnianie',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>exp:</strong> jeśli token wygasł, logika odświeżania lub ustawienia zegara mogą być nieprawidłowe.',
        '<strong>nbf:</strong> jeśli token nie jest jeszcze aktywny, zegary serwera i dostawcy tożsamości mogą być rozsynchronizowane.',
        '<strong>iss:</strong> jeśli adres URL wystawcy różni się od konfiguracji, token może pochodzić z niewłaściwej dzierżawy lub środowiska.',
        '<strong>aud:</strong> jeśli odbiorca nie pasuje do identyfikatora API, token został wybity dla innego zasobu.',
        '<strong>alg:</strong> jeśli algorytm jest nieoczekiwany, weryfikator może odrzucić token lub ujawnić niebezpieczny błąd konfiguracji.',
      ],
    },
    {
      type: 'title',
      text: 'Zastosowania parsera JWT podczas programowania',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Debugowanie frontendu',
          description: 'Sprawdzaj ID tokeny i access tokeny otrzymane po zalogowaniu, aby potwierdzić zakresy, role i claims profilu.',
          icon: 'mdi:monitor-dashboard',
          points: ['Sprawdź claims profilu', 'Potwierdź zakresy i role', 'Porównaj środowiska logowania'],
        },
        {
          title: 'QA API backendu',
          description: 'Porównaj oczekiwane wartości wystawcy i odbiorcy z tokenem faktycznie wysłanym w nagłówku Authorization.',
          icon: 'mdi:api',
          highlight: true,
          points: ['Zweryfikuj kształt odbiorcy', 'Wykryj niezgodności wystawcy', 'Sprawdź bearer tokeny'],
        },
        {
          title: 'Konfiguracja dostawcy tożsamości',
          description: 'Sprawdź, czy claims z Auth0, Azure AD, Cognito, Keycloak lub niestandardowego dostawcy są ukształtowane zgodnie z oczekiwaniami aplikacji.',
          icon: 'mdi:account-key',
          points: ['Przejrzyj dane dzierżawcy', 'Sprawdź niestandardowe claims', 'Porównaj mapowania dostawców'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Typowe błędy JWT, które ten inspektor uwidacznia',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Szybkie kontrole a decyzje o zaufaniu',
      items: [
        {
          pro: 'Natychmiast zobacz nieprawidłowo sformułowane tokeny.',
          con: 'Nie może znać oczekiwanego odbiorcy ani wystawcy.',
        },
        {
          pro: 'Konwertuj claims ze znacznikami czasu Unix na czytelne daty.',
          con: 'Nie może zweryfikować podpisu bez rzeczywistego materiału klucza.',
        },
        {
          pro: 'Wykryj brakujące wartości wystawcy, odbiorcy, tematu lub typu.',
          con: 'Nie może udowodnić, że zakresy i role są bezpieczne dla Twojej aplikacji.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Najlepsze praktyki pracy',
      items: [
        'Odkoduj token, aby zrozumieć, co klient lub API faktycznie otrzymało.',
        'Sprawdź exp, nbf, iss, aud, sub i alg przed analizą logiki aplikacji.',
        'Weryfikuj podpisy i decyzje o zaufaniu tylko w warstwie uwierzytelniania.',
        'Unikaj udostępniania wrażliwych produkcyjnych JWT w zgłoszeniach, logach lub zrzutach ekranu.',
      ],
    },
  ],
};
