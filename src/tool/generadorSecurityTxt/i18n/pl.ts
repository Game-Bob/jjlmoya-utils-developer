import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { GeneradorSecurityTxtUI } from '../ui';

const slug = 'tworca-security-txt';
const title = 'Generator Security.txt RFC 9116';
const description = 'Utwórz profesjonalny plik security.txt, aby ułatwić raportowanie luk w zabezpieczeniach i zgodzić się z międzynarodowymi standardami bezpieczeństwa sieci Web.';

const faqData = [
  {
    question: 'Czym jest plik security.txt?',
    answer: 'Jest to standard (RFC 9116), który pozwala witrynom definiować sposób, w jaki badacze bezpieczeństwa powinni się z nimi skontaktować, aby odpowiedzialnie zgłaszać luki w zabezpieczeniach.',
  },
  {
    question: 'Gdzie powinien być umieszczony plik security.txt?',
    answer: 'Zalecaną standardową lokalizacją jest folder /.well-known/ Twojej domeny, co skutkuje adresem URL https://example.com/.well-known/security.txt.',
  },
  {
    question: 'Dlaczego data wygaśnięcia jest obowiązkowa?',
    answer: 'Aby zapewnić, że informacje kontaktowe nie staną się przestarzałe. Jeśli plik nie ma prawidłowej daty wygaśnięcia, badacze mogą nie zaufać, że kanały komunikacji pozostają aktywne.',
  },
  {
    question: 'Jakie pola są wymagane w security.txt?',
    answer: 'Zgodnie z RFC 9116 wymagane pola to "Contact" (z adresem e-mail lub URL) i "Expires" (z datą w przyszłości w formacie ISO 8601).',
  },
];

const howToData = [
  { name: 'Wypełnij pola', text: 'Wypełnij adres e-mail lub adres URL kontaktu i wybierz datę wygaśnięcia.' },
  { name: 'Dodaj pola opcjonalne', text: 'Dołącz dodatkowe informacje, takie jak Twój klucz PGP, polityka bezpieczeństwa lub tablica ogłoszeń.' },
  { name: 'Pobierz lub skopiuj plik', text: 'Kliknij "Pobierz .txt" lub skopiuj zawartość i zapisz jako security.txt.' },
  { name: 'Prześlij na serwer', text: 'Umieść plik w folderze /.well-known/ Twojej domeny.' },
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

const ui: GeneradorSecurityTxtUI = {
  titleBasicFields: 'Pola wymagane',
  labelContact: 'Kontakt (adres e-mail lub URL)',
  placeholderContact: 'mailto:security@example.com lub https://example.com/contact',
  contactTip: 'Adres, gdzie powinny być wysyłane raporty o lukach w zabezpieczeniach.',
  labelExpires: 'Data wygaśnięcia',
  expiresTip: 'Nie powinna być dalsza niż rok w przyszłości.',
  titleOptionalFields: 'Pola opcjonalne',
  labelEncryption: 'Klucz publiczny',
  placeholderEncryption: 'https://example.com/pgp-key.txt',
  encryptionTip: 'Łącze do Twojego klucza PGP do szyfrowanych raportów.',
  labelPolicy: 'Polityka bezpieczeństwa',
  placeholderPolicy: 'https://example.com/security/policy/',
  policyTip: 'Strona opisująca sposób obsługi luk w zabezpieczeniach.',
  labelAcknowledgments: 'Podziękowania',
  placeholderAcknowledgments: 'https://example.com/security/hall-of-fame/',
  acknowledgmentsTip: 'Strona dziękująca badaczom bezpieczeństwa.',
  labelHiring: 'Tablica ofert pracy',
  placeholderHiring: 'https://example.com/jobs',
  hiringTip: 'Łącze do ofert pracy w dziedzinie bezpieczeństwa.',
  resultTitle: 'Podgląd(security.txt)',
  btnCopy: 'Skopiuj kod',
  btnDownload: 'Pobierz .txt',
  copiedMessage: 'Skopiowano',
  generatingMessage: 'Generowanie pliku security.txt...',
  comment: 'Wygenerowany',
};

export const content: ToolLocaleContent<GeneradorSecurityTxtUI> = {
  slug,
  title,
  description,
  ui,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  bibliographyTitle: 'Zasoby techniczne na temat Security.txt',
  bibliography: [
    { name: 'RFC 9116: A File Format to Aid in Security Vulnerability Disclosure', url: 'https://datatracker.ietf.org/doc/html/rfc9116' },
    { name: 'Security.txt Official Website', url: 'https://securitytxt.org/' },
    { name: 'OWASP: Vulnerability Disclosure Cheat Sheet', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Czym jest plik Security.txt i dlaczego powinieneś go generować?', level: 2 },
    {
      type: 'paragraph',
      html: 'W dzisiejszym krajobrazie cyberbezpieczeństwa transparentność i komunikacja są niezbędne. Jeśli jesteś administratorem systemu, deweloperem sieci Web lub właścicielem cyfrowej firmy, prawdopodobnie znasz już pliki tekstowe, które pomagają maszynom zrozumieć Twoją witrynę, takie jak <code>robots.txt</code> lub <code>ads.txt</code>. Istnieje jednak mniej znany, ale istotny standard integralności Twojej platformy: <strong>Security.txt</strong>, zdefiniowany przez <strong>RFC 9116</strong>.',
    },
    {
      type: 'paragraph',
      html: 'Celem <strong>wygenerowania pliku security.txt</strong> jest zapewnienie badaczom bezpieczeństwa standaryzowanego sposobu kontaktu z administratorami Twojej witryny po odkryciu luki w zabezpieczeniach. Bez tego pliku etyczny haker, który znajdzie błąd w Twoim systemie, może nie wiedzieć, komu to zgłosić, co często skutkuje stratą informacji, publikacją bez powiadomienia lub exploitacją przez złośliwe podmioty.',
    },
    { type: 'title', text: 'Jak stworzyć i zainstalować plik Security.txt zgodnie z RFC 9116', level: 2 },
    {
      type: 'paragraph',
      html: '<strong>Standard kontaktu badacza bezpieczeństwa</strong> stanowi, że plik musi być w określonej lokalizacji na serwerze: folderze <code>/.well-known/</code>. Ostateczna ścieżka to zazwyczaj <code>https://yourdomain.com/.well-known/security.txt</code>. Chociaż dozwolone jest również umieszczenie go w katalogu głównym (<code>/security.txt</code>), pierwsza opcja jest preferowana przez narzędzia do automatycznego skanowania.',
    },
    { type: 'title', text: 'Pola obowiązkowe, których nie możesz przegapić', level: 3 },
    {
      type: 'paragraph',
      html: 'Kiedy <strong>zdobędziesz kod security.txt</strong>, musisz upewnić się, że zawiera co najmniej dwa krytyczne elementy:',
    },
    {
      type: 'list',
      items: [
        '<strong>Contact:</strong> Adres e-mail lub URL formularza, na który powinny być wysyłane raporty. Musi zaczynać się od <code>mailto:</code> lub <code>https://</code>.',
        '<strong>Expires:</strong> Data w formacie ISO 8601 wskazująca, kiedy informacje w pliku nie są już ważne. Zalecane jest nie ustawianie daty dalej niż rok w przyszłość.',
      ],
    },
    { type: 'code', text: 'Contact: mailto:security@yourcompany.com\nExpires: 2025-12-31T23:59:59.000Z' },
    { type: 'title', text: 'Pola opcjonalne dla zaawansowanego bezpieczeństwa', level: 3 },
    {
      type: 'paragraph',
      html: 'W przypadku witryn szukających bardziej solidnej <strong>ochrony witryny</strong> standard oferuje dodatkowe pola:',
    },
    {
      type: 'list',
      items: [
        '<strong>Encryption:</strong> Link do Twojego publicznego klucza PGP, aby badacze mogli wysłać Ci zaszyfrowane i bezpieczne informacje.',
        '<strong>Policy:</strong> Link do strony polityki bezpieczeństwa, na której wyjaśniasz proces odpowiedzialnego ujawnienia.',
        '<strong>Acknowledgments:</strong> Link do Twojej "Galerii sław" lub ściany uznania dla badaczy.',
        '<strong>Hiring:</strong> Link do Twoich otwartych stanowisk w dziedzinie cyberbezpieczeństwa.',
      ],
    },
    { type: 'title', text: 'Korzyści z używania naszego bezpłatnego generatora Security.txt', level: 2 },
    {
      type: 'paragraph',
      html: 'Wiele osób zastanawia się <strong>jak szybko uzyskać kontakt bezpieczeństwa witryny</strong>. Korzystając z naszego narzędzia, zapewniasz ścisłą zgodność z formatem RFC 9116 bez konieczności czytania złożonych dokumentów technicznych.',
    },
    {
      type: 'paragraph',
      html: 'Korzystanie z generatora pozwala uniknąć typowych błędów składniowych. Na przykład zapomnienie prefiksu <code>mailto:</code> lub nieprawidłowe sformatowanie strefy czasowej w dacie wygaśnięcia może spowodować, że zautomatyzowane narzędzia badaczy będą ignorować Twój plik.',
    },
    { type: 'title', text: 'Wpływ na SEO i reputację sieci', level: 3 },
    {
      type: 'paragraph',
      html: 'Chociaż plik <code>security.txt</code> nie jest bezpośrednim czynnikiem rankingowym w Google, takim jak szybkość strony czy HTTPS, ma pośredni wpływ. Witryna, która dobrze zarządza lukami w zabezpieczeniach, unika hałaśliwych haków (sfałszowania, iniekcji spamu), które niszczą SEO w ciągu godzin. Ponadto wiele korporacyjnych platform oceny bezpieczeństwa (takich jak SecurityScorecard lub BitSight) przyznaje dodatkowe punkty domenom, które implementują ten standard.',
    },
    { type: 'title', text: 'Wniosek: Prosty krok do bezpieczniejszego Internetu', level: 2 },
    {
      type: 'paragraph',
      html: 'Podsumowując, <strong>pobieranie security.txt</strong> i przesyłanie go na serwer jest jednym z najszybszych i najeeffektywniejszych zadań konserwacji bezpieczeństwa, które możesz wykonać dzisiaj. Ułatwiasz "dobrym chłopakom", zniechęcasz ciekawskich i pokazujesz światu, że poważnie traktujesz prywatność użytkowników i dane.',
    },
    {
      type: 'paragraph',
      html: 'Nie czekaj na naruszenie bezpieczeństwa, aby żałować, że tego nie zapewniłeś. Użyj naszego <strong>bezpłatnego generatora security.txt online</strong> teraz i utrzymuj kontrolę nad Twoim ekosystemem cyfrowym.',
    },
  ],
};

