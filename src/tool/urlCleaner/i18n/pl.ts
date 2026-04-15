import type { WithContext, FAQPage, HowToThing, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { UrlCleanerUI } from '../ui';

const slug = 'usuniecie-sledzenia-url';
const title = 'Czyścic Śledzenia URL: Usuń UTM, FBCLID i GCLID';
const description = 'Automatycznie usuwaj parametry śledzenia i reklamy z Twoich adresów URL. Udostępniaj czyste linki i natychmiast chroń swoją cyfrową prywatność.';

const faqData = [
  { question: 'Jakie typy parametrów śledzenia to narzędzie usuwa?', answer: 'Nasze narzędzie automatycznie wykrywa i usuwa najczęstsze parametry śledzenia, w tym UTM (utm_source, utm_medium itp.), identyfikatory kliknięcia reklamy (fbclid, gclid, msclkid) oraz identyfikatory kampanii marketingu e-mailowego (mc_cid, _hsenc).' },
  { question: 'Czy wpływa to na funkcjonalność witryny?', answer: 'Generalnie nie. Te parametry są używane prawie wyłącznie do analizy i marketingu. Kiedy je usuniesz, strona będzie ładować się normalnie, ale właściciel witryny nie będzie mógł śledzić dokładne źródło Twojego kliknięcia.' },
  { question: 'Czy jest bezpiecznie przetwarzać tutaj moje linki?', answer: 'Bezwzględnie. Jak wszystkie nasze narzędzia, proces jest 100% po stronie klienta. Twoje linki nigdy nie są wysyłane na nasze serwery; wszystko dzieje się prywatnie w Twojej własnej przeglądarce.' },
  { question: 'Dlaczego moje linki facebookowe są takie długie?', answer: 'Facebook dodaje parametr zwany "fbclid" do wszystkich linków opuszczających ich platformę. To pozwala im śledzić Twoją aktywność na innych stronach, nawet jeśli masz zablokowane ogłoszenia osób trzecich.' },
];

const howToData = [
  { name: 'Wklej swój adres URL', text: 'Wprowadź kompletny adres URL, który zawiera parametry śledzenia' },
  { name: 'Kliknij Wyczyść', text: 'Narzędzie automatycznie przeanalizuje adres URL' },
  { name: 'Przejrzyj wyniki', text: 'Zobaczysz czysty adres URL i listę usuniętych parametrów' },
  { name: 'Kopiuj i udostępniaj', text: 'Używaj czystego adresu URL w swoich wiadomościach e-mail, mediach społecznych lub wiadomościach' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowToThing> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howToData.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'pl' };

const ui: UrlCleanerUI = { labelInput: 'Wklej adres URL z parametrami śledzenia', btnClean: 'Wyczyść', labelCleaned: 'Czysty Adres URL', labelRemoved: 'Usunięte Trackery', countLabel: 'Usunięte parametry', reductionLabel: 'Redukcja długości', noneDetected: 'Nie wykryto wspólnych parametrów śledzenia.', errorInvalid: 'Proszę wprowadzić prawidłowy adres URL.', btnCopy: 'Kopiuj', btnCopied: 'Skopiowano', };

export const content: ToolLocaleContent<UrlCleanerUI> = { slug, title, description, ui, faqTitle: 'Często Zadawane Pytania', faq: faqData, bibliographyTitle: 'Zasoby Dotyczące Prywatności i Śledzenia Sieciowego', bibliography: [{ name: 'Electronic Frontier Foundation (EFF): Guide to Online Tracking', url: 'https://www.eff.org/issues/online-behavioral-tracking' }, { name: 'Google Analytics: UTM Parameter Documentation', url: 'https://support.google.com/analytics/answer/1033863' }, { name: 'Web Privacy: The Impact of Click IDs', url: 'https://www.w3.org/community/web-advertising/wiki/Click_Identifiers' }], howTo: howToData, schemas: [faqSchema, howToSchema, appSchema], seo: [{ type: 'title', text: 'Czyścic Śledzenia URL: Usuń UTM, FBCLID i GCLID', level: 2 }, { type: 'paragraph', html: 'Usuń niewidoczne trackery ze swoich linków, aby dzielić się nimi czyszczę, prywatnie i profesjonalnie. Odkryj, co oznaczają te dziwne kody w Twoich adresach URL.' }, { type: 'title', text: 'Co to jest Czyszczący Śledzenia URL i po co ci jest potrzebny?', level: 3 }, { type: 'paragraph', html: 'Kiedykolwiek skopiowałeś link do wysłania do przyjaciela i zdałeś sobie sprawę, że jest trzy razy dłuższy, niż powinien być? Ten dodatkowy "szum" to parametry śledzenia. <strong>Czyszczący śledzenia</strong> to narzędzie przeznaczone do "rozdzielania" adresu URL ze wszystkich informacji o reklamie i śledzieniu, które duże platformy wstrzykują do każdego kliknięcia, które wykonujesz.' }, { type: 'title', text: 'Najczęstsze parametry śledzenia', level: 3 }, { type: 'list', items: ['<strong>UTM (Google Analytics):</strong> utm_source, utm_medium, utm_campaign do śledzenia kampanii', '<strong>FBCLID:</strong> Identyfikator kliknięcia facebooka aby ominąć ograniczenia plików cookie', '<strong>GCLID / DCLID:</strong> Identyfikator kliknięcia Google do łączenia wizyt z kampaniami Google Ads', '<strong>MSCLKID:</strong> Identyfikator kliknięcia Microsoft Advertising i Bing', '<strong>HubSpot i Mailchimp:</strong> Parametry automatyzacji marketingu, takie jak _hsenc, mc_cid', '<strong>LinkedIn i Inne:</strong> li_fat_id i inne trackery mediów społecznych'] }] };
