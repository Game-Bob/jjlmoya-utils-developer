import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { JwtDecoderUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'dekoder-jwt-parser-i-inspektor-claims';
const title = 'Dekoder JWT, Parser i Inspektor Claims';
const description = 'Wklej JSON Web Token, natychmiast zdekoduj jego naglowek i payload, sprawdz zarejestrowane claims, wykryj wygasle tokeny i skopiuj czysty JSON do debugowania procesow uwierzytelniania.';

const howTo = [
  {
    name: 'Wklej JWT',
    text: 'Skopiuj token z naglowka Authorization, ciasteczka, wpisu w logu lub dostawcy tozsamosci i wklej go w pole wejsciowe.',
  },
  {
    name: 'Odczytaj odkodowany naglowek i payload',
    text: 'Narzedzie dzieli token na naglowek, payload i podpis, a nastepnie renderuje segmenty JSON w oddzielnych panelach do szybkiej inspekcji.',
  },
  {
    name: 'Sprawdz wazne claims',
    text: 'Przejrzyj algorytm, wystawce, odbiorce, temat, czas wystawienia, czas waznosci od i czas wygasniecia bez recznego przeliczania znacznikow czasu Unix.',
  },
  {
    name: 'Skopiuj potrzebne dane',
    text: 'Skopiuj jedna odkodowana sekcje lub cale odkodowane dane wyjsciowe, gdy potrzebujesz udostepnic oczyszczona migawke debugowania swojemu zespolowi.',
  },
];

const faq = [
  {
    question: 'Czy odkodowanie JWT dowodzi, ze token jest wazny?',
    answer: 'Nie. Odkodowanie ujawnia tylko naglowek i payload zakodowane w base64url. Token jest godny zaufania dopiero po zweryfikowaniu podpisu, wystawcy, odbiorcy, daty wygasniecia i powiazanych claims przez aplikacje lub dostawce tozsamosci.',
  },
  {
    question: 'Czy moge uzywac tego dekodera JWT do access tokenow i ID tokenow?',
    answer: 'Tak. Dekoder jest przydatny do inspekcji access tokenow OAuth, ID tokenow OpenID Connect, tokenow sesyjnych i tokenow service-to-service, o ile uzywaja standardowego trzyczesciowego formatu JWT.',
  },
  {
    question: 'Dlaczego panel podpisu nie weryfikuje tokena?',
    answer: 'Weryfikacja JWT wymaga poprawnego sekretu, klucza publicznego lub konfiguracji JWKS. To narzedzie celowo koncentruje sie na odkodowaniu i inspekcji, aby programisci mogli zobaczyc zawartosc tokena bez udawania, ze widoczny ciag podpisu jest dowodem waznosci.',
  },
  {
    question: 'Co powinienem sprawdzic najpierw podczas debugowania JWT?',
    answer: 'Zacznij od exp, nbf, iss, aud i alg. Wiekszosc rzeczywistych problemow produkcyjnych wynika z wygaslych tokenow, rozbieznosci zegarow, nieprawidlowych wartosci odbiorcy, nieoczekiwanych adresow URL wystawcy lub niebezpiecznych zalozen dotyczacych algorytmu.',
  },
];

const ui: JwtDecoderUI = {
  tokenLabel: 'Token JWT',
  tokenPlaceholder: 'Wklej tutaj JWT: naglowek.payload.podpis',
  sampleButton: 'Wczytaj przyklad',
  clearButton: 'Wyczysc',
  statusWaiting: 'Wklej token, aby odkodowac jego naglowek JSON, payload i claims.',
  statusValid: 'JWT pomyslnie odkodowany.',
  statusInvalid: 'To nie wyglada na poprawny trzyczesciowy JWT.',
  statusExpired: 'JWT odkodowany, ale claim exp jest juz wygasly.',
  statusUnsigned: 'JWT odkodowany, ale nie jest podpisany lub uzywa algorytmu none.',
  headerTitle: 'Naglowek',
  payloadTitle: 'Payload',
  signatureTitle: 'Podpis',
  claimsTitle: 'Zarejestrowane claims',
  copyHeader: 'Kopiuj odkodowany naglowek',
  copyPayload: 'Kopiuj odkodowany payload',
  copySignature: 'Kopiuj podpis',
  copyAll: 'Kopiuj wszystko',
  copiedLabel: 'Skopiowano',
  invalidTokenTitle: 'Nieprawidlowy JWT',
  invalidTokenBody: 'Sprawdz, czy token ma trzy segmenty base64url oddzielone kropkami.',
  invalidSegmentError: 'Sprawdz, czy token ma trzy segmenty base64url oddzielone kropkami.',
  invalidDecodeError: 'Naglowek lub payload nie mogl zostac odkodowany jako prawidlowy JSON.',
  emptyJson: '{}',
  signaturePresent: 'Segment podpisu jest obecny; zweryfikuj go w swojej warstwie uwierzytelniania z poprawnym kluczem.',
  signatureMissing: 'Brak segmentu podpisu',
  algorithmLabel: 'Algorytm',
  typeLabel: 'Typ',
  issuerLabel: 'Wystawca',
  subjectLabel: 'Temat',
  audienceLabel: 'Odbiorca',
  issuedAtLabel: 'Wystawiony',
  notBeforeLabel: 'Wazny od',
  expiresAtLabel: 'Wygasa',
  claimMissing: 'Nieobecny',
  privacyNote: 'Dekodowanie odbywa sie w sesji przegladarki. Nie wklejaj sekretow produkcyjnych do zadnego narzedzia, chyba ze zezwala na to Twoja polityka bezpieczenstwa.',
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
  bibliographyTitle: 'Specyfikacje JWT i odniesienia bezpieczenstwa',
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
  seo: [
    {
      type: 'title',
      text: 'Dekoduj JWT bez utraty kontekstu bezpieczenstwa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'JSON Web Token wyglada na zwarty, ale czesto zawiera dokladnie te szczegoly, ktore wyjasniaja blad uwierzytelniania: algorytm podpisywania, wystawce, odbiorce, temat, czas wystawienia, czas waznosci od, date wygasniecia i claims autoryzacyjne specyficzne dla aplikacji. Ten <strong>dekoder JWT, parser i inspektor claims</strong> przeksztalca trzy segmenty tokena w czytelny JSON, dzieki czemu mozesz szybciej debugowac procesy uwierzytelniania.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Odkodowany nie oznacza zaufany',
      html: 'Kazdy moze zdekodowac JWT za pomoca base64url. Zaufanie zaczyna sie dopiero po zweryfikowaniu podpisu przez aplikacje przy uzyciu poprawnego sekretu, klucza publicznego lub JWKS, a nastepnie zwalidowaniu wystawcy, odbiorcy, daty wygasniecia i wszelkich claims specyficznych dla domeny. Uzywaj tego narzedzia do inspekcji danych, a nie do uznawania tokena za autentyczny.',
    },
    {
      type: 'title',
      text: 'Co mowi kazdy segment JWT',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Segment', 'Typowa zawartosc', 'Wartosc debugowania'],
      rows: [
        ['Naglowek', 'Algorytm, typ tokena i opcjonalny identyfikator klucza', 'Pokazuje, czy token oczekuje HS256, RS256, ES256 lub innej strategii weryfikacji.'],
        ['Payload', 'Zarejestrowane claims i claims aplikacji', 'Ujawnia tozsamosc, dzierzawe, zakresy, role, wygasniecie i niezgodnosci odbiorcy.'],
        ['Podpis', 'Bajty podpisu kryptograficznego zakodowane jako base64url', 'Potwierdza, ze segment podpisu istnieje, ale musi zostac zweryfikowany z odpowiednim kluczem w innym miejscu.'],
      ],
    },
    {
      type: 'title',
      text: 'Claims, ktore zwykle wyjasniaja nieudane uwierzytelnianie',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>exp:</strong> jesli token wygasl, logika odswiezania lub ustawienia zegara moga byc nieprawidlowe.',
        '<strong>nbf:</strong> jesli token nie jest jeszcze aktywny, zegary serwera i dostawcy tozsamosci moga byc rozsynchronizowane.',
        '<strong>iss:</strong> jesli adres URL wystawcy rozni sie od konfiguracji, token moze pochodzic z niewlasciwej dzierzawy lub srodowiska.',
        '<strong>aud:</strong> jesli odbiorca nie pasuje do identyfikatora API, token zostal wybity dla innego zasobu.',
        '<strong>alg:</strong> jesli algorytm jest nieoczekiwany, weryfikator moze odrzucic token lub ujawnic niebezpieczny blad konfiguracji.',
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
          description: 'Sprawdzaj ID tokeny i access tokeny otrzymane po zalogowaniu, aby potwierdzic zakresy, role i claims profilu.',
          icon: 'mdi:monitor-dashboard',
          points: ['Sprawdz claims profilu', 'Potwierdz zakresy i role', 'Porownaj srodowiska logowania'],
        },
        {
          title: 'QA API backendu',
          description: 'Porownaj oczekiwane wartosci wystawcy i odbiorcy z tokenem faktycznie wyslanym w naglowku Authorization.',
          icon: 'mdi:api',
          highlight: true,
          points: ['Zweryfikuj ksztalt odbiorcy', 'Wykryj niezgodnosci wystawcy', 'Sprawdz bearer tokeny'],
        },
        {
          title: 'Konfiguracja dostawcy tozsamosci',
          description: 'Sprawdz, czy claims z Auth0, Azure AD, Cognito, Keycloak lub niestandardowego dostawcy sa uksztaltowane zgodnie z oczekiwaniami aplikacji.',
          icon: 'mdi:account-key',
          points: ['Przejrzyj dane dzierzawcy', 'Sprawdz niestandardowe claims', 'Porownaj mapowania dostawcow'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Typowe bledy JWT, ktore ten inspektor uwidacznia',
      level: 3,
    },
    {
      type: 'proscons',
      title: 'Szybkie kontrole a decyzje o zaufaniu',
      items: [
        {
          pro: 'Natychmiast zobacz nieprawidlowo sformulowane tokeny.',
          con: 'Nie moze znac oczekiwanego odbiorcy ani wystawcy.',
        },
        {
          pro: 'Konwertuj claims ze znacznikami czasu Unix na czytelne daty.',
          con: 'Nie moze zweryfikowac podpisu bez rzeczywistego materialu klucza.',
        },
        {
          pro: 'Wykryj brakujace wartosci wystawcy, odbiorcy, tematu lub typu.',
          con: 'Nie moze udowodnic, ze zakresy i role sa bezpieczne dla Twojej aplikacji.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Najlepsze praktyki pracy',
      items: [
        'Odkoduj token, aby zrozumiec, co klient lub API faktycznie otrzymalo.',
        'Sprawdz exp, nbf, iss, aud, sub i alg przed analiza logiki aplikacji.',
        'Weryfikuj podpisy i decyzje o zaufaniu tylko w warstwie uwierzytelniania.',
        'Unikaj udostepniania wrazliwych produkcyjnych JWT w zgloszeniach, logach lub zrzutach ekranu.',
      ],
    },
  ],
};
