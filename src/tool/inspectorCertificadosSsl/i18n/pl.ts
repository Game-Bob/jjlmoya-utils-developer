import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InspectorCertificadosSslUI } from '../ui';

const slug = 'inspektor-certyfikatow-ssl';
const title = 'Online Inspektor Certyfikatów SSL/TLS Wyświetl Pliki PEM i CRT';
const description = 'Analizuj pliki certyfikatów SSL (.pem, .crt, .der) lokalnie. Sprawdzaj daty wygaśnięcia, wystawców, tematy i odciski palców SHA-256 bez opuszczania Twojej przeglądarki.';

const faqData = [
  {
    question: 'Czy bezpieczne jest analizowanie mojego certyfikatu SSL na tej stronie?',
    answer: 'Absolutnie bezpieczne. To narzędzie działa w 100% po stronie klienta. Gdy przeciągniesz plik .pem lub .crt, przeglądarka odczyta dane lokalnie i nigdy nie wyśle ich na żaden serwer. Pełna prywatność.',
  },
  {
    question: 'Jakie formaty certyfikatów są obsługiwane?',
    answer: 'Narzędzie obsługuje najczęstsze formaty: PEM (zakodowany w Base64 z nagłówkami "BEGIN CERTIFICATE") i DER (format binarny), które zazwyczaj mają rozszerzenia .pem, .crt, .cer lub .der.',
  },
  {
    question: 'Czy mogę zobaczyć datę wygaśnięcia pliku .crt?',
    answer: 'Tak, po załadowaniu pliku natychmiast zobaczysz sekcję "Status ważności", która pokazuje dokładną datę wygaśnięcia i czy certyfikat jest dziś jeszcze ważny.',
  },
  {
    question: 'Co robi wydawca certyfikatu?',
    answer: 'Wydawca (Issuer) wskazuje, która Urząd Certyfikacji (CA) zatwierdził tożsamość witryny. Ważne jest wiedzieć, czy certyfikat będzie rozpoznawany przez przeglądarki komercyjne.',
  },
  {
    question: 'Jak obliczane są odciski palców SHA-256?',
    answer: 'Obliczane są poprzez bezpośrednie zastosowanie algorytmu hash do binarnej zawartości certyfikatu. Służą do weryfikacji, że plik nie został zmieniony i jest zgodny z tym, co serwer oczekuje.',
  },
];

const howToData = [
  { name: 'Znajdź swój plik', text: 'Umieść plik z rozszerzeniem .pem, .crt, .cer lub .der na swoim komputerze.' },
  { name: 'Przeciągnij i upuść', text: 'Po prostu przeciągnij plik na area z kropkami powyżej.' },
  { name: 'Wyświetl wyniki', text: 'Od razu zobaczysz, kto wydał certyfikat, dla kogo, kiedy wygasa i jego odciski palców.' },
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

const ui: InspectorCertificadosSslUI = {
  labelAnalyzeCertificate: 'Analizuj certyfikat',
  dragDropText: 'Przeciągnij plik .pem, .crt lub .cer tutaj',
  dragDropSubtext: '(przetwarzanie 100% lokalne w twojej przeglądarce)',
  cardStatusTitle: 'Status ważności',
  cardSubjectTitle: 'Temat (Właściciel)',
  cardIssuerTitle: 'Wydawca (CA)',
  cardFingerprintsTitle: 'Odciski palców',
  cardTechnicalTitle: 'Szczegóły techniczne',
  labelValidityStatus: 'Status:',
  labelExpiryDate: 'Wygasa',
  labelIssueDate: 'Wystawiony',
  labelSha256: 'Odcisk palca SHA-256',
  labelSha1: 'Odcisk palca SHA-1',
  labelSignatureAlgorithm: 'Algorytm podpisu',
  labelVersion: 'Wersja X.509',
  labelSerialNumber: 'Numer seryjny',
  labelCommonName: 'Nazwa pospolitą',
  labelOrganization: 'Organizacja',
  labelOrgUnit: 'Jednostka organizacyjna',
  labelLocality: 'Miejscowość',
  labelState: 'Stan/Prowincja',
  labelCountry: 'Kraj',
  labelEmail: 'Email',
  statusValid: 'Ważny',
  statusExpired: 'Wygasł',
  errorMessageInvalid: 'Nieprawidłowy plik.',
  supportedFormats: '.pem, .crt, .cer, .der',
};

export const content: ToolLocaleContent<InspectorCertificadosSslUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Zasoby techniczne na temat certyfikatów SSL/TLS',
  bibliography: [
    { name: 'RFC 5280: Internet X.509 Public Key Infrastructure Certificate and CRL Profile', url: 'https://datatracker.ietf.org/doc/html/rfc5280' },
    { name: 'NIST: FIPS 180-4 Secure Hash Standard (SHA)', url: 'https://csrc.nist.gov/publications/detail/fips/180/4/final' },
    { name: 'Mozilla: SSL/TLS Encryption Overview', url: 'https://developer.mozilla.org/en-US/docs/Glossary/TLS' },
    { name: 'OpenSSL: X.509 Certificate Format Documentation', url: 'https://www.openssl.org/docs/man1.1.1/man1/x509.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Czym jest inspektor certyfikatów SSL/TLS i dlaczego go potrzebujesz?', level: 2 },
    {
      type: 'paragraph',
      html: 'W świecie tworzenia stron internetowych i cyberbezpieczeństwa <strong>certyfikaty SSL (Secure Sockets Layer) i TLS (Transport Layer Security)</strong> są fundamentem zaufania. Certyfikat cyfrowy to nic innego jak plik łączący klucz kryptograficzny z danymi organizacji lub domeny. Jednak pliki te często występują w formacie binarnym (.der) lub zakodowanym w Base64 (.pem, .crt), które nie są czytelne na pierwszy rzut oka.',
    },
    {
      type: 'paragraph',
      html: 'Nasz <strong>inspektor certyfikatów SSL/TLS</strong> pozwala "otworzyć" te pliki wizualnie i bezpiecznie. W przeciwieństwie do narzędzi, które wysyłają zapytania do domeny publicznej (takich jak sławny test SSL Labs), to narzędzie pracuje bezpośrednio z plikiem na Twoim urządzeniu. Jest to kluczowe, gdy konfigurujesz serwery Nginx, Apache lub ładujesz certyfikaty do AWS lub Google Cloud Load Balancer i musisz zweryfikować, że plik w Twojej ręce jest prawidłowy przed przesłaniem.',
    },
    { type: 'title', text: 'Jak sprawdzić plik .pem lub .crt krok po kroku', level: 2 },
    {
      type: 'paragraph',
      html: 'Analiza certyfikatu za pomocą naszego narzędzia jest niezwykle prosta i nie wymaga znajomości konsoli (OpenSSL). Wykonaj następujące kroki:',
    },
    {
      type: 'list',
      items: [
        '<strong>Znajdź swój plik:</strong> Umieść plik z rozszerzeniem .pem, .crt, .cer lub .der na swoim komputerze.',
        '<strong>Przeciągnij i upuść:</strong> Po prostu przeciągnij plik na area z kropkami powyżej.',
        '<strong>Wyświetl wyniki:</strong> Od razu zobaczysz, kto wydał certyfikat, dla kogo, kiedy wygasa i jego odciski palców.',
      ],
    },
    {
      type: 'tip',
      title: 'Pełna prywatność',
      html: 'Najważniejsza część tego procesu to <strong>prywatność</strong>. Plik nigdy nie jest przesyłany na nasze serwery. Cała analiza struktury ASN.1 certyfikatu odbywa się w pamięci RAM Twojej przeglądarki. Pełne bezpieczeństwo dla Twoich kluczy publicznych.',
    },
    { type: 'title', text: 'Kluczowe pola widoczne podczas analizy certyfikatu', level: 2 },
    {
      type: 'paragraph',
      html: 'Analizując certyfikat, dzielimy najistotniejsze informacje techniczne, abyś mógł je zweryfikować na pierwszy rzut oka:',
    },
    {
      type: 'list',
      items: [
        '<strong>Temat:</strong> Pokazuje dane właściciela, w tym wspólną nazwę (CN), organizację i lokalizację.',
        '<strong>Wydawca:</strong> Identyfikuje Urząd Certyfikacji (CA), który podpisał certyfikat (np. Let\'s Encrypt, DigiCert).',
        '<strong>Okres ważności:</strong> Pokazuje dokładną datę wydania i krytyczną datę wygaśnięcia.',
        '<strong>Odciski palców:</strong> Odciski palców SHA-256 i SHA-1 służą do weryfikacji integralności pliku.',
      ],
    },
    { type: 'title', text: 'Obsługiwane formaty: PEM, CRT, CER i DER', level: 2 },
    {
      type: 'paragraph',
      html: 'Istnieje kilka formatów plików certyfikatów i czasami może to być mylące. Nasze narzędzie jest kompatybilne z najczęstszymi:',
    },
    {
      type: 'list',
      items: [
        '<strong>PEM (.pem, .crt, .cer):</strong> Najpopularniejszy format w systemach Linux i serwerach WWW. Zaczyna się linią <code>-----BEGIN CERTIFICATE-----</code>.',
        '<strong>DER (.der, .cer):</strong> Format binarny. Powszechnie używany w środowiskach Windows (Java, Active Directory) i zwykle trudniej czytelny bez wyspecjalizowanych narzędzi.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Nawet jeśli plik ma niezwykłe rozszerzenie, jeśli struktura wewnętrzna to standardowy certyfikat X.509, nasz silnik napędzany <strong>node-forge</strong> będzie w stanie go zinterpretować bez problemów.',
    },
    { type: 'title', text: 'Dlaczego użyć tego narzędzia zamiast OpenSSL?', level: 2 },
    {
      type: 'paragraph',
      html: 'OpenSSL to szwajcarski scyzoryk kryptografii, ale jego polecenia są trudne do zapamiętania. Aby wyświetlić certyfikat z konsoli, musisz napisać:',
    },
    { type: 'code', text: 'openssl x509 -in certificado.crt -text -noout' },
    {
      type: 'paragraph',
      html: 'Nasze narzędzie oferuje wyraźne korzyści dla codziennego workflow\'u:',
    },
    {
      type: 'list',
      items: [
        '<strong>Szybkość:</strong> Nie ma potrzeby otwierania terminala ani zapamiętywania skomplikowanych flag.',
        '<strong>Wizualne:</strong> Formatujemy nazwy pól (Locality, Organization), aby były czytelne, a nie skrótami takimi jak "L" czy "O".',
        '<strong>Alerty ważności:</strong> Automatycznie obliczamy, czy certyfikat jest dzisiaj ważny, oszczędzając ci ręcznej weryfikacji aktualnej daty z datą certyfikatu.',
        '<strong>Wieloplatformowy:</strong> Działa na dowolnym systemie operacyjnym z nowoczesną przeglądarką, bez żadnych zależności do zainstalowania.',
      ],
    },
    { type: 'title', text: 'Bezpieczeństwo i prywatność: Twój certyfikat nigdy nie opuszcza RAM\'u', level: 2 },
    {
      type: 'paragraph',
      html: 'Jako deweloper wiem, jak krytyczne jest obsługiwanie tego typu informacji. Chociaż certyfikat jest technicznie <strong>informacją publiczną</strong> (wysyłaną do każdej przeglądarki odwiedzającej Twoją witrynę), ciągle jest to dobra praktyka, aby bez konieczności nie przesyłać plików na serwery zewnętrzne.',
    },
    {
      type: 'paragraph',
      html: 'To narzędzie używa JavaScriptu, który działa ściśle po stronie klienta. Gdy przeciągniesz plik, odczytamy jego zawartość i przetwarzamy ją lokalnie. Możesz to zweryfikować, rozłączając internet: narzędzie będzie działać dokładnie tak samo.',
    },
    { type: 'title', text: 'Typowe przypadki użycia inspektora SSL', level: 2 },
    {
      type: 'paragraph',
      html: 'Kiedy dodanie tej strony do zakładek byłoby przydatne?',
    },
    {
      type: 'list',
      items: [
        '<strong>Debugowanie serwera:</strong> Gdy instalujesz certyfikat, a witryna ciągle zgłasza błędy, aby zweryfikować, że przypadkowo nie załadowałeś starego certyfikatu.',
        '<strong>Weryfikacja łańcucha:</strong> Aby sprawdzić, czy plik zawiera certyfikat końcowy czy pośredni.',
        '<strong>Audyt zasobów:</strong> Aby sprawdzić, które Urzędy Certyfikacji zostały użyte w starym projekcie.',
        '<strong>Integralność kopii:</strong> Podczas przenoszenia certyfikatów między serwerami, aby zapewnić, że plik nie jest uszkodzony, porównując jego odcisk SHA-256.',
      ],
    },
  ],
};

